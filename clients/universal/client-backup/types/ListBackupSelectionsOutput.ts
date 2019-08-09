import { _UnmarshalledBackupSelectionsListMember } from "./_BackupSelectionsListMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBackupSelectionsOutput shape
 */
export interface ListBackupSelectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of backup selection list items containing metadata about each resource in the list.</p>
   */
  BackupSelectionsList?: Array<_UnmarshalledBackupSelectionsListMember>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
