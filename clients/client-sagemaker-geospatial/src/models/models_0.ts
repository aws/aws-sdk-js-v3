// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { SageMakerGeospatialServiceException as __BaseException } from "./SageMakerGeospatialServiceException";

/**
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

export enum AlgorithmNameCloudRemoval {
  /**
   * INTERPOLATION
   */
  INTERPOLATION = "INTERPOLATION",
}

export enum AlgorithmNameGeoMosaic {
  /**
   * AVERAGE
   */
  AVERAGE = "AVERAGE",
  /**
   * BILINEAR
   */
  BILINEAR = "BILINEAR",
  /**
   * CUBIC
   */
  CUBIC = "CUBIC",
  /**
   * CUBICSPLINE
   */
  CUBICSPLINE = "CUBICSPLINE",
  /**
   * LANCZOS
   */
  LANCZOS = "LANCZOS",
  /**
   * MAX
   */
  MAX = "MAX",
  /**
   * MED
   */
  MED = "MED",
  /**
   * MIN
   */
  MIN = "MIN",
  /**
   * MODE
   */
  MODE = "MODE",
  /**
   * NEAR
   */
  NEAR = "NEAR",
  /**
   * Q1
   */
  Q1 = "Q1",
  /**
   * Q3
   */
  Q3 = "Q3",
  /**
   * RMS
   */
  RMS = "RMS",
  /**
   * SUM
   */
  SUM = "SUM",
}

export enum AlgorithmNameResampling {
  /**
   * AVERAGE
   */
  AVERAGE = "AVERAGE",
  /**
   * BILINEAR
   */
  BILINEAR = "BILINEAR",
  /**
   * CUBIC
   */
  CUBIC = "CUBIC",
  /**
   * CUBICSPLINE
   */
  CUBICSPLINE = "CUBICSPLINE",
  /**
   * LANCZOS
   */
  LANCZOS = "LANCZOS",
  /**
   * MAX
   */
  MAX = "MAX",
  /**
   * MED
   */
  MED = "MED",
  /**
   * MIN
   */
  MIN = "MIN",
  /**
   * MODE
   */
  MODE = "MODE",
  /**
   * NEAR
   */
  NEAR = "NEAR",
  /**
   * Q1
   */
  Q1 = "Q1",
  /**
   * Q3
   */
  Q3 = "Q3",
  /**
   * RMS
   */
  RMS = "RMS",
  /**
   * SUM
   */
  SUM = "SUM",
}

/**
 * <p/>
 */
export interface MultiPolygonGeometryInput {
  /**
   * <p>The coordinates of the multipolygon geometry.</p>
   */
  Coordinates: number[][][][] | undefined;
}

/**
 * <p/>
 */
export interface PolygonGeometryInput {
  /**
   * <p/>
   */
  Coordinates: number[][][] | undefined;
}

/**
 * <p/>
 */
export type AreaOfInterestGeometry =
  | AreaOfInterestGeometry.MultiPolygonGeometryMember
  | AreaOfInterestGeometry.PolygonGeometryMember
  | AreaOfInterestGeometry.$UnknownMember;

export namespace AreaOfInterestGeometry {
  /**
   * <p/>
   */
  export interface PolygonGeometryMember {
    PolygonGeometry: PolygonGeometryInput;
    MultiPolygonGeometry?: never;
    $unknown?: never;
  }

  /**
   * <p/>
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
 * <p/>
 */
export type AreaOfInterest = AreaOfInterest.AreaOfInterestGeometryMember | AreaOfInterest.$UnknownMember;

export namespace AreaOfInterest {
  /**
   * <p/>
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
 * <p/>
 */
export interface AssetValue {
  /**
   * <p/>
   */
  Href?: string;
}

export enum OutputType {
  /**
   * FLOAT32
   */
  FLOAT32 = "FLOAT32",
  /**
   * FLOAT64
   */
  FLOAT64 = "FLOAT64",
  /**
   * INT16
   */
  INT16 = "INT16",
  /**
   * INT32
   */
  INT32 = "INT32",
  /**
   * UINT16
   */
  UINT16 = "UINT16",
}

/**
 * <p/>
 */
export interface Operation {
  /**
   * <p>The name of the operation.</p>
   */
  Name: string | undefined;

  /**
   * <p/>
   */
  Equation: string | undefined;

  /**
   * <p>The type of the operation.</p>
   */
  OutputType?: OutputType | string;
}

/**
 * <p/>
 */
export interface CustomIndicesInput {
  /**
   * <p/>
   */
  Operations?: Operation[];
}

/**
 * <p/>
 */
export interface BandMathConfigInput {
  /**
   * <p/>
   */
  PredefinedIndices?: string[];

  /**
   * <p/>
   */
  CustomIndices?: CustomIndicesInput;
}

/**
 * <p/>
 */
export interface CloudMaskingConfigInput {}

/**
 * <p/>
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
   * <p/>
   */
  TargetBands?: string[];
}

export enum ComparisonOperator {
  /**
   * EQUALS
   */
  EQUALS = "EQUALS",
  /**
   * NOT_EQUALS
   */
  NOT_EQUALS = "NOT_EQUALS",
  /**
   * STARTS_WITH
   */
  STARTS_WITH = "STARTS_WITH",
}

/**
 * <p/>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId: string | undefined;
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

export enum DataCollectionType {
  /**
   * PREMIUM
   */
  PREMIUM = "PREMIUM",
  /**
   * PUBLIC
   */
  PUBLIC = "PUBLIC",
  /**
   * USER
   */
  USER = "USER",
}

/**
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
   * <p/>
   */
  SupportedFilters: Filter[] | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

export interface DeleteEarthObservationJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job being deleted.</p>
   */
  Arn: string | undefined;
}

export interface DeleteEarthObservationJobOutput {}

/**
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId: string | undefined;
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
 * <p/>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId: string | undefined;
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId: string | undefined;
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId: string | undefined;
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

export interface DeleteVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted.</p>
   */
  Arn: string | undefined;
}

export interface DeleteVectorEnrichmentJobOutput {}

/**
 * <p/>
 */
export interface ExportS3DataInput {
  /**
   * <p>The URL to the Amazon S3 data input.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>The response structure for an OutputConfig returned by an ExportEarthObservationJob.</p>
 */
export interface OutputConfigInput {
  /**
   * <p>Path to Amazon S3 storage location for the output configuration file.</p>
   */
  S3Data: ExportS3DataInput | undefined;
}

export interface ExportEarthObservationJobInput {
  /**
   * <p>The input Amazon Resource Name (ARN) of the Earth Observation job being exported.</p>
   */
  Arn: string | undefined;

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

export enum EarthObservationJobExportStatus {
  /**
   * FAILED
   */
  FAILED = "FAILED",
  /**
   * IN_PROGRESS
   */
  IN_PROGRESS = "IN_PROGRESS",
  /**
   * SUCCEEDED
   */
  SUCCEEDED = "SUCCEEDED",
}

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
 * <p>You have exceeded the service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p/>
   */
  ResourceId: string | undefined;
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

export interface GetEarthObservationJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job.</p>
   */
  Arn: string | undefined;
}

export enum EarthObservationJobErrorType {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR = "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR = "SERVER_ERROR",
}

/**
 * <p>The structure representing the errors in an EarthObservationJob.</p>
 */
export interface EarthObservationJobErrorDetails {
  /**
   * <p/>
   */
  Type?: EarthObservationJobErrorType | string;

  /**
   * <p/>
   */
  Message?: string;
}

export enum ExportErrorType {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR = "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR = "SERVER_ERROR",
}

/**
 * <p/>
 */
export interface ExportErrorDetailsOutput {
  /**
   * <p/>
   */
  Type?: ExportErrorType | string;

  /**
   * <p/>
   */
  Message?: string;
}

/**
 * <p>The structure for returning the export error details in a GetEarthObservationJob.</p>
 */
export interface ExportErrorDetails {
  /**
   * <p/>
   */
  ExportResults?: ExportErrorDetailsOutput;

  /**
   * <p/>
   */
  ExportSourceImages?: ExportErrorDetailsOutput;
}

export enum MetadataProvider {
  /**
   * PLANET_ORDER
   */
  PLANET_ORDER = "PLANET_ORDER",
}

/**
 * <p>Path to Amazon S3 storage location for input data.</p>
 */
export interface S3DataInput {
  /**
   * <p>The URL to the Amazon S3 input.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p/>
   */
  MetadataProvider: MetadataProvider | string | undefined;

  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p/>
 */
export type EojDataSourceConfigInput = EojDataSourceConfigInput.S3DataMember | EojDataSourceConfigInput.$UnknownMember;

export namespace EojDataSourceConfigInput {
  /**
   * <p/>
   */
  export interface S3DataMember {
    S3Data: S3DataInput;
    $unknown?: never;
  }

  export interface $UnknownMember {
    S3Data?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    S3Data: (value: S3DataInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EojDataSourceConfigInput, visitor: Visitor<T>): T => {
    if (value.S3Data !== undefined) return visitor.S3Data(value.S3Data);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum LogicalOperator {
  /**
   * AND
   */
  AND = "AND",
}

/**
 * <p/>
 */
export interface EoCloudCoverInput {
  /**
   * <p/>
   */
  LowerBound: number | undefined;

  /**
   * <p/>
   */
  UpperBound: number | undefined;
}

/**
 * <p/>
 */
export interface LandsatCloudCoverLandInput {
  /**
   * <p/>
   */
  LowerBound: number | undefined;

  /**
   * <p/>
   */
  UpperBound: number | undefined;
}

/**
 * <p/>
 */
export interface PlatformInput {
  /**
   * <p>The value of the platform.</p>
   */
  Value: string | undefined;

  /**
   * <p/>
   */
  ComparisonOperator?: ComparisonOperator | string;
}

/**
 * <p/>
 */
export interface ViewOffNadirInput {
  /**
   * <p/>
   */
  LowerBound: number | undefined;

  /**
   * <p/>
   */
  UpperBound: number | undefined;
}

/**
 * <p/>
 */
export interface ViewSunAzimuthInput {
  /**
   * <p/>
   */
  LowerBound: number | undefined;

  /**
   * <p/>
   */
  UpperBound: number | undefined;
}

/**
 * <p/>
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
 * <p/>
 */
export type Property =
  | Property.EoCloudCoverMember
  | Property.LandsatCloudCoverLandMember
  | Property.PlatformMember
  | Property.ViewOffNadirMember
  | Property.ViewSunAzimuthMember
  | Property.ViewSunElevationMember
  | Property.$UnknownMember;

export namespace Property {
  /**
   * <p/>
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
   * <p/>
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
   * <p/>
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
   * <p/>
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
   * <p/>
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
   * <p/>
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
 * <p/>
 */
export interface PropertyFilter {
  /**
   * <p/>
   */
  Property: Property | undefined;
}

/**
 * <p/>
 */
export interface PropertyFilters {
  /**
   * <p/>
   */
  Properties?: PropertyFilter[];

  /**
   * <p/>
   */
  LogicalOperator?: LogicalOperator | string;
}

/**
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
 * <p/>
 */
export interface RasterDataCollectionQueryOutput {
  /**
   * <p/>
   */
  RasterDataCollectionArn: string | undefined;

  /**
   * <p>The name of the raster data collection.</p>
   */
  RasterDataCollectionName: string | undefined;

  /**
   * <p/>
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * <p/>
   */
  AreaOfInterest?: AreaOfInterest;

  /**
   * <p/>
   */
  PropertyFilters?: PropertyFilters;
}

/**
 * <p>The InputConfig for an EarthObservationJob response.</p>
 */
export interface InputConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the previous Earth Observation job.</p>
   */
  PreviousEarthObservationJobArn?: string;

  /**
   * <p>The location of the input data.</p>
   */
  DataSourceConfig?: EojDataSourceConfigInput;

  /**
   * <p/>
   */
  RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
}

/**
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
 * <p/>
 */
export interface LandCoverSegmentationConfigInput {}

export enum Unit {
  /**
   * METERS
   */
  METERS = "METERS",
}

/**
 * <p/>
 */
export interface UserDefined {
  /**
   * <p/>
   */
  Value: number | undefined;

  /**
   * <p/>
   */
  Unit: Unit | string | undefined;
}

/**
 * <p/>
 */
export interface OutputResolutionResamplingInput {
  /**
   * <p/>
   */
  UserDefined: UserDefined | undefined;
}

/**
 * <p/>
 */
export interface ResamplingConfigInput {
  /**
   * <p/>
   */
  OutputResolution: OutputResolutionResamplingInput | undefined;

  /**
   * <p>The name of the algorithm used for resampling.</p>
   */
  AlgorithmName?: AlgorithmNameResampling | string;

  /**
   * <p/>
   */
  TargetBands?: string[];
}

export enum PredefinedResolution {
  /**
   * AVERAGE
   */
  AVERAGE = "AVERAGE",
  /**
   * HIGHEST
   */
  HIGHEST = "HIGHEST",
  /**
   * LOWEST
   */
  LOWEST = "LOWEST",
}

/**
 * <p/>
 */
export interface OutputResolutionStackInput {
  /**
   * <p/>
   */
  Predefined?: PredefinedResolution | string;

  /**
   * <p/>
   */
  UserDefined?: UserDefined;
}

/**
 * <p/>
 */
export interface StackConfigInput {
  /**
   * <p/>
   */
  OutputResolution?: OutputResolutionStackInput;

  /**
   * <p/>
   */
  TargetBands?: string[];
}

export enum GroupBy {
  /**
   * ALL
   */
  ALL = "ALL",
  /**
   * YEARLY
   */
  YEARLY = "YEARLY",
}

export enum TemporalStatistics {
  /**
   * MEAN
   */
  MEAN = "MEAN",
  /**
   * MEDIAN
   */
  MEDIAN = "MEDIAN",
  /**
   * STANDARD_DEVIATION
   */
  STANDARD_DEVIATION = "STANDARD_DEVIATION",
}

/**
 * <p/>
 */
export interface TemporalStatisticsConfigInput {
  /**
   * <p/>
   */
  GroupBy?: GroupBy | string;

  /**
   * <p/>
   */
  Statistics: (TemporalStatistics | string)[] | undefined;

  /**
   * <p/>
   */
  TargetBands?: string[];
}

export enum ZonalStatistics {
  /**
   * MAX
   */
  MAX = "MAX",
  /**
   * MEAN
   */
  MEAN = "MEAN",
  /**
   * MEDIAN
   */
  MEDIAN = "MEDIAN",
  /**
   * MIN
   */
  MIN = "MIN",
  /**
   * STANDARD_DEVIATION
   */
  STANDARD_DEVIATION = "STANDARD_DEVIATION",
  /**
   * SUM
   */
  SUM = "SUM",
}

/**
 * <p/>
 */
export interface ZonalStatisticsConfigInput {
  /**
   * <p/>
   */
  ZoneS3Path: string | undefined;

  /**
   * <p/>
   */
  Statistics: (ZonalStatistics | string)[] | undefined;

  /**
   * <p/>
   */
  TargetBands?: string[];
}

/**
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

export namespace JobConfigInput {
  /**
   * <p/>
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
   * <p/>
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

export enum EarthObservationJobStatus {
  /**
   * COMPLETED
   */
  COMPLETED = "COMPLETED",
  /**
   * DELETED
   */
  DELETED = "DELETED",
  /**
   * DELETING
   */
  DELETING = "DELETING",
  /**
   * FAILED
   */
  FAILED = "FAILED",
  /**
   * INITIALIZING
   */
  INITIALIZING = "INITIALIZING",
  /**
   * IN_PROGRESS
   */
  IN_PROGRESS = "IN_PROGRESS",
  /**
   * STOPPED
   */
  STOPPED = "STOPPED",
  /**
   * STOPPING
   */
  STOPPING = "STOPPING",
}

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
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
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
   * <p/>
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

export enum TargetOptions {
  /**
   * INPUT
   */
  INPUT = "INPUT",
  /**
   * OUTPUT
   */
  OUTPUT = "OUTPUT",
}

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
}

export interface GetTileOutput {
  /**
   * <p>The output binary file.</p>
   */
  BinaryFile?: Readable | ReadableStream | Blob;
}

export enum SortOrder {
  /**
   * ASCENDING
   */
  ASCENDING = "ASCENDING",
  /**
   * DESCENDING
   */
  DESCENDING = "DESCENDING",
}

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
   * <p/>
   */
  OperationType: string | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

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
 * <p/>
 */
export interface RasterDataCollectionQueryInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  RasterDataCollectionArn: string | undefined;

  /**
   * <p/>
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * <p>The area of interest being queried for the raster data collection.</p>
   */
  AreaOfInterest?: AreaOfInterest;

  /**
   * <p/>
   */
  PropertyFilters?: PropertyFilters;
}

/**
 * <p>Input configuration information.</p>
 */
export interface InputConfigInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the previous Earth Observation job.</p>
   */
  PreviousEarthObservationJobArn?: string;

  /**
   * <p>The location of the input data.&gt;</p>
   */
  DataSourceConfig?: EojDataSourceConfigInput;

  /**
   * <p/>
   */
  RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
}

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
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
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
  ExecutionRoleArn?: string;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

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
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
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
  ExecutionRoleArn?: string;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

export interface StopEarthObservationJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Earth Observation job being stopped.</p>
   */
  Arn: string | undefined;
}

export interface StopEarthObservationJobOutput {}

/**
 * <p>The Amazon S3 data for the Vector Enrichment job.</p>
 */
export interface VectorEnrichmentJobS3Data {
  /**
   * <p>The URL to the Amazon S3 data for the Vector Enrichment job.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>An object containing information about the output file.</p>
 */
export interface ExportVectorEnrichmentJobOutputConfig {
  /**
   * <p/>
   */
  S3Data: VectorEnrichmentJobS3Data | undefined;
}

export interface ExportVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;

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

export enum VectorEnrichmentJobExportStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

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
 * <p/>
 */
export interface Geometry {
  /**
   * <p/>
   */
  Type: string | undefined;

  /**
   * <p/>
   */
  Coordinates: number[][][] | undefined;
}

export interface GetRasterDataCollectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  Arn: string | undefined;
}

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
   * <p/>
   */
  ImageSourceBands: string[] | undefined;

  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;
}

export enum VectorEnrichmentJobErrorType {
  /**
   * CLIENT_ERROR
   */
  CLIENT_ERROR = "CLIENT_ERROR",
  /**
   * SERVER_ERROR
   */
  SERVER_ERROR = "SERVER_ERROR",
}

/**
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

export enum VectorEnrichmentJobExportErrorType {
  CLIENT_ERROR = "CLIENT_ERROR",
  SERVER_ERROR = "SERVER_ERROR",
}

/**
 * <p>VectorEnrichmentJob export error details in response from GetVectorEnrichmentJob.</p>
 */
export interface VectorEnrichmentJobExportErrorDetails {
  /**
   * <p/>
   */
  Type?: VectorEnrichmentJobExportErrorType | string;

  /**
   * <p>The message providing details about the errors generated during the Vector Enrichment job.</p>
   */
  Message?: string;
}

/**
 * <p/>
 */
export type VectorEnrichmentJobDataSourceConfigInput =
  | VectorEnrichmentJobDataSourceConfigInput.S3DataMember
  | VectorEnrichmentJobDataSourceConfigInput.$UnknownMember;

export namespace VectorEnrichmentJobDataSourceConfigInput {
  /**
   * <p/>
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

export enum VectorEnrichmentJobDocumentType {
  CSV = "CSV",
}

/**
 * <p>The input structure for the InputConfig in a VectorEnrichmentJob.</p>
 */
export interface VectorEnrichmentJobInputConfig {
  /**
   * <p/>
   */
  DocumentType: VectorEnrichmentJobDocumentType | string | undefined;

  /**
   * <p/>
   */
  DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput | undefined;
}

/**
 * <p/>
 */
export interface MapMatchingConfig {
  /**
   * <p/>
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
 * <p/>
 */
export interface ReverseGeocodingConfig {
  /**
   * <p/>
   */
  YAttributeName: string | undefined;

  /**
   * <p/>
   */
  XAttributeName: string | undefined;
}

/**
 * <p>It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.</p>
 */
export type VectorEnrichmentJobConfig =
  | VectorEnrichmentJobConfig.MapMatchingConfigMember
  | VectorEnrichmentJobConfig.ReverseGeocodingConfigMember
  | VectorEnrichmentJobConfig.$UnknownMember;

export namespace VectorEnrichmentJobConfig {
  /**
   * <p/>
   */
  export interface ReverseGeocodingConfigMember {
    ReverseGeocodingConfig: ReverseGeocodingConfig;
    MapMatchingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p/>
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

export enum VectorEnrichmentJobStatus {
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  INITIALIZING = "INITIALIZING",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export enum VectorEnrichmentJobType {
  MAP_MATCHING = "MAP_MATCHING",
  REVERSE_GEOCODING = "REVERSE_GEOCODING",
}

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
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
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
 * <p/>
 */
export interface Properties {
  /**
   * <p/>
   */
  EoCloudCover?: number;

  /**
   * <p/>
   */
  ViewOffNadir?: number;

  /**
   * <p/>
   */
  ViewSunAzimuth?: number;

  /**
   * <p/>
   */
  ViewSunElevation?: number;

  /**
   * <p/>
   */
  Platform?: string;

  /**
   * <p/>
   */
  LandsatCloudCoverLand?: number;
}

/**
 * <p>Structure representing the items in the response for SearchRasterDataCollection.</p>
 */
export interface ItemSource {
  /**
   * <p>A unique Id for the source item.</p>
   */
  Id: string | undefined;

  /**
   * <p/>
   */
  Geometry: Geometry | undefined;

  /**
   * <p/>
   */
  Assets?: Record<string, AssetValue>;

  /**
   * <p/>
   */
  DateTime: Date | undefined;

  /**
   * <p/>
   */
  Properties?: Properties;
}

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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to tag.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Each tag consists of a key and a value.</p>
   */
  Tags?: Record<string, string>;
}

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
 * <p>This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters.</p>
 */
export interface RasterDataCollectionQueryWithBandFilterInput {
  /**
   * <p/>
   */
  TimeRangeFilter: TimeRangeFilterInput | undefined;

  /**
   * <p/>
   */
  AreaOfInterest?: AreaOfInterest;

  /**
   * <p/>
   */
  PropertyFilters?: PropertyFilters;

  /**
   * <p/>
   */
  BandFilter?: string[];
}

export interface SearchRasterDataCollectionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the raster data collection.</p>
   */
  Arn: string | undefined;

  /**
   * <p/>
   */
  RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export interface SearchRasterDataCollectionOutput {
  /**
   * <p/>
   */
  ApproximateResultCount: number | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p/>
   */
  Items?: ItemSource[];
}

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

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
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
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
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

export interface StopVectorEnrichmentJobInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Vector Enrichment job.</p>
   */
  Arn: string | undefined;
}

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
export const AssetValueFilterSensitiveLog = (obj: AssetValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OperationFilterSensitiveLog = (obj: Operation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomIndicesInputFilterSensitiveLog = (obj: CustomIndicesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BandMathConfigInputFilterSensitiveLog = (obj: BandMathConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudMaskingConfigInputFilterSensitiveLog = (obj: CloudMaskingConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudRemovalConfigInputFilterSensitiveLog = (obj: CloudRemovalConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RasterDataCollectionMetadataFilterSensitiveLog = (obj: RasterDataCollectionMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEarthObservationJobInputFilterSensitiveLog = (obj: DeleteEarthObservationJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEarthObservationJobOutputFilterSensitiveLog = (obj: DeleteEarthObservationJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVectorEnrichmentJobInputFilterSensitiveLog = (obj: DeleteVectorEnrichmentJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVectorEnrichmentJobOutputFilterSensitiveLog = (obj: DeleteVectorEnrichmentJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportS3DataInputFilterSensitiveLog = (obj: ExportS3DataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputConfigInputFilterSensitiveLog = (obj: OutputConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportEarthObservationJobInputFilterSensitiveLog = (obj: ExportEarthObservationJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportEarthObservationJobOutputFilterSensitiveLog = (obj: ExportEarthObservationJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEarthObservationJobInputFilterSensitiveLog = (obj: GetEarthObservationJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EarthObservationJobErrorDetailsFilterSensitiveLog = (obj: EarthObservationJobErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportErrorDetailsOutputFilterSensitiveLog = (obj: ExportErrorDetailsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportErrorDetailsFilterSensitiveLog = (obj: ExportErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataInputFilterSensitiveLog = (obj: S3DataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EojDataSourceConfigInputFilterSensitiveLog = (obj: EojDataSourceConfigInput): any => {
  if (obj.S3Data !== undefined) return { S3Data: S3DataInputFilterSensitiveLog(obj.S3Data) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EoCloudCoverInputFilterSensitiveLog = (obj: EoCloudCoverInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LandsatCloudCoverLandInputFilterSensitiveLog = (obj: LandsatCloudCoverLandInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformInputFilterSensitiveLog = (obj: PlatformInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViewOffNadirInputFilterSensitiveLog = (obj: ViewOffNadirInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViewSunAzimuthInputFilterSensitiveLog = (obj: ViewSunAzimuthInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViewSunElevationInputFilterSensitiveLog = (obj: ViewSunElevationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyFilterSensitiveLog = (obj: Property): any => {
  if (obj.EoCloudCover !== undefined) return { EoCloudCover: EoCloudCoverInputFilterSensitiveLog(obj.EoCloudCover) };
  if (obj.ViewOffNadir !== undefined) return { ViewOffNadir: ViewOffNadirInputFilterSensitiveLog(obj.ViewOffNadir) };
  if (obj.ViewSunAzimuth !== undefined)
    return { ViewSunAzimuth: ViewSunAzimuthInputFilterSensitiveLog(obj.ViewSunAzimuth) };
  if (obj.ViewSunElevation !== undefined)
    return { ViewSunElevation: ViewSunElevationInputFilterSensitiveLog(obj.ViewSunElevation) };
  if (obj.Platform !== undefined) return { Platform: PlatformInputFilterSensitiveLog(obj.Platform) };
  if (obj.LandsatCloudCoverLand !== undefined)
    return { LandsatCloudCoverLand: LandsatCloudCoverLandInputFilterSensitiveLog(obj.LandsatCloudCoverLand) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PropertyFilterFilterSensitiveLog = (obj: PropertyFilter): any => ({
  ...obj,
  ...(obj.Property && { Property: PropertyFilterSensitiveLog(obj.Property) }),
});

/**
 * @internal
 */
export const PropertyFiltersFilterSensitiveLog = (obj: PropertyFilters): any => ({
  ...obj,
  ...(obj.Properties && { Properties: obj.Properties.map((item) => PropertyFilterFilterSensitiveLog(item)) }),
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
export const RasterDataCollectionQueryOutputFilterSensitiveLog = (obj: RasterDataCollectionQueryOutput): any => ({
  ...obj,
  ...(obj.TimeRangeFilter && { TimeRangeFilter: SENSITIVE_STRING }),
  ...(obj.AreaOfInterest && { AreaOfInterest: AreaOfInterestFilterSensitiveLog(obj.AreaOfInterest) }),
  ...(obj.PropertyFilters && { PropertyFilters: PropertyFiltersFilterSensitiveLog(obj.PropertyFilters) }),
});

/**
 * @internal
 */
export const InputConfigOutputFilterSensitiveLog = (obj: InputConfigOutput): any => ({
  ...obj,
  ...(obj.DataSourceConfig && { DataSourceConfig: EojDataSourceConfigInputFilterSensitiveLog(obj.DataSourceConfig) }),
  ...(obj.RasterDataCollectionQuery && {
    RasterDataCollectionQuery: RasterDataCollectionQueryOutputFilterSensitiveLog(obj.RasterDataCollectionQuery),
  }),
});

/**
 * @internal
 */
export const GeoMosaicConfigInputFilterSensitiveLog = (obj: GeoMosaicConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LandCoverSegmentationConfigInputFilterSensitiveLog = (obj: LandCoverSegmentationConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDefinedFilterSensitiveLog = (obj: UserDefined): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputResolutionResamplingInputFilterSensitiveLog = (obj: OutputResolutionResamplingInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResamplingConfigInputFilterSensitiveLog = (obj: ResamplingConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputResolutionStackInputFilterSensitiveLog = (obj: OutputResolutionStackInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StackConfigInputFilterSensitiveLog = (obj: StackConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemporalStatisticsConfigInputFilterSensitiveLog = (obj: TemporalStatisticsConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZonalStatisticsConfigInputFilterSensitiveLog = (obj: ZonalStatisticsConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobConfigInputFilterSensitiveLog = (obj: JobConfigInput): any => {
  if (obj.BandMathConfig !== undefined)
    return { BandMathConfig: BandMathConfigInputFilterSensitiveLog(obj.BandMathConfig) };
  if (obj.ResamplingConfig !== undefined)
    return { ResamplingConfig: ResamplingConfigInputFilterSensitiveLog(obj.ResamplingConfig) };
  if (obj.TemporalStatisticsConfig !== undefined)
    return { TemporalStatisticsConfig: TemporalStatisticsConfigInputFilterSensitiveLog(obj.TemporalStatisticsConfig) };
  if (obj.CloudRemovalConfig !== undefined)
    return { CloudRemovalConfig: CloudRemovalConfigInputFilterSensitiveLog(obj.CloudRemovalConfig) };
  if (obj.ZonalStatisticsConfig !== undefined)
    return { ZonalStatisticsConfig: ZonalStatisticsConfigInputFilterSensitiveLog(obj.ZonalStatisticsConfig) };
  if (obj.GeoMosaicConfig !== undefined)
    return { GeoMosaicConfig: GeoMosaicConfigInputFilterSensitiveLog(obj.GeoMosaicConfig) };
  if (obj.StackConfig !== undefined) return { StackConfig: StackConfigInputFilterSensitiveLog(obj.StackConfig) };
  if (obj.CloudMaskingConfig !== undefined)
    return { CloudMaskingConfig: CloudMaskingConfigInputFilterSensitiveLog(obj.CloudMaskingConfig) };
  if (obj.LandCoverSegmentationConfig !== undefined)
    return {
      LandCoverSegmentationConfig: LandCoverSegmentationConfigInputFilterSensitiveLog(obj.LandCoverSegmentationConfig),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OutputBandFilterSensitiveLog = (obj: OutputBand): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEarthObservationJobOutputFilterSensitiveLog = (obj: GetEarthObservationJobOutput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: InputConfigOutputFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: JobConfigInputFilterSensitiveLog(obj.JobConfig) }),
});

/**
 * @internal
 */
export const GetTileInputFilterSensitiveLog = (obj: GetTileInput): any => ({
  ...obj,
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
export const ListEarthObservationJobOutputConfigFilterSensitiveLog = (
  obj: ListEarthObservationJobOutputConfig
): any => ({
  ...obj,
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
export const RasterDataCollectionQueryInputFilterSensitiveLog = (obj: RasterDataCollectionQueryInput): any => ({
  ...obj,
  ...(obj.TimeRangeFilter && { TimeRangeFilter: SENSITIVE_STRING }),
  ...(obj.AreaOfInterest && { AreaOfInterest: AreaOfInterestFilterSensitiveLog(obj.AreaOfInterest) }),
  ...(obj.PropertyFilters && { PropertyFilters: PropertyFiltersFilterSensitiveLog(obj.PropertyFilters) }),
});

/**
 * @internal
 */
export const InputConfigInputFilterSensitiveLog = (obj: InputConfigInput): any => ({
  ...obj,
  ...(obj.DataSourceConfig && { DataSourceConfig: EojDataSourceConfigInputFilterSensitiveLog(obj.DataSourceConfig) }),
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
  ...(obj.JobConfig && { JobConfig: JobConfigInputFilterSensitiveLog(obj.JobConfig) }),
});

/**
 * @internal
 */
export const StartEarthObservationJobOutputFilterSensitiveLog = (obj: StartEarthObservationJobOutput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: InputConfigOutputFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: JobConfigInputFilterSensitiveLog(obj.JobConfig) }),
});

/**
 * @internal
 */
export const StopEarthObservationJobInputFilterSensitiveLog = (obj: StopEarthObservationJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopEarthObservationJobOutputFilterSensitiveLog = (obj: StopEarthObservationJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VectorEnrichmentJobS3DataFilterSensitiveLog = (obj: VectorEnrichmentJobS3Data): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportVectorEnrichmentJobOutputConfigFilterSensitiveLog = (
  obj: ExportVectorEnrichmentJobOutputConfig
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportVectorEnrichmentJobInputFilterSensitiveLog = (obj: ExportVectorEnrichmentJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportVectorEnrichmentJobOutputFilterSensitiveLog = (obj: ExportVectorEnrichmentJobOutput): any => ({
  ...obj,
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
export const GetRasterDataCollectionInputFilterSensitiveLog = (obj: GetRasterDataCollectionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRasterDataCollectionOutputFilterSensitiveLog = (obj: GetRasterDataCollectionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVectorEnrichmentJobInputFilterSensitiveLog = (obj: GetVectorEnrichmentJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VectorEnrichmentJobErrorDetailsFilterSensitiveLog = (obj: VectorEnrichmentJobErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VectorEnrichmentJobExportErrorDetailsFilterSensitiveLog = (
  obj: VectorEnrichmentJobExportErrorDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VectorEnrichmentJobDataSourceConfigInputFilterSensitiveLog = (
  obj: VectorEnrichmentJobDataSourceConfigInput
): any => {
  if (obj.S3Data !== undefined) return { S3Data: VectorEnrichmentJobS3DataFilterSensitiveLog(obj.S3Data) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const VectorEnrichmentJobInputConfigFilterSensitiveLog = (obj: VectorEnrichmentJobInputConfig): any => ({
  ...obj,
  ...(obj.DataSourceConfig && {
    DataSourceConfig: VectorEnrichmentJobDataSourceConfigInputFilterSensitiveLog(obj.DataSourceConfig),
  }),
});

/**
 * @internal
 */
export const MapMatchingConfigFilterSensitiveLog = (obj: MapMatchingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReverseGeocodingConfigFilterSensitiveLog = (obj: ReverseGeocodingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VectorEnrichmentJobConfigFilterSensitiveLog = (obj: VectorEnrichmentJobConfig): any => {
  if (obj.ReverseGeocodingConfig !== undefined)
    return { ReverseGeocodingConfig: ReverseGeocodingConfigFilterSensitiveLog(obj.ReverseGeocodingConfig) };
  if (obj.MapMatchingConfig !== undefined)
    return { MapMatchingConfig: MapMatchingConfigFilterSensitiveLog(obj.MapMatchingConfig) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetVectorEnrichmentJobOutputFilterSensitiveLog = (obj: GetVectorEnrichmentJobOutput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: VectorEnrichmentJobInputConfigFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: VectorEnrichmentJobConfigFilterSensitiveLog(obj.JobConfig) }),
});

/**
 * @internal
 */
export const PropertiesFilterSensitiveLog = (obj: Properties): any => ({
  ...obj,
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
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
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
export const ListVectorEnrichmentJobOutputConfigFilterSensitiveLog = (
  obj: ListVectorEnrichmentJobOutputConfig
): any => ({
  ...obj,
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
  ...(obj.PropertyFilters && { PropertyFilters: PropertyFiltersFilterSensitiveLog(obj.PropertyFilters) }),
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

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartVectorEnrichmentJobInputFilterSensitiveLog = (obj: StartVectorEnrichmentJobInput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: VectorEnrichmentJobInputConfigFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: VectorEnrichmentJobConfigFilterSensitiveLog(obj.JobConfig) }),
});

/**
 * @internal
 */
export const StartVectorEnrichmentJobOutputFilterSensitiveLog = (obj: StartVectorEnrichmentJobOutput): any => ({
  ...obj,
  ...(obj.InputConfig && { InputConfig: VectorEnrichmentJobInputConfigFilterSensitiveLog(obj.InputConfig) }),
  ...(obj.JobConfig && { JobConfig: VectorEnrichmentJobConfigFilterSensitiveLog(obj.JobConfig) }),
});

/**
 * @internal
 */
export const StopVectorEnrichmentJobInputFilterSensitiveLog = (obj: StopVectorEnrichmentJobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopVectorEnrichmentJobOutputFilterSensitiveLog = (obj: StopVectorEnrichmentJobOutput): any => ({
  ...obj,
});
