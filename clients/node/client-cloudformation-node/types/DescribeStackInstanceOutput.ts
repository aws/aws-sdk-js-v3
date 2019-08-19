import { _UnmarshalledStackInstance } from "./_StackInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackInstanceOutput shape
 */
export interface DescribeStackInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The stack instance that matches the specified request parameters.</p>
   */
  StackInstance?: _UnmarshalledStackInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
