import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The input argument to the <a>TerminationProtection</a> operation. </p>
 */
export interface SetTerminationProtectionInput {
  /**
   * <p> A list of strings that uniquely identify the clusters to protect. This identifier is returned by <a>RunJobFlow</a> and can also be obtained from <a>DescribeJobFlows</a> . </p>
   */
  JobFlowIds: Array<string> | Iterable<string>;

  /**
   * <p>A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.</p>
   */
  TerminationProtected: boolean;

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
