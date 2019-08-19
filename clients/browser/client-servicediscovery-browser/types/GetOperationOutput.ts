import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOperationOutput shape
 */
export interface GetOperationOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about the operation.</p>
   */
  Operation?: _UnmarshalledOperation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
