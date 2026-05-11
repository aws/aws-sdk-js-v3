import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { SignatureV4 } from "@smithy/signature-v4";
import type {
  HttpRequest as IHttpRequest,
  Provider,
  RequestPresigningArguments,
  RequestSigningArguments,
} from "@smithy/types";

/**
 * @internal
 */
export const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";

/**
 * @internal
 */
export const SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

/**
 * A SignatureV4 signer that supports signing/presigning with alternate credentials.
 * Used for S3 Express session-based auth.
 * @internal
 */
export class SignatureV4SignWithCredentials extends SignatureV4 {
  public async signWithCredentials(
    requestToSign: IHttpRequest,
    credentials: AwsCredentialIdentity,
    options?: RequestSigningArguments
  ): Promise<IHttpRequest> {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
    requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken!;

    const privateAccess = this as unknown as {
      credentialProvider: Provider<AwsCredentialIdentity>;
      signRequest(requestToSign: IHttpRequest, options: RequestSigningArguments): Promise<IHttpRequest>;
    };
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);

    return privateAccess.signRequest(requestToSign, options ?? {});
  }

  public async presignWithCredentials(
    requestToSign: IHttpRequest,
    credentials: AwsCredentialIdentity,
    options?: RequestPresigningArguments
  ): Promise<IHttpRequest> {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);

    delete requestToSign.headers[SESSION_TOKEN_HEADER];
    requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken!;

    requestToSign.query = requestToSign.query ?? {};
    requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken!;

    const privateAccess = this as unknown as {
      credentialProvider: Provider<AwsCredentialIdentity>;
    };
    setSingleOverride(privateAccess, credentialsWithoutSessionToken);

    return this.presign(requestToSign, options);
  }
}

function getCredentialsWithoutSessionToken(credentials: AwsCredentialIdentity): AwsCredentialIdentity {
  return {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration,
  };
}

function setSingleOverride(
  privateAccess: { credentialProvider: Provider<AwsCredentialIdentity> },
  credentialsWithoutSessionToken: Omit<AwsCredentialIdentity, "sessionToken">
) {
  const currentCredentialProvider = privateAccess.credentialProvider;
  privateAccess.credentialProvider = (): Promise<AwsCredentialIdentity> => {
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
}
