import {
  CopyImageSetCommand,
  CreateDatastoreCommand,
  DatastoreStatus,
  DeleteDatastoreCommand,
  DeleteImageSetCommand,
  GetDICOMImportJobCommand,
  GetDatastoreCommand,
  GetImageFrameCommand,
  GetImageSetCommand,
  GetImageSetMetadataCommand,
  ImageSetState,
  ImageSetWorkflowStatus,
  JobStatus,
  ListDICOMImportJobsCommand,
  ListDatastoresCommand,
  ListImageSetVersionsCommand,
  ListTagsForResourceCommand,
  LosslessStorageFormat,
  MedicalImaging,
  MedicalImagingClient,
  MedicalImagingServiceException,
  Operator,
  SearchImageSetsCommand,
  SortField,
  SortOrder,
  StartDICOMImportJobCommand,
  StorageTier,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateImageSetMetadataCommand,
  paginateListDICOMImportJobs,
  paginateListDatastores,
  paginateListImageSetVersions,
  paginateSearchImageSets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MedicalImagingClient === "function")
assert(typeof MedicalImaging === "function")
// commands
assert(typeof CopyImageSetCommand === "function")
assert(typeof CreateDatastoreCommand === "function")
assert(typeof DeleteDatastoreCommand === "function")
assert(typeof DeleteImageSetCommand === "function")
assert(typeof GetDatastoreCommand === "function")
assert(typeof GetDICOMImportJobCommand === "function")
assert(typeof GetImageFrameCommand === "function")
assert(typeof GetImageSetCommand === "function")
assert(typeof GetImageSetMetadataCommand === "function")
assert(typeof ListDatastoresCommand === "function")
assert(typeof ListDICOMImportJobsCommand === "function")
assert(typeof ListImageSetVersionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof SearchImageSetsCommand === "function")
assert(typeof StartDICOMImportJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateImageSetMetadataCommand === "function")
// enums
assert(typeof DatastoreStatus === "object");
assert(typeof ImageSetState === "object");
assert(typeof ImageSetWorkflowStatus === "object");
assert(typeof JobStatus === "object");
assert(typeof LosslessStorageFormat === "object");
assert(typeof Operator === "object");
assert(typeof SortField === "object");
assert(typeof SortOrder === "object");
assert(typeof StorageTier === "object");
// errors
assert(MedicalImagingServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListDICOMImportJobs === "function")
assert(typeof paginateListDatastores === "function")
assert(typeof paginateListImageSetVersions === "function")
assert(typeof paginateSearchImageSets === "function")
console.log(`MedicalImaging index test passed.`);
