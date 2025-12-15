import {
  AccessDeniedException,
  AccessDeniedException$,
  AudioExtractionCategory$,
  AudioExtractionCategoryType,
  AudioExtractionCategoryTypeConfiguration$,
  AudioGenerativeOutputLanguage,
  AudioLanguageConfiguration$,
  AudioOverrideConfiguration$,
  AudioStandardExtraction$,
  AudioStandardGenerativeField$,
  AudioStandardGenerativeFieldType,
  AudioStandardOutputConfiguration$,
  BedrockDataAutomation,
  BedrockDataAutomationClient,
  BedrockDataAutomationServiceException,
  Blueprint$,
  BlueprintFilter$,
  BlueprintItem$,
  BlueprintStage,
  BlueprintStageFilter,
  BlueprintSummary$,
  ChannelLabelingConfiguration$,
  ConflictException,
  ConflictException$,
  CreateBlueprint$,
  CreateBlueprintCommand,
  CreateBlueprintRequest$,
  CreateBlueprintResponse$,
  CreateBlueprintVersion$,
  CreateBlueprintVersionCommand,
  CreateBlueprintVersionRequest$,
  CreateBlueprintVersionResponse$,
  CreateDataAutomationProject$,
  CreateDataAutomationProjectCommand,
  CreateDataAutomationProjectRequest$,
  CreateDataAutomationProjectResponse$,
  CustomOutputConfiguration$,
  DataAutomationProject$,
  DataAutomationProjectFilter$,
  DataAutomationProjectStage,
  DataAutomationProjectStageFilter,
  DataAutomationProjectStatus,
  DataAutomationProjectSummary$,
  DataAutomationProjectType,
  DeleteBlueprint$,
  DeleteBlueprintCommand,
  DeleteBlueprintRequest$,
  DeleteBlueprintResponse$,
  DeleteDataAutomationProject$,
  DeleteDataAutomationProjectCommand,
  DeleteDataAutomationProjectRequest$,
  DeleteDataAutomationProjectResponse$,
  DesiredModality,
  DocumentBoundingBox$,
  DocumentExtractionGranularity$,
  DocumentExtractionGranularityType,
  DocumentOutputAdditionalFileFormat$,
  DocumentOutputFormat$,
  DocumentOutputTextFormat$,
  DocumentOutputTextFormatType,
  DocumentOverrideConfiguration$,
  DocumentStandardExtraction$,
  DocumentStandardGenerativeField$,
  DocumentStandardOutputConfiguration$,
  EncryptionConfiguration$,
  GetBlueprint$,
  GetBlueprintCommand,
  GetBlueprintRequest$,
  GetBlueprintResponse$,
  GetDataAutomationProject$,
  GetDataAutomationProjectCommand,
  GetDataAutomationProjectRequest$,
  GetDataAutomationProjectResponse$,
  ImageBoundingBox$,
  ImageExtractionCategory$,
  ImageExtractionCategoryType,
  ImageOverrideConfiguration$,
  ImageStandardExtraction$,
  ImageStandardGenerativeField$,
  ImageStandardGenerativeFieldType,
  ImageStandardOutputConfiguration$,
  InternalServerException,
  InternalServerException$,
  Language,
  ListBlueprints$,
  ListBlueprintsCommand,
  ListBlueprintsRequest$,
  ListBlueprintsResponse$,
  ListDataAutomationProjects$,
  ListDataAutomationProjectsCommand,
  ListDataAutomationProjectsRequest$,
  ListDataAutomationProjectsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ModalityProcessingConfiguration$,
  ModalityRoutingConfiguration$,
  OverrideConfiguration$,
  PIIEntitiesConfiguration$,
  PIIEntityType,
  PIIRedactionMaskMode,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceOwner,
  SensitiveDataConfiguration$,
  SensitiveDataDetectionMode,
  SensitiveDataDetectionScopeType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SpeakerLabelingConfiguration$,
  SplitterConfiguration$,
  StandardOutputConfiguration$,
  State,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TranscriptConfiguration$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBlueprint$,
  UpdateBlueprintCommand,
  UpdateBlueprintRequest$,
  UpdateBlueprintResponse$,
  UpdateDataAutomationProject$,
  UpdateDataAutomationProjectCommand,
  UpdateDataAutomationProjectRequest$,
  UpdateDataAutomationProjectResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VideoBoundingBox$,
  VideoExtractionCategory$,
  VideoExtractionCategoryType,
  VideoOverrideConfiguration$,
  VideoStandardExtraction$,
  VideoStandardGenerativeField$,
  VideoStandardGenerativeFieldType,
  VideoStandardOutputConfiguration$,
  paginateListBlueprints,
  paginateListDataAutomationProjects,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockDataAutomationClient === "function");
assert(typeof BedrockDataAutomation === "function");
// commands
assert(typeof CreateBlueprintCommand === "function");
assert(typeof CreateBlueprint$ === "object");
assert(typeof CreateBlueprintVersionCommand === "function");
assert(typeof CreateBlueprintVersion$ === "object");
assert(typeof CreateDataAutomationProjectCommand === "function");
assert(typeof CreateDataAutomationProject$ === "object");
assert(typeof DeleteBlueprintCommand === "function");
assert(typeof DeleteBlueprint$ === "object");
assert(typeof DeleteDataAutomationProjectCommand === "function");
assert(typeof DeleteDataAutomationProject$ === "object");
assert(typeof GetBlueprintCommand === "function");
assert(typeof GetBlueprint$ === "object");
assert(typeof GetDataAutomationProjectCommand === "function");
assert(typeof GetDataAutomationProject$ === "object");
assert(typeof ListBlueprintsCommand === "function");
assert(typeof ListBlueprints$ === "object");
assert(typeof ListDataAutomationProjectsCommand === "function");
assert(typeof ListDataAutomationProjects$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBlueprintCommand === "function");
assert(typeof UpdateBlueprint$ === "object");
assert(typeof UpdateDataAutomationProjectCommand === "function");
assert(typeof UpdateDataAutomationProject$ === "object");
// structural schemas
assert(typeof AudioExtractionCategory$ === "object");
assert(typeof AudioExtractionCategoryTypeConfiguration$ === "object");
assert(typeof AudioLanguageConfiguration$ === "object");
assert(typeof AudioOverrideConfiguration$ === "object");
assert(typeof AudioStandardExtraction$ === "object");
assert(typeof AudioStandardGenerativeField$ === "object");
assert(typeof AudioStandardOutputConfiguration$ === "object");
assert(typeof Blueprint$ === "object");
assert(typeof BlueprintFilter$ === "object");
assert(typeof BlueprintItem$ === "object");
assert(typeof BlueprintSummary$ === "object");
assert(typeof ChannelLabelingConfiguration$ === "object");
assert(typeof CreateBlueprintRequest$ === "object");
assert(typeof CreateBlueprintResponse$ === "object");
assert(typeof CreateBlueprintVersionRequest$ === "object");
assert(typeof CreateBlueprintVersionResponse$ === "object");
assert(typeof CreateDataAutomationProjectRequest$ === "object");
assert(typeof CreateDataAutomationProjectResponse$ === "object");
assert(typeof CustomOutputConfiguration$ === "object");
assert(typeof DataAutomationProject$ === "object");
assert(typeof DataAutomationProjectFilter$ === "object");
assert(typeof DataAutomationProjectSummary$ === "object");
assert(typeof DeleteBlueprintRequest$ === "object");
assert(typeof DeleteBlueprintResponse$ === "object");
assert(typeof DeleteDataAutomationProjectRequest$ === "object");
assert(typeof DeleteDataAutomationProjectResponse$ === "object");
assert(typeof DocumentBoundingBox$ === "object");
assert(typeof DocumentExtractionGranularity$ === "object");
assert(typeof DocumentOutputAdditionalFileFormat$ === "object");
assert(typeof DocumentOutputFormat$ === "object");
assert(typeof DocumentOutputTextFormat$ === "object");
assert(typeof DocumentOverrideConfiguration$ === "object");
assert(typeof DocumentStandardExtraction$ === "object");
assert(typeof DocumentStandardGenerativeField$ === "object");
assert(typeof DocumentStandardOutputConfiguration$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetBlueprintRequest$ === "object");
assert(typeof GetBlueprintResponse$ === "object");
assert(typeof GetDataAutomationProjectRequest$ === "object");
assert(typeof GetDataAutomationProjectResponse$ === "object");
assert(typeof ImageBoundingBox$ === "object");
assert(typeof ImageExtractionCategory$ === "object");
assert(typeof ImageOverrideConfiguration$ === "object");
assert(typeof ImageStandardExtraction$ === "object");
assert(typeof ImageStandardGenerativeField$ === "object");
assert(typeof ImageStandardOutputConfiguration$ === "object");
assert(typeof ListBlueprintsRequest$ === "object");
assert(typeof ListBlueprintsResponse$ === "object");
assert(typeof ListDataAutomationProjectsRequest$ === "object");
assert(typeof ListDataAutomationProjectsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ModalityProcessingConfiguration$ === "object");
assert(typeof ModalityRoutingConfiguration$ === "object");
assert(typeof OverrideConfiguration$ === "object");
assert(typeof PIIEntitiesConfiguration$ === "object");
assert(typeof SensitiveDataConfiguration$ === "object");
assert(typeof SpeakerLabelingConfiguration$ === "object");
assert(typeof SplitterConfiguration$ === "object");
assert(typeof StandardOutputConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TranscriptConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBlueprintRequest$ === "object");
assert(typeof UpdateBlueprintResponse$ === "object");
assert(typeof UpdateDataAutomationProjectRequest$ === "object");
assert(typeof UpdateDataAutomationProjectResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VideoBoundingBox$ === "object");
assert(typeof VideoExtractionCategory$ === "object");
assert(typeof VideoOverrideConfiguration$ === "object");
assert(typeof VideoStandardExtraction$ === "object");
assert(typeof VideoStandardGenerativeField$ === "object");
assert(typeof VideoStandardOutputConfiguration$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BedrockDataAutomationServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BedrockDataAutomationServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockDataAutomationServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockDataAutomationServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockDataAutomationServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BedrockDataAutomationServiceException);
assert(typeof ValidationException$ === "object");
assert(BedrockDataAutomationServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBlueprints === "function");
assert(typeof paginateListDataAutomationProjects === "function");
console.log(`BedrockDataAutomation index test passed.`);
