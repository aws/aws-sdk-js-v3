import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "./signer";
describe("transcribe streaming", () => {
  describe("WebSocket request signer", () => {
    it("should invoke base SigV4 signer correctly", async () => {
      expect.assertions(5);
      const toSign = new HttpRequest({
        headers: {
          "x-amz-foo": "foo",
          bar: "bar",
          "amz-sdk-invocation-id": "123",
          "amz-sdk-request": "attempt=1",
          host: "aws.amazon.com"
        },
        body: "hello world",
        query: {
          prop1: "A",
          prop2: "B"
        }
      });
      const mockBaseSigner = {
        presign: jest
          .fn()
          .mockImplementation(request => Promise.resolve(request))
      };
      const signer = new SignatureV4({ signer: mockBaseSigner as any });
      const signed = await signer.sign(toSign);
      expect(toSign).toMatchObject(signed);
      expect(mockBaseSigner.presign).toBeCalled();
      // The request's body should not be presigned
      expect(mockBaseSigner.presign.mock.calls[0][0].body).toEqual("");
      expect(
        mockBaseSigner.presign.mock.calls[0][1]!.unsignableHeaders
      ).toBeDefined();
      const unsignableHeaders: Set<string> = mockBaseSigner.presign.mock
        .calls[0][1]!.unsignableHeaders;
      expect([...unsignableHeaders.entries()].map(([value]) => value)).toEqual(
        Object.keys(toSign.headers).filter(a => a !== "host")
      );
    });
  });
});
