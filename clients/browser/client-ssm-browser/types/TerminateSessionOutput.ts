import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TerminateSessionOutput shape
 */
export interface TerminateSessionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the session that has been terminated.</p>
   */
  SessionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
