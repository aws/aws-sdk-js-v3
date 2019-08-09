import {
  _InvalidationSummary,
  _UnmarshalledInvalidationSummary
} from "./_InvalidationSummary";

/**
 * <p>The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface _InvalidationList {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your invalidation batches where they left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number;

  /**
   * <p>A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more invalidation batches in the list.</p>
   */
  IsTruncated: boolean;

  /**
   * <p>The number of invalidation batches that were created by the current AWS account. </p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each invalidation batch created by the current AWS account.</p>
   */
  Items?: Array<_InvalidationSummary> | Iterable<_InvalidationSummary>;
}

export interface _UnmarshalledInvalidationList extends _InvalidationList {
  /**
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each invalidation batch created by the current AWS account.</p>
   */
  Items?: Array<_UnmarshalledInvalidationSummary>;
}
