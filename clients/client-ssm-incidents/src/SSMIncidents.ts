// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateReplicationSetCommand,
  CreateReplicationSetCommandInput,
  CreateReplicationSetCommandOutput,
} from "./commands/CreateReplicationSetCommand";
import {
  CreateResponsePlanCommand,
  CreateResponsePlanCommandInput,
  CreateResponsePlanCommandOutput,
} from "./commands/CreateResponsePlanCommand";
import {
  CreateTimelineEventCommand,
  CreateTimelineEventCommandInput,
  CreateTimelineEventCommandOutput,
} from "./commands/CreateTimelineEventCommand";
import {
  DeleteIncidentRecordCommand,
  DeleteIncidentRecordCommandInput,
  DeleteIncidentRecordCommandOutput,
} from "./commands/DeleteIncidentRecordCommand";
import {
  DeleteReplicationSetCommand,
  DeleteReplicationSetCommandInput,
  DeleteReplicationSetCommandOutput,
} from "./commands/DeleteReplicationSetCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteResponsePlanCommand,
  DeleteResponsePlanCommandInput,
  DeleteResponsePlanCommandOutput,
} from "./commands/DeleteResponsePlanCommand";
import {
  DeleteTimelineEventCommand,
  DeleteTimelineEventCommandInput,
  DeleteTimelineEventCommandOutput,
} from "./commands/DeleteTimelineEventCommand";
import {
  GetIncidentRecordCommand,
  GetIncidentRecordCommandInput,
  GetIncidentRecordCommandOutput,
} from "./commands/GetIncidentRecordCommand";
import {
  GetReplicationSetCommand,
  GetReplicationSetCommandInput,
  GetReplicationSetCommandOutput,
} from "./commands/GetReplicationSetCommand";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import {
  GetResponsePlanCommand,
  GetResponsePlanCommandInput,
  GetResponsePlanCommandOutput,
} from "./commands/GetResponsePlanCommand";
import {
  GetTimelineEventCommand,
  GetTimelineEventCommandInput,
  GetTimelineEventCommandOutput,
} from "./commands/GetTimelineEventCommand";
import {
  ListIncidentRecordsCommand,
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
} from "./commands/ListIncidentRecordsCommand";
import {
  ListRelatedItemsCommand,
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput,
} from "./commands/ListRelatedItemsCommand";
import {
  ListReplicationSetsCommand,
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput,
} from "./commands/ListReplicationSetsCommand";
import {
  ListResponsePlansCommand,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
} from "./commands/ListResponsePlansCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTimelineEventsCommand,
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
} from "./commands/ListTimelineEventsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  StartIncidentCommand,
  StartIncidentCommandInput,
  StartIncidentCommandOutput,
} from "./commands/StartIncidentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeletionProtectionCommand,
  UpdateDeletionProtectionCommandInput,
  UpdateDeletionProtectionCommandOutput,
} from "./commands/UpdateDeletionProtectionCommand";
import {
  UpdateIncidentRecordCommand,
  UpdateIncidentRecordCommandInput,
  UpdateIncidentRecordCommandOutput,
} from "./commands/UpdateIncidentRecordCommand";
import {
  UpdateRelatedItemsCommand,
  UpdateRelatedItemsCommandInput,
  UpdateRelatedItemsCommandOutput,
} from "./commands/UpdateRelatedItemsCommand";
import {
  UpdateReplicationSetCommand,
  UpdateReplicationSetCommandInput,
  UpdateReplicationSetCommandOutput,
} from "./commands/UpdateReplicationSetCommand";
import {
  UpdateResponsePlanCommand,
  UpdateResponsePlanCommandInput,
  UpdateResponsePlanCommandOutput,
} from "./commands/UpdateResponsePlanCommand";
import {
  UpdateTimelineEventCommand,
  UpdateTimelineEventCommandInput,
  UpdateTimelineEventCommandOutput,
} from "./commands/UpdateTimelineEventCommand";
import { SSMIncidentsClient, SSMIncidentsClientConfig } from "./SSMIncidentsClient";

const commands = {
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

export interface SSMIncidents {
  /**
   * @see {@link CreateReplicationSetCommand}
   */
  createReplicationSet(
    args: CreateReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationSetCommandOutput>;
  createReplicationSet(
    args: CreateReplicationSetCommandInput,
    cb: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): void;
  createReplicationSet(
    args: CreateReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResponsePlanCommand}
   */
  createResponsePlan(
    args: CreateResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResponsePlanCommandOutput>;
  createResponsePlan(
    args: CreateResponsePlanCommandInput,
    cb: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): void;
  createResponsePlan(
    args: CreateResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTimelineEventCommand}
   */
  createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTimelineEventCommandOutput>;
  createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    cb: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): void;
  createTimelineEvent(
    args: CreateTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIncidentRecordCommand}
   */
  deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIncidentRecordCommandOutput>;
  deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): void;
  deleteIncidentRecord(
    args: DeleteIncidentRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationSetCommand}
   */
  deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationSetCommandOutput>;
  deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): void;
  deleteReplicationSet(
    args: DeleteReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResponsePlanCommand}
   */
  deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResponsePlanCommandOutput>;
  deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): void;
  deleteResponsePlan(
    args: DeleteResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTimelineEventCommand}
   */
  deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTimelineEventCommandOutput>;
  deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): void;
  deleteTimelineEvent(
    args: DeleteTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIncidentRecordCommand}
   */
  getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIncidentRecordCommandOutput>;
  getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    cb: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): void;
  getIncidentRecord(
    args: GetIncidentRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIncidentRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationSetCommand}
   */
  getReplicationSet(
    args: GetReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationSetCommandOutput>;
  getReplicationSet(
    args: GetReplicationSetCommandInput,
    cb: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): void;
  getReplicationSet(
    args: GetReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponsePlanCommand}
   */
  getResponsePlan(
    args: GetResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponsePlanCommandOutput>;
  getResponsePlan(args: GetResponsePlanCommandInput, cb: (err: any, data?: GetResponsePlanCommandOutput) => void): void;
  getResponsePlan(
    args: GetResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimelineEventCommand}
   */
  getTimelineEvent(
    args: GetTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTimelineEventCommandOutput>;
  getTimelineEvent(
    args: GetTimelineEventCommandInput,
    cb: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): void;
  getTimelineEvent(
    args: GetTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTimelineEventCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIncidentRecordsCommand}
   */
  listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIncidentRecordsCommandOutput>;
  listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): void;
  listIncidentRecords(
    args: ListIncidentRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRelatedItemsCommand}
   */
  listRelatedItems(
    args: ListRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRelatedItemsCommandOutput>;
  listRelatedItems(
    args: ListRelatedItemsCommandInput,
    cb: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): void;
  listRelatedItems(
    args: ListRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplicationSetsCommand}
   */
  listReplicationSets(
    args: ListReplicationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReplicationSetsCommandOutput>;
  listReplicationSets(
    args: ListReplicationSetsCommandInput,
    cb: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): void;
  listReplicationSets(
    args: ListReplicationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplicationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResponsePlansCommand}
   */
  listResponsePlans(
    args: ListResponsePlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResponsePlansCommandOutput>;
  listResponsePlans(
    args: ListResponsePlansCommandInput,
    cb: (err: any, data?: ListResponsePlansCommandOutput) => void
  ): void;
  listResponsePlans(
    args: ListResponsePlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResponsePlansCommandOutput) => void
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
   * @see {@link ListTimelineEventsCommand}
   */
  listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTimelineEventsCommandOutput>;
  listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    cb: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): void;
  listTimelineEvents(
    args: ListTimelineEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTimelineEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartIncidentCommand}
   */
  startIncident(args: StartIncidentCommandInput, options?: __HttpHandlerOptions): Promise<StartIncidentCommandOutput>;
  startIncident(args: StartIncidentCommandInput, cb: (err: any, data?: StartIncidentCommandOutput) => void): void;
  startIncident(
    args: StartIncidentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartIncidentCommandOutput) => void
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
   * @see {@link UpdateDeletionProtectionCommand}
   */
  updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeletionProtectionCommandOutput>;
  updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): void;
  updateDeletionProtection(
    args: UpdateDeletionProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIncidentRecordCommand}
   */
  updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIncidentRecordCommandOutput>;
  updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): void;
  updateIncidentRecord(
    args: UpdateIncidentRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelatedItemsCommand}
   */
  updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelatedItemsCommandOutput>;
  updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): void;
  updateRelatedItems(
    args: UpdateRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationSetCommand}
   */
  updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationSetCommandOutput>;
  updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): void;
  updateReplicationSet(
    args: UpdateReplicationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResponsePlanCommand}
   */
  updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResponsePlanCommandOutput>;
  updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): void;
  updateResponsePlan(
    args: UpdateResponsePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTimelineEventCommand}
   */
  updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTimelineEventCommandOutput>;
  updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): void;
  updateTimelineEvent(
    args: UpdateTimelineEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Systems Manager Incident Manager is an incident management console designed to help users
 *       mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An
 *       incident is any unplanned interruption or reduction in quality of services. </p>
 *          <p>Incident Manager increases incident resolution by notifying responders of impact,
 *       highlighting relevant troubleshooting data, and providing collaboration tools to get services
 *       back up and running. To achieve the primary goal of reducing the time-to-resolution of
 *       critical incidents, Incident Manager automates response plans and enables responder
 *       team escalation. </p>
 */
export class SSMIncidents extends SSMIncidentsClient implements SSMIncidents {}
createAggregatedClient(commands, SSMIncidents);
