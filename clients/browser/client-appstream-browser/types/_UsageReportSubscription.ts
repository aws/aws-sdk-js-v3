import {
  _LastReportGenerationExecutionError,
  _UnmarshalledLastReportGenerationExecutionError
} from "./_LastReportGenerationExecutionError";

/**
 * <p>Describes information about the usage report subscription.</p>
 */
export interface _UsageReportSubscription {
  /**
   * <p>The Amazon S3 bucket where generated reports are stored.</p> <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0 uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts, when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The schedule for generating usage reports.</p>
   */
  Schedule?: "DAILY" | string;

  /**
   * <p>The time when the last usage report was generated.</p>
   */
  LastGeneratedReportDate?: Date | string | number;

  /**
   * <p>The errors that were returned if usage reports couldn't be generated.</p>
   */
  SubscriptionErrors?:
    | Array<_LastReportGenerationExecutionError>
    | Iterable<_LastReportGenerationExecutionError>;
}

export interface _UnmarshalledUsageReportSubscription
  extends _UsageReportSubscription {
  /**
   * <p>The time when the last usage report was generated.</p>
   */
  LastGeneratedReportDate?: Date;

  /**
   * <p>The errors that were returned if usage reports couldn't be generated.</p>
   */
  SubscriptionErrors?: Array<_UnmarshalledLastReportGenerationExecutionError>;
}
