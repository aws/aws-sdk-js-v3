/**
 * <p>The current sync status between the source and the aggregator account.</p>
 */
export interface _AggregatedSourceStatus {
  /**
   * <p>The source account ID or an organization.</p>
   */
  SourceId?: string;

  /**
   * <p>The source account or an organization.</p>
   */
  SourceType?: "ACCOUNT" | "ORGANIZATION" | string;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AwsRegion?: string;

  /**
   * <p>Filters the last updated status type.</p> <ul> <li> <p>Valid value FAILED indicates errors while moving data.</p> </li> <li> <p>Valid value SUCCEEDED indicates the data was successfully moved.</p> </li> <li> <p>Valid value OUTDATED indicates the data is not the most recent.</p> </li> </ul>
   */
  LastUpdateStatus?: "FAILED" | "SUCCEEDED" | "OUTDATED" | string;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdateTime?: Date | string | number;

  /**
   * <p>The error code that AWS Config returned when the source account aggregation last failed.</p>
   */
  LastErrorCode?: string;

  /**
   * <p>The message indicating that the source account aggregation failed due to an error.</p>
   */
  LastErrorMessage?: string;
}

export interface _UnmarshalledAggregatedSourceStatus
  extends _AggregatedSourceStatus {
  /**
   * <p>The time of the last update.</p>
   */
  LastUpdateTime?: Date;
}
