import { EndpointCache } from "@aws-sdk/endpoint-cache";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildHandlerArguments, MiddlewareStack } from "@aws-sdk/types";

import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware";
import { getCacheKey } from "./getCacheKey";
import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";

jest.mock("./updateDiscoveredEndpointInCache");
jest.mock("./getCacheKey");
jest.mock("@aws-sdk/protocol-http");

describe(endpointDiscoveryMiddleware.name, () => {
  const cacheKey = "cacheKey";
  const endpoint = "endpoint";
  const getEndpoint = jest.fn().mockReturnValue(endpoint);
  const mockConfig = {
    credentials: jest.fn(),
    endpointCache: {
      getEndpoint,
    } as unknown as EndpointCache,
    endpointDiscoveryEnabled: jest.fn().mockResolvedValue(undefined),
    endpointDiscoveryEnabledProvider: jest.fn(),
    endpointDiscoveryCommandCtor: jest.fn(),
    isCustomEndpoint: false,
    isClientEndpointDiscoveryEnabled: false,
  };

  const mockMiddlewareConfig = {
    isDiscoveredEndpointRequired: false,
    clientStack: {} as MiddlewareStack<any, any>,
  };

  const mockNext = jest.fn();
  const mockContext = {
    clientName: "ExampleClient",
    commandName: "ExampleCommand",
  };
  const mockArgs = { request: {} };

  beforeEach(() => {
    (getCacheKey as jest.Mock).mockResolvedValue(cacheKey);
    (updateDiscoveredEndpointInCache as jest.Mock).mockResolvedValue(undefined);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(`isCustomEndpoint=true`, () => {
    it(`throw error if isClientEndpointDiscoveryEnabled`, async () => {
      try {
        await endpointDiscoveryMiddleware(
          { ...mockConfig, isCustomEndpoint: true, isClientEndpointDiscoveryEnabled: true },
          mockMiddlewareConfig
        )(
          mockNext,
          mockContext
        )(mockArgs as BuildHandlerArguments<any>);
        fail("should throw error when isCustomEndpoint=true and isClientEndpointDiscoveryEnabled=true");
      } catch (error) {
        expect(error).toStrictEqual(
          new Error(`Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.`)
        );
      }
      expect(mockNext).not.toHaveBeenCalled();
      expect(updateDiscoveredEndpointInCache).not.toHaveBeenCalled();
    });

    it(`returns without endpoint discovery`, async () => {
      await endpointDiscoveryMiddleware({ ...mockConfig, isCustomEndpoint: true }, mockMiddlewareConfig)(
        mockNext,
        mockContext
      )(mockArgs as BuildHandlerArguments<any>);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
      expect(updateDiscoveredEndpointInCache as jest.Mock).not.toHaveBeenCalled();
    });
  });

  describe(`isDiscoveredEndpointRequired=true`, () => {
    it(`throws error when isEndpointDiscoveryEnabled=false`, async () => {
      mockConfig.endpointDiscoveryEnabled.mockResolvedValueOnce(false);
      try {
        await endpointDiscoveryMiddleware(mockConfig, { ...mockMiddlewareConfig, isDiscoveredEndpointRequired: true })(
          mockNext,
          mockContext
        )(mockArgs as BuildHandlerArguments<any>);
        fail("should throw error when isDiscoveredEndpointRequired=true and isEndpointDiscoveryEnabled=false");
      } catch (error) {
        expect(error).toStrictEqual(
          new Error(
            `Endpoint Discovery is disabled but ${mockContext.commandName} on ${mockContext.clientName} requires it.` +
              ` Please check your configurations.`
          )
        );
      }
      expect(mockNext).not.toHaveBeenCalled();
      expect(updateDiscoveredEndpointInCache).not.toHaveBeenCalled();
    });

    describe(`calls updateDiscoveredEndpointInCache`, () => {
      it(`when isEndpointDiscoveryEnabled=undefined`, async () => {
        await endpointDiscoveryMiddleware(mockConfig, { ...mockMiddlewareConfig, isDiscoveredEndpointRequired: true })(
          mockNext,
          mockContext
        )(mockArgs as BuildHandlerArguments<any>);
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(mockNext).toHaveBeenCalledWith({ request: { hostname: endpoint } });
        expect(updateDiscoveredEndpointInCache).toHaveBeenCalled();
      });

      it(`when isEndpointDiscoveryEnabled=true`, async () => {
        mockConfig.endpointDiscoveryEnabled.mockResolvedValueOnce(true);
        await endpointDiscoveryMiddleware(mockConfig, { ...mockMiddlewareConfig, isDiscoveredEndpointRequired: true })(
          mockNext,
          mockContext
        )(mockArgs as BuildHandlerArguments<any>);
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(mockNext).toHaveBeenCalledWith({ request: { hostname: endpoint } });
        expect(updateDiscoveredEndpointInCache).toHaveBeenCalled();
      });
    });

    describe(`isDiscoveredEndpointRequired=false`, () => {
      it(`calls updateDiscoveredEndpointInCache when isEndpointDiscoveryEnabled=true`, async () => {
        mockConfig.endpointDiscoveryEnabled.mockResolvedValueOnce(true);
        await endpointDiscoveryMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext)(
          mockArgs as BuildHandlerArguments<any>
        );
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(updateDiscoveredEndpointInCache).toHaveBeenCalled();
      });

      it(`does not call updateDiscoveredEndpointInCache when isEndpointDiscoveryEnabled=false`, async () => {
        await endpointDiscoveryMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext)(
          mockArgs as BuildHandlerArguments<any>
        );
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(updateDiscoveredEndpointInCache).not.toHaveBeenCalled();
      });
    });
  });
});
