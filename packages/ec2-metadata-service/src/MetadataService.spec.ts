import { NodeHttpHandler } from "@smithy/node-http-handler";
import { Readable } from "stream";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { MetadataService } from "./MetadataService";

// Type declaration (declaration merging) for process.getActiveResourcesInfo()
declare global {
  namespace NodeJS {
    interface Process {
      getActiveResourcesInfo(): string[];
    }
  }
}

vi.mock("@smithy/node-http-handler");

// gh#7538
describe("MetadataService Socket Leak Checks", () => {
  let metadataService: MetadataService;

  beforeEach(() => {
    vi.clearAllMocks();
    metadataService = new MetadataService({
      endpoint: "http://169.254.169.254",
      httpOptions: { timeout: 1000 },
      retries: 0, // Disable retries for faster tests
    });
  });

  const createMockResponse = (statusCode: number, body: string) => {
    const stream = Readable.from([body]);
    return {
      response: {
        statusCode,
        body: stream,
        headers: {},
      },
    };
  };

  describe("fetchMetadataToken - body consumption checks", () => {
    it("should consume response body on 200 status and return token", async () => {
      const mockToken = "test-token-123";
      const mockResponse = createMockResponse(200, mockToken);

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      const token = await metadataService.fetchMetadataToken();

      expect(token).toBe(mockToken);
      expect(mockResponse.response.body.readableEnded).toBe(true);
    });

    it("should consume response body on 400 status before throwing", async () => {
      const mockResponse = createMockResponse(400, "Bad Request");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow(
        "Failed to fetch metadata token with status code 400"
      );

      expect(mockResponse.response.body.readableEnded).toBe(true);
    });

    it("should consume response body on 500 status before throwing", async () => {
      const mockResponse = createMockResponse(500, "Server Error");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow(
        "Failed to fetch metadata token with status code 500"
      );

      expect(mockResponse.response.body.readableEnded).toBe(true);
    });

    it("should include statusCode in error object for non-200 responses", async () => {
      const mockResponse = createMockResponse(400, "Bad Request");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      try {
        await metadataService.fetchMetadataToken();
        expect.fail("Should have thrown an error");
      } catch (error: any) {
        expect(error.message).toContain("400");
        expect(error.message).toContain("Failed to fetch metadata token");
      }
    });
  });

  describe("fetchMetadataToken - error handling", () => {
    it("should set disableFetchToken on 403 error", async () => {
      const mockResponse = createMockResponse(403, "Forbidden");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow("[disableFetchToken] is now set to true");

      expect((metadataService as any).disableFetchToken).toBe(true);
    });

    it("should set disableFetchToken on 404 error", async () => {
      const mockResponse = createMockResponse(404, "Not Found");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow("[disableFetchToken] is now set to true");

      expect((metadataService as any).disableFetchToken).toBe(true);
    });

    it("should set disableFetchToken on 405 error", async () => {
      const mockResponse = createMockResponse(405, "Method Not Allowed");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow("[disableFetchToken] is now set to true");

      expect((metadataService as any).disableFetchToken).toBe(true);
    });

    it("should set disableFetchToken on TimeoutError", async () => {
      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockRejectedValue({ message: "TimeoutError" }),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow("[disableFetchToken] is now set to true");

      expect((metadataService as any).disableFetchToken).toBe(true);
    });

    it("should NOT set disableFetchToken on 400 error", async () => {
      const mockResponse = createMockResponse(400, "Bad Request");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await expect(metadataService.fetchMetadataToken()).rejects.toThrow();

      expect((metadataService as any).disableFetchToken).toBe(false);
    });
  });

  describe("socket cleanup verification", () => {
    it("should not leave open handles after 400 response", async () => {
      const initialResources = process.getActiveResourcesInfo();
      const mockResponse = createMockResponse(400, "Bad Request");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      try {
        await metadataService.fetchMetadataToken();
      } catch {
        // expected to throw
      }
      // allowing event loop to finish processing (test could be flaky otherwise if socket isn't closed because it remained scheduled in the event loop here)
      await new Promise((resolve) => setImmediate(resolve));

      const finalResources = process.getActiveResourcesInfo();
      const socketCount = (resources: string[]) =>
        resources.filter((r) => r.includes("Socket") || r.includes("TCP")).length;
      expect(socketCount(finalResources)).toBeLessThanOrEqual(socketCount(initialResources));
    });

    it("should not leave open handles after successful 200 response", async () => {
      const initialResources = process.getActiveResourcesInfo();
      const mockResponse = createMockResponse(200, "test-token");

      vi.mocked(NodeHttpHandler).mockImplementation(
        () =>
          ({
            handle: vi.fn().mockResolvedValue(mockResponse),
          } as any)
      );

      await metadataService.fetchMetadataToken();

      await new Promise((resolve) => setImmediate(resolve));

      const finalResources = process.getActiveResourcesInfo();
      const socketCount = (resources: string[]) =>
        resources.filter((r) => r.includes("Socket") || r.includes("TCP")).length;
      expect(socketCount(finalResources)).toBeLessThanOrEqual(socketCount(initialResources));
    });
  });

  describe("throwOnRequestTimeout flag", () => {
    it("should pass throwOnRequestTimeout: true to NodeHttpHandler", async () => {
      const mockResponse = createMockResponse(200, "test-token");
      const mockHandle = vi.fn().mockResolvedValue(mockResponse);

      vi.mocked(NodeHttpHandler).mockImplementation((config: any) => {
        expect(config.throwOnRequestTimeout).toBe(true);
        return { handle: mockHandle } as any;
      });

      await metadataService.fetchMetadataToken();

      expect(NodeHttpHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          throwOnRequestTimeout: true,
        })
      );
    });
  });
});

describe("MetadataService Custom Ports", () => {
  let metadataService: MetadataService;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockResponse = (statusCode: number, body: string) => {
    const stream = Readable.from([body]);
    return {
      response: {
        statusCode,
        body: stream,
        headers: {},
      },
    };
  };

  it("should use custom port from endpoint URL in request()", async () => {
    metadataService = new MetadataService({
      endpoint: "http://localhost:1338",
      httpOptions: { timeout: 1000 },
      retries: 0, // Disable retries for faster tests
    });

    const mockResponse = createMockResponse(200, "i-1234567890abcdef0");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.request("/latest/meta-data/instance-id", {});

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.port).toBe(1338);
    expect(requestArg.hostname).toBe("localhost");
  });

  it("should use custom port from endpoint URL in fetchMetadataToken()", async () => {
    metadataService = new MetadataService({
      endpoint: "http://localhost:1338",
      httpOptions: { timeout: 1000 },
      retries: 0, // Disable retries for faster tests
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.port).toBe(1338);
    expect(requestArg.hostname).toBe("localhost");
  });

  it("should use undefined port for standard HTTP endpoint", async () => {
    metadataService = new MetadataService({
      endpoint: "http://169.254.169.254",
      httpOptions: { timeout: 1000 },
      retries: 0, // Disable retries for faster tests
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.port).toBe(80); // default
    expect(requestArg.hostname).toBe("169.254.169.254");
  });

  it("should use explicit port option over endpoint URL port", async () => {
    metadataService = new MetadataService({
      endpoint: "http://localhost:1338",
      port: 9999, // Should override endpoint port
      retries: 0,
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.port).toBe(9999);
    expect(requestArg.hostname).toBe("localhost");
  });

  it("should use explicit port option with default endpoint", async () => {
    metadataService = new MetadataService({
      endpoint: "http://169.254.169.254",
      port: 8080,
      retries: 0,
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.port).toBe(8080);
    expect(requestArg.hostname).toBe("169.254.169.254");
  });
});

describe("MetadataService Retry Configuration", () => {
  it("should use default 3 retries", () => {
    const metadataService = new MetadataService();
    expect((metadataService as any).retries).toBe(3);
  });

  it("should use custom retry count", () => {
    const metadataService = new MetadataService({ retries: 5 });
    expect((metadataService as any).retries).toBe(5);
  });

  it("should disable retries when set to 0", () => {
    const metadataService = new MetadataService({ retries: 0 });
    expect((metadataService as any).retries).toBe(0);
  });

  it("should create backoff function", () => {
    const metadataService = new MetadataService();
    const backoffFn = (metadataService as any).backoffFn;
    expect(typeof backoffFn).toBe("function");
  });

  describe("status code handling for retries", () => {
    it("should not retry 400 errors", async () => {
      const metadataService = new MetadataService({ retries: 0 });
      const shouldNotRetry = (metadataService as any).shouldNotRetry;

      const error = { statusCode: 400 };
      expect(shouldNotRetry(error)).toBe(true);
    });

    it("should not retry 403 errors", async () => {
      const metadataService = new MetadataService({ retries: 0 });
      const shouldNotRetry = (metadataService as any).shouldNotRetry;

      const error = { statusCode: 403 };
      expect(shouldNotRetry(error)).toBe(true);
    });

    it("should not retry 404 errors", async () => {
      const metadataService = new MetadataService({ retries: 0 });
      const shouldNotRetry = (metadataService as any).shouldNotRetry;

      const error = { statusCode: 404 };
      expect(shouldNotRetry(error)).toBe(true);
    });

    it("should retry 401 errors", async () => {
      const metadataService = new MetadataService({ retries: 0 });
      const shouldNotRetry = (metadataService as any).shouldNotRetry;

      const error = { statusCode: 401 };
      expect(shouldNotRetry(error)).toBe(false);
    });

    it("should retry 500 errors", async () => {
      const metadataService = new MetadataService({ retries: 0 });
      const shouldNotRetry = (metadataService as any).shouldNotRetry;

      const error = { statusCode: 500 };
      expect(shouldNotRetry(error)).toBe(false);
    });
  });
});

describe("MetadataService Token TTL Configuration", () => {
  let metadataService: MetadataService;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockResponse = (statusCode: number, body: string) => {
    const stream = Readable.from([body]);
    return {
      response: {
        statusCode,
        body: stream,
        headers: {},
      },
    };
  };

  it("should use default tokenTtl of 21600 seconds", async () => {
    metadataService = new MetadataService({
      endpoint: "http://169.254.169.254",
      retries: 0,
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.headers["x-aws-ec2-metadata-token-ttl-seconds"]).toBe("21600");
  });

  it("should use custom tokenTtl value", async () => {
    metadataService = new MetadataService({
      endpoint: "http://169.254.169.254",
      tokenTtl: 3600, // 1 hour
      retries: 0,
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(requestArg.headers["x-aws-ec2-metadata-token-ttl-seconds"]).toBe("3600");
  });

  it("should validate tokenTtl as positive integer", () => {
    expect(() => new MetadataService({ tokenTtl: -1 })).toThrow("tokenTtl must be a positive integer");
    expect(() => new MetadataService({ tokenTtl: 0 })).toThrow("tokenTtl must be a positive integer");
    expect(() => new MetadataService({ tokenTtl: 3.14 })).toThrow("tokenTtl must be a positive integer");
  });

  it("should accept valid positive integer tokenTtl values", () => {
    expect(() => new MetadataService({ tokenTtl: 1 })).not.toThrow();
    expect(() => new MetadataService({ tokenTtl: 3600 })).not.toThrow();
    expect(() => new MetadataService({ tokenTtl: 21600 })).not.toThrow();
  });

  it("should convert tokenTtl to string in header", async () => {
    metadataService = new MetadataService({
      endpoint: "http://169.254.169.254",
      tokenTtl: 7200,
      retries: 0,
    });

    const mockResponse = createMockResponse(200, "test-token-123");
    const mockHandle = vi.fn().mockResolvedValue(mockResponse);

    vi.mocked(NodeHttpHandler).mockImplementation(() => ({ handle: mockHandle } as any));

    await metadataService.fetchMetadataToken();

    const requestArg = mockHandle.mock.calls[0][0];
    expect(typeof requestArg.headers["x-aws-ec2-metadata-token-ttl-seconds"]).toBe("string");
    expect(requestArg.headers["x-aws-ec2-metadata-token-ttl-seconds"]).toBe("7200");
  });
});
