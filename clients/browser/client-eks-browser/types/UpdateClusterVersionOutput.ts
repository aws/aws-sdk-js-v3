import { _UnmarshalledUpdate } from "./_Update";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateClusterVersionOutput shape
 */
export interface UpdateClusterVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of the specified update</p>
   */
  update?: _UnmarshalledUpdate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
