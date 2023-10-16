// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@smithy/smithy-client";

import { GrafanaServiceException as __BaseException } from "./GrafanaServiceException";

/**
 * @public
 * <p>You do not have sufficient permissions to perform this action. </p>
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
 * @public
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that is associated with the error.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
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
   * @public
   * <p>Specifies the name of the key. Keynames must be unique to the workspace.</p>
   */
  keyName: string | undefined;

  /**
   * @public
   * <p>Specifies the permission level of the key.</p>
   *          <p> Valid values: <code>VIEWER</code>|<code>EDITOR</code>|<code>ADMIN</code>
   *          </p>
   */
  keyRole: string | undefined;

  /**
   * @public
   * <p>Specifies the time in seconds until the key expires. Keys can be valid for up to 30
   *             days.</p>
   */
  secondsToLive: number | undefined;

  /**
   * @public
   * <p>The ID of the workspace to create an API key.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceApiKeyResponse {
  /**
   * @public
   * <p>The name of the key that was created.</p>
   */
  keyName: string | undefined;

  /**
   * @public
   * <p>The key token. Use this value as a bearer token to authenticate HTTP requests to the
   *             workspace.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The ID of the workspace that the key is valid for.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>Unexpected error while processing the request. Retry the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>How long to wait before you retry this operation.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>The request references a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that is associated with the error.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
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
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that is associated with the error.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that is associated with the error.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The value of a parameter in the request caused an error.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
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
 * @public
 * <p>The request was denied because of request throttling. Retry the request.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>The ID of the service that is associated with the error.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The ID of the service quota that was exceeded.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The value of a parameter in the request caused an error.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>A structure that contains information about a request parameter that caused an
 *             error.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field that caused the validation error.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A message describing why this field couldn't be validated.</p>
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
 * @public
 * <p>The value of a parameter in the request caused an error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason that the operation failed.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>A list of fields that might be associated with the error.</p>
   */
  fieldList?: ValidationExceptionField[];

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
   * @public
   * <p>The name of the API key to delete.</p>
   */
  keyName: string | undefined;

  /**
   * @public
   * <p>The ID of the workspace to delete.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceApiKeyResponse {
  /**
   * @public
   * <p>The name of the key that was deleted.</p>
   */
  keyName: string | undefined;

  /**
   * @public
   * <p>The ID of the workspace where the key was deleted.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>A structure that defines which attributes in the IdP assertion are to be used to
 *             define information about the users authenticated by the IdP to use the workspace.</p>
 */
export interface AssertionAttributes {
  /**
   * @public
   * <p>The name of the attribute within the SAML assertion to use as the user full "friendly"
   *             names for SAML users.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The name of the attribute within the SAML assertion to use as the login names for SAML
   *             users.</p>
   */
  login?: string;

  /**
   * @public
   * <p>The name of the attribute within the SAML assertion to use as the email names for SAML
   *             users.</p>
   */
  email?: string;

  /**
   * @public
   * <p>The name of the attribute within the SAML assertion to use as the user full "friendly"
   *             names for user groups.</p>
   */
  groups?: string;

  /**
   * @public
   * <p>The name of the attribute within the SAML assertion to use as the user roles.</p>
   */
  role?: string;

  /**
   * @public
   * <p>The name of the attribute within the SAML assertion to use as the user full "friendly"
   *             names for the users' organizations.</p>
   */
  org?: string;
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
   * @public
   * <p>The ID of the workspace to associate the license with.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The type of license to associate with the workspace.</p>
   */
  licenseType: LicenseType | undefined;
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
 * @public
 * <p>A structure that describes whether the workspace uses SAML, IAM Identity Center, or
 *             both methods for user authentication, and whether that authentication is fully
 *             configured.</p>
 */
export interface AuthenticationSummary {
  /**
   * @public
   * <p>Specifies whether the workspace uses SAML, IAM Identity Center, or both methods for
   *             user authentication.</p>
   */
  providers: AuthenticationProviderTypes[] | undefined;

  /**
   * @public
   * <p>Specifies whether the workplace's user authentication method is fully
   *             configured.</p>
   */
  samlConfigurationStatus?: SamlConfigurationStatus;
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
 * @public
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
 */
export interface NetworkAccessConfiguration {
  /**
   * @public
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
   */
  prefixListIds: string[] | undefined;

  /**
   * @public
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
 * @public
 * <p>The configuration settings for an Amazon VPC that contains data sources for
 *             your Grafana workspace to connect to.</p>
 *          <note>
 *             <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of
 *                 the same VPC.</p>
 *             <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul)
 *                 Region (ap-northeast-2).</p>
 *          </note>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>The list of Amazon EC2 security group IDs attached to the Amazon VPC
   *             for your Grafana workspace to connect. Duplicates not allowed.</p>
   */
  securityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The list of Amazon EC2 subnet IDs created in the Amazon VPC for your
   *             Grafana workspace to connect. Duplicates not allowed.</p>
   */
  subnetIds: string[] | undefined;
}

/**
 * @public
 * <p>A structure containing information about an Amazon Managed Grafana workspace in your
 *             account.</p>
 */
export interface WorkspaceDescription {
  /**
   * @public
   * <p>Specifies whether the workspace can access Amazon Web Services resources in this
   *                 Amazon Web Services account only, or whether it can also access Amazon Web Services
   *             resources in other accounts in the same organization. If this is
   *                 <code>ORGANIZATION</code>, the <code>workspaceOrganizationalUnits</code> parameter
   *             specifies which organizational units the workspace can access.</p>
   */
  accountAccessType?: AccountAccessType;

  /**
   * @public
   * <p>The date that the workspace was created.</p>
   */
  created: Date | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services data sources that have been configured to have
   *                 IAM roles and permissions created to allow Amazon Managed Grafana to read
   *             data from these sources.</p>
   *          <p>This list is only used when the workspace was created through the Amazon Web Services
   *             console, and the <code>permissionType</code> is <code>SERVICE_MANAGED</code>.</p>
   */
  dataSources: DataSourceType[] | undefined;

  /**
   * @public
   * <p>The user-defined description of the workspace.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The URL that users can use to access the Grafana console in the workspace.</p>
   */
  endpoint: string | undefined;

  /**
   * @public
   * <p>The version of Grafana supported in this workspace.</p>
   */
  grafanaVersion: string | undefined;

  /**
   * @public
   * <p>The unique ID of this workspace.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The most recent date that the workspace was modified.</p>
   */
  modified: Date | undefined;

  /**
   * @public
   * <p>The name of the workspace.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The name of the IAM role that is used to access resources through
   *                 Organizations.</p>
   */
  organizationRoleName?: string;

  /**
   * @public
   * <p>The Amazon Web Services notification channels that Amazon Managed Grafana can automatically
   *             create IAM roles and permissions for, to allow Amazon Managed Grafana to use
   *             these channels.</p>
   */
  notificationDestinations?: NotificationDestinationType[];

  /**
   * @public
   * <p>Specifies the organizational units that this workspace is allowed to use data sources
   *             from, if this workspace is in an account that is part of an organization.</p>
   */
  organizationalUnits?: string[];

  /**
   * @public
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
   */
  permissionType?: PermissionType;

  /**
   * @public
   * <p>The name of the CloudFormation stack set that is used to generate IAM roles to be used for this workspace.</p>
   */
  stackSetName?: string;

  /**
   * @public
   * <p>The current status of the workspace.</p>
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * <p>The IAM role that grants permissions to the Amazon Web Services
   *             resources that the workspace will view data from. This role must already exist.</p>
   */
  workspaceRoleArn?: string;

  /**
   * @public
   * <p>Specifies whether this workspace has a full Grafana Enterprise license or a free trial
   *             license.</p>
   */
  licenseType?: LicenseType;

  /**
   * @public
   * <p>Specifies whether this workspace has already fully used its free trial for Grafana
   *             Enterprise.</p>
   */
  freeTrialConsumed?: boolean;

  /**
   * @public
   * <p>If this workspace has a full Grafana Enterprise license, this specifies when the
   *             license ends and will need to be renewed.</p>
   */
  licenseExpiration?: Date;

  /**
   * @public
   * <p>If this workspace is currently in the free trial period for Grafana Enterprise, this
   *             value specifies when that free trial ends.</p>
   */
  freeTrialExpiration?: Date;

  /**
   * @public
   * <p>A structure that describes whether the workspace uses SAML, IAM Identity Center, or
   *             both methods for user authentication.</p>
   */
  authentication: AuthenticationSummary | undefined;

  /**
   * @public
   * <p>The list of tags associated with the workspace.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration for connecting to data sources in a private VPC (Amazon Virtual Private Cloud).</p>
   */
  vpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>The configuration settings for network access to your workspace.</p>
   */
  networkAccessControl?: NetworkAccessConfiguration;
}

/**
 * @public
 */
export interface AssociateLicenseResponse {
  /**
   * @public
   * <p>A structure containing data about the workspace.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAuthenticationRequest {
  /**
   * @public
   * <p>The ID of the workspace to return authentication information about.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>A structure containing information about how this workspace works with IAM Identity Center. </p>
 */
export interface AwsSsoAuthentication {
  /**
   * @public
   * <p>The ID of the IAM Identity Center-managed application that is created by Amazon Managed Grafana.</p>
   */
  ssoClientId?: string;
}

/**
 * @public
 * <p>A structure containing the identity provider (IdP) metadata used to integrate the
 *             identity provider with this workspace. You can specify the metadata either by providing
 *             a URL to its location in the <code>url</code> parameter, or by specifying the full
 *             metadata in XML format in the <code>xml</code> parameter. Specifying both will cause an
 *             error.</p>
 */
export type IdpMetadata = IdpMetadata.UrlMember | IdpMetadata.XmlMember | IdpMetadata.$UnknownMember;

/**
 * @public
 */
export namespace IdpMetadata {
  /**
   * @public
   * <p>The URL of the location containing the IdP metadata.</p>
   */
  export interface UrlMember {
    url: string;
    xml?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The full IdP metadata, in XML format.</p>
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
 * @public
 * <p>This structure defines which groups defined in the SAML assertion attribute are to be
 *             mapped to the Grafana <code>Admin</code> and <code>Editor</code> roles in the workspace.
 *             SAML authenticated users not part of <code>Admin</code> or <code>Editor</code> role
 *             groups have <code>Viewer</code> permission over the workspace.</p>
 */
export interface RoleValues {
  /**
   * @public
   * <p>A list of groups from the SAML assertion attribute to grant the Grafana
   *                 <code>Editor</code> role to.</p>
   */
  editor?: string[];

  /**
   * @public
   * <p>A list of groups from the SAML assertion attribute to grant the Grafana
   *                 <code>Admin</code> role to.</p>
   */
  admin?: string[];
}

/**
 * @public
 * <p>A structure containing information about how this workspace works with SAML. </p>
 */
export interface SamlConfiguration {
  /**
   * @public
   * <p>A structure containing the identity provider (IdP) metadata used to integrate the
   *             identity provider with this workspace.</p>
   */
  idpMetadata: IdpMetadata | undefined;

  /**
   * @public
   * <p>A structure that defines which attributes in the SAML assertion are to be used to
   *             define information about the users authenticated by that IdP to use the
   *             workspace.</p>
   */
  assertionAttributes?: AssertionAttributes;

  /**
   * @public
   * <p>A structure containing arrays that map group names in the SAML assertion to the
   *             Grafana <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
   */
  roleValues?: RoleValues;

  /**
   * @public
   * <p>Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace. If this is empty, all organizations in the assertion attribute
   *             have access.</p>
   */
  allowedOrganizations?: string[];

  /**
   * @public
   * <p>How long a sign-on session by a SAML user is valid, before the user has to sign on
   *             again.</p>
   */
  loginValidityDuration?: number;
}

/**
 * @public
 * <p>A structure containing information about how this workspace works with SAML. </p>
 */
export interface SamlAuthentication {
  /**
   * @public
   * <p>Specifies whether the workspace's SAML configuration is complete.</p>
   */
  status: SamlConfigurationStatus | undefined;

  /**
   * @public
   * <p>A structure containing details about how this workspace works with SAML. </p>
   */
  configuration?: SamlConfiguration;
}

/**
 * @public
 * <p>A structure containing information about the user authentication methods used by the
 *             workspace.</p>
 */
export interface AuthenticationDescription {
  /**
   * @public
   * <p>Specifies whether this workspace uses IAM Identity Center, SAML, or both methods to
   *             authenticate users to use the Grafana console in the Amazon Managed Grafana
   *             workspace.</p>
   */
  providers: AuthenticationProviderTypes[] | undefined;

  /**
   * @public
   * <p>A structure containing information about how this workspace works with SAML, including
   *             what attributes within the assertion are to be mapped to user information in the
   *             workspace. </p>
   */
  saml?: SamlAuthentication;

  /**
   * @public
   * <p>A structure containing information about how this workspace works with IAM Identity Center. </p>
   */
  awsSso?: AwsSsoAuthentication;
}

/**
 * @public
 */
export interface DescribeWorkspaceAuthenticationResponse {
  /**
   * @public
   * <p>A structure containing information about the authentication methods used in the
   *             workspace.</p>
   */
  authentication: AuthenticationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceAuthenticationRequest {
  /**
   * @public
   * <p>The ID of the workspace to update the authentication for.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>Specifies whether this workspace uses SAML 2.0, IAM Identity Center (successor to Single Sign-On), or both to
   *             authenticate users for using the Grafana console within a workspace. For more
   *             information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in
   *                     Amazon Managed Grafana</a>.</p>
   */
  authenticationProviders: AuthenticationProviderTypes[] | undefined;

  /**
   * @public
   * <p>If the workspace uses SAML, use this structure to map SAML assertion attributes to
   *             workspace user information and define which groups in the assertion attribute are to
   *             have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p>
   */
  samlConfiguration?: SamlConfiguration;
}

/**
 * @public
 */
export interface UpdateWorkspaceAuthenticationResponse {
  /**
   * @public
   * <p>A structure that describes the user authentication for this workspace after the update
   *             is made.</p>
   */
  authentication: AuthenticationDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationRequest {
  /**
   * @public
   * <p>The ID of the workspace to get configuration information for.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationResponse {
  /**
   * @public
   * <p>The configuration string for the workspace that you requested. For more information
   *             about the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana
   *                 workspace</a>.</p>
   */
  configuration: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>The supported Grafana version for the workspace.</p>
   */
  grafanaVersion?: string;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationRequest {
  /**
   * @public
   * <p>The new configuration string for the workspace. For more information about the format
   *             and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana
   *                 workspace</a>.</p>
   */
  configuration: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>The ID of the workspace to update.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>Specifies the version of Grafana to support in the new workspace.</p>
   *          <p>Can only be used to upgrade (for example, from 8.4 to 9.4), not
   *             downgrade (for example, from 9.4 to 8.4).</p>
   *          <p>To know what versions are available to upgrade to for a specific workspace, see
   *             the <code>ListVersions</code> operation.</p>
   */
  grafanaVersion?: string;
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
   * @public
   * <p>The ID of the workspace to remove the Grafana Enterprise license from.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The type of license to remove from the workspace.</p>
   */
  licenseType: LicenseType | undefined;
}

/**
 * @public
 */
export interface DisassociateLicenseResponse {
  /**
   * @public
   * <p>A structure containing information about the workspace.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource the list of tags are associated with.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags that are associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListVersionsRequest {
  /**
   * @public
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You receive this token from
   *             a previous <code>ListVersions</code> operation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The ID of the workspace to list the available upgrade versions. If not included,
   *             lists all versions of Grafana that are supported for
   *             <code>CreateWorkspace</code>.</p>
   */
  workspaceId?: string;
}

/**
 * @public
 */
export interface ListVersionsResponse {
  /**
   * @public
   * <p>The token to use in a subsequent <code>ListVersions</code> operation to return the
   *             next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The Grafana versions available to create. If a workspace ID is included in the
   *             request, the Grafana versions to which this workspace can be upgraded.</p>
   */
  grafanaVersions?: string[];
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
   * @public
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to use when requesting the next set of results. You received this token from
   *             a previous <code>ListPermissions</code> operation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>(Optional) If you specify <code>SSO_USER</code>, then only the permissions of IAM Identity Center users are returned. If you specify <code>SSO_GROUP</code>, only the
   *             permissions of IAM Identity Center groups are returned.</p>
   */
  userType?: UserType;

  /**
   * @public
   * <p>(Optional) Limits the results to only the user that matches this ID.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>(Optional) Limits the results to only the group that matches this ID.</p>
   */
  groupId?: string;

  /**
   * @public
   * <p>The ID of the workspace to list permissions for. This parameter is required.</p>
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
 * @public
 * <p>A structure that specifies one user or group in the workspace.</p>
 */
export interface User {
  /**
   * @public
   * <p>The ID of the user or group.</p>
   *          <p>Pattern:
   *                 <code>^([0-9a-fA-F]\{10\}-|)[A-Fa-f0-9]\{8\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{4\}-[A-Fa-f0-9]\{12\}$</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is a single user or a group.</p>
   */
  type: UserType | undefined;
}

/**
 * @public
 * <p>A structure containing the identity of one user or group and the <code>Admin</code>,
 *                 <code>Editor</code>, or <code>Viewer</code> role that they have.</p>
 */
export interface PermissionEntry {
  /**
   * @public
   * <p>A structure with the ID of the user or group with this role.</p>
   */
  user: User | undefined;

  /**
   * @public
   * <p>Specifies whether the user or group has the <code>Admin</code>, <code>Editor</code>,
   *             or <code>Viewer</code> role.</p>
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * @public
   * <p>The token to use in a subsequent <code>ListPermissions</code> operation to return the
   *             next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The permissions returned by the operation.</p>
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
 * @public
 * <p>Contains the instructions for one Grafana role permission update in a <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.</p>
 */
export interface UpdateInstruction {
  /**
   * @public
   * <p>Specifies whether this update is to add or revoke role permissions.</p>
   */
  action: UpdateAction | undefined;

  /**
   * @public
   * <p>The role to add or revoke for the user or the group specified in
   *             <code>users</code>.</p>
   */
  role: Role | undefined;

  /**
   * @public
   * <p>A structure that specifies the user or group to add or revoke the role for.</p>
   */
  users: User[] | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionsRequest {
  /**
   * @public
   * <p>An array of structures that contain the permission updates to make.</p>
   */
  updateInstructionBatch: UpdateInstruction[] | undefined;

  /**
   * @public
   * <p>The ID of the workspace to update.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>A structure containing information about one error encountered while performing an
 *                 <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.</p>
 */
export interface UpdateError {
  /**
   * @public
   * <p>The error code.</p>
   */
  code: number | undefined;

  /**
   * @public
   * <p>The message for this error.</p>
   */
  message: string | undefined;

  /**
   * @public
   * <p>Specifies which permission update caused the error.</p>
   */
  causedBy: UpdateInstruction | undefined;
}

/**
 * @public
 */
export interface UpdatePermissionsResponse {
  /**
   * @public
   * <p>An array of structures that contain the errors from the operation, if any.</p>
   */
  errors: UpdateError[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource the tag is associated with.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys and values to associate with the resource. You can associate tag
   *             keys only, tags (key and values) only or a combination of tag keys and tags.</p>
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
   * @public
   * <p>The ARN of the resource the tag association is removed from. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The key values of the tag to be removed from the resource.</p>
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
   * @public
   * <p>Specifies whether the workspace can access Amazon Web Services resources in this
   *                 Amazon Web Services account only, or whether it can also access Amazon Web Services
   *             resources in other accounts in the same organization. If you specify
   *                 <code>ORGANIZATION</code>, you must specify which organizational units the workspace
   *             can access in the <code>workspaceOrganizationalUnits</code> parameter.</p>
   */
  accountAccessType: AccountAccessType | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive, user-provided identifier to ensure the idempotency of the
   *             request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of an IAM role that already exists to use with Organizations to access Amazon Web Services data sources and notification channels in other accounts
   *             in an organization.</p>
   */
  organizationRoleName?: string;

  /**
   * @public
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
   */
  permissionType: PermissionType | undefined;

  /**
   * @public
   * <p>The name of the CloudFormation stack set to use to generate IAM
   *             roles to be used for this workspace.</p>
   */
  stackSetName?: string;

  /**
   * @public
   * <p>This parameter is for internal use only, and should not be used.</p>
   */
  workspaceDataSources?: DataSourceType[];

  /**
   * @public
   * <p>A description for the workspace. This is used only to help you identify this
   *             workspace.</p>
   *          <p>Pattern: <code>^[\\p\{L\}\\p\{Z\}\\p\{N\}\\p\{P\}]\{0,2048\}$</code>
   *          </p>
   */
  workspaceDescription?: string;

  /**
   * @public
   * <p>The name for the workspace. It does not have to be unique.</p>
   */
  workspaceName?: string;

  /**
   * @public
   * <p>Specify the Amazon Web Services notification channels that you plan to use in this
   *             workspace. Specifying these data sources here enables Amazon Managed Grafana to create
   *                 IAM roles and permissions that allow Amazon Managed Grafana to use these
   *             channels.</p>
   */
  workspaceNotificationDestinations?: NotificationDestinationType[];

  /**
   * @public
   * <p>Specifies the organizational units that this workspace is allowed to use data sources
   *             from, if this workspace is in an account that is part of an organization.</p>
   */
  workspaceOrganizationalUnits?: string[];

  /**
   * @public
   * <p>Specified the IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from, including both data
   *             sources and notification channels. You are responsible for managing the permissions
   *             for this role as new data sources or notification channels are added. </p>
   */
  workspaceRoleArn?: string;

  /**
   * @public
   * <p>Specifies whether this workspace uses SAML 2.0, IAM Identity Center (successor to Single Sign-On), or both to
   *             authenticate users for using the Grafana console within a workspace. For more
   *             information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in
   *                     Amazon Managed Grafana</a>.</p>
   */
  authenticationProviders: AuthenticationProviderTypes[] | undefined;

  /**
   * @public
   * <p>The list of tags associated with the workspace.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration settings for an Amazon VPC that contains data sources for
   *             your Grafana workspace to connect to.</p>
   *          <note>
   *             <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul)
   *                 Region (ap-northeast-2).</p>
   *          </note>
   */
  vpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>The configuration string for the workspace that you create. For more information about
   *             the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana
   *                 workspace</a>.</p>
   */
  configuration?: __LazyJsonString | string;

  /**
   * @public
   * <p>Configuration for network access to your workspace.</p>
   *          <p>When this is configured, only listed IP addresses and VPC endpoints will be able to
   *             access your workspace. Standard Grafana authentication and authorization will still be
   *             required.</p>
   *          <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will
   *             be allowed. Standard Grafana authentication and authorization will still be
   *             required.</p>
   */
  networkAccessControl?: NetworkAccessConfiguration;

  /**
   * @public
   * <p>Specifies the version of Grafana to support in the new workspace.</p>
   *          <p>To get a list of supported version, use the <code>ListVersions</code>
   *             operation.</p>
   */
  grafanaVersion?: string;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * @public
   * <p>A structure containing data about the workspace that was created.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * @public
   * <p>The ID of the workspace to delete.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * @public
   * <p>A structure containing information about the workspace that was deleted.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * @public
   * <p>The ID of the workspace to display information about.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * @public
   * <p>A structure containing information about the workspace.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * @public
   * <p>The maximum number of workspaces to include in the results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of workspaces to return. (You receive this token from a
   *             previous <code>ListWorkspaces</code> operation.)</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A structure that contains some information about one workspace in the account.</p>
 */
export interface WorkspaceSummary {
  /**
   * @public
   * <p>The date that the workspace was created.</p>
   */
  created: Date | undefined;

  /**
   * @public
   * <p>The customer-entered description of the workspace.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The URL endpoint to use to access the Grafana console in the workspace.</p>
   */
  endpoint: string | undefined;

  /**
   * @public
   * <p>The Grafana version that the workspace is running.</p>
   */
  grafanaVersion: string | undefined;

  /**
   * @public
   * <p>The unique ID of the workspace.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The most recent date that the workspace was modified.</p>
   */
  modified: Date | undefined;

  /**
   * @public
   * <p>The name of the workspace.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Web Services notification channels that Amazon Managed Grafana can automatically
   *             create IAM roles and permissions for, which allows Amazon Managed Grafana to
   *             use these channels.</p>
   */
  notificationDestinations?: NotificationDestinationType[];

  /**
   * @public
   * <p>The current status of the workspace.</p>
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * <p>A structure containing information about the authentication methods used in the
   *             workspace.</p>
   */
  authentication: AuthenticationSummary | undefined;

  /**
   * @public
   * <p>The list of tags associated with the workspace.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * @public
   * <p>An array of structures that contain some information about the workspaces in the
   *             account.</p>
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * @public
   * <p>The token to use when requesting the next set of workspaces.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * @public
   * <p>Specifies whether the workspace can access Amazon Web Services resources in this
   *                 Amazon Web Services account only, or whether it can also access Amazon Web Services
   *             resources in other accounts in the same organization. If you specify
   *                 <code>ORGANIZATION</code>, you must specify which organizational units the workspace
   *             can access in the <code>workspaceOrganizationalUnits</code> parameter.</p>
   */
  accountAccessType?: AccountAccessType;

  /**
   * @public
   * <p>The name of an IAM role that already exists to use to access resources
   *             through Organizations. This can only be used with a workspace that has the
   *             <code>permissionType</code> set to <code>CUSTOMER_MANAGED</code>.</p>
   */
  organizationRoleName?: string;

  /**
   * @public
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
   */
  permissionType?: PermissionType;

  /**
   * @public
   * <p>The name of the CloudFormation stack set to use to generate IAM
   *             roles to be used for this workspace.</p>
   */
  stackSetName?: string;

  /**
   * @public
   * <p>This parameter is for internal use only, and should not be used.</p>
   */
  workspaceDataSources?: DataSourceType[];

  /**
   * @public
   * <p>A description for the workspace. This is used only to help you identify this
   *             workspace.</p>
   */
  workspaceDescription?: string;

  /**
   * @public
   * <p>The ID of the workspace to update.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>A new name for the workspace to update.</p>
   */
  workspaceName?: string;

  /**
   * @public
   * <p>Specify the Amazon Web Services notification channels that you plan to use in this
   *             workspace. Specifying these data sources here enables Amazon Managed Grafana to create
   *                 IAM roles and permissions that allow Amazon Managed Grafana to use these
   *             channels.</p>
   */
  workspaceNotificationDestinations?: NotificationDestinationType[];

  /**
   * @public
   * <p>Specifies the organizational units that this workspace is allowed to use data sources
   *             from, if this workspace is in an account that is part of an organization.</p>
   */
  workspaceOrganizationalUnits?: string[];

  /**
   * @public
   * <p>Specifies an IAM role that grants permissions to Amazon Web Services
   *             resources that the workspace accesses, such as data sources and notification channels.
   *             If this workspace has <code>permissionType</code>
   *             <code>CUSTOMER_MANAGED</code>,
   *             then this role is required.</p>
   */
  workspaceRoleArn?: string;

  /**
   * @public
   * <p>The configuration settings for an Amazon VPC that contains data sources for
   *             your Grafana workspace to connect to.</p>
   */
  vpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Whether to remove the VPC configuration from the workspace.</p>
   *          <p>Setting this to <code>true</code> and providing a <code>vpcConfiguration</code> to set
   *             will return an error.</p>
   */
  removeVpcConfiguration?: boolean;

  /**
   * @public
   * <p>The configuration settings for network access to your workspace.</p>
   *          <p>When this is configured, only listed IP addresses and VPC endpoints will be able to
   *             access your workspace. Standard Grafana authentication and authorization will still be
   *             required.</p>
   *          <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will
   *             be allowed. Standard Grafana authentication and authorization will still be
   *             required.</p>
   */
  networkAccessControl?: NetworkAccessConfiguration;

  /**
   * @public
   * <p>Whether to remove the network access configuration from the workspace.</p>
   *          <p>Setting this to <code>true</code> and providing a <code>networkAccessControl</code> to
   *             set will return an error.</p>
   *          <p>If you remove this configuration by setting this to <code>true</code>, then all IP
   *             addresses and VPC endpoints will be allowed. Standard Grafana authentication and
   *             authorization will still be required.</p>
   */
  removeNetworkAccessConfiguration?: boolean;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * @public
   * <p>A structure containing data about the workspace that was created.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @internal
 */
export const CreateWorkspaceApiKeyResponseFilterSensitiveLog = (obj: CreateWorkspaceApiKeyResponse): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WorkspaceDescriptionFilterSensitiveLog = (obj: WorkspaceDescription): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.organizationRoleName && { organizationRoleName: SENSITIVE_STRING }),
  ...(obj.organizationalUnits && { organizationalUnits: SENSITIVE_STRING }),
  ...(obj.workspaceRoleArn && { workspaceRoleArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociateLicenseResponseFilterSensitiveLog = (obj: AssociateLicenseResponse): any => ({
  ...obj,
  ...(obj.workspace && { workspace: WorkspaceDescriptionFilterSensitiveLog(obj.workspace) }),
});

/**
 * @internal
 */
export const RoleValuesFilterSensitiveLog = (obj: RoleValues): any => ({
  ...obj,
  ...(obj.editor && { editor: SENSITIVE_STRING }),
  ...(obj.admin && { admin: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SamlConfigurationFilterSensitiveLog = (obj: SamlConfiguration): any => ({
  ...obj,
  ...(obj.idpMetadata && { idpMetadata: obj.idpMetadata }),
  ...(obj.roleValues && { roleValues: RoleValuesFilterSensitiveLog(obj.roleValues) }),
});

/**
 * @internal
 */
export const SamlAuthenticationFilterSensitiveLog = (obj: SamlAuthentication): any => ({
  ...obj,
  ...(obj.configuration && { configuration: SamlConfigurationFilterSensitiveLog(obj.configuration) }),
});

/**
 * @internal
 */
export const AuthenticationDescriptionFilterSensitiveLog = (obj: AuthenticationDescription): any => ({
  ...obj,
  ...(obj.saml && { saml: SamlAuthenticationFilterSensitiveLog(obj.saml) }),
});

/**
 * @internal
 */
export const DescribeWorkspaceAuthenticationResponseFilterSensitiveLog = (
  obj: DescribeWorkspaceAuthenticationResponse
): any => ({
  ...obj,
  ...(obj.authentication && { authentication: AuthenticationDescriptionFilterSensitiveLog(obj.authentication) }),
});

/**
 * @internal
 */
export const UpdateWorkspaceAuthenticationRequestFilterSensitiveLog = (
  obj: UpdateWorkspaceAuthenticationRequest
): any => ({
  ...obj,
  ...(obj.samlConfiguration && { samlConfiguration: SamlConfigurationFilterSensitiveLog(obj.samlConfiguration) }),
});

/**
 * @internal
 */
export const UpdateWorkspaceAuthenticationResponseFilterSensitiveLog = (
  obj: UpdateWorkspaceAuthenticationResponse
): any => ({
  ...obj,
  ...(obj.authentication && { authentication: AuthenticationDescriptionFilterSensitiveLog(obj.authentication) }),
});

/**
 * @internal
 */
export const DisassociateLicenseResponseFilterSensitiveLog = (obj: DisassociateLicenseResponse): any => ({
  ...obj,
  ...(obj.workspace && { workspace: WorkspaceDescriptionFilterSensitiveLog(obj.workspace) }),
});

/**
 * @internal
 */
export const CreateWorkspaceRequestFilterSensitiveLog = (obj: CreateWorkspaceRequest): any => ({
  ...obj,
  ...(obj.organizationRoleName && { organizationRoleName: SENSITIVE_STRING }),
  ...(obj.workspaceDescription && { workspaceDescription: SENSITIVE_STRING }),
  ...(obj.workspaceName && { workspaceName: SENSITIVE_STRING }),
  ...(obj.workspaceOrganizationalUnits && { workspaceOrganizationalUnits: SENSITIVE_STRING }),
  ...(obj.workspaceRoleArn && { workspaceRoleArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateWorkspaceResponseFilterSensitiveLog = (obj: CreateWorkspaceResponse): any => ({
  ...obj,
  ...(obj.workspace && { workspace: WorkspaceDescriptionFilterSensitiveLog(obj.workspace) }),
});

/**
 * @internal
 */
export const DeleteWorkspaceResponseFilterSensitiveLog = (obj: DeleteWorkspaceResponse): any => ({
  ...obj,
  ...(obj.workspace && { workspace: WorkspaceDescriptionFilterSensitiveLog(obj.workspace) }),
});

/**
 * @internal
 */
export const DescribeWorkspaceResponseFilterSensitiveLog = (obj: DescribeWorkspaceResponse): any => ({
  ...obj,
  ...(obj.workspace && { workspace: WorkspaceDescriptionFilterSensitiveLog(obj.workspace) }),
});

/**
 * @internal
 */
export const WorkspaceSummaryFilterSensitiveLog = (obj: WorkspaceSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListWorkspacesResponseFilterSensitiveLog = (obj: ListWorkspacesResponse): any => ({
  ...obj,
  ...(obj.workspaces && { workspaces: obj.workspaces.map((item) => WorkspaceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateWorkspaceRequestFilterSensitiveLog = (obj: UpdateWorkspaceRequest): any => ({
  ...obj,
  ...(obj.organizationRoleName && { organizationRoleName: SENSITIVE_STRING }),
  ...(obj.workspaceDescription && { workspaceDescription: SENSITIVE_STRING }),
  ...(obj.workspaceName && { workspaceName: SENSITIVE_STRING }),
  ...(obj.workspaceOrganizationalUnits && { workspaceOrganizationalUnits: SENSITIVE_STRING }),
  ...(obj.workspaceRoleArn && { workspaceRoleArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateWorkspaceResponseFilterSensitiveLog = (obj: UpdateWorkspaceResponse): any => ({
  ...obj,
  ...(obj.workspace && { workspace: WorkspaceDescriptionFilterSensitiveLog(obj.workspace) }),
});
