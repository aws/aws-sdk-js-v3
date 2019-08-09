import { _UnmarshalledBatchReadOperationResponse } from "./_BatchReadOperationResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchReadOutput shape
 */
export interface BatchReadOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all the responses for each batch read.</p>
   */
  Responses?: Array<_UnmarshalledBatchReadOperationResponse>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
