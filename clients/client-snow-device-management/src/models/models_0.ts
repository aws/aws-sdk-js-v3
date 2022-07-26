// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SnowDeviceManagementServiceException as __BaseException } from "./SnowDeviceManagementServiceException";

/**
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

export enum AttachmentStatus {
  ATTACHED = "ATTACHED",
  ATTACHING = "ATTACHING",
  DETACHED = "DETACHED",
  DETACHING = "DETACHING",
}

export interface CancelTaskInput {
  /**
   * <p>The ID of the task that you are attempting to cancel. You can retrieve a task ID by using
   *       the <code>ListTasks</code> operation.</p>
   */
  taskId: string | undefined;
}

export interface CancelTaskOutput {
  /**
   * <p>The ID of the task that you are attempting to cancel.</p>
   */
  taskId?: string;
}

/**
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
 * <p>The physical capacity of the Amazon Web Services Snow Family device. </p>
 */
export interface Capacity {
  /**
   * <p>The name of the type of capacity, such as memory.</p>
   */
  name?: string;

  /**
   * <p>The unit of measure for the type of capacity.</p>
   */
  unit?: string;

  /**
   * <p>The total capacity on the device.</p>
   */
  total?: number;

  /**
   * <p>The amount of capacity used on the device.</p>
   */
  used?: number;

  /**
   * <p>The amount of capacity available for use on the device.</p>
   */
  available?: number;
}

/**
 * <p>A structure used to reboot the device.</p>
 */
export interface Reboot {}

/**
 * <p>A structure used to unlock a device.</p>
 */
export interface Unlock {}

/**
 * <p>The command given to the device to execute.</p>
 */
export type Command = Command.RebootMember | Command.UnlockMember | Command.$UnknownMember;

export namespace Command {
  /**
   * <p>Unlocks the device.</p>
   */
  export interface UnlockMember {
    unlock: Unlock;
    reboot?: never;
    $unknown?: never;
  }

  /**
   * <p>Reboots the device.</p>
   */
  export interface RebootMember {
    unlock?: never;
    reboot: Reboot;
    $unknown?: never;
  }

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
 * <p>The options for how a device's CPU is configured.</p>
 */
export interface CpuOptions {
  /**
   * <p>The number of cores that the CPU can use.</p>
   */
  coreCount?: number;

  /**
   * <p>The number of threads per core in the CPU.</p>
   */
  threadsPerCore?: number;
}

export interface CreateTaskInput {
  /**
   * <p>A list of managed device IDs.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>The task to be performed. Only one task is executed on a device at a time.</p>
   */
  command: Command | undefined;

  /**
   * <p>A description of the task and its targets.</p>
   */
  description?: string;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;
}

export interface CreateTaskOutput {
  /**
   * <p>The ID of the task that you created.</p>
   */
  taskId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task that you created.</p>
   */
  taskArn?: string;
}

/**
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

export interface DescribeDeviceInput {
  /**
   * <p>The ID of the device that you are checking the information of.</p>
   */
  managedDeviceId: string | undefined;
}

export enum UnlockState {
  LOCKED = "LOCKED",
  UNLOCKED = "UNLOCKED",
  UNLOCKING = "UNLOCKING",
}

export enum IpAddressAssignment {
  DHCP = "DHCP",
  STATIC = "STATIC",
}

export enum PhysicalConnectorType {
  QSFP = "QSFP",
  RJ45 = "RJ45",
  RJ45_2 = "RJ45_2",
  SFP_PLUS = "SFP_PLUS",
  WIFI = "WIFI",
}

/**
 * <p>The details about the physical network interface for the device.</p>
 */
export interface PhysicalNetworkInterface {
  /**
   * <p>The physical network interface ID.</p>
   */
  physicalNetworkInterfaceId?: string;

  /**
   * <p>The
   *       physical
   *       connector type.</p>
   */
  physicalConnectorType?: PhysicalConnectorType | string;

  /**
   * <p>A value that describes whether the IP address is dynamic or persistent.</p>
   */
  ipAddressAssignment?: IpAddressAssignment | string;

  /**
   * <p>The IP address of the device.</p>
   */
  ipAddress?: string;

  /**
   * <p>The netmask used to divide the IP address into subnets.</p>
   */
  netmask?: string;

  /**
   * <p>The default gateway of the device.</p>
   */
  defaultGateway?: string;

  /**
   * <p>The MAC address of the device.</p>
   */
  macAddress?: string;
}

/**
 * <p>Information about the software on the device.</p>
 */
export interface SoftwareInformation {
  /**
   * <p>The version of the software currently installed on the device.</p>
   */
  installedVersion?: string;

  /**
   * <p>The version of the software being installed on the device.</p>
   */
  installingVersion?: string;

  /**
   * <p>The state of the software that is installed or that is being installed on the
   *       device.</p>
   */
  installState?: string;
}

export interface DescribeDeviceOutput {
  /**
   * <p>When the device last contacted the Amazon Web Services Cloud. Indicates that the device is
   *       online.</p>
   */
  lastReachedOutAt?: Date;

  /**
   * <p>When the device last pushed an update to the Amazon Web Services Cloud. Indicates when the device cache
   *       was refreshed.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The ID of the device that you checked the information for.</p>
   */
  managedDeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  managedDeviceArn?: string;

  /**
   * <p>The type of Amazon Web Services Snow Family device.</p>
   */
  deviceType?: string;

  /**
   * <p>The ID of the job used when ordering the device.</p>
   */
  associatedWithJob?: string;

  /**
   * <p>The current state of the device.</p>
   */
  deviceState?: UnlockState | string;

  /**
   * <p>The network interfaces available on the device.</p>
   */
  physicalNetworkInterfaces?: PhysicalNetworkInterface[];

  /**
   * <p>The hardware specifications of the device. </p>
   */
  deviceCapacities?: Capacity[];

  /**
   * <p>The software installed on the device.</p>
   */
  software?: SoftwareInformation;
}

export interface DescribeDeviceEc2Input {
  /**
   * <p>The ID of the managed device.</p>
   */
  managedDeviceId: string | undefined;

  /**
   * <p>A list of instance IDs associated with the managed device.</p>
   */
  instanceIds: string[] | undefined;
}

/**
 * <p>Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume
 *       in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
  /**
   * <p>When the attachment was initiated.</p>
   */
  attachTime?: Date;

  /**
   * <p>A value that indicates whether the volume is deleted on instance termination.</p>
   */
  deleteOnTermination?: boolean;

  /**
   * <p>The attachment state.</p>
   */
  status?: AttachmentStatus | string;

  /**
   * <p>The ID of the Amazon EBS volume.</p>
   */
  volumeId?: string;
}

/**
 * <p>The description of a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The block device name.</p>
   */
  deviceName?: string;

  /**
   * <p>The parameters used to automatically set up Amazon Elastic Block Store (Amazon EBS)
   *       volumes when the instance is launched. </p>
   */
  ebs?: EbsInstanceBlockDevice;
}

/**
 * <p>Information about the device's security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The security group ID.</p>
   */
  groupId?: string;

  /**
   * <p>The security group name.</p>
   */
  groupName?: string;
}

export enum InstanceStateName {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SHUTTING_DOWN = "SHUTTING_DOWN",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  TERMINATED = "TERMINATED",
}

/**
 * <p>The description of the current state of an instance.</p>
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
   */
  code?: number;

  /**
   * <p>The current
   *       state
   *       of the instance.</p>
   */
  name?: InstanceStateName | string;
}

/**
 * <p>The description of an
 *       instance.
 *       Currently, Amazon EC2 instances are the only supported instance type.</p>
 */
export interface Instance {
  /**
   * <p>The ID of the AMI used to launch the instance.</p>
   */
  imageId?: string;

  /**
   * <p>The Amazon Machine Image (AMI) launch index, which you can use to find this instance in
   *       the launch group. </p>
   */
  amiLaunchIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  instanceId?: string;

  /**
   * <p>The description of the current state of an instance.</p>
   */
  state?: InstanceState;

  /**
   * <p>The instance type.</p>
   */
  instanceType?: string;

  /**
   * <p>The private IPv4 address assigned to the instance.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The public IPv4 address assigned to the instance.</p>
   */
  publicIpAddress?: string;

  /**
   * <p>When the instance was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>When the instance was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>Any block device mapping entries for the instance.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The security groups for the instance.</p>
   */
  securityGroups?: SecurityGroupIdentifier[];

  /**
   * <p>The CPU options for the instance.</p>
   */
  cpuOptions?: CpuOptions;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>). </p>
   */
  rootDeviceName?: string;
}

/**
 * <p>The details about the instance.</p>
 */
export interface InstanceSummary {
  /**
   * <p>A structure containing details about the instance.</p>
   */
  instance?: Instance;

  /**
   * <p>When the instance summary was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

export interface DescribeDeviceEc2Output {
  /**
   * <p>A list of structures containing information about each instance. </p>
   */
  instances?: InstanceSummary[];
}

export interface DescribeExecutionInput {
  /**
   * <p>The ID of the task that the action is describing.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The ID of the managed device.</p>
   */
  managedDeviceId: string | undefined;
}

export enum ExecutionState {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  REJECTED = "REJECTED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT",
}

export interface DescribeExecutionOutput {
  /**
   * <p>The ID of the task being executed on the device.</p>
   */
  taskId?: string;

  /**
   * <p>The ID of the execution.</p>
   */
  executionId?: string;

  /**
   * <p>The ID of the managed device that the task is being executed on.</p>
   */
  managedDeviceId?: string;

  /**
   * <p>The current state of the execution.</p>
   */
  state?: ExecutionState | string;

  /**
   * <p>When the execution began.</p>
   */
  startedAt?: Date;

  /**
   * <p>When the status of the execution was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

export interface DescribeTaskInput {
  /**
   * <p>The ID of the task to be described.</p>
   */
  taskId: string | undefined;
}

export enum TaskState {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
}

export interface DescribeTaskOutput {
  /**
   * <p>The ID of the task.</p>
   */
  taskId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;

  /**
   * <p>The managed devices that the task was sent to.</p>
   */
  targets?: string[];

  /**
   * <p>The current state of the task.</p>
   */
  state?: TaskState | string;

  /**
   * <p>When the <code>CreateTask</code> operation was called.</p>
   */
  createdAt?: Date;

  /**
   * <p>When the state of the task was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>When the task was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>The description provided of the task and managed devices.</p>
   */
  description?: string;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Identifying information about the device.</p>
 */
export interface DeviceSummary {
  /**
   * <p>The ID of the device.</p>
   */
  managedDeviceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  managedDeviceArn?: string;

  /**
   * <p>The ID of the job used to order the device.</p>
   */
  associatedWithJob?: string;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags?: Record<string, string>;
}

export interface ListExecutionsInput {
  /**
   * <p>The ID of the task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>A structure used to filter the tasks by their current state.</p>
   */
  state?: ExecutionState | string;

  /**
   * <p>The maximum number of tasks to list per page.</p>
   */
  maxResults?: number;

  /**
   * <p>A pagination token to continue to the next page of tasks.</p>
   */
  nextToken?: string;
}

/**
 * <p>The summary of a task execution on a specified device.</p>
 */
export interface ExecutionSummary {
  /**
   * <p>The ID of the task.</p>
   */
  taskId?: string;

  /**
   * <p>The ID of the execution.</p>
   */
  executionId?: string;

  /**
   * <p>The ID of the managed device that the task is being executed on.</p>
   */
  managedDeviceId?: string;

  /**
   * <p>The state of the execution.</p>
   */
  state?: ExecutionState | string;
}

export interface ListExecutionsOutput {
  /**
   * <p>A list of executions. Each execution contains the task ID, the device that the task is
   *       executing on, the execution ID, and the status of the execution.</p>
   */
  executions?: ExecutionSummary[];

  /**
   * <p>A pagination token to continue to the next page of executions.</p>
   */
  nextToken?: string;
}

export interface ListDeviceResourcesInput {
  /**
   * <p>The ID of the managed device that you are listing the resources of.</p>
   */
  managedDeviceId: string | undefined;

  /**
   * <p>A structure used to filter the results by type of resource.</p>
   */
  type?: string;

  /**
   * <p>The maximum number of resources per page.</p>
   */
  maxResults?: number;

  /**
   * <p>A pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>A summary of a resource available on the device.</p>
 */
export interface ResourceSummary {
  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  id?: string;
}

export interface ListDeviceResourcesOutput {
  /**
   * <p>A structure defining the resource's type, Amazon Resource Name (ARN), and ID.</p>
   */
  resources?: ResourceSummary[];

  /**
   * <p>A pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export interface ListDevicesInput {
  /**
   * <p>The ID of the job used to order the device.</p>
   */
  jobId?: string;

  /**
   * <p>The maximum number of devices to list per page.</p>
   */
  maxResults?: number;

  /**
   * <p>A pagination token to continue to the next page of results.</p>
   */
  nextToken?: string;
}

export interface ListDevicesOutput {
  /**
   * <p>A list of device structures that contain information about the device.</p>
   */
  devices?: DeviceSummary[];

  /**
   * <p>A pagination token to continue to the next page of devices.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags for the device or task.</p>
   */
  tags?: Record<string, string>;
}

export interface ListTasksInput {
  /**
   * <p>A structure used to filter the list of tasks.</p>
   */
  state?: TaskState | string;

  /**
   * <p>The maximum number of tasks per page.</p>
   */
  maxResults?: number;

  /**
   * <p>A pagination token to continue to the next page of tasks.</p>
   */
  nextToken?: string;
}

/**
 * <p>Information about the task assigned to one or many devices.</p>
 */
export interface TaskSummary {
  /**
   * <p>The task ID.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  taskArn?: string;

  /**
   * <p>The state of the task assigned to one or many devices.</p>
   */
  state?: TaskState | string;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags?: Record<string, string>;
}

export interface ListTasksOutput {
  /**
   * <p>A list of task structures containing details about each task.</p>
   */
  tasks?: TaskSummary[];

  /**
   * <p>A pagination token to continue to the next page of tasks.</p>
   */
  nextToken?: string;
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Optional metadata that you assign to a resource. You can use tags to categorize a resource
   *       in different ways, such as by purpose, owner, or environment.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const CancelTaskInputFilterSensitiveLog = (obj: CancelTaskInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelTaskOutputFilterSensitiveLog = (obj: CancelTaskOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityFilterSensitiveLog = (obj: Capacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootFilterSensitiveLog = (obj: Reboot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnlockFilterSensitiveLog = (obj: Unlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommandFilterSensitiveLog = (obj: Command): any => {
  if (obj.unlock !== undefined) return { unlock: UnlockFilterSensitiveLog(obj.unlock) };
  if (obj.reboot !== undefined) return { reboot: RebootFilterSensitiveLog(obj.reboot) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CpuOptionsFilterSensitiveLog = (obj: CpuOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTaskInputFilterSensitiveLog = (obj: CreateTaskInput): any => ({
  ...obj,
  ...(obj.command && { command: CommandFilterSensitiveLog(obj.command) }),
});

/**
 * @internal
 */
export const CreateTaskOutputFilterSensitiveLog = (obj: CreateTaskOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceInputFilterSensitiveLog = (obj: DescribeDeviceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhysicalNetworkInterfaceFilterSensitiveLog = (obj: PhysicalNetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SoftwareInformationFilterSensitiveLog = (obj: SoftwareInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceOutputFilterSensitiveLog = (obj: DescribeDeviceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceEc2InputFilterSensitiveLog = (obj: DescribeDeviceEc2Input): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsInstanceBlockDeviceFilterSensitiveLog = (obj: EbsInstanceBlockDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceBlockDeviceMappingFilterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityGroupIdentifierFilterSensitiveLog = (obj: SecurityGroupIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStateFilterSensitiveLog = (obj: InstanceState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceSummaryFilterSensitiveLog = (obj: InstanceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceEc2OutputFilterSensitiveLog = (obj: DescribeDeviceEc2Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExecutionInputFilterSensitiveLog = (obj: DescribeExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExecutionOutputFilterSensitiveLog = (obj: DescribeExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTaskInputFilterSensitiveLog = (obj: DescribeTaskInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTaskOutputFilterSensitiveLog = (obj: DescribeTaskOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceSummaryFilterSensitiveLog = (obj: DeviceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutionsInputFilterSensitiveLog = (obj: ListExecutionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutionSummaryFilterSensitiveLog = (obj: ExecutionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutionsOutputFilterSensitiveLog = (obj: ListExecutionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceResourcesInputFilterSensitiveLog = (obj: ListDeviceResourcesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSummaryFilterSensitiveLog = (obj: ResourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeviceResourcesOutputFilterSensitiveLog = (obj: ListDeviceResourcesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesInputFilterSensitiveLog = (obj: ListDevicesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevicesOutputFilterSensitiveLog = (obj: ListDevicesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTasksInputFilterSensitiveLog = (obj: ListTasksInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskSummaryFilterSensitiveLog = (obj: TaskSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTasksOutputFilterSensitiveLog = (obj: ListTasksOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});
