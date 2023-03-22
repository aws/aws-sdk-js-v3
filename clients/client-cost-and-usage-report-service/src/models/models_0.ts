// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CostAndUsageReportServiceServiceException as __BaseException } from "./CostAndUsageReportServiceServiceException";

/**
 * @public
 */
export enum AdditionalArtifact {
  ATHENA = "ATHENA",
  QUICKSIGHT = "QUICKSIGHT",
  REDSHIFT = "REDSHIFT",
}

/**
 * @public
 * <p>Deletes the specified report.</p>
 */
export interface DeleteReportDefinitionRequest {
  /**
   * <p>The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.</p>
   */
  ReportName?: string;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DeleteReportDefinitionResponse {
  /**
   * <p>Whether the deletion was successful or not.</p>
   */
  ResponseMessage?: string;
}

/**
 * @public
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
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
  }
}

/**
 * @public
 * <p>Requests a list of AWS Cost and Usage reports owned by the account.</p>
 */
export interface DescribeReportDefinitionsRequest {
  /**
   * <p>The maximum number of results that AWS returns for the operation.</p>
   */
  MaxResults?: number;

  /**
   * <p>A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export enum SchemaElement {
  RESOURCES = "RESOURCES",
}

/**
 * @public
 */
export enum CompressionFormat {
  GZIP = "GZIP",
  Parquet = "Parquet",
  ZIP = "ZIP",
}

/**
 * @public
 */
export enum ReportFormat {
  CSV = "textORcsv",
  Parquet = "Parquet",
}

/**
 * @public
 */
export enum ReportVersioning {
  CREATE_NEW_REPORT = "CREATE_NEW_REPORT",
  OVERWRITE_REPORT = "OVERWRITE_REPORT",
}

/**
 * @public
 */
export enum AWSRegion {
  BAHRAIN = "me-south-1",
  BEIJING = "cn-north-1",
  CANADA_CENTRAL = "ca-central-1",
  CAPE_TOWN = "af-south-1",
  FRANKFURT = "eu-central-1",
  HONG_KONG = "ap-east-1",
  IRELAND = "eu-west-1",
  JAKARTA = "ap-southeast-3",
  LONDON = "eu-west-2",
  MILANO = "eu-south-1",
  MUMBAI = "ap-south-1",
  NINGXIA = "cn-northwest-1",
  NORTHERN_CALIFORNIA = "us-west-1",
  OHIO = "us-east-2",
  OREGON = "us-west-2",
  OSAKA = "ap-northeast-3",
  PARIS = "eu-west-3",
  SAO_PAULO = "sa-east-1",
  SEOUL = "ap-northeast-2",
  SINGAPORE = "ap-southeast-1",
  SPAIN = "eu-south-2",
  STOCKHOLM = "eu-north-1",
  SYDNEY = "ap-southeast-2",
  TOKYO = "ap-northeast-1",
  UAE = "me-central-1",
  US_STANDARD = "us-east-1",
}

/**
 * @public
 */
export enum TimeUnit {
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY",
}

/**
 * @public
 * <p>The definition of AWS Cost and Usage Report. You can specify the report name,
 *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
 *          elements in the definition.
 *     </p>
 */
export interface ReportDefinition {
  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName: string | undefined;

  /**
   * <p>The length of time covered by the report. </p>
   */
  TimeUnit: TimeUnit | string | undefined;

  /**
   * <p>The format that AWS saves the report in.</p>
   */
  Format: ReportFormat | string | undefined;

  /**
   * <p>The compression format that AWS uses for the report.</p>
   */
  Compression: CompressionFormat | string | undefined;

  /**
   * <p>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. </p>
   */
  AdditionalSchemaElements: (SchemaElement | string)[] | undefined;

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
   * <p>A list of manifests that you want Amazon Web Services to create for this report.</p>
   */
  AdditionalArtifacts?: (AdditionalArtifact | string)[];

  /**
   * <p>Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to
   *       previous months. These charges can include refunds, credits, or support fees.</p>
   */
  RefreshClosedReports?: boolean;

  /**
   * <p>Whether you want Amazon Web Services to overwrite the previous version of each report or
   *          to deliver the report in addition to the previous versions.</p>
   */
  ReportVersioning?: ReportVersioning | string;

  /**
   * <p>
   *       The Amazon resource name of the billing view. You can get this value by using the billing view service public APIs.
   *     </p>
   */
  BillingViewArn?: string;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DescribeReportDefinitionsResponse {
  /**
   * <p>A list of AWS Cost and Usage reports owned by the account.</p>
   */
  ReportDefinitions?: ReportDefinition[];

  /**
   * <p>A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ModifyReportDefinitionRequest {
  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName: string | undefined;

  /**
   * <p>The definition of AWS Cost and Usage Report. You can specify the report name,
   *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
   *          elements in the definition.
   *     </p>
   */
  ReportDefinition: ReportDefinition | undefined;
}

/**
 * @public
 */
export interface ModifyReportDefinitionResponse {}

/**
 * @public
 * <p>A report with the specified name already exists in the account. Specify a different report name.</p>
 */
export class DuplicateReportNameException extends __BaseException {
  readonly name: "DuplicateReportNameException" = "DuplicateReportNameException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateReportNameException, __BaseException>) {
    super({
      name: "DuplicateReportNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateReportNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Creates a Cost and Usage Report.</p>
 */
export interface PutReportDefinitionRequest {
  /**
   * <p>Represents the output of the PutReportDefinition operation. The content consists of the detailed
   *       metadata and data file information. </p>
   */
  ReportDefinition: ReportDefinition | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 */
export interface PutReportDefinitionResponse {}

/**
 * @public
 * <p>This account already has five reports defined. To define a new report, you must delete an existing report.</p>
 */
export class ReportLimitReachedException extends __BaseException {
  readonly name: "ReportLimitReachedException" = "ReportLimitReachedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReportLimitReachedException, __BaseException>) {
    super({
      name: "ReportLimitReachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReportLimitReachedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @internal
 */
export const DeleteReportDefinitionRequestFilterSensitiveLog = (obj: DeleteReportDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReportDefinitionResponseFilterSensitiveLog = (obj: DeleteReportDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportDefinitionsRequestFilterSensitiveLog = (obj: DescribeReportDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportDefinitionFilterSensitiveLog = (obj: ReportDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReportDefinitionsResponseFilterSensitiveLog = (obj: DescribeReportDefinitionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReportDefinitionRequestFilterSensitiveLog = (obj: ModifyReportDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyReportDefinitionResponseFilterSensitiveLog = (obj: ModifyReportDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutReportDefinitionRequestFilterSensitiveLog = (obj: PutReportDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutReportDefinitionResponseFilterSensitiveLog = (obj: PutReportDefinitionResponse): any => ({
  ...obj,
});
