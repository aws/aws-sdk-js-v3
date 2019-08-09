import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutInstancePublicPortsOutput shape
 */
export interface PutInstancePublicPortsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes metadata about the operation you just executed.</p>
   */
  operation?: _UnmarshalledOperation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
