import { formatUrl } from "@aws-sdk/core/util";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { loadConfig } from "@smithy/core/config";
import { HttpRequest } from "@smithy/core/protocols";
import { SignatureV4 } from "@smithy/signature-v4";
import { beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import type { SignerConfig } from "./Signer";
import { Signer } from "./Signer";

const mockPresign = vi.fn();
vi.mock("@smithy/signature-v4", function () {
  return {
    SignatureV4: vi.fn(function () {
      return { presign: mockPresign };
    }),
  };
});

vi.mock("@smithy/core/config");
vi.mock("@aws-sdk/credential-providers");
vi.mock("@aws-sdk/core/util");

describe("rds-signer", () => {
  const minimalParams: SignerConfig = {
    username: "testuser",
    hostname: "https://testhost",
    port: 5432,
  };

  beforeAll(() => {
    vi.mocked(formatUrl).mockReturnValue("https://testhost:5432?other=url&parameters=here");
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should provide correct parameters to the SigV4 signer", async () => {
    const credentials = {
      accessKeyId: "xyz",
      secretAccessKey: "123",
    };
    vi.mocked(loadConfig).mockReturnValue(async () => "us-foo-1");
    vi.mocked(fromNodeProviderChain).mockReturnValue(async () => credentials);
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    //@ts-ignore
    expect(SignatureV4.mock.calls[0][0].service).toEqual("rds-db");
    //@ts-ignore
    expect(await SignatureV4.mock.calls[0][0].region()).toEqual("us-foo-1");
    //@ts-ignore
    expect(await SignatureV4.mock.calls[0][0].credentials()).toEqual(credentials);
  });

  it("should use supplied credentials if present", async () => {
    const signer = new Signer({
      ...minimalParams,
      credentials: {
        accessKeyId: "123",
        secretAccessKey: "xyz",
      },
    });
    await signer.getAuthToken();
    //@ts-ignore
    expect(SignatureV4.mock.calls[0][0].credentials).toEqual({
      accessKeyId: "123",
      secretAccessKey: "xyz",
    });
  });

  it("should call SigV4 presign with a valid HttpRequest", async () => {
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    expect(mockPresign).toBeCalledTimes(1);
    expect(mockPresign).toBeCalledWith(
      new HttpRequest({
        method: "GET",
        protocol: "https:",
        hostname: "https://testhost",
        port: 5432,
        query: {
          Action: "connect",
          DBUser: "testuser",
        },
        headers: {
          host: "https://testhost:5432",
        },
      }),
      {
        expiresIn: 900,
      }
    );
  });

  it("should format the resulting presigned url", async () => {
    const signer = new Signer(minimalParams);
    await signer.getAuthToken();
    expect(formatUrl).toBeCalledTimes(1);
  });

  it("should remove the protocol from the presigned url", async () => {
    const signer = new Signer(minimalParams);
    const token = await signer.getAuthToken();
    expect(token).toBe("testhost:5432?other=url&parameters=here");
  });

  describe("credential refresh wrapper", () => {
    it("should not force refresh when credentials have no expiration", async () => {
      const provider = vi.fn().mockResolvedValue({
        accessKeyId: "key",
        secretAccessKey: "secret",
      });
      const signer = new Signer({ ...minimalParams, credentials: provider });
      await signer.getAuthToken();
      //@ts-ignore
      const wrappedProvider = SignatureV4.mock.calls[0][0].credentials;
      await wrappedProvider();
      expect(provider).toHaveBeenCalledTimes(1);
    });

    it("should not force refresh when credentials expire in more than 15 minutes", async () => {
      const provider = vi.fn().mockResolvedValue({
        accessKeyId: "key",
        secretAccessKey: "secret",
        expiration: new Date(Date.now() + 20 * 60_000),
      });
      const signer = new Signer({ ...minimalParams, credentials: provider });
      await signer.getAuthToken();
      //@ts-ignore
      const wrappedProvider = SignatureV4.mock.calls[0][0].credentials;
      await wrappedProvider();
      expect(provider).toHaveBeenCalledTimes(1);
    });

    it("should force refresh when credentials expire within 15 minutes", async () => {
      const refreshedCreds = {
        accessKeyId: "refreshed",
        secretAccessKey: "secret",
        expiration: new Date(Date.now() + 60 * 60_000),
      };
      const provider = vi
        .fn()
        .mockResolvedValueOnce({
          accessKeyId: "expiring",
          secretAccessKey: "secret",
          expiration: new Date(Date.now() + 2 * 60_000),
        })
        .mockResolvedValueOnce(refreshedCreds);
      const signer = new Signer({ ...minimalParams, credentials: provider });
      await signer.getAuthToken();
      //@ts-ignore
      const wrappedProvider = SignatureV4.mock.calls[0][0].credentials;
      const result = await wrappedProvider();
      expect(provider).toHaveBeenCalledTimes(2);
      expect(provider).toHaveBeenLastCalledWith(expect.objectContaining({ forceRefresh: true }));
      expect(result).toEqual(refreshedCreds);
    });

    it("should return original credentials if refresh still expires within 15 minutes", async () => {
      const originalCreds = {
        accessKeyId: "expiring",
        secretAccessKey: "secret",
        expiration: new Date(Date.now() + 2 * 60_000),
      };
      const provider = vi
        .fn()
        .mockResolvedValueOnce(originalCreds)
        .mockResolvedValueOnce({
          accessKeyId: "still-expiring",
          secretAccessKey: "secret",
          expiration: new Date(Date.now() + 3 * 60_000),
        });
      const signer = new Signer({ ...minimalParams, credentials: provider });
      await signer.getAuthToken();
      //@ts-ignore
      const wrappedProvider = SignatureV4.mock.calls[0][0].credentials;
      const result = await wrappedProvider();
      expect(provider).toHaveBeenCalledTimes(2);
      expect(result).toEqual(originalCreds);
    });

    it("should return original credentials if force refresh throws", async () => {
      const originalCreds = {
        accessKeyId: "expiring",
        secretAccessKey: "secret",
        expiration: new Date(Date.now() + 2 * 60_000),
      };
      const provider = vi.fn().mockResolvedValueOnce(originalCreds).mockRejectedValueOnce(new Error("refresh failed"));
      const signer = new Signer({ ...minimalParams, credentials: provider });
      await signer.getAuthToken();
      //@ts-ignore
      const wrappedProvider = SignatureV4.mock.calls[0][0].credentials;
      const result = await wrappedProvider();
      expect(provider).toHaveBeenCalledTimes(2);
      expect(result).toEqual(originalCreds);
    });

    it("should not wrap static credential objects", async () => {
      const staticCreds = {
        accessKeyId: "static",
        secretAccessKey: "secret",
        expiration: new Date(Date.now() + 2 * 60_000),
      };
      const signer = new Signer({ ...minimalParams, credentials: staticCreds });
      await signer.getAuthToken();
      //@ts-ignore
      expect(SignatureV4.mock.calls[0][0].credentials).toEqual(staticCreds);
    });
  });
});
