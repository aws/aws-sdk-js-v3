import {
  AccessDeniedException,
  AlgorithmNameCloudRemoval,
  AlgorithmNameGeoMosaic,
  AlgorithmNameResampling,
  ComparisonOperator,
  ConflictException,
  DataCollectionType,
  DeleteEarthObservationJobCommand,
  DeleteVectorEnrichmentJobCommand,
  EarthObservationJobErrorType,
  EarthObservationJobExportStatus,
  EarthObservationJobStatus,
  ExportEarthObservationJobCommand,
  ExportErrorType,
  ExportVectorEnrichmentJobCommand,
  GetEarthObservationJobCommand,
  GetRasterDataCollectionCommand,
  GetTileCommand,
  GetVectorEnrichmentJobCommand,
  GroupBy,
  InternalServerException,
  ListEarthObservationJobsCommand,
  ListRasterDataCollectionsCommand,
  ListTagsForResourceCommand,
  ListVectorEnrichmentJobsCommand,
  LogicalOperator,
  OutputType,
  PredefinedResolution,
  ResourceNotFoundException,
  SageMakerGeospatial,
  SageMakerGeospatialClient,
  SageMakerGeospatialServiceException,
  SearchRasterDataCollectionCommand,
  ServiceQuotaExceededException,
  SortOrder,
  StartEarthObservationJobCommand,
  StartVectorEnrichmentJobCommand,
  StopEarthObservationJobCommand,
  StopVectorEnrichmentJobCommand,
  TagResourceCommand,
  TargetOptions,
  TemporalStatistics,
  ThrottlingException,
  Unit,
  UntagResourceCommand,
  ValidationException,
  VectorEnrichmentJobDocumentType,
  VectorEnrichmentJobErrorType,
  VectorEnrichmentJobExportErrorType,
  VectorEnrichmentJobExportStatus,
  VectorEnrichmentJobStatus,
  VectorEnrichmentJobType,
  ZonalStatistics,
  paginateListEarthObservationJobs,
  paginateListRasterDataCollections,
  paginateListVectorEnrichmentJobs,
  paginateSearchRasterDataCollection,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerGeospatialClient === "function");
assert(typeof SageMakerGeospatial === "function");
// commands
assert(typeof DeleteEarthObservationJobCommand === "function");
assert(typeof DeleteVectorEnrichmentJobCommand === "function");
assert(typeof ExportEarthObservationJobCommand === "function");
assert(typeof ExportVectorEnrichmentJobCommand === "function");
assert(typeof GetEarthObservationJobCommand === "function");
assert(typeof GetRasterDataCollectionCommand === "function");
assert(typeof GetTileCommand === "function");
assert(typeof GetVectorEnrichmentJobCommand === "function");
assert(typeof ListEarthObservationJobsCommand === "function");
assert(typeof ListRasterDataCollectionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVectorEnrichmentJobsCommand === "function");
assert(typeof SearchRasterDataCollectionCommand === "function");
assert(typeof StartEarthObservationJobCommand === "function");
assert(typeof StartVectorEnrichmentJobCommand === "function");
assert(typeof StopEarthObservationJobCommand === "function");
assert(typeof StopVectorEnrichmentJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AlgorithmNameCloudRemoval === "object");
assert(typeof AlgorithmNameGeoMosaic === "object");
assert(typeof AlgorithmNameResampling === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof DataCollectionType === "object");
assert(typeof EarthObservationJobErrorType === "object");
assert(typeof EarthObservationJobExportStatus === "object");
assert(typeof EarthObservationJobStatus === "object");
assert(typeof ExportErrorType === "object");
assert(typeof GroupBy === "object");
assert(typeof LogicalOperator === "object");
assert(typeof OutputType === "object");
assert(typeof PredefinedResolution === "object");
assert(typeof SortOrder === "object");
assert(typeof TargetOptions === "object");
assert(typeof TemporalStatistics === "object");
assert(typeof Unit === "object");
assert(typeof VectorEnrichmentJobDocumentType === "object");
assert(typeof VectorEnrichmentJobErrorType === "object");
assert(typeof VectorEnrichmentJobExportErrorType === "object");
assert(typeof VectorEnrichmentJobExportStatus === "object");
assert(typeof VectorEnrichmentJobStatus === "object");
assert(typeof VectorEnrichmentJobType === "object");
assert(typeof ZonalStatistics === "object");
// errors
assert(AccessDeniedException.prototype instanceof SageMakerGeospatialServiceException);
assert(ConflictException.prototype instanceof SageMakerGeospatialServiceException);
assert(InternalServerException.prototype instanceof SageMakerGeospatialServiceException);
assert(ResourceNotFoundException.prototype instanceof SageMakerGeospatialServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SageMakerGeospatialServiceException);
assert(ThrottlingException.prototype instanceof SageMakerGeospatialServiceException);
assert(ValidationException.prototype instanceof SageMakerGeospatialServiceException);
assert(SageMakerGeospatialServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEarthObservationJobs === "function");
assert(typeof paginateListRasterDataCollections === "function");
assert(typeof paginateListVectorEnrichmentJobs === "function");
assert(typeof paginateSearchRasterDataCollection === "function");
console.log(`SageMakerGeospatial index test passed.`);
