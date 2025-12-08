import {
  ALPNPolicyNotSupportedException,
  ActionTypeEnum,
  AddListenerCertificatesCommand,
  AddTagsCommand,
  AddTrustStoreRevocationsCommand,
  AdvertiseTrustStoreCaNamesEnum,
  AllocationIdNotFoundException,
  AnomalyResultEnum,
  AuthenticateCognitoActionConditionalBehaviorEnum,
  AuthenticateOidcActionConditionalBehaviorEnum,
  AvailabilityZoneNotSupportedException,
  CaCertificatesBundleNotFoundException,
  CapacityDecreaseRequestsLimitExceededException,
  CapacityReservationPendingException,
  CapacityReservationStateEnum,
  CapacityUnitsLimitExceededException,
  CertificateNotFoundException,
  CreateListenerCommand,
  CreateLoadBalancerCommand,
  CreateRuleCommand,
  CreateTargetGroupCommand,
  CreateTrustStoreCommand,
  DeleteAssociationSameAccountException,
  DeleteListenerCommand,
  DeleteLoadBalancerCommand,
  DeleteRuleCommand,
  DeleteSharedTrustStoreAssociationCommand,
  DeleteTargetGroupCommand,
  DeleteTrustStoreCommand,
  DeregisterTargetsCommand,
  DescribeAccountLimitsCommand,
  DescribeCapacityReservationCommand,
  DescribeListenerAttributesCommand,
  DescribeListenerCertificatesCommand,
  DescribeListenersCommand,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancersCommand,
  DescribeRulesCommand,
  DescribeSSLPoliciesCommand,
  DescribeTagsCommand,
  DescribeTargetGroupAttributesCommand,
  DescribeTargetGroupsCommand,
  DescribeTargetHealthCommand,
  DescribeTargetHealthInputIncludeEnum,
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoresCommand,
  DuplicateListenerException,
  DuplicateLoadBalancerNameException,
  DuplicateTagKeysException,
  DuplicateTargetGroupNameException,
  DuplicateTrustStoreNameException,
  ElasticLoadBalancingV2,
  ElasticLoadBalancingV2Client,
  ElasticLoadBalancingV2ServiceException,
  EnablePrefixForIpv6SourceNatEnum,
  EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum,
  GetResourcePolicyCommand,
  GetTrustStoreCaCertificatesBundleCommand,
  GetTrustStoreRevocationContentCommand,
  HealthUnavailableException,
  IncompatibleProtocolsException,
  InsufficientCapacityException,
  InvalidCaCertificatesBundleException,
  InvalidConfigurationRequestException,
  InvalidLoadBalancerActionException,
  InvalidRevocationContentException,
  InvalidSchemeException,
  InvalidSecurityGroupException,
  InvalidSubnetException,
  InvalidTargetException,
  IpAddressType,
  JwtValidationActionAdditionalClaimFormatEnum,
  ListenerNotFoundException,
  LoadBalancerNotFoundException,
  LoadBalancerSchemeEnum,
  LoadBalancerStateEnum,
  LoadBalancerTypeEnum,
  MitigationInEffectEnum,
  ModifyCapacityReservationCommand,
  ModifyIpPoolsCommand,
  ModifyListenerAttributesCommand,
  ModifyListenerCommand,
  ModifyLoadBalancerAttributesCommand,
  ModifyRuleCommand,
  ModifyTargetGroupAttributesCommand,
  ModifyTargetGroupCommand,
  ModifyTrustStoreCommand,
  OperationNotPermittedException,
  PriorRequestNotCompleteException,
  PriorityInUseException,
  ProtocolEnum,
  RedirectActionStatusCodeEnum,
  RegisterTargetsCommand,
  RemoveIpamPoolEnum,
  RemoveListenerCertificatesCommand,
  RemoveTagsCommand,
  RemoveTrustStoreRevocationsCommand,
  ResourceInUseException,
  ResourceNotFoundException,
  RevocationContentNotFoundException,
  RevocationIdNotFoundException,
  RevocationType,
  RuleNotFoundException,
  SSLPolicyNotFoundException,
  SetIpAddressTypeCommand,
  SetRulePrioritiesCommand,
  SetSecurityGroupsCommand,
  SetSubnetsCommand,
  SubnetNotFoundException,
  TargetAdministrativeOverrideReasonEnum,
  TargetAdministrativeOverrideStateEnum,
  TargetGroupAssociationLimitException,
  TargetGroupIpAddressTypeEnum,
  TargetGroupNotFoundException,
  TargetHealthReasonEnum,
  TargetHealthStateEnum,
  TargetTypeEnum,
  TooManyActionsException,
  TooManyCertificatesException,
  TooManyListenersException,
  TooManyLoadBalancersException,
  TooManyRegistrationsForTargetIdException,
  TooManyRulesException,
  TooManyTagsException,
  TooManyTargetGroupsException,
  TooManyTargetsException,
  TooManyTrustStoreRevocationEntriesException,
  TooManyTrustStoresException,
  TooManyUniqueTargetGroupsPerLoadBalancerException,
  TransformTypeEnum,
  TrustStoreAssociationNotFoundException,
  TrustStoreAssociationStatusEnum,
  TrustStoreInUseException,
  TrustStoreNotFoundException,
  TrustStoreNotReadyException,
  TrustStoreStatus,
  UnsupportedProtocolException,
  paginateDescribeAccountLimits,
  paginateDescribeListenerCertificates,
  paginateDescribeListeners,
  paginateDescribeLoadBalancers,
  paginateDescribeRules,
  paginateDescribeTargetGroups,
  paginateDescribeTrustStoreAssociations,
  paginateDescribeTrustStoreRevocations,
  paginateDescribeTrustStores,
  waitForLoadBalancerAvailable,
  waitForLoadBalancerExists,
  waitForLoadBalancersDeleted,
  waitForTargetDeregistered,
  waitForTargetInService,
  waitUntilLoadBalancerAvailable,
  waitUntilLoadBalancerExists,
  waitUntilLoadBalancersDeleted,
  waitUntilTargetDeregistered,
  waitUntilTargetInService,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElasticLoadBalancingV2Client === "function");
assert(typeof ElasticLoadBalancingV2 === "function");
// commands
assert(typeof AddListenerCertificatesCommand === "function");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTrustStoreRevocationsCommand === "function");
assert(typeof CreateListenerCommand === "function");
assert(typeof CreateLoadBalancerCommand === "function");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateTargetGroupCommand === "function");
assert(typeof CreateTrustStoreCommand === "function");
assert(typeof DeleteListenerCommand === "function");
assert(typeof DeleteLoadBalancerCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteSharedTrustStoreAssociationCommand === "function");
assert(typeof DeleteTargetGroupCommand === "function");
assert(typeof DeleteTrustStoreCommand === "function");
assert(typeof DeregisterTargetsCommand === "function");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeCapacityReservationCommand === "function");
assert(typeof DescribeListenerAttributesCommand === "function");
assert(typeof DescribeListenerCertificatesCommand === "function");
assert(typeof DescribeListenersCommand === "function");
assert(typeof DescribeLoadBalancerAttributesCommand === "function");
assert(typeof DescribeLoadBalancersCommand === "function");
assert(typeof DescribeRulesCommand === "function");
assert(typeof DescribeSSLPoliciesCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTargetGroupAttributesCommand === "function");
assert(typeof DescribeTargetGroupsCommand === "function");
assert(typeof DescribeTargetHealthCommand === "function");
assert(typeof DescribeTrustStoreAssociationsCommand === "function");
assert(typeof DescribeTrustStoreRevocationsCommand === "function");
assert(typeof DescribeTrustStoresCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetTrustStoreCaCertificatesBundleCommand === "function");
assert(typeof GetTrustStoreRevocationContentCommand === "function");
assert(typeof ModifyCapacityReservationCommand === "function");
assert(typeof ModifyIpPoolsCommand === "function");
assert(typeof ModifyListenerCommand === "function");
assert(typeof ModifyListenerAttributesCommand === "function");
assert(typeof ModifyLoadBalancerAttributesCommand === "function");
assert(typeof ModifyRuleCommand === "function");
assert(typeof ModifyTargetGroupCommand === "function");
assert(typeof ModifyTargetGroupAttributesCommand === "function");
assert(typeof ModifyTrustStoreCommand === "function");
assert(typeof RegisterTargetsCommand === "function");
assert(typeof RemoveListenerCertificatesCommand === "function");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTrustStoreRevocationsCommand === "function");
assert(typeof SetIpAddressTypeCommand === "function");
assert(typeof SetRulePrioritiesCommand === "function");
assert(typeof SetSecurityGroupsCommand === "function");
assert(typeof SetSubnetsCommand === "function");
// enums
assert(typeof ActionTypeEnum === "object");
assert(typeof AdvertiseTrustStoreCaNamesEnum === "object");
assert(typeof AnomalyResultEnum === "object");
assert(typeof AuthenticateCognitoActionConditionalBehaviorEnum === "object");
assert(typeof AuthenticateOidcActionConditionalBehaviorEnum === "object");
assert(typeof CapacityReservationStateEnum === "object");
assert(typeof DescribeTargetHealthInputIncludeEnum === "object");
assert(typeof EnablePrefixForIpv6SourceNatEnum === "object");
assert(typeof EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum === "object");
assert(typeof IpAddressType === "object");
assert(typeof JwtValidationActionAdditionalClaimFormatEnum === "object");
assert(typeof LoadBalancerSchemeEnum === "object");
assert(typeof LoadBalancerStateEnum === "object");
assert(typeof LoadBalancerTypeEnum === "object");
assert(typeof MitigationInEffectEnum === "object");
assert(typeof ProtocolEnum === "object");
assert(typeof RedirectActionStatusCodeEnum === "object");
assert(typeof RemoveIpamPoolEnum === "object");
assert(typeof RevocationType === "object");
assert(typeof TargetAdministrativeOverrideReasonEnum === "object");
assert(typeof TargetAdministrativeOverrideStateEnum === "object");
assert(typeof TargetGroupIpAddressTypeEnum === "object");
assert(typeof TargetHealthReasonEnum === "object");
assert(typeof TargetHealthStateEnum === "object");
assert(typeof TargetTypeEnum === "object");
assert(typeof TransformTypeEnum === "object");
assert(typeof TrustStoreAssociationStatusEnum === "object");
assert(typeof TrustStoreStatus === "object");
// errors
assert(AllocationIdNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(ALPNPolicyNotSupportedException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(AvailabilityZoneNotSupportedException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(CaCertificatesBundleNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(CapacityDecreaseRequestsLimitExceededException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(CapacityReservationPendingException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(CapacityUnitsLimitExceededException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(CertificateNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(DeleteAssociationSameAccountException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(DuplicateListenerException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(DuplicateLoadBalancerNameException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(DuplicateTagKeysException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(DuplicateTargetGroupNameException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(DuplicateTrustStoreNameException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(HealthUnavailableException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(IncompatibleProtocolsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InsufficientCapacityException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidCaCertificatesBundleException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidConfigurationRequestException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidLoadBalancerActionException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidRevocationContentException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidSchemeException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidSecurityGroupException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidSubnetException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(InvalidTargetException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(ListenerNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(LoadBalancerNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(OperationNotPermittedException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(PriorityInUseException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(PriorRequestNotCompleteException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(ResourceInUseException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(ResourceNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(RevocationContentNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(RevocationIdNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(RuleNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(SSLPolicyNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(SubnetNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TargetGroupAssociationLimitException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TargetGroupNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyActionsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyCertificatesException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyListenersException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyLoadBalancersException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyRegistrationsForTargetIdException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyRulesException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyTagsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyTargetGroupsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyTargetsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyTrustStoreRevocationEntriesException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyTrustStoresException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TooManyUniqueTargetGroupsPerLoadBalancerException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TrustStoreAssociationNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TrustStoreInUseException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TrustStoreNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(TrustStoreNotReadyException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(UnsupportedProtocolException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(ElasticLoadBalancingV2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForLoadBalancerAvailable === "function");
assert(typeof waitForLoadBalancerExists === "function");
assert(typeof waitForLoadBalancersDeleted === "function");
assert(typeof waitForTargetDeregistered === "function");
assert(typeof waitForTargetInService === "function");
assert(typeof waitUntilLoadBalancerAvailable === "function");
assert(typeof waitUntilLoadBalancerExists === "function");
assert(typeof waitUntilLoadBalancersDeleted === "function");
assert(typeof waitUntilTargetDeregistered === "function");
assert(typeof waitUntilTargetInService === "function");
// paginators
assert(typeof paginateDescribeAccountLimits === "function");
assert(typeof paginateDescribeListenerCertificates === "function");
assert(typeof paginateDescribeListeners === "function");
assert(typeof paginateDescribeLoadBalancers === "function");
assert(typeof paginateDescribeRules === "function");
assert(typeof paginateDescribeTargetGroups === "function");
assert(typeof paginateDescribeTrustStoreAssociations === "function");
assert(typeof paginateDescribeTrustStoreRevocations === "function");
assert(typeof paginateDescribeTrustStores === "function");
console.log(`ElasticLoadBalancingV2 index test passed.`);
