/**
 * <p>An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.</p>
 */
export interface _SendQuota {
  /**
   * <p>The maximum number of emails that you can send in the current AWS Region over a 24-hour period. This value is also called your <i>sending quota</i>.</p>
   */
  Max24HourSend?: number;

  /**
   * <p>The maximum number of emails that you can send per second in the current AWS Region. This value is also called your <i>maximum sending rate</i> or your <i>maximum TPS (transactions per second) rate</i>.</p>
   */
  MaxSendRate?: number;

  /**
   * <p>The number of emails sent from your Amazon Pinpoint account in the current AWS Region over the past 24 hours.</p>
   */
  SentLast24Hours?: number;
}

export type _UnmarshalledSendQuota = _SendQuota;
