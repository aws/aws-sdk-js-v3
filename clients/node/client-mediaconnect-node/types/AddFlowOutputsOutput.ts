import { _UnmarshalledOutput } from "./_Output";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddFlowOutputsOutput shape
 */
export interface AddFlowOutputsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the flow that these outputs were added to.
   */
  FlowArn?: string;

  /**
   * The details of the newly added outputs.
   */
  Outputs?: Array<_UnmarshalledOutput>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
