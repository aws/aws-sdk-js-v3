import { HttpRequest } from "@aws-sdk/protocol-http";
import { RequestSigner } from "@aws-sdk/types";

import { awsAuthMiddleware } from "./middleware";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";

jest.mock("./utils/getUpdatedSystemClockOffset");
jest.mock("./utils/getSkewCorrectedDate");

describe(awsAuthMiddleware.name, () => {
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
    const signingHandler = awsAuthMiddleware(mockOptions)(mockNext, {});
    const output = await signingHandler(mockSigningHandlerArgs);

    expect(output).toStrictEqual(mockResponse);
    expect(mockSignFn).toHaveBeenCalledWith(mockSigningHandlerArgs.request, { signingDate: mockSkewCorrectedDate });
    expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
  });

  it("should call the signer with the region and service overrides from context", async () => {
    const handlerContext = { signing_region: "us-foo-1", signing_service: "BAR" };
    const signingHandler = awsAuthMiddleware(mockOptions)(mockNext, handlerContext);
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
    it.each(["date", "Date"])("header[%s]", async (headerName) => {
      const dateHeader = new Date().toString();
      const options = { ...mockOptions };
      const signingHandler = awsAuthMiddleware(options)(mockNext, {});

      const mockResponseWithDateHeader = { response: { headers: { [headerName]: dateHeader } } };
      mockNext.mockResolvedValue(mockResponseWithDateHeader);

      const output = await signingHandler(mockSigningHandlerArgs);

      expect(output).toStrictEqual(mockResponseWithDateHeader);
      expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
      expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
      expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(dateHeader, mockSystemClockOffset);
    });
  });

  it("should update systemClockOffset if error contains ServerTime", async () => {
    const serverTime = new Date().toString();
    const options = { ...mockOptions };
    const signingHandler = awsAuthMiddleware(options)(mockNext, {});

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
