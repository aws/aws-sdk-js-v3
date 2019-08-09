import {
  _TargetGroupInfo,
  _UnmarshalledTargetGroupInfo
} from "./_TargetGroupInfo";

/**
 * <p> Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. </p>
 */
export interface _ECSTaskSet {
  /**
   * <p> A unique ID of an <code>ECSTaskSet</code>. </p>
   */
  identifer?: string;

  /**
   * <p> The number of tasks in a task set. During a deployment that uses the Amazon ECS compute type, CodeDeploy instructs Amazon ECS to create a new task set and uses this value to determine how many tasks to create. After the updated task set is created, CodeDeploy shifts traffic to the new task set. </p>
   */
  desiredCount?: number;

  /**
   * <p> The number of tasks in the task set that are in the <code>PENDING</code> status during an Amazon ECS deployment. A task in the <code>PENDING</code> state is preparing to enter the <code>RUNNING</code> state. A task set enters the <code>PENDING</code> status when it launches for the first time, or when it is restarted after being in the <code>STOPPED</code> state. </p>
   */
  pendingCount?: number;

  /**
   * <p> The number of tasks in the task set that are in the <code>RUNNING</code> status during an Amazon ECS deployment. A task in the <code>RUNNING</code> state is running and ready for use. </p>
   */
  runningCount?: number;

  /**
   * <p> The status of the task set. There are three valid task set statuses: </p> <ul> <li> <p> <code>PRIMARY</code>: Indicates the task set is serving production traffic. </p> </li> <li> <p> <code>ACTIVE</code>: Indicates the task set is not serving production traffic. </p> </li> <li> <p> <code>DRAINING</code>: Indicates the tasks in the task set are being stopped and their corresponding targets are being deregistered from their target group. </p> </li> </ul>
   */
  status?: string;

  /**
   * <p> The percentage of traffic served by this task set. </p>
   */
  trafficWeight?: number;

  /**
   * <p> The target group associated with the task set. The target group is used by AWS CodeDeploy to manage traffic to a task set. </p>
   */
  targetGroup?: _TargetGroupInfo;

  /**
   * <p> A label that identifies whether the ECS task set is an original target (<code>BLUE</code>) or a replacement target (<code>GREEN</code>). </p>
   */
  taskSetLabel?: "Blue" | "Green" | string;
}

export interface _UnmarshalledECSTaskSet extends _ECSTaskSet {
  /**
   * <p> The target group associated with the task set. The target group is used by AWS CodeDeploy to manage traffic to a task set. </p>
   */
  targetGroup?: _UnmarshalledTargetGroupInfo;
}
