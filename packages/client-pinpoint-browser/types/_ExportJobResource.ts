/**
 * Export job resource.
 */
export interface _ExportJobResource {
  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that endpoints will be exported to.
   */
  RoleArn?: string;

  /**
   * A URL that points to the location within an Amazon S3 bucket that will receive the export. The location is typically a folder with multiple files.
   *
   * The URL should follow this format: s3://bucket-name/folder-name/
   *
   * Amazon Pinpoint will export endpoints to this location.
   */
  S3UrlPrefix?: string;

  /**
   * The ID of the segment to export endpoints from. If not present, Amazon Pinpoint exports all of the endpoints that belong to the application.
   */
  SegmentId?: string;

  /**
   * The version of the segment to export if specified.
   */
  SegmentVersion?: number;
}

export type _UnmarshalledExportJobResource = _ExportJobResource;
