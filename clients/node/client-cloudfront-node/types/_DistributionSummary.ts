import { _Aliases, _UnmarshalledAliases } from "./_Aliases";
import { _Origins, _UnmarshalledOrigins } from "./_Origins";
import { _OriginGroups, _UnmarshalledOriginGroups } from "./_OriginGroups";
import {
  _DefaultCacheBehavior,
  _UnmarshalledDefaultCacheBehavior
} from "./_DefaultCacheBehavior";
import {
  _CacheBehaviors,
  _UnmarshalledCacheBehaviors
} from "./_CacheBehaviors";
import {
  _CustomErrorResponses,
  _UnmarshalledCustomErrorResponses
} from "./_CustomErrorResponses";
import {
  _ViewerCertificate,
  _UnmarshalledViewerCertificate
} from "./_ViewerCertificate";
import { _Restrictions, _UnmarshalledRestrictions } from "./_Restrictions";
import {
  _AliasICPRecordal,
  _UnmarshalledAliasICPRecordal
} from "./_AliasICPRecordal";

/**
 * <p>A summary of the information about a CloudFront distribution.</p>
 */
export interface _DistributionSummary {
  /**
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string;

  /**
   * <p>The current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string;

  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   */
  Aliases: _Aliases;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins: _Origins;

  /**
   * <p> A complex type that contains information about origin groups for this distribution.</p>
   */
  OriginGroups?: _OriginGroups;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p>
   */
  DefaultCacheBehavior: _DefaultCacheBehavior;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
   */
  CacheBehaviors: _CacheBehaviors;

  /**
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code> elements.</p>
   */
  CustomErrorResponses: _CustomErrorResponses;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string;

  /**
   * <p>A complex type that contains information about price class for this streaming distribution. </p>
   */
  PriceClass: "PriceClass_100" | "PriceClass_200" | "PriceClass_All" | string;

  /**
   * <p>Whether the distribution is enabled to accept user requests for content.</p>
   */
  Enabled: boolean;

  /**
   * <p>A complex type that specifies whether you want viewers to use HTTP or HTTPS to request your objects, whether you're using an alternate domain name with HTTPS, and if so, if you're using AWS Certificate Manager (ACM) or a third-party certificate authority.</p>
   */
  ViewerCertificate: _ViewerCertificate;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   */
  Restrictions: _Restrictions;

  /**
   * <p>The Web ACL Id (if any) associated with the distribution.</p>
   */
  WebACLId: string;

  /**
   * <p> Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support <code>HTTP/2</code> will automatically use an earlier version.</p>
   */
  HttpVersion: "http1.1" | "http2" | string;

  /**
   * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your distribution.</p>
   */
  IsIPV6Enabled: boolean;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: Array<_AliasICPRecordal> | Iterable<_AliasICPRecordal>;
}

export interface _UnmarshalledDistributionSummary extends _DistributionSummary {
  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   */
  Aliases: _UnmarshalledAliases;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins: _UnmarshalledOrigins;

  /**
   * <p> A complex type that contains information about origin groups for this distribution.</p>
   */
  OriginGroups?: _UnmarshalledOriginGroups;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p>
   */
  DefaultCacheBehavior: _UnmarshalledDefaultCacheBehavior;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
   */
  CacheBehaviors: _UnmarshalledCacheBehaviors;

  /**
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code> elements.</p>
   */
  CustomErrorResponses: _UnmarshalledCustomErrorResponses;

  /**
   * <p>A complex type that specifies whether you want viewers to use HTTP or HTTPS to request your objects, whether you're using an alternate domain name with HTTPS, and if so, if you're using AWS Certificate Manager (ACM) or a third-party certificate authority.</p>
   */
  ViewerCertificate: _UnmarshalledViewerCertificate;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   */
  Restrictions: _UnmarshalledRestrictions;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: Array<_UnmarshalledAliasICPRecordal>;
}
