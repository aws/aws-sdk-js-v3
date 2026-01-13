import {
  AccessDeniedException,
  AccessDeniedException$,
  AppliedStatus,
  ARCZonalShift,
  ARCZonalShiftClient,
  ARCZonalShiftServiceException,
  AutoshiftAppliedStatus,
  AutoshiftExecutionStatus,
  AutoshiftInResource$,
  AutoshiftObserverNotificationStatus,
  AutoshiftSummary$,
  CancelPracticeRun$,
  CancelPracticeRunCommand,
  CancelPracticeRunRequest$,
  CancelPracticeRunResponse$,
  CancelZonalShift$,
  CancelZonalShiftCommand,
  CancelZonalShiftRequest$,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  ControlCondition$,
  ControlConditionType,
  CreatePracticeRunConfiguration$,
  CreatePracticeRunConfigurationCommand,
  CreatePracticeRunConfigurationRequest$,
  CreatePracticeRunConfigurationResponse$,
  DeletePracticeRunConfiguration$,
  DeletePracticeRunConfigurationCommand,
  DeletePracticeRunConfigurationRequest$,
  DeletePracticeRunConfigurationResponse$,
  GetAutoshiftObserverNotificationStatus$,
  GetAutoshiftObserverNotificationStatusCommand,
  GetAutoshiftObserverNotificationStatusRequest$,
  GetAutoshiftObserverNotificationStatusResponse$,
  GetManagedResource$,
  GetManagedResourceCommand,
  GetManagedResourceRequest$,
  GetManagedResourceResponse$,
  InternalServerException,
  InternalServerException$,
  ListAutoshifts$,
  ListAutoshiftsCommand,
  ListAutoshiftsRequest$,
  ListAutoshiftsResponse$,
  ListManagedResources$,
  ListManagedResourcesCommand,
  ListManagedResourcesRequest$,
  ListManagedResourcesResponse$,
  ListZonalShifts$,
  ListZonalShiftsCommand,
  ListZonalShiftsRequest$,
  ListZonalShiftsResponse$,
  ManagedResourceSummary$,
  paginateListAutoshifts,
  paginateListManagedResources,
  paginateListZonalShifts,
  PracticeRunConfiguration$,
  PracticeRunOutcome,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ShiftType,
  StartPracticeRun$,
  StartPracticeRunCommand,
  StartPracticeRunRequest$,
  StartPracticeRunResponse$,
  StartZonalShift$,
  StartZonalShiftCommand,
  StartZonalShiftRequest$,
  ThrottlingException,
  ThrottlingException$,
  UpdateAutoshiftObserverNotificationStatus$,
  UpdateAutoshiftObserverNotificationStatusCommand,
  UpdateAutoshiftObserverNotificationStatusRequest$,
  UpdateAutoshiftObserverNotificationStatusResponse$,
  UpdatePracticeRunConfiguration$,
  UpdatePracticeRunConfigurationCommand,
  UpdatePracticeRunConfigurationRequest$,
  UpdatePracticeRunConfigurationResponse$,
  UpdateZonalAutoshiftConfiguration$,
  UpdateZonalAutoshiftConfigurationCommand,
  UpdateZonalAutoshiftConfigurationRequest$,
  UpdateZonalAutoshiftConfigurationResponse$,
  UpdateZonalShift$,
  UpdateZonalShiftCommand,
  UpdateZonalShiftRequest$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  ZonalAutoshiftStatus,
  ZonalShift$,
  ZonalShiftInResource$,
  ZonalShiftStatus,
  ZonalShiftSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ARCZonalShiftClient === "function");
assert(typeof ARCZonalShift === "function");
// commands
assert(typeof CancelPracticeRunCommand === "function");
assert(typeof CancelPracticeRun$ === "object");
assert(typeof CancelZonalShiftCommand === "function");
assert(typeof CancelZonalShift$ === "object");
assert(typeof CreatePracticeRunConfigurationCommand === "function");
assert(typeof CreatePracticeRunConfiguration$ === "object");
assert(typeof DeletePracticeRunConfigurationCommand === "function");
assert(typeof DeletePracticeRunConfiguration$ === "object");
assert(typeof GetAutoshiftObserverNotificationStatusCommand === "function");
assert(typeof GetAutoshiftObserverNotificationStatus$ === "object");
assert(typeof GetManagedResourceCommand === "function");
assert(typeof GetManagedResource$ === "object");
assert(typeof ListAutoshiftsCommand === "function");
assert(typeof ListAutoshifts$ === "object");
assert(typeof ListManagedResourcesCommand === "function");
assert(typeof ListManagedResources$ === "object");
assert(typeof ListZonalShiftsCommand === "function");
assert(typeof ListZonalShifts$ === "object");
assert(typeof StartPracticeRunCommand === "function");
assert(typeof StartPracticeRun$ === "object");
assert(typeof StartZonalShiftCommand === "function");
assert(typeof StartZonalShift$ === "object");
assert(typeof UpdateAutoshiftObserverNotificationStatusCommand === "function");
assert(typeof UpdateAutoshiftObserverNotificationStatus$ === "object");
assert(typeof UpdatePracticeRunConfigurationCommand === "function");
assert(typeof UpdatePracticeRunConfiguration$ === "object");
assert(typeof UpdateZonalAutoshiftConfigurationCommand === "function");
assert(typeof UpdateZonalAutoshiftConfiguration$ === "object");
assert(typeof UpdateZonalShiftCommand === "function");
assert(typeof UpdateZonalShift$ === "object");
// structural schemas
assert(typeof AutoshiftInResource$ === "object");
assert(typeof AutoshiftSummary$ === "object");
assert(typeof CancelPracticeRunRequest$ === "object");
assert(typeof CancelPracticeRunResponse$ === "object");
assert(typeof CancelZonalShiftRequest$ === "object");
assert(typeof ControlCondition$ === "object");
assert(typeof CreatePracticeRunConfigurationRequest$ === "object");
assert(typeof CreatePracticeRunConfigurationResponse$ === "object");
assert(typeof DeletePracticeRunConfigurationRequest$ === "object");
assert(typeof DeletePracticeRunConfigurationResponse$ === "object");
assert(typeof GetAutoshiftObserverNotificationStatusRequest$ === "object");
assert(typeof GetAutoshiftObserverNotificationStatusResponse$ === "object");
assert(typeof GetManagedResourceRequest$ === "object");
assert(typeof GetManagedResourceResponse$ === "object");
assert(typeof ListAutoshiftsRequest$ === "object");
assert(typeof ListAutoshiftsResponse$ === "object");
assert(typeof ListManagedResourcesRequest$ === "object");
assert(typeof ListManagedResourcesResponse$ === "object");
assert(typeof ListZonalShiftsRequest$ === "object");
assert(typeof ListZonalShiftsResponse$ === "object");
assert(typeof ManagedResourceSummary$ === "object");
assert(typeof PracticeRunConfiguration$ === "object");
assert(typeof StartPracticeRunRequest$ === "object");
assert(typeof StartPracticeRunResponse$ === "object");
assert(typeof StartZonalShiftRequest$ === "object");
assert(typeof UpdateAutoshiftObserverNotificationStatusRequest$ === "object");
assert(typeof UpdateAutoshiftObserverNotificationStatusResponse$ === "object");
assert(typeof UpdatePracticeRunConfigurationRequest$ === "object");
assert(typeof UpdatePracticeRunConfigurationResponse$ === "object");
assert(typeof UpdateZonalAutoshiftConfigurationRequest$ === "object");
assert(typeof UpdateZonalAutoshiftConfigurationResponse$ === "object");
assert(typeof UpdateZonalShiftRequest$ === "object");
assert(typeof ZonalShift$ === "object");
assert(typeof ZonalShiftInResource$ === "object");
assert(typeof ZonalShiftSummary$ === "object");
// enums
assert(typeof AppliedStatus === "object");
assert(typeof AutoshiftAppliedStatus === "object");
assert(typeof AutoshiftExecutionStatus === "object");
assert(typeof AutoshiftObserverNotificationStatus === "object");
assert(typeof ConflictExceptionReason === "object");
assert(typeof ControlConditionType === "object");
assert(typeof PracticeRunOutcome === "object");
assert(typeof ShiftType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof ZonalAutoshiftStatus === "object");
assert(typeof ZonalShiftStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ARCZonalShiftServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ARCZonalShiftServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ARCZonalShiftServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ARCZonalShiftServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof ARCZonalShiftServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ARCZonalShiftServiceException);
assert(typeof ValidationException$ === "object");
assert(ARCZonalShiftServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAutoshifts === "function");
assert(typeof paginateListManagedResources === "function");
assert(typeof paginateListZonalShifts === "function");
console.log(`ARCZonalShift index test passed.`);
