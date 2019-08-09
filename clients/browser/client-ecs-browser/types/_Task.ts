import { _TaskOverride, _UnmarshalledTaskOverride } from "./_TaskOverride";
import { _Container, _UnmarshalledContainer } from "./_Container";
import { _Attachment, _UnmarshalledAttachment } from "./_Attachment";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Details on a task in a cluster.</p>
 */
export interface _Task {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;

  /**
   * <p>The ARN of the cluster that hosts the task.</p>
   */
  clusterArn?: string;

  /**
   * <p>The ARN of the task definition that creates the task.</p>
   */
  taskDefinitionArn?: string;

  /**
   * <p>The ARN of the container instances that host the task.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>One or more container overrides.</p>
   */
  overrides?: _TaskOverride;

  /**
   * <p>The last known status of the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task Lifecycle</a>.</p>
   */
  lastStatus?: string;

  /**
   * <p>The desired status of the task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle.html">Task Lifecycle</a>.</p>
   */
  desiredStatus?: string;

  /**
   * <p>The number of CPU units used by the task as expressed in a task definition. It can be expressed as an integer using CPU units, for example <code>1024</code>. It can also be expressed as a string using vCPUs, for example <code>1 vCPU</code> or <code>1 vcpu</code>. String values are converted to an integer indicating the CPU units when the task definition is registered.</p> <p>If you are using the EC2 launch type, this field is optional. Supported values are between <code>128</code> CPU units (<code>0.125</code> vCPUs) and <code>10240</code> CPU units (<code>10</code> vCPUs).</p> <p>If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the <code>memory</code> parameter:</p> <ul> <li> <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p> </li> <li> <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p> </li> <li> <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p> </li> <li> <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p> </li> <li> <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p> </li> </ul>
   */
  cpu?: string;

  /**
   * <p>The amount of memory (in MiB) used by the task as expressed in a task definition. It can be expressed as an integer using MiB, for example <code>1024</code>. It can also be expressed as a string using GB, for example <code>1GB</code> or <code>1 GB</code>. String values are converted to an integer indicating the MiB when the task definition is registered.</p> <p>If you are using the EC2 launch type, this field is optional.</p> <p>If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of supported values for the <code>cpu</code> parameter:</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> </ul>
   */
  memory?: string;

  /**
   * <p>The containers associated with the task.</p>
   */
  containers?: Array<_Container> | Iterable<_Container>;

  /**
   * <p>The tag specified when a task is started. If the task is started by an Amazon ECS service, then the <code>startedBy</code> parameter contains the deployment ID of the service that starts it.</p>
   */
  startedBy?: string;

  /**
   * <p>The version counter for the task. Every time a task experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS task state with CloudWatch Events, you can compare the version of a task reported by the Amazon ECS API actionss with the version reported in CloudWatch Events for the task (inside the <code>detail</code> object) to verify that the version in your event stream is current.</p>
   */
  version?: number;

  /**
   * <p>The reason that the task was stopped.</p>
   */
  stoppedReason?: string;

  /**
   * <p>The stop code indicating why a task was stopped. The <code>stoppedReason</code> may contain additional details.</p>
   */
  stopCode?:
    | "TaskFailedToStart"
    | "EssentialContainerExited"
    | "UserInitiated"
    | string;

  /**
   * <p>The connectivity status of a task.</p>
   */
  connectivity?: "CONNECTED" | "DISCONNECTED" | string;

  /**
   * <p>The Unix timestamp for when the task last went into <code>CONNECTED</code> status.</p>
   */
  connectivityAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the container image pull began.</p>
   */
  pullStartedAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the container image pull completed.</p>
   */
  pullStoppedAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task execution stopped.</p>
   */
  executionStoppedAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task was created (the task entered the <code>PENDING</code> state).</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task started (the task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task stops (transitions from the <code>RUNNING</code> state to <code>STOPPED</code>).</p>
   */
  stoppingAt?: Date | string | number;

  /**
   * <p>The Unix timestamp for when the task was stopped (the task transitioned from the <code>RUNNING</code> state to the <code>STOPPED</code> state).</p>
   */
  stoppedAt?: Date | string | number;

  /**
   * <p>The name of the task group associated with the task.</p>
   */
  group?: string;

  /**
   * <p>The launch type on which your task is running. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  launchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>The platform version on which your task is running. A platform version is only specified for tasks using the Fargate launch type. If one is not specified, the <code>LATEST</code> platform version is used by default. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The Elastic Network Adapter associated with the task if the task uses the <code>awsvpc</code> network mode.</p>
   */
  attachments?: Array<_Attachment> | Iterable<_Attachment>;

  /**
   * <p>The health status for the task, which is determined by the health of the essential containers in the task. If all essential containers in the task are reporting as <code>HEALTHY</code>, then the task status also reports as <code>HEALTHY</code>. If any essential containers in the task are reporting as <code>UNHEALTHY</code> or <code>UNKNOWN</code>, then the task status also reports as <code>UNHEALTHY</code> or <code>UNKNOWN</code>, accordingly.</p> <note> <p>The Amazon ECS container agent does not monitor or report on Docker health checks that are embedded in a container image (such as those specified in a parent image or from the image's Dockerfile) and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.</p> </note>
   */
  healthStatus?: "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTask extends _Task {
  /**
   * <p>One or more container overrides.</p>
   */
  overrides?: _UnmarshalledTaskOverride;

  /**
   * <p>The containers associated with the task.</p>
   */
  containers?: Array<_UnmarshalledContainer>;

  /**
   * <p>The Unix timestamp for when the task last went into <code>CONNECTED</code> status.</p>
   */
  connectivityAt?: Date;

  /**
   * <p>The Unix timestamp for when the container image pull began.</p>
   */
  pullStartedAt?: Date;

  /**
   * <p>The Unix timestamp for when the container image pull completed.</p>
   */
  pullStoppedAt?: Date;

  /**
   * <p>The Unix timestamp for when the task execution stopped.</p>
   */
  executionStoppedAt?: Date;

  /**
   * <p>The Unix timestamp for when the task was created (the task entered the <code>PENDING</code> state).</p>
   */
  createdAt?: Date;

  /**
   * <p>The Unix timestamp for when the task started (the task transitioned from the <code>PENDING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: Date;

  /**
   * <p>The Unix timestamp for when the task stops (transitions from the <code>RUNNING</code> state to <code>STOPPED</code>).</p>
   */
  stoppingAt?: Date;

  /**
   * <p>The Unix timestamp for when the task was stopped (the task transitioned from the <code>RUNNING</code> state to the <code>STOPPED</code> state).</p>
   */
  stoppedAt?: Date;

  /**
   * <p>The Elastic Network Adapter associated with the task if the task uses the <code>awsvpc</code> network mode.</p>
   */
  attachments?: Array<_UnmarshalledAttachment>;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
