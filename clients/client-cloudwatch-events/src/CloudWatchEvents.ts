// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudWatchEventsClient, CloudWatchEventsClientConfig } from "./CloudWatchEventsClient";
import {
  ActivateEventSourceCommand,
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "./commands/ActivateEventSourceCommand";
import {
  CancelReplayCommand,
  CancelReplayCommandInput,
  CancelReplayCommandOutput,
} from "./commands/CancelReplayCommand";
import {
  CreateApiDestinationCommand,
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
} from "./commands/CreateApiDestinationCommand";
import {
  CreateArchiveCommand,
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
} from "./commands/CreateArchiveCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateEventBusCommand,
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput,
} from "./commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommand,
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "./commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommand,
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "./commands/DeactivateEventSourceCommand";
import {
  DeauthorizeConnectionCommand,
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
} from "./commands/DeauthorizeConnectionCommand";
import {
  DeleteApiDestinationCommand,
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
} from "./commands/DeleteApiDestinationCommand";
import {
  DeleteArchiveCommand,
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
} from "./commands/DeleteArchiveCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEventBusCommand,
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput,
} from "./commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommand,
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "./commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DescribeApiDestinationCommand,
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
} from "./commands/DescribeApiDestinationCommand";
import {
  DescribeArchiveCommand,
  DescribeArchiveCommandInput,
  DescribeArchiveCommandOutput,
} from "./commands/DescribeArchiveCommand";
import {
  DescribeConnectionCommand,
  DescribeConnectionCommandInput,
  DescribeConnectionCommandOutput,
} from "./commands/DescribeConnectionCommand";
import {
  DescribeEventBusCommand,
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
} from "./commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommand,
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "./commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommand,
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "./commands/DescribePartnerEventSourceCommand";
import {
  DescribeReplayCommand,
  DescribeReplayCommandInput,
  DescribeReplayCommandOutput,
} from "./commands/DescribeReplayCommand";
import {
  DescribeRuleCommand,
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput,
} from "./commands/DescribeRuleCommand";
import { DisableRuleCommand, DisableRuleCommandInput, DisableRuleCommandOutput } from "./commands/DisableRuleCommand";
import { EnableRuleCommand, EnableRuleCommandInput, EnableRuleCommandOutput } from "./commands/EnableRuleCommand";
import {
  ListApiDestinationsCommand,
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
} from "./commands/ListApiDestinationsCommand";
import {
  ListArchivesCommand,
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
} from "./commands/ListArchivesCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListEventBusesCommand,
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
} from "./commands/ListEventBusesCommand";
import {
  ListEventSourcesCommand,
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
} from "./commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "./commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommand,
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "./commands/ListPartnerEventSourcesCommand";
import { ListReplaysCommand, ListReplaysCommandInput, ListReplaysCommandOutput } from "./commands/ListReplaysCommand";
import {
  ListRuleNamesByTargetCommand,
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "./commands/ListRuleNamesByTargetCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsByRuleCommand,
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
} from "./commands/ListTargetsByRuleCommand";
import { PutEventsCommand, PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import {
  PutPartnerEventsCommand,
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
} from "./commands/PutPartnerEventsCommand";
import {
  PutPermissionCommand,
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
} from "./commands/PutPermissionCommand";
import { PutRuleCommand, PutRuleCommandInput, PutRuleCommandOutput } from "./commands/PutRuleCommand";
import { PutTargetsCommand, PutTargetsCommandInput, PutTargetsCommandOutput } from "./commands/PutTargetsCommand";
import {
  RemovePermissionCommand,
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  RemoveTargetsCommand,
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
} from "./commands/RemoveTargetsCommand";
import { StartReplayCommand, StartReplayCommandInput, StartReplayCommandOutput } from "./commands/StartReplayCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestEventPatternCommand,
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
} from "./commands/TestEventPatternCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApiDestinationCommand,
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
} from "./commands/UpdateApiDestinationCommand";
import {
  UpdateArchiveCommand,
  UpdateArchiveCommandInput,
  UpdateArchiveCommandOutput,
} from "./commands/UpdateArchiveCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
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

export interface CloudWatchEvents {
  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateEventSourceCommandOutput>;
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(args: CancelReplayCommandInput, options?: __HttpHandlerOptions): Promise<CancelReplayCommandOutput>;
  cancelReplay(args: CancelReplayCommandInput, cb: (err: any, data?: CancelReplayCommandOutput) => void): void;
  cancelReplay(
    args: CancelReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReplayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiDestinationCommandOutput>;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(args: CreateArchiveCommandInput, options?: __HttpHandlerOptions): Promise<CreateArchiveCommandOutput>;
  createArchive(args: CreateArchiveCommandInput, cb: (err: any, data?: CreateArchiveCommandOutput) => void): void;
  createArchive(
    args: CreateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventBusCommandOutput>;
  createEventBus(args: CreateEventBusCommandInput, cb: (err: any, data?: CreateEventBusCommandOutput) => void): void;
  createEventBus(
    args: CreateEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartnerEventSourceCommandOutput>;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateEventSourceCommandOutput>;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeauthorizeConnectionCommandOutput>;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiDestinationCommandOutput>;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(args: DeleteArchiveCommandInput, options?: __HttpHandlerOptions): Promise<DeleteArchiveCommandOutput>;
  deleteArchive(args: DeleteArchiveCommandInput, cb: (err: any, data?: DeleteArchiveCommandOutput) => void): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventBusCommandOutput>;
  deleteEventBus(args: DeleteEventBusCommandInput, cb: (err: any, data?: DeleteEventBusCommandOutput) => void): void;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartnerEventSourceCommandOutput>;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApiDestinationCommandOutput>;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeArchiveCommandOutput>;
  describeArchive(args: DescribeArchiveCommandInput, cb: (err: any, data?: DescribeArchiveCommandOutput) => void): void;
  describeArchive(
    args: DescribeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionCommandOutput>;
  describeConnection(
    args: DescribeConnectionCommandInput,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;
  describeConnection(
    args: DescribeConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventBusCommandOutput>;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSourceCommandOutput>;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePartnerEventSourceCommandOutput>;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplayCommandOutput>;
  describeReplay(args: DescribeReplayCommandInput, cb: (err: any, data?: DescribeReplayCommandOutput) => void): void;
  describeReplay(
    args: DescribeReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(args: DescribeRuleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRuleCommandOutput>;
  describeRule(args: DescribeRuleCommandInput, cb: (err: any, data?: DescribeRuleCommandOutput) => void): void;
  describeRule(
    args: DescribeRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(args: DisableRuleCommandInput, options?: __HttpHandlerOptions): Promise<DisableRuleCommandOutput>;
  disableRule(args: DisableRuleCommandInput, cb: (err: any, data?: DisableRuleCommandOutput) => void): void;
  disableRule(
    args: DisableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(args: EnableRuleCommandInput, options?: __HttpHandlerOptions): Promise<EnableRuleCommandOutput>;
  enableRule(args: EnableRuleCommandInput, cb: (err: any, data?: EnableRuleCommandOutput) => void): void;
  enableRule(
    args: EnableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApiDestinationsCommandOutput>;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(args: ListArchivesCommandInput, options?: __HttpHandlerOptions): Promise<ListArchivesCommandOutput>;
  listArchives(args: ListArchivesCommandInput, cb: (err: any, data?: ListArchivesCommandOutput) => void): void;
  listArchives(
    args: ListArchivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(args: ListConnectionsCommandInput, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventBusesCommandOutput>;
  listEventBuses(args: ListEventBusesCommandInput, cb: (err: any, data?: ListEventBusesCommandOutput) => void): void;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSourcesCommandOutput>;
  listEventSources(
    args: ListEventSourcesCommandInput,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerEventSourceAccountsCommandOutput>;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerEventSourcesCommandOutput>;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(args: ListReplaysCommandInput, options?: __HttpHandlerOptions): Promise<ListReplaysCommandOutput>;
  listReplays(args: ListReplaysCommandInput, cb: (err: any, data?: ListReplaysCommandOutput) => void): void;
  listReplays(
    args: ListReplaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleNamesByTargetCommandOutput>;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
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
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsByRuleCommandOutput>;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(args: PutEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutEventsCommandOutput>;
  putEvents(args: PutEventsCommandInput, cb: (err: any, data?: PutEventsCommandOutput) => void): void;
  putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPartnerEventsCommandOutput>;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(args: PutPermissionCommandInput, options?: __HttpHandlerOptions): Promise<PutPermissionCommandOutput>;
  putPermission(args: PutPermissionCommandInput, cb: (err: any, data?: PutPermissionCommandOutput) => void): void;
  putPermission(
    args: PutPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(args: PutRuleCommandInput, options?: __HttpHandlerOptions): Promise<PutRuleCommandOutput>;
  putRule(args: PutRuleCommandInput, cb: (err: any, data?: PutRuleCommandOutput) => void): void;
  putRule(
    args: PutRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(args: PutTargetsCommandInput, options?: __HttpHandlerOptions): Promise<PutTargetsCommandOutput>;
  putTargets(args: PutTargetsCommandInput, cb: (err: any, data?: PutTargetsCommandOutput) => void): void;
  putTargets(
    args: PutTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(args: RemoveTargetsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTargetsCommandOutput>;
  removeTargets(args: RemoveTargetsCommandInput, cb: (err: any, data?: RemoveTargetsCommandOutput) => void): void;
  removeTargets(
    args: RemoveTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(args: StartReplayCommandInput, options?: __HttpHandlerOptions): Promise<StartReplayCommandOutput>;
  startReplay(args: StartReplayCommandInput, cb: (err: any, data?: StartReplayCommandOutput) => void): void;
  startReplay(
    args: StartReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplayCommandOutput) => void
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
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestEventPatternCommandOutput>;
  testEventPattern(
    args: TestEventPatternCommandInput,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;
  testEventPattern(
    args: TestEventPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
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
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiDestinationCommandOutput>;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(args: UpdateArchiveCommandInput, options?: __HttpHandlerOptions): Promise<UpdateArchiveCommandOutput>;
  updateArchive(args: UpdateArchiveCommandInput, cb: (err: any, data?: UpdateArchiveCommandOutput) => void): void;
  updateArchive(
    args: UpdateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class CloudWatchEvents extends CloudWatchEventsClient implements CloudWatchEvents {}
createAggregatedClient(commands, CloudWatchEvents);
