import { _UnmarshalledFlow } from "./_Flow";
import { _UnmarshalledMessages } from "./_Messages";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFlowOutput shape
 */
export interface DescribeFlowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: _UnmarshalledFlow;

  /**
   * Messages that provide the state of the flow.
   */
  Messages?: _UnmarshalledMessages;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
