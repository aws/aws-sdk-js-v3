import { _UnmarshalledFlow } from "./_Flow";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFlowOutput shape
 */
export interface CreateFlowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: _UnmarshalledFlow;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
