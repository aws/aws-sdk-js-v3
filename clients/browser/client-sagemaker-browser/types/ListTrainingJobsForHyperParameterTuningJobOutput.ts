import { _UnmarshalledHyperParameterTrainingJobSummary } from "./_HyperParameterTrainingJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTrainingJobsForHyperParameterTuningJobOutput shape
 */
export interface ListTrainingJobsForHyperParameterTuningJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <a>TrainingJobSummary</a> objects that describe the training jobs that the <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   */
  TrainingJobSummaries: Array<_UnmarshalledHyperParameterTrainingJobSummary>;

  /**
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
