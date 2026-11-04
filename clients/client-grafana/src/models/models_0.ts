// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  AccountAccessType,
  AuthenticationProviderTypes,
  DataSourceType,
  IPAddressType,
  LicenseType,
  NotificationDestinationType,
  PermissionType,
  Role,
  SamlConfigurationStatus,
  UpdateAction,
  UserType,
  WorkspaceStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateWorkspaceApiKeyRequest {
  /**
   * Specifies the name of the key. Keynames must be unique to the workspace.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * Specifies the permission level of the key.
   *
   * Valid values: `ADMIN`|`EDITOR`|`VIEWER`
   *
   * @public
   */
  keyRole: string | undefined;

  /**
   * Specifies the time in seconds until the key expires. Keys can be valid for up to 30 days.
   *
   * @public
   */
  secondsToLive: number | undefined;

  /**
   * The ID of the workspace to create an API key.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceApiKeyResponse {
  /**
   * The name of the key that was created.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * The key token. Use this value as a bearer token to authenticate HTTP requests to the workspace.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The ID of the workspace that the key is valid for.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure that contains information about a request parameter that caused an error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that caused the validation error.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why this field couldn't be validated.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceApiKeyRequest {
  /**
   * The name of the API key to delete.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * The ID of the workspace to delete.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceApiKeyResponse {
  /**
   * The name of the key that was deleted.
   *
   * @public
   */
  keyName: string | undefined;

  /**
   * The ID of the workspace where the key was deleted.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace.
 *
 * @public
 */
export interface AssertionAttributes {
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names for SAML users.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The name of the attribute within the SAML assertion to use as the login names for SAML users.
   *
   * @public
   */
  login?: string | undefined;

  /**
   * The name of the attribute within the SAML assertion to use as the email names for SAML users.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names for user groups.
   *
   * @public
   */
  groups?: string | undefined;

  /**
   * The name of the attribute within the SAML assertion to use as the user roles.
   *
   * @public
   */
  role?: string | undefined;

  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names for the users' organizations.
   *
   * @public
   */
  org?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLicenseRequest {
  /**
   * The ID of the workspace to associate the license with.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The type of license to associate with the workspace.
   *
   * > **Note:** Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.
   *
   * @public
   */
  licenseType: LicenseType | undefined;

  /**
   * A token from Grafana Labs that ties your Amazon Web Services account with a Grafana Labs account. For more information, see [Link your account with Grafana Labs](https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html#AMG-workspace-register-enterprise).
   *
   * @public
   */
  grafanaToken?: string | undefined;
}

/**
 * A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication, and whether that authentication is fully configured.
 *
 * @public
 */
export interface AuthenticationSummary {
  /**
   * Specifies whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication.
   *
   * @public
   */
  providers: AuthenticationProviderTypes[] | undefined;

  /**
   * Specifies whether the workplace's user authentication method is fully configured.
   *
   * @public
   */
  samlConfigurationStatus?: SamlConfigurationStatus | undefined;
}

/**
 * The configuration settings for in-bound network access to your workspace.
 *
 * When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required.
 *
 * Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both.
 *
 * If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required.
 *
 * > **Note:**
 * >
 * > While both `prefixListIds` and `vpceIds` are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type.
 * >
 * > If both are passed as empty arrays, no traffic is allowed to the workspace, because only *explicitly* allowed connections are accepted.
 *
 * @public
 */
export interface NetworkAccessConfiguration {
  /**
   * An array of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration (passed an empty array) then no IP addresses are allowed to access the workspace. You create a prefix list using the Amazon VPC console.
   *
   * Prefix list IDs have the format `pl-1a2b3c4d`.
   *
   * For more information about prefix lists, see [Group CIDR blocks using managed prefix lists](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html)in the *Amazon Virtual Private Cloud User Guide*.
   *
   * @public
   */
  prefixListIds: string[] | undefined;

  /**
   * An array of Amazon VPC endpoint IDs for the workspace. You can create VPC endpoints to your Amazon Managed Grafana workspace for access from within a VPC. If a `NetworkAccessConfiguration` is specified then only VPC endpoints specified here are allowed to access the workspace. If you pass in an empty array of strings, then no VPCs are allowed to access the workspace.
   *
   * VPC endpoint IDs have the format `vpce-1a2b3c4d`.
   *
   * For more information about creating an interface VPC endpoint, see [Interface VPC endpoints](https://docs.aws.amazon.com/grafana/latest/userguide/VPC-endpoints) in the *Amazon Managed Grafana User Guide*.
   *
   * > **Note:** The only VPC endpoints that can be specified here are interface VPC endpoints for Grafana workspaces (using the `com.amazonaws.[region].grafana-workspace` service endpoint). Other VPC endpoints are ignored.
   *
   * @public
   */
  vpceIds: string[] | undefined;
}

/**
 * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
 *
 * > **Note:**
 * >
 * > Provided `securityGroupIds` and `subnetIds` must be part of the same VPC.
 * >
 * > Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.
   *
   * @public
   */
  subnetIds: string[] | undefined;
}

/**
 * A structure containing information about an Amazon Managed Grafana workspace in your account.
 *
 * @public
 */
export interface WorkspaceDescription {
  /**
   * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If this is `ORGANIZATION`, the `workspaceOrganizationalUnits` parameter specifies which organizational units the workspace can access.
   *
   * @public
   */
  accountAccessType?: AccountAccessType | undefined;

  /**
   * The date that the workspace was created.
   *
   * @public
   */
  created: Date | undefined;

  /**
   * Specifies the Amazon Web Services data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.
   *
   * This list is only used when the workspace was created through the Amazon Web Services console, and the `permissionType` is `SERVICE_MANAGED`.
   *
   * @public
   */
  dataSources: DataSourceType[] | undefined;

  /**
   * The user-defined description of the workspace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The URL that users can use to access the Grafana console in the workspace.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The version of Grafana supported in this workspace.
   *
   * @public
   */
  grafanaVersion: string | undefined;

  /**
   * The unique ID of this workspace.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The most recent date that the workspace was modified.
   *
   * @public
   */
  modified: Date | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The name of the IAM role that is used to access resources through Organizations.
   *
   * @public
   */
  organizationRoleName?: string | undefined;

  /**
   * The Amazon Web Services notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.
   *
   * @public
   */
  notificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
   *
   * @public
   */
  organizationalUnits?: string[] | undefined;

  /**
   * If this is `SERVICE_MANAGED`, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use Amazon Web Services data sources and notification channels.
   *
   * If this is `CUSTOMER_MANAGED`, you must manage those roles and permissions yourself.
   *
   * If you are working with a workspace in a member account of an organization and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, this parameter must be set to `CUSTOMER_MANAGED`.
   *
   * For more information about converting between customer and service managed, see [Managing permissions for data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html). For more information about the roles and permissions that must be managed for customer managed workspaces, see [Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html)
   *
   * @public
   */
  permissionType?: PermissionType | undefined;

  /**
   * The name of the CloudFormation stack set that is used to generate IAM roles to be used for this workspace.
   *
   * @public
   */
  stackSetName?: string | undefined;

  /**
   * The current status of the workspace.
   *
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * The IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from. This role must already exist.
   *
   * @public
   */
  workspaceRoleArn?: string | undefined;

  /**
   * Specifies whether this workspace has a full Grafana Enterprise license.
   *
   * > **Note:** Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.
   *
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * Specifies whether this workspace has already fully used its free trial for Grafana Enterprise.
   *
   * > **Note:** Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.
   *
   * @public
   */
  freeTrialConsumed?: boolean | undefined;

  /**
   * If this workspace has a full Grafana Enterprise license purchased through Amazon Web Services Marketplace, this specifies when the license ends and will need to be renewed. Purchasing the Enterprise plugins option through Amazon Managed Grafana does not have an expiration. It is valid until the license is removed.
   *
   * @public
   */
  licenseExpiration?: Date | undefined;

  /**
   * If this workspace is currently in the free trial period for Grafana Enterprise, this value specifies when that free trial ends.
   *
   * > **Note:** Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.
   *
   * @public
   */
  freeTrialExpiration?: Date | undefined;

  /**
   * A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication.
   *
   * @public
   */
  authentication: AuthenticationSummary | undefined;

  /**
   * The list of tags associated with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration for connecting to data sources in a private VPC (Amazon Virtual Private Cloud).
   *
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The configuration settings for network access to your workspace.
   *
   * @public
   */
  networkAccessControl?: NetworkAccessConfiguration | undefined;

  /**
   * The token that ties this workspace to a Grafana Labs account. For more information, see [Link your account with Grafana Labs](https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html#AMG-workspace-register-enterprise).
   *
   * @public
   */
  grafanaToken?: string | undefined;

  /**
   * The type of IP addresses supported for connection to the workspace. Valid values are `IPv4` and `DualStack`.
   *
   * @public
   */
  ipAddressType?: IPAddressType | undefined;

  /**
   * The ID or ARN of the Key Management Service key used for encrypting workspace data.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * If the workspace is in the `DEGRADED` status, this field describes the reason the workspace is degraded.
   *
   * @public
   */
  degradedWorkspaceReason?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLicenseResponse {
  /**
   * A structure containing data about the workspace.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAuthenticationRequest {
  /**
   * The ID of the workspace to return authentication information about.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure containing information about how this workspace works with IAM Identity Center.
 *
 * @public
 */
export interface AwsSsoAuthentication {
  /**
   * The ID of the IAM Identity Center-managed application that is created by Amazon Managed Grafana.
   *
   * @public
   */
  ssoClientId?: string | undefined;
}

/**
 * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace. You can specify the metadata either by providing a URL to its location in the `url` parameter, or by specifying the full metadata in XML format in the `xml` parameter. Specifying both will cause an error.
 *
 * @public
 */
export type IdpMetadata =
  | IdpMetadata.UrlMember
  | IdpMetadata.XmlMember
  | IdpMetadata.$UnknownMember;

/**
 * @public
 */
export namespace IdpMetadata {
  /**
   * The URL of the location containing the IdP metadata.
   *
   * @public
   */
  export interface UrlMember {
    url: string;
    xml?: never;
    $unknown?: never;
  }

  /**
   * The full IdP metadata, in XML format.
   *
   * @public
   */
  export interface XmlMember {
    url?: never;
    xml: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    url?: never;
    xml?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    url: (value: string) => T;
    xml: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * This structure defines which groups defined in the SAML assertion attribute are to be mapped to the Grafana `Admin` and `Editor` roles in the workspace. SAML authenticated users not part of `Admin` or `Editor` role groups have `Viewer` permission over the workspace.
 *
 * @public
 */
export interface RoleValues {
  /**
   * A list of groups from the SAML assertion attribute to grant the Grafana `Editor` role to.
   *
   * @public
   */
  editor?: string[] | undefined;

  /**
   * A list of groups from the SAML assertion attribute to grant the Grafana `Admin` role to.
   *
   * @public
   */
  admin?: string[] | undefined;
}

/**
 * A structure containing information about how this workspace works with SAML.
 *
 * @public
 */
export interface SamlConfiguration {
  /**
   * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.
   *
   * @public
   */
  idpMetadata: IdpMetadata | undefined;

  /**
   * A structure that defines which attributes in the SAML assertion are to be used to define information about the users authenticated by that IdP to use the workspace.
   *
   * @public
   */
  assertionAttributes?: AssertionAttributes | undefined;

  /**
   * A structure containing arrays that map group names in the SAML assertion to the Grafana `Admin` and `Editor` roles in the workspace.
   *
   * @public
   */
  roleValues?: RoleValues | undefined;

  /**
   * Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace. If this is empty, all organizations in the assertion attribute have access.
   *
   * @public
   */
  allowedOrganizations?: string[] | undefined;

  /**
   * How long a sign-on session by a SAML user is valid, before the user has to sign on again.
   *
   * @public
   */
  loginValidityDuration?: number | undefined;
}

/**
 * A structure containing information about how this workspace works with SAML.
 *
 * @public
 */
export interface SamlAuthentication {
  /**
   * Specifies whether the workspace's SAML configuration is complete.
   *
   * @public
   */
  status: SamlConfigurationStatus | undefined;

  /**
   * A structure containing details about how this workspace works with SAML.
   *
   * @public
   */
  configuration?: SamlConfiguration | undefined;
}

/**
 * A structure containing information about the user authentication methods used by the workspace.
 *
 * @public
 */
export interface AuthenticationDescription {
  /**
   * Specifies whether this workspace uses IAM Identity Center, SAML, or both methods to authenticate users to use the Grafana console in the Amazon Managed Grafana workspace.
   *
   * @public
   */
  providers: AuthenticationProviderTypes[] | undefined;

  /**
   * A structure containing information about how this workspace works with SAML, including what attributes within the assertion are to be mapped to user information in the workspace.
   *
   * @public
   */
  saml?: SamlAuthentication | undefined;

  /**
   * A structure containing information about how this workspace works with IAM Identity Center.
   *
   * @public
   */
  awsSso?: AwsSsoAuthentication | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAuthenticationResponse {
  /**
   * A structure containing information about the authentication methods used in the workspace.
   *
   * @public
   */
  authentication: AuthenticationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceAuthenticationRequest {
  /**
   * The ID of the workspace to update the authentication for.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * Specifies whether this workspace uses SAML 2.0, IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. For more information, see [User authentication in Amazon Managed Grafana](https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html).
   *
   * @public
   */
  authenticationProviders: AuthenticationProviderTypes[] | undefined;

  /**
   * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the `Admin` and `Editor` roles in the workspace.
   *
   * @public
   */
  samlConfiguration?: SamlConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceAuthenticationResponse {
  /**
   * A structure that describes the user authentication for this workspace after the update is made.
   *
   * @public
   */
  authentication: AuthenticationDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationRequest {
  /**
   * The ID of the workspace to get configuration information for.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationResponse {
  /**
   * The configuration string for the workspace that you requested. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html).
   *
   * @public
   */
  configuration: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The supported Grafana version for the workspace.
   *
   * @public
   */
  grafanaVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationRequest {
  /**
   * The new configuration string for the workspace. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html).
   *
   * @public
   */
  configuration: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The ID of the workspace to update.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * Specifies the version of Grafana to support in the workspace. If not specified, keeps the current version of the workspace.
   *
   * Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from 9.4 to 8.4).
   *
   * To know what versions are available to upgrade to for a specific workspace, see the [ListVersions](https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListVersions.html) operation.
   *
   * @public
   */
  grafanaVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationResponse {}

/**
 * @public
 */
export interface DisassociateLicenseRequest {
  /**
   * The ID of the workspace to remove the Grafana Enterprise license from.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The type of license to remove from the workspace.
   *
   * @public
   */
  licenseType: LicenseType | undefined;
}

/**
 * @public
 */
export interface DisassociateLicenseResponse {
  /**
   * A structure containing information about the workspace.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource the list of tags are associated with.
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
   * The list of tags that are associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVersionsRequest {
  /**
   * The maximum number of results to include in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to use when requesting the next set of results. You receive this token from a previous `ListVersions` operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the workspace to list the available upgrade versions. If not included, lists all versions of Grafana that are supported for `CreateWorkspace`.
   *
   * @public
   */
  workspaceId?: string | undefined;
}

/**
 * @public
 */
export interface ListVersionsResponse {
  /**
   * The token to use in a subsequent `ListVersions` operation to return the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Grafana versions available to create. If a workspace ID is included in the request, the Grafana versions to which this workspace can be upgraded.
   *
   * @public
   */
  grafanaVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * The maximum number of results to include in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to use when requesting the next set of results. You received this token from a previous `ListPermissions` operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * (Optional) If you specify `SSO_USER`, then only the permissions of IAM Identity Center users are returned. If you specify `SSO_GROUP`, only the permissions of IAM Identity Center groups are returned.
   *
   * @public
   */
  userType?: UserType | undefined;

  /**
   * (Optional) Limits the results to only the user that matches this ID.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * (Optional) Limits the results to only the group that matches this ID.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * The ID of the workspace to list permissions for. This parameter is required.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure that specifies one user or group in the workspace.
 *
 * @public
 */
export interface User {
  /**
   * The ID of the user or group.
   *
   * Pattern: `^([0-9a-fA-F]\{10\}-|)[A-Fa-f0-9]\{8\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{12\}$`
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies whether this is a single user or a group.
   *
   * @public
   */
  type: UserType | undefined;
}

/**
 * A structure containing the identity of one user or group and the `Admin`, `Editor`, or `Viewer` role that they have.
 *
 * @public
 */
export interface PermissionEntry {
  /**
   * A structure with the ID of the user or group with this role.
   *
   * @public
   */
  user: User | undefined;

  /**
   * Specifies whether the user or group has the `Admin`, `Editor`, or `Viewer` role.
   *
   * @public
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * The token to use in a subsequent `ListPermissions` operation to return the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The permissions returned by the operation.
   *
   * @public
   */
  permissions: PermissionEntry[] | undefined;
}

/**
 * Contains the instructions for one Grafana role permission update in a [UpdatePermissions](https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html) operation.
 *
 * @public
 */
export interface UpdateInstruction {
  /**
   * Specifies whether this update is to add or revoke role permissions.
   *
   * @public
   */
  action: UpdateAction | undefined;

  /**
   * The role to add or revoke for the user or the group specified in `users`.
   *
   * @public
   */
  role: Role | undefined;

  /**
   * A structure that specifies the user or group to add or revoke the role for.
   *
   * @public
   */
  users: User[] | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionsRequest {
  /**
   * An array of structures that contain the permission updates to make.
   *
   * @public
   */
  updateInstructionBatch: UpdateInstruction[] | undefined;

  /**
   * The ID of the workspace to update.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure containing information about one error encountered while performing an [UpdatePermissions](https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html) operation.
 *
 * @public
 */
export interface UpdateError {
  /**
   * The error code.
   *
   * @public
   */
  code: number | undefined;

  /**
   * The message for this error.
   *
   * @public
   */
  message: string | undefined;

  /**
   * Specifies which permission update caused the error.
   *
   * @public
   */
  causedBy: UpdateInstruction | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionsResponse {
  /**
   * An array of structures that contain the errors from the operation, if any.
   *
   * @public
   */
  errors: UpdateError[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountRequest {
  /**
   * A name for the service account. The name must be unique within the workspace, as it determines the ID associated with the service account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The permission level to use for this service account.
   *
   * > **Note:** For more information about the roles and the permissions each has, see [User roles](https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-user-roles.html) in the *Amazon Managed Grafana User Guide*.
   *
   * @public
   */
  grafanaRole: Role | undefined;

  /**
   * The ID of the workspace within which to create the service account.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountResponse {
  /**
   * The ID of the service account.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the service account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The permission level given to the service account.
   *
   * @public
   */
  grafanaRole: Role | undefined;

  /**
   * The workspace with which the service account is associated.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountRequest {
  /**
   * The ID of the service account to delete.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace where the service account resides.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountResponse {
  /**
   * The ID of the service account deleted.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace where the service account was deleted.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountsRequest {
  /**
   * The maximum number of service accounts to include in the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of service accounts to return. (You receive this token from a previous `ListWorkspaceServiceAccounts` operation.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The workspace for which to list service accounts.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure that contains the information about one service account.
 *
 * @public
 */
export interface ServiceAccountSummary {
  /**
   * The unique ID of the service account.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the service account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Returns true if the service account is disabled. Service accounts can be disabled and enabled in the Amazon Managed Grafana console.
   *
   * @public
   */
  isDisabled: string | undefined;

  /**
   * The role of the service account, which sets the permission level used when calling Grafana APIs.
   *
   * @public
   */
  grafanaRole: Role | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountsResponse {
  /**
   * The token to use when requesting the next set of service accounts.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of structures containing information about the service accounts.
   *
   * @public
   */
  serviceAccounts: ServiceAccountSummary[] | undefined;

  /**
   * The workspace to which the service accounts are associated.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountTokenRequest {
  /**
   * A name for the token to create.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Sets how long the token will be valid, in seconds. You can set the time up to 30 days in the future.
   *
   * @public
   */
  secondsToLive: number | undefined;

  /**
   * The ID of the service account for which to create a token.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace the service account resides within.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure that contains the information about a service account token.
 *
 * This structure is returned when creating the token. It is important to store the `key` that is returned, as it is not retrievable at a later time.
 *
 * If you lose the key, you can delete and recreate the token, which will create a new key.
 *
 * @public
 */
export interface ServiceAccountTokenSummaryWithKey {
  /**
   * The unique ID of the service account token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the service account token.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The key for the service account token. Used when making calls to the Grafana HTTP APIs to authenticate and authorize the requests.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountTokenResponse {
  /**
   * Information about the created token, including the key. Be sure to store the key securely.
   *
   * @public
   */
  serviceAccountToken: ServiceAccountTokenSummaryWithKey | undefined;

  /**
   * The ID of the service account where the token was created.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace where the token was created.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountTokenRequest {
  /**
   * The ID of the token to delete.
   *
   * @public
   */
  tokenId: string | undefined;

  /**
   * The ID of the service account from which to delete the token.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace from which to delete the token.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountTokenResponse {
  /**
   * The ID of the token that was deleted.
   *
   * @public
   */
  tokenId: string | undefined;

  /**
   * The ID of the service account where the token was deleted.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace where the token was deleted.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountTokensRequest {
  /**
   * The maximum number of tokens to include in the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of service accounts to return. (You receive this token from a previous `ListWorkspaceServiceAccountTokens` operation.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The ID of the service account for which to return tokens.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace for which to return tokens.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * A structure that contains the information about a service account token.
 *
 * @public
 */
export interface ServiceAccountTokenSummary {
  /**
   * The unique ID of the service account token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the service account token.
   *
   * @public
   */
  name: string | undefined;

  /**
   * When the service account token was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the service account token will expire.
   *
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * The last time the token was used to authorize a Grafana HTTP API.
   *
   * @public
   */
  lastUsedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountTokensResponse {
  /**
   * The token to use when requesting the next set of service accounts.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of structures containing information about the tokens.
   *
   * @public
   */
  serviceAccountTokens: ServiceAccountTokenSummary[] | undefined;

  /**
   * The ID of the service account where the tokens reside.
   *
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * The ID of the workspace where the tokens reside.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource the tag is associated with.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys and values to associate with the resource. You can associate tag keys only, tags (key and values) only or a combination of tag keys and tags.
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
   * The ARN of the resource the tag association is removed from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key values of the tag to be removed from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify `ORGANIZATION`, you must specify which organizational units the workspace can access in the `workspaceOrganizationalUnits` parameter.
   *
   * @public
   */
  accountAccessType: AccountAccessType | undefined;

  /**
   * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of an IAM role that already exists to use with Organizations to access Amazon Web Services data sources and notification channels in other accounts in an organization.
   *
   * @public
   */
  organizationRoleName?: string | undefined;

  /**
   * When creating a workspace through the Amazon Web Services API, CLI or Amazon Web Services CloudFormation, you must manage IAM roles and provision the permissions that the workspace needs to use Amazon Web Services data sources and notification channels.
   *
   * You must also specify a `workspaceRoleArn` for a role that you will manage for the workspace to use when accessing those datasources and notification channels.
   *
   * The ability for Amazon Managed Grafana to create and update IAM roles on behalf of the user is supported only in the Amazon Managed Grafana console, where this value may be set to `SERVICE_MANAGED`.
   *
   * > **Note:** Use only the `CUSTOMER_MANAGED` permission type when creating a workspace with the API, CLI or Amazon Web Services CloudFormation.
   *
   * For more information, see [Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html).
   *
   * @public
   */
  permissionType: PermissionType | undefined;

  /**
   * The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace.
   *
   * @public
   */
  stackSetName?: string | undefined;

  /**
   * This parameter is for internal use only, and should not be used.
   *
   * @public
   */
  workspaceDataSources?: DataSourceType[] | undefined;

  /**
   * A description for the workspace. This is used only to help you identify this workspace.
   *
   * Pattern: `^[\\p\{L\}\\p\{Z\}\\p\{N\}\\p\{P\}]\{0,2048\}$`
   *
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * The name for the workspace. It does not have to be unique.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels.
   *
   * @public
   */
  workspaceNotificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
   *
   * @public
   */
  workspaceOrganizationalUnits?: string[] | undefined;

  /**
   * Specified the IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from, including both data sources and notification channels. You are responsible for managing the permissions for this role as new data sources or notification channels are added.
   *
   * @public
   */
  workspaceRoleArn?: string | undefined;

  /**
   * Specifies whether this workspace uses SAML 2.0, IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. For more information, see [User authentication in Amazon Managed Grafana](https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html).
   *
   * @public
   */
  authenticationProviders: AuthenticationProviderTypes[] | undefined;

  /**
   * The list of tags associated with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
   *
   * > **Note:** Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).
   *
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The configuration string for the workspace that you create. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html).
   *
   * @public
   */
  configuration?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * Configuration for network access to your workspace.
   *
   * When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required.
   *
   * If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.
   *
   * @public
   */
  networkAccessControl?: NetworkAccessConfiguration | undefined;

  /**
   * Specifies the version of Grafana to support in the new workspace. If not specified, defaults to the latest version (for example, 10.4).
   *
   * To get a list of supported versions, use the `ListVersions` operation.
   *
   * @public
   */
  grafanaVersion?: string | undefined;

  /**
   * Specifies whether the workspace supports IPv4 only, or IPv4 and IPv6. Valid values are `IPv4` and `DualStack`. For more information about IP address types, see [Network access control](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-nac.html).
   *
   * @public
   */
  ipAddressType?: IPAddressType | undefined;

  /**
   * The ID or ARN of the Key Management Service key to use for encrypting workspace data.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * A structure containing data about the workspace that was created.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * The ID of the workspace to delete.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * A structure containing information about the workspace that was deleted.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * The ID of the workspace to display information about.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * A structure containing information about the workspace.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * The maximum number of workspaces to include in the results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of workspaces to return. (You receive this token from a previous `ListWorkspaces` operation.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A structure that contains some information about one workspace in the account.
 *
 * @public
 */
export interface WorkspaceSummary {
  /**
   * The date that the workspace was created.
   *
   * @public
   */
  created: Date | undefined;

  /**
   * The customer-entered description of the workspace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The URL endpoint to use to access the Grafana console in the workspace.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The Grafana version that the workspace is running.
   *
   * @public
   */
  grafanaVersion: string | undefined;

  /**
   * The unique ID of the workspace.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The most recent date that the workspace was modified.
   *
   * @public
   */
  modified: Date | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Web Services notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, which allows Amazon Managed Grafana to use these channels.
   *
   * @public
   */
  notificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * The current status of the workspace.
   *
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * A structure containing information about the authentication methods used in the workspace.
   *
   * @public
   */
  authentication: AuthenticationSummary | undefined;

  /**
   * The list of tags associated with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether this workspace has a full Grafana Enterprise license.
   *
   * > **Note:** Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.
   *
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * The token that ties this workspace to a Grafana Labs account. For more information, see [Link your account with Grafana Labs](https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html#AMG-workspace-register-enterprise).
   *
   * @public
   */
  grafanaToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * An array of structures that contain some information about the workspaces in the account.
   *
   * @public
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * The token to use when requesting the next set of workspaces.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify `ORGANIZATION`, you must specify which organizational units the workspace can access in the `workspaceOrganizationalUnits` parameter.
   *
   * @public
   */
  accountAccessType?: AccountAccessType | undefined;

  /**
   * The name of an IAM role that already exists to use to access resources through Organizations. This can only be used with a workspace that has the `permissionType` set to `CUSTOMER_MANAGED`.
   *
   * @public
   */
  organizationRoleName?: string | undefined;

  /**
   * Use this parameter if you want to change a workspace from `SERVICE_MANAGED` to `CUSTOMER_MANAGED`. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose `CUSTOMER_MANAGED`.
   *
   * If you specify this as `CUSTOMER_MANAGED`, you must also specify a `workspaceRoleArn` that the workspace will use for accessing Amazon Web Services resources.
   *
   * For more information on the role and permissions needed, see [Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html)
   *
   * > **Note:**
   * >
   * > Do not use this to convert a `CUSTOMER_MANAGED` workspace to `SERVICE_MANAGED`. Do not include this parameter if you want to leave the workspace as `SERVICE_MANAGED`.
   * >
   * > You can convert a `CUSTOMER_MANAGED` workspace to `SERVICE_MANAGED` using the Amazon Managed Grafana console. For more information, see [Managing permissions for data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html).
   *
   * @public
   */
  permissionType?: PermissionType | undefined;

  /**
   * The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace.
   *
   * @public
   */
  stackSetName?: string | undefined;

  /**
   * This parameter is for internal use only, and should not be used.
   *
   * @public
   */
  workspaceDataSources?: DataSourceType[] | undefined;

  /**
   * A description for the workspace. This is used only to help you identify this workspace.
   *
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * The ID of the workspace to update.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A new name for the workspace to update.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels.
   *
   * @public
   */
  workspaceNotificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
   *
   * @public
   */
  workspaceOrganizationalUnits?: string[] | undefined;

  /**
   * Specifies an IAM role that grants permissions to Amazon Web Services resources that the workspace accesses, such as data sources and notification channels. If this workspace has `permissionType` `CUSTOMER_MANAGED`, then this role is required.
   *
   * @public
   */
  workspaceRoleArn?: string | undefined;

  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
   *
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * Whether to remove the VPC configuration from the workspace.
   *
   * Setting this to `true` and providing a `vpcConfiguration` to set will return an error.
   *
   * @public
   */
  removeVpcConfiguration?: boolean | undefined;

  /**
   * The configuration settings for network access to your workspace.
   *
   * When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required.
   *
   * If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.
   *
   * @public
   */
  networkAccessControl?: NetworkAccessConfiguration | undefined;

  /**
   * Whether to remove the network access configuration from the workspace.
   *
   * Setting this to `true` and providing a `networkAccessControl` to set will return an error.
   *
   * If you remove this configuration by setting this to `true`, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.
   *
   * @public
   */
  removeNetworkAccessConfiguration?: boolean | undefined;

  /**
   * Specifies whether the workspace supports IPv4 only, or IPv4 and IPv6. Valid values are `IPv4` and `DualStack`. For more information about IP address types, see [Network access control](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-nac.html).
   *
   * @public
   */
  ipAddressType?: IPAddressType | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * A structure containing data about the workspace that was created.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}
