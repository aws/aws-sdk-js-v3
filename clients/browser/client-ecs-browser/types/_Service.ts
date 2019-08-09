import { _LoadBalancer, _UnmarshalledLoadBalancer } from "./_LoadBalancer";
import {
  _ServiceRegistry,
  _UnmarshalledServiceRegistry
} from "./_ServiceRegistry";
import {
  _DeploymentConfiguration,
  _UnmarshalledDeploymentConfiguration
} from "./_DeploymentConfiguration";
import { _TaskSet, _UnmarshalledTaskSet } from "./_TaskSet";
import { _Deployment, _UnmarshalledDeployment } from "./_Deployment";
import { _ServiceEvent, _UnmarshalledServiceEvent } from "./_ServiceEvent";
import {
  _PlacementConstraint,
  _UnmarshalledPlacementConstraint
} from "./_PlacementConstraint";
import {
  _PlacementStrategy,
  _UnmarshalledPlacementStrategy
} from "./_PlacementStrategy";
import {
  _NetworkConfiguration,
  _UnmarshalledNetworkConfiguration
} from "./_NetworkConfiguration";
import {
  _DeploymentController,
  _UnmarshalledDeploymentController
} from "./_DeploymentController";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Details on a service within a cluster</p>
 */
export interface _Service {
  /**
   * <p>The ARN that identifies the service. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the service, the AWS account ID of the service owner, the <code>service</code> namespace, and then the service name. For example, <code>arn:aws:ecs:region:012345678910:service/my-service</code>.</p>
   */
  serviceArn?: string;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.</p>
   */
  serviceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster that hosts the service.</p>
   */
  clusterArn?: string;

  /**
   * <p>A list of Elastic Load Balancing load balancer objects, containing the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>. Tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>
   */
  loadBalancers?: Array<_LoadBalancer> | Iterable<_LoadBalancer>;

  /**
   * <p>The details of the service discovery registries to assign to this service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p>
   */
  serviceRegistries?: Array<_ServiceRegistry> | Iterable<_ServiceRegistry>;

  /**
   * <p>The status of the service. The valid values are <code>ACTIVE</code>, <code>DRAINING</code>, or <code>INACTIVE</code>.</p>
   */
  status?: string;

  /**
   * <p>The desired number of instantiations of the task definition to keep running on the service. This value is specified when the service is created with <a>CreateService</a>, and it can be modified with <a>UpdateService</a>.</p>
   */
  desiredCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>RUNNING</code> state.</p>
   */
  runningCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the <code>PENDING</code> state.</p>
   */
  pendingCount?: number;

  /**
   * <p>The launch type on which your service is running. If no value is specified, it will default to <code>EC2</code>. Valid values include <code>EC2</code> and <code>FARGATE</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>The platform version on which to run your service. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the <code>LATEST</code> platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The task definition to use for tasks in the service. This value is specified when the service is created with <a>CreateService</a>, and it can be modified with <a>UpdateService</a>.</p>
   */
  taskDefinition?: string;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: _DeploymentConfiguration;

  /**
   * <p>Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
   */
  taskSets?: Array<_TaskSet> | Iterable<_TaskSet>;

  /**
   * <p>The current state of deployments for the service.</p>
   */
  deployments?: Array<_Deployment> | Iterable<_Deployment>;

  /**
   * <p>The ARN of the IAM role associated with the service that allows the Amazon ECS container agent to register container instances with an Elastic Load Balancing load balancer.</p>
   */
  roleArn?: string;

  /**
   * <p>The event stream for your service. A maximum of 100 of the latest events are displayed.</p>
   */
  events?: Array<_ServiceEvent> | Iterable<_ServiceEvent>;

  /**
   * <p>The Unix timestamp for when the service was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The placement constraints for the tasks in the service.</p>
   */
  placementConstraints?:
    | Array<_PlacementConstraint>
    | Iterable<_PlacementConstraint>;

  /**
   * <p>The placement strategy that determines how tasks for the service are placed.</p>
   */
  placementStrategy?: Array<_PlacementStrategy> | Iterable<_PlacementStrategy>;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: _NetworkConfiguration;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started.</p>
   */
  healthCheckGracePeriodSeconds?: number;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions.</p> </li> <li> <p> <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each container instance in your cluster. When you are using this strategy, do not specify a desired number of tasks or any task placement strategies.</p> <note> <p>Fargate tasks do not support the <code>DAEMON</code> scheduling strategy.</p> </note> </li> </ul>
   */
  schedulingStrategy?: "REPLICA" | "DAEMON" | string;

  /**
   * <p>The deployment controller type the service is using.</p>
   */
  deploymentController?: _DeploymentController;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The principal that created the service.</p>
   */
  createdBy?: string;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the tasks in the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the task. If no value is specified, the tags are not propagated.</p>
   */
  propagateTags?: "TASK_DEFINITION" | "SERVICE" | string;
}

export interface _UnmarshalledService extends _Service {
  /**
   * <p>A list of Elastic Load Balancing load balancer objects, containing the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>. Tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>
   */
  loadBalancers?: Array<_UnmarshalledLoadBalancer>;

  /**
   * <p>The details of the service discovery registries to assign to this service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p>
   */
  serviceRegistries?: Array<_UnmarshalledServiceRegistry>;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: _UnmarshalledDeploymentConfiguration;

  /**
   * <p>Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.</p>
   */
  taskSets?: Array<_UnmarshalledTaskSet>;

  /**
   * <p>The current state of deployments for the service.</p>
   */
  deployments?: Array<_UnmarshalledDeployment>;

  /**
   * <p>The event stream for your service. A maximum of 100 of the latest events are displayed.</p>
   */
  events?: Array<_UnmarshalledServiceEvent>;

  /**
   * <p>The Unix timestamp for when the service was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The placement constraints for the tasks in the service.</p>
   */
  placementConstraints?: Array<_UnmarshalledPlacementConstraint>;

  /**
   * <p>The placement strategy that determines how tasks for the service are placed.</p>
   */
  placementStrategy?: Array<_UnmarshalledPlacementStrategy>;

  /**
   * <p>The VPC subnet and security group configuration for tasks that receive their own elastic network interface by using the <code>awsvpc</code> networking mode.</p>
   */
  networkConfiguration?: _UnmarshalledNetworkConfiguration;

  /**
   * <p>The deployment controller type the service is using.</p>
   */
  deploymentController?: _UnmarshalledDeploymentController;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
