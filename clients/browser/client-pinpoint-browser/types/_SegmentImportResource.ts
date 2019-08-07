/**
 * Segment import definition.
 */
export interface _SegmentImportResource {
  /**
   * The number of channel types in the imported segment.
   */
  ChannelCounts?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * (Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
   */
  ExternalId?: string;

  /**
   * The format of the endpoint files that were imported to create this segment.
   * Valid values: CSV, JSON
   */
  Format?: "CSV" | "JSON" | string;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the endpoints in Amazon S3.
   */
  RoleArn?: string;

  /**
   * The URL of the S3 bucket that the segment was imported from.
   */
  S3Url?: string;

  /**
   * The number of endpoints that were successfully imported to create this segment.
   */
  Size?: number;
}

export interface _UnmarshalledSegmentImportResource
  extends _SegmentImportResource {
  /**
   * The number of channel types in the imported segment.
   */
  ChannelCounts?: { [key: string]: number };
}
