import { _UnmarshalledBackupSummary } from "./_BackupSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBackupsOutput shape
 */
export interface ListBackupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of <code>BackupSummary</code> objects.</p>
   */
  BackupSummaries?: Array<_UnmarshalledBackupSummary>;

  /**
   * <p> The ARN of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the <code>ExclusiveStartBackupArn</code> of a new <code>ListBackups</code> operation in order to fetch the next page of results. </p> <p> If <code>LastEvaluatedBackupArn</code> is empty, then the last page of results has been processed and there are no more results to be retrieved. </p> <p> If <code>LastEvaluatedBackupArn</code> is not empty, this may or may not indicate that there is more data to be returned. All results are guaranteed to have been returned if and only if no value for <code>LastEvaluatedBackupArn</code> is returned. </p>
   */
  LastEvaluatedBackupArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
