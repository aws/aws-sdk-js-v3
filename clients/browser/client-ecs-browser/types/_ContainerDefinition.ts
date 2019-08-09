import {
  _RepositoryCredentials,
  _UnmarshalledRepositoryCredentials
} from "./_RepositoryCredentials";
import { _PortMapping, _UnmarshalledPortMapping } from "./_PortMapping";
import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";
import { _MountPoint, _UnmarshalledMountPoint } from "./_MountPoint";
import { _VolumeFrom, _UnmarshalledVolumeFrom } from "./_VolumeFrom";
import {
  _LinuxParameters,
  _UnmarshalledLinuxParameters
} from "./_LinuxParameters";
import { _Secret, _UnmarshalledSecret } from "./_Secret";
import {
  _ContainerDependency,
  _UnmarshalledContainerDependency
} from "./_ContainerDependency";
import { _HostEntry, _UnmarshalledHostEntry } from "./_HostEntry";
import { _Ulimit, _UnmarshalledUlimit } from "./_Ulimit";
import {
  _LogConfiguration,
  _UnmarshalledLogConfiguration
} from "./_LogConfiguration";
import { _HealthCheck, _UnmarshalledHealthCheck } from "./_HealthCheck";
import { _SystemControl, _UnmarshalledSystemControl } from "./_SystemControl";
import {
  _ResourceRequirement,
  _UnmarshalledResourceRequirement
} from "./_ResourceRequirement";

/**
 * <p>Container definitions are used in task definitions to describe the different containers that are launched as part of a task.</p>
 */
export interface _ContainerDefinition {
  /**
   * <p>The name of a container. If you are linking multiple containers together in a task definition, the <code>name</code> of one container can be entered in the <code>links</code> of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. This parameter maps to <code>name</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--name</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. </p>
   */
  name?: string;

  /**
   * <p>The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either <code> <i>repository-url</i>/<i>image</i>:<i>tag</i> </code> or <code> <i>repository-url</i>/<i>image</i>@<i>digest</i> </code>. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to <code>Image</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>IMAGE</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <ul> <li> <p>When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image are not propagated to already running tasks.</p> </li> <li> <p>Images in Amazon ECR repositories can be specified by either using the full <code>registry/repository:tag</code> or <code>registry/repository@digest</code>. For example, <code>012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;:latest</code> or <code>012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE</code>. </p> </li> <li> <p>Images in official repositories on Docker Hub use a single name (for example, <code>ubuntu</code> or <code>mongo</code>).</p> </li> <li> <p>Images in other repositories on Docker Hub are qualified with an organization name (for example, <code>amazon/amazon-ecs-agent</code>).</p> </li> <li> <p>Images in other online repositories are qualified further by a domain name (for example, <code>quay.io/assemblyline/ubuntu</code>).</p> </li> </ul>
   */
  image?: string;

  /**
   * <p>The private repository authentication credentials to use.</p>
   */
  repositoryCredentials?: _RepositoryCredentials;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container. This parameter maps to <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level <code>cpu</code> value.</p> <note> <p>You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instances</a> detail page by 1,024.</p> </note> <p>For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units.</p> <p>Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that is the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task would be guaranteed a minimum of 512 CPU units when needed, and each container could float to higher CPU usage if the other container was not using it, but if both tasks were 100% active all of the time, they would be limited to 512 CPU units.</p> <p>On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. For more information, see <a href="https://docs.docker.com/engine/reference/run/#cpu-share-constraint">CPU share constraint</a> in the Docker documentation. The minimum valid CPU share value that the Linux kernel allows is 2. However, the CPU parameter is not required, and you can use CPU values below 2 in your container definitions. For CPU values below 2 (including null), the behavior varies based on your Amazon ECS container agent version:</p> <ul> <li> <p> <b>Agent versions less than or equal to 1.1.0:</b> Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.</p> </li> <li> <p> <b>Agent versions greater than or equal to 1.2.0:</b> Null, zero, and CPU values of 1 are passed to Docker as 2.</p> </li> </ul> <p>On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that is described in the task definition.</p>
   */
  cpu?: number;

  /**
   * <p>The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task <code>memory</code> value, if one is specified. This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>If your containers are part of a task using the Fargate launch type, this field is optional.</p> <p>For containers that are part of a task using the EC2 launch type, you must specify a non-zero integer for one or both of <code>memory</code> or <code>memoryReservation</code> in container definitions. If you specify both, <code>memory</code> must be greater than <code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then that value is subtracted from the available memory resources for the container instance on which the container is placed. Otherwise, the value of <code>memory</code> is used.</p> <p>The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers.</p>
   */
  memory?: number;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the <code>memory</code> parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to <code>MemoryReservation</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--memory-reservation</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>You must specify a non-zero integer for one or both of <code>memory</code> or <code>memoryReservation</code> in container definitions. If you specify both, <code>memory</code> must be greater than <code>memoryReservation</code>. If you specify <code>memoryReservation</code>, then that value is subtracted from the available memory resources for the container instance on which the container is placed. Otherwise, the value of <code>memory</code> is used.</p> <p>For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a <code>memoryReservation</code> of 128 MiB, and a <code>memory</code> hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.</p> <p>The Docker daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers. </p>
   */
  memoryReservation?: number;

  /**
   * <p>The <code>links</code> parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is <code>bridge</code>. The <code>name:internalName</code> construct is analogous to <code>name:alias</code> in Docker links. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. For more information about linking Docker containers, go to <a href="https://docs.docker.com/network/links/">Legacy container links</a> in the Docker documentation. This parameter maps to <code>Links</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--link</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note> <important> <p>Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.</p> </important>
   */
  links?: Array<string> | Iterable<string>;

  /**
   * <p>The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.</p> <p>For task definitions that use the <code>awsvpc</code> network mode, you should only specify the <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>Port mappings on Windows use the <code>NetNAT</code> gateway address rather than <code>localhost</code>. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. </p> <p>This parameter maps to <code>PortBindings</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--publish</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. If the network mode of a task definition is set to <code>none</code>, then you can't specify port mappings. If the network mode of a task definition is set to <code>host</code>, then host ports must either be undefined or they must match the container port in the port mapping.</p> <note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <b>Network Bindings</b> section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the <code>networkBindings</code> section <a>DescribeTasks</a> responses.</p> </note>
   */
  portMappings?: Array<_PortMapping> | Iterable<_PortMapping>;

  /**
   * <p>If the <code>essential</code> parameter of a container is marked as <code>true</code>, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the <code>essential</code> parameter of a container is marked as <code>false</code>, then its failure does not affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.</p> <p>All tasks must have at least one essential container. If you have an application that is composed of multiple containers, you should group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html">Application Architecture</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  essential?: boolean;

  /**
   * <important> <p>Early versions of the Amazon ECS container agent do not properly handle <code>entryPoint</code> parameters. If you have problems using <code>entryPoint</code>, update your container agent or enter your commands and arguments as <code>command</code> array items instead.</p> </important> <p>The entry point that is passed to the container. This parameter maps to <code>Entrypoint</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--entrypoint</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">https://docs.docker.com/engine/reference/builder/#entrypoint</a>.</p>
   */
  entryPoint?: Array<string> | Iterable<string>;

  /**
   * <p>The command that is passed to the container. This parameter maps to <code>Cmd</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>. If there are multiple arguments, each argument should be a separated string in the array.</p>
   */
  command?: Array<string> | Iterable<string>;

  /**
   * <p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <important> <p>We do not recommend using plaintext environment variables for sensitive information, such as credential data.</p> </important>
   */
  environment?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;

  /**
   * <p>The mount points for data volumes in your container.</p> <p>This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>Windows containers can mount whole directories on the same drive as <code>$env:ProgramData</code>. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives.</p>
   */
  mountPoints?: Array<_MountPoint> | Iterable<_MountPoint>;

  /**
   * <p>Data volumes to mount from another container. This parameter maps to <code>VolumesFrom</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--volumes-from</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  volumesFrom?: Array<_VolumeFrom> | Iterable<_VolumeFrom>;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see <a>KernelCapabilities</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  linuxParameters?: _LinuxParameters;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  secrets?: Array<_Secret> | Iterable<_Secret>;

  /**
   * <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later.</p>
   */
  dependsOn?: Array<_ContainerDependency> | Iterable<_ContainerDependency>;

  /**
   * <p>Time duration to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a <code>COMPLETE</code>, <code>SUCCESS</code>, or <code>HEALTHY</code> status. If a <code>startTimeout</code> value is specified for containerB and it does not reach the desired status within that time then containerA will give up and not start. This results in the task transitioning to a <code>STOPPED</code> state.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to enable a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later.</p>
   */
  startTimeout?: number;

  /**
   * <p>Time duration to wait before the container is forcefully killed if it doesn't exit normally on its own. For tasks using the Fargate launch type, the max <code>stopTimeout</code> value is 2 minutes. This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later.</p> <p>For tasks using the EC2 launch type, the stop timeout value for the container takes precedence over the <code>ECS_CONTAINER_STOP_TIMEOUT</code> container agent configuration parameter, if used. Container instances require at least version 1.26.0 of the container agent to enable a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  stopTimeout?: number;

  /**
   * <p>The hostname to use for your container. This parameter maps to <code>Hostname</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--hostname</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>The <code>hostname</code> parameter is not supported if you are using the <code>awsvpc</code> network mode.</p> </note>
   */
  hostname?: string;

  /**
   * <p>The user name to use inside the container. This parameter maps to <code>User</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--user</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>You can use the following formats. If specifying a UID or GID, you must specify it as a positive integer.</p> <ul> <li> <p> <code>user</code> </p> </li> <li> <p> <code>user:group</code> </p> </li> <li> <p> <code>uid</code> </p> </li> <li> <p> <code>uid:gid</code> </p> </li> <li> <p> <code>user:gid</code> </p> </li> <li> <p> <code>uid:group</code> </p> </li> </ul> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  user?: string;

  /**
   * <p>The working directory in which to run commands inside the container. This parameter maps to <code>WorkingDir</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--workdir</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  workingDirectory?: string;

  /**
   * <p>When this parameter is true, networking is disabled within the container. This parameter maps to <code>NetworkDisabled</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  disableNetworking?: boolean;

  /**
   * <p>When this parameter is true, the container is given elevated privileges on the host container instance (similar to the <code>root</code> user). This parameter maps to <code>Privileged</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--privileged</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers or tasks using the Fargate launch type.</p> </note>
   */
  privileged?: boolean;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file system. This parameter maps to <code>ReadonlyRootfs</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--read-only</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  readonlyRootFilesystem?: boolean;

  /**
   * <p>A list of DNS servers that are presented to the container. This parameter maps to <code>Dns</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--dns</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  dnsServers?: Array<string> | Iterable<string>;

  /**
   * <p>A list of DNS search domains that are presented to the container. This parameter maps to <code>DnsSearch</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--dns-search</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  dnsSearchDomains?: Array<string> | Iterable<string>;

  /**
   * <p>A list of hostnames and IP address mappings to append to the <code>/etc/hosts</code> file on the container. This parameter maps to <code>ExtraHosts</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--add-host</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers or tasks that use the <code>awsvpc</code> network mode.</p> </note>
   */
  extraHosts?: Array<_HostEntry> | Iterable<_HostEntry>;

  /**
   * <p>A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This field is not valid for containers in tasks using the Fargate launch type.</p> <p>This parameter maps to <code>SecurityOpt</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--security-opt</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>The Amazon ECS container agent running on a container instance must register with the <code>ECS_SELINUX_CAPABLE=true</code> or <code>ECS_APPARMOR_CAPABLE=true</code> environment variables before containers placed on that instance can use these security options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  dockerSecurityOptions?: Array<string> | Iterable<string>;

  /**
   * <p>When this parameter is <code>true</code>, this allows you to deploy containerized applications that require <code>stdin</code> or a <code>tty</code> to be allocated. This parameter maps to <code>OpenStdin</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--interactive</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  interactive?: boolean;

  /**
   * <p>When this parameter is <code>true</code>, a TTY is allocated. This parameter maps to <code>Tty</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--tty</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  pseudoTerminal?: boolean;

  /**
   * <p>A key/value map of labels to add to the container. This parameter maps to <code>Labels</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--label</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p>
   */
  dockerLabels?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Valid naming values are displayed in the <a>Ulimit</a> data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  ulimits?: Array<_Ulimit> | Iterable<_Ulimit>;

  /**
   * <p>The log configuration specification for the container.</p> <p>For tasks using the Fargate launch type, the supported log drivers are <code>awslogs</code> and <code>splunk</code>.</p> <p>For tasks using the EC2 launch type, the supported log drivers are <code>awslogs</code>, <code>syslog</code>, <code>gelf</code>, <code>fluentd</code>, <code>splunk</code>, <code>journald</code>, and <code>json-file</code>.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging driver that the Docker daemon uses. However the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <note> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p> <note> <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
   */
  logConfiguration?: _LogConfiguration;

  /**
   * <p>The health check command and associated configuration parameters for the container. This parameter maps to <code>HealthCheck</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>HEALTHCHECK</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  healthCheck?: _HealthCheck;

  /**
   * <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network modes. For tasks that use the <code>awsvpc</code> network mode, the container that is started last determines which <code>systemControls</code> parameters take effect. For tasks that use the <code>host</code> network mode, it changes the container instance's namespaced kernel parameters as well as the containers.</p> </note>
   */
  systemControls?: Array<_SystemControl> | Iterable<_SystemControl>;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a GPU.</p>
   */
  resourceRequirements?:
    | Array<_ResourceRequirement>
    | Iterable<_ResourceRequirement>;
}

export interface _UnmarshalledContainerDefinition extends _ContainerDefinition {
  /**
   * <p>The private repository authentication credentials to use.</p>
   */
  repositoryCredentials?: _UnmarshalledRepositoryCredentials;

  /**
   * <p>The <code>links</code> parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is <code>bridge</code>. The <code>name:internalName</code> construct is analogous to <code>name:alias</code> in Docker links. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. For more information about linking Docker containers, go to <a href="https://docs.docker.com/network/links/">Legacy container links</a> in the Docker documentation. This parameter maps to <code>Links</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--link</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note> <important> <p>Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.</p> </important>
   */
  links?: Array<string>;

  /**
   * <p>The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.</p> <p>For task definitions that use the <code>awsvpc</code> network mode, you should only specify the <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>Port mappings on Windows use the <code>NetNAT</code> gateway address rather than <code>localhost</code>. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. </p> <p>This parameter maps to <code>PortBindings</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--publish</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. If the network mode of a task definition is set to <code>none</code>, then you can't specify port mappings. If the network mode of a task definition is set to <code>host</code>, then host ports must either be undefined or they must match the container port in the port mapping.</p> <note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <b>Network Bindings</b> section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the <code>networkBindings</code> section <a>DescribeTasks</a> responses.</p> </note>
   */
  portMappings?: Array<_UnmarshalledPortMapping>;

  /**
   * <important> <p>Early versions of the Amazon ECS container agent do not properly handle <code>entryPoint</code> parameters. If you have problems using <code>entryPoint</code>, update your container agent or enter your commands and arguments as <code>command</code> array items instead.</p> </important> <p>The entry point that is passed to the container. This parameter maps to <code>Entrypoint</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--entrypoint</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#entrypoint">https://docs.docker.com/engine/reference/builder/#entrypoint</a>.</p>
   */
  entryPoint?: Array<string>;

  /**
   * <p>The command that is passed to the container. This parameter maps to <code>Cmd</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>COMMAND</code> parameter to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. For more information, see <a href="https://docs.docker.com/engine/reference/builder/#cmd">https://docs.docker.com/engine/reference/builder/#cmd</a>. If there are multiple arguments, each argument should be a separated string in the array.</p>
   */
  command?: Array<string>;

  /**
   * <p>The environment variables to pass to a container. This parameter maps to <code>Env</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--env</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <important> <p>We do not recommend using plaintext environment variables for sensitive information, such as credential data.</p> </important>
   */
  environment?: Array<_UnmarshalledKeyValuePair>;

  /**
   * <p>The mount points for data volumes in your container.</p> <p>This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--volume</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>Windows containers can mount whole directories on the same drive as <code>$env:ProgramData</code>. Windows containers cannot mount directories on a different drive, and mount point cannot be across drives.</p>
   */
  mountPoints?: Array<_UnmarshalledMountPoint>;

  /**
   * <p>Data volumes to mount from another container. This parameter maps to <code>VolumesFrom</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--volumes-from</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  volumesFrom?: Array<_UnmarshalledVolumeFrom>;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see <a>KernelCapabilities</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  linuxParameters?: _UnmarshalledLinuxParameters;

  /**
   * <p>The secrets to pass to the container. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  secrets?: Array<_UnmarshalledSecret>;

  /**
   * <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This parameter is available for tasks using the Fargate launch type in the Ohio (us-east-2) region only and the task or service requires platform version 1.3.0 or later.</p>
   */
  dependsOn?: Array<_UnmarshalledContainerDependency>;

  /**
   * <p>A list of DNS servers that are presented to the container. This parameter maps to <code>Dns</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--dns</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  dnsServers?: Array<string>;

  /**
   * <p>A list of DNS search domains that are presented to the container. This parameter maps to <code>DnsSearch</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--dns-search</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  dnsSearchDomains?: Array<string>;

  /**
   * <p>A list of hostnames and IP address mappings to append to the <code>/etc/hosts</code> file on the container. This parameter maps to <code>ExtraHosts</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--add-host</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>This parameter is not supported for Windows containers or tasks that use the <code>awsvpc</code> network mode.</p> </note>
   */
  extraHosts?: Array<_UnmarshalledHostEntry>;

  /**
   * <p>A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems. This field is not valid for containers in tasks using the Fargate launch type.</p> <p>This parameter maps to <code>SecurityOpt</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--security-opt</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>The Amazon ECS container agent running on a container instance must register with the <code>ECS_SELINUX_CAPABLE=true</code> or <code>ECS_APPARMOR_CAPABLE=true</code> environment variables before containers placed on that instance can use these security options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  dockerSecurityOptions?: Array<string>;

  /**
   * <p>A key/value map of labels to add to the container. This parameter maps to <code>Labels</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--label</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p>
   */
  dockerLabels?: { [key: string]: string };

  /**
   * <p>A list of <code>ulimits</code> to set in the container. This parameter maps to <code>Ulimits</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--ulimit</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Valid naming values are displayed in the <a>Ulimit</a> data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p> <note> <p>This parameter is not supported for Windows containers.</p> </note>
   */
  ulimits?: Array<_UnmarshalledUlimit>;

  /**
   * <p>The log configuration specification for the container.</p> <p>For tasks using the Fargate launch type, the supported log drivers are <code>awslogs</code> and <code>splunk</code>.</p> <p>For tasks using the EC2 launch type, the supported log drivers are <code>awslogs</code>, <code>syslog</code>, <code>gelf</code>, <code>fluentd</code>, <code>splunk</code>, <code>journald</code>, and <code>json-file</code>.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. By default, containers use the same logging driver that the Docker daemon uses. However the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <note> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the <a>LogConfiguration</a> data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </note> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: <code>sudo docker version --format '{{.Server.APIVersion}}'</code> </p> <note> <p>The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
   */
  logConfiguration?: _UnmarshalledLogConfiguration;

  /**
   * <p>The health check command and associated configuration parameters for the container. This parameter maps to <code>HealthCheck</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>HEALTHCHECK</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   */
  healthCheck?: _UnmarshalledHealthCheck;

  /**
   * <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network modes. For tasks that use the <code>awsvpc</code> network mode, the container that is started last determines which <code>systemControls</code> parameters take effect. For tasks that use the <code>host</code> network mode, it changes the container instance's namespaced kernel parameters as well as the containers.</p> </note>
   */
  systemControls?: Array<_UnmarshalledSystemControl>;

  /**
   * <p>The type and amount of a resource to assign to a container. The only supported resource is a GPU.</p>
   */
  resourceRequirements?: Array<_UnmarshalledResourceRequirement>;
}
