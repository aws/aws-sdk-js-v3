import { SignatureV4 as BaseSignatureV4 } from "@aws-sdk/signature-v4";
import { Provider, RequestHandler, RequestSigner } from "@aws-sdk/types";

import { SignatureV4 } from "./signer";

export interface WebSocketInputConfig {}

interface PreviouslyResolved {
  signer: Provider<RequestSigner>;
  requestHandler: RequestHandler<any, any>;
}

export interface WebSocketResolvedConfig {
  signer: Provider<RequestSigner>;
  requestHandler: RequestHandler<any, any>;
}

export const resolveWebSocketConfig = <T>(
  input: T & WebSocketInputConfig & PreviouslyResolved
): T & WebSocketResolvedConfig =>
  input.requestHandler.metadata?.handlerProtocol !== "websocket"
    ? input
    : {
        ...input,
        signer: async () => {
          const signerObj = await input.signer();
          if (validateSigner(signerObj)) {
            return new SignatureV4({ signer: signerObj });
          }
          throw new Error("Expected SignatureV4 signer, please check the client constructor.");
        },
      };

const validateSigner = (signer: any): signer is BaseSignatureV4 =>
  // We cannot use instanceof here. Because we might import the wrong SignatureV4
  // constructor here as multiple version of packages maybe installed here.
  (signer.constructor.toString() as string).indexOf("SignatureV4") >= 0;
