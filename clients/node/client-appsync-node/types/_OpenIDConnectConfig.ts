/**
 * <p>Describes an OpenID Connect configuration.</p>
 */
export interface _OpenIDConnectConfig {
  /**
   * <p>The issuer for the OpenID Connect configuration. The issuer returned by discovery must exactly match the value of <code>iss</code> in the ID token.</p>
   */
  issuer: string;

  /**
   * <p>The client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.</p>
   */
  clientId?: string;

  /**
   * <p>The number of milliseconds a token is valid after being issued to a user.</p>
   */
  iatTTL?: number;

  /**
   * <p>The number of milliseconds a token is valid after being authenticated.</p>
   */
  authTTL?: number;
}

export type _UnmarshalledOpenIDConnectConfig = _OpenIDConnectConfig;
