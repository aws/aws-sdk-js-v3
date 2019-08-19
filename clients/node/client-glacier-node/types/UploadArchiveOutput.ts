import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p>
 */
export interface UploadArchiveOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The relative URI path of the newly added archive resource.</p>
   */
  location?: string;

  /**
   * <p>The checksum of the archive computed by Amazon S3 Glacier.</p>
   */
  checksum?: string;

  /**
   * <p>The ID of the archive. This value is also included as part of the location.</p>
   */
  archiveId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
