// smithy-typescript generated code
import {
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
 * <p>Deletes the specified report.</p>
 * @public
 */
export interface DeleteReportDefinitionRequest {
  /**
   * <p>The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.</p>
   * @public
   */
  ReportName: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 * @public
 */
export interface DeleteReportDefinitionResponse {
  /**
   * <p>Whether the deletion was successful or not.</p>
   * @public
   */
  ResponseMessage?: string | undefined;
}

/**
 * <p>Requests a Amazon Web Services Cost and Usage Report list owned by the account.</p>
 * @public
 */
export interface DescribeReportDefinitionsRequest {
  /**
   * <p>The maximum number of results that Amazon Web Services returns for the operation.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A two element dictionary with a <code>lastDelivery</code> and <code>lastStatus</code> key
 *       whose values describe the date and status of the last delivered report for a particular report
 *       definition.</p>
 * @public
 */
export interface ReportStatus {
  /**
   * <p>A timestamp that gives the date of a report delivery.</p>
   * @public
   */
  lastDelivery?: string | undefined;

  /**
   * <p>An enum that gives the status of a report delivery.</p>
   * @public
   */
  lastStatus?: LastStatus | undefined;
}

/**
 * <p>The definition of Amazon Web Services Cost and Usage Report. You can specify the report name,
 *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
 *          elements in the definition.
 *     </p>
 * @public
 */
export interface ReportDefinition {
  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   * @public
   */
  ReportName: string | undefined;

  /**
   * <p>The length of time covered by the report. </p>
   * @public
   */
  TimeUnit: TimeUnit | undefined;

  /**
   * <p>The format that Amazon Web Services saves the report in.</p>
   * @public
   */
  Format: ReportFormat | undefined;

  /**
   * <p>The compression format that Amazon Web Services uses for the report.</p>
   * @public
   */
  Compression: CompressionFormat | undefined;

  /**
   * <p>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. </p>
   * @public
   */
  AdditionalSchemaElements: SchemaElement[] | undefined;

  /**
   * <p>The S3 bucket where Amazon Web Services delivers the report.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. Your prefix
   *         can't include spaces.</p>
   * @public
   */
  S3Prefix: string | undefined;

  /**
   * <p>The region of the S3 bucket that Amazon Web Services delivers the report into.</p>
   * @public
   */
  S3Region: AWSRegion | undefined;

  /**
   * <p>A list of manifests that you want Amazon Web Services to create for this report.</p>
   * @public
   */
  AdditionalArtifacts?: AdditionalArtifact[] | undefined;

  /**
   * <p>Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to
   *       previous months. These charges can include refunds, credits, or support fees.</p>
   * @public
   */
  RefreshClosedReports?: boolean | undefined;

  /**
   * <p>Whether you want Amazon Web Services to overwrite the previous version of each report or
   *          to deliver the report in addition to the previous versions.</p>
   * @public
   */
  ReportVersioning?: ReportVersioning | undefined;

  /**
   * <p>
   *       The Amazon resource name of the billing view. The <code>BillingViewArn</code> is needed to create Amazon Web Services Cost and Usage Report for each billing group maintained in the Amazon Web Services Billing Conductor service. The <code>BillingViewArn</code> for a billing group can be constructed as: <code>arn:aws:billing::payer-account-id:billingview/billing-group-primary-account-id</code>
   *          </p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>The status of the report.</p>
   * @public
   */
  ReportStatus?: ReportStatus | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 * @public
 */
export interface DescribeReportDefinitionsResponse {
  /**
   * <p>An Amazon Web Services Cost and Usage Report list owned by the account.</p>
   * @public
   */
  ReportDefinitions?: ReportDefinition[] | undefined;

  /**
   * <p>A generic string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The report name of the report definition that tags are to be returned for.</p>
   * @public
   */
  ReportName: string | undefined;
}

/**
 * <p>Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a report
 *       definition.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag. Tag keys are case sensitive. Each report definition can only have up
   *       to one tag with the same key. If you try to add an existing tag with the same key, the
   *       existing tag value will be updated to the new value.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag. Tag values are case-sensitive. This can be an empty string.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to the report definition resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyReportDefinitionRequest {
  /**
   * <p>The name of the report that you want to create. The name must be unique,
   *         is case sensitive, and can't include spaces. </p>
   * @public
   */
  ReportName: string | undefined;

  /**
   * <p>The definition of Amazon Web Services Cost and Usage Report. You can specify the report name,
   *          time unit, report format, compression format, S3 bucket, additional artifacts, and schema
   *          elements in the definition.
   *     </p>
   * @public
   */
  ReportDefinition: ReportDefinition | undefined;
}

/**
 * @public
 */
export interface ModifyReportDefinitionResponse {}

/**
 * <p>Creates a Cost and Usage Report.</p>
 * @public
 */
export interface PutReportDefinitionRequest {
  /**
   * <p>Represents the output of the PutReportDefinition operation. The content consists of the detailed
   *       metadata and data file information. </p>
   * @public
   */
  ReportDefinition: ReportDefinition | undefined;

  /**
   * <p>The tags to be assigned to the report definition resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 * @public
 */
export interface PutReportDefinitionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The report name of the report definition that tags are to be associated with.</p>
   * @public
   */
  ReportName: string | undefined;

  /**
   * <p>The tags to be assigned to the report definition resource.</p>
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
   * <p>The report name of the report definition that tags are to be disassociated
   *       from.</p>
   * @public
   */
  ReportName: string | undefined;

  /**
   * <p>The tags to be disassociated from the report definition resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
