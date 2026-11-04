// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  AlgorithmNameCloudRemoval,
  AlgorithmNameGeoMosaic,
  AlgorithmNameResampling,
  ComparisonOperator,
  DataCollectionType,
  EarthObservationJobErrorType,
  EarthObservationJobExportStatus,
  EarthObservationJobStatus,
  ExportErrorType,
  GroupBy,
  LogicalOperator,
  OutputType,
  PredefinedResolution,
  SortOrder,
  TargetOptions,
  TemporalStatistics,
  Unit,
  VectorEnrichmentJobDocumentType,
  VectorEnrichmentJobErrorType,
  VectorEnrichmentJobExportErrorType,
  VectorEnrichmentJobExportStatus,
  VectorEnrichmentJobStatus,
  VectorEnrichmentJobType,
  ZonalStatistics,
} from "./enums";

/**
 * The structure representing Polygon Geometry based on the [GeoJson spec](https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6).
 *
 * @public
 */
export interface MultiPolygonGeometryInput {
  /**
   * The coordinates of the multipolygon geometry.
   *
   * @public
   */
  Coordinates: number[][][][] | undefined;
}

/**
 * The structure representing Polygon Geometry based on the [GeoJson spec](https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6).
 *
 * @public
 */
export interface PolygonGeometryInput {
  /**
   * Coordinates representing a Polygon based on the [GeoJson spec](https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6).
   *
   * @public
   */
  Coordinates: number[][][] | undefined;
}

/**
 * A GeoJSON object representing the geographic extent in the coordinate space.
 *
 * @public
 */
export type AreaOfInterestGeometry =
  | AreaOfInterestGeometry.MultiPolygonGeometryMember
  | AreaOfInterestGeometry.PolygonGeometryMember
  | AreaOfInterestGeometry.$UnknownMember;

/**
 * @public
 */
export namespace AreaOfInterestGeometry {
  /**
   * The structure representing Polygon Geometry.
   *
   * @public
   */
  export interface PolygonGeometryMember {
    PolygonGeometry: PolygonGeometryInput;
    MultiPolygonGeometry?: never;
    $unknown?: never;
  }

  /**
   * The structure representing the MultiPolygon Geometry.
   *
   * @public
   */
  export interface MultiPolygonGeometryMember {
    PolygonGeometry?: never;
    MultiPolygonGeometry: MultiPolygonGeometryInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PolygonGeometry?: never;
    MultiPolygonGeometry?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PolygonGeometry: (value: PolygonGeometryInput) => T;
    MultiPolygonGeometry: (value: MultiPolygonGeometryInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The geographic extent of the Earth Observation job.
 *
 * @public
 */
export type AreaOfInterest =
  | AreaOfInterest.AreaOfInterestGeometryMember
  | AreaOfInterest.$UnknownMember;

/**
 * @public
 */
export namespace AreaOfInterest {
  /**
   * A GeoJSON object representing the geographic extent in the coordinate space.
   *
   * @public
   */
  export interface AreaOfInterestGeometryMember {
    AreaOfInterestGeometry: AreaOfInterestGeometry;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AreaOfInterestGeometry?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AreaOfInterestGeometry: (value: AreaOfInterestGeometry) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure containing the asset properties.
 *
 * @public
 */
export interface AssetValue {
  /**
   * Link to the asset object.
   *
   * @public
   */
  Href?: string | undefined;
}

/**
 * Represents an arithmetic operation to compute spectral index.
 *
 * @public
 */
export interface Operation {
  /**
   * The name of the operation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Textual representation of the math operation; Equation used to compute the spectral index.
   *
   * @public
   */
  Equation: string | undefined;

  /**
   * The type of the operation.
   *
   * @public
   */
  OutputType?: OutputType | undefined;
}

/**
 * Input object defining the custom BandMath indices to compute.
 *
 * @public
 */
export interface CustomIndicesInput {
  /**
   * A list of BandMath indices to compute.
   *
   * @public
   */
  Operations?: Operation[] | undefined;
}

/**
 * Input structure for the BandMath operation type. Defines Predefined and CustomIndices to be computed using BandMath.
 *
 * @public
 */
export interface BandMathConfigInput {
  /**
   * One or many of the supported predefined indices to compute. Allowed values: `NDVI`, `EVI2`, `MSAVI`, `NDWI`, `NDMI`, `NDSI`, and `WDRVI`.
   *
   * @public
   */
  PredefinedIndices?: string[] | undefined;

  /**
   * CustomIndices that are computed.
   *
   * @public
   */
  CustomIndices?: CustomIndicesInput | undefined;
}

/**
 * Input structure for CloudMasking operation type.
 *
 * @public
 */
export interface CloudMaskingConfigInput {}

/**
 * Input structure for Cloud Removal Operation type
 *
 * @public
 */
export interface CloudRemovalConfigInput {
  /**
   * The name of the algorithm used for cloud removal.
   *
   * @public
   */
  AlgorithmName?: AlgorithmNameCloudRemoval | undefined;

  /**
   * The interpolation value you provide for cloud removal.
   *
   * @public
   */
  InterpolationValue?: string | undefined;

  /**
   * TargetBands to be returned in the output of CloudRemoval operation.
   *
   * @public
   */
  TargetBands?: string[] | undefined;
}

/**
 * The structure representing the filters supported by a RasterDataCollection.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the filter being used.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The minimum value of the filter.
   *
   * @public
   */
  Minimum?: number | undefined;

  /**
   * The maximum value of the filter.
   *
   * @public
   */
  Maximum?: number | undefined;
}

/**
 * Response object containing details for a specific RasterDataCollection.
 *
 * @public
 */
export interface RasterDataCollectionMetadata {
  /**
   * The name of the raster data collection.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the raster data collection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The type of raster data collection.
   *
   * @public
   */
  Type: DataCollectionType | undefined;

  /**
   * A description of the raster data collection.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The description URL of the raster data collection.
   *
   * @public
   */
  DescriptionPageUrl?: string | undefined;

  /**
   * The list of filters supported by the raster data collection.
   *
   * @public
   */
  SupportedFilters: Filter[] | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteEarthObservationJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Earth Observation job being deleted.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEarthObservationJobOutput {}

/**
 * @public
 */
export interface DeleteVectorEnrichmentJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVectorEnrichmentJobOutput {}

/**
 * The structure containing the Amazon S3 path to export the Earth Observation job output.
 *
 * @public
 */
export interface ExportS3DataInput {
  /**
   * The URL to the Amazon S3 data input.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The response structure for an OutputConfig returned by an ExportEarthObservationJob.
 *
 * @public
 */
export interface OutputConfigInput {
  /**
   * Path to Amazon S3 storage location for the output configuration file.
   *
   * @public
   */
  S3Data: ExportS3DataInput | undefined;
}

/**
 * @public
 */
export interface ExportEarthObservationJobInput {
  /**
   * The input Amazon Resource Name (ARN) of the Earth Observation job being exported.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * An object containing information about the output file.
   *
   * @public
   */
  OutputConfig: OutputConfigInput | undefined;

  /**
   * The source images provided to the Earth Observation job being exported.
   *
   * @public
   */
  ExportSourceImages?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportEarthObservationJobOutput {
  /**
   * The output Amazon Resource Name (ARN) of the Earth Observation job being exported.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The status of the results of the Earth Observation job being exported.
   *
   * @public
   */
  ExportStatus: EarthObservationJobExportStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * An object containing information about the output file.
   *
   * @public
   */
  OutputConfig: OutputConfigInput | undefined;

  /**
   * The source images provided to the Earth Observation job being exported.
   *
   * @public
   */
  ExportSourceImages?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEarthObservationJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Earth Observation job.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The structure representing the errors in an EarthObservationJob.
 *
 * @public
 */
export interface EarthObservationJobErrorDetails {
  /**
   * The type of error in an Earth Observation job.
   *
   * @public
   */
  Type?: EarthObservationJobErrorType | undefined;

  /**
   * A detailed message describing the error in an Earth Observation job.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The structure representing the errors in an export EarthObservationJob operation.
 *
 * @public
 */
export interface ExportErrorDetailsOutput {
  /**
   * The type of error in an export EarthObservationJob operation.
   *
   * @public
   */
  Type?: ExportErrorType | undefined;

  /**
   * A detailed message describing the error in an export EarthObservationJob operation.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The structure for returning the export error details in a GetEarthObservationJob.
 *
 * @public
 */
export interface ExportErrorDetails {
  /**
   * The structure for returning the export error details while exporting results of an Earth Observation job.
   *
   * @public
   */
  ExportResults?: ExportErrorDetailsOutput | undefined;

  /**
   * The structure for returning the export error details while exporting the source images of an Earth Observation job.
   *
   * @public
   */
  ExportSourceImages?: ExportErrorDetailsOutput | undefined;
}

/**
 * The structure representing the EoCloudCover filter.
 *
 * @public
 */
export interface EoCloudCoverInput {
  /**
   * Lower bound for EoCloudCover.
   *
   * @public
   */
  LowerBound: number | undefined;

  /**
   * Upper bound for EoCloudCover.
   *
   * @public
   */
  UpperBound: number | undefined;
}

/**
 * The structure representing Land Cloud Cover property for Landsat data collection.
 *
 * @public
 */
export interface LandsatCloudCoverLandInput {
  /**
   * The minimum value for Land Cloud Cover property filter. This will filter items having Land Cloud Cover greater than or equal to this value.
   *
   * @public
   */
  LowerBound: number | undefined;

  /**
   * The maximum value for Land Cloud Cover property filter. This will filter items having Land Cloud Cover less than or equal to this value.
   *
   * @public
   */
  UpperBound: number | undefined;
}

/**
 * The input structure for specifying Platform. Platform refers to the unique name of the specific platform the instrument is attached to. For satellites it is the name of the satellite, eg. landsat-8 (Landsat-8), sentinel-2a.
 *
 * @public
 */
export interface PlatformInput {
  /**
   * The value of the platform.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The ComparisonOperator to use with PlatformInput.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;
}

/**
 * The input structure for specifying ViewOffNadir property filter. ViewOffNadir refers to the angle from the sensor between nadir (straight down) and the scene center. Measured in degrees (0-90).
 *
 * @public
 */
export interface ViewOffNadirInput {
  /**
   * The minimum value for ViewOffNadir property filter. This filters items having ViewOffNadir greater than or equal to this value.
   *
   * @public
   */
  LowerBound: number | undefined;

  /**
   * The maximum value for ViewOffNadir property filter. This filters items having ViewOffNadir lesser than or equal to this value.
   *
   * @public
   */
  UpperBound: number | undefined;
}

/**
 * The input structure for specifying ViewSunAzimuth property filter. ViewSunAzimuth refers to the Sun azimuth angle. From the scene center point on the ground, this is the angle between truth north and the sun. Measured clockwise in degrees (0-360).
 *
 * @public
 */
export interface ViewSunAzimuthInput {
  /**
   * The minimum value for ViewSunAzimuth property filter. This filters items having ViewSunAzimuth greater than or equal to this value.
   *
   * @public
   */
  LowerBound: number | undefined;

  /**
   * The maximum value for ViewSunAzimuth property filter. This filters items having ViewSunAzimuth lesser than or equal to this value.
   *
   * @public
   */
  UpperBound: number | undefined;
}

/**
 * The input structure for specifying ViewSunElevation angle property filter.
 *
 * @public
 */
export interface ViewSunElevationInput {
  /**
   * The lower bound to view the sun elevation.
   *
   * @public
   */
  LowerBound: number | undefined;

  /**
   * The upper bound to view the sun elevation.
   *
   * @public
   */
  UpperBound: number | undefined;
}

/**
 * Represents a single searchable property to search on.
 *
 * @public
 */
export type Property =
  | Property.EoCloudCoverMember
  | Property.LandsatCloudCoverLandMember
  | Property.PlatformMember
  | Property.ViewOffNadirMember
  | Property.ViewSunAzimuthMember
  | Property.ViewSunElevationMember
  | Property.$UnknownMember;

/**
 * @public
 */
export namespace Property {
  /**
   * The structure representing EoCloudCover property filter containing a lower bound and upper bound.
   *
   * @public
   */
  export interface EoCloudCoverMember {
    EoCloudCover: EoCloudCoverInput;
    ViewOffNadir?: never;
    ViewSunAzimuth?: never;
    ViewSunElevation?: never;
    Platform?: never;
    LandsatCloudCoverLand?: never;
    $unknown?: never;
  }

  /**
   * The structure representing ViewOffNadir property filter containing a lower bound and upper bound.
   *
   * @public
   */
  export interface ViewOffNadirMember {
    EoCloudCover?: never;
    ViewOffNadir: ViewOffNadirInput;
    ViewSunAzimuth?: never;
    ViewSunElevation?: never;
    Platform?: never;
    LandsatCloudCoverLand?: never;
    $unknown?: never;
  }

  /**
   * The structure representing ViewSunAzimuth property filter containing a lower bound and upper bound.
   *
   * @public
   */
  export interface ViewSunAzimuthMember {
    EoCloudCover?: never;
    ViewOffNadir?: never;
    ViewSunAzimuth: ViewSunAzimuthInput;
    ViewSunElevation?: never;
    Platform?: never;
    LandsatCloudCoverLand?: never;
    $unknown?: never;
  }

  /**
   * The structure representing ViewSunElevation property filter containing a lower bound and upper bound.
   *
   * @public
   */
  export interface ViewSunElevationMember {
    EoCloudCover?: never;
    ViewOffNadir?: never;
    ViewSunAzimuth?: never;
    ViewSunElevation: ViewSunElevationInput;
    Platform?: never;
    LandsatCloudCoverLand?: never;
    $unknown?: never;
  }

  /**
   * The structure representing Platform property filter consisting of value and comparison operator.
   *
   * @public
   */
  export interface PlatformMember {
    EoCloudCover?: never;
    ViewOffNadir?: never;
    ViewSunAzimuth?: never;
    ViewSunElevation?: never;
    Platform: PlatformInput;
    LandsatCloudCoverLand?: never;
    $unknown?: never;
  }

  /**
   * The structure representing Land Cloud Cover property filter for Landsat collection containing a lower bound and upper bound.
   *
   * @public
   */
  export interface LandsatCloudCoverLandMember {
    EoCloudCover?: never;
    ViewOffNadir?: never;
    ViewSunAzimuth?: never;
    ViewSunElevation?: never;
    Platform?: never;
    LandsatCloudCoverLand: LandsatCloudCoverLandInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EoCloudCover?: never;
    ViewOffNadir?: never;
    ViewSunAzimuth?: never;
    ViewSunElevation?: never;
    Platform?: never;
    LandsatCloudCoverLand?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EoCloudCover: (value: EoCloudCoverInput) => T;
    ViewOffNadir: (value: ViewOffNadirInput) => T;
    ViewSunAzimuth: (value: ViewSunAzimuthInput) => T;
    ViewSunElevation: (value: ViewSunElevationInput) => T;
    Platform: (value: PlatformInput) => T;
    LandsatCloudCoverLand: (value: LandsatCloudCoverLandInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The structure representing a single PropertyFilter.
 *
 * @public
 */
export interface PropertyFilter {
  /**
   * Represents a single property to match with when searching a raster data collection.
   *
   * @public
   */
  Property: Property | undefined;
}

/**
 * A list of PropertyFilter objects.
 *
 * @public
 */
export interface PropertyFilters {
  /**
   * A list of Property Filters.
   *
   * @public
   */
  Properties?: PropertyFilter[] | undefined;

  /**
   * The Logical Operator used to combine the Property Filters.
   *
   * @public
   */
  LogicalOperator?: LogicalOperator | undefined;
}

/**
 * The output structure of the time range filter.
 *
 * @public
 */
export interface TimeRangeFilterOutput {
  /**
   * The starting time for the time range filter.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The ending time for the time range filter.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * The output structure contains the Raster Data Collection Query input along with some additional metadata.
 *
 * @public
 */
export interface RasterDataCollectionQueryOutput {
  /**
   * The ARN of the Raster Data Collection against which the search is done.
   *
   * @public
   */
  RasterDataCollectionArn: string | undefined;

  /**
   * The name of the raster data collection.
   *
   * @public
   */
  RasterDataCollectionName: string | undefined;

  /**
   * The TimeRange filter used in the search.
   *
   * @public
   */
  TimeRangeFilter: TimeRangeFilterOutput | undefined;

  /**
   * The Area of Interest used in the search.
   *
   * @public
   */
  AreaOfInterest?: AreaOfInterest | undefined;

  /**
   * Property filters used in the search.
   *
   * @public
   */
  PropertyFilters?: PropertyFilters | undefined;
}

/**
 * The InputConfig for an EarthObservationJob response.
 *
 * @public
 */
export interface InputConfigOutput {
  /**
   * The Amazon Resource Name (ARN) of the previous Earth Observation job.
   *
   * @public
   */
  PreviousEarthObservationJobArn?: string | undefined;

  /**
   * The structure representing the RasterDataCollection Query consisting of the Area of Interest, RasterDataCollectionArn, RasterDataCollectionName, TimeRange, and Property Filters.
   *
   * @public
   */
  RasterDataCollectionQuery?: RasterDataCollectionQueryOutput | undefined;
}

/**
 * Input configuration information for the geomosaic.
 *
 * @public
 */
export interface GeoMosaicConfigInput {
  /**
   * The name of the algorithm being used for geomosaic.
   *
   * @public
   */
  AlgorithmName?: AlgorithmNameGeoMosaic | undefined;

  /**
   * The target bands for geomosaic.
   *
   * @public
   */
  TargetBands?: string[] | undefined;
}

/**
 * The input structure for Land Cover Operation type.
 *
 * @public
 */
export interface LandCoverSegmentationConfigInput {}

/**
 * The output resolution (in target georeferenced units) of the result of the operation
 *
 * @public
 */
export interface UserDefined {
  /**
   * The value for output resolution of the result.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The units for output resolution of the result.
   *
   * @public
   */
  Unit: Unit | undefined;
}

/**
 * OutputResolution Configuration indicating the target resolution for the output of Resampling operation.
 *
 * @public
 */
export interface OutputResolutionResamplingInput {
  /**
   * User Defined Resolution for the output of Resampling operation defined by value and unit.
   *
   * @public
   */
  UserDefined: UserDefined | undefined;
}

/**
 * The structure representing input for resampling operation.
 *
 * @public
 */
export interface ResamplingConfigInput {
  /**
   * The structure representing output resolution (in target georeferenced units) of the result of resampling operation.
   *
   * @public
   */
  OutputResolution: OutputResolutionResamplingInput | undefined;

  /**
   * The name of the algorithm used for resampling.
   *
   * @public
   */
  AlgorithmName?: AlgorithmNameResampling | undefined;

  /**
   * Bands used in the operation. If no target bands are specified, it uses all bands available in the input.
   *
   * @public
   */
  TargetBands?: string[] | undefined;
}

/**
 * The input structure representing Output Resolution for Stacking Operation.
 *
 * @public
 */
export interface OutputResolutionStackInput {
  /**
   * A string value representing Predefined Output Resolution for a stacking operation. Allowed values are `HIGHEST`, `LOWEST`, and `AVERAGE`.
   *
   * @public
   */
  Predefined?: PredefinedResolution | undefined;

  /**
   * The structure representing User Output Resolution for a Stacking operation defined as a value and unit.
   *
   * @public
   */
  UserDefined?: UserDefined | undefined;
}

/**
 * The input structure for Stacking Operation.
 *
 * @public
 */
export interface StackConfigInput {
  /**
   * The structure representing output resolution (in target georeferenced units) of the result of stacking operation.
   *
   * @public
   */
  OutputResolution?: OutputResolutionStackInput | undefined;

  /**
   * A list of bands to be stacked in the specified order. When the parameter is not provided, all the available bands in the data collection are stacked in the alphabetical order of their asset names.
   *
   * @public
   */
  TargetBands?: string[] | undefined;
}

/**
 * The structure representing the configuration for Temporal Statistics operation.
 *
 * @public
 */
export interface TemporalStatisticsConfigInput {
  /**
   * The input for the temporal statistics grouping by time frequency option.
   *
   * @public
   */
  GroupBy?: GroupBy | undefined;

  /**
   * The list of the statistics method options.
   *
   * @public
   */
  Statistics: TemporalStatistics[] | undefined;

  /**
   * The list of target band names for the temporal statistic to calculate.
   *
   * @public
   */
  TargetBands?: string[] | undefined;
}

/**
 * The structure representing input configuration of ZonalStatistics operation.
 *
 * @public
 */
export interface ZonalStatisticsConfigInput {
  /**
   * The Amazon S3 path pointing to the GeoJSON containing the polygonal zones.
   *
   * @public
   */
  ZoneS3Path: string | undefined;

  /**
   * List of zonal statistics to compute.
   *
   * @public
   */
  Statistics: ZonalStatistics[] | undefined;

  /**
   * Bands used in the operation. If no target bands are specified, it uses all bands available input.
   *
   * @public
   */
  TargetBands?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) or an ID of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to decrypt your output artifacts with Amazon S3 server-side encryption. The SageMaker execution role must have `kms:GenerateDataKey` permission.
   *
   * The `KmsKeyId` can be any of the following formats:
   *
   * - // KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"`
   *
   * For more information about key identifiers, see [Key identifiers (KeyID)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) in the Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.
   *
   * @public
   */
  ZoneS3PathKmsKeyId?: string | undefined;
}

/**
 * The input structure for the JobConfig in an EarthObservationJob.
 *
 * @public
 */
export type JobConfigInput =
  | JobConfigInput.BandMathConfigMember
  | JobConfigInput.CloudMaskingConfigMember
  | JobConfigInput.CloudRemovalConfigMember
  | JobConfigInput.GeoMosaicConfigMember
  | JobConfigInput.LandCoverSegmentationConfigMember
  | JobConfigInput.ResamplingConfigMember
  | JobConfigInput.StackConfigMember
  | JobConfigInput.TemporalStatisticsConfigMember
  | JobConfigInput.ZonalStatisticsConfigMember
  | JobConfigInput.$UnknownMember;

/**
 * @public
 */
export namespace JobConfigInput {
  /**
   * An object containing information about the job configuration for BandMath.
   *
   * @public
   */
  export interface BandMathConfigMember {
    BandMathConfig: BandMathConfigInput;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for resampling.
   *
   * @public
   */
  export interface ResamplingConfigMember {
    BandMathConfig?: never;
    ResamplingConfig: ResamplingConfigInput;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for temporal statistics.
   *
   * @public
   */
  export interface TemporalStatisticsConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig: TemporalStatisticsConfigInput;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for cloud removal.
   *
   * @public
   */
  export interface CloudRemovalConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig: CloudRemovalConfigInput;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for zonal statistics.
   *
   * @public
   */
  export interface ZonalStatisticsConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig: ZonalStatisticsConfigInput;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for geomosaic.
   *
   * @public
   */
  export interface GeoMosaicConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig: GeoMosaicConfigInput;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for a Stacking Earth Observation job.
   *
   * @public
   */
  export interface StackConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig: StackConfigInput;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for cloud masking.
   *
   * @public
   */
  export interface CloudMaskingConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig: CloudMaskingConfigInput;
    LandCoverSegmentationConfig?: never;
    $unknown?: never;
  }

  /**
   * An object containing information about the job configuration for land cover segmentation.
   *
   * @public
   */
  export interface LandCoverSegmentationConfigMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig: LandCoverSegmentationConfigInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BandMathConfig?: never;
    ResamplingConfig?: never;
    TemporalStatisticsConfig?: never;
    CloudRemovalConfig?: never;
    ZonalStatisticsConfig?: never;
    GeoMosaicConfig?: never;
    StackConfig?: never;
    CloudMaskingConfig?: never;
    LandCoverSegmentationConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    BandMathConfig: (value: BandMathConfigInput) => T;
    ResamplingConfig: (value: ResamplingConfigInput) => T;
    TemporalStatisticsConfig: (value: TemporalStatisticsConfigInput) => T;
    CloudRemovalConfig: (value: CloudRemovalConfigInput) => T;
    ZonalStatisticsConfig: (value: ZonalStatisticsConfigInput) => T;
    GeoMosaicConfig: (value: GeoMosaicConfigInput) => T;
    StackConfig: (value: StackConfigInput) => T;
    CloudMaskingConfig: (value: CloudMaskingConfigInput) => T;
    LandCoverSegmentationConfig: (value: LandCoverSegmentationConfigInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A single EarthObservationJob output band.
 *
 * @public
 */
export interface OutputBand {
  /**
   * The name of the band.
   *
   * @public
   */
  BandName: string | undefined;

  /**
   * The datatype of the output band.
   *
   * @public
   */
  OutputDataType: OutputType | undefined;
}

/**
 * @public
 */
export interface GetEarthObservationJobOutput {
  /**
   * The Amazon Resource Name (ARN) of the Earth Observation job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the Earth Observation job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The creation time of the initiated Earth Observation job.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The duration of Earth Observation job, in seconds.
   *
   * @public
   */
  DurationInSeconds: number | undefined;

  /**
   * The status of a previously initiated Earth Observation job.
   *
   * @public
   */
  Status: EarthObservationJobStatus | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input data for the Earth Observation job.
   *
   * @public
   */
  InputConfig: InputConfigOutput | undefined;

  /**
   * An object containing information about the job configuration.
   *
   * @public
   */
  JobConfig: JobConfigInput | undefined;

  /**
   * Bands available in the output of an operation.
   *
   * @public
   */
  OutputBands?: OutputBand[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * Details about the errors generated during the Earth Observation job.
   *
   * @public
   */
  ErrorDetails?: EarthObservationJobErrorDetails | undefined;

  /**
   * The status of the Earth Observation job.
   *
   * @public
   */
  ExportStatus?: EarthObservationJobExportStatus | undefined;

  /**
   * Details about the errors generated during ExportEarthObservationJob.
   *
   * @public
   */
  ExportErrorDetails?: ExportErrorDetails | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTileInput {
  /**
   * The x coordinate of the tile input.
   *
   * @public
   */
  x: number | undefined;

  /**
   * The y coordinate of the tile input.
   *
   * @public
   */
  y: number | undefined;

  /**
   * The z coordinate of the tile input.
   *
   * @public
   */
  z: number | undefined;

  /**
   * The particular assets or bands to tile.
   *
   * @public
   */
  ImageAssets: string[] | undefined;

  /**
   * Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.
   *
   * @public
   */
  Target: TargetOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tile operation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Determines whether or not to return a valid data mask.
   *
   * @public
   */
  ImageMask?: boolean | undefined;

  /**
   * The data format of the output tile. The formats include .npy, .png and .jpg.
   *
   * @public
   */
  OutputFormat?: string | undefined;

  /**
   * Time range filter applied to imagery to find the images to tile.
   *
   * @public
   */
  TimeRangeFilter?: string | undefined;

  /**
   * Property filters for the imagery to tile.
   *
   * @public
   */
  PropertyFilters?: string | undefined;

  /**
   * The output data type of the tile operation.
   *
   * @public
   */
  OutputDataType?: OutputType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specify.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetTileOutput {
  /**
   * The output binary file.
   *
   * @public
   */
  BinaryFile?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface ListEarthObservationJobInput {
  /**
   * A filter that retrieves only jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: EarthObservationJobStatus | undefined;

  /**
   * An optional value that specifies whether you want the results sorted in `Ascending` or `Descending` order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The parameter by which to sort the results.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An object containing information about the output file.
 *
 * @public
 */
export interface ListEarthObservationJobOutputConfig {
  /**
   * The Amazon Resource Name (ARN) of the list of the Earth Observation jobs.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The names of the Earth Observation jobs in the list.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The duration of the session, in seconds.
   *
   * @public
   */
  DurationInSeconds: number | undefined;

  /**
   * The status of the list of the Earth Observation jobs.
   *
   * @public
   */
  Status: EarthObservationJobStatus | undefined;

  /**
   * The operation type for an Earth Observation job.
   *
   * @public
   */
  OperationType: string | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEarthObservationJobOutput {
  /**
   * Contains summary information about the Earth Observation jobs.
   *
   * @public
   */
  EarthObservationJobSummaries: ListEarthObservationJobOutputConfig[] | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for the time-range filter.
 *
 * @public
 */
export interface TimeRangeFilterInput {
  /**
   * The start time for the time-range filter.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time for the time-range filter.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * The input structure for Raster Data Collection Query containing the Area of Interest, TimeRange Filters, and Property Filters.
 *
 * @public
 */
export interface RasterDataCollectionQueryInput {
  /**
   * The Amazon Resource Name (ARN) of the raster data collection.
   *
   * @public
   */
  RasterDataCollectionArn: string | undefined;

  /**
   * The TimeRange Filter used in the RasterDataCollection Query.
   *
   * @public
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * The area of interest being queried for the raster data collection.
   *
   * @public
   */
  AreaOfInterest?: AreaOfInterest | undefined;

  /**
   * The list of Property filters used in the Raster Data Collection Query.
   *
   * @public
   */
  PropertyFilters?: PropertyFilters | undefined;
}

/**
 * Input configuration information.
 *
 * @public
 */
export interface InputConfigInput {
  /**
   * The Amazon Resource Name (ARN) of the previous Earth Observation job.
   *
   * @public
   */
  PreviousEarthObservationJobArn?: string | undefined;

  /**
   * The structure representing the RasterDataCollection Query consisting of the Area of Interest, RasterDataCollectionArn,TimeRange and Property Filters.
   *
   * @public
   */
  RasterDataCollectionQuery?: RasterDataCollectionQueryInput | undefined;
}

/**
 * @public
 */
export interface StartEarthObservationJobInput {
  /**
   * The name of the Earth Observation job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input configuration information for the Earth Observation job.
   *
   * @public
   */
  InputConfig: InputConfigInput | undefined;

  /**
   * An object containing information about the job configuration.
   *
   * @public
   */
  JobConfig: JobConfigInput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartEarthObservationJobOutput {
  /**
   * The name of the Earth Observation job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Earth Observation job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The duration of the session, in seconds.
   *
   * @public
   */
  DurationInSeconds: number | undefined;

  /**
   * The status of the Earth Observation job.
   *
   * @public
   */
  Status: EarthObservationJobStatus | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input configuration information for the Earth Observation job.
   *
   * @public
   */
  InputConfig?: InputConfigOutput | undefined;

  /**
   * An object containing information about the job configuration.
   *
   * @public
   */
  JobConfig: JobConfigInput | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StopEarthObservationJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Earth Observation job being stopped.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopEarthObservationJobOutput {}

/**
 * The Amazon S3 data for the Vector Enrichment job.
 *
 * @public
 */
export interface VectorEnrichmentJobS3Data {
  /**
   * The URL to the Amazon S3 data for the Vector Enrichment job.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * An object containing information about the output file.
 *
 * @public
 */
export interface ExportVectorEnrichmentJobOutputConfig {
  /**
   * The input structure for Amazon S3 data; representing the Amazon S3 location of the input data objects.
   *
   * @public
   */
  S3Data: VectorEnrichmentJobS3Data | undefined;
}

/**
 * @public
 */
export interface ExportVectorEnrichmentJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Output location information for exporting Vector Enrichment Job results.
   *
   * @public
   */
  OutputConfig: ExportVectorEnrichmentJobOutputConfig | undefined;
}

/**
 * @public
 */
export interface ExportVectorEnrichmentJobOutput {
  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job being exported.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role with permission to upload to the location in OutputConfig.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * The status of the results the Vector Enrichment job being exported.
   *
   * @public
   */
  ExportStatus: VectorEnrichmentJobExportStatus | undefined;

  /**
   * Output location information for exporting Vector Enrichment Job results.
   *
   * @public
   */
  OutputConfig: ExportVectorEnrichmentJobOutputConfig | undefined;
}

/**
 * The structure representing a Geometry in terms of Type and Coordinates as per GeoJson spec.
 *
 * @public
 */
export interface Geometry {
  /**
   * GeoJson Geometry types like Polygon and MultiPolygon.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The coordinates of the GeoJson Geometry.
   *
   * @public
   */
  Coordinates: number[][][] | undefined;
}

/**
 * @public
 */
export interface GetRasterDataCollectionInput {
  /**
   * The Amazon Resource Name (ARN) of the raster data collection.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRasterDataCollectionOutput {
  /**
   * The name of the raster data collection.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the raster data collection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The raster data collection type.
   *
   * @public
   */
  Type: DataCollectionType | undefined;

  /**
   * A description of the raster data collection.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The URL of the description page.
   *
   * @public
   */
  DescriptionPageUrl: string | undefined;

  /**
   * The filters supported by the raster data collection.
   *
   * @public
   */
  SupportedFilters: Filter[] | undefined;

  /**
   * The list of image source bands in the raster data collection.
   *
   * @public
   */
  ImageSourceBands: string[] | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetVectorEnrichmentJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * VectorEnrichmentJob error details in response from GetVectorEnrichmentJob.
 *
 * @public
 */
export interface VectorEnrichmentJobErrorDetails {
  /**
   * The type of error generated during the Vector Enrichment job.
   *
   * @public
   */
  ErrorType?: VectorEnrichmentJobErrorType | undefined;

  /**
   * A message that you define and then is processed and rendered by the Vector Enrichment job when the error occurs.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * VectorEnrichmentJob export error details in response from GetVectorEnrichmentJob.
 *
 * @public
 */
export interface VectorEnrichmentJobExportErrorDetails {
  /**
   * The output error details for an Export operation on a Vector Enrichment job.
   *
   * @public
   */
  Type?: VectorEnrichmentJobExportErrorType | undefined;

  /**
   * The message providing details about the errors generated during the Vector Enrichment job.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The input structure for the data source that represents the storage type of the input data objects.
 *
 * @public
 */
export type VectorEnrichmentJobDataSourceConfigInput =
  | VectorEnrichmentJobDataSourceConfigInput.S3DataMember
  | VectorEnrichmentJobDataSourceConfigInput.$UnknownMember;

/**
 * @public
 */
export namespace VectorEnrichmentJobDataSourceConfigInput {
  /**
   * The input structure for the Amazon S3 data that represents the Amazon S3 location of the input data objects.
   *
   * @public
   */
  export interface S3DataMember {
    S3Data: VectorEnrichmentJobS3Data;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3Data?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3Data: (value: VectorEnrichmentJobS3Data) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The input structure for the InputConfig in a VectorEnrichmentJob.
 *
 * @public
 */
export interface VectorEnrichmentJobInputConfig {
  /**
   * The input structure that defines the data source file type.
   *
   * @public
   */
  DocumentType: VectorEnrichmentJobDocumentType | undefined;

  /**
   * The input structure for the data source that represents the storage type of the input data objects.
   *
   * @public
   */
  DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput | undefined;
}

/**
 * The input structure for Map Matching operation type.
 *
 * @public
 */
export interface MapMatchingConfig {
  /**
   * The field name for the data that describes the identifier representing a collection of GPS points belonging to an individual trace.
   *
   * @public
   */
  IdAttributeName: string | undefined;

  /**
   * The name of the Y-attribute
   *
   * @public
   */
  YAttributeName: string | undefined;

  /**
   * The name of the X-attribute
   *
   * @public
   */
  XAttributeName: string | undefined;

  /**
   * The name of the timestamp attribute.
   *
   * @public
   */
  TimestampAttributeName: string | undefined;
}

/**
 * The input structure for Reverse Geocoding operation type.
 *
 * @public
 */
export interface ReverseGeocodingConfig {
  /**
   * The field name for the data that describes y-axis coordinate, eg. latitude of a point.
   *
   * @public
   */
  YAttributeName: string | undefined;

  /**
   * The field name for the data that describes x-axis coordinate, eg. longitude of a point.
   *
   * @public
   */
  XAttributeName: string | undefined;
}

/**
 * It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.
 *
 * @public
 */
export type VectorEnrichmentJobConfig =
  | VectorEnrichmentJobConfig.MapMatchingConfigMember
  | VectorEnrichmentJobConfig.ReverseGeocodingConfigMember
  | VectorEnrichmentJobConfig.$UnknownMember;

/**
 * @public
 */
export namespace VectorEnrichmentJobConfig {
  /**
   * The input structure for Reverse Geocoding operation type.
   *
   * @public
   */
  export interface ReverseGeocodingConfigMember {
    ReverseGeocodingConfig: ReverseGeocodingConfig;
    MapMatchingConfig?: never;
    $unknown?: never;
  }

  /**
   * The input structure for Map Matching operation type.
   *
   * @public
   */
  export interface MapMatchingConfigMember {
    ReverseGeocodingConfig?: never;
    MapMatchingConfig: MapMatchingConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ReverseGeocodingConfig?: never;
    MapMatchingConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ReverseGeocodingConfig: (value: ReverseGeocodingConfig) => T;
    MapMatchingConfig: (value: MapMatchingConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetVectorEnrichmentJobOutput {
  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The type of the Vector Enrichment job being initiated.
   *
   * @public
   */
  Type: VectorEnrichmentJobType | undefined;

  /**
   * The name of the Vector Enrichment job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The duration of the Vector Enrichment job, in seconds.
   *
   * @public
   */
  DurationInSeconds: number | undefined;

  /**
   * The status of the initiated Vector Enrichment job.
   *
   * @public
   */
  Status: VectorEnrichmentJobStatus | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input configuration information for the Vector Enrichment job.
   *
   * @public
   */
  InputConfig: VectorEnrichmentJobInputConfig | undefined;

  /**
   * An object containing information about the job configuration.
   *
   * @public
   */
  JobConfig: VectorEnrichmentJobConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Details about the errors generated during the Vector Enrichment job.
   *
   * @public
   */
  ErrorDetails?: VectorEnrichmentJobErrorDetails | undefined;

  /**
   * The export status of the Vector Enrichment job being initiated.
   *
   * @public
   */
  ExportStatus?: VectorEnrichmentJobExportStatus | undefined;

  /**
   * Details about the errors generated during the ExportVectorEnrichmentJob.
   *
   * @public
   */
  ExportErrorDetails?: VectorEnrichmentJobExportErrorDetails | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Properties associated with the Item.
 *
 * @public
 */
export interface Properties {
  /**
   * Estimate of cloud cover.
   *
   * @public
   */
  EoCloudCover?: number | undefined;

  /**
   * The angle from the sensor between nadir (straight down) and the scene center. Measured in degrees (0-90).
   *
   * @public
   */
  ViewOffNadir?: number | undefined;

  /**
   * The sun azimuth angle. From the scene center point on the ground, this is the angle between truth north and the sun. Measured clockwise in degrees (0-360).
   *
   * @public
   */
  ViewSunAzimuth?: number | undefined;

  /**
   * The sun elevation angle. The angle from the tangent of the scene center point to the sun. Measured from the horizon in degrees (-90-90). Negative values indicate the sun is below the horizon, e.g. sun elevation of -10° means the data was captured during [nautical twilight](https://www.timeanddate.com/astronomy/different-types-twilight.html).
   *
   * @public
   */
  ViewSunElevation?: number | undefined;

  /**
   * Platform property. Platform refers to the unique name of the specific platform the instrument is attached to. For satellites it is the name of the satellite, eg. landsat-8 (Landsat-8), sentinel-2a.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * Land cloud cover for Landsat Data Collection.
   *
   * @public
   */
  LandsatCloudCoverLand?: number | undefined;
}

/**
 * The structure representing the items in the response for SearchRasterDataCollection.
 *
 * @public
 */
export interface ItemSource {
  /**
   * A unique Id for the source item.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The item Geometry in GeoJson format.
   *
   * @public
   */
  Geometry: Geometry | undefined;

  /**
   * This is a dictionary of Asset Objects data associated with the Item that can be downloaded or streamed, each with a unique key.
   *
   * @public
   */
  Assets?: Record<string, AssetValue> | undefined;

  /**
   * The searchable date and time of the item, in UTC.
   *
   * @public
   */
  DateTime: Date | undefined;

  /**
   * This field contains additional properties of the item.
   *
   * @public
   */
  Properties?: Properties | undefined;
}

/**
 * @public
 */
export interface ListRasterDataCollectionsInput {
  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRasterDataCollectionsOutput {
  /**
   * Contains summary information about the raster data collection.
   *
   * @public
   */
  RasterDataCollectionSummaries: RasterDataCollectionMetadata[] | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVectorEnrichmentJobInput {
  /**
   * A filter that retrieves only jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: string | undefined;

  /**
   * An optional value that specifies whether you want the results sorted in `Ascending` or `Descending` order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The parameter by which to sort the results.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An object containing information about the output file.
 *
 * @public
 */
export interface ListVectorEnrichmentJobOutputConfig {
  /**
   * The Amazon Resource Name (ARN) of the list of the Vector Enrichment jobs.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The names of the Vector Enrichment jobs in the list.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the list of Vector Enrichment jobs.
   *
   * @public
   */
  Type: VectorEnrichmentJobType | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The duration of the session, in seconds.
   *
   * @public
   */
  DurationInSeconds: number | undefined;

  /**
   * The status of the Vector Enrichment jobs list.
   *
   * @public
   */
  Status: VectorEnrichmentJobStatus | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVectorEnrichmentJobOutput {
  /**
   * Contains summary information about the Vector Enrichment jobs.
   *
   * @public
   */
  VectorEnrichmentJobSummaries: ListVectorEnrichmentJobOutputConfig[] | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters.
 *
 * @public
 */
export interface RasterDataCollectionQueryWithBandFilterInput {
  /**
   * The TimeRange Filter used in the search query.
   *
   * @public
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * The Area of interest to be used in the search query.
   *
   * @public
   */
  AreaOfInterest?: AreaOfInterest | undefined;

  /**
   * The Property Filters used in the search query.
   *
   * @public
   */
  PropertyFilters?: PropertyFilters | undefined;

  /**
   * The list of Bands to be displayed in the result for each item.
   *
   * @public
   */
  BandFilter?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchRasterDataCollectionInput {
  /**
   * The Amazon Resource Name (ARN) of the raster data collection.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * RasterDataCollectionQuery consisting of [AreaOfInterest(AOI)](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_AreaOfInterest.html), [PropertyFilters](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_PropertyFilter.html) and [TimeRangeFilterInput](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_TimeRangeFilterInput.html) used in [SearchRasterDataCollection](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_SearchRasterDataCollection.html).
   *
   * @public
   */
  RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchRasterDataCollectionOutput {
  /**
   * Approximate number of results in the response.
   *
   * @public
   */
  ApproximateResultCount: number | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of items matching the Raster DataCollectionQuery.
   *
   * @public
   */
  Items?: ItemSource[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to untag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Keys of the tags you want to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface StartVectorEnrichmentJobInput {
  /**
   * The name of the Vector Enrichment job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input configuration information for the Vector Enrichment job.
   *
   * @public
   */
  InputConfig: VectorEnrichmentJobInputConfig | undefined;

  /**
   * An object containing information about the job configuration.
   *
   * @public
   */
  JobConfig: VectorEnrichmentJobConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartVectorEnrichmentJobOutput {
  /**
   * The name of the Vector Enrichment job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The type of the Vector Enrichment job.
   *
   * @public
   */
  Type: VectorEnrichmentJobType | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The duration of the Vector Enrichment job, in seconds.
   *
   * @public
   */
  DurationInSeconds: number | undefined;

  /**
   * The status of the Vector Enrichment job being started.
   *
   * @public
   */
  Status: VectorEnrichmentJobStatus | undefined;

  /**
   * The Key Management Service key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Input configuration information for starting the Vector Enrichment job.
   *
   * @public
   */
  InputConfig: VectorEnrichmentJobInputConfig | undefined;

  /**
   * An object containing information about the job configuration.
   *
   * @public
   */
  JobConfig: VectorEnrichmentJobConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * Each tag consists of a key and a value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StopVectorEnrichmentJobInput {
  /**
   * The Amazon Resource Name (ARN) of the Vector Enrichment job.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopVectorEnrichmentJobOutput {}
