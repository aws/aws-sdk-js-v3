// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ElasticLoadBalancingV2ServiceException as __BaseException } from "./ElasticLoadBalancingV2ServiceException";

export enum AuthenticateCognitoActionConditionalBehaviorEnum {
  ALLOW = "allow",
  AUTHENTICATE = "authenticate",
  DENY = "deny",
}

/**
 * <p>Request parameters to use when integrating with Amazon Cognito to authenticate
 *       users.</p>
 */
export interface AuthenticateCognitoActionConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Cognito user pool.</p>
   */
  UserPoolArn: string | undefined;

  /**
   * <p>The ID of the Amazon Cognito user pool client.</p>
   */
  UserPoolClientId: string | undefined;

  /**
   * <p>The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.</p>
   */
  UserPoolDomain: string | undefined;

  /**
   * <p>The name of the cookie used to maintain session information. The default is
   *       AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is
   *       <code>openid</code>.</p>
   *          <p>To verify which scope values your IdP supports and how to separate multiple values, see
   *       the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800
   *       seconds (7 days).</p>
   */
  SessionTimeout?: number;

  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization
   *       endpoint.</p>
   */
  AuthenticationRequestExtraParams?: Record<string, string>;

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
   *                <p>authenticate<code></code> - Redirect the request to the IdP authorization endpoint. This is
   *           the default value.</p>
   *             </li>
   *          </ul>
   */
  OnUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnum | string;
}

export enum AuthenticateOidcActionConditionalBehaviorEnum {
  ALLOW = "allow",
  AUTHENTICATE = "authenticate",
  DENY = "deny",
}

/**
 * <p>Request parameters when using an identity provider (IdP) that is compliant with OpenID
 *       Connect (OIDC) to authenticate users.</p>
 */
export interface AuthenticateOidcActionConfig {
  /**
   * <p>The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS
   *       protocol, the domain, and the path.</p>
   */
  Issuer: string | undefined;

  /**
   * <p>The authorization endpoint of the IdP. This must be a full URL, including the HTTPS
   *       protocol, the domain, and the path.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the
   *       domain, and the path.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol,
   *       the domain, and the path.</p>
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you
   *       are modifying a rule, you can omit this parameter if you set
   *         <code>UseExistingClientSecret</code> to true.</p>
   */
  ClientSecret?: string;

  /**
   * <p>The name of the cookie used to maintain session information. The default is
   *       AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is
   *       <code>openid</code>.</p>
   *          <p>To verify which scope values your IdP supports and how to separate multiple values, see
   *       the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800
   *       seconds (7 days).</p>
   */
  SessionTimeout?: number;

  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization
   *       endpoint.</p>
   */
  AuthenticationRequestExtraParams?: Record<string, string>;

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
   *                <p>authenticate<code></code> - Redirect the request to the IdP authorization endpoint. This is
   *           the default value.</p>
   *             </li>
   *          </ul>
   */
  OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum | string;

  /**
   * <p>Indicates whether to use the existing client secret when modifying a rule. If you are
   *       creating a rule, you can omit this parameter or set it to false.</p>
   */
  UseExistingClientSecret?: boolean;
}

/**
 * <p>Information about an action that returns a custom HTTP response.</p>
 */
export interface FixedResponseActionConfig {
  /**
   * <p>The message.</p>
   */
  MessageBody?: string;

  /**
   * <p>The HTTP response code (2XX, 4XX, or 5XX).</p>
   */
  StatusCode: string | undefined;

  /**
   * <p>The content type.</p>
   *          <p>Valid Values: text/plain | text/css | text/html | application/javascript |
   *       application/json</p>
   */
  ContentType?: string;
}

/**
 * <p>Information about how traffic will be distributed between multiple target groups in a
 *       forward rule.</p>
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

/**
 * <p>Information about the target group stickiness for a rule.</p>
 */
export interface TargetGroupStickinessConfig {
  /**
   * <p>Indicates whether target group stickiness is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The time period, in seconds, during which requests from a client should be routed to the
   *       same target group. The range is 1-604800 seconds (7 days).</p>
   */
  DurationSeconds?: number;
}

/**
 * <p>Information about a forward action.</p>
 */
export interface ForwardActionConfig {
  /**
   * <p>The target groups. For Network Load Balancers, you can specify a single target
   *       group.</p>
   */
  TargetGroups?: TargetGroupTuple[];

  /**
   * <p>The target group stickiness for the rule.</p>
   */
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
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
   * <p>The port. You can specify a value from 1 to 65535 or #{port}.</p>
   */
  Port?: string;

  /**
   * <p>The hostname. This component is not percent-encoded. The hostname can contain
   *       #{host}.</p>
   */
  Host?: string;

  /**
   * <p>The absolute path, starting with the leading "/". This component is not percent-encoded.
   *       The path can contain #{host}, #{path}, and #{port}.</p>
   */
  Path?: string;

  /**
   * <p>The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include
   *       the leading "?", as it is automatically added. You can specify any of the reserved
   *       keywords.</p>
   */
  Query?: string;

  /**
   * <p>The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP
   *       302).</p>
   */
  StatusCode: RedirectActionStatusCodeEnum | string | undefined;
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
 *          <p>Each rule must include exactly one of the following types of actions:
 *       <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be
 *       the last action to be performed.</p>
 */
export interface Action {
  /**
   * <p>The type of action.</p>
   */
  Type: ActionTypeEnum | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is
   *         <code>forward</code> and you want to route to a single target group. To route to one or more
   *       target groups, use <code>ForwardConfig</code> instead.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>[HTTPS listeners] Information about an identity provider that is compliant with OpenID
   *       Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.</p>
   */
  AuthenticateOidcConfig?: AuthenticateOidcActionConfig;

  /**
   * <p>[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only
   *       when <code>Type</code> is <code>authenticate-cognito</code>.</p>
   */
  AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;

  /**
   * <p>The order for the action. This value is required for rules with multiple actions. The
   *       action with the lowest value for order is performed first.</p>
   */
  Order?: number;

  /**
   * <p>[Application Load Balancer] Information for creating a redirect action. Specify only when
   *         <code>Type</code> is <code>redirect</code>.</p>
   */
  RedirectConfig?: RedirectActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating an action that returns a custom HTTP
   *       response. Specify only when <code>Type</code> is <code>fixed-response</code>.</p>
   */
  FixedResponseConfig?: FixedResponseActionConfig;

  /**
   * <p>Information for creating an action that distributes requests among one or more target
   *       groups. For Network Load Balancers, you can specify a single target group. Specify only when
   *         <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code>
   *       and <code>TargetGroupArn</code>, you can specify only one target group using
   *         <code>ForwardConfig</code> and it must be the same target group specified in
   *         <code>TargetGroupArn</code>.</p>
   */
  ForwardConfig?: ForwardActionConfig;
}

/**
 * <p>Information about an SSL server certificate.</p>
 */
export interface Certificate {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Indicates whether the certificate is the default certificate. Do not set this value when
   *       specifying a certificate as an input. This value is not included in the output when describing
   *       a listener, but is included when describing listener certificates.</p>
   */
  IsDefault?: boolean;
}

export interface AddListenerCertificatesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The certificate to add. You can specify one certificate per call. Set
   *         <code>CertificateArn</code> to the certificate ARN but do not set
   *       <code>IsDefault</code>.</p>
   */
  Certificates: Certificate[] | undefined;
}

export interface AddListenerCertificatesOutput {
  /**
   * <p>Information about the certificates in the certificate list.</p>
   */
  Certificates?: Certificate[];
}

/**
 * <p>The specified certificate does not exist.</p>
 */
export class CertificateNotFoundException extends __BaseException {
  readonly name: "CertificateNotFoundException" = "CertificateNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateNotFoundException, __BaseException>) {
    super({
      name: "CertificateNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified listener does not exist.</p>
 */
export class ListenerNotFoundException extends __BaseException {
  readonly name: "ListenerNotFoundException" = "ListenerNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListenerNotFoundException, __BaseException>) {
    super({
      name: "ListenerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ListenerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of certificates per load balancer.</p>
 */
export class TooManyCertificatesException extends __BaseException {
  readonly name: "TooManyCertificatesException" = "TooManyCertificatesException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCertificatesException, __BaseException>) {
    super({
      name: "TooManyCertificatesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCertificatesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export interface AddTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>The tags.</p>
   */
  Tags: Tag[] | undefined;
}

export interface AddTagsOutput {}

/**
 * <p>A tag key was specified more than once.</p>
 */
export class DuplicateTagKeysException extends __BaseException {
  readonly name: "DuplicateTagKeysException" = "DuplicateTagKeysException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTagKeysException, __BaseException>) {
    super({
      name: "DuplicateTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTagKeysException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified load balancer does not exist.</p>
 */
export class LoadBalancerNotFoundException extends __BaseException {
  readonly name: "LoadBalancerNotFoundException" = "LoadBalancerNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoadBalancerNotFoundException, __BaseException>) {
    super({
      name: "LoadBalancerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LoadBalancerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified rule does not exist.</p>
 */
export class RuleNotFoundException extends __BaseException {
  readonly name: "RuleNotFoundException" = "RuleNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuleNotFoundException, __BaseException>) {
    super({
      name: "RuleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuleNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified target group does not exist.</p>
 */
export class TargetGroupNotFoundException extends __BaseException {
  readonly name: "TargetGroupNotFoundException" = "TargetGroupNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetGroupNotFoundException, __BaseException>) {
    super({
      name: "TargetGroupNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetGroupNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of tags per load balancer.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified allocation ID does not exist.</p>
 */
export class AllocationIdNotFoundException extends __BaseException {
  readonly name: "AllocationIdNotFoundException" = "AllocationIdNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AllocationIdNotFoundException, __BaseException>) {
    super({
      name: "AllocationIdNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AllocationIdNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified ALPN policy is not supported.</p>
 */
export class ALPNPolicyNotSupportedException extends __BaseException {
  readonly name: "ALPNPolicyNotSupportedException" = "ALPNPolicyNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ALPNPolicyNotSupportedException, __BaseException>) {
    super({
      name: "ALPNPolicyNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ALPNPolicyNotSupportedException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address for an
   *       internal-facing load balancer.</p>
   */
  AllocationId?: string;

  /**
   * <p>[Network Load Balancers] The private IPv4 address for an internal load balancer.</p>
   */
  PrivateIPv4Address?: string;

  /**
   * <p>[Network Load Balancers] The IPv6 address.</p>
   */
  IPv6Address?: string;
}

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  ZoneName?: string;

  /**
   * <p>The ID of the subnet. You can specify one subnet per Availability Zone.</p>
   */
  SubnetId?: string;

  /**
   * <p>[Application Load Balancers on Outposts] The ID of the Outpost.</p>
   */
  OutpostId?: string;

  /**
   * <p>[Network Load Balancers] If you need static IP addresses for your load balancer, you can
   *       specify one Elastic IP address per Availability Zone when you create an internal-facing load
   *       balancer. For internal load balancers, you can specify a private IP address from the IPv4
   *       range of the subnet.</p>
   */
  LoadBalancerAddresses?: LoadBalancerAddress[];
}

/**
 * <p>The specified Availability Zone is not supported.</p>
 */
export class AvailabilityZoneNotSupportedException extends __BaseException {
  readonly name: "AvailabilityZoneNotSupportedException" = "AvailabilityZoneNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AvailabilityZoneNotSupportedException, __BaseException>) {
    super({
      name: "AvailabilityZoneNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AvailabilityZoneNotSupportedException.prototype);
    this.Message = opts.Message;
  }
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

export enum ProtocolEnum {
  GENEVE = "GENEVE",
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
  TCP_UDP = "TCP_UDP",
  TLS = "TLS",
  UDP = "UDP",
}

export interface CreateListenerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The protocol for connections from clients to the load balancer. For Application Load
   *       Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the
   *       supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP
   *       protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load
   *       Balancer.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>The port on which the load balancer is listening. You cannot specify a port for a Gateway
   *       Load Balancer.</p>
   */
  Port?: number;

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are
   *       supported.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> and
   *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  SslPolicy?: string;

  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide
   *       exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set
   *         <code>IsDefault</code>.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>The actions for the default rule.</p>
   */
  DefaultActions: Action[] | undefined;

  /**
   * <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You
   *       can specify one policy name. The following are the possible values:</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN
   *         policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  AlpnPolicy?: string[];

  /**
   * <p>The tags to assign to the listener.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Information about a listener.</p>
 */
export interface Listener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  Port?: number;

  /**
   * <p>The protocol for connections from clients to the load balancer.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>[HTTPS or TLS listener] The default certificate for the listener.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>[HTTPS or TLS listener] The security policy that defines which protocols and ciphers are
   *       supported.</p>
   */
  SslPolicy?: string;

  /**
   * <p>The default actions for the listener.</p>
   */
  DefaultActions?: Action[];

  /**
   * <p>[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN)
   *       policy.</p>
   */
  AlpnPolicy?: string[];
}

export interface CreateListenerOutput {
  /**
   * <p>Information about the listener.</p>
   */
  Listeners?: Listener[];
}

/**
 * <p>A listener with the specified port already exists.</p>
 */
export class DuplicateListenerException extends __BaseException {
  readonly name: "DuplicateListenerException" = "DuplicateListenerException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateListenerException, __BaseException>) {
    super({
      name: "DuplicateListenerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateListenerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified configuration is not valid with this protocol.</p>
 */
export class IncompatibleProtocolsException extends __BaseException {
  readonly name: "IncompatibleProtocolsException" = "IncompatibleProtocolsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleProtocolsException, __BaseException>) {
    super({
      name: "IncompatibleProtocolsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleProtocolsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested configuration is not valid.</p>
 */
export class InvalidConfigurationRequestException extends __BaseException {
  readonly name: "InvalidConfigurationRequestException" = "InvalidConfigurationRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationRequestException, __BaseException>) {
    super({
      name: "InvalidConfigurationRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested action is not valid.</p>
 */
export class InvalidLoadBalancerActionException extends __BaseException {
  readonly name: "InvalidLoadBalancerActionException" = "InvalidLoadBalancerActionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLoadBalancerActionException, __BaseException>) {
    super({
      name: "InvalidLoadBalancerActionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLoadBalancerActionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified SSL policy does not exist.</p>
 */
export class SSLPolicyNotFoundException extends __BaseException {
  readonly name: "SSLPolicyNotFoundException" = "SSLPolicyNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SSLPolicyNotFoundException, __BaseException>) {
    super({
      name: "SSLPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SSLPolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of load balancers per target group.</p>
 */
export class TargetGroupAssociationLimitException extends __BaseException {
  readonly name: "TargetGroupAssociationLimitException" = "TargetGroupAssociationLimitException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetGroupAssociationLimitException, __BaseException>) {
    super({
      name: "TargetGroupAssociationLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetGroupAssociationLimitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of actions per rule.</p>
 */
export class TooManyActionsException extends __BaseException {
  readonly name: "TooManyActionsException" = "TooManyActionsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyActionsException, __BaseException>) {
    super({
      name: "TooManyActionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyActionsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of listeners per load balancer.</p>
 */
export class TooManyListenersException extends __BaseException {
  readonly name: "TooManyListenersException" = "TooManyListenersException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyListenersException, __BaseException>) {
    super({
      name: "TooManyListenersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyListenersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 */
export class TooManyRegistrationsForTargetIdException extends __BaseException {
  readonly name: "TooManyRegistrationsForTargetIdException" = "TooManyRegistrationsForTargetIdException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRegistrationsForTargetIdException, __BaseException>) {
    super({
      name: "TooManyRegistrationsForTargetIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRegistrationsForTargetIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of targets.</p>
 */
export class TooManyTargetsException extends __BaseException {
  readonly name: "TooManyTargetsException" = "TooManyTargetsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTargetsException, __BaseException>) {
    super({
      name: "TooManyTargetsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTargetsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of unique target groups per load balancer across
 *       all listeners. If a target group is used by multiple actions for a load balancer, it is
 *       counted as only one use.</p>
 */
export class TooManyUniqueTargetGroupsPerLoadBalancerException extends __BaseException {
  readonly name: "TooManyUniqueTargetGroupsPerLoadBalancerException" =
    "TooManyUniqueTargetGroupsPerLoadBalancerException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyUniqueTargetGroupsPerLoadBalancerException, __BaseException>) {
    super({
      name: "TooManyUniqueTargetGroupsPerLoadBalancerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyUniqueTargetGroupsPerLoadBalancerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified protocol is not supported.</p>
 */
export class UnsupportedProtocolException extends __BaseException {
  readonly name: "UnsupportedProtocolException" = "UnsupportedProtocolException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedProtocolException, __BaseException>) {
    super({
      name: "UnsupportedProtocolException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedProtocolException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address for an
   *       internet-facing load balancer.</p>
   */
  AllocationId?: string;

  /**
   * <p>[Network Load Balancers] The private IPv4 address for an internal load balancer.</p>
   */
  PrivateIPv4Address?: string;

  /**
   * <p>[Network Load Balancers] The IPv6 address.</p>
   */
  IPv6Address?: string;
}

export enum LoadBalancerTypeEnum {
  APPLICATION = "application",
  GATEWAY = "gateway",
  NETWORK = "network",
}

export interface CreateLoadBalancerInput {
  /**
   * <p>The name of the load balancer.</p>
   *          <p>This name must be unique per region per account, can have a maximum of 32 characters, must
   *       contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must
   *       not begin with "internal-".</p>
   */
  Name: string | undefined;

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You
   *       must specify either subnets or subnet mappings, but not both. To specify an Elastic IP
   *       address, specify subnet mappings instead of subnets.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones.</p>
   *          <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p>
   *          <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local
   *       Zones.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability
   *       Zones.</p>
   *          <p>[Gateway Load Balancers] You can specify subnets from one or more Availability
   *       Zones.</p>
   */
  Subnets?: string[];

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You
   *       must specify either subnets or subnet mappings, but not both.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones. You cannot specify Elastic IP addresses for your subnets.</p>
   *          <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p>
   *          <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local
   *       Zones.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You
   *       can specify one Elastic IP address per subnet if you need static IP addresses for your
   *       internet-facing load balancer. For internal load balancers, you can specify one private IP
   *       address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you
   *       can specify one IPv6 address per subnet.</p>
   *          <p>[Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You
   *       cannot specify Elastic IP addresses for your subnets.</p>
   */
  SubnetMappings?: SubnetMapping[];

  /**
   * <p>[Application Load Balancers] The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an
   *       Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes.
   *       Therefore, Internet-facing load balancers can route requests from clients over the
   *       internet.</p>
   *          <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an
   *       internal load balancer is publicly resolvable to the private IP addresses of the nodes.
   *       Therefore, internal load balancers can route requests only from clients with access to the VPC
   *       for the load balancer.</p>
   *          <p>The default is an Internet-facing load balancer.</p>
   *          <p>You cannot specify a scheme for a Gateway Load Balancer.</p>
   */
  Scheme?: LoadBalancerSchemeEnum | string;

  /**
   * <p>The tags to assign to the load balancer.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of load balancer. The default is <code>application</code>.</p>
   */
  Type?: LoadBalancerTypeEnum | string;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *       are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *       addresses). </p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>[Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP
   *       pool).</p>
   */
  CustomerOwnedIpv4Pool?: string;
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
   * <p>The state code. The initial state of the load balancer is <code>provisioning</code>. After
   *       the load balancer is fully set up and ready to route traffic, its state is
   *       <code>active</code>. If load balancer is routing traffic but does not have the resources it
   *       needs to scale, its state is<code>active_impaired</code>. If the load balancer could not be
   *       set up, its state is <code>failed</code>.</p>
   */
  Code?: LoadBalancerStateEnum | string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface LoadBalancer {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an
   *       Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes.
   *       Therefore, Internet-facing load balancers can route requests from clients over the
   *       internet.</p>
   *          <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an
   *       internal load balancer is publicly resolvable to the private IP addresses of the nodes.
   *       Therefore, internal load balancers can route requests only from clients with access to the VPC
   *       for the load balancer.</p>
   */
  Scheme?: LoadBalancerSchemeEnum | string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: LoadBalancerTypeEnum | string;

  /**
   * <p>The subnets for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *       are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *       addresses).</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>[Application Load Balancers on Outposts] The ID of the customer-owned address pool.</p>
   */
  CustomerOwnedIpv4Pool?: string;
}

export interface CreateLoadBalancerOutput {
  /**
   * <p>Information about the load balancer.</p>
   */
  LoadBalancers?: LoadBalancer[];
}

/**
 * <p>A load balancer with the specified name already exists.</p>
 */
export class DuplicateLoadBalancerNameException extends __BaseException {
  readonly name: "DuplicateLoadBalancerNameException" = "DuplicateLoadBalancerNameException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateLoadBalancerNameException, __BaseException>) {
    super({
      name: "DuplicateLoadBalancerNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateLoadBalancerNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested scheme is not valid.</p>
 */
export class InvalidSchemeException extends __BaseException {
  readonly name: "InvalidSchemeException" = "InvalidSchemeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSchemeException, __BaseException>) {
    super({
      name: "InvalidSchemeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSchemeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified security group does not exist.</p>
 */
export class InvalidSecurityGroupException extends __BaseException {
  readonly name: "InvalidSecurityGroupException" = "InvalidSecurityGroupException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecurityGroupException, __BaseException>) {
    super({
      name: "InvalidSecurityGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecurityGroupException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified subnet is out of available addresses.</p>
 */
export class InvalidSubnetException extends __BaseException {
  readonly name: "InvalidSubnetException" = "InvalidSubnetException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnetException, __BaseException>) {
    super({
      name: "InvalidSubnetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation is not allowed.</p>
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A specified resource is in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified subnet does not exist.</p>
 */
export class SubnetNotFoundException extends __BaseException {
  readonly name: "SubnetNotFoundException" = "SubnetNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotFoundException, __BaseException>) {
    super({
      name: "SubnetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of load balancers for your Amazon Web Services
 *       account.</p>
 */
export class TooManyLoadBalancersException extends __BaseException {
  readonly name: "TooManyLoadBalancersException" = "TooManyLoadBalancersException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyLoadBalancersException, __BaseException>) {
    super({
      name: "TooManyLoadBalancersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyLoadBalancersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about a host header condition.</p>
 */
export interface HostHeaderConditionConfig {
  /**
   * <p>The host names. The maximum size of each name is 128 characters. The comparison is
   *       case insensitive. The following wildcard characters are supported: * (matches 0 or more
   *       characters) and ? (matches exactly 1 character).</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of the strings matches
   *       the host name.</p>
   */
  Values?: string[];
}

/**
 * <p>Information about an HTTP header condition.</p>
 *          <p>There is a set of standard HTTP header fields. You can also define custom HTTP header
 *       fields.</p>
 */
export interface HttpHeaderConditionConfig {
  /**
   * <p>The name of the HTTP header field. The maximum size is 40 characters. The header name is
   *       case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not
   *       supported.</p>
   *          <p>You can't use an HTTP header condition to specify the host header. Use <a>HostHeaderConditionConfig</a> to specify a host header condition.</p>
   */
  HttpHeaderName?: string;

  /**
   * <p>The strings to compare against the value of the HTTP header. The maximum size of
   *       each string is 128 characters. The comparison strings are case insensitive. The following
   *       wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1
   *       character).</p>
   *          <p>If the same header appears multiple times in the request, we search them in order until a
   *       match is found.</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of the strings matches
   *       the value of the HTTP header. To require that all of the strings are a match, create one
   *       condition per string.</p>
   */
  Values?: string[];
}

/**
 * <p>Information about an HTTP method condition.</p>
 *          <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more
 *       information, see the <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method
 *         Registry</a>. You can also define custom HTTP methods.</p>
 */
export interface HttpRequestMethodConditionConfig {
  /**
   * <p>The name of the request method. The maximum size is 40 characters. The allowed characters
   *       are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not
   *       supported; therefore, the method name must be an exact match.</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of the strings matches
   *       the HTTP request method. We recommend that you route GET and HEAD requests in the same way,
   *       because the response to a HEAD request may be cached.</p>
   */
  Values?: string[];
}

/**
 * <p>Information about a path pattern condition.</p>
 */
export interface PathPatternConditionConfig {
  /**
   * <p>The path patterns to compare against the request URL. The maximum size of each
   *       string is 128 characters. The comparison is case sensitive. The following wildcard characters
   *       are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</p>
   *          <p>If you specify multiple strings, the condition is satisfied if one of them matches the
   *       request URL. The path pattern is compared only to the path of the URL, not to its query
   *       string. To compare against the query string, use <a>QueryStringConditionConfig</a>.</p>
   */
  Values?: string[];
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

/**
 * <p>Information about a query string condition.</p>
 *          <p>The query string component of a URI starts after the first '?' character and is terminated
 *       by either a '#' character or the end of the URI. A typical query string contains key/value
 *       pairs separated by '&' characters. The allowed characters are specified by RFC 3986. Any
 *       character can be percentage encoded.</p>
 */
export interface QueryStringConditionConfig {
  /**
   * <p>The key/value pairs or values to find in the query string. The maximum size of
   *       each string is 128 characters. The comparison is case insensitive. The following wildcard
   *       characters are supported: * (matches 0 or more characters) and ? (matches exactly 1
   *       character). To search for a literal '*' or '?' character in a query string, you must escape
   *       these characters in <code>Values</code> using a '\' character.</p>
   *          <p>If you specify multiple key/value pairs or values, the condition is satisfied if one of
   *       them is found in the query string.</p>
   */
  Values?: QueryStringKeyValuePair[];
}

/**
 * <p>Information about a source IP condition.</p>
 *          <p>You can use this condition to route based on the IP address of the source that connects to
 *       the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the
 *       IP address of the client.</p>
 */
export interface SourceIpConditionConfig {
  /**
   * <p>The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses.
   *       Wildcards are not supported.</p>
   *          <p>If you specify multiple addresses, the condition is satisfied if the source IP address of
   *       the request matches one of the CIDR blocks. This condition is not satisfied by the addresses
   *       in the X-Forwarded-For header. To search for addresses in the X-Forwarded-For header, use
   *         <a>HttpHeaderConditionConfig</a>.</p>
   */
  Values?: string[];
}

/**
 * <p>Information about a condition for a rule.</p>
 *          <p>Each rule can optionally include up to one of each of the following conditions:
 *         <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and
 *         <code>source-ip</code>. Each rule can also optionally include one or more of each of the
 *       following conditions: <code>http-header</code> and <code>query-string</code>. Note that the
 *       value for a condition cannot be empty.</p>
 */
export interface RuleCondition {
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
   * <p>The condition value. Specify only when <code>Field</code> is <code>host-header</code> or
   *         <code>path-pattern</code>. Alternatively, to specify multiple host names or multiple path
   *       patterns, use <code>HostHeaderConfig</code> or <code>PathPatternConfig</code>.</p>
   *          <p>If <code>Field</code> is <code>host-header</code> and you are not using
   *         <code>HostHeaderConfig</code>, you can specify a single host name (for example,
   *       my.example.com) in <code>Values</code>. A host name is case insensitive, can be up to 128
   *       characters in length, and can contain any of the following characters.</p>
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
   *          <p>If <code>Field</code> is <code>path-pattern</code> and you are not using
   *         <code>PathPatternConfig</code>, you can specify a single path pattern (for example, /img/*)
   *       in <code>Values</code>. A path pattern is case-sensitive, can be up to 128 characters in
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
   * <p>Information for a host header condition. Specify only when <code>Field</code> is
   *         <code>host-header</code>.</p>
   */
  HostHeaderConfig?: HostHeaderConditionConfig;

  /**
   * <p>Information for a path pattern condition. Specify only when <code>Field</code> is
   *         <code>path-pattern</code>.</p>
   */
  PathPatternConfig?: PathPatternConditionConfig;

  /**
   * <p>Information for an HTTP header condition. Specify only when <code>Field</code> is
   *         <code>http-header</code>.</p>
   */
  HttpHeaderConfig?: HttpHeaderConditionConfig;

  /**
   * <p>Information for a query string condition. Specify only when <code>Field</code> is
   *         <code>query-string</code>.</p>
   */
  QueryStringConfig?: QueryStringConditionConfig;

  /**
   * <p>Information for an HTTP method condition. Specify only when <code>Field</code> is
   *         <code>http-request-method</code>.</p>
   */
  HttpRequestMethodConfig?: HttpRequestMethodConditionConfig;

  /**
   * <p>Information for a source IP condition. Specify only when <code>Field</code> is
   *         <code>source-ip</code>.</p>
   */
  SourceIpConfig?: SourceIpConditionConfig;
}

export interface CreateRuleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The conditions.</p>
   */
  Conditions: RuleCondition[] | undefined;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The actions.</p>
   */
  Actions: Action[] | undefined;

  /**
   * <p>The tags to assign to the rule.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Information about a rule.</p>
 */
export interface Rule {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;

  /**
   * <p>The priority.</p>
   */
  Priority?: string;

  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions:
   *         <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and
   *         <code>source-ip</code>, and zero or more of the following conditions:
   *         <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions?: RuleCondition[];

  /**
   * <p>The actions. Each rule must include exactly one of the following types of actions:
   *         <code>forward</code>, <code>redirect</code>, or <code>fixed-response</code>, and it must be
   *       the last action to be performed.</p>
   */
  Actions?: Action[];

  /**
   * <p>Indicates whether this is the default rule.</p>
   */
  IsDefault?: boolean;
}

export interface CreateRuleOutput {
  /**
   * <p>Information about the rule.</p>
   */
  Rules?: Rule[];
}

/**
 * <p>The specified priority is in use.</p>
 */
export class PriorityInUseException extends __BaseException {
  readonly name: "PriorityInUseException" = "PriorityInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PriorityInUseException, __BaseException>) {
    super({
      name: "PriorityInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PriorityInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of rules per load balancer.</p>
 */
export class TooManyRulesException extends __BaseException {
  readonly name: "TooManyRulesException" = "TooManyRulesException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRulesException, __BaseException>) {
    super({
      name: "TooManyRulesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRulesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of target groups for your Amazon Web Services
 *       account.</p>
 */
export class TooManyTargetGroupsException extends __BaseException {
  readonly name: "TooManyTargetGroupsException" = "TooManyTargetGroupsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTargetGroupsException, __BaseException>) {
    super({
      name: "TooManyTargetGroupsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTargetGroupsException.prototype);
    this.Message = opts.Message;
  }
}

export enum TargetGroupIpAddressTypeEnum {
  IPV4 = "ipv4",
  IPV6 = "ipv6",
}

/**
 * <p>The codes to use when checking for a successful response from a target. If the protocol
 *       version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes. </p>
 */
export interface Matcher {
  /**
   * <p>For Application Load Balancers, you can specify values between 200 and 499, with the
   *       default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p>
   *          <p>For Network Load Balancers, you can specify values between 200 and 599, with the
   *       default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").</p>
   *          <p>For Gateway Load Balancers, this must be "200–399".</p>
   *          <p>Note that when using shorthand syntax, some values such as commas need to be
   *       escaped.</p>
   */
  HttpCode?: string;

  /**
   * <p>You can specify values between 0 and 99. You can specify multiple values (for example,
   *       "0,1") or a range of values (for example, "0-5"). The default value is 12.</p>
   */
  GrpcCode?: string;
}

export enum TargetTypeEnum {
  ALB = "alb",
  INSTANCE = "instance",
  IP = "ip",
  LAMBDA = "lambda",
}

export interface CreateTargetGroupInput {
  /**
   * <p>The name of the target group.</p>
   *          <p>This name must be unique per region per account, can have a maximum of 32 characters, must
   *       contain only alphanumeric characters or hyphens, and must not begin or end with a
   *       hyphen.</p>
   */
  Name: string | undefined;

  /**
   * <p>The protocol to use for routing traffic to the targets. For Application Load Balancers,
   *       the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported
   *       protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is
   *       GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a
   *       Lambda function, this parameter does not apply.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>[HTTP/HTTPS protocol] The protocol version. Specify <code>GRPC</code> to send requests to
   *       targets using gRPC. Specify <code>HTTP2</code> to send requests to targets using HTTP/2. The
   *       default is <code>HTTP1</code>, which sends requests to targets using HTTP/1.1.</p>
   */
  ProtocolVersion?: string;

  /**
   * <p>The port on which the targets receive traffic. This port is used unless you specify a port
   *       override when registering the target. If the target is a Lambda function, this parameter does
   *       not apply. If the protocol is GENEVE, the supported port is 6081.</p>
   */
  Port?: number;

  /**
   * <p>The identifier of the virtual private cloud (VPC). If the target is a Lambda function,
   *       this parameter does not apply. Otherwise, this parameter is required.</p>
   */
  VpcId?: string;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets. For
   *       Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load
   *       Balancers, the default is TCP. The TCP protocol is not supported for health checks if the
   *       protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are
   *       not supported for health checks.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>The port the load balancer uses when performing health checks on targets. If the protocol
   *       is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is <code>traffic-port</code>, which is
   *       the port on which each target receives traffic from the load balancer. If the protocol is
   *       GENEVE, the default is port 80.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>Indicates whether health checks are enabled. If the target type is <code>lambda</code>,
   *       health checks are disabled by default but can be enabled. If the target type is
   *         <code>instance</code>, <code>ip</code>, or <code>alb</code>, health checks are always
   *       enabled and cannot be disabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p>
   *          <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p>
   *          <p>[GRPC protocol version] The path of a custom health check method with the format
   *       /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300.
   *       If the target group protocol is TCP, TLS, UDP, TCP_UDP, HTTP or HTTPS, the default is 30 seconds.
   *       If the target group protocol is GENEVE, the default is 10 seconds.
   *       If the target type is <code>lambda</code>, the default is 35 seconds.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The amount of time, in seconds, during which no response from a target means a failed
   *       health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the
   *       default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default
   *       is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If
   *       the target type is <code>lambda</code>, the default is 30 seconds.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health check successes required before considering a target healthy. The range is
   *       2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups
   *       with a protocol of GENEVE, the default is 3. If the target type
   *       is <code>lambda</code>, the default is 5.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The number of consecutive health check failures required before considering a target unhealthy. The range is
   *       2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 2. For target groups
   *       with a protocol of GENEVE, the default is 3. If the target type
   *       is <code>lambda</code>, the default is 5.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful
   *       response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range
   *       is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target
   *       groups with a protocol of GENEVE, the range is 200-399.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The type of target that you must specify when registering targets with this target group.
   *       You can't specify targets for a target group using more than one target type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>instance</code> - Register targets by instance ID. This is the default
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ip</code> - Register targets by IP address. You can specify IP addresses from
   *           the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range
   *           (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10).
   *           You can't specify publicly routable IP addresses.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>lambda</code> - Register a single Lambda function as a target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>alb</code> - Register a single Application Load Balancer as a target.</p>
   *             </li>
   *          </ul>
   */
  TargetType?: TargetTypeEnum | string;

  /**
   * <p>The tags to assign to the target group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of IP address used for this target group. The possible values are
   *         <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified,
   *       the IP address type defaults to <code>ipv4</code>.</p>
   */
  IpAddressType?: TargetGroupIpAddressTypeEnum | string;
}

/**
 * <p>Information about a target group.</p>
 */
export interface TargetGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The name of the target group.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>The protocol to use for routing traffic to the targets.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>The port on which the targets are listening. Not used if the target is a Lambda
   *       function.</p>
   */
  Port?: number;

  /**
   * <p>The ID of the VPC for the targets.</p>
   */
  VpcId?: string;

  /**
   * <p>The protocol to use to connect with the target. The GENEVE, TLS, UDP, and TCP_UDP
   *       protocols are not supported for health checks.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual
   *       target.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health
   *       check.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy
   *       target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The number of consecutive health check failures required before considering the target
   *       unhealthy.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>The destination for health checks on the targets.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The HTTP or gRPC codes to use when checking for a successful response from a
   *       target.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers that route traffic to this target
   *       group.</p>
   */
  LoadBalancerArns?: string[];

  /**
   * <p>The type of target that you must specify when registering targets with this target group.
   *       The possible values are <code>instance</code> (register targets by instance ID),
   *         <code>ip</code> (register targets by IP address), <code>lambda</code> (register a single
   *       Lambda function as a target), or <code>alb</code> (register a single Application Load Balancer
   *       as a target).</p>
   */
  TargetType?: TargetTypeEnum | string;

  /**
   * <p>[HTTP/HTTPS protocol] The protocol version. The possible values are <code>GRPC</code>,
   *         <code>HTTP1</code>, and <code>HTTP2</code>.</p>
   */
  ProtocolVersion?: string;

  /**
   * <p>The type of IP address used for this target group. The possible values are
   *         <code>ipv4</code> and <code>ipv6</code>. This is an optional parameter. If not specified,
   *       the IP address type defaults to <code>ipv4</code>.</p>
   */
  IpAddressType?: TargetGroupIpAddressTypeEnum | string;
}

export interface CreateTargetGroupOutput {
  /**
   * <p>Information about the target group.</p>
   */
  TargetGroups?: TargetGroup[];
}

/**
 * <p>A target group with the specified name already exists.</p>
 */
export class DuplicateTargetGroupNameException extends __BaseException {
  readonly name: "DuplicateTargetGroupNameException" = "DuplicateTargetGroupNameException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTargetGroupNameException, __BaseException>) {
    super({
      name: "DuplicateTargetGroupNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTargetGroupNameException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteListenerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export interface DeleteListenerOutput {}

export interface DeleteLoadBalancerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export interface DeleteLoadBalancerOutput {}

export interface DeleteRuleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;
}

export interface DeleteRuleOutput {}

export interface DeleteTargetGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export interface DeleteTargetGroupOutput {}

/**
 * <p>Information about a target.</p>
 */
export interface TargetDescription {
  /**
   * <p>The ID of the target. If the target type of the target group is <code>instance</code>,
   *       specify an instance ID. If the target type is <code>ip</code>, specify an IP address. If the
   *       target type is <code>lambda</code>, specify the ARN of the Lambda function. If the target type
   *       is <code>alb</code>, specify the ARN of the Application Load Balancer target. </p>
   */
  Id: string | undefined;

  /**
   * <p>The port on which the target is listening. If the target group protocol is GENEVE, the
   *       supported port is 6081. If the target type is <code>alb</code>, the targeted Application Load
   *       Balancer must have at least one listener whose port matches the target group port. Not used if
   *       the target is a Lambda function.</p>
   */
  Port?: number;

  /**
   * <p>An Availability Zone or <code>all</code>. This determines whether the target receives
   *       traffic from the load balancer nodes in the specified Availability Zone or from all enabled
   *       Availability Zones for the load balancer.</p>
   *
   *          <p>For Application Load Balancer target groups, the specified Availability Zone value is only applicable
   *       when cross-zone load balancing is off. Otherwise the parameter is ignored and treated
   *       as <code>all</code>.</p>
   *
   *          <p>This parameter is not supported if the target type of the target group is
   *       <code>instance</code> or <code>alb</code>.</p>
   *
   *          <p>If the target type is <code>ip</code> and the IP address is in a subnet of the VPC for the target group,
   *       the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside
   *       the VPC, this parameter is required.</p>
   *
   *          <p>For Application Load Balancer target groups with cross-zone load balancing off, if the target type
   *       is <code>ip</code> and the IP address is outside of the VPC for the target group, this should be an
   *       Availability Zone inside the VPC for the target group.</p>
   *
   *          <p>If the target type is <code>lambda</code>, this parameter is optional and the only
   *       supported value is <code>all</code>.</p>
   */
  AvailabilityZone?: string;
}

export interface DeregisterTargetsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The targets. If you specified a port override when you registered a target, you must
   *       specify both the target ID and the port when you deregister it.</p>
   */
  Targets: TargetDescription[] | undefined;
}

export interface DeregisterTargetsOutput {}

/**
 * <p>The specified target does not exist, is not in the same VPC as the target group, or has an
 *       unsupported instance type.</p>
 */
export class InvalidTargetException extends __BaseException {
  readonly name: "InvalidTargetException" = "InvalidTargetException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetException, __BaseException>) {
    super({
      name: "InvalidTargetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetException.prototype);
    this.Message = opts.Message;
  }
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

/**
 * <p>Information about an Elastic Load Balancing resource limit for your Amazon Web Services
 *       account.</p>
 */
export interface Limit {
  /**
   * <p>The name of the limit. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>application-load-balancers</p>
   *             </li>
   *             <li>
   *                <p>condition-values-per-alb-rule</p>
   *             </li>
   *             <li>
   *                <p>condition-wildcards-per-alb-rule</p>
   *             </li>
   *             <li>
   *                <p>gateway-load-balancers</p>
   *             </li>
   *             <li>
   *                <p>gateway-load-balancers-per-vpc</p>
   *             </li>
   *             <li>
   *                <p>geneve-target-groups</p>
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
   *                <p>targets-per-availability-zone-per-gateway-load-balancer</p>
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

  /**
   * <p>The maximum value of the limit.</p>
   */
  Max?: string;
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

export interface DescribeListenerCertificatesInput {
  /**
   * <p>The Amazon Resource Names (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

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

export interface DescribeListenersInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the listeners.</p>
   */
  ListenerArns?: string[];

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

export interface DescribeLoadBalancerAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

/**
 * <p>Information about a load balancer attribute.</p>
 */
export interface LoadBalancerAttribute {
  /**
   * <p>The name of the attribute.</p>
   *
   *          <p>The following attributes are supported by all load balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deletion_protection.enabled</code> - Indicates whether deletion protection is
   *           enabled. The value is <code>true</code> or <code>false</code>. The default is
   *             <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross-zone load
   *           balancing is enabled. The possible values are <code>true</code> and <code>false</code>.
   *           The default for Network Load Balancers and Gateway Load Balancers is <code>false</code>.
   *           The default for Application Load Balancers is <code>true</code>, and cannot be changed.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported by both Application Load Balancers and Network Load
   *       Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>access_logs.s3.enabled</code> - Indicates whether access logs are enabled. The
   *           value is <code>true</code> or <code>false</code>. The default is
   *           <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>access_logs.s3.bucket</code> - The name of the S3 bucket for the access logs.
   *           This attribute is required if access logs are enabled. The bucket must exist in the same
   *           region as the load balancer and have a bucket policy that grants Elastic Load Balancing
   *           permissions to write to the bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>access_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the
   *           access logs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ipv6.deny_all_igw_traffic</code> - Blocks internet gateway (IGW) access to the
   *           load balancer. It is set to <code>false</code> for internet-facing load balancers and
   *             <code>true</code> for internal load balancers, preventing unintended access to your
   *           internal load balancer through an internet gateway.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported by only Application Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>idle_timeout.timeout_seconds</code> - The idle timeout value, in seconds. The
   *           valid range is 1-4000 seconds. The default is 60 seconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.desync_mitigation_mode</code> - Determines how the load balancer
   *           handles requests that might pose a security risk to your application. The possible values
   *           are <code>monitor</code>, <code>defensive</code>, and <code>strictest</code>. The default
   *           is <code>defensive</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.drop_invalid_header_fields.enabled</code> - Indicates whether HTTP
   *           headers with invalid header fields are removed by the load balancer (<code>true</code>) or
   *           routed to targets (<code>false</code>). The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.preserve_host_header.enabled</code> - Indicates whether the
   *           Application Load Balancer should preserve the <code>Host</code> header in the HTTP request
   *           and send it to the target without any change. The possible values are <code>true</code>
   *           and <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.x_amzn_tls_version_and_cipher_suite.enabled</code> - Indicates
   *           whether the two headers (<code>x-amzn-tls-version</code> and
   *             <code>x-amzn-tls-cipher-suite</code>), which contain information about the negotiated
   *           TLS version and cipher suite, are added to the client request before sending it to the
   *           target. The <code>x-amzn-tls-version</code> header has information about the TLS protocol
   *           version negotiated with the client, and the <code>x-amzn-tls-cipher-suite</code> header
   *           has information about the cipher suite negotiated with the client. Both headers are in
   *           OpenSSL format. The possible values for the attribute are <code>true</code> and
   *             <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.xff_client_port.enabled</code> - Indicates whether the
   *             <code>X-Forwarded-For</code> header should preserve the source port that the client used
   *           to connect to the load balancer. The possible values are <code>true</code> and
   *             <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http.xff_header_processing.mode</code> - Enables you to modify,
   *           preserve, or remove the <code>X-Forwarded-For</code> header in the HTTP request before the
   *           Application Load Balancer sends the request to the target. The possible values are
   *             <code>append</code>, <code>preserve</code>, and <code>remove</code>. The default is
   *             <code>append</code>.</p>
   *                <ul>
   *                   <li>
   *                      <p>If the value is <code>append</code>, the Application Load Balancer adds the client
   *               IP address (of the last hop) to the <code>X-Forwarded-For</code> header in the HTTP
   *               request before it sends it to targets.</p>
   *                   </li>
   *                   <li>
   *                      <p>If the value is <code>preserve</code> the Application Load Balancer preserves the
   *                 <code>X-Forwarded-For</code> header in the HTTP request, and sends it to targets
   *               without any change.</p>
   *                   </li>
   *                   <li>
   *                      <p>If the value is <code>remove</code>, the Application Load Balancer removes the
   *                 <code>X-Forwarded-For</code> header in the HTTP request before it sends it to
   *               targets.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled. The possible
   *           values are <code>true</code> and <code>false</code>. The default is <code>true</code>.
   *           Elastic Load Balancing requires that message header names contain only alphanumeric
   *           characters and hyphens.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>waf.fail_open.enabled</code> - Indicates whether to allow a WAF-enabled load
   *           balancer to route requests to targets if it is unable to forward the request to Amazon Web Services WAF. The possible values are <code>true</code> and <code>false</code>. The
   *           default is <code>false</code>.</p>
   *             </li>
   *          </ul>
   */
  Key?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export interface DescribeLoadBalancerAttributesOutput {
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: LoadBalancerAttribute[];
}

export interface DescribeLoadBalancersInput {
  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load
   *       balancers in a single call.</p>
   */
  LoadBalancerArns?: string[];

  /**
   * <p>The names of the load balancers.</p>
   */
  Names?: string[];

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

export interface DescribeRulesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the rules.</p>
   */
  RuleArns?: string[];

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

export interface DescribeSSLPoliciesInput {
  /**
   * <p>The names of the policies.</p>
   */
  Names?: string[];

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
   * <p> The type of load balancer. The default lists the SSL policies for all load
   *       balancers.</p>
   */
  LoadBalancerType?: LoadBalancerTypeEnum | string;
}

/**
 * <p>Information about a policy used for SSL negotiation.</p>
 */
export interface SslPolicy {
  /**
   * <p>The protocols.</p>
   */
  SslProtocols?: string[];

  /**
   * <p>The ciphers.</p>
   */
  Ciphers?: Cipher[];

  /**
   * <p>The name of the policy.</p>
   */
  Name?: string;

  /**
   * <p> The supported load balancers. </p>
   */
  SupportedLoadBalancerTypes?: string[];
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

export interface DescribeTagsInput {
  /**
   * <p>The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a
   *       single call.</p>
   */
  ResourceArns: string[] | undefined;
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

export interface DescribeTagsOutput {
  /**
   * <p>Information about the tags.</p>
   */
  TagDescriptions?: TagDescription[];
}

export interface DescribeTargetGroupAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

/**
 * <p>Information about a target group attribute.</p>
 */
export interface TargetGroupAttribute {
  /**
   * <p>The name of the attribute.</p>
   *
   *          <p>The following attributes are supported by all load balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deregistration_delay.timeout_seconds</code> - The amount of time, in seconds,
   *           for Elastic Load Balancing to wait before changing the state of a deregistering target
   *           from <code>draining</code> to <code>unused</code>. The range is 0-3600 seconds. The
   *           default value is 300 seconds. If the target is a Lambda function, this attribute is not
   *           supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.enabled</code> - Indicates whether target stickiness is enabled. The
   *           value is <code>true</code> or <code>false</code>. The default is
   *           <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.type</code> - Indicates the type of stickiness. The possible values are:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>lb_cookie</code> and <code>app_cookie</code> for Application Load Balancers.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>source_ip</code> for Network Load Balancers.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>source_ip_dest_ip</code> and <code>source_ip_dest_ip_proto</code> for Gateway Load Balancers.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported by Application Load Balancers and
   *       Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross zone load
   *           balancing is enabled. The value is <code>true</code>, <code>false</code> or
   *           <code>use_load_balancer_configuration</code>. The default is
   *           <code>use_load_balancer_configuration</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target_group_health.dns_failover.minimum_healthy_targets.count</code> -
   *           The minimum number of targets that must be healthy.
   *           If the number of healthy targets is below this value, mark the zone as unhealthy
   *           in DNS, so that traffic is routed only to healthy zones. The possible values are
   *           <code>off</code> or an integer from 1 to the maximum number of targets.
   *           The default is <code>off</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target_group_health.dns_failover.minimum_healthy_targets.percentage</code> -
   *           The minimum percentage of targets that must be healthy.
   *           If the percentage of healthy targets is below this value, mark the zone as unhealthy
   *           in DNS, so that traffic is routed only to healthy zones. The possible values are
   *           <code>off</code> or an integer from 1 to 100. The default is <code>off</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target_group_health.unhealthy_state_routing.minimum_healthy_targets.count</code> -
   *           The minimum number of targets that must be healthy.
   *           If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets.
   *           The possible values are 1 to the maximum number of targets. The default is 1.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage</code> -
   *           The minimum percentage of targets that must be healthy.
   *           If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets.
   *           The possible values are <code>off</code> or an integer from 1 to 100.
   *           The default is <code>off</code>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported only if the load balancer is an Application Load
   *       Balancer and the target is an instance or an IP address:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>load_balancing.algorithm.type</code> - The load balancing algorithm determines
   *           how the load balancer selects targets when routing requests. The value is
   *             <code>round_robin</code> or <code>least_outstanding_requests</code>. The default is
   *             <code>round_robin</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>slow_start.duration_seconds</code> - The time period, in seconds, during which a
   *           newly registered target receives an increasing share of the traffic to the target group.
   *           After this time period ends, the target receives its full share of traffic. The range is
   *           30-900 seconds (15 minutes). The default is 0 seconds (disabled).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.app_cookie.cookie_name</code> - Indicates the name of the
   *           application-based cookie. Names that start with the following prefixes are not allowed:
   *             <code>AWSALB</code>, <code>AWSALBAPP</code>, and <code>AWSALBTG</code>; they're reserved
   *           for use by the load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.app_cookie.duration_seconds</code> - The time period, in seconds,
   *           during which requests from a client should be routed to the same target. After this time
   *           period expires, the application-based cookie is considered stale. The range is 1 second to
   *           1 week (604800 seconds). The default value is 1 day (86400 seconds).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.lb_cookie.duration_seconds</code> - The time period, in seconds,
   *           during which requests from a client should be routed to the same target. After this time
   *           period expires, the load balancer-generated cookie is considered stale. The range is 1
   *           second to 1 week (604800 seconds). The default value is 1 day (86400 seconds). </p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attribute is supported only if the load balancer is an Application Load
   *       Balancer and the target is a Lambda function:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lambda.multi_value_headers.enabled</code> - Indicates whether the request and
   *           response headers that are exchanged between the load balancer and the Lambda function
   *           include arrays of values or strings. The value is <code>true</code> or <code>false</code>.
   *           The default is <code>false</code>. If the value is <code>false</code> and the request
   *           contains a duplicate header field name or query parameter key, the load balancer uses the
   *           last value sent by the client.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported only by Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deregistration_delay.connection_termination.enabled</code> - Indicates whether
   *           the load balancer terminates connections at the end of the deregistration timeout. The
   *           value is <code>true</code> or <code>false</code>. The default is
   *           <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>preserve_client_ip.enabled</code> - Indicates whether client IP preservation is
   *           enabled. The value is <code>true</code> or <code>false</code>. The default is disabled if
   *           the target group type is IP address and the target group protocol is TCP or TLS.
   *           Otherwise, the default is enabled. Client IP preservation cannot be disabled for UDP and
   *           TCP_UDP target groups.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>proxy_protocol_v2.enabled</code> - Indicates whether Proxy Protocol version 2 is
   *           enabled. The value is <code>true</code> or <code>false</code>. The default is
   *             <code>false</code>. </p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported only by Gateway Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>target_failover.on_deregistration</code> - Indicates how the Gateway Load
   *           Balancer handles existing flows when a target is deregistered. The possible values are
   *             <code>rebalance</code> and <code>no_rebalance</code>. The default is
   *             <code>no_rebalance</code>. The two attributes
   *             (<code>target_failover.on_deregistration</code> and
   *             <code>target_failover.on_unhealthy</code>) can't be set independently. The value you set
   *           for both attributes must be the same.  </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>target_failover.on_unhealthy</code> - Indicates how the Gateway Load Balancer
   *           handles existing flows when a target is unhealthy. The possible values are
   *             <code>rebalance</code> and <code>no_rebalance</code>. The default is
   *             <code>no_rebalance</code>. The two attributes
   *             (<code>target_failover.on_deregistration</code> and
   *             <code>target_failover.on_unhealthy</code>) cannot be set independently. The value you
   *           set for both attributes must be the same.  </p>
   *             </li>
   *          </ul>
   */
  Key?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export interface DescribeTargetGroupAttributesOutput {
  /**
   * <p>Information about the target group attributes</p>
   */
  Attributes?: TargetGroupAttribute[];
}

export interface DescribeTargetGroupsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups.</p>
   */
  TargetGroupArns?: string[];

  /**
   * <p>The names of the target groups.</p>
   */
  Names?: string[];

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

export interface DescribeTargetGroupsOutput {
  /**
   * <p>Information about the target groups.</p>
   */
  TargetGroups?: TargetGroup[];

  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;
}

export interface DescribeTargetHealthInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The targets.</p>
   */
  Targets?: TargetDescription[];
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
   * <p>The state of the target.</p>
   */
  State?: TargetHealthStateEnum | string;

  /**
   * <p>The reason code.</p>
   *
   *          <p>If the target state is <code>healthy</code>, a reason code is not provided.</p>
   *
   *          <p>If the target state is <code>initial</code>, the reason code can be one of the following
   *       values:</p>
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
   *          <p>If the target state is <code>unhealthy</code>, the reason code can be one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.ResponseCodeMismatch</code> - The health checks did not return an
   *           expected HTTP code. Applies only to Application Load Balancers and Gateway Load
   *           Balancers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.Timeout</code> - The health check requests timed out. Applies only to
   *           Application Load Balancers and Gateway Load Balancers.</p>
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
   *          <p>If the target state is <code>unused</code>, the reason code can be one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.NotRegistered</code> - The target is not registered with the target
   *           group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.NotInUse</code> - The target group is not used by any load balancer or
   *           the target is in an Availability Zone that is not enabled for its load balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.InvalidState</code> - The target is in the stopped or terminated
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Target.IpUnusable</code> - The target IP address is reserved for use by a load
   *           balancer.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the target state is <code>draining</code>, the reason code can be the following
   *       value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.DeregistrationInProgress</code> - The target is in the process of being
   *           deregistered and the deregistration delay period has not expired.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If the target state is <code>unavailable</code>, the reason code can be the following
   *       value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Target.HealthCheckDisabled</code> - Health checks are disabled for the target
   *           group. Applies only to Application Load Balancers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Elb.InternalError</code> - Target health is unavailable due to an internal
   *           error. Applies only to Network Load Balancers.</p>
   *             </li>
   *          </ul>
   */
  Reason?: TargetHealthReasonEnum | string;

  /**
   * <p>A description of the target health that provides additional details. If the state is
   *         <code>healthy</code>, a description is not provided.</p>
   */
  Description?: string;
}

/**
 * <p>Information about the health of a target.</p>
 */
export interface TargetHealthDescription {
  /**
   * <p>The description of the target.</p>
   */
  Target?: TargetDescription;

  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The health information for the target.</p>
   */
  TargetHealth?: TargetHealth;
}

export interface DescribeTargetHealthOutput {
  /**
   * <p>Information about the health of the targets.</p>
   */
  TargetHealthDescriptions?: TargetHealthDescription[];
}

/**
 * <p>The health of the specified targets could not be retrieved due to an internal
 *       error.</p>
 */
export class HealthUnavailableException extends __BaseException {
  readonly name: "HealthUnavailableException" = "HealthUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HealthUnavailableException, __BaseException>) {
    super({
      name: "HealthUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, HealthUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

export interface ModifyListenerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The port for connections from clients to the load balancer. You cannot specify a port for
   *       a Gateway Load Balancer.</p>
   */
  Port?: number;

  /**
   * <p>The protocol for connections from clients to the load balancer. Application Load Balancers
   *       support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, and
   *       TCP_UDP protocols. You can’t change the protocol to UDP or TCP_UDP if dual-stack mode is
   *       enabled. You cannot specify a protocol for a Gateway Load Balancer.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are
   *       supported.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or
   *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  SslPolicy?: string;

  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide
   *       exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set
   *         <code>IsDefault</code>.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>The actions for the default rule.</p>
   */
  DefaultActions?: Action[];

  /**
   * <p>[TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You
   *       can specify one policy name. The following are the possible values:</p>
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#alpn-policies">ALPN
   *         policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  AlpnPolicy?: string[];
}

export interface ModifyListenerOutput {
  /**
   * <p>Information about the modified listener.</p>
   */
  Listeners?: Listener[];
}

export interface ModifyLoadBalancerAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The load balancer attributes.</p>
   */
  Attributes: LoadBalancerAttribute[] | undefined;
}

export interface ModifyLoadBalancerAttributesOutput {
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: LoadBalancerAttribute[];
}

export interface ModifyRuleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * <p>The conditions.</p>
   */
  Conditions?: RuleCondition[];

  /**
   * <p>The actions.</p>
   */
  Actions?: Action[];
}

export interface ModifyRuleOutput {
  /**
   * <p>Information about the modified rule.</p>
   */
  Rules?: Rule[];
}

export interface ModifyTargetGroupInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets. For
   *       Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load
   *       Balancers, the default is TCP. The TCP protocol is not supported for health checks if the
   *       protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the
   *       protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP
   *       protocols are not supported for health checks.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>The port the load balancer uses when performing health checks on targets.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p>
   *          <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p>
   *          <p>[GRPC protocol version] The path of a custom health check method with the format
   *       /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means
   *       a failed health check.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy
   *       target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>The number of consecutive health check failures required before considering the target
   *       unhealthy.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful
   *       response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range
   *       is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target
   *       groups with a protocol of GENEVE, the range is 200-399.</p>
   */
  Matcher?: Matcher;
}

export interface ModifyTargetGroupOutput {
  /**
   * <p>Information about the modified target group.</p>
   */
  TargetGroups?: TargetGroup[];
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

export interface ModifyTargetGroupAttributesOutput {
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: TargetGroupAttribute[];
}

export interface RegisterTargetsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The targets.</p>
   */
  Targets: TargetDescription[] | undefined;
}

export interface RegisterTargetsOutput {}

export interface RemoveListenerCertificatesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The certificate to remove. You can specify one certificate per call. Set
   *         <code>CertificateArn</code> to the certificate ARN but do not set
   *       <code>IsDefault</code>.</p>
   */
  Certificates: Certificate[] | undefined;
}

export interface RemoveListenerCertificatesOutput {}

export interface RemoveTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>The tag keys for the tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export interface RemoveTagsOutput {}

export interface SetIpAddressTypeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and
   *         <code>dualstack</code> (for IPv4 and IPv6 addresses).
   *        You can’t specify
   *         <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.</p>
   */
  IpAddressType: IpAddressType | string | undefined;
}

export interface SetIpAddressTypeOutput {
  /**
   * <p>The IP address type.</p>
   */
  IpAddressType?: IpAddressType | string;
}

/**
 * <p>Information about the priorities for the rules for a listener.</p>
 */
export interface RulePriorityPair {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;

  /**
   * <p>The rule priority.</p>
   */
  Priority?: number;
}

export interface SetRulePrioritiesInput {
  /**
   * <p>The rule priorities.</p>
   */
  RulePriorities: RulePriorityPair[] | undefined;
}

export interface SetRulePrioritiesOutput {
  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Rule[];
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

export interface SetSecurityGroupsOutput {
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroupIds?: string[];
}

export interface SetSubnetsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You
   *       must specify either subnets or subnet mappings.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones.</p>
   *          <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p>
   *          <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local
   *       Zones.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability
   *       Zones.</p>
   */
  Subnets?: string[];

  /**
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone. You
   *       must specify either subnets or subnet mappings.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones. You cannot specify Elastic IP addresses for your subnets.</p>
   *          <p>[Application Load Balancers on Outposts] You must specify one Outpost subnet.</p>
   *          <p>[Application Load Balancers on Local Zones] You can specify subnets from one or more Local
   *       Zones.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability Zones. You
   *       can specify one Elastic IP address per subnet if you need static IP addresses for your
   *       internet-facing load balancer. For internal load balancers, you can specify one private IP
   *       address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you
   *       can specify one IPv6 address per subnet.</p>
   */
  SubnetMappings?: SubnetMapping[];

  /**
   * <p>[Network Load Balancers] The type of IP addresses used by the subnets for your load
   *       balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and
   *         <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify
   *         <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.
   *       .</p>
   */
  IpAddressType?: IpAddressType | string;
}

export interface SetSubnetsOutput {
  /**
   * <p>Information about the subnets.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>[Network Load Balancers] The IP address type.</p>
   */
  IpAddressType?: IpAddressType | string;
}

/**
 * @internal
 */
export const AuthenticateCognitoActionConfigFilterSensitiveLog = (obj: AuthenticateCognitoActionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthenticateOidcActionConfigFilterSensitiveLog = (obj: AuthenticateOidcActionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FixedResponseActionConfigFilterSensitiveLog = (obj: FixedResponseActionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetGroupTupleFilterSensitiveLog = (obj: TargetGroupTuple): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetGroupStickinessConfigFilterSensitiveLog = (obj: TargetGroupStickinessConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForwardActionConfigFilterSensitiveLog = (obj: ForwardActionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedirectActionConfigFilterSensitiveLog = (obj: RedirectActionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateFilterSensitiveLog = (obj: Certificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddListenerCertificatesInputFilterSensitiveLog = (obj: AddListenerCertificatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddListenerCertificatesOutputFilterSensitiveLog = (obj: AddListenerCertificatesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsInputFilterSensitiveLog = (obj: AddTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsOutputFilterSensitiveLog = (obj: AddTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerAddressFilterSensitiveLog = (obj: LoadBalancerAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityZoneFilterSensitiveLog = (obj: AvailabilityZone): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CipherFilterSensitiveLog = (obj: Cipher): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateListenerInputFilterSensitiveLog = (obj: CreateListenerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListenerFilterSensitiveLog = (obj: Listener): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateListenerOutputFilterSensitiveLog = (obj: CreateListenerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubnetMappingFilterSensitiveLog = (obj: SubnetMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoadBalancerInputFilterSensitiveLog = (obj: CreateLoadBalancerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerStateFilterSensitiveLog = (obj: LoadBalancerState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerFilterSensitiveLog = (obj: LoadBalancer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoadBalancerOutputFilterSensitiveLog = (obj: CreateLoadBalancerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostHeaderConditionConfigFilterSensitiveLog = (obj: HostHeaderConditionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpHeaderConditionConfigFilterSensitiveLog = (obj: HttpHeaderConditionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpRequestMethodConditionConfigFilterSensitiveLog = (obj: HttpRequestMethodConditionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathPatternConditionConfigFilterSensitiveLog = (obj: PathPatternConditionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStringKeyValuePairFilterSensitiveLog = (obj: QueryStringKeyValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStringConditionConfigFilterSensitiveLog = (obj: QueryStringConditionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceIpConditionConfigFilterSensitiveLog = (obj: SourceIpConditionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleConditionFilterSensitiveLog = (obj: RuleCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleInputFilterSensitiveLog = (obj: CreateRuleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleOutputFilterSensitiveLog = (obj: CreateRuleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MatcherFilterSensitiveLog = (obj: Matcher): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTargetGroupInputFilterSensitiveLog = (obj: CreateTargetGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetGroupFilterSensitiveLog = (obj: TargetGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTargetGroupOutputFilterSensitiveLog = (obj: CreateTargetGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteListenerInputFilterSensitiveLog = (obj: DeleteListenerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteListenerOutputFilterSensitiveLog = (obj: DeleteListenerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoadBalancerInputFilterSensitiveLog = (obj: DeleteLoadBalancerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoadBalancerOutputFilterSensitiveLog = (obj: DeleteLoadBalancerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleInputFilterSensitiveLog = (obj: DeleteRuleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleOutputFilterSensitiveLog = (obj: DeleteRuleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTargetGroupInputFilterSensitiveLog = (obj: DeleteTargetGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTargetGroupOutputFilterSensitiveLog = (obj: DeleteTargetGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetDescriptionFilterSensitiveLog = (obj: TargetDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTargetsInputFilterSensitiveLog = (obj: DeregisterTargetsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterTargetsOutputFilterSensitiveLog = (obj: DeregisterTargetsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountLimitsInputFilterSensitiveLog = (obj: DescribeAccountLimitsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LimitFilterSensitiveLog = (obj: Limit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountLimitsOutputFilterSensitiveLog = (obj: DescribeAccountLimitsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeListenerCertificatesInputFilterSensitiveLog = (obj: DescribeListenerCertificatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeListenerCertificatesOutputFilterSensitiveLog = (obj: DescribeListenerCertificatesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeListenersInputFilterSensitiveLog = (obj: DescribeListenersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeListenersOutputFilterSensitiveLog = (obj: DescribeListenersOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerAttributesInputFilterSensitiveLog = (
  obj: DescribeLoadBalancerAttributesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerAttributeFilterSensitiveLog = (obj: LoadBalancerAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerAttributesOutputFilterSensitiveLog = (
  obj: DescribeLoadBalancerAttributesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancersInputFilterSensitiveLog = (obj: DescribeLoadBalancersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancersOutputFilterSensitiveLog = (obj: DescribeLoadBalancersOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRulesInputFilterSensitiveLog = (obj: DescribeRulesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRulesOutputFilterSensitiveLog = (obj: DescribeRulesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSSLPoliciesInputFilterSensitiveLog = (obj: DescribeSSLPoliciesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SslPolicyFilterSensitiveLog = (obj: SslPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSSLPoliciesOutputFilterSensitiveLog = (obj: DescribeSSLPoliciesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsInputFilterSensitiveLog = (obj: DescribeTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagDescriptionFilterSensitiveLog = (obj: TagDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsOutputFilterSensitiveLog = (obj: DescribeTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTargetGroupAttributesInputFilterSensitiveLog = (obj: DescribeTargetGroupAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetGroupAttributeFilterSensitiveLog = (obj: TargetGroupAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTargetGroupAttributesOutputFilterSensitiveLog = (
  obj: DescribeTargetGroupAttributesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTargetGroupsInputFilterSensitiveLog = (obj: DescribeTargetGroupsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTargetGroupsOutputFilterSensitiveLog = (obj: DescribeTargetGroupsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTargetHealthInputFilterSensitiveLog = (obj: DescribeTargetHealthInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetHealthFilterSensitiveLog = (obj: TargetHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetHealthDescriptionFilterSensitiveLog = (obj: TargetHealthDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTargetHealthOutputFilterSensitiveLog = (obj: DescribeTargetHealthOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyListenerInputFilterSensitiveLog = (obj: ModifyListenerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyListenerOutputFilterSensitiveLog = (obj: ModifyListenerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLoadBalancerAttributesInputFilterSensitiveLog = (obj: ModifyLoadBalancerAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyLoadBalancerAttributesOutputFilterSensitiveLog = (obj: ModifyLoadBalancerAttributesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyRuleInputFilterSensitiveLog = (obj: ModifyRuleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyRuleOutputFilterSensitiveLog = (obj: ModifyRuleOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTargetGroupInputFilterSensitiveLog = (obj: ModifyTargetGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTargetGroupOutputFilterSensitiveLog = (obj: ModifyTargetGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTargetGroupAttributesInputFilterSensitiveLog = (obj: ModifyTargetGroupAttributesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyTargetGroupAttributesOutputFilterSensitiveLog = (obj: ModifyTargetGroupAttributesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTargetsInputFilterSensitiveLog = (obj: RegisterTargetsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterTargetsOutputFilterSensitiveLog = (obj: RegisterTargetsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveListenerCertificatesInputFilterSensitiveLog = (obj: RemoveListenerCertificatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveListenerCertificatesOutputFilterSensitiveLog = (obj: RemoveListenerCertificatesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsInputFilterSensitiveLog = (obj: RemoveTagsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsOutputFilterSensitiveLog = (obj: RemoveTagsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetIpAddressTypeInputFilterSensitiveLog = (obj: SetIpAddressTypeInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetIpAddressTypeOutputFilterSensitiveLog = (obj: SetIpAddressTypeOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RulePriorityPairFilterSensitiveLog = (obj: RulePriorityPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetRulePrioritiesInputFilterSensitiveLog = (obj: SetRulePrioritiesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetRulePrioritiesOutputFilterSensitiveLog = (obj: SetRulePrioritiesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSecurityGroupsInputFilterSensitiveLog = (obj: SetSecurityGroupsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSecurityGroupsOutputFilterSensitiveLog = (obj: SetSecurityGroupsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSubnetsInputFilterSensitiveLog = (obj: SetSubnetsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSubnetsOutputFilterSensitiveLog = (obj: SetSubnetsOutput): any => ({
  ...obj,
});
