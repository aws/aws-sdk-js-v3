import {
  AccessPointNotFoundException,
  AddTagsCommand,
  ApplySecurityGroupsToLoadBalancerCommand,
  AttachLoadBalancerToSubnetsCommand,
  CertificateNotFoundException,
  ConfigureHealthCheckCommand,
  CreateAppCookieStickinessPolicyCommand,
  CreateLBCookieStickinessPolicyCommand,
  CreateLoadBalancerCommand,
  CreateLoadBalancerListenersCommand,
  CreateLoadBalancerPolicyCommand,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerListenersCommand,
  DeleteLoadBalancerPolicyCommand,
  DependencyThrottleException,
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
  DuplicateAccessPointNameException,
  DuplicateListenerException,
  DuplicatePolicyNameException,
  DuplicateTagKeysException,
  ElasticLoadBalancing,
  ElasticLoadBalancingClient,
  ElasticLoadBalancingServiceException,
  EnableAvailabilityZonesForLoadBalancerCommand,
  InvalidConfigurationRequestException,
  InvalidEndPointException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  ListenerNotFoundException,
  LoadBalancerAttributeNotFoundException,
  ModifyLoadBalancerAttributesCommand,
  OperationNotPermittedException,
  PolicyNotFoundException,
  PolicyTypeNotFoundException,
  RegisterInstancesWithLoadBalancerCommand,
  RemoveTagsCommand,
  SetLoadBalancerListenerSSLCertificateCommand,
  SetLoadBalancerPoliciesForBackendServerCommand,
  SetLoadBalancerPoliciesOfListenerCommand,
  SubnetNotFoundException,
  TooManyAccessPointsException,
  TooManyPoliciesException,
  TooManyTagsException,
  UnsupportedProtocolException,
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
assert(AccessPointNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(CertificateNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(DependencyThrottleException.prototype instanceof ElasticLoadBalancingServiceException);
assert(DuplicateAccessPointNameException.prototype instanceof ElasticLoadBalancingServiceException);
assert(DuplicateListenerException.prototype instanceof ElasticLoadBalancingServiceException);
assert(DuplicatePolicyNameException.prototype instanceof ElasticLoadBalancingServiceException);
assert(DuplicateTagKeysException.prototype instanceof ElasticLoadBalancingServiceException);
assert(InvalidConfigurationRequestException.prototype instanceof ElasticLoadBalancingServiceException);
assert(InvalidEndPointException.prototype instanceof ElasticLoadBalancingServiceException);
assert(InvalidSchemeException.prototype instanceof ElasticLoadBalancingServiceException);
assert(InvalidSecurityGroupException.prototype instanceof ElasticLoadBalancingServiceException);
assert(InvalidSubnetException.prototype instanceof ElasticLoadBalancingServiceException);
assert(ListenerNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(LoadBalancerAttributeNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(OperationNotPermittedException.prototype instanceof ElasticLoadBalancingServiceException);
assert(PolicyNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(PolicyTypeNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(SubnetNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(TooManyAccessPointsException.prototype instanceof ElasticLoadBalancingServiceException);
assert(TooManyPoliciesException.prototype instanceof ElasticLoadBalancingServiceException);
assert(TooManyTagsException.prototype instanceof ElasticLoadBalancingServiceException);
assert(UnsupportedProtocolException.prototype instanceof ElasticLoadBalancingServiceException);
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
