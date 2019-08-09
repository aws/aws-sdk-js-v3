/**
 * <p>Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface _ImportJobResource {
  /**
   * <p>Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   */
  DefineSegment?: boolean;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p> <p>If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   */
  Format: "CSV" | "JSON" | string;

  /**
   * <p>Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   */
  RegisterEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   */
  S3Url: string;

  /**
   * <p>The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.</p>
   */
  SegmentId?: string;

  /**
   * <p>The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   */
  SegmentName?: string;
}

export type _UnmarshalledImportJobResource = _ImportJobResource;
