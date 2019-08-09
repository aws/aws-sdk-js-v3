import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLifecyclePolicyOutput shape
 */
export interface CreateLifecyclePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
