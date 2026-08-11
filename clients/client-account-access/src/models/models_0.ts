// smithy-typescript generated code
import type { ErrorCode, Status } from "./enums";

/**
 * <p>Specifies the IAM Identity Center instance to use as the identity source for an application.</p>
 * @public
 */
export interface IdentityCenter {
  /**
   * <p>The ARN of the IAM Identity Center instance.</p>
   * @public
   */
  instanceArn: string | undefined;
}

/**
 * <p>Specifies the identity source for an account access manager application.</p>
 * @public
 */
export type IdentitySource =
  | IdentitySource.IdentityCenterMember
  | IdentitySource.$UnknownMember;

/**
 * @public
 */
export namespace IdentitySource {
  /**
   * <p>The IAM Identity Center instance to use as the identity source.</p>
   * @public
   */
  export interface IdentityCenterMember {
    identityCenter: IdentityCenter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    identityCenter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    identityCenter: (value: IdentityCenter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>Specifies the identity source for the application. The identity source defines the IAM Identity Center instance that provides principals for entitlements.</p>
   * @public
   */
  identitySource: IdentitySource | undefined;

  /**
   * <p>Specifies the tags to assign to the application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created application.</p>
   * @public
   */
  applicationArn: string | undefined;
}

/**
 * <p>Identifies a user or group from IAM Identity Center.</p>
 * @public
 */
export type IdentityCenterPrincipal =
  | IdentityCenterPrincipal.GroupIdMember
  | IdentityCenterPrincipal.UserIdMember
  | IdentityCenterPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace IdentityCenterPrincipal {
  /**
   * <p>The unique identifier of a user in IAM Identity Center.</p>
   * @public
   */
  export interface UserIdMember {
    userId: string;
    groupId?: never;
    $unknown?: never;
  }

  /**
   * <p>The unique identifier of a group in IAM Identity Center.</p>
   * @public
   */
  export interface GroupIdMember {
    userId?: never;
    groupId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userId?: never;
    groupId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userId: (value: string) => T;
    groupId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Identifies a principal (user or group) that can be granted entitlements.</p>
 * @public
 */
export type Principal =
  | Principal.IdentityCenterMember
  | Principal.$UnknownMember;

/**
 * @public
 */
export namespace Principal {
  /**
   * <p>The IAM Identity Center principal (user or group).</p>
   * @public
   */
  export interface IdentityCenterMember {
    identityCenter: IdentityCenterPrincipal;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    identityCenter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    identityCenter: (value: IdentityCenterPrincipal) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Specifies a principal-to-role entitlement that grants an IAM Identity Center principal permission to assume an IAM role.</p>
 * @public
 */
export interface PrincipalRoleEntitlement {
  /**
   * <p>The principal (user or group) that is granted access to assume the IAM role.</p>
   * @public
   */
  principal: Principal | undefined;

  /**
   * <p>The ARN of the IAM role that the principal can assume.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Specifies the entitlement configuration for an account access manager application, defining which principal can assume which IAM role.</p>
 * @public
 */
export type Entitlement =
  | Entitlement.PrincipalRoleMember
  | Entitlement.$UnknownMember;

/**
 * @public
 */
export namespace Entitlement {
  /**
   * <p>The principal-to-role mapping for the entitlement.</p>
   * @public
   */
  export interface PrincipalRoleMember {
    principalRole: PrincipalRoleEntitlement;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    principalRole?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    principalRole: (value: PrincipalRoleEntitlement) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEntitlementRequest {
  /**
   * <p>Specifies the ARN of the application to create the entitlement for.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>Specifies the entitlement configuration, including the principal and the IAM role to grant access to.</p>
   * @public
   */
  entitlement: Entitlement | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementResponse {
  /**
   * <p>The unique identifier of the created entitlement.</p>
   * @public
   */
  entitlementId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Specifies the ARN of the application to delete.</p>
   * @public
   */
  applicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteEntitlementRequest {
  /**
   * <p>Specifies the ARN of the application that the entitlement belongs to.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>Specifies the unique identifier of the entitlement to delete.</p>
   * @public
   */
  entitlementId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEntitlementResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>Specifies the ARN of the application to retrieve.</p>
   * @public
   */
  applicationArn: string | undefined;
}

/**
 * <p>Contains information about an error that occurred during application processing.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error code that identifies the type of error.</p>
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * <p>A human-readable message that describes the error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Contains detailed information about the IAM Identity Center configuration for an application.</p>
 * @public
 */
export interface IdentityCenterDetails {
  /**
   * <p>The ARN of the IAM Identity Center instance.</p>
   * @public
   */
  instanceArn: string | undefined;

  /**
   * <p>The ARN of the IAM Identity Center application created for this account access manager application.</p>
   * @public
   */
  applicationArn?: string | undefined;
}

/**
 * <p>Contains detailed information about the identity source for an application.</p>
 * @public
 */
export type IdentitySourceDetails =
  | IdentitySourceDetails.IdentityCenterMember
  | IdentitySourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace IdentitySourceDetails {
  /**
   * <p>The IAM Identity Center configuration details for the identity source.</p>
   * @public
   */
  export interface IdentityCenterMember {
    identityCenter: IdentityCenterDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    identityCenter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    identityCenter: (value: IdentityCenterDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The identity source details for the application, including the IAM Identity Center instance configuration.</p>
   * @public
   */
  identitySource: IdentitySourceDetails | undefined;

  /**
   * <p>The current status of the application.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The tenant identifier associated with the application.</p>
   * @public
   */
  tenantId?: string | undefined;

  /**
   * <p>The date and time when the application was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags associated with the application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The error details if the application is in a failed state.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetEntitlementRequest {
  /**
   * <p>Specifies the ARN of the application that the entitlement belongs to.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>Specifies the unique identifier of the entitlement to retrieve.</p>
   * @public
   */
  entitlementId: string | undefined;
}

/**
 * <p>Contains detailed information about a principal-to-role entitlement, including the target account.</p>
 * @public
 */
export interface PrincipalRoleEntitlementDetails {
  /**
   * <p>The principal (user or group) that is granted access to assume the IAM role.</p>
   * @public
   */
  principal: Principal | undefined;

  /**
   * <p>The ARN of the IAM role that the principal can assume.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID where the IAM role resides.</p>
   * @public
   */
  account: string | undefined;

  /**
   * <p>The friendly name of the Amazon Web Services account where the IAM role resides.</p>
   * @public
   */
  accountName?: string | undefined;
}

/**
 * <p>Contains detailed information about an entitlement, including the principal, IAM role, and target account.</p>
 * @public
 */
export type EntitlementDetails =
  | EntitlementDetails.PrincipalRoleMember
  | EntitlementDetails.$UnknownMember;

/**
 * @public
 */
export namespace EntitlementDetails {
  /**
   * <p>The principal-to-role mapping details for the entitlement, including the target account.</p>
   * @public
   */
  export interface PrincipalRoleMember {
    principalRole: PrincipalRoleEntitlementDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    principalRole?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    principalRole: (value: PrincipalRoleEntitlementDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetEntitlementResponse {
  /**
   * <p>The ARN of the application that the entitlement belongs to.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>The unique identifier of the entitlement.</p>
   * @public
   */
  entitlementId: string | undefined;

  /**
   * <p>The entitlement details, including the principal, IAM role, and target account.</p>
   * @public
   */
  entitlement: EntitlementDetails | undefined;

  /**
   * <p>The date and time when the entitlement was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>Specifies the maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies the pagination token from a previous call to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about an account access manager application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>The tenant identifier associated with the application.</p>
   * @public
   */
  tenantId?: string | undefined;

  /**
   * <p>The date and time when the application was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The list of applications.</p>
   * @public
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Specifies filter criteria for an IAM Identity Center principal.</p>
 * @public
 */
export type IdentityCenterPrincipalFilter =
  | IdentityCenterPrincipalFilter.GroupIdMember
  | IdentityCenterPrincipalFilter.UserIdMember
  | IdentityCenterPrincipalFilter.$UnknownMember;

/**
 * @public
 */
export namespace IdentityCenterPrincipalFilter {
  /**
   * <p>The unique identifier of a user in IAM Identity Center to filter by.</p>
   * @public
   */
  export interface UserIdMember {
    userId: string;
    groupId?: never;
    $unknown?: never;
  }

  /**
   * <p>The unique identifier of a group in IAM Identity Center to filter by.</p>
   * @public
   */
  export interface GroupIdMember {
    userId?: never;
    groupId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userId?: never;
    groupId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userId: (value: string) => T;
    groupId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Specifies filter criteria for a principal.</p>
 * @public
 */
export type PrincipalFilter =
  | PrincipalFilter.IdentityCenterMember
  | PrincipalFilter.$UnknownMember;

/**
 * @public
 */
export namespace PrincipalFilter {
  /**
   * <p>The IAM Identity Center principal filter criteria.</p>
   * @public
   */
  export interface IdentityCenterMember {
    identityCenter: IdentityCenterPrincipalFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    identityCenter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    identityCenter: (value: IdentityCenterPrincipalFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Specifies filter criteria for principal-to-role entitlements. All specified criteria must match for an entitlement to be returned.</p>
 * @public
 */
export interface PrincipalRoleEntitlementFilter {
  /**
   * <p>The principal to filter entitlements by.</p>
   * @public
   */
  principal?: PrincipalFilter | undefined;

  /**
   * <p>The IAM role ARN to filter entitlements by.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID to filter entitlements by.</p>
   * @public
   */
  account?: string | undefined;
}

/**
 * <p>Specifies filter criteria for listing entitlements.</p>
 * @public
 */
export interface EntitlementFilter {
  /**
   * <p>The principal-to-role filter criteria for narrowing entitlement results.</p>
   * @public
   */
  principalRole?: PrincipalRoleEntitlementFilter | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * <p>Specifies the ARN of the application to list entitlements for.</p>
   * @public
   */
  applicationArn: string | undefined;

  /**
   * <p>Specifies filter criteria to narrow the entitlements returned. You can filter by principal, IAM role, or account.</p>
   * @public
   */
  filter: EntitlementFilter | undefined;

  /**
   * <p>Specifies the pagination token from a previous call to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a principal-to-role entitlement.</p>
 * @public
 */
export interface PrincipalRoleEntitlementSummary {
  /**
   * <p>The principal (user or group) that is granted access to assume the IAM role.</p>
   * @public
   */
  principal: Principal | undefined;

  /**
   * <p>The ARN of the IAM role that the principal can assume.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID where the IAM role resides.</p>
   * @public
   */
  account: string | undefined;

  /**
   * <p>The friendly name of the Amazon Web Services account where the IAM role resides.</p>
   * @public
   */
  accountName?: string | undefined;
}

/**
 * <p>Contains summary information about an entitlement.</p>
 * @public
 */
export type EntitlementSummary =
  | EntitlementSummary.PrincipalRoleMember
  | EntitlementSummary.$UnknownMember;

/**
 * @public
 */
export namespace EntitlementSummary {
  /**
   * <p>The principal-to-role mapping summary for the entitlement.</p>
   * @public
   */
  export interface PrincipalRoleMember {
    principalRole: PrincipalRoleEntitlementSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    principalRole?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    principalRole: (value: PrincipalRoleEntitlementSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information about an entitlement in a list result.</p>
 * @public
 */
export interface EntitlementsListMember {
  /**
   * <p>The unique identifier of the entitlement.</p>
   * @public
   */
  entitlementId: string | undefined;

  /**
   * <p>The summary information for the entitlement.</p>
   * @public
   */
  entitlement: EntitlementSummary | undefined;

  /**
   * <p>The date and time when the entitlement was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * <p>The list of entitlements for the specified application.</p>
   * @public
   */
  entitlements: EntitlementsListMember[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Specifies the ARN of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Specifies the ARN of the resource to add tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the tags to add to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Specifies the ARN of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
