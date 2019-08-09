/**
 * <p>A complex type that specifies the following:</p> <ul> <li> <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p> </li> <li> <p>If you want viewers to use HTTPS, whether you're using an alternate domain name such as <code>example.com</code> or the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>.</p> </li> <li> <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM) provided the certificate, or you purchased a certificate from a third-party certificate authority and imported it into ACM or uploaded it to the IAM certificate store.</p> </li> </ul> <p>Specify only one of the following values: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-CloudFrontDefaultCertificate">CloudFrontDefaultCertificate</a> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface _ViewerCertificate {
  /**
   * <p>If you're using the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>, specify the following value:</p> <ul> <li> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; </code> </p> </li> </ul>
   */
  CloudFrontDefaultCertificate?: boolean;

  /**
   * <p>If you want viewers to use HTTPS to request your objects and you're using an alternate domain name, you must choose the type of certificate that you want to use. Specify the following value if you purchased your certificate from a third-party certificate authority:</p> <ul> <li> <p> <code>&lt;IAMCertificateId&gt;<i>IAM certificate ID</i>&lt;IAMCertificateId&gt;</code> where <code> <i>IAM certificate ID</i> </code> is the ID that IAM returned when you added the certificate to the IAM certificate store.</p> </li> </ul> <p>If you specify <code>IAMCertificateId</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p>
   */
  IAMCertificateId?: string;

  /**
   * <p>If you want viewers to use HTTPS to request your objects and you're using an alternate domain name, you must choose the type of certificate that you want to use. Specify the following value if ACM provided your certificate:</p> <ul> <li> <p> <code>&lt;ACMCertificateArn&gt;<i>ARN for ACM SSL/TLS certificate</i>&lt;ACMCertificateArn&gt;</code> where <code> <i>ARN for ACM SSL/TLS certificate</i> </code> is the ARN for the ACM SSL/TLS certificate that you want to use for this distribution.</p> </li> </ul> <p>If you specify <code>ACMCertificateArn</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p>
   */
  ACMCertificateArn?: string;

  /**
   * <p>If you specify a value for <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a> or for <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a>, you must also specify how you want CloudFront to serve HTTPS requests: using a method that works for browsers and clients released after 2010 or one that works for all clients.</p> <ul> <li> <p> <code>sni-only</code>: CloudFront can respond to HTTPS requests from viewers that support Server Name Indication (SNI). All modern browsers support SNI, but there are a few that don't. For a current list of the browsers that support SNI, see the <a href="http://en.wikipedia.org/wiki/Server_Name_Indication">Wikipedia entry Server Name Indication</a>. To learn about options to explore if you have users with browsers that don't include SNI support, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html">Choosing How CloudFront Serves HTTPS Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p> <code>vip</code>: CloudFront uses dedicated IP addresses for your content and can respond to HTTPS requests from any viewer. However, there are additional monthly charges. For details, including specific pricing information, see <a href="http://aws.amazon.com/cloudfront/custom-ssl-domains/">Custom SSL options for Amazon CloudFront</a> on the AWS marketing site.</p> </li> </ul> <p>Don't specify a value for <code>SSLSupportMethod</code> if you specified <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html">Choosing How CloudFront Serves HTTPS Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  SSLSupportMethod?: "sni-only" | "vip" | string;

  /**
   * <p>Specify the security policy that you want CloudFront to use for HTTPS connections. A security policy determines two settings:</p> <ul> <li> <p>The minimum SSL/TLS protocol that CloudFront uses to communicate with viewers</p> </li> <li> <p>The cipher that CloudFront uses to encrypt the content that it returns to viewers</p> </li> </ul> <note> <p>On the CloudFront console, this setting is called <b>Security policy</b>.</p> </note> <p>We recommend that you specify <code>TLSv1.1_2016</code> unless your users are using browsers or devices that do not support TLSv1.1 or later.</p> <p>When both of the following are true, you must specify <code>TLSv1</code> or later for the security policy: </p> <ul> <li> <p>You're using a custom certificate: you specified a value for <code>ACMCertificateArn</code> or for <code>IAMCertificateId</code> </p> </li> <li> <p>You're using SNI: you specified <code>sni-only</code> for <code>SSLSupportMethod</code> </p> </li> </ul> <p>If you specify <code>true</code> for <code>CloudFrontDefaultCertificate</code>, CloudFront automatically sets the security policy to <code>TLSv1</code> regardless of the value that you specify for <code>MinimumProtocolVersion</code>.</p> <p>For information about the relationship between the security policy that you choose and the protocols and ciphers that CloudFront uses to communicate with viewers, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers"> Supported SSL/TLS Protocols and Ciphers for Communication Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MinimumProtocolVersion?:
    | "SSLv3"
    | "TLSv1"
    | "TLSv1_2016"
    | "TLSv1.1_2016"
    | "TLSv1.2_2018"
    | string;

  /**
   * <p>This field is no longer used. Use one of the following fields instead:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-CloudFrontDefaultCertificate">CloudFrontDefaultCertificate</a> </p> </li> </ul>
   */
  Certificate?: string;

  /**
   * <p>This field is no longer used. Use one of the following fields instead:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-CloudFrontDefaultCertificate">CloudFrontDefaultCertificate</a> </p> </li> </ul>
   */
  CertificateSource?: "cloudfront" | "iam" | "acm" | string;
}

export type _UnmarshalledViewerCertificate = _ViewerCertificate;
