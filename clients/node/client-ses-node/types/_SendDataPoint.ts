/**
 * <p>Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. </p>
 */
export interface _SendDataPoint {
  /**
   * <p>Time of the data point.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>Number of emails that have been sent.</p>
   */
  DeliveryAttempts?: number;

  /**
   * <p>Number of emails that have bounced.</p>
   */
  Bounces?: number;

  /**
   * <p>Number of unwanted emails that were rejected by recipients.</p>
   */
  Complaints?: number;

  /**
   * <p>Number of emails rejected by Amazon SES.</p>
   */
  Rejects?: number;
}

export interface _UnmarshalledSendDataPoint extends _SendDataPoint {
  /**
   * <p>Time of the data point.</p>
   */
  Timestamp?: Date;
}
