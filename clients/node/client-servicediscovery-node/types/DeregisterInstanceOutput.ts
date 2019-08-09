import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterInstanceOutput shape
 */
export interface DeregisterInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. For more information, see <a>GetOperation</a>.</p>
   */
  OperationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
