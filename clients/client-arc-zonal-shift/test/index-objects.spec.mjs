import {
  ARCZonalShift,
  ARCZonalShiftClient,
  ARCZonalShiftServiceException,
  AccessDeniedException,
  AppliedStatus,
  AutoshiftAppliedStatus,
  AutoshiftExecutionStatus,
  AutoshiftObserverNotificationStatus,
  CancelPracticeRunCommand,
  CancelZonalShiftCommand,
  ConflictException,
  ConflictExceptionReason,
  ControlConditionType,
  CreatePracticeRunConfigurationCommand,
  DeletePracticeRunConfigurationCommand,
  GetAutoshiftObserverNotificationStatusCommand,
  GetManagedResourceCommand,
  InternalServerException,
  ListAutoshiftsCommand,
  ListManagedResourcesCommand,
  ListZonalShiftsCommand,
  PracticeRunOutcome,
  ResourceNotFoundException,
  ShiftType,
  StartPracticeRunCommand,
  StartZonalShiftCommand,
  ThrottlingException,
  UpdateAutoshiftObserverNotificationStatusCommand,
  UpdatePracticeRunConfigurationCommand,
  UpdateZonalAutoshiftConfigurationCommand,
  UpdateZonalShiftCommand,
  ValidationException,
  ValidationExceptionReason,
  ZonalAutoshiftStatus,
  ZonalShiftStatus,
  paginateListAutoshifts,
  paginateListManagedResources,
  paginateListZonalShifts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ARCZonalShiftClient === "function");
assert(typeof ARCZonalShift === "function");
// commands
assert(typeof CancelPracticeRunCommand === "function");
assert(typeof CancelZonalShiftCommand === "function");
assert(typeof CreatePracticeRunConfigurationCommand === "function");
assert(typeof DeletePracticeRunConfigurationCommand === "function");
assert(typeof GetAutoshiftObserverNotificationStatusCommand === "function");
assert(typeof GetManagedResourceCommand === "function");
assert(typeof ListAutoshiftsCommand === "function");
assert(typeof ListManagedResourcesCommand === "function");
assert(typeof ListZonalShiftsCommand === "function");
assert(typeof StartPracticeRunCommand === "function");
assert(typeof StartZonalShiftCommand === "function");
assert(typeof UpdateAutoshiftObserverNotificationStatusCommand === "function");
assert(typeof UpdatePracticeRunConfigurationCommand === "function");
assert(typeof UpdateZonalAutoshiftConfigurationCommand === "function");
assert(typeof UpdateZonalShiftCommand === "function");
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
assert(ConflictException.prototype instanceof ARCZonalShiftServiceException);
assert(InternalServerException.prototype instanceof ARCZonalShiftServiceException);
assert(ResourceNotFoundException.prototype instanceof ARCZonalShiftServiceException);
assert(ThrottlingException.prototype instanceof ARCZonalShiftServiceException);
assert(ValidationException.prototype instanceof ARCZonalShiftServiceException);
assert(ARCZonalShiftServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAutoshifts === "function");
assert(typeof paginateListManagedResources === "function");
assert(typeof paginateListZonalShifts === "function");
console.log(`ARCZonalShift index test passed.`);
