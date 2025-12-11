import {
  AccessDeniedException,
  AttachmentStatus,
  CancelTaskCommand,
  CreateTaskCommand,
  DescribeDeviceCommand,
  DescribeDeviceEc2InstancesCommand,
  DescribeExecutionCommand,
  DescribeTaskCommand,
  ExecutionState,
  InstanceStateName,
  InternalServerException,
  IpAddressAssignment,
  ListDeviceResourcesCommand,
  ListDevicesCommand,
  ListExecutionsCommand,
  ListTagsForResourceCommand,
  ListTasksCommand,
  PhysicalConnectorType,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SnowDeviceManagement,
  SnowDeviceManagementClient,
  SnowDeviceManagementServiceException,
  TagResourceCommand,
  TaskState,
  ThrottlingException,
  UnlockState,
  UntagResourceCommand,
  ValidationException,
  paginateListDeviceResources,
  paginateListDevices,
  paginateListExecutions,
  paginateListTasks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SnowDeviceManagementClient === "function");
assert(typeof SnowDeviceManagement === "function");
// commands
assert(typeof CancelTaskCommand === "function");
assert(typeof CreateTaskCommand === "function");
assert(typeof DescribeDeviceCommand === "function");
assert(typeof DescribeDeviceEc2InstancesCommand === "function");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeTaskCommand === "function");
assert(typeof ListDeviceResourcesCommand === "function");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTasksCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
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
assert(InternalServerException.prototype instanceof SnowDeviceManagementServiceException);
assert(ResourceNotFoundException.prototype instanceof SnowDeviceManagementServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SnowDeviceManagementServiceException);
assert(ThrottlingException.prototype instanceof SnowDeviceManagementServiceException);
assert(ValidationException.prototype instanceof SnowDeviceManagementServiceException);
assert(SnowDeviceManagementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeviceResources === "function");
assert(typeof paginateListDevices === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListTasks === "function");
console.log(`SnowDeviceManagement index test passed.`);
