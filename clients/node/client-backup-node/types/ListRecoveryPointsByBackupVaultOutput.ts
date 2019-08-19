import { _UnmarshalledRecoveryPointByBackupVault } from "./_RecoveryPointByBackupVault";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRecoveryPointsByBackupVaultOutput shape
 */
export interface ListRecoveryPointsByBackupVaultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that contain detailed information about recovery points saved in a backup vault.</p>
   */
  RecoveryPoints?: Array<_UnmarshalledRecoveryPointByBackupVault>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
