import { SignatureV4Init, SignatureV4CryptoInit, SignatureV4 } from "@aws-sdk/signature-v4";
import { AuthScheme, AwsCredentialIdentity, HandlerExecutionContext, HttpRequest, RequestSigner, RequestSigningArguments } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";
import { AuthPreviouslyResolved, AwsAuthInputConfig, AwsAuthPreviouslyResolved, HttpSigner } from "../../configurations.2";
import { getSkewCorrectedDate } from "../time/getSkewCorrectedDate";

interface EndpointsV1SignerOptions extends
  Pick<AwsAuthPreviouslyResolved, "region" | "sha256" | "regionInfoProvider" | "useFipsEndpoint" | "useDualstackEndpoint" | "serviceId">,
  Partial<Pick<AwsAuthPreviouslyResolved, "signingName">>,
  Partial<Pick<AwsAuthInputConfig, "signingRegion" | "signingEscapePath" | "signerConstructor">> { }

interface EndpointsV2SignerOptions extends
  Partial<Pick<AwsAuthInputConfig, "signingRegion" | "signingEscapePath" | "signerConstructor">>,
  Pick<AwsAuthPreviouslyResolved, "defaultSigningName" | "region" | "serviceId" | "sha256">,
  Partial<Pick<AwsAuthPreviouslyResolved, "signingName">> { };

type AwsAuthSignerProperties =
  Record<string, any> &
  Partial<Pick<AwsAuthPreviouslyResolved, "regionInfoProvider">> &
  Partial<Pick<AuthPreviouslyResolved, "authScheme">> &
  (EndpointsV1SignerOptions | EndpointsV2SignerOptions) &
  Pick<AwsAuthInputConfig, "systemClockOffset"> &
  { context: HandlerExecutionContext; };

export class AwsAuthSigner implements HttpSigner<AwsCredentialIdentity> {
  async sign(
    requestToSign: HttpRequest,
    identity: AwsCredentialIdentity,
    signingProperties?: AwsAuthSignerProperties
  ): Promise<HttpRequest> {
    const signer = signingProperties.regionInfoProvider
      ? await this.getEndpointsV1Signer(identity, signingProperties as EndpointsV1SignerOptions)
      : await this.getEndpointsV2Signer(identity, signingProperties as EndpointsV2SignerOptions);

    const authScheme: AuthScheme | undefined = signingProperties.authScheme;

    const multiRegionOverride: string | undefined = authScheme?.name === "sigv4a"
      ? signingProperties.authScheme?.signingRegionSet?.join(",")
      : undefined;

    return signer.sign(requestToSign, {
      signingDate: getSkewCorrectedDate(signingProperties.systemClockOffset),
      signingRegion: multiRegionOverride || signingProperties.context.signing_region,
      signingService: signingProperties.context.signing_service,
    });
  }

  private async getEndpointsV1Signer<T extends AwsCredentialIdentity>(
    identity: T,
    signingProperties: Record<string, any> & RequestSigningArguments & EndpointsV1SignerOptions
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
    const updatedSigningName = signingProperties.signingName || regionInfo?.signingService || signingProperties.serviceId;

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

  private async getEndpointsV2Signer(
    identity: AwsCredentialIdentity,
    signingProperties: Record<string, any> & RequestSigningArguments & EndpointsV2SignerOptions
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
    const updatedSigningService = signingProperties.signingName || decoratedAuthScheme.signingName || signingProperties.serviceId;

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
