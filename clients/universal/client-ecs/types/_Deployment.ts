import {
  _NetworkConfiguration,
  _UnmarshalledNetworkConfiguration
} from "./_NetworkConfiguration";

/**
 * <p>The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type.</p>
 */
export interface _Deployment {
  /**
   * <p>The ID of the deployment.</p>
   */
  id?: string;

  /**
   * <p>The status of the deployment. The following describes each state:</p> <dl> <dt>PRIMARY</dt> <dd> <p>The most recent deployment of a service.</p> </dd> <dt>ACTIVE</dt> <dd> <p>A service deployment that still has running tasks, but are in the process of being replaced with a new <code>PRIMARY</code> deployment.</p> </dd> <dt>INACTIVE</dt> <dd> <p>A deployment that has been completely replaced.</p> </dd> </dl>
   */
  status?: string;

  /**
   * <p>The most recent task definition that was specified for the tasks in the service to use.</p>
   */
  taskDefinition?: string;

  /**
   * <p>The most recent desired count of tasks that was specified for the service to deploy or maintain.</p>
   */
  desiredCount?: number;

  /**
   * <p>The number of tasks in the deployment that are in the <code>PENDING</code> status.</p>
   */
  pendingCount?: number;

  /**
   * <p>The number of tasks in the deployment that are in the <code>RUNNING</code> status.</p>
   */
  runningCount?: number;

  /**
   * <p>The Unix timestamp for when the service deployment was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the service deployment was last updated.</p>
   */
  updatedAt?: Date | string | number;

  /**
   * <p>The launch type the tasks in the service are using. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>The platform version on which your tasks in the service are running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the <code>LATEST</code> platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: _NetworkConfiguration;
}

export interface _UnmarshalledDeployment extends _Deployment {
  /**
   * <p>The Unix timestamp for when the service deployment was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Unix timestamp for when the service deployment was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: _UnmarshalledNetworkConfiguration;
}
