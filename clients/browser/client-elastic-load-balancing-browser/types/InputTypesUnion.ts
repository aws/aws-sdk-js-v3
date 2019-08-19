import { AddTagsInput } from "./AddTagsInput";
import { ApplySecurityGroupsToLoadBalancerInput } from "./ApplySecurityGroupsToLoadBalancerInput";
import { AttachLoadBalancerToSubnetsInput } from "./AttachLoadBalancerToSubnetsInput";
import { ConfigureHealthCheckInput } from "./ConfigureHealthCheckInput";
import { CreateAppCookieStickinessPolicyInput } from "./CreateAppCookieStickinessPolicyInput";
import { CreateLBCookieStickinessPolicyInput } from "./CreateLBCookieStickinessPolicyInput";
import { CreateLoadBalancerInput } from "./CreateLoadBalancerInput";
import { CreateLoadBalancerListenersInput } from "./CreateLoadBalancerListenersInput";
import { CreateLoadBalancerPolicyInput } from "./CreateLoadBalancerPolicyInput";
import { DeleteLoadBalancerInput } from "./DeleteLoadBalancerInput";
import { DeleteLoadBalancerListenersInput } from "./DeleteLoadBalancerListenersInput";
import { DeleteLoadBalancerPolicyInput } from "./DeleteLoadBalancerPolicyInput";
import { DeregisterInstancesFromLoadBalancerInput } from "./DeregisterInstancesFromLoadBalancerInput";
import { DescribeAccountLimitsInput } from "./DescribeAccountLimitsInput";
import { DescribeInstanceHealthInput } from "./DescribeInstanceHealthInput";
import { DescribeLoadBalancerAttributesInput } from "./DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerPoliciesInput } from "./DescribeLoadBalancerPoliciesInput";
import { DescribeLoadBalancerPolicyTypesInput } from "./DescribeLoadBalancerPolicyTypesInput";
import { DescribeLoadBalancersInput } from "./DescribeLoadBalancersInput";
import { DescribeTagsInput } from "./DescribeTagsInput";
import { DetachLoadBalancerFromSubnetsInput } from "./DetachLoadBalancerFromSubnetsInput";
import { DisableAvailabilityZonesForLoadBalancerInput } from "./DisableAvailabilityZonesForLoadBalancerInput";
import { EnableAvailabilityZonesForLoadBalancerInput } from "./EnableAvailabilityZonesForLoadBalancerInput";
import { ModifyLoadBalancerAttributesInput } from "./ModifyLoadBalancerAttributesInput";
import { RegisterInstancesWithLoadBalancerInput } from "./RegisterInstancesWithLoadBalancerInput";
import { RemoveTagsInput } from "./RemoveTagsInput";
import { SetLoadBalancerListenerSSLCertificateInput } from "./SetLoadBalancerListenerSSLCertificateInput";
import { SetLoadBalancerPoliciesForBackendServerInput } from "./SetLoadBalancerPoliciesForBackendServerInput";
import { SetLoadBalancerPoliciesOfListenerInput } from "./SetLoadBalancerPoliciesOfListenerInput";
export type InputTypesUnion =
  | AddTagsInput
  | ApplySecurityGroupsToLoadBalancerInput
  | AttachLoadBalancerToSubnetsInput
  | ConfigureHealthCheckInput
  | CreateAppCookieStickinessPolicyInput
  | CreateLBCookieStickinessPolicyInput
  | CreateLoadBalancerInput
  | CreateLoadBalancerListenersInput
  | CreateLoadBalancerPolicyInput
  | DeleteLoadBalancerInput
  | DeleteLoadBalancerListenersInput
  | DeleteLoadBalancerPolicyInput
  | DeregisterInstancesFromLoadBalancerInput
  | DescribeAccountLimitsInput
  | DescribeInstanceHealthInput
  | DescribeLoadBalancerAttributesInput
  | DescribeLoadBalancerPoliciesInput
  | DescribeLoadBalancerPolicyTypesInput
  | DescribeLoadBalancersInput
  | DescribeTagsInput
  | DetachLoadBalancerFromSubnetsInput
  | DisableAvailabilityZonesForLoadBalancerInput
  | EnableAvailabilityZonesForLoadBalancerInput
  | ModifyLoadBalancerAttributesInput
  | RegisterInstancesWithLoadBalancerInput
  | RemoveTagsInput
  | SetLoadBalancerListenerSSLCertificateInput
  | SetLoadBalancerPoliciesForBackendServerInput
  | SetLoadBalancerPoliciesOfListenerInput;
