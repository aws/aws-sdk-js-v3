/**
 * <p>A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. </p>
 */
export interface _OriginCustomHeader {
  /**
   * <p>The name of a header that you want CloudFront to forward to your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Forwarding Custom Headers to Your Origin (Web Distributions Only)</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   */
  HeaderName: string;

  /**
   * <p>The value for the header that you specified in the <code>HeaderName</code> field.</p>
   */
  HeaderValue: string;
}

export type _UnmarshalledOriginCustomHeader = _OriginCustomHeader;
