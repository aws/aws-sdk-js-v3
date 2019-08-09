import { _APNSVoipChannelRequest } from "./_APNSVoipChannelRequest";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApnsVoipChannelInput shape
 */
export interface UpdateApnsVoipChannelInput {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelRequest: _APNSVoipChannelRequest;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string;

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
