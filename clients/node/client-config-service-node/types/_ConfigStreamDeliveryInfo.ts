/**
 * <p>A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.</p>
 */
export interface _ConfigStreamDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p> <p> <b>Note</b> Providing an SNS topic on a <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html">DeliveryChannel</a> for AWS Config is optional. If the SNS delivery is turned off, the last status will be <b>Not_Applicable</b>.</p>
   */
  lastStatus?: "Success" | "Failure" | "Not_Applicable" | string;

  /**
   * <p>The error code from the last attempted delivery.</p>
   */
  lastErrorCode?: string;

  /**
   * <p>The error message from the last attempted delivery.</p>
   */
  lastErrorMessage?: string;

  /**
   * <p>The time from the last status change.</p>
   */
  lastStatusChangeTime?: Date | string | number;
}

export interface _UnmarshalledConfigStreamDeliveryInfo
  extends _ConfigStreamDeliveryInfo {
  /**
   * <p>The time from the last status change.</p>
   */
  lastStatusChangeTime?: Date;
}
