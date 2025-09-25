// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

import { GrafanaServiceException as __BaseException } from "./GrafanaServiceException";

/**
 * <p>You do not have sufficient permissions to perform this action. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AccountAccessType = {
  /**
   * Indicates that the customer is using Grafana to monitor resources in their current account.
   */
  CURRENT_ACCOUNT: "CURRENT_ACCOUNT",
  /**
   * Indicates that the customer is using Grafana to monitor resources in organizational units.
   */
  ORGANIZATION: "ORGANIZATION",
} as const;

/**
 * @public
 */
export type AccountAccessType = (typeof AccountAccessType)[keyof typeof AccountAccessType];

/**
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that is associated with the error.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface CreateWorkspaceApiKeyRequest {
  /**
   * <p>Specifies the name of the key. Keynames must be unique to the workspace.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>Specifies the permission level of the key.</p>
   *          <p> Valid values: <code>ADMIN</code>|<code>EDITOR</code>|<code>VIEWER</code>
   *          </p>
   * @public
   */
  keyRole: string | undefined;

  /**
   * <p>Specifies the time in seconds until the key expires. Keys can be valid for up to 30
   *             days.</p>
   * @public
   */
  secondsToLive: number | undefined;

  /**
   * <p>The ID of the workspace to create an API key.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceApiKeyResponse {
  /**
   * <p>The name of the key that was created.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The key token. Use this value as a bearer token to authenticate HTTP requests to the
   *             workspace.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The ID of the workspace that the key is valid for.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>Unexpected error while processing the request. Retry the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>How long to wait before you retry this operation.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request references a resource that does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that is associated with the error.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that is associated with the error.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The value of a parameter in the request caused an error.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The request was denied because of request throttling. Retry the request.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>The ID of the service that is associated with the error.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The ID of the service quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The value of a parameter in the request caused an error.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>A structure that contains information about a request parameter that caused an
 *             error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that caused the validation error.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why this field couldn't be validated.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The value of a parameter in the request caused an error.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason that the operation failed.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that might be associated with the error.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface DeleteWorkspaceApiKeyRequest {
  /**
   * <p>The name of the API key to delete.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The ID of the workspace to delete.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceApiKeyResponse {
  /**
   * <p>The name of the key that was deleted.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The ID of the workspace where the key was deleted.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>A structure that defines which attributes in the IdP assertion are to be used to
 *             define information about the users authenticated by the IdP to use the workspace.</p>
 * @public
 */
export interface AssertionAttributes {
  /**
   * <p>The name of the attribute within the SAML assertion to use as the user full "friendly"
   *             names for SAML users.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The name of the attribute within the SAML assertion to use as the login names for SAML
   *             users.</p>
   * @public
   */
  login?: string | undefined;

  /**
   * <p>The name of the attribute within the SAML assertion to use as the email names for SAML
   *             users.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The name of the attribute within the SAML assertion to use as the user full "friendly"
   *             names for user groups.</p>
   * @public
   */
  groups?: string | undefined;

  /**
   * <p>The name of the attribute within the SAML assertion to use as the user roles.</p>
   * @public
   */
  role?: string | undefined;

  /**
   * <p>The name of the attribute within the SAML assertion to use as the user full "friendly"
   *             names for the users' organizations.</p>
   * @public
   */
  org?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LicenseType = {
  /**
   * Grafana Enterprise License.
   */
  ENTERPRISE: "ENTERPRISE",
  /**
   * Grafana Enterprise Free Trial License.
   */
  ENTERPRISE_FREE_TRIAL: "ENTERPRISE_FREE_TRIAL",
} as const;

/**
 * @public
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

/**
 * @public
 */
export interface AssociateLicenseRequest {
  /**
   * <p>The ID of the workspace to associate the license with.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The type of license to associate with the workspace.</p>
   *          <note>
   *             <p>Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</p>
   *          </note>
   * @public
   */
  licenseType: LicenseType | undefined;

  /**
   * <p>A token from Grafana Labs that ties your Amazon Web Services account with a Grafana
   *             Labs account. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html#AMG-workspace-register-enterprise">Link your account with Grafana Labs</a>.</p>
   * @public
   */
  grafanaToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthenticationProviderTypes = {
  /**
   * Indicates that AMG workspace has AWS SSO enabled as its authentication provider.
   */
  AWS_SSO: "AWS_SSO",
  /**
   * Indicates that the AMG workspace has SAML enabled as its authentication provider.
   */
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type AuthenticationProviderTypes =
  (typeof AuthenticationProviderTypes)[keyof typeof AuthenticationProviderTypes];

/**
 * @public
 * @enum
 */
export const SamlConfigurationStatus = {
  /**
   * Indicates that SAML on an AMG workspace is enabled and has been configured.
   */
  CONFIGURED: "CONFIGURED",
  /**
   * Indicates that SAML on an AMG workspace is enabled but has not been configured.
   */
  NOT_CONFIGURED: "NOT_CONFIGURED",
} as const;

/**
 * @public
 */
export type SamlConfigurationStatus = (typeof SamlConfigurationStatus)[keyof typeof SamlConfigurationStatus];

/**
 * <p>A structure that describes whether the workspace uses SAML, IAM Identity Center, or
 *             both methods for user authentication, and whether that authentication is fully
 *             configured.</p>
 * @public
 */
export interface AuthenticationSummary {
  /**
   * <p>Specifies whether the workspace uses SAML, IAM Identity Center, or both methods for
   *             user authentication.</p>
   * @public
   */
  providers: AuthenticationProviderTypes[] | undefined;

  /**
   * <p>Specifies whether the workplace's user authentication method is fully
   *             configured.</p>
   * @public
   */
  samlConfigurationStatus?: SamlConfigurationStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  /**
   * Amazon OpenSearch Service
   */
  AMAZON_OPENSEARCH_SERVICE: "AMAZON_OPENSEARCH_SERVICE",
  /**
   * Amazon Athena
   */
  ATHENA: "ATHENA",
  /**
   * CloudWatch Logs
   */
  CLOUDWATCH: "CLOUDWATCH",
  /**
   * Managed Prometheus
   */
  PROMETHEUS: "PROMETHEUS",
  /**
   * Redshift
   */
  REDSHIFT: "REDSHIFT",
  /**
   * IoT SiteWise
   */
  SITEWISE: "SITEWISE",
  /**
   * Timestream
   */
  TIMESTREAM: "TIMESTREAM",
  /**
   * IoT TwinMaker
   */
  TWINMAKER: "TWINMAKER",
  /**
   * X-Ray
   */
  XRAY: "XRAY",
} as const;

/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * <p>The configuration settings for in-bound network access to your workspace.</p>
 *          <p>When this is configured, only listed IP addresses and VPC endpoints will be able to
 *             access your workspace. Standard Grafana authentication and authorization are still
 *             required.</p>
 *          <p>Access is granted to a caller that is in either the IP address list or the VPC
 *             endpoint list - they do not need to be in both.</p>
 *          <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints are
 *             allowed. Standard Grafana authentication and authorization are still
 *             required.</p>
 *          <note>
 *             <p>While both <code>prefixListIds</code> and <code>vpceIds</code> are required, you
 *                 can pass in an empty array of strings for either parameter if you do not want to allow any
 *                 of that type.</p>
 *             <p>If both are passed as empty arrays, no traffic is allowed to the workspace,
 *                 because only <i>explicitly</i> allowed connections are accepted.</p>
 *          </note>
 * @public
 */
export interface NetworkAccessConfiguration {
  /**
   * <p>An array of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses.
   *             The IP addresses specified are allowed to access your workspace. If the list is not
   *             included in the configuration (passed an empty array) then no IP addresses are
   *             allowed to access the workspace. You create a prefix list using the Amazon VPC
   *             console.</p>
   *          <p>Prefix list IDs have the format <code>pl-<i>1a2b3c4d</i>
   *             </code>.</p>
   *          <p>For more information about prefix lists, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html">Group CIDR blocks using managed
   *                 prefix lists</a>in the <i>Amazon Virtual Private Cloud User
   *             Guide</i>.</p>
   * @public
   */
  prefixListIds: string[] | undefined;

  /**
   * <p>An array of Amazon VPC endpoint IDs for the workspace. You can create VPC
   *             endpoints to your Amazon Managed Grafana workspace for access from within a VPC. If a
   *                 <code>NetworkAccessConfiguration</code> is specified then only VPC endpoints
   *             specified here are allowed to access the workspace. If you pass in an empty array
   *             of strings, then no VPCs are allowed to access the workspace.</p>
   *          <p>VPC endpoint IDs have the format
   *             <code>vpce-<i>1a2b3c4d</i>
   *             </code>.</p>
   *          <p>For more information about creating an interface VPC endpoint, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/VPC-endpoints">Interface VPC
   *                 endpoints</a> in the <i>Amazon Managed Grafana User
   *             Guide</i>.</p>
   *          <note>
   *             <p>The only VPC endpoints that can be specified here are interface VPC endpoints for
   *                 Grafana workspaces (using the <code>com.amazonaws.[region].grafana-workspace</code>
   *                 service endpoint). Other VPC endpoints are ignored.</p>
   *          </note>
   * @public
   */
  vpceIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationDestinationType = {
  /**
   * AWS Simple Notification Service
   */
  SNS: "SNS",
} as const;

/**
 * @public
 */
export type NotificationDestinationType =
  (typeof NotificationDestinationType)[keyof typeof NotificationDestinationType];

/**
 * @public
 * @enum
 */
export const PermissionType = {
  /**
   * Customer Managed
   */
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  /**
   * Service Managed
   */
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;

/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 * @enum
 */
export const WorkspaceStatus = {
  /**
   * Workspace is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * Workspace is being created.
   */
  CREATING: "CREATING",
  /**
   * Workspace creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Workspace is being deleted.
   */
  DELETING: "DELETING",
  /**
   * Workspace deletion failed.
   */
  DELETION_FAILED: "DELETION_FAILED",
  /**
   * Workspace is in an invalid state, it can only and should be deleted.
   */
  FAILED: "FAILED",
  /**
   * Failed to remove enterprise license from workspace.
   */
  LICENSE_REMOVAL_FAILED: "LICENSE_REMOVAL_FAILED",
  /**
   * Workspace update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Workspace is being updated.
   */
  UPDATING: "UPDATING",
  /**
   * Workspace upgrade failed.
   */
  UPGRADE_FAILED: "UPGRADE_FAILED",
  /**
   * Workspace is being upgraded to enterprise.
   */
  UPGRADING: "UPGRADING",
  /**
   * Workspace version update failed.
   */
  VERSION_UPDATE_FAILED: "VERSION_UPDATE_FAILED",
  /**
   * Workspace version is being updated.
   */
  VERSION_UPDATING: "VERSION_UPDATING",
} as const;

/**
 * @public
 */
export type WorkspaceStatus = (typeof WorkspaceStatus)[keyof typeof WorkspaceStatus];

/**
 * <p>The configuration settings for an Amazon VPC that contains data sources for
 *             your Grafana workspace to connect to.</p>
 *          <note>
 *             <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of
 *                 the same VPC.</p>
 *             <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul)
 *                 Region (ap-northeast-2).</p>
 *          </note>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The list of Amazon EC2 security group IDs attached to the Amazon VPC
   *             for your Grafana workspace to connect. Duplicates not allowed.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The list of Amazon EC2 subnet IDs created in the Amazon VPC for your
   *             Grafana workspace to connect. Duplicates not allowed.</p>
   * @public
   */
  subnetIds: string[] | undefined;
}

/**
 * <p>A structure containing information about an Amazon Managed Grafana workspace in your
 *             account.</p>
 * @public
 */
export interface WorkspaceDescription {
  /**
   * <p>Specifies whether the workspace can access Amazon Web Services resources in this
   *                 Amazon Web Services account only, or whether it can also access Amazon Web Services
   *             resources in other accounts in the same organization. If this is
   *                 <code>ORGANIZATION</code>, the <code>workspaceOrganizationalUnits</code> parameter
   *             specifies which organizational units the workspace can access.</p>
   * @public
   */
  accountAccessType?: AccountAccessType | undefined;

  /**
   * <p>The date that the workspace was created.</p>
   * @public
   */
  created: Date | undefined;

  /**
   * <p>Specifies the Amazon Web Services data sources that have been configured to have
   *                 IAM roles and permissions created to allow Amazon Managed Grafana to read
   *             data from these sources.</p>
   *          <p>This list is only used when the workspace was created through the Amazon Web Services
   *             console, and the <code>permissionType</code> is <code>SERVICE_MANAGED</code>.</p>
   * @public
   */
  dataSources: DataSourceType[] | undefined;

  /**
   * <p>The user-defined description of the workspace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The URL that users can use to access the Grafana console in the workspace.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The version of Grafana supported in this workspace.</p>
   * @public
   */
  grafanaVersion: string | undefined;

  /**
   * <p>The unique ID of this workspace.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The most recent date that the workspace was modified.</p>
   * @public
   */
  modified: Date | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The name of the IAM role that is used to access resources through
   *                 Organizations.</p>
   * @public
   */
  organizationRoleName?: string | undefined;

  /**
   * <p>The Amazon Web Services notification channels that Amazon Managed Grafana can automatically
   *             create IAM roles and permissions for, to allow Amazon Managed Grafana to use
   *             these channels.</p>
   * @public
   */
  notificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * <p>Specifies the organizational units that this workspace is allowed to use data sources
   *             from, if this workspace is in an account that is part of an organization.</p>
   * @public
   */
  organizationalUnits?: string[] | undefined;

  /**
   * <p>If this is <code>SERVICE_MANAGED</code>, and the workplace was created through the
   *             Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the
   *             IAM roles and provisions the permissions that the workspace needs to
   *             use Amazon Web Services data sources and notification channels.</p>
   *          <p>If this is <code>CUSTOMER_MANAGED</code>, you must manage those roles and permissions
   *             yourself.</p>
   *          <p>If you are working with a workspace in a member account of an organization and
   *             that account is not a delegated administrator account, and you want the workspace to
   *             access data sources in other Amazon Web Services accounts in the organization, this
   *             parameter must be set to <code>CUSTOMER_MANAGED</code>.</p>
   *          <p>For more information about converting between customer and service managed, see
   *             <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html">Managing permissions for data sources and notification channels</a>. For more
   *             information about the roles and permissions that must be managed for customer managed
   *             workspaces, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana
   *             permissions and policies for Amazon Web Services data sources and notification
   *             channels</a>
   *          </p>
   * @public
   */
  permissionType?: PermissionType | undefined;

  /**
   * <p>The name of the CloudFormation stack set that is used to generate IAM roles to be used for this workspace.</p>
   * @public
   */
  stackSetName?: string | undefined;

  /**
   * <p>The current status of the workspace.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The IAM role that grants permissions to the Amazon Web Services
   *             resources that the workspace will view data from. This role must already exist.</p>
   * @public
   */
  workspaceRoleArn?: string | undefined;

  /**
   * <p>Specifies whether this workspace has a full Grafana Enterprise license.</p>
   *          <note>
   *             <p>Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</p>
   *          </note>
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * <p>Specifies whether this workspace has already fully used its free trial for Grafana
   *             Enterprise.</p>
   *          <note>
   *             <p>Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</p>
   *          </note>
   * @public
   */
  freeTrialConsumed?: boolean | undefined;

  /**
   * <p>If this workspace has a full Grafana Enterprise license purchased through
   *             Amazon Web Services Marketplace, this specifies when the
   *             license ends and will need to be renewed. Purchasing the Enterprise plugins option
   *             through Amazon Managed Grafana does not have an expiration. It is valid until the
   *             license is removed.</p>
   * @public
   */
  licenseExpiration?: Date | undefined;

  /**
   * <p>If this workspace is currently in the free trial period for Grafana Enterprise, this
   *             value specifies when that free trial ends.</p>
   *          <note>
   *             <p>Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</p>
   *          </note>
   * @public
   */
  freeTrialExpiration?: Date | undefined;

  /**
   * <p>A structure that describes whether the workspace uses SAML, IAM Identity Center, or
   *             both methods for user authentication.</p>
   * @public
   */
  authentication: AuthenticationSummary | undefined;

  /**
   * <p>The list of tags associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for connecting to data sources in a private VPC (Amazon Virtual Private Cloud).</p>
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>The configuration settings for network access to your workspace.</p>
   * @public
   */
  networkAccessControl?: NetworkAccessConfiguration | undefined;

  /**
   * <p>The token that ties this workspace to a Grafana Labs account. For more information,
   *             see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html#AMG-workspace-register-enterprise">Link your account with Grafana Labs</a>.</p>
   * @public
   */
  grafanaToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateLicenseResponse {
  /**
   * <p>A structure containing data about the workspace.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAuthenticationRequest {
  /**
   * <p>The ID of the workspace to return authentication information about.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>A structure containing information about how this workspace works with IAM Identity Center. </p>
 * @public
 */
export interface AwsSsoAuthentication {
  /**
   * <p>The ID of the IAM Identity Center-managed application that is created by Amazon Managed Grafana.</p>
   * @public
   */
  ssoClientId?: string | undefined;
}

/**
 * <p>A structure containing the identity provider (IdP) metadata used to integrate the
 *             identity provider with this workspace. You can specify the metadata either by providing
 *             a URL to its location in the <code>url</code> parameter, or by specifying the full
 *             metadata in XML format in the <code>xml</code> parameter. Specifying both will cause an
 *             error.</p>
 * @public
 */
export type IdpMetadata = IdpMetadata.UrlMember | IdpMetadata.XmlMember | IdpMetadata.$UnknownMember;

/**
 * @public
 */
export namespace IdpMetadata {
  /**
   * <p>The URL of the location containing the IdP metadata.</p>
   * @public
   */
  export interface UrlMember {
    url: string;
    xml?: never;
    $unknown?: never;
  }

  /**
   * <p>The full IdP metadata, in XML format.</p>
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

  export interface Visitor<T> {
    url: (value: string) => T;
    xml: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IdpMetadata, visitor: Visitor<T>): T => {
    if (value.url !== undefined) return visitor.url(value.url);
    if (value.xml !== undefined) return visitor.xml(value.xml);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>This structure defines which groups defined in the SAML assertion attribute are to be
 *             mapped to the Grafana <code>Admin</code> and <code>Editor</code> roles in the workspace.
 *             SAML authenticated users not part of <code>Admin</code> or <code>Editor</code> role
 *             groups have <code>Viewer</code> permission over the workspace.</p>
 * @public
 */
export interface RoleValues {
  /**
   * <p>A list of groups from the SAML assertion attribute to grant the Grafana
   *                 <code>Editor</code> role to.</p>
   * @public
   */
  editor?: string[] | undefined;

  /**
   * <p>A list of groups from the SAML assertion attribute to grant the Grafana
   *                 <code>Admin</code> role to.</p>
   * @public
   */
  admin?: string[] | undefined;
}

/**
 * <p>A structure containing information about how this workspace works with SAML. </p>
 * @public
 */
export interface SamlConfiguration {
  /**
   * <p>A structure containing the identity provider (IdP) metadata used to integrate the
   *             identity provider with this workspace.</p>
   * @public
   */
  idpMetadata: IdpMetadata | undefined;

  /**
   * <p>A structure that defines which attributes in the SAML assertion are to be used to
   *             define information about the users authenticated by that IdP to use the
   *             workspace.</p>
   * @public
   */
  assertionAttributes?: AssertionAttributes | undefined;

  /**
   * <p>A structure containing arrays that map group names in the SAML assertion to the
   *             Grafana <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
   * @public
   */
  roleValues?: RoleValues | undefined;

  /**
   * <p>Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace. If this is empty, all organizations in the assertion attribute
   *             have access.</p>
   * @public
   */
  allowedOrganizations?: string[] | undefined;

  /**
   * <p>How long a sign-on session by a SAML user is valid, before the user has to sign on
   *             again.</p>
   * @public
   */
  loginValidityDuration?: number | undefined;
}

/**
 * <p>A structure containing information about how this workspace works with SAML. </p>
 * @public
 */
export interface SamlAuthentication {
  /**
   * <p>Specifies whether the workspace's SAML configuration is complete.</p>
   * @public
   */
  status: SamlConfigurationStatus | undefined;

  /**
   * <p>A structure containing details about how this workspace works with SAML. </p>
   * @public
   */
  configuration?: SamlConfiguration | undefined;
}

/**
 * <p>A structure containing information about the user authentication methods used by the
 *             workspace.</p>
 * @public
 */
export interface AuthenticationDescription {
  /**
   * <p>Specifies whether this workspace uses IAM Identity Center, SAML, or both methods to
   *             authenticate users to use the Grafana console in the Amazon Managed Grafana
   *             workspace.</p>
   * @public
   */
  providers: AuthenticationProviderTypes[] | undefined;

  /**
   * <p>A structure containing information about how this workspace works with SAML, including
   *             what attributes within the assertion are to be mapped to user information in the
   *             workspace. </p>
   * @public
   */
  saml?: SamlAuthentication | undefined;

  /**
   * <p>A structure containing information about how this workspace works with IAM Identity Center. </p>
   * @public
   */
  awsSso?: AwsSsoAuthentication | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAuthenticationResponse {
  /**
   * <p>A structure containing information about the authentication methods used in the
   *             workspace.</p>
   * @public
   */
  authentication: AuthenticationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceAuthenticationRequest {
  /**
   * <p>The ID of the workspace to update the authentication for.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>Specifies whether this workspace uses SAML 2.0, IAM Identity Center, or both to
   *             authenticate users for using the Grafana console within a workspace. For more
   *             information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in
   *                     Amazon Managed Grafana</a>.</p>
   * @public
   */
  authenticationProviders: AuthenticationProviderTypes[] | undefined;

  /**
   * <p>If the workspace uses SAML, use this structure to map SAML assertion attributes to
   *             workspace user information and define which groups in the assertion attribute are to
   *             have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
   * @public
   */
  samlConfiguration?: SamlConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceAuthenticationResponse {
  /**
   * <p>A structure that describes the user authentication for this workspace after the update
   *             is made.</p>
   * @public
   */
  authentication: AuthenticationDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationRequest {
  /**
   * <p>The ID of the workspace to get configuration information for.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationResponse {
  /**
   * <p>The configuration string for the workspace that you requested. For more information
   *             about the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana
   *                 workspace</a>.</p>
   * @public
   */
  configuration: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The supported Grafana version for the workspace.</p>
   * @public
   */
  grafanaVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationRequest {
  /**
   * <p>The new configuration string for the workspace. For more information about the format
   *             and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana
   *                 workspace</a>.</p>
   * @public
   */
  configuration: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The ID of the workspace to update.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>Specifies the version of Grafana to support in the workspace. If not specified,
   *             keeps the current version of the workspace.</p>
   *          <p>Can only be used to upgrade (for example, from 8.4 to 9.4), not
   *             downgrade (for example, from 9.4 to 8.4).</p>
   *          <p>To know what versions are available to upgrade to for a specific workspace, see
   *             the <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListVersions.html">ListVersions</a> operation.</p>
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
   * <p>The ID of the workspace to remove the Grafana Enterprise license from.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The type of license to remove from the workspace.</p>
   * @public
   */
  licenseType: LicenseType | undefined;
}

/**
 * @public
 */
export interface DisassociateLicenseResponse {
  /**
   * <p>A structure containing information about the workspace.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource the list of tags are associated with.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags that are associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVersionsRequest {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You receive this token from
   *             a previous <code>ListVersions</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the workspace to list the available upgrade versions. If not included,
   *             lists all versions of Grafana that are supported for
   *             <code>CreateWorkspace</code>.</p>
   * @public
   */
  workspaceId?: string | undefined;
}

/**
 * @public
 */
export interface ListVersionsResponse {
  /**
   * <p>The token to use in a subsequent <code>ListVersions</code> operation to return the
   *             next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Grafana versions available to create. If a workspace ID is included in the
   *             request, the Grafana versions to which this workspace can be upgraded.</p>
   * @public
   */
  grafanaVersions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  /**
   * SSO group.
   */
  SSO_GROUP: "SSO_GROUP",
  /**
   * SSO user.
   */
  SSO_USER: "SSO_USER",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to use when requesting the next set of results. You received this token from
   *             a previous <code>ListPermissions</code> operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>(Optional) If you specify <code>SSO_USER</code>, then only the permissions of IAM Identity Center users are returned. If you specify <code>SSO_GROUP</code>, only the
   *             permissions of IAM Identity Center groups are returned.</p>
   * @public
   */
  userType?: UserType | undefined;

  /**
   * <p>(Optional) Limits the results to only the user that matches this ID.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>(Optional) Limits the results to only the group that matches this ID.</p>
   * @public
   */
  groupId?: string | undefined;

  /**
   * <p>The ID of the workspace to list permissions for. This parameter is required.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Role = {
  /**
   * Role Admin.
   */
  ADMIN: "ADMIN",
  /**
   * Role Editor.
   */
  EDITOR: "EDITOR",
  /**
   * Role Viewer.
   */
  VIEWER: "VIEWER",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * <p>A structure that specifies one user or group in the workspace.</p>
 * @public
 */
export interface User {
  /**
   * <p>The ID of the user or group.</p>
   *          <p>Pattern:
   *                 <code>^([0-9a-fA-F]\{10\}-|)[A-Fa-f0-9]\{8\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{12\}$</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies whether this is a single user or a group.</p>
   * @public
   */
  type: UserType | undefined;
}

/**
 * <p>A structure containing the identity of one user or group and the <code>Admin</code>,
 *                 <code>Editor</code>, or <code>Viewer</code> role that they have.</p>
 * @public
 */
export interface PermissionEntry {
  /**
   * <p>A structure with the ID of the user or group with this role.</p>
   * @public
   */
  user: User | undefined;

  /**
   * <p>Specifies whether the user or group has the <code>Admin</code>, <code>Editor</code>,
   *             or <code>Viewer</code> role.</p>
   * @public
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * <p>The token to use in a subsequent <code>ListPermissions</code> operation to return the
   *             next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The permissions returned by the operation.</p>
   * @public
   */
  permissions: PermissionEntry[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateAction = {
  /**
   * Add permissions.
   */
  ADD: "ADD",
  /**
   * Revoke permissions.
   */
  REVOKE: "REVOKE",
} as const;

/**
 * @public
 */
export type UpdateAction = (typeof UpdateAction)[keyof typeof UpdateAction];

/**
 * <p>Contains the instructions for one Grafana role permission update in a <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.</p>
 * @public
 */
export interface UpdateInstruction {
  /**
   * <p>Specifies whether this update is to add or revoke role permissions.</p>
   * @public
   */
  action: UpdateAction | undefined;

  /**
   * <p>The role to add or revoke for the user or the group specified in
   *             <code>users</code>.</p>
   * @public
   */
  role: Role | undefined;

  /**
   * <p>A structure that specifies the user or group to add or revoke the role for.</p>
   * @public
   */
  users: User[] | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionsRequest {
  /**
   * <p>An array of structures that contain the permission updates to make.</p>
   * @public
   */
  updateInstructionBatch: UpdateInstruction[] | undefined;

  /**
   * <p>The ID of the workspace to update.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>A structure containing information about one error encountered while performing an
 *                 <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.</p>
 * @public
 */
export interface UpdateError {
  /**
   * <p>The error code.</p>
   * @public
   */
  code: number | undefined;

  /**
   * <p>The message for this error.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Specifies which permission update caused the error.</p>
   * @public
   */
  causedBy: UpdateInstruction | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionsResponse {
  /**
   * <p>An array of structures that contain the errors from the operation, if any.</p>
   * @public
   */
  errors: UpdateError[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountRequest {
  /**
   * <p>A name for the service account. The name must be unique within the workspace, as it
   *             determines the ID associated with the service account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The permission level to use for this service account.</p>
   *          <note>
   *             <p>For more information about the roles and the permissions each has, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-user-roles.html">User
   *                 roles</a> in the <i>Amazon Managed Grafana User Guide</i>.</p>
   *          </note>
   * @public
   */
  grafanaRole: Role | undefined;

  /**
   * <p>The ID of the workspace within which to create the service account.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountResponse {
  /**
   * <p>The ID of the service account.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the service account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The permission level given to the service account.</p>
   * @public
   */
  grafanaRole: Role | undefined;

  /**
   * <p>The workspace with which the service account is associated.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountRequest {
  /**
   * <p>The ID of the service account to delete.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace where the service account resides.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountResponse {
  /**
   * <p>The ID of the service account deleted.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace where the service account was deleted.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountsRequest {
  /**
   * <p>The maximum number of service accounts to include in the results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of service accounts to return. (You receive this token
   *             from a previous <code>ListWorkspaceServiceAccounts</code> operation.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The workspace for which to list service accounts.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>A structure that contains the information about one service account.</p>
 * @public
 */
export interface ServiceAccountSummary {
  /**
   * <p>The unique ID of the service account.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the service account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Returns true if the service account is disabled. Service accounts can be disabled and
   *             enabled in the Amazon Managed Grafana console.</p>
   * @public
   */
  isDisabled: string | undefined;

  /**
   * <p>The role of the service account, which sets the permission level used when calling
   *             Grafana APIs.</p>
   * @public
   */
  grafanaRole: Role | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountsResponse {
  /**
   * <p>The token to use when requesting the next set of service accounts.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of structures containing information about the service accounts.</p>
   * @public
   */
  serviceAccounts: ServiceAccountSummary[] | undefined;

  /**
   * <p>The workspace to which the service accounts are associated.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountTokenRequest {
  /**
   * <p>A name for the token to create.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Sets how long the token will be valid, in seconds. You can set the time up to 30
   *             days in the future.</p>
   * @public
   */
  secondsToLive: number | undefined;

  /**
   * <p>The ID of the service account for which to create a token.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace the service account resides within.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>A structure that contains the information about a service account token.</p>
 *          <p>This structure is returned when creating the token. It is important to store the
 *             <code>key</code> that is returned, as it is not retrievable at a later time.</p>
 *          <p>If you lose the key, you can delete and recreate the token, which will create a
 *             new key.</p>
 * @public
 */
export interface ServiceAccountTokenSummaryWithKey {
  /**
   * <p>The unique ID of the service account token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the service account token.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The key for the service account token. Used when making calls to the Grafana HTTP
   *             APIs to authenticate and authorize the requests.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceServiceAccountTokenResponse {
  /**
   * <p>Information about the created token, including the key. Be sure to store the key
   *             securely.</p>
   * @public
   */
  serviceAccountToken: ServiceAccountTokenSummaryWithKey | undefined;

  /**
   * <p>The ID of the service account where the token was created.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace where the token was created.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountTokenRequest {
  /**
   * <p>The ID of the token to delete.</p>
   * @public
   */
  tokenId: string | undefined;

  /**
   * <p>The ID of the service account from which to delete the token.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace from which to delete the token.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceServiceAccountTokenResponse {
  /**
   * <p>The ID of the token that was deleted.</p>
   * @public
   */
  tokenId: string | undefined;

  /**
   * <p>The ID of the service account where the token was deleted.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace where the token was deleted.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountTokensRequest {
  /**
   * <p>The maximum number of tokens to include in the results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of service accounts to return. (You receive this token
   *             from a previous <code>ListWorkspaceServiceAccountTokens</code> operation.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The ID of the service account for which to return tokens.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace for which to return tokens.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>A structure that contains the information about a service account token.</p>
 * @public
 */
export interface ServiceAccountTokenSummary {
  /**
   * <p>The unique ID of the service account token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the service account token.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>When the service account token was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>When the service account token will expire.</p>
   * @public
   */
  expiresAt: Date | undefined;

  /**
   * <p>The last time the token was used to authorize a Grafana HTTP API.</p>
   * @public
   */
  lastUsedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspaceServiceAccountTokensResponse {
  /**
   * <p>The token to use when requesting the next set of service accounts.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of structures containing information about the tokens.</p>
   * @public
   */
  serviceAccountTokens: ServiceAccountTokenSummary[] | undefined;

  /**
   * <p>The ID of the service account where the tokens reside.</p>
   * @public
   */
  serviceAccountId: string | undefined;

  /**
   * <p>The ID of the workspace where the tokens reside.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource the tag is associated with.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys and values to associate with the resource. You can associate tag
   *             keys only, tags (key and values) only or a combination of tag keys and tags.</p>
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
   * <p>The ARN of the resource the tag association is removed from. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key values of the tag to be removed from the resource.</p>
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
   * <p>Specifies whether the workspace can access Amazon Web Services resources in this
   *                 Amazon Web Services account only, or whether it can also access Amazon Web Services
   *             resources in other accounts in the same organization. If you specify
   *                 <code>ORGANIZATION</code>, you must specify which organizational units the workspace
   *             can access in the <code>workspaceOrganizationalUnits</code> parameter.</p>
   * @public
   */
  accountAccessType: AccountAccessType | undefined;

  /**
   * <p>A unique, case-sensitive, user-provided identifier to ensure the idempotency of the
   *             request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of an IAM role that already exists to use with Organizations to access Amazon Web Services data sources and notification channels in other accounts
   *             in an organization.</p>
   * @public
   */
  organizationRoleName?: string | undefined;

  /**
   * <p>When creating a workspace through the Amazon Web Services API, CLI or Amazon Web Services CloudFormation, you must manage IAM roles and provision the
   *             permissions that the workspace needs to use Amazon Web Services data sources and
   *             notification channels.</p>
   *          <p>You must also specify a <code>workspaceRoleArn</code> for a role that you will
   *             manage for the workspace to use when accessing those datasources and notification
   *             channels.</p>
   *          <p>The ability for Amazon Managed Grafana to create and update IAM roles on
   *             behalf of the user is supported only in the Amazon Managed Grafana console, where this value
   *             may be set to <code>SERVICE_MANAGED</code>.</p>
   *          <note>
   *             <p>Use only the <code>CUSTOMER_MANAGED</code> permission type when creating a
   *                 workspace with the API, CLI or Amazon Web Services CloudFormation. </p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana
   *                 permissions and policies for Amazon Web Services data sources and notification
   *                 channels</a>.</p>
   * @public
   */
  permissionType: PermissionType | undefined;

  /**
   * <p>The name of the CloudFormation stack set to use to generate IAM
   *             roles to be used for this workspace.</p>
   * @public
   */
  stackSetName?: string | undefined;

  /**
   * <p>This parameter is for internal use only, and should not be used.</p>
   * @public
   */
  workspaceDataSources?: DataSourceType[] | undefined;

  /**
   * <p>A description for the workspace. This is used only to help you identify this
   *             workspace.</p>
   *          <p>Pattern: <code>^[\\p\{L\}\\p\{Z\}\\p\{N\}\\p\{P\}]\{0,2048\}$</code>
   *          </p>
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * <p>The name for the workspace. It does not have to be unique.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>Specify the Amazon Web Services notification channels that you plan to use in this
   *             workspace. Specifying these data sources here enables Amazon Managed Grafana to create
   *                 IAM roles and permissions that allow Amazon Managed Grafana to use these
   *             channels.</p>
   * @public
   */
  workspaceNotificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * <p>Specifies the organizational units that this workspace is allowed to use data sources
   *             from, if this workspace is in an account that is part of an organization.</p>
   * @public
   */
  workspaceOrganizationalUnits?: string[] | undefined;

  /**
   * <p>Specified the IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from, including both data
   *             sources and notification channels. You are responsible for managing the permissions
   *             for this role as new data sources or notification channels are added. </p>
   * @public
   */
  workspaceRoleArn?: string | undefined;

  /**
   * <p>Specifies whether this workspace uses SAML 2.0, IAM Identity Center, or both to
   *             authenticate users for using the Grafana console within a workspace. For more
   *             information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in
   *                     Amazon Managed Grafana</a>.</p>
   * @public
   */
  authenticationProviders: AuthenticationProviderTypes[] | undefined;

  /**
   * <p>The list of tags associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration settings for an Amazon VPC that contains data sources for
   *             your Grafana workspace to connect to.</p>
   *          <note>
   *             <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul)
   *                 Region (ap-northeast-2).</p>
   *          </note>
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>The configuration string for the workspace that you create. For more information about
   *             the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana
   *                 workspace</a>.</p>
   * @public
   */
  configuration?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>Configuration for network access to your workspace.</p>
   *          <p>When this is configured, only listed IP addresses and VPC endpoints will be able to
   *             access your workspace. Standard Grafana authentication and authorization will still be
   *             required.</p>
   *          <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will
   *             be allowed. Standard Grafana authentication and authorization will still be
   *             required.</p>
   * @public
   */
  networkAccessControl?: NetworkAccessConfiguration | undefined;

  /**
   * <p>Specifies the version of Grafana to support in the new workspace. If not specified,
   *             defaults to the latest version (for example, 10.4).</p>
   *          <p>To get a list of supported versions, use the <code>ListVersions</code>
   *             operation.</p>
   * @public
   */
  grafanaVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * <p>A structure containing data about the workspace that was created.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * <p>The ID of the workspace to delete.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * <p>A structure containing information about the workspace that was deleted.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * <p>The ID of the workspace to display information about.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * <p>A structure containing information about the workspace.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The maximum number of workspaces to include in the results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of workspaces to return. (You receive this token from a
   *             previous <code>ListWorkspaces</code> operation.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A structure that contains some information about one workspace in the account.</p>
 * @public
 */
export interface WorkspaceSummary {
  /**
   * <p>The date that the workspace was created.</p>
   * @public
   */
  created: Date | undefined;

  /**
   * <p>The customer-entered description of the workspace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The URL endpoint to use to access the Grafana console in the workspace.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The Grafana version that the workspace is running.</p>
   * @public
   */
  grafanaVersion: string | undefined;

  /**
   * <p>The unique ID of the workspace.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The most recent date that the workspace was modified.</p>
   * @public
   */
  modified: Date | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Web Services notification channels that Amazon Managed Grafana can automatically
   *             create IAM roles and permissions for, which allows Amazon Managed Grafana to
   *             use these channels.</p>
   * @public
   */
  notificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * <p>The current status of the workspace.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>A structure containing information about the authentication methods used in the
   *             workspace.</p>
   * @public
   */
  authentication: AuthenticationSummary | undefined;

  /**
   * <p>The list of tags associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether this workspace has a full Grafana Enterprise license.</p>
   *          <note>
   *             <p>Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</p>
   *          </note>
   * @public
   */
  licenseType?: LicenseType | undefined;

  /**
   * <p>The token that ties this workspace to a Grafana Labs account. For more information,
   *             see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html#AMG-workspace-register-enterprise">Link your account with Grafana Labs</a>.</p>
   * @public
   */
  grafanaToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>An array of structures that contain some information about the workspaces in the
   *             account.</p>
   * @public
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * <p>The token to use when requesting the next set of workspaces.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * <p>Specifies whether the workspace can access Amazon Web Services resources in this
   *                 Amazon Web Services account only, or whether it can also access Amazon Web Services
   *             resources in other accounts in the same organization. If you specify
   *                 <code>ORGANIZATION</code>, you must specify which organizational units the workspace
   *             can access in the <code>workspaceOrganizationalUnits</code> parameter.</p>
   * @public
   */
  accountAccessType?: AccountAccessType | undefined;

  /**
   * <p>The name of an IAM role that already exists to use to access resources
   *             through Organizations. This can only be used with a workspace that has the
   *             <code>permissionType</code> set to <code>CUSTOMER_MANAGED</code>.</p>
   * @public
   */
  organizationRoleName?: string | undefined;

  /**
   * <p>Use this parameter if you want to change a workspace from <code>SERVICE_MANAGED</code>
   *             to <code>CUSTOMER_MANAGED</code>. This allows you to manage the permissions that the
   *             workspace uses to access datasources and notification channels. If the workspace is
   *             in a member Amazon Web Services account of an organization, and that account is not
   *             a delegated administrator account, and you want the workspace to access data sources in
   *             other Amazon Web Services accounts in the organization, you must choose
   *             <code>CUSTOMER_MANAGED</code>.</p>
   *          <p>If you specify this as <code>CUSTOMER_MANAGED</code>, you must also specify a
   *             <code>workspaceRoleArn</code> that the workspace will use for accessing Amazon Web Services
   *             resources.</p>
   *          <p>For more information on the role and permissions needed, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources
   *             and notification channels</a>
   *          </p>
   *          <note>
   *             <p>Do not use this to convert a <code>CUSTOMER_MANAGED</code> workspace to
   *                 <code>SERVICE_MANAGED</code>. Do not include this
   *                 parameter if you want to leave the workspace as <code>SERVICE_MANAGED</code>.</p>
   *             <p>You can convert a <code>CUSTOMER_MANAGED</code> workspace to
   *                 <code>SERVICE_MANAGED</code> using the Amazon Managed Grafana console. For more
   *                 information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html">Managing permissions for data sources and notification channels</a>.</p>
   *          </note>
   * @public
   */
  permissionType?: PermissionType | undefined;

  /**
   * <p>The name of the CloudFormation stack set to use to generate IAM
   *             roles to be used for this workspace.</p>
   * @public
   */
  stackSetName?: string | undefined;

  /**
   * <p>This parameter is for internal use only, and should not be used.</p>
   * @public
   */
  workspaceDataSources?: DataSourceType[] | undefined;

  /**
   * <p>A description for the workspace. This is used only to help you identify this
   *             workspace.</p>
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * <p>The ID of the workspace to update.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A new name for the workspace to update.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>Specify the Amazon Web Services notification channels that you plan to use in this
   *             workspace. Specifying these data sources here enables Amazon Managed Grafana to create
   *                 IAM roles and permissions that allow Amazon Managed Grafana to use these
   *             channels.</p>
   * @public
   */
  workspaceNotificationDestinations?: NotificationDestinationType[] | undefined;

  /**
   * <p>Specifies the organizational units that this workspace is allowed to use data sources
   *             from, if this workspace is in an account that is part of an organization.</p>
   * @public
   */
  workspaceOrganizationalUnits?: string[] | undefined;

  /**
   * <p>Specifies an IAM role that grants permissions to Amazon Web Services
   *             resources that the workspace accesses, such as data sources and notification channels.
   *             If this workspace has <code>permissionType</code>
   *             <code>CUSTOMER_MANAGED</code>,
   *             then this role is required.</p>
   * @public
   */
  workspaceRoleArn?: string | undefined;

  /**
   * <p>The configuration settings for an Amazon VPC that contains data sources for
   *             your Grafana workspace to connect to.</p>
   * @public
   */
  vpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>Whether to remove the VPC configuration from the workspace.</p>
   *          <p>Setting this to <code>true</code> and providing a <code>vpcConfiguration</code> to set
   *             will return an error.</p>
   * @public
   */
  removeVpcConfiguration?: boolean | undefined;

  /**
   * <p>The configuration settings for network access to your workspace.</p>
   *          <p>When this is configured, only listed IP addresses and VPC endpoints will be able to
   *             access your workspace. Standard Grafana authentication and authorization will still be
   *             required.</p>
   *          <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will
   *             be allowed. Standard Grafana authentication and authorization will still be
   *             required.</p>
   * @public
   */
  networkAccessControl?: NetworkAccessConfiguration | undefined;

  /**
   * <p>Whether to remove the network access configuration from the workspace.</p>
   *          <p>Setting this to <code>true</code> and providing a <code>networkAccessControl</code> to
   *             set will return an error.</p>
   *          <p>If you remove this configuration by setting this to <code>true</code>, then all IP
   *             addresses and VPC endpoints will be allowed. Standard Grafana authentication and
   *             authorization will still be required.</p>
   * @public
   */
  removeNetworkAccessConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * <p>A structure containing data about the workspace that was created.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}
