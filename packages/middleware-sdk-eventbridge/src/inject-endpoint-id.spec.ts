import { HttpRequest } from "@aws-sdk/protocol-http";
import { Provider } from "@aws-sdk/types";

import { injectEndpointIdMiddleware } from "./inject-endpoint-id";

describe("injectEndpointIdMiddleware", () => {
  type InjectEndpointIdMiddlewareConfig = {
    isCustomEndpoint: boolean;
    customEndpoint?: string;
    useFipsEndpoint: Provider<boolean>;
    useDualstackEndpoint: Provider<boolean>;
    clientRegion: string;
    clientHostnamePattern: string;
    inputParams: any;
  };

  const invokeMiddleware = async (
    config: InjectEndpointIdMiddlewareConfig
  ): Promise<{ hostname: string; middlewareContext: Record<string, any> }> => {
    const mockNextHandler = jest.fn();
    const middlewareContext = {} as any;
    const handler = injectEndpointIdMiddleware({ ...config })(mockNextHandler, middlewareContext);
    await handler({
      input: config.inputParams,
      request: new HttpRequest({
        hostname: config.isCustomEndpoint
          ? config.customEndpoint!
          : config.clientHostnamePattern.replace("{region}", config.clientRegion),
      }),
    });
    expect(mockNextHandler.mock.calls.length).toBe(1);
    return {
      hostname: mockNextHandler.mock.calls[0][0].request.hostname as string,
      middlewareContext: middlewareContext,
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not update endpoint if EndpointId is not set", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events.{region}.amazonaws.com",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
      inputParams: {},
    });
    expect(hostname).toEqual("events.us-east-1.amazonaws.com");
    expect(middlewareContext).toEqual({});
  });

  it("should not update endpoint if EndpointId is not set and client region in gov partition", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events.{region}.c2s.ic.gov",
      clientRegion: "us-iso-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
      inputParams: {},
    });
    expect(hostname).toEqual("events.us-iso-east-1.c2s.ic.gov");
    expect(middlewareContext).toEqual({});
  });

  it("should not update endpoint if EndpointId is not set and client uses dualstack endpoint", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events.{region}.api.aws",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => true,
      inputParams: {},
    });
    expect(hostname).toEqual("events.us-east-1.api.aws");
    expect(middlewareContext).toEqual({});
  });

  it("should not update endpoint if EndpointId is not set and client uses fips endpoint", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events-fips.{region}.amazonaws.com",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => true,
      useDualstackEndpoint: async () => false,
      inputParams: {},
    });
    expect(hostname).toEqual("events-fips.us-east-1.amazonaws.com");
    expect(middlewareContext).toEqual({});
  });

  it("should not update endpoint if EndpointId is not set and client uses dualstack and fips endpoint", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events-fips.{region}.api.aws",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => true,
      useDualstackEndpoint: async () => true,
      inputParams: {},
    });
    expect(hostname).toEqual("events-fips.us-east-1.api.aws");
    expect(middlewareContext).toEqual({});
  });

  it("should update endpoint if EndpointId is valid", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events.{region}.amazonaws.com",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
      inputParams: { EndpointId: "abc123.456def" },
    });
    expect(hostname).toEqual("abc123.456def.endpoint.events.amazonaws.com");
    expect(middlewareContext).toEqual({ signing_region: "*" });
  });

  it("should update endpoint if EndpointId is valid and client uses dualstack endpoint", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events.{region}.api.aws",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => true,
      inputParams: { EndpointId: "abc123.456def" },
    });
    expect(hostname).toEqual("abc123.456def.endpoint.events.api.aws");
    expect(middlewareContext).toEqual({ signing_region: "*" });
  });

  it("should update endpoint if EndpointId is valid and client uses gov partition", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: false,
      clientHostnamePattern: "events.{region}.c2s.ic.gov",
      clientRegion: "us-iso-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
      inputParams: { EndpointId: "abc123.456def" },
    });
    expect(hostname).toEqual("abc123.456def.endpoint.events.c2s.ic.gov");
    expect(middlewareContext).toEqual({ signing_region: "*" });
  });

  it("should throw if EndpointId is valid but client uses fips endpoint", async () => {
    try {
      await invokeMiddleware({
        isCustomEndpoint: false,
        clientHostnamePattern: "events-fips.{region}.amazonaws.com",
        clientRegion: "us-east-1",
        useFipsEndpoint: async () => true,
        useDualstackEndpoint: async () => false,
        inputParams: { EndpointId: "abc123.456def" },
      });
      fail("This test expects to fail");
    } catch (e) {
      expect(e.message).toEqual(expect.stringContaining("FIPS is not supported"));
    }
  });

  it.each(["", "badactor.com?foo=bar", "-hyphen-start", "invalid latter", "..consecutive.dots.."])(
    "should throw if EndpointId is not a valid domain name component: %s",
    async (EndpointId) => {
      try {
        await invokeMiddleware({
          isCustomEndpoint: false,
          clientHostnamePattern: "events.{region}.amazonaws.com",
          clientRegion: "us-east-1",
          useFipsEndpoint: async () => false,
          useDualstackEndpoint: async () => false,
          inputParams: { EndpointId },
        });
        fail("This test expects to fail");
      } catch (e) {
        expect(e.message).toEqual(expect.stringContaining("not a valid domain name component"));
      }
    }
  );

  it("should use custom endpoint if EndpointId is not set", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: true,
      customEndpoint: "example.org",
      clientHostnamePattern: "any",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
      inputParams: {},
    });
    expect(hostname).toEqual("example.org");
    expect(middlewareContext).toEqual({});
  });

  it("should use custom endpoint and sign with SigV4a if EndpointId is set", async () => {
    const { hostname, middlewareContext } = await invokeMiddleware({
      isCustomEndpoint: true,
      customEndpoint: "example.org",
      clientHostnamePattern: "any",
      clientRegion: "us-east-1",
      useFipsEndpoint: async () => false,
      useDualstackEndpoint: async () => false,
      inputParams: { EndpointId: "abc123.456def" },
    });
    expect(hostname).toEqual("example.org");
    expect(middlewareContext).toEqual({ signing_region: "*" });
  });
});
