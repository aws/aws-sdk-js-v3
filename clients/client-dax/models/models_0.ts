import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You already have a DAX cluster with the given identifier.</p>
 */
export interface ClusterAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterAlreadyExistsFault {
  export const filterSensitiveLog = (obj: ClusterAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have attempted to exceed the maximum number of DAX clusters for your AWS
 *             account.</p>
 */
export interface ClusterQuotaForCustomerExceededFault extends __SmithyException, $MetadataBearer {
  name: "ClusterQuotaForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterQuotaForCustomerExceededFault {
  export const filterSensitiveLog = (obj: ClusterQuotaForCustomerExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the settings used to enable server-side encryption.</p>
 */
export interface SSESpecification {
  /**
   * <p>Indicates whether server-side encryption is enabled (true) or disabled (false) on the cluster.</p>
   */
  Enabled: boolean | undefined;
}

export namespace SSESpecification {
  export const filterSensitiveLog = (obj: SSESpecification): any => ({
    ...obj,
  });
}

/**
 * <p>A description of a tag.  Every tag is a key-value pair. You can add up to 50 tags to a single
 *             DAX cluster.</p>
 *         <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code>
 *             prefix, which the user cannot assign. AWS-assigned tag names do not count towards the
 *             tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p>
 *         <p>You cannot backdate the application of a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key for the tag.  Tag keys are case sensitive. Every DAX cluster can only have
   *             one tag with the same key. If you try to add an existing tag (same key), the
   *             existing tag value will be updated to the new value.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag. Tag values are case-sensitive and can be null. </p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateClusterRequest {
  /**
   * <p>The cluster identifier. This parameter is stored as a lowercase
   *             string.</p>
   *         <p>
   *             <b>Constraints:</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>A name must contain from 1 to 20 alphanumeric characters or
   *                     hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>A name cannot end with a hyphen or contain two consecutive
   *                     hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterName: string | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the cluster.</p>
   */
  NodeType: string | undefined;

  /**
   * <p>A description of the cluster.</p>
   */
  Description?: string;

  /**
   * <p>The number of nodes in the DAX cluster. A replication factor of 1 will
   *             create a single-node cluster, without any read replicas. For additional fault tolerance,
   *             you can create a multiple node cluster with one or more read replicas. To do this, set
   *                 <code>ReplicationFactor</code> to a number between 3 (one primary and two read replicas) and 10 (one primary and nine read replicas).
   *                  <code>If the AvailabilityZones</code> parameter is provided, its length must equal the <code>ReplicationFactor</code>.</p>
   *         <note>
   *             <p>AWS recommends that you have at least two read replicas per cluster.</p>
   *          </note>
   */
  ReplicationFactor: number | undefined;

  /**
   * <p>The Availability Zones (AZs) in which the cluster nodes will reside after the cluster
   *          has been created or updated. If provided, the length of this list must equal the <code>ReplicationFactor</code> parameter.
   *          If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The name of the subnet group to be used for the replication group.</p>
   *         <important>
   *             <p>DAX clusters can only run in an Amazon VPC environment. All of the subnets
   *                 that you specify in a subnet group must exist in the same VPC.</p>
   *         </important>
   */
  SubnetGroupName?: string;

  /**
   * <p>A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the
   *              security group ID is system-generated.)</p>
   *         <p>If this parameter is not specified, DAX assigns the default VPC security group to
   *             each node.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Specifies the weekly time range during which maintenance on the DAX cluster is
   *             performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock
   *             UTC). The minimum maintenance window is a 60 minute period. Valid values for
   *                 <code>ddd</code> are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>sun</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>mon</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>tue</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>wed</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>thu</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>fri</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>sat</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>sun:05:00-sun:09:00</code>
   *         </p>
   *         <note>
   *             <p>If you don't specify a preferred maintenance window when you create or modify a
   *                 cache cluster, DAX assigns a 60-minute maintenance window on a randomly selected day
   *                 of the week.</p>
   *          </note>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will
   *             be sent.</p>
   *         <note>
   *             <p>The Amazon SNS topic owner must be same as the DAX cluster owner.</p>
   *         </note>
   */
  NotificationTopicArn?: string;

  /**
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX
   *             will assume this role and use the role's permissions to access DynamoDB on your
   *             behalf.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The parameter group to be associated with the DAX cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>A set of tags to associate with the DAX cluster.  </p>
   */
  Tags?: Tag[];

  /**
   * <p>Represents the settings used to enable server-side encryption on the cluster.</p>
   */
  SSESpecification?: SSESpecification;
}

export namespace CreateClusterRequest {
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the information required for client programs to connect to the
 *             configuration endpoint for a DAX cluster, or to an individual node within the
 *             cluster.</p>
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the endpoint.</p>
   */
  Address?: string;

  /**
   * <p>The port number that applications should use to connect to the endpoint.</p>
   */
  Port?: number;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an individual node within a DAX cluster.</p>
 */
export interface Node {
  /**
   * <p>A system-generated identifier for the node.</p>
   */
  NodeId?: string;

  /**
   * <p>The endpoint for the node, consisting of a DNS name and a port number. Client
   *             applications can connect directly to a node endpoint, if desired (as an alternative to
   *             allowing DAX client software to intelligently route requests and responses to nodes in
   *             the DAX cluster.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>The date and time (in UNIX epoch format) when the node was launched.</p>
   */
  NodeCreateTime?: Date;

  /**
   * <p>The Availability Zone (AZ) in which the node has been deployed.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The current status of the node. For example: <code>available</code>.</p>
   */
  NodeStatus?: string;

  /**
   * <p>The status of the parameter group associated with this node. For example,
   *                 <code>in-sync</code>.</p>
   */
  ParameterGroupStatus?: string;
}

export namespace Node {
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a notification topic and its status. Notification topics are used for
 *             publishing DAX events to subscribers using Amazon Simple Notification Service
 *             (SNS).</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic. </p>
   */
  TopicArn?: string;

  /**
   * <p>The current state of the topic.</p>
   */
  TopicStatus?: string;
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The status of a parameter group.</p>
 */
export interface ParameterGroupStatus {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of parameter updates. </p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The node IDs of one or more nodes to be rebooted.</p>
   */
  NodeIdsToReboot?: string[];
}

export namespace ParameterGroupStatus {
  export const filterSensitiveLog = (obj: ParameterGroupStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An individual VPC security group and its status.</p>
 */
export interface SecurityGroupMembership {
  /**
   * <p>The unique ID for this security group.</p>
   */
  SecurityGroupIdentifier?: string;

  /**
   * <p>The status of this security group.</p>
   */
  Status?: string;
}

export namespace SecurityGroupMembership {
  export const filterSensitiveLog = (obj: SecurityGroupMembership): any => ({
    ...obj,
  });
}

export type SSEStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING";

/**
 * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
 */
export interface SSEDescription {
  /**
   * <p>The current state of server-side encryption:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLING</code> - Server-side encryption is being enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Server-side encryption is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLING</code> - Server-side encryption is being disabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - Server-side encryption is disabled.</p>
   *             </li>
   *          </ul>
   */
  Status?: SSEStatus | string;
}

export namespace SSEDescription {
  export const filterSensitiveLog = (obj: SSEDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains all of the attributes of a specific DAX cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The name of the DAX cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The description of the cluster.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *         </p>
   */
  ClusterArn?: string;

  /**
   * <p>The total number of nodes in the cluster.</p>
   */
  TotalNodes?: number;

  /**
   * <p>The number of nodes in the cluster that are active (i.e., capable of serving
   *             requests).</p>
   */
  ActiveNodes?: number;

  /**
   * <p>The node type for the nodes in the cluster. (All nodes in a DAX cluster are of
   *             the same type.)</p>
   */
  NodeType?: string;

  /**
   * <p>The current status of the cluster.</p>
   */
  Status?: string;

  /**
   * <p>The configuration endpoint for this DAX cluster, consisting of a DNS name and a
   *             port number. Client applications can specify this endpoint, rather than an individual
   *             node endpoint, and allow the DAX client software to intelligently route requests and
   *             responses to nodes in the DAX cluster.</p>
   */
  ClusterDiscoveryEndpoint?: Endpoint;

  /**
   * <p>A list of nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: string[];

  /**
   * <p>A list of nodes that are currently in the cluster.</p>
   */
  Nodes?: Node[];

  /**
   * <p>A range of time when maintenance of DAX cluster software will be performed. For
   *             example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than
   *             30 minutes, and is performed automatically within the maintenance window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for
   *             publishing DAX events to subscribers using Amazon Simple Notification Service
   *             (SNS).</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>The subnet group where the DAX cluster is running.</p>
   */
  SubnetGroup?: string;

  /**
   * <p>A list of security groups, and the status of each, for the nodes in the cluster.</p>
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX
   *             will assume this role and use the role's permissions to access DynamoDB on your
   *             behalf.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The parameter group being used by nodes in the cluster.</p>
   */
  ParameterGroup?: ParameterGroupStatus;

  /**
   * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
   */
  SSEDescription?: SSEDescription;
}

export namespace Cluster {
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
}

export interface CreateClusterResponse {
  /**
   * <p>A description of the DAX cluster that you have created.</p>
   */
  Cluster?: Cluster;
}

export namespace CreateClusterResponse {
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There are not enough system resources to create the cluster you requested (or to
 *             resize an already-existing cluster). </p>
 */
export interface InsufficientClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientClusterCapacityFault {
  export const filterSensitiveLog = (obj: InsufficientClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested DAX cluster is not in the <i>available</i>
 *             state.</p>
 */
export interface InvalidClusterStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidClusterStateFault {
  export const filterSensitiveLog = (obj: InvalidClusterStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>Two or more incompatible parameters were specified.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterCombinationException {
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters in a parameter group are in an invalid state.</p>
 */
export interface InvalidParameterGroupStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterGroupStateFault {
  export const filterSensitiveLog = (obj: InvalidParameterGroupStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The value for a parameter is invalid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC network is in an invalid state.</p>
 */
export interface InvalidVPCNetworkStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export const filterSensitiveLog = (obj: InvalidVPCNetworkStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have attempted to exceed the maximum number of nodes for a DAX
 *             cluster.</p>
 */
export interface NodeQuotaForClusterExceededFault extends __SmithyException, $MetadataBearer {
  name: "NodeQuotaForClusterExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeQuotaForClusterExceededFault {
  export const filterSensitiveLog = (obj: NodeQuotaForClusterExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have attempted to exceed the maximum number of nodes for your AWS
 *             account.</p>
 */
export interface NodeQuotaForCustomerExceededFault extends __SmithyException, $MetadataBearer {
  name: "NodeQuotaForCustomerExceededFault";
  $fault: "client";
  message?: string;
}

export namespace NodeQuotaForCustomerExceededFault {
  export const filterSensitiveLog = (obj: NodeQuotaForCustomerExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter group does not exist.</p>
 */
export interface ParameterGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ParameterGroupNotFoundFault {
  export const filterSensitiveLog = (obj: ParameterGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified service linked role (SLR) was not found.</p>
 */
export interface ServiceLinkedRoleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ServiceLinkedRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ServiceLinkedRoleNotFoundFault {
  export const filterSensitiveLog = (obj: ServiceLinkedRoleNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
 */
export interface SubnetGroupNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupNotFoundFault {
  export const filterSensitiveLog = (obj: SubnetGroupNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of tags for this DAX cluster.</p>
 */
export interface TagQuotaPerResourceExceeded extends __SmithyException, $MetadataBearer {
  name: "TagQuotaPerResourceExceeded";
  $fault: "client";
  message?: string;
}

export namespace TagQuotaPerResourceExceeded {
  export const filterSensitiveLog = (obj: TagQuotaPerResourceExceeded): any => ({
    ...obj,
  });
}

export interface CreateParameterGroupRequest {
  /**
   * <p>The name of the parameter group to apply to all of the clusters in this replication
   *             group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>A description of the parameter group.</p>
   */
  Description?: string;
}

export namespace CreateParameterGroupRequest {
  export const filterSensitiveLog = (obj: CreateParameterGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A named set of parameters that are applied to all of the nodes in a DAX
 *             cluster.</p>
 */
export interface ParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>A description of the parameter group.</p>
   */
  Description?: string;
}

export namespace ParameterGroup {
  export const filterSensitiveLog = (obj: ParameterGroup): any => ({
    ...obj,
  });
}

export interface CreateParameterGroupResponse {
  /**
   * <p>Represents the output of a <i>CreateParameterGroup</i>
   *             action.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export namespace CreateParameterGroupResponse {
  export const filterSensitiveLog = (obj: CreateParameterGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter group already exists.</p>
 */
export interface ParameterGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ParameterGroupAlreadyExistsFault {
  export const filterSensitiveLog = (obj: ParameterGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>You have attempted to exceed the maximum number of parameter groups.</p>
 */
export interface ParameterGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ParameterGroupQuotaExceededFault {
  export const filterSensitiveLog = (obj: ParameterGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

export interface CreateSubnetGroupRequest {
  /**
   * <p>A name for the subnet group. This value is stored as a lowercase string. </p>
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group</p>
   */
  Description?: string;

  /**
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace CreateSubnetGroupRequest {
  export const filterSensitiveLog = (obj: CreateSubnetGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the subnet associated with a DAX cluster. This parameter refers to
 *             subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with
 *             DAX.</p>
 */
export interface Subnet {
  /**
   * <p>The system-assigned identifier for the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The Availability Zone (AZ) for the subnet.</p>
   */
  SubnetAvailabilityZone?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of one of the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>CreateSubnetGroup</i>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>ModifySubnetGroup</i>
 *                 </p>
 *             </li>
 *          </ul>
 */
export interface SubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName?: string;

  /**
   * <p>The description of the subnet group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnets associated with the subnet group. </p>
   */
  Subnets?: Subnet[];
}

export namespace SubnetGroup {
  export const filterSensitiveLog = (obj: SubnetGroup): any => ({
    ...obj,
  });
}

export interface CreateSubnetGroupResponse {
  /**
   * <p>Represents the output of a <i>CreateSubnetGroup</i>
   *             operation.</p>
   */
  SubnetGroup?: SubnetGroup;
}

export namespace CreateSubnetGroupResponse {
  export const filterSensitiveLog = (obj: CreateSubnetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An invalid subnet identifier was specified.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>The specified subnet group already exists.</p>
 */
export interface SubnetGroupAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupAlreadyExistsFault {
  export const filterSensitiveLog = (obj: SubnetGroupAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 */
export interface SubnetGroupQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupQuotaExceededFault {
  export const filterSensitiveLog = (obj: SubnetGroupQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 */
export interface SubnetQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetQuotaExceededFault {
  export const filterSensitiveLog = (obj: SubnetQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
 */
export interface ClusterNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ClusterNotFoundFault {
  export const filterSensitiveLog = (obj: ClusterNotFoundFault): any => ({
    ...obj,
  });
}

export interface DecreaseReplicationFactorRequest {
  /**
   * <p>The name of the DAX cluster from which you want to remove nodes.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The new number of nodes for the DAX cluster.</p>
   */
  NewReplicationFactor: number | undefined;

  /**
   * <p>The Availability Zone(s) from which to remove nodes.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The unique identifiers of the nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: string[];
}

export namespace DecreaseReplicationFactorRequest {
  export const filterSensitiveLog = (obj: DecreaseReplicationFactorRequest): any => ({
    ...obj,
  });
}

export interface DecreaseReplicationFactorResponse {
  /**
   * <p>A description of the DAX cluster, after you have decreased its replication
   *             factor.</p>
   */
  Cluster?: Cluster;
}

export namespace DecreaseReplicationFactorResponse {
  export const filterSensitiveLog = (obj: DecreaseReplicationFactorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>None of the nodes in the cluster have the given node ID.</p>
 */
export interface NodeNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "NodeNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace NodeNotFoundFault {
  export const filterSensitiveLog = (obj: NodeNotFoundFault): any => ({
    ...obj,
  });
}

export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to be deleted.</p>
   */
  ClusterName: string | undefined;
}

export namespace DeleteClusterRequest {
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
}

export interface DeleteClusterResponse {
  /**
   * <p>A description of the DAX cluster that is being deleted.</p>
   */
  Cluster?: Cluster;
}

export namespace DeleteClusterResponse {
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
}

export interface DeleteParameterGroupRequest {
  /**
   * <p>The name of the parameter group to delete.</p>
   */
  ParameterGroupName: string | undefined;
}

export namespace DeleteParameterGroupRequest {
  export const filterSensitiveLog = (obj: DeleteParameterGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteParameterGroupResponse {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the parameter
   *             group).</p>
   */
  DeletionMessage?: string;
}

export namespace DeleteParameterGroupResponse {
  export const filterSensitiveLog = (obj: DeleteParameterGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete.</p>
   */
  SubnetGroupName: string | undefined;
}

export namespace DeleteSubnetGroupRequest {
  export const filterSensitiveLog = (obj: DeleteSubnetGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteSubnetGroupResponse {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the subnet
   *             group).</p>
   */
  DeletionMessage?: string;
}

export namespace DeleteSubnetGroupResponse {
  export const filterSensitiveLog = (obj: DeleteSubnetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified subnet group is currently in use.</p>
 */
export interface SubnetGroupInUseFault extends __SmithyException, $MetadataBearer {
  name: "SubnetGroupInUseFault";
  $fault: "client";
  message?: string;
}

export namespace SubnetGroupInUseFault {
  export const filterSensitiveLog = (obj: SubnetGroupInUseFault): any => ({
    ...obj,
  });
}

export interface DescribeClustersRequest {
  /**
   * <p>The names of the DAX clusters being described.</p>
   */
  ClusterNames?: string[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeClustersRequest {
  export const filterSensitiveLog = (obj: DescribeClustersRequest): any => ({
    ...obj,
  });
}

export interface DescribeClustersResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>The descriptions of your DAX clusters, in response to a
   *             <i>DescribeClusters</i> request.</p>
   */
  Clusters?: Cluster[];
}

export namespace DescribeClustersResponse {
  export const filterSensitiveLog = (obj: DescribeClustersResponse): any => ({
    ...obj,
  });
}

export interface DescribeDefaultParametersRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeDefaultParametersRequest {
  export const filterSensitiveLog = (obj: DescribeDefaultParametersRequest): any => ({
    ...obj,
  });
}

export type ChangeType = "IMMEDIATE" | "REQUIRES_REBOOT";

export type IsModifiable = "CONDITIONAL" | "FALSE" | "TRUE";

/**
 * <p>Represents a parameter value that is applicable to a particular node
 *             type.</p>
 */
export interface NodeTypeSpecificValue {
  /**
   * <p>A node type to which the parameter value applies.</p>
   */
  NodeType?: string;

  /**
   * <p>The parameter value for this node type.</p>
   */
  Value?: string;
}

export namespace NodeTypeSpecificValue {
  export const filterSensitiveLog = (obj: NodeTypeSpecificValue): any => ({
    ...obj,
  });
}

export type ParameterType = "DEFAULT" | "NODE_TYPE_SPECIFIC";

/**
 * <p>Describes an individual setting that controls some aspect of DAX
 *             behavior.</p>
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>Determines whether the parameter can be applied to any nodes, or only nodes of a
   *             particular type.</p>
   */
  ParameterType?: ParameterType | string;

  /**
   * <p>The value for the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>A list of node types, and specific parameter values for each node.</p>
   */
  NodeTypeSpecificValues?: NodeTypeSpecificValue[];

  /**
   * <p>A description of the parameter</p>
   */
  Description?: string;

  /**
   * <p>How the parameter is defined. For example, <code>system</code> denotes a
   *             system-defined parameter.</p>
   */
  Source?: string;

  /**
   * <p>The data type of the parameter. For example, <code>integer</code>:</p>
   */
  DataType?: string;

  /**
   * <p>A range of values within which the parameter can be set.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Whether the customer is allowed to modify the parameter.</p>
   */
  IsModifiable?: IsModifiable | string;

  /**
   * <p>The conditions under which changes to this parameter can be applied. For example,
   *                 <code>requires-reboot</code> indicates that a new value for this parameter will only
   *             take effect if a node is rebooted.</p>
   */
  ChangeType?: ChangeType | string;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

export interface DescribeDefaultParametersResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameters.  Each element in the list represents one parameter.</p>
   */
  Parameters?: Parameter[];
}

export namespace DescribeDefaultParametersResponse {
  export const filterSensitiveLog = (obj: DescribeDefaultParametersResponse): any => ({
    ...obj,
  });
}

export type SourceType = "CLUSTER" | "PARAMETER_GROUP" | "SUBNET_GROUP";

export interface DescribeEventsRequest {
  /**
   * <p>The identifier of the event source for which events will be returned. If not
   *             specified, then all sources are included in the response.</p>
   */
  SourceName?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format.</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes' worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeEventsRequest {
  export const filterSensitiveLog = (obj: DescribeEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single occurrence of something interesting within the system. Some
 *             examples of events are creating a DAX cluster, adding or removing a node, or rebooting
 *             a node.</p>
 */
export interface Event {
  /**
   * <p>The source of the event. For example, if the event occurred at the node level, the
   *             source would be the node ID.</p>
   */
  SourceName?: string;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a node ID,
   *             etc.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>A user-defined message associated with the event.</p>
   */
  Message?: string;

  /**
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export interface DescribeEventsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of events.  Each element in the array represents one event.</p>
   */
  Events?: Event[];
}

export namespace DescribeEventsResponse {
  export const filterSensitiveLog = (obj: DescribeEventsResponse): any => ({
    ...obj,
  });
}

export interface DescribeParameterGroupsRequest {
  /**
   * <p>The names of the parameter groups.</p>
   */
  ParameterGroupNames?: string[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeParameterGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeParameterGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribeParameterGroupsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of parameter groups.  Each element in the array represents one parameter group.</p>
   */
  ParameterGroups?: ParameterGroup[];
}

export namespace DescribeParameterGroupsResponse {
  export const filterSensitiveLog = (obj: DescribeParameterGroupsResponse): any => ({
    ...obj,
  });
}

export interface DescribeParametersRequest {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>How the parameter is defined. For example, <code>system</code> denotes a
   *             system-defined parameter.</p>
   */
  Source?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeParametersRequest {
  export const filterSensitiveLog = (obj: DescribeParametersRequest): any => ({
    ...obj,
  });
}

export interface DescribeParametersResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of parameters within a parameter group.  Each element in the list represents one parameter.</p>
   */
  Parameters?: Parameter[];
}

export namespace DescribeParametersResponse {
  export const filterSensitiveLog = (obj: DescribeParametersResponse): any => ({
    ...obj,
  });
}

export interface DescribeSubnetGroupsRequest {
  /**
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupNames?: string[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *             <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeSubnetGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeSubnetGroupsRequest): any => ({
    ...obj,
  });
}

export interface DescribeSubnetGroupsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of subnet groups.  Each element in the array represents a single subnet group.</p>
   */
  SubnetGroups?: SubnetGroup[];
}

export namespace DescribeSubnetGroupsResponse {
  export const filterSensitiveLog = (obj: DescribeSubnetGroupsResponse): any => ({
    ...obj,
  });
}

export interface IncreaseReplicationFactorRequest {
  /**
   * <p>The name of the DAX cluster that will receive additional nodes.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The new number of nodes for the DAX cluster.</p>
   */
  NewReplicationFactor: number | undefined;

  /**
   * <p>The Availability Zones (AZs) in which the cluster nodes will be created. All nodes
   *             belonging to the cluster are placed in these Availability Zones. Use this parameter if you want
   *             to distribute the nodes across multiple AZs.</p>
   */
  AvailabilityZones?: string[];
}

export namespace IncreaseReplicationFactorRequest {
  export const filterSensitiveLog = (obj: IncreaseReplicationFactorRequest): any => ({
    ...obj,
  });
}

export interface IncreaseReplicationFactorResponse {
  /**
   * <p>A description of the DAX cluster. with its new replication factor.</p>
   */
  Cluster?: Cluster;
}

export namespace IncreaseReplicationFactorResponse {
  export const filterSensitiveLog = (obj: IncreaseReplicationFactorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
 */
export interface InvalidARNFault extends __SmithyException, $MetadataBearer {
  name: "InvalidARNFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidARNFault {
  export const filterSensitiveLog = (obj: InvalidARNFault): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The name of the DAX resource to which the tags belong.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token.</p>
   */
  NextToken?: string;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>A list of tags currently associated with the DAX cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If this value is present, there are additional results to be displayed.  To retrieve them, call
   *             <code>ListTags</code> again, with <code>NextToken</code> set to this value.</p>
   */
  NextToken?: string;
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface RebootNodeRequest {
  /**
   * <p>The name of the DAX cluster containing the node to be rebooted.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>The system-assigned ID of the node to be rebooted.</p>
   */
  NodeId: string | undefined;
}

export namespace RebootNodeRequest {
  export const filterSensitiveLog = (obj: RebootNodeRequest): any => ({
    ...obj,
  });
}

export interface RebootNodeResponse {
  /**
   * <p>A description of the DAX cluster after a node has been rebooted.</p>
   */
  Cluster?: Cluster;
}

export namespace RebootNodeResponse {
  export const filterSensitiveLog = (obj: RebootNodeResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The name of the DAX resource to which tags should be added.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the DAX resource. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {
  /**
   * <p>The list of tags that are associated with the DAX resource.</p>
   */
  Tags?: Tag[];
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The tag does not exist.</p>
 */
export interface TagNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "TagNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace TagNotFoundFault {
  export const filterSensitiveLog = (obj: TagNotFoundFault): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The name of the DAX resource from which the tags should be removed.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of tag keys. If the DAX cluster has any tags with these keys, then the tags are removed from the cluster.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {
  /**
   * <p>The tag keys that have been removed from the cluster.</p>
   */
  Tags?: Tag[];
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateClusterRequest {
  /**
   * <p>The name of the DAX cluster to be modified.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>A description of the changes being made to the cluster.</p>
   */
  Description?: string;

  /**
   * <p>A range of time when maintenance of DAX cluster software will be performed. For
   *             example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than
   *             30 minutes, and is performed automatically within the maintenance window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   */
  NotificationTopicArn?: string;

  /**
   * <p>The current state of the topic.</p>
   */
  NotificationTopicStatus?: string;

  /**
   * <p>The name of a parameter group for this cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>A list of user-specified security group IDs to be assigned to each node in the DAX cluster.  If this parameter is not
   *             specified, DAX assigns the default VPC security group to each node.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace UpdateClusterRequest {
  export const filterSensitiveLog = (obj: UpdateClusterRequest): any => ({
    ...obj,
  });
}

export interface UpdateClusterResponse {
  /**
   * <p>A description of the DAX cluster, after it has been modified.</p>
   */
  Cluster?: Cluster;
}

export namespace UpdateClusterResponse {
  export const filterSensitiveLog = (obj: UpdateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An individual DAX parameter.</p>
 */
export interface ParameterNameValue {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;
}

export namespace ParameterNameValue {
  export const filterSensitiveLog = (obj: ParameterNameValue): any => ({
    ...obj,
  });
}

export interface UpdateParameterGroupRequest {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of name-value pairs for the parameters in the group. Each element in the
   *             array represents a single parameter.</p>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

export namespace UpdateParameterGroupRequest {
  export const filterSensitiveLog = (obj: UpdateParameterGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateParameterGroupResponse {
  /**
   * <p>The parameter group that has been modified.</p>
   */
  ParameterGroup?: ParameterGroup;
}

export namespace UpdateParameterGroupResponse {
  export const filterSensitiveLog = (obj: UpdateParameterGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The requested subnet is being used by another subnet group.</p>
 */
export interface SubnetInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetInUse {
  export const filterSensitiveLog = (obj: SubnetInUse): any => ({
    ...obj,
  });
}

export interface UpdateSubnetGroupRequest {
  /**
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description of the subnet group.</p>
   */
  Description?: string;

  /**
   * <p>A list of subnet IDs in the subnet group.</p>
   */
  SubnetIds?: string[];
}

export namespace UpdateSubnetGroupRequest {
  export const filterSensitiveLog = (obj: UpdateSubnetGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateSubnetGroupResponse {
  /**
   * <p>The subnet group that has been modified.</p>
   */
  SubnetGroup?: SubnetGroup;
}

export namespace UpdateSubnetGroupResponse {
  export const filterSensitiveLog = (obj: UpdateSubnetGroupResponse): any => ({
    ...obj,
  });
}
