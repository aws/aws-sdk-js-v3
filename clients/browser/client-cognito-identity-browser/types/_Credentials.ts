/**
 * <p>Credentials for the provided identity ID.</p>
 */
export interface _Credentials {
  /**
   * <p>The Access Key portion of the credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The Secret Access Key portion of the credentials</p>
   */
  SecretKey?: string;

  /**
   * <p>The Session Token portion of the credentials</p>
   */
  SessionToken?: string;

  /**
   * <p>The date at which these credentials will expire.</p>
   */
  Expiration?: Date | string | number;
}

export interface _UnmarshalledCredentials extends _Credentials {
  /**
   * <p>The date at which these credentials will expire.</p>
   */
  Expiration?: Date;
}
