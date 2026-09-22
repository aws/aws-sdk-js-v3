// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type BatchGetIncidentFindingsCommandInput,
  type BatchGetIncidentFindingsCommandOutput,
  BatchGetIncidentFindingsCommand,
} from "./commands/BatchGetIncidentFindingsCommand";
import {
  type CreateReplicationSetCommandInput,
  type CreateReplicationSetCommandOutput,
  CreateReplicationSetCommand,
} from "./commands/CreateReplicationSetCommand";
import {
  type CreateResponsePlanCommandInput,
  type CreateResponsePlanCommandOutput,
  CreateResponsePlanCommand,
} from "./commands/CreateResponsePlanCommand";
import {
  type CreateTimelineEventCommandInput,
  type CreateTimelineEventCommandOutput,
  CreateTimelineEventCommand,
} from "./commands/CreateTimelineEventCommand";
import {
  type DeleteIncidentRecordCommandInput,
  type DeleteIncidentRecordCommandOutput,
  DeleteIncidentRecordCommand,
} from "./commands/DeleteIncidentRecordCommand";
import {
  type DeleteReplicationSetCommandInput,
  type DeleteReplicationSetCommandOutput,
  DeleteReplicationSetCommand,
} from "./commands/DeleteReplicationSetCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteResponsePlanCommandInput,
  type DeleteResponsePlanCommandOutput,
  DeleteResponsePlanCommand,
} from "./commands/DeleteResponsePlanCommand";
import {
  type DeleteTimelineEventCommandInput,
  type DeleteTimelineEventCommandOutput,
  DeleteTimelineEventCommand,
} from "./commands/DeleteTimelineEventCommand";
import {
  type GetIncidentRecordCommandInput,
  type GetIncidentRecordCommandOutput,
  GetIncidentRecordCommand,
} from "./commands/GetIncidentRecordCommand";
import {
  type GetReplicationSetCommandInput,
  type GetReplicationSetCommandOutput,
  GetReplicationSetCommand,
} from "./commands/GetReplicationSetCommand";
import {
  type GetResourcePoliciesCommandInput,
  type GetResourcePoliciesCommandOutput,
  GetResourcePoliciesCommand,
} from "./commands/GetResourcePoliciesCommand";
import {
  type GetResponsePlanCommandInput,
  type GetResponsePlanCommandOutput,
  GetResponsePlanCommand,
} from "./commands/GetResponsePlanCommand";
import {
  type GetTimelineEventCommandInput,
  type GetTimelineEventCommandOutput,
  GetTimelineEventCommand,
} from "./commands/GetTimelineEventCommand";
import {
  type ListIncidentFindingsCommandInput,
  type ListIncidentFindingsCommandOutput,
  ListIncidentFindingsCommand,
} from "./commands/ListIncidentFindingsCommand";
import {
  type ListIncidentRecordsCommandInput,
  type ListIncidentRecordsCommandOutput,
  ListIncidentRecordsCommand,
} from "./commands/ListIncidentRecordsCommand";
import {
  type ListRelatedItemsCommandInput,
  type ListRelatedItemsCommandOutput,
  ListRelatedItemsCommand,
} from "./commands/ListRelatedItemsCommand";
import {
  type ListReplicationSetsCommandInput,
  type ListReplicationSetsCommandOutput,
  ListReplicationSetsCommand,
} from "./commands/ListReplicationSetsCommand";
import {
  type ListResponsePlansCommandInput,
  type ListResponsePlansCommandOutput,
  ListResponsePlansCommand,
} from "./commands/ListResponsePlansCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTimelineEventsCommandInput,
  type ListTimelineEventsCommandOutput,
  ListTimelineEventsCommand,
} from "./commands/ListTimelineEventsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type StartIncidentCommandInput,
  type StartIncidentCommandOutput,
  StartIncidentCommand,
} from "./commands/StartIncidentCommand";
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
  type UpdateDeletionProtectionCommandInput,
  type UpdateDeletionProtectionCommandOutput,
  UpdateDeletionProtectionCommand,
} from "./commands/UpdateDeletionProtectionCommand";
import {
  type UpdateIncidentRecordCommandInput,
  type UpdateIncidentRecordCommandOutput,
  UpdateIncidentRecordCommand,
} from "./commands/UpdateIncidentRecordCommand";
import {
  type UpdateRelatedItemsCommandInput,
  type UpdateRelatedItemsCommandOutput,
  UpdateRelatedItemsCommand,
} from "./commands/UpdateRelatedItemsCommand";
import {
  type UpdateReplicationSetCommandInput,
  type UpdateReplicationSetCommandOutput,
  UpdateReplicationSetCommand,
} from "./commands/UpdateReplicationSetCommand";
import {
  type UpdateResponsePlanCommandInput,
  type UpdateResponsePlanCommandOutput,
  UpdateResponsePlanCommand,
} from "./commands/UpdateResponsePlanCommand";
import {
  type UpdateTimelineEventCommandInput,
  type UpdateTimelineEventCommandOutput,
  UpdateTimelineEventCommand,
} from "./commands/UpdateTimelineEventCommand";
import type { ResourceNotFoundException } from "./models/errors";
import type { SSMIncidentsServiceException } from "./models/SSMIncidentsServiceException";
import { paginateGetResourcePolicies } from "./pagination/GetResourcePoliciesPaginator";
import { paginateListIncidentFindings } from "./pagination/ListIncidentFindingsPaginator";
import { paginateListIncidentRecords } from "./pagination/ListIncidentRecordsPaginator";
import { paginateListRelatedItems } from "./pagination/ListRelatedItemsPaginator";
import { paginateListReplicationSets } from "./pagination/ListReplicationSetsPaginator";
import { paginateListResponsePlans } from "./pagination/ListResponsePlansPaginator";
import { paginateListTimelineEvents } from "./pagination/ListTimelineEventsPaginator";
import { SSMIncidentsClient } from "./SSMIncidentsClient";
import { waitUntilWaitForReplicationSetActive } from "./waiters/waitForWaitForReplicationSetActive";
import { waitUntilWaitForReplicationSetDeleted } from "./waiters/waitForWaitForReplicationSetDeleted";

const commands = {
  BatchGetIncidentFindingsCommand,
  CreateReplicationSetCommand,
  CreateResponsePlanCommand,
  CreateTimelineEventCommand,
  DeleteIncidentRecordCommand,
  DeleteReplicationSetCommand,
  DeleteResourcePolicyCommand,
  DeleteResponsePlanCommand,
  DeleteTimelineEventCommand,
  GetIncidentRecordCommand,
  GetReplicationSetCommand,
  GetResourcePoliciesCommand,
  GetResponsePlanCommand,
  GetTimelineEventCommand,
  ListIncidentFindingsCommand,
  ListIncidentRecordsCommand,
  ListRelatedItemsCommand,
  ListReplicationSetsCommand,
  ListResponsePlansCommand,
  ListTagsForResourceCommand,
  ListTimelineEventsCommand,
  PutResourcePolicyCommand,
  StartIncidentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDeletionProtectionCommand,
  UpdateIncidentRecordCommand,
  UpdateRelatedItemsCommand,
  UpdateReplicationSetCommand,
  UpdateResponsePlanCommand,
  UpdateTimelineEventCommand,
};
const paginators = {
  paginateGetResourcePolicies,
  paginateListIncidentFindings,
  paginateListIncidentRecords,
  paginateListRelatedItems,
  paginateListReplicationSets,
  paginateListResponsePlans,
  paginateListTimelineEvents,
};
const waiters = {
  waitUntilWaitForReplicationSetActive,
  waitUntilWaitForReplicationSetDeleted,
};

/**
 * @public
 */
export interface SSMIncidentsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SSMIncidents {
  /**
   * @see {@link BatchGetIncidentFindingsCommand}
   */
  batchGetIncidentFindings(
    args: BatchGetIncidentFindingsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<BatchGetIncidentFindingsCommandOutput>;
  batchGetIncidentFindings(
    args: BatchGetIncidentFindingsCommandInput,
    cb: (err: any, data?: BatchGetIncidentFindingsCommandOutput) => void
  ): void;
  batchGetIncidentFindings(
    args: BatchGetIncidentFindingsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: BatchGetIncidentFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationSetCommand}
   */
  createReplicationSet(
    args: CreateReplicationSetCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<CreateReplicationSetCommandOutput>;
  createReplicationSet(
    args: CreateReplicationSetCommandInput,
    cb: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): void;
  createReplicationSet(
    args: CreateReplicationSetCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResponsePlanCommand}
   */
  createResponsePlan(
    args: CreateResponsePlanCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<CreateResponsePlanCommandOutput>;
  createResponsePlan(
    args: CreateResponsePlanCommandInput,
    cb: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): void;
  createResponsePlan(
    args: CreateResponsePlanCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTimelineEventCommand}
   */
  createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<CreateTimelineEventCommandOutput>;
  createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    cb: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): void;
  createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIncidentRecordCommand}
   */
  deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<DeleteIncidentRecordCommandOutput>;
  deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): void;
  deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationSetCommand}
   */
  deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<DeleteReplicationSetCommandOutput>;
  deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): void;
  deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResponsePlanCommand}
   */
  deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<DeleteResponsePlanCommandOutput>;
  deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): void;
  deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTimelineEventCommand}
   */
  deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<DeleteTimelineEventCommandOutput>;
  deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): void;
  deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIncidentRecordCommand}
   */
  getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<GetIncidentRecordCommandOutput>;
  getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    cb: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): void;
  getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationSetCommand}
   */
  getReplicationSet(
    args: GetReplicationSetCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<GetReplicationSetCommandOutput>;
  getReplicationSet(
    args: GetReplicationSetCommandInput,
    cb: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): void;
  getReplicationSet(
    args: GetReplicationSetCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponsePlanCommand}
   */
  getResponsePlan(
    args: GetResponsePlanCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<GetResponsePlanCommandOutput>;
  getResponsePlan(
    args: GetResponsePlanCommandInput,
    cb: (err: any, data?: GetResponsePlanCommandOutput) => void
  ): void;
  getResponsePlan(
    args: GetResponsePlanCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: GetResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimelineEventCommand}
   */
  getTimelineEvent(
    args: GetTimelineEventCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<GetTimelineEventCommandOutput>;
  getTimelineEvent(
    args: GetTimelineEventCommandInput,
    cb: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): void;
  getTimelineEvent(
    args: GetTimelineEventCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIncidentFindingsCommand}
   */
  listIncidentFindings(
    args: ListIncidentFindingsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListIncidentFindingsCommandOutput>;
  listIncidentFindings(
    args: ListIncidentFindingsCommandInput,
    cb: (err: any, data?: ListIncidentFindingsCommandOutput) => void
  ): void;
  listIncidentFindings(
    args: ListIncidentFindingsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListIncidentFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIncidentRecordsCommand}
   */
  listIncidentRecords(): Promise<ListIncidentRecordsCommandOutput>;
  listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListIncidentRecordsCommandOutput>;
  listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): void;
  listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRelatedItemsCommand}
   */
  listRelatedItems(
    args: ListRelatedItemsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListRelatedItemsCommandOutput>;
  listRelatedItems(
    args: ListRelatedItemsCommandInput,
    cb: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): void;
  listRelatedItems(
    args: ListRelatedItemsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplicationSetsCommand}
   */
  listReplicationSets(): Promise<ListReplicationSetsCommandOutput>;
  listReplicationSets(
    args: ListReplicationSetsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListReplicationSetsCommandOutput>;
  listReplicationSets(
    args: ListReplicationSetsCommandInput,
    cb: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): void;
  listReplicationSets(
    args: ListReplicationSetsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResponsePlansCommand}
   */
  listResponsePlans(): Promise<ListResponsePlansCommandOutput>;
  listResponsePlans(
    args: ListResponsePlansCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListResponsePlansCommandOutput>;
  listResponsePlans(
    args: ListResponsePlansCommandInput,
    cb: (err: any, data?: ListResponsePlansCommandOutput) => void
  ): void;
  listResponsePlans(
    args: ListResponsePlansCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListResponsePlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTimelineEventsCommand}
   */
  listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<ListTimelineEventsCommandOutput>;
  listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    cb: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): void;
  listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartIncidentCommand}
   */
  startIncident(
    args: StartIncidentCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<StartIncidentCommandOutput>;
  startIncident(
    args: StartIncidentCommandInput,
    cb: (err: any, data?: StartIncidentCommandOutput) => void
  ): void;
  startIncident(
    args: StartIncidentCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: StartIncidentCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeletionProtectionCommand}
   */
  updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UpdateDeletionProtectionCommandOutput>;
  updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): void;
  updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIncidentRecordCommand}
   */
  updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UpdateIncidentRecordCommandOutput>;
  updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): void;
  updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelatedItemsCommand}
   */
  updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UpdateRelatedItemsCommandOutput>;
  updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): void;
  updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationSetCommand}
   */
  updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UpdateReplicationSetCommandOutput>;
  updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): void;
  updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResponsePlanCommand}
   */
  updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UpdateResponsePlanCommandOutput>;
  updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): void;
  updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTimelineEventCommand}
   */
  updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    options?: SSMIncidentsRequestOptions
  ): Promise<UpdateTimelineEventCommandOutput>;
  updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): void;
  updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    options: SSMIncidentsRequestOptions,
    cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourcePoliciesCommandOutput}.
   */
  paginateGetResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourcePoliciesCommandOutput>;

  /**
   * @see {@link ListIncidentFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIncidentFindingsCommandOutput}.
   */
  paginateListIncidentFindings(
    args: ListIncidentFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIncidentFindingsCommandOutput>;

  /**
   * @see {@link ListIncidentRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIncidentRecordsCommandOutput}.
   */
  paginateListIncidentRecords(
    args?: ListIncidentRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIncidentRecordsCommandOutput>;

  /**
   * @see {@link ListRelatedItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRelatedItemsCommandOutput}.
   */
  paginateListRelatedItems(
    args: ListRelatedItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRelatedItemsCommandOutput>;

  /**
   * @see {@link ListReplicationSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReplicationSetsCommandOutput}.
   */
  paginateListReplicationSets(
    args?: ListReplicationSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReplicationSetsCommandOutput>;

  /**
   * @see {@link ListResponsePlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResponsePlansCommandOutput}.
   */
  paginateListResponsePlans(
    args?: ListResponsePlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResponsePlansCommandOutput>;

  /**
   * @see {@link ListTimelineEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTimelineEventsCommandOutput}.
   */
  paginateListTimelineEvents(
    args: ListTimelineEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTimelineEventsCommandOutput>;

  /**
   * @see {@link GetReplicationSetCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWaitForReplicationSetActive(
    args: GetReplicationSetCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<SSMIncidents>, "client">
  ): Promise<WaiterResult<GetReplicationSetCommandOutput>>;

  /**
   * @see {@link GetReplicationSetCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilWaitForReplicationSetDeleted(
    args: GetReplicationSetCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<SSMIncidents>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;
}

/**
 * <p>Systems Manager Incident Manager is an incident management console designed to help users
 *       mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An
 *       incident is any unplanned interruption or reduction in quality of services. </p>
 *          <p>Incident Manager increases incident resolution by notifying responders of impact,
 *       highlighting relevant troubleshooting data, and providing collaboration tools to get services
 *       back up and running. To achieve the primary goal of reducing the time-to-resolution of
 *       critical incidents, Incident Manager automates response plans and enables responder
 *       team escalation. </p>
 * @public
 */
export class SSMIncidents extends SSMIncidentsClient implements SSMIncidents {}
createAggregatedClient(commands, SSMIncidents, { paginators, waiters });
