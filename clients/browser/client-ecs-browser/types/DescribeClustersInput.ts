import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClustersInput shape
 */
export interface DescribeClustersInput {
  /**
   * <p>A list of up to 100 cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed.</p>
   */
  clusters?: Array<string> | Iterable<string>;

  /**
   * <p>Additional information about your clusters to be separated by launch type, including:</p> <ul> <li> <p>runningEC2TasksCount</p> </li> <li> <p>runningFargateTasksCount</p> </li> <li> <p>pendingEC2TasksCount</p> </li> <li> <p>pendingFargateTasksCount</p> </li> <li> <p>activeEC2ServiceCount</p> </li> <li> <p>activeFargateServiceCount</p> </li> <li> <p>drainingEC2ServiceCount</p> </li> <li> <p>drainingFargateServiceCount</p> </li> </ul>
   */
  include?:
    | Array<"STATISTICS" | "TAGS" | string>
    | Iterable<"STATISTICS" | "TAGS" | string>;

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
