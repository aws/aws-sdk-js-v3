import { AddTagsOutput } from "./AddTagsOutput";
import { ApplySecurityGroupsToLoadBalancerOutput } from "./ApplySecurityGroupsToLoadBalancerOutput";
import { AttachLoadBalancerToSubnetsOutput } from "./AttachLoadBalancerToSubnetsOutput";
import { ConfigureHealthCheckOutput } from "./ConfigureHealthCheckOutput";
import { CreateAppCookieStickinessPolicyOutput } from "./CreateAppCookieStickinessPolicyOutput";
import { CreateLBCookieStickinessPolicyOutput } from "./CreateLBCookieStickinessPolicyOutput";
import { CreateLoadBalancerOutput } from "./CreateLoadBalancerOutput";
import { CreateLoadBalancerListenersOutput } from "./CreateLoadBalancerListenersOutput";
import { CreateLoadBalancerPolicyOutput } from "./CreateLoadBalancerPolicyOutput";
import { DeleteLoadBalancerOutput } from "./DeleteLoadBalancerOutput";
import { DeleteLoadBalancerListenersOutput } from "./DeleteLoadBalancerListenersOutput";
import { DeleteLoadBalancerPolicyOutput } from "./DeleteLoadBalancerPolicyOutput";
import { DeregisterInstancesFromLoadBalancerOutput } from "./DeregisterInstancesFromLoadBalancerOutput";
import { DescribeAccountLimitsOutput } from "./DescribeAccountLimitsOutput";
import { DescribeInstanceHealthOutput } from "./DescribeInstanceHealthOutput";
import { DescribeLoadBalancerAttributesOutput } from "./DescribeLoadBalancerAttributesOutput";
import { DescribeLoadBalancerPoliciesOutput } from "./DescribeLoadBalancerPoliciesOutput";
import { DescribeLoadBalancerPolicyTypesOutput } from "./DescribeLoadBalancerPolicyTypesOutput";
import { DescribeLoadBalancersOutput } from "./DescribeLoadBalancersOutput";
import { DescribeTagsOutput } from "./DescribeTagsOutput";
import { DetachLoadBalancerFromSubnetsOutput } from "./DetachLoadBalancerFromSubnetsOutput";
import { DisableAvailabilityZonesForLoadBalancerOutput } from "./DisableAvailabilityZonesForLoadBalancerOutput";
import { EnableAvailabilityZonesForLoadBalancerOutput } from "./EnableAvailabilityZonesForLoadBalancerOutput";
import { ModifyLoadBalancerAttributesOutput } from "./ModifyLoadBalancerAttributesOutput";
import { RegisterInstancesWithLoadBalancerOutput } from "./RegisterInstancesWithLoadBalancerOutput";
import { RemoveTagsOutput } from "./RemoveTagsOutput";
import { SetLoadBalancerListenerSSLCertificateOutput } from "./SetLoadBalancerListenerSSLCertificateOutput";
import { SetLoadBalancerPoliciesForBackendServerOutput } from "./SetLoadBalancerPoliciesForBackendServerOutput";
import { SetLoadBalancerPoliciesOfListenerOutput } from "./SetLoadBalancerPoliciesOfListenerOutput";
export type OutputTypesUnion =
  | AddTagsOutput
  | ApplySecurityGroupsToLoadBalancerOutput
  | AttachLoadBalancerToSubnetsOutput
  | ConfigureHealthCheckOutput
  | CreateAppCookieStickinessPolicyOutput
  | CreateLBCookieStickinessPolicyOutput
  | CreateLoadBalancerOutput
  | CreateLoadBalancerListenersOutput
  | CreateLoadBalancerPolicyOutput
  | DeleteLoadBalancerOutput
  | DeleteLoadBalancerListenersOutput
  | DeleteLoadBalancerPolicyOutput
  | DeregisterInstancesFromLoadBalancerOutput
  | DescribeAccountLimitsOutput
  | DescribeInstanceHealthOutput
  | DescribeLoadBalancerAttributesOutput
  | DescribeLoadBalancerPoliciesOutput
  | DescribeLoadBalancerPolicyTypesOutput
  | DescribeLoadBalancersOutput
  | DescribeTagsOutput
  | DetachLoadBalancerFromSubnetsOutput
  | DisableAvailabilityZonesForLoadBalancerOutput
  | EnableAvailabilityZonesForLoadBalancerOutput
  | ModifyLoadBalancerAttributesOutput
  | RegisterInstancesWithLoadBalancerOutput
  | RemoveTagsOutput
  | SetLoadBalancerListenerSSLCertificateOutput
  | SetLoadBalancerPoliciesForBackendServerOutput
  | SetLoadBalancerPoliciesOfListenerOutput;
