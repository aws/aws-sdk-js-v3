import { awsAuthMiddleware } from "./middleware";
import { RequestSigner } from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("SigningHandler", () => {
  const noOpSigner: RequestSigner = {
    sign: (request: HttpRequest, options: { signingDate: Date }) =>
      Promise.resolve({
        ...request,
        headers: {
          ...request.headers,
          signed: "true",
          signingDateTime: options.signingDate.getTime()
        }
      })
  } as any;
  const noOpNext = jest.fn();

  beforeEach(() => {
    (noOpNext as any).mockClear();
  });

  it("should sign the request and pass it to the next handler", async () => {
    const signingHandler = awsAuthMiddleware({ signer: noOpSigner } as any)(
      noOpNext,
      {} as any
    );
    await signingHandler({
      input: {},
      request: new HttpRequest({
        headers: {}
      })
    });

    const { calls } = (noOpNext as any).mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0].request.headers.signed).toBe("true");
  });

  it("should add systemClockOffset while signing the request", async () => {
    const systemClockOffset = 100000;
    const now = Date.now();
    const signingHandler = awsAuthMiddleware({
      signer: noOpSigner,
      systemClockOffset
    } as any)(noOpNext, {} as any);
    await signingHandler({
      input: {},
      request: new HttpRequest({
        headers: {}
      })
    });

    const { calls } = (noOpNext as any).mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0].request.headers.signed).toBe("true");
    // Using greater than to ensure there are no timing issues
    expect(calls[0][0].request.headers.signingDateTime).toBeGreaterThan(
      now + systemClockOffset - 1
    );
  });
});
