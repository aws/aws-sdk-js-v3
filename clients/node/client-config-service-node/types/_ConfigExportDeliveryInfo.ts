/**
 * <p>Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.</p>
 */
export interface _ConfigExportDeliveryInfo {
  /**
   * <p>Status of the last attempted delivery.</p>
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
   * <p>The time of the last attempted delivery.</p>
   */
  lastAttemptTime?: Date | string | number;

  /**
   * <p>The time of the last successful delivery.</p>
   */
  lastSuccessfulTime?: Date | string | number;

  /**
   * <p>The time that the next delivery occurs.</p>
   */
  nextDeliveryTime?: Date | string | number;
}

export interface _UnmarshalledConfigExportDeliveryInfo
  extends _ConfigExportDeliveryInfo {
  /**
   * <p>The time of the last attempted delivery.</p>
   */
  lastAttemptTime?: Date;

  /**
   * <p>The time of the last successful delivery.</p>
   */
  lastSuccessfulTime?: Date;

  /**
   * <p>The time that the next delivery occurs.</p>
   */
  nextDeliveryTime?: Date;
}
