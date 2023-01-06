import { HttpRequest } from "@aws-sdk/protocol-http";

import { identityMiddleware } from "./identityMiddleware";

jest.mock("@aws-sdk/protocol-http");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(identityMiddleware.name, () => {

    describe('tokenMiddleware', () => {

        const mockToken = {
            token: "mockAccessToken",
            expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
        };
        const mockTokenProvider = jest.fn().mockReturnValue(Promise.resolve(mockToken));

        const mockOptions = {
            identity: mockTokenProvider,
        };

        const mockNext = jest.fn();
        const mockContext = {};
        const mockArgs = { request: { headers: {} } };

        afterEach(() => {
            jest.clearAllMocks();
        });

        it("no changes if it's not an HttpRequest", async () => {
            const { isInstance } = HttpRequest;
            (isInstance as unknown as jest.Mock).mockReturnValue(false);
            await identityMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
            expect(mockNext).toHaveBeenCalledWith(mockArgs);
            expect(mockOptions.identity).not.toHaveBeenCalled();
        });

        describe("HttpRequest", () => {
            beforeEach(() => {
                const { isInstance } = HttpRequest;
                (isInstance as unknown as jest.Mock).mockReturnValue(true);
            });

            it("re-throws error if token provider fails", async () => {
                const mockError = new Error("mockError");
                mockOptions.identity.mockRejectedValueOnce(mockError);
                try {
                    await identityMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
                    fail(`Expected ${mockError}`);
                } catch (error) {
                    expect(error).toStrictEqual(mockError);
                }
                expect(mockOptions.identity).toHaveBeenCalledTimes(1);
                expect(mockNext).not.toHaveBeenCalled();
            });

            it("Sets bearer token in authorization", async () => {
                await identityMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
                expect(mockNext).toHaveBeenCalledWith({
                    ...mockArgs,
                    request: { ...mockArgs.request, headers: { Authorization: `Bearer ${mockToken.token}` } },
                });
                expect(mockOptions.identity).toHaveBeenCalledTimes(1);
            });
        });
    });

});
