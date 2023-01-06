import { HttpRequest } from "@aws-sdk/protocol-http";
import { RequestSigner } from "@aws-sdk/types";

import { getIdentityPlugin } from "./getIdentityPlugin";
import { identityMiddleware, IdentityMiddlewareOptions } from "./identityMiddleware";
import { getSkewCorrectedDate } from "./util/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./util/getUpdatedSystemClockOffset";

jest.mock("./identityMiddleware");
jest.mock("./utils/getUpdatedSystemClockOffset");
jest.mock("./utils/getSkewCorrectedDate");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(getIdentityPlugin.name, () => {

    describe("tokenMiddleware input config", () => {

        it("applyToStack adds identityMiddleware", () => {
            const pluginConfig = {
                token: () =>
                    Promise.resolve({
                        token: "mockOutputAccessToken",
                        expiration: new Date(Date.now() + 2 * ONE_HOUR_IN_MS),
                    }),
            };

            const middlewareReturn = {};
            (identityMiddleware as jest.Mock).mockReturnValueOnce(middlewareReturn);

            // @ts-ignore
            const plugin = getIdentityPlugin(pluginConfig);
            const commandStack = { addRelativeTo: jest.fn() };

            // @ts-ignore
            plugin.applyToStack(commandStack);
            expect(commandStack.addRelativeTo).toHaveBeenCalledWith(middlewareReturn, IdentityMiddlewareOptions);
            expect(identityMiddleware).toHaveBeenCalled();
            expect(identityMiddleware).toHaveBeenCalledWith(pluginConfig);
            jest.clearAllMocks();
        });

    });

    describe("middleware-signing input config", () => {

        let mockSignFn: jest.Mock<any, any>;
        let mockSigner: () => Promise<RequestSigner>;
        let mockNext;
        let mockOptions;

        const mockSystemClockOffset = 100;
        const mockUpdatedSystemClockOffset = 500;
        const mockSigningHandlerArgs = {
            input: {},
            request: new HttpRequest({
                headers: {},
            }),
        };
        const mockSignedRequest = new HttpRequest({ headers: { signed: "true" } });
        const mockSkewCorrectedDate = new Date();
        const mockResponse = { response: "" };

        beforeEach(() => {
            mockSignFn = jest.fn().mockResolvedValue(mockSignedRequest);
            mockSigner = () => Promise.resolve({ sign: mockSignFn } as RequestSigner);
            mockNext = jest.fn().mockResolvedValue(mockResponse);
            mockOptions = {
                credentials: jest.fn(),
                signer: mockSigner,
                signingEscapePath: true,
                systemClockOffset: mockSystemClockOffset,
            };
            (getUpdatedSystemClockOffset as jest.Mock).mockReturnValue(mockUpdatedSystemClockOffset);
            (getSkewCorrectedDate as jest.Mock).mockReturnValue(mockSkewCorrectedDate);
        });

        afterEach(() => {
            expect(getSkewCorrectedDate).toHaveBeenCalledTimes(1);
            expect(getSkewCorrectedDate).toHaveBeenCalledWith(mockSystemClockOffset);
            expect(mockSignFn).toHaveBeenCalledTimes(1);
            expect(mockNext).toHaveBeenCalledTimes(1);
            expect(mockNext).toHaveBeenCalledWith({ ...mockSigningHandlerArgs, request: mockSignedRequest });
            jest.clearAllMocks();
        });

        it("should sign the request with systemClockOffset", async () => {
            const signingHandler = identityMiddleware(mockOptions)(mockNext, {});
            const output = await signingHandler(mockSigningHandlerArgs);

            expect(output).toStrictEqual(mockResponse);
            expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, { signingDate: mockSkewCorrectedDate });
            expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
        });

        it("should call the signer with the region and service overrides from context", async () => {
            const handlerContext = { signing_region: "us-foo-1", signing_service: "BAR" };
            const signingHandler = identityMiddleware(mockOptions)(mockNext, handlerContext);
            const output = await signingHandler(mockSigningHandlerArgs);

            expect(output).toStrictEqual(mockResponse);
            expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, {
                signingDate: mockSkewCorrectedDate,
                signingRegion: handlerContext.signing_region,
                signingService: handlerContext.signing_service,
            });
            expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
        });

        describe("should update systemClockOffset if date header is present", () => {
            it.each(["date", "Date"])("header '%s'", async (headerName) => {
                const dateHeader = new Date().toString();
                const options = { ...mockOptions };
                const signingHandler = identityMiddleware(options)(mockNext, {});

                const mockResponseWithDateHeader = { response: { headers: { [headerName]: dateHeader }, statusCode: 200 } };
                mockNext.mockResolvedValue(mockResponseWithDateHeader);

                const output = await signingHandler(mockSigningHandlerArgs);

                expect(output).toStrictEqual(mockResponseWithDateHeader);
                expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
                expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
                expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(dateHeader, mockSystemClockOffset);
            });

            it.each(["date", "Date"])("error response with header '%s'", async (headerName) => {
                const serverTime = new Date().toString();
                const options = { ...mockOptions };
                const signingHandler = identityMiddleware(options)(mockNext, {});

                const mockError = Object.assign(new Error("error"), {
                    $response: { statusCode: 400, headers: { [headerName]: serverTime } },
                });
                mockNext.mockRejectedValue(mockError);

                try {
                    await signingHandler(mockSigningHandlerArgs);
                    fail(`should throw ${mockError}`);
                } catch (error) {
                    expect(error).toStrictEqual(mockError);
                }

                expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
                expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
                expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(serverTime, mockSystemClockOffset);
            });
        });

        it("should update systemClockOffset if error contains ServerTime", async () => {
            const serverTime = new Date().toString();
            const options = { ...mockOptions };
            const signingHandler = identityMiddleware(options)(mockNext, {});

            const mockError = Object.assign(new Error("error"), { ServerTime: serverTime });
            mockNext.mockRejectedValue(mockError);

            try {
                await signingHandler(mockSigningHandlerArgs);
                fail(`should throw ${mockError}`);
            } catch (error) {
                expect(error).toStrictEqual(mockError);
            }

            expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
            expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
            expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(serverTime, mockSystemClockOffset);
        });
    });

});
