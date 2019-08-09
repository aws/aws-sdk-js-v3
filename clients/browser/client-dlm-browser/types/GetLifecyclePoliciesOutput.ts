import { _UnmarshalledLifecyclePolicySummary } from "./_LifecyclePolicySummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLifecyclePoliciesOutput shape
 */
export interface GetLifecyclePoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Summary information about the lifecycle policies.</p>
   */
  Policies?: Array<_UnmarshalledLifecyclePolicySummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
