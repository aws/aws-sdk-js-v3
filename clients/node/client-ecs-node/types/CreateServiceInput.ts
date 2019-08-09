import { _LoadBalancer } from "./_LoadBalancer";
import { _ServiceRegistry } from "./_ServiceRegistry";
import { _DeploymentConfiguration } from "./_DeploymentConfiguration";
import { _PlacementConstraint } from "./_PlacementConstraint";
import { _PlacementStrategy } from "./_PlacementStrategy";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _DeploymentController } from "./_DeploymentController";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceInput shape
 */
export interface CreateServiceInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster on which to run your service. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The name of your service. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.</p>
   */
  serviceName: string;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used.</p> <p>A task definition must be specified if the service is using the <code>ECS</code> deployment controller.</p>
   */
  taskDefinition?: string;

  /**
   * <p>A load balancer object representing the load balancer to use with your service.</p> <p>If the service is using the <code>ECS</code> deployment controller, you are limited to one load balancer or target group.</p> <p>If the service is using the <code>CODE_DEPLOY</code> deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When creating an AWS CodeDeploy deployment group, you specify two target groups (referred to as a <code>targetGroupPair</code>). During a deployment, AWS CodeDeploy determines which task set in your service has the status <code>PRIMARY</code> and associates one target group with it, and then associates the other target group with the replacement task set. The load balancer can also have up to two listeners: a required listener for production traffic and an optional listener that allows you perform validation tests with Lambda functions before routing production traffic to it.</p> <p>After you create a service using the <code>ECS</code> deployment controller, the load balancer name or target group ARN, container name, and container port specified in the service definition are immutable. If you are using the <code>CODE_DEPLOY</code> deployment controller, these values can be changed when updating the service.</p> <p>For Classic Load Balancers, this object must contain the load balancer name, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance is registered with the load balancer specified here.</p> <p>For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name (as it appears in a container definition), and the container port to access from the load balancer. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group specified here.</p> <p>Services with tasks that use the <code>awsvpc</code> network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose <code>ip</code> as the target type, not <code>instance</code>, because tasks that use the <code>awsvpc</code> network mode are associated with an elastic network interface, not an Amazon EC2 instance.</p>
   */
  loadBalancers?: Array<_LoadBalancer> | Iterable<_LoadBalancer>;

  /**
   * <p>The details of the service discovery registries to assign to this service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p> <note> <p>Service discovery is supported for Fargate tasks if you are using platform version v1.1.0 or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a>.</p> </note>
   */
  serviceRegistries?: Array<_ServiceRegistry> | Iterable<_ServiceRegistry>;

  /**
   * <p>The number of instantiations of the specified task definition to place and keep running on your cluster.</p>
   */
  desiredCount?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 32 ASCII characters are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The launch type on which to run your service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the <code>LATEST</code> platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition does not use the <code>awsvpc</code> network mode. If you specify the <code>role</code> parameter, you must also specify a load balancer object with the <code>loadBalancers</code> parameter.</p> <important> <p>If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here. The service-linked role is required if your task definition uses the <code>awsvpc</code> network mode, in which case you should not specify a role here. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code> then you would specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly Names and Paths</a> in the <i>IAM User Guide</i>.</p>
   */
  role?: string;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: _DeploymentConfiguration;

  /**
   * <p>An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints per task (this limit includes constraints in the task definition and those specified at runtime). </p>
   */
  placementConstraints?:
    | Array<_PlacementConstraint>
    | Iterable<_PlacementConstraint>;

  /**
   * <p>The placement strategy objects to use for tasks in your service. You can specify a maximum of five strategy rules per service.</p>
   */
  placementStrategy?: Array<_PlacementStrategy> | Iterable<_PlacementStrategy>;

  /**
   * <p>The network configuration for the service. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  networkConfiguration?: _NetworkConfiguration;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 2,147,483,647 seconds. During that time, the ECS service scheduler ignores health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.</p>
   */
  healthCheckGracePeriodSeconds?: number;

  /**
   * <p>The scheduling strategy to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Services</a>.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code>-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service is using the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types.</p> </li> <li> <p> <code>DAEMON</code>-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.</p> <note> <p>Tasks using the Fargate launch type or the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types don't support the <code>DAEMON</code> scheduling strategy.</p> </note> </li> </ul>
   */
  schedulingStrategy?: "REPLICA" | "DAEMON" | string;

  /**
   * <p>The deployment controller to use for the service.</p>
   */
  deploymentController?: _DeploymentController;

  /**
   * <p>The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the tasks within the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  enableECSManagedTags?: boolean;

  /**
   * <p>Specifies whether to propagate the tags from the task definition or the service to the tasks in the service. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks within the service during service creation. To add tags to a task after service creation, use the <a>TagResource</a> API action.</p>
   */
  propagateTags?: "TASK_DEFINITION" | "SERVICE" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
