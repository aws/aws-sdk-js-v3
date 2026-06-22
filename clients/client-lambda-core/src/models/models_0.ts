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
   * <p>The IDs of the VPC security groups to attach to the ENIs. Specify 0 to 5 security groups. All security groups must be in the same VPC as the subnets.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The network protocol for the connector. Specify <code>IPv4</code> for IPv4-only networking, or <code>DualStack</code> for both IPv4 and IPv6.</p>
   * @public
   */
  NetworkProtocol?: NetworkProtocol | undefined;

  /**
   * <p>The types of Lambda compute resources that can use this connector. Currently, only <code>MicroVm</code> is supported.</p>
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
   * The unique identifier for a network connector, assigned by the service at creation time
   * @public
   */
  Id: string | undefined;

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
 * @public
 */
export interface DeleteNetworkConnectorRequest {
  /**
   * A flexible identifier that accepts a network connector ID, name, or ARN
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
   * The unique identifier for a network connector, assigned by the service at creation time
   * @public
   */
  Id: string | undefined;

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
export interface GetNetworkConnectorRequest {
  /**
   * A flexible identifier that accepts a network connector ID, name, or ARN
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
   * The unique identifier for a network connector, assigned by the service at creation time
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version number of the connector configuration, incremented on each update.</p>
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
   * The unique identifier for a network connector, assigned by the service at creation time
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
export interface UpdateNetworkConnectorRequest {
  /**
   * A flexible identifier that accepts a network connector ID, name, or ARN
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
   * The unique identifier for a network connector, assigned by the service at creation time
   * @public
   */
  Id: string | undefined;

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
