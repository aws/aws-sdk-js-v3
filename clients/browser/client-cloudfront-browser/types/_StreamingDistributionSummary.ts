import { _S3Origin, _UnmarshalledS3Origin } from "./_S3Origin";
import { _Aliases, _UnmarshalledAliases } from "./_Aliases";
import {
  _TrustedSigners,
  _UnmarshalledTrustedSigners
} from "./_TrustedSigners";

/**
 * <p> A summary of the information for a CloudFront streaming distribution.</p>
 */
export interface _StreamingDistributionSummary {
  /**
   * <p>The identifier for the distribution, for example, <code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string;

  /**
   * <p> The ARN (Amazon Resource Name) for the streaming distribution. For example: <code>arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string;

  /**
   * <p> Indicates the current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is fully propagated throughout the Amazon CloudFront system.</p>
   */
  Status: string;

  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.</p>
   */
  S3Origin: _S3Origin;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.</p>
   */
  Aliases: _Aliases;

  /**
   * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>.If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>. To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: _TrustedSigners;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string;

  /**
   * <p>A complex type that contains information about price class for this streaming distribution. </p>
   */
  PriceClass: "PriceClass_100" | "PriceClass_200" | "PriceClass_All" | string;

  /**
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   */
  Enabled: boolean;
}

export interface _UnmarshalledStreamingDistributionSummary
  extends _StreamingDistributionSummary {
  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.</p>
   */
  S3Origin: _UnmarshalledS3Origin;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.</p>
   */
  Aliases: _UnmarshalledAliases;

  /**
   * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>.If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>. To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: _UnmarshalledTrustedSigners;
}
