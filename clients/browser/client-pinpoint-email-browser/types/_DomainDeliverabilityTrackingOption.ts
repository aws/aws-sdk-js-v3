import {
  _InboxPlacementTrackingOption,
  _UnmarshalledInboxPlacementTrackingOption
} from "./_InboxPlacementTrackingOption";

/**
 * <p>An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.</p>
 */
export interface _DomainDeliverabilityTrackingOption {
  /**
   * <p>A verified domain that’s associated with your AWS account and currently has an active Deliverability dashboard subscription.</p>
   */
  Domain?: string;

  /**
   * <p>The date, in Unix time format, when you enabled the Deliverability dashboard for the domain.</p>
   */
  SubscriptionStartDate?: Date | string | number;

  /**
   * <p>An object that contains information about the inbox placement data settings for the domain.</p>
   */
  InboxPlacementTrackingOption?: _InboxPlacementTrackingOption;
}

export interface _UnmarshalledDomainDeliverabilityTrackingOption
  extends _DomainDeliverabilityTrackingOption {
  /**
   * <p>The date, in Unix time format, when you enabled the Deliverability dashboard for the domain.</p>
   */
  SubscriptionStartDate?: Date;

  /**
   * <p>An object that contains information about the inbox placement data settings for the domain.</p>
   */
  InboxPlacementTrackingOption?: _UnmarshalledInboxPlacementTrackingOption;
}
