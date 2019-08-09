import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLayerVersionPolicyOutput shape
 */
export interface GetLayerVersionPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policy document.</p>
   */
  Policy?: string;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
