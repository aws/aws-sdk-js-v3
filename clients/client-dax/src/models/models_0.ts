// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DAXServiceException as __BaseException } from "./DAXServiceException";

/**
 * <p>You already have a DAX cluster with the given identifier.</p>
 * @public
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
 * <p>You have attempted to exceed the maximum number of DAX clusters for
 *             your Amazon Web Services account.</p>
 * @public
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
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "dual_stack",
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;

/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * <p>Represents the settings used to enable server-side encryption.</p>
 * @public
 */
export interface SSESpecification {
  /**
   * <p>Indicates whether server-side encryption is enabled (true) or disabled (false) on
   *             the cluster.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to
 *             a single DAX cluster.</p>
 *          <p>Amazon Web Services-assigned tag names and values are automatically assigned the
 *                 <code>aws:</code> prefix, which the user cannot assign. Amazon Web Services-assigned
 *             tag names do not count towards the tag limit of 50. User-assigned tag names have the
 *             prefix <code>user:</code>.</p>
 *          <p>You cannot backdate the application of a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the tag. Tag keys are case sensitive. Every DAX cluster
   *             can only have one tag with the same key. If you try to add an existing tag (same key),
   *             the existing tag value will be updated to the new value.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case-sensitive and can be null.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>The cluster identifier. This parameter is stored as a lowercase string.</p>
   *          <p>
   *             <b>Constraints:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>A name must contain from 1 to 20 alphanumeric characters or
   *                     hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>A name cannot end with a hyphen or contain two consecutive
   *                     hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The compute and memory capacity of the nodes in the cluster.</p>
   * @public
   */
  NodeType: string | undefined;

  /**
   * <p>A description of the cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The number of nodes in the DAX cluster. A replication factor of 1
   *             will create a single-node cluster, without any read replicas. For additional fault
   *             tolerance, you can create a multiple node cluster with one or more read replicas. To do
   *             this, set <code>ReplicationFactor</code> to a number between 3 (one primary and two read
   *             replicas) and 10 (one primary and nine read replicas). <code>If the
   *                 AvailabilityZones</code> parameter is provided, its length must equal the
   *                 <code>ReplicationFactor</code>.</p>
   *          <note>
   *             <p>Amazon Web Services recommends that you have at least two read replicas per
   *                 cluster.</p>
   *          </note>
   * @public
   */
  ReplicationFactor: number | undefined;

  /**
   * <p>The Availability Zones (AZs) in which the cluster nodes will reside after the
   *             cluster has been created or updated. If provided, the length of this list must equal the
   *                 <code>ReplicationFactor</code> parameter. If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest
   *             availability.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The name of the subnet group to be used for the replication group.</p>
   *          <important>
   *             <p>DAX clusters can only run in an Amazon VPC environment.
   *                 All of the subnets that you specify in a subnet group must exist in the same
   *                 VPC.</p>
   *          </important>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>A list of security group IDs to be assigned to each node in the DAX
   *             cluster. (Each of the security group ID is system-generated.)</p>
   *          <p>If this parameter is not specified, DAX assigns the default VPC
   *             security group to each node.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies the weekly time range during which maintenance on the DAX cluster is
   *             performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock
   *             UTC). The minimum maintenance window is a 60 minute period. Valid values for
   *                 <code>ddd</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sun</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mon</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tue</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>wed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>thu</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>fri</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sat</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>sun:05:00-sun:09:00</code>
   *          </p>
   *          <note>
   *             <p>If you don't specify a preferred maintenance window when you create or modify a
   *                 cache cluster, DAX assigns a 60-minute maintenance window on a
   *                 randomly selected day of the week.</p>
   *          </note>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which
   *             notifications will be sent.</p>
   *          <note>
   *             <p>The Amazon SNS topic owner must be same as the DAX
   *                 cluster owner.</p>
   *          </note>
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At
   *             runtime, DAX will assume this role and use the role's permissions to
   *             access DynamoDB on your behalf.</p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The parameter group to be associated with the DAX cluster.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>A set of tags to associate with the DAX cluster.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Represents the settings used to enable server-side encryption on the
   *             cluster.</p>
   * @public
   */
  SSESpecification?: SSESpecification | undefined;

  /**
   * <p>The type of encryption the cluster's endpoint should support. Values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> for no encryption</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TLS</code> for Transport Layer Security</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType | undefined;

  /**
   * <p>Specifies the IP protocol(s) the cluster uses for network communications. Values
   *             are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ipv4</code> - The cluster is accessible only through IPv4
   *                     addresses</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6</code> - The cluster is accessible only through IPv6
   *                     addresses</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dual_stack</code> - The cluster is accessible through both IPv4 and
   *                     IPv6 addresses.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If no explicit <code>NetworkType</code> is provided, the network type is
   *                 derived based on the subnet group's configuration.</p>
   *          </note>
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * <p>Represents the information required for client programs to connect to the endpoint
 *             for a DAX cluster.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The DNS hostname of the endpoint.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The port number that applications should use to connect to the endpoint.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The URL that applications should use to connect to the endpoint. The default ports
   *             are 8111 for the "dax" protocol and 9111 for the "daxs" protocol.</p>
   * @public
   */
  URL?: string | undefined;
}

/**
 * <p>Represents an individual node within a DAX cluster.</p>
 * @public
 */
export interface Node {
  /**
   * <p>A system-generated identifier for the node.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>The endpoint for the node, consisting of a DNS name and a port number. Client
   *             applications can connect directly to a node endpoint, if desired (as an alternative to
   *             allowing DAX client software to intelligently route requests and
   *             responses to nodes in the DAX cluster.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * <p>The date and time (in UNIX epoch format) when the node was launched.</p>
   * @public
   */
  NodeCreateTime?: Date | undefined;

  /**
   * <p>The Availability Zone (AZ) in which the node has been deployed.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The current status of the node. For example: <code>available</code>.</p>
   * @public
   */
  NodeStatus?: string | undefined;

  /**
   * <p>The status of the parameter group associated with this node. For example,
   *                 <code>in-sync</code>.</p>
   * @public
   */
  ParameterGroupStatus?: string | undefined;
}

/**
 * <p>Describes a notification topic and its status. Notification topics are used for
 *             publishing DAX events to subscribers using Amazon Simple Notification Service
 *             (SNS).</p>
 * @public
 */
export interface NotificationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * <p>The current state of the topic. A value of “active” means that notifications will
   *             be sent to the topic. A value of “inactive” means that notifications will not be sent to
   *             the topic.</p>
   * @public
   */
  TopicStatus?: string | undefined;
}

/**
 * <p>The status of a parameter group.</p>
 * @public
 */
export interface ParameterGroupStatus {
  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The status of parameter updates. </p>
   * @public
   */
  ParameterApplyStatus?: string | undefined;

  /**
   * <p>The node IDs of one or more nodes to be rebooted.</p>
   * @public
   */
  NodeIdsToReboot?: string[] | undefined;
}

/**
 * <p>An individual VPC security group and its status.</p>
 * @public
 */
export interface SecurityGroupMembership {
  /**
   * <p>The unique ID for this security group.</p>
   * @public
   */
  SecurityGroupIdentifier?: string | undefined;

  /**
   * <p>The status of this security group.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SSEStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;

/**
 * @public
 */
export type SSEStatus = (typeof SSEStatus)[keyof typeof SSEStatus];

/**
 * <p>The description of the server-side encryption status on the specified DAX
 *             cluster.</p>
 * @public
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
   * @public
   */
  Status?: SSEStatus | undefined;
}

/**
 * <p>Contains all of the attributes of a specific DAX cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The name of the DAX cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The description of the cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster. </p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The total number of nodes in the cluster.</p>
   * @public
   */
  TotalNodes?: number | undefined;

  /**
   * <p>The number of nodes in the cluster that are active (i.e., capable of serving
   *             requests).</p>
   * @public
   */
  ActiveNodes?: number | undefined;

  /**
   * <p>The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the
   *             same type.)</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The current status of the cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The endpoint for this DAX cluster, consisting of a DNS name, a port
   *             number, and a URL. Applications should use the URL to configure the DAX
   *             client to find their cluster.</p>
   * @public
   */
  ClusterDiscoveryEndpoint?: Endpoint | undefined;

  /**
   * <p>A list of nodes to be removed from the cluster.</p>
   * @public
   */
  NodeIdsToRemove?: string[] | undefined;

  /**
   * <p>A list of nodes that are currently in the cluster.</p>
   * @public
   */
  Nodes?: Node[] | undefined;

  /**
   * <p>A range of time when maintenance of DAX cluster software will be performed. For
   *             example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than
   *             30 minutes, and is performed automatically within the maintenance window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for
   *             publishing DAX events to subscribers using Amazon Simple Notification Service
   *             (SNS).</p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * <p>The subnet group where the DAX cluster is running.</p>
   * @public
   */
  SubnetGroup?: string | undefined;

  /**
   * <p>A list of security groups, and the status of each, for the nodes in the
   *             cluster.</p>
   * @public
   */
  SecurityGroups?: SecurityGroupMembership[] | undefined;

  /**
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At
   *             runtime, DAX will assume this role and use the role's permissions to
   *             access DynamoDB on your behalf.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The parameter group being used by nodes in the cluster.</p>
   * @public
   */
  ParameterGroup?: ParameterGroupStatus | undefined;

  /**
   * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
   * @public
   */
  SSEDescription?: SSEDescription | undefined;

  /**
   * <p>The type of encryption supported by the cluster's endpoint. Values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code> for no encryption</p>
   *                <p>
   *                   <code>TLS</code> for Transport Layer Security</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterEndpointEncryptionType?: ClusterEndpointEncryptionType | undefined;

  /**
   * <p>The IP address type of the cluster. Values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ipv4</code> - IPv4 addresses only</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6</code> - IPv6 addresses only</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dual_stack</code> - Both IPv4 and IPv6 addresses</p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>A description of the DAX cluster that you have created.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>There are not enough system resources to create the cluster you requested (or to
 *             resize an already-existing cluster). </p>
 * @public
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
 * <p>The requested DAX cluster is not in the
 *                 <i>available</i> state.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>You have attempted to exceed the maximum number of nodes for your Amazon Web Services account.</p>
 * @public
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
 * @public
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
 * @public
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
 *             encrypted clusters in a 30 day period. Contact Amazon Web Services customer support to
 *             discuss options for continuing to create encrypted clusters.</p>
 * @public
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
 * @public
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
 * @public
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
   * <p>The name of the parameter group to apply to all of the clusters in this replication
   *             group.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>A description of the parameter group.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>A named set of parameters that are applied to all of the nodes in a DAX cluster.</p>
 * @public
 */
export interface ParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>A description of the parameter group.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateParameterGroupResponse {
  /**
   * <p>Represents the output of a <i>CreateParameterGroup</i>
   *             action.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * <p>The specified parameter group already exists.</p>
 * @public
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
 * @public
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
   * <p>A name for the subnet group. This value is stored as a lowercase string. </p>
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description for the subnet group</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of VPC subnet IDs for the subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * <p>Represents the subnet associated with a DAX cluster. This parameter
 *             refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with
 *                 DAX.</p>
 * @public
 */
export interface Subnet {
  /**
   * <p>The system-assigned identifier for the subnet.</p>
   * @public
   */
  SubnetIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone (AZ) for the subnet.</p>
   * @public
   */
  SubnetAvailabilityZone?: string | undefined;

  /**
   * <p>The network types supported by this subnet. Returns an array of strings that can
   *             include <code>ipv4</code>, <code>ipv6</code>, or both, indicating whether the subnet
   *             supports IPv4 only, IPv6 only, or dual-stack deployments.</p>
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * <p>Represents the output of one of the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>CreateSubnetGroup</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>ModifySubnetGroup</i>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface SubnetGroup {
  /**
   * <p>The name of the subnet group.</p>
   * @public
   */
  SubnetGroupName?: string | undefined;

  /**
   * <p>The description of the subnet group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>A list of subnets associated with the subnet group. </p>
   * @public
   */
  Subnets?: Subnet[] | undefined;

  /**
   * <p>The network types supported by this subnet. Returns an array of strings that can
   *             include <code>ipv4</code>, <code>ipv6</code>, or both, indicating whether the subnet
   *             group supports IPv4 only, IPv6 only, or dual-stack deployments. </p>
   * @public
   */
  SupportedNetworkTypes?: NetworkType[] | undefined;
}

/**
 * @public
 */
export interface CreateSubnetGroupResponse {
  /**
   * <p>Represents the output of a <i>CreateSubnetGroup</i>
   *             operation.</p>
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}

/**
 * <p>An invalid subnet identifier was specified.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The specified subnet can't be used for the requested network type. This error
 *             occurs when either there aren't enough subnets of the required network type to create
 *             the cluster, or when you try to use a subnet that doesn't support the requested network
 *             type (for example, trying to create a dual-stack cluster with a subnet that doesn't have
 *             IPv6 CIDR). </p>
 * @public
 */
export class SubnetNotAllowedFault extends __BaseException {
  readonly name: "SubnetNotAllowedFault" = "SubnetNotAllowedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotAllowedFault, __BaseException>) {
    super({
      name: "SubnetNotAllowedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotAllowedFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 * @public
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
 * <p>The requested cluster ID does not refer to an existing DAX
 *             cluster.</p>
 * @public
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
   * <p>The name of the DAX cluster from which you want to remove
   *             nodes.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The new number of nodes for the DAX cluster.</p>
   * @public
   */
  NewReplicationFactor: number | undefined;

  /**
   * <p>The Availability Zone(s) from which to remove nodes.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The unique identifiers of the nodes to be removed from the cluster.</p>
   * @public
   */
  NodeIdsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface DecreaseReplicationFactorResponse {
  /**
   * <p>A description of the DAX cluster, after you have decreased its
   *             replication factor.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>None of the nodes in the cluster have the given node ID.</p>
 * @public
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
   * <p>The name of the cluster to be deleted.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>A description of the DAX cluster that is being deleted.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupRequest {
  /**
   * <p>The name of the parameter group to delete.</p>
   * @public
   */
  ParameterGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteParameterGroupResponse {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the parameter
   *             group).</p>
   * @public
   */
  DeletionMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupRequest {
  /**
   * <p>The name of the subnet group to delete.</p>
   * @public
   */
  SubnetGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubnetGroupResponse {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the subnet
   *             group).</p>
   * @public
   */
  DeletionMessage?: string | undefined;
}

/**
 * <p>The specified subnet group is currently in use.</p>
 * @public
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
   * <p>The names of the DAX clusters being described.</p>
   * @public
   */
  ClusterNames?: string[] | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClustersResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The descriptions of your DAX clusters, in response to a
   *                 <i>DescribeClusters</i> request.</p>
   * @public
   */
  Clusters?: Cluster[] | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultParametersRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChangeType = {
  IMMEDIATE: "IMMEDIATE",
  REQUIRES_REBOOT: "REQUIRES_REBOOT",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const IsModifiable = {
  CONDITIONAL: "CONDITIONAL",
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type IsModifiable = (typeof IsModifiable)[keyof typeof IsModifiable];

/**
 * <p>Represents a parameter value that is applicable to a particular node
 *             type.</p>
 * @public
 */
export interface NodeTypeSpecificValue {
  /**
   * <p>A node type to which the parameter value applies.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The parameter value for this node type.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ParameterType = {
  DEFAULT: "DEFAULT",
  NODE_TYPE_SPECIFIC: "NODE_TYPE_SPECIFIC",
} as const;

/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * <p>Describes an individual setting that controls some aspect of DAX
 *             behavior.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>Determines whether the parameter can be applied to any nodes, or only nodes of a
   *             particular type.</p>
   * @public
   */
  ParameterType?: ParameterType | undefined;

  /**
   * <p>The value for the parameter.</p>
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * <p>A list of node types, and specific parameter values for each node.</p>
   * @public
   */
  NodeTypeSpecificValues?: NodeTypeSpecificValue[] | undefined;

  /**
   * <p>A description of the parameter</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>How the parameter is defined. For example, <code>system</code> denotes a
   *             system-defined parameter.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The data type of the parameter. For example, <code>integer</code>:</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>A range of values within which the parameter can be set.</p>
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * <p>Whether the customer is allowed to modify the parameter.</p>
   * @public
   */
  IsModifiable?: IsModifiable | undefined;

  /**
   * <p>The conditions under which changes to this parameter can be applied. For example,
   *                 <code>requires-reboot</code> indicates that a new value for this parameter will only
   *             take effect if a node is rebooted.</p>
   * @public
   */
  ChangeType?: ChangeType | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultParametersResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of parameters. Each element in the list represents one parameter.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  CLUSTER: "CLUSTER",
  PARAMETER_GROUP: "PARAMETER_GROUP",
  SUBNET_GROUP: "SUBNET_GROUP",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * <p>The identifier of the event source for which events will be returned. If not
   *             specified, then all sources are included in the response.</p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The number of minutes' worth of events to retrieve.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a single occurrence of something interesting within the system. Some
 *             examples of events are creating a DAX cluster, adding or removing a node, or rebooting a
 *             node.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The source of the event. For example, if the event occurred at the node level, the
   *             source would be the node ID.</p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a node ID,
   *             etc.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>A user-defined message associated with the event.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The date and time when the event occurred.</p>
   * @public
   */
  Date?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of events. Each element in the array represents one event.</p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsRequest {
  /**
   * <p>The names of the parameter groups.</p>
   * @public
   */
  ParameterGroupNames?: string[] | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParameterGroupsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of parameter groups. Each element in the array represents one parameter
   *             group.</p>
   * @public
   */
  ParameterGroups?: ParameterGroup[] | undefined;
}

/**
 * @public
 */
export interface DescribeParametersRequest {
  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>How the parameter is defined. For example, <code>system</code> denotes a
   *             system-defined parameter.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeParametersResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of parameters within a parameter group. Each element in the list represents
   *             one parameter.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsRequest {
  /**
   * <p>The name of the subnet group.</p>
   * @public
   */
  SubnetGroupNames?: string[] | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist
   *             than the specified <code>MaxResults</code> value, a token is included in the response so
   *             that the remaining results can be retrieved.</p>
   *          <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token, up to the value specified by
   *             <code>MaxResults</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubnetGroupsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of subnet groups. Each element in the array represents a single subnet
   *             group.</p>
   * @public
   */
  SubnetGroups?: SubnetGroup[] | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicationFactorRequest {
  /**
   * <p>The name of the DAX cluster that will receive additional nodes.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The new number of nodes for the DAX cluster.</p>
   * @public
   */
  NewReplicationFactor: number | undefined;

  /**
   * <p>The Availability Zones (AZs) in which the cluster nodes will be created. All nodes
   *             belonging to the cluster are placed in these Availability Zones. Use this parameter if
   *             you want to distribute the nodes across multiple AZs.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * @public
 */
export interface IncreaseReplicationFactorResponse {
  /**
   * <p>A description of the DAX cluster, with its new replication
   *             factor.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
 * @public
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
   * <p>The name of the DAX resource to which the tags belong.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *             results from this action. If this parameter is specified, the response includes only
   *             results beyond the token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>A list of tags currently associated with the DAX cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If this value is present, there are additional results to be displayed. To retrieve
   *             them, call <code>ListTags</code> again, with <code>NextToken</code> set to this
   *             value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RebootNodeRequest {
  /**
   * <p>The name of the DAX cluster containing the node to be
   *             rebooted.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The system-assigned ID of the node to be rebooted.</p>
   * @public
   */
  NodeId: string | undefined;
}

/**
 * @public
 */
export interface RebootNodeResponse {
  /**
   * <p>A description of the DAX cluster after a node has been
   *             rebooted.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The name of the DAX resource to which tags should be
   *             added.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the DAX resource. </p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {
  /**
   * <p>The list of tags that are associated with the DAX resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The tag does not exist.</p>
 * @public
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
   * <p>The name of the DAX resource from which the tags should be
   *             removed.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>A list of tag keys. If the DAX cluster has any tags with these keys,
   *             then the tags are removed from the cluster.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {
  /**
   * <p>The tag keys that have been removed from the cluster.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * <p>The name of the DAX cluster to be modified.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>A description of the changes being made to the cluster.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A range of time when maintenance of DAX cluster software will be performed. For
   *             example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than
   *             30 minutes, and is performed automatically within the maintenance window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   * @public
   */
  NotificationTopicArn?: string | undefined;

  /**
   * <p>The current state of the topic. A value of “active” means that notifications will
   *             be sent to the topic. A value of “inactive” means that notifications will not be sent to
   *             the topic.</p>
   * @public
   */
  NotificationTopicStatus?: string | undefined;

  /**
   * <p>The name of a parameter group for this cluster.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>A list of user-specified security group IDs to be assigned to each node in the DAX
   *             cluster. If this parameter is not specified, DAX assigns the default VPC security group
   *             to each node.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * <p>A description of the DAX cluster, after it has been modified.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>An individual DAX parameter.</p>
 * @public
 */
export interface ParameterNameValue {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  ParameterName?: string | undefined;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  ParameterValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupRequest {
  /**
   * <p>The name of the parameter group.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of name-value pairs for the parameters in the group. Each element in the
   *             array represents a single parameter.</p>
   *          <note>
   *             <p>
   *                <code>record-ttl-millis</code> and <code>query-ttl-millis</code> are the only
   *                 supported parameter names. For more details, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl">Configuring TTL Settings</a>.</p>
   *          </note>
   * @public
   */
  ParameterNameValues: ParameterNameValue[] | undefined;
}

/**
 * @public
 */
export interface UpdateParameterGroupResponse {
  /**
   * <p>The parameter group that has been modified.</p>
   * @public
   */
  ParameterGroup?: ParameterGroup | undefined;
}

/**
 * <p>The requested subnet is being used by another subnet group.</p>
 * @public
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
   * <p>The name of the subnet group.</p>
   * @public
   */
  SubnetGroupName: string | undefined;

  /**
   * <p>A description of the subnet group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of subnet IDs in the subnet group.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateSubnetGroupResponse {
  /**
   * <p>The subnet group that has been modified.</p>
   * @public
   */
  SubnetGroup?: SubnetGroup | undefined;
}
