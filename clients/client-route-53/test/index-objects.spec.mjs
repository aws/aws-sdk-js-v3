import {
  AcceleratedRecoveryStatus,
  AccountLimit$,
  AccountLimitType,
  ActivateKeySigningKey$,
  ActivateKeySigningKeyCommand,
  ActivateKeySigningKeyRequest$,
  ActivateKeySigningKeyResponse$,
  AlarmIdentifier$,
  AliasTarget$,
  AssociateVPCWithHostedZone$,
  AssociateVPCWithHostedZoneCommand,
  AssociateVPCWithHostedZoneRequest$,
  AssociateVPCWithHostedZoneResponse$,
  Change$,
  ChangeAction,
  ChangeBatch$,
  ChangeCidrCollection$,
  ChangeCidrCollectionCommand,
  ChangeCidrCollectionRequest$,
  ChangeCidrCollectionResponse$,
  ChangeInfo$,
  ChangeResourceRecordSets$,
  ChangeResourceRecordSetsCommand,
  ChangeResourceRecordSetsRequest$,
  ChangeResourceRecordSetsResponse$,
  ChangeStatus,
  ChangeTagsForResource$,
  ChangeTagsForResourceCommand,
  ChangeTagsForResourceRequest$,
  ChangeTagsForResourceResponse$,
  CidrBlockInUseException,
  CidrBlockInUseException$,
  CidrBlockSummary$,
  CidrCollection$,
  CidrCollectionAlreadyExistsException,
  CidrCollectionAlreadyExistsException$,
  CidrCollectionChange$,
  CidrCollectionChangeAction,
  CidrCollectionInUseException,
  CidrCollectionInUseException$,
  CidrCollectionVersionMismatchException,
  CidrCollectionVersionMismatchException$,
  CidrRoutingConfig$,
  CloudWatchAlarmConfiguration$,
  CloudWatchRegion,
  CollectionSummary$,
  ComparisonOperator,
  ConcurrentModification,
  ConcurrentModification$,
  ConflictingDomainExists,
  ConflictingDomainExists$,
  ConflictingTypes,
  ConflictingTypes$,
  Coordinates$,
  CreateCidrCollection$,
  CreateCidrCollectionCommand,
  CreateCidrCollectionRequest$,
  CreateCidrCollectionResponse$,
  CreateHealthCheck$,
  CreateHealthCheckCommand,
  CreateHealthCheckRequest$,
  CreateHealthCheckResponse$,
  CreateHostedZone$,
  CreateHostedZoneCommand,
  CreateHostedZoneRequest$,
  CreateHostedZoneResponse$,
  CreateKeySigningKey$,
  CreateKeySigningKeyCommand,
  CreateKeySigningKeyRequest$,
  CreateKeySigningKeyResponse$,
  CreateQueryLoggingConfig$,
  CreateQueryLoggingConfigCommand,
  CreateQueryLoggingConfigRequest$,
  CreateQueryLoggingConfigResponse$,
  CreateReusableDelegationSet$,
  CreateReusableDelegationSetCommand,
  CreateReusableDelegationSetRequest$,
  CreateReusableDelegationSetResponse$,
  CreateTrafficPolicy$,
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyInstance$,
  CreateTrafficPolicyInstanceCommand,
  CreateTrafficPolicyInstanceRequest$,
  CreateTrafficPolicyInstanceResponse$,
  CreateTrafficPolicyRequest$,
  CreateTrafficPolicyResponse$,
  CreateTrafficPolicyVersion$,
  CreateTrafficPolicyVersionCommand,
  CreateTrafficPolicyVersionRequest$,
  CreateTrafficPolicyVersionResponse$,
  CreateVPCAssociationAuthorization$,
  CreateVPCAssociationAuthorizationCommand,
  CreateVPCAssociationAuthorizationRequest$,
  CreateVPCAssociationAuthorizationResponse$,
  DNSSECNotFound,
  DNSSECNotFound$,
  DNSSECStatus$,
  DeactivateKeySigningKey$,
  DeactivateKeySigningKeyCommand,
  DeactivateKeySigningKeyRequest$,
  DeactivateKeySigningKeyResponse$,
  DelegationSet$,
  DelegationSetAlreadyCreated,
  DelegationSetAlreadyCreated$,
  DelegationSetAlreadyReusable,
  DelegationSetAlreadyReusable$,
  DelegationSetInUse,
  DelegationSetInUse$,
  DelegationSetNotAvailable,
  DelegationSetNotAvailable$,
  DelegationSetNotReusable,
  DelegationSetNotReusable$,
  DeleteCidrCollection$,
  DeleteCidrCollectionCommand,
  DeleteCidrCollectionRequest$,
  DeleteCidrCollectionResponse$,
  DeleteHealthCheck$,
  DeleteHealthCheckCommand,
  DeleteHealthCheckRequest$,
  DeleteHealthCheckResponse$,
  DeleteHostedZone$,
  DeleteHostedZoneCommand,
  DeleteHostedZoneRequest$,
  DeleteHostedZoneResponse$,
  DeleteKeySigningKey$,
  DeleteKeySigningKeyCommand,
  DeleteKeySigningKeyRequest$,
  DeleteKeySigningKeyResponse$,
  DeleteQueryLoggingConfig$,
  DeleteQueryLoggingConfigCommand,
  DeleteQueryLoggingConfigRequest$,
  DeleteQueryLoggingConfigResponse$,
  DeleteReusableDelegationSet$,
  DeleteReusableDelegationSetCommand,
  DeleteReusableDelegationSetRequest$,
  DeleteReusableDelegationSetResponse$,
  DeleteTrafficPolicy$,
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyInstance$,
  DeleteTrafficPolicyInstanceCommand,
  DeleteTrafficPolicyInstanceRequest$,
  DeleteTrafficPolicyInstanceResponse$,
  DeleteTrafficPolicyRequest$,
  DeleteTrafficPolicyResponse$,
  DeleteVPCAssociationAuthorization$,
  DeleteVPCAssociationAuthorizationCommand,
  DeleteVPCAssociationAuthorizationRequest$,
  DeleteVPCAssociationAuthorizationResponse$,
  Dimension$,
  DisableHostedZoneDNSSEC$,
  DisableHostedZoneDNSSECCommand,
  DisableHostedZoneDNSSECRequest$,
  DisableHostedZoneDNSSECResponse$,
  DisassociateVPCFromHostedZone$,
  DisassociateVPCFromHostedZoneCommand,
  DisassociateVPCFromHostedZoneRequest$,
  DisassociateVPCFromHostedZoneResponse$,
  EnableHostedZoneDNSSEC$,
  EnableHostedZoneDNSSECCommand,
  EnableHostedZoneDNSSECRequest$,
  EnableHostedZoneDNSSECResponse$,
  GeoLocation$,
  GeoLocationDetails$,
  GeoProximityLocation$,
  GetAccountLimit$,
  GetAccountLimitCommand,
  GetAccountLimitRequest$,
  GetAccountLimitResponse$,
  GetChange$,
  GetChangeCommand,
  GetChangeRequest$,
  GetChangeResponse$,
  GetCheckerIpRanges$,
  GetCheckerIpRangesCommand,
  GetCheckerIpRangesRequest$,
  GetCheckerIpRangesResponse$,
  GetDNSSEC$,
  GetDNSSECCommand,
  GetDNSSECRequest$,
  GetDNSSECResponse$,
  GetGeoLocation$,
  GetGeoLocationCommand,
  GetGeoLocationRequest$,
  GetGeoLocationResponse$,
  GetHealthCheck$,
  GetHealthCheckCommand,
  GetHealthCheckCount$,
  GetHealthCheckCountCommand,
  GetHealthCheckCountRequest$,
  GetHealthCheckCountResponse$,
  GetHealthCheckLastFailureReason$,
  GetHealthCheckLastFailureReasonCommand,
  GetHealthCheckLastFailureReasonRequest$,
  GetHealthCheckLastFailureReasonResponse$,
  GetHealthCheckRequest$,
  GetHealthCheckResponse$,
  GetHealthCheckStatus$,
  GetHealthCheckStatusCommand,
  GetHealthCheckStatusRequest$,
  GetHealthCheckStatusResponse$,
  GetHostedZone$,
  GetHostedZoneCommand,
  GetHostedZoneCount$,
  GetHostedZoneCountCommand,
  GetHostedZoneCountRequest$,
  GetHostedZoneCountResponse$,
  GetHostedZoneLimit$,
  GetHostedZoneLimitCommand,
  GetHostedZoneLimitRequest$,
  GetHostedZoneLimitResponse$,
  GetHostedZoneRequest$,
  GetHostedZoneResponse$,
  GetQueryLoggingConfig$,
  GetQueryLoggingConfigCommand,
  GetQueryLoggingConfigRequest$,
  GetQueryLoggingConfigResponse$,
  GetReusableDelegationSet$,
  GetReusableDelegationSetCommand,
  GetReusableDelegationSetLimit$,
  GetReusableDelegationSetLimitCommand,
  GetReusableDelegationSetLimitRequest$,
  GetReusableDelegationSetLimitResponse$,
  GetReusableDelegationSetRequest$,
  GetReusableDelegationSetResponse$,
  GetTrafficPolicy$,
  GetTrafficPolicyCommand,
  GetTrafficPolicyInstance$,
  GetTrafficPolicyInstanceCommand,
  GetTrafficPolicyInstanceCount$,
  GetTrafficPolicyInstanceCountCommand,
  GetTrafficPolicyInstanceCountRequest$,
  GetTrafficPolicyInstanceCountResponse$,
  GetTrafficPolicyInstanceRequest$,
  GetTrafficPolicyInstanceResponse$,
  GetTrafficPolicyRequest$,
  GetTrafficPolicyResponse$,
  HealthCheck$,
  HealthCheckAlreadyExists,
  HealthCheckAlreadyExists$,
  HealthCheckConfig$,
  HealthCheckInUse,
  HealthCheckInUse$,
  HealthCheckObservation$,
  HealthCheckRegion,
  HealthCheckType,
  HealthCheckVersionMismatch,
  HealthCheckVersionMismatch$,
  HostedZone$,
  HostedZoneAlreadyExists,
  HostedZoneAlreadyExists$,
  HostedZoneConfig$,
  HostedZoneFailureReasons$,
  HostedZoneFeatures$,
  HostedZoneLimit$,
  HostedZoneLimitType,
  HostedZoneNotEmpty,
  HostedZoneNotEmpty$,
  HostedZoneNotFound,
  HostedZoneNotFound$,
  HostedZoneNotPrivate,
  HostedZoneNotPrivate$,
  HostedZoneOwner$,
  HostedZonePartiallyDelegated,
  HostedZonePartiallyDelegated$,
  HostedZoneSummary$,
  HostedZoneType,
  IncompatibleVersion,
  IncompatibleVersion$,
  InsufficientCloudWatchLogsResourcePolicy,
  InsufficientCloudWatchLogsResourcePolicy$,
  InsufficientDataHealthStatus,
  InvalidArgument,
  InvalidArgument$,
  InvalidChangeBatch,
  InvalidChangeBatch$,
  InvalidDomainName,
  InvalidDomainName$,
  InvalidInput,
  InvalidInput$,
  InvalidKMSArn,
  InvalidKMSArn$,
  InvalidKeySigningKeyName,
  InvalidKeySigningKeyName$,
  InvalidKeySigningKeyStatus,
  InvalidKeySigningKeyStatus$,
  InvalidPaginationToken,
  InvalidPaginationToken$,
  InvalidSigningStatus,
  InvalidSigningStatus$,
  InvalidTrafficPolicyDocument,
  InvalidTrafficPolicyDocument$,
  InvalidVPCId,
  InvalidVPCId$,
  KeySigningKey$,
  KeySigningKeyAlreadyExists,
  KeySigningKeyAlreadyExists$,
  KeySigningKeyInParentDSRecord,
  KeySigningKeyInParentDSRecord$,
  KeySigningKeyInUse,
  KeySigningKeyInUse$,
  KeySigningKeyWithActiveStatusNotFound,
  KeySigningKeyWithActiveStatusNotFound$,
  LastVPCAssociation,
  LastVPCAssociation$,
  LimitsExceeded,
  LimitsExceeded$,
  LinkedService$,
  ListCidrBlocks$,
  ListCidrBlocksCommand,
  ListCidrBlocksRequest$,
  ListCidrBlocksResponse$,
  ListCidrCollections$,
  ListCidrCollectionsCommand,
  ListCidrCollectionsRequest$,
  ListCidrCollectionsResponse$,
  ListCidrLocations$,
  ListCidrLocationsCommand,
  ListCidrLocationsRequest$,
  ListCidrLocationsResponse$,
  ListGeoLocations$,
  ListGeoLocationsCommand,
  ListGeoLocationsRequest$,
  ListGeoLocationsResponse$,
  ListHealthChecks$,
  ListHealthChecksCommand,
  ListHealthChecksRequest$,
  ListHealthChecksResponse$,
  ListHostedZones$,
  ListHostedZonesByName$,
  ListHostedZonesByNameCommand,
  ListHostedZonesByNameRequest$,
  ListHostedZonesByNameResponse$,
  ListHostedZonesByVPC$,
  ListHostedZonesByVPCCommand,
  ListHostedZonesByVPCRequest$,
  ListHostedZonesByVPCResponse$,
  ListHostedZonesCommand,
  ListHostedZonesRequest$,
  ListHostedZonesResponse$,
  ListQueryLoggingConfigs$,
  ListQueryLoggingConfigsCommand,
  ListQueryLoggingConfigsRequest$,
  ListQueryLoggingConfigsResponse$,
  ListResourceRecordSets$,
  ListResourceRecordSetsCommand,
  ListResourceRecordSetsRequest$,
  ListResourceRecordSetsResponse$,
  ListReusableDelegationSets$,
  ListReusableDelegationSetsCommand,
  ListReusableDelegationSetsRequest$,
  ListReusableDelegationSetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTagsForResources$,
  ListTagsForResourcesCommand,
  ListTagsForResourcesRequest$,
  ListTagsForResourcesResponse$,
  ListTrafficPolicies$,
  ListTrafficPoliciesCommand,
  ListTrafficPoliciesRequest$,
  ListTrafficPoliciesResponse$,
  ListTrafficPolicyInstances$,
  ListTrafficPolicyInstancesByHostedZone$,
  ListTrafficPolicyInstancesByHostedZoneCommand,
  ListTrafficPolicyInstancesByHostedZoneRequest$,
  ListTrafficPolicyInstancesByHostedZoneResponse$,
  ListTrafficPolicyInstancesByPolicy$,
  ListTrafficPolicyInstancesByPolicyCommand,
  ListTrafficPolicyInstancesByPolicyRequest$,
  ListTrafficPolicyInstancesByPolicyResponse$,
  ListTrafficPolicyInstancesCommand,
  ListTrafficPolicyInstancesRequest$,
  ListTrafficPolicyInstancesResponse$,
  ListTrafficPolicyVersions$,
  ListTrafficPolicyVersionsCommand,
  ListTrafficPolicyVersionsRequest$,
  ListTrafficPolicyVersionsResponse$,
  ListVPCAssociationAuthorizations$,
  ListVPCAssociationAuthorizationsCommand,
  ListVPCAssociationAuthorizationsRequest$,
  ListVPCAssociationAuthorizationsResponse$,
  LocationSummary$,
  NoSuchChange,
  NoSuchChange$,
  NoSuchCidrCollectionException,
  NoSuchCidrCollectionException$,
  NoSuchCidrLocationException,
  NoSuchCidrLocationException$,
  NoSuchCloudWatchLogsLogGroup,
  NoSuchCloudWatchLogsLogGroup$,
  NoSuchDelegationSet,
  NoSuchDelegationSet$,
  NoSuchGeoLocation,
  NoSuchGeoLocation$,
  NoSuchHealthCheck,
  NoSuchHealthCheck$,
  NoSuchHostedZone,
  NoSuchHostedZone$,
  NoSuchKeySigningKey,
  NoSuchKeySigningKey$,
  NoSuchQueryLoggingConfig,
  NoSuchQueryLoggingConfig$,
  NoSuchTrafficPolicy,
  NoSuchTrafficPolicy$,
  NoSuchTrafficPolicyInstance,
  NoSuchTrafficPolicyInstance$,
  NotAuthorizedException,
  NotAuthorizedException$,
  PriorRequestNotComplete,
  PriorRequestNotComplete$,
  PublicZoneVPCAssociation,
  PublicZoneVPCAssociation$,
  QueryLoggingConfig$,
  QueryLoggingConfigAlreadyExists,
  QueryLoggingConfigAlreadyExists$,
  RRType,
  ResettableElementName,
  ResourceRecord$,
  ResourceRecordSet$,
  ResourceRecordSetFailover,
  ResourceRecordSetRegion,
  ResourceTagSet$,
  ReusableDelegationSetLimit$,
  ReusableDelegationSetLimitType,
  Route53,
  Route53Client,
  Route53ServiceException,
  Statistic,
  StatusReport$,
  Tag$,
  TagResourceType,
  TestDNSAnswer$,
  TestDNSAnswerCommand,
  TestDNSAnswerRequest$,
  TestDNSAnswerResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyHealthChecks,
  TooManyHealthChecks$,
  TooManyHostedZones,
  TooManyHostedZones$,
  TooManyKeySigningKeys,
  TooManyKeySigningKeys$,
  TooManyTrafficPolicies,
  TooManyTrafficPolicies$,
  TooManyTrafficPolicyInstances,
  TooManyTrafficPolicyInstances$,
  TooManyTrafficPolicyVersionsForCurrentPolicy,
  TooManyTrafficPolicyVersionsForCurrentPolicy$,
  TooManyVPCAssociationAuthorizations,
  TooManyVPCAssociationAuthorizations$,
  TrafficPolicy$,
  TrafficPolicyAlreadyExists,
  TrafficPolicyAlreadyExists$,
  TrafficPolicyInUse,
  TrafficPolicyInUse$,
  TrafficPolicyInstance$,
  TrafficPolicyInstanceAlreadyExists,
  TrafficPolicyInstanceAlreadyExists$,
  TrafficPolicySummary$,
  UpdateHealthCheck$,
  UpdateHealthCheckCommand,
  UpdateHealthCheckRequest$,
  UpdateHealthCheckResponse$,
  UpdateHostedZoneComment$,
  UpdateHostedZoneCommentCommand,
  UpdateHostedZoneCommentRequest$,
  UpdateHostedZoneCommentResponse$,
  UpdateHostedZoneFeatures$,
  UpdateHostedZoneFeaturesCommand,
  UpdateHostedZoneFeaturesRequest$,
  UpdateHostedZoneFeaturesResponse$,
  UpdateTrafficPolicyComment$,
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyCommentRequest$,
  UpdateTrafficPolicyCommentResponse$,
  UpdateTrafficPolicyInstance$,
  UpdateTrafficPolicyInstanceCommand,
  UpdateTrafficPolicyInstanceRequest$,
  UpdateTrafficPolicyInstanceResponse$,
  VPC$,
  VPCAssociationAuthorizationNotFound,
  VPCAssociationAuthorizationNotFound$,
  VPCAssociationNotFound,
  VPCAssociationNotFound$,
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
assert(typeof ActivateKeySigningKey$ === "object");
assert(typeof AssociateVPCWithHostedZoneCommand === "function");
assert(typeof AssociateVPCWithHostedZone$ === "object");
assert(typeof ChangeCidrCollectionCommand === "function");
assert(typeof ChangeCidrCollection$ === "object");
assert(typeof ChangeResourceRecordSetsCommand === "function");
assert(typeof ChangeResourceRecordSets$ === "object");
assert(typeof ChangeTagsForResourceCommand === "function");
assert(typeof ChangeTagsForResource$ === "object");
assert(typeof CreateCidrCollectionCommand === "function");
assert(typeof CreateCidrCollection$ === "object");
assert(typeof CreateHealthCheckCommand === "function");
assert(typeof CreateHealthCheck$ === "object");
assert(typeof CreateHostedZoneCommand === "function");
assert(typeof CreateHostedZone$ === "object");
assert(typeof CreateKeySigningKeyCommand === "function");
assert(typeof CreateKeySigningKey$ === "object");
assert(typeof CreateQueryLoggingConfigCommand === "function");
assert(typeof CreateQueryLoggingConfig$ === "object");
assert(typeof CreateReusableDelegationSetCommand === "function");
assert(typeof CreateReusableDelegationSet$ === "object");
assert(typeof CreateTrafficPolicyCommand === "function");
assert(typeof CreateTrafficPolicy$ === "object");
assert(typeof CreateTrafficPolicyInstanceCommand === "function");
assert(typeof CreateTrafficPolicyInstance$ === "object");
assert(typeof CreateTrafficPolicyVersionCommand === "function");
assert(typeof CreateTrafficPolicyVersion$ === "object");
assert(typeof CreateVPCAssociationAuthorizationCommand === "function");
assert(typeof CreateVPCAssociationAuthorization$ === "object");
assert(typeof DeactivateKeySigningKeyCommand === "function");
assert(typeof DeactivateKeySigningKey$ === "object");
assert(typeof DeleteCidrCollectionCommand === "function");
assert(typeof DeleteCidrCollection$ === "object");
assert(typeof DeleteHealthCheckCommand === "function");
assert(typeof DeleteHealthCheck$ === "object");
assert(typeof DeleteHostedZoneCommand === "function");
assert(typeof DeleteHostedZone$ === "object");
assert(typeof DeleteKeySigningKeyCommand === "function");
assert(typeof DeleteKeySigningKey$ === "object");
assert(typeof DeleteQueryLoggingConfigCommand === "function");
assert(typeof DeleteQueryLoggingConfig$ === "object");
assert(typeof DeleteReusableDelegationSetCommand === "function");
assert(typeof DeleteReusableDelegationSet$ === "object");
assert(typeof DeleteTrafficPolicyCommand === "function");
assert(typeof DeleteTrafficPolicy$ === "object");
assert(typeof DeleteTrafficPolicyInstanceCommand === "function");
assert(typeof DeleteTrafficPolicyInstance$ === "object");
assert(typeof DeleteVPCAssociationAuthorizationCommand === "function");
assert(typeof DeleteVPCAssociationAuthorization$ === "object");
assert(typeof DisableHostedZoneDNSSECCommand === "function");
assert(typeof DisableHostedZoneDNSSEC$ === "object");
assert(typeof DisassociateVPCFromHostedZoneCommand === "function");
assert(typeof DisassociateVPCFromHostedZone$ === "object");
assert(typeof EnableHostedZoneDNSSECCommand === "function");
assert(typeof EnableHostedZoneDNSSEC$ === "object");
assert(typeof GetAccountLimitCommand === "function");
assert(typeof GetAccountLimit$ === "object");
assert(typeof GetChangeCommand === "function");
assert(typeof GetChange$ === "object");
assert(typeof GetCheckerIpRangesCommand === "function");
assert(typeof GetCheckerIpRanges$ === "object");
assert(typeof GetDNSSECCommand === "function");
assert(typeof GetDNSSEC$ === "object");
assert(typeof GetGeoLocationCommand === "function");
assert(typeof GetGeoLocation$ === "object");
assert(typeof GetHealthCheckCommand === "function");
assert(typeof GetHealthCheck$ === "object");
assert(typeof GetHealthCheckCountCommand === "function");
assert(typeof GetHealthCheckCount$ === "object");
assert(typeof GetHealthCheckLastFailureReasonCommand === "function");
assert(typeof GetHealthCheckLastFailureReason$ === "object");
assert(typeof GetHealthCheckStatusCommand === "function");
assert(typeof GetHealthCheckStatus$ === "object");
assert(typeof GetHostedZoneCommand === "function");
assert(typeof GetHostedZone$ === "object");
assert(typeof GetHostedZoneCountCommand === "function");
assert(typeof GetHostedZoneCount$ === "object");
assert(typeof GetHostedZoneLimitCommand === "function");
assert(typeof GetHostedZoneLimit$ === "object");
assert(typeof GetQueryLoggingConfigCommand === "function");
assert(typeof GetQueryLoggingConfig$ === "object");
assert(typeof GetReusableDelegationSetCommand === "function");
assert(typeof GetReusableDelegationSet$ === "object");
assert(typeof GetReusableDelegationSetLimitCommand === "function");
assert(typeof GetReusableDelegationSetLimit$ === "object");
assert(typeof GetTrafficPolicyCommand === "function");
assert(typeof GetTrafficPolicy$ === "object");
assert(typeof GetTrafficPolicyInstanceCommand === "function");
assert(typeof GetTrafficPolicyInstance$ === "object");
assert(typeof GetTrafficPolicyInstanceCountCommand === "function");
assert(typeof GetTrafficPolicyInstanceCount$ === "object");
assert(typeof ListCidrBlocksCommand === "function");
assert(typeof ListCidrBlocks$ === "object");
assert(typeof ListCidrCollectionsCommand === "function");
assert(typeof ListCidrCollections$ === "object");
assert(typeof ListCidrLocationsCommand === "function");
assert(typeof ListCidrLocations$ === "object");
assert(typeof ListGeoLocationsCommand === "function");
assert(typeof ListGeoLocations$ === "object");
assert(typeof ListHealthChecksCommand === "function");
assert(typeof ListHealthChecks$ === "object");
assert(typeof ListHostedZonesCommand === "function");
assert(typeof ListHostedZones$ === "object");
assert(typeof ListHostedZonesByNameCommand === "function");
assert(typeof ListHostedZonesByName$ === "object");
assert(typeof ListHostedZonesByVPCCommand === "function");
assert(typeof ListHostedZonesByVPC$ === "object");
assert(typeof ListQueryLoggingConfigsCommand === "function");
assert(typeof ListQueryLoggingConfigs$ === "object");
assert(typeof ListResourceRecordSetsCommand === "function");
assert(typeof ListResourceRecordSets$ === "object");
assert(typeof ListReusableDelegationSetsCommand === "function");
assert(typeof ListReusableDelegationSets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTagsForResourcesCommand === "function");
assert(typeof ListTagsForResources$ === "object");
assert(typeof ListTrafficPoliciesCommand === "function");
assert(typeof ListTrafficPolicies$ === "object");
assert(typeof ListTrafficPolicyInstancesCommand === "function");
assert(typeof ListTrafficPolicyInstances$ === "object");
assert(typeof ListTrafficPolicyInstancesByHostedZoneCommand === "function");
assert(typeof ListTrafficPolicyInstancesByHostedZone$ === "object");
assert(typeof ListTrafficPolicyInstancesByPolicyCommand === "function");
assert(typeof ListTrafficPolicyInstancesByPolicy$ === "object");
assert(typeof ListTrafficPolicyVersionsCommand === "function");
assert(typeof ListTrafficPolicyVersions$ === "object");
assert(typeof ListVPCAssociationAuthorizationsCommand === "function");
assert(typeof ListVPCAssociationAuthorizations$ === "object");
assert(typeof TestDNSAnswerCommand === "function");
assert(typeof TestDNSAnswer$ === "object");
assert(typeof UpdateHealthCheckCommand === "function");
assert(typeof UpdateHealthCheck$ === "object");
assert(typeof UpdateHostedZoneCommentCommand === "function");
assert(typeof UpdateHostedZoneComment$ === "object");
assert(typeof UpdateHostedZoneFeaturesCommand === "function");
assert(typeof UpdateHostedZoneFeatures$ === "object");
assert(typeof UpdateTrafficPolicyCommentCommand === "function");
assert(typeof UpdateTrafficPolicyComment$ === "object");
assert(typeof UpdateTrafficPolicyInstanceCommand === "function");
assert(typeof UpdateTrafficPolicyInstance$ === "object");
// structural schemas
assert(typeof AccountLimit$ === "object");
assert(typeof ActivateKeySigningKeyRequest$ === "object");
assert(typeof ActivateKeySigningKeyResponse$ === "object");
assert(typeof AlarmIdentifier$ === "object");
assert(typeof AliasTarget$ === "object");
assert(typeof AssociateVPCWithHostedZoneRequest$ === "object");
assert(typeof AssociateVPCWithHostedZoneResponse$ === "object");
assert(typeof Change$ === "object");
assert(typeof ChangeBatch$ === "object");
assert(typeof ChangeCidrCollectionRequest$ === "object");
assert(typeof ChangeCidrCollectionResponse$ === "object");
assert(typeof ChangeInfo$ === "object");
assert(typeof ChangeResourceRecordSetsRequest$ === "object");
assert(typeof ChangeResourceRecordSetsResponse$ === "object");
assert(typeof ChangeTagsForResourceRequest$ === "object");
assert(typeof ChangeTagsForResourceResponse$ === "object");
assert(typeof CidrBlockSummary$ === "object");
assert(typeof CidrCollection$ === "object");
assert(typeof CidrCollectionChange$ === "object");
assert(typeof CidrRoutingConfig$ === "object");
assert(typeof CloudWatchAlarmConfiguration$ === "object");
assert(typeof CollectionSummary$ === "object");
assert(typeof Coordinates$ === "object");
assert(typeof CreateCidrCollectionRequest$ === "object");
assert(typeof CreateCidrCollectionResponse$ === "object");
assert(typeof CreateHealthCheckRequest$ === "object");
assert(typeof CreateHealthCheckResponse$ === "object");
assert(typeof CreateHostedZoneRequest$ === "object");
assert(typeof CreateHostedZoneResponse$ === "object");
assert(typeof CreateKeySigningKeyRequest$ === "object");
assert(typeof CreateKeySigningKeyResponse$ === "object");
assert(typeof CreateQueryLoggingConfigRequest$ === "object");
assert(typeof CreateQueryLoggingConfigResponse$ === "object");
assert(typeof CreateReusableDelegationSetRequest$ === "object");
assert(typeof CreateReusableDelegationSetResponse$ === "object");
assert(typeof CreateTrafficPolicyInstanceRequest$ === "object");
assert(typeof CreateTrafficPolicyInstanceResponse$ === "object");
assert(typeof CreateTrafficPolicyRequest$ === "object");
assert(typeof CreateTrafficPolicyResponse$ === "object");
assert(typeof CreateTrafficPolicyVersionRequest$ === "object");
assert(typeof CreateTrafficPolicyVersionResponse$ === "object");
assert(typeof CreateVPCAssociationAuthorizationRequest$ === "object");
assert(typeof CreateVPCAssociationAuthorizationResponse$ === "object");
assert(typeof DeactivateKeySigningKeyRequest$ === "object");
assert(typeof DeactivateKeySigningKeyResponse$ === "object");
assert(typeof DelegationSet$ === "object");
assert(typeof DeleteCidrCollectionRequest$ === "object");
assert(typeof DeleteCidrCollectionResponse$ === "object");
assert(typeof DeleteHealthCheckRequest$ === "object");
assert(typeof DeleteHealthCheckResponse$ === "object");
assert(typeof DeleteHostedZoneRequest$ === "object");
assert(typeof DeleteHostedZoneResponse$ === "object");
assert(typeof DeleteKeySigningKeyRequest$ === "object");
assert(typeof DeleteKeySigningKeyResponse$ === "object");
assert(typeof DeleteQueryLoggingConfigRequest$ === "object");
assert(typeof DeleteQueryLoggingConfigResponse$ === "object");
assert(typeof DeleteReusableDelegationSetRequest$ === "object");
assert(typeof DeleteReusableDelegationSetResponse$ === "object");
assert(typeof DeleteTrafficPolicyInstanceRequest$ === "object");
assert(typeof DeleteTrafficPolicyInstanceResponse$ === "object");
assert(typeof DeleteTrafficPolicyRequest$ === "object");
assert(typeof DeleteTrafficPolicyResponse$ === "object");
assert(typeof DeleteVPCAssociationAuthorizationRequest$ === "object");
assert(typeof DeleteVPCAssociationAuthorizationResponse$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DisableHostedZoneDNSSECRequest$ === "object");
assert(typeof DisableHostedZoneDNSSECResponse$ === "object");
assert(typeof DisassociateVPCFromHostedZoneRequest$ === "object");
assert(typeof DisassociateVPCFromHostedZoneResponse$ === "object");
assert(typeof DNSSECStatus$ === "object");
assert(typeof EnableHostedZoneDNSSECRequest$ === "object");
assert(typeof EnableHostedZoneDNSSECResponse$ === "object");
assert(typeof GeoLocation$ === "object");
assert(typeof GeoLocationDetails$ === "object");
assert(typeof GeoProximityLocation$ === "object");
assert(typeof GetAccountLimitRequest$ === "object");
assert(typeof GetAccountLimitResponse$ === "object");
assert(typeof GetChangeRequest$ === "object");
assert(typeof GetChangeResponse$ === "object");
assert(typeof GetCheckerIpRangesRequest$ === "object");
assert(typeof GetCheckerIpRangesResponse$ === "object");
assert(typeof GetDNSSECRequest$ === "object");
assert(typeof GetDNSSECResponse$ === "object");
assert(typeof GetGeoLocationRequest$ === "object");
assert(typeof GetGeoLocationResponse$ === "object");
assert(typeof GetHealthCheckCountRequest$ === "object");
assert(typeof GetHealthCheckCountResponse$ === "object");
assert(typeof GetHealthCheckLastFailureReasonRequest$ === "object");
assert(typeof GetHealthCheckLastFailureReasonResponse$ === "object");
assert(typeof GetHealthCheckRequest$ === "object");
assert(typeof GetHealthCheckResponse$ === "object");
assert(typeof GetHealthCheckStatusRequest$ === "object");
assert(typeof GetHealthCheckStatusResponse$ === "object");
assert(typeof GetHostedZoneCountRequest$ === "object");
assert(typeof GetHostedZoneCountResponse$ === "object");
assert(typeof GetHostedZoneLimitRequest$ === "object");
assert(typeof GetHostedZoneLimitResponse$ === "object");
assert(typeof GetHostedZoneRequest$ === "object");
assert(typeof GetHostedZoneResponse$ === "object");
assert(typeof GetQueryLoggingConfigRequest$ === "object");
assert(typeof GetQueryLoggingConfigResponse$ === "object");
assert(typeof GetReusableDelegationSetLimitRequest$ === "object");
assert(typeof GetReusableDelegationSetLimitResponse$ === "object");
assert(typeof GetReusableDelegationSetRequest$ === "object");
assert(typeof GetReusableDelegationSetResponse$ === "object");
assert(typeof GetTrafficPolicyInstanceCountRequest$ === "object");
assert(typeof GetTrafficPolicyInstanceCountResponse$ === "object");
assert(typeof GetTrafficPolicyInstanceRequest$ === "object");
assert(typeof GetTrafficPolicyInstanceResponse$ === "object");
assert(typeof GetTrafficPolicyRequest$ === "object");
assert(typeof GetTrafficPolicyResponse$ === "object");
assert(typeof HealthCheck$ === "object");
assert(typeof HealthCheckConfig$ === "object");
assert(typeof HealthCheckObservation$ === "object");
assert(typeof HostedZone$ === "object");
assert(typeof HostedZoneConfig$ === "object");
assert(typeof HostedZoneFailureReasons$ === "object");
assert(typeof HostedZoneFeatures$ === "object");
assert(typeof HostedZoneLimit$ === "object");
assert(typeof HostedZoneOwner$ === "object");
assert(typeof HostedZoneSummary$ === "object");
assert(typeof KeySigningKey$ === "object");
assert(typeof LinkedService$ === "object");
assert(typeof ListCidrBlocksRequest$ === "object");
assert(typeof ListCidrBlocksResponse$ === "object");
assert(typeof ListCidrCollectionsRequest$ === "object");
assert(typeof ListCidrCollectionsResponse$ === "object");
assert(typeof ListCidrLocationsRequest$ === "object");
assert(typeof ListCidrLocationsResponse$ === "object");
assert(typeof ListGeoLocationsRequest$ === "object");
assert(typeof ListGeoLocationsResponse$ === "object");
assert(typeof ListHealthChecksRequest$ === "object");
assert(typeof ListHealthChecksResponse$ === "object");
assert(typeof ListHostedZonesByNameRequest$ === "object");
assert(typeof ListHostedZonesByNameResponse$ === "object");
assert(typeof ListHostedZonesByVPCRequest$ === "object");
assert(typeof ListHostedZonesByVPCResponse$ === "object");
assert(typeof ListHostedZonesRequest$ === "object");
assert(typeof ListHostedZonesResponse$ === "object");
assert(typeof ListQueryLoggingConfigsRequest$ === "object");
assert(typeof ListQueryLoggingConfigsResponse$ === "object");
assert(typeof ListResourceRecordSetsRequest$ === "object");
assert(typeof ListResourceRecordSetsResponse$ === "object");
assert(typeof ListReusableDelegationSetsRequest$ === "object");
assert(typeof ListReusableDelegationSetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTagsForResourcesRequest$ === "object");
assert(typeof ListTagsForResourcesResponse$ === "object");
assert(typeof ListTrafficPoliciesRequest$ === "object");
assert(typeof ListTrafficPoliciesResponse$ === "object");
assert(typeof ListTrafficPolicyInstancesByHostedZoneRequest$ === "object");
assert(typeof ListTrafficPolicyInstancesByHostedZoneResponse$ === "object");
assert(typeof ListTrafficPolicyInstancesByPolicyRequest$ === "object");
assert(typeof ListTrafficPolicyInstancesByPolicyResponse$ === "object");
assert(typeof ListTrafficPolicyInstancesRequest$ === "object");
assert(typeof ListTrafficPolicyInstancesResponse$ === "object");
assert(typeof ListTrafficPolicyVersionsRequest$ === "object");
assert(typeof ListTrafficPolicyVersionsResponse$ === "object");
assert(typeof ListVPCAssociationAuthorizationsRequest$ === "object");
assert(typeof ListVPCAssociationAuthorizationsResponse$ === "object");
assert(typeof LocationSummary$ === "object");
assert(typeof QueryLoggingConfig$ === "object");
assert(typeof ResourceRecord$ === "object");
assert(typeof ResourceRecordSet$ === "object");
assert(typeof ResourceTagSet$ === "object");
assert(typeof ReusableDelegationSetLimit$ === "object");
assert(typeof StatusReport$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TestDNSAnswerRequest$ === "object");
assert(typeof TestDNSAnswerResponse$ === "object");
assert(typeof TrafficPolicy$ === "object");
assert(typeof TrafficPolicyInstance$ === "object");
assert(typeof TrafficPolicySummary$ === "object");
assert(typeof UpdateHealthCheckRequest$ === "object");
assert(typeof UpdateHealthCheckResponse$ === "object");
assert(typeof UpdateHostedZoneCommentRequest$ === "object");
assert(typeof UpdateHostedZoneCommentResponse$ === "object");
assert(typeof UpdateHostedZoneFeaturesRequest$ === "object");
assert(typeof UpdateHostedZoneFeaturesResponse$ === "object");
assert(typeof UpdateTrafficPolicyCommentRequest$ === "object");
assert(typeof UpdateTrafficPolicyCommentResponse$ === "object");
assert(typeof UpdateTrafficPolicyInstanceRequest$ === "object");
assert(typeof UpdateTrafficPolicyInstanceResponse$ === "object");
assert(typeof VPC$ === "object");
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
assert(typeof CidrBlockInUseException$ === "object");
assert(CidrCollectionAlreadyExistsException.prototype instanceof Route53ServiceException);
assert(typeof CidrCollectionAlreadyExistsException$ === "object");
assert(CidrCollectionInUseException.prototype instanceof Route53ServiceException);
assert(typeof CidrCollectionInUseException$ === "object");
assert(CidrCollectionVersionMismatchException.prototype instanceof Route53ServiceException);
assert(typeof CidrCollectionVersionMismatchException$ === "object");
assert(ConcurrentModification.prototype instanceof Route53ServiceException);
assert(typeof ConcurrentModification$ === "object");
assert(ConflictingDomainExists.prototype instanceof Route53ServiceException);
assert(typeof ConflictingDomainExists$ === "object");
assert(ConflictingTypes.prototype instanceof Route53ServiceException);
assert(typeof ConflictingTypes$ === "object");
assert(DelegationSetAlreadyCreated.prototype instanceof Route53ServiceException);
assert(typeof DelegationSetAlreadyCreated$ === "object");
assert(DelegationSetAlreadyReusable.prototype instanceof Route53ServiceException);
assert(typeof DelegationSetAlreadyReusable$ === "object");
assert(DelegationSetInUse.prototype instanceof Route53ServiceException);
assert(typeof DelegationSetInUse$ === "object");
assert(DelegationSetNotAvailable.prototype instanceof Route53ServiceException);
assert(typeof DelegationSetNotAvailable$ === "object");
assert(DelegationSetNotReusable.prototype instanceof Route53ServiceException);
assert(typeof DelegationSetNotReusable$ === "object");
assert(DNSSECNotFound.prototype instanceof Route53ServiceException);
assert(typeof DNSSECNotFound$ === "object");
assert(HealthCheckAlreadyExists.prototype instanceof Route53ServiceException);
assert(typeof HealthCheckAlreadyExists$ === "object");
assert(HealthCheckInUse.prototype instanceof Route53ServiceException);
assert(typeof HealthCheckInUse$ === "object");
assert(HealthCheckVersionMismatch.prototype instanceof Route53ServiceException);
assert(typeof HealthCheckVersionMismatch$ === "object");
assert(HostedZoneAlreadyExists.prototype instanceof Route53ServiceException);
assert(typeof HostedZoneAlreadyExists$ === "object");
assert(HostedZoneNotEmpty.prototype instanceof Route53ServiceException);
assert(typeof HostedZoneNotEmpty$ === "object");
assert(HostedZoneNotFound.prototype instanceof Route53ServiceException);
assert(typeof HostedZoneNotFound$ === "object");
assert(HostedZoneNotPrivate.prototype instanceof Route53ServiceException);
assert(typeof HostedZoneNotPrivate$ === "object");
assert(HostedZonePartiallyDelegated.prototype instanceof Route53ServiceException);
assert(typeof HostedZonePartiallyDelegated$ === "object");
assert(IncompatibleVersion.prototype instanceof Route53ServiceException);
assert(typeof IncompatibleVersion$ === "object");
assert(InsufficientCloudWatchLogsResourcePolicy.prototype instanceof Route53ServiceException);
assert(typeof InsufficientCloudWatchLogsResourcePolicy$ === "object");
assert(InvalidArgument.prototype instanceof Route53ServiceException);
assert(typeof InvalidArgument$ === "object");
assert(InvalidChangeBatch.prototype instanceof Route53ServiceException);
assert(typeof InvalidChangeBatch$ === "object");
assert(InvalidDomainName.prototype instanceof Route53ServiceException);
assert(typeof InvalidDomainName$ === "object");
assert(InvalidInput.prototype instanceof Route53ServiceException);
assert(typeof InvalidInput$ === "object");
assert(InvalidKeySigningKeyName.prototype instanceof Route53ServiceException);
assert(typeof InvalidKeySigningKeyName$ === "object");
assert(InvalidKeySigningKeyStatus.prototype instanceof Route53ServiceException);
assert(typeof InvalidKeySigningKeyStatus$ === "object");
assert(InvalidKMSArn.prototype instanceof Route53ServiceException);
assert(typeof InvalidKMSArn$ === "object");
assert(InvalidPaginationToken.prototype instanceof Route53ServiceException);
assert(typeof InvalidPaginationToken$ === "object");
assert(InvalidSigningStatus.prototype instanceof Route53ServiceException);
assert(typeof InvalidSigningStatus$ === "object");
assert(InvalidTrafficPolicyDocument.prototype instanceof Route53ServiceException);
assert(typeof InvalidTrafficPolicyDocument$ === "object");
assert(InvalidVPCId.prototype instanceof Route53ServiceException);
assert(typeof InvalidVPCId$ === "object");
assert(KeySigningKeyAlreadyExists.prototype instanceof Route53ServiceException);
assert(typeof KeySigningKeyAlreadyExists$ === "object");
assert(KeySigningKeyInParentDSRecord.prototype instanceof Route53ServiceException);
assert(typeof KeySigningKeyInParentDSRecord$ === "object");
assert(KeySigningKeyInUse.prototype instanceof Route53ServiceException);
assert(typeof KeySigningKeyInUse$ === "object");
assert(KeySigningKeyWithActiveStatusNotFound.prototype instanceof Route53ServiceException);
assert(typeof KeySigningKeyWithActiveStatusNotFound$ === "object");
assert(LastVPCAssociation.prototype instanceof Route53ServiceException);
assert(typeof LastVPCAssociation$ === "object");
assert(LimitsExceeded.prototype instanceof Route53ServiceException);
assert(typeof LimitsExceeded$ === "object");
assert(NoSuchChange.prototype instanceof Route53ServiceException);
assert(typeof NoSuchChange$ === "object");
assert(NoSuchCidrCollectionException.prototype instanceof Route53ServiceException);
assert(typeof NoSuchCidrCollectionException$ === "object");
assert(NoSuchCidrLocationException.prototype instanceof Route53ServiceException);
assert(typeof NoSuchCidrLocationException$ === "object");
assert(NoSuchCloudWatchLogsLogGroup.prototype instanceof Route53ServiceException);
assert(typeof NoSuchCloudWatchLogsLogGroup$ === "object");
assert(NoSuchDelegationSet.prototype instanceof Route53ServiceException);
assert(typeof NoSuchDelegationSet$ === "object");
assert(NoSuchGeoLocation.prototype instanceof Route53ServiceException);
assert(typeof NoSuchGeoLocation$ === "object");
assert(NoSuchHealthCheck.prototype instanceof Route53ServiceException);
assert(typeof NoSuchHealthCheck$ === "object");
assert(NoSuchHostedZone.prototype instanceof Route53ServiceException);
assert(typeof NoSuchHostedZone$ === "object");
assert(NoSuchKeySigningKey.prototype instanceof Route53ServiceException);
assert(typeof NoSuchKeySigningKey$ === "object");
assert(NoSuchQueryLoggingConfig.prototype instanceof Route53ServiceException);
assert(typeof NoSuchQueryLoggingConfig$ === "object");
assert(NoSuchTrafficPolicy.prototype instanceof Route53ServiceException);
assert(typeof NoSuchTrafficPolicy$ === "object");
assert(NoSuchTrafficPolicyInstance.prototype instanceof Route53ServiceException);
assert(typeof NoSuchTrafficPolicyInstance$ === "object");
assert(NotAuthorizedException.prototype instanceof Route53ServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(PriorRequestNotComplete.prototype instanceof Route53ServiceException);
assert(typeof PriorRequestNotComplete$ === "object");
assert(PublicZoneVPCAssociation.prototype instanceof Route53ServiceException);
assert(typeof PublicZoneVPCAssociation$ === "object");
assert(QueryLoggingConfigAlreadyExists.prototype instanceof Route53ServiceException);
assert(typeof QueryLoggingConfigAlreadyExists$ === "object");
assert(ThrottlingException.prototype instanceof Route53ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyHealthChecks.prototype instanceof Route53ServiceException);
assert(typeof TooManyHealthChecks$ === "object");
assert(TooManyHostedZones.prototype instanceof Route53ServiceException);
assert(typeof TooManyHostedZones$ === "object");
assert(TooManyKeySigningKeys.prototype instanceof Route53ServiceException);
assert(typeof TooManyKeySigningKeys$ === "object");
assert(TooManyTrafficPolicies.prototype instanceof Route53ServiceException);
assert(typeof TooManyTrafficPolicies$ === "object");
assert(TooManyTrafficPolicyInstances.prototype instanceof Route53ServiceException);
assert(typeof TooManyTrafficPolicyInstances$ === "object");
assert(TooManyTrafficPolicyVersionsForCurrentPolicy.prototype instanceof Route53ServiceException);
assert(typeof TooManyTrafficPolicyVersionsForCurrentPolicy$ === "object");
assert(TooManyVPCAssociationAuthorizations.prototype instanceof Route53ServiceException);
assert(typeof TooManyVPCAssociationAuthorizations$ === "object");
assert(TrafficPolicyAlreadyExists.prototype instanceof Route53ServiceException);
assert(typeof TrafficPolicyAlreadyExists$ === "object");
assert(TrafficPolicyInstanceAlreadyExists.prototype instanceof Route53ServiceException);
assert(typeof TrafficPolicyInstanceAlreadyExists$ === "object");
assert(TrafficPolicyInUse.prototype instanceof Route53ServiceException);
assert(typeof TrafficPolicyInUse$ === "object");
assert(VPCAssociationAuthorizationNotFound.prototype instanceof Route53ServiceException);
assert(typeof VPCAssociationAuthorizationNotFound$ === "object");
assert(VPCAssociationNotFound.prototype instanceof Route53ServiceException);
assert(typeof VPCAssociationNotFound$ === "object");
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
