/**
 * <p>An object that represents the authorizations granted to aggregator accounts and regions.</p>
 */
export interface _AggregationAuthorization {
  /**
   * <p>The Amazon Resource Name (ARN) of the aggregation object.</p>
   */
  AggregationAuthorizationArn?: string;

  /**
   * <p>The 12-digit account ID of the account authorized to aggregate data.</p>
   */
  AuthorizedAccountId?: string;

  /**
   * <p>The region authorized to collect aggregated data.</p>
   */
  AuthorizedAwsRegion?: string;

  /**
   * <p>The time stamp when the aggregation authorization was created.</p>
   */
  CreationTime?: Date | string | number;
}

export interface _UnmarshalledAggregationAuthorization
  extends _AggregationAuthorization {
  /**
   * <p>The time stamp when the aggregation authorization was created.</p>
   */
  CreationTime?: Date;
}
