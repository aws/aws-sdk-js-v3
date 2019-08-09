import { _UnmarshalledStep } from "./_Step";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This output contains the description of the cluster step.</p>
 */
export interface DescribeStepOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The step details for the requested step identifier.</p>
   */
  Step?: _UnmarshalledStep;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
