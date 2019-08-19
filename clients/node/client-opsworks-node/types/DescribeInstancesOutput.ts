import { _UnmarshalledInstance } from "./_Instance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeInstances</code> request.</p>
 */
export interface DescribeInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Instance</code> objects that describe the instances.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
