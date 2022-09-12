import { SignatureV4 as BaseSignatureV4 } from "@aws-sdk/signature-v4";
import { AuthScheme, Provider, RequestHandler, RequestSigner } from "@aws-sdk/types";

import { SignatureV4 } from "./signer";

export interface WebSocketInputConfig {}

interface PreviouslyResolved {
  signer: (authScheme: AuthScheme) => Promise<RequestSigner>;
  requestHandler: RequestHandler<any, any>;
}

export interface WebSocketResolvedConfig {
  /**
   * Resolved value of input config {@link AwsAuthInputConfig.signer}
   */
  signer: (authScheme: AuthScheme) => Promise<RequestSigner>;
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler: RequestHandler<any, any>;
}

export const resolveWebSocketConfig = <T>(
  input: T & WebSocketInputConfig & PreviouslyResolved
): T & WebSocketResolvedConfig =>
  input.requestHandler.metadata?.handlerProtocol !== "websocket"
    ? input
    : {
        ...input,
        signer: async (authScheme: AuthScheme) => {
          const signerObj = await input.signer(authScheme);
          if (validateSigner(signerObj)) {
            return new SignatureV4({ signer: signerObj });
          }
          throw new Error("Expected SignatureV4 signer, please check the client constructor.");
        },
      };

const validateSigner = (signer: any): signer is BaseSignatureV4 => !!signer;
