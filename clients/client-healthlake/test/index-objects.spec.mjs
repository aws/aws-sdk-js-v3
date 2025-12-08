import {
  AccessDeniedException,
  AuthorizationStrategy,
  CmkType,
  ConflictException,
  CreateFHIRDatastoreCommand,
  DatastoreStatus,
  DeleteFHIRDatastoreCommand,
  DescribeFHIRDatastoreCommand,
  DescribeFHIRExportJobCommand,
  DescribeFHIRImportJobCommand,
  ErrorCategory,
  FHIRVersion,
  HealthLake,
  HealthLakeClient,
  HealthLakeServiceException,
  InternalServerException,
  JobStatus,
  ListFHIRDatastoresCommand,
  ListFHIRExportJobsCommand,
  ListFHIRImportJobsCommand,
  ListTagsForResourceCommand,
  PreloadDataType,
  ResourceNotFoundException,
  StartFHIRExportJobCommand,
  StartFHIRImportJobCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  ValidationException,
  ValidationLevel,
  paginateListFHIRDatastores,
  paginateListFHIRExportJobs,
  paginateListFHIRImportJobs,
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
assert(typeof DeleteFHIRDatastoreCommand === "function");
assert(typeof DescribeFHIRDatastoreCommand === "function");
assert(typeof DescribeFHIRExportJobCommand === "function");
assert(typeof DescribeFHIRImportJobCommand === "function");
assert(typeof ListFHIRDatastoresCommand === "function");
assert(typeof ListFHIRExportJobsCommand === "function");
assert(typeof ListFHIRImportJobsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartFHIRExportJobCommand === "function");
assert(typeof StartFHIRImportJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
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
assert(ConflictException.prototype instanceof HealthLakeServiceException);
assert(InternalServerException.prototype instanceof HealthLakeServiceException);
assert(ResourceNotFoundException.prototype instanceof HealthLakeServiceException);
assert(ThrottlingException.prototype instanceof HealthLakeServiceException);
assert(ValidationException.prototype instanceof HealthLakeServiceException);
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
