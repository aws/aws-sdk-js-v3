import { NodeHttpHandler } from "@smithy/node-http-handler";
import { Readable } from "stream";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

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
