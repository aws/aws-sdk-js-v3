/**
 * <p>An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.</p>
 */
export interface _DomainIspPlacement {
  /**
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * <p>The total number of messages that were sent from the selected domain to the specified email provider that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * <p>The total number of messages that were sent from the selected domain to the specified email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamRawCount?: number;

  /**
   * <p>The percentage of messages that were sent from the selected domain to the specified email provider that arrived in recipients' inboxes.</p>
   */
  InboxPercentage?: number;

  /**
   * <p>The percentage of messages that were sent from the selected domain to the specified email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamPercentage?: number;
}

export type _UnmarshalledDomainIspPlacement = _DomainIspPlacement;
