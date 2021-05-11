import { getCacheKey } from "./getCacheKey";
import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";

jest.mock("./getCacheKey");

describe(updateDiscoveredEndpointInCache.name, () => {
  const cacheKey = "cacheKey";
  const mockGet = jest.fn();
  const mockSet = jest.fn();
  const mockDelete = jest.fn();
  const mockSend = jest.fn();

  const mockEndpoints = [{ Address: "mockAddress", CachePeriodInMinutes: 1 }];
  const placeholderEndpoints = [{ Address: "", CachePeriodInMinutes: 1 }];

  const config = {
    client: {
      send: mockSend,
      config: {},
    },
    endpointCache: { get: mockGet, set: mockSet, delete: mockDelete },
  };

  const options = {
    commandName: "ExampleCommand",
    endpointDiscoveryCommandCtor: jest.fn(),
    isDiscoveredEndpointRequired: false,
    identifiers: { key: "value" },
  };

  beforeEach(() => {
    (getCacheKey as jest.Mock).mockResolvedValue(cacheKey);
    mockGet.mockReturnValue(mockEndpoints);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it(`returns if endpoints are present in cacheKey`, async () => {
    // @ts-ignore
    await updateDiscoveredEndpointInCache(config, options);
    expect(mockGet).toHaveBeenCalledWith(cacheKey);
    expect(mockSet).not.toHaveBeenCalled();
    expect(mockDelete).not.toHaveBeenCalled();
  });

  it.each([1, 2, 3])(`waits for one minute %d times if endpoints in cache are placeholder endpoints`, async (num) => {
    expect.assertions(num + 4);
    for (let i = 0; i < num; i++) {
      mockGet.mockReturnValueOnce(placeholderEndpoints);
    }
    mockGet.mockReturnValueOnce(mockEndpoints);

    // @ts-ignore
    updateDiscoveredEndpointInCache(config, options).then(() => {
      expect(mockGet).toHaveBeenCalledTimes(num + 1);
      expect(mockSet).not.toHaveBeenCalled();
      expect(mockDelete).not.toHaveBeenCalled();

      expect(setTimeout).toHaveBeenCalledTimes(num);
      for (let i = 0; i < num; i++) {
        expect(setTimeout).toHaveBeenNthCalledWith(i + 1, expect.any(Function), 1000);
      }
    });

    for (let i = 0; i <= num * 3; i++) {
      jest.advanceTimersByTime(1000);
      await Promise.resolve(); // allow any pending jobs in the PromiseJobs queue to run
    }
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
      expect(mockSend).toHaveBeenCalledTimes(1);
    };

    it("on successful call: updates cache", async () => {
      mockSend.mockResolvedValueOnce({ Endpoints: mockEndpoints });

      // @ts-ignore
      await updateDiscoveredEndpointInCache(config, options);

      verifyCallsOnCacheUndefined();
      expect(mockDelete).not.toHaveBeenCalled();
      expect(mockSet).toHaveBeenCalledTimes(2);
      expect(mockSet).toHaveBeenNthCalledWith(1, cacheKey, placeholderEndpoints);
      expect(mockSet).toHaveBeenNthCalledWith(2, cacheKey, mockEndpoints);
    });

    describe("on error", () => {
      it(`throws if isDiscoveredEndpointRequired=true`, async () => {
        const error = new Error("rejected");
        mockSend.mockRejectedValueOnce(error);

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
        mockSend.mockRejectedValueOnce(error);

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
          mockSend.mockRejectedValueOnce(error);

          // @ts-ignore
          await updateDiscoveredEndpointInCache(config, options);
          verifyCallsOnCacheUndefined();
          verifyCallsOnCacheKeyDelete();
        });

        it(`Status code: 421`, async () => {
          const error = Object.assign(new Error("Invalid endpoint!"), { $metadata: { httpStatusCode: 421 } });
          mockSend.mockRejectedValueOnce(error);

          // @ts-ignore
          await updateDiscoveredEndpointInCache(config, options);
          verifyCallsOnCacheUndefined();
          verifyCallsOnCacheKeyDelete();
        });
      });
    });
  });
});
