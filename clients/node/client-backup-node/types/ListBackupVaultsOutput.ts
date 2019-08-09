import { _UnmarshalledBackupVaultListMember } from "./_BackupVaultListMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBackupVaultsOutput shape
 */
export interface ListBackupVaultsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of backup vault list members containing vault metadata, including Amazon Resource Name (ARN), display name, creation date, number of saved recovery points, and encryption information if the resources saved in the backup vault are encrypted.</p>
   */
  BackupVaultList?: Array<_UnmarshalledBackupVaultListMember>;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
