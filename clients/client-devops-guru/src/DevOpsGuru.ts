// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  AddNotificationChannelCommand,
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
} from "./commands/AddNotificationChannelCommand";
import {
  DeleteInsightCommand,
  DeleteInsightCommandInput,
  DeleteInsightCommandOutput,
} from "./commands/DeleteInsightCommand";
import {
  DescribeAccountHealthCommand,
  DescribeAccountHealthCommandInput,
  DescribeAccountHealthCommandOutput,
} from "./commands/DescribeAccountHealthCommand";
import {
  DescribeAccountOverviewCommand,
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
} from "./commands/DescribeAccountOverviewCommand";
import {
  DescribeAnomalyCommand,
  DescribeAnomalyCommandInput,
  DescribeAnomalyCommandOutput,
} from "./commands/DescribeAnomalyCommand";
import {
  DescribeEventSourcesConfigCommand,
  DescribeEventSourcesConfigCommandInput,
  DescribeEventSourcesConfigCommandOutput,
} from "./commands/DescribeEventSourcesConfigCommand";
import {
  DescribeFeedbackCommand,
  DescribeFeedbackCommandInput,
  DescribeFeedbackCommandOutput,
} from "./commands/DescribeFeedbackCommand";
import {
  DescribeInsightCommand,
  DescribeInsightCommandInput,
  DescribeInsightCommandOutput,
} from "./commands/DescribeInsightCommand";
import {
  DescribeOrganizationHealthCommand,
  DescribeOrganizationHealthCommandInput,
  DescribeOrganizationHealthCommandOutput,
} from "./commands/DescribeOrganizationHealthCommand";
import {
  DescribeOrganizationOverviewCommand,
  DescribeOrganizationOverviewCommandInput,
  DescribeOrganizationOverviewCommandOutput,
} from "./commands/DescribeOrganizationOverviewCommand";
import {
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
} from "./commands/DescribeOrganizationResourceCollectionHealthCommand";
import {
  DescribeResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "./commands/DescribeResourceCollectionHealthCommand";
import {
  DescribeServiceIntegrationCommand,
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
} from "./commands/DescribeServiceIntegrationCommand";
import {
  GetCostEstimationCommand,
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput,
} from "./commands/GetCostEstimationCommand";
import {
  GetResourceCollectionCommand,
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "./commands/GetResourceCollectionCommand";
import {
  ListAnomaliesForInsightCommand,
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "./commands/ListAnomaliesForInsightCommand";
import {
  ListAnomalousLogGroupsCommand,
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput,
} from "./commands/ListAnomalousLogGroupsCommand";
import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import {
  ListInsightsCommand,
  ListInsightsCommandInput,
  ListInsightsCommandOutput,
} from "./commands/ListInsightsCommand";
import {
  ListMonitoredResourcesCommand,
  ListMonitoredResourcesCommandInput,
  ListMonitoredResourcesCommandOutput,
} from "./commands/ListMonitoredResourcesCommand";
import {
  ListNotificationChannelsCommand,
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "./commands/ListNotificationChannelsCommand";
import {
  ListOrganizationInsightsCommand,
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
} from "./commands/ListOrganizationInsightsCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import {
  RemoveNotificationChannelCommand,
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "./commands/RemoveNotificationChannelCommand";
import {
  SearchInsightsCommand,
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput,
} from "./commands/SearchInsightsCommand";
import {
  SearchOrganizationInsightsCommand,
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
} from "./commands/SearchOrganizationInsightsCommand";
import {
  StartCostEstimationCommand,
  StartCostEstimationCommandInput,
  StartCostEstimationCommandOutput,
} from "./commands/StartCostEstimationCommand";
import {
  UpdateEventSourcesConfigCommand,
  UpdateEventSourcesConfigCommandInput,
  UpdateEventSourcesConfigCommandOutput,
} from "./commands/UpdateEventSourcesConfigCommand";
import {
  UpdateResourceCollectionCommand,
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
} from "./commands/UpdateResourceCollectionCommand";
import {
  UpdateServiceIntegrationCommand,
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
} from "./commands/UpdateServiceIntegrationCommand";
import { DevOpsGuruClient } from "./DevOpsGuruClient";
import {
  paginateDescribeOrganizationResourceCollectionHealth,
} from "./pagination/DescribeOrganizationResourceCollectionHealthPaginator";
import { paginateDescribeResourceCollectionHealth } from "./pagination/DescribeResourceCollectionHealthPaginator";
import { paginateGetCostEstimation } from "./pagination/GetCostEstimationPaginator";
import { paginateGetResourceCollection } from "./pagination/GetResourceCollectionPaginator";
import { paginateListAnomaliesForInsight } from "./pagination/ListAnomaliesForInsightPaginator";
import { paginateListAnomalousLogGroups } from "./pagination/ListAnomalousLogGroupsPaginator";
import { paginateListEvents } from "./pagination/ListEventsPaginator";
import { paginateListInsights } from "./pagination/ListInsightsPaginator";
import { paginateListMonitoredResources } from "./pagination/ListMonitoredResourcesPaginator";
import { paginateListNotificationChannels } from "./pagination/ListNotificationChannelsPaginator";
import { paginateListOrganizationInsights } from "./pagination/ListOrganizationInsightsPaginator";
import { paginateListRecommendations } from "./pagination/ListRecommendationsPaginator";
import { paginateSearchInsights } from "./pagination/SearchInsightsPaginator";
import { paginateSearchOrganizationInsights } from "./pagination/SearchOrganizationInsightsPaginator";

const commands = {
  AddNotificationChannelCommand,
  DeleteInsightCommand,
  DescribeAccountHealthCommand,
  DescribeAccountOverviewCommand,
  DescribeAnomalyCommand,
  DescribeEventSourcesConfigCommand,
  DescribeFeedbackCommand,
  DescribeInsightCommand,
  DescribeOrganizationHealthCommand,
  DescribeOrganizationOverviewCommand,
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthCommand,
  DescribeServiceIntegrationCommand,
  GetCostEstimationCommand,
  GetResourceCollectionCommand,
  ListAnomaliesForInsightCommand,
  ListAnomalousLogGroupsCommand,
  ListEventsCommand,
  ListInsightsCommand,
  ListMonitoredResourcesCommand,
  ListNotificationChannelsCommand,
  ListOrganizationInsightsCommand,
  ListRecommendationsCommand,
  PutFeedbackCommand,
  RemoveNotificationChannelCommand,
  SearchInsightsCommand,
  SearchOrganizationInsightsCommand,
  StartCostEstimationCommand,
  UpdateEventSourcesConfigCommand,
  UpdateResourceCollectionCommand,
  UpdateServiceIntegrationCommand,
};
const paginators = {
  paginateDescribeOrganizationResourceCollectionHealth,
  paginateDescribeResourceCollectionHealth,
  paginateGetCostEstimation,
  paginateGetResourceCollection,
  paginateListAnomaliesForInsight,
  paginateListAnomalousLogGroups,
  paginateListEvents,
  paginateListInsights,
  paginateListMonitoredResources,
  paginateListNotificationChannels,
  paginateListOrganizationInsights,
  paginateListRecommendations,
  paginateSearchInsights,
  paginateSearchOrganizationInsights,
};

export interface DevOpsGuru {
  /**
   * @see {@link AddNotificationChannelCommand}
   */
  addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddNotificationChannelCommandOutput>;
  addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    cb: (err: any, data?: AddNotificationChannelCommandOutput) => void
  ): void;
  addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddNotificationChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInsightCommand}
   */
  deleteInsight(
    args: DeleteInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInsightCommandOutput>;
  deleteInsight(
    args: DeleteInsightCommandInput,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;
  deleteInsight(
    args: DeleteInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountHealthCommand}
   */
  describeAccountHealth(): Promise<DescribeAccountHealthCommandOutput>;
  describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountHealthCommandOutput>;
  describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    cb: (err: any, data?: DescribeAccountHealthCommandOutput) => void
  ): void;
  describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountOverviewCommand}
   */
  describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountOverviewCommandOutput>;
  describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    cb: (err: any, data?: DescribeAccountOverviewCommandOutput) => void
  ): void;
  describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountOverviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnomalyCommand}
   */
  describeAnomaly(
    args: DescribeAnomalyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyCommandOutput>;
  describeAnomaly(
    args: DescribeAnomalyCommandInput,
    cb: (err: any, data?: DescribeAnomalyCommandOutput) => void
  ): void;
  describeAnomaly(
    args: DescribeAnomalyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSourcesConfigCommand}
   */
  describeEventSourcesConfig(): Promise<DescribeEventSourcesConfigCommandOutput>;
  describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSourcesConfigCommandOutput>;
  describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    cb: (err: any, data?: DescribeEventSourcesConfigCommandOutput) => void
  ): void;
  describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSourcesConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFeedbackCommand}
   */
  describeFeedback(): Promise<DescribeFeedbackCommandOutput>;
  describeFeedback(
    args: DescribeFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeedbackCommandOutput>;
  describeFeedback(
    args: DescribeFeedbackCommandInput,
    cb: (err: any, data?: DescribeFeedbackCommandOutput) => void
  ): void;
  describeFeedback(
    args: DescribeFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInsightCommand}
   */
  describeInsight(
    args: DescribeInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInsightCommandOutput>;
  describeInsight(
    args: DescribeInsightCommandInput,
    cb: (err: any, data?: DescribeInsightCommandOutput) => void
  ): void;
  describeInsight(
    args: DescribeInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationHealthCommand}
   */
  describeOrganizationHealth(): Promise<DescribeOrganizationHealthCommandOutput>;
  describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationHealthCommandOutput>;
  describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    cb: (err: any, data?: DescribeOrganizationHealthCommandOutput) => void
  ): void;
  describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationOverviewCommand}
   */
  describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationOverviewCommandOutput>;
  describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    cb: (err: any, data?: DescribeOrganizationOverviewCommandOutput) => void
  ): void;
  describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationOverviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationResourceCollectionHealthCommand}
   */
  describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput>;
  describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    cb: (err: any, data?: DescribeOrganizationResourceCollectionHealthCommandOutput) => void
  ): void;
  describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationResourceCollectionHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceCollectionHealthCommand}
   */
  describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceCollectionHealthCommandOutput>;
  describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    cb: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void
  ): void;
  describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceIntegrationCommand}
   */
  describeServiceIntegration(): Promise<DescribeServiceIntegrationCommandOutput>;
  describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceIntegrationCommandOutput>;
  describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    cb: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void
  ): void;
  describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCostEstimationCommand}
   */
  getCostEstimation(): Promise<GetCostEstimationCommandOutput>;
  getCostEstimation(
    args: GetCostEstimationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostEstimationCommandOutput>;
  getCostEstimation(
    args: GetCostEstimationCommandInput,
    cb: (err: any, data?: GetCostEstimationCommandOutput) => void
  ): void;
  getCostEstimation(
    args: GetCostEstimationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostEstimationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceCollectionCommand}
   */
  getResourceCollection(
    args: GetResourceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceCollectionCommandOutput>;
  getResourceCollection(
    args: GetResourceCollectionCommandInput,
    cb: (err: any, data?: GetResourceCollectionCommandOutput) => void
  ): void;
  getResourceCollection(
    args: GetResourceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomaliesForInsightCommand}
   */
  listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomaliesForInsightCommandOutput>;
  listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    cb: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void
  ): void;
  listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnomalousLogGroupsCommand}
   */
  listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalousLogGroupsCommandOutput>;
  listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    cb: (err: any, data?: ListAnomalousLogGroupsCommandOutput) => void
  ): void;
  listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalousLogGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventsCommand}
   */
  listEvents(
    args: ListEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventsCommandOutput>;
  listEvents(
    args: ListEventsCommandInput,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;
  listEvents(
    args: ListEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInsightsCommand}
   */
  listInsights(
    args: ListInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInsightsCommandOutput>;
  listInsights(
    args: ListInsightsCommandInput,
    cb: (err: any, data?: ListInsightsCommandOutput) => void
  ): void;
  listInsights(
    args: ListInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitoredResourcesCommand}
   */
  listMonitoredResources(): Promise<ListMonitoredResourcesCommandOutput>;
  listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoredResourcesCommandOutput>;
  listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    cb: (err: any, data?: ListMonitoredResourcesCommandOutput) => void
  ): void;
  listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoredResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationChannelsCommand}
   */
  listNotificationChannels(): Promise<ListNotificationChannelsCommandOutput>;
  listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationChannelsCommandOutput>;
  listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    cb: (err: any, data?: ListNotificationChannelsCommandOutput) => void
  ): void;
  listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationInsightsCommand}
   */
  listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationInsightsCommandOutput>;
  listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    cb: (err: any, data?: ListOrganizationInsightsCommandOutput) => void
  ): void;
  listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFeedbackCommand}
   */
  putFeedback(): Promise<PutFeedbackCommandOutput>;
  putFeedback(
    args: PutFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFeedbackCommandOutput>;
  putFeedback(
    args: PutFeedbackCommandInput,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;
  putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveNotificationChannelCommand}
   */
  removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveNotificationChannelCommandOutput>;
  removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;
  removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchInsightsCommand}
   */
  searchInsights(
    args: SearchInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchInsightsCommandOutput>;
  searchInsights(
    args: SearchInsightsCommandInput,
    cb: (err: any, data?: SearchInsightsCommandOutput) => void
  ): void;
  searchInsights(
    args: SearchInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchOrganizationInsightsCommand}
   */
  searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchOrganizationInsightsCommandOutput>;
  searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    cb: (err: any, data?: SearchOrganizationInsightsCommandOutput) => void
  ): void;
  searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchOrganizationInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCostEstimationCommand}
   */
  startCostEstimation(
    args: StartCostEstimationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCostEstimationCommandOutput>;
  startCostEstimation(
    args: StartCostEstimationCommandInput,
    cb: (err: any, data?: StartCostEstimationCommandOutput) => void
  ): void;
  startCostEstimation(
    args: StartCostEstimationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCostEstimationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventSourcesConfigCommand}
   */
  updateEventSourcesConfig(): Promise<UpdateEventSourcesConfigCommandOutput>;
  updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventSourcesConfigCommandOutput>;
  updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    cb: (err: any, data?: UpdateEventSourcesConfigCommandOutput) => void
  ): void;
  updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventSourcesConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceCollectionCommand}
   */
  updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCollectionCommandOutput>;
  updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    cb: (err: any, data?: UpdateResourceCollectionCommandOutput) => void
  ): void;
  updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceIntegrationCommand}
   */
  updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceIntegrationCommandOutput>;
  updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    cb: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void
  ): void;
  updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationResourceCollectionHealthCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrganizationResourceCollectionHealthCommandOutput}.
   */
  paginateDescribeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrganizationResourceCollectionHealthCommandOutput>;

  /**
   * @see {@link DescribeResourceCollectionHealthCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeResourceCollectionHealthCommandOutput}.
   */
  paginateDescribeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeResourceCollectionHealthCommandOutput>;

  /**
   * @see {@link GetCostEstimationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCostEstimationCommandOutput}.
   */
  paginateGetCostEstimation(
    args?: GetCostEstimationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCostEstimationCommandOutput>;

  /**
   * @see {@link GetResourceCollectionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetResourceCollectionCommandOutput}.
   */
  paginateGetResourceCollection(
    args: GetResourceCollectionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetResourceCollectionCommandOutput>;

  /**
   * @see {@link ListAnomaliesForInsightCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnomaliesForInsightCommandOutput}.
   */
  paginateListAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnomaliesForInsightCommandOutput>;

  /**
   * @see {@link ListAnomalousLogGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnomalousLogGroupsCommandOutput}.
   */
  paginateListAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnomalousLogGroupsCommandOutput>;

  /**
   * @see {@link ListEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventsCommandOutput}.
   */
  paginateListEvents(
    args: ListEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventsCommandOutput>;

  /**
   * @see {@link ListInsightsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInsightsCommandOutput}.
   */
  paginateListInsights(
    args: ListInsightsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInsightsCommandOutput>;

  /**
   * @see {@link ListMonitoredResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMonitoredResourcesCommandOutput}.
   */
  paginateListMonitoredResources(
    args?: ListMonitoredResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMonitoredResourcesCommandOutput>;

  /**
   * @see {@link ListNotificationChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationChannelsCommandOutput}.
   */
  paginateListNotificationChannels(
    args?: ListNotificationChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationChannelsCommandOutput>;

  /**
   * @see {@link ListOrganizationInsightsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationInsightsCommandOutput}.
   */
  paginateListOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationInsightsCommandOutput>;

  /**
   * @see {@link ListRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationsCommandOutput}.
   */
  paginateListRecommendations(
    args: ListRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationsCommandOutput>;

  /**
   * @see {@link SearchInsightsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchInsightsCommandOutput}.
   */
  paginateSearchInsights(
    args: SearchInsightsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchInsightsCommandOutput>;

  /**
   * @see {@link SearchOrganizationInsightsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchOrganizationInsightsCommandOutput}.
   */
  paginateSearchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchOrganizationInsightsCommandOutput>;
}

/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in
 * 			business critical operational applications. You specify the Amazon Web Services resources that you
 * 			want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those
 * 			resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an
 * 				<i>insight</i> that includes recommendations, related events, and
 * 			related metrics that can help you improve your operational applications. For more
 * 			information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *          <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight
 * 			is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each
 * 			insight to help you manage and track your work addressing insights. </p>
 *          <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>
 * @public
 */
export class DevOpsGuru extends DevOpsGuruClient implements DevOpsGuru {}
createAggregatedClient(commands, DevOpsGuru, { paginators });
