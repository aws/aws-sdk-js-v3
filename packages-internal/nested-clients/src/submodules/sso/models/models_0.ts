// smithy-typescript generated code
/**
 * @public
 */
export interface GetRoleCredentialsRequest {
  /**
   * The friendly name of the role that is assigned to the user.
   *
   * @public
   */
  roleName: string | undefined;

  /**
   * The identifier for the AWS account that is assigned to the user.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The token issued by the `CreateToken` API call. For more information, see [CreateToken](https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html) in the *IAM Identity Center OIDC API Reference Guide*.
   *
   * @public
   */
  accessToken: string | undefined;
}

/**
 * Provides information about the role credentials that are assigned to the user.
 *
 * @public
 */
export interface RoleCredentials {
  /**
   * The identifier used for the temporary security credentials. For more information, see [Using Temporary Security Credentials to Request Access to AWS Resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html) in the *AWS IAM User Guide*.
   *
   * @public
   */
  accessKeyId?: string | undefined;

  /**
   * The key that is used to sign the request. For more information, see [Using Temporary Security Credentials to Request Access to AWS Resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html) in the *AWS IAM User Guide*.
   *
   * @public
   */
  secretAccessKey?: string | undefined;

  /**
   * The token used for temporary credentials. For more information, see [Using Temporary Security Credentials to Request Access to AWS Resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html) in the *AWS IAM User Guide*.
   *
   * @public
   */
  sessionToken?: string | undefined;

  /**
   * The date on which temporary security credentials expire.
   *
   * @public
   */
  expiration?: number | undefined;
}

/**
 * @public
 */
export interface GetRoleCredentialsResponse {
  /**
   * The credentials for the role that is assigned to the user.
   *
   * @public
   */
  roleCredentials?: RoleCredentials | undefined;
}
