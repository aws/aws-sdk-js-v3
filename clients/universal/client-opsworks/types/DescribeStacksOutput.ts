import { _UnmarshalledStack } from "./_Stack";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeStacks</code> request.</p>
 */
export interface DescribeStacksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Stack</code> objects that describe the stacks.</p>
   */
  Stacks?: Array<_UnmarshalledStack>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
