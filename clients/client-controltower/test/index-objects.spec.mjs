import {
  AccessDeniedException,
  AccessDeniedException$,
  BaselineOperation$,
  BaselineOperationStatus,
  BaselineOperationType,
  BaselineSummary$,
  ConflictException,
  ConflictException$,
  ControlOperation$,
  ControlOperationFilter$,
  ControlOperationStatus,
  ControlOperationSummary$,
  ControlOperationType,
  ControlTower,
  ControlTowerClient,
  ControlTowerServiceException,
  CreateLandingZone$,
  CreateLandingZoneCommand,
  CreateLandingZoneInput$,
  CreateLandingZoneOutput$,
  DeleteLandingZone$,
  DeleteLandingZoneCommand,
  DeleteLandingZoneInput$,
  DeleteLandingZoneOutput$,
  DisableBaseline$,
  DisableBaselineCommand,
  DisableBaselineInput$,
  DisableBaselineOutput$,
  DisableControl$,
  DisableControlCommand,
  DisableControlInput$,
  DisableControlOutput$,
  DriftStatus,
  DriftStatusSummary$,
  EnableBaseline$,
  EnableBaselineCommand,
  EnableBaselineInput$,
  EnableBaselineOutput$,
  EnableControl$,
  EnableControlCommand,
  EnableControlInput$,
  EnableControlOutput$,
  EnabledBaselineDetails$,
  EnabledBaselineDriftStatus,
  EnabledBaselineDriftStatusSummary$,
  EnabledBaselineDriftTypes$,
  EnabledBaselineFilter$,
  EnabledBaselineInheritanceDrift$,
  EnabledBaselineParameter$,
  EnabledBaselineParameterSummary$,
  EnabledBaselineSummary$,
  EnabledControlDetails$,
  EnabledControlDriftTypes$,
  EnabledControlFilter$,
  EnabledControlInheritanceDrift$,
  EnabledControlParameter$,
  EnabledControlParameterSummary$,
  EnabledControlResourceDrift$,
  EnabledControlSummary$,
  EnablementStatus,
  EnablementStatusSummary$,
  GetBaseline$,
  GetBaselineCommand,
  GetBaselineInput$,
  GetBaselineOperation$,
  GetBaselineOperationCommand,
  GetBaselineOperationInput$,
  GetBaselineOperationOutput$,
  GetBaselineOutput$,
  GetControlOperation$,
  GetControlOperationCommand,
  GetControlOperationInput$,
  GetControlOperationOutput$,
  GetEnabledBaseline$,
  GetEnabledBaselineCommand,
  GetEnabledBaselineInput$,
  GetEnabledBaselineOutput$,
  GetEnabledControl$,
  GetEnabledControlCommand,
  GetEnabledControlInput$,
  GetEnabledControlOutput$,
  GetLandingZone$,
  GetLandingZoneCommand,
  GetLandingZoneInput$,
  GetLandingZoneOperation$,
  GetLandingZoneOperationCommand,
  GetLandingZoneOperationInput$,
  GetLandingZoneOperationOutput$,
  GetLandingZoneOutput$,
  InternalServerException,
  InternalServerException$,
  LandingZoneDetail$,
  LandingZoneDriftStatus,
  LandingZoneDriftStatusSummary$,
  LandingZoneOperationDetail$,
  LandingZoneOperationFilter$,
  LandingZoneOperationStatus,
  LandingZoneOperationSummary$,
  LandingZoneOperationType,
  LandingZoneStatus,
  LandingZoneSummary$,
  ListBaselines$,
  ListBaselinesCommand,
  ListBaselinesInput$,
  ListBaselinesOutput$,
  ListControlOperations$,
  ListControlOperationsCommand,
  ListControlOperationsInput$,
  ListControlOperationsOutput$,
  ListEnabledBaselines$,
  ListEnabledBaselinesCommand,
  ListEnabledBaselinesInput$,
  ListEnabledBaselinesOutput$,
  ListEnabledControls$,
  ListEnabledControlsCommand,
  ListEnabledControlsInput$,
  ListEnabledControlsOutput$,
  ListLandingZoneOperations$,
  ListLandingZoneOperationsCommand,
  ListLandingZoneOperationsInput$,
  ListLandingZoneOperationsOutput$,
  ListLandingZones$,
  ListLandingZonesCommand,
  ListLandingZonesInput$,
  ListLandingZonesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  paginateListBaselines,
  paginateListControlOperations,
  paginateListEnabledBaselines,
  paginateListEnabledControls,
  paginateListLandingZoneOperations,
  paginateListLandingZones,
  Region$,
  RemediationType,
  ResetEnabledBaseline$,
  ResetEnabledBaselineCommand,
  ResetEnabledBaselineInput$,
  ResetEnabledBaselineOutput$,
  ResetEnabledControl$,
  ResetEnabledControlCommand,
  ResetEnabledControlInput$,
  ResetEnabledControlOutput$,
  ResetLandingZone$,
  ResetLandingZoneCommand,
  ResetLandingZoneInput$,
  ResetLandingZoneOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateEnabledBaseline$,
  UpdateEnabledBaselineCommand,
  UpdateEnabledBaselineInput$,
  UpdateEnabledBaselineOutput$,
  UpdateEnabledControl$,
  UpdateEnabledControlCommand,
  UpdateEnabledControlInput$,
  UpdateEnabledControlOutput$,
  UpdateLandingZone$,
  UpdateLandingZoneCommand,
  UpdateLandingZoneInput$,
  UpdateLandingZoneOutput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ControlTowerClient === "function");
assert(typeof ControlTower === "function");
// commands
assert(typeof CreateLandingZoneCommand === "function");
assert(typeof CreateLandingZone$ === "object");
assert(typeof DeleteLandingZoneCommand === "function");
assert(typeof DeleteLandingZone$ === "object");
assert(typeof DisableBaselineCommand === "function");
assert(typeof DisableBaseline$ === "object");
assert(typeof DisableControlCommand === "function");
assert(typeof DisableControl$ === "object");
assert(typeof EnableBaselineCommand === "function");
assert(typeof EnableBaseline$ === "object");
assert(typeof EnableControlCommand === "function");
assert(typeof EnableControl$ === "object");
assert(typeof GetBaselineCommand === "function");
assert(typeof GetBaseline$ === "object");
assert(typeof GetBaselineOperationCommand === "function");
assert(typeof GetBaselineOperation$ === "object");
assert(typeof GetControlOperationCommand === "function");
assert(typeof GetControlOperation$ === "object");
assert(typeof GetEnabledBaselineCommand === "function");
assert(typeof GetEnabledBaseline$ === "object");
assert(typeof GetEnabledControlCommand === "function");
assert(typeof GetEnabledControl$ === "object");
assert(typeof GetLandingZoneCommand === "function");
assert(typeof GetLandingZone$ === "object");
assert(typeof GetLandingZoneOperationCommand === "function");
assert(typeof GetLandingZoneOperation$ === "object");
assert(typeof ListBaselinesCommand === "function");
assert(typeof ListBaselines$ === "object");
assert(typeof ListControlOperationsCommand === "function");
assert(typeof ListControlOperations$ === "object");
assert(typeof ListEnabledBaselinesCommand === "function");
assert(typeof ListEnabledBaselines$ === "object");
assert(typeof ListEnabledControlsCommand === "function");
assert(typeof ListEnabledControls$ === "object");
assert(typeof ListLandingZoneOperationsCommand === "function");
assert(typeof ListLandingZoneOperations$ === "object");
assert(typeof ListLandingZonesCommand === "function");
assert(typeof ListLandingZones$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ResetEnabledBaselineCommand === "function");
assert(typeof ResetEnabledBaseline$ === "object");
assert(typeof ResetEnabledControlCommand === "function");
assert(typeof ResetEnabledControl$ === "object");
assert(typeof ResetLandingZoneCommand === "function");
assert(typeof ResetLandingZone$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEnabledBaselineCommand === "function");
assert(typeof UpdateEnabledBaseline$ === "object");
assert(typeof UpdateEnabledControlCommand === "function");
assert(typeof UpdateEnabledControl$ === "object");
assert(typeof UpdateLandingZoneCommand === "function");
assert(typeof UpdateLandingZone$ === "object");
// structural schemas
assert(typeof BaselineOperation$ === "object");
assert(typeof BaselineSummary$ === "object");
assert(typeof ControlOperation$ === "object");
assert(typeof ControlOperationFilter$ === "object");
assert(typeof ControlOperationSummary$ === "object");
assert(typeof CreateLandingZoneInput$ === "object");
assert(typeof CreateLandingZoneOutput$ === "object");
assert(typeof DeleteLandingZoneInput$ === "object");
assert(typeof DeleteLandingZoneOutput$ === "object");
assert(typeof DisableBaselineInput$ === "object");
assert(typeof DisableBaselineOutput$ === "object");
assert(typeof DisableControlInput$ === "object");
assert(typeof DisableControlOutput$ === "object");
assert(typeof DriftStatusSummary$ === "object");
assert(typeof EnableBaselineInput$ === "object");
assert(typeof EnableBaselineOutput$ === "object");
assert(typeof EnableControlInput$ === "object");
assert(typeof EnableControlOutput$ === "object");
assert(typeof EnabledBaselineDetails$ === "object");
assert(typeof EnabledBaselineDriftStatusSummary$ === "object");
assert(typeof EnabledBaselineDriftTypes$ === "object");
assert(typeof EnabledBaselineFilter$ === "object");
assert(typeof EnabledBaselineInheritanceDrift$ === "object");
assert(typeof EnabledBaselineParameter$ === "object");
assert(typeof EnabledBaselineParameterSummary$ === "object");
assert(typeof EnabledBaselineSummary$ === "object");
assert(typeof EnabledControlDetails$ === "object");
assert(typeof EnabledControlDriftTypes$ === "object");
assert(typeof EnabledControlFilter$ === "object");
assert(typeof EnabledControlInheritanceDrift$ === "object");
assert(typeof EnabledControlParameter$ === "object");
assert(typeof EnabledControlParameterSummary$ === "object");
assert(typeof EnabledControlResourceDrift$ === "object");
assert(typeof EnabledControlSummary$ === "object");
assert(typeof EnablementStatusSummary$ === "object");
assert(typeof GetBaselineInput$ === "object");
assert(typeof GetBaselineOperationInput$ === "object");
assert(typeof GetBaselineOperationOutput$ === "object");
assert(typeof GetBaselineOutput$ === "object");
assert(typeof GetControlOperationInput$ === "object");
assert(typeof GetControlOperationOutput$ === "object");
assert(typeof GetEnabledBaselineInput$ === "object");
assert(typeof GetEnabledBaselineOutput$ === "object");
assert(typeof GetEnabledControlInput$ === "object");
assert(typeof GetEnabledControlOutput$ === "object");
assert(typeof GetLandingZoneInput$ === "object");
assert(typeof GetLandingZoneOperationInput$ === "object");
assert(typeof GetLandingZoneOperationOutput$ === "object");
assert(typeof GetLandingZoneOutput$ === "object");
assert(typeof LandingZoneDetail$ === "object");
assert(typeof LandingZoneDriftStatusSummary$ === "object");
assert(typeof LandingZoneOperationDetail$ === "object");
assert(typeof LandingZoneOperationFilter$ === "object");
assert(typeof LandingZoneOperationSummary$ === "object");
assert(typeof LandingZoneSummary$ === "object");
assert(typeof ListBaselinesInput$ === "object");
assert(typeof ListBaselinesOutput$ === "object");
assert(typeof ListControlOperationsInput$ === "object");
assert(typeof ListControlOperationsOutput$ === "object");
assert(typeof ListEnabledBaselinesInput$ === "object");
assert(typeof ListEnabledBaselinesOutput$ === "object");
assert(typeof ListEnabledControlsInput$ === "object");
assert(typeof ListEnabledControlsOutput$ === "object");
assert(typeof ListLandingZoneOperationsInput$ === "object");
assert(typeof ListLandingZoneOperationsOutput$ === "object");
assert(typeof ListLandingZonesInput$ === "object");
assert(typeof ListLandingZonesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof Region$ === "object");
assert(typeof ResetEnabledBaselineInput$ === "object");
assert(typeof ResetEnabledBaselineOutput$ === "object");
assert(typeof ResetEnabledControlInput$ === "object");
assert(typeof ResetEnabledControlOutput$ === "object");
assert(typeof ResetLandingZoneInput$ === "object");
assert(typeof ResetLandingZoneOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateEnabledBaselineInput$ === "object");
assert(typeof UpdateEnabledBaselineOutput$ === "object");
assert(typeof UpdateEnabledControlInput$ === "object");
assert(typeof UpdateEnabledControlOutput$ === "object");
assert(typeof UpdateLandingZoneInput$ === "object");
assert(typeof UpdateLandingZoneOutput$ === "object");
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
assert(AccessDeniedException.prototype instanceof ControlTowerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ControlTowerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ControlTowerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ControlTowerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ControlTowerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ControlTowerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ControlTowerServiceException);
assert(typeof ValidationException$ === "object");
assert(ControlTowerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBaselines === "function");
assert(typeof paginateListControlOperations === "function");
assert(typeof paginateListEnabledBaselines === "function");
assert(typeof paginateListEnabledControls === "function");
assert(typeof paginateListLandingZoneOperations === "function");
assert(typeof paginateListLandingZones === "function");
console.log(`ControlTower index test passed.`);
