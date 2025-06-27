import { HttpRequest } from "@aws-sdk/protocol-http";
import { FinalizeHandlerArguments, HandlerExecutionContext } from "@aws-sdk/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { queueUrlMiddleware, resolveQueueUrlConfig } from "./queue-url";

describe("queueUrlMiddleware", () => {
  const mockNextHandler = vi.fn();

  const mockContext: HandlerExecutionContext = {
    logger: {
      ...console,
      warn: vi.fn(),
    },
    endpointV2: void 0,
  };

  beforeEach(() => {
    mockNextHandler.mockReset();
    mockNextHandler.mockResolvedValue({ output: {}, response: {} });
    mockContext.endpointV2 = {
      url: new URL("https://sqs.us-east-1.amazonaws.com"),
    };
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe("config resolver", () => {
    it("maintains object custody", () => {
      const input = {};
      expect(resolveQueueUrlConfig(input)).toBe(input);
    });
  });

  it("should use the QueueUrl hostname as the endpoint if useQueueUrlAsEndpoint is true", async () => {
    const middleware = queueUrlMiddleware({ useQueueUrlAsEndpoint: true });
    const input = { QueueUrl: "https://xyz.com/123/MyQueue" };
    const request = new HttpRequest({
      hostname: "sqs.us-east-1.amazonaws.com",
      protocol: "https:",
      path: "/",
      headers: {},
      method: "GET",
    });
    const args: FinalizeHandlerArguments<any> = { input, request };

    await middleware(mockNextHandler, mockContext)(args);

    // Verify that the resolvedEndpoint.url has been modified to match QueueUrl
    expect(mockContext.endpointV2?.url.href).toEqual("https://xyz.com/");
    expect(mockNextHandler).toHaveBeenCalled();
    expect(mockContext.logger?.warn).toHaveBeenCalled();
  });

  it("should not modify the endpoint if useQueueUrlAsEndpoint is false", async () => {
    const middleware = queueUrlMiddleware({ useQueueUrlAsEndpoint: false });
    const input = { QueueUrl: "https://xyz.com/123/MyQueue" };
    const request = new HttpRequest({
      hostname: "sqs.us-east-1.amazonaws.com",
      protocol: "https:",
      path: "/",
    });
    const args: FinalizeHandlerArguments<any> = { input, request };

    await middleware(mockNextHandler, mockContext)(args);

    expect(mockNextHandler).toHaveBeenCalledWith(args);
    expect(mockContext.endpointV2?.url.href).toEqual("https://sqs.us-east-1.amazonaws.com/");
  });

  it("should not modify the endpoint when QueueUrl is not provided", async () => {
    const middleware = queueUrlMiddleware({ useQueueUrlAsEndpoint: true });
    const input = {}; // No QueueUrl provided
    const request = new HttpRequest({
      hostname: "sqs.us-east-1.amazonaws.com",
      protocol: "https:",
      path: "/",
    });
    const args: FinalizeHandlerArguments<any> = { input, request };

    await middleware(mockNextHandler, mockContext)(args);

    expect(mockNextHandler).toHaveBeenCalledWith(args);
    expect(mockContext.endpointV2?.url.href).toEqual("https://sqs.us-east-1.amazonaws.com/");
  });

  it("should not modify the endpoint when a custom endpoint is provided in config", async () => {
    const middleware = queueUrlMiddleware({ useQueueUrlAsEndpoint: true, endpoint: "https://my-endpoint.com/" });
    const input = { QueueUrl: "https://xyz.com/123/MyQueue" };
    const request = new HttpRequest({
      hostname: "my-endpoint.com",
      protocol: "https:",
      path: "/",
    });
    const args: FinalizeHandlerArguments<any> = { input, request };

    await middleware(mockNextHandler, mockContext)(args);

    expect(mockNextHandler).toHaveBeenCalledWith(args);
    expect(mockContext.endpointV2?.url.href).toEqual("https://sqs.us-east-1.amazonaws.com/");
    expect(mockContext.logger?.warn).not.toHaveBeenCalled();
  });
});
