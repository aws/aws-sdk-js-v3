import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteWorkteamOutput shape
 */
export interface DeleteWorkteamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise, returns <code>false</code>.</p>
   */
  Success: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
