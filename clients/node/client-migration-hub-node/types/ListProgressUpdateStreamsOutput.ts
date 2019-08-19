import { _UnmarshalledProgressUpdateStreamSummary } from "./_ProgressUpdateStreamSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProgressUpdateStreamsOutput shape
 */
export interface ListProgressUpdateStreamsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of progress update streams up to the max number of results passed in the input.</p>
   */
  ProgressUpdateStreamSummaryList?: Array<
    _UnmarshalledProgressUpdateStreamSummary
  >;

  /**
   * <p>If there are more streams created than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
