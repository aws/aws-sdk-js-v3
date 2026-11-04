// smithy-typescript generated code
import type {
  ComputeResourceType,
  NetworkConnectorLastUpdateStatus,
  NetworkConnectorLastUpdateStatusReasonCode,
  NetworkConnectorState,
  NetworkConnectorStateReasonCode,
  NetworkConnectorType,
  NetworkProtocol,
} from "./enums";

/**
 * Configuration for a VPC egress network connector. Specifies the VPC subnets, security groups, network protocol, and associated Lambda compute resource types.
 *
 * @public
 */
export interface NetworkConnectorVpcEgressConfiguration {
  /**
   * The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs). Specify 1 to 16 subnets. All subnets must be in the same VPC.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IDs of the VPC security groups to attach to the ENIs. All security groups must be in the same VPC as the subnets.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The network protocol for the connector. Specify `IPv4` for IPv4-only networking, or `DualStack` for both IPv4 and IPv6.
   *
   * @public
   */
  NetworkProtocol?: NetworkProtocol | undefined;

  /**
   * The types of Lambda compute resources that can use this connector. Valid values are `MicroVm` and `WebFunction`. Specify exactly one value.
   *
   * @public
   */
  AssociatedComputeResourceTypes?: ComputeResourceType[] | undefined;
}

/**
 * The network configuration for a network connector. Different connector types use different configuration shapes; specify the configuration that matches your connector type.
 *
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
   * Configuration for a VPC egress network connector. Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.
   *
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
   * A unique name for the network connector within your account and Region. You can use the name to identify the connector in subsequent API calls.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The network configuration for the connector. Specify a `VpcEgressConfiguration` to enable outbound traffic routing through your VPC.
   *
   * @public
   */
  Configuration: NetworkConnectorConfiguration | undefined;

  /**
   * The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. This role must have permissions for `ec2:CreateNetworkInterface`, `ec2:DeleteNetworkInterface`, and related describe operations.
   *
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request with the same client token, the API returns the existing connector without creating a duplicate.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A map of key-value pairs to associate with the network connector for organization, cost allocation, or access control.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNetworkConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the network connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the network connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the network connector.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The qualified ARN of the connector version created by this request, including the immutable version suffix.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The version number assigned to the connector. A newly created connector starts at version 1.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The network configuration of the connector, including VPC subnets and security groups.
   *
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.
   *
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * The current state of the network connector.
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkConnectorRequest {
  /**
   * The identifier of the network connector to delete. Provide an unqualified ARN (or an ID or name) to delete the entire connector and all of its versions, or a version-qualified ARN — one that includes the immutable version suffix — to delete a specific historical version. You can't delete the latest version with a version-qualified identifier; delete the connector instead.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the network connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the network connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the network connector.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The qualified ARN of the connector version affected by this request, including the immutable version suffix.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The version number of the connector version affected by this request.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The network configuration of the connector, including VPC subnets and security groups.
   *
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.
   *
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * The current state of the network connector. The State field is typically `DELETING` after this call.
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;
}

/**
 * @public
 */
export interface GetNetworkConnectorRequest {
  /**
   * The identifier of the network connector to retrieve. You can specify the connector ID, name, or ARN. Provide an unqualified ARN (or an ID or name) to retrieve the connector's latest version, or a version-qualified ARN — one that includes the immutable version suffix — to retrieve a specific historical version.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the network connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the network connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the network connector.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The qualified ARN of the specific connector version returned by this request, including the immutable version suffix. This is populated only when you supply a version-qualified identifier. On a standard (unqualified) request, this field is not populated; the connector's latest active version is returned instead through the `LatestVersionArn` and `LatestVersion` fields described below.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The version number of the network connector. On a standard (unqualified) request, this is the connector's current version; each configuration update increments it. When you supply a version-qualified identifier, this is the specific version you requested.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The qualified ARN of the connector's latest active version, including the immutable version suffix. This field is returned only on a standard (unqualified) request; when you supply a version-qualified identifier it is not returned, and `VersionArn` is returned instead.
   *
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The version number of the connector's latest active version. Each configuration update creates a new immutable version; this attribute exposes the most recent one. This field is returned only on a standard (unqualified) request.
   *
   * @public
   */
  LatestVersion?: number | undefined;

  /**
   * The network configuration of the connector, including VPC subnets and security groups.
   *
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.
   *
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * The current state of the network connector.
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * A human-readable explanation of the current state, populated when the state is `FAILED` or `DELETE_FAILED`.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * A machine-readable code indicating the reason for the current state. Use this for programmatic error handling.
   *
   * @public
   */
  StateReasonCode?: NetworkConnectorStateReasonCode | undefined;

  /**
   * The status of the most recent update operation (`Successful`, `Failed`, or `InProgress`).
   *
   * @public
   */
  LastUpdateStatus?: NetworkConnectorLastUpdateStatus | undefined;

  /**
   * A human-readable explanation of the last update status.
   *
   * @public
   */
  LastUpdateStatusReason?: string | undefined;

  /**
   * A machine-readable code indicating the reason for the last update status. Use this for programmatic error handling.
   *
   * @public
   */
  LastUpdateStatusReasonCode?: NetworkConnectorLastUpdateStatusReasonCode | undefined;

  /**
   * The date and time when the connector configuration was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorsRequest {
  /**
   * Optional filter to return only connectors in the specified state (for example, `ACTIVE` or `FAILED`).
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * The pagination token from a previous `ListNetworkConnectors` response. Use this value to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of connectors to return per page. Valid range: 1 to 100.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Summary information about a network connector returned by `ListNetworkConnectors`. Contains identifying fields and current state. To retrieve full configuration details, use `GetNetworkConnector`.
 *
 * @public
 */
export interface NetworkConnectorSummary {
  /**
   * The ARN of the network connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the network connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the network connector.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the network connector (`VPC_EGRESS`).
   *
   * @public
   */
  Type: NetworkConnectorType | undefined;

  /**
   * The current state of the network connector.
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * The date and time when the connector was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The qualified ARN of the connector's latest version, including the immutable version suffix.
   *
   * @public
   */
  LatestVersionArn?: string | undefined;

  /**
   * The version number of the connector's latest version. Each configuration update creates a new immutable version; this attribute exposes the most recent one.
   *
   * @public
   */
  LatestVersion?: number | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorsResponse {
  /**
   * A list of network connector summaries for the current page of results.
   *
   * @public
   */
  NetworkConnectors: NetworkConnectorSummary[] | undefined;

  /**
   * The pagination token to include in a subsequent request to retrieve the next page. This value is null when there are no more results.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorVersionsRequest {
  /**
   * The identifier of the network connector whose versions you want to list. You can specify the connector ID, name, or full ARN. Specify an unqualified identifier — this operation lists all versions of the connector, not a specific version.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Optional filter to return only versions in the specified state (for example, `ACTIVE` or `FAILED`).
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * The pagination token from a previous `ListNetworkConnectorVersions` response. Use this value to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of versions to return per page. Valid range: 1 to 100.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Summary information about a single version of a network connector returned by `ListNetworkConnectorVersions`. Each configuration update creates a new immutable version; this shape describes one such version. To retrieve the full configuration of a version, call `GetNetworkConnector` with a version-qualified identifier.
 *
 * @public
 */
export interface NetworkConnectorVersionSummary {
  /**
   * The unqualified ARN of the network connector that this version belongs to.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The qualified ARN of this connector version, including the immutable version suffix.
   *
   * @public
   */
  VersionArn: string | undefined;

  /**
   * The name of the network connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the network connector.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version number of this connector version.
   *
   * @public
   */
  Version: number | undefined;

  /**
   * The current state of this connector version.
   *
   * @public
   */
  State: NetworkConnectorState | undefined;

  /**
   * A human-readable explanation of the current state, populated when the state is `FAILED`.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * A machine-readable code indicating the reason for the current state. Use this for programmatic error handling.
   *
   * @public
   */
  StateReasonCode?: NetworkConnectorStateReasonCode | undefined;

  /**
   * The date and time when this connector version was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListNetworkConnectorVersionsResponse {
  /**
   * A list of connector version summaries for the current page of results.
   *
   * @public
   */
  NetworkConnectorVersions: NetworkConnectorVersionSummary[] | undefined;

  /**
   * The pagination token to include in a subsequent request to retrieve the next page. This value is null when there are no more results.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkConnectorRequest {
  /**
   * The identifier of the network connector to update. You can specify the connector ID, name, or full ARN.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The updated network configuration for the connector. Provide the full `VpcEgressConfiguration` including all subnet IDs and security group IDs — this replaces the existing configuration.
   *
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * The updated ARN of the IAM role that Lambda assumes to manage ENIs. Use this to change the operator role without recreating the connector.
   *
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the update request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the network connector.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the network connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the network connector.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The qualified ARN of the connector version resulting from this update, including the immutable version suffix.
   *
   * @public
   */
  VersionArn?: string | undefined;

  /**
   * The version number of the connector version resulting from this update. A configuration change creates a new, incremented version; a no-op update returns the current version number.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector.
   *
   * @public
   */
  OperatorRole?: string | undefined;

  /**
   * The network configuration of the connector, including VPC subnets and security groups.
   *
   * @public
   */
  Configuration?: NetworkConnectorConfiguration | undefined;

  /**
   * The current state of the network connector.
   *
   * @public
   */
  State?: NetworkConnectorState | undefined;

  /**
   * The status of this update operation (typically `InProgress` immediately after the call).
   *
   * @public
   */
  LastUpdateStatus?: NetworkConnectorLastUpdateStatus | undefined;

  /**
   * A human-readable explanation of the update status.
   *
   * @public
   */
  LastUpdateStatusReason?: string | undefined;

  /**
   * The timestamp of this update.
   *
   * @public
   */
  LastModified?: Date | undefined;
}
