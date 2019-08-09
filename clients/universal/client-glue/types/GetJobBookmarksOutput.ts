import { _UnmarshalledJobBookmarkEntry } from "./_JobBookmarkEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobBookmarksOutput shape
 */
export interface GetJobBookmarksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job bookmark entries that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntries?: Array<_UnmarshalledJobBookmarkEntry>;

  /**
   * <p>A continuation token, which has a value of 1 if all the entries are returned, or &gt; 1 if not all requested job runs have been returned.</p>
   */
  NextToken?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
