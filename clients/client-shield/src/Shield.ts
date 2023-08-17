// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateDRTLogBucketCommand,
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
} from "./commands/AssociateDRTLogBucketCommand";
import {
  AssociateDRTRoleCommand,
  AssociateDRTRoleCommandInput,
  AssociateDRTRoleCommandOutput,
} from "./commands/AssociateDRTRoleCommand";
import {
  AssociateHealthCheckCommand,
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
} from "./commands/AssociateHealthCheckCommand";
import {
  AssociateProactiveEngagementDetailsCommand,
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
} from "./commands/AssociateProactiveEngagementDetailsCommand";
import {
  CreateProtectionCommand,
  CreateProtectionCommandInput,
  CreateProtectionCommandOutput,
} from "./commands/CreateProtectionCommand";
import {
  CreateProtectionGroupCommand,
  CreateProtectionGroupCommandInput,
  CreateProtectionGroupCommandOutput,
} from "./commands/CreateProtectionGroupCommand";
import {
  CreateSubscriptionCommand,
  CreateSubscriptionCommandInput,
  CreateSubscriptionCommandOutput,
} from "./commands/CreateSubscriptionCommand";
import {
  DeleteProtectionCommand,
  DeleteProtectionCommandInput,
  DeleteProtectionCommandOutput,
} from "./commands/DeleteProtectionCommand";
import {
  DeleteProtectionGroupCommand,
  DeleteProtectionGroupCommandInput,
  DeleteProtectionGroupCommandOutput,
} from "./commands/DeleteProtectionGroupCommand";
import {
  DeleteSubscriptionCommand,
  DeleteSubscriptionCommandInput,
  DeleteSubscriptionCommandOutput,
} from "./commands/DeleteSubscriptionCommand";
import {
  DescribeAttackCommand,
  DescribeAttackCommandInput,
  DescribeAttackCommandOutput,
} from "./commands/DescribeAttackCommand";
import {
  DescribeAttackStatisticsCommand,
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
} from "./commands/DescribeAttackStatisticsCommand";
import {
  DescribeDRTAccessCommand,
  DescribeDRTAccessCommandInput,
  DescribeDRTAccessCommandOutput,
} from "./commands/DescribeDRTAccessCommand";
import {
  DescribeEmergencyContactSettingsCommand,
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
} from "./commands/DescribeEmergencyContactSettingsCommand";
import {
  DescribeProtectionCommand,
  DescribeProtectionCommandInput,
  DescribeProtectionCommandOutput,
} from "./commands/DescribeProtectionCommand";
import {
  DescribeProtectionGroupCommand,
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
} from "./commands/DescribeProtectionGroupCommand";
import {
  DescribeSubscriptionCommand,
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput,
} from "./commands/DescribeSubscriptionCommand";
import {
  DisableApplicationLayerAutomaticResponseCommand,
  DisableApplicationLayerAutomaticResponseCommandInput,
  DisableApplicationLayerAutomaticResponseCommandOutput,
} from "./commands/DisableApplicationLayerAutomaticResponseCommand";
import {
  DisableProactiveEngagementCommand,
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
} from "./commands/DisableProactiveEngagementCommand";
import {
  DisassociateDRTLogBucketCommand,
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
} from "./commands/DisassociateDRTLogBucketCommand";
import {
  DisassociateDRTRoleCommand,
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
} from "./commands/DisassociateDRTRoleCommand";
import {
  DisassociateHealthCheckCommand,
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
} from "./commands/DisassociateHealthCheckCommand";
import {
  EnableApplicationLayerAutomaticResponseCommand,
  EnableApplicationLayerAutomaticResponseCommandInput,
  EnableApplicationLayerAutomaticResponseCommandOutput,
} from "./commands/EnableApplicationLayerAutomaticResponseCommand";
import {
  EnableProactiveEngagementCommand,
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
} from "./commands/EnableProactiveEngagementCommand";
import {
  GetSubscriptionStateCommand,
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
} from "./commands/GetSubscriptionStateCommand";
import { ListAttacksCommand, ListAttacksCommandInput, ListAttacksCommandOutput } from "./commands/ListAttacksCommand";
import {
  ListProtectionGroupsCommand,
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "./commands/ListProtectionGroupsCommand";
import {
  ListProtectionsCommand,
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput,
} from "./commands/ListProtectionsCommand";
import {
  ListResourcesInProtectionGroupCommand,
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "./commands/ListResourcesInProtectionGroupCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationLayerAutomaticResponseCommand,
  UpdateApplicationLayerAutomaticResponseCommandInput,
  UpdateApplicationLayerAutomaticResponseCommandOutput,
} from "./commands/UpdateApplicationLayerAutomaticResponseCommand";
import {
  UpdateEmergencyContactSettingsCommand,
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
} from "./commands/UpdateEmergencyContactSettingsCommand";
import {
  UpdateProtectionGroupCommand,
  UpdateProtectionGroupCommandInput,
  UpdateProtectionGroupCommandOutput,
} from "./commands/UpdateProtectionGroupCommand";
import {
  UpdateSubscriptionCommand,
  UpdateSubscriptionCommandInput,
  UpdateSubscriptionCommandOutput,
} from "./commands/UpdateSubscriptionCommand";
import { ShieldClient, ShieldClientConfig } from "./ShieldClient";

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

export interface Shield {
  /**
   * @see {@link AssociateDRTLogBucketCommand}
   */
  associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDRTLogBucketCommandOutput>;
  associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): void;
  associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDRTRoleCommand}
   */
  associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDRTRoleCommandOutput>;
  associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): void;
  associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateHealthCheckCommand}
   */
  associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateHealthCheckCommandOutput>;
  associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): void;
  associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateProactiveEngagementDetailsCommand}
   */
  associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProactiveEngagementDetailsCommandOutput>;
  associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): void;
  associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProtectionCommand}
   */
  createProtection(
    args: CreateProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProtectionCommandOutput>;
  createProtection(
    args: CreateProtectionCommandInput,
    cb: (err: any, data?: CreateProtectionCommandOutput) => void
  ): void;
  createProtection(
    args: CreateProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProtectionGroupCommand}
   */
  createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProtectionGroupCommandOutput>;
  createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): void;
  createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionCommand}
   */
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProtectionCommand}
   */
  deleteProtection(
    args: DeleteProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtectionCommandOutput>;
  deleteProtection(
    args: DeleteProtectionCommandInput,
    cb: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): void;
  deleteProtection(
    args: DeleteProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProtectionGroupCommand}
   */
  deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtectionGroupCommandOutput>;
  deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): void;
  deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionCommand}
   */
  deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionCommandOutput>;
  deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): void;
  deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAttackCommand}
   */
  describeAttack(
    args: DescribeAttackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAttackCommandOutput>;
  describeAttack(args: DescribeAttackCommandInput, cb: (err: any, data?: DescribeAttackCommandOutput) => void): void;
  describeAttack(
    args: DescribeAttackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAttackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAttackStatisticsCommand}
   */
  describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAttackStatisticsCommandOutput>;
  describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): void;
  describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDRTAccessCommand}
   */
  describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDRTAccessCommandOutput>;
  describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): void;
  describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEmergencyContactSettingsCommand}
   */
  describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEmergencyContactSettingsCommandOutput>;
  describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): void;
  describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProtectionCommand}
   */
  describeProtection(
    args: DescribeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectionCommandOutput>;
  describeProtection(
    args: DescribeProtectionCommandInput,
    cb: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): void;
  describeProtection(
    args: DescribeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProtectionGroupCommand}
   */
  describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectionGroupCommandOutput>;
  describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): void;
  describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscriptionCommand}
   */
  describeSubscription(
    args: DescribeSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscriptionCommandOutput>;
  describeSubscription(
    args: DescribeSubscriptionCommandInput,
    cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): void;
  describeSubscription(
    args: DescribeSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableApplicationLayerAutomaticResponseCommand}
   */
  disableApplicationLayerAutomaticResponse(
    args: DisableApplicationLayerAutomaticResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableApplicationLayerAutomaticResponseCommandOutput>;
  disableApplicationLayerAutomaticResponse(
    args: DisableApplicationLayerAutomaticResponseCommandInput,
    cb: (err: any, data?: DisableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;
  disableApplicationLayerAutomaticResponse(
    args: DisableApplicationLayerAutomaticResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableProactiveEngagementCommand}
   */
  disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableProactiveEngagementCommandOutput>;
  disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): void;
  disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDRTLogBucketCommand}
   */
  disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDRTLogBucketCommandOutput>;
  disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): void;
  disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDRTRoleCommand}
   */
  disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDRTRoleCommandOutput>;
  disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): void;
  disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateHealthCheckCommand}
   */
  disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateHealthCheckCommandOutput>;
  disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): void;
  disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableApplicationLayerAutomaticResponseCommand}
   */
  enableApplicationLayerAutomaticResponse(
    args: EnableApplicationLayerAutomaticResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableApplicationLayerAutomaticResponseCommandOutput>;
  enableApplicationLayerAutomaticResponse(
    args: EnableApplicationLayerAutomaticResponseCommandInput,
    cb: (err: any, data?: EnableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;
  enableApplicationLayerAutomaticResponse(
    args: EnableApplicationLayerAutomaticResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableProactiveEngagementCommand}
   */
  enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableProactiveEngagementCommandOutput>;
  enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): void;
  enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriptionStateCommand}
   */
  getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionStateCommandOutput>;
  getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): void;
  getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttacksCommand}
   */
  listAttacks(args: ListAttacksCommandInput, options?: __HttpHandlerOptions): Promise<ListAttacksCommandOutput>;
  listAttacks(args: ListAttacksCommandInput, cb: (err: any, data?: ListAttacksCommandOutput) => void): void;
  listAttacks(
    args: ListAttacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectionGroupsCommand}
   */
  listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectionGroupsCommandOutput>;
  listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): void;
  listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectionsCommand}
   */
  listProtections(
    args: ListProtectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectionsCommandOutput>;
  listProtections(args: ListProtectionsCommandInput, cb: (err: any, data?: ListProtectionsCommandOutput) => void): void;
  listProtections(
    args: ListProtectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesInProtectionGroupCommand}
   */
  listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesInProtectionGroupCommandOutput>;
  listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): void;
  listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationLayerAutomaticResponseCommand}
   */
  updateApplicationLayerAutomaticResponse(
    args: UpdateApplicationLayerAutomaticResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationLayerAutomaticResponseCommandOutput>;
  updateApplicationLayerAutomaticResponse(
    args: UpdateApplicationLayerAutomaticResponseCommandInput,
    cb: (err: any, data?: UpdateApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;
  updateApplicationLayerAutomaticResponse(
    args: UpdateApplicationLayerAutomaticResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationLayerAutomaticResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmergencyContactSettingsCommand}
   */
  updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmergencyContactSettingsCommandOutput>;
  updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): void;
  updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectionGroupCommand}
   */
  updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectionGroupCommandOutput>;
  updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): void;
  updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionCommand}
   */
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionCommandOutput>;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Shield Advanced</fullname>
 *          <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions,
 *          data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>
 */
export class Shield extends ShieldClient implements Shield {}
createAggregatedClient(commands, Shield);
