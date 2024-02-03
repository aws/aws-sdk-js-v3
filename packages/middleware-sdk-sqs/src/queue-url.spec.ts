import { HttpRequest } from "@aws-sdk/protocol-http";
import { FinalizeHandlerArguments, HandlerExecutionContext } from "@aws-sdk/types";

import { queueUrlMiddleware, QueueUrlResolvedConfig } from "./queue-url";

describe("queueUrlMiddleware", () => {
  const mockNextHandler = jest.fn();
  let mockEndpointV2: { url: URL };

  const mockContext: HandlerExecutionContext = {
    logger: console,
    endpointV2: {
      url: new URL("https://sqs.us-east-1.amazonaws.com"),
    },
  };

  beforeEach(() => {
    mockNextHandler.mockReset();
    mockNextHandler.mockResolvedValue({ output: {}, response: {} });
    mockEndpointV2 = { url: new URL("https://sqs.us-east-1.amazonaws.com") }; // Default endpoint
  });

  it("should use the QueueUrl as the endpoint if useQueueUrlAsEndpoint is true", async () => {
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
    expect(mockEndpointV2.url.href).toEqual(input.QueueUrl);
    expect(mockNextHandler).toHaveBeenCalled();
  });

  it("should not modify the endpoint if useQueueUrlAsEndpoint is false", async () => {
    const middleware = queueUrlMiddleware({ useQueueUrlAsEndpoint: false });
    const input = { QueueUrl: "https://xyz.com/123/MyQueue" };
    const request = new HttpRequest({ hostname: "sqs.us-east-1.amazonaws.com" });
    const args: FinalizeHandlerArguments<any> = { input, request };

    await middleware(mockNextHandler, mockContext)(args);

    expect(mockNextHandler).toHaveBeenCalledWith(args);
  });

  it("when QueueUrl is not provided", async () => {
    const middleware = queueUrlMiddleware({ useQueueUrlAsEndpoint: true });
    const input = {}; // No QueueUrl provided
    const request = new HttpRequest({ hostname: "sqs.us-east-1.amazonaws.com" });
    const args: FinalizeHandlerArguments<any> = { input, request };

    await middleware(mockNextHandler, mockContext)(args);

    expect(mockNextHandler).toHaveBeenCalledWith(args);
  });
});
