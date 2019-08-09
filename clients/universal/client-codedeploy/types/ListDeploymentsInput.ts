import { _TimeRange } from "./_TimeRange";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a ListDeployments operation.</p>
 */
export interface ListDeploymentsInput {
  /**
   * <p>The name of an AWS CodeDeploy application associated with the IAM user or AWS account.</p> <note> <p>If <code>applicationName</code> is specified, then <code>deploymentGroupName</code> must be specified. If it is not specified, then <code>deploymentGroupName</code> must not be specified. </p> </note>
   */
  applicationName?: string;

  /**
   * <p>The name of a deployment group for the specified application.</p> <note> <p>If <code>deploymentGroupName</code> is specified, then <code>applicationName</code> must be specified. If it is not specified, then <code>applicationName</code> must not be specified. </p> </note>
   */
  deploymentGroupName?: string;

  /**
   * <p>A subset of deployments to list by status:</p> <ul> <li> <p>Created: Include created deployments in the resulting list.</p> </li> <li> <p>Queued: Include queued deployments in the resulting list.</p> </li> <li> <p>In Progress: Include in-progress deployments in the resulting list.</p> </li> <li> <p>Succeeded: Include successful deployments in the resulting list.</p> </li> <li> <p>Failed: Include failed deployments in the resulting list.</p> </li> <li> <p>Stopped: Include stopped deployments in the resulting list.</p> </li> </ul>
   */
  includeOnlyStatuses?:
    | Array<
        | "Created"
        | "Queued"
        | "InProgress"
        | "Succeeded"
        | "Failed"
        | "Stopped"
        | "Ready"
        | string
      >
    | Iterable<
        | "Created"
        | "Queued"
        | "InProgress"
        | "Succeeded"
        | "Failed"
        | "Stopped"
        | "Ready"
        | string
      >;

  /**
   * <p>A time range (start and end) for returning a subset of the list of deployments.</p>
   */
  createTimeRange?: _TimeRange;

  /**
   * <p>An identifier returned from the previous list deployments call. It can be used to return the next set of deployments in the list.</p>
   */
  nextToken?: string;

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
