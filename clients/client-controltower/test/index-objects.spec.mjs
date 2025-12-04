import {
  BaselineOperationStatus,
  BaselineOperationType,
  ControlOperationStatus,
  ControlOperationType,
  ControlTower,
  ControlTowerClient,
  ControlTowerServiceException,
  CreateLandingZoneCommand,
  DeleteLandingZoneCommand,
  DisableBaselineCommand,
  DisableControlCommand,
  DriftStatus,
  EnableBaselineCommand,
  EnableControlCommand,
  EnabledBaselineDriftStatus,
  EnablementStatus,
  GetBaselineCommand,
  GetBaselineOperationCommand,
  GetControlOperationCommand,
  GetEnabledBaselineCommand,
  GetEnabledControlCommand,
  GetLandingZoneCommand,
  GetLandingZoneOperationCommand,
  LandingZoneDriftStatus,
  LandingZoneOperationStatus,
  LandingZoneOperationType,
  LandingZoneStatus,
  ListBaselinesCommand,
  ListControlOperationsCommand,
  ListEnabledBaselinesCommand,
  ListEnabledControlsCommand,
  ListLandingZoneOperationsCommand,
  ListLandingZonesCommand,
  ListTagsForResourceCommand,
  RemediationType,
  ResetEnabledBaselineCommand,
  ResetEnabledControlCommand,
  ResetLandingZoneCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnabledBaselineCommand,
  UpdateEnabledControlCommand,
  UpdateLandingZoneCommand,
  paginateListBaselines,
  paginateListControlOperations,
  paginateListEnabledBaselines,
  paginateListEnabledControls,
  paginateListLandingZoneOperations,
  paginateListLandingZones,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ControlTowerClient === "function")
assert(typeof ControlTower === "function")
// commands
assert(typeof CreateLandingZoneCommand === "function")
assert(typeof DeleteLandingZoneCommand === "function")
assert(typeof DisableBaselineCommand === "function")
assert(typeof DisableControlCommand === "function")
assert(typeof EnableBaselineCommand === "function")
assert(typeof EnableControlCommand === "function")
assert(typeof GetBaselineCommand === "function")
assert(typeof GetBaselineOperationCommand === "function")
assert(typeof GetControlOperationCommand === "function")
assert(typeof GetEnabledBaselineCommand === "function")
assert(typeof GetEnabledControlCommand === "function")
assert(typeof GetLandingZoneCommand === "function")
assert(typeof GetLandingZoneOperationCommand === "function")
assert(typeof ListBaselinesCommand === "function")
assert(typeof ListControlOperationsCommand === "function")
assert(typeof ListEnabledBaselinesCommand === "function")
assert(typeof ListEnabledControlsCommand === "function")
assert(typeof ListLandingZoneOperationsCommand === "function")
assert(typeof ListLandingZonesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ResetEnabledBaselineCommand === "function")
assert(typeof ResetEnabledControlCommand === "function")
assert(typeof ResetLandingZoneCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateEnabledBaselineCommand === "function")
assert(typeof UpdateEnabledControlCommand === "function")
assert(typeof UpdateLandingZoneCommand === "function")
// enums
assert(typeof BaselineOperationStatus === "object");
assert(typeof BaselineOperationType === "object");
assert(typeof ControlOperationStatus === "object");
assert(typeof ControlOperationType === "object");
assert(typeof DriftStatus === "object");
assert(typeof EnabledBaselineDriftStatus === "object");
assert(typeof EnablementStatus === "object");
assert(typeof LandingZoneDriftStatus === "object");
assert(typeof LandingZoneOperationStatus === "object");
assert(typeof LandingZoneOperationType === "object");
assert(typeof LandingZoneStatus === "object");
assert(typeof RemediationType === "object");
// errors
assert(ControlTowerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListBaselines === "function")
assert(typeof paginateListControlOperations === "function")
assert(typeof paginateListEnabledBaselines === "function")
assert(typeof paginateListEnabledControls === "function")
assert(typeof paginateListLandingZoneOperations === "function")
assert(typeof paginateListLandingZones === "function")
console.log(`ControlTower index test passed.`);
