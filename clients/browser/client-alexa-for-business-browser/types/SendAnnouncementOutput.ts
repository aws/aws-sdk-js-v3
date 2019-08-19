import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendAnnouncementOutput shape
 */
export interface SendAnnouncementOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the announcement.</p>
   */
  AnnouncementArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
