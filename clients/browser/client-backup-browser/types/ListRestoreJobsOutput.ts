import { _UnmarshalledRestoreJobsListMember } from "./_RestoreJobsListMember";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRestoreJobsOutput shape
 */
export interface ListRestoreJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects that contain detailed information about jobs to restore saved resources.</p>
   */
  RestoreJobs?: Array<_UnmarshalledRestoreJobsListMember>;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
