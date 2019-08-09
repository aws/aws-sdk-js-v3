import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssignTapePoolOutput shape
 */
export interface AssignTapePoolOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape pool.</p>
   */
  TapeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
