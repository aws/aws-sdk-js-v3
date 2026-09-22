// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateDRTLogBucketCommandInput,
  type AssociateDRTLogBucketCommandOutput,
  AssociateDRTLogBucketCommand,
} from "./commands/AssociateDRTLogBucketCommand";
import {
  type AssociateDRTRoleCommandInput,
  type AssociateDRTRoleCommandOutput,
  AssociateDRTRoleCommand,
} from "./commands/AssociateDRTRoleCommand";
import {
  type AssociateHealthCheckCommandInput,
  type AssociateHealthCheckCommandOutput,
  AssociateHealthCheckCommand,
} from "./commands/AssociateHealthCheckCommand";
import {
  type AssociateProactiveEngagementDetailsCommandInput,
  type AssociateProactiveEngagementDetailsCommandOutput,
  AssociateProactiveEngagementDetailsCommand,
} from "./commands/AssociateProactiveEngagementDetailsCommand";
import {
  type CreateProtectionCommandInput,
  type CreateProtectionCommandOutput,
  CreateProtectionCommand,
} from "./commands/CreateProtectionCommand";
import {
  type CreateProtectionGroupCommandInput,
  type CreateProtectionGroupCommandOutput,
  CreateProtectionGroupCommand,
} from "./commands/CreateProtectionGroupCommand";
import {
  type CreateSubscriptionCommandInput,
  type CreateSubscriptionCommandOutput,
  CreateSubscriptionCommand,
} from "./commands/CreateSubscriptionCommand";
import {
  type DeleteProtectionCommandInput,
  type DeleteProtectionCommandOutput,
  DeleteProtectionCommand,
} from "./commands/DeleteProtectionCommand";
import {
  type DeleteProtectionGroupCommandInput,
  type DeleteProtectionGroupCommandOutput,
  DeleteProtectionGroupCommand,
} from "./commands/DeleteProtectionGroupCommand";
import {
  type DeleteSubscriptionCommandInput,
  type DeleteSubscriptionCommandOutput,
  DeleteSubscriptionCommand,
} from "./commands/DeleteSubscriptionCommand";
import {
  type DescribeAttackCommandInput,
  type DescribeAttackCommandOutput,
  DescribeAttackCommand,
} from "./commands/DescribeAttackCommand";
import {
  type DescribeAttackStatisticsCommandInput,
  type DescribeAttackStatisticsCommandOutput,
  DescribeAttackStatisticsCommand,
} from "./commands/DescribeAttackStatisticsCommand";
import {
  type DescribeDRTAccessCommandInput,
  type DescribeDRTAccessCommandOutput,
  DescribeDRTAccessCommand,
} from "./commands/DescribeDRTAccessCommand";
import {
  type DescribeEmergencyContactSettingsCommandInput,
  type DescribeEmergencyContactSettingsCommandOutput,
  DescribeEmergencyContactSettingsCommand,
} from "./commands/DescribeEmergencyContactSettingsCommand";
import {
  type DescribeProtectionCommandInput,
  type DescribeProtectionCommandOutput,
  DescribeProtectionCommand,
} from "./commands/DescribeProtectionCommand";
import {
  type DescribeProtectionGroupCommandInput,
  type DescribeProtectionGroupCommandOutput,
  DescribeProtectionGroupCommand,
} from "./commands/DescribeProtectionGroupCommand";
import {
  type DescribeSubscriptionCommandInput,
  type DescribeSubscriptionCommandOutput,
  DescribeSubscriptionCommand,
} from "./commands/DescribeSubscriptionCommand";
import {
  type DisableApplicationLayerAutomaticResponseCommandInput,
  type DisableApplicationLayerAutomaticResponseCommandOutput,
  DisableApplicationLayerAutomaticResponseCommand,
} from "./commands/DisableApplicationLayerAutomaticResponseCommand";
import {
  type DisableProactiveEngagementCommandInput,
  type DisableProactiveEngagementCommandOutput,
  DisableProactiveEngagementCommand,
} from "./commands/DisableProactiveEngagementCommand";
import {
  type DisassociateDRTLogBucketCommandInput,
  type DisassociateDRTLogBucketCommandOutput,
  DisassociateDRTLogBucketCommand,
} from "./commands/DisassociateDRTLogBucketCommand";
import {
  type DisassociateDRTRoleCommandInput,
  type DisassociateDRTRoleCommandOutput,
  DisassociateDRTRoleCommand,
} from "./commands/DisassociateDRTRoleCommand";
import {
  type DisassociateHealthCheckCommandInput,
  type DisassociateHealthCheckCommandOutput,
  DisassociateHealthCheckCommand,
} from "./commands/DisassociateHealthCheckCommand";
import {
  type EnableApplicationLayerAutomaticResponseCommandInput,
  type EnableApplicationLayerAutomaticResponseCommandOutput,
  EnableApplicationLayerAutomaticResponseCommand,
} from "./commands/EnableApplicationLayerAutomaticResponseCommand";
import {
  type EnableProactiveEngagementCommandInput,
  type EnableProactiveEngagementCommandOutput,
  EnableProactiveEngagementCommand,
} from "./commands/EnableProactiveEngagementCommand";
import {
  type GetSubscriptionStateCommandInput,
  type GetSubscriptionStateCommandOutput,
  GetSubscriptionStateCommand,
} from "./commands/GetSubscriptionStateCommand";
import {
  type ListAttacksCommandInput,
  type ListAttacksCommandOutput,
  ListAttacksCommand,
} from "./commands/ListAttacksCommand";
import {
  type ListProtectionGroupsCommandInput,
  type ListProtectionGroupsCommandOutput,
  ListProtectionGroupsCommand,
} from "./commands/ListProtectionGroupsCommand";
import {
  type ListProtectionsCommandInput,
  type ListProtectionsCommandOutput,
  ListProtectionsCommand,
} from "./commands/ListProtectionsCommand";
import {
  type ListResourcesInProtectionGroupCommandInput,
  type ListResourcesInProtectionGroupCommandOutput,
  ListResourcesInProtectionGroupCommand,
} from "./commands/ListResourcesInProtectionGroupCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApplicationLayerAutomaticResponseCommandInput,
  type UpdateApplicationLayerAutomaticResponseCommandOutput,
  UpdateApplicationLayerAutomaticResponseCommand,
} from "./commands/UpdateApplicationLayerAutomaticResponseCommand";
import {
  type UpdateEmergencyContactSettingsCommandInput,
  type UpdateEmergencyContactSettingsCommandOutput,
  UpdateEmergencyContactSettingsCommand,
} from "./commands/UpdateEmergencyContactSettingsCommand";
import {
  type UpdateProtectionGroupCommandInput,
  type UpdateProtectionGroupCommandOutput,
  UpdateProtectionGroupCommand,
} from "./commands/UpdateProtectionGroupCommand";
import {
  type UpdateSubscriptionCommandInput,
  type UpdateSubscriptionCommandOutput,
  UpdateSubscriptionCommand,
} from "./commands/UpdateSubscriptionCommand";
import { paginateListAttacks } from "./pagination/ListAttacksPaginator";
import { paginateListProtectionGroups } from "./pagination/ListProtectionGroupsPaginator";
import { paginateListProtections } from "./pagination/ListProtectionsPaginator";
import { paginateListResourcesInProtectionGroup } from "./pagination/ListResourcesInProtectionGroupPaginator";
import { ShieldClient } from "./ShieldClient";

const commands = {
  AssociateDRTLogBucketCommand,
  AssociateDRTRoleCommand,
  AssociateHealthCheckCommand,
  AssociateProactiveEngagementDetailsCommand,
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
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationLayerAutomaticResponseCommand,
  UpdateEmergencyContactSettingsCommand,
  UpdateProtectionGroupCommand,
  UpdateSubscriptionCommand,
};
const paginators = {
  paginateListAttacks,
  paginateListProtectionGroups,
  paginateListProtections,
  paginateListResourcesInProtectionGroup,
};

/**
 * @public
 */
export interface ShieldRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Shield {
  /**
   * @see {@link AssociateDRTLogBucketCommand}
   */
  associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    options?: ShieldRequestOptions
  ): Promise<AssociateDRTLogBucketCommandOutput>;
  associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): void;
  associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDRTRoleCommand}
   */
  associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    options?: ShieldRequestOptions
  ): Promise<AssociateDRTRoleCommandOutput>;
  associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): void;
  associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateHealthCheckCommand}
   */
  associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    options?: ShieldRequestOptions
  ): Promise<AssociateHealthCheckCommandOutput>;
  associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): void;
  associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateProactiveEngagementDetailsCommand}
   */
  associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    options?: ShieldRequestOptions
  ): Promise<AssociateProactiveEngagementDetailsCommandOutput>;
  associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): void;
  associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProtectionCommand}
   */
  createProtection(
    args: CreateProtectionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<CreateProtectionCommandOutput>;
  createProtection(
    args: CreateProtectionCommandInput,
    cb: (err: any, data?: CreateProtectionCommandOutput) => void
  ): void;
  createProtection(
    args: CreateProtectionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: CreateProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProtectionGroupCommand}
   */
  createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    options?: ShieldRequestOptions
  ): Promise<CreateProtectionGroupCommandOutput>;
  createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): void;
  createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionCommand}
   */
  createSubscription(): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProtectionCommand}
   */
  deleteProtection(
    args: DeleteProtectionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DeleteProtectionCommandOutput>;
  deleteProtection(
    args: DeleteProtectionCommandInput,
    cb: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): void;
  deleteProtection(
    args: DeleteProtectionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProtectionGroupCommand}
   */
  deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DeleteProtectionGroupCommandOutput>;
  deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): void;
  deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionCommand}
   */
  deleteSubscription(): Promise<DeleteSubscriptionCommandOutput>;
  deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DeleteSubscriptionCommandOutput>;
  deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): void;
  deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAttackCommand}
   */
  describeAttack(
    args: DescribeAttackCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeAttackCommandOutput>;
  describeAttack(
    args: DescribeAttackCommandInput,
    cb: (err: any, data?: DescribeAttackCommandOutput) => void
  ): void;
  describeAttack(
    args: DescribeAttackCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeAttackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAttackStatisticsCommand}
   */
  describeAttackStatistics(): Promise<DescribeAttackStatisticsCommandOutput>;
  describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeAttackStatisticsCommandOutput>;
  describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): void;
  describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDRTAccessCommand}
   */
  describeDRTAccess(): Promise<DescribeDRTAccessCommandOutput>;
  describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeDRTAccessCommandOutput>;
  describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): void;
  describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEmergencyContactSettingsCommand}
   */
  describeEmergencyContactSettings(): Promise<DescribeEmergencyContactSettingsCommandOutput>;
  describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeEmergencyContactSettingsCommandOutput>;
  describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): void;
  describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProtectionCommand}
   */
  describeProtection(): Promise<DescribeProtectionCommandOutput>;
  describeProtection(
    args: DescribeProtectionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeProtectionCommandOutput>;
  describeProtection(
    args: DescribeProtectionCommandInput,
    cb: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): void;
  describeProtection(
    args: DescribeProtectionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProtectionGroupCommand}
   */
  describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeProtectionGroupCommandOutput>;
  describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): void;
  describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscriptionCommand}
   */
  describeSubscription(): Promise<DescribeSubscriptionCommandOutput>;
  describeSubscription(
    args: DescribeSubscriptionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DescribeSubscriptionCommandOutput>;
  describeSubscription(
    args: DescribeSubscriptionCommandInput,
    cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): void;
  describeSubscription(
    args: DescribeSubscriptionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableApplicationLayerAutomaticResponseCommand}
   */
  disableApplicationLayerAutomaticResponse(
    args: DisableApplicationLayerAutomaticResponseCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DisableApplicationLayerAutomaticResponseCommandOutput>;
  disableApplicationLayerAutomaticResponse(
    args: DisableApplicationLayerAutomaticResponseCommandInput,
    cb: (err: any, data?: DisableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;
  disableApplicationLayerAutomaticResponse(
    args: DisableApplicationLayerAutomaticResponseCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DisableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableProactiveEngagementCommand}
   */
  disableProactiveEngagement(): Promise<DisableProactiveEngagementCommandOutput>;
  disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DisableProactiveEngagementCommandOutput>;
  disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): void;
  disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDRTLogBucketCommand}
   */
  disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DisassociateDRTLogBucketCommandOutput>;
  disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): void;
  disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDRTRoleCommand}
   */
  disassociateDRTRole(): Promise<DisassociateDRTRoleCommandOutput>;
  disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DisassociateDRTRoleCommandOutput>;
  disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): void;
  disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateHealthCheckCommand}
   */
  disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    options?: ShieldRequestOptions
  ): Promise<DisassociateHealthCheckCommandOutput>;
  disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): void;
  disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableApplicationLayerAutomaticResponseCommand}
   */
  enableApplicationLayerAutomaticResponse(
    args: EnableApplicationLayerAutomaticResponseCommandInput,
    options?: ShieldRequestOptions
  ): Promise<EnableApplicationLayerAutomaticResponseCommandOutput>;
  enableApplicationLayerAutomaticResponse(
    args: EnableApplicationLayerAutomaticResponseCommandInput,
    cb: (err: any, data?: EnableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;
  enableApplicationLayerAutomaticResponse(
    args: EnableApplicationLayerAutomaticResponseCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: EnableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableProactiveEngagementCommand}
   */
  enableProactiveEngagement(): Promise<EnableProactiveEngagementCommandOutput>;
  enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    options?: ShieldRequestOptions
  ): Promise<EnableProactiveEngagementCommandOutput>;
  enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): void;
  enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionStateCommand}
   */
  getSubscriptionState(): Promise<GetSubscriptionStateCommandOutput>;
  getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    options?: ShieldRequestOptions
  ): Promise<GetSubscriptionStateCommandOutput>;
  getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): void;
  getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttacksCommand}
   */
  listAttacks(): Promise<ListAttacksCommandOutput>;
  listAttacks(
    args: ListAttacksCommandInput,
    options?: ShieldRequestOptions
  ): Promise<ListAttacksCommandOutput>;
  listAttacks(
    args: ListAttacksCommandInput,
    cb: (err: any, data?: ListAttacksCommandOutput) => void
  ): void;
  listAttacks(
    args: ListAttacksCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: ListAttacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectionGroupsCommand}
   */
  listProtectionGroups(): Promise<ListProtectionGroupsCommandOutput>;
  listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    options?: ShieldRequestOptions
  ): Promise<ListProtectionGroupsCommandOutput>;
  listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): void;
  listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectionsCommand}
   */
  listProtections(): Promise<ListProtectionsCommandOutput>;
  listProtections(
    args: ListProtectionsCommandInput,
    options?: ShieldRequestOptions
  ): Promise<ListProtectionsCommandOutput>;
  listProtections(
    args: ListProtectionsCommandInput,
    cb: (err: any, data?: ListProtectionsCommandOutput) => void
  ): void;
  listProtections(
    args: ListProtectionsCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: ListProtectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesInProtectionGroupCommand}
   */
  listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    options?: ShieldRequestOptions
  ): Promise<ListResourcesInProtectionGroupCommandOutput>;
  listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): void;
  listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ShieldRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ShieldRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ShieldRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationLayerAutomaticResponseCommand}
   */
  updateApplicationLayerAutomaticResponse(
    args: UpdateApplicationLayerAutomaticResponseCommandInput,
    options?: ShieldRequestOptions
  ): Promise<UpdateApplicationLayerAutomaticResponseCommandOutput>;
  updateApplicationLayerAutomaticResponse(
    args: UpdateApplicationLayerAutomaticResponseCommandInput,
    cb: (err: any, data?: UpdateApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;
  updateApplicationLayerAutomaticResponse(
    args: UpdateApplicationLayerAutomaticResponseCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: UpdateApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmergencyContactSettingsCommand}
   */
  updateEmergencyContactSettings(): Promise<UpdateEmergencyContactSettingsCommandOutput>;
  updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    options?: ShieldRequestOptions
  ): Promise<UpdateEmergencyContactSettingsCommandOutput>;
  updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): void;
  updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectionGroupCommand}
   */
  updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    options?: ShieldRequestOptions
  ): Promise<UpdateProtectionGroupCommandOutput>;
  updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): void;
  updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionCommand}
   */
  updateSubscription(): Promise<UpdateSubscriptionCommandOutput>;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options?: ShieldRequestOptions
  ): Promise<UpdateSubscriptionCommandOutput>;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options: ShieldRequestOptions,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttacksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttacksCommandOutput}.
   */
  paginateListAttacks(
    args?: ListAttacksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttacksCommandOutput>;

  /**
   * @see {@link ListProtectionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProtectionGroupsCommandOutput}.
   */
  paginateListProtectionGroups(
    args?: ListProtectionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProtectionGroupsCommandOutput>;

  /**
   * @see {@link ListProtectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProtectionsCommandOutput}.
   */
  paginateListProtections(
    args?: ListProtectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProtectionsCommandOutput>;

  /**
   * @see {@link ListResourcesInProtectionGroupCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcesInProtectionGroupCommandOutput}.
   */
  paginateListResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcesInProtectionGroupCommandOutput>;
}

/**
 * <fullname>Shield Advanced</fullname>
 *          <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions,
 *          data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>
 * @public
 */
export class Shield extends ShieldClient implements Shield {}
createAggregatedClient(commands, Shield, { paginators });
