import {
  _ContainerDefinition,
  _UnmarshalledContainerDefinition
} from "./_ContainerDefinition";
import { _Volume, _UnmarshalledVolume } from "./_Volume";
import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";
import {
  _TaskDefinitionPlacementConstraint,
  _UnmarshalledTaskDefinitionPlacementConstraint
} from "./_TaskDefinitionPlacementConstraint";
import {
  _ProxyConfiguration,
  _UnmarshalledProxyConfiguration
} from "./_ProxyConfiguration";

/**
 * <p>The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.</p>
 */
export interface _TaskDefinition {
  /**
   * <p>The full Amazon Resource Name (ARN) of the task definition.</p>
   */
  taskDefinitionArn?: string;

  /**
   * <p>A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  containerDefinitions?:
    | Array<_ContainerDefinition>
    | Iterable<_ContainerDefinition>;

  /**
   * <p>The name of a family that this task definition is registered to. A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.</p>
   */
  family?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_IAM_role.html">Amazon ECS Task Role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>IAM roles for tasks on Windows require that the <code>-EnableTaskIAMRole</code> option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code in order to take advantage of the feature. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html">Windows IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  taskRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.</p>
   */
  executionRoleArn?: string;

  /**
   * <p>The Docker networking mode to use for the containers in the task. The valid values are <code>none</code>, <code>bridge</code>, <code>awsvpc</code>, and <code>host</code>. The default Docker network mode is <code>bridge</code>. If you are using the Fargate launch type, the <code>awsvpc</code> network mode is required. If you are using the EC2 launch type, any network mode can be used. If the network mode is set to <code>none</code>, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The <code>host</code> and <code>awsvpc</code> network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the <code>bridge</code> mode.</p> <p>With the <code>host</code> and <code>awsvpc</code> network modes, exposed container ports are mapped directly to the corresponding host port (for the <code>host</code> network mode) or the attached elastic network interface port (for the <code>awsvpc</code> network mode), so you cannot take advantage of dynamic host port mappings. </p> <p>If the network mode is <code>awsvpc</code>, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> value when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Currently, only Amazon ECS-optimized AMIs, other Amazon Linux variants with the <code>ecs-init</code> package, or AWS Fargate infrastructure support the <code>awsvpc</code> network mode. </p> </note> <p>If the network mode is <code>host</code>, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.</p> <p>Docker for Windows uses different network modes than Docker for Linux. When you register a task definition with Windows containers, you must not specify a network mode. If you use the console to register a task definition with Windows containers, you must choose the <code>&lt;default&gt;</code> network mode object. </p> <p>For more information, see <a href="https://docs.docker.com/engine/reference/run/#network-settings">Network settings</a> in the <i>Docker run reference</i>.</p>
   */
  networkMode?: "bridge" | "host" | "awsvpc" | "none" | string;

  /**
   * <p>The revision of the task in a particular family. The revision is a version number of a task definition in a family. When you register a task definition for the first time, the revision is <code>1</code>. Each time that you register a new revision of a task definition in the same family, the revision value always increases by one, even if you have deregistered previous revisions in this family.</p>
   */
  revision?: number;

  /**
   * <p>The list of volume definitions for the task.</p> <p>If your tasks are using the Fargate launch type, the <code>host</code> and <code>sourcePath</code> parameters are not supported.</p> <p>For more information about volume definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  volumes?: Array<_Volume> | Iterable<_Volume>;

  /**
   * <p>The status of the task definition.</p>
   */
  status?: "ACTIVE" | "INACTIVE" | string;

  /**
   * <p>The container instance attributes required by your task. This field is not valid if you are using the Fargate launch type for your task.</p>
   */
  requiresAttributes?: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>An array of placement constraint objects to use for tasks. This field is not valid if you are using the Fargate launch type for your task.</p>
   */
  placementConstraints?:
    | Array<_TaskDefinitionPlacementConstraint>
    | Iterable<_TaskDefinitionPlacementConstraint>;

  /**
   * <p>The launch type to use with your task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  compatibilities?:
    | Array<"EC2" | "FARGATE" | string>
    | Iterable<"EC2" | "FARGATE" | string>;

  /**
   * <p>The launch type the task requires. If no value is specified, it will default to <code>EC2</code>. Valid values include <code>EC2</code> and <code>FARGATE</code>.</p>
   */
  requiresCompatibilities?:
    | Array<"EC2" | "FARGATE" | string>
    | Iterable<"EC2" | "FARGATE" | string>;

  /**
   * <p>The number of <code>cpu</code> units used by the task. If you are using the EC2 launch type, this field is optional and any value can be used. If you are using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the <code>memory</code> parameter:</p> <ul> <li> <p>256 (.25 vCPU) - Available <code>memory</code> values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)</p> </li> <li> <p>512 (.5 vCPU) - Available <code>memory</code> values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)</p> </li> <li> <p>1024 (1 vCPU) - Available <code>memory</code> values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)</p> </li> <li> <p>2048 (2 vCPU) - Available <code>memory</code> values: Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)</p> </li> <li> <p>4096 (4 vCPU) - Available <code>memory</code> values: Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)</p> </li> </ul>
   */
  cpu?: string;

  /**
   * <p>The amount (in MiB) of memory used by the task. If using the EC2 launch type, this field is optional and any value can be used. If using the Fargate launch type, this field is required and you must use one of the following values, which determines your range of valid values for the <code>cpu</code> parameter:</p> <ul> <li> <p>512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available <code>cpu</code> values: 256 (.25 vCPU)</p> </li> <li> <p>1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available <code>cpu</code> values: 512 (.5 vCPU)</p> </li> <li> <p>2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available <code>cpu</code> values: 1024 (1 vCPU)</p> </li> <li> <p>Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 2048 (2 vCPU)</p> </li> <li> <p>Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available <code>cpu</code> values: 4096 (4 vCPU)</p> </li> </ul>
   */
  memory?: string;

  /**
   * <p>The process namespace to use for the containers in the task. The valid values are <code>host</code> or <code>task</code>. If <code>host</code> is specified, then all containers within the tasks that specified the <code>host</code> PID mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If <code>task</code> is specified, all containers within the specified task share the same process namespace. If no value is specified, the default is a private namespace. For more information, see <a href="https://docs.docker.com/engine/reference/run/#pid-settings---pid">PID settings</a> in the <i>Docker run reference</i>.</p> <p>If the <code>host</code> PID mode is used, be aware that there is a heightened risk of undesired process namespace expose. For more information, see <a href="https://docs.docker.com/engine/security/security/">Docker security</a>.</p> <note> <p>This parameter is not supported for Windows containers or tasks using the Fargate launch type.</p> </note>
   */
  pidMode?: "host" | "task" | string;

  /**
   * <p>The IPC resource namespace to use for the containers in the task. The valid values are <code>host</code>, <code>task</code>, or <code>none</code>. If <code>host</code> is specified, then all containers within the tasks that specified the <code>host</code> IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If <code>task</code> is specified, all containers within the specified task share the same IPC resources. If <code>none</code> is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. For more information, see <a href="https://docs.docker.com/engine/reference/run/#ipc-settings---ipc">IPC settings</a> in the <i>Docker run reference</i>.</p> <p>If the <code>host</code> IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose. For more information, see <a href="https://docs.docker.com/engine/security/security/">Docker security</a>.</p> <p>If you are setting namespaced kernel parameters using <code>systemControls</code> for the containers in the task, the following will apply to your IPC resource namespace. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html">System Controls</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <ul> <li> <p>For tasks that use the <code>host</code> IPC mode, IPC namespace related <code>systemControls</code> are not supported.</p> </li> <li> <p>For tasks that use the <code>task</code> IPC mode, IPC namespace related <code>systemControls</code> will apply to all containers within a task.</p> </li> </ul> <note> <p>This parameter is not supported for Windows containers or tasks using the Fargate launch type.</p> </note>
   */
  ipcMode?: "host" | "task" | "none" | string;

  /**
   * <p>The configuration details for the App Mesh proxy.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  proxyConfiguration?: _ProxyConfiguration;
}

export interface _UnmarshalledTaskDefinition extends _TaskDefinition {
  /**
   * <p>A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  containerDefinitions?: Array<_UnmarshalledContainerDefinition>;

  /**
   * <p>The list of volume definitions for the task.</p> <p>If your tasks are using the Fargate launch type, the <code>host</code> and <code>sourcePath</code> parameters are not supported.</p> <p>For more information about volume definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  volumes?: Array<_UnmarshalledVolume>;

  /**
   * <p>The container instance attributes required by your task. This field is not valid if you are using the Fargate launch type for your task.</p>
   */
  requiresAttributes?: Array<_UnmarshalledAttribute>;

  /**
   * <p>An array of placement constraint objects to use for tasks. This field is not valid if you are using the Fargate launch type for your task.</p>
   */
  placementConstraints?: Array<_UnmarshalledTaskDefinitionPlacementConstraint>;

  /**
   * <p>The launch type to use with your task. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  compatibilities?: Array<"EC2" | "FARGATE" | string>;

  /**
   * <p>The launch type the task requires. If no value is specified, it will default to <code>EC2</code>. Valid values include <code>EC2</code> and <code>FARGATE</code>.</p>
   */
  requiresCompatibilities?: Array<"EC2" | "FARGATE" | string>;

  /**
   * <p>The configuration details for the App Mesh proxy.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  proxyConfiguration?: _UnmarshalledProxyConfiguration;
}
