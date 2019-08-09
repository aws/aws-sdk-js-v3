import { _UnmarshalledSource } from "./_Source";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFlowSourceOutput shape
 */
export interface UpdateFlowSourceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the flow that you want to update.
   */
  FlowArn?: string;

  /**
   * The settings for the source of the flow.
   */
  Source?: _UnmarshalledSource;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
