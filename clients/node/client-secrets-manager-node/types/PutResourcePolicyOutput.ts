import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutResourcePolicyOutput shape
 */
export interface PutResourcePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret that the resource-based policy was retrieved for.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that the resource-based policy was retrieved for.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
