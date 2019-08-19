import { _UnmarshalledHyperParameterTuningJobSummary } from "./_HyperParameterTuningJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListHyperParameterTuningJobsOutput shape
 */
export interface ListHyperParameterTuningJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>HyperParameterTuningJobSummary</a> objects that describe the tuning jobs that the <code>ListHyperParameterTuningJobs</code> request returned.</p>
   */
  HyperParameterTuningJobSummaries: Array<
    _UnmarshalledHyperParameterTuningJobSummary
  >;

  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
