/**
 * <p>An object that contains information about the amount of email that was delivered to recipients.</p>
 */
export interface _VolumeStatistics {
  /**
   * <p>The total number of emails that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * <p>The total number of emails that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamRawCount?: number;

  /**
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive in recipients' inboxes.</p>
   */
  ProjectedInbox?: number;

  /**
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive in recipients' spam or junk mail folders.</p>
   */
  ProjectedSpam?: number;
}

export type _UnmarshalledVolumeStatistics = _VolumeStatistics;
