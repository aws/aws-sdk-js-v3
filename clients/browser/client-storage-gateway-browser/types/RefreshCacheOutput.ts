import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>RefreshCacheOutput</p>
 */
export interface RefreshCacheOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN?: string;

  /**
   * <p>The randomly generated ID of the notification that was sent. This ID is in UUID format.</p>
   */
  NotificationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
