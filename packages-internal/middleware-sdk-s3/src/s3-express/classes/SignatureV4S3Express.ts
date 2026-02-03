import { AwsCredentialIdentity } from "@aws-sdk/types";
import { SignatureV4 } from "@smithy/signature-v4";
import {
  HttpRequest as IHttpRequest,
  Provider,
  RequestPresigningArguments,
  RequestSigningArguments,
} from "@smithy/types";

import { SESSION_TOKEN_HEADER, SESSION_TOKEN_QUERY_PARAM } from "../constants";

export class SignatureV4S3Express extends SignatureV4 {
  /**
   * Signs with alternate provided credentials instead of those provided in the
   * constructor.
   *
   * Additionally omits the credential sessionToken and assigns it to the
   * alternate header field for S3 Express.
   */
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

  /**
   * Similar to {@link SignatureV4S3Express#signWithCredentials} but for presigning.
   */
  public async presignWithCredentials(
    requestToSign: IHttpRequest,
    credentials: AwsCredentialIdentity,
    options?: RequestPresigningArguments
  ): Promise<IHttpRequest> {
    const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);

    // using the query param capitalization to avoid duplication when copying from headers to query.
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

/**
 * Excludes the session token, since the base signer would write that
 * as the security token header.
 */
function getCredentialsWithoutSessionToken(credentials: AwsCredentialIdentity): AwsCredentialIdentity {
  const credentialsWithoutSessionToken: typeof credentials = {
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    expiration: credentials.expiration,
  };
  return credentialsWithoutSessionToken;
}

/**
 * Overrides the signer's credential provider for one call.
 */
function setSingleOverride(
  privateAccess: { credentialProvider: Provider<AwsCredentialIdentity> },
  credentialsWithoutSessionToken: Omit<AwsCredentialIdentity, "sessionToken">
) {
  const id = setTimeout(() => {
    throw new Error("SignatureV4S3Express credential override was created but not called.");
  }, 10);
  const currentCredentialProvider = privateAccess.credentialProvider;
  const overrideCredentialsProviderOnce = (): Promise<AwsCredentialIdentity> => {
    clearTimeout(id);
    privateAccess.credentialProvider = currentCredentialProvider;
    return Promise.resolve(credentialsWithoutSessionToken);
  };
  privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}
