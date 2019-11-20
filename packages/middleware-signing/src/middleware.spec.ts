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

  describe("update systemClockOffset if there is clockSkew", () => {
    // Set up clockSkew as abs(newSystemClockOffset - systemClockOffset) > 300000
    const clockSkewPresent = [
      { current: 100000, new: 500000 },
      { current: -100000, new: 250000 },
      { current: 200000, new: -150000 },
      { current: -100000, new: -450000 }
    ];

    clockSkewPresent.forEach(clockSkewSet => {
      it(`currentClockSkew: ${clockSkewSet.current}, newClockSkew: ${clockSkewSet.new}`, async () => {
        expect.assertions(3);
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

        await signingHandler({
          input: {},
          request: new HttpRequest({
            headers: {}
          })
        });

        const { calls } = (noOpNext as any).mock;
        expect(calls.length).toBe(1);
        expect(calls[0][0].request.headers.signed).toBe("true");
        expect(options.systemClockOffset).not.toBe(systemClockOffset);
      });
    });
  });
});
