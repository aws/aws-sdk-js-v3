import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Updates the information for an ActiveMQ user.
 */
export interface UpdateUserInput {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string> | Iterable<string>;

  /**
   * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
   */
  Password?: string;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string;

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
