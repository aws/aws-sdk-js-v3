import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CopyDestinationImageSet$,
  CopyDestinationImageSetProperties$,
  CopyImageSet$,
  CopyImageSetCommand,
  CopyImageSetInformation$,
  CopyImageSetRequest$,
  CopyImageSetResponse$,
  CopySourceImageSetInformation$,
  CopySourceImageSetProperties$,
  CreateDatastore$,
  CreateDatastoreCommand,
  CreateDatastoreRequest$,
  CreateDatastoreResponse$,
  DICOMImportJobProperties$,
  DICOMImportJobSummary$,
  DICOMStudyDateAndTime$,
  DICOMTags$,
  DICOMUpdates$,
  DatastoreProperties$,
  DatastoreStatus,
  DatastoreSummary$,
  DeleteDatastore$,
  DeleteDatastoreCommand,
  DeleteDatastoreRequest$,
  DeleteDatastoreResponse$,
  DeleteImageSet$,
  DeleteImageSetCommand,
  DeleteImageSetRequest$,
  DeleteImageSetResponse$,
  GetDICOMImportJob$,
  GetDICOMImportJobCommand,
  GetDICOMImportJobRequest$,
  GetDICOMImportJobResponse$,
  GetDatastore$,
  GetDatastoreCommand,
  GetDatastoreRequest$,
  GetDatastoreResponse$,
  GetImageFrame$,
  GetImageFrameCommand,
  GetImageFrameRequest$,
  GetImageFrameResponse$,
  GetImageSet$,
  GetImageSetCommand,
  GetImageSetMetadata$,
  GetImageSetMetadataCommand,
  GetImageSetMetadataRequest$,
  GetImageSetMetadataResponse$,
  GetImageSetRequest$,
  GetImageSetResponse$,
  ImageFrameInformation$,
  ImageSetProperties$,
  ImageSetState,
  ImageSetWorkflowStatus,
  ImageSetsMetadataSummary$,
  InternalServerException,
  InternalServerException$,
  JobStatus,
  ListDICOMImportJobs$,
  ListDICOMImportJobsCommand,
  ListDICOMImportJobsRequest$,
  ListDICOMImportJobsResponse$,
  ListDatastores$,
  ListDatastoresCommand,
  ListDatastoresRequest$,
  ListDatastoresResponse$,
  ListImageSetVersions$,
  ListImageSetVersionsCommand,
  ListImageSetVersionsRequest$,
  ListImageSetVersionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LosslessStorageFormat,
  MedicalImaging,
  MedicalImagingClient,
  MedicalImagingServiceException,
  MetadataCopies$,
  MetadataUpdates$,
  Operator,
  Overrides$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SearchByAttributeValue$,
  SearchCriteria$,
  SearchFilter$,
  SearchImageSets$,
  SearchImageSetsCommand,
  SearchImageSetsRequest$,
  SearchImageSetsResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Sort$,
  SortField,
  SortOrder,
  StartDICOMImportJob$,
  StartDICOMImportJobCommand,
  StartDICOMImportJobRequest$,
  StartDICOMImportJobResponse$,
  StorageTier,
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
  UpdateImageSetMetadata$,
  UpdateImageSetMetadataCommand,
  UpdateImageSetMetadataRequest$,
  UpdateImageSetMetadataResponse$,
  ValidationException,
  ValidationException$,
  paginateListDICOMImportJobs,
  paginateListDatastores,
  paginateListImageSetVersions,
  paginateSearchImageSets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MedicalImagingClient === "function");
assert(typeof MedicalImaging === "function");
// commands
assert(typeof CopyImageSetCommand === "function");
assert(typeof CopyImageSet$ === "object");
assert(typeof CreateDatastoreCommand === "function");
assert(typeof CreateDatastore$ === "object");
assert(typeof DeleteDatastoreCommand === "function");
assert(typeof DeleteDatastore$ === "object");
assert(typeof DeleteImageSetCommand === "function");
assert(typeof DeleteImageSet$ === "object");
assert(typeof GetDatastoreCommand === "function");
assert(typeof GetDatastore$ === "object");
assert(typeof GetDICOMImportJobCommand === "function");
assert(typeof GetDICOMImportJob$ === "object");
assert(typeof GetImageFrameCommand === "function");
assert(typeof GetImageFrame$ === "object");
assert(typeof GetImageSetCommand === "function");
assert(typeof GetImageSet$ === "object");
assert(typeof GetImageSetMetadataCommand === "function");
assert(typeof GetImageSetMetadata$ === "object");
assert(typeof ListDatastoresCommand === "function");
assert(typeof ListDatastores$ === "object");
assert(typeof ListDICOMImportJobsCommand === "function");
assert(typeof ListDICOMImportJobs$ === "object");
assert(typeof ListImageSetVersionsCommand === "function");
assert(typeof ListImageSetVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SearchImageSetsCommand === "function");
assert(typeof SearchImageSets$ === "object");
assert(typeof StartDICOMImportJobCommand === "function");
assert(typeof StartDICOMImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateImageSetMetadataCommand === "function");
assert(typeof UpdateImageSetMetadata$ === "object");
// structural schemas
assert(typeof CopyDestinationImageSet$ === "object");
assert(typeof CopyDestinationImageSetProperties$ === "object");
assert(typeof CopyImageSetInformation$ === "object");
assert(typeof CopyImageSetRequest$ === "object");
assert(typeof CopyImageSetResponse$ === "object");
assert(typeof CopySourceImageSetInformation$ === "object");
assert(typeof CopySourceImageSetProperties$ === "object");
assert(typeof CreateDatastoreRequest$ === "object");
assert(typeof CreateDatastoreResponse$ === "object");
assert(typeof DatastoreProperties$ === "object");
assert(typeof DatastoreSummary$ === "object");
assert(typeof DeleteDatastoreRequest$ === "object");
assert(typeof DeleteDatastoreResponse$ === "object");
assert(typeof DeleteImageSetRequest$ === "object");
assert(typeof DeleteImageSetResponse$ === "object");
assert(typeof DICOMImportJobProperties$ === "object");
assert(typeof DICOMImportJobSummary$ === "object");
assert(typeof DICOMStudyDateAndTime$ === "object");
assert(typeof DICOMTags$ === "object");
assert(typeof DICOMUpdates$ === "object");
assert(typeof GetDatastoreRequest$ === "object");
assert(typeof GetDatastoreResponse$ === "object");
assert(typeof GetDICOMImportJobRequest$ === "object");
assert(typeof GetDICOMImportJobResponse$ === "object");
assert(typeof GetImageFrameRequest$ === "object");
assert(typeof GetImageFrameResponse$ === "object");
assert(typeof GetImageSetMetadataRequest$ === "object");
assert(typeof GetImageSetMetadataResponse$ === "object");
assert(typeof GetImageSetRequest$ === "object");
assert(typeof GetImageSetResponse$ === "object");
assert(typeof ImageFrameInformation$ === "object");
assert(typeof ImageSetProperties$ === "object");
assert(typeof ImageSetsMetadataSummary$ === "object");
assert(typeof ListDatastoresRequest$ === "object");
assert(typeof ListDatastoresResponse$ === "object");
assert(typeof ListDICOMImportJobsRequest$ === "object");
assert(typeof ListDICOMImportJobsResponse$ === "object");
assert(typeof ListImageSetVersionsRequest$ === "object");
assert(typeof ListImageSetVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetadataCopies$ === "object");
assert(typeof MetadataUpdates$ === "object");
assert(typeof Overrides$ === "object");
assert(typeof SearchByAttributeValue$ === "object");
assert(typeof SearchCriteria$ === "object");
assert(typeof SearchFilter$ === "object");
assert(typeof SearchImageSetsRequest$ === "object");
assert(typeof SearchImageSetsResponse$ === "object");
assert(typeof Sort$ === "object");
assert(typeof StartDICOMImportJobRequest$ === "object");
assert(typeof StartDICOMImportJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateImageSetMetadataRequest$ === "object");
assert(typeof UpdateImageSetMetadataResponse$ === "object");
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
assert(AccessDeniedException.prototype instanceof MedicalImagingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MedicalImagingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MedicalImagingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MedicalImagingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MedicalImagingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MedicalImagingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MedicalImagingServiceException);
assert(typeof ValidationException$ === "object");
assert(MedicalImagingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDICOMImportJobs === "function");
assert(typeof paginateListDatastores === "function");
assert(typeof paginateListImageSetVersions === "function");
assert(typeof paginateSearchImageSets === "function");
console.log(`MedicalImaging index test passed.`);
