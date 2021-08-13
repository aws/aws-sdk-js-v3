import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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

export namespace CancelTaskInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelTaskInput): any => ({
    ...obj,
  });
}

export interface CancelTaskOutput {
  /**
   * <p>The ID of the task that you are attempting to cancel.</p>
   */
  taskId?: string;
}

export namespace CancelTaskOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelTaskOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error occurred while processing the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The request references a resource that doesn't exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {
    throttling: true;
  };
  message: string | undefined;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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

export namespace Capacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Capacity): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to reboot the device.</p>
 */
export interface Reboot {}

export namespace Reboot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reboot): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to unlock a device.</p>
 */
export interface Unlock {}

export namespace Unlock {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Unlock): any => ({
    ...obj,
  });
}

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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Command): any => {
    if (obj.unlock !== undefined) return { unlock: Unlock.filterSensitiveLog(obj.unlock) };
    if (obj.reboot !== undefined) return { reboot: Reboot.filterSensitiveLog(obj.reboot) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace CpuOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CpuOptions): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  clientToken?: string;
}

export namespace CreateTaskInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskInput): any => ({
    ...obj,
    ...(obj.command && { command: Command.filterSensitiveLog(obj.command) }),
  });
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

export namespace CreateTaskOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface DescribeDeviceInput {
  /**
   * <p>The ID of the device that you are checking the information of.</p>
   */
  managedDeviceId: string | undefined;
}

export namespace DescribeDeviceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceInput): any => ({
    ...obj,
  });
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

export namespace PhysicalNetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhysicalNetworkInterface): any => ({
    ...obj,
  });
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

export namespace SoftwareInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SoftwareInformation): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

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

export namespace DescribeDeviceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceOutput): any => ({
    ...obj,
  });
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

export namespace DescribeDeviceEc2Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceEc2Input): any => ({
    ...obj,
  });
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

export namespace EbsInstanceBlockDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsInstanceBlockDevice): any => ({
    ...obj,
  });
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

export namespace InstanceBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
    ...obj,
  });
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

export namespace SecurityGroupIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupIdentifier): any => ({
    ...obj,
  });
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

export namespace InstanceState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceState): any => ({
    ...obj,
  });
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

export namespace Instance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
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

export namespace InstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceSummary): any => ({
    ...obj,
  });
}

export interface DescribeDeviceEc2Output {
  /**
   * <p>A list of structures containing information about each instance. </p>
   */
  instances?: InstanceSummary[];
}

export namespace DescribeDeviceEc2Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeviceEc2Output): any => ({
    ...obj,
  });
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

export namespace DescribeExecutionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExecutionInput): any => ({
    ...obj,
  });
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

export namespace DescribeExecutionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExecutionOutput): any => ({
    ...obj,
  });
}

export interface DescribeTaskInput {
  /**
   * <p>The ID of the task to be described.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeTaskInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskInput): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DescribeTaskOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTaskOutput): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace DeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
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

export namespace ListExecutionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExecutionsInput): any => ({
    ...obj,
  });
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

export namespace ExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionSummary): any => ({
    ...obj,
  });
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

export namespace ListExecutionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExecutionsOutput): any => ({
    ...obj,
  });
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

export namespace ListDeviceResourcesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceResourcesInput): any => ({
    ...obj,
  });
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

export namespace ResourceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSummary): any => ({
    ...obj,
  });
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

export namespace ListDeviceResourcesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeviceResourcesOutput): any => ({
    ...obj,
  });
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

export namespace ListDevicesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesInput): any => ({
    ...obj,
  });
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

export namespace ListDevicesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevicesOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the device or task.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags for the device or task.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
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

export namespace ListTasksInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTasksInput): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace TaskSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskSummary): any => ({
    ...obj,
  });
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

export namespace ListTasksOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTasksOutput): any => ({
    ...obj,
  });
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
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
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

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}
