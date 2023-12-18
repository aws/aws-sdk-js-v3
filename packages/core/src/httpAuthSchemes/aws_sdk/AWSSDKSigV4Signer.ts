import { HttpRequest } from "@smithy/protocol-http";
import { ServiceException } from "@smithy/smithy-client";
import {
  AuthScheme,
  AwsCredentialIdentity,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  HttpResponse,
  HttpSigner,
  RequestSigner,
} from "@smithy/types";

import { getDateHeader, getSkewCorrectedDate, getUpdatedSystemClockOffset } from "../utils";
import { throwAWSSDKSigningPropertyError } from "./throwAWSSDKSigningPropertyError";

/**
 * @internal
 */
interface AWSSDKSigV4Config {
  systemClockOffset: number;
  signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
}

/**
 * @internal
 */
interface AWSSDKSigV4AuthSigningProperties {
  config: AWSSDKSigV4Config;
  signer: RequestSigner;
  signingRegion?: string;
  signingName?: string;
}

/**
 * @internal
 */
interface AWSSDKSigV4Exception extends ServiceException {
  ServerTime?: string;
}

/**
 * @internal
 */
const validateSigningProperties = async (
  signingProperties: Record<string, unknown>
): Promise<AWSSDKSigV4AuthSigningProperties> => {
  const context = throwAWSSDKSigningPropertyError(
    "context",
    signingProperties.context as HandlerExecutionContext | undefined
  );
  const config = throwAWSSDKSigningPropertyError("config", signingProperties.config as AWSSDKSigV4Config | undefined);
  const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwAWSSDKSigningPropertyError(
    "signer",
    config.signer as ((authScheme?: AuthScheme) => Promise<RequestSigner>) | undefined
  );
  const signer = await signerFunction(authScheme);
  const signingRegion: string | undefined = signingProperties?.signingRegion as string | undefined;
  const signingName = signingProperties?.signingName as string | undefined;
  return {
    config,
    signer,
    signingRegion,
    signingName,
  };
};

/**
 * @internal
 */
export class AWSSDKSigV4Signer implements HttpSigner {
  async sign(
    httpRequest: IHttpRequest,
    /**
     * `identity` is bound in {@link resolveAWSSDKSigV4Config}
     */
    identity: AwsCredentialIdentity,
    signingProperties: Record<string, unknown>
  ): Promise<IHttpRequest> {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);

    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion: signingRegion,
      signingService: signingName,
    });
    return signedRequest;
  }

  errorHandler(signingProperties: Record<string, unknown>): (error: Error) => never {
    return (error: Error) => {
      const serverTime: string | undefined =
        (error as AWSSDKSigV4Exception).ServerTime ?? getDateHeader((error as AWSSDKSigV4Exception).$response);
      if (serverTime) {
        const config = throwAWSSDKSigningPropertyError(
          "config",
          signingProperties.config as AWSSDKSigV4Config | undefined
        );
        config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
      }
      throw error;
    };
  }

  successHandler(httpResponse: HttpResponse | unknown, signingProperties: Record<string, unknown>): void {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config = throwAWSSDKSigningPropertyError(
        "config",
        signingProperties.config as AWSSDKSigV4Config | undefined
      );
      config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
    }
  }
}
