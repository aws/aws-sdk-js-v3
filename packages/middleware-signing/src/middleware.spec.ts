import { HttpRequest } from "@aws-sdk/protocol-http";
import { RequestSigner } from "@aws-sdk/types";

import { awsAuthMiddleware } from "./middleware";

describe("SigningHandler", () => {
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
    (noOpNext as any).mockClear();
  });

  it("should sign the request and pass it to the next handler", async () => {
    expect.assertions(2);
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
  });

  it("should add systemClockOffset while signing the request", async () => {
    expect.assertions(3);
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
  });

  describe("update systemClockOffset if there is clockSkew", () => {
    // Set up clockSkew as abs(newSystemClockOffset - systemClockOffset) > 300000
    it.each([
      // Difference of 400000 in various cases
      [100000, 500000],
      [-100000, 300000],
      [200000, -100000],
      [-100000, -400000],

      // Difference of 300100 (close to 300000)
      [0, 301000],
    ])("current systemClockOffset: %d, new systemClockOffset: %d", async (systemClockOffset, newSystemClockOffset) => {
      expect.assertions(3);
      const options = {
        signer: noOpSigner,
        systemClockOffset,
      };
      const signingHandler = awsAuthMiddleware(options as any)(noOpNext, {} as any);
      noOpNext.mockResolvedValue({
        response: {
          headers: {
            date: new Date(Date.now() + newSystemClockOffset).toString(),
          },
        },
      });

      await signingHandler({
        input: {},
        request: new HttpRequest({
          headers: {},
        }),
      });

      const { calls } = (noOpNext as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0][0].request.headers.signed).toBe("true");
      expect(options.systemClockOffset).not.toBe(systemClockOffset);
    });
  });

  describe("do not update systemClockOffset if there is no clockSkew", () => {
    // Do not set up clockSkew as abs(newSystemClockOffset - systemClockOffset) < 300000
    it.each([
      // Difference of 150000 in various cases
      [100000, 250000],
      [-100000, 50000],
      [50000, -150000],
      [-100000, -150000],

      // No difference
      [0, 0],

      // Difference of 299000 (close to 300000)
      [0, 299000],
    ])("current systemClockOffset: %d, new systemClockOffset: %d", async (systemClockOffset, newSystemClockOffset) => {
      expect.assertions(3);
      const options = {
        signer: noOpSigner,
        systemClockOffset,
      };

      const signingHandler = awsAuthMiddleware(options as any)(noOpNext, {} as any);
      noOpNext.mockResolvedValue({
        response: {
          headers: {
            date: new Date(Date.now() + newSystemClockOffset).toString(),
          },
        },
      });

      await signingHandler({
        input: {},
        request: new HttpRequest({
          headers: {},
        }),
      });

      const { calls } = (noOpNext as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0][0].request.headers.signed).toBe("true");
      expect(options.systemClockOffset).toBe(systemClockOffset);
    });
  });
});
