import {
  _NetworkConfiguration,
  _UnmarshalledNetworkConfiguration
} from "./_NetworkConfiguration";
import { _LoadBalancer, _UnmarshalledLoadBalancer } from "./_LoadBalancer";
import {
  _ServiceRegistry,
  _UnmarshalledServiceRegistry
} from "./_ServiceRegistry";
import { _Scale, _UnmarshalledScale } from "./_Scale";

/**
 * <p>Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
 */
export interface _TaskSet {
  /**
   * <p>The ID of the task set.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task set.</p>
   */
  taskSetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service the task set exists in.</p>
   */
  serviceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that the service that hosts the task set exists in.</p>
   */
  clusterArn?: string;

  /**
   * <p>The tag specified when a task set is started. If the task set is created by an AWS CodeDeploy deployment, the <code>startedBy</code> parameter is <code>CODE_DEPLOY</code>. For a task set created for an external deployment, the startedBy field isn't used.</p>
   */
  startedBy?: string;

  /**
   * <p>The external ID associated with the task set.</p> <p>If a task set is created by an AWS CodeDeploy deployment, the <code>externalId</code> parameter contains the AWS CodeDeploy deployment ID.</p> <p>If a task set is created for an external deployment and is associated with a service discovery registry, the <code>externalId</code> parameter contains the <code>ECS_TASK_SET_EXTERNAL_ID</code> AWS Cloud Map attribute.</p>
   */
  externalId?: string;

  /**
   * <p>The status of the task set. The following describes each state:</p> <dl> <dt>PRIMARY</dt> <dd> <p>The task set is serving production traffic.</p> </dd> <dt>ACTIVE</dt> <dd> <p>The task set is not serving production traffic.</p> </dd> <dt>DRAINING</dt> <dd> <p>The tasks in the task set are being stopped and their corresponding targets are being deregistered from their target group.</p> </dd> </dl>
   */
  status?: string;

  /**
   * <p>The task definition the task set is using.</p>
   */
  taskDefinition?: string;

  /**
   * <p>The computed desired count for the task set. This is calculated by multiplying the service's <code>desiredCount</code> by the task set's <code>scale</code> percentage. The result is always rounded up. For example, if the computed desired count is 1.2, it rounds up to 2 tasks.</p>
   */
  computedDesiredCount?: number;

  /**
   * <p>The number of tasks in the task set that are in the <code>PENDING</code> status during a deployment. A task in the <code>PENDING</code> state is preparing to enter the <code>RUNNING</code> state. A task set enters the <code>PENDING</code> status when it launches for the first time or when it is restarted after being in the <code>STOPPED</code> state.</p>
   */
  pendingCount?: number;

  /**
   * <p>The number of tasks in the task set that are in the <code>RUNNING</code> status during a deployment. A task in the <code>RUNNING</code> state is running and ready for use.</p>
   */
  runningCount?: number;

  /**
   * <p>The Unix timestamp for when the task set was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task set was last updated.</p>
   */
  updatedAt?: Date | string | number;

  /**
   * <p>The launch type the tasks in the task set are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>The platform version on which the tasks in the task set are running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the <code>LATEST</code> platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The network configuration for the task set.</p>
   */
  networkConfiguration?: _NetworkConfiguration;

  /**
   * <p>Details on a load balancer that is used with a task set.</p>
   */
  loadBalancers?: Array<_LoadBalancer> | Iterable<_LoadBalancer>;

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p>
   */
  serviceRegistries?: Array<_ServiceRegistry> | Iterable<_ServiceRegistry>;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
   */
  scale?: _Scale;

  /**
   * <p>The stability status, which indicates whether the task set has reached a steady state. If the following conditions are met, the task set will be in <code>STEADY_STATE</code>:</p> <ul> <li> <p>The task <code>runningCount</code> is equal to the <code>computedDesiredCount</code>.</p> </li> <li> <p>The <code>pendingCount</code> is <code>0</code>.</p> </li> <li> <p>There are no tasks running on container instances in the <code>DRAINING</code> status.</p> </li> <li> <p>All tasks are reporting a healthy status from the load balancers, service discovery, and container health checks.</p> <note> <p>If a <code>healthCheckGracePeriodSeconds</code> value was set when the service was created, you may see a <code>STEADY_STATE</code> reached since unhealthy Elastic Load Balancing target health checks will be ignored until it expires.</p> </note> </li> </ul> <p>If any of those conditions are not met, the stability status returns <code>STABILIZING</code>.</p>
   */
  stabilityStatus?: "STEADY_STATE" | "STABILIZING" | string;

  /**
   * <p>The Unix timestamp for when the task set stability status was retrieved.</p>
   */
  stabilityStatusAt?: Date | string | number;
}

export interface _UnmarshalledTaskSet extends _TaskSet {
  /**
   * <p>The Unix timestamp for when the task set was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Unix timestamp for when the task set was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The network configuration for the task set.</p>
   */
  networkConfiguration?: _UnmarshalledNetworkConfiguration;

  /**
   * <p>Details on a load balancer that is used with a task set.</p>
   */
  loadBalancers?: Array<_UnmarshalledLoadBalancer>;

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p>
   */
  serviceRegistries?: Array<_UnmarshalledServiceRegistry>;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
   */
  scale?: _UnmarshalledScale;

  /**
   * <p>The Unix timestamp for when the task set stability status was retrieved.</p>
   */
  stabilityStatusAt?: Date;
}
