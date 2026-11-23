import { EventEmitter } from "node:events";
import https from "node:https";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CertificateCache, fetchCertificate } from "./certificate";

const certUrl = "https://sns.us-east-1.amazonaws.com/cert.pem";

describe(CertificateCache.name, () => {
  it("shares one cache entry across URL fragments", async () => {
    const fetcher = vi.fn(() => Promise.resolve("PEM"));
    const cache = new CertificateCache(fetcher, 1_000);

    await cache.get(`${certUrl}#a`);
    await cache.get(`${certUrl}#b`);
    await cache.get(certUrl);

    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(fetcher).toHaveBeenCalledWith(certUrl, 1_000);
  });
});

describe(fetchCertificate.name, () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("rejects when the request exceeds the deadline", async () => {
    vi.useFakeTimers();
    const req = Object.assign(new EventEmitter(), {
      destroy: vi.fn((err: Error) => req.emit("error", err)),
    });
    vi.spyOn(https, "get").mockReturnValue(req as never);

    const result = fetchCertificate(certUrl, 10_000);
    const assertion = expect(result).rejects.toThrow("Certificate could not be retrieved");

    await vi.advanceTimersByTimeAsync(9_999);
    expect(req.destroy).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);
    expect(req.destroy).toHaveBeenCalledTimes(1);
    await assertion;
  });

  describe("with a mocked response", () => {
    function mockGet(statusCode: number, emit: (res: EventEmitter) => void) {
      const req = Object.assign(new EventEmitter(), { destroy: vi.fn() });
      const res = Object.assign(new EventEmitter(), { statusCode, resume: vi.fn() });
      vi.spyOn(https, "get").mockImplementation(((_url: string, cb: (r: unknown) => void) => {
        queueMicrotask(() => {
          cb(res);
          emit(res);
        });
        return req;
      }) as never);
      return { req, res };
    }

    const limit = 64 * 1024;

    it("resolves a body of exactly the size limit", async () => {
      mockGet(200, (res) => {
        res.emit("data", Buffer.alloc(limit, "a"));
        res.emit("end");
      });
      await expect(fetchCertificate(certUrl, 1_000)).resolves.toHaveLength(limit);
    });

    it("rejects and aborts a body one byte over the size limit", async () => {
      const { req } = mockGet(200, (res) => {
        res.emit("data", Buffer.alloc(limit + 1, "a"));
        res.emit("end");
      });
      await expect(fetchCertificate(certUrl, 1_000)).rejects.toThrow("Certificate could not be retrieved");
      expect(req.destroy).toHaveBeenCalled();
    });

    it("counts bytes across chunks", async () => {
      const { req } = mockGet(200, (res) => {
        res.emit("data", Buffer.alloc(limit, "a"));
        res.emit("data", Buffer.alloc(1, "a"));
      });
      await expect(fetchCertificate(certUrl, 1_000)).rejects.toThrow("Certificate could not be retrieved");
      expect(req.destroy).toHaveBeenCalled();
    });

    it("counts bytes rather than characters for multibyte bodies", async () => {
      // 3 bytes per character, so 21_846 characters is 65_538 bytes.
      mockGet(200, (res) => {
        res.emit("data", Buffer.from("€".repeat(21_846)));
        res.emit("end");
      });
      await expect(fetchCertificate(certUrl, 1_000)).rejects.toThrow("Certificate could not be retrieved");
    });

    it("decodes a multibyte character split across chunks", async () => {
      const bytes = Buffer.from("€");
      mockGet(200, (res) => {
        res.emit("data", bytes.subarray(0, 1));
        res.emit("data", bytes.subarray(1));
        res.emit("end");
      });
      await expect(fetchCertificate(certUrl, 1_000)).resolves.toEqual("€");
    });

    it("rejects a non-200 response and drains it", async () => {
      const { res } = mockGet(404, () => {});
      await expect(fetchCertificate(certUrl, 1_000)).rejects.toThrow("Certificate could not be retrieved");
      expect(res.resume).toHaveBeenCalled();
    });

    it("rejects on a request error and keeps the cause", async () => {
      const cause = new Error("ECONNRESET");
      const req = Object.assign(new EventEmitter(), { destroy: vi.fn() });
      vi.spyOn(https, "get").mockImplementation((() => {
        queueMicrotask(() => req.emit("error", cause));
        return req;
      }) as never);
      await expect(fetchCertificate(certUrl, 1_000)).rejects.toMatchObject({
        message: "Certificate could not be retrieved",
        cause,
      });
    });
  });
});
