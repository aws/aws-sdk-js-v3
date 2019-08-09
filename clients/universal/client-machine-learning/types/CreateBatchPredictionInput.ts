import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBatchPredictionInput shape
 */
export interface CreateBatchPredictionInput {
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>.</p>
   */
  BatchPredictionId: string;

  /**
   * <p>A user-supplied name or description of the <code>BatchPrediction</code>. <code>BatchPredictionName</code> can only use the UTF-8 character set.</p>
   */
  BatchPredictionName?: string;

  /**
   * <p>The ID of the <code>MLModel</code> that will generate predictions for the group of observations. </p>
   */
  MLModelId: string;

  /**
   * <p>The ID of the <code>DataSource</code> that points to the group of observations to predict.</p>
   */
  BatchPredictionDataSourceId: string;

  /**
   * <p>The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p> <p>Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.</p>
   */
  OutputUri: string;

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
