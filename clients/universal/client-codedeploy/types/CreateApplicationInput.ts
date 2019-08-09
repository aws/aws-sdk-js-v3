import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a CreateApplication operation.</p>
 */
export interface CreateApplicationInput {
  /**
   * <p>The name of the application. This name must be unique with the applicable IAM user or AWS account.</p>
   */
  applicationName: string;

  /**
   * <p> The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: "Server" | "Lambda" | "ECS" | string;

  /**
   * <p> The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define. </p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
