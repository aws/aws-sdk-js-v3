// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ElasticLoadBalancingServiceException as __BaseException } from "./ElasticLoadBalancingServiceException";

/**
 * <p>Information about the <code>AccessLog</code> attribute.</p>
 */
export interface AccessLog {
  /**
   * <p>Specifies whether access logs are enabled for the load balancer.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where the access logs are stored.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p>
   *         <p>Default: 60 minutes</p>
   */
  EmitInterval?: number;

  /**
   * <p>The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>.
   *             If the prefix is not provided, the log is placed at the root level of the bucket.</p>
   */
  S3BucketPrefix?: string;
}

/**
 * <p>The specified load balancer does not exist.</p>
 */
export class AccessPointNotFoundException extends __BaseException {
  readonly name: "AccessPointNotFoundException" = "AccessPointNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointNotFoundException, __BaseException>) {
    super({
      name: "AccessPointNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the parameters for EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface AddAvailabilityZonesInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The Availability Zones. These must be in the same region as the load balancer.</p>
   */
  AvailabilityZones: string[] | undefined;
}

/**
 * <p>Contains the output of EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface AddAvailabilityZonesOutput {
  /**
   * <p>The updated list of Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: string[];
}

/**
 * <p>Information about additional load balancer attributes.</p>
 */
export interface AdditionalAttribute {
  /**
   * <p>The name of the attribute.</p>
   *         <p>The following attribute is supported.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>elb.http.desyncmitigationmode</code> - Determines how the load balancer handles requests that
   *                     might pose a security risk to your application. The possible values are <code>monitor</code>,
   *                     <code>defensive</code>, and <code>strictest</code>. The default is <code>defensive</code>.</p>
   *             </li>
   *          </ul>
   */
  Key?: string;

  /**
   * <p>This value of the attribute.</p>
   */
  Value?: string;
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

/**
 * <p>Contains the parameters for AddTags.</p>
 */
export interface AddTagsInput {
  /**
   * <p>The name of the load balancer. You can specify one load balancer only.</p>
   */
  LoadBalancerNames: string[] | undefined;

  /**
   * <p>The tags.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>Contains the output of AddTags.</p>
 */
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
 * <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
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
 * <p>Information about a policy for application-controlled session stickiness.</p>
 */
export interface AppCookieStickinessPolicy {
  /**
   * <p>The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.</p>
   */
  PolicyName?: string;

  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName?: string;
}

/**
 * <p>Contains the parameters for ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.</p>
   */
  SecurityGroups: string[] | undefined;
}

/**
 * <p>Contains the output of ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerOutput {
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroups?: string[];
}

/**
 * <p>The requested configuration change is not valid.</p>
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
 * <p>One or more of the specified security groups do not exist.</p>
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
 * <p>Contains the parameters for AttachLoaBalancerToSubnets.</p>
 */
export interface AttachLoadBalancerToSubnetsInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the subnets to add. You can add only one subnet per Availability Zone.</p>
   */
  Subnets: string[] | undefined;
}

/**
 * <p>Contains the output of AttachLoadBalancerToSubnets.</p>
 */
export interface AttachLoadBalancerToSubnetsOutput {
  /**
   * <p>The IDs of the subnets attached to the load balancer.</p>
   */
  Subnets?: string[];
}

/**
 * <p>The specified VPC has no associated Internet gateway.</p>
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
 * <p>One or more of the specified subnets do not exist.</p>
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
 * <p>Information about the configuration of an EC2 instance.</p>
 */
export interface BackendServerDescription {
  /**
   * <p>The port on which the EC2 instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The names of the policies enabled for the EC2 instance.</p>
   */
  PolicyNames?: string[];
}

/**
 * <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
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
 * <p>Information about a health check.</p>
 */
export interface HealthCheck {
  /**
   * <p>The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.</p>
   *         <p>TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.</p>
   *         <p>SSL is also specified as SSL: port pair, for example, SSL:5000.</p>
   *         <p>For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.</p>
   *          <p>The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.</p>
   */
  Target: string | undefined;

  /**
   * <p>The approximate interval, in seconds, between health checks of an individual instance.</p>
   */
  Interval: number | undefined;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health check.</p>
   *         <p>This value must be less than the <code>Interval</code> value.</p>
   */
  Timeout: number | undefined;

  /**
   * <p>The number of consecutive health check failures required before moving the instance to the <code>Unhealthy</code> state.</p>
   */
  UnhealthyThreshold: number | undefined;

  /**
   * <p>The number of consecutive health checks successes required before moving the instance to the <code>Healthy</code> state.</p>
   */
  HealthyThreshold: number | undefined;
}

/**
 * <p>Contains the parameters for ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The configuration information.</p>
   */
  HealthCheck: HealthCheck | undefined;
}

/**
 * <p>Contains the output of ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckOutput {
  /**
   * <p>The updated health check.</p>
   */
  HealthCheck?: HealthCheck;
}

/**
 * <p>Information about the <code>ConnectionDraining</code> attribute.</p>
 */
export interface ConnectionDraining {
  /**
   * <p>Specifies whether connection draining is enabled for the load balancer.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering the instances.</p>
   */
  Timeout?: number;
}

/**
 * <p>Information about the <code>ConnectionSettings</code> attribute.</p>
 */
export interface ConnectionSettings {
  /**
   * <p>The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.</p>
   */
  IdleTimeout: number | undefined;
}

/**
 * <p>Information about a listener.</p>
 *         <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export interface Listener {
  /**
   * <p>The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.</p>
   */
  LoadBalancerPort: number | undefined;

  /**
   * <p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p>
   *          <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL.
   *            If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p>
   *          <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure,
   *           (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p>
   *         <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP,
   *            the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>
   */
  InstanceProtocol?: string;

  /**
   * <p>The port on which the instance is listening.</p>
   */
  InstancePort: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the server certificate.</p>
   */
  SSLCertificateId?: string;
}

/**
 * <p>Contains the parameters for CreateLoadBalancer.</p>
 */
export interface CreateAccessPointInput {
  /**
   * <p>The name of the load balancer.</p>
   *         <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The listeners.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  Listeners: Listener[] | undefined;

  /**
   * <p>One or more Availability Zones from the same region as the load balancer.</p>
   *         <p>You must specify at least one Availability Zone.</p>
   *         <p>You can add more Availability Zones after you create the load balancer using
   *             <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The IDs of the subnets in your VPC to attach to the load balancer.
   *             Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.</p>
   */
  Subnets?: string[];

  /**
   * <p>The IDs of the security groups to assign to the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The type of a load balancer. Valid only for load balancers in a VPC.</p>
   *         <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses.
   *             For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a>
   *             in the <i>Elastic Load Balancing User Guide</i>.</p>
   *         <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>
   */
  Scheme?: string;

  /**
   * <p>A list of tags to assign to the load balancer.</p>
   *         <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Contains the output for CreateLoadBalancer.</p>
 */
export interface CreateAccessPointOutput {
  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DNSName?: string;
}

/**
 * <p>Contains the parameters for CreateAppCookieStickinessPolicy.</p>
 */
export interface CreateAppCookieStickinessPolicyInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName: string | undefined;
}

/**
 * <p>Contains the output for CreateAppCookieStickinessPolicy.</p>
 */
export interface CreateAppCookieStickinessPolicyOutput {}

/**
 * <p>A policy with the specified name already exists for this load balancer.</p>
 */
export class DuplicatePolicyNameException extends __BaseException {
  readonly name: "DuplicatePolicyNameException" = "DuplicatePolicyNameException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatePolicyNameException, __BaseException>) {
    super({
      name: "DuplicatePolicyNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatePolicyNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The quota for the number of policies for this load balancer has been reached.</p>
 */
export class TooManyPoliciesException extends __BaseException {
  readonly name: "TooManyPoliciesException" = "TooManyPoliciesException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPoliciesException, __BaseException>) {
    super({
      name: "TooManyPoliciesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPoliciesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the parameters for CreateLBCookieStickinessPolicy.</p>
 */
export interface CreateLBCookieStickinessPolicyInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.</p>
   */
  CookieExpirationPeriod?: number;
}

/**
 * <p>Contains the output for CreateLBCookieStickinessPolicy.</p>
 */
export interface CreateLBCookieStickinessPolicyOutput {}

/**
 * <p>The specified load balancer name already exists for this account.</p>
 */
export class DuplicateAccessPointNameException extends __BaseException {
  readonly name: "DuplicateAccessPointNameException" = "DuplicateAccessPointNameException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateAccessPointNameException, __BaseException>) {
    super({
      name: "DuplicateAccessPointNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateAccessPointNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
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
 * <p>The quota for the number of load balancers has been reached.</p>
 */
export class TooManyAccessPointsException extends __BaseException {
  readonly name: "TooManyAccessPointsException" = "TooManyAccessPointsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyAccessPointsException, __BaseException>) {
    super({
      name: "TooManyAccessPointsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyAccessPointsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified protocol or signature version is not supported.</p>
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

/**
 * <p>Contains the parameters for CreateLoadBalancerListeners.</p>
 */
export interface CreateLoadBalancerListenerInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The listeners.</p>
   */
  Listeners: Listener[] | undefined;
}

/**
 * <p>Contains the parameters for CreateLoadBalancerListener.</p>
 */
export interface CreateLoadBalancerListenerOutput {}

/**
 * <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
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
 * <p>Information about a policy attribute.</p>
 */
export interface PolicyAttribute {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

/**
 * <p>Contains the parameters for CreateLoadBalancerPolicy.</p>
 */
export interface CreateLoadBalancerPolicyInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the base policy type.
   *    	   To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.</p>
   */
  PolicyTypeName: string | undefined;

  /**
   * <p>The policy attributes.</p>
   */
  PolicyAttributes?: PolicyAttribute[];
}

/**
 * <p>Contains the output of CreateLoadBalancerPolicy.</p>
 */
export interface CreateLoadBalancerPolicyOutput {}

/**
 * <p>One or more of the specified policy types do not exist.</p>
 */
export class PolicyTypeNotFoundException extends __BaseException {
  readonly name: "PolicyTypeNotFoundException" = "PolicyTypeNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyTypeNotFoundException, __BaseException>) {
    super({
      name: "PolicyTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyTypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about the <code>CrossZoneLoadBalancing</code> attribute.</p>
 */
export interface CrossZoneLoadBalancing {
  /**
   * <p>Specifies whether cross-zone load balancing is enabled for the load balancer.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * <p>Contains the parameters for DeleteLoadBalancer.</p>
 */
export interface DeleteAccessPointInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

/**
 * <p>Contains the output of DeleteLoadBalancer.</p>
 */
export interface DeleteAccessPointOutput {}

/**
 * <p>Contains the parameters for DeleteLoadBalancerListeners.</p>
 */
export interface DeleteLoadBalancerListenerInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The client port numbers of the listeners.</p>
   */
  LoadBalancerPorts: number[] | undefined;
}

/**
 * <p>Contains the output of DeleteLoadBalancerListeners.</p>
 */
export interface DeleteLoadBalancerListenerOutput {}

/**
 * <p>Contains the parameters for DeleteLoadBalancerPolicy.</p>
 */
export interface DeleteLoadBalancerPolicyInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;
}

/**
 * <p>Contains the output of DeleteLoadBalancerPolicy.</p>
 */
export interface DeleteLoadBalancerPolicyOutput {}

/**
 * <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
 */
export class DependencyThrottleException extends __BaseException {
  readonly name: "DependencyThrottleException" = "DependencyThrottleException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyThrottleException, __BaseException>) {
    super({
      name: "DependencyThrottleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyThrottleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The ID of an EC2 instance.</p>
 */
export interface Instance {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

/**
 * <p>Contains the parameters for DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterEndPointsInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the instances.</p>
   */
  Instances: Instance[] | undefined;
}

/**
 * <p>Contains the output of DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterEndPointsOutput {
  /**
   * <p>The remaining instances registered with the load balancer.</p>
   */
  Instances?: Instance[];
}

/**
 * <p>The specified endpoint is not valid.</p>
 */
export class InvalidEndPointException extends __BaseException {
  readonly name: "InvalidEndPointException" = "InvalidEndPointException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndPointException, __BaseException>) {
    super({
      name: "InvalidEndPointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndPointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeAccessPointsInput {
  /**
   * <p>The names of the load balancers.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call (a number from 1 to 400). The default is 400.</p>
   */
  PageSize?: number;
}

/**
 * <p>The policies enabled for a listener.</p>
 */
export interface ListenerDescription {
  /**
   * <p>The listener.</p>
   */
  Listener?: Listener;

  /**
   * <p>The policies. If there are no policies enabled, the list is empty.</p>
   */
  PolicyNames?: string[];
}

/**
 * <p>Information about a policy for duration-based session stickiness.</p>
 */
export interface LBCookieStickinessPolicy {
  /**
   * <p>The name of the policy. This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName?: string;

  /**
   * <p>The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.</p>
   */
  CookieExpirationPeriod?: number;
}

/**
 * <p>The policies for a load balancer.</p>
 */
export interface Policies {
  /**
   * <p>The stickiness policies created using <a>CreateAppCookieStickinessPolicy</a>.</p>
   */
  AppCookieStickinessPolicies?: AppCookieStickinessPolicy[];

  /**
   * <p>The stickiness policies created using <a>CreateLBCookieStickinessPolicy</a>.</p>
   */
  LBCookieStickinessPolicies?: LBCookieStickinessPolicy[];

  /**
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: string[];
}

/**
 * <p>Information about a source security group.</p>
 */
export interface SourceSecurityGroup {
  /**
   * <p>The owner of the security group.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface LoadBalancerDescription {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The DNS name of the load balancer.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html">Configure a Custom Domain Name</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  CanonicalHostedZoneName?: string;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneNameID?: string;

  /**
   * <p>The listeners for the load balancer.</p>
   */
  ListenerDescriptions?: ListenerDescription[];

  /**
   * <p>The policies defined for the load balancer.</p>
   */
  Policies?: Policies;

  /**
   * <p>Information about your EC2 instances.</p>
   */
  BackendServerDescriptions?: BackendServerDescription[];

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The IDs of the subnets for the load balancer.</p>
   */
  Subnets?: string[];

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VPCId?: string;

  /**
   * <p>The IDs of the instances for the load balancer.</p>
   */
  Instances?: Instance[];

  /**
   * <p>Information about the health checks conducted on the load balancer.</p>
   */
  HealthCheck?: HealthCheck;

  /**
   * <p>The security group for the load balancer, which you can use as part of your inbound rules for your registered instances.
   *             To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.</p>
   */
  SourceSecurityGroup?: SourceSecurityGroup;

  /**
   * <p>The security groups for the load balancer. Valid only for load balancers in a VPC.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The type of load balancer. Valid only for load balancers in a VPC.</p>
   *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer
   *            has a public DNS name that resolves to a public IP address.</p>
   *         <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public
   *            DNS name that resolves to a private IP address.</p>
   */
  Scheme?: string;
}

/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeAccessPointsOutput {
  /**
   * <p>Information about the load balancers.</p>
   */
  LoadBalancerDescriptions?: LoadBalancerDescription[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  NextMarker?: string;
}

export interface DescribeAccountLimitsInput {
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;
}

/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS account.</p>
 */
export interface Limit {
  /**
   * <p>The name of the limit. The possible values are:</p>
   *         <ul>
   *             <li>
   *                 <p>classic-listeners</p>
   *             </li>
   *             <li>
   *                 <p>classic-load-balancers</p>
   *             </li>
   *             <li>
   *                 <p>classic-registered-instances</p>
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
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  NextMarker?: string;
}

/**
 * <p>Contains the parameters for DescribeInstanceHealth.</p>
 */
export interface DescribeEndPointStateInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the instances.</p>
   */
  Instances?: Instance[];
}

/**
 * <p>Information about the state of an EC2 instance.</p>
 */
export interface InstanceState {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The current state of the instance.</p>
   *         <p>Valid values: <code>InService</code> | <code>OutOfService</code> | <code>Unknown</code>
   *          </p>
   */
  State?: string;

  /**
   * <p>Information about the cause of <code>OutOfService</code> instances.
   *          Specifically, whether the cause is Elastic Load Balancing or the instance.</p>
   *         <p>Valid values: <code>ELB</code> | <code>Instance</code> | <code>N/A</code>
   *          </p>
   */
  ReasonCode?: string;

  /**
   * <p>A description of the instance state. This string can contain one or more of the following messages.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>N/A</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>A transient error occurred. Please try again later.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance has failed at least the UnhealthyThreshold number of health checks consecutively.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance has not passed the configured HealthyThreshold number of health checks consecutively.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance registration is still in progress.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance is in the EC2 Availability Zone for which LoadBalancer is not configured to route traffic to.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance is not currently registered with the LoadBalancer.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance deregistration currently in progress.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Disable Availability Zone is currently in progress.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance is in pending state.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance is in stopped state.</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Instance is in terminated state.</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Description?: string;
}

/**
 * <p>Contains the output for DescribeInstanceHealth.</p>
 */
export interface DescribeEndPointStateOutput {
  /**
   * <p>Information about the health of the instances.</p>
   */
  InstanceStates?: InstanceState[];
}

/**
 * <p>Contains the parameters for DescribeLoadBalancerAttributes.</p>
 */
export interface DescribeLoadBalancerAttributesInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

/**
 * <p>The attributes for a load balancer.</p>
 */
export interface LoadBalancerAttributes {
  /**
   * <p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  CrossZoneLoadBalancing?: CrossZoneLoadBalancing;

  /**
   * <p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  AccessLog?: AccessLog;

  /**
   * <p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  ConnectionDraining?: ConnectionDraining;

  /**
   * <p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p>
   *         <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer.
   *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  ConnectionSettings?: ConnectionSettings;

  /**
   * <p>Any additional attributes.</p>
   */
  AdditionalAttributes?: AdditionalAttribute[];
}

/**
 * <p>Contains the output of DescribeLoadBalancerAttributes.</p>
 */
export interface DescribeLoadBalancerAttributesOutput {
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  LoadBalancerAttributes?: LoadBalancerAttributes;
}

/**
 * <p>The specified load balancer attribute does not exist.</p>
 */
export class LoadBalancerAttributeNotFoundException extends __BaseException {
  readonly name: "LoadBalancerAttributeNotFoundException" = "LoadBalancerAttributeNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoadBalancerAttributeNotFoundException, __BaseException>) {
    super({
      name: "LoadBalancerAttributeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LoadBalancerAttributeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The names of the policies.</p>
   */
  PolicyNames?: string[];
}

/**
 * <p>Information about a policy attribute.</p>
 */
export interface PolicyAttributeDescription {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

/**
 * <p>Information about a policy.</p>
 */
export interface PolicyDescription {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The name of the policy type.</p>
   */
  PolicyTypeName?: string;

  /**
   * <p>The policy attributes.</p>
   */
  PolicyAttributeDescriptions?: PolicyAttributeDescription[];
}

/**
 * <p>Contains the output of DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesOutput {
  /**
   * <p>Information about the policies.</p>
   */
  PolicyDescriptions?: PolicyDescription[];
}

/**
 * <p>One or more of the specified policies do not exist.</p>
 */
export class PolicyNotFoundException extends __BaseException {
  readonly name: "PolicyNotFoundException" = "PolicyNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFoundException, __BaseException>) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesInput {
  /**
   * <p>The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.</p>
   */
  PolicyTypeNames?: string[];
}

/**
 * <p>Information about a policy attribute type.</p>
 */
export interface PolicyAttributeTypeDescription {
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The type of the attribute. For example, <code>Boolean</code> or <code>Integer</code>.</p>
   */
  AttributeType?: string;

  /**
   * <p>A description of the attribute.</p>
   */
  Description?: string;

  /**
   * <p>The default value of the attribute, if applicable.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The cardinality of the attribute.</p>
   *         <p>Valid values:</p>
   *             <ul>
   *             <li>
   *                <p>ONE(1) : Single value required</p>
   *             </li>
   *             <li>
   *                <p>ZERO_OR_ONE(0..1) : Up to one value is allowed</p>
   *             </li>
   *             <li>
   *                <p>ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed</p>
   *             </li>
   *             <li>
   *                <p>ONE_OR_MORE(1..*0) : Required. Multiple values are allowed</p>
   *             </li>
   *          </ul>
   */
  Cardinality?: string;
}

/**
 * <p>Information about a policy type.</p>
 */
export interface PolicyTypeDescription {
  /**
   * <p>The name of the policy type.</p>
   */
  PolicyTypeName?: string;

  /**
   * <p>A description of the policy type.</p>
   */
  Description?: string;

  /**
   * <p>The description of the policy attributes associated with the policies defined by Elastic Load Balancing.</p>
   */
  PolicyAttributeTypeDescriptions?: PolicyAttributeTypeDescription[];
}

/**
 * <p>Contains the output of DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesOutput {
  /**
   * <p>Information about the policy types.</p>
   */
  PolicyTypeDescriptions?: PolicyTypeDescription[];
}

/**
 * <p>Contains the parameters for DescribeTags.</p>
 */
export interface DescribeTagsInput {
  /**
   * <p>The names of the load balancers.</p>
   */
  LoadBalancerNames: string[] | undefined;
}

/**
 * <p>The tags associated with a load balancer.</p>
 */
export interface TagDescription {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Contains the output for DescribeTags.</p>
 */
export interface DescribeTagsOutput {
  /**
   * <p>Information about the tags.</p>
   */
  TagDescriptions?: TagDescription[];
}

/**
 * <p>Contains the parameters for DetachLoadBalancerFromSubnets.</p>
 */
export interface DetachLoadBalancerFromSubnetsInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   */
  Subnets: string[] | undefined;
}

/**
 * <p>Contains the output of DetachLoadBalancerFromSubnets.</p>
 */
export interface DetachLoadBalancerFromSubnetsOutput {
  /**
   * <p>The IDs of the remaining subnets for the load balancer.</p>
   */
  Subnets?: string[];
}

/**
 * <p>Contains the parameters for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface RemoveAvailabilityZonesInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The Availability Zones.</p>
   */
  AvailabilityZones: string[] | undefined;
}

/**
 * <p>Contains the output for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface RemoveAvailabilityZonesOutput {
  /**
   * <p>The remaining Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: string[];
}

/**
 * <p>Contains the parameters for ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The attributes for the load balancer.</p>
   */
  LoadBalancerAttributes: LoadBalancerAttributes | undefined;
}

/**
 * <p>Contains the output of ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesOutput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>Information about the load balancer attributes.</p>
   */
  LoadBalancerAttributes?: LoadBalancerAttributes;
}

/**
 * <p>Contains the parameters for RegisterInstancesWithLoadBalancer.</p>
 */
export interface RegisterEndPointsInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the instances.</p>
   */
  Instances: Instance[] | undefined;
}

/**
 * <p>Contains the output of RegisterInstancesWithLoadBalancer.</p>
 */
export interface RegisterEndPointsOutput {
  /**
   * <p>The updated list of instances for the load balancer.</p>
   */
  Instances?: Instance[];
}

/**
 * <p>The key of a tag.</p>
 */
export interface TagKeyOnly {
  /**
   * <p>The name of the key.</p>
   */
  Key?: string;
}

/**
 * <p>Contains the parameters for RemoveTags.</p>
 */
export interface RemoveTagsInput {
  /**
   * <p>The name of the load balancer. You can specify a maximum of one load balancer name.</p>
   */
  LoadBalancerNames: string[] | undefined;

  /**
   * <p>The list of tag keys to remove.</p>
   */
  Tags: TagKeyOnly[] | undefined;
}

/**
 * <p>Contains the output of RemoveTags.</p>
 */
export interface RemoveTagsOutput {}

/**
 * <p>The load balancer does not have a listener configured at the specified port.</p>
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
 * <p>Contains the parameters for SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The port that uses the specified SSL certificate.</p>
   */
  LoadBalancerPort: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL certificate.</p>
   */
  SSLCertificateId: string | undefined;
}

/**
 * <p>Contains the output of SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateOutput {}

/**
 * <p>Contains the parameters for SetLoadBalancerPoliciesForBackendServer.</p>
 */
export interface SetLoadBalancerPoliciesForBackendServerInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The port number associated with the EC2 instance.</p>
   */
  InstancePort: number | undefined;

  /**
   * <p>The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.</p>
   */
  PolicyNames: string[] | undefined;
}

/**
 * <p>Contains the output of SetLoadBalancerPoliciesForBackendServer.</p>
 */
export interface SetLoadBalancerPoliciesForBackendServerOutput {}

/**
 * <p>Contains the parameters for SetLoadBalancePoliciesOfListener.</p>
 */
export interface SetLoadBalancerPoliciesOfListenerInput {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The external port of the load balancer.</p>
   */
  LoadBalancerPort: number | undefined;

  /**
   * <p>The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.</p>
   */
  PolicyNames: string[] | undefined;
}

/**
 * <p>Contains the output of SetLoadBalancePoliciesOfListener.</p>
 */
export interface SetLoadBalancerPoliciesOfListenerOutput {}

/**
 * @internal
 */
export const AccessLogFilterSensitiveLog = (obj: AccessLog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddAvailabilityZonesInputFilterSensitiveLog = (obj: AddAvailabilityZonesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddAvailabilityZonesOutputFilterSensitiveLog = (obj: AddAvailabilityZonesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdditionalAttributeFilterSensitiveLog = (obj: AdditionalAttribute): any => ({
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
export const AppCookieStickinessPolicyFilterSensitiveLog = (obj: AppCookieStickinessPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplySecurityGroupsToLoadBalancerInputFilterSensitiveLog = (
  obj: ApplySecurityGroupsToLoadBalancerInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplySecurityGroupsToLoadBalancerOutputFilterSensitiveLog = (
  obj: ApplySecurityGroupsToLoadBalancerOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachLoadBalancerToSubnetsInputFilterSensitiveLog = (obj: AttachLoadBalancerToSubnetsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachLoadBalancerToSubnetsOutputFilterSensitiveLog = (obj: AttachLoadBalancerToSubnetsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendServerDescriptionFilterSensitiveLog = (obj: BackendServerDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HealthCheckFilterSensitiveLog = (obj: HealthCheck): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureHealthCheckInputFilterSensitiveLog = (obj: ConfigureHealthCheckInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigureHealthCheckOutputFilterSensitiveLog = (obj: ConfigureHealthCheckOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionDrainingFilterSensitiveLog = (obj: ConnectionDraining): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionSettingsFilterSensitiveLog = (obj: ConnectionSettings): any => ({
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
export const CreateAccessPointInputFilterSensitiveLog = (obj: CreateAccessPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessPointOutputFilterSensitiveLog = (obj: CreateAccessPointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppCookieStickinessPolicyInputFilterSensitiveLog = (
  obj: CreateAppCookieStickinessPolicyInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppCookieStickinessPolicyOutputFilterSensitiveLog = (
  obj: CreateAppCookieStickinessPolicyOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLBCookieStickinessPolicyInputFilterSensitiveLog = (
  obj: CreateLBCookieStickinessPolicyInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLBCookieStickinessPolicyOutputFilterSensitiveLog = (
  obj: CreateLBCookieStickinessPolicyOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoadBalancerListenerInputFilterSensitiveLog = (obj: CreateLoadBalancerListenerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoadBalancerListenerOutputFilterSensitiveLog = (obj: CreateLoadBalancerListenerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyAttributeFilterSensitiveLog = (obj: PolicyAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoadBalancerPolicyInputFilterSensitiveLog = (obj: CreateLoadBalancerPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLoadBalancerPolicyOutputFilterSensitiveLog = (obj: CreateLoadBalancerPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrossZoneLoadBalancingFilterSensitiveLog = (obj: CrossZoneLoadBalancing): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPointInputFilterSensitiveLog = (obj: DeleteAccessPointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPointOutputFilterSensitiveLog = (obj: DeleteAccessPointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoadBalancerListenerInputFilterSensitiveLog = (obj: DeleteLoadBalancerListenerInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoadBalancerListenerOutputFilterSensitiveLog = (obj: DeleteLoadBalancerListenerOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoadBalancerPolicyInputFilterSensitiveLog = (obj: DeleteLoadBalancerPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoadBalancerPolicyOutputFilterSensitiveLog = (obj: DeleteLoadBalancerPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterEndPointsInputFilterSensitiveLog = (obj: DeregisterEndPointsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterEndPointsOutputFilterSensitiveLog = (obj: DeregisterEndPointsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccessPointsInputFilterSensitiveLog = (obj: DescribeAccessPointsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListenerDescriptionFilterSensitiveLog = (obj: ListenerDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LBCookieStickinessPolicyFilterSensitiveLog = (obj: LBCookieStickinessPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PoliciesFilterSensitiveLog = (obj: Policies): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceSecurityGroupFilterSensitiveLog = (obj: SourceSecurityGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerDescriptionFilterSensitiveLog = (obj: LoadBalancerDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccessPointsOutputFilterSensitiveLog = (obj: DescribeAccessPointsOutput): any => ({
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
export const DescribeEndPointStateInputFilterSensitiveLog = (obj: DescribeEndPointStateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStateFilterSensitiveLog = (obj: InstanceState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndPointStateOutputFilterSensitiveLog = (obj: DescribeEndPointStateOutput): any => ({
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
export const LoadBalancerAttributesFilterSensitiveLog = (obj: LoadBalancerAttributes): any => ({
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
export const DescribeLoadBalancerPoliciesInputFilterSensitiveLog = (obj: DescribeLoadBalancerPoliciesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyAttributeDescriptionFilterSensitiveLog = (obj: PolicyAttributeDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyDescriptionFilterSensitiveLog = (obj: PolicyDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerPoliciesOutputFilterSensitiveLog = (obj: DescribeLoadBalancerPoliciesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerPolicyTypesInputFilterSensitiveLog = (
  obj: DescribeLoadBalancerPolicyTypesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyAttributeTypeDescriptionFilterSensitiveLog = (obj: PolicyAttributeTypeDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyTypeDescriptionFilterSensitiveLog = (obj: PolicyTypeDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerPolicyTypesOutputFilterSensitiveLog = (
  obj: DescribeLoadBalancerPolicyTypesOutput
): any => ({
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
export const DetachLoadBalancerFromSubnetsInputFilterSensitiveLog = (obj: DetachLoadBalancerFromSubnetsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachLoadBalancerFromSubnetsOutputFilterSensitiveLog = (
  obj: DetachLoadBalancerFromSubnetsOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveAvailabilityZonesInputFilterSensitiveLog = (obj: RemoveAvailabilityZonesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveAvailabilityZonesOutputFilterSensitiveLog = (obj: RemoveAvailabilityZonesOutput): any => ({
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
export const RegisterEndPointsInputFilterSensitiveLog = (obj: RegisterEndPointsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterEndPointsOutputFilterSensitiveLog = (obj: RegisterEndPointsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagKeyOnlyFilterSensitiveLog = (obj: TagKeyOnly): any => ({
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
export const SetLoadBalancerListenerSSLCertificateInputFilterSensitiveLog = (
  obj: SetLoadBalancerListenerSSLCertificateInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoadBalancerListenerSSLCertificateOutputFilterSensitiveLog = (
  obj: SetLoadBalancerListenerSSLCertificateOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoadBalancerPoliciesForBackendServerInputFilterSensitiveLog = (
  obj: SetLoadBalancerPoliciesForBackendServerInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoadBalancerPoliciesForBackendServerOutputFilterSensitiveLog = (
  obj: SetLoadBalancerPoliciesForBackendServerOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoadBalancerPoliciesOfListenerInputFilterSensitiveLog = (
  obj: SetLoadBalancerPoliciesOfListenerInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoadBalancerPoliciesOfListenerOutputFilterSensitiveLog = (
  obj: SetLoadBalancerPoliciesOfListenerOutput
): any => ({
  ...obj,
});
