import { _UnmarshalledStackSetOperation } from "./_StackSetOperation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackSetOperationOutput shape
 */
export interface DescribeStackSetOperationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The specified stack set operation.</p>
   */
  StackSetOperation?: _UnmarshalledStackSetOperation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
