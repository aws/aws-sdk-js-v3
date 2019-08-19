import { _UnmarshalledLifecyclePolicy } from "./_LifecyclePolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLifecyclePolicyOutput shape
 */
export interface GetLifecyclePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about the lifecycle policy.</p>
   */
  Policy?: _UnmarshalledLifecyclePolicy;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
