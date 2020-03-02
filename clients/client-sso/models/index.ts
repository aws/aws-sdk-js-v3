import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Provides information about your AWS account.</p>
 */
export interface AccountInfo {
  __type?: "AccountInfo";
  /**
   * <p>The identifier of the AWS account that is assigned to the user.</p>
   */
  accountId?: string;

  /**
   * <p>The display name of the AWS account that is assigned to the user.</p>
   */
  accountName?: string;

  /**
   * <p>The email address of the AWS account that is assigned to the user.</p>
   */
  emailAddress?: string;
}

export namespace AccountInfo {
  export function isa(o: any): o is AccountInfo {
    return __isa(o, "AccountInfo");
  }
}

export interface GetRoleCredentialsRequest {
  __type?: "GetRoleCredentialsRequest";
  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;

  /**
   * <p>The identifier for the AWS account that is assigned to the user.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The friendly name of the role that is assigned to the user.</p>
   */
  roleName: string | undefined;
}

export namespace GetRoleCredentialsRequest {
  export function isa(o: any): o is GetRoleCredentialsRequest {
    return __isa(o, "GetRoleCredentialsRequest");
  }
}

export interface GetRoleCredentialsResponse {
  __type?: "GetRoleCredentialsResponse";
  /**
   * <p>The credentials for the role that is assigned to the user.</p>
   */
  roleCredentials?: RoleCredentials;
}

export namespace GetRoleCredentialsResponse {
  export function isa(o: any): o is GetRoleCredentialsResponse {
    return __isa(o, "GetRoleCredentialsResponse");
  }
}

/**
 * <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

export interface ListAccountRolesRequest {
  __type?: "ListAccountRolesRequest";
  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;

  /**
   * <p>The identifier for the AWS account that is assigned to the user.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The number of items that clients can request per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The page token from the previous response output when you request subsequent pages.</p>
   */
  nextToken?: string;
}

export namespace ListAccountRolesRequest {
  export function isa(o: any): o is ListAccountRolesRequest {
    return __isa(o, "ListAccountRolesRequest");
  }
}

export interface ListAccountRolesResponse {
  __type?: "ListAccountRolesResponse";
  /**
   * <p>The page token client that is used to retrieve the list of accounts.</p>
   */
  nextToken?: string;

  /**
   * <p>A paginated response with the list of roles and the next token if more results are available.</p>
   */
  roleList?: Array<RoleInfo>;
}

export namespace ListAccountRolesResponse {
  export function isa(o: any): o is ListAccountRolesResponse {
    return __isa(o, "ListAccountRolesResponse");
  }
}

export interface ListAccountsRequest {
  __type?: "ListAccountsRequest";
  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;

  /**
   * <p>This is the number of items clients can request per page.</p>
   */
  maxResults?: number;

  /**
   * <p>(Optional) When requesting subsequent pages, this is the page token from the previous response output.</p>
   */
  nextToken?: string;
}

export namespace ListAccountsRequest {
  export function isa(o: any): o is ListAccountsRequest {
    return __isa(o, "ListAccountsRequest");
  }
}

export interface ListAccountsResponse {
  __type?: "ListAccountsResponse";
  /**
   * <p>A paginated response with the list of account information and the next token if more results are available.</p>
   */
  accountList?: Array<AccountInfo>;

  /**
   * <p>The page token client that is used to retrieve the list of accounts.</p>
   */
  nextToken?: string;
}

export namespace ListAccountsResponse {
  export function isa(o: any): o is ListAccountsResponse {
    return __isa(o, "ListAccountsResponse");
  }
}

export interface LogoutRequest {
  __type?: "LogoutRequest";
  /**
   * <p>The token issued by the <code>CreateToken</code> API call. For more information, see
   *         <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateToken.html">CreateToken</a> in the <i>AWS SSO OIDC API Reference Guide</i>.</p>
   */
  accessToken: string | undefined;
}

export namespace LogoutRequest {
  export function isa(o: any): o is LogoutRequest {
    return __isa(o, "LogoutRequest");
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Provides information about the role credentials that are assigned to the user.</p>
 */
export interface RoleCredentials {
  __type?: "RoleCredentials";
  /**
   * <p>The identifier used for the temporary security credentials. For more information, see
   *         <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
   *         <i>AWS IAM User Guide</i>.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The date on which temporary security credentials expire.</p>
   */
  expiration?: number;

  /**
   * <p>The key that is used to sign the request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
   *         <i>AWS IAM User Guide</i>.</p>
   */
  secretAccessKey?: string;

  /**
   * <p>The token used for temporary credentials. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html">Using Temporary Security Credentials to Request Access to AWS Resources</a> in the
   *         <i>AWS IAM User Guide</i>.</p>
   */
  sessionToken?: string;
}

export namespace RoleCredentials {
  export function isa(o: any): o is RoleCredentials {
    return __isa(o, "RoleCredentials");
  }
}

/**
 * <p>Provides information about the role that is assigned to the user.</p>
 */
export interface RoleInfo {
  __type?: "RoleInfo";
  /**
   * <p>The identifier of the AWS account assigned to the user.</p>
   */
  accountId?: string;

  /**
   * <p>The friendly name of the role that is assigned to the user.</p>
   */
  roleName?: string;
}

export namespace RoleInfo {
  export function isa(o: any): o is RoleInfo {
    return __isa(o, "RoleInfo");
  }
}

/**
 * <p>Indicates that the request is being made too frequently and is more than what the server can handle.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

/**
 * <p>Indicates that the request is not authorized. This can happen due to an invalid access token in the request.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}
