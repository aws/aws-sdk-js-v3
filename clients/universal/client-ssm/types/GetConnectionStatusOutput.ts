import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConnectionStatusOutput shape
 */
export interface GetConnectionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the instance to check connection status. </p>
   */
  Target?: string;

  /**
   * <p>The status of the connection to the instance. For example, 'Connected' or 'Not Connected'.</p>
   */
  Status?: "Connected" | "NotConnected" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
