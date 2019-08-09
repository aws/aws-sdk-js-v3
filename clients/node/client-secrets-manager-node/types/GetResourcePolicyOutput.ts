import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourcePolicyOutput shape
 */
export interface GetResourcePolicyOutput
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
   * <p>A JSON-formatted string that describes the permissions that are associated with the attached secret. These permissions are combined with any permissions that are associated with the user or role that attempts to access this secret. The combined permissions specify who can access the secret and what actions they can perform. For more information, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and Access Control for AWS Secrets Manager</a> in the <i>AWS Secrets Manager User Guide</i>.</p>
   */
  ResourcePolicy?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
