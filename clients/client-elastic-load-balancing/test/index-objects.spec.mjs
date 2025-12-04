import {
  AddTagsCommand,
  ApplySecurityGroupsToLoadBalancerCommand,
  AttachLoadBalancerToSubnetsCommand,
  ConfigureHealthCheckCommand,
  CreateAppCookieStickinessPolicyCommand,
  CreateLBCookieStickinessPolicyCommand,
  CreateLoadBalancerCommand,
  CreateLoadBalancerListenersCommand,
  CreateLoadBalancerPolicyCommand,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerListenersCommand,
  DeleteLoadBalancerPolicyCommand,
  DeregisterInstancesFromLoadBalancerCommand,
  DescribeAccountLimitsCommand,
  DescribeInstanceHealthCommand,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerPoliciesCommand,
  DescribeLoadBalancerPolicyTypesCommand,
  DescribeLoadBalancersCommand,
  DescribeTagsCommand,
  DetachLoadBalancerFromSubnetsCommand,
  DisableAvailabilityZonesForLoadBalancerCommand,
  ElasticLoadBalancing,
  ElasticLoadBalancingClient,
  ElasticLoadBalancingServiceException,
  EnableAvailabilityZonesForLoadBalancerCommand,
  ModifyLoadBalancerAttributesCommand,
  RegisterInstancesWithLoadBalancerCommand,
  RemoveTagsCommand,
  SetLoadBalancerListenerSSLCertificateCommand,
  SetLoadBalancerPoliciesForBackendServerCommand,
  SetLoadBalancerPoliciesOfListenerCommand,
  paginateDescribeLoadBalancers,
  waitForAnyInstanceInService,
  waitForInstanceDeregistered,
  waitForInstanceInService,
  waitUntilAnyInstanceInService,
  waitUntilInstanceDeregistered,
  waitUntilInstanceInService,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElasticLoadBalancingClient === "function");
assert(typeof ElasticLoadBalancing === "function");
// commands
assert(typeof AddTagsCommand === "function");
assert(typeof ApplySecurityGroupsToLoadBalancerCommand === "function");
assert(typeof AttachLoadBalancerToSubnetsCommand === "function");
assert(typeof ConfigureHealthCheckCommand === "function");
assert(typeof CreateAppCookieStickinessPolicyCommand === "function");
assert(typeof CreateLBCookieStickinessPolicyCommand === "function");
assert(typeof CreateLoadBalancerCommand === "function");
assert(typeof CreateLoadBalancerListenersCommand === "function");
assert(typeof CreateLoadBalancerPolicyCommand === "function");
assert(typeof DeleteLoadBalancerCommand === "function");
assert(typeof DeleteLoadBalancerListenersCommand === "function");
assert(typeof DeleteLoadBalancerPolicyCommand === "function");
assert(typeof DeregisterInstancesFromLoadBalancerCommand === "function");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeInstanceHealthCommand === "function");
assert(typeof DescribeLoadBalancerAttributesCommand === "function");
assert(typeof DescribeLoadBalancerPoliciesCommand === "function");
assert(typeof DescribeLoadBalancerPolicyTypesCommand === "function");
assert(typeof DescribeLoadBalancersCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DetachLoadBalancerFromSubnetsCommand === "function");
assert(typeof DisableAvailabilityZonesForLoadBalancerCommand === "function");
assert(typeof EnableAvailabilityZonesForLoadBalancerCommand === "function");
assert(typeof ModifyLoadBalancerAttributesCommand === "function");
assert(typeof RegisterInstancesWithLoadBalancerCommand === "function");
assert(typeof RemoveTagsCommand === "function");
assert(typeof SetLoadBalancerListenerSSLCertificateCommand === "function");
assert(typeof SetLoadBalancerPoliciesForBackendServerCommand === "function");
assert(typeof SetLoadBalancerPoliciesOfListenerCommand === "function");
// errors
assert(ElasticLoadBalancingServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAnyInstanceInService === "function");
assert(typeof waitForInstanceDeregistered === "function");
assert(typeof waitForInstanceInService === "function");
assert(typeof waitUntilAnyInstanceInService === "function");
assert(typeof waitUntilInstanceDeregistered === "function");
assert(typeof waitUntilInstanceInService === "function");
// paginators
assert(typeof paginateDescribeLoadBalancers === "function");
console.log(`ElasticLoadBalancing index test passed.`);
