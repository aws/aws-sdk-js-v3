/**
 * <p>AWS credentials for API authentication.</p>
 */
export interface _Credentials {
  /**
   * <p>The access key ID that identifies the temporary security credentials.</p>
   */
  AccessKeyId: string;

  /**
   * <p>The secret access key that can be used to sign requests.</p>
   */
  SecretAccessKey: string;

  /**
   * <p>The token that users must pass to the service API to use the temporary credentials.</p>
   */
  SessionToken: string;

  /**
   * <p>The date on which the current credentials expire.</p>
   */
  Expiration: Date | string | number;
}

export interface _UnmarshalledCredentials extends _Credentials {
  /**
   * <p>The date on which the current credentials expire.</p>
   */
  Expiration: Date;
}
