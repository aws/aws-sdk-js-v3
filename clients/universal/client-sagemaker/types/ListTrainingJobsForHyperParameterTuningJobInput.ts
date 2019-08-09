import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTrainingJobsForHyperParameterTuningJobInput shape
 */
export interface ListTrainingJobsForHyperParameterTuningJobInput {
  /**
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   */
  HyperParameterTuningJobName: string;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns only training jobs with the specified status.</p>
   */
  StatusEquals?:
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Stopping"
    | "Stopped"
    | string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p> <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?:
    | "Name"
    | "CreationTime"
    | "Status"
    | "FinalObjectiveMetricValue"
    | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
