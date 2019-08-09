/**
 * <p>An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).</p>
 */
export interface _InboxPlacementTrackingOption {
  /**
   * <p>Specifies whether inbox placement data is being tracked for the domain.</p>
   */
  Global?: boolean;

  /**
   * <p>An array of strings, one for each major email provider that the inbox placement data applies to.</p>
   */
  TrackedIsps?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledInboxPlacementTrackingOption
  extends _InboxPlacementTrackingOption {
  /**
   * <p>An array of strings, one for each major email provider that the inbox placement data applies to.</p>
   */
  TrackedIsps?: Array<string>;
}
