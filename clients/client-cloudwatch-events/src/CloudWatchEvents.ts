// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { CloudWatchEventsClient } from "./CloudWatchEventsClient";
import {
  type ActivateEventSourceCommandInput,
  type ActivateEventSourceCommandOutput,
  ActivateEventSourceCommand,
} from "./commands/ActivateEventSourceCommand";
import {
  type CancelReplayCommandInput,
  type CancelReplayCommandOutput,
  CancelReplayCommand,
} from "./commands/CancelReplayCommand";
import {
  type CreateApiDestinationCommandInput,
  type CreateApiDestinationCommandOutput,
  CreateApiDestinationCommand,
} from "./commands/CreateApiDestinationCommand";
import {
  type CreateArchiveCommandInput,
  type CreateArchiveCommandOutput,
  CreateArchiveCommand,
} from "./commands/CreateArchiveCommand";
import {
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateConnectionCommand,
} from "./commands/CreateConnectionCommand";
import {
  type CreateEventBusCommandInput,
  type CreateEventBusCommandOutput,
  CreateEventBusCommand,
} from "./commands/CreateEventBusCommand";
import {
  type CreatePartnerEventSourceCommandInput,
  type CreatePartnerEventSourceCommandOutput,
  CreatePartnerEventSourceCommand,
} from "./commands/CreatePartnerEventSourceCommand";
import {
  type DeactivateEventSourceCommandInput,
  type DeactivateEventSourceCommandOutput,
  DeactivateEventSourceCommand,
} from "./commands/DeactivateEventSourceCommand";
import {
  type DeauthorizeConnectionCommandInput,
  type DeauthorizeConnectionCommandOutput,
  DeauthorizeConnectionCommand,
} from "./commands/DeauthorizeConnectionCommand";
import {
  type DeleteApiDestinationCommandInput,
  type DeleteApiDestinationCommandOutput,
  DeleteApiDestinationCommand,
} from "./commands/DeleteApiDestinationCommand";
import {
  type DeleteArchiveCommandInput,
  type DeleteArchiveCommandOutput,
  DeleteArchiveCommand,
} from "./commands/DeleteArchiveCommand";
import {
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteConnectionCommand,
} from "./commands/DeleteConnectionCommand";
import {
  type DeleteEventBusCommandInput,
  type DeleteEventBusCommandOutput,
  DeleteEventBusCommand,
} from "./commands/DeleteEventBusCommand";
import {
  type DeletePartnerEventSourceCommandInput,
  type DeletePartnerEventSourceCommandOutput,
  DeletePartnerEventSourceCommand,
} from "./commands/DeletePartnerEventSourceCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DescribeApiDestinationCommandInput,
  type DescribeApiDestinationCommandOutput,
  DescribeApiDestinationCommand,
} from "./commands/DescribeApiDestinationCommand";
import {
  type DescribeArchiveCommandInput,
  type DescribeArchiveCommandOutput,
  DescribeArchiveCommand,
} from "./commands/DescribeArchiveCommand";
import {
  type DescribeConnectionCommandInput,
  type DescribeConnectionCommandOutput,
  DescribeConnectionCommand,
} from "./commands/DescribeConnectionCommand";
import {
  type DescribeEventBusCommandInput,
  type DescribeEventBusCommandOutput,
  DescribeEventBusCommand,
} from "./commands/DescribeEventBusCommand";
import {
  type DescribeEventSourceCommandInput,
  type DescribeEventSourceCommandOutput,
  DescribeEventSourceCommand,
} from "./commands/DescribeEventSourceCommand";
import {
  type DescribePartnerEventSourceCommandInput,
  type DescribePartnerEventSourceCommandOutput,
  DescribePartnerEventSourceCommand,
} from "./commands/DescribePartnerEventSourceCommand";
import {
  type DescribeReplayCommandInput,
  type DescribeReplayCommandOutput,
  DescribeReplayCommand,
} from "./commands/DescribeReplayCommand";
import {
  type DescribeRuleCommandInput,
  type DescribeRuleCommandOutput,
  DescribeRuleCommand,
} from "./commands/DescribeRuleCommand";
import {
  type DisableRuleCommandInput,
  type DisableRuleCommandOutput,
  DisableRuleCommand,
} from "./commands/DisableRuleCommand";
import {
  type EnableRuleCommandInput,
  type EnableRuleCommandOutput,
  EnableRuleCommand,
} from "./commands/EnableRuleCommand";
import {
  type ListApiDestinationsCommandInput,
  type ListApiDestinationsCommandOutput,
  ListApiDestinationsCommand,
} from "./commands/ListApiDestinationsCommand";
import {
  type ListArchivesCommandInput,
  type ListArchivesCommandOutput,
  ListArchivesCommand,
} from "./commands/ListArchivesCommand";
import {
  type ListConnectionsCommandInput,
  type ListConnectionsCommandOutput,
  ListConnectionsCommand,
} from "./commands/ListConnectionsCommand";
import {
  type ListEventBusesCommandInput,
  type ListEventBusesCommandOutput,
  ListEventBusesCommand,
} from "./commands/ListEventBusesCommand";
import {
  type ListEventSourcesCommandInput,
  type ListEventSourcesCommandOutput,
  ListEventSourcesCommand,
} from "./commands/ListEventSourcesCommand";
import {
  type ListPartnerEventSourceAccountsCommandInput,
  type ListPartnerEventSourceAccountsCommandOutput,
  ListPartnerEventSourceAccountsCommand,
} from "./commands/ListPartnerEventSourceAccountsCommand";
import {
  type ListPartnerEventSourcesCommandInput,
  type ListPartnerEventSourcesCommandOutput,
  ListPartnerEventSourcesCommand,
} from "./commands/ListPartnerEventSourcesCommand";
import {
  type ListReplaysCommandInput,
  type ListReplaysCommandOutput,
  ListReplaysCommand,
} from "./commands/ListReplaysCommand";
import {
  type ListRuleNamesByTargetCommandInput,
  type ListRuleNamesByTargetCommandOutput,
  ListRuleNamesByTargetCommand,
} from "./commands/ListRuleNamesByTargetCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTargetsByRuleCommandInput,
  type ListTargetsByRuleCommandOutput,
  ListTargetsByRuleCommand,
} from "./commands/ListTargetsByRuleCommand";
import { type PutEventsCommandInput, type PutEventsCommandOutput, PutEventsCommand } from "./commands/PutEventsCommand";
import {
  type PutPartnerEventsCommandInput,
  type PutPartnerEventsCommandOutput,
  PutPartnerEventsCommand,
} from "./commands/PutPartnerEventsCommand";
import {
  type PutPermissionCommandInput,
  type PutPermissionCommandOutput,
  PutPermissionCommand,
} from "./commands/PutPermissionCommand";
import { type PutRuleCommandInput, type PutRuleCommandOutput, PutRuleCommand } from "./commands/PutRuleCommand";
import {
  type PutTargetsCommandInput,
  type PutTargetsCommandOutput,
  PutTargetsCommand,
} from "./commands/PutTargetsCommand";
import {
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  RemovePermissionCommand,
} from "./commands/RemovePermissionCommand";
import {
  type RemoveTargetsCommandInput,
  type RemoveTargetsCommandOutput,
  RemoveTargetsCommand,
} from "./commands/RemoveTargetsCommand";
import {
  type StartReplayCommandInput,
  type StartReplayCommandOutput,
  StartReplayCommand,
} from "./commands/StartReplayCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestEventPatternCommandInput,
  type TestEventPatternCommandOutput,
  TestEventPatternCommand,
} from "./commands/TestEventPatternCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApiDestinationCommandInput,
  type UpdateApiDestinationCommandOutput,
  UpdateApiDestinationCommand,
} from "./commands/UpdateApiDestinationCommand";
import {
  type UpdateArchiveCommandInput,
  type UpdateArchiveCommandOutput,
  UpdateArchiveCommand,
} from "./commands/UpdateArchiveCommand";
import {
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
  UpdateConnectionCommand,
} from "./commands/UpdateConnectionCommand";

const commands = {
  ActivateEventSourceCommand,
  CancelReplayCommand,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
};

/**
 * @public
 */
export interface CloudWatchEventsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudWatchEvents {
  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ActivateEventSourceCommandOutput>;
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(
    args: CancelReplayCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<CancelReplayCommandOutput>;
  cancelReplay(
    args: CancelReplayCommandInput,
    cb: (err: any, data?: CancelReplayCommandOutput) => void
  ): void;
  cancelReplay(
    args: CancelReplayCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: CancelReplayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<CreateApiDestinationCommandOutput>;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<CreateArchiveCommandOutput>;
  createArchive(
    args: CreateArchiveCommandInput,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;
  createArchive(
    args: CreateArchiveCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<CreateEventBusCommandOutput>;
  createEventBus(
    args: CreateEventBusCommandInput,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;
  createEventBus(
    args: CreateEventBusCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<CreatePartnerEventSourceCommandOutput>;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeactivateEventSourceCommandOutput>;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeauthorizeConnectionCommandOutput>;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeleteApiDestinationCommandOutput>;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeleteArchiveCommandOutput>;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeleteEventBusCommandOutput>;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeletePartnerEventSourceCommandOutput>;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeApiDestinationCommandOutput>;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeArchiveCommandOutput>;
  describeArchive(
    args: DescribeArchiveCommandInput,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;
  describeArchive(
    args: DescribeArchiveCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeConnectionCommandOutput>;
  describeConnection(
    args: DescribeConnectionCommandInput,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;
  describeConnection(
    args: DescribeConnectionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(): Promise<DescribeEventBusCommandOutput>;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeEventBusCommandOutput>;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeEventSourceCommandOutput>;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribePartnerEventSourceCommandOutput>;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeReplayCommandOutput>;
  describeReplay(
    args: DescribeReplayCommandInput,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;
  describeReplay(
    args: DescribeReplayCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DescribeRuleCommandOutput>;
  describeRule(
    args: DescribeRuleCommandInput,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
  describeRule(
    args: DescribeRuleCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<DisableRuleCommandOutput>;
  disableRule(
    args: DisableRuleCommandInput,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;
  disableRule(
    args: DisableRuleCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(
    args: EnableRuleCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<EnableRuleCommandOutput>;
  enableRule(
    args: EnableRuleCommandInput,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;
  enableRule(
    args: EnableRuleCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(): Promise<ListApiDestinationsCommandOutput>;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListApiDestinationsCommandOutput>;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(): Promise<ListArchivesCommandOutput>;
  listArchives(
    args: ListArchivesCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListArchivesCommandOutput>;
  listArchives(
    args: ListArchivesCommandInput,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;
  listArchives(
    args: ListArchivesCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(): Promise<ListConnectionsCommandOutput>;
  listConnections(
    args: ListConnectionsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(): Promise<ListEventBusesCommandOutput>;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListEventBusesCommandOutput>;
  listEventBuses(
    args: ListEventBusesCommandInput,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(): Promise<ListEventSourcesCommandOutput>;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListEventSourcesCommandOutput>;
  listEventSources(
    args: ListEventSourcesCommandInput,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListPartnerEventSourceAccountsCommandOutput>;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListPartnerEventSourcesCommandOutput>;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(): Promise<ListReplaysCommandOutput>;
  listReplays(
    args: ListReplaysCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListReplaysCommandOutput>;
  listReplays(
    args: ListReplaysCommandInput,
    cb: (err: any, data?: ListReplaysCommandOutput) => void
  ): void;
  listReplays(
    args: ListReplaysCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListReplaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListRuleNamesByTargetCommandOutput>;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  listRules(
    args: ListRulesCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<ListTargetsByRuleCommandOutput>;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<PutEventsCommandOutput>;
  putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<PutPartnerEventsCommandOutput>;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(): Promise<PutPermissionCommandOutput>;
  putPermission(
    args: PutPermissionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<PutPermissionCommandOutput>;
  putPermission(
    args: PutPermissionCommandInput,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  putPermission(
    args: PutPermissionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(
    args: PutRuleCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<PutRuleCommandOutput>;
  putRule(
    args: PutRuleCommandInput,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;
  putRule(
    args: PutRuleCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(
    args: PutTargetsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<PutTargetsCommandOutput>;
  putTargets(
    args: PutTargetsCommandInput,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;
  putTargets(
    args: PutTargetsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(
    args: RemoveTargetsCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<RemoveTargetsCommandOutput>;
  removeTargets(
    args: RemoveTargetsCommandInput,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;
  removeTargets(
    args: RemoveTargetsCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(
    args: StartReplayCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<StartReplayCommandOutput>;
  startReplay(
    args: StartReplayCommandInput,
    cb: (err: any, data?: StartReplayCommandOutput) => void
  ): void;
  startReplay(
    args: StartReplayCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: StartReplayCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<TestEventPatternCommandOutput>;
  testEventPattern(
    args: TestEventPatternCommandInput,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;
  testEventPattern(
    args: TestEventPatternCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<UpdateApiDestinationCommandOutput>;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<UpdateArchiveCommandOutput>;
  updateArchive(
    args: UpdateArchiveCommandInput,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;
  updateArchive(
    args: UpdateArchiveCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: CloudWatchEventsRequestOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: CloudWatchEventsRequestOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon EventBridge helps you to respond to state changes in your Amazon Web Services resources. When your
 *       resources change state, they automatically send events to an event stream. You can create
 *       rules that match selected events in the stream and route them to targets to take action. You
 *       can also use rules to take action on a predetermined schedule. For example, you can configure
 *       rules to:</p>
 *          <ul>
 *             <li>
 *                <p>Automatically invoke an Lambda function to update DNS entries when an event
 *           notifies you that Amazon EC2 instance enters the running state.</p>
 *             </li>
 *             <li>
 *                <p>Direct specific API records from CloudTrail to an Amazon Kinesis data stream for
 *           detailed analysis of potential security or availability risks.</p>
 *             </li>
 *             <li>
 *                <p>Periodically invoke a built-in target to create a snapshot of an Amazon EBS
 *           volume.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the features of Amazon EventBridge, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide">Amazon EventBridge User
 *         Guide</a>.</p>
 * @public
 */
export class CloudWatchEvents extends CloudWatchEventsClient implements CloudWatchEvents {}
createAggregatedClient(commands, CloudWatchEvents);
