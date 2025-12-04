import {
  ARCZonalShift,
  ARCZonalShiftClient,
  ARCZonalShiftServiceException,
  AppliedStatus,
  AutoshiftAppliedStatus,
  AutoshiftExecutionStatus,
  AutoshiftObserverNotificationStatus,
  CancelPracticeRunCommand,
  CancelZonalShiftCommand,
  ControlConditionType,
  CreatePracticeRunConfigurationCommand,
  DeletePracticeRunConfigurationCommand,
  GetAutoshiftObserverNotificationStatusCommand,
  GetManagedResourceCommand,
  ListAutoshiftsCommand,
  ListManagedResourcesCommand,
  ListZonalShiftsCommand,
  PracticeRunOutcome,
  ShiftType,
  StartPracticeRunCommand,
  StartZonalShiftCommand,
  UpdateAutoshiftObserverNotificationStatusCommand,
  UpdatePracticeRunConfigurationCommand,
  UpdateZonalAutoshiftConfigurationCommand,
  UpdateZonalShiftCommand,
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
assert(typeof ControlConditionType === "object");
assert(typeof PracticeRunOutcome === "object");
assert(typeof ShiftType === "object");
assert(typeof ZonalAutoshiftStatus === "object");
assert(typeof ZonalShiftStatus === "object");
// errors
assert(ARCZonalShiftServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAutoshifts === "function");
assert(typeof paginateListManagedResources === "function");
assert(typeof paginateListZonalShifts === "function");
console.log(`ARCZonalShift index test passed.`);
