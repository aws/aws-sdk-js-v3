/**
 * <p>Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.</p>
 */
export interface _SegmentImportResource {
  /**
   * <p>The number of channel types in the endpoint definitions that were imported to create the segment.</p>
   */
  ChannelCounts?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId: string;

  /**
   * <p>The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p>
   */
  Format: "CSV" | "JSON" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.</p>
   */
  S3Url: string;

  /**
   * <p>The number of endpoint definitions that were imported successfully to create the segment.</p>
   */
  Size: number;
}

export interface _UnmarshalledSegmentImportResource
  extends _SegmentImportResource {
  /**
   * <p>The number of channel types in the endpoint definitions that were imported to create the segment.</p>
   */
  ChannelCounts?: { [key: string]: number };
}
