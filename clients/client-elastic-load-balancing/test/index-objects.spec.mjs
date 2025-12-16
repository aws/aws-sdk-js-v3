import {
  AccessLog$,
  AccessPointNotFoundException,
  AccessPointNotFoundException$,
  AddAvailabilityZonesInput$,
  AddAvailabilityZonesOutput$,
  AddTags$,
  AddTagsCommand,
  AddTagsInput$,
  AddTagsOutput$,
  AdditionalAttribute$,
  AppCookieStickinessPolicy$,
  ApplySecurityGroupsToLoadBalancer$,
  ApplySecurityGroupsToLoadBalancerCommand,
  ApplySecurityGroupsToLoadBalancerInput$,
  ApplySecurityGroupsToLoadBalancerOutput$,
  AttachLoadBalancerToSubnets$,
  AttachLoadBalancerToSubnetsCommand,
  AttachLoadBalancerToSubnetsInput$,
  AttachLoadBalancerToSubnetsOutput$,
  BackendServerDescription$,
  CertificateNotFoundException,
  CertificateNotFoundException$,
  ConfigureHealthCheck$,
  ConfigureHealthCheckCommand,
  ConfigureHealthCheckInput$,
  ConfigureHealthCheckOutput$,
  ConnectionDraining$,
  ConnectionSettings$,
  CreateAccessPointInput$,
  CreateAccessPointOutput$,
  CreateAppCookieStickinessPolicy$,
  CreateAppCookieStickinessPolicyCommand,
  CreateAppCookieStickinessPolicyInput$,
  CreateAppCookieStickinessPolicyOutput$,
  CreateLBCookieStickinessPolicy$,
  CreateLBCookieStickinessPolicyCommand,
  CreateLBCookieStickinessPolicyInput$,
  CreateLBCookieStickinessPolicyOutput$,
  CreateLoadBalancer$,
  CreateLoadBalancerCommand,
  CreateLoadBalancerListenerInput$,
  CreateLoadBalancerListenerOutput$,
  CreateLoadBalancerListeners$,
  CreateLoadBalancerListenersCommand,
  CreateLoadBalancerPolicy$,
  CreateLoadBalancerPolicyCommand,
  CreateLoadBalancerPolicyInput$,
  CreateLoadBalancerPolicyOutput$,
  CrossZoneLoadBalancing$,
  DeleteAccessPointInput$,
  DeleteAccessPointOutput$,
  DeleteLoadBalancer$,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerListenerInput$,
  DeleteLoadBalancerListenerOutput$,
  DeleteLoadBalancerListeners$,
  DeleteLoadBalancerListenersCommand,
  DeleteLoadBalancerPolicy$,
  DeleteLoadBalancerPolicyCommand,
  DeleteLoadBalancerPolicyInput$,
  DeleteLoadBalancerPolicyOutput$,
  DependencyThrottleException,
  DependencyThrottleException$,
  DeregisterEndPointsInput$,
  DeregisterEndPointsOutput$,
  DeregisterInstancesFromLoadBalancer$,
  DeregisterInstancesFromLoadBalancerCommand,
  DescribeAccessPointsInput$,
  DescribeAccessPointsOutput$,
  DescribeAccountLimits$,
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsInput$,
  DescribeAccountLimitsOutput$,
  DescribeEndPointStateInput$,
  DescribeEndPointStateOutput$,
  DescribeInstanceHealth$,
  DescribeInstanceHealthCommand,
  DescribeLoadBalancerAttributes$,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerAttributesInput$,
  DescribeLoadBalancerAttributesOutput$,
  DescribeLoadBalancerPolicies$,
  DescribeLoadBalancerPoliciesCommand,
  DescribeLoadBalancerPoliciesInput$,
  DescribeLoadBalancerPoliciesOutput$,
  DescribeLoadBalancerPolicyTypes$,
  DescribeLoadBalancerPolicyTypesCommand,
  DescribeLoadBalancerPolicyTypesInput$,
  DescribeLoadBalancerPolicyTypesOutput$,
  DescribeLoadBalancers$,
  DescribeLoadBalancersCommand,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsInput$,
  DescribeTagsOutput$,
  DetachLoadBalancerFromSubnets$,
  DetachLoadBalancerFromSubnetsCommand,
  DetachLoadBalancerFromSubnetsInput$,
  DetachLoadBalancerFromSubnetsOutput$,
  DisableAvailabilityZonesForLoadBalancer$,
  DisableAvailabilityZonesForLoadBalancerCommand,
  DuplicateAccessPointNameException,
  DuplicateAccessPointNameException$,
  DuplicateListenerException,
  DuplicateListenerException$,
  DuplicatePolicyNameException,
  DuplicatePolicyNameException$,
  DuplicateTagKeysException,
  DuplicateTagKeysException$,
  ElasticLoadBalancing,
  ElasticLoadBalancingClient,
  ElasticLoadBalancingServiceException,
  EnableAvailabilityZonesForLoadBalancer$,
  EnableAvailabilityZonesForLoadBalancerCommand,
  HealthCheck$,
  Instance$,
  InstanceState$,
  InvalidConfigurationRequestException,
  InvalidConfigurationRequestException$,
  InvalidEndPointException,
  InvalidEndPointException$,
  InvalidSchemeException,
  InvalidSchemeException$,
  InvalidSecurityGroupException,
  InvalidSecurityGroupException$,
  InvalidSubnetException,
  InvalidSubnetException$,
  LBCookieStickinessPolicy$,
  Limit$,
  Listener$,
  ListenerDescription$,
  ListenerNotFoundException,
  ListenerNotFoundException$,
  LoadBalancerAttributeNotFoundException,
  LoadBalancerAttributeNotFoundException$,
  LoadBalancerAttributes$,
  LoadBalancerDescription$,
  ModifyLoadBalancerAttributes$,
  ModifyLoadBalancerAttributesCommand,
  ModifyLoadBalancerAttributesInput$,
  ModifyLoadBalancerAttributesOutput$,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  Policies$,
  PolicyAttribute$,
  PolicyAttributeDescription$,
  PolicyAttributeTypeDescription$,
  PolicyDescription$,
  PolicyNotFoundException,
  PolicyNotFoundException$,
  PolicyTypeDescription$,
  PolicyTypeNotFoundException,
  PolicyTypeNotFoundException$,
  RegisterEndPointsInput$,
  RegisterEndPointsOutput$,
  RegisterInstancesWithLoadBalancer$,
  RegisterInstancesWithLoadBalancerCommand,
  RemoveAvailabilityZonesInput$,
  RemoveAvailabilityZonesOutput$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsInput$,
  RemoveTagsOutput$,
  SetLoadBalancerListenerSSLCertificate$,
  SetLoadBalancerListenerSSLCertificateCommand,
  SetLoadBalancerListenerSSLCertificateInput$,
  SetLoadBalancerListenerSSLCertificateOutput$,
  SetLoadBalancerPoliciesForBackendServer$,
  SetLoadBalancerPoliciesForBackendServerCommand,
  SetLoadBalancerPoliciesForBackendServerInput$,
  SetLoadBalancerPoliciesForBackendServerOutput$,
  SetLoadBalancerPoliciesOfListener$,
  SetLoadBalancerPoliciesOfListenerCommand,
  SetLoadBalancerPoliciesOfListenerInput$,
  SetLoadBalancerPoliciesOfListenerOutput$,
  SourceSecurityGroup$,
  SubnetNotFoundException,
  SubnetNotFoundException$,
  Tag$,
  TagDescription$,
  TagKeyOnly$,
  TooManyAccessPointsException,
  TooManyAccessPointsException$,
  TooManyPoliciesException,
  TooManyPoliciesException$,
  TooManyTagsException,
  TooManyTagsException$,
  UnsupportedProtocolException,
  UnsupportedProtocolException$,
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
assert(typeof AddTags$ === "object");
assert(typeof ApplySecurityGroupsToLoadBalancerCommand === "function");
assert(typeof ApplySecurityGroupsToLoadBalancer$ === "object");
assert(typeof AttachLoadBalancerToSubnetsCommand === "function");
assert(typeof AttachLoadBalancerToSubnets$ === "object");
assert(typeof ConfigureHealthCheckCommand === "function");
assert(typeof ConfigureHealthCheck$ === "object");
assert(typeof CreateAppCookieStickinessPolicyCommand === "function");
assert(typeof CreateAppCookieStickinessPolicy$ === "object");
assert(typeof CreateLBCookieStickinessPolicyCommand === "function");
assert(typeof CreateLBCookieStickinessPolicy$ === "object");
assert(typeof CreateLoadBalancerCommand === "function");
assert(typeof CreateLoadBalancer$ === "object");
assert(typeof CreateLoadBalancerListenersCommand === "function");
assert(typeof CreateLoadBalancerListeners$ === "object");
assert(typeof CreateLoadBalancerPolicyCommand === "function");
assert(typeof CreateLoadBalancerPolicy$ === "object");
assert(typeof DeleteLoadBalancerCommand === "function");
assert(typeof DeleteLoadBalancer$ === "object");
assert(typeof DeleteLoadBalancerListenersCommand === "function");
assert(typeof DeleteLoadBalancerListeners$ === "object");
assert(typeof DeleteLoadBalancerPolicyCommand === "function");
assert(typeof DeleteLoadBalancerPolicy$ === "object");
assert(typeof DeregisterInstancesFromLoadBalancerCommand === "function");
assert(typeof DeregisterInstancesFromLoadBalancer$ === "object");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeAccountLimits$ === "object");
assert(typeof DescribeInstanceHealthCommand === "function");
assert(typeof DescribeInstanceHealth$ === "object");
assert(typeof DescribeLoadBalancerAttributesCommand === "function");
assert(typeof DescribeLoadBalancerAttributes$ === "object");
assert(typeof DescribeLoadBalancerPoliciesCommand === "function");
assert(typeof DescribeLoadBalancerPolicies$ === "object");
assert(typeof DescribeLoadBalancerPolicyTypesCommand === "function");
assert(typeof DescribeLoadBalancerPolicyTypes$ === "object");
assert(typeof DescribeLoadBalancersCommand === "function");
assert(typeof DescribeLoadBalancers$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DetachLoadBalancerFromSubnetsCommand === "function");
assert(typeof DetachLoadBalancerFromSubnets$ === "object");
assert(typeof DisableAvailabilityZonesForLoadBalancerCommand === "function");
assert(typeof DisableAvailabilityZonesForLoadBalancer$ === "object");
assert(typeof EnableAvailabilityZonesForLoadBalancerCommand === "function");
assert(typeof EnableAvailabilityZonesForLoadBalancer$ === "object");
assert(typeof ModifyLoadBalancerAttributesCommand === "function");
assert(typeof ModifyLoadBalancerAttributes$ === "object");
assert(typeof RegisterInstancesWithLoadBalancerCommand === "function");
assert(typeof RegisterInstancesWithLoadBalancer$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof SetLoadBalancerListenerSSLCertificateCommand === "function");
assert(typeof SetLoadBalancerListenerSSLCertificate$ === "object");
assert(typeof SetLoadBalancerPoliciesForBackendServerCommand === "function");
assert(typeof SetLoadBalancerPoliciesForBackendServer$ === "object");
assert(typeof SetLoadBalancerPoliciesOfListenerCommand === "function");
assert(typeof SetLoadBalancerPoliciesOfListener$ === "object");
// structural schemas
assert(typeof AccessLog$ === "object");
assert(typeof AddAvailabilityZonesInput$ === "object");
assert(typeof AddAvailabilityZonesOutput$ === "object");
assert(typeof AdditionalAttribute$ === "object");
assert(typeof AddTagsInput$ === "object");
assert(typeof AddTagsOutput$ === "object");
assert(typeof AppCookieStickinessPolicy$ === "object");
assert(typeof ApplySecurityGroupsToLoadBalancerInput$ === "object");
assert(typeof ApplySecurityGroupsToLoadBalancerOutput$ === "object");
assert(typeof AttachLoadBalancerToSubnetsInput$ === "object");
assert(typeof AttachLoadBalancerToSubnetsOutput$ === "object");
assert(typeof BackendServerDescription$ === "object");
assert(typeof ConfigureHealthCheckInput$ === "object");
assert(typeof ConfigureHealthCheckOutput$ === "object");
assert(typeof ConnectionDraining$ === "object");
assert(typeof ConnectionSettings$ === "object");
assert(typeof CreateAccessPointInput$ === "object");
assert(typeof CreateAccessPointOutput$ === "object");
assert(typeof CreateAppCookieStickinessPolicyInput$ === "object");
assert(typeof CreateAppCookieStickinessPolicyOutput$ === "object");
assert(typeof CreateLBCookieStickinessPolicyInput$ === "object");
assert(typeof CreateLBCookieStickinessPolicyOutput$ === "object");
assert(typeof CreateLoadBalancerListenerInput$ === "object");
assert(typeof CreateLoadBalancerListenerOutput$ === "object");
assert(typeof CreateLoadBalancerPolicyInput$ === "object");
assert(typeof CreateLoadBalancerPolicyOutput$ === "object");
assert(typeof CrossZoneLoadBalancing$ === "object");
assert(typeof DeleteAccessPointInput$ === "object");
assert(typeof DeleteAccessPointOutput$ === "object");
assert(typeof DeleteLoadBalancerListenerInput$ === "object");
assert(typeof DeleteLoadBalancerListenerOutput$ === "object");
assert(typeof DeleteLoadBalancerPolicyInput$ === "object");
assert(typeof DeleteLoadBalancerPolicyOutput$ === "object");
assert(typeof DeregisterEndPointsInput$ === "object");
assert(typeof DeregisterEndPointsOutput$ === "object");
assert(typeof DescribeAccessPointsInput$ === "object");
assert(typeof DescribeAccessPointsOutput$ === "object");
assert(typeof DescribeAccountLimitsInput$ === "object");
assert(typeof DescribeAccountLimitsOutput$ === "object");
assert(typeof DescribeEndPointStateInput$ === "object");
assert(typeof DescribeEndPointStateOutput$ === "object");
assert(typeof DescribeLoadBalancerAttributesInput$ === "object");
assert(typeof DescribeLoadBalancerAttributesOutput$ === "object");
assert(typeof DescribeLoadBalancerPoliciesInput$ === "object");
assert(typeof DescribeLoadBalancerPoliciesOutput$ === "object");
assert(typeof DescribeLoadBalancerPolicyTypesInput$ === "object");
assert(typeof DescribeLoadBalancerPolicyTypesOutput$ === "object");
assert(typeof DescribeTagsInput$ === "object");
assert(typeof DescribeTagsOutput$ === "object");
assert(typeof DetachLoadBalancerFromSubnetsInput$ === "object");
assert(typeof DetachLoadBalancerFromSubnetsOutput$ === "object");
assert(typeof HealthCheck$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceState$ === "object");
assert(typeof LBCookieStickinessPolicy$ === "object");
assert(typeof Limit$ === "object");
assert(typeof Listener$ === "object");
assert(typeof ListenerDescription$ === "object");
assert(typeof LoadBalancerAttributes$ === "object");
assert(typeof LoadBalancerDescription$ === "object");
assert(typeof ModifyLoadBalancerAttributesInput$ === "object");
assert(typeof ModifyLoadBalancerAttributesOutput$ === "object");
assert(typeof Policies$ === "object");
assert(typeof PolicyAttribute$ === "object");
assert(typeof PolicyAttributeDescription$ === "object");
assert(typeof PolicyAttributeTypeDescription$ === "object");
assert(typeof PolicyDescription$ === "object");
assert(typeof PolicyTypeDescription$ === "object");
assert(typeof RegisterEndPointsInput$ === "object");
assert(typeof RegisterEndPointsOutput$ === "object");
assert(typeof RemoveAvailabilityZonesInput$ === "object");
assert(typeof RemoveAvailabilityZonesOutput$ === "object");
assert(typeof RemoveTagsInput$ === "object");
assert(typeof RemoveTagsOutput$ === "object");
assert(typeof SetLoadBalancerListenerSSLCertificateInput$ === "object");
assert(typeof SetLoadBalancerListenerSSLCertificateOutput$ === "object");
assert(typeof SetLoadBalancerPoliciesForBackendServerInput$ === "object");
assert(typeof SetLoadBalancerPoliciesForBackendServerOutput$ === "object");
assert(typeof SetLoadBalancerPoliciesOfListenerInput$ === "object");
assert(typeof SetLoadBalancerPoliciesOfListenerOutput$ === "object");
assert(typeof SourceSecurityGroup$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagDescription$ === "object");
assert(typeof TagKeyOnly$ === "object");
// errors
assert(AccessPointNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof AccessPointNotFoundException$ === "object");
assert(CertificateNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof CertificateNotFoundException$ === "object");
assert(DependencyThrottleException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof DependencyThrottleException$ === "object");
assert(DuplicateAccessPointNameException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof DuplicateAccessPointNameException$ === "object");
assert(DuplicateListenerException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof DuplicateListenerException$ === "object");
assert(DuplicatePolicyNameException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof DuplicatePolicyNameException$ === "object");
assert(DuplicateTagKeysException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof DuplicateTagKeysException$ === "object");
assert(InvalidConfigurationRequestException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof InvalidConfigurationRequestException$ === "object");
assert(InvalidEndPointException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof InvalidEndPointException$ === "object");
assert(InvalidSchemeException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof InvalidSchemeException$ === "object");
assert(InvalidSecurityGroupException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof InvalidSecurityGroupException$ === "object");
assert(InvalidSubnetException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof InvalidSubnetException$ === "object");
assert(ListenerNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof ListenerNotFoundException$ === "object");
assert(LoadBalancerAttributeNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof LoadBalancerAttributeNotFoundException$ === "object");
assert(OperationNotPermittedException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(PolicyNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof PolicyNotFoundException$ === "object");
assert(PolicyTypeNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof PolicyTypeNotFoundException$ === "object");
assert(SubnetNotFoundException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof SubnetNotFoundException$ === "object");
assert(TooManyAccessPointsException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof TooManyAccessPointsException$ === "object");
assert(TooManyPoliciesException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof TooManyPoliciesException$ === "object");
assert(TooManyTagsException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnsupportedProtocolException.prototype instanceof ElasticLoadBalancingServiceException);
assert(typeof UnsupportedProtocolException$ === "object");
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
