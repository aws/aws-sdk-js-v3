import { _Evaluation } from "./_Evaluation";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface PutEvaluationsInput {
  /**
   * <p>The assessments that the AWS Lambda function performs. Each evaluation identifies an AWS resource and indicates whether it complies with the AWS Config rule that invokes the AWS Lambda function.</p>
   */
  Evaluations?: Array<_Evaluation> | Iterable<_Evaluation>;

  /**
   * <p>An encrypted token that associates an evaluation with an AWS Config rule. Identifies the rule and the event that triggered the evaluation.</p>
   */
  ResultToken: string;

  /**
   * <p>Use this parameter to specify a test run for <code>PutEvaluations</code>. You can verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.</p> <note> <p>When <code>TestMode</code> is <code>true</code>, <code>PutEvaluations</code> doesn't require a valid value for the <code>ResultToken</code> parameter, but the value cannot be null.</p> </note>
   */
  TestMode?: boolean;

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
