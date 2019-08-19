import { _UnmarshalledTableError } from "./_TableError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteTableOutput shape
 */
export interface BatchDeleteTableOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of errors encountered in attempting to delete the specified tables.</p>
   */
  Errors?: Array<_UnmarshalledTableError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
