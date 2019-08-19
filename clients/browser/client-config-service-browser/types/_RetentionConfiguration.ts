/**
 * <p>An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config.</p>
 */
export interface _RetentionConfiguration {
  /**
   * <p>The name of the retention configuration object.</p>
   */
  Name: string;

  /**
   * <p>Number of days AWS Config stores your historical information.</p> <note> <p>Currently, only applicable to the configuration item history.</p> </note>
   */
  RetentionPeriodInDays: number;
}

export type _UnmarshalledRetentionConfiguration = _RetentionConfiguration;
