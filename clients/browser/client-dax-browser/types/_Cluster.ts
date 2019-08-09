import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";
import { _Node, _UnmarshalledNode } from "./_Node";
import {
  _NotificationConfiguration,
  _UnmarshalledNotificationConfiguration
} from "./_NotificationConfiguration";
import {
  _SecurityGroupMembership,
  _UnmarshalledSecurityGroupMembership
} from "./_SecurityGroupMembership";
import {
  _ParameterGroupStatus,
  _UnmarshalledParameterGroupStatus
} from "./_ParameterGroupStatus";
import {
  _SSEDescription,
  _UnmarshalledSSEDescription
} from "./_SSEDescription";

/**
 * <p>Contains all of the attributes of a specific DAX cluster.</p>
 */
export interface _Cluster {
  /**
   * <p>The name of the DAX cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The description of the cluster.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster. </p>
   */
  ClusterArn?: string;

  /**
   * <p>The total number of nodes in the cluster.</p>
   */
  TotalNodes?: number;

  /**
   * <p>The number of nodes in the cluster that are active (i.e., capable of serving requests).</p>
   */
  ActiveNodes?: number;

  /**
   * <p>The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the same type.)</p>
   */
  NodeType?: string;

  /**
   * <p>The current status of the cluster.</p>
   */
  Status?: string;

  /**
   * <p>The configuration endpoint for this DAX cluster, consisting of a DNS name and a port number. Client applications can specify this endpoint, rather than an individual node endpoint, and allow the DAX client software to intelligently route requests and responses to nodes in the DAX cluster.</p>
   */
  ClusterDiscoveryEndpoint?: _Endpoint;

  /**
   * <p>A list of nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: Array<string> | Iterable<string>;

  /**
   * <p>A list of nodes that are currently in the cluster.</p>
   */
  Nodes?: Array<_Node> | Iterable<_Node>;

  /**
   * <p>A range of time when maintenance of DAX cluster software will be performed. For example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).</p>
   */
  NotificationConfiguration?: _NotificationConfiguration;

  /**
   * <p>The subnet group where the DAX cluster is running.</p>
   */
  SubnetGroup?: string;

  /**
   * <p>A list of security groups, and the status of each, for the nodes in the cluster.</p>
   */
  SecurityGroups?:
    | Array<_SecurityGroupMembership>
    | Iterable<_SecurityGroupMembership>;

  /**
   * <p>A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The parameter group being used by nodes in the cluster.</p>
   */
  ParameterGroup?: _ParameterGroupStatus;

  /**
   * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
   */
  SSEDescription?: _SSEDescription;
}

export interface _UnmarshalledCluster extends _Cluster {
  /**
   * <p>The configuration endpoint for this DAX cluster, consisting of a DNS name and a port number. Client applications can specify this endpoint, rather than an individual node endpoint, and allow the DAX client software to intelligently route requests and responses to nodes in the DAX cluster.</p>
   */
  ClusterDiscoveryEndpoint?: _UnmarshalledEndpoint;

  /**
   * <p>A list of nodes to be removed from the cluster.</p>
   */
  NodeIdsToRemove?: Array<string>;

  /**
   * <p>A list of nodes that are currently in the cluster.</p>
   */
  Nodes?: Array<_UnmarshalledNode>;

  /**
   * <p>Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).</p>
   */
  NotificationConfiguration?: _UnmarshalledNotificationConfiguration;

  /**
   * <p>A list of security groups, and the status of each, for the nodes in the cluster.</p>
   */
  SecurityGroups?: Array<_UnmarshalledSecurityGroupMembership>;

  /**
   * <p>The parameter group being used by nodes in the cluster.</p>
   */
  ParameterGroup?: _UnmarshalledParameterGroupStatus;

  /**
   * <p>The description of the server-side encryption status on the specified DAX cluster.</p>
   */
  SSEDescription?: _UnmarshalledSSEDescription;
}
