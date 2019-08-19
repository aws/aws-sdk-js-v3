import { _UnmarshalledChangeSetSummary } from "./_ChangeSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>ChangeSetSummary</code> structures that provides the ID and status of each change set for the specified stack.</p>
   */
  Summaries?: Array<_UnmarshalledChangeSetSummary>;

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of change sets. If there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
