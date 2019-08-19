/**
 * <p>The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. </p>
 */
export interface _ReportDefinition {
  /**
   * <p>The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. </p>
   */
  ReportName: string;

  /**
   * <p>The length of time covered by the report. </p>
   */
  TimeUnit: "HOURLY" | "DAILY" | string;

  /**
   * <p>The format that AWS saves the report in.</p>
   */
  Format: "textORcsv" | "Parquet" | string;

  /**
   * <p>The compression format that AWS uses for the report.</p>
   */
  Compression: "ZIP" | "GZIP" | "Parquet" | string;

  /**
   * <p>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. </p>
   */
  AdditionalSchemaElements:
    | Array<"RESOURCES" | string>
    | Iterable<"RESOURCES" | string>;

  /**
   * <p>The S3 bucket where AWS delivers the report.</p>
   */
  S3Bucket: string;

  /**
   * <p>The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.</p>
   */
  S3Prefix: string;

  /**
   * <p>The region of the S3 bucket that AWS delivers the report into.</p>
   */
  S3Region:
    | "us-east-1"
    | "us-west-1"
    | "us-west-2"
    | "eu-central-1"
    | "eu-west-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "eu-north-1"
    | "ap-northeast-3"
    | string;

  /**
   * <p>A list of manifests that you want Amazon Web Services to create for this report.</p>
   */
  AdditionalArtifacts?:
    | Array<"REDSHIFT" | "QUICKSIGHT" | "ATHENA" | string>
    | Iterable<"REDSHIFT" | "QUICKSIGHT" | "ATHENA" | string>;

  /**
   * <p>Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.</p>
   */
  RefreshClosedReports?: boolean;

  /**
   * <p>Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.</p>
   */
  ReportVersioning?: "CREATE_NEW_REPORT" | "OVERWRITE_REPORT" | string;
}

export interface _UnmarshalledReportDefinition extends _ReportDefinition {
  /**
   * <p>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. </p>
   */
  AdditionalSchemaElements: Array<"RESOURCES" | string>;

  /**
   * <p>A list of manifests that you want Amazon Web Services to create for this report.</p>
   */
  AdditionalArtifacts?: Array<"REDSHIFT" | "QUICKSIGHT" | "ATHENA" | string>;
}
