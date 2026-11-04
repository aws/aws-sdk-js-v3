// smithy-typescript generated code
import type {
  ChangeType,
  ClusterEndpointEncryptionType,
  IsModifiable,
  NetworkType,
  ParameterType,
  SourceType,
  SSEStatus,
} from "./enums";

/**
 * Represents the settings used to enable server-side encryption.
 *
 * @public
 */
export interface SSESpecification {
  /**
   * Indicates whether server-side encryption is enabled (true) or disabled (false) on the cluster.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.
 *
 * Amazon Web Services-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. Amazon Web Services-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:`.
 *
 * You cannot backdate the application of a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the tag. Tag keys are case sensitive. Every DAX cluster can only have one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag. Tag values are case-sensitive and can be null.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * The cluster identifier. This parameter is stored as a lowercase string.
   *
   * **Constraints:**
   *
   * - A name must contain from 1 to 20 alphanumeric characters or hyphens.
   * - The first character must be a letter.
   * - A name cannot end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The compute and memory capacity of the nodes in the cluster.
   *
   * @public
   */
  NodeType: string | undefined;

  /**
   * A description of the cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of nodes in the DAX cluster. A replication factor of 1 will create a single-node cluster, without any read replicas. For additional fault tolerance, you can create a multiple node cluster with one or more read replicas. To do this, set `ReplicationFactor` to a number between 3 (one primary and two read replicas) and 10 (one primary and nine read replicas). `If the AvailabilityZones` parameter is provided, its length must equal the `ReplicationFactor`.
   *
   * > **Note:** Amazon Web Services recommends that you have at least two read replicas per cluster.
   *
   * @public
   */
  ReplicationFactor: number | undefined;

  /**
   * The Availability Zones (AZs) in which the cluster nodes will reside after the cluster has been created or updated. If provided, the length of this list must equal the `ReplicationFactor` parameter. If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The name of the subnet group to be used for the replication group.
   *
   * > **Important:** DAX clusters can only run in an Amazon VPC environment. All of the subnets that you specify in a subnet group must exist in the same VPC.
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the security group ID is system-generated.)
   *
   * If this parameter is not specified, DAX assigns the default VPC security group to each node.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Specifies the weekly time range during which maintenance on the DAX cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for `ddd` are:
   *
   * - `sun`
   * - `mon`
   * - `tue`
   * - `wed`
   * - `thu`
   * - `fri`
   * - `sat`
   *
   * Example: `sun:05:00-sun:09:00`
   *
   * > **Note:** If you don't specify a preferred maintenance window when you create or modify a cache cluster, DAX assigns a 60-minute maintenance window on a randomly selected day of the week.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.
   *
   * > **Note:** The Amazon SNS topic owner must be same as the DAX cluster owner.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The parameter group to be associated with the DAX cluster.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * A set of tags to associate with the DAX cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Represents the settings used to enable server-side encryption on the cluster.
   *
   * @public
   */
  SSESpecification?: SSESpecification | undefined;

  /**
   * The type of encryption the cluster's endpoint should support. Values are:
   *
   * - `NONE` for no encryption
   * - `TLS` for Transport Layer Security
   *
   * @public
   */
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType | undefined;

  /**
   * Specifies the IP protocol(s) the cluster uses for network communications. Values are:
   *
   * - `ipv4` - The cluster is accessible only through IPv4 addresses
   * - `ipv6` - The cluster is accessible only through IPv6 addresses
   * - `dual_stack` - The cluster is accessible through both IPv4 and IPv6 addresses.
   *
   * > **Note:** If no explicit `NetworkType` is provided, the network type is derived based on the subnet group's configuration.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Represents the information required for client programs to connect to the endpoint for a DAX cluster.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The DNS hostname of the endpoint.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The port number that applications should use to connect to the endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The URL that applications should use to connect to the endpoint. The default ports are 8111 for the "dax" protocol and 9111 for the "daxs" protocol.
   *
   * @public
   */
  URL?: string | undefined;
}

/**
 * Represents an individual node within a DAX cluster.
 *
 * @public
 */
export interface Node {
  /**
   * A system-generated identifier for the node.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * The endpoint for the node, consisting of a DNS name and a port number. Client applications can connect directly to a node endpoint, if desired (as an alternative to allowing DAX client software to intelligently route requests and responses to nodes in the DAX cluster.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * The date and time (in UNIX epoch format) when the node was launched.
   *
   * @public
   */
  NodeCreateTime?: Date | undefined;

  /**
   * The Availability Zone (AZ) in which the node has been deployed.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The current status of the node. For example: `available`.
   *
   * @public
   */
  NodeStatus?: string | undefined;

  /**
   * The status of the parameter group associated with this node. For example, `in-sync`.
   *
   * @public
   */
  ParameterGroupStatus?: string | undefined;
}

/**
 * Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * The Amazon Resource Name (ARN) that identifies the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The current state of the topic. A value of “active” means that notifications will be sent to the topic. A value of “inactive” means that notifications will not be sent to the topic.
   *
   * @public
   */
  TopicStatus?: string | undefined;
}

/**
 * The status of a parameter group.
 *
 * @public
 */
export interface ParameterGroupStatus {
  /**
   * The name of the parameter group.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * The status of parameter updates.
   *
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * The node IDs of one or more nodes to be rebooted.
   *
   * @public
   */
  NodeIdsToReboot?: string[] | undefined;
}

/**
 * An individual VPC security group and its status.
 *
 * @public
 */
export interface SecurityGroupMembership {
  /**
   * The unique ID for this security group.
   *
   * @public
   */
  SecurityGroupIdentifier?: string | undefined;

  /**
   * The status of this security group.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The description of the server-side encryption status on the specified DAX cluster.
 *
 * @public
 */
export interface SSEDescription {
  /**
   * The current state of server-side encryption:
   *
   * - `ENABLING` - Server-side encryption is being enabled.
   * - `ENABLED` - Server-side encryption is enabled.
   * - `DISABLING` - Server-side encryption is being disabled.
   * - `DISABLED` - Server-side encryption is disabled.
   *
   * @public
   */
  Status?: SSEStatus | undefined;
}

/**
 * Contains all of the attributes of a specific DAX cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The name of the DAX cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The description of the cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The total number of nodes in the cluster.
   *
   * @public
   */
  TotalNodes?: number | undefined;

  /**
   * The number of nodes in the cluster that are active (i.e., capable of serving requests).
   *
   * @public
   */
  ActiveNodes?: number | undefined;

  /**
   * The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the same type.)
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The current status of the cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The endpoint for this DAX cluster, consisting of a DNS name, a port number, and a URL. Applications should use the URL to configure the DAX client to find their cluster.
   *
   * @public
   */
  ClusterDiscoveryEndpoint?: Endpoint | undefined;

  /**
   * A list of nodes to be removed from the cluster.
   *
   * @public
   */
  NodeIdsToRemove?: string[] | undefined;

  /**
   * A list of nodes that are currently in the cluster.
   *
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * A range of time when maintenance of DAX cluster software will be performed. For example: `sun:01:00-sun:09:00`. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * The subnet group where the DAX cluster is running.
   *
   * @public
   */
  SubnetGroup?: string | undefined;

  /**
   * A list of security groups, and the status of each, for the nodes in the cluster.
   *
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[] | undefined;

  /**
   * A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The parameter group being used by nodes in the cluster.
   *
   * @public
   */
  ParameterGroup?: ParameterGroupStatus | undefined;

  /**
   * The description of the server-side encryption status on the specified DAX cluster.
   *
   * @public
   */
  SSEDescription?: SSEDescription | undefined;

  /**
   * The type of encryption supported by the cluster's endpoint. Values are:
   *
   * - `NONE` for no encryption
   *
   *   `TLS` for Transport Layer Security
   *
   * @public
   */
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType | undefined;

  /**
   * The IP address type of the cluster. Values are:
   *
   * - `ipv4` - IPv4 addresses only
   * - `ipv6` - IPv6 addresses only
   * - `dual_stack` - Both IPv4 and IPv6 addresses
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * A description of the DAX cluster that you have created.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupRequest {
  /**
   * The name of the parameter group to apply to all of the clusters in this replication group.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * A description of the parameter group.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * A named set of parameters that are applied to all of the nodes in a DAX cluster.
 *
 * @public
 */
export interface ParameterGroup {
  /**
   * The name of the parameter group.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * A description of the parameter group.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * Represents the output of a *CreateParameterGroup* action.
   *
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupRequest {
  /**
   * A name for the subnet group. This value is stored as a lowercase string.
   *
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * A description for the subnet group
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of VPC subnet IDs for the subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
 *
 * @public
 */
export interface Subnet {
  /**
   * The system-assigned identifier for the subnet.
   *
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * The Availability Zone (AZ) for the subnet.
   *
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * The network types supported by this subnet. Returns an array of strings that can include `ipv4`, `ipv6`, or both, indicating whether the subnet supports IPv4 only, IPv6 only, or dual-stack deployments.
   *
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * Represents the output of one of the following actions:
 *
 * - *CreateSubnetGroup*
 * - *ModifySubnetGroup*
 *
 * @public
 */
export interface SubnetGroup {
  /**
   * The name of the subnet group.
   *
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * The description of the subnet group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnets associated with the subnet group.
   *
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * The network types supported by this subnet. Returns an array of strings that can include `ipv4`, `ipv6`, or both, indicating whether the subnet group supports IPv4 only, IPv6 only, or dual-stack deployments.
   *
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * Represents the output of a *CreateSubnetGroup* operation.
   *
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicationFactorRequest {
  /**
   * The name of the DAX cluster from which you want to remove nodes.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The new number of nodes for the DAX cluster.
   *
   * @public
   */
  NewReplicationFactor: number | undefined;

  /**
   * The Availability Zone(s) from which to remove nodes.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The unique identifiers of the nodes to be removed from the cluster.
   *
   * @public
   */
  NodeIdsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicationFactorResponse {
  /**
   * A description of the DAX cluster, after you have decreased its replication factor.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The name of the cluster to be deleted.
   *
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * A description of the DAX cluster that is being deleted.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupRequest {
  /**
   * The name of the parameter group to delete.
   *
   * @public
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupResponse {
  /**
   * A user-specified message for this action (i.e., a reason for deleting the parameter group).
   *
   * @public
   */
  DeletionMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * The name of the subnet group to delete.
   *
   * @public
   */
  SubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupResponse {
  /**
   * A user-specified message for this action (i.e., a reason for deleting the subnet group).
   *
   * @public
   */
  DeletionMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * The names of the DAX clusters being described.
   *
   * @public
   */
  ClusterNames?: string[] | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * The value for `MaxResults` must be between 20 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The descriptions of your DAX clusters, in response to a *DescribeClusters* request.
   *
   * @public
   */
  Clusters?: Cluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultParametersRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * The value for `MaxResults` must be between 20 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a parameter value that is applicable to a particular node type.
 *
 * @public
 */
export interface NodeTypeSpecificValue {
  /**
   * A node type to which the parameter value applies.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The parameter value for this node type.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes an individual setting that controls some aspect of DAX behavior.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * Determines whether the parameter can be applied to any nodes, or only nodes of a particular type.
   *
   * @public
   */
  ParameterType?: ParameterType | undefined;

  /**
   * The value for the parameter.
   *
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * A list of node types, and specific parameter values for each node.
   *
   * @public
   */
  NodeTypeSpecificValues?: NodeTypeSpecificValue[] | undefined;

  /**
   * A description of the parameter
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * How the parameter is defined. For example, `system` denotes a system-defined parameter.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The data type of the parameter. For example, `integer`:
   *
   * @public
   */
  DataType?: string | undefined;

  /**
   * A range of values within which the parameter can be set.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * Whether the customer is allowed to modify the parameter.
   *
   * @public
   */
  IsModifiable?: IsModifiable | undefined;

  /**
   * The conditions under which changes to this parameter can be applied. For example, `requires-reboot` indicates that a new value for this parameter will only take effect if a node is rebooted.
   *
   * @public
   */
  ChangeType?: ChangeType | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultParametersResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of parameters. Each element in the list represents one parameter.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The event source to retrieve events for. If no value is specified, all events are returned.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The number of minutes' worth of events to retrieve.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * The value for `MaxResults` must be between 20 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.
 *
 * @public
 */
export interface Event {
  /**
   * The source of the event. For example, if the event occurred at the node level, the source would be the node ID.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * Specifies the origin of this event - a cluster, a parameter group, a node ID, etc.
   *
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * A user-defined message associated with the event.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The date and time when the event occurred.
   *
   * @public
   */
  Date?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of events. Each element in the array represents one event.
   *
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * The names of the parameter groups.
   *
   * @public
   */
  ParameterGroupNames?: string[] | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * The value for `MaxResults` must be between 20 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of parameter groups. Each element in the array represents one parameter group.
   *
   * @public
   */
  ParameterGroups?: ParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * The name of the parameter group.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * How the parameter is defined. For example, `system` denotes a system-defined parameter.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * The value for `MaxResults` must be between 20 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of parameters within a parameter group. Each element in the list represents one parameter.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * The name of the subnet group.
   *
   * @public
   */
  SubnetGroupNames?: string[] | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * The value for `MaxResults` must be between 20 and 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * Provides an identifier to allow retrieval of paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of subnet groups. Each element in the array represents a single subnet group.
   *
   * @public
   */
  SubnetGroups?: SubnetGroup[] | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicationFactorRequest {
  /**
   * The name of the DAX cluster that will receive additional nodes.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The new number of nodes for the DAX cluster.
   *
   * @public
   */
  NewReplicationFactor: number | undefined;

  /**
   * The Availability Zones (AZs) in which the cluster nodes will be created. All nodes belonging to the cluster are placed in these Availability Zones. Use this parameter if you want to distribute the nodes across multiple AZs.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicationFactorResponse {
  /**
   * A description of the DAX cluster, with its new replication factor.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * The name of the DAX resource to which the tags belong.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * A list of tags currently associated with the DAX cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If this value is present, there are additional results to be displayed. To retrieve them, call `ListTags` again, with `NextToken` set to this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RebootNodeRequest {
  /**
   * The name of the DAX cluster containing the node to be rebooted.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The system-assigned ID of the node to be rebooted.
   *
   * @public
   */
  NodeId: string | undefined;
}

/**
 * @public
 */
export interface RebootNodeResponse {
  /**
   * A description of the DAX cluster after a node has been rebooted.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The name of the DAX resource to which tags should be added.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tags to be assigned to the DAX resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * The list of tags that are associated with the DAX resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The name of the DAX resource from which the tags should be removed.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * A list of tag keys. If the DAX cluster has any tags with these keys, then the tags are removed from the cluster.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * The tag keys that have been removed from the cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The name of the DAX cluster to be modified.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A description of the changes being made to the cluster.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A range of time when maintenance of DAX cluster software will be performed. For example: `sun:01:00-sun:09:00`. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the topic.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * The current state of the topic. A value of “active” means that notifications will be sent to the topic. A value of “inactive” means that notifications will not be sent to the topic.
   *
   * @public
   */
  NotificationTopicStatus?: string | undefined;

  /**
   * The name of a parameter group for this cluster.
   *
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * A list of user-specified security group IDs to be assigned to each node in the DAX cluster. If this parameter is not specified, DAX assigns the default VPC security group to each node.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * A description of the DAX cluster, after it has been modified.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * An individual DAX parameter.
 *
 * @public
 */
export interface ParameterNameValue {
  /**
   * The name of the parameter.
   *
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * The value of the parameter.
   *
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupRequest {
  /**
   * The name of the parameter group.
   *
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * An array of name-value pairs for the parameters in the group. Each element in the array represents a single parameter.
   *
   * > **Note:** `record-ttl-millis` and `query-ttl-millis` are the only supported parameter names. For more details, see [Configuring TTL Settings](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl).
   *
   * @public
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupResponse {
  /**
   * The parameter group that has been modified.
   *
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupRequest {
  /**
   * The name of the subnet group.
   *
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * A description of the subnet group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of subnet IDs in the subnet group.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * The subnet group that has been modified.
   *
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}
