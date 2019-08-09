import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface CreateMatchmakingRuleSetInput {
  /**
   * <p>Unique identifier for a matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name value. (Note: The rule set name is different from the optional "name" field in the rule set body.) </p>
   */
  Name: string;

  /**
   * <p>Collection of matchmaking rules, formatted as a JSON string. Comments are not allowed in JSON, but most elements support a description field.</p>
   */
  RuleSetBody: string;

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
