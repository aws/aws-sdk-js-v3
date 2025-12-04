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
  CidrCollectionChangeAction,
  CloudWatchRegion,
  ComparisonOperator,
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
  DeactivateKeySigningKeyCommand,
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
  HealthCheckRegion,
  HealthCheckType,
  HostedZoneLimitType,
  HostedZoneType,
  InsufficientDataHealthStatus,
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
  UpdateHealthCheckCommand,
  UpdateHostedZoneCommentCommand,
  UpdateHostedZoneFeaturesCommand,
  UpdateTrafficPolicyCommentCommand,
  UpdateTrafficPolicyInstanceCommand,
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
