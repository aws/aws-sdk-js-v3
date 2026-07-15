import {
  AccessDeniedException,
  AccessDeniedException$,
  AgentInputMessage$,
  AgentInputMessageType,
  AgentMessageOutOfContextException,
  AgentMessageOutOfContextException$,
  AgentOutputMessage$,
  AgentOutputMessageType,
  AnalyticsConfiguration$,
  AnalyticsStatus,
  AuthorizationStrategy,
  CmkType,
  ConflictException,
  ConflictException$,
  ConversationNotFoundException,
  ConversationNotFoundException$,
  CreateDataTransformationProfile$,
  CreateDataTransformationProfileCommand,
  CreateDataTransformationProfileRequest$,
  CreateDataTransformationProfileResponse$,
  CreateDataTransformationProfileSource$,
  CreateFHIRDatastore$,
  CreateFHIRDatastoreCommand,
  CreateFHIRDatastoreRequest$,
  CreateFHIRDatastoreResponse$,
  DatastoreFilter$,
  DatastoreProperties$,
  DatastoreStatus,
  DataTransformationProfileSummary$,
  DataTransformationProfileVersionSummary$,
  DataTransformationS3Configuration$,
  DeleteDataTransformationProfile$,
  DeleteDataTransformationProfileCommand,
  DeleteDataTransformationProfileRequest$,
  DeleteDataTransformationProfileResponse$,
  DeleteFHIRDatastore$,
  DeleteFHIRDatastoreCommand,
  DeleteFHIRDatastoreRequest$,
  DeleteFHIRDatastoreResponse$,
  DescribeDataTransformationJob$,
  DescribeDataTransformationJobCommand,
  DescribeDataTransformationJobRequest$,
  DescribeDataTransformationJobResponse$,
  DescribeFHIRDatastore$,
  DescribeFHIRDatastoreCommand,
  DescribeFHIRDatastoreRequest$,
  DescribeFHIRDatastoreResponse$,
  DescribeFHIRExportJob$,
  DescribeFHIRExportJobCommand,
  DescribeFHIRExportJobRequest$,
  DescribeFHIRExportJobResponse$,
  DescribeFHIRImportJob$,
  DescribeFHIRImportJobCommand,
  DescribeFHIRImportJobRequest$,
  DescribeFHIRImportJobResponse$,
  ErrorCategory,
  ErrorCause$,
  ExistingVersionedProfileSource$,
  ExportJobProperties$,
  FailedDependencyException,
  FailedDependencyException$,
  FHIRVersion,
  GetDataTransformationProfile$,
  GetDataTransformationProfileCommand,
  GetDataTransformationProfileRequest$,
  GetDataTransformationProfileResponse$,
  HealthLake,
  HealthLakeClient,
  HealthLakeServiceException,
  IdentityProviderConfiguration$,
  ImportJobProperties$,
  InputDataConfig$,
  InternalServerException,
  InternalServerException$,
  JobProgressReport$,
  JobStatus,
  KmsEncryptionConfig$,
  ListDataTransformationJobs$,
  ListDataTransformationJobsCommand,
  ListDataTransformationJobsRequest$,
  ListDataTransformationJobsResponse$,
  ListDataTransformationProfiles$,
  ListDataTransformationProfilesCommand,
  ListDataTransformationProfilesRequest$,
  ListDataTransformationProfilesResponse$,
  ListDataTransformationProfileVersions$,
  ListDataTransformationProfileVersionsCommand,
  ListDataTransformationProfileVersionsRequest$,
  ListDataTransformationProfileVersionsResponse$,
  ListFHIRDatastores$,
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresRequest$,
  ListFHIRDatastoresResponse$,
  ListFHIRExportJobs$,
  ListFHIRExportJobsCommand,
  ListFHIRExportJobsRequest$,
  ListFHIRExportJobsResponse$,
  ListFHIRImportJobs$,
  ListFHIRImportJobsCommand,
  ListFHIRImportJobsRequest$,
  ListFHIRImportJobsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NlpConfiguration$,
  NlpStatus,
  NotImplementedOperationException,
  NotImplementedOperationException$,
  OutputDataConfig$,
  paginateListDataTransformationJobs,
  paginateListDataTransformationProfiles,
  paginateListDataTransformationProfileVersions,
  paginateListFHIRDatastores,
  paginateListFHIRExportJobs,
  paginateListFHIRImportJobs,
  PreloadDataConfig$,
  PreloadDataType,
  ProfileConfiguration$,
  ProfileMappingSource$,
  PublishDataTransformationProfile$,
  PublishDataTransformationProfileCommand,
  PublishDataTransformationProfileRequest$,
  PublishDataTransformationProfileResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Configuration$,
  SampleDataSource$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceFormat,
  SseConfiguration$,
  StartDataTransformationJob$,
  StartDataTransformationJobCommand,
  StartDataTransformationJobRequest$,
  StartDataTransformationJobResponse$,
  StarterProfileSource$,
  StartFHIRExportJob$,
  StartFHIRExportJobCommand,
  StartFHIRExportJobRequest$,
  StartFHIRExportJobResponse$,
  StartFHIRImportJob$,
  StartFHIRImportJobCommand,
  StartFHIRImportJobRequest$,
  StartFHIRImportJobResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetFormat,
  ThrottlingException,
  ThrottlingException$,
  TransformationInputDataConfig$,
  TransformationJobProgressReport$,
  TransformationJobProperties$,
  TransformationJobStatus,
  TransformationJobSummary$,
  TransformationOutputDataConfig$,
  UnauthorizedException,
  UnauthorizedException$,
  UnsupportedMIMETypeException,
  UnsupportedMIMETypeException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDataTransformationProfile$,
  UpdateDataTransformationProfileCommand,
  UpdateDataTransformationProfileRequest$,
  UpdateDataTransformationProfileResponse$,
  UpdateFHIRDatastore$,
  UpdateFHIRDatastoreCommand,
  UpdateFHIRDatastoreRequest$,
  UpdateFHIRDatastoreResponse$,
  UpdateProfileWithAgent$,
  UpdateProfileWithAgentCommand,
  UpdateProfileWithAgentRequest$,
  UpdateProfileWithAgentResponse$,
  ValidationException,
  ValidationException$,
  ValidationLevel,
  waitForDataTransformationJobCompleted,
  waitForFHIRDatastoreActive,
  waitForFHIRDatastoreDeleted,
  waitForFHIRExportJobCompleted,
  waitForFHIRImportJobCompleted,
  waitUntilDataTransformationJobCompleted,
  waitUntilFHIRDatastoreActive,
  waitUntilFHIRDatastoreDeleted,
  waitUntilFHIRExportJobCompleted,
  waitUntilFHIRImportJobCompleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof HealthLakeClient === "function");
assert(typeof HealthLake === "function");
// commands
assert(typeof CreateDataTransformationProfileCommand === "function");
assert(typeof CreateDataTransformationProfile$ === "object");
assert(typeof CreateFHIRDatastoreCommand === "function");
assert(typeof CreateFHIRDatastore$ === "object");
assert(typeof DeleteDataTransformationProfileCommand === "function");
assert(typeof DeleteDataTransformationProfile$ === "object");
assert(typeof DeleteFHIRDatastoreCommand === "function");
assert(typeof DeleteFHIRDatastore$ === "object");
assert(typeof DescribeDataTransformationJobCommand === "function");
assert(typeof DescribeDataTransformationJob$ === "object");
assert(typeof DescribeFHIRDatastoreCommand === "function");
assert(typeof DescribeFHIRDatastore$ === "object");
assert(typeof DescribeFHIRExportJobCommand === "function");
assert(typeof DescribeFHIRExportJob$ === "object");
assert(typeof DescribeFHIRImportJobCommand === "function");
assert(typeof DescribeFHIRImportJob$ === "object");
assert(typeof GetDataTransformationProfileCommand === "function");
assert(typeof GetDataTransformationProfile$ === "object");
assert(typeof ListDataTransformationJobsCommand === "function");
assert(typeof ListDataTransformationJobs$ === "object");
assert(typeof ListDataTransformationProfilesCommand === "function");
assert(typeof ListDataTransformationProfiles$ === "object");
assert(typeof ListDataTransformationProfileVersionsCommand === "function");
assert(typeof ListDataTransformationProfileVersions$ === "object");
assert(typeof ListFHIRDatastoresCommand === "function");
assert(typeof ListFHIRDatastores$ === "object");
assert(typeof ListFHIRExportJobsCommand === "function");
assert(typeof ListFHIRExportJobs$ === "object");
assert(typeof ListFHIRImportJobsCommand === "function");
assert(typeof ListFHIRImportJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PublishDataTransformationProfileCommand === "function");
assert(typeof PublishDataTransformationProfile$ === "object");
assert(typeof StartDataTransformationJobCommand === "function");
assert(typeof StartDataTransformationJob$ === "object");
assert(typeof StartFHIRExportJobCommand === "function");
assert(typeof StartFHIRExportJob$ === "object");
assert(typeof StartFHIRImportJobCommand === "function");
assert(typeof StartFHIRImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDataTransformationProfileCommand === "function");
assert(typeof UpdateDataTransformationProfile$ === "object");
assert(typeof UpdateFHIRDatastoreCommand === "function");
assert(typeof UpdateFHIRDatastore$ === "object");
assert(typeof UpdateProfileWithAgentCommand === "function");
assert(typeof UpdateProfileWithAgent$ === "object");
// structural schemas
assert(typeof AgentInputMessage$ === "object");
assert(typeof AgentOutputMessage$ === "object");
assert(typeof AnalyticsConfiguration$ === "object");
assert(typeof CreateDataTransformationProfileRequest$ === "object");
assert(typeof CreateDataTransformationProfileResponse$ === "object");
assert(typeof CreateDataTransformationProfileSource$ === "object");
assert(typeof CreateFHIRDatastoreRequest$ === "object");
assert(typeof CreateFHIRDatastoreResponse$ === "object");
assert(typeof DatastoreFilter$ === "object");
assert(typeof DatastoreProperties$ === "object");
assert(typeof DataTransformationProfileSummary$ === "object");
assert(typeof DataTransformationProfileVersionSummary$ === "object");
assert(typeof DataTransformationS3Configuration$ === "object");
assert(typeof DeleteDataTransformationProfileRequest$ === "object");
assert(typeof DeleteDataTransformationProfileResponse$ === "object");
assert(typeof DeleteFHIRDatastoreRequest$ === "object");
assert(typeof DeleteFHIRDatastoreResponse$ === "object");
assert(typeof DescribeDataTransformationJobRequest$ === "object");
assert(typeof DescribeDataTransformationJobResponse$ === "object");
assert(typeof DescribeFHIRDatastoreRequest$ === "object");
assert(typeof DescribeFHIRDatastoreResponse$ === "object");
assert(typeof DescribeFHIRExportJobRequest$ === "object");
assert(typeof DescribeFHIRExportJobResponse$ === "object");
assert(typeof DescribeFHIRImportJobRequest$ === "object");
assert(typeof DescribeFHIRImportJobResponse$ === "object");
assert(typeof ErrorCause$ === "object");
assert(typeof ExistingVersionedProfileSource$ === "object");
assert(typeof ExportJobProperties$ === "object");
assert(typeof GetDataTransformationProfileRequest$ === "object");
assert(typeof GetDataTransformationProfileResponse$ === "object");
assert(typeof IdentityProviderConfiguration$ === "object");
assert(typeof ImportJobProperties$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof JobProgressReport$ === "object");
assert(typeof KmsEncryptionConfig$ === "object");
assert(typeof ListDataTransformationJobsRequest$ === "object");
assert(typeof ListDataTransformationJobsResponse$ === "object");
assert(typeof ListDataTransformationProfilesRequest$ === "object");
assert(typeof ListDataTransformationProfilesResponse$ === "object");
assert(typeof ListDataTransformationProfileVersionsRequest$ === "object");
assert(typeof ListDataTransformationProfileVersionsResponse$ === "object");
assert(typeof ListFHIRDatastoresRequest$ === "object");
assert(typeof ListFHIRDatastoresResponse$ === "object");
assert(typeof ListFHIRExportJobsRequest$ === "object");
assert(typeof ListFHIRExportJobsResponse$ === "object");
assert(typeof ListFHIRImportJobsRequest$ === "object");
assert(typeof ListFHIRImportJobsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NlpConfiguration$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof PreloadDataConfig$ === "object");
assert(typeof ProfileConfiguration$ === "object");
assert(typeof ProfileMappingSource$ === "object");
assert(typeof PublishDataTransformationProfileRequest$ === "object");
assert(typeof PublishDataTransformationProfileResponse$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof SampleDataSource$ === "object");
assert(typeof SseConfiguration$ === "object");
assert(typeof StartDataTransformationJobRequest$ === "object");
assert(typeof StartDataTransformationJobResponse$ === "object");
assert(typeof StarterProfileSource$ === "object");
assert(typeof StartFHIRExportJobRequest$ === "object");
assert(typeof StartFHIRExportJobResponse$ === "object");
assert(typeof StartFHIRImportJobRequest$ === "object");
assert(typeof StartFHIRImportJobResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TransformationInputDataConfig$ === "object");
assert(typeof TransformationJobProgressReport$ === "object");
assert(typeof TransformationJobProperties$ === "object");
assert(typeof TransformationJobSummary$ === "object");
assert(typeof TransformationOutputDataConfig$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDataTransformationProfileRequest$ === "object");
assert(typeof UpdateDataTransformationProfileResponse$ === "object");
assert(typeof UpdateFHIRDatastoreRequest$ === "object");
assert(typeof UpdateFHIRDatastoreResponse$ === "object");
assert(typeof UpdateProfileWithAgentRequest$ === "object");
assert(typeof UpdateProfileWithAgentResponse$ === "object");
// enums
assert(typeof AgentInputMessageType === "object");
assert(typeof AgentOutputMessageType === "object");
assert(typeof AnalyticsStatus === "object");
assert(typeof AuthorizationStrategy === "object");
assert(typeof CmkType === "object");
assert(typeof DatastoreStatus === "object");
assert(typeof ErrorCategory === "object");
assert(typeof FHIRVersion === "object");
assert(typeof JobStatus === "object");
assert(typeof NlpStatus === "object");
assert(typeof PreloadDataType === "object");
assert(typeof SourceFormat === "object");
assert(typeof TargetFormat === "object");
assert(typeof TransformationJobStatus === "object");
assert(typeof ValidationLevel === "object");
// errors
assert(AccessDeniedException.prototype instanceof HealthLakeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AgentMessageOutOfContextException.prototype instanceof HealthLakeServiceException);
assert(typeof AgentMessageOutOfContextException$ === "object");
assert(ConflictException.prototype instanceof HealthLakeServiceException);
assert(typeof ConflictException$ === "object");
assert(ConversationNotFoundException.prototype instanceof HealthLakeServiceException);
assert(typeof ConversationNotFoundException$ === "object");
assert(FailedDependencyException.prototype instanceof HealthLakeServiceException);
assert(typeof FailedDependencyException$ === "object");
assert(InternalServerException.prototype instanceof HealthLakeServiceException);
assert(typeof InternalServerException$ === "object");
assert(NotImplementedOperationException.prototype instanceof HealthLakeServiceException);
assert(typeof NotImplementedOperationException$ === "object");
assert(ResourceNotFoundException.prototype instanceof HealthLakeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof HealthLakeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof HealthLakeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof HealthLakeServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UnsupportedMIMETypeException.prototype instanceof HealthLakeServiceException);
assert(typeof UnsupportedMIMETypeException$ === "object");
assert(ValidationException.prototype instanceof HealthLakeServiceException);
assert(typeof ValidationException$ === "object");
assert(HealthLakeServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDataTransformationJobCompleted === "function");
assert(typeof waitForFHIRDatastoreActive === "function");
assert(typeof waitForFHIRDatastoreDeleted === "function");
assert(typeof waitForFHIRExportJobCompleted === "function");
assert(typeof waitForFHIRImportJobCompleted === "function");
assert(typeof waitUntilDataTransformationJobCompleted === "function");
assert(typeof waitUntilFHIRDatastoreActive === "function");
assert(typeof waitUntilFHIRDatastoreDeleted === "function");
assert(typeof waitUntilFHIRExportJobCompleted === "function");
assert(typeof waitUntilFHIRImportJobCompleted === "function");
// paginators
assert(typeof paginateListDataTransformationJobs === "function");
assert(typeof paginateListDataTransformationProfileVersions === "function");
assert(typeof paginateListDataTransformationProfiles === "function");
assert(typeof paginateListFHIRDatastores === "function");
assert(typeof paginateListFHIRExportJobs === "function");
assert(typeof paginateListFHIRImportJobs === "function");
console.log(`HealthLake index test passed.`);
