// smithy-typescript generated code
/**
 * Information about the `AccessLog` attribute.
 *
 * @public
 */
export interface AccessLog {
  /**
   * Specifies whether access logs are enabled for the load balancer.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The name of the Amazon S3 bucket where the access logs are stored.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.
   *
   * Default: 60 minutes
   *
   * @public
   */
  EmitInterval?: number | undefined;

  /**
   * The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. If the prefix is not provided, the log is placed at the root level of the bucket.
   *
   * @public
   */
  S3BucketPrefix?: string | undefined;
}

/**
 * Contains the parameters for EnableAvailabilityZonesForLoadBalancer.
 *
 * @public
 */
export interface AddAvailabilityZonesInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The Availability Zones. These must be in the same region as the load balancer.
   *
   * @public
   */
  AvailabilityZones: string[] | undefined;
}

/**
 * Contains the output of EnableAvailabilityZonesForLoadBalancer.
 *
 * @public
 */
export interface AddAvailabilityZonesOutput {
  /**
   * The updated list of Availability Zones for the load balancer.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * Information about additional load balancer attributes.
 *
 * @public
 */
export interface AdditionalAttribute {
  /**
   * The name of the attribute.
   *
   * The following attribute is supported.
   *
   * - `elb.http.desyncmitigationmode` - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are `monitor`, `defensive`, and `strictest`. The default is `defensive`.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * This value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
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
 * Contains the parameters for AddTags.
 *
 * @public
 */
export interface AddTagsInput {
  /**
   * The name of the load balancer. You can specify one load balancer only.
   *
   * @public
   */
  LoadBalancerNames: string[] | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * Contains the output of AddTags.
 *
 * @public
 */
export interface AddTagsOutput {}

/**
 * Information about a policy for application-controlled session stickiness.
 *
 * @public
 */
export interface AppCookieStickinessPolicy {
  /**
   * The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The name of the application cookie used for stickiness.
   *
   * @public
   */
  CookieName?: string | undefined;
}

/**
 * Contains the parameters for ApplySecurityGroupsToLoadBalancer.
 *
 * @public
 */
export interface ApplySecurityGroupsToLoadBalancerInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.
   *
   * @public
   */
  SecurityGroups: string[] | undefined;
}

/**
 * Contains the output of ApplySecurityGroupsToLoadBalancer.
 *
 * @public
 */
export interface ApplySecurityGroupsToLoadBalancerOutput {
  /**
   * The IDs of the security groups associated with the load balancer.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * Contains the parameters for AttachLoaBalancerToSubnets.
 *
 * @public
 */
export interface AttachLoadBalancerToSubnetsInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The IDs of the subnets to add. You can add only one subnet per Availability Zone.
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * Contains the output of AttachLoadBalancerToSubnets.
 *
 * @public
 */
export interface AttachLoadBalancerToSubnetsOutput {
  /**
   * The IDs of the subnets attached to the load balancer.
   *
   * @public
   */
  Subnets?: string[] | undefined;
}

/**
 * Information about the configuration of an EC2 instance.
 *
 * @public
 */
export interface BackendServerDescription {
  /**
   * The port on which the EC2 instance is listening.
   *
   * @public
   */
  InstancePort?: number | undefined;

  /**
   * The names of the policies enabled for the EC2 instance.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * Information about a health check.
 *
 * @public
 */
export interface HealthCheck {
  /**
   * The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.
   *
   * TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.
   *
   * SSL is also specified as SSL: port pair, for example, SSL:5000.
   *
   * For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.
   *
   * The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The approximate interval, in seconds, between health checks of an individual instance.
   *
   * @public
   */
  Interval: number | undefined;

  /**
   * The amount of time, in seconds, during which no response means a failed health check.
   *
   * This value must be less than the `Interval` value.
   *
   * @public
   */
  Timeout: number | undefined;

  /**
   * The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.
   *
   * @public
   */
  UnhealthyThreshold: number | undefined;

  /**
   * The number of consecutive health checks successes required before moving the instance to the `Healthy` state.
   *
   * @public
   */
  HealthyThreshold: number | undefined;
}

/**
 * Contains the parameters for ConfigureHealthCheck.
 *
 * @public
 */
export interface ConfigureHealthCheckInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The configuration information.
   *
   * @public
   */
  HealthCheck: HealthCheck | undefined;
}

/**
 * Contains the output of ConfigureHealthCheck.
 *
 * @public
 */
export interface ConfigureHealthCheckOutput {
  /**
   * The updated health check.
   *
   * @public
   */
  HealthCheck?: HealthCheck | undefined;
}

/**
 * Information about the `ConnectionDraining` attribute.
 *
 * @public
 */
export interface ConnectionDraining {
  /**
   * Specifies whether connection draining is enabled for the load balancer.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * Information about the `ConnectionSettings` attribute.
 *
 * @public
 */
export interface ConnectionSettings {
  /**
   * The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.
   *
   * @public
   */
  IdleTimeout: number | undefined;
}

/**
 * Information about a listener.
 *
 * For information about the protocols and the ports supported by Elastic Load Balancing, see [Listeners for Your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html) in the *Classic Load Balancers Guide*.
 *
 * @public
 */
export interface Listener {
  /**
   * The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
   *
   * @public
   */
  Protocol: string | undefined;

  /**
   * The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
   *
   * @public
   */
  LoadBalancerPort: number | undefined;

  /**
   * The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.
   *
   * If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.
   *
   * If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.
   *
   *
   *
   * If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.
   *
   * @public
   */
  InstanceProtocol?: string | undefined;

  /**
   * The port on which the instance is listening.
   *
   * @public
   */
  InstancePort: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the server certificate.
   *
   * @public
   */
  SSLCertificateId?: string | undefined;
}

/**
 * Contains the parameters for CreateLoadBalancer.
 *
 * @public
 */
export interface CreateAccessPointInput {
  /**
   * The name of the load balancer.
   *
   * This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The listeners.
   *
   * For more information, see [Listeners for Your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  Listeners: Listener[] | undefined;

  /**
   * One or more Availability Zones from the same region as the load balancer.
   *
   * You must specify at least one Availability Zone.
   *
   * You can add more Availability Zones after you create the load balancer using EnableAvailabilityZonesForLoadBalancer.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The IDs of the subnets in your VPC to attach to the load balancer. Specify one subnet per Availability Zone specified in `AvailabilityZones`.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * The IDs of the security groups to assign to the load balancer.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The type of a load balancer. Valid only for load balancers in a VPC.
   *
   *
   *
   * By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses. For more information about Internet-facing and Internal load balancers, see [Load Balancer Scheme](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme) in the *Elastic Load Balancing User Guide*.
   *
   * Specify `internal` to create a load balancer with a DNS name that resolves to private IP addresses.
   *
   * @public
   */
  Scheme?: string | undefined;

  /**
   * A list of tags to assign to the load balancer.
   *
   * For more information about tagging your load balancer, see [Tag Your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the output for CreateLoadBalancer.
 *
 * @public
 */
export interface CreateAccessPointOutput {
  /**
   * The DNS name of the load balancer.
   *
   * @public
   */
  DNSName?: string | undefined;
}

/**
 * Contains the parameters for CreateAppCookieStickinessPolicy.
 *
 * @public
 */
export interface CreateAppCookieStickinessPolicyInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The name of the application cookie used for stickiness.
   *
   * @public
   */
  CookieName: string | undefined;
}

/**
 * Contains the output for CreateAppCookieStickinessPolicy.
 *
 * @public
 */
export interface CreateAppCookieStickinessPolicyOutput {}

/**
 * Contains the parameters for CreateLBCookieStickinessPolicy.
 *
 * @public
 */
export interface CreateLBCookieStickinessPolicyInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
   *
   * @public
   */
  CookieExpirationPeriod?: number | undefined;
}

/**
 * Contains the output for CreateLBCookieStickinessPolicy.
 *
 * @public
 */
export interface CreateLBCookieStickinessPolicyOutput {}

/**
 * Contains the parameters for CreateLoadBalancerListeners.
 *
 * @public
 */
export interface CreateLoadBalancerListenerInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The listeners.
   *
   * @public
   */
  Listeners: Listener[] | undefined;
}

/**
 * Contains the parameters for CreateLoadBalancerListener.
 *
 * @public
 */
export interface CreateLoadBalancerListenerOutput {}

/**
 * Information about a policy attribute.
 *
 * @public
 */
export interface PolicyAttribute {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * Contains the parameters for CreateLoadBalancerPolicy.
 *
 * @public
 */
export interface CreateLoadBalancerPolicyInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The name of the base policy type. To get the list of policy types, use DescribeLoadBalancerPolicyTypes.
   *
   * @public
   */
  PolicyTypeName: string | undefined;

  /**
   * The policy attributes.
   *
   * @public
   */
  PolicyAttributes?: PolicyAttribute[] | undefined;
}

/**
 * Contains the output of CreateLoadBalancerPolicy.
 *
 * @public
 */
export interface CreateLoadBalancerPolicyOutput {}

/**
 * Information about the `CrossZoneLoadBalancing` attribute.
 *
 * @public
 */
export interface CrossZoneLoadBalancing {
  /**
   * Specifies whether cross-zone load balancing is enabled for the load balancer.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Contains the parameters for DeleteLoadBalancer.
 *
 * @public
 */
export interface DeleteAccessPointInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;
}

/**
 * Contains the output of DeleteLoadBalancer.
 *
 * @public
 */
export interface DeleteAccessPointOutput {}

/**
 * Contains the parameters for DeleteLoadBalancerListeners.
 *
 * @public
 */
export interface DeleteLoadBalancerListenerInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The client port numbers of the listeners.
   *
   * @public
   */
  LoadBalancerPorts: number[] | undefined;
}

/**
 * Contains the output of DeleteLoadBalancerListeners.
 *
 * @public
 */
export interface DeleteLoadBalancerListenerOutput {}

/**
 * Contains the parameters for DeleteLoadBalancerPolicy.
 *
 * @public
 */
export interface DeleteLoadBalancerPolicyInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * Contains the output of DeleteLoadBalancerPolicy.
 *
 * @public
 */
export interface DeleteLoadBalancerPolicyOutput {}

/**
 * The ID of an EC2 instance.
 *
 * @public
 */
export interface Instance {
  /**
   * The instance ID.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Contains the parameters for DeregisterInstancesFromLoadBalancer.
 *
 * @public
 */
export interface DeregisterEndPointsInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The IDs of the instances.
   *
   * @public
   */
  Instances: Instance[] | undefined;
}

/**
 * Contains the output of DeregisterInstancesFromLoadBalancer.
 *
 * @public
 */
export interface DeregisterEndPointsOutput {
  /**
   * The remaining instances registered with the load balancer.
   *
   * @public
   */
  Instances?: Instance[] | undefined;
}

/**
 * Contains the parameters for DescribeLoadBalancers.
 *
 * @public
 */
export interface DescribeAccessPointsInput {
  /**
   * The names of the load balancers.
   *
   * @public
   */
  LoadBalancerNames?: string[] | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of results to return with this call (a number from 1 to 400). The default is 400.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * The policies enabled for a listener.
 *
 * @public
 */
export interface ListenerDescription {
  /**
   * The listener.
   *
   * @public
   */
  Listener?: Listener | undefined;

  /**
   * The policies. If there are no policies enabled, the list is empty.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * Information about a policy for duration-based session stickiness.
 *
 * @public
 */
export interface LBCookieStickinessPolicy {
  /**
   * The name of the policy. This name must be unique within the set of policies for this load balancer.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
   *
   * @public
   */
  CookieExpirationPeriod?: number | undefined;
}

/**
 * The policies for a load balancer.
 *
 * @public
 */
export interface Policies {
  /**
   * The stickiness policies created using CreateAppCookieStickinessPolicy.
   *
   * @public
   */
  AppCookieStickinessPolicies?: AppCookieStickinessPolicy[] | undefined;

  /**
   * The stickiness policies created using CreateLBCookieStickinessPolicy.
   *
   * @public
   */
  LBCookieStickinessPolicies?: LBCookieStickinessPolicy[] | undefined;

  /**
   * The policies other than the stickiness policies.
   *
   * @public
   */
  OtherPolicies?: string[] | undefined;
}

/**
 * Information about a source security group.
 *
 * @public
 */
export interface SourceSecurityGroup {
  /**
   * The owner of the security group.
   *
   * @public
   */
  OwnerAlias?: string | undefined;

  /**
   * The name of the security group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Information about a load balancer.
 *
 * @public
 */
export interface LoadBalancerDescription {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The DNS name of the load balancer.
   *
   * @public
   */
  DNSName?: string | undefined;

  /**
   * The DNS name of the load balancer.
   *
   * For more information, see [Configure a Custom Domain Name](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  CanonicalHostedZoneName?: string | undefined;

  /**
   * The ID of the Amazon Route 53 hosted zone for the load balancer.
   *
   * @public
   */
  CanonicalHostedZoneNameID?: string | undefined;

  /**
   * The listeners for the load balancer.
   *
   * @public
   */
  ListenerDescriptions?: ListenerDescription[] | undefined;

  /**
   * The policies defined for the load balancer.
   *
   * @public
   */
  Policies?: Policies | undefined;

  /**
   * Information about your EC2 instances.
   *
   * @public
   */
  BackendServerDescriptions?: BackendServerDescription[] | undefined;

  /**
   * The Availability Zones for the load balancer.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The IDs of the subnets for the load balancer.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * The ID of the VPC for the load balancer.
   *
   * @public
   */
  VPCId?: string | undefined;

  /**
   * The IDs of the instances for the load balancer.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * Information about the health checks conducted on the load balancer.
   *
   * @public
   */
  HealthCheck?: HealthCheck | undefined;

  /**
   * The security group for the load balancer, which you can use as part of your inbound rules for your registered instances. To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.
   *
   * @public
   */
  SourceSecurityGroup?: SourceSecurityGroup | undefined;

  /**
   * The security groups for the load balancer. Valid only for load balancers in a VPC.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The date and time the load balancer was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The type of load balancer. Valid only for load balancers in a VPC.
   *
   * If `Scheme` is `internet-facing`, the load balancer has a public DNS name that resolves to a public IP address.
   *
   * If `Scheme` is `internal`, the load balancer has a public DNS name that resolves to a private IP address.
   *
   * @public
   */
  Scheme?: string | undefined;
}

/**
 * Contains the parameters for DescribeLoadBalancers.
 *
 * @public
 */
export interface DescribeAccessPointsOutput {
  /**
   * Information about the load balancers.
   *
   * @public
   */
  LoadBalancerDescriptions?: LoadBalancerDescription[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

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
 * Information about an Elastic Load Balancing resource limit for your AWS account.
 *
 * @public
 */
export interface Limit {
  /**
   * The name of the limit. The possible values are:
   *
   * - classic-listeners
   * - classic-load-balancers
   * - classic-registered-instances
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
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * Contains the parameters for DescribeInstanceHealth.
 *
 * @public
 */
export interface DescribeEndPointStateInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The IDs of the instances.
   *
   * @public
   */
  Instances?: Instance[] | undefined;
}

/**
 * Information about the state of an EC2 instance.
 *
 * @public
 */
export interface InstanceState {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The current state of the instance.
   *
   * Valid values: `InService` | `OutOfService` | `Unknown`
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Information about the cause of `OutOfService` instances. Specifically, whether the cause is Elastic Load Balancing or the instance.
   *
   * Valid values: `ELB` | `Instance` | `N/A`
   *
   * @public
   */
  ReasonCode?: string | undefined;

  /**
   * A description of the instance state. This string can contain one or more of the following messages.
   *
   * - `N/A`
   * - `A transient error occurred. Please try again later.`
   * - `Instance has failed at least the UnhealthyThreshold number of health checks consecutively.`
   * - `Instance has not passed the configured HealthyThreshold number of health checks consecutively.`
   * - `Instance registration is still in progress.`
   * - `Instance is in the EC2 Availability Zone for which LoadBalancer is not configured to route traffic to.`
   * - `Instance is not currently registered with the LoadBalancer.`
   * - `Instance deregistration currently in progress.`
   * - `Disable Availability Zone is currently in progress.`
   * - `Instance is in pending state.`
   * - `Instance is in stopped state.`
   * - `Instance is in terminated state.`
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Contains the output for DescribeInstanceHealth.
 *
 * @public
 */
export interface DescribeEndPointStateOutput {
  /**
   * Information about the health of the instances.
   *
   * @public
   */
  InstanceStates?: InstanceState[] | undefined;
}

/**
 * Contains the parameters for DescribeLoadBalancerAttributes.
 *
 * @public
 */
export interface DescribeLoadBalancerAttributesInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;
}

/**
 * The attributes for a load balancer.
 *
 * @public
 */
export interface LoadBalancerAttributes {
  /**
   * If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
   *
   *
   *
   * For more information, see [Configure Cross-Zone Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  CrossZoneLoadBalancing?: CrossZoneLoadBalancing | undefined;

  /**
   * If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.
   *
   * For more information, see [Enable Access Logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  AccessLog?: AccessLog | undefined;

  /**
   * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
   *
   * For more information, see [Configure Connection Draining](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  ConnectionDraining?: ConnectionDraining | undefined;

  /**
   * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
   *
   * By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see [Configure Idle Connection Timeout](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html) in the *Classic Load Balancers Guide*.
   *
   * @public
   */
  ConnectionSettings?: ConnectionSettings | undefined;

  /**
   * Any additional attributes.
   *
   * @public
   */
  AdditionalAttributes?: AdditionalAttribute[] | undefined;
}

/**
 * Contains the output of DescribeLoadBalancerAttributes.
 *
 * @public
 */
export interface DescribeLoadBalancerAttributesOutput {
  /**
   * Information about the load balancer attributes.
   *
   * @public
   */
  LoadBalancerAttributes?: LoadBalancerAttributes | undefined;
}

/**
 * Contains the parameters for DescribeLoadBalancerPolicies.
 *
 * @public
 */
export interface DescribeLoadBalancerPoliciesInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The names of the policies.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;
}

/**
 * Information about a policy attribute.
 *
 * @public
 */
export interface PolicyAttributeDescription {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  AttributeValue?: string | undefined;
}

/**
 * Information about a policy.
 *
 * @public
 */
export interface PolicyDescription {
  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The name of the policy type.
   *
   * @public
   */
  PolicyTypeName?: string | undefined;

  /**
   * The policy attributes.
   *
   * @public
   */
  PolicyAttributeDescriptions?: PolicyAttributeDescription[] | undefined;
}

/**
 * Contains the output of DescribeLoadBalancerPolicies.
 *
 * @public
 */
export interface DescribeLoadBalancerPoliciesOutput {
  /**
   * Information about the policies.
   *
   * @public
   */
  PolicyDescriptions?: PolicyDescription[] | undefined;
}

/**
 * Contains the parameters for DescribeLoadBalancerPolicyTypes.
 *
 * @public
 */
export interface DescribeLoadBalancerPolicyTypesInput {
  /**
   * The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.
   *
   * @public
   */
  PolicyTypeNames?: string[] | undefined;
}

/**
 * Information about a policy attribute type.
 *
 * @public
 */
export interface PolicyAttributeTypeDescription {
  /**
   * The name of the attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The type of the attribute. For example, `Boolean` or `Integer`.
   *
   * @public
   */
  AttributeType?: string | undefined;

  /**
   * A description of the attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The default value of the attribute, if applicable.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The cardinality of the attribute.
   *
   *
   *
   * Valid values:
   *
   * - ONE(1) : Single value required
   * - ZERO_OR_ONE(0..1) : Up to one value is allowed
   * - ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed
   * - ONE_OR_MORE(1..*0) : Required. Multiple values are allowed
   *
   * @public
   */
  Cardinality?: string | undefined;
}

/**
 * Information about a policy type.
 *
 * @public
 */
export interface PolicyTypeDescription {
  /**
   * The name of the policy type.
   *
   * @public
   */
  PolicyTypeName?: string | undefined;

  /**
   * A description of the policy type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The description of the policy attributes associated with the policies defined by Elastic Load Balancing.
   *
   * @public
   */
  PolicyAttributeTypeDescriptions?: PolicyAttributeTypeDescription[] | undefined;
}

/**
 * Contains the output of DescribeLoadBalancerPolicyTypes.
 *
 * @public
 */
export interface DescribeLoadBalancerPolicyTypesOutput {
  /**
   * Information about the policy types.
   *
   * @public
   */
  PolicyTypeDescriptions?: PolicyTypeDescription[] | undefined;
}

/**
 * Contains the parameters for DescribeTags.
 *
 * @public
 */
export interface DescribeTagsInput {
  /**
   * The names of the load balancers.
   *
   * @public
   */
  LoadBalancerNames: string[] | undefined;
}

/**
 * The tags associated with a load balancer.
 *
 * @public
 */
export interface TagDescription {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains the output for DescribeTags.
 *
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
 * Contains the parameters for DetachLoadBalancerFromSubnets.
 *
 * @public
 */
export interface DetachLoadBalancerFromSubnetsInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The IDs of the subnets.
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * Contains the output of DetachLoadBalancerFromSubnets.
 *
 * @public
 */
export interface DetachLoadBalancerFromSubnetsOutput {
  /**
   * The IDs of the remaining subnets for the load balancer.
   *
   * @public
   */
  Subnets?: string[] | undefined;
}

/**
 * Contains the parameters for DisableAvailabilityZonesForLoadBalancer.
 *
 * @public
 */
export interface RemoveAvailabilityZonesInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The Availability Zones.
   *
   * @public
   */
  AvailabilityZones: string[] | undefined;
}

/**
 * Contains the output for DisableAvailabilityZonesForLoadBalancer.
 *
 * @public
 */
export interface RemoveAvailabilityZonesOutput {
  /**
   * The remaining Availability Zones for the load balancer.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * Contains the parameters for ModifyLoadBalancerAttributes.
 *
 * @public
 */
export interface ModifyLoadBalancerAttributesInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The attributes for the load balancer.
   *
   * @public
   */
  LoadBalancerAttributes: LoadBalancerAttributes | undefined;
}

/**
 * Contains the output of ModifyLoadBalancerAttributes.
 *
 * @public
 */
export interface ModifyLoadBalancerAttributesOutput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * Information about the load balancer attributes.
   *
   * @public
   */
  LoadBalancerAttributes?: LoadBalancerAttributes | undefined;
}

/**
 * Contains the parameters for RegisterInstancesWithLoadBalancer.
 *
 * @public
 */
export interface RegisterEndPointsInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The IDs of the instances.
   *
   * @public
   */
  Instances: Instance[] | undefined;
}

/**
 * Contains the output of RegisterInstancesWithLoadBalancer.
 *
 * @public
 */
export interface RegisterEndPointsOutput {
  /**
   * The updated list of instances for the load balancer.
   *
   * @public
   */
  Instances?: Instance[] | undefined;
}

/**
 * The key of a tag.
 *
 * @public
 */
export interface TagKeyOnly {
  /**
   * The name of the key.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Contains the parameters for RemoveTags.
 *
 * @public
 */
export interface RemoveTagsInput {
  /**
   * The name of the load balancer. You can specify a maximum of one load balancer name.
   *
   * @public
   */
  LoadBalancerNames: string[] | undefined;

  /**
   * The list of tag keys to remove.
   *
   * @public
   */
  Tags: TagKeyOnly[] | undefined;
}

/**
 * Contains the output of RemoveTags.
 *
 * @public
 */
export interface RemoveTagsOutput {}

/**
 * Contains the parameters for SetLoadBalancerListenerSSLCertificate.
 *
 * @public
 */
export interface SetLoadBalancerListenerSSLCertificateInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The port that uses the specified SSL certificate.
   *
   * @public
   */
  LoadBalancerPort: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SSL certificate.
   *
   * @public
   */
  SSLCertificateId: string | undefined;
}

/**
 * Contains the output of SetLoadBalancerListenerSSLCertificate.
 *
 * @public
 */
export interface SetLoadBalancerListenerSSLCertificateOutput {}

/**
 * Contains the parameters for SetLoadBalancerPoliciesForBackendServer.
 *
 * @public
 */
export interface SetLoadBalancerPoliciesForBackendServerInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The port number associated with the EC2 instance.
   *
   * @public
   */
  InstancePort: number | undefined;

  /**
   * The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.
   *
   * @public
   */
  PolicyNames: string[] | undefined;
}

/**
 * Contains the output of SetLoadBalancerPoliciesForBackendServer.
 *
 * @public
 */
export interface SetLoadBalancerPoliciesForBackendServerOutput {}

/**
 * Contains the parameters for SetLoadBalancePoliciesOfListener.
 *
 * @public
 */
export interface SetLoadBalancerPoliciesOfListenerInput {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName: string | undefined;

  /**
   * The external port of the load balancer.
   *
   * @public
   */
  LoadBalancerPort: number | undefined;

  /**
   * The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.
   *
   * @public
   */
  PolicyNames: string[] | undefined;
}

/**
 * Contains the output of SetLoadBalancePoliciesOfListener.
 *
 * @public
 */
export interface SetLoadBalancerPoliciesOfListenerOutput {}
