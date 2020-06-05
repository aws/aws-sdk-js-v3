import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdditionalArtifact {
  ATHENA = "ATHENA",
  QUICKSIGHT = "QUICKSIGHT",
  REDSHIFT = "REDSHIFT"
}

export enum AWSRegion {
  FRANKFURT = "eu-central-1",
  HONG_KONG = "ap-east-1",
  IRELAND = "eu-west-1",
  NORTHERN_CALIFORNIA = "us-west-1",
  OREGON = "us-west-2",
  OSAKA = "ap-northeast-3",
  SINGAPORE = "ap-southeast-1",
  STOCKHOLM = "eu-north-1",
  SYDNEY = "ap-southeast-2",
  TOKYO = "ap-northeast-1",
  US_STANDARD = "us-east-1"
}

export enum CompressionFormat {
  GZIP = "GZIP",
  Parquet = "Parquet",
  ZIP = "ZIP"
}

/**
 * <p>Deletes the specified report.</p>
 */
export interface DeleteReportDefinitionRequest {
  __type?: "DeleteReportDefinitionRequest";
  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName?: string;
}

export namespace DeleteReportDefinitionRequest {
  export const filterSensitiveLog = (
    obj: DeleteReportDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReportDefinitionRequest =>
    __isa(o, "DeleteReportDefinitionRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DeleteReportDefinitionResponse {
  __type?: "DeleteReportDefinitionResponse";
  /**
   * <p>Whether the deletion was successful or not.</p>
   */
  ResponseMessage?: string;
}

export namespace DeleteReportDefinitionResponse {
  export const filterSensitiveLog = (
    obj: DeleteReportDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReportDefinitionResponse =>
    __isa(o, "DeleteReportDefinitionResponse");
}

/**
 * <p>Requests a list of AWS Cost and Usage reports owned by the account.</p>
 */
export interface DescribeReportDefinitionsRequest {
  __type?: "DescribeReportDefinitionsRequest";
  /**
   * <p>The maximum number of results that AWS returns for the operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>A generic string.</p>
   */
  NextToken?: string;
}

export namespace DescribeReportDefinitionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeReportDefinitionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReportDefinitionsRequest =>
    __isa(o, "DescribeReportDefinitionsRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DescribeReportDefinitionsResponse {
  __type?: "DescribeReportDefinitionsResponse";
  /**
   * <p>A generic string.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of AWS Cost and Usage reports owned by the account.</p>
   */
  ReportDefinitions?: ReportDefinition[];
}

export namespace DescribeReportDefinitionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeReportDefinitionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReportDefinitionsResponse =>
    __isa(o, "DescribeReportDefinitionsResponse");
}

/**
 * <p>A report with the specified name already exists in the account. Specify a different report name.</p>
 */
export interface DuplicateReportNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateReportNameException";
  $fault: "client";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}

export namespace DuplicateReportNameException {
  export const filterSensitiveLog = (
    obj: DuplicateReportNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateReportNameException =>
    __isa(o, "DuplicateReportNameException");
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export interface InternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalErrorException =>
    __isa(o, "InternalErrorException");
}

export interface ModifyReportDefinitionRequest {
  __type?: "ModifyReportDefinitionRequest";
  /**
   * <p>The definition of AWS Cost and Usage Report. You can specify the report name,
   *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
   *          elements in the definition.
   *     </p>
   */
  ReportDefinition: ReportDefinition | undefined;

  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName: string | undefined;
}

export namespace ModifyReportDefinitionRequest {
  export const filterSensitiveLog = (
    obj: ModifyReportDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReportDefinitionRequest =>
    __isa(o, "ModifyReportDefinitionRequest");
}

export interface ModifyReportDefinitionResponse {
  __type?: "ModifyReportDefinitionResponse";
}

export namespace ModifyReportDefinitionResponse {
  export const filterSensitiveLog = (
    obj: ModifyReportDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReportDefinitionResponse =>
    __isa(o, "ModifyReportDefinitionResponse");
}

/**
 * <p>Creates a Cost and Usage Report.</p>
 */
export interface PutReportDefinitionRequest {
  __type?: "PutReportDefinitionRequest";
  /**
   * <p>Represents the output of the PutReportDefinition operation. The content consists of the detailed
   *       metadata and data file information. </p>
   */
  ReportDefinition: ReportDefinition | undefined;
}

export namespace PutReportDefinitionRequest {
  export const filterSensitiveLog = (obj: PutReportDefinitionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutReportDefinitionRequest =>
    __isa(o, "PutReportDefinitionRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 */
export interface PutReportDefinitionResponse {
  __type?: "PutReportDefinitionResponse";
}

export namespace PutReportDefinitionResponse {
  export const filterSensitiveLog = (
    obj: PutReportDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutReportDefinitionResponse =>
    __isa(o, "PutReportDefinitionResponse");
}

/**
 * <p>The definition of AWS Cost and Usage Report. You can specify the report name,
 *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
 *          elements in the definition.
 *     </p>
 */
export interface ReportDefinition {
  __type?: "ReportDefinition";
  /**
   * <p>A list of manifests that you want Amazon Web Services to create for this report.</p>
   */
  AdditionalArtifacts?: (AdditionalArtifact | string)[];

  /**
   * <p>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. </p>
   */
  AdditionalSchemaElements: (SchemaElement | string)[] | undefined;

  /**
   * <p>The compression format that AWS uses for the report.</p>
   */
  Compression: CompressionFormat | string | undefined;

  /**
   * <p>The format that AWS saves the report in.</p>
   */
  Format: ReportFormat | string | undefined;

  /**
   * <p>Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to
   *       previous months. These charges can include refunds, credits, or support fees.</p>
   */
  RefreshClosedReports?: boolean;

  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName: string | undefined;

  /**
   * <p>Whether you want Amazon Web Services to overwrite the previous version of each report or
   *          to deliver the report in addition to the previous versions.</p>
   */
  ReportVersioning?: ReportVersioning | string;

  /**
   * <p>The S3 bucket where AWS delivers the report.</p>
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix that AWS adds to the report name when AWS delivers the report. Your prefix
   *         can't include spaces.</p>
   */
  S3Prefix: string | undefined;

  /**
   * <p>The region of the S3 bucket that AWS delivers the report into.</p>
   */
  S3Region: AWSRegion | string | undefined;

  /**
   * <p>The length of time covered by the report. </p>
   */
  TimeUnit: TimeUnit | string | undefined;
}

export namespace ReportDefinition {
  export const filterSensitiveLog = (obj: ReportDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReportDefinition =>
    __isa(o, "ReportDefinition");
}

export enum ReportFormat {
  CSV = "textORcsv",
  Parquet = "Parquet"
}

/**
 * <p>This account already has five reports defined. To define a new report, you must delete an existing report.</p>
 */
export interface ReportLimitReachedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ReportLimitReachedException";
  $fault: "client";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}

export namespace ReportLimitReachedException {
  export const filterSensitiveLog = (
    obj: ReportLimitReachedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReportLimitReachedException =>
    __isa(o, "ReportLimitReachedException");
}

export enum ReportVersioning {
  CREATE_NEW_REPORT = "CREATE_NEW_REPORT",
  OVERWRITE_REPORT = "OVERWRITE_REPORT"
}

export enum SchemaElement {
  RESOURCES = "RESOURCES"
}

export enum TimeUnit {
  DAILY = "DAILY",
  HOURLY = "HOURLY"
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}
