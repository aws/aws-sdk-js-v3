import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServiceOutput shape
 */
export interface UpdateServiceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A value that you can use to determine whether the request completed successfully. To get the status of the operation, see <a>GetOperation</a>.</p>
   */
  OperationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
