// TODO: remove this file as duplicated to @aws-sdk/middleware-websocket
import { HttpRequest } from "@smithy/protocol-http";
import { RequestPresigningArguments, RequestSigningArguments } from "@smithy/types";

import { WebsocketSignatureV4 } from "./WebsocketSignatureV4";

jest.mock("@smithy/protocol-http");

describe("WebsocketSignatureV4", () => {
  const mockPresignedRequest = { req: "mockPresignedRequest" };
  const mockSignedRequest = { req: "mockSignedRequest" };

  const presign = jest.fn().mockResolvedValue(mockPresignedRequest);
  const sign = jest.fn().mockResolvedValue(mockSignedRequest);

  const headers = {
    "x-amz-foo": "foo",
    bar: "bar",
    host: "aws.amazon.com",
  };
  const body = "body";
  const method = "method";

  const request = { headers, body, method, protocol: "wss:" };
  const sigV4 = new WebsocketSignatureV4({ signer: { sign, presign } as any });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("presign", () => {
    const expectPresignArgs = (result: any, options: RequestPresigningArguments = {}) => {
      expect(result).toStrictEqual(mockPresignedRequest);
      expect(sign).not.toHaveBeenCalled();
      expect(presign).toHaveBeenCalledTimes(1);
      expect(presign).toHaveBeenCalledWith(request, options);
    };

    it("without options", async () => {
      const result = await sigV4.presign(request as any);
      expectPresignArgs(result);
    });

    it("with options", async () => {
      const options = {
        expiresIn: 60,
      };
      const result = await sigV4.presign(request as any, options);
      expectPresignArgs(result, options);
    });
  });

  describe("sign", () => {
    describe("calls presign when HttpRequest.isInstance returns true", () => {
      const { isInstance } = HttpRequest;

      beforeEach(() => {
        (isInstance as unknown as jest.Mock).mockReturnValueOnce(true);
      });

      const expectSignArgs = (result: any) => {
        expect(result).toStrictEqual({
          ...mockPresignedRequest,
          body: request.body,
        });
        expect(isInstance).toHaveBeenCalledTimes(1);
        expect(isInstance).toHaveBeenCalledWith(request);
        expect(presign).toHaveBeenCalledTimes(1);
        expect(presign).toHaveBeenCalledWith(
          { ...request, body: "" },
          {
            expiresIn: 60,
            unsignableHeaders: new Set(Object.keys(request.headers).filter((header) => header !== "host")),
          }
        );
        expect(sign).not.toHaveBeenCalled();
      };

      it("without options", async () => {
        const result = await sigV4.sign(request as any);
        expectSignArgs(result);
      });

      it("with options", async () => {
        const options = {
          unsignableHeaders: new Set(Object.keys(headers)),
        };
        const result = await sigV4.sign(request as any, options);
        expectSignArgs(result);
      });
    });

    describe("calls sign when HttpRequest.isInstance returns false", () => {
      const { isInstance } = HttpRequest;

      beforeEach(() => {
        (isInstance as unknown as jest.Mock).mockReturnValueOnce(false);
      });

      const expectSignArgs = (result: any, options?: RequestSigningArguments) => {
        expect(result).toStrictEqual(mockSignedRequest);
        expect(isInstance).toHaveBeenCalledTimes(1);
        expect(isInstance).toHaveBeenCalledWith(request);
        expect(sign).toHaveBeenCalledTimes(1);
        expect(sign).toHaveBeenCalledWith(request, options);
        expect(presign).not.toHaveBeenCalled();
      };

      it("without options", async () => {
        const result = await sigV4.sign(request as any);
        expectSignArgs(result);
      });

      it("with options", async () => {
        const options = {
          unsignableHeaders: new Set(Object.keys(headers)),
        };
        const result = await sigV4.sign(request as any, options);
        expectSignArgs(result, options);
      });
    });
  });
});
