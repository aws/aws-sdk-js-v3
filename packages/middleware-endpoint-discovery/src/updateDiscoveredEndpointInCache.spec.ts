import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";

describe(updateDiscoveredEndpointInCache.name, () => {
  const cacheKey = "cacheKey";
  const mockGet = jest.fn();
  const mockSet = jest.fn();
  const mockDelete = jest.fn();

  const mockHandler = jest.fn();
  const mockResolveMiddleware = jest.fn().mockReturnValue(mockHandler);

  const mockEndpoints = [{ Address: "mockAddress", CachePeriodInMinutes: 2 }];
  const placeholderEndpoints = [{ Address: "", CachePeriodInMinutes: 1 }];

  const config = {
    endpointCache: { get: mockGet, set: mockSet, delete: mockDelete },
  };

  const options = {
    cacheKey,
    commandName: "ExampleCommand",
    endpointDiscoveryCommandCtor: jest.fn().mockReturnValue({ resolveMiddleware: mockResolveMiddleware }),
    isDiscoveredEndpointRequired: false,
    identifiers: { key: "value" },
  };

  beforeEach(() => {
    mockGet.mockReturnValue(mockEndpoints);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`returns if endpoints are present in cacheKey`, async () => {
    // @ts-ignore
    await updateDiscoveredEndpointInCache(config, options);
    expect(mockGet).toHaveBeenCalledWith(cacheKey);
    expect(mockSet).not.toHaveBeenCalled();
    expect(mockDelete).not.toHaveBeenCalled();
  });

  describe("calls endpointDiscoveryCommandCtor", () => {
    beforeEach(() => {
      mockGet.mockReturnValue(undefined);
    });

    const verifyCallsOnCacheUndefined = () => {
      expect(mockGet).toHaveBeenCalledTimes(1);

      expect(options.endpointDiscoveryCommandCtor).toHaveBeenCalledWith({
        Operation: options.commandName.substr(0, options.commandName.length - 7),
        Identifiers: options.identifiers,
      });
      expect(mockHandler).toHaveBeenCalledTimes(1);
    };

    it("on successful call: updates cache", async () => {
      mockHandler.mockResolvedValueOnce({ output: { Endpoints: mockEndpoints } });

      // @ts-ignore
      await updateDiscoveredEndpointInCache(config, options);

      verifyCallsOnCacheUndefined();
      expect(mockDelete).not.toHaveBeenCalled();
      expect(mockSet).toHaveBeenCalledTimes(2);
      expect(mockSet).toHaveBeenNthCalledWith(1, cacheKey, placeholderEndpoints);
      expect(mockSet).toHaveBeenNthCalledWith(2, cacheKey, mockEndpoints);
    });

    it("calls endpointDiscoveryCommandCtor command just once in case of parallel calls", async () => {
      mockHandler.mockResolvedValueOnce({ output: { Endpoints: mockEndpoints } });
      // First call returns undefined, while other ones return placeholder endpoints a call is in progress
      mockGet
        .mockReturnValueOnce(undefined)
        .mockReturnValueOnce(placeholderEndpoints)
        .mockReturnValueOnce(placeholderEndpoints);

      await Promise.all([
        // @ts-ignore
        updateDiscoveredEndpointInCache(config, options),
        // @ts-ignore
        updateDiscoveredEndpointInCache(config, options),
        // @ts-ignore
        updateDiscoveredEndpointInCache(config, options),
      ]);

      expect(mockGet).toHaveBeenCalledTimes(3);

      expect(options.endpointDiscoveryCommandCtor).toHaveBeenCalledWith({
        Operation: options.commandName.substr(0, options.commandName.length - 7),
        Identifiers: options.identifiers,
      });
      expect(mockHandler).toHaveBeenCalledTimes(1);

      expect(mockDelete).not.toHaveBeenCalled();
      expect(mockSet).toHaveBeenCalledTimes(2);
      expect(mockSet).toHaveBeenNthCalledWith(1, cacheKey, placeholderEndpoints);
      expect(mockSet).toHaveBeenNthCalledWith(2, cacheKey, mockEndpoints);
    });

    describe("on error", () => {
      it(`throws if isDiscoveredEndpointRequired=true`, async () => {
        const error = new Error("rejected");
        mockHandler.mockRejectedValueOnce(error);

        try {
          // @ts-ignore
          await updateDiscoveredEndpointInCache(config, { ...options, isDiscoveredEndpointRequired: true });
          fail("updateDiscoveredEndpointInCache should throw");
        } catch (error) {
          expect(error).toEqual(
            Object.assign(
              new Error(
                `The operation to discover endpoint failed.` +
                  ` Please retry, or provide a custom endpoint and disable endpoint discovery to proceed.`
              ),
              { reason: error }
            )
          );
        }
        verifyCallsOnCacheUndefined();
        expect(mockDelete).not.toHaveBeenCalled();
        expect(mockSet).toHaveBeenCalledTimes(1);
        expect(mockSet).toHaveBeenCalledWith(cacheKey, placeholderEndpoints);
      });

      it(`sets placeholder enpoint if isDiscoveredEndpointRequired=false`, async () => {
        const error = new Error("rejected");
        mockHandler.mockRejectedValueOnce(error);

        // @ts-ignore
        await updateDiscoveredEndpointInCache(config, options);

        verifyCallsOnCacheUndefined();
        expect(mockDelete).not.toHaveBeenCalled();
        expect(mockSet).toHaveBeenCalledTimes(2);
        expect(mockSet).toHaveBeenNthCalledWith(1, cacheKey, placeholderEndpoints);
        expect(mockSet).toHaveBeenNthCalledWith(2, cacheKey, placeholderEndpoints);
      });

      describe(`deletes cacheKey in case of`, () => {
        const verifyCallsOnCacheKeyDelete = () => {
          expect(mockDelete).toHaveBeenCalledWith(cacheKey);
          expect(mockSet).toHaveBeenCalledTimes(2);
          expect(mockSet).toHaveBeenNthCalledWith(1, cacheKey, placeholderEndpoints);
          expect(mockSet).toHaveBeenNthCalledWith(2, cacheKey, placeholderEndpoints);
        };

        it(`InvalidEndpointException`, async () => {
          const error = Object.assign(new Error("Invalid endpoint!"), { name: "InvalidEndpointException" });
          mockHandler.mockRejectedValueOnce(error);

          // @ts-ignore
          await updateDiscoveredEndpointInCache(config, options);
          verifyCallsOnCacheUndefined();
          verifyCallsOnCacheKeyDelete();
        });

        it(`Status code: 421`, async () => {
          const error = Object.assign(new Error("Invalid endpoint!"), { $metadata: { httpStatusCode: 421 } });
          mockHandler.mockRejectedValueOnce(error);

          // @ts-ignore
          await updateDiscoveredEndpointInCache(config, options);
          verifyCallsOnCacheUndefined();
          verifyCallsOnCacheKeyDelete();
        });
      });
    });
  });
});
