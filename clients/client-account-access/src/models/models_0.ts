// smithy-typescript generated code
import type { ErrorCode, Status } from "./enums";

/**
 * Specifies the IAM Identity Center instance to use as the identity source for an application.
 *
 * @public
 */
export interface IdentityCenter {
  /**
   * The ARN of the IAM Identity Center instance.
   *
   * @public
   */
  instanceArn: string | undefined;
}

/**
 * Specifies the identity source for an account access manager application.
 *
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
   * The IAM Identity Center instance to use as the identity source.
   *
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
   * Specifies the identity source for the application. The identity source defines the IAM Identity Center instance that provides principals for entitlements.
   *
   * @public
   */
  identitySource: IdentitySource | undefined;

  /**
   * Specifies the tags to assign to the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the created application.
   *
   * @public
   */
  applicationArn: string | undefined;
}

/**
 * Identifies a user or group from IAM Identity Center.
 *
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
   * The unique identifier of a user in IAM Identity Center.
   *
   * @public
   */
  export interface UserIdMember {
    userId: string;
    groupId?: never;
    $unknown?: never;
  }

  /**
   * The unique identifier of a group in IAM Identity Center.
   *
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
 * Identifies a principal (user or group) that can be granted entitlements.
 *
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
   * The IAM Identity Center principal (user or group).
   *
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
 * Specifies a principal-to-role entitlement that grants an IAM Identity Center principal permission to assume an IAM role.
 *
 * @public
 */
export interface PrincipalRoleEntitlement {
  /**
   * The principal (user or group) that is granted access to assume the IAM role.
   *
   * @public
   */
  principal: Principal | undefined;

  /**
   * The ARN of the IAM role that the principal can assume.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Specifies the entitlement configuration for an account access manager application, defining which principal can assume which IAM role.
 *
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
   * The principal-to-role mapping for the entitlement.
   *
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
   * Specifies the ARN of the application to create the entitlement for.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * Specifies the entitlement configuration, including the principal and the IAM role to grant access to.
   *
   * @public
   */
  entitlement: Entitlement | undefined;
}

/**
 * @public
 */
export interface CreateEntitlementResponse {
  /**
   * The unique identifier of the created entitlement.
   *
   * @public
   */
  entitlementId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * Specifies the ARN of the application to delete.
   *
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
   * Specifies the ARN of the application that the entitlement belongs to.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * Specifies the unique identifier of the entitlement to delete.
   *
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
   * Specifies the ARN of the application to retrieve.
   *
   * @public
   */
  applicationArn: string | undefined;
}

/**
 * Contains information about an error that occurred during application processing.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error code that identifies the type of error.
   *
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * A human-readable message that describes the error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains detailed information about the IAM Identity Center configuration for an application.
 *
 * @public
 */
export interface IdentityCenterDetails {
  /**
   * The ARN of the IAM Identity Center instance.
   *
   * @public
   */
  instanceArn: string | undefined;

  /**
   * The ARN of the IAM Identity Center application created for this account access manager application.
   *
   * @public
   */
  applicationArn?: string | undefined;
}

/**
 * Contains detailed information about the identity source for an application.
 *
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
   * The IAM Identity Center configuration details for the identity source.
   *
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
   * The identity source details for the application, including the IAM Identity Center instance configuration.
   *
   * @public
   */
  identitySource: IdentitySourceDetails | undefined;

  /**
   * The current status of the application.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The tenant identifier associated with the application.
   *
   * @public
   */
  tenantId?: string | undefined;

  /**
   * The date and time when the application was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the application was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags associated with the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The error details if the application is in a failed state.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetEntitlementRequest {
  /**
   * Specifies the ARN of the application that the entitlement belongs to.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * Specifies the unique identifier of the entitlement to retrieve.
   *
   * @public
   */
  entitlementId: string | undefined;
}

/**
 * Contains detailed information about a principal-to-role entitlement, including the target account.
 *
 * @public
 */
export interface PrincipalRoleEntitlementDetails {
  /**
   * The principal (user or group) that is granted access to assume the IAM role.
   *
   * @public
   */
  principal: Principal | undefined;

  /**
   * The ARN of the IAM role that the principal can assume.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID where the IAM role resides.
   *
   * @public
   */
  account: string | undefined;

  /**
   * The friendly name of the Amazon Web Services account where the IAM role resides.
   *
   * @public
   */
  accountName?: string | undefined;
}

/**
 * Contains detailed information about an entitlement, including the principal, IAM role, and target account.
 *
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
   * The principal-to-role mapping details for the entitlement, including the target account.
   *
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
   * The ARN of the application that the entitlement belongs to.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * The unique identifier of the entitlement.
   *
   * @public
   */
  entitlementId: string | undefined;

  /**
   * The entitlement details, including the principal, IAM role, and target account.
   *
   * @public
   */
  entitlement: EntitlementDetails | undefined;

  /**
   * The date and time when the entitlement was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * Specifies the maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies the pagination token from a previous call to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about an account access manager application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The ARN of the application.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * The tenant identifier associated with the application.
   *
   * @public
   */
  tenantId?: string | undefined;

  /**
   * The date and time when the application was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the application was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * The list of applications.
   *
   * @public
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies filter criteria for an IAM Identity Center principal.
 *
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
   * The unique identifier of a user in IAM Identity Center to filter by.
   *
   * @public
   */
  export interface UserIdMember {
    userId: string;
    groupId?: never;
    $unknown?: never;
  }

  /**
   * The unique identifier of a group in IAM Identity Center to filter by.
   *
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
 * Specifies filter criteria for a principal.
 *
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
   * The IAM Identity Center principal filter criteria.
   *
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
 * Specifies filter criteria for principal-to-role entitlements. All specified criteria must match for an entitlement to be returned.
 *
 * @public
 */
export interface PrincipalRoleEntitlementFilter {
  /**
   * The principal to filter entitlements by.
   *
   * @public
   */
  principal?: PrincipalFilter | undefined;

  /**
   * The IAM role ARN to filter entitlements by.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID to filter entitlements by.
   *
   * @public
   */
  account?: string | undefined;
}

/**
 * Specifies filter criteria for listing entitlements.
 *
 * @public
 */
export interface EntitlementFilter {
  /**
   * The principal-to-role filter criteria for narrowing entitlement results.
   *
   * @public
   */
  principalRole?: PrincipalRoleEntitlementFilter | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * Specifies the ARN of the application to list entitlements for.
   *
   * @public
   */
  applicationArn: string | undefined;

  /**
   * Specifies filter criteria to narrow the entitlements returned. You can filter by principal, IAM role, or account.
   *
   * @public
   */
  filter: EntitlementFilter | undefined;

  /**
   * Specifies the pagination token from a previous call to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies the maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a principal-to-role entitlement.
 *
 * @public
 */
export interface PrincipalRoleEntitlementSummary {
  /**
   * The principal (user or group) that is granted access to assume the IAM role.
   *
   * @public
   */
  principal: Principal | undefined;

  /**
   * The ARN of the IAM role that the principal can assume.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID where the IAM role resides.
   *
   * @public
   */
  account: string | undefined;

  /**
   * The friendly name of the Amazon Web Services account where the IAM role resides.
   *
   * @public
   */
  accountName?: string | undefined;
}

/**
 * Contains summary information about an entitlement.
 *
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
   * The principal-to-role mapping summary for the entitlement.
   *
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
 * Contains information about an entitlement in a list result.
 *
 * @public
 */
export interface EntitlementsListMember {
  /**
   * The unique identifier of the entitlement.
   *
   * @public
   */
  entitlementId: string | undefined;

  /**
   * The summary information for the entitlement.
   *
   * @public
   */
  entitlement: EntitlementSummary | undefined;

  /**
   * The date and time when the entitlement was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * The list of entitlements for the specified application.
   *
   * @public
   */
  entitlements: EntitlementsListMember[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Specifies the ARN of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Specifies the ARN of the resource to add tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specifies the tags to add to the resource.
   *
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
   * Specifies the ARN of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specifies the tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
