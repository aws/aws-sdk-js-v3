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
  BlueprintOptimizationJobStatus,
  BlueprintOptimizationObject$,
  BlueprintOptimizationOutputConfiguration$,
  BlueprintOptimizationSample$,
  BlueprintStage,
  BlueprintStageFilter,
  BlueprintSummary$,
  ChannelLabelingConfiguration$,
  ConflictException,
  ConflictException$,
  CopyBlueprintStage$,
  CopyBlueprintStageCommand,
  CopyBlueprintStageRequest$,
  CopyBlueprintStageResponse$,
  CreateBlueprint$,
  CreateBlueprintCommand,
  CreateBlueprintRequest$,
  CreateBlueprintResponse$,
  CreateBlueprintVersion$,
  CreateBlueprintVersionCommand,
  CreateBlueprintVersionRequest$,
  CreateBlueprintVersionResponse$,
  CreateDataAutomationLibrary$,
  CreateDataAutomationLibraryCommand,
  CreateDataAutomationLibraryRequest$,
  CreateDataAutomationLibraryResponse$,
  CreateDataAutomationProject$,
  CreateDataAutomationProjectCommand,
  CreateDataAutomationProjectRequest$,
  CreateDataAutomationProjectResponse$,
  CustomOutputConfiguration$,
  DataAutomationLibrary$,
  DataAutomationLibraryConfiguration$,
  DataAutomationLibraryEntitySummary$,
  DataAutomationLibraryFilter$,
  DataAutomationLibraryIngestionJob$,
  DataAutomationLibraryIngestionJobSummary$,
  DataAutomationLibraryItem$,
  DataAutomationLibraryStatus,
  DataAutomationLibrarySummary$,
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
  DeleteDataAutomationLibrary$,
  DeleteDataAutomationLibraryCommand,
  DeleteDataAutomationLibraryRequest$,
  DeleteDataAutomationLibraryResponse$,
  DeleteDataAutomationProject$,
  DeleteDataAutomationProjectCommand,
  DeleteDataAutomationProjectRequest$,
  DeleteDataAutomationProjectResponse$,
  DeleteEntitiesInfo$,
  DesiredModality,
  DocumentBoundingBox$,
  DocumentCustomOutputConfiguration$,
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
  EntityDetails$,
  EntityType,
  EntityTypeInfo$,
  EventBridgeConfiguration$,
  GetBlueprint$,
  GetBlueprintCommand,
  GetBlueprintOptimizationStatus$,
  GetBlueprintOptimizationStatusCommand,
  GetBlueprintOptimizationStatusRequest$,
  GetBlueprintOptimizationStatusResponse$,
  GetBlueprintRequest$,
  GetBlueprintResponse$,
  GetDataAutomationLibrary$,
  GetDataAutomationLibraryCommand,
  GetDataAutomationLibraryEntity$,
  GetDataAutomationLibraryEntityCommand,
  GetDataAutomationLibraryEntityRequest$,
  GetDataAutomationLibraryEntityResponse$,
  GetDataAutomationLibraryIngestionJob$,
  GetDataAutomationLibraryIngestionJobCommand,
  GetDataAutomationLibraryIngestionJobRequest$,
  GetDataAutomationLibraryIngestionJobResponse$,
  GetDataAutomationLibraryRequest$,
  GetDataAutomationLibraryResponse$,
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
  InlinePayload$,
  InputConfiguration$,
  InternalServerException,
  InternalServerException$,
  InvokeBlueprintOptimizationAsync$,
  InvokeBlueprintOptimizationAsyncCommand,
  InvokeBlueprintOptimizationAsyncRequest$,
  InvokeBlueprintOptimizationAsyncResponse$,
  InvokeDataAutomationLibraryIngestionJob$,
  InvokeDataAutomationLibraryIngestionJobCommand,
  InvokeDataAutomationLibraryIngestionJobRequest$,
  InvokeDataAutomationLibraryIngestionJobResponse$,
  Language,
  LibraryIngestionJobOperationType,
  LibraryIngestionJobStatus,
  ListBlueprints$,
  ListBlueprintsCommand,
  ListBlueprintsRequest$,
  ListBlueprintsResponse$,
  ListDataAutomationLibraries$,
  ListDataAutomationLibrariesCommand,
  ListDataAutomationLibrariesRequest$,
  ListDataAutomationLibrariesResponse$,
  ListDataAutomationLibraryEntities$,
  ListDataAutomationLibraryEntitiesCommand,
  ListDataAutomationLibraryEntitiesRequest$,
  ListDataAutomationLibraryEntitiesResponse$,
  ListDataAutomationLibraryIngestionJobs$,
  ListDataAutomationLibraryIngestionJobsCommand,
  ListDataAutomationLibraryIngestionJobsRequest$,
  ListDataAutomationLibraryIngestionJobsResponse$,
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
  NotificationConfiguration$,
  OutputConfiguration$,
  OverrideConfiguration$,
  paginateListBlueprints,
  paginateListDataAutomationLibraries,
  paginateListDataAutomationLibraryEntities,
  paginateListDataAutomationLibraryIngestionJobs,
  paginateListDataAutomationProjects,
  Phrase$,
  PIIEntitiesConfiguration$,
  PIIEntityType,
  PIIRedactionMaskMode,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceOwner,
  S3Object$,
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
  UpdateDataAutomationLibrary$,
  UpdateDataAutomationLibraryCommand,
  UpdateDataAutomationLibraryRequest$,
  UpdateDataAutomationLibraryResponse$,
  UpdateDataAutomationProject$,
  UpdateDataAutomationProjectCommand,
  UpdateDataAutomationProjectRequest$,
  UpdateDataAutomationProjectResponse$,
  UpsertEntityInfo$,
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
  VocabularyEntity$,
  VocabularyEntityInfo$,
  VocabularyEntitySummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockDataAutomationClient === "function");
assert(typeof BedrockDataAutomation === "function");
// commands
assert(typeof CopyBlueprintStageCommand === "function");
assert(typeof CopyBlueprintStage$ === "object");
assert(typeof CreateBlueprintCommand === "function");
assert(typeof CreateBlueprint$ === "object");
assert(typeof CreateBlueprintVersionCommand === "function");
assert(typeof CreateBlueprintVersion$ === "object");
assert(typeof CreateDataAutomationLibraryCommand === "function");
assert(typeof CreateDataAutomationLibrary$ === "object");
assert(typeof CreateDataAutomationProjectCommand === "function");
assert(typeof CreateDataAutomationProject$ === "object");
assert(typeof DeleteBlueprintCommand === "function");
assert(typeof DeleteBlueprint$ === "object");
assert(typeof DeleteDataAutomationLibraryCommand === "function");
assert(typeof DeleteDataAutomationLibrary$ === "object");
assert(typeof DeleteDataAutomationProjectCommand === "function");
assert(typeof DeleteDataAutomationProject$ === "object");
assert(typeof GetBlueprintCommand === "function");
assert(typeof GetBlueprint$ === "object");
assert(typeof GetBlueprintOptimizationStatusCommand === "function");
assert(typeof GetBlueprintOptimizationStatus$ === "object");
assert(typeof GetDataAutomationLibraryCommand === "function");
assert(typeof GetDataAutomationLibrary$ === "object");
assert(typeof GetDataAutomationLibraryEntityCommand === "function");
assert(typeof GetDataAutomationLibraryEntity$ === "object");
assert(typeof GetDataAutomationLibraryIngestionJobCommand === "function");
assert(typeof GetDataAutomationLibraryIngestionJob$ === "object");
assert(typeof GetDataAutomationProjectCommand === "function");
assert(typeof GetDataAutomationProject$ === "object");
assert(typeof InvokeBlueprintOptimizationAsyncCommand === "function");
assert(typeof InvokeBlueprintOptimizationAsync$ === "object");
assert(typeof InvokeDataAutomationLibraryIngestionJobCommand === "function");
assert(typeof InvokeDataAutomationLibraryIngestionJob$ === "object");
assert(typeof ListBlueprintsCommand === "function");
assert(typeof ListBlueprints$ === "object");
assert(typeof ListDataAutomationLibrariesCommand === "function");
assert(typeof ListDataAutomationLibraries$ === "object");
assert(typeof ListDataAutomationLibraryEntitiesCommand === "function");
assert(typeof ListDataAutomationLibraryEntities$ === "object");
assert(typeof ListDataAutomationLibraryIngestionJobsCommand === "function");
assert(typeof ListDataAutomationLibraryIngestionJobs$ === "object");
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
assert(typeof UpdateDataAutomationLibraryCommand === "function");
assert(typeof UpdateDataAutomationLibrary$ === "object");
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
assert(typeof BlueprintOptimizationObject$ === "object");
assert(typeof BlueprintOptimizationOutputConfiguration$ === "object");
assert(typeof BlueprintOptimizationSample$ === "object");
assert(typeof BlueprintSummary$ === "object");
assert(typeof ChannelLabelingConfiguration$ === "object");
assert(typeof CopyBlueprintStageRequest$ === "object");
assert(typeof CopyBlueprintStageResponse$ === "object");
assert(typeof CreateBlueprintRequest$ === "object");
assert(typeof CreateBlueprintResponse$ === "object");
assert(typeof CreateBlueprintVersionRequest$ === "object");
assert(typeof CreateBlueprintVersionResponse$ === "object");
assert(typeof CreateDataAutomationLibraryRequest$ === "object");
assert(typeof CreateDataAutomationLibraryResponse$ === "object");
assert(typeof CreateDataAutomationProjectRequest$ === "object");
assert(typeof CreateDataAutomationProjectResponse$ === "object");
assert(typeof CustomOutputConfiguration$ === "object");
assert(typeof DataAutomationLibrary$ === "object");
assert(typeof DataAutomationLibraryConfiguration$ === "object");
assert(typeof DataAutomationLibraryEntitySummary$ === "object");
assert(typeof DataAutomationLibraryFilter$ === "object");
assert(typeof DataAutomationLibraryIngestionJob$ === "object");
assert(typeof DataAutomationLibraryIngestionJobSummary$ === "object");
assert(typeof DataAutomationLibraryItem$ === "object");
assert(typeof DataAutomationLibrarySummary$ === "object");
assert(typeof DataAutomationProject$ === "object");
assert(typeof DataAutomationProjectFilter$ === "object");
assert(typeof DataAutomationProjectSummary$ === "object");
assert(typeof DeleteBlueprintRequest$ === "object");
assert(typeof DeleteBlueprintResponse$ === "object");
assert(typeof DeleteDataAutomationLibraryRequest$ === "object");
assert(typeof DeleteDataAutomationLibraryResponse$ === "object");
assert(typeof DeleteDataAutomationProjectRequest$ === "object");
assert(typeof DeleteDataAutomationProjectResponse$ === "object");
assert(typeof DeleteEntitiesInfo$ === "object");
assert(typeof DocumentBoundingBox$ === "object");
assert(typeof DocumentCustomOutputConfiguration$ === "object");
assert(typeof DocumentExtractionGranularity$ === "object");
assert(typeof DocumentOutputAdditionalFileFormat$ === "object");
assert(typeof DocumentOutputFormat$ === "object");
assert(typeof DocumentOutputTextFormat$ === "object");
assert(typeof DocumentOverrideConfiguration$ === "object");
assert(typeof DocumentStandardExtraction$ === "object");
assert(typeof DocumentStandardGenerativeField$ === "object");
assert(typeof DocumentStandardOutputConfiguration$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EntityDetails$ === "object");
assert(typeof EntityTypeInfo$ === "object");
assert(typeof EventBridgeConfiguration$ === "object");
assert(typeof GetBlueprintOptimizationStatusRequest$ === "object");
assert(typeof GetBlueprintOptimizationStatusResponse$ === "object");
assert(typeof GetBlueprintRequest$ === "object");
assert(typeof GetBlueprintResponse$ === "object");
assert(typeof GetDataAutomationLibraryEntityRequest$ === "object");
assert(typeof GetDataAutomationLibraryEntityResponse$ === "object");
assert(typeof GetDataAutomationLibraryIngestionJobRequest$ === "object");
assert(typeof GetDataAutomationLibraryIngestionJobResponse$ === "object");
assert(typeof GetDataAutomationLibraryRequest$ === "object");
assert(typeof GetDataAutomationLibraryResponse$ === "object");
assert(typeof GetDataAutomationProjectRequest$ === "object");
assert(typeof GetDataAutomationProjectResponse$ === "object");
assert(typeof ImageBoundingBox$ === "object");
assert(typeof ImageExtractionCategory$ === "object");
assert(typeof ImageOverrideConfiguration$ === "object");
assert(typeof ImageStandardExtraction$ === "object");
assert(typeof ImageStandardGenerativeField$ === "object");
assert(typeof ImageStandardOutputConfiguration$ === "object");
assert(typeof InlinePayload$ === "object");
assert(typeof InputConfiguration$ === "object");
assert(typeof InvokeBlueprintOptimizationAsyncRequest$ === "object");
assert(typeof InvokeBlueprintOptimizationAsyncResponse$ === "object");
assert(typeof InvokeDataAutomationLibraryIngestionJobRequest$ === "object");
assert(typeof InvokeDataAutomationLibraryIngestionJobResponse$ === "object");
assert(typeof ListBlueprintsRequest$ === "object");
assert(typeof ListBlueprintsResponse$ === "object");
assert(typeof ListDataAutomationLibrariesRequest$ === "object");
assert(typeof ListDataAutomationLibrariesResponse$ === "object");
assert(typeof ListDataAutomationLibraryEntitiesRequest$ === "object");
assert(typeof ListDataAutomationLibraryEntitiesResponse$ === "object");
assert(typeof ListDataAutomationLibraryIngestionJobsRequest$ === "object");
assert(typeof ListDataAutomationLibraryIngestionJobsResponse$ === "object");
assert(typeof ListDataAutomationProjectsRequest$ === "object");
assert(typeof ListDataAutomationProjectsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ModalityProcessingConfiguration$ === "object");
assert(typeof ModalityRoutingConfiguration$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof OutputConfiguration$ === "object");
assert(typeof OverrideConfiguration$ === "object");
assert(typeof Phrase$ === "object");
assert(typeof PIIEntitiesConfiguration$ === "object");
assert(typeof S3Object$ === "object");
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
assert(typeof UpdateDataAutomationLibraryRequest$ === "object");
assert(typeof UpdateDataAutomationLibraryResponse$ === "object");
assert(typeof UpdateDataAutomationProjectRequest$ === "object");
assert(typeof UpdateDataAutomationProjectResponse$ === "object");
assert(typeof UpsertEntityInfo$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VideoBoundingBox$ === "object");
assert(typeof VideoExtractionCategory$ === "object");
assert(typeof VideoOverrideConfiguration$ === "object");
assert(typeof VideoStandardExtraction$ === "object");
assert(typeof VideoStandardGenerativeField$ === "object");
assert(typeof VideoStandardOutputConfiguration$ === "object");
assert(typeof VocabularyEntity$ === "object");
assert(typeof VocabularyEntityInfo$ === "object");
assert(typeof VocabularyEntitySummary$ === "object");
// enums
assert(typeof AudioExtractionCategoryType === "object");
assert(typeof AudioGenerativeOutputLanguage === "object");
assert(typeof AudioStandardGenerativeFieldType === "object");
assert(typeof BlueprintOptimizationJobStatus === "object");
assert(typeof BlueprintStage === "object");
assert(typeof BlueprintStageFilter === "object");
assert(typeof DataAutomationLibraryStatus === "object");
assert(typeof DataAutomationProjectStage === "object");
assert(typeof DataAutomationProjectStageFilter === "object");
assert(typeof DataAutomationProjectStatus === "object");
assert(typeof DataAutomationProjectType === "object");
assert(typeof DesiredModality === "object");
assert(typeof DocumentExtractionGranularityType === "object");
assert(typeof DocumentOutputTextFormatType === "object");
assert(typeof EntityType === "object");
assert(typeof ImageExtractionCategoryType === "object");
assert(typeof ImageStandardGenerativeFieldType === "object");
assert(typeof Language === "object");
assert(typeof LibraryIngestionJobOperationType === "object");
assert(typeof LibraryIngestionJobStatus === "object");
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
assert(typeof paginateListDataAutomationLibraries === "function");
assert(typeof paginateListDataAutomationLibraryEntities === "function");
assert(typeof paginateListDataAutomationLibraryIngestionJobs === "function");
assert(typeof paginateListDataAutomationProjects === "function");
console.log(`BedrockDataAutomation index test passed.`);
