import {
  AccessDeniedException,
  AccessDeniedException$,
  AttachmentStatus,
  CancelTask$,
  CancelTaskCommand,
  CancelTaskInput$,
  CancelTaskOutput$,
  Capacity$,
  Command$,
  CpuOptions$,
  CreateTask$,
  CreateTaskCommand,
  CreateTaskInput$,
  CreateTaskOutput$,
  DescribeDevice$,
  DescribeDeviceCommand,
  DescribeDeviceEc2Input$,
  DescribeDeviceEc2Instances$,
  DescribeDeviceEc2InstancesCommand,
  DescribeDeviceEc2Output$,
  DescribeDeviceInput$,
  DescribeDeviceOutput$,
  DescribeExecution$,
  DescribeExecutionCommand,
  DescribeExecutionInput$,
  DescribeExecutionOutput$,
  DescribeTask$,
  DescribeTaskCommand,
  DescribeTaskInput$,
  DescribeTaskOutput$,
  DeviceSummary$,
  EbsInstanceBlockDevice$,
  ExecutionState,
  ExecutionSummary$,
  Instance$,
  InstanceBlockDeviceMapping$,
  InstanceState$,
  InstanceStateName,
  InstanceSummary$,
  InternalServerException,
  InternalServerException$,
  IpAddressAssignment,
  ListDeviceResources$,
  ListDeviceResourcesCommand,
  ListDeviceResourcesInput$,
  ListDeviceResourcesOutput$,
  ListDevices$,
  ListDevicesCommand,
  ListDevicesInput$,
  ListDevicesOutput$,
  ListExecutions$,
  ListExecutionsCommand,
  ListExecutionsInput$,
  ListExecutionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTasks$,
  ListTasksCommand,
  ListTasksInput$,
  ListTasksOutput$,
  paginateListDeviceResources,
  paginateListDevices,
  paginateListExecutions,
  paginateListTasks,
  PhysicalConnectorType,
  PhysicalNetworkInterface$,
  Reboot$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSummary$,
  SecurityGroupIdentifier$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnowDeviceManagement,
  SnowDeviceManagementClient,
  SnowDeviceManagementServiceException,
  SoftwareInformation$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TaskState,
  TaskSummary$,
  ThrottlingException,
  ThrottlingException$,
  Unlock$,
  UnlockState,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SnowDeviceManagementClient === "function");
assert(typeof SnowDeviceManagement === "function");
// commands
assert(typeof CancelTaskCommand === "function");
assert(typeof CancelTask$ === "object");
assert(typeof CreateTaskCommand === "function");
assert(typeof CreateTask$ === "object");
assert(typeof DescribeDeviceCommand === "function");
assert(typeof DescribeDevice$ === "object");
assert(typeof DescribeDeviceEc2InstancesCommand === "function");
assert(typeof DescribeDeviceEc2Instances$ === "object");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeExecution$ === "object");
assert(typeof DescribeTaskCommand === "function");
assert(typeof DescribeTask$ === "object");
assert(typeof ListDeviceResourcesCommand === "function");
assert(typeof ListDeviceResources$ === "object");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevices$ === "object");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExecutions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTasksCommand === "function");
assert(typeof ListTasks$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof CancelTaskInput$ === "object");
assert(typeof CancelTaskOutput$ === "object");
assert(typeof Capacity$ === "object");
assert(typeof Command$ === "object");
assert(typeof CpuOptions$ === "object");
assert(typeof CreateTaskInput$ === "object");
assert(typeof CreateTaskOutput$ === "object");
assert(typeof DescribeDeviceEc2Input$ === "object");
assert(typeof DescribeDeviceEc2Output$ === "object");
assert(typeof DescribeDeviceInput$ === "object");
assert(typeof DescribeDeviceOutput$ === "object");
assert(typeof DescribeExecutionInput$ === "object");
assert(typeof DescribeExecutionOutput$ === "object");
assert(typeof DescribeTaskInput$ === "object");
assert(typeof DescribeTaskOutput$ === "object");
assert(typeof DeviceSummary$ === "object");
assert(typeof EbsInstanceBlockDevice$ === "object");
assert(typeof ExecutionSummary$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceBlockDeviceMapping$ === "object");
assert(typeof InstanceState$ === "object");
assert(typeof InstanceSummary$ === "object");
assert(typeof ListDeviceResourcesInput$ === "object");
assert(typeof ListDeviceResourcesOutput$ === "object");
assert(typeof ListDevicesInput$ === "object");
assert(typeof ListDevicesOutput$ === "object");
assert(typeof ListExecutionsInput$ === "object");
assert(typeof ListExecutionsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTasksInput$ === "object");
assert(typeof ListTasksOutput$ === "object");
assert(typeof PhysicalNetworkInterface$ === "object");
assert(typeof Reboot$ === "object");
assert(typeof ResourceSummary$ === "object");
assert(typeof SecurityGroupIdentifier$ === "object");
assert(typeof SoftwareInformation$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TaskSummary$ === "object");
assert(typeof Unlock$ === "object");
assert(typeof UntagResourceInput$ === "object");
// enums
assert(typeof AttachmentStatus === "object");
assert(typeof ExecutionState === "object");
assert(typeof InstanceStateName === "object");
assert(typeof IpAddressAssignment === "object");
assert(typeof PhysicalConnectorType === "object");
assert(typeof TaskState === "object");
assert(typeof UnlockState === "object");
// errors
assert(AccessDeniedException.prototype instanceof SnowDeviceManagementServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof SnowDeviceManagementServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SnowDeviceManagementServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SnowDeviceManagementServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SnowDeviceManagementServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SnowDeviceManagementServiceException);
assert(typeof ValidationException$ === "object");
assert(SnowDeviceManagementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeviceResources === "function");
assert(typeof paginateListDevices === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListTasks === "function");
console.log(`SnowDeviceManagement index test passed.`);
