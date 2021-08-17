import { HttpRequest } from "@aws-sdk/protocol-http";
import { RequestSigner } from "@aws-sdk/types";

import { awsAuthMiddleware } from "./middleware";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";

jest.mock("./utils/getUpdatedSystemClockOffset");

describe("SigningHandler", () => {
  const mockUpdatedSystemClockOffset = 500;
  const noOpSigner: RequestSigner = {
    sign: jest.fn().mockImplementation((request: HttpRequest, options: { signingDate: Date }) =>
      Promise.resolve({
        ...request,
        headers: {
          ...request.headers,
          signed: "true",
          signingDateTime: options.signingDate.getTime(),
        },
      })
    ) as any,
  };
  const noOpNext = jest.fn().mockResolvedValue({ response: "" });

  beforeEach(() => {
    (getUpdatedSystemClockOffset as jest.Mock).mockReturnValue(mockUpdatedSystemClockOffset);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should sign the request and pass it to the next handler", async () => {
    const signingHandler = awsAuthMiddleware({ signer: noOpSigner } as any)(noOpNext, {} as any);
    await signingHandler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    const { calls } = (noOpNext as any).mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0].request.headers.signed).toBe("true");
    expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
  });

  it("should call the signer with the region and service overrides from context", async () => {
    (noOpSigner.sign as jest.Mock).mockClear();
    const handlerContext = {
      signing_region: "us-foo-1",
      signing_service: "BAR",
    };
    const signingHandler = awsAuthMiddleware({ signer: noOpSigner } as any)(noOpNext, handlerContext as any);
    await signingHandler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    expect(noOpSigner.sign).toBeCalled();
    expect((noOpSigner.sign as jest.Mock).mock.calls[0][1]).toMatchObject({
      signingRegion: handlerContext.signing_region,
      signingService: handlerContext.signing_service,
    });
    expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
  });

  it("should add systemClockOffset while signing the request", async () => {
    const systemClockOffset = 1000000;
    const now = Date.now();
    const signingHandler = awsAuthMiddleware({
      signer: noOpSigner,
      systemClockOffset,
    } as any)(noOpNext, {} as any);
    await signingHandler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    const { calls } = (noOpNext as any).mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0].request.headers.signed).toBe("true");
    // Using greater than to ensure there are no timing issues
    expect(calls[0][0].request.headers.signingDateTime).toBeGreaterThan(now + systemClockOffset - 1);
    expect(getUpdatedSystemClockOffset).not.toHaveBeenCalled();
  });

  it("update systemClockOffset if dateHeader is present", async () => {
    const systemClockOffset = 1000;
    const dateHeader = new Date().toString();
    const options = {
      signer: noOpSigner,
      systemClockOffset,
    };
    const signingHandler = awsAuthMiddleware(options as any)(noOpNext, {} as any);
    noOpNext.mockResolvedValue({
      response: {
        headers: {
          date: dateHeader,
        },
      },
    });

    await signingHandler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    expect(options.systemClockOffset).toBe(mockUpdatedSystemClockOffset);
    expect(getUpdatedSystemClockOffset).toHaveBeenCalledTimes(1);
    expect(getUpdatedSystemClockOffset).toHaveBeenCalledWith(dateHeader, systemClockOffset);
  });
});
