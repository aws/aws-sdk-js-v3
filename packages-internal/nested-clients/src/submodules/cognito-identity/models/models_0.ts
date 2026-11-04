// smithy-typescript generated code
/**
 * Input to the `GetCredentialsForIdentity` action.
 *
 * @public
 */
export interface GetCredentialsForIdentityInput {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens. The name-value pair will follow the syntax "provider_name": "provider_user_identifier".
   *
   * Logins should not be specified when trying to get credentials for an unauthenticated identity.
   *
   * The Logins parameter is required when using identities associated with external identity providers such as Facebook. For examples of `Logins` maps, see the code examples in the [External Identity Providers](https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html) section of the Amazon Cognito Developer Guide.
   *
   * @public
   */
  Logins?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.
   *
   * @public
   */
  CustomRoleArn?: string | undefined;
}

/**
 * Credentials for the provided identity ID.
 *
 * @public
 */
export interface Credentials {
  /**
   * The Access Key portion of the credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The Secret Access Key portion of the credentials
   *
   * @public
   */
  SecretKey?: string | undefined;

  /**
   * The Session Token portion of the credentials
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The date at which these credentials will expire.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * Returned in response to a successful `GetCredentialsForIdentity` operation.
 *
 * @public
 */
export interface GetCredentialsForIdentityResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * Credentials for the provided identity ID.
   *
   * @public
   */
  Credentials?: Credentials | undefined;
}

/**
 * Input to the GetId action.
 *
 * @public
 */
export interface GetIdInput {
  /**
   * A standard Amazon Web Services account ID (9+ digits).
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * An identity pool ID in the format REGION:GUID.
   *
   * @public
   */
  IdentityPoolId: string | undefined;

  /**
   * A set of optional name-value pairs that map provider names to provider tokens. The available provider names for `Logins` are as follows:
   *
   * - Facebook: `graph.facebook.com`
   * - Amazon Cognito user pool: `cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>`, for example, `cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789`.
   * - Google: `accounts.google.com`
   * - Amazon: `www.amazon.com`
   * - Twitter: `api.twitter.com`
   * - Digits: `www.digits.com`
   *
   * @public
   */
  Logins?: Record<string, string> | undefined;
}

/**
 * Returned in response to a GetId request.
 *
 * @public
 */
export interface GetIdResponse {
  /**
   * A unique identifier in the format REGION:GUID.
   *
   * @public
   */
  IdentityId?: string | undefined;
}
