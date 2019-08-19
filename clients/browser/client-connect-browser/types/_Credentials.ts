/**
 * <p>The credentials to use for federation.</p>
 */
export interface _Credentials {
  /**
   * <p>An access token generated for a federated user to access Amazon Connect</p>
   */
  AccessToken?: string;

  /**
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect</p>
   */
  AccessTokenExpiration?: Date | string | number;

  /**
   * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
   */
  RefreshToken?: string;

  /**
   * <p>Renews the expiration timer for a generated token.</p>
   */
  RefreshTokenExpiration?: Date | string | number;
}

export interface _UnmarshalledCredentials extends _Credentials {
  /**
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect</p>
   */
  AccessTokenExpiration?: Date;

  /**
   * <p>Renews the expiration timer for a generated token.</p>
   */
  RefreshTokenExpiration?: Date;
}
