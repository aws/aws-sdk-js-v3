import { HttpRequest } from "@aws-sdk/protocol-http";

import { useRegionalEndpointMiddleware } from "./use-regional-endpoint";

describe("useRegionalEndpointMiddleware", () => {
  const mockNextHandler = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should accept any endpoint if set by customer", async () => {
    const config = { isCustomEndpoint: true, region: async () => "foo-region" };
    const handler = useRegionalEndpointMiddleware(config)(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        hostname: "s3.us-east-1.amazonaws.com",
      }),
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toEqual("s3.us-east-1.amazonaws.com");
  });

  it("should modify the hostname if it's global endpoint", async () => {
    const config = { isCustomEndpoint: false, region: async () => "foo-region" };
    const handler = useRegionalEndpointMiddleware(config)(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        hostname: "s3.amazonaws.com",
      }),
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toEqual("s3.us-east-1.amazonaws.com");
  });

  it("should not modify the hostname if it's regional endpoint", async () => {
    const config = { isCustomEndpoint: false, region: async () => "foo-region" };
    const handler = useRegionalEndpointMiddleware(config)(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        hostname: "s3.us-west-2.amazonaws.com",
      }),
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toEqual("s3.us-west-2.amazonaws.com");
  });

  it("should use global endpoint if region is set to 'aws-global'", async () => {
    const config = { isCustomEndpoint: false, region: async () => "aws-global" };
    const handler = useRegionalEndpointMiddleware(config)(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        hostname: "s3.aws-global.amazonaws.com",
      }),
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0].request.hostname).toEqual("s3.amazonaws.com");
  });
});
