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
  const noOpNext = jest.fn().mockReturnValue({ response: "" });

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

  it("should update systemClockOffset while signing the request", async () => {
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

  it("test systemClockOffset updates if there is clockSkew", async () => {
    // Set up clockSkew as abs(newSystemClockOffset - systemClockOffset) > 300000
    const clockSkewPresent = [{ current: 100000, new: 500000 }];
    expect.assertions(clockSkewPresent.length * 3);

    clockSkewPresent.forEach(async clockSkewSet => {
      const systemClockOffset = clockSkewSet.current;
      const newSystemClockOffset = clockSkewSet.new;
      const options = {
        signer: noOpSigner,
        systemClockOffset
      };
      const signingHandler = awsAuthMiddleware(options as any)(
        noOpNext,
        {} as any
      );
      noOpNext.mockReturnValue({
        response: {
          headers: {
            date: new Date(Date.now() + newSystemClockOffset).toString()
          }
        }
      });
      signingHandler({
        input: {},
        request: new HttpRequest({
          headers: {}
        })
      }).then(response => {
        const { calls } = (noOpNext as any).mock;
        expect(calls.length).toBe(1);
        expect(calls[0][0].request.headers.signed).toBe("true");
        expect(options.systemClockOffset).not.toBe(systemClockOffset);
      });
    });
  });
});
