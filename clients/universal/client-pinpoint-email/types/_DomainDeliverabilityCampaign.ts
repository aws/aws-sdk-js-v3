/**
 * <p>An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).</p>
 */
export interface _DomainDeliverabilityCampaign {
  /**
   * <p>The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.</p>
   */
  CampaignId?: string;

  /**
   * <p>The URL of an image that contains a snapshot of the email message that was sent.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The subject line, or title, of the email message.</p>
   */
  Subject?: string;

  /**
   * <p>The verified email address that the email message was sent from.</p>
   */
  FromAddress?: string;

  /**
   * <p>The IP addresses that were used to send the email message.</p>
   */
  SendingIps?: Array<string> | Iterable<string>;

  /**
   * <p>The first time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.</p>
   */
  FirstSeenDateTime?: Date | string | number;

  /**
   * <p>The last time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.</p>
   */
  LastSeenDateTime?: Date | string | number;

  /**
   * <p>The number of email messages that were delivered to recipients’ inboxes.</p>
   */
  InboxCount?: number;

  /**
   * <p>The number of email messages that were delivered to recipients' spam or junk mail folders.</p>
   */
  SpamCount?: number;

  /**
   * <p>The percentage of email messages that were opened by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.</p>
   */
  ReadRate?: number;

  /**
   * <p>The percentage of email messages that were deleted by recipients, without being opened first. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.</p>
   */
  DeleteRate?: number;

  /**
   * <p>The percentage of email messages that were opened and then deleted by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.</p>
   */
  ReadDeleteRate?: number;

  /**
   * <p>The projected number of recipients that the email message was sent to.</p>
   */
  ProjectedVolume?: number;

  /**
   * <p>The major email providers who handled the email message.</p>
   */
  Esps?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDomainDeliverabilityCampaign
  extends _DomainDeliverabilityCampaign {
  /**
   * <p>The IP addresses that were used to send the email message.</p>
   */
  SendingIps?: Array<string>;

  /**
   * <p>The first time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.</p>
   */
  FirstSeenDateTime?: Date;

  /**
   * <p>The last time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.</p>
   */
  LastSeenDateTime?: Date;

  /**
   * <p>The major email providers who handled the email message.</p>
   */
  Esps?: Array<string>;
}
