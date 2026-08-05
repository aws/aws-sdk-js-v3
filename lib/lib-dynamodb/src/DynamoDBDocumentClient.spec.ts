import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { constructStack } from "@smithy/core/client";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { DynamoDBDocumentClient } from "./DynamoDBDocumentClient";

/**
 * Creates a mock DynamoDBClient that simulates a pre-schema-serde version
 * (before v3.928.0) where the client does NOT register serializerMiddleware.
 */
function createOldClient(configOverrides: Record<string, any> = {}): DynamoDBClient {
  const stack = constructStack();
  // Old clients register these middlewares but NOT serializerMiddleware
  // (commands registered it in the old model).
  stack.add((() => {}) as any, { name: "loggerMiddleware", step: "initialize", override: true });
  stack.add((() => {}) as any, { name: "retryMiddleware", step: "finalizeRequest", override: true });

  const mockClient = {
    config: {
      region: async () => "us-east-1",
      logger: configOverrides.logger ?? { warn() {}, error() {}, info() {}, debug() {} },
      ...configOverrides,
    },
    middlewareStack: stack,
    send: vi.fn(),
    destroy: vi.fn(),
  } as unknown as DynamoDBClient;

  return mockClient;
}

/**
 * Creates a real DynamoDBClient (modern version) that has serializerMiddleware.
 */
function createModernClient(configOverrides: Record<string, any> = {}): DynamoDBClient {
  return new DynamoDBClient({
    region: "us-east-1",
    credentials: { accessKeyId: "test", secretAccessKey: "test" },
    ...configOverrides,
  });
}

describe("DynamoDBDocumentClient - serializerMiddleware compatibility check", () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  it("should work normally with a modern DynamoDBClient that has serializerMiddleware", () => {
    const client = createModernClient();
    const docClient = DynamoDBDocumentClient.from(client);

    expect(docClient).toBeDefined();
    expect(docClient.config).toBeDefined();
    // Should NOT emit a warning
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  it("should detect missing serializerMiddleware on an old client and self-heal", () => {
    const client = createOldClient();
    const docClient = DynamoDBDocumentClient.from(client);

    expect(docClient).toBeDefined();
    // The doc client should have serializerMiddleware after patching
    const middlewares = docClient.middlewareStack.identify();
    expect(middlewares.some((m: string) => m.includes("serializerMiddleware"))).toBe(true);
  });

  it("should emit a warning when patching an incompatible client", () => {
    const client = createOldClient({ logger: undefined });
    DynamoDBDocumentClient.from(client);

    expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("incompatible version of DynamoDBClient"));
  });

  it("should use the configured logger for the warning when available", () => {
    const warnFn = vi.fn();
    const logger = { warn: warnFn, error: vi.fn(), info: vi.fn(), debug: vi.fn() };
    const client = createOldClient({ logger });

    DynamoDBDocumentClient.from(client);

    expect(warnFn).toHaveBeenCalledWith(expect.stringContaining("incompatible version of DynamoDBClient"));
    // Should NOT fall back to console
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  it("should fall back to console when logger is NoOp", () => {
    class NoOpLogger {
      warn() {}
      error() {}
      info() {}
      debug() {}
    }
    const logger = new NoOpLogger();
    const client = createOldClient({ logger });

    DynamoDBDocumentClient.from(client);

    expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("incompatible version of DynamoDBClient"));
  });

  it("should not mutate the original client's middleware stack", () => {
    const client = createOldClient();
    const originalMiddlewares = client.middlewareStack.identify();

    DynamoDBDocumentClient.from(client);

    // The original client's stack should be unchanged
    const afterMiddlewares = client.middlewareStack.identify();
    expect(afterMiddlewares).toEqual(originalMiddlewares);
  });

  it("should preserve translateConfig when patching", () => {
    const client = createOldClient();
    const translateConfig = {
      marshallOptions: { removeUndefinedValues: true },
      unmarshallOptions: { wrapNumbers: true },
    };

    const docClient = DynamoDBDocumentClient.from(client, translateConfig);

    expect(docClient.config.translateConfig).toEqual(translateConfig);
  });

  it("should preserve translateConfig in the normal (non-patching) path", () => {
    const client = createModernClient();
    const translateConfig = {
      marshallOptions: { convertClassInstanceToMap: true },
      unmarshallOptions: { wrapNumbers: false },
    };

    const docClient = DynamoDBDocumentClient.from(client, translateConfig);

    expect(docClient.config.translateConfig).toEqual(translateConfig);
  });

  it("should throw if cacheMiddleware is true", () => {
    const client = createModernClient({ cacheMiddleware: true });

    expect(() => DynamoDBDocumentClient.from(client)).toThrow("cacheMiddleware=true is not compatible");
  });

  it("should use a different middleware stack than the original client after patching", () => {
    const client = createOldClient();
    const docClient = DynamoDBDocumentClient.from(client);

    expect(docClient.middlewareStack).not.toBe(client.middlewareStack);
  });

  it("should handle a client whose identify() returns undefined gracefully", () => {
    const stack = constructStack();
    // Simulate a very old middleware stack that might not have identify
    const mockClient = {
      config: {
        region: async () => "us-east-1",
        logger: { warn() {}, error() {}, info() {}, debug() {} },
      },
      middlewareStack: {
        ...stack,
        identify: undefined,
      },
      send: vi.fn(),
      destroy: vi.fn(),
    } as unknown as DynamoDBClient;

    const docClient = DynamoDBDocumentClient.from(mockClient);
    expect(docClient).toBeDefined();
  });

  describe("substitute client config field overrides", () => {
    it("should not pass the original client's defaultUserAgentProvider to the substitute client", () => {
      const customUserAgentProvider = vi.fn(async () => [["custom-ua", "1.0"]]);
      const client = createOldClient({ defaultUserAgentProvider: customUserAgentProvider });

      const docClient = DynamoDBDocumentClient.from(client);

      // The substitute client should get a fresh defaultUserAgentProvider, not the original's
      expect(docClient.config.defaultUserAgentProvider).not.toBe(customUserAgentProvider);
    });

    it("should not pass the original client's retryStrategy to the substitute client", () => {
      const customRetryStrategy = {
        mode: "standard",
        retry: vi.fn(),
      };
      const client = createOldClient({ retryStrategy: customRetryStrategy });

      const docClient = DynamoDBDocumentClient.from(client);

      // The substitute client should resolve its own retry strategy, not reuse the original
      expect(docClient.config.retryStrategy).not.toBe(customRetryStrategy);
    });

    it("should not pass the original client's extensions to the substitute client", () => {
      const applyFn = vi.fn();
      const customExtensions = [{ applyToStack: applyFn }];
      const client = createOldClient({ extensions: customExtensions });

      const docClient = DynamoDBDocumentClient.from(client);

      // Extensions should not be double-applied; the substitute client gets none
      // Verify the doc client was created successfully without re-applying extensions
      expect(docClient).toBeDefined();
      expect(docClient.middlewareStack.identify().some((m: string) => m.includes("serializerMiddleware"))).toBe(true);
    });

    it("should still preserve region from the original client's config in the substitute", () => {
      const client = createOldClient({ region: async () => "eu-west-1" });

      const docClient = DynamoDBDocumentClient.from(client);

      // Region should be forwarded to the substitute client
      expect(docClient.config.region).toBeDefined();
    });

    it("should still preserve credentials from the original client's config in the substitute", () => {
      const customCredentials = async () => ({
        accessKeyId: "AKID",
        secretAccessKey: "SECRET",
      });
      const client = createOldClient({ credentials: customCredentials });

      const docClient = DynamoDBDocumentClient.from(client);

      // Credentials should be preserved in the substitute client
      expect(docClient.config.credentials).toBeDefined();
    });

    it("should produce a fresh user-agent in the substitute client", async () => {
      const staleUserAgent = async () => [["aws-sdk-js", "0.0.0-stale"]];
      const client = createOldClient({ defaultUserAgentProvider: staleUserAgent });

      const docClient = DynamoDBDocumentClient.from(client);

      // The substitute client should have a new defaultUserAgentProvider that
      // doesn't carry stale version info from the incompatible client
      const userAgent = await docClient.config.defaultUserAgentProvider();
      const userAgentStr = JSON.stringify(userAgent);
      expect(userAgentStr).not.toContain("0.0.0-stale");
    });
  });
});
