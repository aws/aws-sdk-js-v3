import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateWorkteamOutput shape
 */
export interface CreateWorkteamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the work team.</p>
   */
  WorkteamArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
