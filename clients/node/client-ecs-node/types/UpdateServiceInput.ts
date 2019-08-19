import { _DeploymentConfiguration } from "./_DeploymentConfiguration";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServiceInput shape
 */
export interface UpdateServiceInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that your service is running on. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  cluster?: string;

  /**
   * <p>The name of the service to update.</p>
   */
  service: string;

  /**
   * <p>The number of instantiations of the task to place and keep running in your service.</p>
   */
  desiredCount?: number;

  /**
   * <p>The <code>family</code> and <code>revision</code> (<code>family:revision</code>) or full ARN of the task definition to run in your service. If a <code>revision</code> is not specified, the latest <code>ACTIVE</code> revision is used. If you modify the task definition with <code>UpdateService</code>, Amazon ECS spawns a task with the new version of the task definition and then stops an old task after the new version is running.</p>
   */
  taskDefinition?: string;

  /**
   * <p>Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.</p>
   */
  deploymentConfiguration?: _DeploymentConfiguration;

  /**
   * <p>The network configuration for the service. This parameter is required for task definitions that use the <code>awsvpc</code> network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Updating a service to add a subnet to a list of existing subnets does not trigger a service deployment. For example, if your network configuration change is to keep the existing subnets and simply add another subnet to the network configuration, this does not trigger a new service deployment.</p> </note>
   */
  networkConfiguration?: _NetworkConfiguration;

  /**
   * <p>The platform version on which your tasks in the service are running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the <code>LATEST</code> platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>Whether to force a new deployment of the service. Deployments are not forced by default. You can use this option to trigger a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (<code>my_image:latest</code>) or to roll Fargate tasks onto a newer platform version.</p>
   */
  forceNewDeployment?: boolean;

  /**
   * <p>The period of time, in seconds, that the Amazon ECS service scheduler should ignore unhealthy Elastic Load Balancing target health checks after a task has first started. This is only valid if your service is configured to use a load balancer. If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 1,800 seconds. During that time, the ECS service scheduler ignores the Elastic Load Balancing health check status. This grace period can prevent the ECS service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.</p>
   */
  healthCheckGracePeriodSeconds?: number;

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
