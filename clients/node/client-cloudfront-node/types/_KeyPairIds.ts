/**
 * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
 */
export interface _KeyPairIds {
  /**
   * <p>The number of active CloudFront key pairs for <code>AwsAccountNumber</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
   */
  Items?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledKeyPairIds extends _KeyPairIds {
  /**
   * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
   */
  Items?: Array<string>;
}
