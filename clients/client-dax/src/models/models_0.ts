// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DAXServiceException as __BaseException } from "./DAXServiceException";

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ClusterEndpointEncryptionType = {
  NONE: "NONE",
  TLS: "TLS",
} as const;

/**
 * @public
 */
export type ClusterEndpointEncryptionType =
  (typeof ClusterEndpointEncryptionType)[keyof typeof ClusterEndpointEncryptionType];

/**
 * @public
 * <p>Represents the settings used to enable server-side encryption.</p>
 */
export interface SSESpecification {
  /**
   * @public
   * <p>Indicates whether server-side encryption is enabled (true) or disabled (false) on the cluster.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>A description of a tag.  Every tag is a key-value pair. You can add up to 50 tags to a single
 *             DAX cluster.</p>
 *         <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code>
 *             prefix, which the user cannot assign. AWS-assigned tag names do not count towards the
 *             tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p>
 *         <p>You cannot backdate the application of a tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key for the tag.  Tag keys are case sensitive. Every DAX cluster can only have
   *             one tag with the same key. If you try to add an existing tag (same key), the
   *             existing tag value will be updated to the new value.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the tag. Tag values are case-sensitive and can be null. </p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * @public
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
   * @public
   * <p>The compute and memory capacity of the nodes in the cluster.</p>
   */
  NodeType: string | undefined;

  /**
   * @public
   * <p>A description of the cluster.</p>
   */
  Description?: string;

  /**
   * @public
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
   * @public
   * <p>The Availability Zones (AZs) in which the cluster nodes will reside after the cluster
   *          has been created or updated. If provided, the length of this list must equal the <code>ReplicationFactor</code> parameter.
   *          If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The name of the subnet group to be used for the replication group.</p>
   *         <important>
   *             <p>DAX clusters can only run in an Amazon VPC environment. All of the subnets
   *                 that you specify in a subnet group must exist in the same VPC.</p>
   *         </important>
   */
  SubnetGroupName?: string;

  /**
   * @public
   * <p>A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the
   *              security group ID is system-generated.)</p>
   *         <p>If this parameter is not specified, DAX assigns the default VPC security group to
   *             each node.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will
   *             be sent.</p>
   *         <note>
   *             <p>The Amazon SNS topic owner must be same as the DAX cluster owner.</p>
   *         </note>
   */
  NotificationTopicArn?: string;

  /**
   * @public
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX
   *             will assume this role and use the role's permissions to access DynamoDB on your
   *             behalf.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>The parameter group to be associated with the DAX cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>A set of tags to associate with the DAX cluster.  </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Represents the settings used to enable server-side encryption on the cluster.</p>
   */
  SSESpecification?: SSESpecification;

  /**
   * @public
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
 * @public
 * <p>Represents the information required for client programs to connect to the
 *             endpoint for a DAX cluster.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>The DNS hostname of the endpoint.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The port number that applications should use to connect to the endpoint.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The URL that applications should use to connect to the endpoint. The default
   *             ports are 8111 for the "dax" protocol and 9111 for the "daxs" protocol.</p>
   */
  URL?: string;
}

/**
 * @public
 * <p>Represents an individual node within a DAX cluster.</p>
 */
export interface Node {
  /**
   * @public
   * <p>A system-generated identifier for the node.</p>
   */
  NodeId?: string;

  /**
   * @public
   * <p>The endpoint for the node, consisting of a DNS name and a port number. Client
   *             applications can connect directly to a node endpoint, if desired (as an alternative to
   *             allowing DAX client software to intelligently route requests and responses to nodes in
   *             the DAX cluster.</p>
   */
  Endpoint?: Endpoint;

  /**
   * @public
   * <p>The date and time (in UNIX epoch format) when the node was launched.</p>
   */
  NodeCreateTime?: Date;

  /**
   * @public
   * <p>The Availability Zone (AZ) in which the node has been deployed.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The current status of the node. For example: <code>available</code>.</p>
   */
  NodeStatus?: string;

  /**
   * @public
   * <p>The status of the parameter group associated with this node. For example,
   *                 <code>in-sync</code>.</p>
   */
  ParameterGroupStatus?: string;
}

/**
 * @public
 * <p>Describes a notification topic and its status. Notification topics are used for
 *             publishing DAX events to subscribers using Amazon Simple Notification Service
 *             (SNS).</p>
 */
export interface NotificationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the topic. </p>
   */
  TopicArn?: string;

  /**
   * @public
   * <p>The current state of the topic. A value of “active” means that notifications will
   *         be sent to the topic. A value of “inactive” means that notifications will not be sent to the
   *         topic.</p>
   */
  TopicStatus?: string;
}

/**
 * @public
 * <p>The status of a parameter group.</p>
 */
export interface ParameterGroupStatus {
  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>The status of parameter updates. </p>
   */
  ParameterApplyStatus?: string;

  /**
   * @public
   * <p>The node IDs of one or more nodes to be rebooted.</p>
   */
  NodeIdsToReboot?: string[];
}

/**
 * @public
 * <p>An individual VPC security group and its status.</p>
 */
export interface SecurityGroupMembership {
  /**
   * @public
   * <p>The unique ID for this security group.</p>
   */
  SecurityGroupIdentifier?: string;

  /**
   * @public
   * <p>The status of this security group.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export type SSEStatus = "DISABLED" | "DISABLING" | "ENABLED" | "ENABLING";

/**
 * @public
 * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
 */
export interface SSEDescription {
  /**
   * @public
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
 * @public
 * <p>Contains all of the attributes of a specific DAX cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The name of the DAX cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The description of the cluster.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *         </p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The total number of nodes in the cluster.</p>
   */
  TotalNodes?: number;

  /**
   * @public
   * <p>The number of nodes in the cluster that are active (i.e., capable of serving
   *             requests).</p>
   */
  ActiveNodes?: number;

  /**
   * @public
   * <p>The node type for the nodes in the cluster. (All nodes in a DAX cluster are of
   *             the same type.)</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The current status of the cluster.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The endpoint for this DAX cluster, consisting of a DNS name, a port number,
   *              and a URL. Applications should use the URL to configure the DAX client to find
   *              their cluster.</p>
   */
  ClusterDiscoveryEndpoint?: Endpoint;

  /**
   * @public
   * <p>A list of nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: string[];

  /**
   * @public
   * <p>A list of nodes that are currently in the cluster.</p>
   */
  Nodes?: Node[];

  /**
   * @public
   * <p>A range of time when maintenance of DAX cluster software will be performed. For
   *             example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than
   *             30 minutes, and is performed automatically within the maintenance window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Describes a notification topic and its status. Notification topics are used for
   *             publishing DAX events to subscribers using Amazon Simple Notification Service
   *             (SNS).</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * @public
   * <p>The subnet group where the DAX cluster is running.</p>
   */
  SubnetGroup?: string;

  /**
   * @public
   * <p>A list of security groups, and the status of each, for the nodes in the cluster.</p>
   */
  SecurityGroups?: SecurityGroupMembership[];

  /**
   * @public
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX
   *             will assume this role and use the role's permissions to access DynamoDB on your
   *             behalf.</p>
   */
  IamRoleArn?: string;

  /**
   * @public
   * <p>The parameter group being used by nodes in the cluster.</p>
   */
  ParameterGroup?: ParameterGroupStatus;

  /**
   * @public
   * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
   */
  SSEDescription?: SSEDescription;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * @public
   * <p>A description of the DAX cluster that you have created.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group to apply to all of the clusters in this replication
   *             group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>A description of the parameter group.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>A named set of parameters that are applied to all of the nodes in a DAX
 *             cluster.</p>
 */
export interface ParameterGroup {
  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>A description of the parameter group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * @public
   * <p>Represents the output of a <i>CreateParameterGroup</i>
   *             action.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateSubnetGroupRequest {
  /**
   * @public
   * <p>A name for the subnet group. This value is stored as a lowercase string. </p>
   */
  SubnetGroupName: string | undefined;

  /**
   * @public
   * <p>A description for the subnet group</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 * <p>Represents the subnet associated with a DAX cluster. This parameter refers to
 *             subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with
 *             DAX.</p>
 */
export interface Subnet {
  /**
   * @public
   * <p>The system-assigned identifier for the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * @public
   * <p>The Availability Zone (AZ) for the subnet.</p>
   */
  SubnetAvailabilityZone?: string;
}

/**
 * @public
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
   * @public
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName?: string;

  /**
   * @public
   * <p>The description of the subnet group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>A list of subnets associated with the subnet group. </p>
   */
  Subnets?: Subnet[];
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * @public
   * <p>Represents the output of a <i>CreateSubnetGroup</i>
   *             operation.</p>
   */
  SubnetGroup?: SubnetGroup;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface DecreaseReplicationFactorRequest {
  /**
   * @public
   * <p>The name of the DAX cluster from which you want to remove nodes.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The new number of nodes for the DAX cluster.</p>
   */
  NewReplicationFactor: number | undefined;

  /**
   * @public
   * <p>The Availability Zone(s) from which to remove nodes.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The unique identifiers of the nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: string[];
}

/**
 * @public
 */
export interface DecreaseReplicationFactorResponse {
  /**
   * @public
   * <p>A description of the DAX cluster, after you have decreased its replication
   *             factor.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * @public
   * <p>The name of the cluster to be deleted.</p>
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * @public
   * <p>A description of the DAX cluster that is being deleted.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface DeleteParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group to delete.</p>
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupResponse {
  /**
   * @public
   * <p>A user-specified message for this action (i.e., a reason for deleting the parameter
   *             group).</p>
   */
  DeletionMessage?: string;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * @public
   * <p>The name of the subnet group to delete.</p>
   */
  SubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupResponse {
  /**
   * @public
   * <p>A user-specified message for this action (i.e., a reason for deleting the subnet
   *             group).</p>
   */
  DeletionMessage?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeClustersRequest {
  /**
   * @public
   * <p>The names of the DAX clusters being described.</p>
   */
  ClusterNames?: string[];

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The descriptions of your DAX clusters, in response to a
   *             <i>DescribeClusters</i> request.</p>
   */
  Clusters?: Cluster[];
}

/**
 * @public
 */
export interface DescribeDefaultParametersRequest {
  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export type ChangeType = "IMMEDIATE" | "REQUIRES_REBOOT";

/**
 * @public
 */
export type IsModifiable = "CONDITIONAL" | "FALSE" | "TRUE";

/**
 * @public
 * <p>Represents a parameter value that is applicable to a particular node
 *             type.</p>
 */
export interface NodeTypeSpecificValue {
  /**
   * @public
   * <p>A node type to which the parameter value applies.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The parameter value for this node type.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export type ParameterType = "DEFAULT" | "NODE_TYPE_SPECIFIC";

/**
 * @public
 * <p>Describes an individual setting that controls some aspect of DAX
 *             behavior.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>Determines whether the parameter can be applied to any nodes, or only nodes of a
   *             particular type.</p>
   */
  ParameterType?: ParameterType | string;

  /**
   * @public
   * <p>The value for the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * @public
   * <p>A list of node types, and specific parameter values for each node.</p>
   */
  NodeTypeSpecificValues?: NodeTypeSpecificValue[];

  /**
   * @public
   * <p>A description of the parameter</p>
   */
  Description?: string;

  /**
   * @public
   * <p>How the parameter is defined. For example, <code>system</code> denotes a
   *             system-defined parameter.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The data type of the parameter. For example, <code>integer</code>:</p>
   */
  DataType?: string;

  /**
   * @public
   * <p>A range of values within which the parameter can be set.</p>
   */
  AllowedValues?: string;

  /**
   * @public
   * <p>Whether the customer is allowed to modify the parameter.</p>
   */
  IsModifiable?: IsModifiable | string;

  /**
   * @public
   * <p>The conditions under which changes to this parameter can be applied. For example,
   *                 <code>requires-reboot</code> indicates that a new value for this parameter will only
   *             take effect if a node is rebooted.</p>
   */
  ChangeType?: ChangeType | string;
}

/**
 * @public
 */
export interface DescribeDefaultParametersResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of parameters.  Each element in the list represents one parameter.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export type SourceType = "CLUSTER" | "PARAMETER_GROUP" | "SUBNET_GROUP";

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * @public
   * <p>The identifier of the event source for which events will be returned. If not
   *             specified, then all sources are included in the response.</p>
   */
  SourceName?: string;

  /**
   * @public
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * @public
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The number of minutes' worth of events to retrieve.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a single occurrence of something interesting within the system. Some
 *             examples of events are creating a DAX cluster, adding or removing a node, or rebooting
 *             a node.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The source of the event. For example, if the event occurred at the node level, the
   *             source would be the node ID.</p>
   */
  SourceName?: string;

  /**
   * @public
   * <p>Specifies the origin of this event - a cluster, a parameter group, a node ID,
   *             etc.</p>
   */
  SourceType?: SourceType | string;

  /**
   * @public
   * <p>A user-defined message associated with the event.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of events.  Each element in the array represents one event.</p>
   */
  Events?: Event[];
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * @public
   * <p>The names of the parameter groups.</p>
   */
  ParameterGroupNames?: string[];

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of parameter groups.  Each element in the array represents one parameter group.</p>
   */
  ParameterGroups?: ParameterGroup[];
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>How the parameter is defined. For example, <code>system</code> denotes a
   *             system-defined parameter.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *         <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of parameters within a parameter group.  Each element in the list represents one parameter.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * @public
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupNames?: string[];

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *             <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * @public
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of subnet groups.  Each element in the array represents a single subnet group.</p>
   */
  SubnetGroups?: SubnetGroup[];
}

/**
 * @public
 */
export interface IncreaseReplicationFactorRequest {
  /**
   * @public
   * <p>The name of the DAX cluster that will receive additional nodes.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The new number of nodes for the DAX cluster.</p>
   */
  NewReplicationFactor: number | undefined;

  /**
   * @public
   * <p>The Availability Zones (AZs) in which the cluster nodes will be created. All nodes
   *             belonging to the cluster are placed in these Availability Zones. Use this parameter if you want
   *             to distribute the nodes across multiple AZs.</p>
   */
  AvailabilityZones?: string[];
}

/**
 * @public
 */
export interface IncreaseReplicationFactorResponse {
  /**
   * @public
   * <p>A description of the DAX cluster. with its new replication factor.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
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

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>The name of the DAX resource to which the tags belong.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>A list of tags currently associated with the DAX cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>If this value is present, there are additional results to be displayed.  To retrieve them, call
   *             <code>ListTags</code> again, with <code>NextToken</code> set to this value.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RebootNodeRequest {
  /**
   * @public
   * <p>The name of the DAX cluster containing the node to be rebooted.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>The system-assigned ID of the node to be rebooted.</p>
   */
  NodeId: string | undefined;
}

/**
 * @public
 */
export interface RebootNodeResponse {
  /**
   * @public
   * <p>A description of the DAX cluster after a node has been rebooted.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The name of the DAX resource to which tags should be added.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the DAX resource. </p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * @public
   * <p>The list of tags that are associated with the DAX resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
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

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The name of the DAX resource from which the tags should be removed.</p>
   */
  ResourceName: string | undefined;

  /**
   * @public
   * <p>A list of tag keys. If the DAX cluster has any tags with these keys, then the tags are removed from the cluster.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * @public
   * <p>The tag keys that have been removed from the cluster.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * @public
   * <p>The name of the DAX cluster to be modified.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>A description of the changes being made to the cluster.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A range of time when maintenance of DAX cluster software will be performed. For
   *             example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than
   *             30 minutes, and is performed automatically within the maintenance window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   */
  NotificationTopicArn?: string;

  /**
   * @public
   * <p>The current state of the topic. A value of “active” means that notifications will
   *         be sent to the topic. A value of “inactive” means that notifications will not be sent to the
   *         topic.</p>
   */
  NotificationTopicStatus?: string;

  /**
   * @public
   * <p>The name of a parameter group for this cluster.</p>
   */
  ParameterGroupName?: string;

  /**
   * @public
   * <p>A list of user-specified security group IDs to be assigned to each node in the DAX cluster.  If this parameter is not
   *             specified, DAX assigns the default VPC security group to each node.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * @public
   * <p>A description of the DAX cluster, after it has been modified.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 * <p>An individual DAX parameter.</p>
 */
export interface ParameterNameValue {
  /**
   * @public
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * @public
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;
}

/**
 * @public
 */
export interface UpdateParameterGroupRequest {
  /**
   * @public
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * @public
   * <p>An array of name-value pairs for the parameters in the group. Each element in the
   *             array represents a single parameter.</p>
   *             <note>
   *             <p>
   *                <code>record-ttl-millis</code> and <code>query-ttl-millis</code> are the only supported parameter names. For more details, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl">Configuring TTL Settings</a>.</p>
   *         </note>
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupResponse {
  /**
   * @public
   * <p>The parameter group that has been modified.</p>
   */
  ParameterGroup?: ParameterGroup;
}

/**
 * @public
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

/**
 * @public
 */
export interface UpdateSubnetGroupRequest {
  /**
   * @public
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName: string | undefined;

  /**
   * @public
   * <p>A description of the subnet group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of subnet IDs in the subnet group.</p>
   */
  SubnetIds?: string[];
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * @public
   * <p>The subnet group that has been modified.</p>
   */
  SubnetGroup?: SubnetGroup;
}
