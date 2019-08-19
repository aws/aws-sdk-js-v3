import { _UnmarshalledOutput } from "./_Output";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFlowOutputOutput shape
 */
export interface UpdateFlowOutputOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the flow that is associated with the updated output.
   */
  FlowArn?: string;

  /**
   * The settings for an output.
   */
  Output?: _UnmarshalledOutput;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
