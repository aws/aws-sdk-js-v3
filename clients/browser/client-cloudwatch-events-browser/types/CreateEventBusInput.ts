import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEventBusInput shape
 */
export interface CreateEventBusInput {
  /**
   * <p>The name of the new event bus. </p> <p>The names of custom event buses can't contain the <code>/</code> character. You can't use the name <code>default</code> for a custom event bus because this name is already used for your account's default event bus.</p> <p>If this is a partner event bus, the name must exactly match the name of the partner event source that this event bus is matched to. This name will include the <code>/</code> character.</p>
   */
  Name: string;

  /**
   * <p>If you're creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.</p>
   */
  EventSourceName?: string;

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
