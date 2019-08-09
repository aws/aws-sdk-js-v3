import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLifecyclePolicyOutput shape
 */
export interface GetLifecyclePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The object lifecycle policy that is assigned to the container.</p>
   */
  LifecyclePolicy: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
