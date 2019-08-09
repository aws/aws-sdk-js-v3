import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _LoadBalancer } from "./_LoadBalancer";
import { _ServiceRegistry } from "./_ServiceRegistry";
import { _Scale } from "./_Scale";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTaskSetInput shape
 */
export interface CreateTaskSetInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service to create the task set in.</p>
   */
  service: string;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.</p>
   */
  cluster: string;

  /**
   * <p>An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the <code>ECS_TASK_SET_EXTERNAL_ID</code> AWS Cloud Map attribute set to the provided value.</p>
   */
  externalId?: string;

  /**
   * <p>The task definition for the tasks in the task set to use.</p>
   */
  taskDefinition: string;

  /**
   * <p>An object representing the network configuration for a task or service.</p>
   */
  networkConfiguration?: _NetworkConfiguration;

  /**
   * <p>A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.</p>
   */
  loadBalancers?: Array<_LoadBalancer> | Iterable<_LoadBalancer>;

  /**
   * <p>The details of the service discovery registries to assign to this task set. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a>.</p>
   */
  serviceRegistries?: Array<_ServiceRegistry> | Iterable<_ServiceRegistry>;

  /**
   * <p>The launch type that new tasks in the task set will use. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the <code>LATEST</code> platform version is used by default.</p>
   */
  platformVersion?: string;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
   */
  scale?: _Scale;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 32 ASCII characters are allowed.</p>
   */
  clientToken?: string;

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
