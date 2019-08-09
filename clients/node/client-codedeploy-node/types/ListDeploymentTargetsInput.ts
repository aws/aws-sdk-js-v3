import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeploymentTargetsInput shape
 */
export interface ListDeploymentTargetsInput {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p> A token identifier returned from the previous <code>ListDeploymentTargets</code> call. It can be used to return the next set of deployment targets in the list. </p>
   */
  nextToken?: string;

  /**
   * <p> A key used to filter the returned targets. The two valid values are:</p> <ul> <li> <p> <code>TargetStatus</code> - A <code>TargetStatus</code> filter string can be <code>Failed</code>, <code>InProgress</code>, <code>Pending</code>, <code>Ready</code>, <code>Skipped</code>, <code>Succeeded</code>, or <code>Unknown</code>. </p> </li> <li> <p> <code>ServerInstanceLabel</code> - A <code>ServerInstanceLabel</code> filter string can be <code>Blue</code> or <code>Green</code>. </p> </li> </ul>
   */
  targetFilters?:
    | {
        [key in "TargetStatus" | "ServerInstanceLabel" | string]:
          | Array<string>
          | Iterable<string>
      }
    | Iterable<
        [
          "TargetStatus" | "ServerInstanceLabel" | string,
          Array<string> | Iterable<string>
        ]
      >;

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
