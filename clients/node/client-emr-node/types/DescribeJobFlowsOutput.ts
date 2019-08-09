import { _UnmarshalledJobFlowDetail } from "./_JobFlowDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The output for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job flows matching the parameters supplied.</p>
   */
  JobFlows?: Array<_UnmarshalledJobFlowDetail>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
