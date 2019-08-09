import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutResourcePolicyOutput shape
 */
export interface PutResourcePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A hash of the policy that has just been set. This must be included in a subsequent call that overwrites or updates this policy.</p>
   */
  PolicyHash?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
