import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  HttpAuthOption,
  HttpRequest,
  HttpSigner,
  Identity,
  IdentityProvider,
  RequestSigner,
  RequestSigningArguments,
} from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../backwardsCompatibility/configurations";
import { credentialDefaultProvider } from "../util/provider/credentialDefaultProvider";
import { normalizeIdentityProvider } from "../util/provider/normalizeIdentityProvider";
import { getSkewCorrectedDate } from "../util/time/getSkewCorrectedDate";

/**
 * TODO(identityandauth)
 */
export const SigV4AAuthSchemeId = "aws.auth#sigv4a";

export const SigV4AAuthScheme: AuthScheme = {
  schemeId: SigV4AAuthSchemeId,
  async identity(identityProperties: Record<string, any>): Promise<AwsCredentialIdentity> {
    // if input has credentials
    if (identityProperties.credentials) {
      return await normalizeIdentityProvider(identityProperties.credentials)(identityProperties);
    }
    // if input already has identity
    if (identityProperties.identity) {
      return await normalizeIdentityProvider(identityProperties.identity)(identityProperties);
    }
    // default credential provider
    if (identityProperties.credentialDefaultProvider) {
      return await identityProperties.credentialDefaultProvider(identityProperties)(identityProperties);
    }
    throw new Error("Credential is missing");
  },
  signer: async () => new SigV4ASigner(),
};

export const SigV4AAuthOption: HttpAuthOption = {
  schemeId: SigV4AAuthSchemeId,
  identityProperties: {
    credentialDefaultProvider,
  },
  signerProperties: {
    signingEscapePath: true,
    systemClockOffset: 0,
  },
};

interface SigV4ASignerEndpointsV1Options
  extends Record<string, any>,
    RequestSigningArguments,
    Pick<
      AwsAuthPreviouslyResolved,
      "region" | "sha256" | "regionInfoProvider" | "useFipsEndpoint" | "useDualstackEndpoint" | "serviceId"
    >,
    Partial<Pick<AwsAuthPreviouslyResolved, "signingName">>,
    Partial<Pick<AwsAuthInputConfig, "signingRegion" | "signingEscapePath" | "signerConstructor">> {
  systemClockOffset?: number;
  authScheme: AuthScheme;
  // From context
  signing_region: string;
  signing_service: string;
}

interface SigV4ASignerEndpointsV2Options
  extends Record<string, any>,
    RequestSigningArguments,
    Partial<Pick<AwsAuthInputConfig, "signingRegion" | "signingEscapePath" | "signerConstructor">>,
    Pick<AwsAuthPreviouslyResolved, "defaultSigningName" | "region" | "serviceId" | "sha256">,
    Partial<Pick<AwsAuthPreviouslyResolved, "signingName">> {
  systemClockOffset?: number;
  authScheme: AuthScheme;
  // From context
  signing_region: string;
  signing_service: string;
}

type SigV4ASignerOptions = SigV4ASignerEndpointsV1Options | SigV4ASignerEndpointsV2Options;

export class SigV4ASigner implements HttpSigner<AwsCredentialIdentity> {
  async sign<T>(
    requestToSign: HttpRequest,
    identity: AwsCredentialIdentity,
    signingProperties?: T & SigV4ASignerOptions
  ): Promise<HttpRequest> {
    const signer = this.isEndpointsV1SignerOptions(signingProperties)
      ? await this.getEndpointsV1Signer(identity, signingProperties)
      : await this.getEndpointsV2Signer(identity, signingProperties);

    const signingRegion: string =
      signingProperties.authScheme.signingRegionSet?.join(",") || signingProperties.signing_region;

    return signer.sign(requestToSign, {
      signingDate: getSkewCorrectedDate(signingProperties.systemClockOffset),
      signingRegion,
      signingService: signingProperties.signing_service,
    });
  }

  private isEndpointsV1SignerOptions<T>(
    options: T & SigV4ASignerOptions
  ): options is T & SigV4ASignerEndpointsV1Options {
    return options.regionInfoProvider;
  }

  private async getEndpointsV1Signer<T>(
    identity: AwsCredentialIdentity,
    signingProperties: T & SigV4ASignerEndpointsV1Options
  ): Promise<RequestSigner> {
    const region = await normalizeProvider(signingProperties.region)();
    const regionInfo = await signingProperties.regionInfoProvider(region, {
      useFipsEndpoint: await signingProperties.useFipsEndpoint(),
      useDualstackEndpoint: await signingProperties.useDualstackEndpoint(),
    });
    // Update client's singing region and signing service config if they are resolved.
    // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
    const updatedSigningRegion = signingProperties.signingRegion || regionInfo?.signingRegion || region;

    // Signing name resolving order:
    // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
    const updatedSigningName =
      signingProperties.signingName || regionInfo?.signingService || signingProperties.serviceId;

    const params: SignatureV4Init & SignatureV4CryptoInit = {
      ...signingProperties,
      credentials: identity,
      region: updatedSigningRegion,
      service: updatedSigningName,
      sha256: signingProperties.sha256,
      uriEscapePath: signingProperties.signingEscapePath,
    };
    const signerConstructor = signingProperties.signerConstructor || SignatureV4;
    return new signerConstructor(params);
  }

  private async getEndpointsV2Signer<T>(
    identity: AwsCredentialIdentity,
    signingProperties: T & SigV4ASignerEndpointsV2Options
  ): Promise<RequestSigner> {
    const decoratedAuthScheme = {
      name: "sigv4",
      signingName: signingProperties.signingName || signingProperties.defaultSigningName!,
      signingRegion: await normalizeProvider(signingProperties.region)(),
      properties: {},
      ...signingProperties.authScheme,
    };

    // update client's singing region and signing service config if they are resolved.
    // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
    const updatedSigningRegion = signingProperties.signingRegion || decoratedAuthScheme.signingRegion;
    // signing name resolving order:
    // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
    const updatedSigningService =
      signingProperties.signingName || decoratedAuthScheme.signingName || signingProperties.serviceId;

    const params: SignatureV4Init & SignatureV4CryptoInit = {
      ...signingProperties,
      credentials: identity,
      region: updatedSigningRegion,
      service: updatedSigningService,
      sha256: signingProperties.sha256,
      uriEscapePath: signingProperties.signingEscapePath,
    };

    const signerConstructor = signingProperties.signerConstructor || SignatureV4;
    return new signerConstructor(params);
  }
}
