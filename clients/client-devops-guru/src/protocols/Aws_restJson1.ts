// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
} from "../commands/AddNotificationChannelCommand";
import { DeleteInsightCommandInput, DeleteInsightCommandOutput } from "../commands/DeleteInsightCommand";
import {
  DescribeAccountHealthCommandInput,
  DescribeAccountHealthCommandOutput,
} from "../commands/DescribeAccountHealthCommand";
import {
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
} from "../commands/DescribeAccountOverviewCommand";
import { DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput } from "../commands/DescribeAnomalyCommand";
import {
  DescribeEventSourcesConfigCommandInput,
  DescribeEventSourcesConfigCommandOutput,
} from "../commands/DescribeEventSourcesConfigCommand";
import { DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput } from "../commands/DescribeFeedbackCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "../commands/DescribeInsightCommand";
import {
  DescribeOrganizationHealthCommandInput,
  DescribeOrganizationHealthCommandOutput,
} from "../commands/DescribeOrganizationHealthCommand";
import {
  DescribeOrganizationOverviewCommandInput,
  DescribeOrganizationOverviewCommandOutput,
} from "../commands/DescribeOrganizationOverviewCommand";
import {
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
} from "../commands/DescribeOrganizationResourceCollectionHealthCommand";
import {
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "../commands/DescribeResourceCollectionHealthCommand";
import {
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
} from "../commands/DescribeServiceIntegrationCommand";
import { GetCostEstimationCommandInput, GetCostEstimationCommandOutput } from "../commands/GetCostEstimationCommand";
import {
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "../commands/GetResourceCollectionCommand";
import {
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "../commands/ListAnomaliesForInsightCommand";
import {
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput,
} from "../commands/ListAnomalousLogGroupsCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "../commands/ListInsightsCommand";
import {
  ListMonitoredResourcesCommandInput,
  ListMonitoredResourcesCommandOutput,
} from "../commands/ListMonitoredResourcesCommand";
import {
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "../commands/ListNotificationChannelsCommand";
import {
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
} from "../commands/ListOrganizationInsightsCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "../commands/PutFeedbackCommand";
import {
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "../commands/RemoveNotificationChannelCommand";
import { SearchInsightsCommandInput, SearchInsightsCommandOutput } from "../commands/SearchInsightsCommand";
import {
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
} from "../commands/SearchOrganizationInsightsCommand";
import {
  StartCostEstimationCommandInput,
  StartCostEstimationCommandOutput,
} from "../commands/StartCostEstimationCommand";
import {
  UpdateEventSourcesConfigCommandInput,
  UpdateEventSourcesConfigCommandOutput,
} from "../commands/UpdateEventSourcesConfigCommand";
import {
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
} from "../commands/UpdateResourceCollectionCommand";
import {
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
} from "../commands/UpdateServiceIntegrationCommand";
import { DevOpsGuruServiceException as __BaseException } from "../models/DevOpsGuruServiceException";
import {
  AccessDeniedException,
  AccountHealth,
  AccountInsightHealth,
  AmazonCodeGuruProfilerIntegration,
  AnomalousLogGroup,
  AnomalyReportedTimeRange,
  AnomalyResource,
  AnomalySourceDetails,
  AnomalySourceMetadata,
  AnomalyTimeRange,
  CloudFormationCollection,
  CloudFormationCollectionFilter,
  CloudFormationCostEstimationResourceCollectionFilter,
  CloudFormationHealth,
  CloudWatchMetricsDataSummary,
  CloudWatchMetricsDetail,
  CloudWatchMetricsDimension,
  ConflictException,
  CostEstimationResourceCollectionFilter,
  CostEstimationTimeRange,
  EndTimeRange,
  Event,
  EventResource,
  EventSourcesConfig,
  EventTimeRange,
  InsightFeedback,
  InsightHealth,
  InsightSeverity,
  InsightStatus,
  InsightTimeRange,
  InternalServerException,
  ListAnomaliesForInsightFilters,
  ListEventsFilters,
  ListInsightsAnyStatusFilter,
  ListInsightsClosedStatusFilter,
  ListInsightsOngoingStatusFilter,
  ListInsightsStatusFilter,
  ListMonitoredResourcesFilters,
  LogAnomalyClass,
  LogAnomalyShowcase,
  LogsAnomalyDetectionIntegration,
  LogsAnomalyDetectionIntegrationConfig,
  MonitoredResourceIdentifier,
  NotificationChannel,
  NotificationChannelConfig,
  NotificationFilterConfig,
  NotificationMessageType,
  OpsCenterIntegration,
  OpsCenterIntegrationConfig,
  PerformanceInsightsMetricDimensionGroup,
  PerformanceInsightsMetricQuery,
  PerformanceInsightsMetricsDetail,
  PerformanceInsightsReferenceComparisonValues,
  PerformanceInsightsReferenceData,
  PerformanceInsightsReferenceMetric,
  PerformanceInsightsReferenceScalar,
  PerformanceInsightsStat,
  PredictionTimeRange,
  ProactiveAnomaly,
  ProactiveAnomalySummary,
  ProactiveInsight,
  ProactiveInsightSummary,
  ProactiveOrganizationInsightSummary,
  ReactiveAnomaly,
  ReactiveAnomalySummary,
  ReactiveInsight,
  ReactiveInsightSummary,
  ReactiveOrganizationInsightSummary,
  Recommendation,
  RecommendationRelatedAnomaly,
  RecommendationRelatedAnomalyResource,
  RecommendationRelatedAnomalySourceDetail,
  RecommendationRelatedCloudWatchMetricsSourceDetail,
  RecommendationRelatedEvent,
  RecommendationRelatedEventResource,
  ResourceCollection,
  ResourceCollectionFilter,
  ResourceNotFoundException,
  ResourceTypeFilter,
  SearchInsightsFilters,
  SearchOrganizationInsightsFilters,
  ServiceCollection,
  ServiceHealth,
  ServiceInsightHealth,
  ServiceIntegrationConfig,
  ServiceName,
  ServiceQuotaExceededException,
  ServiceResourceCost,
  SnsChannelConfig,
  StartTimeRange,
  TagCollection,
  TagCollectionFilter,
  TagCostEstimationResourceCollectionFilter,
  TagHealth,
  ThrottlingException,
  TimestampMetricValuePair,
  UpdateCloudFormationCollectionFilter,
  UpdateResourceCollectionFilter,
  UpdateServiceIntegrationConfig,
  UpdateTagCollectionFilter,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddNotificationChannelCommand
 */
export const se_AddNotificationChannelCommand = async (
  input: AddNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.Config != null && { Config: se_NotificationChannelConfig(input.Config, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteInsightCommand
 */
export const se_DeleteInsightCommand = async (
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAccountHealthCommand
 */
export const se_DescribeAccountHealthCommand = async (
  input: DescribeAccountHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/health";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAccountOverviewCommand
 */
export const se_DescribeAccountOverviewCommand = async (
  input: DescribeAccountOverviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/overview";
  let body: any;
  body = JSON.stringify({
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAnomalyCommand
 */
export const se_DescribeAnomalyCommand = async (
  input: DescribeAnomalyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/anomalies/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    AccountId: [, input.AccountId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeEventSourcesConfigCommand
 */
export const se_DescribeEventSourcesConfigCommand = async (
  input: DescribeEventSourcesConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-sources";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeFeedbackCommand
 */
export const se_DescribeFeedbackCommand = async (
  input: DescribeFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/feedback";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId != null && { InsightId: input.InsightId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeInsightCommand
 */
export const se_DescribeInsightCommand = async (
  input: DescribeInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    AccountId: [, input.AccountId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeOrganizationHealthCommand
 */
export const se_DescribeOrganizationHealthCommand = async (
  input: DescribeOrganizationHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/health";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_AccountIdList(input.AccountIds, context) }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: se_OrganizationalUnitIdList(input.OrganizationalUnitIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeOrganizationOverviewCommand
 */
export const se_DescribeOrganizationOverviewCommand = async (
  input: DescribeOrganizationOverviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/overview";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_AccountIdList(input.AccountIds, context) }),
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: se_OrganizationalUnitIdList(input.OrganizationalUnitIds, context),
    }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand
 */
export const se_DescribeOrganizationResourceCollectionHealthCommand = async (
  input: DescribeOrganizationResourceCollectionHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/health/resource-collection";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_AccountIdList(input.AccountIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationResourceCollectionType != null && {
      OrganizationResourceCollectionType: input.OrganizationResourceCollectionType,
    }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: se_OrganizationalUnitIdList(input.OrganizationalUnitIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeResourceCollectionHealthCommand
 */
export const se_DescribeResourceCollectionHealthCommand = async (
  input: DescribeResourceCollectionHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/health/resource-collection/{ResourceCollectionType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceCollectionType",
    () => input.ResourceCollectionType!,
    "{ResourceCollectionType}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeServiceIntegrationCommand
 */
export const se_DescribeServiceIntegrationCommand = async (
  input: DescribeServiceIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-integrations";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetCostEstimationCommand
 */
export const se_GetCostEstimationCommand = async (
  input: GetCostEstimationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cost-estimation";
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourceCollectionCommand
 */
export const se_GetResourceCollectionCommand = async (
  input: GetResourceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/resource-collections/{ResourceCollectionType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceCollectionType",
    () => input.ResourceCollectionType!,
    "{ResourceCollectionType}",
    false
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnomaliesForInsightCommand
 */
export const se_ListAnomaliesForInsightCommand = async (
  input: ListAnomaliesForInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/anomalies/insight/{InsightId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightId", () => input.InsightId!, "{InsightId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Filters != null && { Filters: se_ListAnomaliesForInsightFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange != null && { StartTimeRange: se_StartTimeRange(input.StartTimeRange, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnomalousLogGroupsCommand
 */
export const se_ListAnomalousLogGroupsCommand = async (
  input: ListAnomalousLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-log-anomalies";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId != null && { InsightId: input.InsightId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListEventsCommand
 */
export const se_ListEventsCommand = async (
  input: ListEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/events";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Filters != null && { Filters: se_ListEventsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListInsightsCommand
 */
export const se_ListInsightsCommand = async (
  input: ListInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusFilter != null && { StatusFilter: se_ListInsightsStatusFilter(input.StatusFilter, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListMonitoredResourcesCommand
 */
export const se_ListMonitoredResourcesCommand = async (
  input: ListMonitoredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/monitoredResources";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_ListMonitoredResourcesFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListNotificationChannelsCommand
 */
export const se_ListNotificationChannelsCommand = async (
  input: ListNotificationChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListOrganizationInsightsCommand
 */
export const se_ListOrganizationInsightsCommand = async (
  input: ListOrganizationInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_ListInsightsAccountIdList(input.AccountIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: se_ListInsightsOrganizationalUnitIdList(input.OrganizationalUnitIds, context),
    }),
    ...(input.StatusFilter != null && { StatusFilter: se_ListInsightsStatusFilter(input.StatusFilter, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListRecommendationsCommand
 */
export const se_ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.InsightId != null && { InsightId: input.InsightId }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutFeedbackCommand
 */
export const se_PutFeedbackCommand = async (
  input: PutFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/feedback";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightFeedback != null && { InsightFeedback: se_InsightFeedback(input.InsightFeedback, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveNotificationChannelCommand
 */
export const se_RemoveNotificationChannelCommand = async (
  input: RemoveNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchInsightsCommand
 */
export const se_SearchInsightsCommand = async (
  input: SearchInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/search";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_SearchInsightsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange != null && { StartTimeRange: se_StartTimeRange(input.StartTimeRange, context) }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchOrganizationInsightsCommand
 */
export const se_SearchOrganizationInsightsCommand = async (
  input: SearchOrganizationInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/insights/search";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_SearchInsightsAccountIdList(input.AccountIds, context) }),
    ...(input.Filters != null && { Filters: se_SearchOrganizationInsightsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange != null && { StartTimeRange: se_StartTimeRange(input.StartTimeRange, context) }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartCostEstimationCommand
 */
export const se_StartCostEstimationCommand = async (
  input: StartCostEstimationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cost-estimation";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ResourceCollection != null && {
      ResourceCollection: se_CostEstimationResourceCollectionFilter(input.ResourceCollection, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEventSourcesConfigCommand
 */
export const se_UpdateEventSourcesConfigCommand = async (
  input: UpdateEventSourcesConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-sources";
  let body: any;
  body = JSON.stringify({
    ...(input.EventSources != null && { EventSources: se_EventSourcesConfig(input.EventSources, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResourceCollectionCommand
 */
export const se_UpdateResourceCollectionCommand = async (
  input: UpdateResourceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-collections";
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: input.Action }),
    ...(input.ResourceCollection != null && {
      ResourceCollection: se_UpdateResourceCollectionFilter(input.ResourceCollection, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateServiceIntegrationCommand
 */
export const se_UpdateServiceIntegrationCommand = async (
  input: UpdateServiceIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-integrations";
  let body: any;
  body = JSON.stringify({
    ...(input.ServiceIntegration != null && {
      ServiceIntegration: se_UpdateServiceIntegrationConfig(input.ServiceIntegration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AddNotificationChannelCommand
 */
export const de_AddNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddNotificationChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddNotificationChannelCommandError
 */
const de_AddNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.devopsguru#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInsightCommand
 */
export const de_DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInsightCommandError
 */
const de_DeleteInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeAccountHealthCommand
 */
export const de_DescribeAccountHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAccountHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalyzedResourceCount != null) {
    contents.AnalyzedResourceCount = __expectLong(data.AnalyzedResourceCount);
  }
  if (data.MetricsAnalyzed != null) {
    contents.MetricsAnalyzed = __expectInt32(data.MetricsAnalyzed);
  }
  if (data.OpenProactiveInsights != null) {
    contents.OpenProactiveInsights = __expectInt32(data.OpenProactiveInsights);
  }
  if (data.OpenReactiveInsights != null) {
    contents.OpenReactiveInsights = __expectInt32(data.OpenReactiveInsights);
  }
  if (data.ResourceHours != null) {
    contents.ResourceHours = __expectLong(data.ResourceHours);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountHealthCommandError
 */
const de_DescribeAccountHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeAccountOverviewCommand
 */
export const de_DescribeAccountOverviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountOverviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAccountOverviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MeanTimeToRecoverInMilliseconds != null) {
    contents.MeanTimeToRecoverInMilliseconds = __expectLong(data.MeanTimeToRecoverInMilliseconds);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = __expectInt32(data.ProactiveInsights);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = __expectInt32(data.ReactiveInsights);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountOverviewCommandError
 */
const de_DescribeAccountOverviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountOverviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeAnomalyCommand
 */
export const de_DescribeAnomalyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAnomalyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProactiveAnomaly != null) {
    contents.ProactiveAnomaly = de_ProactiveAnomaly(data.ProactiveAnomaly, context);
  }
  if (data.ReactiveAnomaly != null) {
    contents.ReactiveAnomaly = de_ReactiveAnomaly(data.ReactiveAnomaly, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAnomalyCommandError
 */
const de_DescribeAnomalyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeEventSourcesConfigCommand
 */
export const de_DescribeEventSourcesConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourcesConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeEventSourcesConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventSources != null) {
    contents.EventSources = de_EventSourcesConfig(data.EventSources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEventSourcesConfigCommandError
 */
const de_DescribeEventSourcesConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourcesConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeFeedbackCommand
 */
export const de_DescribeFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightFeedback != null) {
    contents.InsightFeedback = de_InsightFeedback(data.InsightFeedback, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFeedbackCommandError
 */
const de_DescribeFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeInsightCommand
 */
export const de_DescribeInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProactiveInsight != null) {
    contents.ProactiveInsight = de_ProactiveInsight(data.ProactiveInsight, context);
  }
  if (data.ReactiveInsight != null) {
    contents.ReactiveInsight = de_ReactiveInsight(data.ReactiveInsight, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInsightCommandError
 */
const de_DescribeInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeOrganizationHealthCommand
 */
export const de_DescribeOrganizationHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOrganizationHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricsAnalyzed != null) {
    contents.MetricsAnalyzed = __expectInt32(data.MetricsAnalyzed);
  }
  if (data.OpenProactiveInsights != null) {
    contents.OpenProactiveInsights = __expectInt32(data.OpenProactiveInsights);
  }
  if (data.OpenReactiveInsights != null) {
    contents.OpenReactiveInsights = __expectInt32(data.OpenReactiveInsights);
  }
  if (data.ResourceHours != null) {
    contents.ResourceHours = __expectLong(data.ResourceHours);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOrganizationHealthCommandError
 */
const de_DescribeOrganizationHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeOrganizationOverviewCommand
 */
export const de_DescribeOrganizationOverviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationOverviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOrganizationOverviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = __expectInt32(data.ProactiveInsights);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = __expectInt32(data.ReactiveInsights);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOrganizationOverviewCommandError
 */
const de_DescribeOrganizationOverviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationOverviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand
 */
export const de_DescribeOrganizationResourceCollectionHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOrganizationResourceCollectionHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Account != null) {
    contents.Account = de_AccountHealths(data.Account, context);
  }
  if (data.CloudFormation != null) {
    contents.CloudFormation = de_CloudFormationHealths(data.CloudFormation, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Service != null) {
    contents.Service = de_ServiceHealths(data.Service, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagHealths(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommandError
 */
const de_DescribeOrganizationResourceCollectionHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeResourceCollectionHealthCommand
 */
export const de_DescribeResourceCollectionHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeResourceCollectionHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CloudFormation != null) {
    contents.CloudFormation = de_CloudFormationHealths(data.CloudFormation, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Service != null) {
    contents.Service = de_ServiceHealths(data.Service, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagHealths(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResourceCollectionHealthCommandError
 */
const de_DescribeResourceCollectionHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeServiceIntegrationCommand
 */
export const de_DescribeServiceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeServiceIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceIntegration != null) {
    contents.ServiceIntegration = de_ServiceIntegrationConfig(data.ServiceIntegration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeServiceIntegrationCommandError
 */
const de_DescribeServiceIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCostEstimationCommand
 */
export const de_GetCostEstimationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostEstimationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCostEstimationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Costs != null) {
    contents.Costs = de_ServiceResourceCosts(data.Costs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceCollection != null) {
    contents.ResourceCollection = de_CostEstimationResourceCollectionFilter(data.ResourceCollection, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.TimeRange != null) {
    contents.TimeRange = de_CostEstimationTimeRange(data.TimeRange, context);
  }
  if (data.TotalCost != null) {
    contents.TotalCost = __limitedParseDouble(data.TotalCost);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCostEstimationCommandError
 */
const de_GetCostEstimationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostEstimationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourceCollectionCommand
 */
export const de_GetResourceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceCollection != null) {
    contents.ResourceCollection = de_ResourceCollectionFilter(data.ResourceCollection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceCollectionCommandError
 */
const de_GetResourceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAnomaliesForInsightCommand
 */
export const de_ListAnomaliesForInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomaliesForInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnomaliesForInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveAnomalies != null) {
    contents.ProactiveAnomalies = de_ProactiveAnomalies(data.ProactiveAnomalies, context);
  }
  if (data.ReactiveAnomalies != null) {
    contents.ReactiveAnomalies = de_ReactiveAnomalies(data.ReactiveAnomalies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnomaliesForInsightCommandError
 */
const de_ListAnomaliesForInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomaliesForInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAnomalousLogGroupsCommand
 */
export const de_ListAnomalousLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalousLogGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnomalousLogGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalousLogGroups != null) {
    contents.AnomalousLogGroups = de_AnomalousLogGroups(data.AnomalousLogGroups, context);
  }
  if (data.InsightId != null) {
    contents.InsightId = __expectString(data.InsightId);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnomalousLogGroupsCommandError
 */
const de_ListAnomalousLogGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalousLogGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListEventsCommand
 */
export const de_ListEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Events != null) {
    contents.Events = de_Events(data.Events, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEventsCommandError
 */
const de_ListEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInsightsCommand
 */
export const de_ListInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = de_ProactiveInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = de_ReactiveInsights(data.ReactiveInsights, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInsightsCommandError
 */
const de_ListInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMonitoredResourcesCommand
 */
export const de_ListMonitoredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoredResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMonitoredResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MonitoredResourceIdentifiers != null) {
    contents.MonitoredResourceIdentifiers = de_MonitoredResourceIdentifiers(data.MonitoredResourceIdentifiers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMonitoredResourcesCommandError
 */
const de_ListMonitoredResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoredResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListNotificationChannelsCommand
 */
export const de_ListNotificationChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNotificationChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = de_Channels(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationChannelsCommandError
 */
const de_ListNotificationChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListOrganizationInsightsCommand
 */
export const de_ListOrganizationInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOrganizationInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = de_ProactiveOrganizationInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = de_ReactiveOrganizationInsights(data.ReactiveInsights, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationInsightsCommandError
 */
const de_ListOrganizationInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListRecommendationsCommand
 */
export const de_ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recommendations != null) {
    contents.Recommendations = de_Recommendations(data.Recommendations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationsCommandError
 */
const de_ListRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutFeedbackCommand
 */
export const de_PutFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutFeedbackCommandError
 */
const de_PutFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RemoveNotificationChannelCommand
 */
export const de_RemoveNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveNotificationChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveNotificationChannelCommandError
 */
const de_RemoveNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SearchInsightsCommand
 */
export const de_SearchInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = de_ProactiveInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = de_ReactiveInsights(data.ReactiveInsights, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchInsightsCommandError
 */
const de_SearchInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SearchOrganizationInsightsCommand
 */
export const de_SearchOrganizationInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchOrganizationInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchOrganizationInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = de_ProactiveInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = de_ReactiveInsights(data.ReactiveInsights, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchOrganizationInsightsCommandError
 */
const de_SearchOrganizationInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchOrganizationInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartCostEstimationCommand
 */
export const de_StartCostEstimationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCostEstimationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartCostEstimationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartCostEstimationCommandError
 */
const de_StartCostEstimationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCostEstimationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEventSourcesConfigCommand
 */
export const de_UpdateEventSourcesConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourcesConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEventSourcesConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventSourcesConfigCommandError
 */
const de_UpdateEventSourcesConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourcesConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateResourceCollectionCommand
 */
export const de_UpdateResourceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceCollectionCommandError
 */
const de_UpdateResourceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateServiceIntegrationCommand
 */
export const de_UpdateServiceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateServiceIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateServiceIntegrationCommandError
 */
const de_UpdateServiceIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Fields != null) {
    contents.Fields = de_ValidationExceptionFields(data.Fields, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AccountIdList
 */
const se_AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AmazonCodeGuruProfilerIntegration
 */
const se_AmazonCodeGuruProfilerIntegration = (
  input: AmazonCodeGuruProfilerIntegration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_restJson1CloudFormationCollection
 */
const se_CloudFormationCollection = (input: CloudFormationCollection, context: __SerdeContext): any => {
  return {
    ...(input.StackNames != null && { StackNames: se_StackNames(input.StackNames, context) }),
  };
};

/**
 * serializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter
 */
const se_CloudFormationCostEstimationResourceCollectionFilter = (
  input: CloudFormationCostEstimationResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames != null && { StackNames: se_CostEstimationStackNames(input.StackNames, context) }),
  };
};

/**
 * serializeAws_restJson1CostEstimationResourceCollectionFilter
 */
const se_CostEstimationResourceCollectionFilter = (
  input: CostEstimationResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudFormation != null && {
      CloudFormation: se_CloudFormationCostEstimationResourceCollectionFilter(input.CloudFormation, context),
    }),
    ...(input.Tags != null && { Tags: se_TagCostEstimationResourceCollectionFilters(input.Tags, context) }),
  };
};

/**
 * serializeAws_restJson1CostEstimationStackNames
 */
const se_CostEstimationStackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CostEstimationTagValues
 */
const se_CostEstimationTagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EndTimeRange
 */
const se_EndTimeRange = (input: EndTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1EventSourcesConfig
 */
const se_EventSourcesConfig = (input: EventSourcesConfig, context: __SerdeContext): any => {
  return {
    ...(input.AmazonCodeGuruProfiler != null && {
      AmazonCodeGuruProfiler: se_AmazonCodeGuruProfilerIntegration(input.AmazonCodeGuruProfiler, context),
    }),
  };
};

/**
 * serializeAws_restJson1EventTimeRange
 */
const se_EventTimeRange = (input: EventTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1InsightFeedback
 */
const se_InsightFeedback = (input: InsightFeedback, context: __SerdeContext): any => {
  return {
    ...(input.Feedback != null && { Feedback: input.Feedback }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_restJson1InsightSeverities
 */
const se_InsightSeverities = (input: (InsightSeverity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1InsightStatuses
 */
const se_InsightStatuses = (input: (InsightStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListAnomaliesForInsightFilters
 */
const se_ListAnomaliesForInsightFilters = (input: ListAnomaliesForInsightFilters, context: __SerdeContext): any => {
  return {
    ...(input.ServiceCollection != null && {
      ServiceCollection: se_ServiceCollection(input.ServiceCollection, context),
    }),
  };
};

/**
 * serializeAws_restJson1ListEventsFilters
 */
const se_ListEventsFilters = (input: ListEventsFilters, context: __SerdeContext): any => {
  return {
    ...(input.DataSource != null && { DataSource: input.DataSource }),
    ...(input.EventClass != null && { EventClass: input.EventClass }),
    ...(input.EventSource != null && { EventSource: input.EventSource }),
    ...(input.EventTimeRange != null && { EventTimeRange: se_EventTimeRange(input.EventTimeRange, context) }),
    ...(input.InsightId != null && { InsightId: input.InsightId }),
    ...(input.ResourceCollection != null && {
      ResourceCollection: se_ResourceCollection(input.ResourceCollection, context),
    }),
  };
};

/**
 * serializeAws_restJson1ListInsightsAccountIdList
 */
const se_ListInsightsAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListInsightsAnyStatusFilter
 */
const se_ListInsightsAnyStatusFilter = (input: ListInsightsAnyStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.StartTimeRange != null && { StartTimeRange: se_StartTimeRange(input.StartTimeRange, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ListInsightsClosedStatusFilter
 */
const se_ListInsightsClosedStatusFilter = (input: ListInsightsClosedStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.EndTimeRange != null && { EndTimeRange: se_EndTimeRange(input.EndTimeRange, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ListInsightsOngoingStatusFilter
 */
const se_ListInsightsOngoingStatusFilter = (input: ListInsightsOngoingStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1ListInsightsOrganizationalUnitIdList
 */
const se_ListInsightsOrganizationalUnitIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListInsightsStatusFilter
 */
const se_ListInsightsStatusFilter = (input: ListInsightsStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.Any != null && { Any: se_ListInsightsAnyStatusFilter(input.Any, context) }),
    ...(input.Closed != null && { Closed: se_ListInsightsClosedStatusFilter(input.Closed, context) }),
    ...(input.Ongoing != null && { Ongoing: se_ListInsightsOngoingStatusFilter(input.Ongoing, context) }),
  };
};

/**
 * serializeAws_restJson1ListMonitoredResourcesFilters
 */
const se_ListMonitoredResourcesFilters = (input: ListMonitoredResourcesFilters, context: __SerdeContext): any => {
  return {
    ...(input.ResourcePermission != null && { ResourcePermission: input.ResourcePermission }),
    ...(input.ResourceTypeFilters != null && {
      ResourceTypeFilters: se_ResourceTypeFilters(input.ResourceTypeFilters, context),
    }),
  };
};

/**
 * serializeAws_restJson1LogsAnomalyDetectionIntegrationConfig
 */
const se_LogsAnomalyDetectionIntegrationConfig = (
  input: LogsAnomalyDetectionIntegrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptInStatus != null && { OptInStatus: input.OptInStatus }),
  };
};

/**
 * serializeAws_restJson1NotificationChannelConfig
 */
const se_NotificationChannelConfig = (input: NotificationChannelConfig, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_NotificationFilterConfig(input.Filters, context) }),
    ...(input.Sns != null && { Sns: se_SnsChannelConfig(input.Sns, context) }),
  };
};

/**
 * serializeAws_restJson1NotificationFilterConfig
 */
const se_NotificationFilterConfig = (input: NotificationFilterConfig, context: __SerdeContext): any => {
  return {
    ...(input.MessageTypes != null && { MessageTypes: se_NotificationMessageTypes(input.MessageTypes, context) }),
    ...(input.Severities != null && { Severities: se_InsightSeverities(input.Severities, context) }),
  };
};

/**
 * serializeAws_restJson1NotificationMessageTypes
 */
const se_NotificationMessageTypes = (input: (NotificationMessageType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OpsCenterIntegrationConfig
 */
const se_OpsCenterIntegrationConfig = (input: OpsCenterIntegrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.OptInStatus != null && { OptInStatus: input.OptInStatus }),
  };
};

/**
 * serializeAws_restJson1OrganizationalUnitIdList
 */
const se_OrganizationalUnitIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceCollection
 */
const se_ResourceCollection = (input: ResourceCollection, context: __SerdeContext): any => {
  return {
    ...(input.CloudFormation != null && { CloudFormation: se_CloudFormationCollection(input.CloudFormation, context) }),
    ...(input.Tags != null && { Tags: se_TagCollections(input.Tags, context) }),
  };
};

/**
 * serializeAws_restJson1ResourceTypeFilters
 */
const se_ResourceTypeFilters = (input: (ResourceTypeFilter | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchInsightsAccountIdList
 */
const se_SearchInsightsAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SearchInsightsFilters
 */
const se_SearchInsightsFilters = (input: SearchInsightsFilters, context: __SerdeContext): any => {
  return {
    ...(input.ResourceCollection != null && {
      ResourceCollection: se_ResourceCollection(input.ResourceCollection, context),
    }),
    ...(input.ServiceCollection != null && {
      ServiceCollection: se_ServiceCollection(input.ServiceCollection, context),
    }),
    ...(input.Severities != null && { Severities: se_InsightSeverities(input.Severities, context) }),
    ...(input.Statuses != null && { Statuses: se_InsightStatuses(input.Statuses, context) }),
  };
};

/**
 * serializeAws_restJson1SearchOrganizationInsightsFilters
 */
const se_SearchOrganizationInsightsFilters = (
  input: SearchOrganizationInsightsFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceCollection != null && {
      ResourceCollection: se_ResourceCollection(input.ResourceCollection, context),
    }),
    ...(input.ServiceCollection != null && {
      ServiceCollection: se_ServiceCollection(input.ServiceCollection, context),
    }),
    ...(input.Severities != null && { Severities: se_InsightSeverities(input.Severities, context) }),
    ...(input.Statuses != null && { Statuses: se_InsightStatuses(input.Statuses, context) }),
  };
};

/**
 * serializeAws_restJson1ServiceCollection
 */
const se_ServiceCollection = (input: ServiceCollection, context: __SerdeContext): any => {
  return {
    ...(input.ServiceNames != null && { ServiceNames: se_ServiceNames(input.ServiceNames, context) }),
  };
};

/**
 * serializeAws_restJson1ServiceNames
 */
const se_ServiceNames = (input: (ServiceName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SnsChannelConfig
 */
const se_SnsChannelConfig = (input: SnsChannelConfig, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

/**
 * serializeAws_restJson1StackNames
 */
const se_StackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StartTimeRange
 */
const se_StartTimeRange = (input: StartTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1TagCollection
 */
const se_TagCollection = (input: TagCollection, context: __SerdeContext): any => {
  return {
    ...(input.AppBoundaryKey != null && { AppBoundaryKey: input.AppBoundaryKey }),
    ...(input.TagValues != null && { TagValues: se_TagValues(input.TagValues, context) }),
  };
};

/**
 * serializeAws_restJson1TagCollections
 */
const se_TagCollections = (input: TagCollection[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagCollection(entry, context);
    });
};

/**
 * serializeAws_restJson1TagCostEstimationResourceCollectionFilter
 */
const se_TagCostEstimationResourceCollectionFilter = (
  input: TagCostEstimationResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppBoundaryKey != null && { AppBoundaryKey: input.AppBoundaryKey }),
    ...(input.TagValues != null && { TagValues: se_CostEstimationTagValues(input.TagValues, context) }),
  };
};

/**
 * serializeAws_restJson1TagCostEstimationResourceCollectionFilters
 */
const se_TagCostEstimationResourceCollectionFilters = (
  input: TagCostEstimationResourceCollectionFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagCostEstimationResourceCollectionFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1TagValues
 */
const se_TagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1UpdateCloudFormationCollectionFilter
 */
const se_UpdateCloudFormationCollectionFilter = (
  input: UpdateCloudFormationCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames != null && { StackNames: se_UpdateStackNames(input.StackNames, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateResourceCollectionFilter
 */
const se_UpdateResourceCollectionFilter = (input: UpdateResourceCollectionFilter, context: __SerdeContext): any => {
  return {
    ...(input.CloudFormation != null && {
      CloudFormation: se_UpdateCloudFormationCollectionFilter(input.CloudFormation, context),
    }),
    ...(input.Tags != null && { Tags: se_UpdateTagCollectionFilters(input.Tags, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateServiceIntegrationConfig
 */
const se_UpdateServiceIntegrationConfig = (input: UpdateServiceIntegrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.LogsAnomalyDetection != null && {
      LogsAnomalyDetection: se_LogsAnomalyDetectionIntegrationConfig(input.LogsAnomalyDetection, context),
    }),
    ...(input.OpsCenter != null && { OpsCenter: se_OpsCenterIntegrationConfig(input.OpsCenter, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateStackNames
 */
const se_UpdateStackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1UpdateTagCollectionFilter
 */
const se_UpdateTagCollectionFilter = (input: UpdateTagCollectionFilter, context: __SerdeContext): any => {
  return {
    ...(input.AppBoundaryKey != null && { AppBoundaryKey: input.AppBoundaryKey }),
    ...(input.TagValues != null && { TagValues: se_UpdateTagValues(input.TagValues, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateTagCollectionFilters
 */
const se_UpdateTagCollectionFilters = (input: UpdateTagCollectionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateTagCollectionFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1UpdateTagValues
 */
const se_UpdateTagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AccountHealth
 */
const de_AccountHealth = (output: any, context: __SerdeContext): AccountHealth => {
  return {
    AccountId: __expectString(output.AccountId),
    Insight: output.Insight != null ? de_AccountInsightHealth(output.Insight, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccountHealths
 */
const de_AccountHealths = (output: any, context: __SerdeContext): AccountHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountHealth(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccountInsightHealth
 */
const de_AccountInsightHealth = (output: any, context: __SerdeContext): AccountInsightHealth => {
  return {
    OpenProactiveInsights: __expectInt32(output.OpenProactiveInsights),
    OpenReactiveInsights: __expectInt32(output.OpenReactiveInsights),
  } as any;
};

/**
 * deserializeAws_restJson1AmazonCodeGuruProfilerIntegration
 */
const de_AmazonCodeGuruProfilerIntegration = (
  output: any,
  context: __SerdeContext
): AmazonCodeGuruProfilerIntegration => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalousLogGroup
 */
const de_AnomalousLogGroup = (output: any, context: __SerdeContext): AnomalousLogGroup => {
  return {
    ImpactEndTime:
      output.ImpactEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImpactEndTime)))
        : undefined,
    ImpactStartTime:
      output.ImpactStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImpactStartTime)))
        : undefined,
    LogAnomalyShowcases:
      output.LogAnomalyShowcases != null ? de_LogAnomalyShowcases(output.LogAnomalyShowcases, context) : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    NumberOfLogLinesScanned: __expectInt32(output.NumberOfLogLinesScanned),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalousLogGroups
 */
const de_AnomalousLogGroups = (output: any, context: __SerdeContext): AnomalousLogGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalousLogGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnomalyReportedTimeRange
 */
const de_AnomalyReportedTimeRange = (output: any, context: __SerdeContext): AnomalyReportedTimeRange => {
  return {
    CloseTime:
      output.CloseTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CloseTime))) : undefined,
    OpenTime:
      output.OpenTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OpenTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyResource
 */
const de_AnomalyResource = (output: any, context: __SerdeContext): AnomalyResource => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyResources
 */
const de_AnomalyResources = (output: any, context: __SerdeContext): AnomalyResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalyResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnomalySourceDetails
 */
const de_AnomalySourceDetails = (output: any, context: __SerdeContext): AnomalySourceDetails => {
  return {
    CloudWatchMetrics:
      output.CloudWatchMetrics != null ? de_CloudWatchMetricsDetails(output.CloudWatchMetrics, context) : undefined,
    PerformanceInsightsMetrics:
      output.PerformanceInsightsMetrics != null
        ? de_PerformanceInsightsMetricsDetails(output.PerformanceInsightsMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnomalySourceMetadata
 */
const de_AnomalySourceMetadata = (output: any, context: __SerdeContext): AnomalySourceMetadata => {
  return {
    Source: __expectString(output.Source),
    SourceResourceName: __expectString(output.SourceResourceName),
    SourceResourceType: __expectString(output.SourceResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyTimeRange
 */
const de_AnomalyTimeRange = (output: any, context: __SerdeContext): AnomalyTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssociatedResourceArns
 */
const de_AssociatedResourceArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Channels
 */
const de_Channels = (output: any, context: __SerdeContext): NotificationChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotificationChannel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CloudFormationCollection
 */
const de_CloudFormationCollection = (output: any, context: __SerdeContext): CloudFormationCollection => {
  return {
    StackNames: output.StackNames != null ? de_StackNames(output.StackNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudFormationCollectionFilter
 */
const de_CloudFormationCollectionFilter = (output: any, context: __SerdeContext): CloudFormationCollectionFilter => {
  return {
    StackNames: output.StackNames != null ? de_StackNames(output.StackNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter
 */
const de_CloudFormationCostEstimationResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): CloudFormationCostEstimationResourceCollectionFilter => {
  return {
    StackNames: output.StackNames != null ? de_CostEstimationStackNames(output.StackNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudFormationHealth
 */
const de_CloudFormationHealth = (output: any, context: __SerdeContext): CloudFormationHealth => {
  return {
    AnalyzedResourceCount: __expectLong(output.AnalyzedResourceCount),
    Insight: output.Insight != null ? de_InsightHealth(output.Insight, context) : undefined,
    StackName: __expectString(output.StackName),
  } as any;
};

/**
 * deserializeAws_restJson1CloudFormationHealths
 */
const de_CloudFormationHealths = (output: any, context: __SerdeContext): CloudFormationHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudFormationHealth(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDataSummary
 */
const de_CloudWatchMetricsDataSummary = (output: any, context: __SerdeContext): CloudWatchMetricsDataSummary => {
  return {
    StatusCode: __expectString(output.StatusCode),
    TimestampMetricValuePairList:
      output.TimestampMetricValuePairList != null
        ? de_TimestampMetricValuePairList(output.TimestampMetricValuePairList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDetail
 */
const de_CloudWatchMetricsDetail = (output: any, context: __SerdeContext): CloudWatchMetricsDetail => {
  return {
    Dimensions: output.Dimensions != null ? de_CloudWatchMetricsDimensions(output.Dimensions, context) : undefined,
    MetricDataSummary:
      output.MetricDataSummary != null ? de_CloudWatchMetricsDataSummary(output.MetricDataSummary, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Period: __expectInt32(output.Period),
    Stat: __expectString(output.Stat),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDetails
 */
const de_CloudWatchMetricsDetails = (output: any, context: __SerdeContext): CloudWatchMetricsDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudWatchMetricsDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDimension
 */
const de_CloudWatchMetricsDimension = (output: any, context: __SerdeContext): CloudWatchMetricsDimension => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDimensions
 */
const de_CloudWatchMetricsDimensions = (output: any, context: __SerdeContext): CloudWatchMetricsDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudWatchMetricsDimension(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CostEstimationResourceCollectionFilter
 */
const de_CostEstimationResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): CostEstimationResourceCollectionFilter => {
  return {
    CloudFormation:
      output.CloudFormation != null
        ? de_CloudFormationCostEstimationResourceCollectionFilter(output.CloudFormation, context)
        : undefined,
    Tags: output.Tags != null ? de_TagCostEstimationResourceCollectionFilters(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CostEstimationStackNames
 */
const de_CostEstimationStackNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CostEstimationTagValues
 */
const de_CostEstimationTagValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CostEstimationTimeRange
 */
const de_CostEstimationTimeRange = (output: any, context: __SerdeContext): CostEstimationTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    DataSource: __expectString(output.DataSource),
    EventClass: __expectString(output.EventClass),
    EventSource: __expectString(output.EventSource),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Resources: output.Resources != null ? de_EventResources(output.Resources, context) : undefined,
    Time: output.Time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Time))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventResource
 */
const de_EventResource = (output: any, context: __SerdeContext): EventResource => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1EventResources
 */
const de_EventResources = (output: any, context: __SerdeContext): EventResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Events
 */
const de_Events = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventSourcesConfig
 */
const de_EventSourcesConfig = (output: any, context: __SerdeContext): EventSourcesConfig => {
  return {
    AmazonCodeGuruProfiler:
      output.AmazonCodeGuruProfiler != null
        ? de_AmazonCodeGuruProfilerIntegration(output.AmazonCodeGuruProfiler, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InsightFeedback
 */
const de_InsightFeedback = (output: any, context: __SerdeContext): InsightFeedback => {
  return {
    Feedback: __expectString(output.Feedback),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1InsightHealth
 */
const de_InsightHealth = (output: any, context: __SerdeContext): InsightHealth => {
  return {
    MeanTimeToRecoverInMilliseconds: __expectLong(output.MeanTimeToRecoverInMilliseconds),
    OpenProactiveInsights: __expectInt32(output.OpenProactiveInsights),
    OpenReactiveInsights: __expectInt32(output.OpenReactiveInsights),
  } as any;
};

/**
 * deserializeAws_restJson1InsightSeverities
 */
const de_InsightSeverities = (output: any, context: __SerdeContext): (InsightSeverity | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InsightTimeRange
 */
const de_InsightTimeRange = (output: any, context: __SerdeContext): InsightTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogAnomalyClass
 */
const de_LogAnomalyClass = (output: any, context: __SerdeContext): LogAnomalyClass => {
  return {
    Explanation: __expectString(output.Explanation),
    LogAnomalyToken: __expectString(output.LogAnomalyToken),
    LogAnomalyType: __expectString(output.LogAnomalyType),
    LogEventId: __expectString(output.LogEventId),
    LogEventTimestamp:
      output.LogEventTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LogEventTimestamp)))
        : undefined,
    LogStreamName: __expectString(output.LogStreamName),
    NumberOfLogLinesOccurrences: __expectInt32(output.NumberOfLogLinesOccurrences),
  } as any;
};

/**
 * deserializeAws_restJson1LogAnomalyClasses
 */
const de_LogAnomalyClasses = (output: any, context: __SerdeContext): LogAnomalyClass[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogAnomalyClass(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LogAnomalyShowcase
 */
const de_LogAnomalyShowcase = (output: any, context: __SerdeContext): LogAnomalyShowcase => {
  return {
    LogAnomalyClasses:
      output.LogAnomalyClasses != null ? de_LogAnomalyClasses(output.LogAnomalyClasses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogAnomalyShowcases
 */
const de_LogAnomalyShowcases = (output: any, context: __SerdeContext): LogAnomalyShowcase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogAnomalyShowcase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LogsAnomalyDetectionIntegration
 */
const de_LogsAnomalyDetectionIntegration = (output: any, context: __SerdeContext): LogsAnomalyDetectionIntegration => {
  return {
    OptInStatus: __expectString(output.OptInStatus),
  } as any;
};

/**
 * deserializeAws_restJson1MonitoredResourceIdentifier
 */
const de_MonitoredResourceIdentifier = (output: any, context: __SerdeContext): MonitoredResourceIdentifier => {
  return {
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    MonitoredResourceName: __expectString(output.MonitoredResourceName),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    ResourcePermission: __expectString(output.ResourcePermission),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1MonitoredResourceIdentifiers
 */
const de_MonitoredResourceIdentifiers = (output: any, context: __SerdeContext): MonitoredResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MonitoredResourceIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationChannel
 */
const de_NotificationChannel = (output: any, context: __SerdeContext): NotificationChannel => {
  return {
    Config: output.Config != null ? de_NotificationChannelConfig(output.Config, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1NotificationChannelConfig
 */
const de_NotificationChannelConfig = (output: any, context: __SerdeContext): NotificationChannelConfig => {
  return {
    Filters: output.Filters != null ? de_NotificationFilterConfig(output.Filters, context) : undefined,
    Sns: output.Sns != null ? de_SnsChannelConfig(output.Sns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NotificationFilterConfig
 */
const de_NotificationFilterConfig = (output: any, context: __SerdeContext): NotificationFilterConfig => {
  return {
    MessageTypes: output.MessageTypes != null ? de_NotificationMessageTypes(output.MessageTypes, context) : undefined,
    Severities: output.Severities != null ? de_InsightSeverities(output.Severities, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NotificationMessageTypes
 */
const de_NotificationMessageTypes = (output: any, context: __SerdeContext): (NotificationMessageType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OpsCenterIntegration
 */
const de_OpsCenterIntegration = (output: any, context: __SerdeContext): OpsCenterIntegration => {
  return {
    OptInStatus: __expectString(output.OptInStatus),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsMetricDimensionGroup
 */
const de_PerformanceInsightsMetricDimensionGroup = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricDimensionGroup => {
  return {
    Dimensions:
      output.Dimensions != null ? de_PerformanceInsightsMetricDimensions(output.Dimensions, context) : undefined,
    Group: __expectString(output.Group),
    Limit: __expectInt32(output.Limit),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsMetricDimensions
 */
const de_PerformanceInsightsMetricDimensions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PerformanceInsightsMetricFilterMap
 */
const de_PerformanceInsightsMetricFilterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PerformanceInsightsMetricQuery
 */
const de_PerformanceInsightsMetricQuery = (output: any, context: __SerdeContext): PerformanceInsightsMetricQuery => {
  return {
    Filter: output.Filter != null ? de_PerformanceInsightsMetricFilterMap(output.Filter, context) : undefined,
    GroupBy: output.GroupBy != null ? de_PerformanceInsightsMetricDimensionGroup(output.GroupBy, context) : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsMetricsDetail
 */
const de_PerformanceInsightsMetricsDetail = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricsDetail => {
  return {
    MetricDisplayName: __expectString(output.MetricDisplayName),
    MetricQuery:
      output.MetricQuery != null ? de_PerformanceInsightsMetricQuery(output.MetricQuery, context) : undefined,
    ReferenceData:
      output.ReferenceData != null ? de_PerformanceInsightsReferenceDataList(output.ReferenceData, context) : undefined,
    StatsAtAnomaly:
      output.StatsAtAnomaly != null ? de_PerformanceInsightsStats(output.StatsAtAnomaly, context) : undefined,
    StatsAtBaseline:
      output.StatsAtBaseline != null ? de_PerformanceInsightsStats(output.StatsAtBaseline, context) : undefined,
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsMetricsDetails
 */
const de_PerformanceInsightsMetricsDetails = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricsDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PerformanceInsightsMetricsDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceComparisonValues
 */
const de_PerformanceInsightsReferenceComparisonValues = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceComparisonValues => {
  return {
    ReferenceMetric:
      output.ReferenceMetric != null
        ? de_PerformanceInsightsReferenceMetric(output.ReferenceMetric, context)
        : undefined,
    ReferenceScalar:
      output.ReferenceScalar != null
        ? de_PerformanceInsightsReferenceScalar(output.ReferenceScalar, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceData
 */
const de_PerformanceInsightsReferenceData = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceData => {
  return {
    ComparisonValues:
      output.ComparisonValues != null
        ? de_PerformanceInsightsReferenceComparisonValues(output.ComparisonValues, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceDataList
 */
const de_PerformanceInsightsReferenceDataList = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PerformanceInsightsReferenceData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceMetric
 */
const de_PerformanceInsightsReferenceMetric = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceMetric => {
  return {
    MetricQuery:
      output.MetricQuery != null ? de_PerformanceInsightsMetricQuery(output.MetricQuery, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceScalar
 */
const de_PerformanceInsightsReferenceScalar = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceScalar => {
  return {
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsStat
 */
const de_PerformanceInsightsStat = (output: any, context: __SerdeContext): PerformanceInsightsStat => {
  return {
    Type: __expectString(output.Type),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsStats
 */
const de_PerformanceInsightsStats = (output: any, context: __SerdeContext): PerformanceInsightsStat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PerformanceInsightsStat(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PredictionTimeRange
 */
const de_PredictionTimeRange = (output: any, context: __SerdeContext): PredictionTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProactiveAnomalies
 */
const de_ProactiveAnomalies = (output: any, context: __SerdeContext): ProactiveAnomalySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProactiveAnomalySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProactiveAnomaly
 */
const de_ProactiveAnomaly = (output: any, context: __SerdeContext): ProactiveAnomaly => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? de_AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null ? de_AnomalyResources(output.AnomalyResources, context) : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null ? de_AnomalyTimeRange(output.AnomalyTimeRange, context) : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Limit: __limitedParseDouble(output.Limit),
    PredictionTimeRange:
      output.PredictionTimeRange != null ? de_PredictionTimeRange(output.PredictionTimeRange, context) : undefined,
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails: output.SourceDetails != null ? de_AnomalySourceDetails(output.SourceDetails, context) : undefined,
    SourceMetadata:
      output.SourceMetadata != null ? de_AnomalySourceMetadata(output.SourceMetadata, context) : undefined,
    Status: __expectString(output.Status),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProactiveAnomalySummary
 */
const de_ProactiveAnomalySummary = (output: any, context: __SerdeContext): ProactiveAnomalySummary => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? de_AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null ? de_AnomalyResources(output.AnomalyResources, context) : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null ? de_AnomalyTimeRange(output.AnomalyTimeRange, context) : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Limit: __limitedParseDouble(output.Limit),
    PredictionTimeRange:
      output.PredictionTimeRange != null ? de_PredictionTimeRange(output.PredictionTimeRange, context) : undefined,
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails: output.SourceDetails != null ? de_AnomalySourceDetails(output.SourceDetails, context) : undefined,
    SourceMetadata:
      output.SourceMetadata != null ? de_AnomalySourceMetadata(output.SourceMetadata, context) : undefined,
    Status: __expectString(output.Status),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProactiveInsight
 */
const de_ProactiveInsight = (output: any, context: __SerdeContext): ProactiveInsight => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null ? de_InsightTimeRange(output.InsightTimeRange, context) : undefined,
    Name: __expectString(output.Name),
    PredictionTimeRange:
      output.PredictionTimeRange != null ? de_PredictionTimeRange(output.PredictionTimeRange, context) : undefined,
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    SsmOpsItemId: __expectString(output.SsmOpsItemId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ProactiveInsights
 */
const de_ProactiveInsights = (output: any, context: __SerdeContext): ProactiveInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProactiveInsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProactiveInsightSummary
 */
const de_ProactiveInsightSummary = (output: any, context: __SerdeContext): ProactiveInsightSummary => {
  return {
    AssociatedResourceArns:
      output.AssociatedResourceArns != null
        ? de_AssociatedResourceArns(output.AssociatedResourceArns, context)
        : undefined,
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null ? de_InsightTimeRange(output.InsightTimeRange, context) : undefined,
    Name: __expectString(output.Name),
    PredictionTimeRange:
      output.PredictionTimeRange != null ? de_PredictionTimeRange(output.PredictionTimeRange, context) : undefined,
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    ServiceCollection:
      output.ServiceCollection != null ? de_ServiceCollection(output.ServiceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ProactiveOrganizationInsights
 */
const de_ProactiveOrganizationInsights = (
  output: any,
  context: __SerdeContext
): ProactiveOrganizationInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProactiveOrganizationInsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProactiveOrganizationInsightSummary
 */
const de_ProactiveOrganizationInsightSummary = (
  output: any,
  context: __SerdeContext
): ProactiveOrganizationInsightSummary => {
  return {
    AccountId: __expectString(output.AccountId),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null ? de_InsightTimeRange(output.InsightTimeRange, context) : undefined,
    Name: __expectString(output.Name),
    OrganizationalUnitId: __expectString(output.OrganizationalUnitId),
    PredictionTimeRange:
      output.PredictionTimeRange != null ? de_PredictionTimeRange(output.PredictionTimeRange, context) : undefined,
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    ServiceCollection:
      output.ServiceCollection != null ? de_ServiceCollection(output.ServiceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ReactiveAnomalies
 */
const de_ReactiveAnomalies = (output: any, context: __SerdeContext): ReactiveAnomalySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReactiveAnomalySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReactiveAnomaly
 */
const de_ReactiveAnomaly = (output: any, context: __SerdeContext): ReactiveAnomaly => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? de_AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null ? de_AnomalyResources(output.AnomalyResources, context) : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null ? de_AnomalyTimeRange(output.AnomalyTimeRange, context) : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    CausalAnomalyId: __expectString(output.CausalAnomalyId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails: output.SourceDetails != null ? de_AnomalySourceDetails(output.SourceDetails, context) : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ReactiveAnomalySummary
 */
const de_ReactiveAnomalySummary = (output: any, context: __SerdeContext): ReactiveAnomalySummary => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? de_AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null ? de_AnomalyResources(output.AnomalyResources, context) : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null ? de_AnomalyTimeRange(output.AnomalyTimeRange, context) : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    CausalAnomalyId: __expectString(output.CausalAnomalyId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails: output.SourceDetails != null ? de_AnomalySourceDetails(output.SourceDetails, context) : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ReactiveInsight
 */
const de_ReactiveInsight = (output: any, context: __SerdeContext): ReactiveInsight => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null ? de_InsightTimeRange(output.InsightTimeRange, context) : undefined,
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    SsmOpsItemId: __expectString(output.SsmOpsItemId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ReactiveInsights
 */
const de_ReactiveInsights = (output: any, context: __SerdeContext): ReactiveInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReactiveInsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReactiveInsightSummary
 */
const de_ReactiveInsightSummary = (output: any, context: __SerdeContext): ReactiveInsightSummary => {
  return {
    AssociatedResourceArns:
      output.AssociatedResourceArns != null
        ? de_AssociatedResourceArns(output.AssociatedResourceArns, context)
        : undefined,
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null ? de_InsightTimeRange(output.InsightTimeRange, context) : undefined,
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    ServiceCollection:
      output.ServiceCollection != null ? de_ServiceCollection(output.ServiceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ReactiveOrganizationInsights
 */
const de_ReactiveOrganizationInsights = (
  output: any,
  context: __SerdeContext
): ReactiveOrganizationInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReactiveOrganizationInsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReactiveOrganizationInsightSummary
 */
const de_ReactiveOrganizationInsightSummary = (
  output: any,
  context: __SerdeContext
): ReactiveOrganizationInsightSummary => {
  return {
    AccountId: __expectString(output.AccountId),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null ? de_InsightTimeRange(output.InsightTimeRange, context) : undefined,
    Name: __expectString(output.Name),
    OrganizationalUnitId: __expectString(output.OrganizationalUnitId),
    ResourceCollection:
      output.ResourceCollection != null ? de_ResourceCollection(output.ResourceCollection, context) : undefined,
    ServiceCollection:
      output.ServiceCollection != null ? de_ServiceCollection(output.ServiceCollection, context) : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Category: __expectString(output.Category),
    Description: __expectString(output.Description),
    Link: __expectString(output.Link),
    Name: __expectString(output.Name),
    Reason: __expectString(output.Reason),
    RelatedAnomalies:
      output.RelatedAnomalies != null ? de_RecommendationRelatedAnomalies(output.RelatedAnomalies, context) : undefined,
    RelatedEvents:
      output.RelatedEvents != null ? de_RecommendationRelatedEvents(output.RelatedEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedAnomalies
 */
const de_RecommendationRelatedAnomalies = (output: any, context: __SerdeContext): RecommendationRelatedAnomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationRelatedAnomaly(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationRelatedAnomaly
 */
const de_RecommendationRelatedAnomaly = (output: any, context: __SerdeContext): RecommendationRelatedAnomaly => {
  return {
    AnomalyId: __expectString(output.AnomalyId),
    Resources:
      output.Resources != null ? de_RecommendationRelatedAnomalyResources(output.Resources, context) : undefined,
    SourceDetails:
      output.SourceDetails != null ? de_RelatedAnomalySourceDetails(output.SourceDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedAnomalyResource
 */
const de_RecommendationRelatedAnomalyResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalyResource => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedAnomalyResources
 */
const de_RecommendationRelatedAnomalyResources = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalyResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationRelatedAnomalyResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail
 */
const de_RecommendationRelatedAnomalySourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalySourceDetail => {
  return {
    CloudWatchMetrics:
      output.CloudWatchMetrics != null
        ? de_RecommendationRelatedCloudWatchMetricsSourceDetails(output.CloudWatchMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail
 */
const de_RecommendationRelatedCloudWatchMetricsSourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedCloudWatchMetricsSourceDetail => {
  return {
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetails
 */
const de_RecommendationRelatedCloudWatchMetricsSourceDetails = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedCloudWatchMetricsSourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationRelatedCloudWatchMetricsSourceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationRelatedEvent
 */
const de_RecommendationRelatedEvent = (output: any, context: __SerdeContext): RecommendationRelatedEvent => {
  return {
    Name: __expectString(output.Name),
    Resources: output.Resources != null ? de_RecommendationRelatedEventResources(output.Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedEventResource
 */
const de_RecommendationRelatedEventResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEventResource => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationRelatedEventResources
 */
const de_RecommendationRelatedEventResources = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEventResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationRelatedEventResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationRelatedEvents
 */
const de_RecommendationRelatedEvents = (output: any, context: __SerdeContext): RecommendationRelatedEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationRelatedEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Recommendations
 */
const de_Recommendations = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RelatedAnomalySourceDetails
 */
const de_RelatedAnomalySourceDetails = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalySourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationRelatedAnomalySourceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceCollection
 */
const de_ResourceCollection = (output: any, context: __SerdeContext): ResourceCollection => {
  return {
    CloudFormation:
      output.CloudFormation != null ? de_CloudFormationCollection(output.CloudFormation, context) : undefined,
    Tags: output.Tags != null ? de_TagCollections(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceCollectionFilter
 */
const de_ResourceCollectionFilter = (output: any, context: __SerdeContext): ResourceCollectionFilter => {
  return {
    CloudFormation:
      output.CloudFormation != null ? de_CloudFormationCollectionFilter(output.CloudFormation, context) : undefined,
    Tags: output.Tags != null ? de_TagCollectionFilters(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServiceCollection
 */
const de_ServiceCollection = (output: any, context: __SerdeContext): ServiceCollection => {
  return {
    ServiceNames: output.ServiceNames != null ? de_ServiceNames(output.ServiceNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServiceHealth
 */
const de_ServiceHealth = (output: any, context: __SerdeContext): ServiceHealth => {
  return {
    AnalyzedResourceCount: __expectLong(output.AnalyzedResourceCount),
    Insight: output.Insight != null ? de_ServiceInsightHealth(output.Insight, context) : undefined,
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceHealths
 */
const de_ServiceHealths = (output: any, context: __SerdeContext): ServiceHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceHealth(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceInsightHealth
 */
const de_ServiceInsightHealth = (output: any, context: __SerdeContext): ServiceInsightHealth => {
  return {
    OpenProactiveInsights: __expectInt32(output.OpenProactiveInsights),
    OpenReactiveInsights: __expectInt32(output.OpenReactiveInsights),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceIntegrationConfig
 */
const de_ServiceIntegrationConfig = (output: any, context: __SerdeContext): ServiceIntegrationConfig => {
  return {
    LogsAnomalyDetection:
      output.LogsAnomalyDetection != null
        ? de_LogsAnomalyDetectionIntegration(output.LogsAnomalyDetection, context)
        : undefined,
    OpsCenter: output.OpsCenter != null ? de_OpsCenterIntegration(output.OpsCenter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServiceNames
 */
const de_ServiceNames = (output: any, context: __SerdeContext): (ServiceName | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceResourceCost
 */
const de_ServiceResourceCost = (output: any, context: __SerdeContext): ServiceResourceCost => {
  return {
    Cost: __limitedParseDouble(output.Cost),
    Count: __expectInt32(output.Count),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    UnitCost: __limitedParseDouble(output.UnitCost),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceResourceCosts
 */
const de_ServiceResourceCosts = (output: any, context: __SerdeContext): ServiceResourceCost[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceResourceCost(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SnsChannelConfig
 */
const de_SnsChannelConfig = (output: any, context: __SerdeContext): SnsChannelConfig => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

/**
 * deserializeAws_restJson1StackNames
 */
const de_StackNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagCollection
 */
const de_TagCollection = (output: any, context: __SerdeContext): TagCollection => {
  return {
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    TagValues: output.TagValues != null ? de_TagValues(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagCollectionFilter
 */
const de_TagCollectionFilter = (output: any, context: __SerdeContext): TagCollectionFilter => {
  return {
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    TagValues: output.TagValues != null ? de_TagValues(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagCollectionFilters
 */
const de_TagCollectionFilters = (output: any, context: __SerdeContext): TagCollectionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagCollectionFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagCollections
 */
const de_TagCollections = (output: any, context: __SerdeContext): TagCollection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagCollection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagCostEstimationResourceCollectionFilter
 */
const de_TagCostEstimationResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): TagCostEstimationResourceCollectionFilter => {
  return {
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    TagValues: output.TagValues != null ? de_CostEstimationTagValues(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagCostEstimationResourceCollectionFilters
 */
const de_TagCostEstimationResourceCollectionFilters = (
  output: any,
  context: __SerdeContext
): TagCostEstimationResourceCollectionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagCostEstimationResourceCollectionFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagHealth
 */
const de_TagHealth = (output: any, context: __SerdeContext): TagHealth => {
  return {
    AnalyzedResourceCount: __expectLong(output.AnalyzedResourceCount),
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    Insight: output.Insight != null ? de_InsightHealth(output.Insight, context) : undefined,
    TagValue: __expectString(output.TagValue),
  } as any;
};

/**
 * deserializeAws_restJson1TagHealths
 */
const de_TagHealths = (output: any, context: __SerdeContext): TagHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagHealth(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagValues
 */
const de_TagValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimestampMetricValuePair
 */
const de_TimestampMetricValuePair = (output: any, context: __SerdeContext): TimestampMetricValuePair => {
  return {
    MetricValue: __limitedParseDouble(output.MetricValue),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TimestampMetricValuePairList
 */
const de_TimestampMetricValuePairList = (output: any, context: __SerdeContext): TimestampMetricValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimestampMetricValuePair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFields
 */
const de_ValidationExceptionFields = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
