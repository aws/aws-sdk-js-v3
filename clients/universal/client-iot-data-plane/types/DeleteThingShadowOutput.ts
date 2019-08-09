import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
