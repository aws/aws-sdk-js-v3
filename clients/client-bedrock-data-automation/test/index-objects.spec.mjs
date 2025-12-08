import {
  AccessDeniedException,
  AudioExtractionCategoryType,
  AudioGenerativeOutputLanguage,
  AudioStandardGenerativeFieldType,
  BedrockDataAutomation,
  BedrockDataAutomationClient,
  BedrockDataAutomationServiceException,
  BlueprintStage,
  BlueprintStageFilter,
  ConflictException,
  CreateBlueprintCommand,
  CreateBlueprintVersionCommand,
  CreateDataAutomationProjectCommand,
  DataAutomationProjectStage,
  DataAutomationProjectStageFilter,
  DataAutomationProjectStatus,
  DataAutomationProjectType,
  DeleteBlueprintCommand,
  DeleteDataAutomationProjectCommand,
  DesiredModality,
  DocumentExtractionGranularityType,
  DocumentOutputTextFormatType,
  GetBlueprintCommand,
  GetDataAutomationProjectCommand,
  ImageExtractionCategoryType,
  ImageStandardGenerativeFieldType,
  InternalServerException,
  Language,
  ListBlueprintsCommand,
  ListDataAutomationProjectsCommand,
  ListTagsForResourceCommand,
  PIIEntityType,
  PIIRedactionMaskMode,
  ResourceNotFoundException,
  ResourceOwner,
  SensitiveDataDetectionMode,
  SensitiveDataDetectionScopeType,
  ServiceQuotaExceededException,
  State,
  TagResourceCommand,
  ThrottlingException,
  Type,
  UntagResourceCommand,
  UpdateBlueprintCommand,
  UpdateDataAutomationProjectCommand,
  ValidationException,
  VideoExtractionCategoryType,
  VideoStandardGenerativeFieldType,
  paginateListBlueprints,
  paginateListDataAutomationProjects,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockDataAutomationClient === "function");
assert(typeof BedrockDataAutomation === "function");
// commands
assert(typeof CreateBlueprintCommand === "function");
assert(typeof CreateBlueprintVersionCommand === "function");
assert(typeof CreateDataAutomationProjectCommand === "function");
assert(typeof DeleteBlueprintCommand === "function");
assert(typeof DeleteDataAutomationProjectCommand === "function");
assert(typeof GetBlueprintCommand === "function");
assert(typeof GetDataAutomationProjectCommand === "function");
assert(typeof ListBlueprintsCommand === "function");
assert(typeof ListDataAutomationProjectsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBlueprintCommand === "function");
assert(typeof UpdateDataAutomationProjectCommand === "function");
// enums
assert(typeof AudioExtractionCategoryType === "object");
assert(typeof AudioGenerativeOutputLanguage === "object");
assert(typeof AudioStandardGenerativeFieldType === "object");
assert(typeof BlueprintStage === "object");
assert(typeof BlueprintStageFilter === "object");
assert(typeof DataAutomationProjectStage === "object");
assert(typeof DataAutomationProjectStageFilter === "object");
assert(typeof DataAutomationProjectStatus === "object");
assert(typeof DataAutomationProjectType === "object");
assert(typeof DesiredModality === "object");
assert(typeof DocumentExtractionGranularityType === "object");
assert(typeof DocumentOutputTextFormatType === "object");
assert(typeof ImageExtractionCategoryType === "object");
assert(typeof ImageStandardGenerativeFieldType === "object");
assert(typeof Language === "object");
assert(typeof PIIEntityType === "object");
assert(typeof PIIRedactionMaskMode === "object");
assert(typeof ResourceOwner === "object");
assert(typeof SensitiveDataDetectionMode === "object");
assert(typeof SensitiveDataDetectionScopeType === "object");
assert(typeof State === "object");
assert(typeof Type === "object");
assert(typeof VideoExtractionCategoryType === "object");
assert(typeof VideoStandardGenerativeFieldType === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockDataAutomationServiceException);
assert(ConflictException.prototype instanceof BedrockDataAutomationServiceException);
assert(InternalServerException.prototype instanceof BedrockDataAutomationServiceException);
assert(ResourceNotFoundException.prototype instanceof BedrockDataAutomationServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BedrockDataAutomationServiceException);
assert(ThrottlingException.prototype instanceof BedrockDataAutomationServiceException);
assert(ValidationException.prototype instanceof BedrockDataAutomationServiceException);
assert(BedrockDataAutomationServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBlueprints === "function");
assert(typeof paginateListDataAutomationProjects === "function");
console.log(`BedrockDataAutomation index test passed.`);
