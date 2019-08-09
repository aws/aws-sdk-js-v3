import { _VersionInfo, _UnmarshalledVersionInfo } from "./_VersionInfo";
import { _Resource, _UnmarshalledResource } from "./_Resource";
import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";
import { _Attachment, _UnmarshalledAttachment } from "./_Attachment";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.</p>
 */
export interface _ContainerInstance {
  /**
   * <p>The Amazon Resource Name (ARN) of the container instance. The ARN contains the <code>arn:aws:ecs</code> namespace, followed by the Region of the container instance, the AWS account ID of the container instance owner, the <code>container-instance</code> namespace, and then the container instance ID. For example, <code>arn:aws:ecs:region:aws_account_id:container-instance/container_instance_ID</code>.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The EC2 instance ID of the container instance.</p>
   */
  ec2InstanceId?: string;

  /**
   * <p>The version counter for the container instance. Every time a container instance experiences a change that triggers a CloudWatch event, the version counter is incremented. If you are replicating your Amazon ECS container instance state with CloudWatch Events, you can compare the version of a container instance reported by the Amazon ECS APIs with the version reported in CloudWatch Events for the container instance (inside the <code>detail</code> object) to verify that the version in your event stream is current.</p>
   */
  version?: number;

  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon running on the container instance.</p>
   */
  versionInfo?: _VersionInfo;

  /**
   * <p>For CPU and memory resource types, this parameter describes the remaining CPU and memory that has not already been allocated to tasks and is therefore available for new tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent (at instance registration time) and any task containers that have reserved port mappings on the host (with the <code>host</code> or <code>bridge</code> network mode). Any port that is not specified here is available for new tasks.</p>
   */
  remainingResources?: Array<_Resource> | Iterable<_Resource>;

  /**
   * <p>For CPU and memory resource types, this parameter describes the amount of each resource that was available on the container instance when the container agent registered it with Amazon ECS. This value represents the total amount of CPU and memory that can be allocated on this container instance to tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent when it registered the container instance with Amazon ECS.</p>
   */
  registeredResources?: Array<_Resource> | Iterable<_Resource>;

  /**
   * <p>The status of the container instance. The valid values are <code>REGISTERING</code>, <code>REGISTRATION_FAILED</code>, <code>ACTIVE</code>, <code>INACTIVE</code>, <code>DEREGISTERING</code>, or <code>DRAINING</code>.</p> <p>If your account has opted in to the <code>awsvpcTrunking</code> account setting, then any newly registered container instance will transition to a <code>REGISTERING</code> status while the trunk elastic network interface is provisioned for the instance. If the registration fails, the instance will transition to a <code>REGISTRATION_FAILED</code> status. You can describe the container instance and see the reason for failure in the <code>statusReason</code> parameter. Once the container instance is terminated, the instance transitions to a <code>DEREGISTERING</code> status while the trunk elastic network interface is deprovisioned. The instance then transitions to an <code>INACTIVE</code> status.</p> <p>The <code>ACTIVE</code> status indicates that the container instance can accept tasks. The <code>DRAINING</code> indicates that new tasks are not placed on the container instance and any service tasks running on the container instance are removed if possible. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-draining.html">Container Instance Draining</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  status?: string;

  /**
   * <p>The reason that the container instance reached its current status.</p>
   */
  statusReason?: string;

  /**
   * <p>This parameter returns <code>true</code> if the agent is connected to Amazon ECS. Registered instances with an agent that may be unhealthy or stopped return <code>false</code>. Only instances connected to an agent can accept placement requests.</p>
   */
  agentConnected?: boolean;

  /**
   * <p>The number of tasks on the container instance that are in the <code>RUNNING</code> status.</p>
   */
  runningTasksCount?: number;

  /**
   * <p>The number of tasks on the container instance that are in the <code>PENDING</code> status.</p>
   */
  pendingTasksCount?: number;

  /**
   * <p>The status of the most recent agent update. If an update has never been requested, this value is <code>NULL</code>.</p>
   */
  agentUpdateStatus?:
    | "PENDING"
    | "STAGING"
    | "STAGED"
    | "UPDATING"
    | "UPDATED"
    | "FAILED"
    | string;

  /**
   * <p>The attributes set for the container instance, either by the Amazon ECS container agent at instance registration or manually with the <a>PutAttributes</a> operation.</p>
   */
  attributes?: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The Unix timestamp for when the container instance was registered.</p>
   */
  registeredAt?: Date | string | number;

  /**
   * <p>The resources attached to a container instance, such as elastic network interfaces.</p>
   */
  attachments?: Array<_Attachment> | Iterable<_Attachment>;

  /**
   * <p>The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledContainerInstance extends _ContainerInstance {
  /**
   * <p>The version information for the Amazon ECS container agent and Docker daemon running on the container instance.</p>
   */
  versionInfo?: _UnmarshalledVersionInfo;

  /**
   * <p>For CPU and memory resource types, this parameter describes the remaining CPU and memory that has not already been allocated to tasks and is therefore available for new tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent (at instance registration time) and any task containers that have reserved port mappings on the host (with the <code>host</code> or <code>bridge</code> network mode). Any port that is not specified here is available for new tasks.</p>
   */
  remainingResources?: Array<_UnmarshalledResource>;

  /**
   * <p>For CPU and memory resource types, this parameter describes the amount of each resource that was available on the container instance when the container agent registered it with Amazon ECS. This value represents the total amount of CPU and memory that can be allocated on this container instance to tasks. For port resource types, this parameter describes the ports that were reserved by the Amazon ECS container agent when it registered the container instance with Amazon ECS.</p>
   */
  registeredResources?: Array<_UnmarshalledResource>;

  /**
   * <p>The attributes set for the container instance, either by the Amazon ECS container agent at instance registration or manually with the <a>PutAttributes</a> operation.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;

  /**
   * <p>The Unix timestamp for when the container instance was registered.</p>
   */
  registeredAt?: Date;

  /**
   * <p>The resources attached to a container instance, such as elastic network interfaces.</p>
   */
  attachments?: Array<_UnmarshalledAttachment>;

  /**
   * <p>The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
