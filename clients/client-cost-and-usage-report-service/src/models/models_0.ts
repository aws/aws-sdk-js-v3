// smithy-typescript generated code
import type {
  AdditionalArtifact,
  AWSRegion,
  CompressionFormat,
  LastStatus,
  ReportFormat,
  ReportVersioning,
  SchemaElement,
  TimeUnit,
} from "./enums";

/**
 * Deletes the specified report.
 *
 * @public
 */
export interface DeleteReportDefinitionRequest {
  /**
   * The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.
   *
   * @public
   */
  ReportName: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response.
 *
 * @public
 */
export interface DeleteReportDefinitionResponse {
  /**
   * Whether the deletion was successful or not.
   *
   * @public
   */
  ResponseMessage?: string | undefined;
}

/**
 * Requests a Amazon Web Services Cost and Usage Report list owned by the account.
 *
 * @public
 */
export interface DescribeReportDefinitionsRequest {
  /**
   * The maximum number of results that Amazon Web Services returns for the operation.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A generic string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A two element dictionary with a `lastDelivery` and `lastStatus` key whose values describe the date and status of the last delivered report for a particular report definition.
 *
 * @public
 */
export interface ReportStatus {
  /**
   * A timestamp that gives the date of a report delivery.
   *
   * @public
   */
  lastDelivery?: string | undefined;

  /**
   * An enum that gives the status of a report delivery.
   *
   * @public
   */
  lastStatus?: LastStatus | undefined;
}

/**
 * The definition of Amazon Web Services Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
 *
 * @public
 */
export interface ReportDefinition {
  /**
   * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
   *
   * @public
   */
  ReportName: string | undefined;

  /**
   * The length of time covered by the report.
   *
   * @public
   */
  TimeUnit: TimeUnit | undefined;

  /**
   * The format that Amazon Web Services saves the report in.
   *
   * @public
   */
  Format: ReportFormat | undefined;

  /**
   * The compression format that Amazon Web Services uses for the report.
   *
   * @public
   */
  Compression: CompressionFormat | undefined;

  /**
   * A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.
   *
   * @public
   */
  AdditionalSchemaElements: SchemaElement[] | undefined;

  /**
   * The S3 bucket where Amazon Web Services delivers the report.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. Your prefix can't include spaces.
   *
   * @public
   */
  S3Prefix: string | undefined;

  /**
   * The region of the S3 bucket that Amazon Web Services delivers the report into.
   *
   * @public
   */
  S3Region: AWSRegion | undefined;

  /**
   * A list of manifests that you want Amazon Web Services to create for this report.
   *
   * @public
   */
  AdditionalArtifacts?: AdditionalArtifact[] | undefined;

  /**
   * Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.
   *
   * @public
   */
  RefreshClosedReports?: boolean | undefined;

  /**
   * Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
   *
   * @public
   */
  ReportVersioning?: ReportVersioning | undefined;

  /**
   * The Amazon resource name of the billing view. The `BillingViewArn` is needed to create Amazon Web Services Cost and Usage Report for each billing group maintained in the Amazon Web Services Billing Conductor service. The `BillingViewArn` for a billing group can be constructed as: `arn:aws:billing::payer-account-id:billingview/billing-group-primary-account-id`
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * The status of the report.
   *
   * @public
   */
  ReportStatus?: ReportStatus | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response.
 *
 * @public
 */
export interface DescribeReportDefinitionsResponse {
  /**
   * An Amazon Web Services Cost and Usage Report list owned by the account.
   *
   * @public
   */
  ReportDefinitions?: ReportDefinition[] | undefined;

  /**
   * A generic string.
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
   * The report name of the report definition that tags are to be returned for.
   *
   * @public
   */
  ReportName: string | undefined;
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a report definition.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag. Tag keys are case sensitive. Each report definition can only have up to one tag with the same key. If you try to add an existing tag with the same key, the existing tag value will be updated to the new value.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag. Tag values are case-sensitive. This can be an empty string.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags assigned to the report definition resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyReportDefinitionRequest {
  /**
   * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
   *
   * @public
   */
  ReportName: string | undefined;

  /**
   * The definition of Amazon Web Services Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
   *
   * @public
   */
  ReportDefinition: ReportDefinition | undefined;
}

/**
 * @public
 */
export interface ModifyReportDefinitionResponse {}

/**
 * Creates a Cost and Usage Report.
 *
 * @public
 */
export interface PutReportDefinitionRequest {
  /**
   * Represents the output of the PutReportDefinition operation. The content consists of the detailed metadata and data file information.
   *
   * @public
   */
  ReportDefinition: ReportDefinition | undefined;

  /**
   * The tags to be assigned to the report definition resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface PutReportDefinitionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The report name of the report definition that tags are to be associated with.
   *
   * @public
   */
  ReportName: string | undefined;

  /**
   * The tags to be assigned to the report definition resource.
   *
   * @public
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
   * The report name of the report definition that tags are to be disassociated from.
   *
   * @public
   */
  ReportName: string | undefined;

  /**
   * The tags to be disassociated from the report definition resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
