// smithy-typescript generated code
/**
 * Provides information about your AWS account.
 *
 * @public
 */
export interface AccountInfo {
  /**
   * The identifier of the AWS account that is assigned to the user.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The display name of the AWS account that is assigned to the user.
   *
   * @public
   */
  accountName?: string | undefined;

  /**
   * The email address of the AWS account that is assigned to the user.
   *
   * @public
   */
  emailAddress?: string | undefined;
}

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

/**
 * @public
 */
export interface ListAccountRolesRequest {
  /**
   * The page token from the previous response output when you request subsequent pages.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of items that clients can request per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token issued by the `CreateToken` API call. For more information, see [CreateToken](https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html) in the *IAM Identity Center OIDC API Reference Guide*.
   *
   * @public
   */
  accessToken: string | undefined;

  /**
   * The identifier for the AWS account that is assigned to the user.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Provides information about the role that is assigned to the user.
 *
 * @public
 */
export interface RoleInfo {
  /**
   * The friendly name of the role that is assigned to the user.
   *
   * @public
   */
  roleName?: string | undefined;

  /**
   * The identifier of the AWS account assigned to the user.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountRolesResponse {
  /**
   * The page token client that is used to retrieve the list of accounts.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A paginated response with the list of roles and the next token if more results are available.
   *
   * @public
   */
  roleList?: RoleInfo[] | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * (Optional) When requesting subsequent pages, this is the page token from the previous response output.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * This is the number of items clients can request per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token issued by the `CreateToken` API call. For more information, see [CreateToken](https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html) in the *IAM Identity Center OIDC API Reference Guide*.
   *
   * @public
   */
  accessToken: string | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * The page token client that is used to retrieve the list of accounts.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A paginated response with the list of account information and the next token if more results are available.
   *
   * @public
   */
  accountList?: AccountInfo[] | undefined;
}

/**
 * @public
 */
export interface LogoutRequest {
  /**
   * The token issued by the `CreateToken` API call. For more information, see [CreateToken](https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html) in the *IAM Identity Center OIDC API Reference Guide*.
   *
   * @public
   */
  accessToken: string | undefined;
}
