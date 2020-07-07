import { resolveRetryConfig } from "./configurations";
import { StandardRetryStrategy } from "./defaultStrategy";

jest.mock("./defaultStrategy");

describe("resolveRetryConfig", () => {
  const maxAttemptsDefaultProvider = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("maxAttempts", () => {
    it("assigns maxAttempts value if present", async () => {
      for (const maxAttempts of [1, 2, 3]) {
        const output = await resolveRetryConfig({
          maxAttempts,
          maxAttemptsDefaultProvider
        }).maxAttempts();
        expect(output).toStrictEqual(maxAttempts.toString());
        expect(maxAttemptsDefaultProvider).not.toHaveBeenCalled();
      }
    });

    it("assigns maxAttemptsDefaultProvider if maxAttempts not present", () => {
      const mockMaxAttempts = jest.fn();
      maxAttemptsDefaultProvider.mockReturnValueOnce(mockMaxAttempts);

      const input = { maxAttemptsDefaultProvider };
      expect(resolveRetryConfig(input).maxAttempts).toStrictEqual(
        mockMaxAttempts
      );

      expect(maxAttemptsDefaultProvider).toHaveBeenCalledTimes(1);
      expect(maxAttemptsDefaultProvider).toHaveBeenCalledWith(input);
    });
  });

  describe("retryStrategy", () => {
    it("passes retryStrategy if present", () => {
      const mockRetryStrategy = {
        retry: jest.fn()
      };
      const { retryStrategy } = resolveRetryConfig({
        retryStrategy: mockRetryStrategy,
        maxAttemptsDefaultProvider
      });
      expect(retryStrategy).toEqual(mockRetryStrategy);
    });

    describe("creates StandardRetryStrategy if retryStrategy not present", () => {
      describe("passes maxAttempts if present", () => {
        for (const maxAttempts of [1, 2, 3]) {
          it(`when maxAttempts=${maxAttempts}`, async () => {
            resolveRetryConfig({
              maxAttempts,
              maxAttemptsDefaultProvider
            });
            expect(StandardRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
            const output = await (StandardRetryStrategy as jest.Mock).mock.calls[0][0]();
            expect(output).toStrictEqual(maxAttempts.toString());
          });
        }
      });

      it("passes maxAttemptsDefaultProvider if maxAttempts is not present", () => {
        const mockMaxAttempts = jest.fn();
        maxAttemptsDefaultProvider.mockReturnValueOnce(mockMaxAttempts);

        resolveRetryConfig({
          maxAttemptsDefaultProvider
        });
        expect(StandardRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
        expect((StandardRetryStrategy as jest.Mock).mock.calls[0][0]).toEqual(
          mockMaxAttempts
        );
      });
    });
  });
});
