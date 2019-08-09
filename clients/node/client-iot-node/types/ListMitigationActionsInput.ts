import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMitigationActionsInput shape
 */
export interface ListMitigationActionsInput {
  /**
   * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
   */
  actionType?:
    | "UPDATE_DEVICE_CERTIFICATE"
    | "UPDATE_CA_CERTIFICATE"
    | "ADD_THINGS_TO_THING_GROUP"
    | "REPLACE_DEFAULT_POLICY_VERSION"
    | "ENABLE_IOT_LOGGING"
    | "PUBLISH_FINDING_TO_SNS"
    | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
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
