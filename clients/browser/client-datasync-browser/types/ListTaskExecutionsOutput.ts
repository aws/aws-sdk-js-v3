import { _UnmarshalledTaskExecutionListEntry } from "./_TaskExecutionListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListTaskExecutionsResponse</p>
 */
export interface ListTaskExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of executed tasks.</p>
   */
  TaskExecutions?: Array<_UnmarshalledTaskExecutionListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list of executed tasks.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
