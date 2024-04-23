// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CostAndUsageReportServiceServiceException as __BaseException } from "./CostAndUsageReportServiceServiceException";

/**
 * @public
 * @enum
 */
export const AdditionalArtifact = {
  ATHENA: "ATHENA",
  QUICKSIGHT: "QUICKSIGHT",
  REDSHIFT: "REDSHIFT",
} as const;

/**
 * @public
 */
export type AdditionalArtifact = (typeof AdditionalArtifact)[keyof typeof AdditionalArtifact];

/**
 * @public
 * <p>Deletes the specified report.</p>
 */
export interface DeleteReportDefinitionRequest {
  /**
   * @public
   * <p>The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.</p>
   */
  ReportName: string | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DeleteReportDefinitionResponse {
  /**
   * @public
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
   * @public
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * <p>Requests a Amazon Web Services Cost and Usage Report list owned by the account.</p>
 */
export interface DescribeReportDefinitionsRequest {
  /**
   * @public
   * <p>The maximum number of results that Amazon Web Services returns for the operation.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SchemaElement = {
  MANUAL_DISCOUNT_COMPATIBILITY: "MANUAL_DISCOUNT_COMPATIBILITY",
  RESOURCES: "RESOURCES",
  SPLIT_COST_ALLOCATION_DATA: "SPLIT_COST_ALLOCATION_DATA",
} as const;

/**
 * @public
 */
export type SchemaElement = (typeof SchemaElement)[keyof typeof SchemaElement];

/**
 * @public
 * @enum
 */
export const CompressionFormat = {
  GZIP: "GZIP",
  Parquet: "Parquet",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type CompressionFormat = (typeof CompressionFormat)[keyof typeof CompressionFormat];

/**
 * @public
 * @enum
 */
export const ReportFormat = {
  CSV: "textORcsv",
  Parquet: "Parquet",
} as const;

/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

/**
 * @public
 * @enum
 */
export const LastStatus = {
  ERROR_NO_BUCKET: "ERROR_NO_BUCKET",
  ERROR_PERMISSIONS: "ERROR_PERMISSIONS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type LastStatus = (typeof LastStatus)[keyof typeof LastStatus];

/**
 * @public
 * <p>A two element dictionary with a <code>lastDelivery</code> and <code>lastStatus</code> key
 *       whose values describe the date and status of the last delivered report for a particular report
 *       definition.</p>
 */
export interface ReportStatus {
  /**
   * @public
   * <p>A timestamp that gives the date of a report delivery.</p>
   */
  lastDelivery?: string;

  /**
   * @public
   * <p>An enum that gives the status of a report delivery.</p>
   */
  lastStatus?: LastStatus;
}

/**
 * @public
 * @enum
 */
export const ReportVersioning = {
  CREATE_NEW_REPORT: "CREATE_NEW_REPORT",
  OVERWRITE_REPORT: "OVERWRITE_REPORT",
} as const;

/**
 * @public
 */
export type ReportVersioning = (typeof ReportVersioning)[keyof typeof ReportVersioning];

/**
 * @public
 * @enum
 */
export const AWSRegion = {
  BAHRAIN: "me-south-1",
  BEIJING: "cn-north-1",
  CANADA_CENTRAL: "ca-central-1",
  CAPE_TOWN: "af-south-1",
  FRANKFURT: "eu-central-1",
  HONG_KONG: "ap-east-1",
  HYDERABAD: "ap-south-2",
  IRELAND: "eu-west-1",
  JAKARTA: "ap-southeast-3",
  LONDON: "eu-west-2",
  MILANO: "eu-south-1",
  MUMBAI: "ap-south-1",
  NINGXIA: "cn-northwest-1",
  NORTHERN_CALIFORNIA: "us-west-1",
  OHIO: "us-east-2",
  OREGON: "us-west-2",
  OSAKA: "ap-northeast-3",
  PARIS: "eu-west-3",
  SAO_PAULO: "sa-east-1",
  SEOUL: "ap-northeast-2",
  SINGAPORE: "ap-southeast-1",
  SPAIN: "eu-south-2",
  STOCKHOLM: "eu-north-1",
  SYDNEY: "ap-southeast-2",
  TOKYO: "ap-northeast-1",
  UAE: "me-central-1",
  US_STANDARD: "us-east-1",
  ZURICH: "eu-central-2",
} as const;

/**
 * @public
 */
export type AWSRegion = (typeof AWSRegion)[keyof typeof AWSRegion];

/**
 * @public
 * @enum
 */
export const TimeUnit = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
} as const;

/**
 * @public
 */
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

/**
 * @public
 * <p>The definition of Amazon Web Services Cost and Usage Report. You can specify the report name,
 *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
 *          elements in the definition.
 *     </p>
 */
export interface ReportDefinition {
  /**
   * @public
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName: string | undefined;

  /**
   * @public
   * <p>The length of time covered by the report. </p>
   */
  TimeUnit: TimeUnit | undefined;

  /**
   * @public
   * <p>The format that Amazon Web Services saves the report in.</p>
   */
  Format: ReportFormat | undefined;

  /**
   * @public
   * <p>The compression format that Amazon Web Services uses for the report.</p>
   */
  Compression: CompressionFormat | undefined;

  /**
   * @public
   * <p>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. </p>
   */
  AdditionalSchemaElements: SchemaElement[] | undefined;

  /**
   * @public
   * <p>The S3 bucket where Amazon Web Services delivers the report.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p>The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. Your prefix
   *         can't include spaces.</p>
   */
  S3Prefix: string | undefined;

  /**
   * @public
   * <p>The region of the S3 bucket that Amazon Web Services delivers the report into.</p>
   */
  S3Region: AWSRegion | undefined;

  /**
   * @public
   * <p>A list of manifests that you want Amazon Web Services to create for this report.</p>
   */
  AdditionalArtifacts?: AdditionalArtifact[];

  /**
   * @public
   * <p>Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to
   *       previous months. These charges can include refunds, credits, or support fees.</p>
   */
  RefreshClosedReports?: boolean;

  /**
   * @public
   * <p>Whether you want Amazon Web Services to overwrite the previous version of each report or
   *          to deliver the report in addition to the previous versions.</p>
   */
  ReportVersioning?: ReportVersioning;

  /**
   * @public
   * <p>
   *       The Amazon resource name of the billing view. The <code>BillingViewArn</code> is needed to create Amazon Web Services Cost and Usage Report for each billing group maintained in the Amazon Web Services Billing Conductor service. The <code>BillingViewArn</code> for a billing group can be constructed as: <code>arn:aws:billing::payer-account-id:billingview/billing-group-primary-account-id</code>
   *          </p>
   */
  BillingViewArn?: string;

  /**
   * @public
   * <p>The status of the report.</p>
   */
  ReportStatus?: ReportStatus;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DescribeReportDefinitionsResponse {
  /**
   * @public
   * <p>An Amazon Web Services Cost and Usage Report list owned by the account.</p>
   */
  ReportDefinitions?: ReportDefinition[];

  /**
   * @public
   * <p>A generic string.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The report name of the report definition that tags are to be returned for.</p>
   */
  ReportName: string | undefined;
}

/**
 * @public
 * <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a report
 *       definition.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag. Tag keys are case sensitive. Each report definition can only have up
   *       to one tag with the same key. If you try to add an existing tag with the same key, the
   *       existing tag value will be updated to the new value.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag. Tag values are case-sensitive. This can be an empty string.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags assigned to the report definition resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>The specified report (<code>ReportName</code>) in the request doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message to show the detail of the exception.</p>
   */
  Message?: string;
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
  }
}

/**
 * @public
 */
export interface ModifyReportDefinitionRequest {
  /**
   * @public
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   */
  ReportName: string | undefined;

  /**
   * @public
   * <p>The definition of Amazon Web Services Cost and Usage Report. You can specify the report name,
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
   * @public
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
   * @public
   * <p>Represents the output of the PutReportDefinition operation. The content consists of the detailed
   *       metadata and data file information. </p>
   */
  ReportDefinition: ReportDefinition | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the report definition resource.</p>
   */
  Tags?: Tag[];
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
   * @public
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
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The report name of the report definition that tags are to be associated with.</p>
   */
  ReportName: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the report definition resource.</p>
   */
  Tags: Tag[] | undefined;
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
   * @public
   * <p>The report name of the report definition that tags are to be disassociated
   *       from.</p>
   */
  ReportName: string | undefined;

  /**
   * @public
   * <p>The tags to be disassociated from the report definition resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
