import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _ClusterSetting,
  _UnmarshalledClusterSetting
} from "./_ClusterSetting";

/**
 * <p>A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.</p>
 */
export interface _Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the cluster, the AWS account ID of the cluster owner, the <code>cluster</code> namespace, and then the cluster name. For example, <code>arn:aws:ecs:region:012345678910:cluster/test</code>.</p>
   */
  clusterArn?: string;

  /**
   * <p>A user-generated string that you use to identify your cluster.</p>
   */
  clusterName?: string;

  /**
   * <p>The status of the cluster. The valid values are <code>ACTIVE</code> or <code>INACTIVE</code>. <code>ACTIVE</code> indicates that you can register container instances with the cluster and the associated instances can accept tasks.</p>
   */
  status?: string;

  /**
   * <p>The number of container instances registered into the cluster. This includes container instances in both <code>ACTIVE</code> and <code>DRAINING</code> status.</p>
   */
  registeredContainerInstancesCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>
   */
  runningTasksCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>
   */
  pendingTasksCount?: number;

  /**
   * <p>The number of services that are running on the cluster in an <code>ACTIVE</code> state. You can view these services with <a>ListServices</a>.</p>
   */
  activeServicesCount?: number;

  /**
   * <p>Additional information about your clusters that are separated by launch type, including:</p> <ul> <li> <p>runningEC2TasksCount</p> </li> <li> <p>RunningFargateTasksCount</p> </li> <li> <p>pendingEC2TasksCount</p> </li> <li> <p>pendingFargateTasksCount</p> </li> <li> <p>activeEC2ServiceCount</p> </li> <li> <p>activeFargateServiceCount</p> </li> <li> <p>drainingEC2ServiceCount</p> </li> <li> <p>drainingFargateServiceCount</p> </li> </ul>
   */
  statistics?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;

  /**
   * <p>The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The settings for the cluster. This parameter indicates whether CloudWatch Container Insights is enabled or disabled for a cluster.</p>
   */
  settings?: Array<_ClusterSetting> | Iterable<_ClusterSetting>;
}

export interface _UnmarshalledCluster extends _Cluster {
  /**
   * <p>Additional information about your clusters that are separated by launch type, including:</p> <ul> <li> <p>runningEC2TasksCount</p> </li> <li> <p>RunningFargateTasksCount</p> </li> <li> <p>pendingEC2TasksCount</p> </li> <li> <p>pendingFargateTasksCount</p> </li> <li> <p>activeEC2ServiceCount</p> </li> <li> <p>activeFargateServiceCount</p> </li> <li> <p>drainingEC2ServiceCount</p> </li> <li> <p>drainingFargateServiceCount</p> </li> </ul>
   */
  statistics?: Array<_UnmarshalledKeyValuePair>;

  /**
   * <p>The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The settings for the cluster. This parameter indicates whether CloudWatch Container Insights is enabled or disabled for a cluster.</p>
   */
  settings?: Array<_UnmarshalledClusterSetting>;
}
