import {
  ApplicationLayerAutomaticResponseStatus,
  AssociateDRTLogBucketCommand,
  AssociateDRTRoleCommand,
  AssociateHealthCheckCommand,
  AssociateProactiveEngagementDetailsCommand,
  AttackLayer,
  AttackPropertyIdentifier,
  AutoRenew,
  CreateProtectionCommand,
  CreateProtectionGroupCommand,
  CreateSubscriptionCommand,
  DeleteProtectionCommand,
  DeleteProtectionGroupCommand,
  DeleteSubscriptionCommand,
  DescribeAttackCommand,
  DescribeAttackStatisticsCommand,
  DescribeDRTAccessCommand,
  DescribeEmergencyContactSettingsCommand,
  DescribeProtectionCommand,
  DescribeProtectionGroupCommand,
  DescribeSubscriptionCommand,
  DisableApplicationLayerAutomaticResponseCommand,
  DisableProactiveEngagementCommand,
  DisassociateDRTLogBucketCommand,
  DisassociateDRTRoleCommand,
  DisassociateHealthCheckCommand,
  EnableApplicationLayerAutomaticResponseCommand,
  EnableProactiveEngagementCommand,
  GetSubscriptionStateCommand,
  ListAttacksCommand,
  ListProtectionGroupsCommand,
  ListProtectionsCommand,
  ListResourcesInProtectionGroupCommand,
  ListTagsForResourceCommand,
  ProactiveEngagementStatus,
  ProtectedResourceType,
  ProtectionGroupAggregation,
  ProtectionGroupPattern,
  Shield,
  ShieldClient,
  ShieldServiceException,
  SubResourceType,
  SubscriptionState,
  TagResourceCommand,
  Unit,
  UntagResourceCommand,
  UpdateApplicationLayerAutomaticResponseCommand,
  UpdateEmergencyContactSettingsCommand,
  UpdateProtectionGroupCommand,
  UpdateSubscriptionCommand,
  paginateListAttacks,
  paginateListProtectionGroups,
  paginateListProtections,
  paginateListResourcesInProtectionGroup,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ShieldClient === "function");
assert(typeof Shield === "function");
// commands
assert(typeof AssociateDRTLogBucketCommand === "function");
assert(typeof AssociateDRTRoleCommand === "function");
assert(typeof AssociateHealthCheckCommand === "function");
assert(typeof AssociateProactiveEngagementDetailsCommand === "function");
assert(typeof CreateProtectionCommand === "function");
assert(typeof CreateProtectionGroupCommand === "function");
assert(typeof CreateSubscriptionCommand === "function");
assert(typeof DeleteProtectionCommand === "function");
assert(typeof DeleteProtectionGroupCommand === "function");
assert(typeof DeleteSubscriptionCommand === "function");
assert(typeof DescribeAttackCommand === "function");
assert(typeof DescribeAttackStatisticsCommand === "function");
assert(typeof DescribeDRTAccessCommand === "function");
assert(typeof DescribeEmergencyContactSettingsCommand === "function");
assert(typeof DescribeProtectionCommand === "function");
assert(typeof DescribeProtectionGroupCommand === "function");
assert(typeof DescribeSubscriptionCommand === "function");
assert(typeof DisableApplicationLayerAutomaticResponseCommand === "function");
assert(typeof DisableProactiveEngagementCommand === "function");
assert(typeof DisassociateDRTLogBucketCommand === "function");
assert(typeof DisassociateDRTRoleCommand === "function");
assert(typeof DisassociateHealthCheckCommand === "function");
assert(typeof EnableApplicationLayerAutomaticResponseCommand === "function");
assert(typeof EnableProactiveEngagementCommand === "function");
assert(typeof GetSubscriptionStateCommand === "function");
assert(typeof ListAttacksCommand === "function");
assert(typeof ListProtectionGroupsCommand === "function");
assert(typeof ListProtectionsCommand === "function");
assert(typeof ListResourcesInProtectionGroupCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationLayerAutomaticResponseCommand === "function");
assert(typeof UpdateEmergencyContactSettingsCommand === "function");
assert(typeof UpdateProtectionGroupCommand === "function");
assert(typeof UpdateSubscriptionCommand === "function");
// enums
assert(typeof ApplicationLayerAutomaticResponseStatus === "object");
assert(typeof AttackLayer === "object");
assert(typeof AttackPropertyIdentifier === "object");
assert(typeof AutoRenew === "object");
assert(typeof ProactiveEngagementStatus === "object");
assert(typeof ProtectedResourceType === "object");
assert(typeof ProtectionGroupAggregation === "object");
assert(typeof ProtectionGroupPattern === "object");
assert(typeof SubResourceType === "object");
assert(typeof SubscriptionState === "object");
assert(typeof Unit === "object");
// errors
assert(ShieldServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAttacks === "function");
assert(typeof paginateListProtectionGroups === "function");
assert(typeof paginateListProtections === "function");
assert(typeof paginateListResourcesInProtectionGroup === "function");
console.log(`Shield index test passed.`);
