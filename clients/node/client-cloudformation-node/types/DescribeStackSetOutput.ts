import { _UnmarshalledStackSet } from "./_StackSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackSetOutput shape
 */
export interface DescribeStackSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The specified stack set.</p>
   */
  StackSet?: _UnmarshalledStackSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
