import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the input of a ListDeploymentInstances operation. </p>
 */
export interface ListDeploymentInstancesInput {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId: string;

  /**
   * <p>An identifier returned from the previous list deployment instances call. It can be used to return the next set of deployment instances in the list.</p>
   */
  nextToken?: string;

  /**
   * <p>A subset of instances to list by status:</p> <ul> <li> <p>Pending: Include those instances with pending deployments.</p> </li> <li> <p>InProgress: Include those instances where deployments are still in progress.</p> </li> <li> <p>Succeeded: Include those instances with successful deployments.</p> </li> <li> <p>Failed: Include those instances with failed deployments.</p> </li> <li> <p>Skipped: Include those instances with skipped deployments.</p> </li> <li> <p>Unknown: Include those instances with deployments in an unknown state.</p> </li> </ul>
   */
  instanceStatusFilter?:
    | Array<
        | "Pending"
        | "InProgress"
        | "Succeeded"
        | "Failed"
        | "Skipped"
        | "Unknown"
        | "Ready"
        | string
      >
    | Iterable<
        | "Pending"
        | "InProgress"
        | "Succeeded"
        | "Failed"
        | "Skipped"
        | "Unknown"
        | "Ready"
        | string
      >;

  /**
   * <p>The set of instances in a blue/green deployment, either those in the original environment ("BLUE") or those in the replacement environment ("GREEN"), for which you want to view instance information.</p>
   */
  instanceTypeFilter?:
    | Array<"Blue" | "Green" | string>
    | Iterable<"Blue" | "Green" | string>;

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
