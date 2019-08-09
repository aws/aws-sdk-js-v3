import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were created.</p>
   */
  TapeARNs?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
