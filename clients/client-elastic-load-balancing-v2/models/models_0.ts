import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AuthenticateCognitoActionConditionalBehaviorEnum {
  ALLOW = "allow",
  AUTHENTICATE = "authenticate",
  DENY = "deny",
}

/**
 * <p>Request parameters to use when integrating with Amazon Cognito to authenticate users.</p>
 */
export interface AuthenticateCognitoActionConfig {
  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>
   */
  AuthenticationRequestExtraParams?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Cognito user pool.</p>
   */
  UserPoolArn: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito user pool client.</p>
   */
  UserPoolClientId: string | undefined;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>
   */
  SessionTimeout?: number;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p>
   *          <p>To verify which scope values your IdP supports and how to separate multiple values,
   *         see the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.</p>
   */
  UserPoolDomain: string | undefined;

  /**
   * <p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The behavior if the user is not authenticated. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>deny<code></code> - Return an HTTP 401 Unauthorized error.</p>
   *             </li>
   *             <li>
   *                <p>allow<code></code> - Allow the request to be forwarded to the target.</p>
   *             </li>
   *             <li>
   *                <p>authenticate<code></code> - Redirect the request to the IdP authorization endpoint. This is the default value.</p>
   *             </li>
   *          </ul>
   */
  OnUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnum | string;
}

export namespace AuthenticateCognitoActionConfig {
  export const filterSensitiveLog = (obj: AuthenticateCognitoActionConfig): any => ({
    ...obj,
  });
}

export enum AuthenticateOidcActionConditionalBehaviorEnum {
  ALLOW = "allow",
  AUTHENTICATE = "authenticate",
  DENY = "deny",
}

/**
 * <p>Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.</p>
 */
export interface AuthenticateOidcActionConfig {
  /**
   * <p>The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule,
   *         you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.</p>
   */
  ClientSecret?: string;

  /**
   * <p>The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  Issuer: string | undefined;

  /**
   * <p>The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>
   */
  SessionTimeout?: number;

  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>
   */
  AuthenticationRequestExtraParams?: { [key: string]: string };

  /**
   * <p>The behavior if the user is not authenticated. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>deny<code></code> - Return an HTTP 401 Unauthorized error.</p>
   *             </li>
   *             <li>
   *                <p>allow<code></code> - Allow the request to be forwarded to the target.</p>
   *             </li>
   *             <li>
   *                <p>authenticate<code></code> - Redirect the request to the IdP authorization endpoint. This is the default value.</p>
   *             </li>
   *          </ul>
   */
  OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum | string;

  /**
   * <p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p>
   *          <p>To verify which scope values your IdP supports and how to separate multiple values,
   *       see the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule,
   *         you can omit this parameter or set it to false.</p>
   */
  UseExistingClientSecret?: boolean;
}

export namespace AuthenticateOidcActionConfig {
  export const filterSensitiveLog = (obj: AuthenticateOidcActionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an action that returns a custom HTTP response.</p>
 */
export interface FixedResponseActionConfig {
  /**
   * <p>The HTTP response code (2XX, 4XX, or 5XX).</p>
   */
  StatusCode: string | undefined;

  /**
   * <p>The message.</p>
   */
  MessageBody?: string;

  /**
   * <p>The content type.</p>
   *          <p>Valid Values: text/plain | text/css | text/html | application/javascript | application/json</p>
   */
  ContentType?: string;
}

export namespace FixedResponseActionConfig {
  export const filterSensitiveLog = (obj: FixedResponseActionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about how traffic will be distributed between multiple target groups in a forward rule.</p>
 */
export interface TargetGroupTuple {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The weight. The range is 0 to 999.</p>
   */
  Weight?: number;
}

export namespace TargetGroupTuple {
  export const filterSensitiveLog = (obj: TargetGroupTuple): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the target group stickiness for a rule.</p>
 */
export interface TargetGroupStickinessConfig {
  /**
   * <p>Indicates whether target group stickiness is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The time period, in seconds, during which requests from a client should be
   *       routed to the same target group. The range is 1-604800 seconds (7 days).</p>
   */
  DurationSeconds?: number;
}

export namespace TargetGroupStickinessConfig {
  export const filterSensitiveLog = (obj: TargetGroupStickinessConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a forward action.</p>
 */
export interface ForwardActionConfig {
  /**
   * <p>The target group stickiness for the rule.</p>
   */
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;

  /**
   * <p>One or more target groups. For Network Load Balancers, you can specify a single target group.</p>
   */
  TargetGroups?: TargetGroupTuple[];
}

export namespace ForwardActionConfig {
  export const filterSensitiveLog = (obj: ForwardActionConfig): any => ({
    ...obj,
  });
}

export enum RedirectActionStatusCodeEnum {
  HTTP_301 = "HTTP_301",
  HTTP_302 = "HTTP_302",
}

/**
 * <p>Information about a redirect action.</p>
 *          <p>A URI consists of the following components: protocol://hostname:port/path?query. You must
 *       modify at least one of the following components to avoid a redirect loop: protocol, hostname,
 *       port, or path. Any components that you do not modify retain their original values.</p>
 *          <p>You can reuse URI components using the following reserved keywords:</p>
 *          <ul>
 *             <li>
 *                <p>#{protocol}</p>
 *             </li>
 *             <li>
 *                <p>#{host}</p>
 *             </li>
 *             <li>
 *                <p>#{port}</p>
 *             </li>
 *             <li>
 *                <p>#{path} (the leading "/" is removed)</p>
 *             </li>
 *             <li>
 *                <p>#{query}</p>
 *             </li>
 *          </ul>
 *          <p>For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}",
 *       or the query to "#{query}&value=xyz".</p>
 */
export interface RedirectActionConfig {
  /**
   * <p>The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP,
   *       HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.</p>
   */
  Protocol?: string;

  /**
   * <p>The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).</p>
   */
  StatusCode: RedirectActionStatusCodeEnum | string | undefined;

  /**
   * <p>The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include
   *       the leading "?", as it is automatically added. You can specify any of the reserved
   *       keywords.</p>
   */
  Query?: string;

  /**
   * <p>The port. You can specify a value from 1 to 65535 or #{port}.</p>
   */
  Port?: string;

  /**
   * <p>The hostname. This component is not percent-encoded. The hostname can contain #{host}.</p>
   */
  Host?: string;

  /**
   * <p>The absolute path, starting with the leading "/". This component is not percent-encoded.
   *       The path can contain #{host}, #{path}, and #{port}.</p>
   */
  Path?: string;
}

export namespace RedirectActionConfig {
  export const filterSensitiveLog = (obj: RedirectActionConfig): any => ({
    ...obj,
  });
}

export enum ActionTypeEnum {
  AUTHENTICATE_COGNITO = "authenticate-cognito",
  AUTHENTICATE_OIDC = "authenticate-oidc",
  FIXED_RESPONSE = "fixed-response",
  FORWARD = "forward",
  REDIRECT = "redirect",
}

/**
 * <p>Information about an action.</p>
 */
export interface Action {
  /**
   * <p>Information for creating an action that distributes requests among one or more target groups.
   *       For Network Load Balancers, you can specify a single target group.
   *       Specify only when <code>Type</code> is <code>forward</code>.
   *       If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group
   *       using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.</p>
   */
  ForwardConfig?: ForwardActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating a redirect action.
   *       Specify only when <code>Type</code> is <code>redirect</code>.</p>
   */
  RedirectConfig?: RedirectActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating an action that returns a custom HTTP response.
   *       Specify only when <code>Type</code> is <code>fixed-response</code>.</p>
   */
  FixedResponseConfig?: FixedResponseActionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.
   *       Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group.
   *       To route to one or more target groups, use <code>ForwardConfig</code> instead.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The order for the action. This value is required for rules with multiple actions.
   *       The action with the lowest value for order is performed first. The last action to be
   *       performed must be one of the following types of actions: a <code>forward</code>,
   *       <code>fixed-response</code>, or <code>redirect</code>.</p>
   */
  Order?: number;

  /**
   * <p>[HTTPS listeners] Information for using Amazon Cognito to authenticate users.
   *       Specify only when <code>Type</code> is <code>authenticate-cognito</code>.</p>
   */
  AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;

  /**
   * <p>The type of action.</p>
   */
  Type: ActionTypeEnum | string | undefined;

  /**
   * <p>[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).
   *       Specify only when <code>Type</code> is <code>authenticate-oidc</code>.</p>
   */
  AuthenticateOidcConfig?: AuthenticateOidcActionConfig;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an SSL server certificate.</p>
 */
export interface Certificate {
  /**
   * <p>Indicates whether the certificate is the default certificate. Do not set this value
   *         when specifying a certificate as an input. This value is not included in the output
   *         when describing a listener, but is included when describing listener certificates.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  CertificateArn?: string;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

export interface AddListenerCertificatesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The certificate to add. You can specify one certificate per call.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   */
  Certificates: Certificate[] | undefined;
}

export namespace AddListenerCertificatesInput {
  export const filterSensitiveLog = (obj: AddListenerCertificatesInput): any => ({
    ...obj,
  });
}

export interface AddListenerCertificatesOutput {
  /**
   * <p>Information about the certificates in the certificate list.</p>
   */
  Certificates?: Certificate[];
}

export namespace AddListenerCertificatesOutput {
  export const filterSensitiveLog = (obj: AddListenerCertificatesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified certificate does not exist.</p>
 */
export interface CertificateNotFoundException extends __SmithyException, $MetadataBearer {
  name: "CertificateNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace CertificateNotFoundException {
  export const filterSensitiveLog = (obj: CertificateNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified listener does not exist.</p>
 */
export interface ListenerNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ListenerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ListenerNotFoundException {
  export const filterSensitiveLog = (obj: ListenerNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of certificates per load balancer.</p>
 */
export interface TooManyCertificatesException extends __SmithyException, $MetadataBearer {
  name: "TooManyCertificatesException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCertificatesException {
  export const filterSensitiveLog = (obj: TooManyCertificatesException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;

  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface AddTagsInput {
  /**
   * <p>The tags.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArns: string[] | undefined;
}

export namespace AddTagsInput {
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj,
  });
}

export interface AddTagsOutput {}

export namespace AddTagsOutput {
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A tag key was specified more than once.</p>
 */
export interface DuplicateTagKeysException extends __SmithyException, $MetadataBearer {
  name: "DuplicateTagKeysException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateTagKeysException {
  export const filterSensitiveLog = (obj: DuplicateTagKeysException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified load balancer does not exist.</p>
 */
export interface LoadBalancerNotFoundException extends __SmithyException, $MetadataBearer {
  name: "LoadBalancerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace LoadBalancerNotFoundException {
  export const filterSensitiveLog = (obj: LoadBalancerNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified target group does not exist.</p>
 */
export interface TargetGroupNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TargetGroupNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace TargetGroupNotFoundException {
  export const filterSensitiveLog = (obj: TargetGroupNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of tags per load balancer.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified allocation ID does not exist.</p>
 */
export interface AllocationIdNotFoundException extends __SmithyException, $MetadataBearer {
  name: "AllocationIdNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AllocationIdNotFoundException {
  export const filterSensitiveLog = (obj: AllocationIdNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified ALPN policy is not supported.</p>
 */
export interface ALPNPolicyNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "ALPNPolicyNotSupportedException";
  $fault: "client";
  Message?: string;
}

export namespace ALPNPolicyNotSupportedException {
  export const filterSensitiveLog = (obj: ALPNPolicyNotSupportedException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a static IP address for a load balancer.</p>
 */
export interface LoadBalancerAddress {
  /**
   * <p>The static IP address.</p>
   */
  IpAddress?: string;

  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address for an internal-facing load balancer.</p>
   */
  AllocationId?: string;

  /**
   * <p>[Network Load Balancers] The private IPv4 address for an internal load balancer.</p>
   */
  PrivateIPv4Address?: string;
}

export namespace LoadBalancerAddress {
  export const filterSensitiveLog = (obj: LoadBalancerAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>[Network Load Balancers] If you need static IP addresses for your load balancer,
   *       you can specify one Elastic IP address per Availability Zone when you create an
   *       internal-facing load balancer. For internal load balancers, you can specify a private
   *       IP address from the IPv4 range of the subnet.</p>
   */
  LoadBalancerAddresses?: LoadBalancerAddress[];

  /**
   * <p>The ID of the subnet. You can specify one subnet per Availability Zone.</p>
   */
  SubnetId?: string;

  /**
   * <p>The name of the Availability Zone.</p>
   */
  ZoneName?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Availability Zone is not supported.</p>
 */
export interface AvailabilityZoneNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "AvailabilityZoneNotSupportedException";
  $fault: "client";
  Message?: string;
}

export namespace AvailabilityZoneNotSupportedException {
  export const filterSensitiveLog = (obj: AvailabilityZoneNotSupportedException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a cipher used in a policy.</p>
 */
export interface Cipher {
  /**
   * <p>The name of the cipher.</p>
   */
  Name?: string;

  /**
   * <p>The priority of the cipher.</p>
   */
  Priority?: number;
}

export namespace Cipher {
  export const filterSensitiveLog = (obj: Cipher): any => ({
    ...obj,
  });
}

export type ProtocolEnum = "HTTP" | "HTTPS" | "TCP" | "TCP_UDP" | "TLS" | "UDP";

export interface CreateListenerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are
   *       supported. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-2016-08</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-0-2015-04</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-1-2017-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-2-2017-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-2-Ext-2018-06</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-2018-06</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-1-1-2019-08</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-1-2-2019-08</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-1-2-Res-2019-08</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers Guide</i> and
   *       <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  SslPolicy?: string;

  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  Port: number | undefined;

  /**
   * <p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p>
   *          <p>If the action type is <code>forward</code>, you specify one or more target groups.
   *       The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer.
   *       The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider
   *       that is OpenID Connect (OIDC) compliant.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools
   *       supported by Amazon Cognito.</p>
   *          <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests
   *       from one URL to another.</p>
   *          <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests
   *       and return a custom HTTP response.</p>
   */
  DefaultActions: Action[] | undefined;

  /**
   * <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
   *       You can specify one policy name. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HTTP1Only</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP2Only</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP2Optional</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP2Preferred</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>None</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  AlpnPolicy?: string[];

  /**
   * <p>The protocol for connections from clients to the load balancer. For Application Load
   *       Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the
   *       supported protocols are TCP, TLS, UDP, and TCP_UDP.</p>
   */
  Protocol: ProtocolEnum | string | undefined;

  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   *          <p>To create a certificate list for the listener, use <a>AddListenerCertificates</a>.</p>
   */
  Certificates?: Certificate[];
}

export namespace CreateListenerInput {
  export const filterSensitiveLog = (obj: CreateListenerInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a listener.</p>
 */
export interface Listener {
  /**
   * <p>[HTTPS or TLS listener] The default certificate for the listener.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  Port?: number;

  /**
   * <p>The protocol for connections from clients to the load balancer.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>[HTTPS or TLS listener] The security policy that defines which protocols and ciphers
   *       are supported.</p>
   */
  SslPolicy?: string;

  /**
   * <p>The default actions for the listener.</p>
   */
  DefaultActions?: Action[];

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.</p>
   */
  AlpnPolicy?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;
}

export namespace Listener {
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj,
  });
}

export interface CreateListenerOutput {
  /**
   * <p>Information about the listener.</p>
   */
  Listeners?: Listener[];
}

export namespace CreateListenerOutput {
  export const filterSensitiveLog = (obj: CreateListenerOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A listener with the specified port already exists.</p>
 */
export interface DuplicateListenerException extends __SmithyException, $MetadataBearer {
  name: "DuplicateListenerException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateListenerException {
  export const filterSensitiveLog = (obj: DuplicateListenerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration is not valid with this protocol.</p>
 */
export interface IncompatibleProtocolsException extends __SmithyException, $MetadataBearer {
  name: "IncompatibleProtocolsException";
  $fault: "client";
  Message?: string;
}

export namespace IncompatibleProtocolsException {
  export const filterSensitiveLog = (obj: IncompatibleProtocolsException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested configuration is not valid.</p>
 */
export interface InvalidConfigurationRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidConfigurationRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidConfigurationRequestException {
  export const filterSensitiveLog = (obj: InvalidConfigurationRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested action is not valid.</p>
 */
export interface InvalidLoadBalancerActionException extends __SmithyException, $MetadataBearer {
  name: "InvalidLoadBalancerActionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidLoadBalancerActionException {
  export const filterSensitiveLog = (obj: InvalidLoadBalancerActionException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified SSL policy does not exist.</p>
 */
export interface SSLPolicyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "SSLPolicyNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace SSLPolicyNotFoundException {
  export const filterSensitiveLog = (obj: SSLPolicyNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of load balancers per target group.</p>
 */
export interface TargetGroupAssociationLimitException extends __SmithyException, $MetadataBearer {
  name: "TargetGroupAssociationLimitException";
  $fault: "client";
  Message?: string;
}

export namespace TargetGroupAssociationLimitException {
  export const filterSensitiveLog = (obj: TargetGroupAssociationLimitException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of actions per rule.</p>
 */
export interface TooManyActionsException extends __SmithyException, $MetadataBearer {
  name: "TooManyActionsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyActionsException {
  export const filterSensitiveLog = (obj: TooManyActionsException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of listeners per load balancer.</p>
 */
export interface TooManyListenersException extends __SmithyException, $MetadataBearer {
  name: "TooManyListenersException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyListenersException {
  export const filterSensitiveLog = (obj: TooManyListenersException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 */
export interface TooManyRegistrationsForTargetIdException extends __SmithyException, $MetadataBearer {
  name: "TooManyRegistrationsForTargetIdException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRegistrationsForTargetIdException {
  export const filterSensitiveLog = (obj: TooManyRegistrationsForTargetIdException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of targets.</p>
 */
export interface TooManyTargetsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTargetsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTargetsException {
  export const filterSensitiveLog = (obj: TooManyTargetsException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of unique target groups per load balancer
 *         across all listeners. If a target group is used by multiple actions for a load balancer,
 *         it is counted as only one use.</p>
 */
export interface TooManyUniqueTargetGroupsPerLoadBalancerException extends __SmithyException, $MetadataBearer {
  name: "TooManyUniqueTargetGroupsPerLoadBalancerException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyUniqueTargetGroupsPerLoadBalancerException {
  export const filterSensitiveLog = (obj: TooManyUniqueTargetGroupsPerLoadBalancerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified protocol is not supported.</p>
 */
export interface UnsupportedProtocolException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedProtocolException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedProtocolException {
  export const filterSensitiveLog = (obj: UnsupportedProtocolException): any => ({
    ...obj,
  });
}

export enum IpAddressType {
  DUALSTACK = "dualstack",
  IPV4 = "ipv4",
}

export enum LoadBalancerSchemeEnum {
  INTERNAL = "internal",
  INTERNET_FACING = "internet-facing",
}

/**
 * <p>Information about a subnet mapping.</p>
 */
export interface SubnetMapping {
  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>[Network Load Balancers] The private IPv4 address for an internal load balancer.</p>
   */
  PrivateIPv4Address?: string;
}

export namespace SubnetMapping {
  export const filterSensitiveLog = (obj: SubnetMapping): any => ({
    ...obj,
  });
}

export enum LoadBalancerTypeEnum {
  APPLICATION = "application",
  NETWORK = "network",
}

export interface CreateLoadBalancerInput {
  /**
   * <p>[Application Load Balancers] The type of IP addresses used by the subnets for your load
   *       balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and
   *         <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use
   *         <code>ipv4</code>.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>One or more tags to assign to the load balancer.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of load balancer. The default is <code>application</code>.</p>
   */
  Type?: LoadBalancerTypeEnum | string;

  /**
   * <p>[Application Load Balancers] The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of
   *       an Internet-facing load balancer is publicly resolvable to the public IP addresses of the
   *       nodes. Therefore, Internet-facing load balancers can route requests from clients over the
   *       internet.</p>
   *          <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of
   *       an internal load balancer is publicly resolvable to the private IP addresses of the nodes.
   *       Therefore, internal load balancers can route requests only from clients with access to the VPC
   *       for the load balancer.</p>
   *          <p>The default is an Internet-facing load balancer.</p>
   */
  Scheme?: LoadBalancerSchemeEnum | string;

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone.
   *       You must specify either subnets or subnet mappings.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability
   *       Zones.</p>
   */
  Subnets?: string[];

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone.
   *       You must specify either subnets or subnet mappings.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones. You cannot specify Elastic IP addresses for your subnets.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones.
   *       You can specify one Elastic IP address per subnet if you need static IP addresses for
   *       your internet-facing load balancer. For internal load balancers, you can specify one
   *       private IP address per subnet from the IPv4 range of the subnet.</p>
   */
  SubnetMappings?: SubnetMapping[];

  /**
   * <p>The name of the load balancer.</p>
   *          <p>This name must be unique per region per account, can have a maximum of 32 characters,
   *       must contain only alphanumeric characters or hyphens, must not begin or end with a
   *       hyphen, and must not begin with "internal-".</p>
   */
  Name: string | undefined;
}

export namespace CreateLoadBalancerInput {
  export const filterSensitiveLog = (obj: CreateLoadBalancerInput): any => ({
    ...obj,
  });
}

export enum LoadBalancerStateEnum {
  ACTIVE = "active",
  ACTIVE_IMPAIRED = "active_impaired",
  FAILED = "failed",
  PROVISIONING = "provisioning",
}

/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  /**
   * <p>The state code. The initial state of the load balancer is <code>provisioning</code>.
   *       After the load balancer is fully set up and ready to route traffic, its state is
   *         <code>active</code>. If the load balancer could not be set up, its state is
   *         <code>failed</code>.</p>
   */
  Code?: LoadBalancerStateEnum | string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

export namespace LoadBalancerState {
  export const filterSensitiveLog = (obj: LoadBalancerState): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface LoadBalancer {
  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of
   *       an Internet-facing load balancer is publicly resolvable to the public IP addresses of the
   *       nodes. Therefore, Internet-facing load balancers can route requests from clients over the
   *       internet.</p>
   *          <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of
   *       an internal load balancer is publicly resolvable to the private IP addresses of the nodes.
   *       Therefore, internal load balancers can route requests only from clients with access to the VPC
   *       for the load balancer.</p>
   */
  Scheme?: LoadBalancerSchemeEnum | string;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible
   *       values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and
   *       IPv6 addresses).</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: LoadBalancerTypeEnum | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

export namespace LoadBalancer {
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerOutput {
  /**
   * <p>Information about the load balancer.</p>
   */
  LoadBalancers?: LoadBalancer[];
}

export namespace CreateLoadBalancerOutput {
  export const filterSensitiveLog = (obj: CreateLoadBalancerOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A load balancer with the specified name already exists.</p>
 */
export interface DuplicateLoadBalancerNameException extends __SmithyException, $MetadataBearer {
  name: "DuplicateLoadBalancerNameException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateLoadBalancerNameException {
  export const filterSensitiveLog = (obj: DuplicateLoadBalancerNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested scheme is not valid.</p>
 */
export interface InvalidSchemeException extends __SmithyException, $MetadataBearer {
  name: "InvalidSchemeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSchemeException {
  export const filterSensitiveLog = (obj: InvalidSchemeException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified security group does not exist.</p>
 */
export interface InvalidSecurityGroupException extends __SmithyException, $MetadataBearer {
  name: "InvalidSecurityGroupException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSecurityGroupException {
  export const filterSensitiveLog = (obj: InvalidSecurityGroupException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified subnet is out of available addresses.</p>
 */
export interface InvalidSubnetException extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnetException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSubnetException {
  export const filterSensitiveLog = (obj: InvalidSubnetException): any => ({
    ...obj,
  });
}

/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotPermittedException {
  export const filterSensitiveLog = (obj: OperationNotPermittedException): any => ({
    ...obj,
  });
}

/**
 * <p>A specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified subnet does not exist.</p>
 */
export interface SubnetNotFoundException extends __SmithyException, $MetadataBearer {
  name: "SubnetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace SubnetNotFoundException {
  export const filterSensitiveLog = (obj: SubnetNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of load balancers for your AWS
 *       account.</p>
 */
export interface TooManyLoadBalancersException extends __SmithyException, $MetadataBearer {
  name: "TooManyLoadBalancersException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyLoadBalancersException {
  export const filterSensitiveLog = (obj: TooManyLoadBalancersException): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a host header condition.</p>
 */
export interface HostHeaderConditionConfig {
  /**
   * <p>One or more host names. The maximum size of each name is 128 characters. The comparison is case
   *       insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and
   *       ? (matches exactly 1 character).</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the
   *       host name.</p>
   */
  Values?: string[];
}

export namespace HostHeaderConditionConfig {
  export const filterSensitiveLog = (obj: HostHeaderConditionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an HTTP header condition.</p>
 *          <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
 */
export interface HttpHeaderConditionConfig {
  /**
   * <p>The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive.
   *       The allowed characters are specified by RFC 7230. Wildcards are not supported.</p>
   *          <p>You can't use an HTTP header condition to specify the host header. Use <a>HostHeaderConditionConfig</a>
   *       to specify a host header condition.</p>
   */
  HttpHeaderName?: string;

  /**
   * <p>One or more strings to compare against the value of the HTTP header. The maximum size of each
   *       string is 128 characters. The comparison strings are case insensitive. The following wildcard characters
   *       are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p>
   *          <p>If the same header appears multiple times in the request, we search them in order until a match is found.</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header.
   *       To require that all of the strings are a match, create one condition per string.</p>
   */
  Values?: string[];
}

export namespace HttpHeaderConditionConfig {
  export const filterSensitiveLog = (obj: HttpHeaderConditionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an HTTP method condition.</p>
 *          <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the
 *       <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>.
 *       You can also define custom HTTP methods.</p>
 */
export interface HttpRequestMethodConditionConfig {
  /**
   * <p>The name of the request method. The maximum size is 40 characters. The allowed characters are A-Z,
   *       hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore,
   *       the method name must be an exact match.</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of the strings matches the
   *       HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the
   *       response to a HEAD request may be cached.</p>
   */
  Values?: string[];
}

export namespace HttpRequestMethodConditionConfig {
  export const filterSensitiveLog = (obj: HttpRequestMethodConditionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a path pattern condition.</p>
 */
export interface PathPatternConditionConfig {
  /**
   * <p>One or more path patterns to compare against the request URL. The maximum size
   *       of each string is 128 characters. The comparison is case sensitive.
   *       The following wildcard characters are supported:
   *       * (matches 0 or more characters) and ? (matches exactly 1 character).</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of them
   *       matches the request URL. The path pattern is compared only to the path of the URL,
   *       not to its query string. To compare against the query string, use <a>QueryStringConditionConfig</a>.</p>
   */
  Values?: string[];
}

export namespace PathPatternConditionConfig {
  export const filterSensitiveLog = (obj: PathPatternConditionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a key/value pair.</p>
 */
export interface QueryStringKeyValuePair {
  /**
   * <p>The key. You can omit the key.</p>
   */
  Key?: string;

  /**
   * <p>The value.</p>
   */
  Value?: string;
}

export namespace QueryStringKeyValuePair {
  export const filterSensitiveLog = (obj: QueryStringKeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a query string condition.</p>
 *          <p>The query string component of a URI starts after the first '?' character and is terminated
 *        by either a '#' character or the end of the URI. A typical query string contains key/value pairs
 *        separated by '&' characters. The allowed characters are specified by RFC 3986. Any character
 *        can be percentage encoded.</p>
 */
export interface QueryStringConditionConfig {
  /**
   * <p>One or more key/value pairs or values to find in the query string.
   *       The maximum size of each string is 128 characters. The comparison is case insensitive.
   *       The following wildcard characters are supported: * (matches 0 or more characters) and
   *       ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string,
   *       you must escape these characters in <code>Values</code> using a '\' character.</p>
   *          <p>If you specify multiple key/value pairs or values, the condition is satisfied if one of
   *       them is found in the query string.</p>
   */
  Values?: QueryStringKeyValuePair[];
}

export namespace QueryStringConditionConfig {
  export const filterSensitiveLog = (obj: QueryStringConditionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a source IP condition.</p>
 *          <p>You can use this condition to route based on the IP address of the source that connects
 *       to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not
 *       the IP address of the client.</p>
 */
export interface SourceIpConditionConfig {
  /**
   * <p>One or more source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses.
   *       Wildcards are not supported.</p>
   *          <p>If you specify multiple addresses, the condition is satisfied if the source IP address of the
   *       request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the
   *       X-Forwarded-For header. To search for addresses in the X-Forwarded-For header, use <a>HttpHeaderConditionConfig</a>.</p>
   */
  Values?: string[];
}

export namespace SourceIpConditionConfig {
  export const filterSensitiveLog = (obj: SourceIpConditionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a condition for a rule.</p>
 */
export interface RuleCondition {
  /**
   * <p>Information for an HTTP header condition.
   *       Specify only when <code>Field</code> is <code>http-header</code>.</p>
   */
  HttpHeaderConfig?: HttpHeaderConditionConfig;

  /**
   * <p>Information for an HTTP method condition.
   *       Specify only when <code>Field</code> is <code>http-request-method</code>.</p>
   */
  HttpRequestMethodConfig?: HttpRequestMethodConditionConfig;

  /**
   * <p>The condition value. You can use <code>Values</code> if the rule contains only
   *       <code>host-header</code> and <code>path-pattern</code> conditions. Otherwise, you
   *       can use <code>HostHeaderConfig</code> for <code>host-header</code> conditions and
   *       <code>PathPatternConfig</code> for <code>path-pattern</code> conditions.</p>
   *          <p>If <code>Field</code> is <code>host-header</code>, you can specify a single host name
   *       (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in
   *       length, and can contain any of the following characters.</p>
   *          <ul>
   *             <li>
   *                <p>A-Z, a-z, 0-9</p>
   *             </li>
   *             <li>
   *                <p>- .</p>
   *             </li>
   *             <li>
   *                <p>* (matches 0 or more characters)</p>
   *             </li>
   *             <li>
   *                <p>? (matches exactly 1 character)</p>
   *             </li>
   *          </ul>
   *          <p>If <code>Field</code> is <code>path-pattern</code>, you can specify a single path pattern
   *       (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in
   *       length, and can contain any of the following characters.</p>
   *          <ul>
   *             <li>
   *                <p>A-Z, a-z, 0-9</p>
   *             </li>
   *             <li>
   *                <p>_ - . $ / ~ " ' @ : +</p>
   *             </li>
   *             <li>
   *                <p>& (using &amp;)</p>
   *             </li>
   *             <li>
   *                <p>* (matches 0 or more characters)</p>
   *             </li>
   *             <li>
   *                <p>? (matches exactly 1 character)</p>
   *             </li>
   *          </ul>
   */
  Values?: string[];

  /**
   * <p>Information for a source IP condition.
   *       Specify only when <code>Field</code> is <code>source-ip</code>.</p>
   */
  SourceIpConfig?: SourceIpConditionConfig;

  /**
   * <p>Information for a query string condition.
   *       Specify only when <code>Field</code> is <code>query-string</code>.</p>
   */
  QueryStringConfig?: QueryStringConditionConfig;

  /**
   * <p>Information for a path pattern condition.
   *       Specify only when <code>Field</code> is <code>path-pattern</code>.</p>
   */
  PathPatternConfig?: PathPatternConditionConfig;

  /**
   * <p>The field in the HTTP request. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>http-header</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>http-request-method</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>host-header</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>path-pattern</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>query-string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-ip</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Field?: string;

  /**
   * <p>Information for a host header condition.
   *       Specify only when <code>Field</code> is <code>host-header</code>.</p>
   */
  HostHeaderConfig?: HostHeaderConditionConfig;
}

export namespace RuleCondition {
  export const filterSensitiveLog = (obj: RuleCondition): any => ({
    ...obj,
  });
}

export interface CreateRuleInput {
  /**
   * <p>The actions. Each rule must include exactly one of the following types of actions:
   *       <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the
   *       last action to be performed.</p>
   *          <p>If the action type is <code>forward</code>, you specify one or more target groups.
   *       The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer.
   *       The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider
   *       that is OpenID Connect (OIDC) compliant.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools
   *       supported by Amazon Cognito.</p>
   *          <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests
   *       from one URL to another.</p>
   *          <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests
   *       and return a custom HTTP response.</p>
   */
  Actions: Action[] | undefined;

  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions:
   *       <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>,
   *       and <code>source-ip</code>, and zero or more of the following conditions:
   *       <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions: RuleCondition[] | undefined;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace CreateRuleInput {
  export const filterSensitiveLog = (obj: CreateRuleInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a rule.</p>
 */
export interface Rule {
  /**
   * <p>Indicates whether this is the default rule.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;

  /**
   * <p>The priority.</p>
   */
  Priority?: string;

  /**
   * <p>The actions. Each rule must include exactly one of the following types of actions: <code>forward</code>,
   *       <code>redirect</code>, or <code>fixed-response</code>, and it must be the last action to be performed.</p>
   */
  Actions?: Action[];

  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions:
   *       <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>,
   *       and <code>source-ip</code>, and zero or more of the following conditions:
   *       <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions?: RuleCondition[];
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj,
  });
}

export interface CreateRuleOutput {
  /**
   * <p>Information about the rule.</p>
   */
  Rules?: Rule[];
}

export namespace CreateRuleOutput {
  export const filterSensitiveLog = (obj: CreateRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified priority is in use.</p>
 */
export interface PriorityInUseException extends __SmithyException, $MetadataBearer {
  name: "PriorityInUseException";
  $fault: "client";
  Message?: string;
}

export namespace PriorityInUseException {
  export const filterSensitiveLog = (obj: PriorityInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of rules per load balancer.</p>
 */
export interface TooManyRulesException extends __SmithyException, $MetadataBearer {
  name: "TooManyRulesException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRulesException {
  export const filterSensitiveLog = (obj: TooManyRulesException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of target groups for your AWS account.</p>
 */
export interface TooManyTargetGroupsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTargetGroupsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTargetGroupsException {
  export const filterSensitiveLog = (obj: TooManyTargetGroupsException): any => ({
    ...obj,
  });
}

/**
 * <p>Information to use when checking for a successful response from a target.</p>
 */
export interface Matcher {
  /**
   * <p>The HTTP codes.</p>
   *          <p>For Application Load Balancers, you can specify values between 200 and 499, and the
   *       default value is 200. You can specify multiple values (for example, "200,202") or a range of
   *       values (for example, "200-299").</p>
   *          <p>For Network Load Balancers, this is 200–399.</p>
   */
  HttpCode: string | undefined;
}

export namespace Matcher {
  export const filterSensitiveLog = (obj: Matcher): any => ({
    ...obj,
  });
}

export enum TargetTypeEnum {
  INSTANCE = "instance",
  IP = "ip",
  LAMBDA = "lambda",
}

export interface CreateTargetGroupInput {
  /**
   * <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>Indicates whether health checks are enabled. If the target type is <code>lambda</code>,
   *       health checks are disabled by default but can be enabled. If the target type is <code>instance</code>
   *       or <code>ip</code>, health checks are always enabled and cannot be disabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The type of target that you must specify when registering targets with this target group.
   *       You can't specify targets for a target group using more than one target type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance</code> - Targets are specified by instance ID. This is the default value.
   *           If the target group protocol is UDP or TCP_UDP, the target type must be <code>instance</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip</code> - Targets are specified by IP address. You can specify IP addresses
   *           from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918
   *           range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range
   *           (100.64.0.0/10). You can't specify publicly routable IP addresses.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda</code> - The target groups contains a single Lambda function.</p>
   *             </li>
   *          </ul>
   */
  TargetType?: TargetTypeEnum | string;

  /**
   * <p>The number of consecutive health check failures required before considering a target unhealthy.
   *       For target groups with a protocol of HTTP or HTTPS, the default is 2.
   *       For target groups with a protocol of TCP or TLS, this value must be the same as the healthy threshold count.
   *       If the target type is <code>lambda</code>, the default is 2.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.
   *       For HTTP and HTTPS health checks, the range is 5–300 seconds.
   *       For TCP health checks, the supported values are 10 and 30 seconds.
   *       If the target type is <code>instance</code> or <code>ip</code>, the default is 30 seconds.
   *       If the target type is <code>lambda</code>, the default is 35 seconds.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The port the load balancer uses when performing health checks on targets. The default
   *       is <code>traffic-port</code>, which is the port on which each target receives traffic from the
   *       load balancer.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets.
   *       For Application Load Balancers, the default is HTTP. For Network Load Balancers, the default is TCP.
   *       The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP.
   *       The TLS, UDP, and TCP_UDP protocols are not supported for health checks.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>[HTTP/HTTPS health checks] The ping path that is the destination on the targets for
   *       health checks. The default is /.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The port on which the targets receive traffic. This port is used unless you specify a
   *       port override when registering the target. If the target is a Lambda function, this
   *       parameter does not apply.</p>
   */
  Port?: number;

  /**
   * <p>The protocol to use for routing traffic to the targets. For Application Load Balancers,
   *       the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols
   *       are TCP, TLS, UDP, or TCP_UDP. A TCP_UDP listener must be associated with a TCP_UDP target group.
   *       If the target is a Lambda function, this parameter does not apply.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>The amount of time, in seconds, during which no response from a target means a failed health check.
   *       For target groups with a protocol of HTTP or HTTPS, the default is 5 seconds.
   *       For target groups with a protocol of TCP or TLS, this value must be 6 seconds for HTTP health checks
   *          and 10 seconds for TCP and HTTPS health checks.
   *       If the target type is <code>lambda</code>, the default is 30 seconds.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The name of the target group.</p>
   *          <p>This name must be unique per region per account, can have a maximum of 32 characters,
   *       must contain only alphanumeric characters or hyphens, and must not begin or end with a
   *       hyphen.</p>
   */
  Name: string | undefined;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy target healthy.
   *       For target groups with a protocol of HTTP or HTTPS, the default is 5.
   *       For target groups with a protocol of TCP or TLS, the default is 3.
   *       If the target type is <code>lambda</code>, the default is 5.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The identifier of the virtual private cloud (VPC). If the target is a Lambda function,
   *       this parameter does not apply. Otherwise, this parameter is required.</p>
   */
  VpcId?: string;
}

export namespace CreateTargetGroupInput {
  export const filterSensitiveLog = (obj: CreateTargetGroupInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a target group.</p>
 */
export interface TargetGroup {
  /**
   * <p>The number of consecutive health check failures required before considering the target
   *       unhealthy.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health
   *       check.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an
   *       unhealthy target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual
   *       target.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The ID of the VPC for the targets.</p>
   */
  VpcId?: string;

  /**
   * <p>The protocol to use for routing traffic to the targets.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>The name of the target group.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>The type of target that you must specify when registering targets with this target
   *       group. The possible values are <code>instance</code> (targets are specified by instance ID) or
   *         <code>ip</code> (targets are specified by IP address).</p>
   */
  TargetType?: TargetTypeEnum | string;

  /**
   * <p>The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The destination for the health check request.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The port on which the targets are listening. Not used if the target is a Lambda function.</p>
   */
  Port?: number;

  /**
   * <p>The protocol to use to connect with the target.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers that route traffic to this target
   *       group.</p>
   */
  LoadBalancerArns?: string[];
}

export namespace TargetGroup {
  export const filterSensitiveLog = (obj: TargetGroup): any => ({
    ...obj,
  });
}

export interface CreateTargetGroupOutput {
  /**
   * <p>Information about the target group.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace CreateTargetGroupOutput {
  export const filterSensitiveLog = (obj: CreateTargetGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A target group with the specified name already exists.</p>
 */
export interface DuplicateTargetGroupNameException extends __SmithyException, $MetadataBearer {
  name: "DuplicateTargetGroupNameException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateTargetGroupNameException {
  export const filterSensitiveLog = (obj: DuplicateTargetGroupNameException): any => ({
    ...obj,
  });
}

export interface DeleteListenerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DeleteListenerInput {
  export const filterSensitiveLog = (obj: DeleteListenerInput): any => ({
    ...obj,
  });
}

export interface DeleteListenerOutput {}

export namespace DeleteListenerOutput {
  export const filterSensitiveLog = (obj: DeleteListenerOutput): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export namespace DeleteLoadBalancerInput {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerInput): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerOutput {}

export namespace DeleteLoadBalancerOutput {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerOutput): any => ({
    ...obj,
  });
}

export interface DeleteRuleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;
}

export namespace DeleteRuleInput {
  export const filterSensitiveLog = (obj: DeleteRuleInput): any => ({
    ...obj,
  });
}

export interface DeleteRuleOutput {}

export namespace DeleteRuleOutput {
  export const filterSensitiveLog = (obj: DeleteRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified rule does not exist.</p>
 */
export interface RuleNotFoundException extends __SmithyException, $MetadataBearer {
  name: "RuleNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace RuleNotFoundException {
  export const filterSensitiveLog = (obj: RuleNotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteTargetGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace DeleteTargetGroupInput {
  export const filterSensitiveLog = (obj: DeleteTargetGroupInput): any => ({
    ...obj,
  });
}

export interface DeleteTargetGroupOutput {}

export namespace DeleteTargetGroupOutput {
  export const filterSensitiveLog = (obj: DeleteTargetGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a target.</p>
 */
export interface TargetDescription {
  /**
   * <p>The ID of the target. If the target type of the target group is <code>instance</code>,
   *       specify an instance ID. If the target type is <code>ip</code>, specify an IP address.
   *       If the target type is <code>lambda</code>, specify the ARN of the Lambda function.</p>
   */
  Id: string | undefined;

  /**
   * <p>The port on which the target is listening. Not used if the target is a Lambda function.</p>
   */
  Port?: number;

  /**
   * <p>An Availability Zone or <code>all</code>. This determines whether the target receives
   *       traffic from the load balancer nodes in the specified Availability Zone or from all enabled
   *       Availability Zones for the load balancer.</p>
   *          <p>This parameter is not supported if the target type of the target group is <code>instance</code>.</p>
   *          <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the
   *       target group, the Availability Zone is automatically detected and this parameter is optional.
   *       If the IP address is outside the VPC, this parameter is required.</p>
   *          <p>With an Application Load Balancer, if the target type is <code>ip</code> and the IP address
   *       is outside the VPC for the target group, the only supported value is <code>all</code>.</p>
   *          <p>If the target type is <code>lambda</code>, this parameter is optional and the only supported value is <code>all</code>.</p>
   */
  AvailabilityZone?: string;
}

export namespace TargetDescription {
  export const filterSensitiveLog = (obj: TargetDescription): any => ({
    ...obj,
  });
}

export interface DeregisterTargetsInput {
  /**
   * <p>The targets. If you specified a port override when you registered a target, you must
   *       specify both the target ID and the port when you deregister it.</p>
   */
  Targets: TargetDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace DeregisterTargetsInput {
  export const filterSensitiveLog = (obj: DeregisterTargetsInput): any => ({
    ...obj,
  });
}

export interface DeregisterTargetsOutput {}

export namespace DeregisterTargetsOutput {
  export const filterSensitiveLog = (obj: DeregisterTargetsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified target does not exist, is not in the same VPC as the target group, or has
 *       an unsupported instance type.</p>
 */
export interface InvalidTargetException extends __SmithyException, $MetadataBearer {
  name: "InvalidTargetException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTargetException {
  export const filterSensitiveLog = (obj: InvalidTargetException): any => ({
    ...obj,
  });
}

export interface DescribeAccountLimitsInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;
}

export namespace DescribeAccountLimitsInput {
  export const filterSensitiveLog = (obj: DescribeAccountLimitsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS
 *       account.</p>
 */
export interface Limit {
  /**
   * <p>The maximum value of the limit.</p>
   */
  Max?: string;

  /**
   * <p>The name of the limit. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>application-load-balancers</p>
   *             </li>
   *             <li>
   *                <p>listeners-per-application-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>listeners-per-network-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>network-load-balancers</p>
   *             </li>
   *             <li>
   *                <p>rules-per-application-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>target-groups</p>
   *             </li>
   *             <li>
   *                <p>target-groups-per-action-on-application-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>target-groups-per-action-on-network-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>target-groups-per-application-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>targets-per-application-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>targets-per-availability-zone-per-network-load-balancer</p>
   *             </li>
   *             <li>
   *                <p>targets-per-network-load-balancer</p>
   *             </li>
   *          </ul>
   */
  Name?: string;
}

export namespace Limit {
  export const filterSensitiveLog = (obj: Limit): any => ({
    ...obj,
  });
}

export interface DescribeAccountLimitsOutput {
  /**
   * <p>Information about the limits.</p>
   */
  Limits?: Limit[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export namespace DescribeAccountLimitsOutput {
  export const filterSensitiveLog = (obj: DescribeAccountLimitsOutput): any => ({
    ...obj,
  });
}

export interface DescribeListenerCertificatesInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The Amazon Resource Names (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DescribeListenerCertificatesInput {
  export const filterSensitiveLog = (obj: DescribeListenerCertificatesInput): any => ({
    ...obj,
  });
}

export interface DescribeListenerCertificatesOutput {
  /**
   * <p>Information about the certificates.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export namespace DescribeListenerCertificatesOutput {
  export const filterSensitiveLog = (obj: DescribeListenerCertificatesOutput): any => ({
    ...obj,
  });
}

export interface DescribeListenersInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the listeners.</p>
   */
  ListenerArns?: string[];

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;
}

export namespace DescribeListenersInput {
  export const filterSensitiveLog = (obj: DescribeListenersInput): any => ({
    ...obj,
  });
}

export interface DescribeListenersOutput {
  /**
   * <p>Information about the listeners.</p>
   */
  Listeners?: Listener[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export namespace DescribeListenersOutput {
  export const filterSensitiveLog = (obj: DescribeListenersOutput): any => ({
    ...obj,
  });
}

export interface DescribeLoadBalancerAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export namespace DescribeLoadBalancerAttributesInput {
  export const filterSensitiveLog = (obj: DescribeLoadBalancerAttributesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a load balancer attribute.</p>
 */
export interface LoadBalancerAttribute {
  /**
   * <p>The name of the attribute.</p>
   *          <p>The following attributes are supported by both Application Load Balancers and Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>access_logs.s3.enabled</code> - Indicates whether access logs are enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>access_logs.s3.bucket</code> - The name of the S3 bucket for the access logs. This
   *           attribute is required if access logs are enabled. The bucket must exist in the same region
   *           as the load balancer and have a bucket policy that grants Elastic Load Balancing
   *           permissions to write to the bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>access_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the access logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deletion_protection.enabled</code> - Indicates whether deletion protection is enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The following attributes are supported by only Application Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>idle_timeout.timeout_seconds</code> - The idle timeout value, in seconds. The valid range
   *           is 1-4000 seconds. The default is 60 seconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.drop_invalid_header_fields.enabled</code> - Indicates whether HTTP headers
   *           with invalid header fields are removed by the load balancer (<code>true</code>) or routed to targets
   *           (<code>false</code>). The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled. The value is
   *           <code>true</code> or <code>false</code>. The default is <code>true</code>. Elastic Load Balancing
   *           requires that message header names contain only alphanumeric characters and hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>The following attributes are supported by only Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross-zone load balancing is enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *          </ul>
   */
  Key?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export namespace LoadBalancerAttribute {
  export const filterSensitiveLog = (obj: LoadBalancerAttribute): any => ({
    ...obj,
  });
}

export interface DescribeLoadBalancerAttributesOutput {
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: LoadBalancerAttribute[];
}

export namespace DescribeLoadBalancerAttributesOutput {
  export const filterSensitiveLog = (obj: DescribeLoadBalancerAttributesOutput): any => ({
    ...obj,
  });
}

export interface DescribeLoadBalancersInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The names of the load balancers.</p>
   */
  Names?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load
   *       balancers in a single call.</p>
   */
  LoadBalancerArns?: string[];
}

export namespace DescribeLoadBalancersInput {
  export const filterSensitiveLog = (obj: DescribeLoadBalancersInput): any => ({
    ...obj,
  });
}

export interface DescribeLoadBalancersOutput {
  /**
   * <p>Information about the load balancers.</p>
   */
  LoadBalancers?: LoadBalancer[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export namespace DescribeLoadBalancersOutput {
  export const filterSensitiveLog = (obj: DescribeLoadBalancersOutput): any => ({
    ...obj,
  });
}

export interface DescribeRulesInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The Amazon Resource Names (ARN) of the rules.</p>
   */
  RuleArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;
}

export namespace DescribeRulesInput {
  export const filterSensitiveLog = (obj: DescribeRulesInput): any => ({
    ...obj,
  });
}

export interface DescribeRulesOutput {
  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Rule[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export namespace DescribeRulesOutput {
  export const filterSensitiveLog = (obj: DescribeRulesOutput): any => ({
    ...obj,
  });
}

export interface DescribeSSLPoliciesInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The names of the policies.</p>
   */
  Names?: string[];
}

export namespace DescribeSSLPoliciesInput {
  export const filterSensitiveLog = (obj: DescribeSSLPoliciesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a policy used for SSL negotiation.</p>
 */
export interface SslPolicy {
  /**
   * <p>The ciphers.</p>
   */
  Ciphers?: Cipher[];

  /**
   * <p>The protocols.</p>
   */
  SslProtocols?: string[];

  /**
   * <p>The name of the policy.</p>
   */
  Name?: string;
}

export namespace SslPolicy {
  export const filterSensitiveLog = (obj: SslPolicy): any => ({
    ...obj,
  });
}

export interface DescribeSSLPoliciesOutput {
  /**
   * <p>Information about the security policies.</p>
   */
  SslPolicies?: SslPolicy[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export namespace DescribeSSLPoliciesOutput {
  export const filterSensitiveLog = (obj: DescribeSSLPoliciesOutput): any => ({
    ...obj,
  });
}

export interface DescribeTagsInput {
  /**
   * <p>The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.</p>
   */
  ResourceArns: string[] | undefined;
}

export namespace DescribeTagsInput {
  export const filterSensitiveLog = (obj: DescribeTagsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The tags associated with a resource.</p>
 */
export interface TagDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Tag[];
}

export namespace TagDescription {
  export const filterSensitiveLog = (obj: TagDescription): any => ({
    ...obj,
  });
}

export interface DescribeTagsOutput {
  /**
   * <p>Information about the tags.</p>
   */
  TagDescriptions?: TagDescription[];
}

export namespace DescribeTagsOutput {
  export const filterSensitiveLog = (obj: DescribeTagsOutput): any => ({
    ...obj,
  });
}

export interface DescribeTargetGroupAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace DescribeTargetGroupAttributesInput {
  export const filterSensitiveLog = (obj: DescribeTargetGroupAttributesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a target group attribute.</p>
 */
export interface TargetGroupAttribute {
  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;

  /**
   * <p>The name of the attribute.</p>
   *
   *          <p>The following attributes are supported by both Application Load Balancers and Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deregistration_delay.timeout_seconds</code> - The amount of time, in seconds,
   *           for Elastic Load Balancing to wait before changing the state of a deregistering target from
   *           <code>draining</code> to <code>unused</code>. The range is 0-3600 seconds. The default
   *           value is 300 seconds. If the target is a Lambda function, this attribute is not supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.enabled</code> - Indicates whether sticky sessions are enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.type</code> - The type of sticky sessions. The possible values are
   *           <code>lb_cookie</code> for Application Load Balancers or <code>source_ip</code> for
   *           Network Load Balancers.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported only if the load balancer is an Application Load Balancer
   *       and the target is an instance or an IP address:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>load_balancing.algorithm.type</code> - The load balancing algorithm determines
   *           how the load balancer selects targets when routing requests. The value is <code>round_robin</code>
   *           or <code>least_outstanding_requests</code>. The default is <code>round_robin</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>slow_start.duration_seconds</code> - The time period, in seconds, during which a
   *           newly registered target receives an increasing share of the traffic to the target group.
   *           After this time period ends, the target receives its full share of traffic.
   *           The range is 30-900 seconds (15 minutes). Slow start mode is disabled by default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.lb_cookie.duration_seconds</code> - The time period, in seconds, during which
   *           requests from a client should be routed to the same target. After this time period expires, the load
   *           balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The
   *           default value is 1 day (86400 seconds).</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attribute is supported only if the load balancer is an Application Load Balancer
   *       and the target is a Lambda function:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lambda.multi_value_headers.enabled</code> - Indicates whether the request and
   *           response headers that are exchanged between the load balancer and the Lambda function include
   *           arrays of values or strings. The value is <code>true</code> or <code>false</code>. The
   *           default is <code>false</code>. If the value is <code>false</code> and the request contains
   *           a duplicate header field name or query parameter key, the load balancer uses the last
   *           value sent by the client.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attribute is supported only by Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>proxy_protocol_v2.enabled</code> - Indicates whether Proxy Protocol version 2 is enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *          </ul>
   */
  Key?: string;
}

export namespace TargetGroupAttribute {
  export const filterSensitiveLog = (obj: TargetGroupAttribute): any => ({
    ...obj,
  });
}

export interface DescribeTargetGroupAttributesOutput {
  /**
   * <p>Information about the target group attributes</p>
   */
  Attributes?: TargetGroupAttribute[];
}

export namespace DescribeTargetGroupAttributesOutput {
  export const filterSensitiveLog = (obj: DescribeTargetGroupAttributesOutput): any => ({
    ...obj,
  });
}

export interface DescribeTargetGroupsInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The names of the target groups.</p>
   */
  Names?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups.</p>
   */
  TargetGroupArns?: string[];
}

export namespace DescribeTargetGroupsInput {
  export const filterSensitiveLog = (obj: DescribeTargetGroupsInput): any => ({
    ...obj,
  });
}

export interface DescribeTargetGroupsOutput {
  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * <p>Information about the target groups.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace DescribeTargetGroupsOutput {
  export const filterSensitiveLog = (obj: DescribeTargetGroupsOutput): any => ({
    ...obj,
  });
}

export interface DescribeTargetHealthInput {
  /**
   * <p>The targets.</p>
   */
  Targets?: TargetDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace DescribeTargetHealthInput {
  export const filterSensitiveLog = (obj: DescribeTargetHealthInput): any => ({
    ...obj,
  });
}

export enum TargetHealthReasonEnum {
  DEREGISTRATION_IN_PROGRESS = "Target.DeregistrationInProgress",
  FAILED_HEALTH_CHECKS = "Target.FailedHealthChecks",
  HEALTH_CHECK_DISABLED = "Target.HealthCheckDisabled",
  INITIAL_HEALTH_CHECKING = "Elb.InitialHealthChecking",
  INTERNAL_ERROR = "Elb.InternalError",
  INVALID_STATE = "Target.InvalidState",
  IP_UNUSABLE = "Target.IpUnusable",
  NOT_IN_USE = "Target.NotInUse",
  NOT_REGISTERED = "Target.NotRegistered",
  REGISTRATION_IN_PROGRESS = "Elb.RegistrationInProgress",
  RESPONSE_CODE_MISMATCH = "Target.ResponseCodeMismatch",
  TIMEOUT = "Target.Timeout",
}

export enum TargetHealthStateEnum {
  DRAINING = "draining",
  HEALTHY = "healthy",
  INITIAL = "initial",
  UNAVAILABLE = "unavailable",
  UNHEALTHY = "unhealthy",
  UNUSED = "unused",
}

/**
 * <p>Information about the current health of a target.</p>
 */
export interface TargetHealth {
  /**
   * <p>The reason code.</p>
   *
   *          <p>If the target state is <code>healthy</code>, a reason code is not provided.</p>
   *
   *          <p>If the target state is <code>initial</code>, the reason code can be one of the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Elb.RegistrationInProgress</code> - The target is in the process of being registered
   *           with the load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Elb.InitialHealthChecking</code> - The load balancer is still sending the target the
   *           minimum number of health checks required to determine its health status.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the target state is <code>unhealthy</code>, the reason code can be one of the
   *       following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.ResponseCodeMismatch</code> - The health checks did not return an expected
   *           HTTP code. Applies only to Application Load Balancers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.Timeout</code> - The health check requests timed out.
   *           Applies only to Application Load Balancers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.FailedHealthChecks</code> - The load balancer received an error while
   *           establishing a connection to the target or the target response was malformed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Elb.InternalError</code> - The health checks failed due to an internal error.
   *           Applies only to Application Load Balancers.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the target state is <code>unused</code>, the reason code can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.NotRegistered</code> - The target is not registered with the target group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.NotInUse</code> - The target group is not used by any load balancer or the
   *           target is in an Availability Zone that is not enabled for its load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.InvalidState</code> - The target is in the stopped or terminated state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.IpUnusable</code> - The target IP address is reserved for use by a load balancer.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the target state is <code>draining</code>, the reason code can be the following value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.DeregistrationInProgress</code> - The target is in the process of being
   *           deregistered and the deregistration delay period has not expired.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the target state is <code>unavailable</code>, the reason code can be the following value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.HealthCheckDisabled</code> - Health checks are disabled for the target group.
   *           Applies only to Application Load Balancers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Elb.InternalError</code> - Target health is unavailable due to an internal error.
   *           Applies only to Network Load Balancers.</p>
   *             </li>
   *          </ul>
   */
  Reason?: TargetHealthReasonEnum | string;

  /**
   * <p>A description of the target health that provides additional details. If the state is
   *         <code>healthy</code>, a description is not provided.</p>
   */
  Description?: string;

  /**
   * <p>The state of the target.</p>
   */
  State?: TargetHealthStateEnum | string;
}

export namespace TargetHealth {
  export const filterSensitiveLog = (obj: TargetHealth): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the health of a target.</p>
 */
export interface TargetHealthDescription {
  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The description of the target.</p>
   */
  Target?: TargetDescription;

  /**
   * <p>The health information for the target.</p>
   */
  TargetHealth?: TargetHealth;
}

export namespace TargetHealthDescription {
  export const filterSensitiveLog = (obj: TargetHealthDescription): any => ({
    ...obj,
  });
}

export interface DescribeTargetHealthOutput {
  /**
   * <p>Information about the health of the targets.</p>
   */
  TargetHealthDescriptions?: TargetHealthDescription[];
}

export namespace DescribeTargetHealthOutput {
  export const filterSensitiveLog = (obj: DescribeTargetHealthOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The health of the specified targets could not be retrieved due to an internal
 *       error.</p>
 */
export interface HealthUnavailableException extends __SmithyException, $MetadataBearer {
  name: "HealthUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace HealthUnavailableException {
  export const filterSensitiveLog = (obj: HealthUnavailableException): any => ({
    ...obj,
  });
}

export interface ModifyListenerInput {
  /**
   * <p>The port for connections from clients to the load balancer.</p>
   */
  Port?: number;

  /**
   * <p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p>
   *          <p>If the action type is <code>forward</code>, you specify one or more target groups.
   *       The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer.
   *       The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider
   *       that is OpenID Connect (OIDC) compliant.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools
   *       supported by Amazon Cognito.</p>
   *          <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests
   *       from one URL to another.</p>
   *          <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests
   *       and return a custom HTTP response.</p>
   */
  DefaultActions?: Action[];

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers
   *       are supported. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-2016-08</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-0-2015-04</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-1-2017-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-2-2017-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-TLS-1-2-Ext-2018-06</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-2018-06</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-1-1-2019-08</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-1-2-2019-08</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ELBSecurityPolicy-FS-1-2-Res-2019-08</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers Guide</i> and
   *       <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  SslPolicy?: string;

  /**
   * <p>The protocol for connections from clients to the load balancer. Application Load
   *       Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the
   *       TCP, TLS, UDP, and TCP_UDP protocols.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
   *       You can specify one policy name. The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HTTP1Only</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP2Only</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP2Optional</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HTTP2Preferred</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>None</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN Policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  AlpnPolicy?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   *          <p>To create a certificate list, use <a>AddListenerCertificates</a>.</p>
   */
  Certificates?: Certificate[];
}

export namespace ModifyListenerInput {
  export const filterSensitiveLog = (obj: ModifyListenerInput): any => ({
    ...obj,
  });
}

export interface ModifyListenerOutput {
  /**
   * <p>Information about the modified listener.</p>
   */
  Listeners?: Listener[];
}

export namespace ModifyListenerOutput {
  export const filterSensitiveLog = (obj: ModifyListenerOutput): any => ({
    ...obj,
  });
}

export interface ModifyLoadBalancerAttributesInput {
  /**
   * <p>The load balancer attributes.</p>
   */
  Attributes: LoadBalancerAttribute[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export namespace ModifyLoadBalancerAttributesInput {
  export const filterSensitiveLog = (obj: ModifyLoadBalancerAttributesInput): any => ({
    ...obj,
  });
}

export interface ModifyLoadBalancerAttributesOutput {
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: LoadBalancerAttribute[];
}

export namespace ModifyLoadBalancerAttributesOutput {
  export const filterSensitiveLog = (obj: ModifyLoadBalancerAttributesOutput): any => ({
    ...obj,
  });
}

export interface ModifyRuleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions:
   *       <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>,
   *       and <code>source-ip</code>, and zero or more of the following conditions:
   *       <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions?: RuleCondition[];

  /**
   * <p>The actions. Each rule must include exactly one of the following types of actions:
   *       <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the
   *       last action to be performed.</p>
   *          <p>If the action type is <code>forward</code>, you specify one or more target groups.
   *       The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer.
   *       The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider
   *       that is OpenID Connect (OIDC) compliant.</p>
   *          <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools
   *       supported by Amazon Cognito.</p>
   *          <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests
   *       from one URL to another.</p>
   *          <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests
   *       and return a custom HTTP response.</p>
   */
  Actions?: Action[];
}

export namespace ModifyRuleInput {
  export const filterSensitiveLog = (obj: ModifyRuleInput): any => ({
    ...obj,
  });
}

export interface ModifyRuleOutput {
  /**
   * <p>Information about the modified rule.</p>
   */
  Rules?: Rule[];
}

export namespace ModifyRuleOutput {
  export const filterSensitiveLog = (obj: ModifyRuleOutput): any => ({
    ...obj,
  });
}

export interface ModifyTargetGroupInput {
  /**
   * <p>The number of consecutive health check failures required before considering the target
   *       unhealthy. For Network Load Balancers, this value must be the same as the healthy threshold
   *       count.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response
   *       means a failed health check.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual
   *       target. For Application Load Balancers, the range is 5 to 300 seconds. For Network Load
   *       Balancers, the supported values are 10 or 30 seconds.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful
   *       response from a target.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The number of consecutive health checks successes required before considering an
   *       unhealthy target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The ping path that is the destination for the health check
   *       request.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets.
   *       The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP.
   *       The TLS, UDP, and TCP_UDP protocols are not supported for health checks.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>The port the load balancer uses when performing health checks on targets.</p>
   */
  HealthCheckPort?: string;
}

export namespace ModifyTargetGroupInput {
  export const filterSensitiveLog = (obj: ModifyTargetGroupInput): any => ({
    ...obj,
  });
}

export interface ModifyTargetGroupOutput {
  /**
   * <p>Information about the modified target group.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace ModifyTargetGroupOutput {
  export const filterSensitiveLog = (obj: ModifyTargetGroupOutput): any => ({
    ...obj,
  });
}

export interface ModifyTargetGroupAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The attributes.</p>
   */
  Attributes: TargetGroupAttribute[] | undefined;
}

export namespace ModifyTargetGroupAttributesInput {
  export const filterSensitiveLog = (obj: ModifyTargetGroupAttributesInput): any => ({
    ...obj,
  });
}

export interface ModifyTargetGroupAttributesOutput {
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: TargetGroupAttribute[];
}

export namespace ModifyTargetGroupAttributesOutput {
  export const filterSensitiveLog = (obj: ModifyTargetGroupAttributesOutput): any => ({
    ...obj,
  });
}

export interface RegisterTargetsInput {
  /**
   * <p>The targets.</p>
   *          <p>To register a target by instance ID, specify the instance ID.
   *       To register a target by IP address, specify the IP address.
   *       To register a Lambda function, specify the ARN of the Lambda function.</p>
   */
  Targets: TargetDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace RegisterTargetsInput {
  export const filterSensitiveLog = (obj: RegisterTargetsInput): any => ({
    ...obj,
  });
}

export interface RegisterTargetsOutput {}

export namespace RegisterTargetsOutput {
  export const filterSensitiveLog = (obj: RegisterTargetsOutput): any => ({
    ...obj,
  });
}

export interface RemoveListenerCertificatesInput {
  /**
   * <p>The certificate to remove. You can specify one certificate per call.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   */
  Certificates: Certificate[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace RemoveListenerCertificatesInput {
  export const filterSensitiveLog = (obj: RemoveListenerCertificatesInput): any => ({
    ...obj,
  });
}

export interface RemoveListenerCertificatesOutput {}

export namespace RemoveListenerCertificatesOutput {
  export const filterSensitiveLog = (obj: RemoveListenerCertificatesOutput): any => ({
    ...obj,
  });
}

export interface RemoveTagsInput {
  /**
   * <p>The tag keys for the tags to remove.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArns: string[] | undefined;
}

export namespace RemoveTagsInput {
  export const filterSensitiveLog = (obj: RemoveTagsInput): any => ({
    ...obj,
  });
}

export interface RemoveTagsOutput {}

export namespace RemoveTagsOutput {
  export const filterSensitiveLog = (obj: RemoveTagsOutput): any => ({
    ...obj,
  });
}

export interface SetIpAddressTypeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and
   *         <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use
   *         <code>ipv4</code>. Network Load Balancers must use <code>ipv4</code>.</p>
   */
  IpAddressType: IpAddressType | string | undefined;
}

export namespace SetIpAddressTypeInput {
  export const filterSensitiveLog = (obj: SetIpAddressTypeInput): any => ({
    ...obj,
  });
}

export interface SetIpAddressTypeOutput {
  /**
   * <p>The IP address type.</p>
   */
  IpAddressType?: IpAddressType | string;
}

export namespace SetIpAddressTypeOutput {
  export const filterSensitiveLog = (obj: SetIpAddressTypeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the priorities for the rules for a listener.</p>
 */
export interface RulePriorityPair {
  /**
   * <p>The rule priority.</p>
   */
  Priority?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

export namespace RulePriorityPair {
  export const filterSensitiveLog = (obj: RulePriorityPair): any => ({
    ...obj,
  });
}

export interface SetRulePrioritiesInput {
  /**
   * <p>The rule priorities.</p>
   */
  RulePriorities: RulePriorityPair[] | undefined;
}

export namespace SetRulePrioritiesInput {
  export const filterSensitiveLog = (obj: SetRulePrioritiesInput): any => ({
    ...obj,
  });
}

export interface SetRulePrioritiesOutput {
  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Rule[];
}

export namespace SetRulePrioritiesOutput {
  export const filterSensitiveLog = (obj: SetRulePrioritiesOutput): any => ({
    ...obj,
  });
}

export interface SetSecurityGroupsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroups: string[] | undefined;
}

export namespace SetSecurityGroupsInput {
  export const filterSensitiveLog = (obj: SetSecurityGroupsInput): any => ({
    ...obj,
  });
}

export interface SetSecurityGroupsOutput {
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace SetSecurityGroupsOutput {
  export const filterSensitiveLog = (obj: SetSecurityGroupsOutput): any => ({
    ...obj,
  });
}

export interface SetSubnetsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The IDs of the public subnets. You must specify subnets from at least two Availability Zones.
   *       You can specify only one subnet per Availability Zone. You must specify either subnets or
   *       subnet mappings.</p>
   */
  Subnets?: string[];

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must
   *       specify either subnets or subnet mappings.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability Zones.
   *       You cannot specify Elastic IP addresses for your subnets.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. If you
   *       need static IP addresses for your internet-facing load balancer, you can specify one Elastic IP
   *       address per subnet. For internal load balancers, you can specify one private IP address per
   *       subnet from the IPv4 range of the subnet.</p>
   */
  SubnetMappings?: SubnetMapping[];
}

export namespace SetSubnetsInput {
  export const filterSensitiveLog = (obj: SetSubnetsInput): any => ({
    ...obj,
  });
}

export interface SetSubnetsOutput {
  /**
   * <p>Information about the subnet and Availability Zone.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

export namespace SetSubnetsOutput {
  export const filterSensitiveLog = (obj: SetSubnetsOutput): any => ({
    ...obj,
  });
}
