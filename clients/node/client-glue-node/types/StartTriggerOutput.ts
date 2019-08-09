import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartTriggerOutput shape
 */
export interface StartTriggerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
