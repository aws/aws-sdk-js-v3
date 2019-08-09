import {
  _StreamingDistributionSummary,
  _UnmarshalledStreamingDistributionSummary
} from "./_StreamingDistributionSummary";

/**
 * <p>A streaming distribution list. </p>
 */
export interface _StreamingDistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter. </p>
   */
  Marker: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your RTMP distributions where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter. </p>
   */
  MaxItems: number;

  /**
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list. </p>
   */
  IsTruncated: boolean;

  /**
   * <p>The number of streaming distributions that were created by the current AWS account. </p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for each distribution that was created by the current AWS account.</p>
   */
  Items?:
    | Array<_StreamingDistributionSummary>
    | Iterable<_StreamingDistributionSummary>;
}

export interface _UnmarshalledStreamingDistributionList
  extends _StreamingDistributionList {
  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for each distribution that was created by the current AWS account.</p>
   */
  Items?: Array<_UnmarshalledStreamingDistributionSummary>;
}
