import { AddListenerCertificatesInput } from "./AddListenerCertificatesInput";
import { AddTagsInput } from "./AddTagsInput";
import { CreateListenerInput } from "./CreateListenerInput";
import { CreateLoadBalancerInput } from "./CreateLoadBalancerInput";
import { CreateRuleInput } from "./CreateRuleInput";
import { CreateTargetGroupInput } from "./CreateTargetGroupInput";
import { DeleteListenerInput } from "./DeleteListenerInput";
import { DeleteLoadBalancerInput } from "./DeleteLoadBalancerInput";
import { DeleteRuleInput } from "./DeleteRuleInput";
import { DeleteTargetGroupInput } from "./DeleteTargetGroupInput";
import { DeregisterTargetsInput } from "./DeregisterTargetsInput";
import { DescribeAccountLimitsInput } from "./DescribeAccountLimitsInput";
import { DescribeListenerCertificatesInput } from "./DescribeListenerCertificatesInput";
import { DescribeListenersInput } from "./DescribeListenersInput";
import { DescribeLoadBalancerAttributesInput } from "./DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancersInput } from "./DescribeLoadBalancersInput";
import { DescribeRulesInput } from "./DescribeRulesInput";
import { DescribeSSLPoliciesInput } from "./DescribeSSLPoliciesInput";
import { DescribeTagsInput } from "./DescribeTagsInput";
import { DescribeTargetGroupAttributesInput } from "./DescribeTargetGroupAttributesInput";
import { DescribeTargetGroupsInput } from "./DescribeTargetGroupsInput";
import { DescribeTargetHealthInput } from "./DescribeTargetHealthInput";
import { ModifyListenerInput } from "./ModifyListenerInput";
import { ModifyLoadBalancerAttributesInput } from "./ModifyLoadBalancerAttributesInput";
import { ModifyRuleInput } from "./ModifyRuleInput";
import { ModifyTargetGroupInput } from "./ModifyTargetGroupInput";
import { ModifyTargetGroupAttributesInput } from "./ModifyTargetGroupAttributesInput";
import { RegisterTargetsInput } from "./RegisterTargetsInput";
import { RemoveListenerCertificatesInput } from "./RemoveListenerCertificatesInput";
import { RemoveTagsInput } from "./RemoveTagsInput";
import { SetIpAddressTypeInput } from "./SetIpAddressTypeInput";
import { SetRulePrioritiesInput } from "./SetRulePrioritiesInput";
import { SetSecurityGroupsInput } from "./SetSecurityGroupsInput";
import { SetSubnetsInput } from "./SetSubnetsInput";
export type InputTypesUnion =
  | AddListenerCertificatesInput
  | AddTagsInput
  | CreateListenerInput
  | CreateLoadBalancerInput
  | CreateRuleInput
  | CreateTargetGroupInput
  | DeleteListenerInput
  | DeleteLoadBalancerInput
  | DeleteRuleInput
  | DeleteTargetGroupInput
  | DeregisterTargetsInput
  | DescribeAccountLimitsInput
  | DescribeListenerCertificatesInput
  | DescribeListenersInput
  | DescribeLoadBalancerAttributesInput
  | DescribeLoadBalancersInput
  | DescribeRulesInput
  | DescribeSSLPoliciesInput
  | DescribeTagsInput
  | DescribeTargetGroupAttributesInput
  | DescribeTargetGroupsInput
  | DescribeTargetHealthInput
  | ModifyListenerInput
  | ModifyLoadBalancerAttributesInput
  | ModifyRuleInput
  | ModifyTargetGroupInput
  | ModifyTargetGroupAttributesInput
  | RegisterTargetsInput
  | RemoveListenerCertificatesInput
  | RemoveTagsInput
  | SetIpAddressTypeInput
  | SetRulePrioritiesInput
  | SetSecurityGroupsInput
  | SetSubnetsInput;
