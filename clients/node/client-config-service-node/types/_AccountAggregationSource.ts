/**
 * <p>A collection of accounts and regions.</p>
 */
export interface _AccountAggregationSource {
  /**
   * <p>The 12-digit account ID of the account being aggregated. </p>
   */
  AccountIds: Array<string> | Iterable<string>;

  /**
   * <p>If true, aggregate existing AWS Config regions and future regions.</p>
   */
  AllAwsRegions?: boolean;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAccountAggregationSource
  extends _AccountAggregationSource {
  /**
   * <p>The 12-digit account ID of the account being aggregated. </p>
   */
  AccountIds: Array<string>;

  /**
   * <p>The source regions being aggregated.</p>
   */
  AwsRegions?: Array<string>;
}
