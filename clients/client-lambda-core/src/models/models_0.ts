// smithy-typescript generated code
import type {
  CompatibilityPolicy,
  ComputeResourceType,
  IntegrationModel,
  NetworkConnectorLastUpdateStatus,
  NetworkConnectorLastUpdateStatusReasonCode,
  NetworkConnectorState,
  NetworkConnectorStateReasonCode,
  NetworkConnectorType,
  NetworkProtocol,
  RuntimeAliasState,
  RuntimeArchitecture,
  RuntimeReleaseState,
  RuntimeState,
  RuntimeVersionState,
} from "./enums";

/**
 * Defines the compatibility matrix for a runtime version, indicating supported integration models, architectures, and feature availability.
 * @public
 */
export interface Compatibility {
  /**
   * Supported integration models for the runtime version.
   * @public
   */
  IntegrationModels?: IntegrationModel[] | undefined;

  /**
   * Supported architectures for the runtime version.
   * @public
   */
  Architectures?: RuntimeArchitecture[] | undefined;

  /**
   * Whether the runtime version is compatible with managed instances.
   * @public
   */
  ManagedInstances?: CompatibilityPolicy | undefined;
}

/**
 * <p>Configuration for a VPC egress network connector. Specifies the VPC subnets, security groups, network protocol, and associated Lambda compute resource types.</p>
 * @public
 */
export interface NetworkConnectorVpcEgressConfiguration {
  /**
   * <p>The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs). Specify 1 to 16 subnets. All subnets must be in the same VPC.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The IDs of the VPC security groups to attach to the ENIs. All security groups must be in the same VPC as the subnets.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The network protocol for the connector. Specify <code>IPv4</code> for IPv4-only networking, or <code>DualStack</code> for both IPv4 and IPv6.</p>
   * @public
   */
  NetworkProtocol?: NetworkProtocol | undefined;

  /**
   * <p>The types of Lambda compute resources that can use this connector. Valid values are <code>MicroVm</code> and <code>WebFunction</code>. Specify exactly one value.</p>
   * @public
   */
  AssociatedComputeResourceTypes?: ComputeResourceType[] | undefined;
}

/**
 * <p>The network configuration for a network connector. Different connector types use different configuration shapes; specify the configuration that matches your connector type.</p>
 * @public
 */
export type NetworkConnectorConfiguration =
  | NetworkConnectorConfiguration.VpcEgressConfigurationMember
  | NetworkConnectorConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace NetworkConnectorConfiguration {
  /**
   * <p>Configuration for a VPC egress network connector. Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.</p>
   * @public
   */
  export interface VpcEgressConfigurationMember {
    VpcEgressConfiguration: NetworkConnectorVpcEgressConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VpcEgressConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VpcEgressConfiguration: (value: NetworkConnectorVpcEgressConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateNetworkConnectorRequest {
  /**
   * <p>A unique name for the network connector within your account and Region. You can use the name to identify the connector in subsequent API calls.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The network configuration for the connector. Specify a <code>VpcEgressConfiguration</code> to enable outbound traffic routing through your VPC.</p>
   * @public
   */
  Configuration: NetworkConnectorConfiguration | undefined;

  /**
   * <p>The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. This role must have permissions for <code>ec2:CreateNetworkInterface</code>, <code>ec2:DeleteNetworkInterface</code>, and related describe operations.</p>
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request with the same client token, the API returns the existing connector without creating a duplicate.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A map of key-value pairs to associate with the network connector for organization, cost allocation, or access control.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNetworkConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the network connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the network connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the network connector.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The qualified ARN of the connector version created by this request, including the immutable version suffix.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The version number assigned to the connector. A newly created connector starts at version 1.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The network configuration of the connector, including VPC subnets and security groups.</p>
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * <p>The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.</p>
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * <p>The current state of the network connector.</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;
}

/**
 * The runtime lifecycle for the runtime or alias. Optional. Used to schedule runtime deprecation. Omitting or providing an empty object removes the existing lifecycle.
 * @public
 */
export interface RuntimeReleaseLifecycle {
  /**
   * Optional, with no default applied. DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later one, or none. Reads report DEPRECATED once DeprecationDate is reached.
   * @public
   */
  ReleaseState?: RuntimeReleaseState | undefined;

  /**
   * The date (UTC) on which the runtime or alias becomes deprecated.
   * @public
   */
  DeprecationDate?: string | undefined;

  /**
   * The date (UTC) on which creating new functions that use this runtime or alias is blocked.
   * @public
   */
  FunctionCreateBlockDate?: string | undefined;

  /**
   * The date (UTC) on which updating existing functions that use this runtime or alias is blocked.
   * @public
   */
  FunctionUpdateBlockDate?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuntimeRequest {
  /**
   * The name of the runtime to create.
   * @public
   */
  Name: string | undefined;

  /**
   * A map of tag keys and values to associate with the runtime.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A description of the runtime.
   * @public
   */
  Description?: string | undefined;

  /**
   * The license information for the runtime.
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * The runtime lifecycle for the runtime (optional). Use this to schedule runtime deprecation.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;
}

/**
 * @public
 */
export interface CreateRuntimeResponse {
  /**
   * The Amazon Resource Name (ARN) of the runtime.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime.
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the runtime.
   * @public
   */
  Description?: string | undefined;

  /**
   * The license information for the runtime.
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * The runtime lifecycle for the runtime. Used to schedule runtime deprecation.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The date and time when the runtime was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface CreateRuntimeAliasRequest {
  /**
   * The name or ARN of the runtime to create an alias for.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime version the alias points to.
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * The name to assign to the new runtime alias.
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the runtime alias.
   * @public
   */
  Description?: string | undefined;

  /**
   * The runtime lifecycle for the alias. By default, this is inherited from the runtime lifecycle. Optionally, you can override the lifecycle information at the alias level, if required.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;
}

/**
 * @public
 */
export interface CreateRuntimeAliasResponse {
  /**
   * The name of the runtime alias.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime alias.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime version the alias points to.
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version the alias points to.
   * @public
   */
  RuntimeVersionArn: string | undefined;

  /**
   * The current state of the runtime alias.
   * @public
   */
  State: RuntimeAliasState | undefined;

  /**
   * A description of the runtime alias.
   * @public
   */
  Description?: string | undefined;

  /**
   * The runtime lifecycle for the alias. By default, this is inherited from the runtime lifecycle. Optionally, you can override the lifecycle information at the alias level, if required.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The date and time when the runtime alias was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime alias was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface CreateRuntimeVersionRequest {
  /**
   * The name or ARN of the runtime to create a version for.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The URI of the container image used to define the function execution environment for this runtime version.
   * @public
   */
  ImageUri: string | undefined;

  /**
   * The name to assign to the new runtime version.
   * @public
   */
  Name: string | undefined;

  /**
   * The release notes to associate with the runtime version.
   * @public
   */
  ReleaseNotes?: string | undefined;

  /**
   * When set to true, the request is validated without creating a new runtime version. Use this to check that the request would succeed. No runtime version is created and no changes are made.
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * Describes a single OCI platform (CPU architecture and operating system) available for a runtime version.
 * @public
 */
export interface Platform {
  /**
   * The CPU architecture of the platform, for example x86_64 or arm64.
   * @public
   */
  Architecture: string | undefined;

  /**
   * The operating system of the platform.
   * @public
   */
  Os: string | undefined;

  /**
   * The content digest of the platform-specific image.
   * @public
   */
  Digest: string | undefined;
}

/**
 * @public
 */
export interface CreateRuntimeVersionResponse {
  /**
   * The name of the runtime version.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version.
   * @public
   */
  Arn: string | undefined;

  /**
   * The resolved image URI of the runtime version.
   * @public
   */
  ResolvedUri: string | undefined;

  /**
   * The current state of the runtime version.
   * @public
   */
  State: RuntimeVersionState | undefined;

  /**
   * The release notes associated with the runtime version.
   * @public
   */
  ReleaseNotes?: string | undefined;

  /**
   * The platforms (architecture and OS combinations) available for the runtime version.
   * @public
   */
  Platforms?: Platform[] | undefined;

  /**
   * The compatibility matrix of the runtime version.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The date and time when the runtime version was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime version was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkConnectorRequest {
  /**
   * <p>The identifier of the network connector to delete. Provide an unqualified ARN (or an ID or name) to delete the entire connector and all of its versions, or a version-qualified ARN — one that includes the immutable version suffix — to delete a specific historical version. You can't delete the latest version with a version-qualified identifier; delete the connector instead.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the network connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the network connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the network connector.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The qualified ARN of the connector version affected by this request, including the immutable version suffix.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The version number of the connector version affected by this request.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The network configuration of the connector, including VPC subnets and security groups.</p>
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * <p>The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.</p>
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * <p>The current state of the network connector. The State field is typically <code>DELETING</code> after this call.</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;
}

/**
 * @public
 */
export interface DeleteRuntimeRequest {
  /**
   * The name or ARN of the runtime to delete.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * Optional. The waiting period, in days (7-30), before the runtime is permanently deleted.
   * @public
   */
  RecoveryWindowInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeleteRuntimeResponse {}

/**
 * @public
 */
export interface DeleteRuntimeAliasRequest {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime alias to delete.
   * @public
   */
  Name: string | undefined;

  /**
   * Optional. The waiting period, in days (7-30), before the runtime alias is permanently deleted.
   * @public
   */
  RecoveryWindowInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeleteRuntimeAliasResponse {}

/**
 * @public
 */
export interface DeleteRuntimeVersionRequest {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime version to delete.
   * @public
   */
  Name: string | undefined;

  /**
   * Optional. The waiting period, in days (7-30), before the runtime version is permanently deleted.
   * @public
   */
  RecoveryWindowInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeleteRuntimeVersionResponse {}

/**
 * @public
 */
export interface GetNetworkConnectorRequest {
  /**
   * <p>The identifier of the network connector to retrieve. You can specify the connector ID, name, or ARN. Provide an unqualified ARN (or an ID or name) to retrieve the connector's latest version, or a version-qualified ARN — one that includes the immutable version suffix — to retrieve a specific historical version.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the network connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the network connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the network connector.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The qualified ARN of the specific connector version returned by this request, including the immutable version suffix. This is populated only when you supply a version-qualified identifier. On a standard (unqualified) request, this field is not populated; the connector's latest active version is returned instead through the <code>LatestVersionArn</code> and <code>LatestVersion</code> fields described below.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The version number of the network connector. On a standard (unqualified) request, this is the connector's current version; each configuration update increments it. When you supply a version-qualified identifier, this is the specific version you requested.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The qualified ARN of the connector's latest active version, including the immutable version suffix. This field is returned only on a standard (unqualified) request; when you supply a version-qualified identifier it is not returned, and <code>VersionArn</code> is returned instead.</p>
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * <p>The version number of the connector's latest active version. Each configuration update creates a new immutable version; this attribute exposes the most recent one. This field is returned only on a standard (unqualified) request.</p>
   * @public
   */
  LatestVersion?: number | undefined;

  /**
   * <p>The network configuration of the connector, including VPC subnets and security groups.</p>
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * <p>The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.</p>
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * <p>The current state of the network connector.</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * <p>A human-readable explanation of the current state, populated when the state is <code>FAILED</code> or <code>DELETE_FAILED</code>.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>A machine-readable code indicating the reason for the current state. Use this for programmatic error handling.</p>
   * @public
   */
  StateReasonCode?: NetworkConnectorStateReasonCode | undefined;

  /**
   * <p>The status of the most recent update operation (<code>Successful</code>, <code>Failed</code>, or <code>InProgress</code>).</p>
   * @public
   */
  LastUpdateStatus?: NetworkConnectorLastUpdateStatus | undefined;

  /**
   * <p>A human-readable explanation of the last update status.</p>
   * @public
   */
  LastUpdateStatusReason?: string | undefined;

  /**
   * <p>A machine-readable code indicating the reason for the last update status. Use this for programmatic error handling.</p>
   * @public
   */
  LastUpdateStatusReasonCode?: NetworkConnectorLastUpdateStatusReasonCode | undefined;

  /**
   * <p>The date and time when the connector configuration was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface GetRuntimeRequest {
  /**
   * The name or ARN of the runtime to retrieve.
   * @public
   */
  RuntimeName: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeResponse {
  /**
   * The Amazon Resource Name (ARN) of the runtime.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime.
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the runtime.
   * @public
   */
  Description?: string | undefined;

  /**
   * The license information for the runtime.
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * The runtime lifecycle for the runtime. Used to schedule runtime deprecation.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The current state of the runtime.
   * @public
   */
  State?: RuntimeState | undefined;

  /**
   * Present only when State is PENDING_DELETION. The date and time at which the runtime will be permanently deleted.
   * @public
   */
  PendingDeletionAt?: string | undefined;

  /**
   * The date and time when the runtime was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime was last modified.
   * @public
   */
  LastModified: string | undefined;

  /**
   * The unique identifier of the runtime.
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeAliasRequest {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime alias to retrieve.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeAliasResponse {
  /**
   * The name of the runtime alias.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime alias.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime version the alias points to.
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version the alias points to.
   * @public
   */
  RuntimeVersionArn: string | undefined;

  /**
   * The current state of the runtime alias.
   * @public
   */
  State: RuntimeAliasState | undefined;

  /**
   * Present only when State is PENDING_DELETION. The date and time at which the runtime alias will be permanently deleted.
   * @public
   */
  PendingDeletionAt?: string | undefined;

  /**
   * A description of the runtime alias.
   * @public
   */
  Description?: string | undefined;

  /**
   * The compatibility matrix of the runtime version the alias points to.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The runtime lifecycle for the alias. By default, this is inherited from the runtime lifecycle. Optionally, you can override the lifecycle information at the alias level, if required.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The date and time when the runtime alias was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime alias was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeVersionRequest {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime version to retrieve.
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeVersionResponse {
  /**
   * The name of the runtime version.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version.
   * @public
   */
  Arn: string | undefined;

  /**
   * The resolved image URI of the runtime version.
   * @public
   */
  ResolvedUri: string | undefined;

  /**
   * The current state of the runtime version.
   * @public
   */
  State: RuntimeVersionState | undefined;

  /**
   * Present only when State is PENDING_DELETION. The date and time at which the runtime version will be permanently deleted.
   * @public
   */
  PendingDeletionAt?: string | undefined;

  /**
   * The release notes associated with the runtime version.
   * @public
   */
  ReleaseNotes?: string | undefined;

  /**
   * The platforms (architecture and OS combinations) available for the runtime version.
   * @public
   */
  Platforms?: Platform[] | undefined;

  /**
   * The compatibility matrix of the runtime version.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The date and time when the runtime version was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime version was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListRuntimesRequest {
  /**
   * The pagination token from a previous response. Use it to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of runtimes to return per page. Valid range: 1 to 100.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about a runtime returned by ListRuntimes.
 * @public
 */
export interface RuntimeInfo {
  /**
   * The Amazon Resource Name (ARN) of the runtime.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime.
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the runtime.
   * @public
   */
  Description?: string | undefined;

  /**
   * The license information for the runtime.
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * The runtime lifecycle for the runtime. Used to schedule runtime deprecation.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The current state of the runtime.
   * @public
   */
  State?: RuntimeState | undefined;

  /**
   * Present only when State is PENDING_DELETION. The date and time at which the runtime will be permanently deleted.
   * @public
   */
  PendingDeletionAt?: string | undefined;

  /**
   * The date and time when the runtime was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListRuntimesResponse {
  /**
   * The pagination token to include in a subsequent request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of runtimes for the current page of results.
   * @public
   */
  Items: RuntimeInfo[] | undefined;
}

/**
 * @public
 */
export interface RestoreRuntimeRequest {
  /**
   * The name or ARN of the runtime to restore. When RuntimeVersion or RuntimeAlias is specified, the runtime that owns the runtime version or runtime alias to restore.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * Optional. Restores the named RuntimeVersion under RuntimeName. Mutually exclusive with RuntimeAlias; supplying both is rejected with InvalidParameterValueException.
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * Optional. Restores the named RuntimeAlias under RuntimeName. Mutually exclusive with RuntimeVersion; supplying both is rejected with InvalidParameterValueException.
   * @public
   */
  RuntimeAlias?: string | undefined;
}

/**
 * @public
 */
export interface RestoreRuntimeResponse {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * Echoed back only when the request supplied a RuntimeVersion qualifier.
   * @public
   */
  RuntimeVersion?: string | undefined;

  /**
   * Echoed back only when the request supplied a RuntimeAlias qualifier.
   * @public
   */
  RuntimeAlias?: string | undefined;

  /**
   * The fully qualified ARN of the resource that was restored (runtime, version, or alias).
   * @public
   */
  Arn: string | undefined;

  /**
   * The state of the restored resource, ACTIVE on success.
   * @public
   */
  State: RuntimeState | undefined;

  /**
   * The date and time when the restored resource was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListRuntimeAliasesRequest {
  /**
   * The name or ARN of the runtime whose aliases to list.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The pagination token from a previous response. Use it to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of runtime aliases to return per page. Valid range: 1 to 100.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about a runtime alias returned by ListRuntimeAliases.
 * @public
 */
export interface RuntimeAliasInfo {
  /**
   * The name of the runtime alias.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime alias.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime version the alias points to.
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version the alias points to.
   * @public
   */
  RuntimeVersionArn: string | undefined;

  /**
   * The current state of the runtime alias.
   * @public
   */
  State: RuntimeAliasState | undefined;

  /**
   * Present only when State is PENDING_DELETION. The date and time at which the runtime alias will be permanently deleted.
   * @public
   */
  PendingDeletionAt?: string | undefined;

  /**
   * A description of the runtime alias.
   * @public
   */
  Description?: string | undefined;

  /**
   * The compatibility matrix of the runtime version the alias points to.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The lifecycle for the alias. By default, this is inherited from the runtime lifecycle. Optionally, you can override the lifecycle information at the alias level, if required.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The date and time when the runtime alias was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime alias was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListRuntimeAliasesResponse {
  /**
   * The list of runtime aliases for the current page of results.
   * @public
   */
  Items: RuntimeAliasInfo[] | undefined;

  /**
   * The pagination token to include in a subsequent request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeAliasRequest {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime alias to update.
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the runtime version the alias should point to.
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * A description of the runtime alias.
   * @public
   */
  Description?: string | undefined;

  /**
   * The lifecycle for the alias. By default, this is inherited from the runtime lifecycle. Optionally, you can override the lifecycle information at the alias level, if required. Omitting or providing an empty object removes the existing lifecycle override.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeAliasResponse {
  /**
   * The name of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime alias.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime alias.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime version the alias points to.
   * @public
   */
  RuntimeVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version the alias points to.
   * @public
   */
  RuntimeVersionArn: string | undefined;

  /**
   * The current state of the runtime alias.
   * @public
   */
  State: RuntimeAliasState | undefined;

  /**
   * A description of the runtime alias.
   * @public
   */
  Description?: string | undefined;

  /**
   * The compatibility matrix of the runtime version the alias points to.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The runtime lifecycle for the alias. By default, this is inherited from the runtime lifecycle. Optionally, you can override the lifecycle information at the alias level, if required.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The date and time when the runtime alias was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime alias was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListRuntimeVersionsRequest {
  /**
   * The name or ARN of the runtime whose versions to list.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The pagination token from a previous response. Use it to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of runtime versions to return per page. Valid range: 1 to 100.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about a runtime version returned by ListRuntimeVersions.
 * @public
 */
export interface RuntimeVersionInfo {
  /**
   * The name of the runtime version.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version.
   * @public
   */
  Arn: string | undefined;

  /**
   * The resolved image URI of the runtime version.
   * @public
   */
  ResolvedUri: string | undefined;

  /**
   * The current state of the runtime version.
   * @public
   */
  State: RuntimeVersionState | undefined;

  /**
   * Present only when State is PENDING_DELETION. The date and time at which the runtime version will be permanently deleted.
   * @public
   */
  PendingDeletionAt?: string | undefined;

  /**
   * The release notes associated with the runtime version.
   * @public
   */
  ReleaseNotes?: string | undefined;

  /**
   * The compatibility matrix of the runtime version.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The date and time when the runtime version was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime version was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListRuntimeVersionsResponse {
  /**
   * The list of runtime versions for the current page of results.
   * @public
   */
  Items: RuntimeVersionInfo[] | undefined;

  /**
   * The pagination token to include in a subsequent request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeVersionRequest {
  /**
   * The name or ARN of the runtime.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The name of the runtime version to update.
   * @public
   */
  Name: string | undefined;

  /**
   * The release notes to associate with the runtime version.
   * @public
   */
  ReleaseNotes: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeVersionResponse {
  /**
   * The name of the runtime version.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime version.
   * @public
   */
  Arn: string | undefined;

  /**
   * The resolved image URI of the runtime version.
   * @public
   */
  ResolvedUri: string | undefined;

  /**
   * The current state of the runtime version.
   * @public
   */
  State: RuntimeVersionState | undefined;

  /**
   * The release notes associated with the runtime version.
   * @public
   */
  ReleaseNotes?: string | undefined;

  /**
   * The platforms (architecture and OS combinations) available for the runtime version.
   * @public
   */
  Platforms?: Platform[] | undefined;

  /**
   * The compatibility matrix of the runtime version.
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The date and time when the runtime version was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime version was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeRequest {
  /**
   * The name or ARN of the runtime to update.
   * @public
   */
  RuntimeName: string | undefined;

  /**
   * The updated description of the runtime.
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated license information for the runtime.
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * The runtime lifecycle for the runtime. Optional. Used to schedule runtime deprecation. Omitting or providing an empty object removes the existing lifecycle.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;
}

/**
 * @public
 */
export interface UpdateRuntimeResponse {
  /**
   * The Amazon Resource Name (ARN) of the runtime.
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the runtime.
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the runtime.
   * @public
   */
  Description?: string | undefined;

  /**
   * The license information for the runtime.
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * The runtime lifecycle for the runtime. Used to schedule runtime deprecation.
   * @public
   */
  ReleaseLifecycle?: RuntimeReleaseLifecycle | undefined;

  /**
   * The date and time when the runtime was created.
   * @public
   */
  Created: string | undefined;

  /**
   * The date and time when the runtime was last modified.
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorsRequest {
  /**
   * <p>Optional filter to return only connectors in the specified state (for example, <code>ACTIVE</code> or <code>FAILED</code>).</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * <p>The pagination token from a previous <code>ListNetworkConnectors</code> response. Use this value to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of connectors to return per page. Valid range: 1 to 100.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Summary information about a network connector returned by <code>ListNetworkConnectors</code>. Contains identifying fields and current state. To retrieve full configuration details, use <code>GetNetworkConnector</code>.</p>
 * @public
 */
export interface NetworkConnectorSummary {
  /**
   * <p>The ARN of the network connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the network connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the network connector.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the network connector (<code>VPC_EGRESS</code>).</p>
   * @public
   */
  Type: NetworkConnectorType | undefined;

  /**
   * <p>The current state of the network connector.</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * <p>The date and time when the connector was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The qualified ARN of the connector's latest version, including the immutable version suffix.</p>
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * <p>The version number of the connector's latest version. Each configuration update creates a new immutable version; this attribute exposes the most recent one.</p>
   * @public
   */
  LatestVersion?: number | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorsResponse {
  /**
   * <p>A list of network connector summaries for the current page of results.</p>
   * @public
   */
  NetworkConnectors: NetworkConnectorSummary[] | undefined;

  /**
   * <p>The pagination token to include in a subsequent request to retrieve the next page. This value is null when there are no more results.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorVersionsRequest {
  /**
   * <p>The identifier of the network connector whose versions you want to list. You can specify the connector ID, name, or full ARN. Specify an unqualified identifier — this operation lists all versions of the connector, not a specific version.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Optional filter to return only versions in the specified state (for example, <code>ACTIVE</code> or <code>FAILED</code>).</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * <p>The pagination token from a previous <code>ListNetworkConnectorVersions</code> response. Use this value to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of versions to return per page. Valid range: 1 to 100.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Summary information about a single version of a network connector returned by <code>ListNetworkConnectorVersions</code>. Each configuration update creates a new immutable version; this shape describes one such version. To retrieve the full configuration of a version, call <code>GetNetworkConnector</code> with a version-qualified identifier.</p>
 * @public
 */
export interface NetworkConnectorVersionSummary {
  /**
   * <p>The unqualified ARN of the network connector that this version belongs to.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The qualified ARN of this connector version, including the immutable version suffix.</p>
   * @public
   */
  VersionArn: string | undefined;

  /**
   * <p>The name of the network connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the network connector.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version number of this connector version.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The current state of this connector version.</p>
   * @public
   */
  State: NetworkConnectorState | undefined;

  /**
   * <p>A human-readable explanation of the current state, populated when the state is <code>FAILED</code>.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>A machine-readable code indicating the reason for the current state. Use this for programmatic error handling.</p>
   * @public
   */
  StateReasonCode?: NetworkConnectorStateReasonCode | undefined;

  /**
   * <p>The date and time when this connector version was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorVersionsResponse {
  /**
   * <p>A list of connector version summaries for the current page of results.</p>
   * @public
   */
  NetworkConnectorVersions: NetworkConnectorVersionSummary[] | undefined;

  /**
   * <p>The pagination token to include in a subsequent request to retrieve the next page. This value is null when there are no more results.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkConnectorRequest {
  /**
   * <p>The identifier of the network connector to update. You can specify the connector ID, name, or full ARN.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The updated network configuration for the connector. Provide the full <code>VpcEgressConfiguration</code> including all subnet IDs and security group IDs — this replaces the existing configuration.</p>
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * <p>The updated ARN of the IAM role that Lambda assumes to manage ENIs. Use this to change the operator role without recreating the connector.</p>
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the update request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the network connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the network connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the network connector.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The qualified ARN of the connector version resulting from this update, including the immutable version suffix.</p>
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * <p>The version number of the connector version resulting from this update. A configuration change creates a new, incremented version; a no-op update returns the current version number.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.</p>
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * <p>The network configuration of the connector, including VPC subnets and security groups.</p>
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * <p>The current state of the network connector.</p>
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * <p>The status of this update operation (typically <code>InProgress</code> immediately after the call).</p>
   * @public
   */
  LastUpdateStatus?: NetworkConnectorLastUpdateStatus | undefined;

  /**
   * <p>A human-readable explanation of the update status.</p>
   * @public
   */
  LastUpdateStatusReason?: string | undefined;

  /**
   * <p>The timestamp of this update.</p>
   * @public
   */
  LastModified?: Date | undefined;
}
