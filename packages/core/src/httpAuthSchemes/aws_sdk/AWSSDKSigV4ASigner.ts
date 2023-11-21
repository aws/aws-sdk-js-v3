import { HttpRequest } from "@smithy/protocol-http";
import {
  AuthScheme,
  AwsCredentialIdentity,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  RequestSigner,
} from "@smithy/types";

import { AWSSDKSigV4Config, AWSSDKSigV4Signer } from "./AWSSDKSigV4Signer";
import { getSkewCorrectedDate } from "../utils";
import { throwAWSSDKSigningPropertyError } from "./throwAWSSDKSigningPropertyError";

/**
 * @internal
 */
interface AWSSDKSigV4AAuthSigningProperties {
  config: AWSSDKSigV4Config;
  signer: RequestSigner;
  signingRegionSet?: string;
  signingName?: string;
}

const validateSigningProperties = async (
  signingProperties: Record<string, unknown>
): Promise<AWSSDKSigV4AAuthSigningProperties> => {
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
  const signingRegionSet = (signingProperties?.signingRegionSet as string[] | undefined)?.join(",");
  const signingName = signingProperties?.signingName as string | undefined;
  return {
    config,
    signer,
    signingRegionSet,
    signingName,
  };
};

/**
 * @internal
 */
export class AWSSDKSigV4ASigner extends AWSSDKSigV4Signer {
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
    const { config, signer, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);

    // TODO(experimentalIdentityAndAuth): sigv4a signer
    return await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion: signingRegionSet,
      signingService: signingName,
    });
  }
}
