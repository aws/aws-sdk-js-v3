// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { DAXServiceException as __BaseException } from "./DAXServiceException";

/**
 * <p>You already have a DAX cluster with the given identifier.</p>
 */
export class ClusterAlreadyExistsFault extends __BaseException {
  readonly name: "ClusterAlreadyExistsFault" = "ClusterAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You have attempted to exceed the maximum number of DAX clusters for your AWS
 *             account.</p>
 */
export class ClusterQuotaForCustomerExceededFault extends __BaseException {
  readonly name: "ClusterQuotaForCustomerExceededFault" = "ClusterQuotaForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "ClusterQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterQuotaForCustomerExceededFault.prototype);
  }
}

export enum ClusterEndpointEncryptionType {
  NONE = "NONE",
  TLS = "TLS",
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

  /**
   * <p>The type of encryption the cluster's endpoint should support. Values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NONE</code> for no encryption</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TLS</code> for Transport Layer Security</p>
   *             </li>
   *          </ul>
   */
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType | string;
}

/**
 * <p>Represents the information required for client programs to connect to the
 *             endpoint for a DAX cluster.</p>
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

  /**
   * <p>The URL that applications should use to connect to the endpoint. The default
   *             ports are 8111 for the "dax" protocol and 9111 for the "daxs" protocol.</p>
   */
  URL?: string;
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
   * <p>The current state of the topic. A value of “active” means that notifications will
   *         be sent to the topic. A value of “inactive” means that notifications will not be sent to the
   *         topic.</p>
   */
  TopicStatus?: string;
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
   * <p>The endpoint for this DAX cluster, consisting of a DNS name, a port number,
   *              and a URL. Applications should use the URL to configure the DAX client to find
   *              their cluster.</p>
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

  /**
   * <p>The type of encryption supported by the cluster's endpoint. Values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NONE</code> for no encryption</p>
   *                 <p>
   *                   <code>TLS</code> for Transport Layer Security</p>
   *             </li>
   *          </ul>
   */
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType | string;
}

export interface CreateClusterResponse {
  /**
   * <p>A description of the DAX cluster that you have created.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>There are not enough system resources to create the cluster you requested (or to
 *             resize an already-existing cluster). </p>
 */
export class InsufficientClusterCapacityFault extends __BaseException {
  readonly name: "InsufficientClusterCapacityFault" = "InsufficientClusterCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientClusterCapacityFault.prototype);
  }
}

/**
 * <p>The requested DAX cluster is not in the <i>available</i>
 *             state.</p>
 */
export class InvalidClusterStateFault extends __BaseException {
  readonly name: "InvalidClusterStateFault" = "InvalidClusterStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterStateFault, __BaseException>) {
    super({
      name: "InvalidClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterStateFault.prototype);
  }
}

/**
 * <p>Two or more incompatible parameters were specified.</p>
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * <p>One or more parameters in a parameter group are in an invalid state.</p>
 */
export class InvalidParameterGroupStateFault extends __BaseException {
  readonly name: "InvalidParameterGroupStateFault" = "InvalidParameterGroupStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterGroupStateFault.prototype);
  }
}

/**
 * <p>The value for a parameter is invalid.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * <p>The VPC network is in an invalid state.</p>
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  readonly name: "InvalidVPCNetworkStateFault" = "InvalidVPCNetworkStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVPCNetworkStateFault, __BaseException>) {
    super({
      name: "InvalidVPCNetworkStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVPCNetworkStateFault.prototype);
  }
}

/**
 * <p>You have attempted to exceed the maximum number of nodes for a DAX
 *             cluster.</p>
 */
export class NodeQuotaForClusterExceededFault extends __BaseException {
  readonly name: "NodeQuotaForClusterExceededFault" = "NodeQuotaForClusterExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeQuotaForClusterExceededFault, __BaseException>) {
    super({
      name: "NodeQuotaForClusterExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeQuotaForClusterExceededFault.prototype);
  }
}

/**
 * <p>You have attempted to exceed the maximum number of nodes for your AWS
 *             account.</p>
 */
export class NodeQuotaForCustomerExceededFault extends __BaseException {
  readonly name: "NodeQuotaForCustomerExceededFault" = "NodeQuotaForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "NodeQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * <p>The specified parameter group does not exist.</p>
 */
export class ParameterGroupNotFoundFault extends __BaseException {
  readonly name: "ParameterGroupNotFoundFault" = "ParameterGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "ParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The specified service linked role (SLR) was not found.</p>
 */
export class ServiceLinkedRoleNotFoundFault extends __BaseException {
  readonly name: "ServiceLinkedRoleNotFoundFault" = "ServiceLinkedRoleNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLinkedRoleNotFoundFault, __BaseException>) {
    super({
      name: "ServiceLinkedRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLinkedRoleNotFoundFault.prototype);
  }
}

/**
 * <p>You have reached the maximum number of x509 certificates that can be created for
 *             encrypted clusters in a 30 day period. Contact AWS customer support to discuss options
 *             for continuing to create encrypted clusters.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
 */
export class SubnetGroupNotFoundFault extends __BaseException {
  readonly name: "SubnetGroupNotFoundFault" = "SubnetGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "SubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupNotFoundFault.prototype);
  }
}

/**
 * <p>You have exceeded the maximum number of tags for this DAX cluster.</p>
 */
export class TagQuotaPerResourceExceeded extends __BaseException {
  readonly name: "TagQuotaPerResourceExceeded" = "TagQuotaPerResourceExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagQuotaPerResourceExceeded, __BaseException>) {
    super({
      name: "TagQuotaPerResourceExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagQuotaPerResourceExceeded.prototype);
  }
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

export interface CreateParameterGroupResponse {
  /**
   * <p>Represents the output of a <i>CreateParameterGroup</i>
   *             action.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * <p>The specified parameter group already exists.</p>
 */
export class ParameterGroupAlreadyExistsFault extends __BaseException {
  readonly name: "ParameterGroupAlreadyExistsFault" = "ParameterGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You have attempted to exceed the maximum number of parameter groups.</p>
 */
export class ParameterGroupQuotaExceededFault extends __BaseException {
  readonly name: "ParameterGroupQuotaExceededFault" = "ParameterGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupQuotaExceededFault.prototype);
  }
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

export interface CreateSubnetGroupResponse {
  /**
   * <p>Represents the output of a <i>CreateSubnetGroup</i>
   *             operation.</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * <p>An invalid subnet identifier was specified.</p>
 */
export class InvalidSubnet extends __BaseException {
  readonly name: "InvalidSubnet" = "InvalidSubnet";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnet, __BaseException>) {
    super({
      name: "InvalidSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnet.prototype);
  }
}

/**
 * <p>The specified subnet group already exists.</p>
 */
export class SubnetGroupAlreadyExistsFault extends __BaseException {
  readonly name: "SubnetGroupAlreadyExistsFault" = "SubnetGroupAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "SubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 */
export class SubnetGroupQuotaExceededFault extends __BaseException {
  readonly name: "SubnetGroupQuotaExceededFault" = "SubnetGroupQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "SubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 */
export class SubnetQuotaExceededFault extends __BaseException {
  readonly name: "SubnetQuotaExceededFault" = "SubnetQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "SubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetQuotaExceededFault.prototype);
  }
}

/**
 * <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
 */
export class ClusterNotFoundFault extends __BaseException {
  readonly name: "ClusterNotFoundFault" = "ClusterNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterNotFoundFault, __BaseException>) {
    super({
      name: "ClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterNotFoundFault.prototype);
  }
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

export interface DecreaseReplicationFactorResponse {
  /**
   * <p>A description of the DAX cluster, after you have decreased its replication
   *             factor.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>None of the nodes in the cluster have the given node ID.</p>
 */
export class NodeNotFoundFault extends __BaseException {
  readonly name: "NodeNotFoundFault" = "NodeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeNotFoundFault, __BaseException>) {
    super({
      name: "NodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeNotFoundFault.prototype);
  }
}

export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to be deleted.</p>
   */
  ClusterName: string | undefined;
}

export interface DeleteClusterResponse {
  /**
   * <p>A description of the DAX cluster that is being deleted.</p>
   */
  Cluster?: Cluster;
}

export interface DeleteParameterGroupRequest {
  /**
   * <p>The name of the parameter group to delete.</p>
   */
  ParameterGroupName: string | undefined;
}

export interface DeleteParameterGroupResponse {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the parameter
   *             group).</p>
   */
  DeletionMessage?: string;
}

export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete.</p>
   */
  SubnetGroupName: string | undefined;
}

export interface DeleteSubnetGroupResponse {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the subnet
   *             group).</p>
   */
  DeletionMessage?: string;
}

/**
 * <p>The specified subnet group is currently in use.</p>
 */
export class SubnetGroupInUseFault extends __BaseException {
  readonly name: "SubnetGroupInUseFault" = "SubnetGroupInUseFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupInUseFault, __BaseException>) {
    super({
      name: "SubnetGroupInUseFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupInUseFault.prototype);
  }
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

export interface IncreaseReplicationFactorResponse {
  /**
   * <p>A description of the DAX cluster. with its new replication factor.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
 */
export class InvalidARNFault extends __BaseException {
  readonly name: "InvalidARNFault" = "InvalidARNFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidARNFault, __BaseException>) {
    super({
      name: "InvalidARNFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidARNFault.prototype);
  }
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

export interface RebootNodeResponse {
  /**
   * <p>A description of the DAX cluster after a node has been rebooted.</p>
   */
  Cluster?: Cluster;
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

export interface TagResourceResponse {
  /**
   * <p>The list of tags that are associated with the DAX resource.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The tag does not exist.</p>
 */
export class TagNotFoundFault extends __BaseException {
  readonly name: "TagNotFoundFault" = "TagNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagNotFoundFault, __BaseException>) {
    super({
      name: "TagNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagNotFoundFault.prototype);
  }
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

export interface UntagResourceResponse {
  /**
   * <p>The tag keys that have been removed from the cluster.</p>
   */
  Tags?: Tag[];
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
   * <p>The current state of the topic. A value of “active” means that notifications will
   *         be sent to the topic. A value of “inactive” means that notifications will not be sent to the
   *         topic.</p>
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

export interface UpdateClusterResponse {
  /**
   * <p>A description of the DAX cluster, after it has been modified.</p>
   */
  Cluster?: Cluster;
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

export interface UpdateParameterGroupRequest {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of name-value pairs for the parameters in the group. Each element in the
   *             array represents a single parameter.</p>
   *             <note>
   *             <p>
   *                <code>record-ttl-millis</code> and <code>query-ttl-millis</code> are the only supported parameter names. For more details, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl">Configuring TTL Settings</a>.</p>
   *         </note>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

export interface UpdateParameterGroupResponse {
  /**
   * <p>The parameter group that has been modified.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * <p>The requested subnet is being used by another subnet group.</p>
 */
export class SubnetInUse extends __BaseException {
  readonly name: "SubnetInUse" = "SubnetInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetInUse, __BaseException>) {
    super({
      name: "SubnetInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetInUse.prototype);
  }
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

export interface UpdateSubnetGroupResponse {
  /**
   * <p>The subnet group that has been modified.</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * @internal
 */
export const SSESpecificationFilterSensitiveLog = (obj: SSESpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterRequestFilterSensitiveLog = (obj: CreateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeFilterSensitiveLog = (obj: Node): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationConfigurationFilterSensitiveLog = (obj: NotificationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterGroupStatusFilterSensitiveLog = (obj: ParameterGroupStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupMembershipFilterSensitiveLog = (obj: SecurityGroupMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSEDescriptionFilterSensitiveLog = (obj: SSEDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterResponseFilterSensitiveLog = (obj: CreateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateParameterGroupRequestFilterSensitiveLog = (obj: CreateParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterGroupFilterSensitiveLog = (obj: ParameterGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateParameterGroupResponseFilterSensitiveLog = (obj: CreateParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubnetGroupRequestFilterSensitiveLog = (obj: CreateSubnetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetFilterSensitiveLog = (obj: Subnet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetGroupFilterSensitiveLog = (obj: SubnetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSubnetGroupResponseFilterSensitiveLog = (obj: CreateSubnetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecreaseReplicationFactorRequestFilterSensitiveLog = (obj: DecreaseReplicationFactorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecreaseReplicationFactorResponseFilterSensitiveLog = (obj: DecreaseReplicationFactorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterRequestFilterSensitiveLog = (obj: DeleteClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterResponseFilterSensitiveLog = (obj: DeleteClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParameterGroupRequestFilterSensitiveLog = (obj: DeleteParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteParameterGroupResponseFilterSensitiveLog = (obj: DeleteParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetGroupRequestFilterSensitiveLog = (obj: DeleteSubnetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSubnetGroupResponseFilterSensitiveLog = (obj: DeleteSubnetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClustersRequestFilterSensitiveLog = (obj: DescribeClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClustersResponseFilterSensitiveLog = (obj: DescribeClustersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDefaultParametersRequestFilterSensitiveLog = (obj: DescribeDefaultParametersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeTypeSpecificValueFilterSensitiveLog = (obj: NodeTypeSpecificValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterFilterSensitiveLog = (obj: Parameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDefaultParametersResponseFilterSensitiveLog = (obj: DescribeDefaultParametersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsRequestFilterSensitiveLog = (obj: DescribeEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsResponseFilterSensitiveLog = (obj: DescribeEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParameterGroupsRequestFilterSensitiveLog = (obj: DescribeParameterGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParameterGroupsResponseFilterSensitiveLog = (obj: DescribeParameterGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParametersRequestFilterSensitiveLog = (obj: DescribeParametersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeParametersResponseFilterSensitiveLog = (obj: DescribeParametersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubnetGroupsRequestFilterSensitiveLog = (obj: DescribeSubnetGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubnetGroupsResponseFilterSensitiveLog = (obj: DescribeSubnetGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncreaseReplicationFactorRequestFilterSensitiveLog = (obj: IncreaseReplicationFactorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IncreaseReplicationFactorResponseFilterSensitiveLog = (obj: IncreaseReplicationFactorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsRequestFilterSensitiveLog = (obj: ListTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsResponseFilterSensitiveLog = (obj: ListTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootNodeRequestFilterSensitiveLog = (obj: RebootNodeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootNodeResponseFilterSensitiveLog = (obj: RebootNodeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterRequestFilterSensitiveLog = (obj: UpdateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterResponseFilterSensitiveLog = (obj: UpdateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterNameValueFilterSensitiveLog = (obj: ParameterNameValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateParameterGroupRequestFilterSensitiveLog = (obj: UpdateParameterGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateParameterGroupResponseFilterSensitiveLog = (obj: UpdateParameterGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubnetGroupRequestFilterSensitiveLog = (obj: UpdateSubnetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSubnetGroupResponseFilterSensitiveLog = (obj: UpdateSubnetGroupResponse): any => ({
  ...obj,
});
