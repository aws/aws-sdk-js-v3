import { _UnmarshalledTrainingJobSummary } from "./_TrainingJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTrainingJobsOutput shape
 */
export interface ListTrainingJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training job.</p>
   */
  TrainingJobSummaries: Array<_UnmarshalledTrainingJobSummary>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
