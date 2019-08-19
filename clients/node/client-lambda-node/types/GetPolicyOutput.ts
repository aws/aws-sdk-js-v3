import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPolicyOutput shape
 */
export interface GetPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource-based policy.</p>
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
