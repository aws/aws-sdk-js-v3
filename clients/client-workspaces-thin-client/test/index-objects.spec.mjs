import {
  ApplyTimeOf,
  CreateEnvironmentCommand,
  DayOfWeek,
  DeleteDeviceCommand,
  DeleteEnvironmentCommand,
  DeregisterDeviceCommand,
  DesktopType,
  DeviceSoftwareSetComplianceStatus,
  DeviceStatus,
  EnvironmentSoftwareSetComplianceStatus,
  GetDeviceCommand,
  GetEnvironmentCommand,
  GetSoftwareSetCommand,
  ListDevicesCommand,
  ListEnvironmentsCommand,
  ListSoftwareSetsCommand,
  ListTagsForResourceCommand,
  MaintenanceWindowType,
  SoftwareSetUpdateMode,
  SoftwareSetUpdateSchedule,
  SoftwareSetUpdateStatus,
  SoftwareSetValidationStatus,
  TagResourceCommand,
  TargetDeviceStatus,
  UntagResourceCommand,
  UpdateDeviceCommand,
  UpdateEnvironmentCommand,
  UpdateSoftwareSetCommand,
  WorkSpacesThinClient,
  WorkSpacesThinClientClient,
  WorkSpacesThinClientServiceException,
  paginateListDevices,
  paginateListEnvironments,
  paginateListSoftwareSets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkSpacesThinClientClient === "function");
assert(typeof WorkSpacesThinClient === "function");
// commands
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof DeleteDeviceCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeregisterDeviceCommand === "function");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetSoftwareSetCommand === "function");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListSoftwareSetsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDeviceCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateSoftwareSetCommand === "function");
// enums
assert(typeof ApplyTimeOf === "object");
assert(typeof DayOfWeek === "object");
assert(typeof DesktopType === "object");
assert(typeof DeviceSoftwareSetComplianceStatus === "object");
assert(typeof DeviceStatus === "object");
assert(typeof EnvironmentSoftwareSetComplianceStatus === "object");
assert(typeof MaintenanceWindowType === "object");
assert(typeof SoftwareSetUpdateMode === "object");
assert(typeof SoftwareSetUpdateSchedule === "object");
assert(typeof SoftwareSetUpdateStatus === "object");
assert(typeof SoftwareSetValidationStatus === "object");
assert(typeof TargetDeviceStatus === "object");
// errors
assert(WorkSpacesThinClientServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDevices === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListSoftwareSets === "function");
console.log(`WorkSpacesThinClient index test passed.`);
