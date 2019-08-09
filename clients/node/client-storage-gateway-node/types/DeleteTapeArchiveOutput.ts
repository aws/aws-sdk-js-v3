import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DeleteTapeArchiveOutput</p>
 */
export interface DeleteTapeArchiveOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf (VTS).</p>
   */
  TapeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
