import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Input for SetPlatformApplicationAttributes action.</p>
 */
export interface SetPlatformApplicationAttributesInput {
  /**
   * <p>PlatformApplicationArn for SetPlatformApplicationAttributes action.</p>
   */
  PlatformApplicationArn: string;

  /**
   * <p>A map of the platform application attributes. Attributes in this map include the following:</p> <ul> <li> <p> <code>PlatformCredential</code> – The credential received from the notification service. For APNS/APNS_SANDBOX, PlatformCredential is private key. For GCM, PlatformCredential is "API key". For ADM, PlatformCredential is "client secret".</p> </li> <li> <p> <code>PlatformPrincipal</code> – The principal received from the notification service. For APNS/APNS_SANDBOX, PlatformPrincipal is SSL certificate. For GCM, PlatformPrincipal is not applicable. For ADM, PlatformPrincipal is "client id".</p> </li> <li> <p> <code>EventEndpointCreated</code> – Topic ARN to which EndpointCreated event notifications should be sent.</p> </li> <li> <p> <code>EventEndpointDeleted</code> – Topic ARN to which EndpointDeleted event notifications should be sent.</p> </li> <li> <p> <code>EventEndpointUpdated</code> – Topic ARN to which EndpointUpdate event notifications should be sent.</p> </li> <li> <p> <code>EventDeliveryFailure</code> – Topic ARN to which DeliveryFailure event notifications should be sent upon Direct Publish delivery failure (permanent) to one of the application's endpoints.</p> </li> <li> <p> <code>SuccessFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>FailureFeedbackRoleArn</code> – IAM role ARN used to give Amazon SNS write access to use CloudWatch Logs on your behalf.</p> </li> <li> <p> <code>SuccessFeedbackSampleRate</code> – Sample rate percentage (0-100) of successfully delivered messages.</p> </li> </ul>
   */
  Attributes: { [key: string]: string } | Iterable<[string, string]>;

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
