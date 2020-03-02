import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information about the <code>AccessLog</code> attribute.</p>
 */
export interface AccessLog {
  __type?: "AccessLog";
  /**
   * <p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p>
   *         <p>Default: 60 minutes</p>
   */
  EmitInterval?: number;

  /**
   * <p>Specifies whether access logs are enabled for the load balancer.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where the access logs are stored.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>.
   *             If the prefix is not provided, the log is placed at the root level of the bucket.</p>
   */
  S3BucketPrefix?: string;
}

export namespace AccessLog {
  export function isa(o: any): o is AccessLog {
    return __isa(o, "AccessLog");
  }
}

/**
 * <p>The specified load balancer does not exist.</p>
 */
export interface AccessPointNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessPointNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace AccessPointNotFoundException {
  export function isa(o: any): o is AccessPointNotFoundException {
    return __isa(o, "AccessPointNotFoundException");
  }
}

/**
 * <p>Contains the parameters for EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface AddAvailabilityZonesInput {
  __type?: "AddAvailabilityZonesInput";
  /**
   * <p>The Availability Zones. These must be in the same region as the load balancer.</p>
   */
  AvailabilityZones: Array<string> | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace AddAvailabilityZonesInput {
  export function isa(o: any): o is AddAvailabilityZonesInput {
    return __isa(o, "AddAvailabilityZonesInput");
  }
}

/**
 * <p>Contains the output of EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface AddAvailabilityZonesOutput {
  __type?: "AddAvailabilityZonesOutput";
  /**
   * <p>The updated list of Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string>;
}

export namespace AddAvailabilityZonesOutput {
  export function isa(o: any): o is AddAvailabilityZonesOutput {
    return __isa(o, "AddAvailabilityZonesOutput");
  }
}

/**
 * <p>Contains the parameters for AddTags.</p>
 */
export interface AddTagsInput {
  __type?: "AddTagsInput";
  /**
   * <p>The name of the load balancer. You can specify one load balancer only.</p>
   */
  LoadBalancerNames: Array<string> | undefined;

  /**
   * <p>The tags.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace AddTagsInput {
  export function isa(o: any): o is AddTagsInput {
    return __isa(o, "AddTagsInput");
  }
}

/**
 * <p>Contains the output of AddTags.</p>
 */
export interface AddTagsOutput {
  __type?: "AddTagsOutput";
}

export namespace AddTagsOutput {
  export function isa(o: any): o is AddTagsOutput {
    return __isa(o, "AddTagsOutput");
  }
}

/**
 * <p>This data type is reserved.</p>
 */
export interface AdditionalAttribute {
  __type?: "AdditionalAttribute";
  /**
   * <p>This parameter is reserved.</p>
   */
  Key?: string;

  /**
   * <p>This parameter is reserved.</p>
   */
  Value?: string;
}

export namespace AdditionalAttribute {
  export function isa(o: any): o is AdditionalAttribute {
    return __isa(o, "AdditionalAttribute");
  }
}

/**
 * <p>Information about a policy for application-controlled session stickiness.</p>
 */
export interface AppCookieStickinessPolicy {
  __type?: "AppCookieStickinessPolicy";
  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName?: string;

  /**
   * <p>The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.</p>
   */
  PolicyName?: string;
}

export namespace AppCookieStickinessPolicy {
  export function isa(o: any): o is AppCookieStickinessPolicy {
    return __isa(o, "AppCookieStickinessPolicy");
  }
}

/**
 * <p>Contains the parameters for ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerInput {
  __type?: "ApplySecurityGroupsToLoadBalancerInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.</p>
   */
  SecurityGroups: Array<string> | undefined;
}

export namespace ApplySecurityGroupsToLoadBalancerInput {
  export function isa(o: any): o is ApplySecurityGroupsToLoadBalancerInput {
    return __isa(o, "ApplySecurityGroupsToLoadBalancerInput");
  }
}

/**
 * <p>Contains the output of ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerOutput {
  __type?: "ApplySecurityGroupsToLoadBalancerOutput";
  /**
   * <p>The IDs of the security groups associated with the load balancer.</p>
   */
  SecurityGroups?: Array<string>;
}

export namespace ApplySecurityGroupsToLoadBalancerOutput {
  export function isa(o: any): o is ApplySecurityGroupsToLoadBalancerOutput {
    return __isa(o, "ApplySecurityGroupsToLoadBalancerOutput");
  }
}

/**
 * <p>Contains the parameters for AttachLoaBalancerToSubnets.</p>
 */
export interface AttachLoadBalancerToSubnetsInput {
  __type?: "AttachLoadBalancerToSubnetsInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the subnets to add. You can add only one subnet per Availability Zone.</p>
   */
  Subnets: Array<string> | undefined;
}

export namespace AttachLoadBalancerToSubnetsInput {
  export function isa(o: any): o is AttachLoadBalancerToSubnetsInput {
    return __isa(o, "AttachLoadBalancerToSubnetsInput");
  }
}

/**
 * <p>Contains the output of AttachLoadBalancerToSubnets.</p>
 */
export interface AttachLoadBalancerToSubnetsOutput {
  __type?: "AttachLoadBalancerToSubnetsOutput";
  /**
   * <p>The IDs of the subnets attached to the load balancer.</p>
   */
  Subnets?: Array<string>;
}

export namespace AttachLoadBalancerToSubnetsOutput {
  export function isa(o: any): o is AttachLoadBalancerToSubnetsOutput {
    return __isa(o, "AttachLoadBalancerToSubnetsOutput");
  }
}

/**
 * <p>Information about the configuration of an EC2 instance.</p>
 */
export interface BackendServerDescription {
  __type?: "BackendServerDescription";
  /**
   * <p>The port on which the EC2 instance is listening.</p>
   */
  InstancePort?: number;

  /**
   * <p>The names of the policies enabled for the EC2 instance.</p>
   */
  PolicyNames?: Array<string>;
}

export namespace BackendServerDescription {
  export function isa(o: any): o is BackendServerDescription {
    return __isa(o, "BackendServerDescription");
  }
}

/**
 * <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
 */
export interface CertificateNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace CertificateNotFoundException {
  export function isa(o: any): o is CertificateNotFoundException {
    return __isa(o, "CertificateNotFoundException");
  }
}

/**
 * <p>Contains the parameters for ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckInput {
  __type?: "ConfigureHealthCheckInput";
  /**
   * <p>The configuration information.</p>
   */
  HealthCheck: HealthCheck | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace ConfigureHealthCheckInput {
  export function isa(o: any): o is ConfigureHealthCheckInput {
    return __isa(o, "ConfigureHealthCheckInput");
  }
}

/**
 * <p>Contains the output of ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckOutput {
  __type?: "ConfigureHealthCheckOutput";
  /**
   * <p>The updated health check.</p>
   */
  HealthCheck?: HealthCheck;
}

export namespace ConfigureHealthCheckOutput {
  export function isa(o: any): o is ConfigureHealthCheckOutput {
    return __isa(o, "ConfigureHealthCheckOutput");
  }
}

/**
 * <p>Information about the <code>ConnectionDraining</code> attribute.</p>
 */
export interface ConnectionDraining {
  __type?: "ConnectionDraining";
  /**
   * <p>Specifies whether connection draining is enabled for the load balancer.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The maximum time, in seconds, to keep the existing connections open before deregistering the instances.</p>
   */
  Timeout?: number;
}

export namespace ConnectionDraining {
  export function isa(o: any): o is ConnectionDraining {
    return __isa(o, "ConnectionDraining");
  }
}

/**
 * <p>Information about the <code>ConnectionSettings</code> attribute.</p>
 */
export interface ConnectionSettings {
  __type?: "ConnectionSettings";
  /**
   * <p>The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.</p>
   */
  IdleTimeout: number | undefined;
}

export namespace ConnectionSettings {
  export function isa(o: any): o is ConnectionSettings {
    return __isa(o, "ConnectionSettings");
  }
}

/**
 * <p>Contains the parameters for CreateLoadBalancer.</p>
 */
export interface CreateAccessPointInput {
  __type?: "CreateAccessPointInput";
  /**
   * <p>One or more Availability Zones from the same region as the load balancer.</p>
   *         <p>You must specify at least one Availability Zone.</p>
   *         <p>You can add more Availability Zones after you create the load balancer using
   *             <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The listeners.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  Listeners: Array<Listener> | undefined;

  /**
   * <p>The name of the load balancer.</p>
   *         <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The type of a load balancer. Valid only for load balancers in a VPC.</p>
   *         <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses.
   *             For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a>
   *             in the <i>Elastic Load Balancing User Guide</i>.</p>
   *         <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>
   */
  Scheme?: string;

  /**
   * <p>The IDs of the security groups to assign to the load balancer.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The IDs of the subnets in your VPC to attach to the load balancer.
   *             Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.</p>
   */
  Subnets?: Array<string>;

  /**
   * <p>A list of tags to assign to the load balancer.</p>
   *         <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateAccessPointInput {
  export function isa(o: any): o is CreateAccessPointInput {
    return __isa(o, "CreateAccessPointInput");
  }
}

/**
 * <p>Contains the output for CreateLoadBalancer.</p>
 */
export interface CreateAccessPointOutput {
  __type?: "CreateAccessPointOutput";
  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DNSName?: string;
}

export namespace CreateAccessPointOutput {
  export function isa(o: any): o is CreateAccessPointOutput {
    return __isa(o, "CreateAccessPointOutput");
  }
}

/**
 * <p>Contains the parameters for CreateAppCookieStickinessPolicy.</p>
 */
export interface CreateAppCookieStickinessPolicyInput {
  __type?: "CreateAppCookieStickinessPolicyInput";
  /**
   * <p>The name of the application cookie used for stickiness.</p>
   */
  CookieName: string | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName: string | undefined;
}

export namespace CreateAppCookieStickinessPolicyInput {
  export function isa(o: any): o is CreateAppCookieStickinessPolicyInput {
    return __isa(o, "CreateAppCookieStickinessPolicyInput");
  }
}

/**
 * <p>Contains the output for CreateAppCookieStickinessPolicy.</p>
 */
export interface CreateAppCookieStickinessPolicyOutput {
  __type?: "CreateAppCookieStickinessPolicyOutput";
}

export namespace CreateAppCookieStickinessPolicyOutput {
  export function isa(o: any): o is CreateAppCookieStickinessPolicyOutput {
    return __isa(o, "CreateAppCookieStickinessPolicyOutput");
  }
}

/**
 * <p>Contains the parameters for CreateLBCookieStickinessPolicy.</p>
 */
export interface CreateLBCookieStickinessPolicyInput {
  __type?: "CreateLBCookieStickinessPolicyInput";
  /**
   * <p>The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.</p>
   */
  CookieExpirationPeriod?: number;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName: string | undefined;
}

export namespace CreateLBCookieStickinessPolicyInput {
  export function isa(o: any): o is CreateLBCookieStickinessPolicyInput {
    return __isa(o, "CreateLBCookieStickinessPolicyInput");
  }
}

/**
 * <p>Contains the output for CreateLBCookieStickinessPolicy.</p>
 */
export interface CreateLBCookieStickinessPolicyOutput {
  __type?: "CreateLBCookieStickinessPolicyOutput";
}

export namespace CreateLBCookieStickinessPolicyOutput {
  export function isa(o: any): o is CreateLBCookieStickinessPolicyOutput {
    return __isa(o, "CreateLBCookieStickinessPolicyOutput");
  }
}

/**
 * <p>Contains the parameters for CreateLoadBalancerListeners.</p>
 */
export interface CreateLoadBalancerListenerInput {
  __type?: "CreateLoadBalancerListenerInput";
  /**
   * <p>The listeners.</p>
   */
  Listeners: Array<Listener> | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace CreateLoadBalancerListenerInput {
  export function isa(o: any): o is CreateLoadBalancerListenerInput {
    return __isa(o, "CreateLoadBalancerListenerInput");
  }
}

/**
 * <p>Contains the parameters for CreateLoadBalancerListener.</p>
 */
export interface CreateLoadBalancerListenerOutput {
  __type?: "CreateLoadBalancerListenerOutput";
}

export namespace CreateLoadBalancerListenerOutput {
  export function isa(o: any): o is CreateLoadBalancerListenerOutput {
    return __isa(o, "CreateLoadBalancerListenerOutput");
  }
}

/**
 * <p>Contains the parameters for CreateLoadBalancerPolicy.</p>
 */
export interface CreateLoadBalancerPolicyInput {
  __type?: "CreateLoadBalancerPolicyInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The policy attributes.</p>
   */
  PolicyAttributes?: Array<PolicyAttribute>;

  /**
   * <p>The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The name of the base policy type.
   *    	   To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.</p>
   */
  PolicyTypeName: string | undefined;
}

export namespace CreateLoadBalancerPolicyInput {
  export function isa(o: any): o is CreateLoadBalancerPolicyInput {
    return __isa(o, "CreateLoadBalancerPolicyInput");
  }
}

/**
 * <p>Contains the output of CreateLoadBalancerPolicy.</p>
 */
export interface CreateLoadBalancerPolicyOutput {
  __type?: "CreateLoadBalancerPolicyOutput";
}

export namespace CreateLoadBalancerPolicyOutput {
  export function isa(o: any): o is CreateLoadBalancerPolicyOutput {
    return __isa(o, "CreateLoadBalancerPolicyOutput");
  }
}

/**
 * <p>Information about the <code>CrossZoneLoadBalancing</code> attribute.</p>
 */
export interface CrossZoneLoadBalancing {
  __type?: "CrossZoneLoadBalancing";
  /**
   * <p>Specifies whether cross-zone load balancing is enabled for the load balancer.</p>
   */
  Enabled: boolean | undefined;
}

export namespace CrossZoneLoadBalancing {
  export function isa(o: any): o is CrossZoneLoadBalancing {
    return __isa(o, "CrossZoneLoadBalancing");
  }
}

/**
 * <p>Contains the parameters for DeleteLoadBalancer.</p>
 */
export interface DeleteAccessPointInput {
  __type?: "DeleteAccessPointInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace DeleteAccessPointInput {
  export function isa(o: any): o is DeleteAccessPointInput {
    return __isa(o, "DeleteAccessPointInput");
  }
}

/**
 * <p>Contains the output of DeleteLoadBalancer.</p>
 */
export interface DeleteAccessPointOutput {
  __type?: "DeleteAccessPointOutput";
}

export namespace DeleteAccessPointOutput {
  export function isa(o: any): o is DeleteAccessPointOutput {
    return __isa(o, "DeleteAccessPointOutput");
  }
}

/**
 * <p>Contains the parameters for DeleteLoadBalancerListeners.</p>
 */
export interface DeleteLoadBalancerListenerInput {
  __type?: "DeleteLoadBalancerListenerInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The client port numbers of the listeners.</p>
   */
  LoadBalancerPorts: Array<number> | undefined;
}

export namespace DeleteLoadBalancerListenerInput {
  export function isa(o: any): o is DeleteLoadBalancerListenerInput {
    return __isa(o, "DeleteLoadBalancerListenerInput");
  }
}

/**
 * <p>Contains the output of DeleteLoadBalancerListeners.</p>
 */
export interface DeleteLoadBalancerListenerOutput {
  __type?: "DeleteLoadBalancerListenerOutput";
}

export namespace DeleteLoadBalancerListenerOutput {
  export function isa(o: any): o is DeleteLoadBalancerListenerOutput {
    return __isa(o, "DeleteLoadBalancerListenerOutput");
  }
}

/**
 * <p>Contains the parameters for DeleteLoadBalancerPolicy.</p>
 */
export interface DeleteLoadBalancerPolicyInput {
  __type?: "DeleteLoadBalancerPolicyInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteLoadBalancerPolicyInput {
  export function isa(o: any): o is DeleteLoadBalancerPolicyInput {
    return __isa(o, "DeleteLoadBalancerPolicyInput");
  }
}

/**
 * <p>Contains the output of DeleteLoadBalancerPolicy.</p>
 */
export interface DeleteLoadBalancerPolicyOutput {
  __type?: "DeleteLoadBalancerPolicyOutput";
}

export namespace DeleteLoadBalancerPolicyOutput {
  export function isa(o: any): o is DeleteLoadBalancerPolicyOutput {
    return __isa(o, "DeleteLoadBalancerPolicyOutput");
  }
}

/**
 * <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
 */
export interface DependencyThrottleException
  extends __SmithyException,
    $MetadataBearer {
  name: "DependencyThrottleException";
  $fault: "client";
  Message?: string;
}

export namespace DependencyThrottleException {
  export function isa(o: any): o is DependencyThrottleException {
    return __isa(o, "DependencyThrottleException");
  }
}

/**
 * <p>Contains the parameters for DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterEndPointsInput {
  __type?: "DeregisterEndPointsInput";
  /**
   * <p>The IDs of the instances.</p>
   */
  Instances: Array<Instance> | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace DeregisterEndPointsInput {
  export function isa(o: any): o is DeregisterEndPointsInput {
    return __isa(o, "DeregisterEndPointsInput");
  }
}

/**
 * <p>Contains the output of DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterEndPointsOutput {
  __type?: "DeregisterEndPointsOutput";
  /**
   * <p>The remaining instances registered with the load balancer.</p>
   */
  Instances?: Array<Instance>;
}

export namespace DeregisterEndPointsOutput {
  export function isa(o: any): o is DeregisterEndPointsOutput {
    return __isa(o, "DeregisterEndPointsOutput");
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeAccessPointsInput {
  __type?: "DescribeAccessPointsInput";
  /**
   * <p>The names of the load balancers.</p>
   */
  LoadBalancerNames?: Array<string>;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call (a number from 1 to 400). The default is 400.</p>
   */
  PageSize?: number;
}

export namespace DescribeAccessPointsInput {
  export function isa(o: any): o is DescribeAccessPointsInput {
    return __isa(o, "DescribeAccessPointsInput");
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeAccessPointsOutput {
  __type?: "DescribeAccessPointsOutput";
  /**
   * <p>Information about the load balancers.</p>
   */
  LoadBalancerDescriptions?: Array<LoadBalancerDescription>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  NextMarker?: string;
}

export namespace DescribeAccessPointsOutput {
  export function isa(o: any): o is DescribeAccessPointsOutput {
    return __isa(o, "DescribeAccessPointsOutput");
  }
}

export interface DescribeAccountLimitsInput {
  __type?: "DescribeAccountLimitsInput";
  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of results to return with this call.</p>
   */
  PageSize?: number;
}

export namespace DescribeAccountLimitsInput {
  export function isa(o: any): o is DescribeAccountLimitsInput {
    return __isa(o, "DescribeAccountLimitsInput");
  }
}

export interface DescribeAccountLimitsOutput {
  __type?: "DescribeAccountLimitsOutput";
  /**
   * <p>Information about the limits.</p>
   */
  Limits?: Array<Limit>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  NextMarker?: string;
}

export namespace DescribeAccountLimitsOutput {
  export function isa(o: any): o is DescribeAccountLimitsOutput {
    return __isa(o, "DescribeAccountLimitsOutput");
  }
}

/**
 * <p>Contains the parameters for DescribeInstanceHealth.</p>
 */
export interface DescribeEndPointStateInput {
  __type?: "DescribeEndPointStateInput";
  /**
   * <p>The IDs of the instances.</p>
   */
  Instances?: Array<Instance>;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace DescribeEndPointStateInput {
  export function isa(o: any): o is DescribeEndPointStateInput {
    return __isa(o, "DescribeEndPointStateInput");
  }
}

/**
 * <p>Contains the output for DescribeInstanceHealth.</p>
 */
export interface DescribeEndPointStateOutput {
  __type?: "DescribeEndPointStateOutput";
  /**
   * <p>Information about the health of the instances.</p>
   */
  InstanceStates?: Array<InstanceState>;
}

export namespace DescribeEndPointStateOutput {
  export function isa(o: any): o is DescribeEndPointStateOutput {
    return __isa(o, "DescribeEndPointStateOutput");
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancerAttributes.</p>
 */
export interface DescribeLoadBalancerAttributesInput {
  __type?: "DescribeLoadBalancerAttributesInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace DescribeLoadBalancerAttributesInput {
  export function isa(o: any): o is DescribeLoadBalancerAttributesInput {
    return __isa(o, "DescribeLoadBalancerAttributesInput");
  }
}

/**
 * <p>Contains the output of DescribeLoadBalancerAttributes.</p>
 */
export interface DescribeLoadBalancerAttributesOutput {
  __type?: "DescribeLoadBalancerAttributesOutput";
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  LoadBalancerAttributes?: LoadBalancerAttributes;
}

export namespace DescribeLoadBalancerAttributesOutput {
  export function isa(o: any): o is DescribeLoadBalancerAttributesOutput {
    return __isa(o, "DescribeLoadBalancerAttributesOutput");
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesInput {
  __type?: "DescribeLoadBalancerPoliciesInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The names of the policies.</p>
   */
  PolicyNames?: Array<string>;
}

export namespace DescribeLoadBalancerPoliciesInput {
  export function isa(o: any): o is DescribeLoadBalancerPoliciesInput {
    return __isa(o, "DescribeLoadBalancerPoliciesInput");
  }
}

/**
 * <p>Contains the output of DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesOutput {
  __type?: "DescribeLoadBalancerPoliciesOutput";
  /**
   * <p>Information about the policies.</p>
   */
  PolicyDescriptions?: Array<PolicyDescription>;
}

export namespace DescribeLoadBalancerPoliciesOutput {
  export function isa(o: any): o is DescribeLoadBalancerPoliciesOutput {
    return __isa(o, "DescribeLoadBalancerPoliciesOutput");
  }
}

/**
 * <p>Contains the parameters for DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesInput {
  __type?: "DescribeLoadBalancerPolicyTypesInput";
  /**
   * <p>The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.</p>
   */
  PolicyTypeNames?: Array<string>;
}

export namespace DescribeLoadBalancerPolicyTypesInput {
  export function isa(o: any): o is DescribeLoadBalancerPolicyTypesInput {
    return __isa(o, "DescribeLoadBalancerPolicyTypesInput");
  }
}

/**
 * <p>Contains the output of DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesOutput {
  __type?: "DescribeLoadBalancerPolicyTypesOutput";
  /**
   * <p>Information about the policy types.</p>
   */
  PolicyTypeDescriptions?: Array<PolicyTypeDescription>;
}

export namespace DescribeLoadBalancerPolicyTypesOutput {
  export function isa(o: any): o is DescribeLoadBalancerPolicyTypesOutput {
    return __isa(o, "DescribeLoadBalancerPolicyTypesOutput");
  }
}

/**
 * <p>Contains the parameters for DescribeTags.</p>
 */
export interface DescribeTagsInput {
  __type?: "DescribeTagsInput";
  /**
   * <p>The names of the load balancers.</p>
   */
  LoadBalancerNames: Array<string> | undefined;
}

export namespace DescribeTagsInput {
  export function isa(o: any): o is DescribeTagsInput {
    return __isa(o, "DescribeTagsInput");
  }
}

/**
 * <p>Contains the output for DescribeTags.</p>
 */
export interface DescribeTagsOutput {
  __type?: "DescribeTagsOutput";
  /**
   * <p>Information about the tags.</p>
   */
  TagDescriptions?: Array<TagDescription>;
}

export namespace DescribeTagsOutput {
  export function isa(o: any): o is DescribeTagsOutput {
    return __isa(o, "DescribeTagsOutput");
  }
}

/**
 * <p>Contains the parameters for DetachLoadBalancerFromSubnets.</p>
 */
export interface DetachLoadBalancerFromSubnetsInput {
  __type?: "DetachLoadBalancerFromSubnetsInput";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The IDs of the subnets.</p>
   */
  Subnets: Array<string> | undefined;
}

export namespace DetachLoadBalancerFromSubnetsInput {
  export function isa(o: any): o is DetachLoadBalancerFromSubnetsInput {
    return __isa(o, "DetachLoadBalancerFromSubnetsInput");
  }
}

/**
 * <p>Contains the output of DetachLoadBalancerFromSubnets.</p>
 */
export interface DetachLoadBalancerFromSubnetsOutput {
  __type?: "DetachLoadBalancerFromSubnetsOutput";
  /**
   * <p>The IDs of the remaining subnets for the load balancer.</p>
   */
  Subnets?: Array<string>;
}

export namespace DetachLoadBalancerFromSubnetsOutput {
  export function isa(o: any): o is DetachLoadBalancerFromSubnetsOutput {
    return __isa(o, "DetachLoadBalancerFromSubnetsOutput");
  }
}

/**
 * <p>The specified load balancer name already exists for this account.</p>
 */
export interface DuplicateAccessPointNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateAccessPointNameException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateAccessPointNameException {
  export function isa(o: any): o is DuplicateAccessPointNameException {
    return __isa(o, "DuplicateAccessPointNameException");
  }
}

/**
 * <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
 */
export interface DuplicateListenerException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateListenerException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateListenerException {
  export function isa(o: any): o is DuplicateListenerException {
    return __isa(o, "DuplicateListenerException");
  }
}

/**
 * <p>A policy with the specified name already exists for this load balancer.</p>
 */
export interface DuplicatePolicyNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicatePolicyNameException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicatePolicyNameException {
  export function isa(o: any): o is DuplicatePolicyNameException {
    return __isa(o, "DuplicatePolicyNameException");
  }
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
  export function isa(o: any): o is DuplicateTagKeysException {
    return __isa(o, "DuplicateTagKeysException");
  }
}

/**
 * <p>Information about a health check.</p>
 */
export interface HealthCheck {
  __type?: "HealthCheck";
  /**
   * <p>The number of consecutive health checks successes required before moving the instance to the <code>Healthy</code> state.</p>
   */
  HealthyThreshold: number | undefined;

  /**
   * <p>The approximate interval, in seconds, between health checks of an individual instance.</p>
   */
  Interval: number | undefined;

  /**
   * <p>The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.</p>
   *         <p>TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.</p>
   *         <p>SSL is also specified as SSL: port pair, for example, SSL:5000.</p>
   *         <p>For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.</p>
   *          <p>The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.</p>
   */
  Target: string | undefined;

  /**
   * <p>The amount of time, in seconds, during which no response means a failed health check.</p>
   *         <p>This value must be less than the <code>Interval</code> value.</p>
   */
  Timeout: number | undefined;

  /**
   * <p>The number of consecutive health check failures required before moving the instance to the <code>Unhealthy</code> state.</p>
   */
  UnhealthyThreshold: number | undefined;
}

export namespace HealthCheck {
  export function isa(o: any): o is HealthCheck {
    return __isa(o, "HealthCheck");
  }
}

/**
 * <p>The ID of an EC2 instance.</p>
 */
export interface Instance {
  __type?: "Instance";
  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;
}

export namespace Instance {
  export function isa(o: any): o is Instance {
    return __isa(o, "Instance");
  }
}

/**
 * <p>Information about the state of an EC2 instance.</p>
 */
export interface InstanceState {
  __type?: "InstanceState";
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

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Information about the cause of <code>OutOfService</code> instances.
   *          Specifically, whether the cause is Elastic Load Balancing or the instance.</p>
   *         <p>Valid values: <code>ELB</code> | <code>Instance</code> | <code>N/A</code>
   *          </p>
   */
  ReasonCode?: string;

  /**
   * <p>The current state of the instance.</p>
   *         <p>Valid values: <code>InService</code> | <code>OutOfService</code> | <code>Unknown</code>
   *          </p>
   */
  State?: string;
}

export namespace InstanceState {
  export function isa(o: any): o is InstanceState {
    return __isa(o, "InstanceState");
  }
}

/**
 * <p>The requested configuration change is not valid.</p>
 */
export interface InvalidConfigurationRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidConfigurationRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidConfigurationRequestException {
  export function isa(o: any): o is InvalidConfigurationRequestException {
    return __isa(o, "InvalidConfigurationRequestException");
  }
}

/**
 * <p>The specified endpoint is not valid.</p>
 */
export interface InvalidEndPointException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEndPointException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidEndPointException {
  export function isa(o: any): o is InvalidEndPointException {
    return __isa(o, "InvalidEndPointException");
  }
}

/**
 * <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
 */
export interface InvalidSchemeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSchemeException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSchemeException {
  export function isa(o: any): o is InvalidSchemeException {
    return __isa(o, "InvalidSchemeException");
  }
}

/**
 * <p>One or more of the specified security groups do not exist.</p>
 */
export interface InvalidSecurityGroupException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSecurityGroupException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSecurityGroupException {
  export function isa(o: any): o is InvalidSecurityGroupException {
    return __isa(o, "InvalidSecurityGroupException");
  }
}

/**
 * <p>The specified VPC has no associated Internet gateway.</p>
 */
export interface InvalidSubnetException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSubnetException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSubnetException {
  export function isa(o: any): o is InvalidSubnetException {
    return __isa(o, "InvalidSubnetException");
  }
}

/**
 * <p>Information about a policy for duration-based session stickiness.</p>
 */
export interface LBCookieStickinessPolicy {
  __type?: "LBCookieStickinessPolicy";
  /**
   * <p>The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.</p>
   */
  CookieExpirationPeriod?: number;

  /**
   * <p>The name of the policy. This name must be unique within the set of policies for this load balancer.</p>
   */
  PolicyName?: string;
}

export namespace LBCookieStickinessPolicy {
  export function isa(o: any): o is LBCookieStickinessPolicy {
    return __isa(o, "LBCookieStickinessPolicy");
  }
}

/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS account.</p>
 */
export interface Limit {
  __type?: "Limit";
  /**
   * <p>The maximum value of the limit.</p>
   */
  Max?: string;

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
}

export namespace Limit {
  export function isa(o: any): o is Limit {
    return __isa(o, "Limit");
  }
}

/**
 * <p>Information about a listener.</p>
 *         <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export interface Listener {
  __type?: "Listener";
  /**
   * <p>The port on which the instance is listening.</p>
   */
  InstancePort: number | undefined;

  /**
   * <p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p>
   *    	    <p>If the front-end protocol is HTTP, HTTPS, TCP, or SSL, <code>InstanceProtocol</code> must be at the same protocol.</p>
   *    	    <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure,
   *    	       (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p>
   *         <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP,
   *            the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>
   */
  InstanceProtocol?: string;

  /**
   * <p>The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.</p>
   */
  LoadBalancerPort: number | undefined;

  /**
   * <p>The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the server certificate.</p>
   */
  SSLCertificateId?: string;
}

export namespace Listener {
  export function isa(o: any): o is Listener {
    return __isa(o, "Listener");
  }
}

/**
 * <p>The policies enabled for a listener.</p>
 */
export interface ListenerDescription {
  __type?: "ListenerDescription";
  /**
   * <p>The listener.</p>
   */
  Listener?: Listener;

  /**
   * <p>The policies. If there are no policies enabled, the list is empty.</p>
   */
  PolicyNames?: Array<string>;
}

export namespace ListenerDescription {
  export function isa(o: any): o is ListenerDescription {
    return __isa(o, "ListenerDescription");
  }
}

/**
 * <p>The load balancer does not have a listener configured at the specified port.</p>
 */
export interface ListenerNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ListenerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ListenerNotFoundException {
  export function isa(o: any): o is ListenerNotFoundException {
    return __isa(o, "ListenerNotFoundException");
  }
}

/**
 * <p>The specified load balancer attribute does not exist.</p>
 */
export interface LoadBalancerAttributeNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "LoadBalancerAttributeNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace LoadBalancerAttributeNotFoundException {
  export function isa(o: any): o is LoadBalancerAttributeNotFoundException {
    return __isa(o, "LoadBalancerAttributeNotFoundException");
  }
}

/**
 * <p>The attributes for a load balancer.</p>
 */
export interface LoadBalancerAttributes {
  __type?: "LoadBalancerAttributes";
  /**
   * <p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  AccessLog?: AccessLog;

  /**
   * <p>This parameter is reserved.</p>
   */
  AdditionalAttributes?: Array<AdditionalAttribute>;

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
   * <p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a>
   *             in the <i>Classic Load Balancers Guide</i>.</p>
   */
  CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
}

export namespace LoadBalancerAttributes {
  export function isa(o: any): o is LoadBalancerAttributes {
    return __isa(o, "LoadBalancerAttributes");
  }
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface LoadBalancerDescription {
  __type?: "LoadBalancerDescription";
  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>Information about your EC2 instances.</p>
   */
  BackendServerDescriptions?: Array<BackendServerDescription>;

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
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>Information about the health checks conducted on the load balancer.</p>
   */
  HealthCheck?: HealthCheck;

  /**
   * <p>The IDs of the instances for the load balancer.</p>
   */
  Instances?: Array<Instance>;

  /**
   * <p>The listeners for the load balancer.</p>
   */
  ListenerDescriptions?: Array<ListenerDescription>;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The policies defined for the load balancer.</p>
   */
  Policies?: Policies;

  /**
   * <p>The type of load balancer. Valid only for load balancers in a VPC.</p>
   *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer
   *            has a public DNS name that resolves to a public IP address.</p>
   *         <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public
   *            DNS name that resolves to a private IP address.</p>
   */
  Scheme?: string;

  /**
   * <p>The security groups for the load balancer. Valid only for load balancers in a VPC.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The security group for the load balancer, which you can use as part of your inbound rules for your registered instances.
   *             To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.</p>
   */
  SourceSecurityGroup?: SourceSecurityGroup;

  /**
   * <p>The IDs of the subnets for the load balancer.</p>
   */
  Subnets?: Array<string>;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VPCId?: string;
}

export namespace LoadBalancerDescription {
  export function isa(o: any): o is LoadBalancerDescription {
    return __isa(o, "LoadBalancerDescription");
  }
}

/**
 * <p>Contains the parameters for ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesInput {
  __type?: "ModifyLoadBalancerAttributesInput";
  /**
   * <p>The attributes for the load balancer.</p>
   */
  LoadBalancerAttributes: LoadBalancerAttributes | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace ModifyLoadBalancerAttributesInput {
  export function isa(o: any): o is ModifyLoadBalancerAttributesInput {
    return __isa(o, "ModifyLoadBalancerAttributesInput");
  }
}

/**
 * <p>Contains the output of ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesOutput {
  __type?: "ModifyLoadBalancerAttributesOutput";
  /**
   * <p>Information about the load balancer attributes.</p>
   */
  LoadBalancerAttributes?: LoadBalancerAttributes;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;
}

export namespace ModifyLoadBalancerAttributesOutput {
  export function isa(o: any): o is ModifyLoadBalancerAttributesOutput {
    return __isa(o, "ModifyLoadBalancerAttributesOutput");
  }
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
  export function isa(o: any): o is OperationNotPermittedException {
    return __isa(o, "OperationNotPermittedException");
  }
}

/**
 * <p>The policies for a load balancer.</p>
 */
export interface Policies {
  __type?: "Policies";
  /**
   * <p>The stickiness policies created using <a>CreateAppCookieStickinessPolicy</a>.</p>
   */
  AppCookieStickinessPolicies?: Array<AppCookieStickinessPolicy>;

  /**
   * <p>The stickiness policies created using <a>CreateLBCookieStickinessPolicy</a>.</p>
   */
  LBCookieStickinessPolicies?: Array<LBCookieStickinessPolicy>;

  /**
   * <p>The policies other than the stickiness policies.</p>
   */
  OtherPolicies?: Array<string>;
}

export namespace Policies {
  export function isa(o: any): o is Policies {
    return __isa(o, "Policies");
  }
}

/**
 * <p>Information about a policy attribute.</p>
 */
export interface PolicyAttribute {
  __type?: "PolicyAttribute";
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace PolicyAttribute {
  export function isa(o: any): o is PolicyAttribute {
    return __isa(o, "PolicyAttribute");
  }
}

/**
 * <p>Information about a policy attribute.</p>
 */
export interface PolicyAttributeDescription {
  __type?: "PolicyAttributeDescription";
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  AttributeValue?: string;
}

export namespace PolicyAttributeDescription {
  export function isa(o: any): o is PolicyAttributeDescription {
    return __isa(o, "PolicyAttributeDescription");
  }
}

/**
 * <p>Information about a policy attribute type.</p>
 */
export interface PolicyAttributeTypeDescription {
  __type?: "PolicyAttributeTypeDescription";
  /**
   * <p>The name of the attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The type of the attribute. For example, <code>Boolean</code> or <code>Integer</code>.</p>
   */
  AttributeType?: string;

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

  /**
   * <p>The default value of the attribute, if applicable.</p>
   */
  DefaultValue?: string;

  /**
   * <p>A description of the attribute.</p>
   */
  Description?: string;
}

export namespace PolicyAttributeTypeDescription {
  export function isa(o: any): o is PolicyAttributeTypeDescription {
    return __isa(o, "PolicyAttributeTypeDescription");
  }
}

/**
 * <p>Information about a policy.</p>
 */
export interface PolicyDescription {
  __type?: "PolicyDescription";
  /**
   * <p>The policy attributes.</p>
   */
  PolicyAttributeDescriptions?: Array<PolicyAttributeDescription>;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The name of the policy type.</p>
   */
  PolicyTypeName?: string;
}

export namespace PolicyDescription {
  export function isa(o: any): o is PolicyDescription {
    return __isa(o, "PolicyDescription");
  }
}

/**
 * <p>One or more of the specified policies do not exist.</p>
 */
export interface PolicyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyNotFoundException {
  export function isa(o: any): o is PolicyNotFoundException {
    return __isa(o, "PolicyNotFoundException");
  }
}

/**
 * <p>Information about a policy type.</p>
 */
export interface PolicyTypeDescription {
  __type?: "PolicyTypeDescription";
  /**
   * <p>A description of the policy type.</p>
   */
  Description?: string;

  /**
   * <p>The description of the policy attributes associated with the policies defined by Elastic Load Balancing.</p>
   */
  PolicyAttributeTypeDescriptions?: Array<PolicyAttributeTypeDescription>;

  /**
   * <p>The name of the policy type.</p>
   */
  PolicyTypeName?: string;
}

export namespace PolicyTypeDescription {
  export function isa(o: any): o is PolicyTypeDescription {
    return __isa(o, "PolicyTypeDescription");
  }
}

/**
 * <p>One or more of the specified policy types do not exist.</p>
 */
export interface PolicyTypeNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyTypeNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyTypeNotFoundException {
  export function isa(o: any): o is PolicyTypeNotFoundException {
    return __isa(o, "PolicyTypeNotFoundException");
  }
}

/**
 * <p>Contains the parameters for RegisterInstancesWithLoadBalancer.</p>
 */
export interface RegisterEndPointsInput {
  __type?: "RegisterEndPointsInput";
  /**
   * <p>The IDs of the instances.</p>
   */
  Instances: Array<Instance> | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace RegisterEndPointsInput {
  export function isa(o: any): o is RegisterEndPointsInput {
    return __isa(o, "RegisterEndPointsInput");
  }
}

/**
 * <p>Contains the output of RegisterInstancesWithLoadBalancer.</p>
 */
export interface RegisterEndPointsOutput {
  __type?: "RegisterEndPointsOutput";
  /**
   * <p>The updated list of instances for the load balancer.</p>
   */
  Instances?: Array<Instance>;
}

export namespace RegisterEndPointsOutput {
  export function isa(o: any): o is RegisterEndPointsOutput {
    return __isa(o, "RegisterEndPointsOutput");
  }
}

/**
 * <p>Contains the parameters for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface RemoveAvailabilityZonesInput {
  __type?: "RemoveAvailabilityZonesInput";
  /**
   * <p>The Availability Zones.</p>
   */
  AvailabilityZones: Array<string> | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;
}

export namespace RemoveAvailabilityZonesInput {
  export function isa(o: any): o is RemoveAvailabilityZonesInput {
    return __isa(o, "RemoveAvailabilityZonesInput");
  }
}

/**
 * <p>Contains the output for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface RemoveAvailabilityZonesOutput {
  __type?: "RemoveAvailabilityZonesOutput";
  /**
   * <p>The remaining Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string>;
}

export namespace RemoveAvailabilityZonesOutput {
  export function isa(o: any): o is RemoveAvailabilityZonesOutput {
    return __isa(o, "RemoveAvailabilityZonesOutput");
  }
}

/**
 * <p>Contains the parameters for RemoveTags.</p>
 */
export interface RemoveTagsInput {
  __type?: "RemoveTagsInput";
  /**
   * <p>The name of the load balancer. You can specify a maximum of one load balancer name.</p>
   */
  LoadBalancerNames: Array<string> | undefined;

  /**
   * <p>The list of tag keys to remove.</p>
   */
  Tags: Array<TagKeyOnly> | undefined;
}

export namespace RemoveTagsInput {
  export function isa(o: any): o is RemoveTagsInput {
    return __isa(o, "RemoveTagsInput");
  }
}

/**
 * <p>Contains the output of RemoveTags.</p>
 */
export interface RemoveTagsOutput {
  __type?: "RemoveTagsOutput";
}

export namespace RemoveTagsOutput {
  export function isa(o: any): o is RemoveTagsOutput {
    return __isa(o, "RemoveTagsOutput");
  }
}

/**
 * <p>Contains the parameters for SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateInput {
  __type?: "SetLoadBalancerListenerSSLCertificateInput";
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

export namespace SetLoadBalancerListenerSSLCertificateInput {
  export function isa(o: any): o is SetLoadBalancerListenerSSLCertificateInput {
    return __isa(o, "SetLoadBalancerListenerSSLCertificateInput");
  }
}

/**
 * <p>Contains the output of SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateOutput {
  __type?: "SetLoadBalancerListenerSSLCertificateOutput";
}

export namespace SetLoadBalancerListenerSSLCertificateOutput {
  export function isa(
    o: any
  ): o is SetLoadBalancerListenerSSLCertificateOutput {
    return __isa(o, "SetLoadBalancerListenerSSLCertificateOutput");
  }
}

/**
 * <p>Contains the parameters for SetLoadBalancerPoliciesForBackendServer.</p>
 */
export interface SetLoadBalancerPoliciesForBackendServerInput {
  __type?: "SetLoadBalancerPoliciesForBackendServerInput";
  /**
   * <p>The port number associated with the EC2 instance.</p>
   */
  InstancePort: number | undefined;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName: string | undefined;

  /**
   * <p>The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.</p>
   */
  PolicyNames: Array<string> | undefined;
}

export namespace SetLoadBalancerPoliciesForBackendServerInput {
  export function isa(
    o: any
  ): o is SetLoadBalancerPoliciesForBackendServerInput {
    return __isa(o, "SetLoadBalancerPoliciesForBackendServerInput");
  }
}

/**
 * <p>Contains the output of SetLoadBalancerPoliciesForBackendServer.</p>
 */
export interface SetLoadBalancerPoliciesForBackendServerOutput {
  __type?: "SetLoadBalancerPoliciesForBackendServerOutput";
}

export namespace SetLoadBalancerPoliciesForBackendServerOutput {
  export function isa(
    o: any
  ): o is SetLoadBalancerPoliciesForBackendServerOutput {
    return __isa(o, "SetLoadBalancerPoliciesForBackendServerOutput");
  }
}

/**
 * <p>Contains the parameters for SetLoadBalancePoliciesOfListener.</p>
 */
export interface SetLoadBalancerPoliciesOfListenerInput {
  __type?: "SetLoadBalancerPoliciesOfListenerInput";
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
  PolicyNames: Array<string> | undefined;
}

export namespace SetLoadBalancerPoliciesOfListenerInput {
  export function isa(o: any): o is SetLoadBalancerPoliciesOfListenerInput {
    return __isa(o, "SetLoadBalancerPoliciesOfListenerInput");
  }
}

/**
 * <p>Contains the output of SetLoadBalancePoliciesOfListener.</p>
 */
export interface SetLoadBalancerPoliciesOfListenerOutput {
  __type?: "SetLoadBalancerPoliciesOfListenerOutput";
}

export namespace SetLoadBalancerPoliciesOfListenerOutput {
  export function isa(o: any): o is SetLoadBalancerPoliciesOfListenerOutput {
    return __isa(o, "SetLoadBalancerPoliciesOfListenerOutput");
  }
}

/**
 * <p>Information about a source security group.</p>
 */
export interface SourceSecurityGroup {
  __type?: "SourceSecurityGroup";
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The owner of the security group.</p>
   */
  OwnerAlias?: string;
}

export namespace SourceSecurityGroup {
  export function isa(o: any): o is SourceSecurityGroup {
    return __isa(o, "SourceSecurityGroup");
  }
}

/**
 * <p>One or more of the specified subnets do not exist.</p>
 */
export interface SubnetNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "SubnetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace SubnetNotFoundException {
  export function isa(o: any): o is SubnetNotFoundException {
    return __isa(o, "SubnetNotFoundException");
  }
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>The tags associated with a load balancer.</p>
 */
export interface TagDescription {
  __type?: "TagDescription";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Array<Tag>;
}

export namespace TagDescription {
  export function isa(o: any): o is TagDescription {
    return __isa(o, "TagDescription");
  }
}

/**
 * <p>The key of a tag.</p>
 */
export interface TagKeyOnly {
  __type?: "TagKeyOnly";
  /**
   * <p>The name of the key.</p>
   */
  Key?: string;
}

export namespace TagKeyOnly {
  export function isa(o: any): o is TagKeyOnly {
    return __isa(o, "TagKeyOnly");
  }
}

/**
 * <p>The quota for the number of load balancers has been reached.</p>
 */
export interface TooManyAccessPointsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyAccessPointsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyAccessPointsException {
  export function isa(o: any): o is TooManyAccessPointsException {
    return __isa(o, "TooManyAccessPointsException");
  }
}

/**
 * <p>The quota for the number of policies for this load balancer has been reached.</p>
 */
export interface TooManyPoliciesException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyPoliciesException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyPoliciesException {
  export function isa(o: any): o is TooManyPoliciesException {
    return __isa(o, "TooManyPoliciesException");
  }
}

/**
 * <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return __isa(o, "TooManyTagsException");
  }
}

/**
 * <p>The specified protocol or signature version is not supported.</p>
 */
export interface UnsupportedProtocolException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedProtocolException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedProtocolException {
  export function isa(o: any): o is UnsupportedProtocolException {
    return __isa(o, "UnsupportedProtocolException");
  }
}
