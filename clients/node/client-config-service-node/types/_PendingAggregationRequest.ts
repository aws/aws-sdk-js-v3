/**
 * <p>An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.</p>
 */
export interface _PendingAggregationRequest {
  /**
   * <p>The 12-digit account ID of the account requesting to aggregate data.</p>
   */
  RequesterAccountId?: string;

  /**
   * <p>The region requesting to aggregate data. </p>
   */
  RequesterAwsRegion?: string;
}

export type _UnmarshalledPendingAggregationRequest = _PendingAggregationRequest;
