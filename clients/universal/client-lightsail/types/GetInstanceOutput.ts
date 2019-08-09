import { _UnmarshalledInstance } from "./_Instance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstanceOutput shape
 */
export interface GetInstanceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the specified instance.</p>
   */
  instance?: _UnmarshalledInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
