import { _UnmarshalledTableVersionError } from "./_TableVersionError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteTableVersionOutput shape
 */
export interface BatchDeleteTableVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of errors encountered while trying to delete the specified table versions.</p>
   */
  Errors?: Array<_UnmarshalledTableVersionError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
