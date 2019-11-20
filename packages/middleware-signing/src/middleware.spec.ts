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
    expect.assertions(2);
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
    expect.assertions(3);
    const systemClockOffset = 1000000;
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

    clockSkewPresent.forEach(systemClockOffsetVal => {
      it(`current systemClockOffset: ${systemClockOffsetVal.current}, new systemClockOffset: ${systemClockOffsetVal.new}`, async () => {
        expect.assertions(3);
        const systemClockOffset = systemClockOffsetVal.current;
        const newSystemClockOffset = systemClockOffsetVal.new;
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

  describe("do not update systemClockOffset if there is no clockSkew", () => {
    // Do not set up clockSkew as abs(newSystemClockOffset - systemClockOffset) < 300000
    const clockSkewNotPresent = [
      { current: 100000, new: 250000 },
      { current: -100000, new: 50000 },
      { current: 50000, new: -150000 },
      { current: -100000, new: -150000 }
    ];

    clockSkewNotPresent.forEach(systemClockOffsetVal => {
      it(`current systemClockOffset: ${systemClockOffsetVal.current}, new systemClockOffset: ${systemClockOffsetVal.new}`, async () => {
        expect.assertions(3);
        const systemClockOffset = systemClockOffsetVal.current;
        const newSystemClockOffset = systemClockOffsetVal.new;
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
        expect(options.systemClockOffset).toBe(systemClockOffset);
      });
    });
  });
});
