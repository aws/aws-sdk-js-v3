// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SnowDeviceManagementServiceException as __BaseException } from "./SnowDeviceManagementServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  ATTACHED: "ATTACHED",
  ATTACHING: "ATTACHING",
  DETACHED: "DETACHED",
  DETACHING: "DETACHING",
} as const;

/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 */
export interface CancelTaskInput {
  /**
   * <p>The ID of the task that you are attempting to cancel. You can retrieve a task ID by using
   *       the <code>ListTasks</code> operation.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelTaskOutput {
  /**
   * <p>The ID of the task that you are attempting to cancel.</p>
   * @public
   */
  taskId?: string | undefined;
}

/**
 * <p>An unexpected error occurred while processing the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request references a resource that doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>The physical capacity of the Amazon Web Services Snow Family device. </p>
 * @public
 */
export interface Capacity {
  /**
   * <p>The name of the type of capacity, such as memory.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unit of measure for the type of capacity.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>The total capacity on the device.</p>
   * @public
   */
  total?: number | undefined;

  /**
   * <p>The amount of capacity used on the device.</p>
   * @public
   */
  used?: number | undefined;

  /**
   * <p>The amount of capacity available for use on the device.</p>
   * @public
   */
  available?: number | undefined;
}

/**
 * <p>A structure used to reboot the device.</p>
 * @public
 */
export interface Reboot {}

/**
 * <p>A structure used to unlock a device.</p>
 * @public
 */
export interface Unlock {}

/**
 * <p>The command given to the device to execute.</p>
 * @public
 */
export type Command = Command.RebootMember | Command.UnlockMember | Command.$UnknownMember;

/**
 * @public
 */
export namespace Command {
  /**
   * <p>Unlocks the device.</p>
   * @public
   */
  export interface UnlockMember {
    unlock: Unlock;
    reboot?: never;
    $unknown?: never;
  }

  /**
   * <p>Reboots the device.</p>
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
 * <p>The options for how a device's CPU is configured.</p>
 * @public
 */
export interface CpuOptions {
  /**
   * <p>The number of cores that the CPU can use.</p>
   * @public
   */
  coreCount?: number | undefined;

  /**
   * <p>The number of threads per core in the CPU.</p>
   * @public
   */
  threadsPerCore?: number | undefined;
}

/**
 * @public
 */
export interface CreateTaskInput {
  /**
   * <p>A list of managed device IDs.</p>
   * @public
   */
  targets: string[] | undefined;

  /**
   * <p>The task to be performed. Only one task is executed on a device at a time.</p>
   * @public
   */
  command: Command | undefined;

  /**
   * <p>A description of the task and its targets.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTaskOutput {
  /**
   * <p>The ID of the task that you created.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that you created.</p>
   * @public
   */
  taskArn?: string | undefined;
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeDeviceInput {
  /**
   * <p>The ID of the device that you are checking the information of.</p>
   * @public
   */
  managedDeviceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UnlockState = {
  LOCKED: "LOCKED",
  UNLOCKED: "UNLOCKED",
  UNLOCKING: "UNLOCKING",
} as const;

/**
 * @public
 */
export type UnlockState = (typeof UnlockState)[keyof typeof UnlockState];

/**
 * @public
 * @enum
 */
export const IpAddressAssignment = {
  DHCP: "DHCP",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type IpAddressAssignment = (typeof IpAddressAssignment)[keyof typeof IpAddressAssignment];

/**
 * @public
 * @enum
 */
export const PhysicalConnectorType = {
  QSFP: "QSFP",
  RJ45: "RJ45",
  RJ45_2: "RJ45_2",
  SFP_PLUS: "SFP_PLUS",
  WIFI: "WIFI",
} as const;

/**
 * @public
 */
export type PhysicalConnectorType = (typeof PhysicalConnectorType)[keyof typeof PhysicalConnectorType];

/**
 * <p>The details about the physical network interface for the device.</p>
 * @public
 */
export interface PhysicalNetworkInterface {
  /**
   * <p>The physical network interface ID.</p>
   * @public
   */
  physicalNetworkInterfaceId?: string | undefined;

  /**
   * <p>The
   *       physical
   *       connector type.</p>
   * @public
   */
  physicalConnectorType?: PhysicalConnectorType | undefined;

  /**
   * <p>A value that describes whether the IP address is dynamic or persistent.</p>
   * @public
   */
  ipAddressAssignment?: IpAddressAssignment | undefined;

  /**
   * <p>The IP address of the device.</p>
   * @public
   */
  ipAddress?: string | undefined;

  /**
   * <p>The netmask used to divide the IP address into subnets.</p>
   * @public
   */
  netmask?: string | undefined;

  /**
   * <p>The default gateway of the device.</p>
   * @public
   */
  defaultGateway?: string | undefined;

  /**
   * <p>The MAC address of the device.</p>
   * @public
   */
  macAddress?: string | undefined;
}

/**
 * <p>Information about the software on the device.</p>
 * @public
 */
export interface SoftwareInformation {
  /**
   * <p>The version of the software currently installed on the device.</p>
   * @public
   */
  installedVersion?: string | undefined;

  /**
   * <p>The version of the software being installed on the device.</p>
   * @public
   */
  installingVersion?: string | undefined;

  /**
   * <p>The state of the software that is installed or that is being installed on the
   *       device.</p>
   * @public
   */
  installState?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceOutput {
  /**
   * <p>When the device last contacted the Amazon Web Services Cloud. Indicates that the device is
   *       online.</p>
   * @public
   */
  lastReachedOutAt?: Date | undefined;

  /**
   * <p>When the device last pushed an update to the Amazon Web Services Cloud. Indicates when the device cache
   *       was refreshed.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the device that you checked the information for.</p>
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  managedDeviceArn?: string | undefined;

  /**
   * <p>The type of Amazon Web Services Snow Family device.</p>
   * @public
   */
  deviceType?: string | undefined;

  /**
   * <p>The ID of the job used when ordering the device.</p>
   * @public
   */
  associatedWithJob?: string | undefined;

  /**
   * <p>The current state of the device.</p>
   * @public
   */
  deviceState?: UnlockState | undefined;

  /**
   * <p>The network interfaces available on the device.</p>
   * @public
   */
  physicalNetworkInterfaces?: PhysicalNetworkInterface[] | undefined;

  /**
   * <p>The hardware specifications of the device. </p>
   * @public
   */
  deviceCapacities?: Capacity[] | undefined;

  /**
   * <p>The software installed on the device.</p>
   * @public
   */
  software?: SoftwareInformation | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceEc2Input {
  /**
   * <p>The ID of the managed device.</p>
   * @public
   */
  managedDeviceId: string | undefined;

  /**
   * <p>A list of instance IDs associated with the managed device.</p>
   * @public
   */
  instanceIds: string[] | undefined;
}

/**
 * <p>Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume
 *       in a block device mapping.</p>
 * @public
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>When the attachment was initiated.</p>
   * @public
   */
  attachTime?: Date | undefined;

  /**
   * <p>A value that indicates whether the volume is deleted on instance termination.</p>
   * @public
   */
  deleteOnTermination?: boolean | undefined;

  /**
   * <p>The attachment state.</p>
   * @public
   */
  status?: AttachmentStatus | undefined;

  /**
   * <p>The ID of the Amazon EBS volume.</p>
   * @public
   */
  volumeId?: string | undefined;
}

/**
 * <p>The description of a block device mapping.</p>
 * @public
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The block device name.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>The parameters used to automatically set up Amazon Elastic Block Store (Amazon EBS)
   *       volumes when the instance is launched. </p>
   * @public
   */
  ebs?: EbsInstanceBlockDevice | undefined;
}

/**
 * <p>Information about the device's security group.</p>
 * @public
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The security group ID.</p>
   * @public
   */
  groupId?: string | undefined;

  /**
   * <p>The security group name.</p>
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceStateName = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING_DOWN",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type InstanceStateName = (typeof InstanceStateName)[keyof typeof InstanceStateName];

/**
 * <p>The description of the current state of an instance.</p>
 * @public
 */
export interface InstanceState {
  /**
   * <p>The state of the instance as a 16-bit unsigned integer. </p>
   *          <p>The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values
   *       between 256 and 65,535. These numerical values are used for internal purposes and should be
   *       ignored. </p>
   *          <p>The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values
   *       between 0 and 255. </p>
   *          <p>The valid values for the instance state code are all in the range of the low byte. These
   *       values are: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>0</code> : <code>pending</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>16</code> : <code>running</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>32</code> : <code>shutting-down</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>48</code> : <code>terminated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>64</code> : <code>stopping</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>80</code> : <code>stopped</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in
   *       decimal. </p>
   * @public
   */
  code?: number | undefined;

  /**
   * <p>The current
   *       state
   *       of the instance.</p>
   * @public
   */
  name?: InstanceStateName | undefined;
}

/**
 * <p>The description of an
 *       instance.
 *       Currently, Amazon EC2 instances are the only supported instance type.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   * @public
   */
  imageId?: string | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) launch index, which you can use to find this instance in
   *       the launch group. </p>
   * @public
   */
  amiLaunchIndex?: number | undefined;

  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  instanceId?: string | undefined;

  /**
   * <p>The description of the current state of an instance.</p>
   * @public
   */
  state?: InstanceState | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * <p>The public IPv4 address assigned to the instance.</p>
   * @public
   */
  publicIpAddress?: string | undefined;

  /**
   * <p>When the instance was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the instance was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>The security groups for the instance.</p>
   * @public
   */
  securityGroups?: SecurityGroupIdentifier[] | undefined;

  /**
   * <p>The CPU options for the instance.</p>
   * @public
   */
  cpuOptions?: CpuOptions | undefined;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>). </p>
   * @public
   */
  rootDeviceName?: string | undefined;
}

/**
 * <p>The details about the instance.</p>
 * @public
 */
export interface InstanceSummary {
  /**
   * <p>A structure containing details about the instance.</p>
   * @public
   */
  instance?: Instance | undefined;

  /**
   * <p>When the instance summary was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceEc2Output {
  /**
   * <p>A list of structures containing information about each instance. </p>
   * @public
   */
  instances?: InstanceSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionInput {
  /**
   * <p>The ID of the task that the action is describing.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The ID of the managed device.</p>
   * @public
   */
  managedDeviceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionState = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type ExecutionState = (typeof ExecutionState)[keyof typeof ExecutionState];

/**
 * @public
 */
export interface DescribeExecutionOutput {
  /**
   * <p>The ID of the task being executed on the device.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The ID of the managed device that the task is being executed on.</p>
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * <p>The current state of the execution.</p>
   * @public
   */
  state?: ExecutionState | undefined;

  /**
   * <p>When the execution began.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>When the status of the execution was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTaskInput {
  /**
   * <p>The ID of the task to be described.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TaskState = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type TaskState = (typeof TaskState)[keyof typeof TaskState];

/**
 * @public
 */
export interface DescribeTaskOutput {
  /**
   * <p>The ID of the task.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The managed devices that the task was sent to.</p>
   * @public
   */
  targets?: string[] | undefined;

  /**
   * <p>The current state of the task.</p>
   * @public
   */
  state?: TaskState | undefined;

  /**
   * <p>When the <code>CreateTask</code> operation was called.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the state of the task was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>When the task was completed.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The description provided of the task and managed devices.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Identifying information about the device.</p>
 * @public
 */
export interface DeviceSummary {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  managedDeviceArn?: string | undefined;

  /**
   * <p>The ID of the job used to order the device.</p>
   * @public
   */
  associatedWithJob?: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListExecutionsInput {
  /**
   * <p>The ID of the task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>A structure used to filter the tasks by their current state.</p>
   * @public
   */
  state?: ExecutionState | undefined;

  /**
   * <p>The maximum number of tasks to list per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token to continue to the next page of tasks.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The summary of a task execution on a specified device.</p>
 * @public
 */
export interface ExecutionSummary {
  /**
   * <p>The ID of the task.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The ID of the managed device that the task is being executed on.</p>
   * @public
   */
  managedDeviceId?: string | undefined;

  /**
   * <p>The state of the execution.</p>
   * @public
   */
  state?: ExecutionState | undefined;
}

/**
 * @public
 */
export interface ListExecutionsOutput {
  /**
   * <p>A list of executions. Each execution contains the task ID, the device that the task is
   *       executing on, the execution ID, and the status of the execution.</p>
   * @public
   */
  executions?: ExecutionSummary[] | undefined;

  /**
   * <p>A pagination token to continue to the next page of executions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceResourcesInput {
  /**
   * <p>The ID of the managed device that you are listing the resources of.</p>
   * @public
   */
  managedDeviceId: string | undefined;

  /**
   * <p>A structure used to filter the results by type of resource.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The maximum number of resources per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token to continue to the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of a resource available on the device.</p>
 * @public
 */
export interface ResourceSummary {
  /**
   * <p>The resource type.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceResourcesOutput {
  /**
   * <p>A structure defining the resource's type, Amazon Resource Name (ARN), and ID.</p>
   * @public
   */
  resources?: ResourceSummary[] | undefined;

  /**
   * <p>A pagination token to continue to the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesInput {
  /**
   * <p>The ID of the job used to order the device.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The maximum number of devices to list per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token to continue to the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesOutput {
  /**
   * <p>A list of device structures that contain information about the device.</p>
   * @public
   */
  devices?: DeviceSummary[] | undefined;

  /**
   * <p>A pagination token to continue to the next page of devices.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags for the device or task.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTasksInput {
  /**
   * <p>A structure used to filter the list of tasks.</p>
   * @public
   */
  state?: TaskState | undefined;

  /**
   * <p>The maximum number of tasks per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token to continue to the next page of tasks.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the task assigned to one or many devices.</p>
 * @public
 */
export interface TaskSummary {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  taskArn?: string | undefined;

  /**
   * <p>The state of the task assigned to one or many devices.</p>
   * @public
   */
  state?: TaskState | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTasksOutput {
  /**
   * <p>A list of task structures containing details about each task.</p>
   * @public
   */
  tasks?: TaskSummary[] | undefined;

  /**
   * <p>A pagination token to continue to the next page of tasks.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
