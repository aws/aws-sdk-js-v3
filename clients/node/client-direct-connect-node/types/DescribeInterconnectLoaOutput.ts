import { _UnmarshalledLoa } from "./_Loa";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInterconnectLoaOutput shape
 */
export interface DescribeInterconnectLoaOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA).</p>
   */
  loa?: _UnmarshalledLoa;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
