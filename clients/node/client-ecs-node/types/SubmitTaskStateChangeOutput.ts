import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SubmitTaskStateChangeOutput shape
 */
export interface SubmitTaskStateChangeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Acknowledgement of the state change.</p>
   */
  acknowledgment?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
