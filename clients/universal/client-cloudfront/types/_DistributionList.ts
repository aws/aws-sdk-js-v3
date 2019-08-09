import {
  _DistributionSummary,
  _UnmarshalledDistributionSummary
} from "./_DistributionSummary";

/**
 * <p>A distribution list.</p>
 */
export interface _DistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your distributions where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number;

  /**
   * <p>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list.</p>
   */
  IsTruncated: boolean;

  /**
   * <p>The number of distributions that were created by the current AWS account. </p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each distribution that was created by the current AWS account.</p>
   */
  Items?: Array<_DistributionSummary> | Iterable<_DistributionSummary>;
}

export interface _UnmarshalledDistributionList extends _DistributionList {
  /**
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each distribution that was created by the current AWS account.</p>
   */
  Items?: Array<_UnmarshalledDistributionSummary>;
}
