import { ElasticLoadBalancingv2Client } from "./ElasticLoadBalancingv2Client";
import { AddListenerCertificatesInput } from "./types/AddListenerCertificatesInput";
import { AddListenerCertificatesOutput } from "./types/AddListenerCertificatesOutput";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { AllocationIdNotFoundException } from "./types/AllocationIdNotFoundException";
import { AvailabilityZoneNotSupportedException } from "./types/AvailabilityZoneNotSupportedException";
import { CertificateNotFoundException } from "./types/CertificateNotFoundException";
import { CreateListenerInput } from "./types/CreateListenerInput";
import { CreateListenerOutput } from "./types/CreateListenerOutput";
import { CreateLoadBalancerInput } from "./types/CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "./types/CreateLoadBalancerOutput";
import { CreateRuleInput } from "./types/CreateRuleInput";
import { CreateRuleOutput } from "./types/CreateRuleOutput";
import { CreateTargetGroupInput } from "./types/CreateTargetGroupInput";
import { CreateTargetGroupOutput } from "./types/CreateTargetGroupOutput";
import { DeleteListenerInput } from "./types/DeleteListenerInput";
import { DeleteListenerOutput } from "./types/DeleteListenerOutput";
import { DeleteLoadBalancerInput } from "./types/DeleteLoadBalancerInput";
import { DeleteLoadBalancerOutput } from "./types/DeleteLoadBalancerOutput";
import { DeleteRuleInput } from "./types/DeleteRuleInput";
import { DeleteRuleOutput } from "./types/DeleteRuleOutput";
import { DeleteTargetGroupInput } from "./types/DeleteTargetGroupInput";
import { DeleteTargetGroupOutput } from "./types/DeleteTargetGroupOutput";
import { DeregisterTargetsInput } from "./types/DeregisterTargetsInput";
import { DeregisterTargetsOutput } from "./types/DeregisterTargetsOutput";
import { DescribeAccountLimitsInput } from "./types/DescribeAccountLimitsInput";
import { DescribeAccountLimitsOutput } from "./types/DescribeAccountLimitsOutput";
import { DescribeListenerCertificatesInput } from "./types/DescribeListenerCertificatesInput";
import { DescribeListenerCertificatesOutput } from "./types/DescribeListenerCertificatesOutput";
import { DescribeListenersInput } from "./types/DescribeListenersInput";
import { DescribeListenersOutput } from "./types/DescribeListenersOutput";
import { DescribeLoadBalancerAttributesInput } from "./types/DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerAttributesOutput } from "./types/DescribeLoadBalancerAttributesOutput";
import { DescribeLoadBalancersInput } from "./types/DescribeLoadBalancersInput";
import { DescribeLoadBalancersOutput } from "./types/DescribeLoadBalancersOutput";
import { DescribeRulesInput } from "./types/DescribeRulesInput";
import { DescribeRulesOutput } from "./types/DescribeRulesOutput";
import { DescribeSSLPoliciesInput } from "./types/DescribeSSLPoliciesInput";
import { DescribeSSLPoliciesOutput } from "./types/DescribeSSLPoliciesOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DescribeTargetGroupAttributesInput } from "./types/DescribeTargetGroupAttributesInput";
import { DescribeTargetGroupAttributesOutput } from "./types/DescribeTargetGroupAttributesOutput";
import { DescribeTargetGroupsInput } from "./types/DescribeTargetGroupsInput";
import { DescribeTargetGroupsOutput } from "./types/DescribeTargetGroupsOutput";
import { DescribeTargetHealthInput } from "./types/DescribeTargetHealthInput";
import { DescribeTargetHealthOutput } from "./types/DescribeTargetHealthOutput";
import { DuplicateListenerException } from "./types/DuplicateListenerException";
import { DuplicateLoadBalancerNameException } from "./types/DuplicateLoadBalancerNameException";
import { DuplicateTagKeysException } from "./types/DuplicateTagKeysException";
import { DuplicateTargetGroupNameException } from "./types/DuplicateTargetGroupNameException";
import { HealthUnavailableException } from "./types/HealthUnavailableException";
import { IncompatibleProtocolsException } from "./types/IncompatibleProtocolsException";
import { InvalidConfigurationRequestException } from "./types/InvalidConfigurationRequestException";
import { InvalidLoadBalancerActionException } from "./types/InvalidLoadBalancerActionException";
import { InvalidSchemeException } from "./types/InvalidSchemeException";
import { InvalidSecurityGroupException } from "./types/InvalidSecurityGroupException";
import { InvalidSubnetException } from "./types/InvalidSubnetException";
import { InvalidTargetException } from "./types/InvalidTargetException";
import { ListenerNotFoundException } from "./types/ListenerNotFoundException";
import { LoadBalancerNotFoundException } from "./types/LoadBalancerNotFoundException";
import { ModifyListenerInput } from "./types/ModifyListenerInput";
import { ModifyListenerOutput } from "./types/ModifyListenerOutput";
import { ModifyLoadBalancerAttributesInput } from "./types/ModifyLoadBalancerAttributesInput";
import { ModifyLoadBalancerAttributesOutput } from "./types/ModifyLoadBalancerAttributesOutput";
import { ModifyRuleInput } from "./types/ModifyRuleInput";
import { ModifyRuleOutput } from "./types/ModifyRuleOutput";
import { ModifyTargetGroupAttributesInput } from "./types/ModifyTargetGroupAttributesInput";
import { ModifyTargetGroupAttributesOutput } from "./types/ModifyTargetGroupAttributesOutput";
import { ModifyTargetGroupInput } from "./types/ModifyTargetGroupInput";
import { ModifyTargetGroupOutput } from "./types/ModifyTargetGroupOutput";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { PriorityInUseException } from "./types/PriorityInUseException";
import { RegisterTargetsInput } from "./types/RegisterTargetsInput";
import { RegisterTargetsOutput } from "./types/RegisterTargetsOutput";
import { RemoveListenerCertificatesInput } from "./types/RemoveListenerCertificatesInput";
import { RemoveListenerCertificatesOutput } from "./types/RemoveListenerCertificatesOutput";
import { RemoveTagsInput } from "./types/RemoveTagsInput";
import { RemoveTagsOutput } from "./types/RemoveTagsOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { RuleNotFoundException } from "./types/RuleNotFoundException";
import { SSLPolicyNotFoundException } from "./types/SSLPolicyNotFoundException";
import { SetIpAddressTypeInput } from "./types/SetIpAddressTypeInput";
import { SetIpAddressTypeOutput } from "./types/SetIpAddressTypeOutput";
import { SetRulePrioritiesInput } from "./types/SetRulePrioritiesInput";
import { SetRulePrioritiesOutput } from "./types/SetRulePrioritiesOutput";
import { SetSecurityGroupsInput } from "./types/SetSecurityGroupsInput";
import { SetSecurityGroupsOutput } from "./types/SetSecurityGroupsOutput";
import { SetSubnetsInput } from "./types/SetSubnetsInput";
import { SetSubnetsOutput } from "./types/SetSubnetsOutput";
import { SubnetNotFoundException } from "./types/SubnetNotFoundException";
import { TargetGroupAssociationLimitException } from "./types/TargetGroupAssociationLimitException";
import { TargetGroupNotFoundException } from "./types/TargetGroupNotFoundException";
import { TooManyActionsException } from "./types/TooManyActionsException";
import { TooManyCertificatesException } from "./types/TooManyCertificatesException";
import { TooManyListenersException } from "./types/TooManyListenersException";
import { TooManyLoadBalancersException } from "./types/TooManyLoadBalancersException";
import { TooManyRegistrationsForTargetIdException } from "./types/TooManyRegistrationsForTargetIdException";
import { TooManyRulesException } from "./types/TooManyRulesException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { TooManyTargetGroupsException } from "./types/TooManyTargetGroupsException";
import { TooManyTargetsException } from "./types/TooManyTargetsException";
import { UnsupportedProtocolException } from "./types/UnsupportedProtocolException";
import { AddListenerCertificatesCommand } from "./commands/AddListenerCertificatesCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CreateListenerCommand } from "./commands/CreateListenerCommand";
import { CreateLoadBalancerCommand } from "./commands/CreateLoadBalancerCommand";
import { CreateRuleCommand } from "./commands/CreateRuleCommand";
import { CreateTargetGroupCommand } from "./commands/CreateTargetGroupCommand";
import { DeleteListenerCommand } from "./commands/DeleteListenerCommand";
import { DeleteLoadBalancerCommand } from "./commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommand } from "./commands/DeleteRuleCommand";
import { DeleteTargetGroupCommand } from "./commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommand } from "./commands/DeregisterTargetsCommand";
import { DescribeAccountLimitsCommand } from "./commands/DescribeAccountLimitsCommand";
import { DescribeListenerCertificatesCommand } from "./commands/DescribeListenerCertificatesCommand";
import { DescribeListenersCommand } from "./commands/DescribeListenersCommand";
import { DescribeLoadBalancerAttributesCommand } from "./commands/DescribeLoadBalancerAttributesCommand";
import { DescribeLoadBalancersCommand } from "./commands/DescribeLoadBalancersCommand";
import { DescribeRulesCommand } from "./commands/DescribeRulesCommand";
import { DescribeSSLPoliciesCommand } from "./commands/DescribeSSLPoliciesCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DescribeTargetGroupAttributesCommand } from "./commands/DescribeTargetGroupAttributesCommand";
import { DescribeTargetGroupsCommand } from "./commands/DescribeTargetGroupsCommand";
import { DescribeTargetHealthCommand } from "./commands/DescribeTargetHealthCommand";
import { ModifyListenerCommand } from "./commands/ModifyListenerCommand";
import { ModifyLoadBalancerAttributesCommand } from "./commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommand } from "./commands/ModifyRuleCommand";
import { ModifyTargetGroupAttributesCommand } from "./commands/ModifyTargetGroupAttributesCommand";
import { ModifyTargetGroupCommand } from "./commands/ModifyTargetGroupCommand";
import { RegisterTargetsCommand } from "./commands/RegisterTargetsCommand";
import { RemoveListenerCertificatesCommand } from "./commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { SetIpAddressTypeCommand } from "./commands/SetIpAddressTypeCommand";
import { SetRulePrioritiesCommand } from "./commands/SetRulePrioritiesCommand";
import { SetSecurityGroupsCommand } from "./commands/SetSecurityGroupsCommand";
import { SetSubnetsCommand } from "./commands/SetSubnetsCommand";

export class ElasticLoadBalancingv2 extends ElasticLoadBalancingv2Client {
  /**
   * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>To get the certificate list for a listener, use <a>DescribeListenerCertificates</a>. To remove certificates from the certificate list for a listener, use <a>RemoveListenerCertificates</a>. To replace the default certificate for a listener, use <a>ModifyListener</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL Certificates</a> in the <i>Application Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {TooManyCertificatesException} <p>You've reached the limit on the number of certificates per load balancer.</p>
   *   - {CertificateNotFoundException} <p>The specified certificate does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addListenerCertificates(
    args: AddListenerCertificatesInput
  ): Promise<AddListenerCertificatesOutput>;
  public addListenerCertificates(
    args: AddListenerCertificatesInput,
    cb: (err: any, data?: AddListenerCertificatesOutput) => void
  ): void;
  public addListenerCertificates(
    args: AddListenerCertificatesInput,
    cb?: (err: any, data?: AddListenerCertificatesOutput) => void
  ): Promise<AddListenerCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddListenerCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, and your target groups.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p> <p>To list the current tags for your resources, use <a>DescribeTags</a>. To remove tags from your resources, use <a>RemoveTags</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {TooManyTagsException} <p>You've reached the limit on the number of tags per load balancer.</p>
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
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
   * <p>Creates a listener for the specified Application Load Balancer or Network Load Balancer.</p> <p>To update a listener, use <a>ModifyListener</a>. When you are finished with a listener, you can delete it using <a>DeleteListener</a>. If you are finished with both the listener and the load balancer, you can delete them both using <a>DeleteLoadBalancer</a>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for Your Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateListenerException} <p>A listener with the specified port already exists.</p>
   *   - {TooManyListenersException} <p>You've reached the limit on the number of listeners per load balancer.</p>
   *   - {TooManyCertificatesException} <p>You've reached the limit on the number of certificates per load balancer.</p>
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {TargetGroupAssociationLimitException} <p>You've reached the limit on the number of load balancers per target group.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {IncompatibleProtocolsException} <p>The specified configuration is not valid with this protocol.</p>
   *   - {SSLPolicyNotFoundException} <p>The specified SSL policy does not exist.</p>
   *   - {CertificateNotFoundException} <p>The specified certificate does not exist.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol is not supported.</p>
   *   - {TooManyRegistrationsForTargetIdException} <p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>
   *   - {TooManyTargetsException} <p>You've reached the limit on the number of targets.</p>
   *   - {TooManyActionsException} <p>You've reached the limit on the number of actions per rule.</p>
   *   - {InvalidLoadBalancerActionException} <p>The requested action is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createListener(
    args: CreateListenerInput
  ): Promise<CreateListenerOutput>;
  public createListener(
    args: CreateListenerInput,
    cb: (err: any, data?: CreateListenerOutput) => void
  ): void;
  public createListener(
    args: CreateListenerInput,
    cb?: (err: any, data?: CreateListenerOutput) => void
  ): Promise<CreateListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Application Load Balancer or a Network Load Balancer.</p> <p>When you create a load balancer, you can specify security groups, public subnets, IP address type, and tags. Otherwise, you could do so later using <a>SetSecurityGroups</a>, <a>SetSubnets</a>, <a>SetIpAddressType</a>, and <a>AddTags</a>.</p> <p>To create listeners for your load balancer, use <a>CreateListener</a>. To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>For limit information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Limits for Your Application Load Balancer</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Limits for Your Network Load Balancer</a> in the <i>Network Load Balancers Guide</i>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateLoadBalancerNameException} <p>A load balancer with the specified name already exists.</p>
   *   - {TooManyLoadBalancersException} <p>You've reached the limit on the number of load balancers for your AWS account.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {SubnetNotFoundException} <p>The specified subnet does not exist.</p>
   *   - {InvalidSubnetException} <p>The specified subnet is out of available addresses.</p>
   *   - {InvalidSecurityGroupException} <p>The specified security group does not exist.</p>
   *   - {InvalidSchemeException} <p>The requested scheme is not valid.</p>
   *   - {TooManyTagsException} <p>You've reached the limit on the number of tags per load balancer.</p>
   *   - {DuplicateTagKeysException} <p>A tag key was specified more than once.</p>
   *   - {ResourceInUseException} <p>A specified resource is in use.</p>
   *   - {AllocationIdNotFoundException} <p>The specified allocation ID does not exist.</p>
   *   - {AvailabilityZoneNotSupportedException} <p>The specified Availability Zone is not supported.</p>
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
   * <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener Rules</a> in the <i>Application Load Balancers Guide</i>.</p> <p>To view your current rules, use <a>DescribeRules</a>. To update a rule, use <a>ModifyRule</a>. To set the priorities of your rules, use <a>SetRulePriorities</a>. To delete a rule, use <a>DeleteRule</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PriorityInUseException} <p>The specified priority is in use.</p>
   *   - {TooManyTargetGroupsException} <p>You've reached the limit on the number of target groups for your AWS account.</p>
   *   - {TooManyRulesException} <p>You've reached the limit on the number of rules per load balancer.</p>
   *   - {TargetGroupAssociationLimitException} <p>You've reached the limit on the number of load balancers per target group.</p>
   *   - {IncompatibleProtocolsException} <p>The specified configuration is not valid with this protocol.</p>
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {TooManyRegistrationsForTargetIdException} <p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>
   *   - {TooManyTargetsException} <p>You've reached the limit on the number of targets.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol is not supported.</p>
   *   - {TooManyActionsException} <p>You've reached the limit on the number of actions per rule.</p>
   *   - {InvalidLoadBalancerActionException} <p>The requested action is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRule(args: CreateRuleInput): Promise<CreateRuleOutput>;
  public createRule(
    args: CreateRuleInput,
    cb: (err: any, data?: CreateRuleOutput) => void
  ): void;
  public createRule(
    args: CreateRuleInput,
    cb?: (err: any, data?: CreateRuleOutput) => void
  ): Promise<CreateRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a target group.</p> <p>To register targets with the target group, use <a>RegisterTargets</a>. To update the health check settings for the target group, use <a>ModifyTargetGroup</a>. To monitor the health of targets in the target group, use <a>DescribeTargetHealth</a>.</p> <p>To route traffic to the targets in a target group, specify the target group in an action using <a>CreateListener</a> or <a>CreateRule</a>.</p> <p>To delete a target group, use <a>DeleteTargetGroup</a>.</p> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target Groups for Your Application Load Balancers</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target Groups for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateTargetGroupNameException} <p>A target group with the specified name already exists.</p>
   *   - {TooManyTargetGroupsException} <p>You've reached the limit on the number of target groups for your AWS account.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTargetGroup(
    args: CreateTargetGroupInput
  ): Promise<CreateTargetGroupOutput>;
  public createTargetGroup(
    args: CreateTargetGroupInput,
    cb: (err: any, data?: CreateTargetGroupOutput) => void
  ): void;
  public createTargetGroup(
    args: CreateTargetGroupInput,
    cb?: (err: any, data?: CreateTargetGroupOutput) => void
  ): Promise<CreateTargetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTargetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached, using <a>DeleteLoadBalancer</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteListener(
    args: DeleteListenerInput
  ): Promise<DeleteListenerOutput>;
  public deleteListener(
    args: DeleteListenerInput,
    cb: (err: any, data?: DeleteListenerOutput) => void
  ): void;
  public deleteListener(
    args: DeleteListenerInput,
    cb?: (err: any, data?: DeleteListenerOutput) => void
  ): Promise<DeleteListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Application Load Balancer or Network Load Balancer and its attached listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {ResourceInUseException} <p>A specified resource is in use.</p>
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
   * <p>Deletes the specified rule.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleNotFoundException} <p>The specified rule does not exist.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRule(args: DeleteRuleInput): Promise<DeleteRuleOutput>;
  public deleteRule(
    args: DeleteRuleInput,
    cb: (err: any, data?: DeleteRuleOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleInput,
    cb?: (err: any, data?: DeleteRuleOutput) => void
  ): Promise<DeleteRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>A specified resource is in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTargetGroup(
    args: DeleteTargetGroupInput
  ): Promise<DeleteTargetGroupOutput>;
  public deleteTargetGroup(
    args: DeleteTargetGroupInput,
    cb: (err: any, data?: DeleteTargetGroupOutput) => void
  ): void;
  public deleteTargetGroup(
    args: DeleteTargetGroupInput,
    cb?: (err: any, data?: DeleteTargetGroupOutput) => void
  ): Promise<DeleteTargetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTargetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {InvalidTargetException} <p>The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterTargets(
    args: DeregisterTargetsInput
  ): Promise<DeregisterTargetsOutput>;
  public deregisterTargets(
    args: DeregisterTargetsInput,
    cb: (err: any, data?: DeregisterTargetsOutput) => void
  ): void;
  public deregisterTargets(
    args: DeregisterTargetsInput,
    cb?: (err: any, data?: DeregisterTargetsOutput) => void
  ): Promise<DeregisterTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Limits for Your Application Load Balancers</a> in the <i>Application Load Balancer Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Limits for Your Network Load Balancers</a> in the <i>Network Load Balancers Guide</i>.</p>
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
   * <p>Describes the default certificate and the certificate list for the specified HTTPS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL Certificates</a> in the <i>Application Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeListenerCertificates(
    args: DescribeListenerCertificatesInput
  ): Promise<DescribeListenerCertificatesOutput>;
  public describeListenerCertificates(
    args: DescribeListenerCertificatesInput,
    cb: (err: any, data?: DescribeListenerCertificatesOutput) => void
  ): void;
  public describeListenerCertificates(
    args: DescribeListenerCertificatesInput,
    cb?: (err: any, data?: DescribeListenerCertificatesOutput) => void
  ): Promise<DescribeListenerCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeListenerCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified listeners or the listeners for the specified Application Load Balancer or Network Load Balancer. You must specify either a load balancer or one or more listeners.</p> <p>For an HTTPS or TLS listener, the output includes the default certificate for the listener. To describe the certificate list for the listener, use <a>DescribeListenerCertificates</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeListeners(
    args: DescribeListenersInput
  ): Promise<DescribeListenersOutput>;
  public describeListeners(
    args: DescribeListenersInput,
    cb: (err: any, data?: DescribeListenersOutput) => void
  ): void;
  public describeListeners(
    args: DescribeListenersInput,
    cb?: (err: any, data?: DescribeListenersOutput) => void
  ): Promise<DescribeListenersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeListenersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the attributes for the specified Application Load Balancer or Network Load Balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load Balancer Attributes</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load Balancer Attributes</a> in the <i>Network Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
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
   * <p>Describes the specified load balancers or all of your load balancers.</p> <p>To describe the listeners for a load balancer, use <a>DescribeListeners</a>. To describe the attributes for a load balancer, use <a>DescribeLoadBalancerAttributes</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
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
   * <p>Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {RuleNotFoundException} <p>The specified rule does not exist.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRules(args: DescribeRulesInput): Promise<DescribeRulesOutput>;
  public describeRules(
    args: DescribeRulesInput,
    cb: (err: any, data?: DescribeRulesOutput) => void
  ): void;
  public describeRules(
    args: DescribeRulesInput,
    cb?: (err: any, data?: DescribeRulesOutput) => void
  ): Promise<DescribeRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security Policies</a> in the <i>Application Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SSLPolicyNotFoundException} <p>The specified SSL policy does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSSLPolicies(
    args: DescribeSSLPoliciesInput
  ): Promise<DescribeSSLPoliciesOutput>;
  public describeSSLPolicies(
    args: DescribeSSLPoliciesInput,
    cb: (err: any, data?: DescribeSSLPoliciesOutput) => void
  ): void;
  public describeSSLPolicies(
    args: DescribeSSLPoliciesInput,
    cb?: (err: any, data?: DescribeSSLPoliciesOutput) => void
  ): Promise<DescribeSSLPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSSLPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the tags for the specified resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, and target groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {RuleNotFoundException} <p>The specified rule does not exist.</p>
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
   * <p>Describes the attributes for the specified target group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target Group Attributes</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target Group Attributes</a> in the <i>Network Load Balancers Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesInput
  ): Promise<DescribeTargetGroupAttributesOutput>;
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesInput,
    cb: (err: any, data?: DescribeTargetGroupAttributesOutput) => void
  ): void;
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesInput,
    cb?: (err: any, data?: DescribeTargetGroupAttributesOutput) => void
  ): Promise<DescribeTargetGroupAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTargetGroupAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.</p> <p>To describe the targets for a target group, use <a>DescribeTargetHealth</a>. To describe the attributes of a target group, use <a>DescribeTargetGroupAttributes</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTargetGroups(
    args: DescribeTargetGroupsInput
  ): Promise<DescribeTargetGroupsOutput>;
  public describeTargetGroups(
    args: DescribeTargetGroupsInput,
    cb: (err: any, data?: DescribeTargetGroupsOutput) => void
  ): void;
  public describeTargetGroups(
    args: DescribeTargetGroupsInput,
    cb?: (err: any, data?: DescribeTargetGroupsOutput) => void
  ): Promise<DescribeTargetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTargetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the health of the specified targets or all of your targets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidTargetException} <p>The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {HealthUnavailableException} <p>The health of the specified targets could not be retrieved due to an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTargetHealth(
    args: DescribeTargetHealthInput
  ): Promise<DescribeTargetHealthOutput>;
  public describeTargetHealth(
    args: DescribeTargetHealthInput,
    cb: (err: any, data?: DescribeTargetHealthOutput) => void
  ): void;
  public describeTargetHealth(
    args: DescribeTargetHealthInput,
    cb?: (err: any, data?: DescribeTargetHealthOutput) => void
  ): Promise<DescribeTargetHealthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTargetHealthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified properties of the specified listener.</p> <p>Any properties that you do not specify retain their current values. However, changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateListenerException} <p>A listener with the specified port already exists.</p>
   *   - {TooManyListenersException} <p>You've reached the limit on the number of listeners per load balancer.</p>
   *   - {TooManyCertificatesException} <p>You've reached the limit on the number of certificates per load balancer.</p>
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {TargetGroupAssociationLimitException} <p>You've reached the limit on the number of load balancers per target group.</p>
   *   - {IncompatibleProtocolsException} <p>The specified configuration is not valid with this protocol.</p>
   *   - {SSLPolicyNotFoundException} <p>The specified SSL policy does not exist.</p>
   *   - {CertificateNotFoundException} <p>The specified certificate does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol is not supported.</p>
   *   - {TooManyRegistrationsForTargetIdException} <p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>
   *   - {TooManyTargetsException} <p>You've reached the limit on the number of targets.</p>
   *   - {TooManyActionsException} <p>You've reached the limit on the number of actions per rule.</p>
   *   - {InvalidLoadBalancerActionException} <p>The requested action is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyListener(
    args: ModifyListenerInput
  ): Promise<ModifyListenerOutput>;
  public modifyListener(
    args: ModifyListenerInput,
    cb: (err: any, data?: ModifyListenerOutput) => void
  ): void;
  public modifyListener(
    args: ModifyListenerInput,
    cb?: (err: any, data?: ModifyListenerOutput) => void
  ): Promise<ModifyListenerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyListenerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified attributes of the specified Application Load Balancer or Network Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
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
   * <p>Modifies the specified rule.</p> <p>Any existing properties that you do not modify retain their current values.</p> <p>To modify the actions for the default rule, use <a>ModifyListener</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TargetGroupAssociationLimitException} <p>You've reached the limit on the number of load balancers per target group.</p>
   *   - {IncompatibleProtocolsException} <p>The specified configuration is not valid with this protocol.</p>
   *   - {RuleNotFoundException} <p>The specified rule does not exist.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {TooManyRegistrationsForTargetIdException} <p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>
   *   - {TooManyTargetsException} <p>You've reached the limit on the number of targets.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {UnsupportedProtocolException} <p>The specified protocol is not supported.</p>
   *   - {TooManyActionsException} <p>You've reached the limit on the number of actions per rule.</p>
   *   - {InvalidLoadBalancerActionException} <p>The requested action is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyRule(args: ModifyRuleInput): Promise<ModifyRuleOutput>;
  public modifyRule(
    args: ModifyRuleInput,
    cb: (err: any, data?: ModifyRuleOutput) => void
  ): void;
  public modifyRule(
    args: ModifyRuleInput,
    cb?: (err: any, data?: ModifyRuleOutput) => void
  ): Promise<ModifyRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the health checks used when evaluating the health state of the targets in the specified target group.</p> <p>To monitor the health of the targets, use <a>DescribeTargetHealth</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyTargetGroup(
    args: ModifyTargetGroupInput
  ): Promise<ModifyTargetGroupOutput>;
  public modifyTargetGroup(
    args: ModifyTargetGroupInput,
    cb: (err: any, data?: ModifyTargetGroupOutput) => void
  ): void;
  public modifyTargetGroup(
    args: ModifyTargetGroupInput,
    cb?: (err: any, data?: ModifyTargetGroupOutput) => void
  ): Promise<ModifyTargetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyTargetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified attributes of the specified target group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesInput
  ): Promise<ModifyTargetGroupAttributesOutput>;
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesInput,
    cb: (err: any, data?: ModifyTargetGroupAttributesOutput) => void
  ): void;
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesInput,
    cb?: (err: any, data?: ModifyTargetGroupAttributesOutput) => void
  ): Promise<ModifyTargetGroupAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyTargetGroupAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p> <p>To remove a target from a target group, use <a>DeregisterTargets</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {TooManyTargetsException} <p>You've reached the limit on the number of targets.</p>
   *   - {InvalidTargetException} <p>The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.</p>
   *   - {TooManyRegistrationsForTargetIdException} <p>You've reached the limit on the number of times a target can be registered with a load balancer.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerTargets(
    args: RegisterTargetsInput
  ): Promise<RegisterTargetsOutput>;
  public registerTargets(
    args: RegisterTargetsInput,
    cb: (err: any, data?: RegisterTargetsOutput) => void
  ): void;
  public registerTargets(
    args: RegisterTargetsInput,
    cb?: (err: any, data?: RegisterTargetsOutput) => void
  ): Promise<RegisterTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified certificate from the certificate list for the specified HTTPS listener.</p> <p>You can't remove the default certificate for a listener. To replace the default certificate, call <a>ModifyListener</a>.</p> <p>To list the certificates for your listener, use <a>DescribeListenerCertificates</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeListenerCertificates(
    args: RemoveListenerCertificatesInput
  ): Promise<RemoveListenerCertificatesOutput>;
  public removeListenerCertificates(
    args: RemoveListenerCertificatesInput,
    cb: (err: any, data?: RemoveListenerCertificatesOutput) => void
  ): void;
  public removeListenerCertificates(
    args: RemoveListenerCertificatesInput,
    cb?: (err: any, data?: RemoveListenerCertificatesOutput) => void
  ): Promise<RemoveListenerCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveListenerCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from the specified Elastic Load Balancing resource.</p> <p>To list the current tags for your resources, use <a>DescribeTags</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {TargetGroupNotFoundException} <p>The specified target group does not exist.</p>
   *   - {ListenerNotFoundException} <p>The specified listener does not exist.</p>
   *   - {RuleNotFoundException} <p>The specified rule does not exist.</p>
   *   - {TooManyTagsException} <p>You've reached the limit on the number of tags per load balancer.</p>
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
   * <p>Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {InvalidSubnetException} <p>The specified subnet is out of available addresses.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIpAddressType(
    args: SetIpAddressTypeInput
  ): Promise<SetIpAddressTypeOutput>;
  public setIpAddressType(
    args: SetIpAddressTypeInput,
    cb: (err: any, data?: SetIpAddressTypeOutput) => void
  ): void;
  public setIpAddressType(
    args: SetIpAddressTypeInput,
    cb?: (err: any, data?: SetIpAddressTypeOutput) => void
  ): Promise<SetIpAddressTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIpAddressTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {RuleNotFoundException} <p>The specified rule does not exist.</p>
   *   - {PriorityInUseException} <p>The specified priority is in use.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setRulePriorities(
    args: SetRulePrioritiesInput
  ): Promise<SetRulePrioritiesOutput>;
  public setRulePriorities(
    args: SetRulePrioritiesInput,
    cb: (err: any, data?: SetRulePrioritiesOutput) => void
  ): void;
  public setRulePriorities(
    args: SetRulePrioritiesInput,
    cb?: (err: any, data?: SetRulePrioritiesOutput) => void
  ): Promise<SetRulePrioritiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetRulePrioritiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {InvalidSecurityGroupException} <p>The specified security group does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setSecurityGroups(
    args: SetSecurityGroupsInput
  ): Promise<SetSecurityGroupsOutput>;
  public setSecurityGroups(
    args: SetSecurityGroupsInput,
    cb: (err: any, data?: SetSecurityGroupsOutput) => void
  ): void;
  public setSecurityGroups(
    args: SetSecurityGroupsInput,
    cb?: (err: any, data?: SetSecurityGroupsOutput) => void
  ): Promise<SetSecurityGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetSecurityGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the Availability Zone for the specified public subnets for the specified Application Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>You can't change the subnets for a Network Load Balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LoadBalancerNotFoundException} <p>The specified load balancer does not exist.</p>
   *   - {InvalidConfigurationRequestException} <p>The requested configuration is not valid.</p>
   *   - {SubnetNotFoundException} <p>The specified subnet does not exist.</p>
   *   - {InvalidSubnetException} <p>The specified subnet is out of available addresses.</p>
   *   - {AllocationIdNotFoundException} <p>The specified allocation ID does not exist.</p>
   *   - {AvailabilityZoneNotSupportedException} <p>The specified Availability Zone is not supported.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setSubnets(args: SetSubnetsInput): Promise<SetSubnetsOutput>;
  public setSubnets(
    args: SetSubnetsInput,
    cb: (err: any, data?: SetSubnetsOutput) => void
  ): void;
  public setSubnets(
    args: SetSubnetsInput,
    cb?: (err: any, data?: SetSubnetsOutput) => void
  ): Promise<SetSubnetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetSubnetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
