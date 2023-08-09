// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudTrailClient, CloudTrailClientConfig } from "./CloudTrailClient";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelQueryCommand, CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateEventDataStoreCommand,
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
} from "./commands/CreateEventDataStoreCommand";
import { CreateTrailCommand, CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteEventDataStoreCommand,
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
} from "./commands/DeleteEventDataStoreCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteTrailCommand, DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import {
  DeregisterOrganizationDelegatedAdminCommand,
  DeregisterOrganizationDelegatedAdminCommandInput,
  DeregisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/DeregisterOrganizationDelegatedAdminCommand";
import {
  DescribeQueryCommand,
  DescribeQueryCommandInput,
  DescribeQueryCommandOutput,
} from "./commands/DescribeQueryCommand";
import {
  DescribeTrailsCommand,
  DescribeTrailsCommandInput,
  DescribeTrailsCommandOutput,
} from "./commands/DescribeTrailsCommand";
import { GetChannelCommand, GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import {
  GetEventDataStoreCommand,
  GetEventDataStoreCommandInput,
  GetEventDataStoreCommandOutput,
} from "./commands/GetEventDataStoreCommand";
import {
  GetEventSelectorsCommand,
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput,
} from "./commands/GetEventSelectorsCommand";
import { GetImportCommand, GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import {
  GetInsightSelectorsCommand,
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "./commands/GetInsightSelectorsCommand";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "./commands/GetQueryResultsCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import { GetTrailCommand, GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import {
  GetTrailStatusCommand,
  GetTrailStatusCommandInput,
  GetTrailStatusCommandOutput,
} from "./commands/GetTrailStatusCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListEventDataStoresCommand,
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "./commands/ListEventDataStoresCommand";
import {
  ListImportFailuresCommand,
  ListImportFailuresCommandInput,
  ListImportFailuresCommandOutput,
} from "./commands/ListImportFailuresCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "./commands/ListPublicKeysCommand";
import { ListQueriesCommand, ListQueriesCommandInput, ListQueriesCommandOutput } from "./commands/ListQueriesCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrailsCommand, ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import {
  LookupEventsCommand,
  LookupEventsCommandInput,
  LookupEventsCommandOutput,
} from "./commands/LookupEventsCommand";
import {
  PutEventSelectorsCommand,
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput,
} from "./commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommand,
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "./commands/PutInsightSelectorsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RegisterOrganizationDelegatedAdminCommand,
  RegisterOrganizationDelegatedAdminCommandInput,
  RegisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/RegisterOrganizationDelegatedAdminCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RestoreEventDataStoreCommand,
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
} from "./commands/RestoreEventDataStoreCommand";
import {
  StartEventDataStoreIngestionCommand,
  StartEventDataStoreIngestionCommandInput,
  StartEventDataStoreIngestionCommandOutput,
} from "./commands/StartEventDataStoreIngestionCommand";
import { StartImportCommand, StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import {
  StartLoggingCommand,
  StartLoggingCommandInput,
  StartLoggingCommandOutput,
} from "./commands/StartLoggingCommand";
import { StartQueryCommand, StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import {
  StopEventDataStoreIngestionCommand,
  StopEventDataStoreIngestionCommandInput,
  StopEventDataStoreIngestionCommandOutput,
} from "./commands/StopEventDataStoreIngestionCommand";
import { StopImportCommand, StopImportCommandInput, StopImportCommandOutput } from "./commands/StopImportCommand";
import { StopLoggingCommand, StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateEventDataStoreCommand,
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
} from "./commands/UpdateEventDataStoreCommand";
import { UpdateTrailCommand, UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";

const commands = {
  AddTagsCommand,
  CancelQueryCommand,
  CreateChannelCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DeleteChannelCommand,
  DeleteEventDataStoreCommand,
  DeleteResourcePolicyCommand,
  DeleteTrailCommand,
  DeregisterOrganizationDelegatedAdminCommand,
  DescribeQueryCommand,
  DescribeTrailsCommand,
  GetChannelCommand,
  GetEventDataStoreCommand,
  GetEventSelectorsCommand,
  GetImportCommand,
  GetInsightSelectorsCommand,
  GetQueryResultsCommand,
  GetResourcePolicyCommand,
  GetTrailCommand,
  GetTrailStatusCommand,
  ListChannelsCommand,
  ListEventDataStoresCommand,
  ListImportFailuresCommand,
  ListImportsCommand,
  ListPublicKeysCommand,
  ListQueriesCommand,
  ListTagsCommand,
  ListTrailsCommand,
  LookupEventsCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  RestoreEventDataStoreCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  UpdateChannelCommand,
  UpdateEventDataStoreCommand,
  UpdateTrailCommand,
};

export interface CloudTrail {
  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(args: CancelQueryCommandInput, options?: __HttpHandlerOptions): Promise<CancelQueryCommandOutput>;
  cancelQuery(args: CancelQueryCommandInput, cb: (err: any, data?: CancelQueryCommandOutput) => void): void;
  cancelQuery(
    args: CancelQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventDataStoreCommand}
   */
  createEventDataStore(
    args: CreateEventDataStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventDataStoreCommandOutput>;
  createEventDataStore(
    args: CreateEventDataStoreCommandInput,
    cb: (err: any, data?: CreateEventDataStoreCommandOutput) => void
  ): void;
  createEventDataStore(
    args: CreateEventDataStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventDataStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrailCommand}
   */
  createTrail(args: CreateTrailCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrailCommandOutput>;
  createTrail(args: CreateTrailCommandInput, cb: (err: any, data?: CreateTrailCommandOutput) => void): void;
  createTrail(
    args: CreateTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrailCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventDataStoreCommand}
   */
  deleteEventDataStore(
    args: DeleteEventDataStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventDataStoreCommandOutput>;
  deleteEventDataStore(
    args: DeleteEventDataStoreCommandInput,
    cb: (err: any, data?: DeleteEventDataStoreCommandOutput) => void
  ): void;
  deleteEventDataStore(
    args: DeleteEventDataStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventDataStoreCommandOutput) => void
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
   * @see {@link DeleteTrailCommand}
   */
  deleteTrail(args: DeleteTrailCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrailCommandOutput>;
  deleteTrail(args: DeleteTrailCommandInput, cb: (err: any, data?: DeleteTrailCommandOutput) => void): void;
  deleteTrail(
    args: DeleteTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrailCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterOrganizationDelegatedAdminCommand}
   */
  deregisterOrganizationDelegatedAdmin(
    args: DeregisterOrganizationDelegatedAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterOrganizationDelegatedAdminCommandOutput>;
  deregisterOrganizationDelegatedAdmin(
    args: DeregisterOrganizationDelegatedAdminCommandInput,
    cb: (err: any, data?: DeregisterOrganizationDelegatedAdminCommandOutput) => void
  ): void;
  deregisterOrganizationDelegatedAdmin(
    args: DeregisterOrganizationDelegatedAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterOrganizationDelegatedAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeQueryCommand}
   */
  describeQuery(args: DescribeQueryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeQueryCommandOutput>;
  describeQuery(args: DescribeQueryCommandInput, cb: (err: any, data?: DescribeQueryCommandOutput) => void): void;
  describeQuery(
    args: DescribeQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrailsCommand}
   */
  describeTrails(
    args: DescribeTrailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrailsCommandOutput>;
  describeTrails(args: DescribeTrailsCommandInput, cb: (err: any, data?: DescribeTrailsCommandOutput) => void): void;
  describeTrails(
    args: DescribeTrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(args: GetChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelCommandOutput>;
  getChannel(args: GetChannelCommandInput, cb: (err: any, data?: GetChannelCommandOutput) => void): void;
  getChannel(
    args: GetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventDataStoreCommand}
   */
  getEventDataStore(
    args: GetEventDataStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventDataStoreCommandOutput>;
  getEventDataStore(
    args: GetEventDataStoreCommandInput,
    cb: (err: any, data?: GetEventDataStoreCommandOutput) => void
  ): void;
  getEventDataStore(
    args: GetEventDataStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventDataStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventSelectorsCommand}
   */
  getEventSelectors(
    args: GetEventSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventSelectorsCommandOutput>;
  getEventSelectors(
    args: GetEventSelectorsCommandInput,
    cb: (err: any, data?: GetEventSelectorsCommandOutput) => void
  ): void;
  getEventSelectors(
    args: GetEventSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventSelectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportCommand}
   */
  getImport(args: GetImportCommandInput, options?: __HttpHandlerOptions): Promise<GetImportCommandOutput>;
  getImport(args: GetImportCommandInput, cb: (err: any, data?: GetImportCommandOutput) => void): void;
  getImport(
    args: GetImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightSelectorsCommand}
   */
  getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightSelectorsCommandOutput>;
  getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    cb: (err: any, data?: GetInsightSelectorsCommandOutput) => void
  ): void;
  getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightSelectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsCommand}
   */
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryResultsCommandOutput>;
  getQueryResults(args: GetQueryResultsCommandInput, cb: (err: any, data?: GetQueryResultsCommandOutput) => void): void;
  getQueryResults(
    args: GetQueryResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrailCommand}
   */
  getTrail(args: GetTrailCommandInput, options?: __HttpHandlerOptions): Promise<GetTrailCommandOutput>;
  getTrail(args: GetTrailCommandInput, cb: (err: any, data?: GetTrailCommandOutput) => void): void;
  getTrail(
    args: GetTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrailStatusCommand}
   */
  getTrailStatus(
    args: GetTrailStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrailStatusCommandOutput>;
  getTrailStatus(args: GetTrailStatusCommandInput, cb: (err: any, data?: GetTrailStatusCommandOutput) => void): void;
  getTrailStatus(
    args: GetTrailStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrailStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventDataStoresCommand}
   */
  listEventDataStores(
    args: ListEventDataStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventDataStoresCommandOutput>;
  listEventDataStores(
    args: ListEventDataStoresCommandInput,
    cb: (err: any, data?: ListEventDataStoresCommandOutput) => void
  ): void;
  listEventDataStores(
    args: ListEventDataStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventDataStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportFailuresCommand}
   */
  listImportFailures(
    args: ListImportFailuresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportFailuresCommandOutput>;
  listImportFailures(
    args: ListImportFailuresCommandInput,
    cb: (err: any, data?: ListImportFailuresCommandOutput) => void
  ): void;
  listImportFailures(
    args: ListImportFailuresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportFailuresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(args: ListPublicKeysCommandInput, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueriesCommand}
   */
  listQueries(args: ListQueriesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueriesCommandOutput>;
  listQueries(args: ListQueriesCommandInput, cb: (err: any, data?: ListQueriesCommandOutput) => void): void;
  listQueries(
    args: ListQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrailsCommand}
   */
  listTrails(args: ListTrailsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrailsCommandOutput>;
  listTrails(args: ListTrailsCommandInput, cb: (err: any, data?: ListTrailsCommandOutput) => void): void;
  listTrails(
    args: ListTrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrailsCommandOutput) => void
  ): void;

  /**
   * @see {@link LookupEventsCommand}
   */
  lookupEvents(args: LookupEventsCommandInput, options?: __HttpHandlerOptions): Promise<LookupEventsCommandOutput>;
  lookupEvents(args: LookupEventsCommandInput, cb: (err: any, data?: LookupEventsCommandOutput) => void): void;
  lookupEvents(
    args: LookupEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LookupEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventSelectorsCommand}
   */
  putEventSelectors(
    args: PutEventSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventSelectorsCommandOutput>;
  putEventSelectors(
    args: PutEventSelectorsCommandInput,
    cb: (err: any, data?: PutEventSelectorsCommandOutput) => void
  ): void;
  putEventSelectors(
    args: PutEventSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventSelectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInsightSelectorsCommand}
   */
  putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInsightSelectorsCommandOutput>;
  putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    cb: (err: any, data?: PutInsightSelectorsCommandOutput) => void
  ): void;
  putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInsightSelectorsCommandOutput) => void
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
   * @see {@link RegisterOrganizationDelegatedAdminCommand}
   */
  registerOrganizationDelegatedAdmin(
    args: RegisterOrganizationDelegatedAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOrganizationDelegatedAdminCommandOutput>;
  registerOrganizationDelegatedAdmin(
    args: RegisterOrganizationDelegatedAdminCommandInput,
    cb: (err: any, data?: RegisterOrganizationDelegatedAdminCommandOutput) => void
  ): void;
  registerOrganizationDelegatedAdmin(
    args: RegisterOrganizationDelegatedAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOrganizationDelegatedAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsCommand}
   */
  removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreEventDataStoreCommand}
   */
  restoreEventDataStore(
    args: RestoreEventDataStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreEventDataStoreCommandOutput>;
  restoreEventDataStore(
    args: RestoreEventDataStoreCommandInput,
    cb: (err: any, data?: RestoreEventDataStoreCommandOutput) => void
  ): void;
  restoreEventDataStore(
    args: RestoreEventDataStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreEventDataStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEventDataStoreIngestionCommand}
   */
  startEventDataStoreIngestion(
    args: StartEventDataStoreIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEventDataStoreIngestionCommandOutput>;
  startEventDataStoreIngestion(
    args: StartEventDataStoreIngestionCommandInput,
    cb: (err: any, data?: StartEventDataStoreIngestionCommandOutput) => void
  ): void;
  startEventDataStoreIngestion(
    args: StartEventDataStoreIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEventDataStoreIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(args: StartImportCommandInput, options?: __HttpHandlerOptions): Promise<StartImportCommandOutput>;
  startImport(args: StartImportCommandInput, cb: (err: any, data?: StartImportCommandOutput) => void): void;
  startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLoggingCommand}
   */
  startLogging(args: StartLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StartLoggingCommandOutput>;
  startLogging(args: StartLoggingCommandInput, cb: (err: any, data?: StartLoggingCommandOutput) => void): void;
  startLogging(
    args: StartLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryCommand}
   */
  startQuery(args: StartQueryCommandInput, options?: __HttpHandlerOptions): Promise<StartQueryCommandOutput>;
  startQuery(args: StartQueryCommandInput, cb: (err: any, data?: StartQueryCommandOutput) => void): void;
  startQuery(
    args: StartQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEventDataStoreIngestionCommand}
   */
  stopEventDataStoreIngestion(
    args: StopEventDataStoreIngestionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEventDataStoreIngestionCommandOutput>;
  stopEventDataStoreIngestion(
    args: StopEventDataStoreIngestionCommandInput,
    cb: (err: any, data?: StopEventDataStoreIngestionCommandOutput) => void
  ): void;
  stopEventDataStoreIngestion(
    args: StopEventDataStoreIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEventDataStoreIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopImportCommand}
   */
  stopImport(args: StopImportCommandInput, options?: __HttpHandlerOptions): Promise<StopImportCommandOutput>;
  stopImport(args: StopImportCommandInput, cb: (err: any, data?: StopImportCommandOutput) => void): void;
  stopImport(
    args: StopImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StopLoggingCommand}
   */
  stopLogging(args: StopLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StopLoggingCommandOutput>;
  stopLogging(args: StopLoggingCommandInput, cb: (err: any, data?: StopLoggingCommandOutput) => void): void;
  stopLogging(
    args: StopLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventDataStoreCommand}
   */
  updateEventDataStore(
    args: UpdateEventDataStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventDataStoreCommandOutput>;
  updateEventDataStore(
    args: UpdateEventDataStoreCommandInput,
    cb: (err: any, data?: UpdateEventDataStoreCommandOutput) => void
  ): void;
  updateEventDataStore(
    args: UpdateEventDataStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventDataStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrailCommand}
   */
  updateTrail(args: UpdateTrailCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrailCommandOutput>;
  updateTrail(args: UpdateTrailCommandInput, cb: (err: any, data?: UpdateTrailCommandOutput) => void): void;
  updateTrail(
    args: UpdateTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrailCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data
 *          types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. The
 *          recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response
 *          elements returned by the service.</p>
 *          <note>
 *             <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which
 *             consist of libraries and sample code for various programming languages and platforms
 *             (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests,
 *             managing errors, and retrying requests automatically. For more information about the
 *                Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail
 *          User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>
 */
export class CloudTrail extends CloudTrailClient implements CloudTrail {}
createAggregatedClient(commands, CloudTrail);
