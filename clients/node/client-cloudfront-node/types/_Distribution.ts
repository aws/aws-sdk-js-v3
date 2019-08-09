import {
  _ActiveTrustedSigners,
  _UnmarshalledActiveTrustedSigners
} from "./_ActiveTrustedSigners";
import {
  _DistributionConfig,
  _UnmarshalledDistributionConfig
} from "./_DistributionConfig";
import {
  _AliasICPRecordal,
  _UnmarshalledAliasICPRecordal
} from "./_AliasICPRecordal";

/**
 * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.</p>
 */
export interface _Distribution {
  /**
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>. </p>
   */
  Id: string;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string;

  /**
   * <p>This response element indicates the current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is fully propagated to all CloudFront edge locations. </p>
   */
  Status: string;

  /**
   * <p>The date and time the distribution was last modified. </p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>The number of invalidation batches currently in progress. </p>
   */
  InProgressInvalidationBatches: number;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>. </p>
   */
  DomainName: string;

  /**
   * <p>CloudFront automatically adds this element to the response only if you've set up the distribution to serve private content with signed URLs. The element lists the key pair IDs that CloudFront is aware of for each trusted signer. The <code>Signer</code> child element lists the AWS account number of the trusted signer (or an empty <code>Self</code> element if the signer is you). The <code>Signer</code> element also includes the IDs of any active key pairs associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create working signed URLs.</p>
   */
  ActiveTrustedSigners: _ActiveTrustedSigners;

  /**
   * <p>The current configuration information for the distribution. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/distribution ID/config</code> resource.</p>
   */
  DistributionConfig: _DistributionConfig;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: Array<_AliasICPRecordal> | Iterable<_AliasICPRecordal>;
}

export interface _UnmarshalledDistribution extends _Distribution {
  /**
   * <p>The date and time the distribution was last modified. </p>
   */
  LastModifiedTime: Date;

  /**
   * <p>CloudFront automatically adds this element to the response only if you've set up the distribution to serve private content with signed URLs. The element lists the key pair IDs that CloudFront is aware of for each trusted signer. The <code>Signer</code> child element lists the AWS account number of the trusted signer (or an empty <code>Self</code> element if the signer is you). The <code>Signer</code> element also includes the IDs of any active key pairs associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create working signed URLs.</p>
   */
  ActiveTrustedSigners: _UnmarshalledActiveTrustedSigners;

  /**
   * <p>The current configuration information for the distribution. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/distribution ID/config</code> resource.</p>
   */
  DistributionConfig: _UnmarshalledDistributionConfig;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: Array<_UnmarshalledAliasICPRecordal>;
}
