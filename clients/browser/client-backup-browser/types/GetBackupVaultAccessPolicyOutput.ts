import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBackupVaultAccessPolicyOutput shape
 */
export interface GetBackupVaultAccessPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, <code>arn:aws:backup:us-east-1:123456789012:vault:aBackupVault</code>.</p>
   */
  BackupVaultArn?: string;

  /**
   * <p>The backup vault access policy document in JSON format.</p>
   */
  Policy?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
