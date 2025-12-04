import {
  AccountTargeting,
  ActionsMode,
  CreateExperimentTemplateCommand,
  CreateTargetAccountConfigurationCommand,
  DeleteExperimentTemplateCommand,
  DeleteTargetAccountConfigurationCommand,
  EmptyTargetResolutionMode,
  ExperimentActionStatus,
  ExperimentReportStatus,
  ExperimentStatus,
  Fis,
  FisClient,
  FisServiceException,
  GetActionCommand,
  GetExperimentCommand,
  GetExperimentTargetAccountConfigurationCommand,
  GetExperimentTemplateCommand,
  GetSafetyLeverCommand,
  GetTargetAccountConfigurationCommand,
  GetTargetResourceTypeCommand,
  ListActionsCommand,
  ListExperimentResolvedTargetsCommand,
  ListExperimentTargetAccountConfigurationsCommand,
  ListExperimentTemplatesCommand,
  ListExperimentsCommand,
  ListTagsForResourceCommand,
  ListTargetAccountConfigurationsCommand,
  ListTargetResourceTypesCommand,
  SafetyLeverStatus,
  SafetyLeverStatusInput,
  StartExperimentCommand,
  StopExperimentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateExperimentTemplateCommand,
  UpdateSafetyLeverStateCommand,
  UpdateTargetAccountConfigurationCommand,
  paginateListActions,
  paginateListExperimentResolvedTargets,
  paginateListExperimentTemplates,
  paginateListExperiments,
  paginateListTargetAccountConfigurations,
  paginateListTargetResourceTypes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FisClient === "function");
assert(typeof Fis === "function");
// commands
assert(typeof CreateExperimentTemplateCommand === "function");
assert(typeof CreateTargetAccountConfigurationCommand === "function");
assert(typeof DeleteExperimentTemplateCommand === "function");
assert(typeof DeleteTargetAccountConfigurationCommand === "function");
assert(typeof GetActionCommand === "function");
assert(typeof GetExperimentCommand === "function");
assert(typeof GetExperimentTargetAccountConfigurationCommand === "function");
assert(typeof GetExperimentTemplateCommand === "function");
assert(typeof GetSafetyLeverCommand === "function");
assert(typeof GetTargetAccountConfigurationCommand === "function");
assert(typeof GetTargetResourceTypeCommand === "function");
assert(typeof ListActionsCommand === "function");
assert(typeof ListExperimentResolvedTargetsCommand === "function");
assert(typeof ListExperimentsCommand === "function");
assert(typeof ListExperimentTargetAccountConfigurationsCommand === "function");
assert(typeof ListExperimentTemplatesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetAccountConfigurationsCommand === "function");
assert(typeof ListTargetResourceTypesCommand === "function");
assert(typeof StartExperimentCommand === "function");
assert(typeof StopExperimentCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateExperimentTemplateCommand === "function");
assert(typeof UpdateSafetyLeverStateCommand === "function");
assert(typeof UpdateTargetAccountConfigurationCommand === "function");
// enums
assert(typeof AccountTargeting === "object");
assert(typeof ActionsMode === "object");
assert(typeof EmptyTargetResolutionMode === "object");
assert(typeof ExperimentActionStatus === "object");
assert(typeof ExperimentReportStatus === "object");
assert(typeof ExperimentStatus === "object");
assert(typeof SafetyLeverStatus === "object");
assert(typeof SafetyLeverStatusInput === "object");
// errors
assert(FisServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActions === "function");
assert(typeof paginateListExperimentResolvedTargets === "function");
assert(typeof paginateListExperimentTemplates === "function");
assert(typeof paginateListExperiments === "function");
assert(typeof paginateListTargetAccountConfigurations === "function");
assert(typeof paginateListTargetResourceTypes === "function");
console.log(`Fis index test passed.`);
