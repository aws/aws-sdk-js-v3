// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { CloudTrailClient } from "./CloudTrailClient";
import { type AddTagsCommandInput, type AddTagsCommandOutput, AddTagsCommand } from "./commands/AddTagsCommand";
import {
  type CancelQueryCommandInput,
  type CancelQueryCommandOutput,
  CancelQueryCommand,
} from "./commands/CancelQueryCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
import {
  type CreateDashboardCommandInput,
  type CreateDashboardCommandOutput,
  CreateDashboardCommand,
} from "./commands/CreateDashboardCommand";
import {
  type CreateEventDataStoreCommandInput,
  type CreateEventDataStoreCommandOutput,
  CreateEventDataStoreCommand,
} from "./commands/CreateEventDataStoreCommand";
import {
  type CreateTrailCommandInput,
  type CreateTrailCommandOutput,
  CreateTrailCommand,
} from "./commands/CreateTrailCommand";
import {
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteChannelCommand,
} from "./commands/DeleteChannelCommand";
import {
  type DeleteDashboardCommandInput,
  type DeleteDashboardCommandOutput,
  DeleteDashboardCommand,
} from "./commands/DeleteDashboardCommand";
import {
  type DeleteEventDataStoreCommandInput,
  type DeleteEventDataStoreCommandOutput,
  DeleteEventDataStoreCommand,
} from "./commands/DeleteEventDataStoreCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteTrailCommandInput,
  type DeleteTrailCommandOutput,
  DeleteTrailCommand,
} from "./commands/DeleteTrailCommand";
import {
  type DeregisterOrganizationDelegatedAdminCommandInput,
  type DeregisterOrganizationDelegatedAdminCommandOutput,
  DeregisterOrganizationDelegatedAdminCommand,
} from "./commands/DeregisterOrganizationDelegatedAdminCommand";
import {
  type DescribeQueryCommandInput,
  type DescribeQueryCommandOutput,
  DescribeQueryCommand,
} from "./commands/DescribeQueryCommand";
import {
  type DescribeTrailsCommandInput,
  type DescribeTrailsCommandOutput,
  DescribeTrailsCommand,
} from "./commands/DescribeTrailsCommand";
import {
  type DisableFederationCommandInput,
  type DisableFederationCommandOutput,
  DisableFederationCommand,
} from "./commands/DisableFederationCommand";
import {
  type EnableFederationCommandInput,
  type EnableFederationCommandOutput,
  EnableFederationCommand,
} from "./commands/EnableFederationCommand";
import {
  type GenerateQueryCommandInput,
  type GenerateQueryCommandOutput,
  GenerateQueryCommand,
} from "./commands/GenerateQueryCommand";
import {
  type GetChannelCommandInput,
  type GetChannelCommandOutput,
  GetChannelCommand,
} from "./commands/GetChannelCommand";
import {
  type GetDashboardCommandInput,
  type GetDashboardCommandOutput,
  GetDashboardCommand,
} from "./commands/GetDashboardCommand";
import {
  type GetEventConfigurationCommandInput,
  type GetEventConfigurationCommandOutput,
  GetEventConfigurationCommand,
} from "./commands/GetEventConfigurationCommand";
import {
  type GetEventDataStoreCommandInput,
  type GetEventDataStoreCommandOutput,
  GetEventDataStoreCommand,
} from "./commands/GetEventDataStoreCommand";
import {
  type GetEventSelectorsCommandInput,
  type GetEventSelectorsCommandOutput,
  GetEventSelectorsCommand,
} from "./commands/GetEventSelectorsCommand";
import { type GetImportCommandInput, type GetImportCommandOutput, GetImportCommand } from "./commands/GetImportCommand";
import {
  type GetInsightSelectorsCommandInput,
  type GetInsightSelectorsCommandOutput,
  GetInsightSelectorsCommand,
} from "./commands/GetInsightSelectorsCommand";
import {
  type GetQueryResultsCommandInput,
  type GetQueryResultsCommandOutput,
  GetQueryResultsCommand,
} from "./commands/GetQueryResultsCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import { type GetTrailCommandInput, type GetTrailCommandOutput, GetTrailCommand } from "./commands/GetTrailCommand";
import {
  type GetTrailStatusCommandInput,
  type GetTrailStatusCommandOutput,
  GetTrailStatusCommand,
} from "./commands/GetTrailStatusCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListDashboardsCommandInput,
  type ListDashboardsCommandOutput,
  ListDashboardsCommand,
} from "./commands/ListDashboardsCommand";
import {
  type ListEventDataStoresCommandInput,
  type ListEventDataStoresCommandOutput,
  ListEventDataStoresCommand,
} from "./commands/ListEventDataStoresCommand";
import {
  type ListImportFailuresCommandInput,
  type ListImportFailuresCommandOutput,
  ListImportFailuresCommand,
} from "./commands/ListImportFailuresCommand";
import {
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListImportsCommand,
} from "./commands/ListImportsCommand";
import {
  type ListInsightsDataCommandInput,
  type ListInsightsDataCommandOutput,
  ListInsightsDataCommand,
} from "./commands/ListInsightsDataCommand";
import {
  type ListInsightsMetricDataCommandInput,
  type ListInsightsMetricDataCommandOutput,
  ListInsightsMetricDataCommand,
} from "./commands/ListInsightsMetricDataCommand";
import {
  type ListPublicKeysCommandInput,
  type ListPublicKeysCommandOutput,
  ListPublicKeysCommand,
} from "./commands/ListPublicKeysCommand";
import {
  type ListQueriesCommandInput,
  type ListQueriesCommandOutput,
  ListQueriesCommand,
} from "./commands/ListQueriesCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type ListTrailsCommandInput,
  type ListTrailsCommandOutput,
  ListTrailsCommand,
} from "./commands/ListTrailsCommand";
import {
  type LookupEventsCommandInput,
  type LookupEventsCommandOutput,
  LookupEventsCommand,
} from "./commands/LookupEventsCommand";
import {
  type PutEventConfigurationCommandInput,
  type PutEventConfigurationCommandOutput,
  PutEventConfigurationCommand,
} from "./commands/PutEventConfigurationCommand";
import {
  type PutEventSelectorsCommandInput,
  type PutEventSelectorsCommandOutput,
  PutEventSelectorsCommand,
} from "./commands/PutEventSelectorsCommand";
import {
  type PutInsightSelectorsCommandInput,
  type PutInsightSelectorsCommandOutput,
  PutInsightSelectorsCommand,
} from "./commands/PutInsightSelectorsCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RegisterOrganizationDelegatedAdminCommandInput,
  type RegisterOrganizationDelegatedAdminCommandOutput,
  RegisterOrganizationDelegatedAdminCommand,
} from "./commands/RegisterOrganizationDelegatedAdminCommand";
import {
  type RemoveTagsCommandInput,
  type RemoveTagsCommandOutput,
  RemoveTagsCommand,
} from "./commands/RemoveTagsCommand";
import {
  type RestoreEventDataStoreCommandInput,
  type RestoreEventDataStoreCommandOutput,
  RestoreEventDataStoreCommand,
} from "./commands/RestoreEventDataStoreCommand";
import {
  type SearchSampleQueriesCommandInput,
  type SearchSampleQueriesCommandOutput,
  SearchSampleQueriesCommand,
} from "./commands/SearchSampleQueriesCommand";
import {
  type StartDashboardRefreshCommandInput,
  type StartDashboardRefreshCommandOutput,
  StartDashboardRefreshCommand,
} from "./commands/StartDashboardRefreshCommand";
import {
  type StartEventDataStoreIngestionCommandInput,
  type StartEventDataStoreIngestionCommandOutput,
  StartEventDataStoreIngestionCommand,
} from "./commands/StartEventDataStoreIngestionCommand";
import {
  type StartImportCommandInput,
  type StartImportCommandOutput,
  StartImportCommand,
} from "./commands/StartImportCommand";
import {
  type StartLoggingCommandInput,
  type StartLoggingCommandOutput,
  StartLoggingCommand,
} from "./commands/StartLoggingCommand";
import {
  type StartQueryCommandInput,
  type StartQueryCommandOutput,
  StartQueryCommand,
} from "./commands/StartQueryCommand";
import {
  type StopEventDataStoreIngestionCommandInput,
  type StopEventDataStoreIngestionCommandOutput,
  StopEventDataStoreIngestionCommand,
} from "./commands/StopEventDataStoreIngestionCommand";
import {
  type StopImportCommandInput,
  type StopImportCommandOutput,
  StopImportCommand,
} from "./commands/StopImportCommand";
import {
  type StopLoggingCommandInput,
  type StopLoggingCommandOutput,
  StopLoggingCommand,
} from "./commands/StopLoggingCommand";
import {
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdateChannelCommand,
} from "./commands/UpdateChannelCommand";
import {
  type UpdateDashboardCommandInput,
  type UpdateDashboardCommandOutput,
  UpdateDashboardCommand,
} from "./commands/UpdateDashboardCommand";
import {
  type UpdateEventDataStoreCommandInput,
  type UpdateEventDataStoreCommandOutput,
  UpdateEventDataStoreCommand,
} from "./commands/UpdateEventDataStoreCommand";
import {
  type UpdateTrailCommandInput,
  type UpdateTrailCommandOutput,
  UpdateTrailCommand,
} from "./commands/UpdateTrailCommand";
import { paginateGetQueryResults } from "./pagination/GetQueryResultsPaginator";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListEventDataStores } from "./pagination/ListEventDataStoresPaginator";
import { paginateListImportFailures } from "./pagination/ListImportFailuresPaginator";
import { paginateListImports } from "./pagination/ListImportsPaginator";
import { paginateListInsightsData } from "./pagination/ListInsightsDataPaginator";
import { paginateListInsightsMetricData } from "./pagination/ListInsightsMetricDataPaginator";
import { paginateListPublicKeys } from "./pagination/ListPublicKeysPaginator";
import { paginateListQueries } from "./pagination/ListQueriesPaginator";
import { paginateListTags } from "./pagination/ListTagsPaginator";
import { paginateListTrails } from "./pagination/ListTrailsPaginator";
import { paginateLookupEvents } from "./pagination/LookupEventsPaginator";

const commands = {
  AddTagsCommand,
  CancelQueryCommand,
  CreateChannelCommand,
  CreateDashboardCommand,
  CreateEventDataStoreCommand,
  CreateTrailCommand,
  DeleteChannelCommand,
  DeleteDashboardCommand,
  DeleteEventDataStoreCommand,
  DeleteResourcePolicyCommand,
  DeleteTrailCommand,
  DeregisterOrganizationDelegatedAdminCommand,
  DescribeQueryCommand,
  DescribeTrailsCommand,
  DisableFederationCommand,
  EnableFederationCommand,
  GenerateQueryCommand,
  GetChannelCommand,
  GetDashboardCommand,
  GetEventConfigurationCommand,
  GetEventDataStoreCommand,
  GetEventSelectorsCommand,
  GetImportCommand,
  GetInsightSelectorsCommand,
  GetQueryResultsCommand,
  GetResourcePolicyCommand,
  GetTrailCommand,
  GetTrailStatusCommand,
  ListChannelsCommand,
  ListDashboardsCommand,
  ListEventDataStoresCommand,
  ListImportFailuresCommand,
  ListImportsCommand,
  ListInsightsDataCommand,
  ListInsightsMetricDataCommand,
  ListPublicKeysCommand,
  ListQueriesCommand,
  ListTagsCommand,
  ListTrailsCommand,
  LookupEventsCommand,
  PutEventConfigurationCommand,
  PutEventSelectorsCommand,
  PutInsightSelectorsCommand,
  PutResourcePolicyCommand,
  RegisterOrganizationDelegatedAdminCommand,
  RemoveTagsCommand,
  RestoreEventDataStoreCommand,
  SearchSampleQueriesCommand,
  StartDashboardRefreshCommand,
  StartEventDataStoreIngestionCommand,
  StartImportCommand,
  StartLoggingCommand,
  StartQueryCommand,
  StopEventDataStoreIngestionCommand,
  StopImportCommand,
  StopLoggingCommand,
  UpdateChannelCommand,
  UpdateDashboardCommand,
  UpdateEventDataStoreCommand,
  UpdateTrailCommand,
};
const paginators = {
  paginateGetQueryResults,
  paginateListChannels,
  paginateListEventDataStores,
  paginateListImportFailures,
  paginateListImports,
  paginateListInsightsData,
  paginateListInsightsMetricData,
  paginateListPublicKeys,
  paginateListQueries,
  paginateListTags,
  paginateListTrails,
  paginateLookupEvents,
};

export interface CloudTrail {
  /**
   * @see {@link AddTagsCommand}
   */
  addTags(
    args: AddTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsCommandOutput>;
  addTags(
    args: AddTagsCommandInput,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelQueryCommand}
   */
  cancelQuery(
    args: CancelQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelQueryCommandOutput>;
  cancelQuery(
    args: CancelQueryCommandInput,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;
  cancelQuery(
    args: CancelQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
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
  createTrail(
    args: CreateTrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrailCommandOutput>;
  createTrail(
    args: CreateTrailCommandInput,
    cb: (err: any, data?: CreateTrailCommandOutput) => void
  ): void;
  createTrail(
    args: CreateTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrailCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
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
  deleteTrail(
    args: DeleteTrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrailCommandOutput>;
  deleteTrail(
    args: DeleteTrailCommandInput,
    cb: (err: any, data?: DeleteTrailCommandOutput) => void
  ): void;
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
  describeQuery(): Promise<DescribeQueryCommandOutput>;
  describeQuery(
    args: DescribeQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQueryCommandOutput>;
  describeQuery(
    args: DescribeQueryCommandInput,
    cb: (err: any, data?: DescribeQueryCommandOutput) => void
  ): void;
  describeQuery(
    args: DescribeQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrailsCommand}
   */
  describeTrails(): Promise<DescribeTrailsCommandOutput>;
  describeTrails(
    args: DescribeTrailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrailsCommandOutput>;
  describeTrails(
    args: DescribeTrailsCommandInput,
    cb: (err: any, data?: DescribeTrailsCommandOutput) => void
  ): void;
  describeTrails(
    args: DescribeTrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrailsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableFederationCommand}
   */
  disableFederation(
    args: DisableFederationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableFederationCommandOutput>;
  disableFederation(
    args: DisableFederationCommandInput,
    cb: (err: any, data?: DisableFederationCommandOutput) => void
  ): void;
  disableFederation(
    args: DisableFederationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableFederationCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableFederationCommand}
   */
  enableFederation(
    args: EnableFederationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableFederationCommandOutput>;
  enableFederation(
    args: EnableFederationCommandInput,
    cb: (err: any, data?: EnableFederationCommandOutput) => void
  ): void;
  enableFederation(
    args: EnableFederationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableFederationCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateQueryCommand}
   */
  generateQuery(
    args: GenerateQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateQueryCommandOutput>;
  generateQuery(
    args: GenerateQueryCommandInput,
    cb: (err: any, data?: GenerateQueryCommandOutput) => void
  ): void;
  generateQuery(
    args: GenerateQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(
    args: GetChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelCommandOutput>;
  getChannel(
    args: GetChannelCommandInput,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;
  getChannel(
    args: GetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDashboardCommand}
   */
  getDashboard(
    args: GetDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDashboardCommandOutput>;
  getDashboard(
    args: GetDashboardCommandInput,
    cb: (err: any, data?: GetDashboardCommandOutput) => void
  ): void;
  getDashboard(
    args: GetDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventConfigurationCommand}
   */
  getEventConfiguration(): Promise<GetEventConfigurationCommandOutput>;
  getEventConfiguration(
    args: GetEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventConfigurationCommandOutput>;
  getEventConfiguration(
    args: GetEventConfigurationCommandInput,
    cb: (err: any, data?: GetEventConfigurationCommandOutput) => void
  ): void;
  getEventConfiguration(
    args: GetEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventConfigurationCommandOutput) => void
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
  getImport(
    args: GetImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportCommandOutput>;
  getImport(
    args: GetImportCommandInput,
    cb: (err: any, data?: GetImportCommandOutput) => void
  ): void;
  getImport(
    args: GetImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightSelectorsCommand}
   */
  getInsightSelectors(): Promise<GetInsightSelectorsCommandOutput>;
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
  getQueryResults(
    args: GetQueryResultsCommandInput,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
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
  getTrail(
    args: GetTrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrailCommandOutput>;
  getTrail(
    args: GetTrailCommandInput,
    cb: (err: any, data?: GetTrailCommandOutput) => void
  ): void;
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
  getTrailStatus(
    args: GetTrailStatusCommandInput,
    cb: (err: any, data?: GetTrailStatusCommandOutput) => void
  ): void;
  getTrailStatus(
    args: GetTrailStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrailStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventDataStoresCommand}
   */
  listEventDataStores(): Promise<ListEventDataStoresCommandOutput>;
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
  listImports(): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInsightsDataCommand}
   */
  listInsightsData(
    args: ListInsightsDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInsightsDataCommandOutput>;
  listInsightsData(
    args: ListInsightsDataCommandInput,
    cb: (err: any, data?: ListInsightsDataCommandOutput) => void
  ): void;
  listInsightsData(
    args: ListInsightsDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInsightsDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInsightsMetricDataCommand}
   */
  listInsightsMetricData(
    args: ListInsightsMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInsightsMetricDataCommandOutput>;
  listInsightsMetricData(
    args: ListInsightsMetricDataCommandInput,
    cb: (err: any, data?: ListInsightsMetricDataCommandOutput) => void
  ): void;
  listInsightsMetricData(
    args: ListInsightsMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInsightsMetricDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueriesCommand}
   */
  listQueries(
    args: ListQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueriesCommandOutput>;
  listQueries(
    args: ListQueriesCommandInput,
    cb: (err: any, data?: ListQueriesCommandOutput) => void
  ): void;
  listQueries(
    args: ListQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrailsCommand}
   */
  listTrails(): Promise<ListTrailsCommandOutput>;
  listTrails(
    args: ListTrailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrailsCommandOutput>;
  listTrails(
    args: ListTrailsCommandInput,
    cb: (err: any, data?: ListTrailsCommandOutput) => void
  ): void;
  listTrails(
    args: ListTrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrailsCommandOutput) => void
  ): void;

  /**
   * @see {@link LookupEventsCommand}
   */
  lookupEvents(): Promise<LookupEventsCommandOutput>;
  lookupEvents(
    args: LookupEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LookupEventsCommandOutput>;
  lookupEvents(
    args: LookupEventsCommandInput,
    cb: (err: any, data?: LookupEventsCommandOutput) => void
  ): void;
  lookupEvents(
    args: LookupEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LookupEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventConfigurationCommand}
   */
  putEventConfiguration(): Promise<PutEventConfigurationCommandOutput>;
  putEventConfiguration(
    args: PutEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventConfigurationCommandOutput>;
  putEventConfiguration(
    args: PutEventConfigurationCommandInput,
    cb: (err: any, data?: PutEventConfigurationCommandOutput) => void
  ): void;
  putEventConfiguration(
    args: PutEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventConfigurationCommandOutput) => void
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
  removeTags(
    args: RemoveTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsCommandOutput>;
  removeTags(
    args: RemoveTagsCommandInput,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
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
   * @see {@link SearchSampleQueriesCommand}
   */
  searchSampleQueries(
    args: SearchSampleQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSampleQueriesCommandOutput>;
  searchSampleQueries(
    args: SearchSampleQueriesCommandInput,
    cb: (err: any, data?: SearchSampleQueriesCommandOutput) => void
  ): void;
  searchSampleQueries(
    args: SearchSampleQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSampleQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDashboardRefreshCommand}
   */
  startDashboardRefresh(
    args: StartDashboardRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDashboardRefreshCommandOutput>;
  startDashboardRefresh(
    args: StartDashboardRefreshCommandInput,
    cb: (err: any, data?: StartDashboardRefreshCommandOutput) => void
  ): void;
  startDashboardRefresh(
    args: StartDashboardRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDashboardRefreshCommandOutput) => void
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
  startImport(): Promise<StartImportCommandOutput>;
  startImport(
    args: StartImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportCommandOutput>;
  startImport(
    args: StartImportCommandInput,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;
  startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLoggingCommand}
   */
  startLogging(
    args: StartLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLoggingCommandOutput>;
  startLogging(
    args: StartLoggingCommandInput,
    cb: (err: any, data?: StartLoggingCommandOutput) => void
  ): void;
  startLogging(
    args: StartLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryCommand}
   */
  startQuery(): Promise<StartQueryCommandOutput>;
  startQuery(
    args: StartQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryCommandOutput>;
  startQuery(
    args: StartQueryCommandInput,
    cb: (err: any, data?: StartQueryCommandOutput) => void
  ): void;
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
  stopImport(
    args: StopImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopImportCommandOutput>;
  stopImport(
    args: StopImportCommandInput,
    cb: (err: any, data?: StopImportCommandOutput) => void
  ): void;
  stopImport(
    args: StopImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StopLoggingCommand}
   */
  stopLogging(
    args: StopLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopLoggingCommandOutput>;
  stopLogging(
    args: StopLoggingCommandInput,
    cb: (err: any, data?: StopLoggingCommandOutput) => void
  ): void;
  stopLogging(
    args: StopLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
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
  updateTrail(
    args: UpdateTrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrailCommandOutput>;
  updateTrail(
    args: UpdateTrailCommandInput,
    cb: (err: any, data?: UpdateTrailCommandOutput) => void
  ): void;
  updateTrail(
    args: UpdateTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetQueryResultsCommandOutput}.
   */
  paginateGetQueryResults(
    args: GetQueryResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetQueryResultsCommandOutput>;

  /**
   * @see {@link ListChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelsCommandOutput}.
   */
  paginateListChannels(
    args?: ListChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelsCommandOutput>;

  /**
   * @see {@link ListEventDataStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventDataStoresCommandOutput}.
   */
  paginateListEventDataStores(
    args?: ListEventDataStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventDataStoresCommandOutput>;

  /**
   * @see {@link ListImportFailuresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportFailuresCommandOutput}.
   */
  paginateListImportFailures(
    args: ListImportFailuresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportFailuresCommandOutput>;

  /**
   * @see {@link ListImportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportsCommandOutput}.
   */
  paginateListImports(
    args?: ListImportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportsCommandOutput>;

  /**
   * @see {@link ListInsightsDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInsightsDataCommandOutput}.
   */
  paginateListInsightsData(
    args: ListInsightsDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInsightsDataCommandOutput>;

  /**
   * @see {@link ListInsightsMetricDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInsightsMetricDataCommandOutput}.
   */
  paginateListInsightsMetricData(
    args: ListInsightsMetricDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInsightsMetricDataCommandOutput>;

  /**
   * @see {@link ListPublicKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPublicKeysCommandOutput}.
   */
  paginateListPublicKeys(
    args?: ListPublicKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPublicKeysCommandOutput>;

  /**
   * @see {@link ListQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQueriesCommandOutput}.
   */
  paginateListQueries(
    args: ListQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQueriesCommandOutput>;

  /**
   * @see {@link ListTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsCommandOutput}.
   */
  paginateListTags(
    args: ListTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsCommandOutput>;

  /**
   * @see {@link ListTrailsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrailsCommandOutput}.
   */
  paginateListTrails(
    args?: ListTrailsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrailsCommandOutput>;

  /**
   * @see {@link LookupEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link LookupEventsCommandOutput}.
   */
  paginateLookupEvents(
    args?: LookupEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<LookupEventsCommandOutput>;
}

/**
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
 * @public
 */
export class CloudTrail extends CloudTrailClient implements CloudTrail {}
createAggregatedClient(commands, CloudTrail, { paginators });
