import {
  AccessDeniedException,
  AccessDeniedException$,
  AlgorithmNameCloudRemoval,
  AlgorithmNameGeoMosaic,
  AlgorithmNameResampling,
  AreaOfInterest$,
  AreaOfInterestGeometry$,
  AssetValue$,
  BandMathConfigInput$,
  CloudMaskingConfigInput$,
  CloudRemovalConfigInput$,
  ComparisonOperator,
  ConflictException,
  ConflictException$,
  CustomIndicesInput$,
  DataCollectionType,
  DeleteEarthObservationJob$,
  DeleteEarthObservationJobCommand,
  DeleteEarthObservationJobInput$,
  DeleteEarthObservationJobOutput$,
  DeleteVectorEnrichmentJob$,
  DeleteVectorEnrichmentJobCommand,
  DeleteVectorEnrichmentJobInput$,
  DeleteVectorEnrichmentJobOutput$,
  EarthObservationJobErrorDetails$,
  EarthObservationJobErrorType,
  EarthObservationJobExportStatus,
  EarthObservationJobStatus,
  EoCloudCoverInput$,
  ExportEarthObservationJob$,
  ExportEarthObservationJobCommand,
  ExportEarthObservationJobInput$,
  ExportEarthObservationJobOutput$,
  ExportErrorDetails$,
  ExportErrorDetailsOutput$,
  ExportErrorType,
  ExportS3DataInput$,
  ExportVectorEnrichmentJob$,
  ExportVectorEnrichmentJobCommand,
  ExportVectorEnrichmentJobInput$,
  ExportVectorEnrichmentJobOutput$,
  ExportVectorEnrichmentJobOutputConfig$,
  Filter$,
  Geometry$,
  GeoMosaicConfigInput$,
  GetEarthObservationJob$,
  GetEarthObservationJobCommand,
  GetEarthObservationJobInput$,
  GetEarthObservationJobOutput$,
  GetRasterDataCollection$,
  GetRasterDataCollectionCommand,
  GetRasterDataCollectionInput$,
  GetRasterDataCollectionOutput$,
  GetTile$,
  GetTileCommand,
  GetTileInput$,
  GetTileOutput$,
  GetVectorEnrichmentJob$,
  GetVectorEnrichmentJobCommand,
  GetVectorEnrichmentJobInput$,
  GetVectorEnrichmentJobOutput$,
  GroupBy,
  InputConfigInput$,
  InputConfigOutput$,
  InternalServerException,
  InternalServerException$,
  ItemSource$,
  JobConfigInput$,
  LandCoverSegmentationConfigInput$,
  LandsatCloudCoverLandInput$,
  ListEarthObservationJobInput$,
  ListEarthObservationJobOutput$,
  ListEarthObservationJobOutputConfig$,
  ListEarthObservationJobs$,
  ListEarthObservationJobsCommand,
  ListRasterDataCollections$,
  ListRasterDataCollectionsCommand,
  ListRasterDataCollectionsInput$,
  ListRasterDataCollectionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVectorEnrichmentJobInput$,
  ListVectorEnrichmentJobOutput$,
  ListVectorEnrichmentJobOutputConfig$,
  ListVectorEnrichmentJobs$,
  ListVectorEnrichmentJobsCommand,
  LogicalOperator,
  MapMatchingConfig$,
  MultiPolygonGeometryInput$,
  Operation$,
  OutputBand$,
  OutputConfigInput$,
  OutputResolutionResamplingInput$,
  OutputResolutionStackInput$,
  OutputType,
  paginateListEarthObservationJobs,
  paginateListRasterDataCollections,
  paginateListVectorEnrichmentJobs,
  paginateSearchRasterDataCollection,
  PlatformInput$,
  PolygonGeometryInput$,
  PredefinedResolution,
  Properties$,
  Property$,
  PropertyFilter$,
  PropertyFilters$,
  RasterDataCollectionMetadata$,
  RasterDataCollectionQueryInput$,
  RasterDataCollectionQueryOutput$,
  RasterDataCollectionQueryWithBandFilterInput$,
  ResamplingConfigInput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ReverseGeocodingConfig$,
  SageMakerGeospatial,
  SageMakerGeospatialClient,
  SageMakerGeospatialServiceException,
  SearchRasterDataCollection$,
  SearchRasterDataCollectionCommand,
  SearchRasterDataCollectionInput$,
  SearchRasterDataCollectionOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  StackConfigInput$,
  StartEarthObservationJob$,
  StartEarthObservationJobCommand,
  StartEarthObservationJobInput$,
  StartEarthObservationJobOutput$,
  StartVectorEnrichmentJob$,
  StartVectorEnrichmentJobCommand,
  StartVectorEnrichmentJobInput$,
  StartVectorEnrichmentJobOutput$,
  StopEarthObservationJob$,
  StopEarthObservationJobCommand,
  StopEarthObservationJobInput$,
  StopEarthObservationJobOutput$,
  StopVectorEnrichmentJob$,
  StopVectorEnrichmentJobCommand,
  StopVectorEnrichmentJobInput$,
  StopVectorEnrichmentJobOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetOptions,
  TemporalStatistics,
  TemporalStatisticsConfigInput$,
  ThrottlingException,
  ThrottlingException$,
  TimeRangeFilterInput$,
  TimeRangeFilterOutput$,
  Unit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UserDefined$,
  ValidationException,
  ValidationException$,
  VectorEnrichmentJobConfig$,
  VectorEnrichmentJobDataSourceConfigInput$,
  VectorEnrichmentJobDocumentType,
  VectorEnrichmentJobErrorDetails$,
  VectorEnrichmentJobErrorType,
  VectorEnrichmentJobExportErrorDetails$,
  VectorEnrichmentJobExportErrorType,
  VectorEnrichmentJobExportStatus,
  VectorEnrichmentJobInputConfig$,
  VectorEnrichmentJobS3Data$,
  VectorEnrichmentJobStatus,
  VectorEnrichmentJobType,
  ViewOffNadirInput$,
  ViewSunAzimuthInput$,
  ViewSunElevationInput$,
  ZonalStatistics,
  ZonalStatisticsConfigInput$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerGeospatialClient === "function");
assert(typeof SageMakerGeospatial === "function");
// commands
assert(typeof DeleteEarthObservationJobCommand === "function");
assert(typeof DeleteEarthObservationJob$ === "object");
assert(typeof DeleteVectorEnrichmentJobCommand === "function");
assert(typeof DeleteVectorEnrichmentJob$ === "object");
assert(typeof ExportEarthObservationJobCommand === "function");
assert(typeof ExportEarthObservationJob$ === "object");
assert(typeof ExportVectorEnrichmentJobCommand === "function");
assert(typeof ExportVectorEnrichmentJob$ === "object");
assert(typeof GetEarthObservationJobCommand === "function");
assert(typeof GetEarthObservationJob$ === "object");
assert(typeof GetRasterDataCollectionCommand === "function");
assert(typeof GetRasterDataCollection$ === "object");
assert(typeof GetTileCommand === "function");
assert(typeof GetTile$ === "object");
assert(typeof GetVectorEnrichmentJobCommand === "function");
assert(typeof GetVectorEnrichmentJob$ === "object");
assert(typeof ListEarthObservationJobsCommand === "function");
assert(typeof ListEarthObservationJobs$ === "object");
assert(typeof ListRasterDataCollectionsCommand === "function");
assert(typeof ListRasterDataCollections$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVectorEnrichmentJobsCommand === "function");
assert(typeof ListVectorEnrichmentJobs$ === "object");
assert(typeof SearchRasterDataCollectionCommand === "function");
assert(typeof SearchRasterDataCollection$ === "object");
assert(typeof StartEarthObservationJobCommand === "function");
assert(typeof StartEarthObservationJob$ === "object");
assert(typeof StartVectorEnrichmentJobCommand === "function");
assert(typeof StartVectorEnrichmentJob$ === "object");
assert(typeof StopEarthObservationJobCommand === "function");
assert(typeof StopEarthObservationJob$ === "object");
assert(typeof StopVectorEnrichmentJobCommand === "function");
assert(typeof StopVectorEnrichmentJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AreaOfInterest$ === "object");
assert(typeof AreaOfInterestGeometry$ === "object");
assert(typeof AssetValue$ === "object");
assert(typeof BandMathConfigInput$ === "object");
assert(typeof CloudMaskingConfigInput$ === "object");
assert(typeof CloudRemovalConfigInput$ === "object");
assert(typeof CustomIndicesInput$ === "object");
assert(typeof DeleteEarthObservationJobInput$ === "object");
assert(typeof DeleteEarthObservationJobOutput$ === "object");
assert(typeof DeleteVectorEnrichmentJobInput$ === "object");
assert(typeof DeleteVectorEnrichmentJobOutput$ === "object");
assert(typeof EarthObservationJobErrorDetails$ === "object");
assert(typeof EoCloudCoverInput$ === "object");
assert(typeof ExportEarthObservationJobInput$ === "object");
assert(typeof ExportEarthObservationJobOutput$ === "object");
assert(typeof ExportErrorDetails$ === "object");
assert(typeof ExportErrorDetailsOutput$ === "object");
assert(typeof ExportS3DataInput$ === "object");
assert(typeof ExportVectorEnrichmentJobInput$ === "object");
assert(typeof ExportVectorEnrichmentJobOutput$ === "object");
assert(typeof ExportVectorEnrichmentJobOutputConfig$ === "object");
assert(typeof Filter$ === "object");
assert(typeof Geometry$ === "object");
assert(typeof GeoMosaicConfigInput$ === "object");
assert(typeof GetEarthObservationJobInput$ === "object");
assert(typeof GetEarthObservationJobOutput$ === "object");
assert(typeof GetRasterDataCollectionInput$ === "object");
assert(typeof GetRasterDataCollectionOutput$ === "object");
assert(typeof GetTileInput$ === "object");
assert(typeof GetTileOutput$ === "object");
assert(typeof GetVectorEnrichmentJobInput$ === "object");
assert(typeof GetVectorEnrichmentJobOutput$ === "object");
assert(typeof InputConfigInput$ === "object");
assert(typeof InputConfigOutput$ === "object");
assert(typeof ItemSource$ === "object");
assert(typeof JobConfigInput$ === "object");
assert(typeof LandCoverSegmentationConfigInput$ === "object");
assert(typeof LandsatCloudCoverLandInput$ === "object");
assert(typeof ListEarthObservationJobInput$ === "object");
assert(typeof ListEarthObservationJobOutput$ === "object");
assert(typeof ListEarthObservationJobOutputConfig$ === "object");
assert(typeof ListRasterDataCollectionsInput$ === "object");
assert(typeof ListRasterDataCollectionsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVectorEnrichmentJobInput$ === "object");
assert(typeof ListVectorEnrichmentJobOutput$ === "object");
assert(typeof ListVectorEnrichmentJobOutputConfig$ === "object");
assert(typeof MapMatchingConfig$ === "object");
assert(typeof MultiPolygonGeometryInput$ === "object");
assert(typeof Operation$ === "object");
assert(typeof OutputBand$ === "object");
assert(typeof OutputConfigInput$ === "object");
assert(typeof OutputResolutionResamplingInput$ === "object");
assert(typeof OutputResolutionStackInput$ === "object");
assert(typeof PlatformInput$ === "object");
assert(typeof PolygonGeometryInput$ === "object");
assert(typeof Properties$ === "object");
assert(typeof Property$ === "object");
assert(typeof PropertyFilter$ === "object");
assert(typeof PropertyFilters$ === "object");
assert(typeof RasterDataCollectionMetadata$ === "object");
assert(typeof RasterDataCollectionQueryInput$ === "object");
assert(typeof RasterDataCollectionQueryOutput$ === "object");
assert(typeof RasterDataCollectionQueryWithBandFilterInput$ === "object");
assert(typeof ResamplingConfigInput$ === "object");
assert(typeof ReverseGeocodingConfig$ === "object");
assert(typeof SearchRasterDataCollectionInput$ === "object");
assert(typeof SearchRasterDataCollectionOutput$ === "object");
assert(typeof StackConfigInput$ === "object");
assert(typeof StartEarthObservationJobInput$ === "object");
assert(typeof StartEarthObservationJobOutput$ === "object");
assert(typeof StartVectorEnrichmentJobInput$ === "object");
assert(typeof StartVectorEnrichmentJobOutput$ === "object");
assert(typeof StopEarthObservationJobInput$ === "object");
assert(typeof StopEarthObservationJobOutput$ === "object");
assert(typeof StopVectorEnrichmentJobInput$ === "object");
assert(typeof StopVectorEnrichmentJobOutput$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TemporalStatisticsConfigInput$ === "object");
assert(typeof TimeRangeFilterInput$ === "object");
assert(typeof TimeRangeFilterOutput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UserDefined$ === "object");
assert(typeof VectorEnrichmentJobConfig$ === "object");
assert(typeof VectorEnrichmentJobDataSourceConfigInput$ === "object");
assert(typeof VectorEnrichmentJobErrorDetails$ === "object");
assert(typeof VectorEnrichmentJobExportErrorDetails$ === "object");
assert(typeof VectorEnrichmentJobInputConfig$ === "object");
assert(typeof VectorEnrichmentJobS3Data$ === "object");
assert(typeof ViewOffNadirInput$ === "object");
assert(typeof ViewSunAzimuthInput$ === "object");
assert(typeof ViewSunElevationInput$ === "object");
assert(typeof ZonalStatisticsConfigInput$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SageMakerGeospatialServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SageMakerGeospatialServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SageMakerGeospatialServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SageMakerGeospatialServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SageMakerGeospatialServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SageMakerGeospatialServiceException);
assert(typeof ValidationException$ === "object");
assert(SageMakerGeospatialServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEarthObservationJobs === "function");
assert(typeof paginateListRasterDataCollections === "function");
assert(typeof paginateListVectorEnrichmentJobs === "function");
assert(typeof paginateSearchRasterDataCollection === "function");
console.log(`SageMakerGeospatial index test passed.`);
