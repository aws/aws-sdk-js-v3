// smithy-typescript generated code
import type { AccessType } from "./enums";

/**
 * <p>Describes a role that you can access, including the Amazon Web Services account that contains the role and the role's ARN.</p>
 * @public
 */
export interface AccessDetails {
  /**
   * <p>The 12-digit identifier of the Amazon Web Services account that contains the role.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The display name of the Amazon Web Services account, if available. This value can be absent when the account name can't be resolved.</p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that you can access.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface GetRoleCredentialsRequest {
  /**
   * <p>The identifier of the tenant that the request applies to. A tenant ID begins with <code>aa-</code> and is 3 to 24 characters long. It can contain lowercase letters, numbers, and hyphens.</p>
   * @public
   */
  tenantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to retrieve credentials for. You must be entitled to assume this role.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The type of access to request for the role. Specify <code>PROGRAMMATIC_ACCESS</code> to receive access key credentials for use with the CLI or an Amazon Web Services SDK.</p>
   * @public
   */
  accessType: AccessType | undefined;

  /**
   * <p>An optional name for the role session. The name can be 2 to 64 characters and can contain alphanumeric characters and the following symbols: plus (+), equal (=), comma (,), period (.), at (@), and hyphen (-). The session name appears in CloudTrail logs for the assumed role session.</p>
   * @public
   */
  sessionName?: string | undefined;

  /**
   * <p>The duration, in seconds, that the returned credentials remain valid. If you don't specify a value, the service uses the default session duration. The maximum value can't exceed the maximum session duration configured for the role.</p>
   * @public
   */
  sessionDuration?: number | undefined;
}

/**
 * <p>A set of temporary Amazon Web Services credentials for programmatic access. Treat these values as sensitive.</p>
 * @public
 */
export interface ProgrammaticAccessDetails {
  /**
   * <p>The access key ID for the temporary credentials.</p>
   * @public
   */
  accessKeyId: string | undefined;

  /**
   * <p>The secret access key for the temporary credentials. Treat this value as a secret.</p>
   * @public
   */
  secretAccessKey: string | undefined;

  /**
   * <p>The session token that you must include along with the access key ID and secret access key when you make requests with the temporary credentials.</p>
   * @public
   */
  sessionToken: string | undefined;

  /**
   * <p>The date and time when the temporary credentials expire, after which they can no longer be used.</p>
   * @public
   */
  expiresAt: Date | undefined;
}

/**
 * <p>The temporary credentials returned for a role. Only one member is set, depending on the type of access that you requested.</p>
 * @public
 */
export type CredentialsDetails =
  | CredentialsDetails.ProgrammaticAccessMember
  | CredentialsDetails.$UnknownMember;

/**
 * @public
 */
export namespace CredentialsDetails {
  /**
   * <p>The access key credentials returned for programmatic access with the CLI or an Amazon Web Services SDK.</p>
   * @public
   */
  export interface ProgrammaticAccessMember {
    programmaticAccess: ProgrammaticAccessDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    programmaticAccess?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    programmaticAccess: (value: ProgrammaticAccessDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetRoleCredentialsResponse {
  /**
   * <p>The temporary credentials that the service returns for the requested role.</p>
   * @public
   */
  credentialsDetails?: CredentialsDetails | undefined;
}

/**
 * @public
 */
export interface ListRolesRequest {
  /**
   * <p>The identifier of the tenant whose roles you want to list. A tenant ID begins with <code>aa-</code> and is 3 to 24 characters long. It can contain lowercase letters, numbers, and hyphens.</p>
   * @public
   */
  tenantId: string | undefined;

  /**
   * <p>The maximum number of roles to return in a single response. If more roles are available than the specified value, the response includes a <code>nextToken</code> value that you can use to retrieve the next page of results. If you don't specify a value, the service uses a default page size.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous <code>ListRoles</code> response. Use it to retrieve the next page of results. Omit this parameter on the first call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRolesResponse {
  /**
   * <p>The list of roles that you can access in the tenant. Each entry describes an Amazon Web Services account and a role.</p>
   * @public
   */
  roles: AccessDetails[] | undefined;

  /**
   * <p>The pagination token to include in a subsequent <code>ListRoles</code> request to retrieve the next page of results. This value is absent when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}
