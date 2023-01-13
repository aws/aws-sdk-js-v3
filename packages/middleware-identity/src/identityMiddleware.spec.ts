it("test", () => {});

// import { HttpRequest } from "@aws-sdk/protocol-http";

// import { identityMiddleware } from "./identityMiddleware";

// jest.mock("@aws-sdk/protocol-http");

// const ONE_HOUR_IN_MS = 3600 * 1000;

// describe(identityMiddleware.name, () => {

//     describe('tokenMiddleware', () => {

//         const mockToken = {
//             token: "mockAccessToken",
//             expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
//         };
//         const mockTokenProvider = jest.fn().mockReturnValue(Promise.resolve(mockToken));

//         const mockOptions = {
//             identity: mockTokenProvider,
//         };

//         const mockNext = jest.fn();
//         const mockContext = {};
//         const mockArgs = { request: { headers: {} } };

//         afterEach(() => {
//             jest.clearAllMocks();
//         });

//         it("no changes if it's not an HttpRequest", async () => {
//             const { isInstance } = HttpRequest;
//             (isInstance as unknown as jest.Mock).mockReturnValue(false);
//             await identityMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
//             expect(mockNext).toHaveBeenCalledWith(mockArgs);
//             expect(mockOptions.identity).not.toHaveBeenCalled();
//         });

//         describe("HttpRequest", () => {
//             beforeEach(() => {
//                 const { isInstance } = HttpRequest;
//                 (isInstance as unknown as jest.Mock).mockReturnValue(true);
//             });

//             it("re-throws error if token provider fails", async () => {
//                 const mockError = new Error("mockError");
//                 mockOptions.identity.mockRejectedValueOnce(mockError);
//                 try {
//                     await identityMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
//                     fail(`Expected ${mockError}`);
//                 } catch (error) {
//                     expect(error).toStrictEqual(mockError);
//                 }
//                 expect(mockOptions.identity).toHaveBeenCalledTimes(1);
//                 expect(mockNext).not.toHaveBeenCalled();
//             });

//             it("Sets bearer token in authorization", async () => {
//                 await identityMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
//                 expect(mockNext).toHaveBeenCalledWith({
//                     ...mockArgs,
//                     request: { ...mockArgs.request, headers: { Authorization: `Bearer ${mockToken.token}` } },
//                 });
//                 expect(mockOptions.identity).toHaveBeenCalledTimes(1);
//             });
//         });
//     });

//     describe("middleware-signing input config", () => {

//         let mockSignFn: jest.Mock<any, any>;
//         let mockSigner: () => Promise<RequestSigner>;
//         let mockNext;
//         let mockOptions;

//         const mockSystemClockOffset = 100;
//         const mockUpdatedSystemClockOffset = 500;
//         const mockSigningHandlerArgs = {
//             input: {},
//             request: new HttpRequest({
//                 headers: {},
//             }),
//         };
//         const mockSignedRequest = new HttpRequest({ headers: { signed: "true" } });
//         const mockSkewCorrectedDate = new Date();
//         const mockResponse = { response: "" };

//         beforeEach(() => {
//             mockSignFn = jest.fn().mockResolvedValue(mockSignedRequest);
//             mockSigner = () => Promise.resolve({ sign: mockSignFn } as RequestSigner);
//             mockNext = jest.fn().mockResolvedValue(mockResponse);
//             mockOptions = {
//                 credentials: jest.fn(),
//                 signer: mockSigner,
//                 signingEscapePath: true,
//                 systemClockOffset: mockSystemClockOffset,
//             };
//             (getUpdatedSystemClockOffset as jest.Mock).mockReturnValue(mockUpdatedSystemClockOffset);
//             (getSkewCorrectedDate as jest.Mock).mockReturnValue(mockSkewCorrectedDate);
//         });

//         afterEach(() => {
//             expect(getSkewCorrectedDate).toHaveBeenCalledTimes(1);
//             expect(getSkewCorrectedDate).toHaveBeenCalledWith(mockSystemClockOffset);
//             expect(mockSignFn).toHaveBeenCalledTimes(1);
//             expect(mockNext).toHaveBeenCalledTimes(1);
//             expect(mockNext).toHaveBeenCalledWith({ ...mockSigningHandlerArgs, request: mockSignedRequest });
//             jest.clearAllMocks();
//         });

//         it("should sign the request with systemClockOffset", async () => {
//             const signingHandler = identityMiddleware(mockOptions)(mockNext, {});
//             const output = await signingHandler(mockSigningHandlerArgs);

//             expect(output).toStrictEqual(mockResponse);
//             expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, { signingDate: mockSkewCorrectedDate });
//             expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
//         });

//         it("should call the signer with the region and service overrides from context", async () => {
//             const handlerContext = { signing_region: "us-foo-1", signing_service: "BAR" };
//             const signingHandler = identityMiddleware(mockOptions)(mockNext, handlerContext);
//             const output = await signingHandler(mockSigningHandlerArgs);

//             expect(output).toStrictEqual(mockResponse);
//             expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, {
//                 signingDate: mockSkewCorrectedDate,
//                 signingRegion: handlerContext.signing_region,
//                 signingService: handlerContext.signing_service,
//             });
//             expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
//         });

//         describe("should update systemClockOffset if date header is present", () => {
//             it.each(["date", "Date"])("header '%s'", async (headerName) => {
//                 const dateHeader = new Date().toString();
//                 const options = { ...mockOptions };
//                 const signingHandler = identityMiddleware(options)(mockNext, {});

//                 const mockResponseWithDateHeader = { response: { headers: { [headerName]: dateHeader }, statusCode: 200 } };
//                 mockNext.mockResolvedValue(mockResponseWithDateHeader);

//                 const output = await signingHandler(mockSigningHandlerArgs);

//                 expect(output).toStrictEqual(mockResponseWithDateHeader);
//                 expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
//                 expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
//                 expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(dateHeader, mockSystemClockOffset);
//             });

//             it.each(["date", "Date"])("error response with header '%s'", async (headerName) => {
//                 const serverTime = new Date().toString();
//                 const options = { ...mockOptions };
//                 const signingHandler = identityMiddleware(options)(mockNext, {});

//                 const mockError = Object.assign(new Error("error"), {
//                     $response: { statusCode: 400, headers: { [headerName]: serverTime } },
//                 });
//                 mockNext.mockRejectedValue(mockError);

//                 try {
//                     await signingHandler(mockSigningHandlerArgs);
//                     fail(`should throw ${mockError}`);
//                 } catch (error) {
//                     expect(error).toStrictEqual(mockError);
//                 }

//                 expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
//                 expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
//                 expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(serverTime, mockSystemClockOffset);
//             });
//         });

//         it("should update systemClockOffset if error contains ServerTime", async () => {
//             const serverTime = new Date().toString();
//             const options = { ...mockOptions };
//             const signingHandler = identityMiddleware(options)(mockNext, {});

//             const mockError = Object.assign(new Error("error"), { ServerTime: serverTime });
//             mockNext.mockRejectedValue(mockError);

//             try {
//                 await signingHandler(mockSigningHandlerArgs);
//                 fail(`should throw ${mockError}`);
//             } catch (error) {
//                 expect(error).toStrictEqual(mockError);
//             }

//             expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
//             expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
//             expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(serverTime, mockSystemClockOffset);
//         });
//     });

// });

/*
    describe('AuthConfig', () => {

        const authScheme = {
            name: "sigv4",
            signingRegion: "UNIT_TEST_REGION",
            signingName: "UNIT_TEST_SERVICE_NAME",
            properties: {},
        };

        describe("resolveAwsAuthConfig", () => {
            const inputParams = {
                credentialDefaultProvider: () => () => Promise.resolve({ accessKeyId: "key", secretAccessKey: "secret" }),
                region: jest.fn().mockImplementation(() => Promise.resolve("us-foo-1")),
                regionInfoProvider: () => Promise.resolve({ hostname: "foo.com", partition: "aws" }),
                serviceId: "foo",
                sha256: jest.fn().mockReturnValue({
                    update: jest.fn(),
                    digest: jest.fn().mockReturnValue("SHA256 hash"),
                }),
                credentials: jest.fn().mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
                useFipsEndpoint: () => Promise.resolve(false),
                useDualstackEndpoint: () => Promise.resolve(false),
            };

            beforeEach(() => {
                jest.clearAllMocks();
            });

            it("should memoize custom credential provider", async () => {
                const { signer: signerProvider } = resolveIdentityConfig(inputParams);
                const signer = await signerProvider(authScheme);
                const request = new HttpRequest({});
                const repeats = 10;
                for (let i = 0; i < repeats; i++) {
                    await signer.sign(request);
                }
                expect(inputParams.credentials).toBeCalledTimes(1);
            });

            it("should refresh custom credential provider if expired", async () => {
                const FOUR_MINUTES_AND_59_SEC = 299 * 1000;
                const input = {
                    ...inputParams,
                    credentials: jest
                        .fn()
                        .mockResolvedValueOnce({
                            accessKeyId: "key",
                            secretAccessKey: "secret",
                            expiration: new Date(Date.now() + FOUR_MINUTES_AND_59_SEC),
                        })
                        .mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
                };
                const { signer: signerProvider } = resolveIdentityConfig(input);
                const signer = await signerProvider(authScheme);
                const request = new HttpRequest({});
                const repeats = 10;
                for (let i = 0; i < repeats; i++) {
                    await signer.sign(request);
                }
                expect(input.credentials).toBeCalledTimes(2);
            });
        });

        describe("resolveSigV4AuthConfig", () => {
            const inputParams = {
                credentialDefaultProvider: () => () => Promise.resolve({ accessKeyId: "key", secretAccessKey: "secret" }),
                region: jest.fn().mockImplementation(() => Promise.resolve("us-foo-1")),
                signingName: "foo",
                sha256: jest.fn().mockReturnValue({
                    update: jest.fn(),
                    digest: jest.fn().mockReturnValue("SHA256 hash"),
                }),
                credentials: jest.fn().mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
            };

            beforeEach(() => {
                jest.clearAllMocks();
            });

            it("should memoize custom credential provider", async () => {
                const { signer: signerProvider } = resolveIdentityConfig(inputParams);
                const signer = await signerProvider(authScheme);
                const request = new HttpRequest({});
                const repeats = 10;
                for (let i = 0; i < repeats; i++) {
                    await signer.sign(request);
                }
                expect(inputParams.credentials).toBeCalledTimes(1);
            });

            it("should refresh custom credential provider if expired", async () => {
                const FOUR_MINUTES_AND_59_SEC = 299 * 1000;
                const input = {
                    ...inputParams,
                    credentials: jest
                        .fn()
                        .mockResolvedValueOnce({
                            accessKeyId: "key",
                            secretAccessKey: "secret",
                            expiration: new Date(Date.now() + FOUR_MINUTES_AND_59_SEC),
                        })
                        .mockResolvedValue({ accessKeyId: "key", secretAccessKey: "secret" }),
                };
                const { signer: signerProvider } = resolveIdentityConfig(input);
                const signer = await signerProvider(authScheme);
                const request = new HttpRequest({});
                const repeats = 10;
                for (let i = 0; i < repeats; i++) {
                    await signer.sign(request);
                }
                expect(input.credentials).toBeCalledTimes(2);
            });
        });

    });
    */
