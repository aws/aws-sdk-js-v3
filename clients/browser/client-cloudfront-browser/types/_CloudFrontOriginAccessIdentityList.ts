import {
  _CloudFrontOriginAccessIdentitySummary,
  _UnmarshalledCloudFrontOriginAccessIdentitySummary
} from "./_CloudFrontOriginAccessIdentitySummary";

/**
 * <p>Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 */
export interface _CloudFrontOriginAccessIdentityList {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page). </p>
   */
  Marker: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your origin access identities where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The maximum number of origin access identities you want in the response body. </p>
   */
  MaxItems: number;

  /**
   * <p>A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more items in the list.</p>
   */
  IsTruncated: boolean;

  /**
   * <p>The number of CloudFront origin access identities that were created by the current AWS account. </p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code> element for each origin access identity that was created by the current AWS account.</p>
   */
  Items?:
    | Array<_CloudFrontOriginAccessIdentitySummary>
    | Iterable<_CloudFrontOriginAccessIdentitySummary>;
}

export interface _UnmarshalledCloudFrontOriginAccessIdentityList
  extends _CloudFrontOriginAccessIdentityList {
  /**
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code> element for each origin access identity that was created by the current AWS account.</p>
   */
  Items?: Array<_UnmarshalledCloudFrontOriginAccessIdentitySummary>;
}
