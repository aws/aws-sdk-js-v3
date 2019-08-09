import { _Volume, _UnmarshalledVolume } from "./_Volume";
import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";
import { _MountPoint, _UnmarshalledMountPoint } from "./_MountPoint";
import { _Ulimit, _UnmarshalledUlimit } from "./_Ulimit";
import {
  _NetworkInterface,
  _UnmarshalledNetworkInterface
} from "./_NetworkInterface";
import {
  _ResourceRequirement,
  _UnmarshalledResourceRequirement
} from "./_ResourceRequirement";
import {
  _LinuxParameters,
  _UnmarshalledLinuxParameters
} from "./_LinuxParameters";

/**
 * <p>An object representing the details of a container that is part of a job.</p>
 */
export interface _ContainerDetail {
  /**
   * <p>The image used to start the container.</p>
   */
  image?: string;

  /**
   * <p>The number of VCPUs allocated for the job. </p>
   */
  vcpus?: number;

  /**
   * <p>The number of MiB of memory reserved for the job.</p>
   */
  memory?: number;

  /**
   * <p>The command that is passed to the container. </p>
   */
  command?: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the job upon execution. </p>
   */
  jobRoleArn?: string;

  /**
   * <p>A list of volumes associated with the job.</p>
   */
  volumes?: Array<_Volume> | Iterable<_Volume>;

  /**
   * <p>The environment variables to pass to a container.</p> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>
   */
  environment?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;

  /**
   * <p>The mount points for data volumes in your container.</p>
   */
  mountPoints?: Array<_MountPoint> | Iterable<_MountPoint>;

  /**
   * <p>When this parameter is true, the container is given read-only access to its root file system.</p>
   */
  readonlyRootFilesystem?: boolean;

  /**
   * <p>A list of <code>ulimit</code> values to set in the container.</p>
   */
  ulimits?: Array<_Ulimit> | Iterable<_Ulimit>;

  /**
   * <p>When this parameter is true, the container is given elevated privileges on the host container instance (similar to the <code>root</code> user).</p>
   */
  privileged?: boolean;

  /**
   * <p>The user name to use inside the container.</p>
   */
  user?: string;

  /**
   * <p>The exit code to return upon completion.</p>
   */
  exitCode?: number;

  /**
   * <p>A short (255 max characters) human-readable string to provide additional details about a running or stopped container.</p>
   */
  reason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container instance on which the container is running.</p>
   */
  containerInstanceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the container job. Each container attempt receives a task ARN when they reach the <code>STARTING</code> status.</p>
   */
  taskArn?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is <code>/aws/batch/job</code>. Each container attempt receives a log stream name when they reach the <code>RUNNING</code> status.</p>
   */
  logStreamName?: string;

  /**
   * <p>The instance type of the underlying host infrastructure of a multi-node parallel job.</p>
   */
  instanceType?: string;

  /**
   * <p>The network interfaces associated with the job.</p>
   */
  networkInterfaces?: Array<_NetworkInterface> | Iterable<_NetworkInterface>;

  /**
   * <p>The type and amount of a resource to assign to a container. Currently, the only supported resource is <code>GPU</code>.</p>
   */
  resourceRequirements?:
    | Array<_ResourceRequirement>
    | Iterable<_ResourceRequirement>;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
   */
  linuxParameters?: _LinuxParameters;
}

export interface _UnmarshalledContainerDetail extends _ContainerDetail {
  /**
   * <p>The command that is passed to the container. </p>
   */
  command?: Array<string>;

  /**
   * <p>A list of volumes associated with the job.</p>
   */
  volumes?: Array<_UnmarshalledVolume>;

  /**
   * <p>The environment variables to pass to a container.</p> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>
   */
  environment?: Array<_UnmarshalledKeyValuePair>;

  /**
   * <p>The mount points for data volumes in your container.</p>
   */
  mountPoints?: Array<_UnmarshalledMountPoint>;

  /**
   * <p>A list of <code>ulimit</code> values to set in the container.</p>
   */
  ulimits?: Array<_UnmarshalledUlimit>;

  /**
   * <p>The network interfaces associated with the job.</p>
   */
  networkInterfaces?: Array<_UnmarshalledNetworkInterface>;

  /**
   * <p>The type and amount of a resource to assign to a container. Currently, the only supported resource is <code>GPU</code>.</p>
   */
  resourceRequirements?: Array<_UnmarshalledResourceRequirement>;

  /**
   * <p>Linux-specific modifications that are applied to the container, such as details for device mappings.</p>
   */
  linuxParameters?: _UnmarshalledLinuxParameters;
}
