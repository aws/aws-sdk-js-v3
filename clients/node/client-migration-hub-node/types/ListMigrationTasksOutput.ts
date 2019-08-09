import { _UnmarshalledMigrationTaskSummary } from "./_MigrationTaskSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMigrationTasksOutput shape
 */
export interface ListMigrationTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If there are more migration tasks than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>Lists the migration task's summary which includes: <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and the <code>UpdateDateTime</code> for each task.</p>
   */
  MigrationTaskSummaryList?: Array<_UnmarshalledMigrationTaskSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
