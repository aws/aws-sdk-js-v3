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
import { _LoggingConfig, _UnmarshalledLoggingConfig } from "./_LoggingConfig";
import {
  _ViewerCertificate,
  _UnmarshalledViewerCertificate
} from "./_ViewerCertificate";
import { _Restrictions, _UnmarshalledRestrictions } from "./_Restrictions";

/**
 * <p>A distribution configuration.</p>
 */
export interface _DistributionConfig {
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p> <p>If the value of <code>CallerReference</code> is new (regardless of the content of the <code>DistributionConfig</code> object), CloudFront creates a new distribution.</p> <p>If <code>CallerReference</code> is a value that you already sent in a previous request to create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   */
  CallerReference: string;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   */
  Aliases?: _Aliases;

  /**
   * <p>The object that you want CloudFront to request from your origin (for example, <code>index.html</code>) when a viewer requests the root URL for your distribution (<code>http://www.example.com</code>) instead of an object in your distribution (<code>http://www.example.com/product-description.html</code>). Specifying a default root object avoids exposing the contents of your distribution.</p> <p>Specify only the object name, for example, <code>index.html</code>. Don't add a <code>/</code> before the object name.</p> <p>If you don't want to specify a default root object when you create a distribution, include an empty <code>DefaultRootObject</code> element.</p> <p>To delete the default root object from an existing distribution, update the distribution configuration and include an empty <code>DefaultRootObject</code> element.</p> <p>To replace the default root object, update the distribution configuration and specify the new object.</p> <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a Default Root Object</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultRootObject?: string;

  /**
   * <p>A complex type that contains information about origins for this distribution. </p>
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
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements. </p>
   */
  CacheBehaviors?: _CacheBehaviors;

  /**
   * <p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CustomErrorResponses?: _CustomErrorResponses;

  /**
   * <p>Any comments you want to include about the distribution.</p> <p>If you don't want to specify a comment, include an empty <code>Comment</code> element.</p> <p>To delete an existing comment, update the distribution configuration and include an empty <code>Comment</code> element.</p> <p>To add or change a comment, update the distribution configuration and specify the new comment.</p>
   */
  Comment: string;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Logging?: _LoggingConfig;

  /**
   * <p>The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your objects from all CloudFront edge locations.</p> <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.</p> <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see <a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>. For price class information, scroll down to see the table at the bottom of the page.</p>
   */
  PriceClass?: "PriceClass_100" | "PriceClass_200" | "PriceClass_All" | string;

  /**
   * <p>From this field, you can enable or disable the selected distribution.</p>
   */
  Enabled: boolean;

  /**
   * <p>A complex type that specifies whether you want viewers to use HTTP or HTTPS to request your objects, whether you're using an alternate domain name with HTTPS, and if so, if you're using AWS Certificate Manager (ACM) or a third-party certificate authority.</p>
   */
  ViewerCertificate?: _ViewerCertificate;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   */
  Restrictions?: _Restrictions;

  /**
   * <p>A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution.</p> <p>AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about AWS WAF, see the <a href="http://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">AWS WAF Developer Guide</a>. </p>
   */
  WebACLId?: string;

  /**
   * <p>(Optional) Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is http2. Viewers that don't support HTTP/2 automatically use an earlier HTTP version.</p> <p>For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must support Server Name Identification (SNI).</p> <p>In general, configuring CloudFront to communicate with viewers using HTTP/2 reduces latency. You can improve performance by optimizing for HTTP/2. For more information, do an Internet search for "http/2 optimization." </p>
   */
  HttpVersion?: "http1.1" | "http2" | string;

  /**
   * <p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution. </p> <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the <code>IpAddress</code> parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you're using an Amazon Route 53 alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:</p> <ul> <li> <p>You enable IPv6 for the distribution</p> </li> <li> <p>You're using alternate domain names in the URLs for your objects</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you created a CNAME resource record set, either with Amazon Route 53 or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</p>
   */
  IsIPV6Enabled?: boolean;
}

export interface _UnmarshalledDistributionConfig extends _DistributionConfig {
  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   */
  Aliases?: _UnmarshalledAliases;

  /**
   * <p>A complex type that contains information about origins for this distribution. </p>
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
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements. </p>
   */
  CacheBehaviors?: _UnmarshalledCacheBehaviors;

  /**
   * <p>A complex type that controls the following:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CustomErrorResponses?: _UnmarshalledCustomErrorResponses;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p> <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Logging?: _UnmarshalledLoggingConfig;

  /**
   * <p>A complex type that specifies whether you want viewers to use HTTP or HTTPS to request your objects, whether you're using an alternate domain name with HTTPS, and if so, if you're using AWS Certificate Manager (ACM) or a third-party certificate authority.</p>
   */
  ViewerCertificate?: _UnmarshalledViewerCertificate;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   */
  Restrictions?: _UnmarshalledRestrictions;
}
