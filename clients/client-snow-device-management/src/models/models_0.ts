// smithy-typescript generated code
import type {
  AttachmentStatus,
  ExecutionState,
  InstanceStateName,
  IpAddressAssignment,
  PhysicalConnectorType,
  TaskState,
  UnlockState,
} from "./enums";

/**
 * @public
 */
export interface CancelTaskInput {
  /**
   * The ID of the task that you are attempting to cancel. You can retrieve a task ID by using the `ListTasks` operation.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelTaskOutput {
  /**
   * The ID of the task that you are attempting to cancel.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * The physical capacity of the Amazon Web Services Snow Family device.
 *
 * @public
 */
export interface Capacity {
  /**
   * The name of the type of capacity, such as memory.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unit of measure for the type of capacity.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The total capacity on the device.
   *
   * @public
   */
  total?: number | undefined;

  /**
   * The amount of capacity used on the device.
   *
   * @public
   */
  used?: number | undefined;

  /**
   * The amount of capacity available for use on the device.
   *
   * @public
   */
  available?: number | undefined;
}

/**
 * A structure used to reboot the device.
 *
 * @public
 */
export interface Reboot {}

/**
 * A structure used to unlock a device.
 *
 * @public
 */
export interface Unlock {}

/**
 * The command given to the device to execute.
 *
 * @public
 */
export type Command =
  | Command.RebootMember
  | Command.UnlockMember
  | Command.$UnknownMember;

/**
 * @public
 */
export namespace Command {
  /**
   * Unlocks the device.
   *
   * @public
   */
  export interface UnlockMember {
    unlock: Unlock;
    reboot?: never;
    $unknown?: never;
  }

  /**
   * Reboots the device.
   *
   * @public
   */
  export interface RebootMember {
    unlock?: never;
    reboot: Reboot;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    unlock?: never;
    reboot?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    unlock: (value: Unlock) => T;
    reboot: (value: Reboot) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The options for how a device's CPU is configured.
 *
 * @public
 */
export interface CpuOptions {
  /**
   * The number of cores that the CPU can use.
   *
   * @public
   */
  coreCount?: number | undefined;

  /**
   * The number of threads per core in the CPU.
   *
   * @public
   */
  threadsPerCore?: number | undefined;
}

/**
 * @public
 */
export interface CreateTaskInput {
  /**
   * A list of managed device IDs.
   *
   * @public
   */
  targets: string[] | undefined;

  /**
   * The task to be performed. Only one task is executed on a device at a time.
   *
   * @public
   */
  command: Command | undefined;

  /**
   * A description of the task and its targets.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A token ensuring that the action is called only once with the specified details.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTaskOutput {
  /**
   * The ID of the task that you created.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task that you created.
   *
   * @public
   */
  taskArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceInput {
  /**
   * The ID of the device that you are checking the information of.
   *
   * @public
   */
  managedDeviceId: string | undefined;
}

/**
 * The details about the physical network interface for the device.
 *
 * @public
 */
export interface PhysicalNetworkInterface {
  /**
   * The physical network interface ID.
   *
   * @public
   */
  physicalNetworkInterfaceId?: string | undefined;

  /**
   * The physical connector type.
   *
   * @public
   */
  physicalConnectorType?: PhysicalConnectorType | undefined;

  /**
   * A value that describes whether the IP address is dynamic or persistent.
   *
   * @public
   */
  ipAddressAssignment?: IpAddressAssignment | undefined;

  /**
   * The IP address of the device.
   *
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * The netmask used to divide the IP address into subnets.
   *
   * @public
   */
  netmask?: string | undefined;

  /**
   * The default gateway of the device.
   *
   * @public
   */
  defaultGateway?: string | undefined;

  /**
   * The MAC address of the device.
   *
   * @public
   */
  macAddress?: string | undefined;
}

/**
 * Information about the software on the device.
 *
 * @public
 */
export interface SoftwareInformation {
  /**
   * The version of the software currently installed on the device.
   *
   * @public
   */
  installedVersion?: string | undefined;

  /**
   * The version of the software being installed on the device.
   *
   * @public
   */
  installingVersion?: string | undefined;

  /**
   * The state of the software that is installed or that is being installed on the device.
   *
   * @public
   */
  installState?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceOutput {
  /**
   * When the device last contacted the Amazon Web Services Cloud. Indicates that the device is online.
   *
   * @public
   */
  lastReachedOutAt?: Date | undefined;

  /**
   * When the device last pushed an update to the Amazon Web Services Cloud. Indicates when the device cache was refreshed.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ID of the device that you checked the information for.
   *
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  managedDeviceArn?: string | undefined;

  /**
   * The type of Amazon Web Services Snow Family device.
   *
   * @public
   */
  deviceType?: string | undefined;

  /**
   * The ID of the job used when ordering the device.
   *
   * @public
   */
  associatedWithJob?: string | undefined;

  /**
   * The current state of the device.
   *
   * @public
   */
  deviceState?: UnlockState | undefined;

  /**
   * The network interfaces available on the device.
   *
   * @public
   */
  physicalNetworkInterfaces?: PhysicalNetworkInterface[] | undefined;

  /**
   * The hardware specifications of the device.
   *
   * @public
   */
  deviceCapacities?: Capacity[] | undefined;

  /**
   * The software installed on the device.
   *
   * @public
   */
  software?: SoftwareInformation | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceEc2Input {
  /**
   * The ID of the managed device.
   *
   * @public
   */
  managedDeviceId: string | undefined;

  /**
   * A list of instance IDs associated with the managed device.
   *
   * @public
   */
  instanceIds: string[] | undefined;
}

/**
 * Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
 *
 * @public
 */
export interface EbsInstanceBlockDevice {
  /**
   * When the attachment was initiated.
   *
   * @public
   */
  attachTime?: Date | undefined;

  /**
   * A value that indicates whether the volume is deleted on instance termination.
   *
   * @public
   */
  deleteOnTermination?: boolean | undefined;

  /**
   * The attachment state.
   *
   * @public
   */
  status?: AttachmentStatus | undefined;

  /**
   * The ID of the Amazon EBS volume.
   *
   * @public
   */
  volumeId?: string | undefined;
}

/**
 * The description of a block device mapping.
 *
 * @public
 */
export interface InstanceBlockDeviceMapping {
  /**
   * The block device name.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The parameters used to automatically set up Amazon Elastic Block Store (Amazon EBS) volumes when the instance is launched.
   *
   * @public
   */
  ebs?: EbsInstanceBlockDevice | undefined;
}

/**
 * Information about the device's security group.
 *
 * @public
 */
export interface SecurityGroupIdentifier {
  /**
   * The security group ID.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * The security group name.
   *
   * @public
   */
  groupName?: string | undefined;
}

/**
 * The description of the current state of an instance.
 *
 * @public
 */
export interface InstanceState {
  /**
   * The state of the instance as a 16-bit unsigned integer.
   *
   * The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values between 256 and 65,535. These numerical values are used for internal purposes and should be ignored.
   *
   * The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values between 0 and 255.
   *
   * The valid values for the instance state code are all in the range of the low byte. These values are:
   *
   * - `0` : `pending`
   * - `16` : `running`
   * - `32` : `shutting-down`
   * - `48` : `terminated`
   * - `64` : `stopping`
   * - `80` : `stopped`
   *
   * You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in decimal.
   *
   * @public
   */
  code?: number | undefined;

  /**
   * The current state of the instance.
   *
   * @public
   */
  name?: InstanceStateName | undefined;
}

/**
 * The description of an instance. Currently, Amazon EC2 instances are the only supported instance type.
 *
 * @public
 */
export interface Instance {
  /**
   * The ID of the AMI used to launch the instance.
   *
   * @public
   */
  imageId?: string | undefined;

  /**
   * The Amazon Machine Image (AMI) launch index, which you can use to find this instance in the launch group.
   *
   * @public
   */
  amiLaunchIndex?: number | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  instanceId?: string | undefined;

  /**
   * The description of the current state of an instance.
   *
   * @public
   */
  state?: InstanceState | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The private IPv4 address assigned to the instance.
   *
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * The public IPv4 address assigned to the instance.
   *
   * @public
   */
  publicIpAddress?: string | undefined;

  /**
   * When the instance was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the instance was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Any block device mapping entries for the instance.
   *
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * The security groups for the instance.
   *
   * @public
   */
  securityGroups?: SecurityGroupIdentifier[] | undefined;

  /**
   * The CPU options for the instance.
   *
   * @public
   */
  cpuOptions?: CpuOptions | undefined;

  /**
   * The device name of the root device volume (for example, `/dev/sda1`).
   *
   * @public
   */
  rootDeviceName?: string | undefined;
}

/**
 * The details about the instance.
 *
 * @public
 */
export interface InstanceSummary {
  /**
   * A structure containing details about the instance.
   *
   * @public
   */
  instance?: Instance | undefined;

  /**
   * When the instance summary was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceEc2Output {
  /**
   * A list of structures containing information about each instance.
   *
   * @public
   */
  instances?: InstanceSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionInput {
  /**
   * The ID of the task that the action is describing.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The ID of the managed device.
   *
   * @public
   */
  managedDeviceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionOutput {
  /**
   * The ID of the task being executed on the device.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The ID of the execution.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The ID of the managed device that the task is being executed on.
   *
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * The current state of the execution.
   *
   * @public
   */
  state?: ExecutionState | undefined;

  /**
   * When the execution began.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * When the status of the execution was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTaskInput {
  /**
   * The ID of the task to be described.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTaskOutput {
  /**
   * The ID of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The managed devices that the task was sent to.
   *
   * @public
   */
  targets?: string[] | undefined;

  /**
   * The current state of the task.
   *
   * @public
   */
  state?: TaskState | undefined;

  /**
   * When the `CreateTask` operation was called.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * When the state of the task was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * When the task was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The description provided of the task and managed devices.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Identifying information about the device.
 *
 * @public
 */
export interface DeviceSummary {
  /**
   * The ID of the device.
   *
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  managedDeviceArn?: string | undefined;

  /**
   * The ID of the job used to order the device.
   *
   * @public
   */
  associatedWithJob?: string | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListExecutionsInput {
  /**
   * The ID of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * A structure used to filter the tasks by their current state.
   *
   * @public
   */
  state?: ExecutionState | undefined;

  /**
   * The maximum number of tasks to list per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token to continue to the next page of tasks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of a task execution on a specified device.
 *
 * @public
 */
export interface ExecutionSummary {
  /**
   * The ID of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The ID of the execution.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The ID of the managed device that the task is being executed on.
   *
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * The state of the execution.
   *
   * @public
   */
  state?: ExecutionState | undefined;
}

/**
 * @public
 */
export interface ListExecutionsOutput {
  /**
   * A list of executions. Each execution contains the task ID, the device that the task is executing on, the execution ID, and the status of the execution.
   *
   * @public
   */
  executions?: ExecutionSummary[] | undefined;

  /**
   * A pagination token to continue to the next page of executions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceResourcesInput {
  /**
   * The ID of the managed device that you are listing the resources of.
   *
   * @public
   */
  managedDeviceId: string | undefined;

  /**
   * A structure used to filter the results by type of resource.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The maximum number of resources per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token to continue to the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a resource available on the device.
 *
 * @public
 */
export interface ResourceSummary {
  /**
   * The resource type.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceResourcesOutput {
  /**
   * A structure defining the resource's type, Amazon Resource Name (ARN), and ID.
   *
   * @public
   */
  resources?: ResourceSummary[] | undefined;

  /**
   * A pagination token to continue to the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesInput {
  /**
   * The ID of the job used to order the device.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The maximum number of devices to list per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token to continue to the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesOutput {
  /**
   * A list of device structures that contain information about the device.
   *
   * @public
   */
  devices?: DeviceSummary[] | undefined;

  /**
   * A pagination token to continue to the next page of devices.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the device or task.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tags for the device or task.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTasksInput {
  /**
   * A structure used to filter the list of tasks.
   *
   * @public
   */
  state?: TaskState | undefined;

  /**
   * The maximum number of tasks per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token to continue to the next page of tasks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the task assigned to one or many devices.
 *
 * @public
 */
export interface TaskSummary {
  /**
   * The task ID.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  taskArn?: string | undefined;

  /**
   * The state of the task assigned to one or many devices.
   *
   * @public
   */
  state?: TaskState | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTasksOutput {
  /**
   * A list of task structures containing details about each task.
   *
   * @public
   */
  tasks?: TaskSummary[] | undefined;

  /**
   * A pagination token to continue to the next page of tasks.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the device or task.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the device or task.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
