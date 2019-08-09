import { _UnmarshalledBatchWriteOperationResponse } from "./_BatchWriteOperationResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchWriteOutput shape
 */
export interface BatchWriteOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all the responses for each batch write.</p>
   */
  Responses?: Array<_UnmarshalledBatchWriteOperationResponse>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
