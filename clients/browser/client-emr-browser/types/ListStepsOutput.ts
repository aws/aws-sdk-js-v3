import { _UnmarshalledStepSummary } from "./_StepSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.</p>
 */
export interface ListStepsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The filtered list of steps for the cluster.</p>
   */
  Steps?: Array<_UnmarshalledStepSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
