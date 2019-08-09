import { _UnmarshalledJobExecutionSummaryForThing } from "./_JobExecutionSummaryForThing";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobExecutionsForThingOutput shape
 */
export interface ListJobExecutionsForThingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: Array<_UnmarshalledJobExecutionSummaryForThing>;

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
