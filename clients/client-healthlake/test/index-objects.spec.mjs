import {
  AccessDeniedException,
  AccessDeniedException$,
  AuthorizationStrategy,
  CmkType,
  ConflictException,
  ConflictException$,
  CreateFHIRDatastore$,
  CreateFHIRDatastoreCommand,
  CreateFHIRDatastoreRequest$,
  CreateFHIRDatastoreResponse$,
  DatastoreFilter$,
  DatastoreProperties$,
  DatastoreStatus,
  DeleteFHIRDatastore$,
  DeleteFHIRDatastoreCommand,
  DeleteFHIRDatastoreRequest$,
  DeleteFHIRDatastoreResponse$,
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
  ExportJobProperties$,
  FHIRVersion,
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
  OutputDataConfig$,
  paginateListFHIRDatastores,
  paginateListFHIRExportJobs,
  paginateListFHIRImportJobs,
  PreloadDataConfig$,
  PreloadDataType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Configuration$,
  SseConfiguration$,
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
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  ValidationLevel,
  waitForFHIRDatastoreActive,
  waitForFHIRDatastoreDeleted,
  waitForFHIRExportJobCompleted,
  waitForFHIRImportJobCompleted,
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
assert(typeof CreateFHIRDatastoreCommand === "function");
assert(typeof CreateFHIRDatastore$ === "object");
assert(typeof DeleteFHIRDatastoreCommand === "function");
assert(typeof DeleteFHIRDatastore$ === "object");
assert(typeof DescribeFHIRDatastoreCommand === "function");
assert(typeof DescribeFHIRDatastore$ === "object");
assert(typeof DescribeFHIRExportJobCommand === "function");
assert(typeof DescribeFHIRExportJob$ === "object");
assert(typeof DescribeFHIRImportJobCommand === "function");
assert(typeof DescribeFHIRImportJob$ === "object");
assert(typeof ListFHIRDatastoresCommand === "function");
assert(typeof ListFHIRDatastores$ === "object");
assert(typeof ListFHIRExportJobsCommand === "function");
assert(typeof ListFHIRExportJobs$ === "object");
assert(typeof ListFHIRImportJobsCommand === "function");
assert(typeof ListFHIRImportJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartFHIRExportJobCommand === "function");
assert(typeof StartFHIRExportJob$ === "object");
assert(typeof StartFHIRImportJobCommand === "function");
assert(typeof StartFHIRImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof CreateFHIRDatastoreRequest$ === "object");
assert(typeof CreateFHIRDatastoreResponse$ === "object");
assert(typeof DatastoreFilter$ === "object");
assert(typeof DatastoreProperties$ === "object");
assert(typeof DeleteFHIRDatastoreRequest$ === "object");
assert(typeof DeleteFHIRDatastoreResponse$ === "object");
assert(typeof DescribeFHIRDatastoreRequest$ === "object");
assert(typeof DescribeFHIRDatastoreResponse$ === "object");
assert(typeof DescribeFHIRExportJobRequest$ === "object");
assert(typeof DescribeFHIRExportJobResponse$ === "object");
assert(typeof DescribeFHIRImportJobRequest$ === "object");
assert(typeof DescribeFHIRImportJobResponse$ === "object");
assert(typeof ErrorCause$ === "object");
assert(typeof ExportJobProperties$ === "object");
assert(typeof IdentityProviderConfiguration$ === "object");
assert(typeof ImportJobProperties$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof JobProgressReport$ === "object");
assert(typeof KmsEncryptionConfig$ === "object");
assert(typeof ListFHIRDatastoresRequest$ === "object");
assert(typeof ListFHIRDatastoresResponse$ === "object");
assert(typeof ListFHIRExportJobsRequest$ === "object");
assert(typeof ListFHIRExportJobsResponse$ === "object");
assert(typeof ListFHIRImportJobsRequest$ === "object");
assert(typeof ListFHIRImportJobsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof PreloadDataConfig$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof SseConfiguration$ === "object");
assert(typeof StartFHIRExportJobRequest$ === "object");
assert(typeof StartFHIRExportJobResponse$ === "object");
assert(typeof StartFHIRImportJobRequest$ === "object");
assert(typeof StartFHIRImportJobResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof AuthorizationStrategy === "object");
assert(typeof CmkType === "object");
assert(typeof DatastoreStatus === "object");
assert(typeof ErrorCategory === "object");
assert(typeof FHIRVersion === "object");
assert(typeof JobStatus === "object");
assert(typeof PreloadDataType === "object");
assert(typeof ValidationLevel === "object");
// errors
assert(AccessDeniedException.prototype instanceof HealthLakeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof HealthLakeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof HealthLakeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof HealthLakeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof HealthLakeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof HealthLakeServiceException);
assert(typeof ValidationException$ === "object");
assert(HealthLakeServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFHIRDatastoreActive === "function");
assert(typeof waitForFHIRDatastoreDeleted === "function");
assert(typeof waitForFHIRExportJobCompleted === "function");
assert(typeof waitForFHIRImportJobCompleted === "function");
assert(typeof waitUntilFHIRDatastoreActive === "function");
assert(typeof waitUntilFHIRDatastoreDeleted === "function");
assert(typeof waitUntilFHIRExportJobCompleted === "function");
assert(typeof waitUntilFHIRImportJobCompleted === "function");
// paginators
assert(typeof paginateListFHIRDatastores === "function");
assert(typeof paginateListFHIRExportJobs === "function");
assert(typeof paginateListFHIRImportJobs === "function");
console.log(`HealthLake index test passed.`);
