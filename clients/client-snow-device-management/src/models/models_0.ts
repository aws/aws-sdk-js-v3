// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SnowDeviceManagementServiceException as __BaseException } from "./SnowDeviceManagementServiceException";

/**
 * @public
 * <p>You don't have sufficient access to perform this action.</p>
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
   * @public
   * <p>The ID of the task that you are attempting to cancel. You can retrieve a task ID by using
   *       the <code>ListTasks</code> operation.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface CancelTaskOutput {
  /**
   * @public
   * <p>The ID of the task that you are attempting to cancel.</p>
   */
  taskId?: string;
}

/**
 * @public
 * <p>An unexpected error occurred while processing the request.</p>
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
 * @public
 * <p>The request references a resource that doesn't exist.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
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
 * @public
 * <p>The physical capacity of the Amazon Web Services Snow Family device. </p>
 */
export interface Capacity {
  /**
   * @public
   * <p>The name of the type of capacity, such as memory.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The unit of measure for the type of capacity.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>The total capacity on the device.</p>
   */
  total?: number;

  /**
   * @public
   * <p>The amount of capacity used on the device.</p>
   */
  used?: number;

  /**
   * @public
   * <p>The amount of capacity available for use on the device.</p>
   */
  available?: number;
}

/**
 * @public
 * <p>A structure used to reboot the device.</p>
 */
export interface Reboot {}

/**
 * @public
 * <p>A structure used to unlock a device.</p>
 */
export interface Unlock {}

/**
 * @public
 * <p>The command given to the device to execute.</p>
 */
export type Command = Command.RebootMember | Command.UnlockMember | Command.$UnknownMember;

/**
 * @public
 */
export namespace Command {
  /**
   * @public
   * <p>Unlocks the device.</p>
   */
  export interface UnlockMember {
    unlock: Unlock;
    reboot?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Reboots the device.</p>
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

  export interface Visitor<T> {
    unlock: (value: Unlock) => T;
    reboot: (value: Reboot) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Command, visitor: Visitor<T>): T => {
    if (value.unlock !== undefined) return visitor.unlock(value.unlock);
    if (value.reboot !== undefined) return visitor.reboot(value.reboot);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The options for how a device's CPU is configured.</p>
 */
export interface CpuOptions {
  /**
   * @public
   * <p>The number of cores that the CPU can use.</p>
   */
  coreCount?: number;

  /**
   * @public
   * <p>The number of threads per core in the CPU.</p>
   */
  threadsPerCore?: number;
}

/**
 * @public
 */
export interface CreateTaskInput {
  /**
   * @public
   * <p>A list of managed device IDs.</p>
   */
  targets: string[] | undefined;

  /**
   * @public
   * <p>The task to be performed. Only one task is executed on a device at a time.</p>
   */
  command: Command | undefined;

  /**
   * @public
   * <p>A description of the task and its targets.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateTaskOutput {
  /**
   * @public
   * <p>The ID of the task that you created.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task that you created.</p>
   */
  taskArn?: string;
}

/**
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
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
   * @public
   * <p>The ID of the device that you are checking the information of.</p>
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
 * @public
 * <p>The details about the physical network interface for the device.</p>
 */
export interface PhysicalNetworkInterface {
  /**
   * @public
   * <p>The physical network interface ID.</p>
   */
  physicalNetworkInterfaceId?: string;

  /**
   * @public
   * <p>The
   *       physical
   *       connector type.</p>
   */
  physicalConnectorType?: PhysicalConnectorType;

  /**
   * @public
   * <p>A value that describes whether the IP address is dynamic or persistent.</p>
   */
  ipAddressAssignment?: IpAddressAssignment;

  /**
   * @public
   * <p>The IP address of the device.</p>
   */
  ipAddress?: string;

  /**
   * @public
   * <p>The netmask used to divide the IP address into subnets.</p>
   */
  netmask?: string;

  /**
   * @public
   * <p>The default gateway of the device.</p>
   */
  defaultGateway?: string;

  /**
   * @public
   * <p>The MAC address of the device.</p>
   */
  macAddress?: string;
}

/**
 * @public
 * <p>Information about the software on the device.</p>
 */
export interface SoftwareInformation {
  /**
   * @public
   * <p>The version of the software currently installed on the device.</p>
   */
  installedVersion?: string;

  /**
   * @public
   * <p>The version of the software being installed on the device.</p>
   */
  installingVersion?: string;

  /**
   * @public
   * <p>The state of the software that is installed or that is being installed on the
   *       device.</p>
   */
  installState?: string;
}

/**
 * @public
 */
export interface DescribeDeviceOutput {
  /**
   * @public
   * <p>When the device last contacted the Amazon Web Services Cloud. Indicates that the device is
   *       online.</p>
   */
  lastReachedOutAt?: Date;

  /**
   * @public
   * <p>When the device last pushed an update to the Amazon Web Services Cloud. Indicates when the device cache
   *       was refreshed.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment. </p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The ID of the device that you checked the information for.</p>
   */
  managedDeviceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  managedDeviceArn?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services Snow Family device.</p>
   */
  deviceType?: string;

  /**
   * @public
   * <p>The ID of the job used when ordering the device.</p>
   */
  associatedWithJob?: string;

  /**
   * @public
   * <p>The current state of the device.</p>
   */
  deviceState?: UnlockState;

  /**
   * @public
   * <p>The network interfaces available on the device.</p>
   */
  physicalNetworkInterfaces?: PhysicalNetworkInterface[];

  /**
   * @public
   * <p>The hardware specifications of the device. </p>
   */
  deviceCapacities?: Capacity[];

  /**
   * @public
   * <p>The software installed on the device.</p>
   */
  software?: SoftwareInformation;
}

/**
 * @public
 */
export interface DescribeDeviceEc2Input {
  /**
   * @public
   * <p>The ID of the managed device.</p>
   */
  managedDeviceId: string | undefined;

  /**
   * @public
   * <p>A list of instance IDs associated with the managed device.</p>
   */
  instanceIds: string[] | undefined;
}

/**
 * @public
 * <p>Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume
 *       in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
  /**
   * @public
   * <p>When the attachment was initiated.</p>
   */
  attachTime?: Date;

  /**
   * @public
   * <p>A value that indicates whether the volume is deleted on instance termination.</p>
   */
  deleteOnTermination?: boolean;

  /**
   * @public
   * <p>The attachment state.</p>
   */
  status?: AttachmentStatus;

  /**
   * @public
   * <p>The ID of the Amazon EBS volume.</p>
   */
  volumeId?: string;
}

/**
 * @public
 * <p>The description of a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * @public
   * <p>The block device name.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>The parameters used to automatically set up Amazon Elastic Block Store (Amazon EBS)
   *       volumes when the instance is launched. </p>
   */
  ebs?: EbsInstanceBlockDevice;
}

/**
 * @public
 * <p>Information about the device's security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * @public
   * <p>The security group ID.</p>
   */
  groupId?: string;

  /**
   * @public
   * <p>The security group name.</p>
   */
  groupName?: string;
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
 * @public
 * <p>The description of the current state of an instance.</p>
 */
export interface InstanceState {
  /**
   * @public
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
   */
  code?: number;

  /**
   * @public
   * <p>The current
   *       state
   *       of the instance.</p>
   */
  name?: InstanceStateName;
}

/**
 * @public
 * <p>The description of an
 *       instance.
 *       Currently, Amazon EC2 instances are the only supported instance type.</p>
 */
export interface Instance {
  /**
   * @public
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  imageId?: string;

  /**
   * @public
   * <p>The Amazon Machine Image (AMI) launch index, which you can use to find this instance in
   *       the launch group. </p>
   */
  amiLaunchIndex?: number;

  /**
   * @public
   * <p>The ID of the instance.</p>
   */
  instanceId?: string;

  /**
   * @public
   * <p>The description of the current state of an instance.</p>
   */
  state?: InstanceState;

  /**
   * @public
   * <p>The instance type.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  privateIpAddress?: string;

  /**
   * @public
   * <p>The public IPv4 address assigned to the instance.</p>
   */
  publicIpAddress?: string;

  /**
   * @public
   * <p>When the instance was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>When the instance was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>Any block device mapping entries for the instance.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @public
   * <p>The security groups for the instance.</p>
   */
  securityGroups?: SecurityGroupIdentifier[];

  /**
   * @public
   * <p>The CPU options for the instance.</p>
   */
  cpuOptions?: CpuOptions;

  /**
   * @public
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>). </p>
   */
  rootDeviceName?: string;
}

/**
 * @public
 * <p>The details about the instance.</p>
 */
export interface InstanceSummary {
  /**
   * @public
   * <p>A structure containing details about the instance.</p>
   */
  instance?: Instance;

  /**
   * @public
   * <p>When the instance summary was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeDeviceEc2Output {
  /**
   * @public
   * <p>A list of structures containing information about each instance. </p>
   */
  instances?: InstanceSummary[];
}

/**
 * @public
 */
export interface DescribeExecutionInput {
  /**
   * @public
   * <p>The ID of the task that the action is describing.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>The ID of the managed device.</p>
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
   * @public
   * <p>The ID of the task being executed on the device.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The ID of the execution.</p>
   */
  executionId?: string;

  /**
   * @public
   * <p>The ID of the managed device that the task is being executed on.</p>
   */
  managedDeviceId?: string;

  /**
   * @public
   * <p>The current state of the execution.</p>
   */
  state?: ExecutionState;

  /**
   * @public
   * <p>When the execution began.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>When the status of the execution was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeTaskInput {
  /**
   * @public
   * <p>The ID of the task to be described.</p>
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
   * @public
   * <p>The ID of the task.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;

  /**
   * @public
   * <p>The managed devices that the task was sent to.</p>
   */
  targets?: string[];

  /**
   * @public
   * <p>The current state of the task.</p>
   */
  state?: TaskState;

  /**
   * @public
   * <p>When the <code>CreateTask</code> operation was called.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>When the state of the task was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>When the task was completed.</p>
   */
  completedAt?: Date;

  /**
   * @public
   * <p>The description provided of the task and managed devices.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Identifying information about the device.</p>
 */
export interface DeviceSummary {
  /**
   * @public
   * <p>The ID of the device.</p>
   */
  managedDeviceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  managedDeviceArn?: string;

  /**
   * @public
   * <p>The ID of the job used to order the device.</p>
   */
  associatedWithJob?: string;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListExecutionsInput {
  /**
   * @public
   * <p>The ID of the task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>A structure used to filter the tasks by their current state.</p>
   */
  state?: ExecutionState;

  /**
   * @public
   * <p>The maximum number of tasks to list per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token to continue to the next page of tasks.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The summary of a task execution on a specified device.</p>
 */
export interface ExecutionSummary {
  /**
   * @public
   * <p>The ID of the task.</p>
   */
  taskId?: string;

  /**
   * @public
   * <p>The ID of the execution.</p>
   */
  executionId?: string;

  /**
   * @public
   * <p>The ID of the managed device that the task is being executed on.</p>
   */
  managedDeviceId?: string;

  /**
   * @public
   * <p>The state of the execution.</p>
   */
  state?: ExecutionState;
}

/**
 * @public
 */
export interface ListExecutionsOutput {
  /**
   * @public
   * <p>A list of executions. Each execution contains the task ID, the device that the task is
   *       executing on, the execution ID, and the status of the execution.</p>
   */
  executions?: ExecutionSummary[];

  /**
   * @public
   * <p>A pagination token to continue to the next page of executions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDeviceResourcesInput {
  /**
   * @public
   * <p>The ID of the managed device that you are listing the resources of.</p>
   */
  managedDeviceId: string | undefined;

  /**
   * @public
   * <p>A structure used to filter the results by type of resource.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The maximum number of resources per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of a resource available on the device.</p>
 */
export interface ResourceSummary {
  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  id?: string;
}

/**
 * @public
 */
export interface ListDeviceResourcesOutput {
  /**
   * @public
   * <p>A structure defining the resource's type, Amazon Resource Name (ARN), and ID.</p>
   */
  resources?: ResourceSummary[];

  /**
   * @public
   * <p>A pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesInput {
  /**
   * @public
   * <p>The ID of the job used to order the device.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The maximum number of devices to list per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDevicesOutput {
  /**
   * @public
   * <p>A list of device structures that contain information about the device.</p>
   */
  devices?: DeviceSummary[];

  /**
   * @public
   * <p>A pagination token to continue to the next page of devices.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of tags for the device or task.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTasksInput {
  /**
   * @public
   * <p>A structure used to filter the list of tasks.</p>
   */
  state?: TaskState;

  /**
   * @public
   * <p>The maximum number of tasks per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A pagination token to continue to the next page of tasks.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the task assigned to one or many devices.</p>
 */
export interface TaskSummary {
  /**
   * @public
   * <p>The task ID.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;

  /**
   * @public
   * <p>The state of the task assigned to one or many devices.</p>
   */
  state?: TaskState;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTasksOutput {
  /**
   * @public
   * <p>A list of task structures containing details about each task.</p>
   */
  tasks?: TaskSummary[];

  /**
   * @public
   * <p>A pagination token to continue to the next page of tasks.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tagKeys: string[] | undefined;
}
