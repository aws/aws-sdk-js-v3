import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNotificationSubscriptionInput shape
 */
export interface CreateNotificationSubscriptionInput {
  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string;

  /**
   * <p>The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.</p>
   */
  Endpoint: string;

  /**
   * <p>The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.</p>
   */
  Protocol: "HTTPS" | string;

  /**
   * <p>The notification type.</p>
   */
  SubscriptionType: "ALL" | string;

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
