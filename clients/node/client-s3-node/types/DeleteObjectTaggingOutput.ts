import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteObjectTaggingOutput shape
 */
export interface DeleteObjectTaggingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The versionId of the object the tag-set was removed from.</p>
   */
  VersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
