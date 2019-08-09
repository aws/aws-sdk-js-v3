import { ElasticLoadBalancingClient } from "./ElasticLoadBalancingClient";
import { AccessPointNotFoundException } from "./types/AccessPointNotFoundException";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { ApplySecurityGroupsToLoadBalancerInput } from "./types/ApplySecurityGroupsToLoadBalancerInput";
import { ApplySecurityGroupsToLoadBalancerOutput } from "./types/ApplySecurityGroupsToLoadBalancerOutput";
import { AttachLoadBalancerToSubnetsInput } from "./types/AttachLoadBalancerToSubnetsInput";
import { AttachLoadBalancerToSubnetsOutput } from "./types/AttachLoadBalancerToSubnetsOutput";
import { CertificateNotFoundException } from "./types/CertificateNotFoundException";
import { ConfigureHealthCheckInput } from "./types/ConfigureHealthCheckInput";
import { ConfigureHealthCheckOutput } from "./types/ConfigureHealthCheckOutput";
import { CreateAppCookieStickinessPolicyInput } from "./types/CreateAppCookieStickinessPolicyInput";
import { CreateAppCookieStickinessPolicyOutput } from "./types/CreateAppCookieStickinessPolicyOutput";
import { CreateLBCookieStickinessPolicyInput } from "./types/CreateLBCookieStickinessPolicyInput";
import { CreateLBCookieStickinessPolicyOutput } from "./types/CreateLBCookieStickinessPolicyOutput";
import { CreateLoadBalancerInput } from "./types/CreateLoadBalancerInput";
import { CreateLoadBalancerListenersInput } from "./types/CreateLoadBalancerListenersInput";
import { CreateLoadBalancerListenersOutput } from "./types/CreateLoadBalancerListenersOutput";
import { CreateLoadBalancerOutput } from "./types/CreateLoadBalancerOutput";
import { CreateLoadBalancerPolicyInput } from "./types/CreateLoadBalancerPolicyInput";
import { CreateLoadBalancerPolicyOutput } from "./types/CreateLoadBalancerPolicyOutput";
import { DeleteLoadBalancerInput } from "./types/DeleteLoadBalancerInput";
import { DeleteLoadBalancerListenersInput } from "./types/DeleteLoadBalancerListenersInput";
import { DeleteLoadBalancerListenersOutput } from "./types/DeleteLoadBalancerListenersOutput";
import { DeleteLoadBalancerOutput } from "./types/DeleteLoadBalancerOutput";
import { DeleteLoadBalancerPolicyInput } from "./types/DeleteLoadBalancerPolicyInput";
import { DeleteLoadBalancerPolicyOutput } from "./types/DeleteLoadBalancerPolicyOutput";
import { DependencyThrottleException } from "./types/DependencyThrottleException";
import { DeregisterInstancesFromLoadBalancerInput } from "./types/DeregisterInstancesFromLoadBalancerInput";
import { DeregisterInstancesFromLoadBalancerOutput } from "./types/DeregisterInstancesFromLoadBalancerOutput";
import { DescribeAccountLimitsInput } from "./types/DescribeAccountLimitsInput";
import { DescribeAccountLimitsOutput } from "./types/DescribeAccountLimitsOutput";
import { DescribeInstanceHealthInput } from "./types/DescribeInstanceHealthInput";
import { DescribeInstanceHealthOutput } from "./types/DescribeInstanceHealthOutput";
import { DescribeLoadBalancerAttributesInput } from "./types/DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerAttributesOutput } from "./types/DescribeLoadBalancerAttributesOutput";
import { DescribeLoadBalancerPoliciesInput } from "./types/DescribeLoadBalancerPoliciesInput";
import { DescribeLoadBalancerPoliciesOutput } from "./types/DescribeLoadBalancerPoliciesOutput";
import { DescribeLoadBalancerPolicyTypesInput } from "./types/DescribeLoadBalancerPolicyTypesInput";
import { DescribeLoadBalancerPolicyTypesOutput } from "./types/DescribeLoadBalancerPolicyTypesOutput";
import { DescribeLoadBalancersInput } from "./types/DescribeLoadBalancersInput";
import { DescribeLoadBalancersOutput } from "./types/DescribeLoadBalancersOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DetachLoadBalancerFromSubnetsInput } from "./types/DetachLoadBalancerFromSubnetsInput";
import { DetachLoadBalancerFromSubnetsOutput } from "./types/DetachLoadBalancerFromSubnetsOutput";
import { DisableAvailabilityZonesForLoadBalancerInput } from "./types/DisableAvailabilityZonesForLoadBalancerInput";
import { DisableAvailabilityZonesForLoadBalancerOutput } from "./types/DisableAvailabilityZonesForLoadBalancerOutput";
import { DuplicateAccessPointNameException } from "./types/DuplicateAccessPointNameException";
import { DuplicateListenerException } from "./types/DuplicateListenerException";
import { DuplicatePolicyNameException } from "./types/DuplicatePolicyNameException";
import { DuplicateTagKeysException } from "./types/DuplicateTagKeysException";
import { EnableAvailabilityZonesForLoadBalancerInput } from "./types/EnableAvailabilityZonesForLoadBalancerInput";
import { EnableAvailabilityZonesForLoadBalancerOutput } from "./types/EnableAvailabilityZonesForLoadBalancerOutput";
import { InvalidConfigurationRequestException } from "./types/InvalidConfigurationRequestException";
import { InvalidEndPointException } from "./types/InvalidEndPointException";
import { InvalidSchemeException } from "./types/InvalidSchemeException";
import { InvalidSecurityGroupException } from "./types/InvalidSecurityGroupException";
import { InvalidSubnetException } from "./types/InvalidSubnetException";
import { ListenerNotFoundException } from "./types/ListenerNotFoundException";
import { LoadBalancerAttributeNotFoundException } from "./types/LoadBalancerAttributeNotFoundException";
import { ModifyLoadBalancerAttributesInput } from "./types/ModifyLoadBalancerAttributesInput";
import { ModifyLoadBalancerAttributesOutput } from "./types/ModifyLoadBalancerAttributesOutput";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { PolicyNotFoundException } from "./types/PolicyNotFoundException";
import { PolicyTypeNotFoundException } from "./types/PolicyTypeNotFoundException";
import { RegisterInstancesWithLoadBalancerInput } from "./types/RegisterInstancesWithLoadBalancerInput";
import { RegisterInstancesWithLoadBalancerOutput } from "./types/RegisterInstancesWithLoadBalancerOutput";
import { RemoveTagsInput } from "./types/RemoveTagsInput";
import { RemoveTagsOutput } from "./types/RemoveTagsOutput";
import { SetLoadBalancerListenerSSLCertificateInput } from "./types/SetLoadBalancerListenerSSLCertificateInput";
import { SetLoadBalancerListenerSSLCertificateOutput } from "./types/SetLoadBalancerListenerSSLCertificateOutput";
import { SetLoadBalancerPoliciesForBackendServerInput } from "./types/SetLoadBalancerPoliciesForBackendServerInput";
import { SetLoadBalancerPoliciesForBackendServerOutput } from "./types/SetLoadBalancerPoliciesForBackendServerOutput";
import { SetLoadBalancerPoliciesOfListenerInput } from "./types/SetLoadBalancerPoliciesOfListenerInput";
import { SetLoadBalancerPoliciesOfListenerOutput } from "./types/SetLoadBalancerPoliciesOfListenerOutput";
import { SubnetNotFoundException } from "./types/SubnetNotFoundException";
import { TooManyAccessPointsException } from "./types/TooManyAccessPointsException";
import { TooManyPoliciesException } from "./types/TooManyPoliciesException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UnsupportedProtocolException } from "./types/UnsupportedProtocolException";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { ApplySecurityGroupsToLoadBalancerCommand } from "./commands/ApplySecurityGroupsToLoadBalancerCommand";
import { AttachLoadBalancerToSubnetsCommand } from "./commands/AttachLoadBalancerToSubnetsCommand";
import { ConfigureHealthCheckCommand } from "./commands/ConfigureHealthCheckCommand";
import { CreateAppCookieStickinessPolicyCommand } from "./commands/CreateAppCookieStickinessPolicyCommand";
import { CreateLBCookieStickinessPolicyCommand } from "./commands/CreateLBCookieStickinessPolicyCommand";
import { CreateLoadBalancerCommand } from "./commands/CreateLoadBalancerCommand";
import { CreateLoadBalancerListenersCommand } from "./commands/CreateLoadBalancerListenersCommand";
import { CreateLoadBalancerPolicyCommand } from "./commands/CreateLoadBalancerPolicyCommand";
import { DeleteLoadBalancerCommand } from "./commands/DeleteLoadBalancerCommand";
import { DeleteLoadBalancerListenersCommand } from "./commands/DeleteLoadBalancerListenersCommand";
import { DeleteLoadBalancerPolicyCommand } from "./commands/DeleteLoadBalancerPolicyCommand";
import { DeregisterInstancesFromLoadBalancerCommand } from "./commands/DeregisterInstancesFromLoadBalancerCommand";
import { DescribeAccountLimitsCommand } from "./commands/DescribeAccountLimitsCommand";
import { DescribeInstanceHealthCommand } from "./commands/DescribeInstanceHealthCommand";
import { DescribeLoadBalancerAttributesCommand } from "./commands/DescribeLoadBalancerAttributesCommand";
import { DescribeLoadBalancerPoliciesCommand } from "./commands/DescribeLoadBalancerPoliciesCommand";
import { DescribeLoadBalancerPolicyTypesCommand } from "./commands/DescribeLoadBalancerPolicyTypesCommand";
import { DescribeLoadBalancersCommand } from "./commands/DescribeLoadBalancersCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DetachLoadBalancerFromSubnetsCommand } from "./commands/DetachLoadBalancerFromSubnetsCommand";
import { DisableAvailabilityZonesForLoadBalancerCommand } from "./commands/DisableAvailabilityZonesForLoadBalancerCommand";
import { EnableAvailabilityZonesForLoadBalancerCommand } from "./commands/EnableAvailabilityZonesForLoadBalancerCommand";
import { ModifyLoadBalancerAttributesCommand } from "./commands/ModifyLoadBalancerAttributesCommand";
import { RegisterInstancesWithLoadBalancerCommand } from "./commands/RegisterInstancesWithLoadBalancerCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { SetLoadBalancerListenerSSLCertificateCommand } from "./commands/SetLoadBalancerListenerSSLCertificateCommand";
import { SetLoadBalancerPoliciesForBackendServerCommand } from "./commands/SetLoadBalancerPoliciesForBackendServerCommand";
import { SetLoadBalancerPoliciesOfListenerCommand } from "./commands/SetLoadBalancerPoliciesOfListenerCommand";

export class ElasticLoadBalancing extends ElasticLoadBalancingClient {
  /**
   * <p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {TooManyTagsException} <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
  public addTags(
    args: AddTagsInput,
    cb: (err: any, data?: AddTagsOutput) => void
  ): void;
  public addTags(
    args: AddTagsInput,
    cb?: (err: any, data?: AddTagsOutput) => void
  ): Promise<AddTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {InvalidSecurityGroupException} <p>One or more of the specified security groups do not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerInput
  ): Promise<ApplySecurityGroupsToLoadBalancerOutput>;
  public applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerInput,
    cb: (err: any, data?: ApplySecurityGroupsToLoadBalancerOutput) => void
  ): void;
  public applySecurityGroupsToLoadBalancer(
    args: ApplySecurityGroupsToLoadBalancerInput,
    cb?: (err: any, data?: ApplySecurityGroupsToLoadBalancerOutput) => void
  ): Promise<ApplySecurityGroupsToLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApplySecurityGroupsToLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {SubnetNotFoundException} <p>One or more of the specified subnets do not exist.</p>
   *   - {InvalidSubnetException} <p>The specified VPC has no associated Internet gateway.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsInput
  ): Promise<AttachLoadBalancerToSubnetsOutput>;
  public attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsInput,
    cb: (err: any, data?: AttachLoadBalancerToSubnetsOutput) => void
  ): void;
  public attachLoadBalancerToSubnets(
    args: AttachLoadBalancerToSubnetsInput,
    cb?: (err: any, data?: AttachLoadBalancerToSubnetsOutput) => void
  ): Promise<AttachLoadBalancerToSubnetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachLoadBalancerToSubnetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public configureHealthCheck(
    args: ConfigureHealthCheckInput
  ): Promise<ConfigureHealthCheckOutput>;
  public configureHealthCheck(
    args: ConfigureHealthCheckInput,
    cb: (err: any, data?: ConfigureHealthCheckOutput) => void
  ): void;
  public configureHealthCheck(
    args: ConfigureHealthCheckInput,
    cb?: (err: any, data?: ConfigureHealthCheckOutput) => void
  ): Promise<ConfigureHealthCheckOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ConfigureHealthCheckCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {DuplicatePolicyNameException} <p>A policy with the specified name already exists for this load balancer.</p>
   *   - {TooManyPoliciesException} <p>The quota for the number of policies for this load balancer has been reached.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyInput
  ): Promise<CreateAppCookieStickinessPolicyOutput>;
  public createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyInput,
    cb: (err: any, data?: CreateAppCookieStickinessPolicyOutput) => void
  ): void;
  public createAppCookieStickinessPolicy(
    args: CreateAppCookieStickinessPolicyInput,
    cb?: (err: any, data?: CreateAppCookieStickinessPolicyOutput) => void
  ): Promise<CreateAppCookieStickinessPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAppCookieStickinessPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {DuplicatePolicyNameException} <p>A policy with the specified name already exists for this load balancer.</p>
   *   - {TooManyPoliciesException} <p>The quota for the number of policies for this load balancer has been reached.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyInput
  ): Promise<CreateLBCookieStickinessPolicyOutput>;
  public createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyInput,
    cb: (err: any, data?: CreateLBCookieStickinessPolicyOutput) => void
  ): void;
  public createLBCookieStickinessPolicy(
    args: CreateLBCookieStickinessPolicyInput,
    cb?: (err: any, data?: CreateLBCookieStickinessPolicyOutput) => void
  ): Promise<CreateLBCookieStickinessPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLBCookieStickinessPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateAccessPointNameException} <p>The specified load balancer name already exists for this account.</p>
   *   - {TooManyAccessPointsException} <p>The quota for the number of load balancers has been reached.</p>
   *   - {CertificateNotFoundException} <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM) or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might indicate that the certificate is not fully available yet.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {SubnetNotFoundException} <p>One or more of the specified subnets do not exist.</p>
   *   - {InvalidSubnetException} <p>The specified VPC has no associated Internet gateway.</p>
   *   - {InvalidSecurityGroupException} <p>One or more of the specified security groups do not exist.</p>
   *   - {InvalidSchemeException} <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
   *   - {TooManyTagsException} <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol or signature version is not supported.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoadBalancer(
    args: CreateLoadBalancerInput
  ): Promise<CreateLoadBalancerOutput>;
  public createLoadBalancer(
    args: CreateLoadBalancerInput,
    cb: (err: any, data?: CreateLoadBalancerOutput) => void
  ): void;
  public createLoadBalancer(
    args: CreateLoadBalancerInput,
    cb?: (err: any, data?: CreateLoadBalancerOutput) => void
  ): Promise<CreateLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {DuplicateListenerException} <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
   *   - {CertificateNotFoundException} <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM) or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might indicate that the certificate is not fully available yet.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol or signature version is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoadBalancerListeners(
    args: CreateLoadBalancerListenersInput
  ): Promise<CreateLoadBalancerListenersOutput>;
  public createLoadBalancerListeners(
    args: CreateLoadBalancerListenersInput,
    cb: (err: any, data?: CreateLoadBalancerListenersOutput) => void
  ): void;
  public createLoadBalancerListeners(
    args: CreateLoadBalancerListenersInput,
    cb?: (err: any, data?: CreateLoadBalancerListenersOutput) => void
  ): Promise<CreateLoadBalancerListenersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoadBalancerListenersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {PolicyTypeNotFoundException} <p>One or more of the specified policy types do not exist.</p>
   *   - {DuplicatePolicyNameException} <p>A policy with the specified name already exists for this load balancer.</p>
   *   - {TooManyPoliciesException} <p>The quota for the number of policies for this load balancer has been reached.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyInput
  ): Promise<CreateLoadBalancerPolicyOutput>;
  public createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyInput,
    cb: (err: any, data?: CreateLoadBalancerPolicyOutput) => void
  ): void;
  public createLoadBalancerPolicy(
    args: CreateLoadBalancerPolicyInput,
    cb?: (err: any, data?: CreateLoadBalancerPolicyOutput) => void
  ): Promise<CreateLoadBalancerPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoadBalancerPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoadBalancer(
    args: DeleteLoadBalancerInput
  ): Promise<DeleteLoadBalancerOutput>;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerInput,
    cb: (err: any, data?: DeleteLoadBalancerOutput) => void
  ): void;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerInput,
    cb?: (err: any, data?: DeleteLoadBalancerOutput) => void
  ): Promise<DeleteLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified listeners from the specified load balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersInput
  ): Promise<DeleteLoadBalancerListenersOutput>;
  public deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersInput,
    cb: (err: any, data?: DeleteLoadBalancerListenersOutput) => void
  ): void;
  public deleteLoadBalancerListeners(
    args: DeleteLoadBalancerListenersInput,
    cb?: (err: any, data?: DeleteLoadBalancerListenersOutput) => void
  ): Promise<DeleteLoadBalancerListenersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoadBalancerListenersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyInput
  ): Promise<DeleteLoadBalancerPolicyOutput>;
  public deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyInput,
    cb: (err: any, data?: DeleteLoadBalancerPolicyOutput) => void
  ): void;
  public deleteLoadBalancerPolicy(
    args: DeleteLoadBalancerPolicyInput,
    cb?: (err: any, data?: DeleteLoadBalancerPolicyOutput) => void
  ): Promise<DeleteLoadBalancerPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoadBalancerPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidEndPointException} <p>The specified endpoint is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerInput
  ): Promise<DeregisterInstancesFromLoadBalancerOutput>;
  public deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerInput,
    cb: (err: any, data?: DeregisterInstancesFromLoadBalancerOutput) => void
  ): void;
  public deregisterInstancesFromLoadBalancer(
    args: DeregisterInstancesFromLoadBalancerInput,
    cb?: (err: any, data?: DeregisterInstancesFromLoadBalancerOutput) => void
  ): Promise<DeregisterInstancesFromLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterInstancesFromLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsInput
  ): Promise<DescribeAccountLimitsOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsInput,
    cb: (err: any, data?: DescribeAccountLimitsOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsInput,
    cb?: (err: any, data?: DescribeAccountLimitsOutput) => void
  ): Promise<DescribeAccountLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidEndPointException} <p>The specified endpoint is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeInstanceHealth(
    args: DescribeInstanceHealthInput
  ): Promise<DescribeInstanceHealthOutput>;
  public describeInstanceHealth(
    args: DescribeInstanceHealthInput,
    cb: (err: any, data?: DescribeInstanceHealthOutput) => void
  ): void;
  public describeInstanceHealth(
    args: DescribeInstanceHealthInput,
    cb?: (err: any, data?: DescribeInstanceHealthOutput) => void
  ): Promise<DescribeInstanceHealthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeInstanceHealthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the attributes for the specified load balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {LoadBalancerAttributeNotFoundException} <p>The specified load balancer attribute does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesInput
  ): Promise<DescribeLoadBalancerAttributesOutput>;
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesInput,
    cb: (err: any, data?: DescribeLoadBalancerAttributesOutput) => void
  ): void;
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesInput,
    cb?: (err: any, data?: DescribeLoadBalancerAttributesOutput) => void
  ): Promise<DescribeLoadBalancerAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBalancerAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {PolicyNotFoundException} <p>One or more of the specified policies do not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesInput
  ): Promise<DescribeLoadBalancerPoliciesOutput>;
  public describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesInput,
    cb: (err: any, data?: DescribeLoadBalancerPoliciesOutput) => void
  ): void;
  public describeLoadBalancerPolicies(
    args: DescribeLoadBalancerPoliciesInput,
    cb?: (err: any, data?: DescribeLoadBalancerPoliciesOutput) => void
  ): Promise<DescribeLoadBalancerPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBalancerPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PolicyTypeNotFoundException} <p>One or more of the specified policy types do not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesInput
  ): Promise<DescribeLoadBalancerPolicyTypesOutput>;
  public describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesInput,
    cb: (err: any, data?: DescribeLoadBalancerPolicyTypesOutput) => void
  ): void;
  public describeLoadBalancerPolicyTypes(
    args: DescribeLoadBalancerPolicyTypesInput,
    cb?: (err: any, data?: DescribeLoadBalancerPolicyTypesOutput) => void
  ): Promise<DescribeLoadBalancerPolicyTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBalancerPolicyTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {DependencyThrottleException} <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLoadBalancers(
    args: DescribeLoadBalancersInput
  ): Promise<DescribeLoadBalancersOutput>;
  public describeLoadBalancers(
    args: DescribeLoadBalancersInput,
    cb: (err: any, data?: DescribeLoadBalancersOutput) => void
  ): void;
  public describeLoadBalancers(
    args: DescribeLoadBalancersInput,
    cb?: (err: any, data?: DescribeLoadBalancersOutput) => void
  ): Promise<DescribeLoadBalancersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLoadBalancersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the tags associated with the specified load balancers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsInput
  ): Promise<DetachLoadBalancerFromSubnetsOutput>;
  public detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsInput,
    cb: (err: any, data?: DetachLoadBalancerFromSubnetsOutput) => void
  ): void;
  public detachLoadBalancerFromSubnets(
    args: DetachLoadBalancerFromSubnetsInput,
    cb?: (err: any, data?: DetachLoadBalancerFromSubnetsOutput) => void
  ): Promise<DetachLoadBalancerFromSubnetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachLoadBalancerFromSubnetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerInput
  ): Promise<DisableAvailabilityZonesForLoadBalancerOutput>;
  public disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerInput,
    cb: (err: any, data?: DisableAvailabilityZonesForLoadBalancerOutput) => void
  ): void;
  public disableAvailabilityZonesForLoadBalancer(
    args: DisableAvailabilityZonesForLoadBalancerInput,
    cb?: (
      err: any,
      data?: DisableAvailabilityZonesForLoadBalancerOutput
    ) => void
  ): Promise<DisableAvailabilityZonesForLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableAvailabilityZonesForLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerInput
  ): Promise<EnableAvailabilityZonesForLoadBalancerOutput>;
  public enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerInput,
    cb: (err: any, data?: EnableAvailabilityZonesForLoadBalancerOutput) => void
  ): void;
  public enableAvailabilityZonesForLoadBalancer(
    args: EnableAvailabilityZonesForLoadBalancerInput,
    cb?: (err: any, data?: EnableAvailabilityZonesForLoadBalancerOutput) => void
  ): Promise<EnableAvailabilityZonesForLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableAvailabilityZonesForLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {LoadBalancerAttributeNotFoundException} <p>The specified load balancer attribute does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesInput
  ): Promise<ModifyLoadBalancerAttributesOutput>;
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesInput,
    cb: (err: any, data?: ModifyLoadBalancerAttributesOutput) => void
  ): void;
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesInput,
    cb?: (err: any, data?: ModifyLoadBalancerAttributesOutput) => void
  ): Promise<ModifyLoadBalancerAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyLoadBalancerAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidEndPointException} <p>The specified endpoint is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerInput
  ): Promise<RegisterInstancesWithLoadBalancerOutput>;
  public registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerInput,
    cb: (err: any, data?: RegisterInstancesWithLoadBalancerOutput) => void
  ): void;
  public registerInstancesWithLoadBalancer(
    args: RegisterInstancesWithLoadBalancerInput,
    cb?: (err: any, data?: RegisterInstancesWithLoadBalancerOutput) => void
  ): Promise<RegisterInstancesWithLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterInstancesWithLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from the specified load balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTags(args: RemoveTagsInput): Promise<RemoveTagsOutput>;
  public removeTags(
    args: RemoveTagsInput,
    cb: (err: any, data?: RemoveTagsOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsInput,
    cb?: (err: any, data?: RemoveTagsOutput) => void
  ): Promise<RemoveTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CertificateNotFoundException} <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM) or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might indicate that the certificate is not fully available yet.</p>
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {ListenerNotFoundException} <p>The load balancer does not have a listener configured at the specified port.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol or signature version is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateInput
  ): Promise<SetLoadBalancerListenerSSLCertificateOutput>;
  public setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateInput,
    cb: (err: any, data?: SetLoadBalancerListenerSSLCertificateOutput) => void
  ): void;
  public setLoadBalancerListenerSSLCertificate(
    args: SetLoadBalancerListenerSSLCertificateInput,
    cb?: (err: any, data?: SetLoadBalancerListenerSSLCertificateOutput) => void
  ): Promise<SetLoadBalancerListenerSSLCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetLoadBalancerListenerSSLCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {PolicyNotFoundException} <p>One or more of the specified policies do not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerInput
  ): Promise<SetLoadBalancerPoliciesForBackendServerOutput>;
  public setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerInput,
    cb: (err: any, data?: SetLoadBalancerPoliciesForBackendServerOutput) => void
  ): void;
  public setLoadBalancerPoliciesForBackendServer(
    args: SetLoadBalancerPoliciesForBackendServerInput,
    cb?: (
      err: any,
      data?: SetLoadBalancerPoliciesForBackendServerOutput
    ) => void
  ): Promise<SetLoadBalancerPoliciesForBackendServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetLoadBalancerPoliciesForBackendServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessPointNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {PolicyNotFoundException} <p>One or more of the specified policies do not exist.</p>
   *   - {ListenerNotFoundException} <p>The load balancer does not have a listener configured at the specified port.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration change is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerInput
  ): Promise<SetLoadBalancerPoliciesOfListenerOutput>;
  public setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerInput,
    cb: (err: any, data?: SetLoadBalancerPoliciesOfListenerOutput) => void
  ): void;
  public setLoadBalancerPoliciesOfListener(
    args: SetLoadBalancerPoliciesOfListenerInput,
    cb?: (err: any, data?: SetLoadBalancerPoliciesOfListenerOutput) => void
  ): Promise<SetLoadBalancerPoliciesOfListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetLoadBalancerPoliciesOfListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
