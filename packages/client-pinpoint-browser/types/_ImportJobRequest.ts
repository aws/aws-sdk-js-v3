/**
 * Import job request.
 */
export interface _ImportJobRequest {
    /**
     * Sets whether the endpoints create a segment when they are imported.
     */
    DefineSegment?: boolean;

    /**
     * (Deprecated) Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
     */
    ExternalId?: string;

    /**
     * The format of the files that contain the endpoint definitions.
     * Valid values: CSV, JSON
     */
    Format?: 'CSV'|'JSON'|string;

    /**
     * Sets whether the endpoints are registered with Amazon Pinpoint when they are imported.
     */
    RegisterEndpoints?: boolean;

    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that contains the endpoints to import.
     */
    RoleArn?: string;

    /**
     * The URL of the S3 bucket that contains the segment information to import. The location can be a folder or a single file. The URL should use the following format: s3://bucket-name/folder-name/file-name
     *
     * Amazon Pinpoint imports endpoints from this location and any subfolders it contains.
     */
    S3Url?: string;

    /**
     * The ID of the segment to update if the import job is meant to update an existing segment.
     */
    SegmentId?: string;

    /**
     * A custom name for the segment created by the import job. Use if DefineSegment is true.
     */
    SegmentName?: string;
}

export type _UnmarshalledImportJobRequest = _ImportJobRequest;