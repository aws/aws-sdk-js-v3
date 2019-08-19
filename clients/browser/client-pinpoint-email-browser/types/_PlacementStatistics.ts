/**
 * <p>An object that contains inbox placement data for an email provider.</p>
 */
export interface _PlacementStatistics {
  /**
   * <p>The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.</p>
   */
  InboxPercentage?: number;

  /**
   * <p>The percentage of emails that arrived in recipients' spam or junk mail folders during the predictive inbox placement test.</p>
   */
  SpamPercentage?: number;

  /**
   * <p>The percentage of emails that didn't arrive in recipients' inboxes at all during the predictive inbox placement test.</p>
   */
  MissingPercentage?: number;

  /**
   * <p>The percentage of emails that were authenticated by using Sender Policy Framework (SPF) during the predictive inbox placement test.</p>
   */
  SpfPercentage?: number;

  /**
   * <p>The percentage of emails that were authenticated by using DomainKeys Identified Mail (DKIM) during the predictive inbox placement test.</p>
   */
  DkimPercentage?: number;
}

export type _UnmarshalledPlacementStatistics = _PlacementStatistics;
