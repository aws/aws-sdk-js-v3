import { _UnmarshalledStackSummary } from "./_StackSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeStackSummary</code> request.</p>
 */
export interface DescribeStackSummaryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>StackSummary</code> object that contains the results.</p>
   */
  StackSummary?: _UnmarshalledStackSummary;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
