import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information about an action.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>[HTTPS listeners] Information for using Amazon Cognito to authenticate users.
   *       Specify only when <code>Type</code> is <code>authenticate-cognito</code>.</p>
   */
  AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;

  /**
   * <p>[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).
   *       Specify only when <code>Type</code> is <code>authenticate-oidc</code>.</p>
   */
  AuthenticateOidcConfig?: AuthenticateOidcActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating an action that returns a custom HTTP response.
   *       Specify only when <code>Type</code> is <code>fixed-response</code>.</p>
   */
  FixedResponseConfig?: FixedResponseActionConfig;

  /**
   * <p>Information for creating an action that distributes requests among one or more target groups.
   *       For Network Load Balancers, you can specify a single target group.
   *       Specify only when <code>Type</code> is <code>forward</code>.
   *       If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group
   *       using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.</p>
   */
  ForwardConfig?: ForwardActionConfig;

  /**
   * <p>The order for the action. This value is required for rules with multiple actions.
   *       The action with the lowest value for order is performed first. The last action to be
   *       performed must be one of the following types of actions: a <code>forward</code>,
   *       <code>fixed-response</code>, or <code>redirect</code>.</p>
   */
  Order?: number;

  /**
   * <p>[Application Load Balancer] Information for creating a redirect action.
   *       Specify only when <code>Type</code> is <code>redirect</code>.</p>
   */
  RedirectConfig?: RedirectActionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.
   *       Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group.
   *       To route to one or more target groups, use <code>ForwardConfig</code> instead.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The type of action.</p>
   */
  Type: ActionTypeEnum | string | undefined;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj
  });
  export const isa = (o: any): o is Action => __isa(o, "Action");
}

export enum ActionTypeEnum {
  AUTHENTICATE_COGNITO = "authenticate-cognito",
  AUTHENTICATE_OIDC = "authenticate-oidc",
  FIXED_RESPONSE = "fixed-response",
  FORWARD = "forward",
  REDIRECT = "redirect"
}

export interface AddListenerCertificatesInput {
  __type?: "AddListenerCertificatesInput";
  /**
   * <p>The certificate to add. You can specify one certificate per call.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   */
  Certificates: Certificate[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace AddListenerCertificatesInput {
  export const filterSensitiveLog = (
    obj: AddListenerCertificatesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddListenerCertificatesInput =>
    __isa(o, "AddListenerCertificatesInput");
}

export interface AddListenerCertificatesOutput {
  __type?: "AddListenerCertificatesOutput";
  /**
   * <p>Information about the certificates in the certificate list.</p>
   */
  Certificates?: Certificate[];
}

export namespace AddListenerCertificatesOutput {
  export const filterSensitiveLog = (
    obj: AddListenerCertificatesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddListenerCertificatesOutput =>
    __isa(o, "AddListenerCertificatesOutput");
}

export interface AddTagsInput {
  __type?: "AddTagsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>The tags. Each resource can have a maximum of 10 tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsInput {
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsInput => __isa(o, "AddTagsInput");
}

export interface AddTagsOutput {
  __type?: "AddTagsOutput";
}

export namespace AddTagsOutput {
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsOutput => __isa(o, "AddTagsOutput");
}

/**
 * <p>The specified allocation ID does not exist.</p>
 */
export interface AllocationIdNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AllocationIdNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AllocationIdNotFoundException {
  export const filterSensitiveLog = (
    obj: AllocationIdNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AllocationIdNotFoundException =>
    __isa(o, "AllocationIdNotFoundException");
}

export enum AuthenticateCognitoActionConditionalBehaviorEnum {
  ALLOW = "allow",
  AUTHENTICATE = "authenticate",
  DENY = "deny"
}

/**
 * <p>Request parameters to use when integrating with Amazon Cognito to authenticate users.</p>
 */
export interface AuthenticateCognitoActionConfig {
  __type?: "AuthenticateCognitoActionConfig";
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
  OnUnauthenticatedRequest?:
    | AuthenticateCognitoActionConditionalBehaviorEnum
    | string;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p>
   *          <p>To verify which scope values your IdP supports and how to separate multiple values,
   *         see the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>
   */
  SessionTimeout?: number;

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
}

export namespace AuthenticateCognitoActionConfig {
  export const filterSensitiveLog = (
    obj: AuthenticateCognitoActionConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthenticateCognitoActionConfig =>
    __isa(o, "AuthenticateCognitoActionConfig");
}

export enum AuthenticateOidcActionConditionalBehaviorEnum {
  ALLOW = "allow",
  AUTHENTICATE = "authenticate",
  DENY = "deny"
}

/**
 * <p>Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.</p>
 */
export interface AuthenticateOidcActionConfig {
  __type?: "AuthenticateOidcActionConfig";
  /**
   * <p>The query parameters (up to 10) to include in the redirect request to the authorization endpoint.</p>
   */
  AuthenticationRequestExtraParams?: { [key: string]: string };

  /**
   * <p>The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The OAuth 2.0 client identifier.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule,
   *         you can omit this parameter if you set <code>UseExistingClientSecret</code> to true.</p>
   */
  ClientSecret?: string;

  /**
   * <p>The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  Issuer: string | undefined;

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
  OnUnauthenticatedRequest?:
    | AuthenticateOidcActionConditionalBehaviorEnum
    | string;

  /**
   * <p>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</p>
   *          <p>To verify which scope values your IdP supports and how to separate multiple values,
   *       see the documentation for your IdP.</p>
   */
  Scope?: string;

  /**
   * <p>The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.</p>
   */
  SessionCookieName?: string;

  /**
   * <p>The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).</p>
   */
  SessionTimeout?: number;

  /**
   * <p>The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule,
   *         you can omit this parameter or set it to false.</p>
   */
  UseExistingClientSecret?: boolean;

  /**
   * <p>The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.</p>
   */
  UserInfoEndpoint: string | undefined;
}

export namespace AuthenticateOidcActionConfig {
  export const filterSensitiveLog = (
    obj: AuthenticateOidcActionConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthenticateOidcActionConfig =>
    __isa(o, "AuthenticateOidcActionConfig");
}

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
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
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

/**
 * <p>The specified Availability Zone is not supported.</p>
 */
export interface AvailabilityZoneNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AvailabilityZoneNotSupportedException";
  $fault: "client";
  Message?: string;
}

export namespace AvailabilityZoneNotSupportedException {
  export const filterSensitiveLog = (
    obj: AvailabilityZoneNotSupportedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZoneNotSupportedException =>
    __isa(o, "AvailabilityZoneNotSupportedException");
}

/**
 * <p>Information about an SSL server certificate.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>Indicates whether the certificate is the default certificate. Do not set this value
   *         when specifying a certificate as an input. This value is not included in the output
   *         when describing a listener, but is included when describing listener certificates.</p>
   */
  IsDefault?: boolean;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
}

/**
 * <p>The specified certificate does not exist.</p>
 */
export interface CertificateNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace CertificateNotFoundException {
  export const filterSensitiveLog = (
    obj: CertificateNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateNotFoundException =>
    __isa(o, "CertificateNotFoundException");
}

/**
 * <p>Information about a cipher used in a policy.</p>
 */
export interface Cipher {
  __type?: "Cipher";
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
    ...obj
  });
  export const isa = (o: any): o is Cipher => __isa(o, "Cipher");
}

export interface CreateListenerInput {
  __type?: "CreateListenerInput";
  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   *          <p>To create a certificate list for the listener, use <a>AddListenerCertificates</a>.</p>
   */
  Certificates?: Certificate[];

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
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  Port: number | undefined;

  /**
   * <p>The protocol for connections from clients to the load balancer. For Application Load
   *       Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the
   *       supported protocols are TCP, TLS, UDP, and TCP_UDP.</p>
   */
  Protocol: ProtocolEnum | string | undefined;

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which ciphers and protocols are
   *       supported. The default is the current predefined security policy.</p>
   */
  SslPolicy?: string;
}

export namespace CreateListenerInput {
  export const filterSensitiveLog = (obj: CreateListenerInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateListenerInput =>
    __isa(o, "CreateListenerInput");
}

export interface CreateListenerOutput {
  __type?: "CreateListenerOutput";
  /**
   * <p>Information about the listener.</p>
   */
  Listeners?: Listener[];
}

export namespace CreateListenerOutput {
  export const filterSensitiveLog = (obj: CreateListenerOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateListenerOutput =>
    __isa(o, "CreateListenerOutput");
}

export interface CreateLoadBalancerInput {
  __type?: "CreateLoadBalancerInput";
  /**
   * <p>[Application Load Balancers] The type of IP addresses used by the subnets for your load
   *       balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and
   *         <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use
   *         <code>ipv4</code>.</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The name of the load balancer.</p>
   *          <p>This name must be unique per region per account, can have a maximum of 32 characters,
   *       must contain only alphanumeric characters or hyphens, must not begin or end with a
   *       hyphen, and must not begin with "internal-".</p>
   */
  Name: string | undefined;

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
   * <p>[Application Load Balancers] The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

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
   * <p>The IDs of the public subnets. You can specify only one subnet per Availability Zone.
   *       You must specify either subnets or subnet mappings.</p>
   *          <p>[Application Load Balancers] You must specify subnets from at least two Availability
   *       Zones.</p>
   *          <p>[Network Load Balancers] You can specify subnets from one or more Availability
   *       Zones.</p>
   */
  Subnets?: string[];

  /**
   * <p>One or more tags to assign to the load balancer.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The type of load balancer. The default is <code>application</code>.</p>
   */
  Type?: LoadBalancerTypeEnum | string;
}

export namespace CreateLoadBalancerInput {
  export const filterSensitiveLog = (obj: CreateLoadBalancerInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLoadBalancerInput =>
    __isa(o, "CreateLoadBalancerInput");
}

export interface CreateLoadBalancerOutput {
  __type?: "CreateLoadBalancerOutput";
  /**
   * <p>Information about the load balancer.</p>
   */
  LoadBalancers?: LoadBalancer[];
}

export namespace CreateLoadBalancerOutput {
  export const filterSensitiveLog = (obj: CreateLoadBalancerOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLoadBalancerOutput =>
    __isa(o, "CreateLoadBalancerOutput");
}

export interface CreateRuleInput {
  __type?: "CreateRuleInput";
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
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The rule priority. A listener can't have multiple rules with the same priority.</p>
   */
  Priority: number | undefined;
}

export namespace CreateRuleInput {
  export const filterSensitiveLog = (obj: CreateRuleInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleInput =>
    __isa(o, "CreateRuleInput");
}

export interface CreateRuleOutput {
  __type?: "CreateRuleOutput";
  /**
   * <p>Information about the rule.</p>
   */
  Rules?: Rule[];
}

export namespace CreateRuleOutput {
  export const filterSensitiveLog = (obj: CreateRuleOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRuleOutput =>
    __isa(o, "CreateRuleOutput");
}

export interface CreateTargetGroupInput {
  __type?: "CreateTargetGroupInput";
  /**
   * <p>Indicates whether health checks are enabled. If the target type is <code>lambda</code>,
   *       health checks are disabled by default but can be enabled. If the target type is <code>instance</code>
   *       or <code>ip</code>, health checks are always enabled and cannot be disabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual target.
   *       For HTTP and HTTPS health checks, the range is 5–300 seconds.
   *       For TCP health checks, the supported values are 10 and 30 seconds.
   *       If the target type is <code>instance</code> or <code>ip</code>, the default is 30 seconds.
   *       If the target type is <code>lambda</code>, the default is 35 seconds.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The ping path that is the destination on the targets for
   *       health checks. The default is /.</p>
   */
  HealthCheckPath?: string;

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
   * <p>The amount of time, in seconds, during which no response from a target means a failed health check.
   *       For target groups with a protocol of HTTP or HTTPS, the default is 5 seconds.
   *       For target groups with a protocol of TCP or TLS, this value must be 6 seconds for HTTP health checks
   *          and 10 seconds for TCP and HTTPS health checks.
   *       If the target type is <code>lambda</code>, the default is 30 seconds.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an unhealthy target healthy.
   *       For target groups with a protocol of HTTP or HTTPS, the default is 5.
   *       For target groups with a protocol of TCP or TLS, the default is 3.
   *       If the target type is <code>lambda</code>, the default is 5.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The name of the target group.</p>
   *          <p>This name must be unique per region per account, can have a maximum of 32 characters,
   *       must contain only alphanumeric characters or hyphens, and must not begin or end with a
   *       hyphen.</p>
   */
  Name: string | undefined;

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
   * <p>The identifier of the virtual private cloud (VPC). If the target is a Lambda function,
   *       this parameter does not apply. Otherwise, this parameter is required.</p>
   */
  VpcId?: string;
}

export namespace CreateTargetGroupInput {
  export const filterSensitiveLog = (obj: CreateTargetGroupInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTargetGroupInput =>
    __isa(o, "CreateTargetGroupInput");
}

export interface CreateTargetGroupOutput {
  __type?: "CreateTargetGroupOutput";
  /**
   * <p>Information about the target group.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace CreateTargetGroupOutput {
  export const filterSensitiveLog = (obj: CreateTargetGroupOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTargetGroupOutput =>
    __isa(o, "CreateTargetGroupOutput");
}

export interface DeleteListenerInput {
  __type?: "DeleteListenerInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;
}

export namespace DeleteListenerInput {
  export const filterSensitiveLog = (obj: DeleteListenerInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteListenerInput =>
    __isa(o, "DeleteListenerInput");
}

export interface DeleteListenerOutput {
  __type?: "DeleteListenerOutput";
}

export namespace DeleteListenerOutput {
  export const filterSensitiveLog = (obj: DeleteListenerOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteListenerOutput =>
    __isa(o, "DeleteListenerOutput");
}

export interface DeleteLoadBalancerInput {
  __type?: "DeleteLoadBalancerInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export namespace DeleteLoadBalancerInput {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLoadBalancerInput =>
    __isa(o, "DeleteLoadBalancerInput");
}

export interface DeleteLoadBalancerOutput {
  __type?: "DeleteLoadBalancerOutput";
}

export namespace DeleteLoadBalancerOutput {
  export const filterSensitiveLog = (obj: DeleteLoadBalancerOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLoadBalancerOutput =>
    __isa(o, "DeleteLoadBalancerOutput");
}

export interface DeleteRuleInput {
  __type?: "DeleteRuleInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;
}

export namespace DeleteRuleInput {
  export const filterSensitiveLog = (obj: DeleteRuleInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleInput =>
    __isa(o, "DeleteRuleInput");
}

export interface DeleteRuleOutput {
  __type?: "DeleteRuleOutput";
}

export namespace DeleteRuleOutput {
  export const filterSensitiveLog = (obj: DeleteRuleOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRuleOutput =>
    __isa(o, "DeleteRuleOutput");
}

export interface DeleteTargetGroupInput {
  __type?: "DeleteTargetGroupInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace DeleteTargetGroupInput {
  export const filterSensitiveLog = (obj: DeleteTargetGroupInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTargetGroupInput =>
    __isa(o, "DeleteTargetGroupInput");
}

export interface DeleteTargetGroupOutput {
  __type?: "DeleteTargetGroupOutput";
}

export namespace DeleteTargetGroupOutput {
  export const filterSensitiveLog = (obj: DeleteTargetGroupOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTargetGroupOutput =>
    __isa(o, "DeleteTargetGroupOutput");
}

export interface DeregisterTargetsInput {
  __type?: "DeregisterTargetsInput";
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

export namespace DeregisterTargetsInput {
  export const filterSensitiveLog = (obj: DeregisterTargetsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterTargetsInput =>
    __isa(o, "DeregisterTargetsInput");
}

export interface DeregisterTargetsOutput {
  __type?: "DeregisterTargetsOutput";
}

export namespace DeregisterTargetsOutput {
  export const filterSensitiveLog = (obj: DeregisterTargetsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterTargetsOutput =>
    __isa(o, "DeregisterTargetsOutput");
}

export interface DescribeAccountLimitsInput {
  __type?: "DescribeAccountLimitsInput";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountLimitsInput =>
    __isa(o, "DescribeAccountLimitsInput");
}

export interface DescribeAccountLimitsOutput {
  __type?: "DescribeAccountLimitsOutput";
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
  export const filterSensitiveLog = (
    obj: DescribeAccountLimitsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountLimitsOutput =>
    __isa(o, "DescribeAccountLimitsOutput");
}

export interface DescribeListenerCertificatesInput {
  __type?: "DescribeListenerCertificatesInput";
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

export namespace DescribeListenerCertificatesInput {
  export const filterSensitiveLog = (
    obj: DescribeListenerCertificatesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeListenerCertificatesInput =>
    __isa(o, "DescribeListenerCertificatesInput");
}

export interface DescribeListenerCertificatesOutput {
  __type?: "DescribeListenerCertificatesOutput";
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
  export const filterSensitiveLog = (
    obj: DescribeListenerCertificatesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeListenerCertificatesOutput =>
    __isa(o, "DescribeListenerCertificatesOutput");
}

export interface DescribeListenersInput {
  __type?: "DescribeListenersInput";
  /**
   * <p>The Amazon Resource Names (ARN) of the listeners.</p>
   */
  ListenerArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

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

export namespace DescribeListenersInput {
  export const filterSensitiveLog = (obj: DescribeListenersInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeListenersInput =>
    __isa(o, "DescribeListenersInput");
}

export interface DescribeListenersOutput {
  __type?: "DescribeListenersOutput";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeListenersOutput =>
    __isa(o, "DescribeListenersOutput");
}

export interface DescribeLoadBalancerAttributesInput {
  __type?: "DescribeLoadBalancerAttributesInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export namespace DescribeLoadBalancerAttributesInput {
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancerAttributesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancerAttributesInput =>
    __isa(o, "DescribeLoadBalancerAttributesInput");
}

export interface DescribeLoadBalancerAttributesOutput {
  __type?: "DescribeLoadBalancerAttributesOutput";
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: LoadBalancerAttribute[];
}

export namespace DescribeLoadBalancerAttributesOutput {
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancerAttributesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancerAttributesOutput =>
    __isa(o, "DescribeLoadBalancerAttributesOutput");
}

export interface DescribeLoadBalancersInput {
  __type?: "DescribeLoadBalancersInput";
  /**
   * <p>The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load
   *       balancers in a single call.</p>
   */
  LoadBalancerArns?: string[];

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The names of the load balancers.</p>
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;
}

export namespace DescribeLoadBalancersInput {
  export const filterSensitiveLog = (obj: DescribeLoadBalancersInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancersInput =>
    __isa(o, "DescribeLoadBalancersInput");
}

export interface DescribeLoadBalancersOutput {
  __type?: "DescribeLoadBalancersOutput";
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
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancersOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancersOutput =>
    __isa(o, "DescribeLoadBalancersOutput");
}

export interface DescribeRulesInput {
  __type?: "DescribeRulesInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

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
}

export namespace DescribeRulesInput {
  export const filterSensitiveLog = (obj: DescribeRulesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRulesInput =>
    __isa(o, "DescribeRulesInput");
}

export interface DescribeRulesOutput {
  __type?: "DescribeRulesOutput";
  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Rule[];
}

export namespace DescribeRulesOutput {
  export const filterSensitiveLog = (obj: DescribeRulesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRulesOutput =>
    __isa(o, "DescribeRulesOutput");
}

export interface DescribeSSLPoliciesInput {
  __type?: "DescribeSSLPoliciesInput";
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *       call.)</p>
   */
  Marker?: string;

  /**
   * <p>The names of the policies.</p>
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;
}

export namespace DescribeSSLPoliciesInput {
  export const filterSensitiveLog = (obj: DescribeSSLPoliciesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSSLPoliciesInput =>
    __isa(o, "DescribeSSLPoliciesInput");
}

export interface DescribeSSLPoliciesOutput {
  __type?: "DescribeSSLPoliciesOutput";
  /**
   * <p>If there are additional results, this is the marker for the next set of results.
   *       Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * <p>Information about the policies.</p>
   */
  SslPolicies?: SslPolicy[];
}

export namespace DescribeSSLPoliciesOutput {
  export const filterSensitiveLog = (obj: DescribeSSLPoliciesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSSLPoliciesOutput =>
    __isa(o, "DescribeSSLPoliciesOutput");
}

export interface DescribeTagsInput {
  __type?: "DescribeTagsInput";
  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  ResourceArns: string[] | undefined;
}

export namespace DescribeTagsInput {
  export const filterSensitiveLog = (obj: DescribeTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsInput =>
    __isa(o, "DescribeTagsInput");
}

export interface DescribeTagsOutput {
  __type?: "DescribeTagsOutput";
  /**
   * <p>Information about the tags.</p>
   */
  TagDescriptions?: TagDescription[];
}

export namespace DescribeTagsOutput {
  export const filterSensitiveLog = (obj: DescribeTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsOutput =>
    __isa(o, "DescribeTagsOutput");
}

export interface DescribeTargetGroupAttributesInput {
  __type?: "DescribeTargetGroupAttributesInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace DescribeTargetGroupAttributesInput {
  export const filterSensitiveLog = (
    obj: DescribeTargetGroupAttributesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTargetGroupAttributesInput =>
    __isa(o, "DescribeTargetGroupAttributesInput");
}

export interface DescribeTargetGroupAttributesOutput {
  __type?: "DescribeTargetGroupAttributesOutput";
  /**
   * <p>Information about the target group attributes</p>
   */
  Attributes?: TargetGroupAttribute[];
}

export namespace DescribeTargetGroupAttributesOutput {
  export const filterSensitiveLog = (
    obj: DescribeTargetGroupAttributesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTargetGroupAttributesOutput =>
    __isa(o, "DescribeTargetGroupAttributesOutput");
}

export interface DescribeTargetGroupsInput {
  __type?: "DescribeTargetGroupsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

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
    ...obj
  });
  export const isa = (o: any): o is DescribeTargetGroupsInput =>
    __isa(o, "DescribeTargetGroupsInput");
}

export interface DescribeTargetGroupsOutput {
  __type?: "DescribeTargetGroupsOutput";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeTargetGroupsOutput =>
    __isa(o, "DescribeTargetGroupsOutput");
}

export interface DescribeTargetHealthInput {
  __type?: "DescribeTargetHealthInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The targets.</p>
   */
  Targets?: TargetDescription[];
}

export namespace DescribeTargetHealthInput {
  export const filterSensitiveLog = (obj: DescribeTargetHealthInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTargetHealthInput =>
    __isa(o, "DescribeTargetHealthInput");
}

export interface DescribeTargetHealthOutput {
  __type?: "DescribeTargetHealthOutput";
  /**
   * <p>Information about the health of the targets.</p>
   */
  TargetHealthDescriptions?: TargetHealthDescription[];
}

export namespace DescribeTargetHealthOutput {
  export const filterSensitiveLog = (obj: DescribeTargetHealthOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTargetHealthOutput =>
    __isa(o, "DescribeTargetHealthOutput");
}

/**
 * <p>A listener with the specified port already exists.</p>
 */
export interface DuplicateListenerException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateListenerException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateListenerException {
  export const filterSensitiveLog = (obj: DuplicateListenerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateListenerException =>
    __isa(o, "DuplicateListenerException");
}

/**
 * <p>A load balancer with the specified name already exists.</p>
 */
export interface DuplicateLoadBalancerNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateLoadBalancerNameException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateLoadBalancerNameException {
  export const filterSensitiveLog = (
    obj: DuplicateLoadBalancerNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateLoadBalancerNameException =>
    __isa(o, "DuplicateLoadBalancerNameException");
}

/**
 * <p>A tag key was specified more than once.</p>
 */
export interface DuplicateTagKeysException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateTagKeysException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateTagKeysException {
  export const filterSensitiveLog = (obj: DuplicateTagKeysException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateTagKeysException =>
    __isa(o, "DuplicateTagKeysException");
}

/**
 * <p>A target group with the specified name already exists.</p>
 */
export interface DuplicateTargetGroupNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateTargetGroupNameException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateTargetGroupNameException {
  export const filterSensitiveLog = (
    obj: DuplicateTargetGroupNameException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateTargetGroupNameException =>
    __isa(o, "DuplicateTargetGroupNameException");
}

/**
 * <p>Information about an action that returns a custom HTTP response.</p>
 */
export interface FixedResponseActionConfig {
  __type?: "FixedResponseActionConfig";
  /**
   * <p>The content type.</p>
   *          <p>Valid Values: text/plain | text/css | text/html | application/javascript | application/json</p>
   */
  ContentType?: string;

  /**
   * <p>The message.</p>
   */
  MessageBody?: string;

  /**
   * <p>The HTTP response code (2XX, 4XX, or 5XX).</p>
   */
  StatusCode: string | undefined;
}

export namespace FixedResponseActionConfig {
  export const filterSensitiveLog = (obj: FixedResponseActionConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is FixedResponseActionConfig =>
    __isa(o, "FixedResponseActionConfig");
}

/**
 * <p>Information about a forward action.</p>
 */
export interface ForwardActionConfig {
  __type?: "ForwardActionConfig";
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
    ...obj
  });
  export const isa = (o: any): o is ForwardActionConfig =>
    __isa(o, "ForwardActionConfig");
}

/**
 * <p>The health of the specified targets could not be retrieved due to an internal
 *       error.</p>
 */
export interface HealthUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "HealthUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace HealthUnavailableException {
  export const filterSensitiveLog = (obj: HealthUnavailableException): any => ({
    ...obj
  });
  export const isa = (o: any): o is HealthUnavailableException =>
    __isa(o, "HealthUnavailableException");
}

/**
 * <p>Information about a host header condition.</p>
 */
export interface HostHeaderConditionConfig {
  __type?: "HostHeaderConditionConfig";
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
    ...obj
  });
  export const isa = (o: any): o is HostHeaderConditionConfig =>
    __isa(o, "HostHeaderConditionConfig");
}

/**
 * <p>Information about an HTTP header condition.</p>
 *          <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
 */
export interface HttpHeaderConditionConfig {
  __type?: "HttpHeaderConditionConfig";
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
    ...obj
  });
  export const isa = (o: any): o is HttpHeaderConditionConfig =>
    __isa(o, "HttpHeaderConditionConfig");
}

/**
 * <p>Information about an HTTP method condition.</p>
 *          <p>HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the
 *       <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">HTTP Method Registry</a>.
 *       You can also define custom HTTP methods.</p>
 */
export interface HttpRequestMethodConditionConfig {
  __type?: "HttpRequestMethodConditionConfig";
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
  export const filterSensitiveLog = (
    obj: HttpRequestMethodConditionConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpRequestMethodConditionConfig =>
    __isa(o, "HttpRequestMethodConditionConfig");
}

/**
 * <p>The specified configuration is not valid with this protocol.</p>
 */
export interface IncompatibleProtocolsException
  extends __SmithyException,
    $MetadataBearer {
  name: "IncompatibleProtocolsException";
  $fault: "client";
  Message?: string;
}

export namespace IncompatibleProtocolsException {
  export const filterSensitiveLog = (
    obj: IncompatibleProtocolsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IncompatibleProtocolsException =>
    __isa(o, "IncompatibleProtocolsException");
}

/**
 * <p>The requested configuration is not valid.</p>
 */
export interface InvalidConfigurationRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidConfigurationRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidConfigurationRequestException {
  export const filterSensitiveLog = (
    obj: InvalidConfigurationRequestException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidConfigurationRequestException =>
    __isa(o, "InvalidConfigurationRequestException");
}

/**
 * <p>The requested action is not valid.</p>
 */
export interface InvalidLoadBalancerActionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidLoadBalancerActionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidLoadBalancerActionException {
  export const filterSensitiveLog = (
    obj: InvalidLoadBalancerActionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidLoadBalancerActionException =>
    __isa(o, "InvalidLoadBalancerActionException");
}

/**
 * <p>The requested scheme is not valid.</p>
 */
export interface InvalidSchemeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSchemeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSchemeException {
  export const filterSensitiveLog = (obj: InvalidSchemeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSchemeException =>
    __isa(o, "InvalidSchemeException");
}

/**
 * <p>The specified security group does not exist.</p>
 */
export interface InvalidSecurityGroupException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSecurityGroupException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSecurityGroupException {
  export const filterSensitiveLog = (
    obj: InvalidSecurityGroupException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSecurityGroupException =>
    __isa(o, "InvalidSecurityGroupException");
}

/**
 * <p>The specified subnet is out of available addresses.</p>
 */
export interface InvalidSubnetException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSubnetException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSubnetException {
  export const filterSensitiveLog = (obj: InvalidSubnetException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSubnetException =>
    __isa(o, "InvalidSubnetException");
}

/**
 * <p>The specified target does not exist, is not in the same VPC as the target group, or has
 *       an unsupported instance type.</p>
 */
export interface InvalidTargetException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTargetException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTargetException {
  export const filterSensitiveLog = (obj: InvalidTargetException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTargetException =>
    __isa(o, "InvalidTargetException");
}

export enum IpAddressType {
  DUALSTACK = "dualstack",
  IPV4 = "ipv4"
}

/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS
 *       account.</p>
 */
export interface Limit {
  __type?: "Limit";
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
    ...obj
  });
  export const isa = (o: any): o is Limit => __isa(o, "Limit");
}

/**
 * <p>Information about a listener.</p>
 */
export interface Listener {
  __type?: "Listener";
  /**
   * <p>[HTTPS or TLS listener] The default certificate for the listener.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>The default actions for the listener.</p>
   */
  DefaultActions?: Action[];

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
   * <p>[HTTPS or TLS listener] The security policy that defines which ciphers and protocols are supported.
   *       The default is the current predefined security policy.</p>
   */
  SslPolicy?: string;
}

export namespace Listener {
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj
  });
  export const isa = (o: any): o is Listener => __isa(o, "Listener");
}

/**
 * <p>The specified listener does not exist.</p>
 */
export interface ListenerNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ListenerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ListenerNotFoundException {
  export const filterSensitiveLog = (obj: ListenerNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListenerNotFoundException =>
    __isa(o, "ListenerNotFoundException");
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface LoadBalancer {
  __type?: "LoadBalancer";
  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible
   *       values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and
   *       IPv6 addresses).</p>
   */
  IpAddressType?: IpAddressType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

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
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: LoadBalancerTypeEnum | string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

export namespace LoadBalancer {
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancer => __isa(o, "LoadBalancer");
}

/**
 * <p>Information about a static IP address for a load balancer.</p>
 */
export interface LoadBalancerAddress {
  __type?: "LoadBalancerAddress";
  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address for an internal-facing load balancer.</p>
   */
  AllocationId?: string;

  /**
   * <p>The static IP address.</p>
   */
  IpAddress?: string;

  /**
   * <p>[Network Load Balancers] The private IPv4 address for an internal load balancer.</p>
   */
  PrivateIPv4Address?: string;
}

export namespace LoadBalancerAddress {
  export const filterSensitiveLog = (obj: LoadBalancerAddress): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerAddress =>
    __isa(o, "LoadBalancerAddress");
}

/**
 * <p>Information about a load balancer attribute.</p>
 */
export interface LoadBalancerAttribute {
  __type?: "LoadBalancerAttribute";
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
   *                   <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>true</code>.</p>
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
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerAttribute =>
    __isa(o, "LoadBalancerAttribute");
}

/**
 * <p>The specified load balancer does not exist.</p>
 */
export interface LoadBalancerNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "LoadBalancerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace LoadBalancerNotFoundException {
  export const filterSensitiveLog = (
    obj: LoadBalancerNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerNotFoundException =>
    __isa(o, "LoadBalancerNotFoundException");
}

export enum LoadBalancerSchemeEnum {
  INTERNAL = "internal",
  INTERNET_FACING = "internet-facing"
}

/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  __type?: "LoadBalancerState";
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
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerState =>
    __isa(o, "LoadBalancerState");
}

export enum LoadBalancerStateEnum {
  ACTIVE = "active",
  ACTIVE_IMPAIRED = "active_impaired",
  FAILED = "failed",
  PROVISIONING = "provisioning"
}

export enum LoadBalancerTypeEnum {
  APPLICATION = "application",
  NETWORK = "network"
}

/**
 * <p>Information to use when checking for a successful response from a target.</p>
 */
export interface Matcher {
  __type?: "Matcher";
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
    ...obj
  });
  export const isa = (o: any): o is Matcher => __isa(o, "Matcher");
}

export interface ModifyListenerInput {
  __type?: "ModifyListenerInput";
  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate.
   *       Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p>
   *          <p>To create a certificate list, use <a>AddListenerCertificates</a>.</p>
   */
  Certificates?: Certificate[];

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
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn: string | undefined;

  /**
   * <p>The port for connections from clients to the load balancer.</p>
   */
  Port?: number;

  /**
   * <p>The protocol for connections from clients to the load balancer. Application Load
   *       Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the
   *       TCP, TLS, UDP, and TCP_UDP protocols.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers
   *       Guide</i>.</p>
   */
  SslPolicy?: string;
}

export namespace ModifyListenerInput {
  export const filterSensitiveLog = (obj: ModifyListenerInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyListenerInput =>
    __isa(o, "ModifyListenerInput");
}

export interface ModifyListenerOutput {
  __type?: "ModifyListenerOutput";
  /**
   * <p>Information about the modified listener.</p>
   */
  Listeners?: Listener[];
}

export namespace ModifyListenerOutput {
  export const filterSensitiveLog = (obj: ModifyListenerOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyListenerOutput =>
    __isa(o, "ModifyListenerOutput");
}

export interface ModifyLoadBalancerAttributesInput {
  __type?: "ModifyLoadBalancerAttributesInput";
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
  export const filterSensitiveLog = (
    obj: ModifyLoadBalancerAttributesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyLoadBalancerAttributesInput =>
    __isa(o, "ModifyLoadBalancerAttributesInput");
}

export interface ModifyLoadBalancerAttributesOutput {
  __type?: "ModifyLoadBalancerAttributesOutput";
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  Attributes?: LoadBalancerAttribute[];
}

export namespace ModifyLoadBalancerAttributesOutput {
  export const filterSensitiveLog = (
    obj: ModifyLoadBalancerAttributesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyLoadBalancerAttributesOutput =>
    __isa(o, "ModifyLoadBalancerAttributesOutput");
}

export interface ModifyRuleInput {
  __type?: "ModifyRuleInput";
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

  /**
   * <p>The conditions. Each rule can include zero or one of the following conditions:
   *       <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>,
   *       and <code>source-ip</code>, and zero or more of the following conditions:
   *       <code>http-header</code> and <code>query-string</code>.</p>
   */
  Conditions?: RuleCondition[];

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;
}

export namespace ModifyRuleInput {
  export const filterSensitiveLog = (obj: ModifyRuleInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyRuleInput =>
    __isa(o, "ModifyRuleInput");
}

export interface ModifyRuleOutput {
  __type?: "ModifyRuleOutput";
  /**
   * <p>Information about the modified rule.</p>
   */
  Rules?: Rule[];
}

export namespace ModifyRuleOutput {
  export const filterSensitiveLog = (obj: ModifyRuleOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyRuleOutput =>
    __isa(o, "ModifyRuleOutput");
}

export interface ModifyTargetGroupAttributesInput {
  __type?: "ModifyTargetGroupAttributesInput";
  /**
   * <p>The attributes.</p>
   */
  Attributes: TargetGroupAttribute[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;
}

export namespace ModifyTargetGroupAttributesInput {
  export const filterSensitiveLog = (
    obj: ModifyTargetGroupAttributesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyTargetGroupAttributesInput =>
    __isa(o, "ModifyTargetGroupAttributesInput");
}

export interface ModifyTargetGroupAttributesOutput {
  __type?: "ModifyTargetGroupAttributesOutput";
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: TargetGroupAttribute[];
}

export namespace ModifyTargetGroupAttributesOutput {
  export const filterSensitiveLog = (
    obj: ModifyTargetGroupAttributesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyTargetGroupAttributesOutput =>
    __isa(o, "ModifyTargetGroupAttributesOutput");
}

export interface ModifyTargetGroupInput {
  __type?: "ModifyTargetGroupInput";
  /**
   * <p>Indicates whether health checks are enabled.</p>
   */
  HealthCheckEnabled?: boolean;

  /**
   * <p>The approximate amount of time, in seconds, between health checks of an individual
   *       target. For Application Load Balancers, the range is 5 to 300 seconds. For Network Load
   *       Balancers, the supported values are 10 or 30 seconds.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  HealthCheckIntervalSeconds?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The ping path that is the destination for the health check
   *       request.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The port the load balancer uses when performing health checks on targets.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The protocol the load balancer uses when performing health checks on targets.
   *       The TCP protocol is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP.
   *       The TLS, UDP, and TCP_UDP protocols are not supported for health checks.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

  /**
   * <p>[HTTP/HTTPS health checks] The amount of time, in seconds, during which no response
   *       means a failed health check.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  HealthCheckTimeoutSeconds?: number;

  /**
   * <p>The number of consecutive health checks successes required before considering an
   *       unhealthy target healthy.</p>
   */
  HealthyThresholdCount?: number;

  /**
   * <p>[HTTP/HTTPS health checks] The HTTP codes to use when checking for a successful
   *       response from a target.</p>
   *          <p>With Network Load Balancers, you can't modify this setting.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The number of consecutive health check failures required before considering the target
   *       unhealthy. For Network Load Balancers, this value must be the same as the healthy threshold
   *       count.</p>
   */
  UnhealthyThresholdCount?: number;
}

export namespace ModifyTargetGroupInput {
  export const filterSensitiveLog = (obj: ModifyTargetGroupInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyTargetGroupInput =>
    __isa(o, "ModifyTargetGroupInput");
}

export interface ModifyTargetGroupOutput {
  __type?: "ModifyTargetGroupOutput";
  /**
   * <p>Information about the modified target group.</p>
   */
  TargetGroups?: TargetGroup[];
}

export namespace ModifyTargetGroupOutput {
  export const filterSensitiveLog = (obj: ModifyTargetGroupOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyTargetGroupOutput =>
    __isa(o, "ModifyTargetGroupOutput");
}

/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotPermittedException {
  export const filterSensitiveLog = (
    obj: OperationNotPermittedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationNotPermittedException =>
    __isa(o, "OperationNotPermittedException");
}

/**
 * <p>Information about a path pattern condition.</p>
 */
export interface PathPatternConditionConfig {
  __type?: "PathPatternConditionConfig";
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
    ...obj
  });
  export const isa = (o: any): o is PathPatternConditionConfig =>
    __isa(o, "PathPatternConditionConfig");
}

/**
 * <p>The specified priority is in use.</p>
 */
export interface PriorityInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "PriorityInUseException";
  $fault: "client";
  Message?: string;
}

export namespace PriorityInUseException {
  export const filterSensitiveLog = (obj: PriorityInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PriorityInUseException =>
    __isa(o, "PriorityInUseException");
}

export type ProtocolEnum = "HTTP" | "HTTPS" | "TCP" | "TCP_UDP" | "TLS" | "UDP";

/**
 * <p>Information about a query string condition.</p>
 *          <p>The query string component of a URI starts after the first '?' character and is terminated
 *        by either a '#' character or the end of the URI. A typical query string contains key/value pairs
 *        separated by '&' characters. The allowed characters are specified by RFC 3986. Any character
 *        can be percentage encoded.</p>
 */
export interface QueryStringConditionConfig {
  __type?: "QueryStringConditionConfig";
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
    ...obj
  });
  export const isa = (o: any): o is QueryStringConditionConfig =>
    __isa(o, "QueryStringConditionConfig");
}

/**
 * <p>Information about a key/value pair.</p>
 */
export interface QueryStringKeyValuePair {
  __type?: "QueryStringKeyValuePair";
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
    ...obj
  });
  export const isa = (o: any): o is QueryStringKeyValuePair =>
    __isa(o, "QueryStringKeyValuePair");
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
  __type?: "RedirectActionConfig";
  /**
   * <p>The hostname. This component is not percent-encoded. The hostname can contain #{host}.</p>
   */
  Host?: string;

  /**
   * <p>The absolute path, starting with the leading "/". This component is not percent-encoded.
   *       The path can contain #{host}, #{path}, and #{port}.</p>
   */
  Path?: string;

  /**
   * <p>The port. You can specify a value from 1 to 65535 or #{port}.</p>
   */
  Port?: string;

  /**
   * <p>The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP,
   *       HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.</p>
   */
  Protocol?: string;

  /**
   * <p>The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include
   *       the leading "?", as it is automatically added. You can specify any of the reserved
   *       keywords.</p>
   */
  Query?: string;

  /**
   * <p>The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).</p>
   */
  StatusCode: RedirectActionStatusCodeEnum | string | undefined;
}

export namespace RedirectActionConfig {
  export const filterSensitiveLog = (obj: RedirectActionConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedirectActionConfig =>
    __isa(o, "RedirectActionConfig");
}

export enum RedirectActionStatusCodeEnum {
  HTTP_301 = "HTTP_301",
  HTTP_302 = "HTTP_302"
}

export interface RegisterTargetsInput {
  __type?: "RegisterTargetsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string | undefined;

  /**
   * <p>The targets.</p>
   *          <p>To register a target by instance ID, specify the instance ID.
   *       To register a target by IP address, specify the IP address.
   *       To register a Lambda function, specify the ARN of the Lambda function.</p>
   */
  Targets: TargetDescription[] | undefined;
}

export namespace RegisterTargetsInput {
  export const filterSensitiveLog = (obj: RegisterTargetsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterTargetsInput =>
    __isa(o, "RegisterTargetsInput");
}

export interface RegisterTargetsOutput {
  __type?: "RegisterTargetsOutput";
}

export namespace RegisterTargetsOutput {
  export const filterSensitiveLog = (obj: RegisterTargetsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterTargetsOutput =>
    __isa(o, "RegisterTargetsOutput");
}

export interface RemoveListenerCertificatesInput {
  __type?: "RemoveListenerCertificatesInput";
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
  export const filterSensitiveLog = (
    obj: RemoveListenerCertificatesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveListenerCertificatesInput =>
    __isa(o, "RemoveListenerCertificatesInput");
}

export interface RemoveListenerCertificatesOutput {
  __type?: "RemoveListenerCertificatesOutput";
}

export namespace RemoveListenerCertificatesOutput {
  export const filterSensitiveLog = (
    obj: RemoveListenerCertificatesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveListenerCertificatesOutput =>
    __isa(o, "RemoveListenerCertificatesOutput");
}

export interface RemoveTagsInput {
  __type?: "RemoveTagsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArns: string[] | undefined;

  /**
   * <p>The tag keys for the tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsInput {
  export const filterSensitiveLog = (obj: RemoveTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsInput =>
    __isa(o, "RemoveTagsInput");
}

export interface RemoveTagsOutput {
  __type?: "RemoveTagsOutput";
}

export namespace RemoveTagsOutput {
  export const filterSensitiveLog = (obj: RemoveTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsOutput =>
    __isa(o, "RemoveTagsOutput");
}

/**
 * <p>A specified resource is in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>Information about a rule.</p>
 */
export interface Rule {
  __type?: "Rule";
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

  /**
   * <p>Indicates whether this is the default rule.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The priority.</p>
   */
  Priority?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

export namespace Rule {
  export const filterSensitiveLog = (obj: Rule): any => ({
    ...obj
  });
  export const isa = (o: any): o is Rule => __isa(o, "Rule");
}

/**
 * <p>Information about a condition for a rule.</p>
 */
export interface RuleCondition {
  __type?: "RuleCondition";
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
   * <p>Information for a path pattern condition.
   *       Specify only when <code>Field</code> is <code>path-pattern</code>.</p>
   */
  PathPatternConfig?: PathPatternConditionConfig;

  /**
   * <p>Information for a query string condition.
   *       Specify only when <code>Field</code> is <code>query-string</code>.</p>
   */
  QueryStringConfig?: QueryStringConditionConfig;

  /**
   * <p>Information for a source IP condition.
   *       Specify only when <code>Field</code> is <code>source-ip</code>.</p>
   */
  SourceIpConfig?: SourceIpConditionConfig;

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
}

export namespace RuleCondition {
  export const filterSensitiveLog = (obj: RuleCondition): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleCondition => __isa(o, "RuleCondition");
}

/**
 * <p>The specified rule does not exist.</p>
 */
export interface RuleNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "RuleNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace RuleNotFoundException {
  export const filterSensitiveLog = (obj: RuleNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleNotFoundException =>
    __isa(o, "RuleNotFoundException");
}

/**
 * <p>Information about the priorities for the rules for a listener.</p>
 */
export interface RulePriorityPair {
  __type?: "RulePriorityPair";
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
    ...obj
  });
  export const isa = (o: any): o is RulePriorityPair =>
    __isa(o, "RulePriorityPair");
}

export interface SetIpAddressTypeInput {
  __type?: "SetIpAddressTypeInput";
  /**
   * <p>The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and
   *         <code>dualstack</code> (for IPv4 and IPv6 addresses). Internal load balancers must use
   *         <code>ipv4</code>. Network Load Balancers must use <code>ipv4</code>.</p>
   */
  IpAddressType: IpAddressType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;
}

export namespace SetIpAddressTypeInput {
  export const filterSensitiveLog = (obj: SetIpAddressTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetIpAddressTypeInput =>
    __isa(o, "SetIpAddressTypeInput");
}

export interface SetIpAddressTypeOutput {
  __type?: "SetIpAddressTypeOutput";
  /**
   * <p>The IP address type.</p>
   */
  IpAddressType?: IpAddressType | string;
}

export namespace SetIpAddressTypeOutput {
  export const filterSensitiveLog = (obj: SetIpAddressTypeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetIpAddressTypeOutput =>
    __isa(o, "SetIpAddressTypeOutput");
}

export interface SetRulePrioritiesInput {
  __type?: "SetRulePrioritiesInput";
  /**
   * <p>The rule priorities.</p>
   */
  RulePriorities: RulePriorityPair[] | undefined;
}

export namespace SetRulePrioritiesInput {
  export const filterSensitiveLog = (obj: SetRulePrioritiesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetRulePrioritiesInput =>
    __isa(o, "SetRulePrioritiesInput");
}

export interface SetRulePrioritiesOutput {
  __type?: "SetRulePrioritiesOutput";
  /**
   * <p>Information about the rules.</p>
   */
  Rules?: Rule[];
}

export namespace SetRulePrioritiesOutput {
  export const filterSensitiveLog = (obj: SetRulePrioritiesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetRulePrioritiesOutput =>
    __isa(o, "SetRulePrioritiesOutput");
}

export interface SetSecurityGroupsInput {
  __type?: "SetSecurityGroupsInput";
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
    ...obj
  });
  export const isa = (o: any): o is SetSecurityGroupsInput =>
    __isa(o, "SetSecurityGroupsInput");
}

export interface SetSecurityGroupsOutput {
  __type?: "SetSecurityGroupsOutput";
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace SetSecurityGroupsOutput {
  export const filterSensitiveLog = (obj: SetSecurityGroupsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetSecurityGroupsOutput =>
    __isa(o, "SetSecurityGroupsOutput");
}

export interface SetSubnetsInput {
  __type?: "SetSubnetsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string | undefined;

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

  /**
   * <p>The IDs of the public subnets. You must specify subnets from at least two Availability Zones.
   *       You can specify only one subnet per Availability Zone. You must specify either subnets or
   *       subnet mappings.</p>
   */
  Subnets?: string[];
}

export namespace SetSubnetsInput {
  export const filterSensitiveLog = (obj: SetSubnetsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetSubnetsInput =>
    __isa(o, "SetSubnetsInput");
}

export interface SetSubnetsOutput {
  __type?: "SetSubnetsOutput";
  /**
   * <p>Information about the subnet and Availability Zone.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

export namespace SetSubnetsOutput {
  export const filterSensitiveLog = (obj: SetSubnetsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetSubnetsOutput =>
    __isa(o, "SetSubnetsOutput");
}

/**
 * <p>Information about a source IP condition.</p>
 *          <p>You can use this condition to route based on the IP address of the source that connects
 *       to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not
 *       the IP address of the client.</p>
 */
export interface SourceIpConditionConfig {
  __type?: "SourceIpConditionConfig";
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
    ...obj
  });
  export const isa = (o: any): o is SourceIpConditionConfig =>
    __isa(o, "SourceIpConditionConfig");
}

/**
 * <p>Information about a policy used for SSL negotiation.</p>
 */
export interface SslPolicy {
  __type?: "SslPolicy";
  /**
   * <p>The ciphers.</p>
   */
  Ciphers?: Cipher[];

  /**
   * <p>The name of the policy.</p>
   */
  Name?: string;

  /**
   * <p>The protocols.</p>
   */
  SslProtocols?: string[];
}

export namespace SslPolicy {
  export const filterSensitiveLog = (obj: SslPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is SslPolicy => __isa(o, "SslPolicy");
}

/**
 * <p>The specified SSL policy does not exist.</p>
 */
export interface SSLPolicyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "SSLPolicyNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace SSLPolicyNotFoundException {
  export const filterSensitiveLog = (obj: SSLPolicyNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SSLPolicyNotFoundException =>
    __isa(o, "SSLPolicyNotFoundException");
}

/**
 * <p>Information about a subnet mapping.</p>
 */
export interface SubnetMapping {
  __type?: "SubnetMapping";
  /**
   * <p>[Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.</p>
   */
  AllocationId?: string;

  /**
   * <p>[Network Load Balancers] The private IPv4 address for an internal load balancer.</p>
   */
  PrivateIPv4Address?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace SubnetMapping {
  export const filterSensitiveLog = (obj: SubnetMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubnetMapping => __isa(o, "SubnetMapping");
}

/**
 * <p>The specified subnet does not exist.</p>
 */
export interface SubnetNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "SubnetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace SubnetNotFoundException {
  export const filterSensitiveLog = (obj: SubnetNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubnetNotFoundException =>
    __isa(o, "SubnetNotFoundException");
}

/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>The tags associated with a resource.</p>
 */
export interface TagDescription {
  __type?: "TagDescription";
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
    ...obj
  });
  export const isa = (o: any): o is TagDescription =>
    __isa(o, "TagDescription");
}

/**
 * <p>Information about a target.</p>
 */
export interface TargetDescription {
  __type?: "TargetDescription";
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
}

export namespace TargetDescription {
  export const filterSensitiveLog = (obj: TargetDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetDescription =>
    __isa(o, "TargetDescription");
}

/**
 * <p>Information about a target group.</p>
 */
export interface TargetGroup {
  __type?: "TargetGroup";
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
   * <p>The destination for the health check request.</p>
   */
  HealthCheckPath?: string;

  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The protocol to use to connect with the target.</p>
   */
  HealthCheckProtocol?: ProtocolEnum | string;

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
   * <p>The Amazon Resource Names (ARN) of the load balancers that route traffic to this target
   *       group.</p>
   */
  LoadBalancerArns?: string[];

  /**
   * <p>The HTTP codes to use when checking for a successful response from a target.</p>
   */
  Matcher?: Matcher;

  /**
   * <p>The port on which the targets are listening. Not used if the target is a Lambda function.</p>
   */
  Port?: number;

  /**
   * <p>The protocol to use for routing traffic to the targets.</p>
   */
  Protocol?: ProtocolEnum | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn?: string;

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
   * <p>The number of consecutive health check failures required before considering the target
   *       unhealthy.</p>
   */
  UnhealthyThresholdCount?: number;

  /**
   * <p>The ID of the VPC for the targets.</p>
   */
  VpcId?: string;
}

export namespace TargetGroup {
  export const filterSensitiveLog = (obj: TargetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetGroup => __isa(o, "TargetGroup");
}

/**
 * <p>You've reached the limit on the number of load balancers per target group.</p>
 */
export interface TargetGroupAssociationLimitException
  extends __SmithyException,
    $MetadataBearer {
  name: "TargetGroupAssociationLimitException";
  $fault: "client";
  Message?: string;
}

export namespace TargetGroupAssociationLimitException {
  export const filterSensitiveLog = (
    obj: TargetGroupAssociationLimitException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetGroupAssociationLimitException =>
    __isa(o, "TargetGroupAssociationLimitException");
}

/**
 * <p>Information about a target group attribute.</p>
 */
export interface TargetGroupAttribute {
  __type?: "TargetGroupAttribute";
  /**
   * <p>The name of the attribute.</p>
   *
   *          <p>The following attribute is supported by both Application Load Balancers and Network Load Balancers:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>deregistration_delay.timeout_seconds</code> - The amount of time, in seconds,
   *           for Elastic Load Balancing to wait before changing the state of a deregistering target from
   *           <code>draining</code> to <code>unused</code>. The range is 0-3600 seconds. The default
   *           value is 300 seconds. If the target is a Lambda function, this attribute is not supported.</p>
   *             </li>
   *          </ul>
   *
   *          <p>The following attributes are supported by Application Load Balancers if the target
   *       is not a Lambda function:</p>
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
   *           newly registered target receives a linearly increasing share of the traffic to the target group.
   *           After this time period ends, the target receives its full share of traffic.
   *           The range is 30-900 seconds (15 minutes). Slow start mode is disabled by default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.enabled</code> - Indicates whether sticky sessions are enabled.
   *           The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stickiness.type</code> - The type of sticky sessions. The possible value is
   *           <code>lb_cookie</code>.</p>
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
   *          <p>The following attribute is supported only if the target is a Lambda function.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>lambda.multi_value_headers.enabled</code> - Indicates whether the request and
   *           response headers exchanged between the load balancer and the Lambda function include
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

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export namespace TargetGroupAttribute {
  export const filterSensitiveLog = (obj: TargetGroupAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetGroupAttribute =>
    __isa(o, "TargetGroupAttribute");
}

/**
 * <p>The specified target group does not exist.</p>
 */
export interface TargetGroupNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "TargetGroupNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace TargetGroupNotFoundException {
  export const filterSensitiveLog = (
    obj: TargetGroupNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetGroupNotFoundException =>
    __isa(o, "TargetGroupNotFoundException");
}

/**
 * <p>Information about the target group stickiness for a rule.</p>
 */
export interface TargetGroupStickinessConfig {
  __type?: "TargetGroupStickinessConfig";
  /**
   * <p>The time period, in seconds, during which requests from a client should be
   *       routed to the same target group. The range is 1-604800 seconds (7 days).</p>
   */
  DurationSeconds?: number;

  /**
   * <p>Indicates whether target group stickiness is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace TargetGroupStickinessConfig {
  export const filterSensitiveLog = (
    obj: TargetGroupStickinessConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetGroupStickinessConfig =>
    __isa(o, "TargetGroupStickinessConfig");
}

/**
 * <p>Information about how traffic will be distributed between multiple target groups in a forward rule.</p>
 */
export interface TargetGroupTuple {
  __type?: "TargetGroupTuple";
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
    ...obj
  });
  export const isa = (o: any): o is TargetGroupTuple =>
    __isa(o, "TargetGroupTuple");
}

/**
 * <p>Information about the current health of a target.</p>
 */
export interface TargetHealth {
  __type?: "TargetHealth";
  /**
   * <p>A description of the target health that provides additional details. If the state is
   *         <code>healthy</code>, a description is not provided.</p>
   */
  Description?: string;

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
   * <p>The state of the target.</p>
   */
  State?: TargetHealthStateEnum | string;
}

export namespace TargetHealth {
  export const filterSensitiveLog = (obj: TargetHealth): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetHealth => __isa(o, "TargetHealth");
}

/**
 * <p>Information about the health of a target.</p>
 */
export interface TargetHealthDescription {
  __type?: "TargetHealthDescription";
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
    ...obj
  });
  export const isa = (o: any): o is TargetHealthDescription =>
    __isa(o, "TargetHealthDescription");
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
  TIMEOUT = "Target.Timeout"
}

export enum TargetHealthStateEnum {
  DRAINING = "draining",
  HEALTHY = "healthy",
  INITIAL = "initial",
  UNAVAILABLE = "unavailable",
  UNHEALTHY = "unhealthy",
  UNUSED = "unused"
}

export enum TargetTypeEnum {
  INSTANCE = "instance",
  IP = "ip",
  LAMBDA = "lambda"
}

/**
 * <p>You've reached the limit on the number of actions per rule.</p>
 */
export interface TooManyActionsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyActionsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyActionsException {
  export const filterSensitiveLog = (obj: TooManyActionsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyActionsException =>
    __isa(o, "TooManyActionsException");
}

/**
 * <p>You've reached the limit on the number of certificates per load balancer.</p>
 */
export interface TooManyCertificatesException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyCertificatesException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCertificatesException {
  export const filterSensitiveLog = (
    obj: TooManyCertificatesException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyCertificatesException =>
    __isa(o, "TooManyCertificatesException");
}

/**
 * <p>You've reached the limit on the number of listeners per load balancer.</p>
 */
export interface TooManyListenersException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyListenersException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyListenersException {
  export const filterSensitiveLog = (obj: TooManyListenersException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyListenersException =>
    __isa(o, "TooManyListenersException");
}

/**
 * <p>You've reached the limit on the number of load balancers for your AWS
 *       account.</p>
 */
export interface TooManyLoadBalancersException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyLoadBalancersException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyLoadBalancersException {
  export const filterSensitiveLog = (
    obj: TooManyLoadBalancersException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyLoadBalancersException =>
    __isa(o, "TooManyLoadBalancersException");
}

/**
 * <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 */
export interface TooManyRegistrationsForTargetIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRegistrationsForTargetIdException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRegistrationsForTargetIdException {
  export const filterSensitiveLog = (
    obj: TooManyRegistrationsForTargetIdException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRegistrationsForTargetIdException =>
    __isa(o, "TooManyRegistrationsForTargetIdException");
}

/**
 * <p>You've reached the limit on the number of rules per load balancer.</p>
 */
export interface TooManyRulesException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRulesException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRulesException {
  export const filterSensitiveLog = (obj: TooManyRulesException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRulesException =>
    __isa(o, "TooManyRulesException");
}

/**
 * <p>You've reached the limit on the number of tags per load balancer.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
}

/**
 * <p>You've reached the limit on the number of target groups for your AWS account.</p>
 */
export interface TooManyTargetGroupsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTargetGroupsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTargetGroupsException {
  export const filterSensitiveLog = (
    obj: TooManyTargetGroupsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTargetGroupsException =>
    __isa(o, "TooManyTargetGroupsException");
}

/**
 * <p>You've reached the limit on the number of targets.</p>
 */
export interface TooManyTargetsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTargetsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTargetsException {
  export const filterSensitiveLog = (obj: TooManyTargetsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTargetsException =>
    __isa(o, "TooManyTargetsException");
}

/**
 * <p>You've reached the limit on the number of unique target groups per load balancer
 *         across all listeners. If a target group is used by multiple actions for a load balancer,
 *         it is counted as only one use.</p>
 */
export interface TooManyUniqueTargetGroupsPerLoadBalancerException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyUniqueTargetGroupsPerLoadBalancerException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyUniqueTargetGroupsPerLoadBalancerException {
  export const filterSensitiveLog = (
    obj: TooManyUniqueTargetGroupsPerLoadBalancerException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is TooManyUniqueTargetGroupsPerLoadBalancerException =>
    __isa(o, "TooManyUniqueTargetGroupsPerLoadBalancerException");
}

/**
 * <p>The specified protocol is not supported.</p>
 */
export interface UnsupportedProtocolException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedProtocolException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedProtocolException {
  export const filterSensitiveLog = (
    obj: UnsupportedProtocolException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedProtocolException =>
    __isa(o, "UnsupportedProtocolException");
}
