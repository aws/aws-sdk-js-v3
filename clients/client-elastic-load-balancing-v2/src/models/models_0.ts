// smithy-typescript generated code
import type {
  ActionTypeEnum,
  AdvertiseTrustStoreCaNamesEnum,
  AnomalyResultEnum,
  AuthenticateCognitoActionConditionalBehaviorEnum,
  AuthenticateOidcActionConditionalBehaviorEnum,
  CapacityReservationStateEnum,
  DescribeTargetHealthInputIncludeEnum,
  EnablePrefixForIpv6SourceNatEnum,
  EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum,
  IpAddressType,
  JwtValidationActionAdditionalClaimFormatEnum,
  LoadBalancerSchemeEnum,
  LoadBalancerStateEnum,
  LoadBalancerTypeEnum,
  MitigationInEffectEnum,
  ProtocolEnum,
  RedirectActionStatusCodeEnum,
  RemoveIpamPoolEnum,
  RevocationType,
  SourceIpAddressTypeEnum,
  TargetAdministrativeOverrideReasonEnum,
  TargetAdministrativeOverrideStateEnum,
  TargetGroupIpAddressTypeEnum,
  TargetHealthReasonEnum,
  TargetHealthStateEnum,
  TargetTypeEnum,
  TransformTypeEnum,
  TrustStoreAssociationStatusEnum,
  TrustStoreStatus,
} from "./enums";

/**
 * Request parameters to use when integrating with Amazon Cognito to authenticate users.
 *
 * @public
 */
export interface AuthenticateCognitoActionConfig {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
   *
   * @public
   */
  UserPoolArn: string | undefined;

  /**
   * The ID of the Amazon Cognito user pool client.
   *
   * @public
   */
  UserPoolClientId: string | undefined;

  /**
   * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
   *
   * @public
   */
  UserPoolDomain: string | undefined;

  /**
   * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
   *
   * @public
   */
  SessionCookieName?: string | undefined;

  /**
   * The set of user claims to be requested from the IdP. The default is `openid`.
   *
   * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
   *
   * @public
   */
  SessionTimeout?: number | undefined;

  /**
   * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
   *
   * @public
   */
  AuthenticationRequestExtraParams?: Record<string, string> | undefined;

  /**
   * The behavior if the user is not authenticated. The following are possible values:
   *
   * - deny - Return an HTTP 401 Unauthorized error.
   * - allow - Allow the request to be forwarded to the target.
   * - authenticate - Redirect the request to the IdP authorization endpoint. This is the default value.
   *
   * @public
   */
  OnUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnum | undefined;
}

/**
 * Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
 *
 * @public
 */
export interface AuthenticateOidcActionConfig {
  /**
   * The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * @public
   */
  Issuer: string | undefined;

  /**
   * The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * @public
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * @public
   */
  UserInfoEndpoint: string | undefined;

  /**
   * The OAuth 2.0 client identifier.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set `UseExistingClientSecret` to true.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
   *
   * @public
   */
  SessionCookieName?: string | undefined;

  /**
   * The set of user claims to be requested from the IdP. The default is `openid`.
   *
   * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
   *
   * @public
   */
  SessionTimeout?: number | undefined;

  /**
   * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
   *
   * @public
   */
  AuthenticationRequestExtraParams?: Record<string, string> | undefined;

  /**
   * The behavior if the user is not authenticated. The following are possible values:
   *
   * - deny - Return an HTTP 401 Unauthorized error.
   * - allow - Allow the request to be forwarded to the target.
   * - authenticate - Redirect the request to the IdP authorization endpoint. This is the default value.
   *
   * @public
   */
  OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum | undefined;

  /**
   * Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
   *
   * @public
   */
  UseExistingClientSecret?: boolean | undefined;
}

/**
 * Information about an action that returns a custom HTTP response.
 *
 * @public
 */
export interface FixedResponseActionConfig {
  /**
   * The message.
   *
   * @public
   */
  MessageBody?: string | undefined;

  /**
   * The HTTP response code (2XX, 4XX, or 5XX).
   *
   * @public
   */
  StatusCode: string | undefined;

  /**
   * The content type.
   *
   * Valid Values: text/plain | text/css | text/html | application/javascript | application/json
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
 *
 * @public
 */
export interface TargetGroupTuple {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn?: string | undefined;

  /**
   * The weight. The range is 0 to 999.
   *
   * @public
   */
  Weight?: number | undefined;
}

/**
 * Information about the target group stickiness for a rule.
 *
 * @public
 */
export interface TargetGroupStickinessConfig {
  /**
   * Indicates whether target group stickiness is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.
   *
   * @public
   */
  DurationSeconds?: number | undefined;
}

/**
 * Information about a forward action.
 *
 * @public
 */
export interface ForwardActionConfig {
  /**
   * The target groups.
   *
   * @public
   */
  TargetGroups?: TargetGroupTuple[] | undefined;

  /**
   * The target group stickiness for the rule.
   *
   * @public
   */
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig | undefined;
}

/**
 * Information about an additional claim to validate.
 *
 * @public
 */
export interface JwtValidationActionAdditionalClaim {
  /**
   * The format of the claim value.
   *
   * @public
   */
  Format: JwtValidationActionAdditionalClaimFormatEnum | undefined;

  /**
   * The name of the claim. You can't specify `exp`, `iss`, `nbf`, or `iat` because we validate them by default.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The claim value. The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is `space-separated-values`, the values can't include spaces.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Information about a JSON Web Token (JWT) validation action.
 *
 * @public
 */
export interface JwtValidationActionConfig {
  /**
   * The JSON Web Key Set (JWKS) endpoint. This endpoint contains JSON Web Keys (JWK) that are used to validate signatures from the provider.
   *
   * This must be a full URL, including the HTTPS protocol, the domain, and the path. The maximum length is 256 characters.
   *
   * @public
   */
  JwksEndpoint: string | undefined;

  /**
   * The issuer of the JWT. The maximum length is 256 characters.
   *
   * @public
   */
  Issuer: string | undefined;

  /**
   * Additional claims to validate. The maximum size of the list is 10. We validate the `exp`, `iss`, `nbf`, and `iat` claims by default.
   *
   * @public
   */
  AdditionalClaims?: JwtValidationActionAdditionalClaim[] | undefined;
}

/**
 * Information about a redirect action.
 *
 * A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
 *
 * You can reuse URI components using the following reserved keywords:
 *
 * - #\{protocol\}
 * - #\{host\}
 * - #\{port\}
 * - #\{path\} (the leading "/" is removed)
 * - #\{query\}
 *
 * For example, you can change the path to "/new/#\{path\}", the hostname to "example.#\{host\}", or the query to "#\{query\}&value=xyz".
 *
 * @public
 */
export interface RedirectActionConfig {
  /**
   * The protocol. You can specify HTTP, HTTPS, or #\{protocol\}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The port. You can specify a value from 1 to 65535 or #\{port\}.
   *
   * @public
   */
  Port?: string | undefined;

  /**
   * The hostname. This component is not percent-encoded. The hostname can contain #\{host\}.
   *
   * @public
   */
  Host?: string | undefined;

  /**
   * The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #\{host\}, #\{path\}, and #\{port\}.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
   *
   * @public
   */
  Query?: string | undefined;

  /**
   * The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
   *
   * @public
   */
  StatusCode: RedirectActionStatusCodeEnum | undefined;
}

/**
 * Information about an action.
 *
 * Each rule must include exactly one of the following routing actions: `forward`, `fixed-response`, or `redirect`, and it must be the last action to be performed.
 *
 * Optionally, a rule for an HTTPS listener can also include one of the following user authentication actions: `authenticate-oidc`, `authenticate-cognito`, or `jwt-validation`.
 *
 * @public
 */
export interface Action {
  /**
   * The type of action.
   *
   * @public
   */
  Type: ActionTypeEnum | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target group. Specify only when `Type` is `forward` and you want to route to a single target group. To route to multiple target groups, you must use `ForwardConfig` instead.
   *
   * @public
   */
  TargetGroupArn?: string | undefined;

  /**
   * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `Type` is `authenticate-oidc`.
   *
   * @public
   */
  AuthenticateOidcConfig?: AuthenticateOidcActionConfig | undefined;

  /**
   * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when `Type` is `authenticate-cognito`.
   *
   * @public
   */
  AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig | undefined;

  /**
   * The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
   *
   * @public
   */
  Order?: number | undefined;

  /**
   * [Application Load Balancer] Information for creating a redirect action. Specify only when `Type` is `redirect`.
   *
   * @public
   */
  RedirectConfig?: RedirectActionConfig | undefined;

  /**
   * [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when `Type` is `fixed-response`.
   *
   * @public
   */
  FixedResponseConfig?: FixedResponseActionConfig | undefined;

  /**
   * Information for creating an action that distributes requests among multiple target groups. Specify only when `Type` is `forward`.
   *
   * If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.
   *
   * @public
   */
  ForwardConfig?: ForwardActionConfig | undefined;

  /**
   * [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when `Type` is `jwt-validation`.
   *
   * @public
   */
  JwtValidationConfig?: JwtValidationActionConfig | undefined;
}

/**
 * Information about an SSL server certificate.
 *
 * @public
 */
export interface Certificate {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * Indicates whether the certificate is the default certificate. Do not set this value when specifying a certificate as an input. This value is not included in the output when describing a listener, but is included when describing listener certificates.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface AddListenerCertificatesInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The certificate to add. You can specify one certificate per call. Set `CertificateArn` to the certificate ARN but do not set `IsDefault`.
   *
   * @public
   */
  Certificates: Certificate[] | undefined;
}

/**
 * @public
 */
export interface AddListenerCertificatesOutput {
  /**
   * Information about the certificates in the certificate list.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;
}

/**
 * Information about a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface AddTagsInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsOutput {}

/**
 * Information about a revocation file.
 *
 * @public
 */
export interface RevocationContent {
  /**
   * The Amazon S3 bucket for the revocation file.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 path for the revocation file.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * The Amazon S3 object version of the revocation file.
   *
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * The type of revocation file.
   *
   * @public
   */
  RevocationType?: RevocationType | undefined;
}

/**
 * @public
 */
export interface AddTrustStoreRevocationsInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The revocation file to add.
   *
   * @public
   */
  RevocationContents?: RevocationContent[] | undefined;
}

/**
 * Information about a revocation file in use by a trust store.
 *
 * @public
 */
export interface TrustStoreRevocation {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn?: string | undefined;

  /**
   * The revocation ID of the revocation file.
   *
   * @public
   */
  RevocationId?: number | undefined;

  /**
   * The type of revocation file.
   *
   * @public
   */
  RevocationType?: RevocationType | undefined;

  /**
   * The number of revoked certificates.
   *
   * @public
   */
  NumberOfRevokedEntries?: number | undefined;
}

/**
 * @public
 */
export interface AddTrustStoreRevocationsOutput {
  /**
   * Information about the revocation file added to the trust store.
   *
   * @public
   */
  TrustStoreRevocations?: TrustStoreRevocation[] | undefined;
}

/**
 * Information about the override status applied to a target.
 *
 * @public
 */
export interface AdministrativeOverride {
  /**
   * The state of the override.
   *
   * @public
   */
  State?: TargetAdministrativeOverrideStateEnum | undefined;

  /**
   * The reason code for the state.
   *
   * @public
   */
  Reason?: TargetAdministrativeOverrideReasonEnum | undefined;

  /**
   * A description of the override state that provides additional details.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Information about anomaly detection and mitigation.
 *
 * @public
 */
export interface AnomalyDetection {
  /**
   * The latest anomaly detection result.
   *
   * @public
   */
  Result?: AnomalyResultEnum | undefined;

  /**
   * Indicates whether anomaly mitigation is in progress.
   *
   * @public
   */
  MitigationInEffect?: MitigationInEffectEnum | undefined;
}

/**
 * Information about a static IP address for a load balancer.
 *
 * @public
 */
export interface LoadBalancerAddress {
  /**
   * The static IP address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * [Network Load Balancers] The allocation ID of the Elastic IP address for an internal-facing load balancer.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * [Network Load Balancers] The private IPv4 address for an internal load balancer.
   *
   * @public
   */
  PrivateIPv4Address?: string | undefined;

  /**
   * [Network Load Balancers] The IPv6 address.
   *
   * @public
   */
  IPv6Address?: string | undefined;
}

/**
 * Information about an Availability Zone.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * The name of the Availability Zone.
   *
   * @public
   */
  ZoneName?: string | undefined;

  /**
   * The ID of the subnet. You can specify one subnet per Availability Zone.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * [Application Load Balancers on Outposts] The ID of the Outpost.
   *
   * @public
   */
  OutpostId?: string | undefined;

  /**
   * [Network Load Balancers] If you need static IP addresses for your load balancer, you can specify one Elastic IP address per Availability Zone when you create an internal-facing load balancer. For internal load balancers, you can specify a private IP address from the IPv4 range of the subnet.
   *
   * @public
   */
  LoadBalancerAddresses?: LoadBalancerAddress[] | undefined;

  /**
   * [Network Load Balancers with UDP listeners] The IPv6 prefixes to use for source NAT. For each subnet, specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or `auto_assigned` to use an IPv6 prefix selected at random from the subnet CIDR block.
   *
   * @public
   */
  SourceNatIpv6Prefixes?: string[] | undefined;
}

/**
 * The status of a capacity reservation.
 *
 * @public
 */
export interface CapacityReservationStatus {
  /**
   * The status code.
   *
   * @public
   */
  Code?: CapacityReservationStateEnum | undefined;

  /**
   * The reason code for the status.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * Information about a cipher used in a policy.
 *
 * @public
 */
export interface Cipher {
  /**
   * The name of the cipher.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The priority of the cipher.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * Information about the mutual authentication attributes of a listener.
 *
 * @public
 */
export interface MutualAuthenticationAttributes {
  /**
   * The client certificate handling method. Options are `off`, `passthrough` or `verify`. The default value is `off`.
   *
   * @public
   */
  Mode?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn?: string | undefined;

  /**
   * Indicates whether expired client certificates are ignored.
   *
   * @public
   */
  IgnoreClientCertificateExpiry?: boolean | undefined;

  /**
   * Indicates a shared trust stores association status.
   *
   * @public
   */
  TrustStoreAssociationStatus?: TrustStoreAssociationStatusEnum | undefined;

  /**
   * Indicates whether trust store CA certificate names are advertised.
   *
   * @public
   */
  AdvertiseTrustStoreCaNames?: AdvertiseTrustStoreCaNamesEnum | undefined;
}

/**
 * @public
 */
export interface CreateListenerInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
   *
   * @public
   */
  Protocol?: ProtocolEnum | undefined;

  /**
   * The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.
   *
   * For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
   *
   * @public
   */
  SslPolicy?: string | undefined;

  /**
   * [HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set `CertificateArn` to the certificate ARN but do not set `IsDefault`.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * The actions for the default rule.
   *
   * @public
   */
  DefaultActions: Action[] | undefined;

  /**
   * [TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:
   *
   * - `HTTP1Only`
   * - `HTTP2Only`
   * - `HTTP2Optional`
   * - `HTTP2Preferred`
   * - `None`
   *
   * For more information, see [ALPN policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html#alpn-policies) in the *Network Load Balancers Guide*.
   *
   * @public
   */
  AlpnPolicy?: string[] | undefined;

  /**
   * The tags to assign to the listener.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * [HTTPS listeners] The mutual authentication configuration information.
   *
   * @public
   */
  MutualAuthentication?: MutualAuthenticationAttributes | undefined;
}

/**
 * Information about a listener.
 *
 * @public
 */
export interface Listener {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The port on which the load balancer is listening.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol for connections from clients to the load balancer.
   *
   * @public
   */
  Protocol?: ProtocolEnum | undefined;

  /**
   * [HTTPS or TLS listener] The default certificate for the listener.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * [HTTPS or TLS listener] The security policy that defines which protocols and ciphers are supported.
   *
   * @public
   */
  SslPolicy?: string | undefined;

  /**
   * The default actions for the listener.
   *
   * @public
   */
  DefaultActions?: Action[] | undefined;

  /**
   * [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
   *
   * @public
   */
  AlpnPolicy?: string[] | undefined;

  /**
   * The mutual authentication configuration information.
   *
   * @public
   */
  MutualAuthentication?: MutualAuthenticationAttributes | undefined;
}

/**
 * @public
 */
export interface CreateListenerOutput {
  /**
   * Information about the listener.
   *
   * @public
   */
  Listeners?: Listener[] | undefined;
}

/**
 * An IPAM pool is a collection of IP address CIDRs. IPAM pools enable you to organize your IP addresses according to your routing and security needs.
 *
 * @public
 */
export interface IpamPools {
  /**
   * The ID of the IPv4 IPAM pool.
   *
   * @public
   */
  Ipv4IpamPoolId?: string | undefined;
}

/**
 * Information about a subnet mapping.
 *
 * @public
 */
export interface SubnetMapping {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.
   *
   * @public
   */
  AllocationId?: string | undefined;

  /**
   * [Network Load Balancers] The private IPv4 address for an internal load balancer.
   *
   * @public
   */
  PrivateIPv4Address?: string | undefined;

  /**
   * [Network Load Balancers] The IPv6 address.
   *
   * @public
   */
  IPv6Address?: string | undefined;

  /**
   * [Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT. Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or `auto_assigned` to use an IPv6 prefix selected at random from the subnet CIDR block.
   *
   * @public
   */
  SourceNatIpv6Prefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateLoadBalancerInput {
  /**
   * The name of the load balancer.
   *
   * This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
   *
   * [Application Load Balancers] You must specify subnets from at least two Availability Zones.
   *
   * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
   *
   * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
   *
   * [Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
   *
   * [Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
   *
   * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
   *
   * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
   *
   * [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
   *
   * [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.
   *
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
   *
   * The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
   *
   * The default is an Internet-facing load balancer.
   *
   * You can't specify a scheme for a Gateway Load Balancer.
   *
   * @public
   */
  Scheme?: LoadBalancerSchemeEnum | undefined;

  /**
   * The tags to assign to the load balancer.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of load balancer. The default is `application`.
   *
   * @public
   */
  Type?: LoadBalancerTypeEnum | undefined;

  /**
   * The IP address type. Internal load balancers must use `ipv4`.
   *
   * [Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
   *
   * [Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * [Application Load Balancers on Outposts] The ID of the customer-owned address pool (CoIP pool).
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be `dualstack`. The default value is `off`.
   *
   * @public
   */
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum | undefined;

  /**
   * [Application Load Balancers] The IPAM pools to use with the load balancer.
   *
   * @public
   */
  IpamPools?: IpamPools | undefined;
}

/**
 * Information about the state of the load balancer.
 *
 * @public
 */
export interface LoadBalancerState {
  /**
   * The state code. The initial state of the load balancer is `provisioning`. After the load balancer is fully set up and ready to route traffic, its state is `active`. If load balancer is routing traffic but does not have the resources it needs to scale, its state is`active_impaired`. If the load balancer could not be set up, its state is `failed`.
   *
   * @public
   */
  Code?: LoadBalancerStateEnum | undefined;

  /**
   * A description of the state.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * Information about a load balancer.
 *
 * @public
 */
export interface LoadBalancer {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The public DNS name of the load balancer.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * The ID of the Amazon Route 53 hosted zone associated with the load balancer.
   *
   * @public
   */
  CanonicalHostedZoneId?: string | undefined;

  /**
   * The date and time the load balancer was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
   *
   * The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
   *
   * @public
   */
  Scheme?: LoadBalancerSchemeEnum | undefined;

  /**
   * The ID of the VPC for the load balancer.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The state of the load balancer.
   *
   * @public
   */
  State?: LoadBalancerState | undefined;

  /**
   * The type of load balancer.
   *
   * @public
   */
  Type?: LoadBalancerTypeEnum | undefined;

  /**
   * The subnets for the load balancer.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * The IDs of the security groups for the load balancer.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The type of IP addresses used for public or private connections by the subnets attached to your load balancer.
   *
   * [Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
   *
   * [Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * [Application Load Balancers on Outposts] The ID of the customer-owned address pool.
   *
   * @public
   */
  CustomerOwnedIpv4Pool?: string | undefined;

  /**
   * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through Amazon Web Services PrivateLink.
   *
   * @public
   */
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string | undefined;

  /**
   * [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be `dualstack`. The default value is `off`.
   *
   * @public
   */
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum | undefined;

  /**
   * [Application Load Balancers] The IPAM pool in use by the load balancer, if configured.
   *
   * @public
   */
  IpamPools?: IpamPools | undefined;
}

/**
 * @public
 */
export interface CreateLoadBalancerOutput {
  /**
   * Information about the load balancer.
   *
   * @public
   */
  LoadBalancers?: LoadBalancer[] | undefined;
}

/**
 * Information about a host header condition.
 *
 * @public
 */
export interface HostHeaderConditionConfig {
  /**
   * The host names. The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
   *
   * If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The regular expressions to compare against the host header. The maximum length of each string is 128 characters.
   *
   * @public
   */
  RegexValues?: string[] | undefined;
}

/**
 * Information about an HTTP header condition.
 *
 * There is a set of standard HTTP header fields. You can also define custom HTTP header fields.
 *
 * @public
 */
export interface HttpHeaderConditionConfig {
  /**
   * The name of the HTTP header field. The maximum length is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
   *
   * You can't use an HTTP header condition to specify the host header. Instead, use a [host condition](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#host-conditions).
   *
   * @public
   */
  HttpHeaderName?: string | undefined;

  /**
   * The strings to compare against the value of the HTTP header. The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
   *
   * If the same header appears multiple times in the request, we search them in order until a match is found.
   *
   * If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The regular expression to compare against the HTTP header. The maximum length of each string is 128 characters.
   *
   * @public
   */
  RegexValues?: string[] | undefined;
}

/**
 * Information about an HTTP method condition.
 *
 * HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the [HTTP Method Registry](https://www.iana.org/assignments/http-methods/http-methods.xhtml). You can also define custom HTTP methods.
 *
 * @public
 */
export interface HttpRequestMethodConditionConfig {
  /**
   * The name of the request method. The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
   *
   * If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Information about a path pattern condition.
 *
 * @public
 */
export interface PathPatternConditionConfig {
  /**
   * The path patterns to compare against the request URL. The maximum length of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
   *
   * If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use a [query string condition](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#query-string-conditions).
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The regular expressions to compare against the request URL. The maximum length of each string is 128 characters.
   *
   * @public
   */
  RegexValues?: string[] | undefined;
}

/**
 * Information about a key/value pair.
 *
 * @public
 */
export interface QueryStringKeyValuePair {
  /**
   * The key. You can omit the key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Information about a query string condition.
 *
 * The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.
 *
 * @public
 */
export interface QueryStringConditionConfig {
  /**
   * The key/value pairs or values to find in the query string. The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in `Values` using a '\' character.
   *
   * If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.
   *
   * @public
   */
  Values?: QueryStringKeyValuePair[] | undefined;
}

/**
 * Information about a source IP condition.
 *
 * You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.
 *
 * For Application Load Balancers, use `Values` to specify CIDR ranges. For Network Load Balancers, use `IpAddressType` to match on the IP address type of the source traffic.
 *
 * @public
 */
export interface SourceIpConditionConfig {
  /**
   * The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
   *
   * If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header. To search for addresses in the X-Forwarded-For header, use an [HTTP header condition](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#http-header-conditions).
   *
   * The total number of values must be less than, or equal to five.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The IP address type for Network Load Balancers.
   *
   * The valid values are:
   *
   * - `ipv4` – IPv4 addresses only.
   * - `ipv6` – IPv6 addresses only.
   *
   * @public
   */
  IpAddressType?: SourceIpAddressTypeEnum | undefined;
}

/**
 * Information about a condition for a rule.
 *
 * Each rule can optionally include up to one of each of the following conditions: `http-request-method`, `host-header`, `path-pattern`, and `source-ip`. Each rule can also optionally include one or more of each of the following conditions: `http-header` and `query-string`. Note that the value for a condition can't be empty.
 *
 * For Network Load Balancer listener rules, the only supported condition is `source-ip`. Use `SourceIpConfig` with `IpAddressType` to match on the IP address type of the source traffic (`ipv4` or `ipv6`).
 *
 * For more information, see [Quotas for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html).
 *
 * @public
 */
export interface RuleCondition {
  /**
   * The name of the field. The possible values are:
   *
   * - `http-header` – [ALB] Matches on an HTTP header field.
   * - `http-request-method` – [ALB] Matches on the HTTP request method.
   * - `host-header` – [ALB] Matches on the host header.
   * - `path-pattern` – [ALB] Matches on the URL path of the request.
   * - `query-string` – [ALB] Matches on a query string parameter.
   * - `source-ip` – [ALB, NLB] Matches on the source IP address. For ALB, use `SourceIpConfig` with `Values` to specify CIDR ranges. For NLB, use `SourceIpConfig` with `IpAddressType` to match the IP address type (`ipv4` or `ipv6`).
   *
   * @public
   */
  Field?: string | undefined;

  /**
   * The condition value. Specify only when `Field` is `host-header` or `path-pattern`. Alternatively, to specify multiple host names or multiple path patterns, use `HostHeaderConfig` or `PathPatternConfig`.
   *
   * If `Field` is `host-header` and you are not using `HostHeaderConfig`, you can specify a single host name (for example, my.example.com) in `Values`. A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
   *
   * - A-Z, a-z, 0-9
   * - - .
   * - * (matches 0 or more characters)
   * - ? (matches exactly 1 character)
   *
   * If `Field` is `path-pattern` and you are not using `PathPatternConfig`, you can specify a single path pattern (for example, /img/*) in `Values`. A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
   *
   * - A-Z, a-z, 0-9
   * - _ - . $ / ~ " ' @ : +
   * - & (using &amp;)
   * - * (matches 0 or more characters)
   * - ? (matches exactly 1 character)
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * Information for a host header condition. Specify only when `Field` is `host-header`.
   *
   * @public
   */
  HostHeaderConfig?: HostHeaderConditionConfig | undefined;

  /**
   * Information for a path pattern condition. Specify only when `Field` is `path-pattern`.
   *
   * @public
   */
  PathPatternConfig?: PathPatternConditionConfig | undefined;

  /**
   * Information for an HTTP header condition. Specify only when `Field` is `http-header`.
   *
   * @public
   */
  HttpHeaderConfig?: HttpHeaderConditionConfig | undefined;

  /**
   * Information for a query string condition. Specify only when `Field` is `query-string`.
   *
   * @public
   */
  QueryStringConfig?: QueryStringConditionConfig | undefined;

  /**
   * Information for an HTTP method condition. Specify only when `Field` is `http-request-method`.
   *
   * @public
   */
  HttpRequestMethodConfig?: HttpRequestMethodConditionConfig | undefined;

  /**
   * Information for a source IP condition. Specify only when `Field` is `source-ip`.
   *
   * @public
   */
  SourceIpConfig?: SourceIpConditionConfig | undefined;

  /**
   * The regular expressions to match against the condition field. The maximum length of each string is 128 characters. Specify only when `Field` is `http-header`, `host-header`, or `path-pattern`.
   *
   * @public
   */
  RegexValues?: string[] | undefined;
}

/**
 * Information about a rewrite transform. This transform matches a pattern and replaces it with the specified string.
 *
 * @public
 */
export interface RewriteConfig {
  /**
   * The regular expression to match in the input string. The maximum length of the string is 1,024 characters.
   *
   * @public
   */
  Regex: string | undefined;

  /**
   * The replacement string to use when rewriting the matched input. The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).
   *
   * @public
   */
  Replace: string | undefined;
}

/**
 * Information about a host header rewrite transform. This transform matches a pattern in the host header in an HTTP request and replaces it with the specified string.
 *
 * @public
 */
export interface HostHeaderRewriteConfig {
  /**
   * The host header rewrite transform. Each transform consists of a regular expression to match and a replacement string.
   *
   * @public
   */
  Rewrites?: RewriteConfig[] | undefined;
}

/**
 * Information about a URL rewrite transform. This transform matches a pattern in the request URL and replaces it with the specified string.
 *
 * @public
 */
export interface UrlRewriteConfig {
  /**
   * The URL rewrite transform to apply to the request. The transform consists of a regular expression to match and a replacement string.
   *
   * @public
   */
  Rewrites?: RewriteConfig[] | undefined;
}

/**
 * Information about a transform to apply to requests that match a rule. Transforms are applied to requests before they are sent to targets.
 *
 * @public
 */
export interface RuleTransform {
  /**
   * The type of transform.
   *
   * - `host-header-rewrite` - Rewrite the host header.
   * - `url-rewrite` - Rewrite the request URL.
   *
   * @public
   */
  Type: TransformTypeEnum | undefined;

  /**
   * Information about a host header rewrite transform. This transform modifies the host header in an HTTP request. Specify only when `Type` is `host-header-rewrite`.
   *
   * @public
   */
  HostHeaderRewriteConfig?: HostHeaderRewriteConfig | undefined;

  /**
   * Information about a URL rewrite transform. This transform modifies the request URL. Specify only when `Type` is `url-rewrite`.
   *
   * @public
   */
  UrlRewriteConfig?: UrlRewriteConfig | undefined;
}

/**
 * @public
 */
export interface CreateRuleInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The conditions.
   *
   * @public
   */
  Conditions: RuleCondition[] | undefined;

  /**
   * The rule priority. A listener can't have multiple rules with the same priority.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The actions.
   *
   * @public
   */
  Actions: Action[] | undefined;

  /**
   * The tags to assign to the rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The transforms to apply to requests that match this rule. You can add one host header rewrite transform and one URL rewrite transform.
   *
   * @public
   */
  Transforms?: RuleTransform[] | undefined;
}

/**
 * Information about a rule.
 *
 * @public
 */
export interface Rule {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The priority.
   *
   * @public
   */
  Priority?: string | undefined;

  /**
   * The conditions. Each rule can include zero or one of the following conditions: `http-request-method`, `host-header`, `path-pattern`, and `source-ip`, and zero or more of the following conditions: `http-header` and `query-string`.
   *
   * @public
   */
  Conditions?: RuleCondition[] | undefined;

  /**
   * The actions. Each rule must include exactly one of the following types of actions: `forward`, `redirect`, or `fixed-response`, and it must be the last action to be performed.
   *
   * @public
   */
  Actions?: Action[] | undefined;

  /**
   * Indicates whether this is the default rule.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The transforms for the rule.
   *
   * @public
   */
  Transforms?: RuleTransform[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleOutput {
  /**
   * Information about the rule.
   *
   * @public
   */
  Rules?: Rule[] | undefined;
}

/**
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
 *
 * @public
 */
export interface Matcher {
  /**
   * For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").
   *
   * For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").
   *
   * For Gateway Load Balancers, this must be "200–399".
   *
   * Note that when using shorthand syntax, some values such as commas need to be escaped.
   *
   * @public
   */
  HttpCode?: string | undefined;

  /**
   * You can specify values between 0 and 99. You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.
   *
   * @public
   */
  GrpcCode?: string | undefined;
}

/**
 * @public
 */
export interface CreateTargetGroupInput {
  /**
   * The name of the target group.
   *
   * This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The protocol to use for routing traffic to the targets. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. A TCP_QUIC listener must be associated with a TCP_QUIC target group. If the target is a Lambda function, this parameter does not apply.
   *
   * @public
   */
  Protocol?: ProtocolEnum | undefined;

  /**
   * [HTTP/HTTPS protocol] The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1.
   *
   * @public
   */
  ProtocolVersion?: string | undefined;

  /**
   * The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols are not supported for health checks.
   *
   * @public
   */
  HealthCheckProtocol?: ProtocolEnum | undefined;

  /**
   * The port the load balancer uses when performing health checks on targets. If the protocol is HTTP, HTTPS, TCP, TLS, UDP, TCP_UDP, QUIC, or TCP_QUIC the default is `traffic-port`, which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.
   *
   * @public
   */
  HealthCheckPort?: string | undefined;

  /**
   * Indicates whether health checks are enabled. If the target type is `lambda`, health checks are disabled by default but can be enabled. If the target type is `instance`, `ip`, or `alb`, health checks are always enabled and can't be disabled.
   *
   * @public
   */
  HealthCheckEnabled?: boolean | undefined;

  /**
   * [HTTP/HTTPS health checks] The destination for health checks on the targets.
   *
   * [HTTP1 or HTTP2 protocol version] The ping path. The default is /.
   *
   * [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.
   *
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * The approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, QUIC, TCP_QUIC, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is `lambda`, the default is 35 seconds.
   *
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * The amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is `lambda`, the default is 30 seconds.
   *
   * @public
   */
  HealthCheckTimeoutSeconds?: number | undefined;

  /**
   * The number of consecutive health check successes required before considering a target healthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is `lambda`, the default is 5.
   *
   * @public
   */
  HealthyThresholdCount?: number | undefined;

  /**
   * The number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, QUIC, TCP_QUIC, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is `lambda`, the default is 5.
   *
   * @public
   */
  UnhealthyThresholdCount?: number | undefined;

  /**
   * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP, QUIC, TCP_QUIC, or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
   *
   * @public
   */
  Matcher?: Matcher | undefined;

  /**
   * The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.
   *
   * - `instance` - Register targets by instance ID. This is the default value.
   * - `ip` - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.
   * - `lambda` - Register a single Lambda function as a target.
   * - `alb` - Register a single Application Load Balancer as a target.
   *
   * @public
   */
  TargetType?: TargetTypeEnum | undefined;

  /**
   * The tags to assign to the target group.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IP address type. The default value is `ipv4`.
   *
   * @public
   */
  IpAddressType?: TargetGroupIpAddressTypeEnum | undefined;

  /**
   * The port on which the target control agent and application load balancer exchange management traffic for the target optimizer feature.
   *
   * @public
   */
  TargetControlPort?: number | undefined;
}

/**
 * Information about a target group.
 *
 * @public
 */
export interface TargetGroup {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn?: string | undefined;

  /**
   * The name of the target group.
   *
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * The protocol to use for routing traffic to the targets.
   *
   * @public
   */
  Protocol?: ProtocolEnum | undefined;

  /**
   * The port on which the targets are listening. This parameter is not used if the target is a Lambda function.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The ID of the VPC for the targets.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The protocol to use to connect with the target. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.
   *
   * @public
   */
  HealthCheckProtocol?: ProtocolEnum | undefined;

  /**
   * The port to use to connect with the target.
   *
   * @public
   */
  HealthCheckPort?: string | undefined;

  /**
   * Indicates whether health checks are enabled.
   *
   * @public
   */
  HealthCheckEnabled?: boolean | undefined;

  /**
   * The approximate amount of time, in seconds, between health checks of an individual target.
   *
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * The amount of time, in seconds, during which no response means a failed health check.
   *
   * @public
   */
  HealthCheckTimeoutSeconds?: number | undefined;

  /**
   * The number of consecutive health checks successes required before considering an unhealthy target healthy.
   *
   * @public
   */
  HealthyThresholdCount?: number | undefined;

  /**
   * The number of consecutive health check failures required before considering the target unhealthy.
   *
   * @public
   */
  UnhealthyThresholdCount?: number | undefined;

  /**
   * The destination for health checks on the targets.
   *
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * The HTTP or gRPC codes to use when checking for a successful response from a target.
   *
   * @public
   */
  Matcher?: Matcher | undefined;

  /**
   * The Amazon Resource Name (ARN) of the load balancer that routes traffic to this target group. You can use each target group with only one load balancer.
   *
   * @public
   */
  LoadBalancerArns?: string[] | undefined;

  /**
   * The type of target that you must specify when registering targets with this target group. The possible values are `instance` (register targets by instance ID), `ip` (register targets by IP address), `lambda` (register a single Lambda function as a target), or `alb` (register a single Application Load Balancer as a target).
   *
   * @public
   */
  TargetType?: TargetTypeEnum | undefined;

  /**
   * [HTTP/HTTPS protocol] The protocol version. The possible values are `GRPC`, `HTTP1`, and `HTTP2`.
   *
   * @public
   */
  ProtocolVersion?: string | undefined;

  /**
   * The IP address type. The default value is `ipv4`.
   *
   * @public
   */
  IpAddressType?: TargetGroupIpAddressTypeEnum | undefined;

  /**
   * The port on which the target control agent and application load balancer exchange management traffic for the target optimizer feature.
   *
   * @public
   */
  TargetControlPort?: number | undefined;
}

/**
 * @public
 */
export interface CreateTargetGroupOutput {
  /**
   * Information about the target group.
   *
   * @public
   */
  TargetGroups?: TargetGroup[] | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreInput {
  /**
   * The name of the trust store.
   *
   * This name must be unique per region and can't be changed after creation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon S3 bucket for the ca certificates bundle.
   *
   * @public
   */
  CaCertificatesBundleS3Bucket: string | undefined;

  /**
   * The Amazon S3 path for the ca certificates bundle.
   *
   * @public
   */
  CaCertificatesBundleS3Key: string | undefined;

  /**
   * The Amazon S3 object version for the ca certificates bundle. If undefined the current version is used.
   *
   * @public
   */
  CaCertificatesBundleS3ObjectVersion?: string | undefined;

  /**
   * The tags to assign to the trust store.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about a trust store.
 *
 * @public
 */
export interface TrustStore {
  /**
   * The name of the trust store.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn?: string | undefined;

  /**
   * The current status of the trust store.
   *
   * @public
   */
  Status?: TrustStoreStatus | undefined;

  /**
   * The number of ca certificates in the trust store.
   *
   * @public
   */
  NumberOfCaCertificates?: number | undefined;

  /**
   * The number of revoked certificates in the trust store.
   *
   * @public
   */
  TotalRevokedEntries?: number | undefined;
}

/**
 * @public
 */
export interface CreateTrustStoreOutput {
  /**
   * Information about the trust store created.
   *
   * @public
   */
  TrustStores?: TrustStore[] | undefined;
}

/**
 * @public
 */
export interface DeleteListenerInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteListenerOutput {}

/**
 * @public
 */
export interface DeleteLoadBalancerInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoadBalancerOutput {}

/**
 * @public
 */
export interface DeleteRuleInput {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleOutput {}

/**
 * @public
 */
export interface DeleteSharedTrustStoreAssociationInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSharedTrustStoreAssociationOutput {}

/**
 * @public
 */
export interface DeleteTargetGroupInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetGroupOutput {}

/**
 * @public
 */
export interface DeleteTrustStoreInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustStoreOutput {}

/**
 * Information about a target.
 *
 * @public
 */
export interface TargetDescription {
  /**
   * The ID of the target. If the target type of the target group is `instance`, specify an instance ID. If the target type is `ip`, specify an IP address. If the target type is `lambda`, specify the ARN of the Lambda function. If the target type is `alb`, specify the ARN of the Application Load Balancer target.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is `alb`, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. This parameter is not used if the target is a Lambda function.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * An Availability Zone or `all`. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
   *
   * For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as `all`.
   *
   * This parameter is not supported if the target type of the target group is `instance` or `alb`.
   *
   * If the target type is `ip` and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.
   *
   * For Application Load Balancer target groups with cross-zone load balancing off, if the target type is `ip` and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.
   *
   * If the target type is `lambda`, this parameter is optional and the only supported value is `all`.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The server ID for the targets. This value is required if the protocol is `QUIC` or `TCP_QUIC` and can't be used with other protocols.
   *
   * The ID consists of the `0x` prefix followed by 16 hexadecimal characters. Any letters must be lowercase. The value must be unique at the listener level. You can't modify the server ID for a registered target. You must deregister the target and then provide a new server ID when you register the target again.
   *
   * @public
   */
  QuicServerId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetsInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;

  /**
   * The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you deregister it.
   *
   * @public
   */
  Targets: TargetDescription[] | undefined;
}

/**
 * @public
 */
export interface DeregisterTargetsOutput {}

/**
 * @public
 */
export interface DescribeAccountLimitsInput {
  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Information about an Elastic Load Balancing resource limit for your Amazon Web Services account.
 *
 * For more information, see the following:
 *
 * - [Quotas for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html)
 * - [Quotas for your Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html)
 * - [Quotas for your Gateway Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html)
 *
 * @public
 */
export interface Limit {
  /**
   * The name of the limit.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The maximum value of the limit.
   *
   * @public
   */
  Max?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountLimitsOutput {
  /**
   * Information about the limits.
   *
   * @public
   */
  Limits?: Limit[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;
}

/**
 * The capacity reservation status for each Availability Zone.
 *
 * @public
 */
export interface ZonalCapacityReservationState {
  /**
   * The state of the capacity reservation.
   *
   * @public
   */
  State?: CapacityReservationStatus | undefined;

  /**
   * Information about the Availability Zone.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of effective capacity units.
   *
   * @public
   */
  EffectiveCapacityUnits?: number | undefined;
}

/**
 * The minimum capacity for a load balancer.
 *
 * @public
 */
export interface MinimumLoadBalancerCapacity {
  /**
   * The number of capacity units.
   *
   * @public
   */
  CapacityUnits?: number | undefined;
}

/**
 * @public
 */
export interface DescribeCapacityReservationOutput {
  /**
   * The last time the capacity reservation was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The amount of daily capacity decreases remaining.
   *
   * @public
   */
  DecreaseRequestsRemaining?: number | undefined;

  /**
   * The requested minimum capacity reservation for the load balancer
   *
   * @public
   */
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity | undefined;

  /**
   * The state of the capacity reservation.
   *
   * @public
   */
  CapacityReservationState?: ZonalCapacityReservationState[] | undefined;
}

/**
 * @public
 */
export interface DescribeListenerAttributesInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;
}

/**
 * Information about a listener attribute.
 *
 * @public
 */
export interface ListenerAttribute {
  /**
   * The name of the attribute.
   *
   * The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.
   *
   * - `tcp.idle_timeout.seconds` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.
   *
   * The following attribute is only supported by Gateway Load Balancers:
   *
   * - `send_tcp_reset.on_idle_timeout.enabled` – Specifies whether the Gateway Load Balancer sends a TCP Reset to the sender of traffic when a TCP flow's idle timeout expires. This attribute also applies to non-SYN TCP packets received for flows that are not in the flow table. The value is `true` or `false`. The default is `false`.
   *
   * The following attributes are only supported by Application Load Balancers.
   *
   * - `routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name` - Enables you to modify the header name of the **X-Amzn-Mtls-Clientcert-Serial-Number** HTTP request header.
   * - `routing.http.request.x_amzn_mtls_clientcert_issuer.header_name` - Enables you to modify the header name of the **X-Amzn-Mtls-Clientcert-Issuer** HTTP request header.
   * - `routing.http.request.x_amzn_mtls_clientcert_subject.header_name` - Enables you to modify the header name of the **X-Amzn-Mtls-Clientcert-Subject** HTTP request header.
   * - `routing.http.request.x_amzn_mtls_clientcert_validity.header_name` - Enables you to modify the header name of the **X-Amzn-Mtls-Clientcert-Validity** HTTP request header.
   * - `routing.http.request.x_amzn_mtls_clientcert_leaf.header_name` - Enables you to modify the header name of the **X-Amzn-Mtls-Clientcert-Leaf** HTTP request header.
   * - `routing.http.request.x_amzn_mtls_clientcert.header_name` - Enables you to modify the header name of the **X-Amzn-Mtls-Clientcert** HTTP request header.
   * - `routing.http.request.x_amzn_tls_version.header_name` - Enables you to modify the header name of the **X-Amzn-Tls-Version** HTTP request header.
   * - `routing.http.request.x_amzn_tls_cipher_suite.header_name` - Enables you to modify the header name of the **X-Amzn-Tls-Cipher-Suite** HTTP request header.
   * - `routing.http.response.server.enabled` - Enables you to allow or remove the HTTP response server header.
   * - `routing.http.response.strict_transport_security.header_value` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
   * - `routing.http.response.access_control_allow_origin.header_value` - Specifies which origins are allowed to access the server.
   * - `routing.http.response.access_control_allow_methods.header_value` - Returns which HTTP methods are allowed when accessing the server from a different origin.
   * - `routing.http.response.access_control_allow_headers.header_value` - Specifies which headers can be used during the request.
   * - `routing.http.response.access_control_allow_credentials.header_value` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
   * - `routing.http.response.access_control_expose_headers.header_value` - Returns which headers the browser can expose to the requesting client.
   * - `routing.http.response.access_control_max_age.header_value` - Specifies how long the results of a preflight request can be cached, in seconds.
   * - `routing.http.response.content_security_policy.header_value` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
   * - `routing.http.response.x_content_type_options.header_value` - Indicates whether the MIME types advertised in the **Content-Type** headers should be followed and not be changed.
   * - `routing.http.response.x_frame_options.header_value` - Indicates whether the browser is allowed to render a page in a **frame**, **iframe**, **embed** or **object**.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeListenerAttributesOutput {
  /**
   * Information about the listener attributes.
   *
   * @public
   */
  Attributes?: ListenerAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeListenerCertificatesInput {
  /**
   * The Amazon Resource Names (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeListenerCertificatesOutput {
  /**
   * Information about the certificates.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeListenersInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARN) of the listeners.
   *
   * @public
   */
  ListenerArns?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeListenersOutput {
  /**
   * Information about the listeners.
   *
   * @public
   */
  Listeners?: Listener[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancerAttributesInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;
}

/**
 * Information about a load balancer attribute.
 *
 * @public
 */
export interface LoadBalancerAttribute {
  /**
   * The name of the attribute.
   *
   * The following attributes are supported by all load balancers:
   *
   * - `deletion_protection.enabled` - Indicates whether deletion protection is enabled. The value is `true` or `false`. The default is `false`.
   * - `load_balancing.cross_zone.enabled` - Indicates whether cross-zone load balancing is enabled. The possible values are `true` and `false`. The default for Network Load Balancers and Gateway Load Balancers is `false`. The default for Application Load Balancers is `true`, and can't be changed.
   *
   * The following attributes are supported by both Application Load Balancers and Network Load Balancers:
   *
   * - `access_logs.s3.enabled` - Indicates whether access logs are enabled. The value is `true` or `false`. The default is `false`.
   * - `access_logs.s3.bucket` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
   * - `access_logs.s3.prefix` - The prefix for the location in the S3 bucket for the access logs.
   * - `ipv6.deny_all_igw_traffic` - Blocks internet gateway (IGW) access to the load balancer. It is set to `false` for internet-facing load balancers and `true` for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.
   * - `zonal_shift.config.enabled` - Indicates whether zonal shift is enabled. The possible values are `true` and `false`. The default is `false`.
   *
   * The following attributes are supported by only Application Load Balancers:
   *
   * - `idle_timeout.timeout_seconds` - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.
   * - `client_keep_alive.seconds` - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
   * - `connection_logs.s3.enabled` - Indicates whether connection logs are enabled. The value is `true` or `false`. The default is `false`.
   * - `connection_logs.s3.bucket` - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
   * - `connection_logs.s3.prefix` - The prefix for the location in the S3 bucket for the connection logs.
   * - `health_check_logs.s3.enabled` - Indicates whether health check logs are enabled. The value is `true` or `false`. The default is `false`.
   * - `health_check_logs.s3.bucket` - The name of the S3 bucket for the health check logs. This attribute is required if health check logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
   * - `health_check_logs.s3.prefix` - The prefix for the location in the S3 bucket for the health check logs.
   * - `routing.http.desync_mitigation_mode` - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are `monitor`, `defensive`, and `strictest`. The default is `defensive`.
   * - `routing.http.drop_invalid_header_fields.enabled` - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (`true`) or routed to targets (`false`). The default is `false`.
   * - `routing.http.preserve_host_header.enabled` - Indicates whether the Application Load Balancer should preserve the `Host` header in the HTTP request and send it to the target without any change. The possible values are `true` and `false`. The default is `false`.
   * - `routing.http.x_amzn_tls_version_and_cipher_suite.enabled` - Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The `x-amzn-tls-version` header has information about the TLS protocol version negotiated with the client, and the `x-amzn-tls-cipher-suite` header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are `true` and `false`. The default is `false`.
   * - `routing.http.xff_client_port.enabled` - Indicates whether the `X-Forwarded-For` header should preserve the source port that the client used to connect to the load balancer. The possible values are `true` and `false`. The default is `false`.
   * - `routing.http.xff_header_processing.mode` - Enables you to modify, preserve, or remove the `X-Forwarded-For` header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are `append`, `preserve`, and `remove`. The default is `append`.
   *
   *   - If the value is `append`, the Application Load Balancer adds the client IP address (of the last hop) to the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
   *   - If the value is `preserve` the Application Load Balancer preserves the `X-Forwarded-For` header in the HTTP request, and sends it to targets without any change.
   *   - If the value is `remove`, the Application Load Balancer removes the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
   * - `routing.http2.enabled` - Indicates whether clients can connect to the load balancer using HTTP/2. If `true`, clients can connect using HTTP/2 or HTTP/1.1. However, all client requests are subject to the stricter HTTP/2 header validation rules. For example, message header names must contain only alphanumeric characters and hyphens. If `false`, clients must connect using HTTP/1.1. The default is `true`.
   * - `waf.fail_open.enabled` - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to Amazon Web Services WAF. The possible values are `true` and `false`. The default is `false`.
   *
   * The following attributes are supported by only Network Load Balancers:
   *
   * - `dns_record.client_routing_policy` - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are `availability_zone_affinity` with 100 percent zonal affinity, `partial_availability_zone_affinity` with 85 percent zonal affinity, and `any_availability_zone` with 0 percent zonal affinity.
   * - `secondary_ips.auto_assigned.per_subnet` - The number of secondary IP addresses to configure for your load balancer nodes. Use to address port allocation errors if you can't add targets. The valid range is 0 to 7. The default is 0. After you set this value, you can't decrease it.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancerAttributesOutput {
  /**
   * Information about the load balancer attributes.
   *
   * @public
   */
  Attributes?: LoadBalancerAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancersInput {
  /**
   * The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.
   *
   * @public
   */
  LoadBalancerArns?: string[] | undefined;

  /**
   * The names of the load balancers.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancersOutput {
  /**
   * Information about the load balancers.
   *
   * @public
   */
  LoadBalancers?: LoadBalancer[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARN) of the rules.
   *
   * @public
   */
  RuleArns?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeRulesOutput {
  /**
   * Information about the rules.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSSLPoliciesInput {
  /**
   * The names of the policies.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The type of load balancer. The default lists the SSL policies for all load balancers.
   *
   * @public
   */
  LoadBalancerType?: LoadBalancerTypeEnum | undefined;
}

/**
 * Information about a policy used for SSL negotiation.
 *
 * @public
 */
export interface SslPolicy {
  /**
   * The protocols.
   *
   * @public
   */
  SslProtocols?: string[] | undefined;

  /**
   * The ciphers.
   *
   * @public
   */
  Ciphers?: Cipher[] | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The supported load balancers.
   *
   * @public
   */
  SupportedLoadBalancerTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSSLPoliciesOutput {
  /**
   * Information about the security policies.
   *
   * @public
   */
  SslPolicies?: SslPolicy[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsInput {
  /**
   * The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.
   *
   * @public
   */
  ResourceArns: string[] | undefined;
}

/**
 * The tags associated with a resource.
 *
 * @public
 */
export interface TagDescription {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Information about the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeTagsOutput {
  /**
   * Information about the tags.
   *
   * @public
   */
  TagDescriptions?: TagDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTargetGroupAttributesInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;
}

/**
 * Information about a target group attribute.
 *
 * @public
 */
export interface TargetGroupAttribute {
  /**
   * The name of the attribute.
   *
   * The following attributes are supported by all load balancers:
   *
   * - `deregistration_delay.timeout_seconds` - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from `draining` to `unused`. The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported.
   * - `stickiness.enabled` - Indicates whether target stickiness is enabled. The value is `true` or `false`. The default is `false`.
   * - `stickiness.type` - Indicates the type of stickiness. The possible values are:
   *
   *   - `lb_cookie` and `app_cookie` for Application Load Balancers.
   *   - `source_ip` for Network Load Balancers.
   *   - `source_ip_dest_ip` and `source_ip_dest_ip_proto` for Gateway Load Balancers.
   *
   * The following attributes are supported by Application Load Balancers and Network Load Balancers:
   *
   * - `load_balancing.cross_zone.enabled` - Indicates whether cross zone load balancing is enabled. The value is `true`, `false` or `use_load_balancer_configuration`. The default is `use_load_balancer_configuration`.
   * - `target_group_health.dns_failover.minimum_healthy_targets.count` - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are `off` or an integer from 1 to the maximum number of targets. The default is 1.
   * - `target_group_health.dns_failover.minimum_healthy_targets.percentage` - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are `off` or an integer from 1 to 100. The default is `off`.
   * - `target_group_health.unhealthy_state_routing.minimum_healthy_targets.count` - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are 1 to the maximum number of targets. The default is 1.
   * - `target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage` - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are `off` or an integer from 1 to 100. The default is `off`.
   *
   * The following attributes are supported only if the load balancer is an Application Load Balancer and the target is an instance or an IP address:
   *
   * - `load_balancing.algorithm.type` - The load balancing algorithm determines how the load balancer selects targets when routing requests. The value is `round_robin`, `least_outstanding_requests`, or `weighted_random`. The default is `round_robin`.
   * - `load_balancing.algorithm.anomaly_mitigation` - Only available when `load_balancing.algorithm.type` is `weighted_random`. Indicates whether anomaly mitigation is enabled. The value is `on` or `off`. The default is `off`.
   * - `slow_start.duration_seconds` - The time period, in seconds, during which a newly registered target receives an increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). The default is 0 seconds (disabled).
   * - `stickiness.app_cookie.cookie_name` - Indicates the name of the application-based cookie. Names that start with the following prefixes are not allowed: `AWSALB`, `AWSALBAPP`, and `AWSALBTG`; they're reserved for use by the load balancer.
   * - `stickiness.app_cookie.duration_seconds` - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the application-based cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).
   * - `stickiness.lb_cookie.duration_seconds` - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).
   *
   * The following attribute is supported only if the load balancer is an Application Load Balancer and the target is a Lambda function:
   *
   * - `lambda.multi_value_headers.enabled` - Indicates whether the request and response headers that are exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is `true` or `false`. The default is `false`. If the value is `false` and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client.
   *
   * The following attributes are supported only by Network Load Balancers:
   *
   * - `deregistration_delay.connection_termination.enabled` - Indicates whether the load balancer terminates connections at the end of the deregistration timeout. The value is `true` or `false`. For new UDP/TCP_UDP target groups the default is `true`. Otherwise, the default is `false`.
   * - `preserve_client_ip.enabled` - Indicates whether client IP preservation is enabled. The value is `true` or `false`. The default is disabled if the target group type is IP address and the target group protocol is TCP or TLS. Otherwise, the default is enabled. Client IP preservation can't be disabled for UDP and TCP_UDP target groups.
   * - `proxy_protocol_v2.enabled` - Indicates whether Proxy Protocol version 2 is enabled. The value is `true` or `false`. The default is `false`.
   * - `target_health_state.unhealthy.connection_termination.enabled` - Indicates whether the load balancer terminates connections to unhealthy targets. The value is `true` or `false`. The default is `true`. This attribute can't be enabled for UDP and TCP_UDP target groups.
   * - `target_health_state.unhealthy.draining_interval_seconds` - The amount of time for Elastic Load Balancing to wait before changing the state of an unhealthy target from `unhealthy.draining` to `unhealthy`. The range is 0-360000 seconds. The default value is 0 seconds.
   *
   *   Note: This attribute can only be configured when `target_health_state.unhealthy.connection_termination.enabled` is `false`.
   *
   * The following attributes are supported only by Gateway Load Balancers:
   *
   * - `target_failover.on_deregistration` - Indicates how the Gateway Load Balancer handles existing flows when a target is deregistered. The possible values are `rebalance` and `no_rebalance`. The default is `no_rebalance`. The two attributes (`target_failover.on_deregistration` and `target_failover.on_unhealthy`) can't be set independently. The value you set for both attributes must be the same.
   * - `target_failover.on_unhealthy` - Indicates how the Gateway Load Balancer handles existing flows when a target is unhealthy. The possible values are `rebalance` and `no_rebalance`. The default is `no_rebalance`. The two attributes (`target_failover.on_deregistration` and `target_failover.on_unhealthy`) can't be set independently. The value you set for both attributes must be the same.
   * - `send_tcp_reset.on_unhealthy.enabled` – Specifies whether the Gateway Load Balancer sends a TCP Reset to the sender of traffic when a target becomes unhealthy. After sending the reset, the Gateway Load Balancer removes the flow entry from its flow table. The value is `true` or `false`. The default is `false`. This attribute does not apply when `target_failover.on_unhealthy` is set to `rebalance`. This feature requires 5-tuple flow stickiness, which the target group uses by default when `stickiness.enabled` is set to `false`.
   * - `send_tcp_reset.on_deregistration.enabled` – Specifies whether the Gateway Load Balancer sends a TCP Reset to the sender of traffic when a target is deregistered. The reset occurs after the connection drain time has elapsed. The value is `true` or `false`. The default is `false`. This attribute does not apply when `target_failover.on_deregistration` is set to `rebalance`. This feature requires 5-tuple flow stickiness, which the target group uses by default when `stickiness.enabled` is set to `false`.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTargetGroupAttributesOutput {
  /**
   * Information about the target group attributes
   *
   * @public
   */
  Attributes?: TargetGroupAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeTargetGroupsInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARN) of the target groups.
   *
   * @public
   */
  TargetGroupArns?: string[] | undefined;

  /**
   * The names of the target groups.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTargetGroupsOutput {
  /**
   * Information about the target groups.
   *
   * @public
   */
  TargetGroups?: TargetGroup[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTargetHealthInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;

  /**
   * The targets.
   *
   * @public
   */
  Targets?: TargetDescription[] | undefined;

  /**
   * Used to include anomaly detection information.
   *
   * @public
   */
  Include?: DescribeTargetHealthInputIncludeEnum[] | undefined;
}

/**
 * Information about the current health of a target.
 *
 * @public
 */
export interface TargetHealth {
  /**
   * The state of the target.
   *
   * @public
   */
  State?: TargetHealthStateEnum | undefined;

  /**
   * The reason code.
   *
   * If the target state is `healthy`, a reason code is not provided.
   *
   * If the target state is `initial`, the reason code can be one of the following values:
   *
   * - `Elb.RegistrationInProgress` - The target is in the process of being registered with the load balancer.
   * - `Elb.InitialHealthChecking` - The load balancer is still sending the target the minimum number of health checks required to determine its health status.
   *
   * If the target state is `unhealthy`, the reason code can be one of the following values:
   *
   * - `Target.ResponseCodeMismatch` - The health checks did not return an expected HTTP code.
   * - `Target.Timeout` - The health check requests timed out.
   * - `Target.FailedHealthChecks` - The load balancer received an error while establishing a connection to the target or the target response was malformed.
   * - `Elb.InternalError` - The health checks failed due to an internal error.
   *
   * If the target state is `unused`, the reason code can be one of the following values:
   *
   * - `Target.NotRegistered` - The target is not registered with the target group.
   * - `Target.NotInUse` - The target group is not used by any load balancer or the target is in an Availability Zone that is not enabled for its load balancer.
   * - `Target.InvalidState` - The target is in the stopped or terminated state.
   * - `Target.IpUnusable` - The target IP address is reserved for use by a load balancer.
   *
   * If the target state is `draining`, the reason code can be the following value:
   *
   * - `Target.DeregistrationInProgress` - The target is in the process of being deregistered and the deregistration delay period has not expired.
   *
   * If the target state is `unavailable`, the reason code can be the following value:
   *
   * - `Target.HealthCheckDisabled` - Health checks are disabled for the target group.
   * - `Elb.InternalError` - Target health is unavailable due to an internal error.
   *
   * @public
   */
  Reason?: TargetHealthReasonEnum | undefined;

  /**
   * A description of the target health that provides additional details. If the state is `healthy`, a description is not provided.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Information about the health of a target.
 *
 * @public
 */
export interface TargetHealthDescription {
  /**
   * The description of the target.
   *
   * @public
   */
  Target?: TargetDescription | undefined;

  /**
   * The port to use to connect with the target.
   *
   * @public
   */
  HealthCheckPort?: string | undefined;

  /**
   * The health information for the target.
   *
   * @public
   */
  TargetHealth?: TargetHealth | undefined;

  /**
   * The anomaly detection result for the target.
   *
   * If no anomalies were detected, the result is `normal`.
   *
   * If anomalies were detected, the result is `anomalous`.
   *
   * @public
   */
  AnomalyDetection?: AnomalyDetection | undefined;

  /**
   * The administrative override information for the target.
   *
   * @public
   */
  AdministrativeOverride?: AdministrativeOverride | undefined;
}

/**
 * @public
 */
export interface DescribeTargetHealthOutput {
  /**
   * Information about the health of the targets.
   *
   * @public
   */
  TargetHealthDescriptions?: TargetHealthDescription[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrustStoreAssociationsInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Information about the resources a trust store is associated with.
 *
 * @public
 */
export interface TrustStoreAssociation {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrustStoreAssociationsOutput {
  /**
   * Information about the resources the trust store is associated to.
   *
   * @public
   */
  TrustStoreAssociations?: TrustStoreAssociation[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * Information about the revocations used by a trust store.
 *
 * @public
 */
export interface DescribeTrustStoreRevocation {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn?: string | undefined;

  /**
   * The revocation ID of a revocation file in use.
   *
   * @public
   */
  RevocationId?: number | undefined;

  /**
   * The type of revocation file.
   *
   * @public
   */
  RevocationType?: RevocationType | undefined;

  /**
   * The number of revoked certificates.
   *
   * @public
   */
  NumberOfRevokedEntries?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTrustStoreRevocationsInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The revocation IDs of the revocation files you want to describe.
   *
   * @public
   */
  RevocationIds?: number[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTrustStoreRevocationsOutput {
  /**
   * Information about the revocation file in the trust store.
   *
   * @public
   */
  TrustStoreRevocations?: DescribeTrustStoreRevocation[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrustStoresInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArns?: string[] | undefined;

  /**
   * The names of the trust stores.
   *
   * @public
   */
  Names?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * @public
 */
export interface DescribeTrustStoresOutput {
  /**
   * Information about the trust stores.
   *
   * @public
   */
  TrustStores?: TrustStore[] | undefined;

  /**
   * If there are additional results, this is the marker for the next set of results. Otherwise, this is null.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * The content of the resource policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreCaCertificatesBundleInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreCaCertificatesBundleOutput {
  /**
   * The ca certificate bundles Amazon S3 URI.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreRevocationContentInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The revocation ID of the revocation file.
   *
   * @public
   */
  RevocationId: number | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreRevocationContentOutput {
  /**
   * The revocation files Amazon S3 URI.
   *
   * @public
   */
  Location?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The minimum load balancer capacity reserved.
   *
   * @public
   */
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity | undefined;

  /**
   * Resets the capacity reservation.
   *
   * @public
   */
  ResetCapacityReservation?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCapacityReservationOutput {
  /**
   * The last time the capacity reservation was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The amount of daily capacity decreases remaining.
   *
   * @public
   */
  DecreaseRequestsRemaining?: number | undefined;

  /**
   * The requested minimum capacity reservation for the load balancer
   *
   * @public
   */
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity | undefined;

  /**
   * The state of the capacity reservation.
   *
   * @public
   */
  CapacityReservationState?: ZonalCapacityReservationState[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpPoolsInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The IPAM pools to be modified.
   *
   * @public
   */
  IpamPools?: IpamPools | undefined;

  /**
   * Remove the IP pools in use by the load balancer.
   *
   * @public
   */
  RemoveIpamPools?: RemoveIpamPoolEnum[] | undefined;
}

/**
 * @public
 */
export interface ModifyIpPoolsOutput {
  /**
   * The IPAM pool ID.
   *
   * @public
   */
  IpamPools?: IpamPools | undefined;
}

/**
 * @public
 */
export interface ModifyListenerInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The port for connections from clients to the load balancer. You can't specify a port for a Gateway Load Balancer.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols. Network Load Balancers support the TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols. You can’t change the protocol to UDP, TCP_UDP, QUIC, or TCP_QUIC if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
   *
   * @public
   */
  Protocol?: ProtocolEnum | undefined;

  /**
   * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.
   *
   * For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* or [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
   *
   * @public
   */
  SslPolicy?: string | undefined;

  /**
   * [HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set `CertificateArn` to the certificate ARN but do not set `IsDefault`.
   *
   * @public
   */
  Certificates?: Certificate[] | undefined;

  /**
   * The actions for the default rule.
   *
   * @public
   */
  DefaultActions?: Action[] | undefined;

  /**
   * [TLS listeners] The name of the Application-Layer Protocol Negotiation (ALPN) policy. You can specify one policy name. The following are the possible values:
   *
   * - `HTTP1Only`
   * - `HTTP2Only`
   * - `HTTP2Optional`
   * - `HTTP2Preferred`
   * - `None`
   *
   * For more information, see [ALPN policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html#alpn-policies) in the *Network Load Balancers Guide*.
   *
   * @public
   */
  AlpnPolicy?: string[] | undefined;

  /**
   * [HTTPS listeners] The mutual authentication configuration information.
   *
   * @public
   */
  MutualAuthentication?: MutualAuthenticationAttributes | undefined;
}

/**
 * @public
 */
export interface ModifyListenerOutput {
  /**
   * Information about the modified listener.
   *
   * @public
   */
  Listeners?: Listener[] | undefined;
}

/**
 * @public
 */
export interface ModifyListenerAttributesInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The listener attributes.
   *
   * @public
   */
  Attributes: ListenerAttribute[] | undefined;
}

/**
 * @public
 */
export interface ModifyListenerAttributesOutput {
  /**
   * Information about the listener attributes.
   *
   * @public
   */
  Attributes?: ListenerAttribute[] | undefined;
}

/**
 * @public
 */
export interface ModifyLoadBalancerAttributesInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The load balancer attributes.
   *
   * @public
   */
  Attributes: LoadBalancerAttribute[] | undefined;
}

/**
 * @public
 */
export interface ModifyLoadBalancerAttributesOutput {
  /**
   * Information about the load balancer attributes.
   *
   * @public
   */
  Attributes?: LoadBalancerAttribute[] | undefined;
}

/**
 * @public
 */
export interface ModifyRuleInput {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn: string | undefined;

  /**
   * The conditions.
   *
   * @public
   */
  Conditions?: RuleCondition[] | undefined;

  /**
   * The actions.
   *
   * @public
   */
  Actions?: Action[] | undefined;

  /**
   * The transforms to apply to requests that match this rule. You can add one host header rewrite transform and one URL rewrite transform. If you specify `Transforms`, you can't specify `ResetTransforms`.
   *
   * @public
   */
  Transforms?: RuleTransform[] | undefined;

  /**
   * Indicates whether to remove all transforms from the rule. If you specify `ResetTransforms`, you can't specify `Transforms`.
   *
   * @public
   */
  ResetTransforms?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyRuleOutput {
  /**
   * Information about the modified rule.
   *
   * @public
   */
  Rules?: Rule[] | undefined;
}

/**
 * @public
 */
export interface ModifyTargetGroupInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;

  /**
   * The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC protocols are not supported for health checks.
   *
   * @public
   */
  HealthCheckProtocol?: ProtocolEnum | undefined;

  /**
   * The port the load balancer uses when performing health checks on targets.
   *
   * @public
   */
  HealthCheckPort?: string | undefined;

  /**
   * [HTTP/HTTPS health checks] The destination for health checks on the targets.
   *
   * [HTTP1 or HTTP2 protocol version] The ping path. The default is /.
   *
   * [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.
   *
   * @public
   */
  HealthCheckPath?: string | undefined;

  /**
   * Indicates whether health checks are enabled. If the target type is `lambda`, health checks are disabled by default but can be enabled. If the target type is `instance`, `ip`, or `alb`, health checks are always enabled and can't be disabled.
   *
   * @public
   */
  HealthCheckEnabled?: boolean | undefined;

  /**
   * The approximate amount of time, in seconds, between health checks of an individual target.
   *
   * @public
   */
  HealthCheckIntervalSeconds?: number | undefined;

  /**
   * [HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.
   *
   * @public
   */
  HealthCheckTimeoutSeconds?: number | undefined;

  /**
   * The number of consecutive health checks successes required before considering an unhealthy target healthy.
   *
   * @public
   */
  HealthyThresholdCount?: number | undefined;

  /**
   * The number of consecutive health check failures required before considering the target unhealthy.
   *
   * @public
   */
  UnhealthyThresholdCount?: number | undefined;

  /**
   * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
   *
   * @public
   */
  Matcher?: Matcher | undefined;
}

/**
 * @public
 */
export interface ModifyTargetGroupOutput {
  /**
   * Information about the modified target group.
   *
   * @public
   */
  TargetGroups?: TargetGroup[] | undefined;
}

/**
 * @public
 */
export interface ModifyTargetGroupAttributesInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;

  /**
   * The target group attributes.
   *
   * @public
   */
  Attributes: TargetGroupAttribute[] | undefined;
}

/**
 * @public
 */
export interface ModifyTargetGroupAttributesOutput {
  /**
   * Information about the target group attributes.
   *
   * @public
   */
  Attributes?: TargetGroupAttribute[] | undefined;
}

/**
 * @public
 */
export interface ModifyTrustStoreInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The Amazon S3 bucket for the ca certificates bundle.
   *
   * @public
   */
  CaCertificatesBundleS3Bucket: string | undefined;

  /**
   * The Amazon S3 path for the ca certificates bundle.
   *
   * @public
   */
  CaCertificatesBundleS3Key: string | undefined;

  /**
   * The Amazon S3 object version for the ca certificates bundle. If undefined the current version is used.
   *
   * @public
   */
  CaCertificatesBundleS3ObjectVersion?: string | undefined;
}

/**
 * @public
 */
export interface ModifyTrustStoreOutput {
  /**
   * Information about the modified trust store.
   *
   * @public
   */
  TrustStores?: TrustStore[] | undefined;
}

/**
 * @public
 */
export interface RegisterTargetsInput {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  TargetGroupArn: string | undefined;

  /**
   * The targets.
   *
   * @public
   */
  Targets: TargetDescription[] | undefined;
}

/**
 * @public
 */
export interface RegisterTargetsOutput {}

/**
 * @public
 */
export interface RemoveListenerCertificatesInput {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * @public
   */
  ListenerArn: string | undefined;

  /**
   * The certificate to remove. You can specify one certificate per call. Set `CertificateArn` to the certificate ARN but do not set `IsDefault`.
   *
   * @public
   */
  Certificates: Certificate[] | undefined;
}

/**
 * @public
 */
export interface RemoveListenerCertificatesOutput {}

/**
 * @public
 */
export interface RemoveTagsInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArns: string[] | undefined;

  /**
   * The tag keys for the tags to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsOutput {}

/**
 * @public
 */
export interface RemoveTrustStoreRevocationsInput {
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   *
   * @public
   */
  TrustStoreArn: string | undefined;

  /**
   * The revocation IDs of the revocation files you want to remove.
   *
   * @public
   */
  RevocationIds: number[] | undefined;
}

/**
 * @public
 */
export interface RemoveTrustStoreRevocationsOutput {}

/**
 * @public
 */
export interface SetIpAddressTypeInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The IP address type. Internal load balancers must use `ipv4`.
   *
   * [Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
   *
   * Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
   *
   * [Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).
   *
   * @public
   */
  IpAddressType: IpAddressType | undefined;
}

/**
 * @public
 */
export interface SetIpAddressTypeOutput {
  /**
   * The IP address type.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;
}

/**
 * Information about the priorities for the rules for a listener.
 *
 * @public
 */
export interface RulePriorityPair {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * The rule priority.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * @public
 */
export interface SetRulePrioritiesInput {
  /**
   * The rule priorities.
   *
   * @public
   */
  RulePriorities: RulePriorityPair[] | undefined;
}

/**
 * @public
 */
export interface SetRulePrioritiesOutput {
  /**
   * Information about the rules.
   *
   * @public
   */
  Rules?: Rule[] | undefined;
}

/**
 * @public
 */
export interface SetSecurityGroupsInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The IDs of the security groups.
   *
   * @public
   */
  SecurityGroups: string[] | undefined;

  /**
   * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through Amazon Web Services PrivateLink. Applies only if the load balancer has an associated security group. The default is `on`.
   *
   * @public
   */
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum | undefined;
}

/**
 * @public
 */
export interface SetSecurityGroupsOutput {
  /**
   * The IDs of the security groups associated with the load balancer.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through Amazon Web Services PrivateLink.
   *
   * @public
   */
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum | undefined;
}

/**
 * @public
 */
export interface SetSubnetsInput {
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * @public
   */
  LoadBalancerArn: string | undefined;

  /**
   * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.
   *
   * [Application Load Balancers] You must specify subnets from at least two Availability Zones.
   *
   * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
   *
   * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
   *
   * [Network Load Balancers] You can specify subnets from one or more Availability Zones.
   *
   * [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings.
   *
   * [Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
   *
   * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
   *
   * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
   *
   * [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
   *
   * [Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
   *
   * @public
   */
  SubnetMappings?: SubnetMapping[] | undefined;

  /**
   * The IP address type.
   *
   * [Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
   *
   * [Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT. The IP address type must be `dualstack`. The default value is `off`.
   *
   * @public
   */
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum | undefined;
}

/**
 * @public
 */
export interface SetSubnetsOutput {
  /**
   * Information about the subnets.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * The IP address type.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * [Network Load Balancers] Indicates whether to use an IPv6 prefix from each subnet for source NAT.
   *
   * @public
   */
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum | undefined;
}
