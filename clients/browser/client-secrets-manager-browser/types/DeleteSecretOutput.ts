import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteSecretOutput shape
 */
export interface DeleteSecretOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret that is now scheduled for deletion.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that is now scheduled for deletion.</p>
   */
  Name?: string;

  /**
   * <p>The date and time after which this secret can be deleted by Secrets Manager and can no longer be restored. This value is the date and time of the delete request plus the number of days specified in <code>RecoveryWindowInDays</code>.</p>
   */
  DeletionDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
