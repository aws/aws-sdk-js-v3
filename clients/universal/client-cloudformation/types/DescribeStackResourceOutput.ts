import { _UnmarshalledStackResourceDetail } from "./_StackResourceDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for a <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>StackResourceDetail</code> structure containing the description of the specified resource in the specified stack.</p>
   */
  StackResourceDetail?: _UnmarshalledStackResourceDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
