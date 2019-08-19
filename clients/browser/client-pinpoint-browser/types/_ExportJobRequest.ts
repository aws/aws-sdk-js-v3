/**
 * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface _ExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.</p>
   */
  RoleArn: string;

  /**
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   */
  S3UrlPrefix: string;

  /**
   * <p>The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment to export endpoint definitions from, if specified.</p>
   */
  SegmentVersion?: number;
}

export type _UnmarshalledExportJobRequest = _ExportJobRequest;
