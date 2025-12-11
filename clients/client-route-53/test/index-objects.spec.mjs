import {
  AcceleratedRecoveryStatus,
  AccountLimitType,
  ActivateKeySigningKeyCommand,
  AssociateVPCWithHostedZoneCommand,
  ChangeAction,
  ChangeCidrCollectionCommand,
  ChangeResourceRecordSetsCommand,
  ChangeStatus,
  ChangeTagsForResourceCommand,
  CidrBlockInUseException,
  CidrCollectionAlreadyExistsException,
  CidrCollectionChangeAction,
  CidrCollectionInUseException,
  CidrCollectionVersionMismatchException,
  CloudWatchRegion,
  ComparisonOperator,
  ConcurrentModification,
  ConflictingDomainExists,
  ConflictingTypes,
  CreateCidrCollectionCommand,
  CreateHealthCheckCommand,
  CreateHostedZoneCommand,
  CreateKeySigningKeyCommand,
  CreateQueryLoggingConfigCommand,
  CreateReusableDelegationSetCommand,
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyInstanceCommand,
  CreateTrafficPolicyVersionCommand,
  CreateVPCAssociationAuthorizationCommand,
  DNSSECNotFound,
  DeactivateKeySigningKeyCommand,
  DelegationSetAlreadyCreated,
  DelegationSetAlreadyReusable,
  DelegationSetInUse,
  DelegationSetNotAvailable,
  DelegationSetNotReusable,
  DeleteCidrCollectionCommand,
  DeleteHealthCheckCommand,
  DeleteHostedZoneCommand,
  DeleteKeySigningKeyCommand,
  DeleteQueryLoggingConfigCommand,
  DeleteReusableDelegationSetCommand,
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyInstanceCommand,
  DeleteVPCAssociationAuthorizationCommand,
  DisableHostedZoneDNSSECCommand,
  DisassociateVPCFromHostedZoneCommand,
  EnableHostedZoneDNSSECCommand,
  GetAccountLimitCommand,
  GetChangeCommand,
  GetCheckerIpRangesCommand,
  GetDNSSECCommand,
  GetGeoLocationCommand,
  GetHealthCheckCommand,
  GetHealthCheckCountCommand,
  GetHealthCheckLastFailureReasonCommand,
  GetHealthCheckStatusCommand,
  GetHostedZoneCommand,
  GetHostedZoneCountCommand,
  GetHostedZoneLimitCommand,
  GetQueryLoggingConfigCommand,
  GetReusableDelegationSetCommand,
  GetReusableDelegationSetLimitCommand,
  GetTrafficPolicyCommand,
  GetTrafficPolicyInstanceCommand,
  GetTrafficPolicyInstanceCountCommand,
  HealthCheckAlreadyExists,
  HealthCheckInUse,
  HealthCheckRegion,
  HealthCheckType,
  HealthCheckVersionMismatch,
  HostedZoneAlreadyExists,
  HostedZoneLimitType,
  HostedZoneNotEmpty,
  HostedZoneNotFound,
  HostedZoneNotPrivate,
  HostedZonePartiallyDelegated,
  HostedZoneType,
  IncompatibleVersion,
  InsufficientCloudWatchLogsResourcePolicy,
  InsufficientDataHealthStatus,
  InvalidArgument,
  InvalidChangeBatch,
  InvalidDomainName,
  InvalidInput,
  InvalidKMSArn,
  InvalidKeySigningKeyName,
  InvalidKeySigningKeyStatus,
  InvalidPaginationToken,
  InvalidSigningStatus,
  InvalidTrafficPolicyDocument,
  InvalidVPCId,
  KeySigningKeyAlreadyExists,
  KeySigningKeyInParentDSRecord,
  KeySigningKeyInUse,
  KeySigningKeyWithActiveStatusNotFound,
  LastVPCAssociation,
  LimitsExceeded,
  ListCidrBlocksCommand,
  ListCidrCollectionsCommand,
  ListCidrLocationsCommand,
  ListGeoLocationsCommand,
  ListHealthChecksCommand,
  ListHostedZonesByNameCommand,
  ListHostedZonesByVPCCommand,
  ListHostedZonesCommand,
  ListQueryLoggingConfigsCommand,
  ListResourceRecordSetsCommand,
  ListReusableDelegationSetsCommand,
  ListTagsForResourceCommand,
  ListTagsForResourcesCommand,
  ListTrafficPoliciesCommand,
  ListTrafficPolicyInstancesByHostedZoneCommand,
  ListTrafficPolicyInstancesByPolicyCommand,
  ListTrafficPolicyInstancesCommand,
  ListTrafficPolicyVersionsCommand,
  ListVPCAssociationAuthorizationsCommand,
  NoSuchChange,
  NoSuchCidrCollectionException,
  NoSuchCidrLocationException,
  NoSuchCloudWatchLogsLogGroup,
  NoSuchDelegationSet,
  NoSuchGeoLocation,
  NoSuchHealthCheck,
  NoSuchHostedZone,
  NoSuchKeySigningKey,
  NoSuchQueryLoggingConfig,
  NoSuchTrafficPolicy,
  NoSuchTrafficPolicyInstance,
  NotAuthorizedException,
  PriorRequestNotComplete,
  PublicZoneVPCAssociation,
  QueryLoggingConfigAlreadyExists,
  RRType,
  ResettableElementName,
  ResourceRecordSetFailover,
  ResourceRecordSetRegion,
  ReusableDelegationSetLimitType,
  Route53,
  Route53Client,
  Route53ServiceException,
  Statistic,
  TagResourceType,
  TestDNSAnswerCommand,
  ThrottlingException,
  TooManyHealthChecks,
  TooManyHostedZones,
  TooManyKeySigningKeys,
  TooManyTrafficPolicies,
  TooManyTrafficPolicyInstances,
  TooManyTrafficPolicyVersionsForCurrentPolicy,
  TooManyVPCAssociationAuthorizations,
  TrafficPolicyAlreadyExists,
  TrafficPolicyInUse,
  TrafficPolicyInstanceAlreadyExists,
  UpdateHealthCheckCommand,
  UpdateHostedZoneCommentCommand,
  UpdateHostedZoneFeaturesCommand,
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyInstanceCommand,
  VPCAssociationAuthorizationNotFound,
  VPCAssociationNotFound,
  VPCRegion,
  paginateListCidrBlocks,
  paginateListCidrCollections,
  paginateListCidrLocations,
  paginateListHealthChecks,
  paginateListHostedZones,
  paginateListQueryLoggingConfigs,
  waitForResourceRecordSetsChanged,
  waitUntilResourceRecordSetsChanged,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53Client === "function");
assert(typeof Route53 === "function");
// commands
assert(typeof ActivateKeySigningKeyCommand === "function");
assert(typeof AssociateVPCWithHostedZoneCommand === "function");
assert(typeof ChangeCidrCollectionCommand === "function");
assert(typeof ChangeResourceRecordSetsCommand === "function");
assert(typeof ChangeTagsForResourceCommand === "function");
assert(typeof CreateCidrCollectionCommand === "function");
assert(typeof CreateHealthCheckCommand === "function");
assert(typeof CreateHostedZoneCommand === "function");
assert(typeof CreateKeySigningKeyCommand === "function");
assert(typeof CreateQueryLoggingConfigCommand === "function");
assert(typeof CreateReusableDelegationSetCommand === "function");
assert(typeof CreateTrafficPolicyCommand === "function");
assert(typeof CreateTrafficPolicyInstanceCommand === "function");
assert(typeof CreateTrafficPolicyVersionCommand === "function");
assert(typeof CreateVPCAssociationAuthorizationCommand === "function");
assert(typeof DeactivateKeySigningKeyCommand === "function");
assert(typeof DeleteCidrCollectionCommand === "function");
assert(typeof DeleteHealthCheckCommand === "function");
assert(typeof DeleteHostedZoneCommand === "function");
assert(typeof DeleteKeySigningKeyCommand === "function");
assert(typeof DeleteQueryLoggingConfigCommand === "function");
assert(typeof DeleteReusableDelegationSetCommand === "function");
assert(typeof DeleteTrafficPolicyCommand === "function");
assert(typeof DeleteTrafficPolicyInstanceCommand === "function");
assert(typeof DeleteVPCAssociationAuthorizationCommand === "function");
assert(typeof DisableHostedZoneDNSSECCommand === "function");
assert(typeof DisassociateVPCFromHostedZoneCommand === "function");
assert(typeof EnableHostedZoneDNSSECCommand === "function");
assert(typeof GetAccountLimitCommand === "function");
assert(typeof GetChangeCommand === "function");
assert(typeof GetCheckerIpRangesCommand === "function");
assert(typeof GetDNSSECCommand === "function");
assert(typeof GetGeoLocationCommand === "function");
assert(typeof GetHealthCheckCommand === "function");
assert(typeof GetHealthCheckCountCommand === "function");
assert(typeof GetHealthCheckLastFailureReasonCommand === "function");
assert(typeof GetHealthCheckStatusCommand === "function");
assert(typeof GetHostedZoneCommand === "function");
assert(typeof GetHostedZoneCountCommand === "function");
assert(typeof GetHostedZoneLimitCommand === "function");
assert(typeof GetQueryLoggingConfigCommand === "function");
assert(typeof GetReusableDelegationSetCommand === "function");
assert(typeof GetReusableDelegationSetLimitCommand === "function");
assert(typeof GetTrafficPolicyCommand === "function");
assert(typeof GetTrafficPolicyInstanceCommand === "function");
assert(typeof GetTrafficPolicyInstanceCountCommand === "function");
assert(typeof ListCidrBlocksCommand === "function");
assert(typeof ListCidrCollectionsCommand === "function");
assert(typeof ListCidrLocationsCommand === "function");
assert(typeof ListGeoLocationsCommand === "function");
assert(typeof ListHealthChecksCommand === "function");
assert(typeof ListHostedZonesCommand === "function");
assert(typeof ListHostedZonesByNameCommand === "function");
assert(typeof ListHostedZonesByVPCCommand === "function");
assert(typeof ListQueryLoggingConfigsCommand === "function");
assert(typeof ListResourceRecordSetsCommand === "function");
assert(typeof ListReusableDelegationSetsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResourcesCommand === "function");
assert(typeof ListTrafficPoliciesCommand === "function");
assert(typeof ListTrafficPolicyInstancesCommand === "function");
assert(typeof ListTrafficPolicyInstancesByHostedZoneCommand === "function");
assert(typeof ListTrafficPolicyInstancesByPolicyCommand === "function");
assert(typeof ListTrafficPolicyVersionsCommand === "function");
assert(typeof ListVPCAssociationAuthorizationsCommand === "function");
assert(typeof TestDNSAnswerCommand === "function");
assert(typeof UpdateHealthCheckCommand === "function");
assert(typeof UpdateHostedZoneCommentCommand === "function");
assert(typeof UpdateHostedZoneFeaturesCommand === "function");
assert(typeof UpdateTrafficPolicyCommentCommand === "function");
assert(typeof UpdateTrafficPolicyInstanceCommand === "function");
// enums
assert(typeof AcceleratedRecoveryStatus === "object");
assert(typeof AccountLimitType === "object");
assert(typeof ChangeAction === "object");
assert(typeof ChangeStatus === "object");
assert(typeof CidrCollectionChangeAction === "object");
assert(typeof CloudWatchRegion === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof HealthCheckRegion === "object");
assert(typeof HealthCheckType === "object");
assert(typeof HostedZoneLimitType === "object");
assert(typeof HostedZoneType === "object");
assert(typeof InsufficientDataHealthStatus === "object");
assert(typeof ResettableElementName === "object");
assert(typeof ResourceRecordSetFailover === "object");
assert(typeof ResourceRecordSetRegion === "object");
assert(typeof ReusableDelegationSetLimitType === "object");
assert(typeof RRType === "object");
assert(typeof Statistic === "object");
assert(typeof TagResourceType === "object");
assert(typeof VPCRegion === "object");
// errors
assert(CidrBlockInUseException.prototype instanceof Route53ServiceException);
assert(CidrCollectionAlreadyExistsException.prototype instanceof Route53ServiceException);
assert(CidrCollectionInUseException.prototype instanceof Route53ServiceException);
assert(CidrCollectionVersionMismatchException.prototype instanceof Route53ServiceException);
assert(ConcurrentModification.prototype instanceof Route53ServiceException);
assert(ConflictingDomainExists.prototype instanceof Route53ServiceException);
assert(ConflictingTypes.prototype instanceof Route53ServiceException);
assert(DelegationSetAlreadyCreated.prototype instanceof Route53ServiceException);
assert(DelegationSetAlreadyReusable.prototype instanceof Route53ServiceException);
assert(DelegationSetInUse.prototype instanceof Route53ServiceException);
assert(DelegationSetNotAvailable.prototype instanceof Route53ServiceException);
assert(DelegationSetNotReusable.prototype instanceof Route53ServiceException);
assert(DNSSECNotFound.prototype instanceof Route53ServiceException);
assert(HealthCheckAlreadyExists.prototype instanceof Route53ServiceException);
assert(HealthCheckInUse.prototype instanceof Route53ServiceException);
assert(HealthCheckVersionMismatch.prototype instanceof Route53ServiceException);
assert(HostedZoneAlreadyExists.prototype instanceof Route53ServiceException);
assert(HostedZoneNotEmpty.prototype instanceof Route53ServiceException);
assert(HostedZoneNotFound.prototype instanceof Route53ServiceException);
assert(HostedZoneNotPrivate.prototype instanceof Route53ServiceException);
assert(HostedZonePartiallyDelegated.prototype instanceof Route53ServiceException);
assert(IncompatibleVersion.prototype instanceof Route53ServiceException);
assert(InsufficientCloudWatchLogsResourcePolicy.prototype instanceof Route53ServiceException);
assert(InvalidArgument.prototype instanceof Route53ServiceException);
assert(InvalidChangeBatch.prototype instanceof Route53ServiceException);
assert(InvalidDomainName.prototype instanceof Route53ServiceException);
assert(InvalidInput.prototype instanceof Route53ServiceException);
assert(InvalidKeySigningKeyName.prototype instanceof Route53ServiceException);
assert(InvalidKeySigningKeyStatus.prototype instanceof Route53ServiceException);
assert(InvalidKMSArn.prototype instanceof Route53ServiceException);
assert(InvalidPaginationToken.prototype instanceof Route53ServiceException);
assert(InvalidSigningStatus.prototype instanceof Route53ServiceException);
assert(InvalidTrafficPolicyDocument.prototype instanceof Route53ServiceException);
assert(InvalidVPCId.prototype instanceof Route53ServiceException);
assert(KeySigningKeyAlreadyExists.prototype instanceof Route53ServiceException);
assert(KeySigningKeyInParentDSRecord.prototype instanceof Route53ServiceException);
assert(KeySigningKeyInUse.prototype instanceof Route53ServiceException);
assert(KeySigningKeyWithActiveStatusNotFound.prototype instanceof Route53ServiceException);
assert(LastVPCAssociation.prototype instanceof Route53ServiceException);
assert(LimitsExceeded.prototype instanceof Route53ServiceException);
assert(NoSuchChange.prototype instanceof Route53ServiceException);
assert(NoSuchCidrCollectionException.prototype instanceof Route53ServiceException);
assert(NoSuchCidrLocationException.prototype instanceof Route53ServiceException);
assert(NoSuchCloudWatchLogsLogGroup.prototype instanceof Route53ServiceException);
assert(NoSuchDelegationSet.prototype instanceof Route53ServiceException);
assert(NoSuchGeoLocation.prototype instanceof Route53ServiceException);
assert(NoSuchHealthCheck.prototype instanceof Route53ServiceException);
assert(NoSuchHostedZone.prototype instanceof Route53ServiceException);
assert(NoSuchKeySigningKey.prototype instanceof Route53ServiceException);
assert(NoSuchQueryLoggingConfig.prototype instanceof Route53ServiceException);
assert(NoSuchTrafficPolicy.prototype instanceof Route53ServiceException);
assert(NoSuchTrafficPolicyInstance.prototype instanceof Route53ServiceException);
assert(NotAuthorizedException.prototype instanceof Route53ServiceException);
assert(PriorRequestNotComplete.prototype instanceof Route53ServiceException);
assert(PublicZoneVPCAssociation.prototype instanceof Route53ServiceException);
assert(QueryLoggingConfigAlreadyExists.prototype instanceof Route53ServiceException);
assert(ThrottlingException.prototype instanceof Route53ServiceException);
assert(TooManyHealthChecks.prototype instanceof Route53ServiceException);
assert(TooManyHostedZones.prototype instanceof Route53ServiceException);
assert(TooManyKeySigningKeys.prototype instanceof Route53ServiceException);
assert(TooManyTrafficPolicies.prototype instanceof Route53ServiceException);
assert(TooManyTrafficPolicyInstances.prototype instanceof Route53ServiceException);
assert(TooManyTrafficPolicyVersionsForCurrentPolicy.prototype instanceof Route53ServiceException);
assert(TooManyVPCAssociationAuthorizations.prototype instanceof Route53ServiceException);
assert(TrafficPolicyAlreadyExists.prototype instanceof Route53ServiceException);
assert(TrafficPolicyInstanceAlreadyExists.prototype instanceof Route53ServiceException);
assert(TrafficPolicyInUse.prototype instanceof Route53ServiceException);
assert(VPCAssociationAuthorizationNotFound.prototype instanceof Route53ServiceException);
assert(VPCAssociationNotFound.prototype instanceof Route53ServiceException);
assert(Route53ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForResourceRecordSetsChanged === "function");
assert(typeof waitUntilResourceRecordSetsChanged === "function");
// paginators
assert(typeof paginateListCidrBlocks === "function");
assert(typeof paginateListCidrCollections === "function");
assert(typeof paginateListCidrLocations === "function");
assert(typeof paginateListHealthChecks === "function");
assert(typeof paginateListHostedZones === "function");
assert(typeof paginateListQueryLoggingConfigs === "function");
console.log(`Route53 index test passed.`);
