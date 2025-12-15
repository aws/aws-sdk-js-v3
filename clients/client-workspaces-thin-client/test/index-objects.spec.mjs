import {
  AccessDeniedException,
  AccessDeniedException$,
  ApplyTimeOf,
  ConflictException,
  ConflictException$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentRequest$,
  CreateEnvironmentResponse$,
  DayOfWeek,
  DeleteDevice$,
  DeleteDeviceCommand,
  DeleteDeviceRequest$,
  DeleteDeviceResponse$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentRequest$,
  DeleteEnvironmentResponse$,
  DeregisterDevice$,
  DeregisterDeviceCommand,
  DeregisterDeviceRequest$,
  DeregisterDeviceResponse$,
  DesktopType,
  Device$,
  DeviceSoftwareSetComplianceStatus,
  DeviceStatus,
  DeviceSummary$,
  Environment$,
  EnvironmentSoftwareSetComplianceStatus,
  EnvironmentSummary$,
  GetDevice$,
  GetDeviceCommand,
  GetDeviceRequest$,
  GetDeviceResponse$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  GetSoftwareSet$,
  GetSoftwareSetCommand,
  GetSoftwareSetRequest$,
  GetSoftwareSetResponse$,
  InternalServerException,
  InternalServerException$,
  ListDevices$,
  ListDevicesCommand,
  ListDevicesRequest$,
  ListDevicesResponse$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListSoftwareSets$,
  ListSoftwareSetsCommand,
  ListSoftwareSetsRequest$,
  ListSoftwareSetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MaintenanceWindow$,
  MaintenanceWindowType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Software$,
  SoftwareSet$,
  SoftwareSetSummary$,
  SoftwareSetUpdateMode,
  SoftwareSetUpdateSchedule,
  SoftwareSetUpdateStatus,
  SoftwareSetValidationStatus,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetDeviceStatus,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDevice$,
  UpdateDeviceCommand,
  UpdateDeviceRequest$,
  UpdateDeviceResponse$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentRequest$,
  UpdateEnvironmentResponse$,
  UpdateSoftwareSet$,
  UpdateSoftwareSetCommand,
  UpdateSoftwareSetRequest$,
  UpdateSoftwareSetResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
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
assert(typeof CreateEnvironment$ === "object");
assert(typeof DeleteDeviceCommand === "function");
assert(typeof DeleteDevice$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeregisterDeviceCommand === "function");
assert(typeof DeregisterDevice$ === "object");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetDevice$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetSoftwareSetCommand === "function");
assert(typeof GetSoftwareSet$ === "object");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevices$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListSoftwareSetsCommand === "function");
assert(typeof ListSoftwareSets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDeviceCommand === "function");
assert(typeof UpdateDevice$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateSoftwareSetCommand === "function");
assert(typeof UpdateSoftwareSet$ === "object");
// structural schemas
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateEnvironmentResponse$ === "object");
assert(typeof DeleteDeviceRequest$ === "object");
assert(typeof DeleteDeviceResponse$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResponse$ === "object");
assert(typeof DeregisterDeviceRequest$ === "object");
assert(typeof DeregisterDeviceResponse$ === "object");
assert(typeof Device$ === "object");
assert(typeof DeviceSummary$ === "object");
assert(typeof Environment$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof GetDeviceRequest$ === "object");
assert(typeof GetDeviceResponse$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof GetSoftwareSetRequest$ === "object");
assert(typeof GetSoftwareSetResponse$ === "object");
assert(typeof ListDevicesRequest$ === "object");
assert(typeof ListDevicesResponse$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListSoftwareSetsRequest$ === "object");
assert(typeof ListSoftwareSetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MaintenanceWindow$ === "object");
assert(typeof Software$ === "object");
assert(typeof SoftwareSet$ === "object");
assert(typeof SoftwareSetSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDeviceRequest$ === "object");
assert(typeof UpdateDeviceResponse$ === "object");
assert(typeof UpdateEnvironmentRequest$ === "object");
assert(typeof UpdateEnvironmentResponse$ === "object");
assert(typeof UpdateSoftwareSetRequest$ === "object");
assert(typeof UpdateSoftwareSetResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof WorkSpacesThinClientServiceException);
assert(typeof ValidationException$ === "object");
assert(WorkSpacesThinClientServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDevices === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListSoftwareSets === "function");
console.log(`WorkSpacesThinClient index test passed.`);
