import { HttpRequest } from "@smithy/core/protocols";
import type { AwsCredentialIdentity, HttpRequest as IHttpRequest } from "@smithy/types";

import { getSkewCorrectedDate } from "../utils";
import { AwsSdkSigV4Signer, validateSigningProperties } from "./AwsSdkSigV4Signer";

/**
 * @internal
 * Note: this is not a signing algorithm implementation. The sign method
 * accepts the real signer as an input parameter.
 */
export class AwsSdkSigV4ASigner extends AwsSdkSigV4Signer {
  async sign(
    httpRequest: IHttpRequest,
    identity: AwsCredentialIdentity,
    signingProperties: Record<string, unknown>
  ): Promise<IHttpRequest> {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }

    const { config, signer, signingRegion, signingRegionSet, signingName } =
      await validateSigningProperties(signingProperties);

    const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();

    const multiRegionOverride: string | undefined = (
      configResolvedSigningRegionSet ??
      signingRegionSet ?? [signingRegion]
    ).join(",");

    signingProperties._preRequestSystemClockOffset = config.systemClockOffset;
    // Capture the raw send time (no skew applied) for the midpoint skew formula.
    signingProperties._requestSentAt = Date.now();
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config.systemClockOffset),
      signingRegion: multiRegionOverride,
      signingService: signingName,
    });
    return signedRequest;
  }
}
