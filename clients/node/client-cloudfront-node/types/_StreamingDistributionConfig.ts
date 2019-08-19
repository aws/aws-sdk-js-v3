import { _S3Origin, _UnmarshalledS3Origin } from "./_S3Origin";
import { _Aliases, _UnmarshalledAliases } from "./_Aliases";
import {
  _StreamingLoggingConfig,
  _UnmarshalledStreamingLoggingConfig
} from "./_StreamingLoggingConfig";
import {
  _TrustedSigners,
  _UnmarshalledTrustedSigners
} from "./_TrustedSigners";

/**
 * <p>The RTMP distribution's configuration information.</p>
 */
export interface _StreamingDistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   */
  CallerReference: string;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution. </p>
   */
  S3Origin: _S3Origin;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution. </p>
   */
  Aliases?: _Aliases;

  /**
   * <p>Any comments you want to include about the streaming distribution. </p>
   */
  Comment: string;

  /**
   * <p>A complex type that controls whether access logs are written for the streaming distribution. </p>
   */
  Logging?: _StreamingLoggingConfig;

  /**
   * <p>A complex type that specifies any AWS accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: _TrustedSigners;

  /**
   * <p>A complex type that contains information about price class for this streaming distribution. </p>
   */
  PriceClass?: "PriceClass_100" | "PriceClass_200" | "PriceClass_All" | string;

  /**
   * <p>Whether the streaming distribution is enabled to accept user requests for content.</p>
   */
  Enabled: boolean;
}

export interface _UnmarshalledStreamingDistributionConfig
  extends _StreamingDistributionConfig {
  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution. </p>
   */
  S3Origin: _UnmarshalledS3Origin;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution. </p>
   */
  Aliases?: _UnmarshalledAliases;

  /**
   * <p>A complex type that controls whether access logs are written for the streaming distribution. </p>
   */
  Logging?: _UnmarshalledStreamingLoggingConfig;

  /**
   * <p>A complex type that specifies any AWS accounts that you want to permit to create signed URLs for private content. If you want the distribution to use signed URLs, include this element; if you want the distribution to use public URLs, remove this element. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: _UnmarshalledTrustedSigners;
}
