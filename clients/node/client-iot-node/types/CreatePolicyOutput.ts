import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the CreatePolicy operation.</p>
 */
export interface CreatePolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
