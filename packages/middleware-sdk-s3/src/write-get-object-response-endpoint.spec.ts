import { HttpRequest } from "@aws-sdk/protocol-http";

import { writeGetObjectResponseEndpointMiddleware } from "./write-get-object-response-endpoint";

describe("writeGetObjectResponseEndpointMiddlewareOptions", () => {
  const mockNextHandler = jest.fn();
  const mockRegionProvider = jest.fn();
  const mockConfig = {
    region: mockRegionProvider,
    isCustomEndpoint: false,
    disableHostPrefix: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it.each(["s3.amazonaws.com", "s3-external-1.amazonaws.com"])(
    "should not update endpoint for global endpoints %s",
    async (hostname) => {
      const context = {} as any;
      const handler = writeGetObjectResponseEndpointMiddleware(mockConfig)(mockNextHandler, context);
      await handler({
        request: new HttpRequest({ hostname }),
        input: {
          RequestRoute: "route",
        },
      });
      expect(mockNextHandler.mock.calls.length).toBe(1);
      expect(mockNextHandler.mock.calls[0][0].request.hostname).toEqual(hostname);
      expect(context).toEqual({});
      mockNextHandler.mockClear();
    }
  );

  it.each([
    ["us-west-2", "s3.us-west-2.amazonaws.com", "route1", "route1.s3-object-lambda.us-west-2.amazonaws.com"],
    ["us-east-1", "s3.us-east-1.amazonaws.com", "route2", "route2.s3-object-lambda.us-east-1.amazonaws.com"],
    [
      "cn-northeast-1",
      "s3.cn-northeast-1.amazonaws.com.cn",
      "route",
      "route.s3-object-lambda.cn-northeast-1.amazonaws.com.cn",
    ],
  ])("should update endpoint for regional endpoints", async (region, originalEndpoint, requestRoute, expected) => {
    const context = {} as any;
    mockRegionProvider.mockResolvedValueOnce(region);
    const handler = writeGetObjectResponseEndpointMiddleware(mockConfig)(mockNextHandler, context);
    await handler({
      request: new HttpRequest({ hostname: originalEndpoint }),
      input: {
        RequestRoute: requestRoute,
      },
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toBe(expected);
    expect(context).toMatchObject({ signing_service: "s3-object-lambda" });
    mockNextHandler.mockClear();
  });

  it("should update endpoint for custom endpoints", async () => {
    const context = {} as any;
    const handler = writeGetObjectResponseEndpointMiddleware({ ...mockConfig, isCustomEndpoint: true })(
      mockNextHandler,
      context
    );
    await handler({
      request: new HttpRequest({ hostname: "my-endpoint.com" }),
      input: {
        RequestRoute: "route",
      },
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toBe("route.my-endpoint.com");
    expect(context).toMatchObject({ signing_service: "s3-object-lambda" });
    mockNextHandler.mockClear();
  });

  it("should not prepend requestRoute parameter if disableHostPrefix is set", async () => {
    mockRegionProvider.mockResolvedValueOnce("us-west-2");
    const handler = writeGetObjectResponseEndpointMiddleware({ ...mockConfig, disableHostPrefix: true })(
      mockNextHandler,
      {} as any
    );
    await handler({
      request: new HttpRequest({ hostname: "s3.us-west-2.amazonaws.com" }),
      input: {
        RequestRoute: "route",
      },
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toBe("s3-object-lambda.us-west-2.amazonaws.com");
  });
});
