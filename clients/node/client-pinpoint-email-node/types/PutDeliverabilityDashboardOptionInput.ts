import { _DomainDeliverabilityTrackingOption } from "./_DomainDeliverabilityTrackingOption";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface PutDeliverabilityDashboardOptionInput {
  /**
   * <p>Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.</p>
   */
  DashboardEnabled: boolean;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and enabled the Deliverability dashboard for.</p>
   */
  SubscribedDomains?:
    | Array<_DomainDeliverabilityTrackingOption>
    | Iterable<_DomainDeliverabilityTrackingOption>;

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
