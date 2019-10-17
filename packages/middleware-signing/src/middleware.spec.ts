import { signingMiddleware } from "./middleware";
import { RequestSigner } from "@aws-sdk/types";
import { HttpRequest } from '@aws-sdk/protocol-http';

describe("SigningHandler", () => {
  const noOpSigner: RequestSigner = {
    sign: (request: HttpRequest) =>
      Promise.resolve({
        ...request,
        headers: {
          ...request.headers,
          signed: "true"
        }
      })
  } as any;
  const noOpNext = jest.fn();

  beforeEach(() => {
    (noOpNext as any).mockClear();
  });

  it("should sign the request and pass it to the next handler", async () => {
    const signingHandler = signingMiddleware({ signer: noOpSigner } as any)(noOpNext, {} as any);
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
});
