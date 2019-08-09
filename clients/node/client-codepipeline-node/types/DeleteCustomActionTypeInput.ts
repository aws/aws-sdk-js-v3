import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.</p>
 */
export interface DeleteCustomActionTypeInput {
  /**
   * <p>The category of the custom action that you want to delete, such as source or deploy.</p>
   */
  category:
    | "Source"
    | "Build"
    | "Deploy"
    | "Test"
    | "Invoke"
    | "Approval"
    | string;

  /**
   * <p>The provider of the service used in the custom action, such as AWS CodeDeploy.</p>
   */
  provider: string;

  /**
   * <p>The version of the custom action to delete.</p>
   */
  version: string;

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
