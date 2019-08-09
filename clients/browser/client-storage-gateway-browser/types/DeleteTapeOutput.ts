import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DeleteTapeOutput</p>
 */
export interface DeleteTapeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
