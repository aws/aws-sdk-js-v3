import { HttpRequest } from "@aws-sdk/protocol-http";
import { HttpAuthLocation } from "@aws-sdk/types";

import { apiKeyMiddleware } from "./apiKeyMiddleware";

describe(apiKeyMiddleware.name, () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set the query parameter if the location is `query`", async () => {
    const middleware = apiKeyMiddleware(
      {
        identity: () =>
          Promise.resolve({
            token: "example-api-key",
          }),
      },
      {
        in: HttpAuthLocation.QUERY,
        name: "key",
      }
    );

    const handler = middleware(mockNextHandler, {});

    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.query.key).toBe("example-api-key");
  });

  it("should skip if the api key has not been set", async () => {
    const middleware = apiKeyMiddleware(
      {},
      {
        in: HttpAuthLocation.HEADER,
        name: "auth",
        scheme: "scheme",
      }
    );

    const handler = middleware(mockNextHandler, {});

    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    expect(mockNextHandler.mock.calls.length).toEqual(1);
  });

  it("should skip if the request is not an HttpRequest", async () => {
    const middleware = apiKeyMiddleware(
      {},
      {
        in: HttpAuthLocation.HEADER,
        name: "Authorization",
      }
    );

    const handler = middleware(mockNextHandler, {});

    await handler({
      input: {},
      request: {},
    });

    expect(mockNextHandler.mock.calls.length).toEqual(1);
  });

  it("should set the API key in the lower-cased named header", async () => {
    const middleware = apiKeyMiddleware(
      {
        identity: () =>
          Promise.resolve({
            token: "example-api-key",
          }),
      },
      {
        in: HttpAuthLocation.HEADER,
        name: "Authorization",
      }
    );

    const handler = middleware(mockNextHandler, {});

    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers.authorization).toBe("example-api-key");
  });

  it("should set the API key in the named header with the provided scheme", async () => {
    const middleware = apiKeyMiddleware(
      {
        identity: () =>
          Promise.resolve({
            token: "example-api-key",
          }),
      },
      {
        in: HttpAuthLocation.HEADER,
        name: "Authorization",
        scheme: "ExampleScheme",
      }
    );
    const handler = middleware(mockNextHandler, {});

    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers.authorization).toBe("ExampleScheme example-api-key");
  });
});
