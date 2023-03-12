import { HttpRequest } from "@aws-sdk/protocol-http";
import { HttpAuthLocation, MiddlewareStack } from "@aws-sdk/types";

import { apiKeyMiddleware, getApiKeyPlugin } from "./middleware";

describe(getApiKeyPlugin.name, () => {
  it("should apply the middleware to the stack", () => {
    const plugin = getApiKeyPlugin(
      {
        apiKey: () => Promise.resolve("example-api-key"),
        identity: () => Promise.resolve({
          token: "example-api-key"
        }),
      },
      {
        in: HttpAuthLocation.QUERY,
        name: "key",
      }
    );
    const mockApplied = jest.fn();
    const mockOther = jest.fn();

    // TODO there's got to be a better way to do this mocking
    plugin.applyToStack({
      addRelativeTo: mockApplied,
      // We don't expect any of these others to be called.
      add: mockOther,
      concat: mockOther,
      resolve: mockOther,
      applyToStack: mockOther,
      use: mockOther,
      clone: mockOther,
      remove: mockOther,
      removeByTag: mockOther,
      identify: mockOther,
    } as unknown as MiddlewareStack<any, any>);

    expect(mockApplied.mock.calls.length).toEqual(1);
    expect(mockOther.mock.calls.length).toEqual(0);
  });
});

describe(apiKeyMiddleware.name, () => {
  describe("returned middleware function", () => {
    const mockNextHandler = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should set the query parameter if the location is `query`", async () => {
      const middleware = apiKeyMiddleware(
        {
          apiKey: undefined,
          identity: () => Promise.resolve({
            token: "example-api-key"
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
        {
          apiKey: undefined,
          identity: undefined,
        },
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
        {
          apiKey: undefined,
          identity: undefined,
        },
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

    it("should skip if the identity is not a token identity", async () => {
      const middleware = apiKeyMiddleware(
        {
          apiKey: undefined,
          identity: async () => ({
            not: "a token identity"
          }),
        } as any,
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

    it("should set the API key in the lower-cased named header", async () => {
      const middleware = apiKeyMiddleware(
        {
          apiKey: undefined,
          identity: () => Promise.resolve({
            token: "example-api-key"
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
          apiKey: undefined,
          identity: () => Promise.resolve({
            token: "example-api-key"
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
});
