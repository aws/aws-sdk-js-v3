import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input to the SetVisibleToAllUsers action.</p>
 */
export interface SetVisibleToAllUsersInput {
  /**
   * <p>Identifiers of the job flows to receive the new visibility setting.</p>
   */
  JobFlowIds: Array<string> | Iterable<string>;

  /**
   * <p>Whether the specified clusters are visible to all IAM users of the AWS account associated with the cluster. If this value is set to True, all IAM users of that AWS account can view and, if they have the proper IAM policy permissions set, manage the clusters. If it is set to False, only the IAM user that created a cluster can view and manage it.</p>
   */
  VisibleToAllUsers: boolean;

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
