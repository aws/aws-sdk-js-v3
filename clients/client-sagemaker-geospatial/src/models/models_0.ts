// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { Readable } from "stream";

import { SageMakerGeospatialServiceException as __BaseException } from "./SageMakerGeospatialServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AlgorithmNameCloudRemoval = {
  /**
   * INTERPOLATION
   */
  INTERPOLATION: "INTERPOLATION",
} as const;

/**
 * @public
 */
export type AlgorithmNameCloudRemoval = (typeof AlgorithmNameCloudRemoval)[keyof typeof AlgorithmNameCloudRemoval];

/**
 * @public
 * @enum
 */
export const AlgorithmNameGeoMosaic = {
  /**
   * AVERAGE
   */
  AVERAGE: "AVERAGE",
  /**
   * BILINEAR
   */
  BILINEAR: "BILINEAR",
  /**
   * CUBIC
   */
  CUBIC: "CUBIC",
  /**
   * CUBICSPLINE
   */
  CUBICSPLINE: "CUBICSPLINE",
  /**
   * LANCZOS
   */
  LANCZOS: "LANCZOS",
  /**
   * MAX
   */
  MAX: "MAX",
  /**
   * MED
   */
  MED: "MED",
  /**
   * MIN
   */
  MIN: "MIN",
  /**
   * MODE
   */
  MODE: "MODE",
  /**
   * NEAR
   */
  NEAR: "NEAR",
  /**
   * Q1
   */
  Q1: "Q1",
  /**
   * Q3
   */
  Q3: "Q3",
  /**
   * RMS
   */
  RMS: "RMS",
  /**
   * SUM
   */
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type AlgorithmNameGeoMosaic = (typeof AlgorithmNameGeoMosaic)[keyof typeof AlgorithmNameGeoMosaic];

/**
 * @public
 * @enum
 */
export const AlgorithmNameResampling = {
  /**
   * AVERAGE
   */
  AVERAGE: "AVERAGE",
  /**
   * BILINEAR
   */
  BILINEAR: "BILINEAR",
  /**
   * CUBIC
   */
  CUBIC: "CUBIC",
  /**
   * CUBICSPLINE
   */
  CUBICSPLINE: "CUBICSPLINE",
  /**
   * LANCZOS
   */
  LANCZOS: "LANCZOS",
  /**
   * MAX
   */
  MAX: "MAX",
  /**
   * MED
   */
  MED: "MED",
  /**
   * MIN
   */
  MIN: "MIN",
  /**
   * MODE
   */
  MODE: "MODE",
  /**
   * NEAR
   */
  NEAR: "NEAR",
  /**
   * Q1
   */
  Q1: "Q1",
  /**
   * Q3
   */
  Q3: "Q3",
  /**
   * RMS
   */
  RMS: "RMS",
  /**
   * SUM
   */
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type AlgorithmNameResampling = (typeof AlgorithmNameResampling)[keyof typeof AlgorithmNameResampling];

/**
 * @public
 * <p>The structure representing Polygon Geometry based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>.</p>
 */
export interface MultiPolygonGeometryInput {
  /**
   * <p>The coordinates of the multipolygon geometry.</p>
   */
  Coordinates: number[][][][] | undefined;
}

/**
 * @public
 * <p>The structure representing Polygon Geometry based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>.</p>
 */
export interface PolygonGeometryInput {
  /**
   * <p>Coordinates representing a Polygon based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>.</p>
   */
  Coordinates: number[][][] | undefined;
}

/**
 * @public
 * <p>A GeoJSON object representing the geographic extent in the coordinate space.</p>
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
   * <p>The structure representing Polygon Geometry.</p>
   */
  export interface PolygonGeometryMember {
    PolygonGeometry: PolygonGeometryInput;
    MultiPolygonGeometry?: never;
    $unknown?: never;
  }

  /**
   * <p>The structure representing the MultiPolygon Geometry.</p>
   */
  export interface MultiPolygonGeometryMember {
    PolygonGeometry?: never;
    MultiPolygonGeometry: MultiPolygonGeometryInput;
    $unknown?: never;
  }

  export interface $UnknownMember {
    PolygonGeometry?: never;
    MultiPolygonGeometry?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PolygonGeometry: (value: PolygonGeometryInput) => T;
    MultiPolygonGeometry: (value: MultiPolygonGeometryInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AreaOfInterestGeometry, visitor: Visitor<T>): T => {
    if (value.PolygonGeometry !== undefined) return visitor.PolygonGeometry(value.PolygonGeometry);
    if (value.MultiPolygonGeometry !== undefined) return visitor.MultiPolygonGeometry(value.MultiPolygonGeometry);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The geographic extent of the Earth Observation job.</p>
 */
export type AreaOfInterest = AreaOfInterest.AreaOfInterestGeometryMember | AreaOfInterest.$UnknownMember;

/**
 * @public
 */
export namespace AreaOfInterest {
  /**
   * <p>A GeoJSON object representing the geographic extent in the coordinate space.</p>
   */
  export interface AreaOfInterestGeometryMember {
    AreaOfInterestGeometry: AreaOfInterestGeometry;
    $unknown?: never;
  }

  export interface $UnknownMember {
    AreaOfInterestGeometry?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AreaOfInterestGeometry: (value: AreaOfInterestGeometry) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AreaOfInterest, visitor: Visitor<T>): T => {
    if (value.AreaOfInterestGeometry !== undefined) return visitor.AreaOfInterestGeometry(value.AreaOfInterestGeometry);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The structure containing the asset properties.</p>
 */
export interface AssetValue {
  /**
   * <p>Link to the asset object.</p>
   */
  Href?: string;
}

/**
 * @public
 * @enum
 */
export const OutputType = {
  /**
   * FLOAT32
   */
  FLOAT32: "FLOAT32",
  /**
   * FLOAT64
   */
  FLOAT64: "FLOAT64",
  /**
   * INT16
   */
  INT16: "INT16",
  /**
   * INT32
   */
  INT32: "INT32",
  /**
   * UINT16
   */
  UINT16: "UINT16",
} as const;

/**
 * @public
 */
export type OutputType = (typeof OutputType)[keyof typeof OutputType];

/**
 * @public
 * <p>Represents an arithmetic operation to compute spectral index.</p>
 */
export interface Operation {
  /**
   * <p>The name of the operation.</p>
   */
  Name: string | undefined;

  /**
   * <p>Textual representation of the math operation; Equation used to compute the spectral index.</p>
   */
  Equation: string | undefined;

  /**
   * <p>The type of the operation.</p>
   */
  OutputType?: OutputType | string;
}

/**
 * @public
 * <p>Input object defining the custom BandMath indices to compute.</p>
 */
export interface CustomIndicesInput {
  /**
   * <p>A list of BandMath indices to compute.</p>
   */
  Operations?: Operation[];
}

/**
 * @public
 * <p>Input structure for the BandMath operation type.
 *       Defines Predefined and CustomIndices to be computed using BandMath.</p>
 */
export interface BandMathConfigInput {
  /**
   * <p>One or many of the supported predefined indices to compute.
   *       Allowed values: <code>NDVI</code>, <code>EVI2</code>, <code>MSAVI</code>,
   *       <code>NDWI</code>, <code>NDMI</code>, <code>NDSI</code>, and <code>WDRVI</code>.</p>
   */
  PredefinedIndices?: string[];

  /**
   * <p>CustomIndices that are computed.</p>
   */
  CustomIndices?: CustomIndicesInput;
}

/**
 * @public
 * <p>Input structure for CloudMasking operation type.</p>
 */
export interface CloudMaskingConfigInput {}

/**
 * @public
 * <p>Input structure for Cloud Removal Operation type</p>
 */
export interface CloudRemovalConfigInput {
  /**
   * <p>The name of the algorithm used for cloud removal.</p>
   */
  AlgorithmName?: AlgorithmNameCloudRemoval | string;

  /**
   * <p>The interpolation value you provide for cloud removal.</p>
   */
  InterpolationValue?: string;

  /**
   * <p>TargetBands to be returned in the output of CloudRemoval operation.</p>
   */
  TargetBands?: string[];
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  /**
   * EQUALS
   */
  EQUALS: "EQUALS",
  /**
   * NOT_EQUALS
   */
  NOT_EQUALS: "NOT_EQUALS",
  /**
   * STARTS_WITH
   */
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 * <p>The structure representing the filters supported by a RasterDataCollection.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the filter being used.</p>
   */
  Type: string | undefined;

  /**
   * <p>The minimum value of the filter.</p>
   */
  Minimum?: number;

  /**
   * <p>The maximum value of the filter.</p>
   */
  Maximum?: number;
}

/**
 * @public
 * @enum
 */
export const DataCollectionType = {
  /**
   * PREMIUM
   */
  PREMIUM: "PREMIUM",
  /**
   * PUBLIC
   */
  PUBLIC: "PUBLIC",
  /**
   * USER
   */
  USER: "USER",
} as const;

/**
 * @public
 */
export type DataCollectionType = (typeof DataCollectionType)[keyof typeof DataCollectionType];

/**
 * @public
 * <p>Response object containing details for a specific RasterDataCollection.</p>
 */
export interface RasterDataCollectionMetadata {
  /**
   * <p>The name of the raster data collection.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of raster data collection.</p>
   */
  Type: DataCollectionType | string | undefined;

  /**
   * <p>A description of the raster data collection.</p>
   */
  Description: string | undefined;

  /**
   * <p>The description URL of the raster data collection.</p>
   */
  DescriptionPageUrl?: string;

  /**
   * <p>The list of filters supported by the raster data collection.</p>
   */
  SupportedFilters: Filter[] | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteEarthObservationJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job being deleted.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEarthObservationJobOutput {}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 * <p>The request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Identifier of the resource that was not found.</p>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 */
export interface DeleteVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVectorEnrichmentJobOutput {}

/**
 * @public
 * <p>The structure containing the Amazon S3 path to export the Earth Observation job output.</p>
 */
export interface ExportS3DataInput {
  /**
   * <p>The URL to the Amazon S3 data input.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>The response structure for an OutputConfig returned by an ExportEarthObservationJob.</p>
 */
export interface OutputConfigInput {
  /**
   * <p>Path to Amazon S3 storage location for the output configuration file.</p>
   */
  S3Data: ExportS3DataInput | undefined;
}

/**
 * @public
 */
export interface ExportEarthObservationJobInput {
  /**
   * <p>The input Amazon Resource Name (ARN) of the Earth Observation job being exported.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: OutputConfigInput | undefined;

  /**
   * <p>The source images provided to the Earth Observation job being exported.</p>
   */
  ExportSourceImages?: boolean;
}

/**
 * @public
 * @enum
 */
export const EarthObservationJobExportStatus = {
  /**
   * FAILED
   */
  FAILED: "FAILED",
  /**
   * IN_PROGRESS
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * SUCCEEDED
   */
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type EarthObservationJobExportStatus =
  (typeof EarthObservationJobExportStatus)[keyof typeof EarthObservationJobExportStatus];

/**
 * @public
 */
export interface ExportEarthObservationJobOutput {
  /**
   * <p>The output Amazon Resource Name (ARN) of the Earth Observation job being exported.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the results of the Earth Observation job being exported.</p>
   */
  ExportStatus: EarthObservationJobExportStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: OutputConfigInput | undefined;

  /**
   * <p>The source images provided to the Earth Observation job being exported.</p>
   */
  ExportSourceImages?: boolean;
}

/**
 * @public
 * <p>You have exceeded the service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * @public
 */
export interface GetEarthObservationJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EarthObservationJobErrorType = {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR: "SERVER_ERROR",
} as const;

/**
 * @public
 */
export type EarthObservationJobErrorType =
  (typeof EarthObservationJobErrorType)[keyof typeof EarthObservationJobErrorType];

/**
 * @public
 * <p>The structure representing the errors in an EarthObservationJob.</p>
 */
export interface EarthObservationJobErrorDetails {
  /**
   * <p>The type of error in an Earth Observation job.</p>
   */
  Type?: EarthObservationJobErrorType | string;

  /**
   * <p>A detailed message describing the error in an Earth Observation job.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const ExportErrorType = {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR: "SERVER_ERROR",
} as const;

/**
 * @public
 */
export type ExportErrorType = (typeof ExportErrorType)[keyof typeof ExportErrorType];

/**
 * @public
 * <p>The structure representing the errors in an export EarthObservationJob operation.</p>
 */
export interface ExportErrorDetailsOutput {
  /**
   * <p>The type of error in an export EarthObservationJob operation.</p>
   */
  Type?: ExportErrorType | string;

  /**
   * <p>A detailed message describing the error in an export EarthObservationJob operation.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The structure for returning the export error details in a GetEarthObservationJob.</p>
 */
export interface ExportErrorDetails {
  /**
   * <p>The structure for returning the export error details while exporting results of an Earth Observation job.</p>
   */
  ExportResults?: ExportErrorDetailsOutput;

  /**
   * <p>The structure for returning the export error details
   *       while exporting the source images of an Earth Observation job.</p>
   */
  ExportSourceImages?: ExportErrorDetailsOutput;
}

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  /**
   * AND
   */
  AND: "AND",
} as const;

/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 * <p>The structure representing the EoCloudCover filter.</p>
 */
export interface EoCloudCoverInput {
  /**
   * <p>Lower bound for EoCloudCover.</p>
   */
  LowerBound: number | undefined;

  /**
   * <p>Upper bound for EoCloudCover.</p>
   */
  UpperBound: number | undefined;
}

/**
 * @public
 * <p>The structure representing Land Cloud Cover property for Landsat data collection.</p>
 */
export interface LandsatCloudCoverLandInput {
  /**
   * <p>The minimum value for Land Cloud Cover property filter. This will filter items
   *       having Land Cloud Cover greater than or equal to this value.</p>
   */
  LowerBound: number | undefined;

  /**
   * <p>The maximum value for Land Cloud Cover property filter.
   *       This will filter items having Land Cloud Cover less than or equal to this value.</p>
   */
  UpperBound: number | undefined;
}

/**
 * @public
 * <p>The input structure for specifying Platform.
 *       Platform refers to the unique name of the specific platform the
 *       instrument is attached to. For satellites it is the name of the satellite, eg. landsat-8 (Landsat-8), sentinel-2a.</p>
 */
export interface PlatformInput {
  /**
   * <p>The value of the platform.</p>
   */
  Value: string | undefined;

  /**
   * <p>The ComparisonOperator to use with PlatformInput.</p>
   */
  ComparisonOperator?: ComparisonOperator | string;
}

/**
 * @public
 * <p>The input structure for specifying ViewOffNadir property filter.
 *       ViewOffNadir refers to the angle from the sensor between
 *       nadir (straight down) and the scene center. Measured in degrees (0-90).</p>
 */
export interface ViewOffNadirInput {
  /**
   * <p>The minimum value for ViewOffNadir property filter.
   *       This filters items having ViewOffNadir greater than or equal to this value. </p>
   */
  LowerBound: number | undefined;

  /**
   * <p>The maximum value for ViewOffNadir property filter.
   *       This filters items having ViewOffNadir lesser than or equal to this value.</p>
   */
  UpperBound: number | undefined;
}

/**
 * @public
 * <p>The input structure for specifying ViewSunAzimuth property filter.
 *       ViewSunAzimuth refers to the Sun azimuth angle.
 *       From the scene center point on the ground,
 *       this is the angle between truth north and the sun.
 *       Measured clockwise in degrees (0-360).</p>
 */
export interface ViewSunAzimuthInput {
  /**
   * <p>The minimum value for ViewSunAzimuth property filter.
   *       This filters items having ViewSunAzimuth greater than or equal to this value.</p>
   */
  LowerBound: number | undefined;

  /**
   * <p>The maximum value for ViewSunAzimuth property filter.
   *       This filters items having ViewSunAzimuth lesser than or equal to this value.</p>
   */
  UpperBound: number | undefined;
}

/**
 * @public
 * <p>The input structure for specifying ViewSunElevation angle property filter. </p>
 */
export interface ViewSunElevationInput {
  /**
   * <p>The lower bound to view the sun elevation.</p>
   */
  LowerBound: number | undefined;

  /**
   * <p>The upper bound to view the sun elevation.</p>
   */
  UpperBound: number | undefined;
}

/**
 * @public
 * <p>Represents a single searchable property to search on.</p>
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
   * <p>The structure representing EoCloudCover property filter containing a lower bound and upper bound.</p>
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
   * <p>The structure representing ViewOffNadir property filter containing a lower bound and upper bound.</p>
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
   * <p>The structure representing ViewSunAzimuth property filter containing a lower bound and upper bound.</p>
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
   * <p>The structure representing ViewSunElevation property filter containing a lower bound and upper bound.</p>
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
   * <p>The structure representing Platform property filter consisting of value and comparison operator.</p>
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
   * <p>The structure representing Land Cloud Cover property filter
   *       for Landsat collection containing a lower bound and upper bound.</p>
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

  export interface $UnknownMember {
    EoCloudCover?: never;
    ViewOffNadir?: never;
    ViewSunAzimuth?: never;
    ViewSunElevation?: never;
    Platform?: never;
    LandsatCloudCoverLand?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    EoCloudCover: (value: EoCloudCoverInput) => T;
    ViewOffNadir: (value: ViewOffNadirInput) => T;
    ViewSunAzimuth: (value: ViewSunAzimuthInput) => T;
    ViewSunElevation: (value: ViewSunElevationInput) => T;
    Platform: (value: PlatformInput) => T;
    LandsatCloudCoverLand: (value: LandsatCloudCoverLandInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Property, visitor: Visitor<T>): T => {
    if (value.EoCloudCover !== undefined) return visitor.EoCloudCover(value.EoCloudCover);
    if (value.ViewOffNadir !== undefined) return visitor.ViewOffNadir(value.ViewOffNadir);
    if (value.ViewSunAzimuth !== undefined) return visitor.ViewSunAzimuth(value.ViewSunAzimuth);
    if (value.ViewSunElevation !== undefined) return visitor.ViewSunElevation(value.ViewSunElevation);
    if (value.Platform !== undefined) return visitor.Platform(value.Platform);
    if (value.LandsatCloudCoverLand !== undefined) return visitor.LandsatCloudCoverLand(value.LandsatCloudCoverLand);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The structure representing a single PropertyFilter.</p>
 */
export interface PropertyFilter {
  /**
   * <p>Represents a single property to match with when searching a raster data collection.</p>
   */
  Property: Property | undefined;
}

/**
 * @public
 * <p>A list of PropertyFilter objects.</p>
 */
export interface PropertyFilters {
  /**
   * <p>A list of Property Filters.</p>
   */
  Properties?: PropertyFilter[];

  /**
   * <p>The Logical Operator used to combine the Property Filters.</p>
   */
  LogicalOperator?: LogicalOperator | string;
}

/**
 * @public
 * <p>The output structure of the time range filter.</p>
 */
export interface TimeRangeFilterOutput {
  /**
   * <p>The starting time for the time range filter.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The ending time for the time range filter.</p>
   */
  EndTime: Date | undefined;
}

/**
 * @public
 * <p>The output structure contains the Raster Data Collection Query
 *       input along with some additional metadata.</p>
 */
export interface RasterDataCollectionQueryOutput {
  /**
   * <p>The ARN of the Raster Data Collection against which the search is done.</p>
   */
  RasterDataCollectionArn: string | undefined;

  /**
   * <p>The name of the raster data collection.</p>
   */
  RasterDataCollectionName: string | undefined;

  /**
   * <p>The TimeRange filter used in the search.</p>
   */
  TimeRangeFilter: TimeRangeFilterOutput | undefined;

  /**
   * <p>The Area of Interest used in the search.</p>
   */
  AreaOfInterest?: AreaOfInterest;

  /**
   * <p>Property filters used in the search.</p>
   */
  PropertyFilters?: PropertyFilters;
}

/**
 * @public
 * <p>The InputConfig for an EarthObservationJob response.</p>
 */
export interface InputConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the previous Earth Observation job.</p>
   */
  PreviousEarthObservationJobArn?: string;

  /**
   * <p>The structure representing the RasterDataCollection Query consisting of the Area of Interest,
   *       RasterDataCollectionArn, RasterDataCollectionName, TimeRange, and Property Filters.</p>
   */
  RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
}

/**
 * @public
 * <p>Input configuration information for the geomosaic.</p>
 */
export interface GeoMosaicConfigInput {
  /**
   * <p>The name of the algorithm being used for geomosaic.</p>
   */
  AlgorithmName?: AlgorithmNameGeoMosaic | string;

  /**
   * <p>The target bands for geomosaic.</p>
   */
  TargetBands?: string[];
}

/**
 * @public
 * <p>The input structure for Land Cover Operation type.</p>
 */
export interface LandCoverSegmentationConfigInput {}

/**
 * @public
 * @enum
 */
export const Unit = {
  /**
   * METERS
   */
  METERS: "METERS",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * <p>The output resolution (in target georeferenced units)
 *       of the result of the operation</p>
 */
export interface UserDefined {
  /**
   * <p>The value for output resolution of the result.</p>
   */
  Value: number | undefined;

  /**
   * <p>The units for output resolution of the result.</p>
   */
  Unit: Unit | string | undefined;
}

/**
 * @public
 * <p>OutputResolution Configuration indicating
 *       the target resolution for the output of Resampling operation.</p>
 */
export interface OutputResolutionResamplingInput {
  /**
   * <p>User Defined Resolution for the output
   *       of Resampling operation defined by value and unit.</p>
   */
  UserDefined: UserDefined | undefined;
}

/**
 * @public
 * <p>The structure representing input for resampling operation.</p>
 */
export interface ResamplingConfigInput {
  /**
   * <p>The structure representing output
   *       resolution (in target georeferenced units) of the result of resampling operation.</p>
   */
  OutputResolution: OutputResolutionResamplingInput | undefined;

  /**
   * <p>The name of the algorithm used for resampling.</p>
   */
  AlgorithmName?: AlgorithmNameResampling | string;

  /**
   * <p>Bands used in the operation. If no target bands are specified, it uses all bands available in the input.</p>
   */
  TargetBands?: string[];
}

/**
 * @public
 * @enum
 */
export const PredefinedResolution = {
  /**
   * AVERAGE
   */
  AVERAGE: "AVERAGE",
  /**
   * HIGHEST
   */
  HIGHEST: "HIGHEST",
  /**
   * LOWEST
   */
  LOWEST: "LOWEST",
} as const;

/**
 * @public
 */
export type PredefinedResolution = (typeof PredefinedResolution)[keyof typeof PredefinedResolution];

/**
 * @public
 * <p>The input structure representing Output Resolution for Stacking Operation.</p>
 */
export interface OutputResolutionStackInput {
  /**
   * <p>A string value representing Predefined Output Resolution for a stacking operation. Allowed values are <code>HIGHEST</code>, <code>LOWEST</code>, and <code>AVERAGE</code>.</p>
   */
  Predefined?: PredefinedResolution | string;

  /**
   * <p>The structure representing User Output Resolution for a Stacking operation defined as a value and unit.</p>
   */
  UserDefined?: UserDefined;
}

/**
 * @public
 * <p>The input structure for Stacking Operation.</p>
 */
export interface StackConfigInput {
  /**
   * <p>The structure representing output
   *       resolution (in target georeferenced units) of the
   *       result of stacking operation.</p>
   */
  OutputResolution?: OutputResolutionStackInput;

  /**
   * <p>A list of bands to be stacked in the specified order. When the parameter is not provided, all the available bands in the data collection are stacked in the alphabetical order of their asset names.</p>
   */
  TargetBands?: string[];
}

/**
 * @public
 * @enum
 */
export const GroupBy = {
  /**
   * ALL
   */
  ALL: "ALL",
  /**
   * YEARLY
   */
  YEARLY: "YEARLY",
} as const;

/**
 * @public
 */
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy];

/**
 * @public
 * @enum
 */
export const TemporalStatistics = {
  /**
   * MEAN
   */
  MEAN: "MEAN",
  /**
   * MEDIAN
   */
  MEDIAN: "MEDIAN",
  /**
   * STANDARD_DEVIATION
   */
  STANDARD_DEVIATION: "STANDARD_DEVIATION",
} as const;

/**
 * @public
 */
export type TemporalStatistics = (typeof TemporalStatistics)[keyof typeof TemporalStatistics];

/**
 * @public
 * <p>The structure representing the configuration for Temporal Statistics operation.</p>
 */
export interface TemporalStatisticsConfigInput {
  /**
   * <p>The input for the temporal statistics grouping by time frequency option.</p>
   */
  GroupBy?: GroupBy | string;

  /**
   * <p>The list of the statistics method options.</p>
   */
  Statistics: (TemporalStatistics | string)[] | undefined;

  /**
   * <p>The list of target band names for the temporal statistic to calculate.</p>
   */
  TargetBands?: string[];
}

/**
 * @public
 * @enum
 */
export const ZonalStatistics = {
  /**
   * MAX
   */
  MAX: "MAX",
  /**
   * MEAN
   */
  MEAN: "MEAN",
  /**
   * MEDIAN
   */
  MEDIAN: "MEDIAN",
  /**
   * MIN
   */
  MIN: "MIN",
  /**
   * STANDARD_DEVIATION
   */
  STANDARD_DEVIATION: "STANDARD_DEVIATION",
  /**
   * SUM
   */
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type ZonalStatistics = (typeof ZonalStatistics)[keyof typeof ZonalStatistics];

/**
 * @public
 * <p>The structure representing input configuration of ZonalStatistics operation.</p>
 */
export interface ZonalStatisticsConfigInput {
  /**
   * <p>The Amazon S3 path pointing to the GeoJSON containing the polygonal zones.</p>
   */
  ZoneS3Path: string | undefined;

  /**
   * <p>List of zonal statistics to compute.</p>
   */
  Statistics: (ZonalStatistics | string)[] | undefined;

  /**
   * <p>Bands used in the operation.
   *       If no target bands are specified, it uses all bands available input.</p>
   */
  TargetBands?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) or an ID of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to decrypt your output artifacts with Amazon S3 server-side encryption.
   * The SageMaker execution role must have <code>kms:GenerateDataKey</code> permission.</p>
   *          <p>The <code>KmsKeyId</code> can be any of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>// KMS Key ID</p>
   *                <p>
   *                   <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                <p>
   *                   <code>"arn:aws:kms:&lt;region&gt;:&lt;account&gt;:key/&lt;key-id-12ab-34cd-56ef-1234567890ab&gt;"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about key identifiers, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id">Key identifiers (KeyID)</a> in the
   * Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.</p>
   */
  ZoneS3PathKmsKeyId?: string;
}

/**
 * @public
 * <p>The input structure for the JobConfig in an EarthObservationJob.</p>
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
   * <p>An object containing information about the job configuration for BandMath.</p>
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
   * <p>An object containing information about the job configuration for resampling.</p>
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
   * <p>An object containing information about the job configuration for temporal statistics.</p>
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
   * <p>An object containing information about the job configuration for cloud removal.</p>
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
   * <p>An object containing information about the job configuration for zonal statistics.</p>
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
   * <p>An object containing information about the job configuration for geomosaic.</p>
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
   * <p>An object containing information about the job configuration for a Stacking Earth Observation job.</p>
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
   * <p>An object containing information about the job configuration for cloud masking.</p>
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
   * <p>An object containing information about the job configuration for land cover segmentation.</p>
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

  export const visit = <T>(value: JobConfigInput, visitor: Visitor<T>): T => {
    if (value.BandMathConfig !== undefined) return visitor.BandMathConfig(value.BandMathConfig);
    if (value.ResamplingConfig !== undefined) return visitor.ResamplingConfig(value.ResamplingConfig);
    if (value.TemporalStatisticsConfig !== undefined)
      return visitor.TemporalStatisticsConfig(value.TemporalStatisticsConfig);
    if (value.CloudRemovalConfig !== undefined) return visitor.CloudRemovalConfig(value.CloudRemovalConfig);
    if (value.ZonalStatisticsConfig !== undefined) return visitor.ZonalStatisticsConfig(value.ZonalStatisticsConfig);
    if (value.GeoMosaicConfig !== undefined) return visitor.GeoMosaicConfig(value.GeoMosaicConfig);
    if (value.StackConfig !== undefined) return visitor.StackConfig(value.StackConfig);
    if (value.CloudMaskingConfig !== undefined) return visitor.CloudMaskingConfig(value.CloudMaskingConfig);
    if (value.LandCoverSegmentationConfig !== undefined)
      return visitor.LandCoverSegmentationConfig(value.LandCoverSegmentationConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A single EarthObservationJob output band.</p>
 */
export interface OutputBand {
  /**
   * <p>The name of the band.</p>
   */
  BandName: string | undefined;

  /**
   * <p>The datatype of the output band.</p>
   */
  OutputDataType: OutputType | string | undefined;
}

/**
 * @public
 * @enum
 */
export const EarthObservationJobStatus = {
  /**
   * COMPLETED
   */
  COMPLETED: "COMPLETED",
  /**
   * DELETED
   */
  DELETED: "DELETED",
  /**
   * DELETING
   */
  DELETING: "DELETING",
  /**
   * FAILED
   */
  FAILED: "FAILED",
  /**
   * INITIALIZING
   */
  INITIALIZING: "INITIALIZING",
  /**
   * IN_PROGRESS
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * STOPPED
   */
  STOPPED: "STOPPED",
  /**
   * STOPPING
   */
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type EarthObservationJobStatus = (typeof EarthObservationJobStatus)[keyof typeof EarthObservationJobStatus];

/**
 * @public
 */
export interface GetEarthObservationJobOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the Earth Observation job.</p>
   */
  Name: string | undefined;

  /**
   * <p>The creation time of the initiated Earth Observation job.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The duration of Earth Observation job, in seconds.</p>
   */
  DurationInSeconds: number | undefined;

  /**
   * <p>The status of a previously initiated Earth Observation job.</p>
   */
  Status: EarthObservationJobStatus | string | undefined;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Input data for the Earth Observation job.</p>
   */
  InputConfig: InputConfigOutput | undefined;

  /**
   * <p>An object containing information about the job configuration.</p>
   */
  JobConfig: JobConfigInput | undefined;

  /**
   * <p>Bands available in the output of an operation.</p>
   */
  OutputBands?: OutputBand[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Details about the errors generated during the Earth Observation job.</p>
   */
  ErrorDetails?: EarthObservationJobErrorDetails;

  /**
   * <p>The status of the Earth Observation job.</p>
   */
  ExportStatus?: EarthObservationJobExportStatus | string;

  /**
   * <p>Details about the errors generated during ExportEarthObservationJob.</p>
   */
  ExportErrorDetails?: ExportErrorDetails;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const TargetOptions = {
  /**
   * INPUT
   */
  INPUT: "INPUT",
  /**
   * OUTPUT
   */
  OUTPUT: "OUTPUT",
} as const;

/**
 * @public
 */
export type TargetOptions = (typeof TargetOptions)[keyof typeof TargetOptions];

/**
 * @public
 */
export interface GetTileInput {
  /**
   * <p>The x coordinate of the tile input.</p>
   */
  x: number | undefined;

  /**
   * <p>The y coordinate of the tile input.</p>
   */
  y: number | undefined;

  /**
   * <p>The z coordinate of the tile input.</p>
   */
  z: number | undefined;

  /**
   * <p>The particular assets or bands to tile.</p>
   */
  ImageAssets: string[] | undefined;

  /**
   * <p>Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.</p>
   */
  Target: TargetOptions | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the tile operation.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Determines whether or not to return a valid data mask.</p>
   */
  ImageMask?: boolean;

  /**
   * <p>The data format of the output tile. The formats include .npy, .png and .jpg.</p>
   */
  OutputFormat?: string;

  /**
   * <p>Time range filter applied to imagery to find the images to tile.</p>
   */
  TimeRangeFilter?: string;

  /**
   * <p>Property filters for the imagery to tile.</p>
   */
  PropertyFilters?: string;

  /**
   * <p>The output data type of the tile operation.</p>
   */
  OutputDataType?: OutputType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specify.</p>
   */
  ExecutionRoleArn?: string;
}

/**
 * @public
 */
export interface GetTileOutput {
  /**
   * <p>The output binary file.</p>
   */
  BinaryFile?: Readable | ReadableStream | Blob;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  /**
   * ASCENDING
   */
  ASCENDING: "ASCENDING",
  /**
   * DESCENDING
   */
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListEarthObservationJobInput {
  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: EarthObservationJobStatus | string;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results.</p>
   */
  SortBy?: string;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An object containing information about the output file.</p>
 */
export interface ListEarthObservationJobOutputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the list of the Earth Observation jobs.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The names of the Earth Observation jobs in the list.</p>
   */
  Name: string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The duration of the session, in seconds.</p>
   */
  DurationInSeconds: number | undefined;

  /**
   * <p>The status of the list of the Earth Observation jobs.</p>
   */
  Status: EarthObservationJobStatus | string | undefined;

  /**
   * <p>The operation type for an Earth Observation job.</p>
   */
  OperationType: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListEarthObservationJobOutput {
  /**
   * <p>Contains summary information about the Earth Observation jobs.</p>
   */
  EarthObservationJobSummaries: ListEarthObservationJobOutputConfig[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for the time-range filter.</p>
 */
export interface TimeRangeFilterInput {
  /**
   * <p>The start time for the time-range filter.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time for the time-range filter.</p>
   */
  EndTime: Date | undefined;
}

/**
 * @public
 * <p>The input structure for Raster Data Collection Query containing the Area of Interest, TimeRange Filters, and Property Filters.</p>
 */
export interface RasterDataCollectionQueryInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  RasterDataCollectionArn: string | undefined;

  /**
   * <p>The TimeRange Filter used in the RasterDataCollection Query.</p>
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * <p>The area of interest being queried for the raster data collection.</p>
   */
  AreaOfInterest?: AreaOfInterest;

  /**
   * <p>The list of Property filters used in the Raster Data Collection Query.</p>
   */
  PropertyFilters?: PropertyFilters;
}

/**
 * @public
 * <p>Input configuration information.</p>
 */
export interface InputConfigInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the previous Earth Observation job.</p>
   */
  PreviousEarthObservationJobArn?: string;

  /**
   * <p>The structure representing the RasterDataCollection Query consisting of
   *       the Area of Interest, RasterDataCollectionArn,TimeRange and Property Filters.</p>
   */
  RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
}

/**
 * @public
 */
export interface StartEarthObservationJobInput {
  /**
   * <p>The name of the Earth Observation job.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Input configuration information for the Earth Observation job.</p>
   */
  InputConfig: InputConfigInput | undefined;

  /**
   * <p>An object containing information about the job configuration.</p>
   */
  JobConfig: JobConfigInput | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartEarthObservationJobOutput {
  /**
   * <p>The name of the Earth Observation job.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The duration of the session, in seconds.</p>
   */
  DurationInSeconds: number | undefined;

  /**
   * <p>The status of the Earth Observation job.</p>
   */
  Status: EarthObservationJobStatus | string | undefined;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Input configuration information for the Earth Observation job.</p>
   */
  InputConfig?: InputConfigOutput;

  /**
   * <p>An object containing information about the job configuration.</p>
   */
  JobConfig: JobConfigInput | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StopEarthObservationJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job being stopped.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopEarthObservationJobOutput {}

/**
 * @public
 * <p>The Amazon S3 data for the Vector Enrichment job.</p>
 */
export interface VectorEnrichmentJobS3Data {
  /**
   * <p>The URL to the Amazon S3 data for the Vector Enrichment job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>An object containing information about the output file.</p>
 */
export interface ExportVectorEnrichmentJobOutputConfig {
  /**
   * <p>The input structure for Amazon S3 data; representing the Amazon S3 location of the input data objects.</p>
   */
  S3Data: VectorEnrichmentJobS3Data | undefined;
}

/**
 * @public
 */
export interface ExportVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>Output location information for exporting Vector Enrichment Job results.
   * </p>
   */
  OutputConfig: ExportVectorEnrichmentJobOutputConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type VectorEnrichmentJobExportStatus =
  (typeof VectorEnrichmentJobExportStatus)[keyof typeof VectorEnrichmentJobExportStatus];

/**
 * @public
 */
export interface ExportVectorEnrichmentJobOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job being exported.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role with permission to upload to the location in OutputConfig.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The status of the results the Vector Enrichment job being exported.</p>
   */
  ExportStatus: VectorEnrichmentJobExportStatus | string | undefined;

  /**
   * <p>Output location information for exporting Vector Enrichment Job results.
   * </p>
   */
  OutputConfig: ExportVectorEnrichmentJobOutputConfig | undefined;
}

/**
 * @public
 * <p>The structure representing a Geometry in
 *       terms of Type and Coordinates as per GeoJson spec.</p>
 */
export interface Geometry {
  /**
   * <p>GeoJson Geometry types like Polygon and MultiPolygon.</p>
   */
  Type: string | undefined;

  /**
   * <p>The coordinates of the GeoJson Geometry.</p>
   */
  Coordinates: number[][][] | undefined;
}

/**
 * @public
 */
export interface GetRasterDataCollectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetRasterDataCollectionOutput {
  /**
   * <p>The name of the raster data collection.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The raster data collection type.</p>
   */
  Type: DataCollectionType | string | undefined;

  /**
   * <p>A description of the raster data collection.</p>
   */
  Description: string | undefined;

  /**
   * <p>The URL of the description page.</p>
   */
  DescriptionPageUrl: string | undefined;

  /**
   * <p>The filters supported by the raster data collection.</p>
   */
  SupportedFilters: Filter[] | undefined;

  /**
   * <p>The list of image source bands in the raster data collection.</p>
   */
  ImageSourceBands: string[] | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobErrorType = {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR: "SERVER_ERROR",
} as const;

/**
 * @public
 */
export type VectorEnrichmentJobErrorType =
  (typeof VectorEnrichmentJobErrorType)[keyof typeof VectorEnrichmentJobErrorType];

/**
 * @public
 * <p>VectorEnrichmentJob error details in response from GetVectorEnrichmentJob.</p>
 */
export interface VectorEnrichmentJobErrorDetails {
  /**
   * <p>The type of error generated during the Vector Enrichment job.</p>
   */
  ErrorType?: VectorEnrichmentJobErrorType | string;

  /**
   * <p>A message that you define and then is processed and rendered by
   *          the Vector Enrichment job when the error occurs.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobExportErrorType = {
  CLIENT_ERROR: "CLIENT_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
} as const;

/**
 * @public
 */
export type VectorEnrichmentJobExportErrorType =
  (typeof VectorEnrichmentJobExportErrorType)[keyof typeof VectorEnrichmentJobExportErrorType];

/**
 * @public
 * <p>VectorEnrichmentJob export error details in response from GetVectorEnrichmentJob.</p>
 */
export interface VectorEnrichmentJobExportErrorDetails {
  /**
   * <p>The output error details for an Export operation on a Vector Enrichment job.</p>
   */
  Type?: VectorEnrichmentJobExportErrorType | string;

  /**
   * <p>The message providing details about the errors generated during the Vector Enrichment job.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The input structure for the data source that represents the storage type of the input data objects.</p>
 */
export type VectorEnrichmentJobDataSourceConfigInput =
  | VectorEnrichmentJobDataSourceConfigInput.S3DataMember
  | VectorEnrichmentJobDataSourceConfigInput.$UnknownMember;

/**
 * @public
 */
export namespace VectorEnrichmentJobDataSourceConfigInput {
  /**
   * <p>The input structure for the Amazon S3 data that represents the Amazon S3 location of the input data objects.</p>
   */
  export interface S3DataMember {
    S3Data: VectorEnrichmentJobS3Data;
    $unknown?: never;
  }

  export interface $UnknownMember {
    S3Data?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3Data: (value: VectorEnrichmentJobS3Data) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VectorEnrichmentJobDataSourceConfigInput, visitor: Visitor<T>): T => {
    if (value.S3Data !== undefined) return visitor.S3Data(value.S3Data);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobDocumentType = {
  CSV: "CSV",
} as const;

/**
 * @public
 */
export type VectorEnrichmentJobDocumentType =
  (typeof VectorEnrichmentJobDocumentType)[keyof typeof VectorEnrichmentJobDocumentType];

/**
 * @public
 * <p>The input structure for the InputConfig in a VectorEnrichmentJob.</p>
 */
export interface VectorEnrichmentJobInputConfig {
  /**
   * <p>The input structure that defines the data source file type.</p>
   */
  DocumentType: VectorEnrichmentJobDocumentType | string | undefined;

  /**
   * <p>The input structure for the data source that represents the storage type of the input data objects.</p>
   */
  DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput | undefined;
}

/**
 * @public
 * <p>The input structure for Map Matching operation type.</p>
 */
export interface MapMatchingConfig {
  /**
   * <p>The field name for the data that describes the identifier representing a collection of GPS points belonging to an individual trace.</p>
   */
  IdAttributeName: string | undefined;

  /**
   * <p>The name of the Y-attribute</p>
   */
  YAttributeName: string | undefined;

  /**
   * <p>The name of the X-attribute</p>
   */
  XAttributeName: string | undefined;

  /**
   * <p>The name of the timestamp attribute.</p>
   */
  TimestampAttributeName: string | undefined;
}

/**
 * @public
 * <p>The input structure for Reverse Geocoding operation type.</p>
 */
export interface ReverseGeocodingConfig {
  /**
   * <p>The field name for the data that describes y-axis coordinate, eg. latitude of a point.</p>
   */
  YAttributeName: string | undefined;

  /**
   * <p>The field name for the data that describes x-axis coordinate, eg. longitude of a point.</p>
   */
  XAttributeName: string | undefined;
}

/**
 * @public
 * <p>It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.</p>
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
   * <p>The input structure for Reverse Geocoding operation type.</p>
   */
  export interface ReverseGeocodingConfigMember {
    ReverseGeocodingConfig: ReverseGeocodingConfig;
    MapMatchingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The input structure for Map Matching operation type.</p>
   */
  export interface MapMatchingConfigMember {
    ReverseGeocodingConfig?: never;
    MapMatchingConfig: MapMatchingConfig;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ReverseGeocodingConfig?: never;
    MapMatchingConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ReverseGeocodingConfig: (value: ReverseGeocodingConfig) => T;
    MapMatchingConfig: (value: MapMatchingConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VectorEnrichmentJobConfig, visitor: Visitor<T>): T => {
    if (value.ReverseGeocodingConfig !== undefined) return visitor.ReverseGeocodingConfig(value.ReverseGeocodingConfig);
    if (value.MapMatchingConfig !== undefined) return visitor.MapMatchingConfig(value.MapMatchingConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type VectorEnrichmentJobStatus = (typeof VectorEnrichmentJobStatus)[keyof typeof VectorEnrichmentJobStatus];

/**
 * @public
 * @enum
 */
export const VectorEnrichmentJobType = {
  MAP_MATCHING: "MAP_MATCHING",
  REVERSE_GEOCODING: "REVERSE_GEOCODING",
} as const;

/**
 * @public
 */
export type VectorEnrichmentJobType = (typeof VectorEnrichmentJobType)[keyof typeof VectorEnrichmentJobType];

/**
 * @public
 */
export interface GetVectorEnrichmentJobOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of the Vector Enrichment job being initiated.</p>
   */
  Type: VectorEnrichmentJobType | string | undefined;

  /**
   * <p>The name of the Vector Enrichment job.</p>
   */
  Name: string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The duration of the Vector Enrichment job, in seconds.</p>
   */
  DurationInSeconds: number | undefined;

  /**
   * <p>The status of the initiated Vector Enrichment job.</p>
   */
  Status: VectorEnrichmentJobStatus | string | undefined;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Input configuration information for the Vector Enrichment job.</p>
   */
  InputConfig: VectorEnrichmentJobInputConfig | undefined;

  /**
   * <p>An object containing information about the job configuration.</p>
   */
  JobConfig: VectorEnrichmentJobConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>Details about the errors generated during the Vector Enrichment job.</p>
   */
  ErrorDetails?: VectorEnrichmentJobErrorDetails;

  /**
   * <p>The export status of the Vector Enrichment job being initiated.</p>
   */
  ExportStatus?: VectorEnrichmentJobExportStatus | string;

  /**
   * <p>Details about the errors generated during the ExportVectorEnrichmentJob.</p>
   */
  ExportErrorDetails?: VectorEnrichmentJobExportErrorDetails;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Properties associated with the Item.</p>
 */
export interface Properties {
  /**
   * <p>Estimate of cloud cover.</p>
   */
  EoCloudCover?: number;

  /**
   * <p>The angle from the sensor between nadir (straight down) and the scene center. Measured in degrees (0-90).</p>
   */
  ViewOffNadir?: number;

  /**
   * <p>The sun azimuth angle. From the scene center point on the ground, this is the angle between truth north and the sun.
   *       Measured clockwise in degrees (0-360).</p>
   */
  ViewSunAzimuth?: number;

  /**
   * <p>The sun elevation angle. The angle from the tangent of the scene center point to the sun. Measured from the horizon in degrees (-90-90).
   *       Negative values indicate the sun is below the horizon, e.g. sun elevation of -10° means the data was captured during <a href="https://www.timeanddate.com/astronomy/different-types-twilight.html">nautical twilight</a>.</p>
   */
  ViewSunElevation?: number;

  /**
   * <p>Platform property. Platform refers to the unique name
   *       of the specific platform the instrument is attached to.
   *       For satellites it is the name of
   *       the satellite, eg. landsat-8 (Landsat-8), sentinel-2a.</p>
   */
  Platform?: string;

  /**
   * <p>Land cloud cover for Landsat Data Collection.</p>
   */
  LandsatCloudCoverLand?: number;
}

/**
 * @public
 * <p>The structure representing the items in the response for SearchRasterDataCollection.</p>
 */
export interface ItemSource {
  /**
   * <p>A unique Id for the source item.</p>
   */
  Id: string | undefined;

  /**
   * <p>The item Geometry in GeoJson format.</p>
   */
  Geometry: Geometry | undefined;

  /**
   * <p>This is a dictionary of Asset Objects data associated with the Item that
   *       can be downloaded or streamed, each with a unique key.</p>
   */
  Assets?: Record<string, AssetValue>;

  /**
   * <p>The searchable date and time of the item, in UTC.</p>
   */
  DateTime: Date | undefined;

  /**
   * <p>This field contains additional properties of the item.</p>
   */
  Properties?: Properties;
}

/**
 * @public
 */
export interface ListRasterDataCollectionsInput {
  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListRasterDataCollectionsOutput {
  /**
   * <p>Contains summary information about the raster data collection.</p>
   */
  RasterDataCollectionSummaries: RasterDataCollectionMetadata[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to tag.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListVectorEnrichmentJobInput {
  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: string;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results.</p>
   */
  SortBy?: string;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An object containing information about the output file.</p>
 */
export interface ListVectorEnrichmentJobOutputConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the list of the Vector Enrichment jobs.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The names of the Vector Enrichment jobs in the list.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the list of Vector Enrichment jobs.</p>
   */
  Type: VectorEnrichmentJobType | string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The duration of the session, in seconds.</p>
   */
  DurationInSeconds: number | undefined;

  /**
   * <p>The status of the Vector Enrichment jobs list. </p>
   */
  Status: VectorEnrichmentJobStatus | string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListVectorEnrichmentJobOutput {
  /**
   * <p>Contains summary information about the Vector Enrichment jobs.</p>
   */
  VectorEnrichmentJobSummaries: ListVectorEnrichmentJobOutputConfig[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters.</p>
 */
export interface RasterDataCollectionQueryWithBandFilterInput {
  /**
   * <p>The TimeRange Filter used in the search query.</p>
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * <p>The Area of interest to be used in the search query.</p>
   */
  AreaOfInterest?: AreaOfInterest;

  /**
   * <p>The Property Filters used in the search query.</p>
   */
  PropertyFilters?: PropertyFilters;

  /**
   * <p>The list of Bands to be displayed in the result for each item.</p>
   */
  BandFilter?: string[];
}

/**
 * @public
 */
export interface SearchRasterDataCollectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  Arn: string | undefined;

  /**
   * <p>RasterDataCollectionQuery consisting of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_AreaOfInterest.html">AreaOfInterest(AOI)</a>, <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_PropertyFilter.html">PropertyFilters</a> and
   *       <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_TimeRangeFilterInput.html">TimeRangeFilterInput</a> used in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_geospatial_SearchRasterDataCollection.html">SearchRasterDataCollection</a>.</p>
   */
  RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchRasterDataCollectionOutput {
  /**
   * <p>Approximate number of results in the response.</p>
   */
  ApproximateResultCount: number | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of items matching the Raster DataCollectionQuery.</p>
   */
  Items?: ItemSource[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource you want to untag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of the tags you want to remove.</p>
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
   * <p>The name of the Vector Enrichment job.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  ClientToken?: string;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Input configuration information for the Vector Enrichment job.</p>
   */
  InputConfig: VectorEnrichmentJobInputConfig | undefined;

  /**
   * <p>An object containing information about the job configuration.</p>
   */
  JobConfig: VectorEnrichmentJobConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartVectorEnrichmentJobOutput {
  /**
   * <p>The name of the Vector Enrichment job.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of the Vector Enrichment job.</p>
   */
  Type: VectorEnrichmentJobType | string | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The duration of the Vector Enrichment job, in seconds.</p>
   */
  DurationInSeconds: number | undefined;

  /**
   * <p>The status of the Vector Enrichment job being started.</p>
   */
  Status: VectorEnrichmentJobStatus | string | undefined;

  /**
   * <p>The Key Management Service key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Input configuration information for starting the Vector Enrichment job.</p>
   */
  InputConfig: VectorEnrichmentJobInputConfig | undefined;

  /**
   * <p>An object containing information about the job configuration.</p>
   */
  JobConfig: VectorEnrichmentJobConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the job.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StopVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface StopVectorEnrichmentJobOutput {}

/**
 * @internal
 */
export const MultiPolygonGeometryInputFilterSensitiveLog = (obj: MultiPolygonGeometryInput): any => ({
  ...obj,
  ...(obj.Coordinates && { Coordinates: obj.Coordinates.map((item) => item.map((item) => SENSITIVE_STRING)) }),
});

/**
 * @internal
 */
export const PolygonGeometryInputFilterSensitiveLog = (obj: PolygonGeometryInput): any => ({
  ...obj,
  ...(obj.Coordinates && { Coordinates: obj.Coordinates.map((item) => SENSITIVE_STRING) }),
});

/**
 * @internal
 */
export const AreaOfInterestGeometryFilterSensitiveLog = (obj: AreaOfInterestGeometry): any => {
  if (obj.PolygonGeometry !== undefined)
    return { PolygonGeometry: PolygonGeometryInputFilterSensitiveLog(obj.PolygonGeometry) };
  if (obj.MultiPolygonGeometry !== undefined)
    return { MultiPolygonGeometry: MultiPolygonGeometryInputFilterSensitiveLog(obj.MultiPolygonGeometry) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AreaOfInterestFilterSensitiveLog = (obj: AreaOfInterest): any => {
  if (obj.AreaOfInterestGeometry !== undefined)
    return { AreaOfInterestGeometry: AreaOfInterestGeometryFilterSensitiveLog(obj.AreaOfInterestGeometry) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TimeRangeFilterOutputFilterSensitiveLog = (obj: TimeRangeFilterOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RasterDataCollectionQueryOutputFilterSensitiveLog = (obj: RasterDataCollectionQueryOutput): any => ({
  ...obj,
  ...(obj.TimeRangeFilter && { TimeRangeFilter: SENSITIVE_STRING }),
  ...(obj.AreaOfInterest && { AreaOfInterest: AreaOfInterestFilterSensitiveLog(obj.AreaOfInterest) }),
  ...(obj.PropertyFilters && { PropertyFilters: obj.PropertyFilters }),
});

/**
 * @internal
 */
export const InputConfigOutputFilterSensitiveLog = (obj: InputConfigOutput): any => ({
  ...obj,
  ...(obj.RasterDataCollectionQuery && {
    RasterDataCollectionQuery: RasterDataCollectionQueryOutputFilterSensitiveLog(obj.RasterDataCollectionQuery),
  }),
});

/**
 * @internal
 */
export const GetEarthObservationJobOutputFilterSensitiveLog = (obj: GetEarthObservationJobOutput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: InputConfigOutputFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: obj.JobConfig }),
});

/**
 * @internal
 */
export const GetTileOutputFilterSensitiveLog = (obj: GetTileOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEarthObservationJobInputFilterSensitiveLog = (obj: ListEarthObservationJobInput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListEarthObservationJobOutputFilterSensitiveLog = (obj: ListEarthObservationJobOutput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TimeRangeFilterInputFilterSensitiveLog = (obj: TimeRangeFilterInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RasterDataCollectionQueryInputFilterSensitiveLog = (obj: RasterDataCollectionQueryInput): any => ({
  ...obj,
  ...(obj.TimeRangeFilter && { TimeRangeFilter: SENSITIVE_STRING }),
  ...(obj.AreaOfInterest && { AreaOfInterest: AreaOfInterestFilterSensitiveLog(obj.AreaOfInterest) }),
  ...(obj.PropertyFilters && { PropertyFilters: obj.PropertyFilters }),
});

/**
 * @internal
 */
export const InputConfigInputFilterSensitiveLog = (obj: InputConfigInput): any => ({
  ...obj,
  ...(obj.RasterDataCollectionQuery && {
    RasterDataCollectionQuery: RasterDataCollectionQueryInputFilterSensitiveLog(obj.RasterDataCollectionQuery),
  }),
});

/**
 * @internal
 */
export const StartEarthObservationJobInputFilterSensitiveLog = (obj: StartEarthObservationJobInput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: InputConfigInputFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: obj.JobConfig }),
});

/**
 * @internal
 */
export const StartEarthObservationJobOutputFilterSensitiveLog = (obj: StartEarthObservationJobOutput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: InputConfigOutputFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: obj.JobConfig }),
});

/**
 * @internal
 */
export const GeometryFilterSensitiveLog = (obj: Geometry): any => ({
  ...obj,
  ...(obj.Coordinates && { Coordinates: obj.Coordinates.map((item) => SENSITIVE_STRING) }),
});

/**
 * @internal
 */
export const ItemSourceFilterSensitiveLog = (obj: ItemSource): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: GeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const ListRasterDataCollectionsInputFilterSensitiveLog = (obj: ListRasterDataCollectionsInput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListRasterDataCollectionsOutputFilterSensitiveLog = (obj: ListRasterDataCollectionsOutput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListVectorEnrichmentJobInputFilterSensitiveLog = (obj: ListVectorEnrichmentJobInput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListVectorEnrichmentJobOutputFilterSensitiveLog = (obj: ListVectorEnrichmentJobOutput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RasterDataCollectionQueryWithBandFilterInputFilterSensitiveLog = (
  obj: RasterDataCollectionQueryWithBandFilterInput
): any => ({
  ...obj,
  ...(obj.TimeRangeFilter && { TimeRangeFilter: SENSITIVE_STRING }),
  ...(obj.AreaOfInterest && { AreaOfInterest: AreaOfInterestFilterSensitiveLog(obj.AreaOfInterest) }),
  ...(obj.PropertyFilters && { PropertyFilters: obj.PropertyFilters }),
});

/**
 * @internal
 */
export const SearchRasterDataCollectionInputFilterSensitiveLog = (obj: SearchRasterDataCollectionInput): any => ({
  ...obj,
  ...(obj.RasterDataCollectionQuery && {
    RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInputFilterSensitiveLog(
      obj.RasterDataCollectionQuery
    ),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchRasterDataCollectionOutputFilterSensitiveLog = (obj: SearchRasterDataCollectionOutput): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.Items && { Items: obj.Items.map((item) => ItemSourceFilterSensitiveLog(item)) }),
});
