import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CloseInstancePublicPortsOutput shape
 */
export interface CloseInstancePublicPortsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs that contains information about the operation.</p>
   */
  operation?: _UnmarshalledOperation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
