import {
  ALPNPolicyNotSupportedException,
  ALPNPolicyNotSupportedException$,
  Action$,
  ActionTypeEnum,
  AddListenerCertificates$,
  AddListenerCertificatesCommand,
  AddListenerCertificatesInput$,
  AddListenerCertificatesOutput$,
  AddTags$,
  AddTagsCommand,
  AddTagsInput$,
  AddTagsOutput$,
  AddTrustStoreRevocations$,
  AddTrustStoreRevocationsCommand,
  AddTrustStoreRevocationsInput$,
  AddTrustStoreRevocationsOutput$,
  AdministrativeOverride$,
  AdvertiseTrustStoreCaNamesEnum,
  AllocationIdNotFoundException,
  AllocationIdNotFoundException$,
  AnomalyDetection$,
  AnomalyResultEnum,
  AuthenticateCognitoActionConditionalBehaviorEnum,
  AuthenticateCognitoActionConfig$,
  AuthenticateOidcActionConditionalBehaviorEnum,
  AuthenticateOidcActionConfig$,
  AvailabilityZone$,
  AvailabilityZoneNotSupportedException,
  AvailabilityZoneNotSupportedException$,
  CaCertificatesBundleNotFoundException,
  CaCertificatesBundleNotFoundException$,
  CapacityDecreaseRequestsLimitExceededException,
  CapacityDecreaseRequestsLimitExceededException$,
  CapacityReservationPendingException,
  CapacityReservationPendingException$,
  CapacityReservationStateEnum,
  CapacityReservationStatus$,
  CapacityUnitsLimitExceededException,
  CapacityUnitsLimitExceededException$,
  Certificate$,
  CertificateNotFoundException,
  CertificateNotFoundException$,
  Cipher$,
  CreateListener$,
  CreateListenerCommand,
  CreateListenerInput$,
  CreateListenerOutput$,
  CreateLoadBalancer$,
  CreateLoadBalancerCommand,
  CreateLoadBalancerInput$,
  CreateLoadBalancerOutput$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleInput$,
  CreateRuleOutput$,
  CreateTargetGroup$,
  CreateTargetGroupCommand,
  CreateTargetGroupInput$,
  CreateTargetGroupOutput$,
  CreateTrustStore$,
  CreateTrustStoreCommand,
  CreateTrustStoreInput$,
  CreateTrustStoreOutput$,
  DeleteAssociationSameAccountException,
  DeleteAssociationSameAccountException$,
  DeleteListener$,
  DeleteListenerCommand,
  DeleteListenerInput$,
  DeleteListenerOutput$,
  DeleteLoadBalancer$,
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerInput$,
  DeleteLoadBalancerOutput$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleInput$,
  DeleteRuleOutput$,
  DeleteSharedTrustStoreAssociation$,
  DeleteSharedTrustStoreAssociationCommand,
  DeleteSharedTrustStoreAssociationInput$,
  DeleteSharedTrustStoreAssociationOutput$,
  DeleteTargetGroup$,
  DeleteTargetGroupCommand,
  DeleteTargetGroupInput$,
  DeleteTargetGroupOutput$,
  DeleteTrustStore$,
  DeleteTrustStoreCommand,
  DeleteTrustStoreInput$,
  DeleteTrustStoreOutput$,
  DeregisterTargets$,
  DeregisterTargetsCommand,
  DeregisterTargetsInput$,
  DeregisterTargetsOutput$,
  DescribeAccountLimits$,
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsInput$,
  DescribeAccountLimitsOutput$,
  DescribeCapacityReservation$,
  DescribeCapacityReservationCommand,
  DescribeCapacityReservationInput$,
  DescribeCapacityReservationOutput$,
  DescribeListenerAttributes$,
  DescribeListenerAttributesCommand,
  DescribeListenerAttributesInput$,
  DescribeListenerAttributesOutput$,
  DescribeListenerCertificates$,
  DescribeListenerCertificatesCommand,
  DescribeListenerCertificatesInput$,
  DescribeListenerCertificatesOutput$,
  DescribeListeners$,
  DescribeListenersCommand,
  DescribeListenersInput$,
  DescribeListenersOutput$,
  DescribeLoadBalancerAttributes$,
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerAttributesInput$,
  DescribeLoadBalancerAttributesOutput$,
  DescribeLoadBalancers$,
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersInput$,
  DescribeLoadBalancersOutput$,
  DescribeRules$,
  DescribeRulesCommand,
  DescribeRulesInput$,
  DescribeRulesOutput$,
  DescribeSSLPolicies$,
  DescribeSSLPoliciesCommand,
  DescribeSSLPoliciesInput$,
  DescribeSSLPoliciesOutput$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsInput$,
  DescribeTagsOutput$,
  DescribeTargetGroupAttributes$,
  DescribeTargetGroupAttributesCommand,
  DescribeTargetGroupAttributesInput$,
  DescribeTargetGroupAttributesOutput$,
  DescribeTargetGroups$,
  DescribeTargetGroupsCommand,
  DescribeTargetGroupsInput$,
  DescribeTargetGroupsOutput$,
  DescribeTargetHealth$,
  DescribeTargetHealthCommand,
  DescribeTargetHealthInput$,
  DescribeTargetHealthInputIncludeEnum,
  DescribeTargetHealthOutput$,
  DescribeTrustStoreAssociations$,
  DescribeTrustStoreAssociationsCommand,
  DescribeTrustStoreAssociationsInput$,
  DescribeTrustStoreAssociationsOutput$,
  DescribeTrustStoreRevocation$,
  DescribeTrustStoreRevocations$,
  DescribeTrustStoreRevocationsCommand,
  DescribeTrustStoreRevocationsInput$,
  DescribeTrustStoreRevocationsOutput$,
  DescribeTrustStores$,
  DescribeTrustStoresCommand,
  DescribeTrustStoresInput$,
  DescribeTrustStoresOutput$,
  DuplicateListenerException,
  DuplicateListenerException$,
  DuplicateLoadBalancerNameException,
  DuplicateLoadBalancerNameException$,
  DuplicateTagKeysException,
  DuplicateTagKeysException$,
  DuplicateTargetGroupNameException,
  DuplicateTargetGroupNameException$,
  DuplicateTrustStoreNameException,
  DuplicateTrustStoreNameException$,
  ElasticLoadBalancingV2,
  ElasticLoadBalancingV2Client,
  ElasticLoadBalancingV2ServiceException,
  EnablePrefixForIpv6SourceNatEnum,
  EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum,
  FixedResponseActionConfig$,
  ForwardActionConfig$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyInput$,
  GetResourcePolicyOutput$,
  GetTrustStoreCaCertificatesBundle$,
  GetTrustStoreCaCertificatesBundleCommand,
  GetTrustStoreCaCertificatesBundleInput$,
  GetTrustStoreCaCertificatesBundleOutput$,
  GetTrustStoreRevocationContent$,
  GetTrustStoreRevocationContentCommand,
  GetTrustStoreRevocationContentInput$,
  GetTrustStoreRevocationContentOutput$,
  HealthUnavailableException,
  HealthUnavailableException$,
  HostHeaderConditionConfig$,
  HostHeaderRewriteConfig$,
  HttpHeaderConditionConfig$,
  HttpRequestMethodConditionConfig$,
  IncompatibleProtocolsException,
  IncompatibleProtocolsException$,
  InsufficientCapacityException,
  InsufficientCapacityException$,
  InvalidCaCertificatesBundleException,
  InvalidCaCertificatesBundleException$,
  InvalidConfigurationRequestException,
  InvalidConfigurationRequestException$,
  InvalidLoadBalancerActionException,
  InvalidLoadBalancerActionException$,
  InvalidRevocationContentException,
  InvalidRevocationContentException$,
  InvalidSchemeException,
  InvalidSchemeException$,
  InvalidSecurityGroupException,
  InvalidSecurityGroupException$,
  InvalidSubnetException,
  InvalidSubnetException$,
  InvalidTargetException,
  InvalidTargetException$,
  IpAddressType,
  IpamPools$,
  JwtValidationActionAdditionalClaim$,
  JwtValidationActionAdditionalClaimFormatEnum,
  JwtValidationActionConfig$,
  Limit$,
  Listener$,
  ListenerAttribute$,
  ListenerNotFoundException,
  ListenerNotFoundException$,
  LoadBalancer$,
  LoadBalancerAddress$,
  LoadBalancerAttribute$,
  LoadBalancerNotFoundException,
  LoadBalancerNotFoundException$,
  LoadBalancerSchemeEnum,
  LoadBalancerState$,
  LoadBalancerStateEnum,
  LoadBalancerTypeEnum,
  Matcher$,
  MinimumLoadBalancerCapacity$,
  MitigationInEffectEnum,
  ModifyCapacityReservation$,
  ModifyCapacityReservationCommand,
  ModifyCapacityReservationInput$,
  ModifyCapacityReservationOutput$,
  ModifyIpPools$,
  ModifyIpPoolsCommand,
  ModifyIpPoolsInput$,
  ModifyIpPoolsOutput$,
  ModifyListener$,
  ModifyListenerAttributes$,
  ModifyListenerAttributesCommand,
  ModifyListenerAttributesInput$,
  ModifyListenerAttributesOutput$,
  ModifyListenerCommand,
  ModifyListenerInput$,
  ModifyListenerOutput$,
  ModifyLoadBalancerAttributes$,
  ModifyLoadBalancerAttributesCommand,
  ModifyLoadBalancerAttributesInput$,
  ModifyLoadBalancerAttributesOutput$,
  ModifyRule$,
  ModifyRuleCommand,
  ModifyRuleInput$,
  ModifyRuleOutput$,
  ModifyTargetGroup$,
  ModifyTargetGroupAttributes$,
  ModifyTargetGroupAttributesCommand,
  ModifyTargetGroupAttributesInput$,
  ModifyTargetGroupAttributesOutput$,
  ModifyTargetGroupCommand,
  ModifyTargetGroupInput$,
  ModifyTargetGroupOutput$,
  ModifyTrustStore$,
  ModifyTrustStoreCommand,
  ModifyTrustStoreInput$,
  ModifyTrustStoreOutput$,
  MutualAuthenticationAttributes$,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  PathPatternConditionConfig$,
  PriorRequestNotCompleteException,
  PriorRequestNotCompleteException$,
  PriorityInUseException,
  PriorityInUseException$,
  ProtocolEnum,
  QueryStringConditionConfig$,
  QueryStringKeyValuePair$,
  RedirectActionConfig$,
  RedirectActionStatusCodeEnum,
  RegisterTargets$,
  RegisterTargetsCommand,
  RegisterTargetsInput$,
  RegisterTargetsOutput$,
  RemoveIpamPoolEnum,
  RemoveListenerCertificates$,
  RemoveListenerCertificatesCommand,
  RemoveListenerCertificatesInput$,
  RemoveListenerCertificatesOutput$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsInput$,
  RemoveTagsOutput$,
  RemoveTrustStoreRevocations$,
  RemoveTrustStoreRevocationsCommand,
  RemoveTrustStoreRevocationsInput$,
  RemoveTrustStoreRevocationsOutput$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevocationContent$,
  RevocationContentNotFoundException,
  RevocationContentNotFoundException$,
  RevocationIdNotFoundException,
  RevocationIdNotFoundException$,
  RevocationType,
  RewriteConfig$,
  Rule$,
  RuleCondition$,
  RuleNotFoundException,
  RuleNotFoundException$,
  RulePriorityPair$,
  RuleTransform$,
  SSLPolicyNotFoundException,
  SSLPolicyNotFoundException$,
  SetIpAddressType$,
  SetIpAddressTypeCommand,
  SetIpAddressTypeInput$,
  SetIpAddressTypeOutput$,
  SetRulePriorities$,
  SetRulePrioritiesCommand,
  SetRulePrioritiesInput$,
  SetRulePrioritiesOutput$,
  SetSecurityGroups$,
  SetSecurityGroupsCommand,
  SetSecurityGroupsInput$,
  SetSecurityGroupsOutput$,
  SetSubnets$,
  SetSubnetsCommand,
  SetSubnetsInput$,
  SetSubnetsOutput$,
  SourceIpConditionConfig$,
  SslPolicy$,
  SubnetMapping$,
  SubnetNotFoundException,
  SubnetNotFoundException$,
  Tag$,
  TagDescription$,
  TargetAdministrativeOverrideReasonEnum,
  TargetAdministrativeOverrideStateEnum,
  TargetDescription$,
  TargetGroup$,
  TargetGroupAssociationLimitException,
  TargetGroupAssociationLimitException$,
  TargetGroupAttribute$,
  TargetGroupIpAddressTypeEnum,
  TargetGroupNotFoundException,
  TargetGroupNotFoundException$,
  TargetGroupStickinessConfig$,
  TargetGroupTuple$,
  TargetHealth$,
  TargetHealthDescription$,
  TargetHealthReasonEnum,
  TargetHealthStateEnum,
  TargetTypeEnum,
  TooManyActionsException,
  TooManyActionsException$,
  TooManyCertificatesException,
  TooManyCertificatesException$,
  TooManyListenersException,
  TooManyListenersException$,
  TooManyLoadBalancersException,
  TooManyLoadBalancersException$,
  TooManyRegistrationsForTargetIdException,
  TooManyRegistrationsForTargetIdException$,
  TooManyRulesException,
  TooManyRulesException$,
  TooManyTagsException,
  TooManyTagsException$,
  TooManyTargetGroupsException,
  TooManyTargetGroupsException$,
  TooManyTargetsException,
  TooManyTargetsException$,
  TooManyTrustStoreRevocationEntriesException,
  TooManyTrustStoreRevocationEntriesException$,
  TooManyTrustStoresException,
  TooManyTrustStoresException$,
  TooManyUniqueTargetGroupsPerLoadBalancerException,
  TooManyUniqueTargetGroupsPerLoadBalancerException$,
  TransformTypeEnum,
  TrustStore$,
  TrustStoreAssociation$,
  TrustStoreAssociationNotFoundException,
  TrustStoreAssociationNotFoundException$,
  TrustStoreAssociationStatusEnum,
  TrustStoreInUseException,
  TrustStoreInUseException$,
  TrustStoreNotFoundException,
  TrustStoreNotFoundException$,
  TrustStoreNotReadyException,
  TrustStoreNotReadyException$,
  TrustStoreRevocation$,
  TrustStoreStatus,
  UnsupportedProtocolException,
  UnsupportedProtocolException$,
  UrlRewriteConfig$,
  ZonalCapacityReservationState$,
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
assert(typeof AddListenerCertificates$ === "object");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof AddTrustStoreRevocationsCommand === "function");
assert(typeof AddTrustStoreRevocations$ === "object");
assert(typeof CreateListenerCommand === "function");
assert(typeof CreateListener$ === "object");
assert(typeof CreateLoadBalancerCommand === "function");
assert(typeof CreateLoadBalancer$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateTargetGroupCommand === "function");
assert(typeof CreateTargetGroup$ === "object");
assert(typeof CreateTrustStoreCommand === "function");
assert(typeof CreateTrustStore$ === "object");
assert(typeof DeleteListenerCommand === "function");
assert(typeof DeleteListener$ === "object");
assert(typeof DeleteLoadBalancerCommand === "function");
assert(typeof DeleteLoadBalancer$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteSharedTrustStoreAssociationCommand === "function");
assert(typeof DeleteSharedTrustStoreAssociation$ === "object");
assert(typeof DeleteTargetGroupCommand === "function");
assert(typeof DeleteTargetGroup$ === "object");
assert(typeof DeleteTrustStoreCommand === "function");
assert(typeof DeleteTrustStore$ === "object");
assert(typeof DeregisterTargetsCommand === "function");
assert(typeof DeregisterTargets$ === "object");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeAccountLimits$ === "object");
assert(typeof DescribeCapacityReservationCommand === "function");
assert(typeof DescribeCapacityReservation$ === "object");
assert(typeof DescribeListenerAttributesCommand === "function");
assert(typeof DescribeListenerAttributes$ === "object");
assert(typeof DescribeListenerCertificatesCommand === "function");
assert(typeof DescribeListenerCertificates$ === "object");
assert(typeof DescribeListenersCommand === "function");
assert(typeof DescribeListeners$ === "object");
assert(typeof DescribeLoadBalancerAttributesCommand === "function");
assert(typeof DescribeLoadBalancerAttributes$ === "object");
assert(typeof DescribeLoadBalancersCommand === "function");
assert(typeof DescribeLoadBalancers$ === "object");
assert(typeof DescribeRulesCommand === "function");
assert(typeof DescribeRules$ === "object");
assert(typeof DescribeSSLPoliciesCommand === "function");
assert(typeof DescribeSSLPolicies$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeTargetGroupAttributesCommand === "function");
assert(typeof DescribeTargetGroupAttributes$ === "object");
assert(typeof DescribeTargetGroupsCommand === "function");
assert(typeof DescribeTargetGroups$ === "object");
assert(typeof DescribeTargetHealthCommand === "function");
assert(typeof DescribeTargetHealth$ === "object");
assert(typeof DescribeTrustStoreAssociationsCommand === "function");
assert(typeof DescribeTrustStoreAssociations$ === "object");
assert(typeof DescribeTrustStoreRevocationsCommand === "function");
assert(typeof DescribeTrustStoreRevocations$ === "object");
assert(typeof DescribeTrustStoresCommand === "function");
assert(typeof DescribeTrustStores$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetTrustStoreCaCertificatesBundleCommand === "function");
assert(typeof GetTrustStoreCaCertificatesBundle$ === "object");
assert(typeof GetTrustStoreRevocationContentCommand === "function");
assert(typeof GetTrustStoreRevocationContent$ === "object");
assert(typeof ModifyCapacityReservationCommand === "function");
assert(typeof ModifyCapacityReservation$ === "object");
assert(typeof ModifyIpPoolsCommand === "function");
assert(typeof ModifyIpPools$ === "object");
assert(typeof ModifyListenerCommand === "function");
assert(typeof ModifyListener$ === "object");
assert(typeof ModifyListenerAttributesCommand === "function");
assert(typeof ModifyListenerAttributes$ === "object");
assert(typeof ModifyLoadBalancerAttributesCommand === "function");
assert(typeof ModifyLoadBalancerAttributes$ === "object");
assert(typeof ModifyRuleCommand === "function");
assert(typeof ModifyRule$ === "object");
assert(typeof ModifyTargetGroupCommand === "function");
assert(typeof ModifyTargetGroup$ === "object");
assert(typeof ModifyTargetGroupAttributesCommand === "function");
assert(typeof ModifyTargetGroupAttributes$ === "object");
assert(typeof ModifyTrustStoreCommand === "function");
assert(typeof ModifyTrustStore$ === "object");
assert(typeof RegisterTargetsCommand === "function");
assert(typeof RegisterTargets$ === "object");
assert(typeof RemoveListenerCertificatesCommand === "function");
assert(typeof RemoveListenerCertificates$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof RemoveTrustStoreRevocationsCommand === "function");
assert(typeof RemoveTrustStoreRevocations$ === "object");
assert(typeof SetIpAddressTypeCommand === "function");
assert(typeof SetIpAddressType$ === "object");
assert(typeof SetRulePrioritiesCommand === "function");
assert(typeof SetRulePriorities$ === "object");
assert(typeof SetSecurityGroupsCommand === "function");
assert(typeof SetSecurityGroups$ === "object");
assert(typeof SetSubnetsCommand === "function");
assert(typeof SetSubnets$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof AddListenerCertificatesInput$ === "object");
assert(typeof AddListenerCertificatesOutput$ === "object");
assert(typeof AddTagsInput$ === "object");
assert(typeof AddTagsOutput$ === "object");
assert(typeof AddTrustStoreRevocationsInput$ === "object");
assert(typeof AddTrustStoreRevocationsOutput$ === "object");
assert(typeof AdministrativeOverride$ === "object");
assert(typeof AnomalyDetection$ === "object");
assert(typeof AuthenticateCognitoActionConfig$ === "object");
assert(typeof AuthenticateOidcActionConfig$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof CapacityReservationStatus$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof Cipher$ === "object");
assert(typeof CreateListenerInput$ === "object");
assert(typeof CreateListenerOutput$ === "object");
assert(typeof CreateLoadBalancerInput$ === "object");
assert(typeof CreateLoadBalancerOutput$ === "object");
assert(typeof CreateRuleInput$ === "object");
assert(typeof CreateRuleOutput$ === "object");
assert(typeof CreateTargetGroupInput$ === "object");
assert(typeof CreateTargetGroupOutput$ === "object");
assert(typeof CreateTrustStoreInput$ === "object");
assert(typeof CreateTrustStoreOutput$ === "object");
assert(typeof DeleteListenerInput$ === "object");
assert(typeof DeleteListenerOutput$ === "object");
assert(typeof DeleteLoadBalancerInput$ === "object");
assert(typeof DeleteLoadBalancerOutput$ === "object");
assert(typeof DeleteRuleInput$ === "object");
assert(typeof DeleteRuleOutput$ === "object");
assert(typeof DeleteSharedTrustStoreAssociationInput$ === "object");
assert(typeof DeleteSharedTrustStoreAssociationOutput$ === "object");
assert(typeof DeleteTargetGroupInput$ === "object");
assert(typeof DeleteTargetGroupOutput$ === "object");
assert(typeof DeleteTrustStoreInput$ === "object");
assert(typeof DeleteTrustStoreOutput$ === "object");
assert(typeof DeregisterTargetsInput$ === "object");
assert(typeof DeregisterTargetsOutput$ === "object");
assert(typeof DescribeAccountLimitsInput$ === "object");
assert(typeof DescribeAccountLimitsOutput$ === "object");
assert(typeof DescribeCapacityReservationInput$ === "object");
assert(typeof DescribeCapacityReservationOutput$ === "object");
assert(typeof DescribeListenerAttributesInput$ === "object");
assert(typeof DescribeListenerAttributesOutput$ === "object");
assert(typeof DescribeListenerCertificatesInput$ === "object");
assert(typeof DescribeListenerCertificatesOutput$ === "object");
assert(typeof DescribeListenersInput$ === "object");
assert(typeof DescribeListenersOutput$ === "object");
assert(typeof DescribeLoadBalancerAttributesInput$ === "object");
assert(typeof DescribeLoadBalancerAttributesOutput$ === "object");
assert(typeof DescribeLoadBalancersInput$ === "object");
assert(typeof DescribeLoadBalancersOutput$ === "object");
assert(typeof DescribeRulesInput$ === "object");
assert(typeof DescribeRulesOutput$ === "object");
assert(typeof DescribeSSLPoliciesInput$ === "object");
assert(typeof DescribeSSLPoliciesOutput$ === "object");
assert(typeof DescribeTagsInput$ === "object");
assert(typeof DescribeTagsOutput$ === "object");
assert(typeof DescribeTargetGroupAttributesInput$ === "object");
assert(typeof DescribeTargetGroupAttributesOutput$ === "object");
assert(typeof DescribeTargetGroupsInput$ === "object");
assert(typeof DescribeTargetGroupsOutput$ === "object");
assert(typeof DescribeTargetHealthInput$ === "object");
assert(typeof DescribeTargetHealthOutput$ === "object");
assert(typeof DescribeTrustStoreAssociationsInput$ === "object");
assert(typeof DescribeTrustStoreAssociationsOutput$ === "object");
assert(typeof DescribeTrustStoreRevocation$ === "object");
assert(typeof DescribeTrustStoreRevocationsInput$ === "object");
assert(typeof DescribeTrustStoreRevocationsOutput$ === "object");
assert(typeof DescribeTrustStoresInput$ === "object");
assert(typeof DescribeTrustStoresOutput$ === "object");
assert(typeof FixedResponseActionConfig$ === "object");
assert(typeof ForwardActionConfig$ === "object");
assert(typeof GetResourcePolicyInput$ === "object");
assert(typeof GetResourcePolicyOutput$ === "object");
assert(typeof GetTrustStoreCaCertificatesBundleInput$ === "object");
assert(typeof GetTrustStoreCaCertificatesBundleOutput$ === "object");
assert(typeof GetTrustStoreRevocationContentInput$ === "object");
assert(typeof GetTrustStoreRevocationContentOutput$ === "object");
assert(typeof HostHeaderConditionConfig$ === "object");
assert(typeof HostHeaderRewriteConfig$ === "object");
assert(typeof HttpHeaderConditionConfig$ === "object");
assert(typeof HttpRequestMethodConditionConfig$ === "object");
assert(typeof IpamPools$ === "object");
assert(typeof JwtValidationActionAdditionalClaim$ === "object");
assert(typeof JwtValidationActionConfig$ === "object");
assert(typeof Limit$ === "object");
assert(typeof Listener$ === "object");
assert(typeof ListenerAttribute$ === "object");
assert(typeof LoadBalancer$ === "object");
assert(typeof LoadBalancerAddress$ === "object");
assert(typeof LoadBalancerAttribute$ === "object");
assert(typeof LoadBalancerState$ === "object");
assert(typeof Matcher$ === "object");
assert(typeof MinimumLoadBalancerCapacity$ === "object");
assert(typeof ModifyCapacityReservationInput$ === "object");
assert(typeof ModifyCapacityReservationOutput$ === "object");
assert(typeof ModifyIpPoolsInput$ === "object");
assert(typeof ModifyIpPoolsOutput$ === "object");
assert(typeof ModifyListenerAttributesInput$ === "object");
assert(typeof ModifyListenerAttributesOutput$ === "object");
assert(typeof ModifyListenerInput$ === "object");
assert(typeof ModifyListenerOutput$ === "object");
assert(typeof ModifyLoadBalancerAttributesInput$ === "object");
assert(typeof ModifyLoadBalancerAttributesOutput$ === "object");
assert(typeof ModifyRuleInput$ === "object");
assert(typeof ModifyRuleOutput$ === "object");
assert(typeof ModifyTargetGroupAttributesInput$ === "object");
assert(typeof ModifyTargetGroupAttributesOutput$ === "object");
assert(typeof ModifyTargetGroupInput$ === "object");
assert(typeof ModifyTargetGroupOutput$ === "object");
assert(typeof ModifyTrustStoreInput$ === "object");
assert(typeof ModifyTrustStoreOutput$ === "object");
assert(typeof MutualAuthenticationAttributes$ === "object");
assert(typeof PathPatternConditionConfig$ === "object");
assert(typeof QueryStringConditionConfig$ === "object");
assert(typeof QueryStringKeyValuePair$ === "object");
assert(typeof RedirectActionConfig$ === "object");
assert(typeof RegisterTargetsInput$ === "object");
assert(typeof RegisterTargetsOutput$ === "object");
assert(typeof RemoveListenerCertificatesInput$ === "object");
assert(typeof RemoveListenerCertificatesOutput$ === "object");
assert(typeof RemoveTagsInput$ === "object");
assert(typeof RemoveTagsOutput$ === "object");
assert(typeof RemoveTrustStoreRevocationsInput$ === "object");
assert(typeof RemoveTrustStoreRevocationsOutput$ === "object");
assert(typeof RevocationContent$ === "object");
assert(typeof RewriteConfig$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleCondition$ === "object");
assert(typeof RulePriorityPair$ === "object");
assert(typeof RuleTransform$ === "object");
assert(typeof SetIpAddressTypeInput$ === "object");
assert(typeof SetIpAddressTypeOutput$ === "object");
assert(typeof SetRulePrioritiesInput$ === "object");
assert(typeof SetRulePrioritiesOutput$ === "object");
assert(typeof SetSecurityGroupsInput$ === "object");
assert(typeof SetSecurityGroupsOutput$ === "object");
assert(typeof SetSubnetsInput$ === "object");
assert(typeof SetSubnetsOutput$ === "object");
assert(typeof SourceIpConditionConfig$ === "object");
assert(typeof SslPolicy$ === "object");
assert(typeof SubnetMapping$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagDescription$ === "object");
assert(typeof TargetDescription$ === "object");
assert(typeof TargetGroup$ === "object");
assert(typeof TargetGroupAttribute$ === "object");
assert(typeof TargetGroupStickinessConfig$ === "object");
assert(typeof TargetGroupTuple$ === "object");
assert(typeof TargetHealth$ === "object");
assert(typeof TargetHealthDescription$ === "object");
assert(typeof TrustStore$ === "object");
assert(typeof TrustStoreAssociation$ === "object");
assert(typeof TrustStoreRevocation$ === "object");
assert(typeof UrlRewriteConfig$ === "object");
assert(typeof ZonalCapacityReservationState$ === "object");
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
assert(typeof AllocationIdNotFoundException$ === "object");
assert(ALPNPolicyNotSupportedException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof ALPNPolicyNotSupportedException$ === "object");
assert(AvailabilityZoneNotSupportedException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof AvailabilityZoneNotSupportedException$ === "object");
assert(CaCertificatesBundleNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof CaCertificatesBundleNotFoundException$ === "object");
assert(CapacityDecreaseRequestsLimitExceededException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof CapacityDecreaseRequestsLimitExceededException$ === "object");
assert(CapacityReservationPendingException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof CapacityReservationPendingException$ === "object");
assert(CapacityUnitsLimitExceededException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof CapacityUnitsLimitExceededException$ === "object");
assert(CertificateNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof CertificateNotFoundException$ === "object");
assert(DeleteAssociationSameAccountException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof DeleteAssociationSameAccountException$ === "object");
assert(DuplicateListenerException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof DuplicateListenerException$ === "object");
assert(DuplicateLoadBalancerNameException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof DuplicateLoadBalancerNameException$ === "object");
assert(DuplicateTagKeysException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof DuplicateTagKeysException$ === "object");
assert(DuplicateTargetGroupNameException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof DuplicateTargetGroupNameException$ === "object");
assert(DuplicateTrustStoreNameException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof DuplicateTrustStoreNameException$ === "object");
assert(HealthUnavailableException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof HealthUnavailableException$ === "object");
assert(IncompatibleProtocolsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof IncompatibleProtocolsException$ === "object");
assert(InsufficientCapacityException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InsufficientCapacityException$ === "object");
assert(InvalidCaCertificatesBundleException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidCaCertificatesBundleException$ === "object");
assert(InvalidConfigurationRequestException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidConfigurationRequestException$ === "object");
assert(InvalidLoadBalancerActionException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidLoadBalancerActionException$ === "object");
assert(InvalidRevocationContentException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidRevocationContentException$ === "object");
assert(InvalidSchemeException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidSchemeException$ === "object");
assert(InvalidSecurityGroupException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidSecurityGroupException$ === "object");
assert(InvalidSubnetException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidSubnetException$ === "object");
assert(InvalidTargetException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof InvalidTargetException$ === "object");
assert(ListenerNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof ListenerNotFoundException$ === "object");
assert(LoadBalancerNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof LoadBalancerNotFoundException$ === "object");
assert(OperationNotPermittedException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(PriorityInUseException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof PriorityInUseException$ === "object");
assert(PriorRequestNotCompleteException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof PriorRequestNotCompleteException$ === "object");
assert(ResourceInUseException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(RevocationContentNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof RevocationContentNotFoundException$ === "object");
assert(RevocationIdNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof RevocationIdNotFoundException$ === "object");
assert(RuleNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof RuleNotFoundException$ === "object");
assert(SSLPolicyNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof SSLPolicyNotFoundException$ === "object");
assert(SubnetNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof SubnetNotFoundException$ === "object");
assert(TargetGroupAssociationLimitException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TargetGroupAssociationLimitException$ === "object");
assert(TargetGroupNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TargetGroupNotFoundException$ === "object");
assert(TooManyActionsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyActionsException$ === "object");
assert(TooManyCertificatesException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyCertificatesException$ === "object");
assert(TooManyListenersException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyListenersException$ === "object");
assert(TooManyLoadBalancersException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyLoadBalancersException$ === "object");
assert(TooManyRegistrationsForTargetIdException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyRegistrationsForTargetIdException$ === "object");
assert(TooManyRulesException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyRulesException$ === "object");
assert(TooManyTagsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(TooManyTargetGroupsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyTargetGroupsException$ === "object");
assert(TooManyTargetsException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyTargetsException$ === "object");
assert(TooManyTrustStoreRevocationEntriesException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyTrustStoreRevocationEntriesException$ === "object");
assert(TooManyTrustStoresException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyTrustStoresException$ === "object");
assert(TooManyUniqueTargetGroupsPerLoadBalancerException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TooManyUniqueTargetGroupsPerLoadBalancerException$ === "object");
assert(TrustStoreAssociationNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TrustStoreAssociationNotFoundException$ === "object");
assert(TrustStoreInUseException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TrustStoreInUseException$ === "object");
assert(TrustStoreNotFoundException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TrustStoreNotFoundException$ === "object");
assert(TrustStoreNotReadyException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof TrustStoreNotReadyException$ === "object");
assert(UnsupportedProtocolException.prototype instanceof ElasticLoadBalancingV2ServiceException);
assert(typeof UnsupportedProtocolException$ === "object");
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
