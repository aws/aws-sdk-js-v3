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

export const serializeAws_restJson1AddNotificationChannelCommand = async (
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
    ...(input.Config != null && { Config: serializeAws_restJson1NotificationChannelConfig(input.Config, context) }),
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

export const serializeAws_restJson1DeleteInsightCommand = async (
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

export const serializeAws_restJson1DescribeAccountHealthCommand = async (
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

export const serializeAws_restJson1DescribeAccountOverviewCommand = async (
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

export const serializeAws_restJson1DescribeAnomalyCommand = async (
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

export const serializeAws_restJson1DescribeEventSourcesConfigCommand = async (
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

export const serializeAws_restJson1DescribeFeedbackCommand = async (
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

export const serializeAws_restJson1DescribeInsightCommand = async (
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

export const serializeAws_restJson1DescribeOrganizationHealthCommand = async (
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
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: serializeAws_restJson1OrganizationalUnitIdList(input.OrganizationalUnitIds, context),
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

export const serializeAws_restJson1DescribeOrganizationOverviewCommand = async (
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
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: serializeAws_restJson1OrganizationalUnitIdList(input.OrganizationalUnitIds, context),
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

export const serializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand = async (
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
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationResourceCollectionType != null && {
      OrganizationResourceCollectionType: input.OrganizationResourceCollectionType,
    }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: serializeAws_restJson1OrganizationalUnitIdList(input.OrganizationalUnitIds, context),
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

export const serializeAws_restJson1DescribeResourceCollectionHealthCommand = async (
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

export const serializeAws_restJson1DescribeServiceIntegrationCommand = async (
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

export const serializeAws_restJson1GetCostEstimationCommand = async (
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

export const serializeAws_restJson1GetResourceCollectionCommand = async (
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

export const serializeAws_restJson1ListAnomaliesForInsightCommand = async (
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
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange != null && {
      StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
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

export const serializeAws_restJson1ListAnomalousLogGroupsCommand = async (
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

export const serializeAws_restJson1ListEventsCommand = async (
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
    ...(input.Filters != null && { Filters: serializeAws_restJson1ListEventsFilters(input.Filters, context) }),
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

export const serializeAws_restJson1ListInsightsCommand = async (
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
    ...(input.StatusFilter != null && {
      StatusFilter: serializeAws_restJson1ListInsightsStatusFilter(input.StatusFilter, context),
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

export const serializeAws_restJson1ListMonitoredResourcesCommand = async (
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
    ...(input.Filters != null && {
      Filters: serializeAws_restJson1ListMonitoredResourcesFilters(input.Filters, context),
    }),
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

export const serializeAws_restJson1ListNotificationChannelsCommand = async (
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

export const serializeAws_restJson1ListOrganizationInsightsCommand = async (
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
    ...(input.AccountIds != null && {
      AccountIds: serializeAws_restJson1ListInsightsAccountIdList(input.AccountIds, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationalUnitIds != null && {
      OrganizationalUnitIds: serializeAws_restJson1ListInsightsOrganizationalUnitIdList(
        input.OrganizationalUnitIds,
        context
      ),
    }),
    ...(input.StatusFilter != null && {
      StatusFilter: serializeAws_restJson1ListInsightsStatusFilter(input.StatusFilter, context),
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

export const serializeAws_restJson1ListRecommendationsCommand = async (
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

export const serializeAws_restJson1PutFeedbackCommand = async (
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
    ...(input.InsightFeedback != null && {
      InsightFeedback: serializeAws_restJson1InsightFeedback(input.InsightFeedback, context),
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

export const serializeAws_restJson1RemoveNotificationChannelCommand = async (
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

export const serializeAws_restJson1SearchInsightsCommand = async (
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
    ...(input.Filters != null && { Filters: serializeAws_restJson1SearchInsightsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange != null && {
      StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
    }),
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

export const serializeAws_restJson1SearchOrganizationInsightsCommand = async (
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
    ...(input.AccountIds != null && {
      AccountIds: serializeAws_restJson1SearchInsightsAccountIdList(input.AccountIds, context),
    }),
    ...(input.Filters != null && {
      Filters: serializeAws_restJson1SearchOrganizationInsightsFilters(input.Filters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange != null && {
      StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
    }),
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

export const serializeAws_restJson1StartCostEstimationCommand = async (
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
      ResourceCollection: serializeAws_restJson1CostEstimationResourceCollectionFilter(
        input.ResourceCollection,
        context
      ),
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

export const serializeAws_restJson1UpdateEventSourcesConfigCommand = async (
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
    ...(input.EventSources != null && {
      EventSources: serializeAws_restJson1EventSourcesConfig(input.EventSources, context),
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

export const serializeAws_restJson1UpdateResourceCollectionCommand = async (
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
      ResourceCollection: serializeAws_restJson1UpdateResourceCollectionFilter(input.ResourceCollection, context),
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

export const serializeAws_restJson1UpdateServiceIntegrationCommand = async (
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
      ServiceIntegration: serializeAws_restJson1UpdateServiceIntegrationConfig(input.ServiceIntegration, context),
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

export const deserializeAws_restJson1AddNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddNotificationChannelCommandError(output, context);
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

const deserializeAws_restJson1AddNotificationChannelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.devopsguru#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteInsightCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAccountHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountHealthCommandError(output, context);
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

const deserializeAws_restJson1DescribeAccountHealthCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAccountOverviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountOverviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountOverviewCommandError(output, context);
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

const deserializeAws_restJson1DescribeAccountOverviewCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAnomalyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnomalyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProactiveAnomaly != null) {
    contents.ProactiveAnomaly = deserializeAws_restJson1ProactiveAnomaly(data.ProactiveAnomaly, context);
  }
  if (data.ReactiveAnomaly != null) {
    contents.ReactiveAnomaly = deserializeAws_restJson1ReactiveAnomaly(data.ReactiveAnomaly, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAnomalyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeEventSourcesConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourcesConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeEventSourcesConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventSources != null) {
    contents.EventSources = deserializeAws_restJson1EventSourcesConfig(data.EventSources, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeEventSourcesConfigCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightFeedback != null) {
    contents.InsightFeedback = deserializeAws_restJson1InsightFeedback(data.InsightFeedback, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFeedbackCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProactiveInsight != null) {
    contents.ProactiveInsight = deserializeAws_restJson1ProactiveInsight(data.ProactiveInsight, context);
  }
  if (data.ReactiveInsight != null) {
    contents.ReactiveInsight = deserializeAws_restJson1ReactiveInsight(data.ReactiveInsight, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInsightCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeOrganizationHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationHealthCommandError(output, context);
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

const deserializeAws_restJson1DescribeOrganizationHealthCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeOrganizationOverviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationOverviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationOverviewCommandError(output, context);
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

const deserializeAws_restJson1DescribeOrganizationOverviewCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Account != null) {
    contents.Account = deserializeAws_restJson1AccountHealths(data.Account, context);
  }
  if (data.CloudFormation != null) {
    contents.CloudFormation = deserializeAws_restJson1CloudFormationHealths(data.CloudFormation, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Service != null) {
    contents.Service = deserializeAws_restJson1ServiceHealths(data.Service, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagHealths(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeOrganizationResourceCollectionHealthCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeResourceCollectionHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResourceCollectionHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CloudFormation != null) {
    contents.CloudFormation = deserializeAws_restJson1CloudFormationHealths(data.CloudFormation, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Service != null) {
    contents.Service = deserializeAws_restJson1ServiceHealths(data.Service, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagHealths(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeResourceCollectionHealthCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeServiceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeServiceIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceIntegration != null) {
    contents.ServiceIntegration = deserializeAws_restJson1ServiceIntegrationConfig(data.ServiceIntegration, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeServiceIntegrationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCostEstimationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostEstimationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCostEstimationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Costs != null) {
    contents.Costs = deserializeAws_restJson1ServiceResourceCosts(data.Costs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceCollection != null) {
    contents.ResourceCollection = deserializeAws_restJson1CostEstimationResourceCollectionFilter(
      data.ResourceCollection,
      context
    );
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.TimeRange != null) {
    contents.TimeRange = deserializeAws_restJson1CostEstimationTimeRange(data.TimeRange, context);
  }
  if (data.TotalCost != null) {
    contents.TotalCost = __limitedParseDouble(data.TotalCost);
  }
  return contents;
};

const deserializeAws_restJson1GetCostEstimationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceCollection != null) {
    contents.ResourceCollection = deserializeAws_restJson1ResourceCollectionFilter(data.ResourceCollection, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceCollectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAnomaliesForInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomaliesForInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomaliesForInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveAnomalies != null) {
    contents.ProactiveAnomalies = deserializeAws_restJson1ProactiveAnomalies(data.ProactiveAnomalies, context);
  }
  if (data.ReactiveAnomalies != null) {
    contents.ReactiveAnomalies = deserializeAws_restJson1ReactiveAnomalies(data.ReactiveAnomalies, context);
  }
  return contents;
};

const deserializeAws_restJson1ListAnomaliesForInsightCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAnomalousLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalousLogGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomalousLogGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalousLogGroups != null) {
    contents.AnomalousLogGroups = deserializeAws_restJson1AnomalousLogGroups(data.AnomalousLogGroups, context);
  }
  if (data.InsightId != null) {
    contents.InsightId = __expectString(data.InsightId);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAnomalousLogGroupsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Events != null) {
    contents.Events = deserializeAws_restJson1Events(data.Events, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEventsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = deserializeAws_restJson1ProactiveInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = deserializeAws_restJson1ReactiveInsights(data.ReactiveInsights, context);
  }
  return contents;
};

const deserializeAws_restJson1ListInsightsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMonitoredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoredResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMonitoredResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MonitoredResourceIdentifiers != null) {
    contents.MonitoredResourceIdentifiers = deserializeAws_restJson1MonitoredResourceIdentifiers(
      data.MonitoredResourceIdentifiers,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMonitoredResourcesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListNotificationChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNotificationChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = deserializeAws_restJson1Channels(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNotificationChannelsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListOrganizationInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrganizationInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = deserializeAws_restJson1ProactiveOrganizationInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = deserializeAws_restJson1ReactiveOrganizationInsights(data.ReactiveInsights, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOrganizationInsightsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Recommendations != null) {
    contents.Recommendations = deserializeAws_restJson1Recommendations(data.Recommendations, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecommendationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutFeedbackCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveNotificationChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveNotificationChannelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = deserializeAws_restJson1ProactiveInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = deserializeAws_restJson1ReactiveInsights(data.ReactiveInsights, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchInsightsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchOrganizationInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchOrganizationInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchOrganizationInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProactiveInsights != null) {
    contents.ProactiveInsights = deserializeAws_restJson1ProactiveInsights(data.ProactiveInsights, context);
  }
  if (data.ReactiveInsights != null) {
    contents.ReactiveInsights = deserializeAws_restJson1ReactiveInsights(data.ReactiveInsights, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchOrganizationInsightsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartCostEstimationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCostEstimationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCostEstimationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartCostEstimationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEventSourcesConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourcesConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEventSourcesConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateEventSourcesConfigCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResourceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResourceCollectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateServiceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateServiceIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateServiceIntegrationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Fields != null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFields(data.Fields, context);
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

const serializeAws_restJson1AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AmazonCodeGuruProfilerIntegration = (
  input: AmazonCodeGuruProfilerIntegration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1CloudFormationCollection = (
  input: CloudFormationCollection,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames != null && { StackNames: serializeAws_restJson1StackNames(input.StackNames, context) }),
  };
};

const serializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter = (
  input: CloudFormationCostEstimationResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames != null && {
      StackNames: serializeAws_restJson1CostEstimationStackNames(input.StackNames, context),
    }),
  };
};

const serializeAws_restJson1CostEstimationResourceCollectionFilter = (
  input: CostEstimationResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudFormation != null && {
      CloudFormation: serializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter(
        input.CloudFormation,
        context
      ),
    }),
    ...(input.Tags != null && {
      Tags: serializeAws_restJson1TagCostEstimationResourceCollectionFilters(input.Tags, context),
    }),
  };
};

const serializeAws_restJson1CostEstimationStackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CostEstimationTagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EndTimeRange = (input: EndTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1EventSourcesConfig = (input: EventSourcesConfig, context: __SerdeContext): any => {
  return {
    ...(input.AmazonCodeGuruProfiler != null && {
      AmazonCodeGuruProfiler: serializeAws_restJson1AmazonCodeGuruProfilerIntegration(
        input.AmazonCodeGuruProfiler,
        context
      ),
    }),
  };
};

const serializeAws_restJson1EventTimeRange = (input: EventTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1InsightFeedback = (input: InsightFeedback, context: __SerdeContext): any => {
  return {
    ...(input.Feedback != null && { Feedback: input.Feedback }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_restJson1InsightSeverities = (input: (InsightSeverity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1InsightStatuses = (input: (InsightStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListEventsFilters = (input: ListEventsFilters, context: __SerdeContext): any => {
  return {
    ...(input.DataSource != null && { DataSource: input.DataSource }),
    ...(input.EventClass != null && { EventClass: input.EventClass }),
    ...(input.EventSource != null && { EventSource: input.EventSource }),
    ...(input.EventTimeRange != null && {
      EventTimeRange: serializeAws_restJson1EventTimeRange(input.EventTimeRange, context),
    }),
    ...(input.InsightId != null && { InsightId: input.InsightId }),
    ...(input.ResourceCollection != null && {
      ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
    }),
  };
};

const serializeAws_restJson1ListInsightsAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListInsightsAnyStatusFilter = (
  input: ListInsightsAnyStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StartTimeRange != null && {
      StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ListInsightsClosedStatusFilter = (
  input: ListInsightsClosedStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTimeRange != null && {
      EndTimeRange: serializeAws_restJson1EndTimeRange(input.EndTimeRange, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ListInsightsOngoingStatusFilter = (
  input: ListInsightsOngoingStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ListInsightsOrganizationalUnitIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListInsightsStatusFilter = (
  input: ListInsightsStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Any != null && { Any: serializeAws_restJson1ListInsightsAnyStatusFilter(input.Any, context) }),
    ...(input.Closed != null && {
      Closed: serializeAws_restJson1ListInsightsClosedStatusFilter(input.Closed, context),
    }),
    ...(input.Ongoing != null && {
      Ongoing: serializeAws_restJson1ListInsightsOngoingStatusFilter(input.Ongoing, context),
    }),
  };
};

const serializeAws_restJson1ListMonitoredResourcesFilters = (
  input: ListMonitoredResourcesFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourcePermission != null && { ResourcePermission: input.ResourcePermission }),
    ...(input.ResourceTypeFilters != null && {
      ResourceTypeFilters: serializeAws_restJson1ResourceTypeFilters(input.ResourceTypeFilters, context),
    }),
  };
};

const serializeAws_restJson1LogsAnomalyDetectionIntegrationConfig = (
  input: LogsAnomalyDetectionIntegrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptInStatus != null && { OptInStatus: input.OptInStatus }),
  };
};

const serializeAws_restJson1NotificationChannelConfig = (
  input: NotificationChannelConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_restJson1NotificationFilterConfig(input.Filters, context) }),
    ...(input.Sns != null && { Sns: serializeAws_restJson1SnsChannelConfig(input.Sns, context) }),
  };
};

const serializeAws_restJson1NotificationFilterConfig = (
  input: NotificationFilterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.MessageTypes != null && {
      MessageTypes: serializeAws_restJson1NotificationMessageTypes(input.MessageTypes, context),
    }),
    ...(input.Severities != null && { Severities: serializeAws_restJson1InsightSeverities(input.Severities, context) }),
  };
};

const serializeAws_restJson1NotificationMessageTypes = (
  input: (NotificationMessageType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OpsCenterIntegrationConfig = (
  input: OpsCenterIntegrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptInStatus != null && { OptInStatus: input.OptInStatus }),
  };
};

const serializeAws_restJson1OrganizationalUnitIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceCollection = (input: ResourceCollection, context: __SerdeContext): any => {
  return {
    ...(input.CloudFormation != null && {
      CloudFormation: serializeAws_restJson1CloudFormationCollection(input.CloudFormation, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagCollections(input.Tags, context) }),
  };
};

const serializeAws_restJson1ResourceTypeFilters = (
  input: (ResourceTypeFilter | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SearchInsightsAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SearchInsightsFilters = (input: SearchInsightsFilters, context: __SerdeContext): any => {
  return {
    ...(input.ResourceCollection != null && {
      ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
    }),
    ...(input.ServiceCollection != null && {
      ServiceCollection: serializeAws_restJson1ServiceCollection(input.ServiceCollection, context),
    }),
    ...(input.Severities != null && { Severities: serializeAws_restJson1InsightSeverities(input.Severities, context) }),
    ...(input.Statuses != null && { Statuses: serializeAws_restJson1InsightStatuses(input.Statuses, context) }),
  };
};

const serializeAws_restJson1SearchOrganizationInsightsFilters = (
  input: SearchOrganizationInsightsFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceCollection != null && {
      ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
    }),
    ...(input.ServiceCollection != null && {
      ServiceCollection: serializeAws_restJson1ServiceCollection(input.ServiceCollection, context),
    }),
    ...(input.Severities != null && { Severities: serializeAws_restJson1InsightSeverities(input.Severities, context) }),
    ...(input.Statuses != null && { Statuses: serializeAws_restJson1InsightStatuses(input.Statuses, context) }),
  };
};

const serializeAws_restJson1ServiceCollection = (input: ServiceCollection, context: __SerdeContext): any => {
  return {
    ...(input.ServiceNames != null && {
      ServiceNames: serializeAws_restJson1ServiceNames(input.ServiceNames, context),
    }),
  };
};

const serializeAws_restJson1ServiceNames = (input: (ServiceName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SnsChannelConfig = (input: SnsChannelConfig, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_restJson1StackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StartTimeRange = (input: StartTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime != null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime != null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1TagCollection = (input: TagCollection, context: __SerdeContext): any => {
  return {
    ...(input.AppBoundaryKey != null && { AppBoundaryKey: input.AppBoundaryKey }),
    ...(input.TagValues != null && { TagValues: serializeAws_restJson1TagValues(input.TagValues, context) }),
  };
};

const serializeAws_restJson1TagCollections = (input: TagCollection[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagCollection(entry, context);
    });
};

const serializeAws_restJson1TagCostEstimationResourceCollectionFilter = (
  input: TagCostEstimationResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppBoundaryKey != null && { AppBoundaryKey: input.AppBoundaryKey }),
    ...(input.TagValues != null && {
      TagValues: serializeAws_restJson1CostEstimationTagValues(input.TagValues, context),
    }),
  };
};

const serializeAws_restJson1TagCostEstimationResourceCollectionFilters = (
  input: TagCostEstimationResourceCollectionFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagCostEstimationResourceCollectionFilter(entry, context);
    });
};

const serializeAws_restJson1TagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1UpdateCloudFormationCollectionFilter = (
  input: UpdateCloudFormationCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames != null && { StackNames: serializeAws_restJson1UpdateStackNames(input.StackNames, context) }),
  };
};

const serializeAws_restJson1UpdateResourceCollectionFilter = (
  input: UpdateResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudFormation != null && {
      CloudFormation: serializeAws_restJson1UpdateCloudFormationCollectionFilter(input.CloudFormation, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1UpdateTagCollectionFilters(input.Tags, context) }),
  };
};

const serializeAws_restJson1UpdateServiceIntegrationConfig = (
  input: UpdateServiceIntegrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogsAnomalyDetection != null && {
      LogsAnomalyDetection: serializeAws_restJson1LogsAnomalyDetectionIntegrationConfig(
        input.LogsAnomalyDetection,
        context
      ),
    }),
    ...(input.OpsCenter != null && {
      OpsCenter: serializeAws_restJson1OpsCenterIntegrationConfig(input.OpsCenter, context),
    }),
  };
};

const serializeAws_restJson1UpdateStackNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1UpdateTagCollectionFilter = (
  input: UpdateTagCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppBoundaryKey != null && { AppBoundaryKey: input.AppBoundaryKey }),
    ...(input.TagValues != null && { TagValues: serializeAws_restJson1UpdateTagValues(input.TagValues, context) }),
  };
};

const serializeAws_restJson1UpdateTagCollectionFilters = (
  input: UpdateTagCollectionFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateTagCollectionFilter(entry, context);
    });
};

const serializeAws_restJson1UpdateTagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1AccountHealth = (output: any, context: __SerdeContext): AccountHealth => {
  return {
    AccountId: __expectString(output.AccountId),
    Insight: output.Insight != null ? deserializeAws_restJson1AccountInsightHealth(output.Insight, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AccountHealths = (output: any, context: __SerdeContext): AccountHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccountHealth(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccountInsightHealth = (output: any, context: __SerdeContext): AccountInsightHealth => {
  return {
    OpenProactiveInsights: __expectInt32(output.OpenProactiveInsights),
    OpenReactiveInsights: __expectInt32(output.OpenReactiveInsights),
  } as any;
};

const deserializeAws_restJson1AmazonCodeGuruProfilerIntegration = (
  output: any,
  context: __SerdeContext
): AmazonCodeGuruProfilerIntegration => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AnomalousLogGroup = (output: any, context: __SerdeContext): AnomalousLogGroup => {
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
      output.LogAnomalyShowcases != null
        ? deserializeAws_restJson1LogAnomalyShowcases(output.LogAnomalyShowcases, context)
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    NumberOfLogLinesScanned: __expectInt32(output.NumberOfLogLinesScanned),
  } as any;
};

const deserializeAws_restJson1AnomalousLogGroups = (output: any, context: __SerdeContext): AnomalousLogGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnomalousLogGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnomalyReportedTimeRange = (
  output: any,
  context: __SerdeContext
): AnomalyReportedTimeRange => {
  return {
    CloseTime:
      output.CloseTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CloseTime))) : undefined,
    OpenTime:
      output.OpenTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OpenTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalyResource = (output: any, context: __SerdeContext): AnomalyResource => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AnomalyResources = (output: any, context: __SerdeContext): AnomalyResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnomalyResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnomalySourceDetails = (output: any, context: __SerdeContext): AnomalySourceDetails => {
  return {
    CloudWatchMetrics:
      output.CloudWatchMetrics != null
        ? deserializeAws_restJson1CloudWatchMetricsDetails(output.CloudWatchMetrics, context)
        : undefined,
    PerformanceInsightsMetrics:
      output.PerformanceInsightsMetrics != null
        ? deserializeAws_restJson1PerformanceInsightsMetricsDetails(output.PerformanceInsightsMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalySourceMetadata = (output: any, context: __SerdeContext): AnomalySourceMetadata => {
  return {
    Source: __expectString(output.Source),
    SourceResourceName: __expectString(output.SourceResourceName),
    SourceResourceType: __expectString(output.SourceResourceType),
  } as any;
};

const deserializeAws_restJson1AnomalyTimeRange = (output: any, context: __SerdeContext): AnomalyTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1AssociatedResourceArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Channels = (output: any, context: __SerdeContext): NotificationChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotificationChannel(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CloudFormationCollection = (
  output: any,
  context: __SerdeContext
): CloudFormationCollection => {
  return {
    StackNames: output.StackNames != null ? deserializeAws_restJson1StackNames(output.StackNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CloudFormationCollectionFilter = (
  output: any,
  context: __SerdeContext
): CloudFormationCollectionFilter => {
  return {
    StackNames: output.StackNames != null ? deserializeAws_restJson1StackNames(output.StackNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): CloudFormationCostEstimationResourceCollectionFilter => {
  return {
    StackNames:
      output.StackNames != null
        ? deserializeAws_restJson1CostEstimationStackNames(output.StackNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudFormationHealth = (output: any, context: __SerdeContext): CloudFormationHealth => {
  return {
    AnalyzedResourceCount: __expectLong(output.AnalyzedResourceCount),
    Insight: output.Insight != null ? deserializeAws_restJson1InsightHealth(output.Insight, context) : undefined,
    StackName: __expectString(output.StackName),
  } as any;
};

const deserializeAws_restJson1CloudFormationHealths = (
  output: any,
  context: __SerdeContext
): CloudFormationHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudFormationHealth(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CloudWatchMetricsDataSummary = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDataSummary => {
  return {
    StatusCode: __expectString(output.StatusCode),
    TimestampMetricValuePairList:
      output.TimestampMetricValuePairList != null
        ? deserializeAws_restJson1TimestampMetricValuePairList(output.TimestampMetricValuePairList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudWatchMetricsDetail = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDetail => {
  return {
    Dimensions:
      output.Dimensions != null
        ? deserializeAws_restJson1CloudWatchMetricsDimensions(output.Dimensions, context)
        : undefined,
    MetricDataSummary:
      output.MetricDataSummary != null
        ? deserializeAws_restJson1CloudWatchMetricsDataSummary(output.MetricDataSummary, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Period: __expectInt32(output.Period),
    Stat: __expectString(output.Stat),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_restJson1CloudWatchMetricsDetails = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudWatchMetricsDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CloudWatchMetricsDimension = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDimension => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1CloudWatchMetricsDimensions = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudWatchMetricsDimension(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CostEstimationResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): CostEstimationResourceCollectionFilter => {
  return {
    CloudFormation:
      output.CloudFormation != null
        ? deserializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter(output.CloudFormation, context)
        : undefined,
    Tags:
      output.Tags != null
        ? deserializeAws_restJson1TagCostEstimationResourceCollectionFilters(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CostEstimationStackNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CostEstimationTagValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CostEstimationTimeRange = (
  output: any,
  context: __SerdeContext
): CostEstimationTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1Event = (output: any, context: __SerdeContext): Event => {
  return {
    DataSource: __expectString(output.DataSource),
    EventClass: __expectString(output.EventClass),
    EventSource: __expectString(output.EventSource),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Resources: output.Resources != null ? deserializeAws_restJson1EventResources(output.Resources, context) : undefined,
    Time: output.Time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Time))) : undefined,
  } as any;
};

const deserializeAws_restJson1EventResource = (output: any, context: __SerdeContext): EventResource => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1EventResources = (output: any, context: __SerdeContext): EventResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Events = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventSourcesConfig = (output: any, context: __SerdeContext): EventSourcesConfig => {
  return {
    AmazonCodeGuruProfiler:
      output.AmazonCodeGuruProfiler != null
        ? deserializeAws_restJson1AmazonCodeGuruProfilerIntegration(output.AmazonCodeGuruProfiler, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightFeedback = (output: any, context: __SerdeContext): InsightFeedback => {
  return {
    Feedback: __expectString(output.Feedback),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1InsightHealth = (output: any, context: __SerdeContext): InsightHealth => {
  return {
    MeanTimeToRecoverInMilliseconds: __expectLong(output.MeanTimeToRecoverInMilliseconds),
    OpenProactiveInsights: __expectInt32(output.OpenProactiveInsights),
    OpenReactiveInsights: __expectInt32(output.OpenReactiveInsights),
  } as any;
};

const deserializeAws_restJson1InsightSeverities = (
  output: any,
  context: __SerdeContext
): (InsightSeverity | string)[] => {
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

const deserializeAws_restJson1InsightTimeRange = (output: any, context: __SerdeContext): InsightTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1LogAnomalyClass = (output: any, context: __SerdeContext): LogAnomalyClass => {
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

const deserializeAws_restJson1LogAnomalyClasses = (output: any, context: __SerdeContext): LogAnomalyClass[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogAnomalyClass(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LogAnomalyShowcase = (output: any, context: __SerdeContext): LogAnomalyShowcase => {
  return {
    LogAnomalyClasses:
      output.LogAnomalyClasses != null
        ? deserializeAws_restJson1LogAnomalyClasses(output.LogAnomalyClasses, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LogAnomalyShowcases = (output: any, context: __SerdeContext): LogAnomalyShowcase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogAnomalyShowcase(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LogsAnomalyDetectionIntegration = (
  output: any,
  context: __SerdeContext
): LogsAnomalyDetectionIntegration => {
  return {
    OptInStatus: __expectString(output.OptInStatus),
  } as any;
};

const deserializeAws_restJson1MonitoredResourceIdentifier = (
  output: any,
  context: __SerdeContext
): MonitoredResourceIdentifier => {
  return {
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    MonitoredResourceName: __expectString(output.MonitoredResourceName),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    ResourcePermission: __expectString(output.ResourcePermission),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1MonitoredResourceIdentifiers = (
  output: any,
  context: __SerdeContext
): MonitoredResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MonitoredResourceIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NotificationChannel = (output: any, context: __SerdeContext): NotificationChannel => {
  return {
    Config:
      output.Config != null ? deserializeAws_restJson1NotificationChannelConfig(output.Config, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1NotificationChannelConfig = (
  output: any,
  context: __SerdeContext
): NotificationChannelConfig => {
  return {
    Filters:
      output.Filters != null ? deserializeAws_restJson1NotificationFilterConfig(output.Filters, context) : undefined,
    Sns: output.Sns != null ? deserializeAws_restJson1SnsChannelConfig(output.Sns, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationFilterConfig = (
  output: any,
  context: __SerdeContext
): NotificationFilterConfig => {
  return {
    MessageTypes:
      output.MessageTypes != null
        ? deserializeAws_restJson1NotificationMessageTypes(output.MessageTypes, context)
        : undefined,
    Severities:
      output.Severities != null ? deserializeAws_restJson1InsightSeverities(output.Severities, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationMessageTypes = (
  output: any,
  context: __SerdeContext
): (NotificationMessageType | string)[] => {
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

const deserializeAws_restJson1OpsCenterIntegration = (output: any, context: __SerdeContext): OpsCenterIntegration => {
  return {
    OptInStatus: __expectString(output.OptInStatus),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsMetricDimensionGroup = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricDimensionGroup => {
  return {
    Dimensions:
      output.Dimensions != null
        ? deserializeAws_restJson1PerformanceInsightsMetricDimensions(output.Dimensions, context)
        : undefined,
    Group: __expectString(output.Group),
    Limit: __expectInt32(output.Limit),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsMetricDimensions = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1PerformanceInsightsMetricFilterMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1PerformanceInsightsMetricQuery = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricQuery => {
  return {
    Filter:
      output.Filter != null
        ? deserializeAws_restJson1PerformanceInsightsMetricFilterMap(output.Filter, context)
        : undefined,
    GroupBy:
      output.GroupBy != null
        ? deserializeAws_restJson1PerformanceInsightsMetricDimensionGroup(output.GroupBy, context)
        : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsMetricsDetail = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricsDetail => {
  return {
    MetricDisplayName: __expectString(output.MetricDisplayName),
    MetricQuery:
      output.MetricQuery != null
        ? deserializeAws_restJson1PerformanceInsightsMetricQuery(output.MetricQuery, context)
        : undefined,
    ReferenceData:
      output.ReferenceData != null
        ? deserializeAws_restJson1PerformanceInsightsReferenceDataList(output.ReferenceData, context)
        : undefined,
    StatsAtAnomaly:
      output.StatsAtAnomaly != null
        ? deserializeAws_restJson1PerformanceInsightsStats(output.StatsAtAnomaly, context)
        : undefined,
    StatsAtBaseline:
      output.StatsAtBaseline != null
        ? deserializeAws_restJson1PerformanceInsightsStats(output.StatsAtBaseline, context)
        : undefined,
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsMetricsDetails = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricsDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PerformanceInsightsMetricsDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PerformanceInsightsReferenceComparisonValues = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceComparisonValues => {
  return {
    ReferenceMetric:
      output.ReferenceMetric != null
        ? deserializeAws_restJson1PerformanceInsightsReferenceMetric(output.ReferenceMetric, context)
        : undefined,
    ReferenceScalar:
      output.ReferenceScalar != null
        ? deserializeAws_restJson1PerformanceInsightsReferenceScalar(output.ReferenceScalar, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsReferenceData = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceData => {
  return {
    ComparisonValues:
      output.ComparisonValues != null
        ? deserializeAws_restJson1PerformanceInsightsReferenceComparisonValues(output.ComparisonValues, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsReferenceDataList = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PerformanceInsightsReferenceData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PerformanceInsightsReferenceMetric = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceMetric => {
  return {
    MetricQuery:
      output.MetricQuery != null
        ? deserializeAws_restJson1PerformanceInsightsMetricQuery(output.MetricQuery, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsReferenceScalar = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceScalar => {
  return {
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsStat = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsStat => {
  return {
    Type: __expectString(output.Type),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1PerformanceInsightsStats = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsStat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PerformanceInsightsStat(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PredictionTimeRange = (output: any, context: __SerdeContext): PredictionTimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveAnomalies = (
  output: any,
  context: __SerdeContext
): ProactiveAnomalySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProactiveAnomalySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProactiveAnomaly = (output: any, context: __SerdeContext): ProactiveAnomaly => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? deserializeAws_restJson1AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null
        ? deserializeAws_restJson1AnomalyResources(output.AnomalyResources, context)
        : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    Id: __expectString(output.Id),
    Limit: __limitedParseDouble(output.Limit),
    PredictionTimeRange:
      output.PredictionTimeRange != null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails:
      output.SourceDetails != null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    SourceMetadata:
      output.SourceMetadata != null
        ? deserializeAws_restJson1AnomalySourceMetadata(output.SourceMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveAnomalySummary = (
  output: any,
  context: __SerdeContext
): ProactiveAnomalySummary => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? deserializeAws_restJson1AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null
        ? deserializeAws_restJson1AnomalyResources(output.AnomalyResources, context)
        : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    Id: __expectString(output.Id),
    Limit: __limitedParseDouble(output.Limit),
    PredictionTimeRange:
      output.PredictionTimeRange != null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails:
      output.SourceDetails != null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    SourceMetadata:
      output.SourceMetadata != null
        ? deserializeAws_restJson1AnomalySourceMetadata(output.SourceMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveInsight = (output: any, context: __SerdeContext): ProactiveInsight => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: __expectString(output.Name),
    PredictionTimeRange:
      output.PredictionTimeRange != null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    SsmOpsItemId: __expectString(output.SsmOpsItemId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ProactiveInsights = (output: any, context: __SerdeContext): ProactiveInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProactiveInsightSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProactiveInsightSummary = (
  output: any,
  context: __SerdeContext
): ProactiveInsightSummary => {
  return {
    AssociatedResourceArns:
      output.AssociatedResourceArns != null
        ? deserializeAws_restJson1AssociatedResourceArns(output.AssociatedResourceArns, context)
        : undefined,
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: __expectString(output.Name),
    PredictionTimeRange:
      output.PredictionTimeRange != null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    ServiceCollection:
      output.ServiceCollection != null
        ? deserializeAws_restJson1ServiceCollection(output.ServiceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ProactiveOrganizationInsights = (
  output: any,
  context: __SerdeContext
): ProactiveOrganizationInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProactiveOrganizationInsightSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProactiveOrganizationInsightSummary = (
  output: any,
  context: __SerdeContext
): ProactiveOrganizationInsightSummary => {
  return {
    AccountId: __expectString(output.AccountId),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: __expectString(output.Name),
    OrganizationalUnitId: __expectString(output.OrganizationalUnitId),
    PredictionTimeRange:
      output.PredictionTimeRange != null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    ServiceCollection:
      output.ServiceCollection != null
        ? deserializeAws_restJson1ServiceCollection(output.ServiceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ReactiveAnomalies = (output: any, context: __SerdeContext): ReactiveAnomalySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReactiveAnomalySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReactiveAnomaly = (output: any, context: __SerdeContext): ReactiveAnomaly => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? deserializeAws_restJson1AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null
        ? deserializeAws_restJson1AnomalyResources(output.AnomalyResources, context)
        : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    CausalAnomalyId: __expectString(output.CausalAnomalyId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails:
      output.SourceDetails != null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ReactiveAnomalySummary = (
  output: any,
  context: __SerdeContext
): ReactiveAnomalySummary => {
  return {
    AnomalyReportedTimeRange:
      output.AnomalyReportedTimeRange != null
        ? deserializeAws_restJson1AnomalyReportedTimeRange(output.AnomalyReportedTimeRange, context)
        : undefined,
    AnomalyResources:
      output.AnomalyResources != null
        ? deserializeAws_restJson1AnomalyResources(output.AnomalyResources, context)
        : undefined,
    AnomalyTimeRange:
      output.AnomalyTimeRange != null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId: __expectString(output.AssociatedInsightId),
    CausalAnomalyId: __expectString(output.CausalAnomalyId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    SourceDetails:
      output.SourceDetails != null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ReactiveInsight = (output: any, context: __SerdeContext): ReactiveInsight => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    SsmOpsItemId: __expectString(output.SsmOpsItemId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ReactiveInsights = (output: any, context: __SerdeContext): ReactiveInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReactiveInsightSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReactiveInsightSummary = (
  output: any,
  context: __SerdeContext
): ReactiveInsightSummary => {
  return {
    AssociatedResourceArns:
      output.AssociatedResourceArns != null
        ? deserializeAws_restJson1AssociatedResourceArns(output.AssociatedResourceArns, context)
        : undefined,
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    ServiceCollection:
      output.ServiceCollection != null
        ? deserializeAws_restJson1ServiceCollection(output.ServiceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ReactiveOrganizationInsights = (
  output: any,
  context: __SerdeContext
): ReactiveOrganizationInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReactiveOrganizationInsightSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReactiveOrganizationInsightSummary = (
  output: any,
  context: __SerdeContext
): ReactiveOrganizationInsightSummary => {
  return {
    AccountId: __expectString(output.AccountId),
    Id: __expectString(output.Id),
    InsightTimeRange:
      output.InsightTimeRange != null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: __expectString(output.Name),
    OrganizationalUnitId: __expectString(output.OrganizationalUnitId),
    ResourceCollection:
      output.ResourceCollection != null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    ServiceCollection:
      output.ServiceCollection != null
        ? deserializeAws_restJson1ServiceCollection(output.ServiceCollection, context)
        : undefined,
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Category: __expectString(output.Category),
    Description: __expectString(output.Description),
    Link: __expectString(output.Link),
    Name: __expectString(output.Name),
    Reason: __expectString(output.Reason),
    RelatedAnomalies:
      output.RelatedAnomalies != null
        ? deserializeAws_restJson1RecommendationRelatedAnomalies(output.RelatedAnomalies, context)
        : undefined,
    RelatedEvents:
      output.RelatedEvents != null
        ? deserializeAws_restJson1RecommendationRelatedEvents(output.RelatedEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedAnomalies = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedAnomaly(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationRelatedAnomaly = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomaly => {
  return {
    AnomalyId: __expectString(output.AnomalyId),
    Resources:
      output.Resources != null
        ? deserializeAws_restJson1RecommendationRelatedAnomalyResources(output.Resources, context)
        : undefined,
    SourceDetails:
      output.SourceDetails != null
        ? deserializeAws_restJson1RelatedAnomalySourceDetails(output.SourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedAnomalyResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalyResource => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedAnomalyResources = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalyResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedAnomalyResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalySourceDetail => {
  return {
    CloudWatchMetrics:
      output.CloudWatchMetrics != null
        ? deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetails(output.CloudWatchMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedCloudWatchMetricsSourceDetail => {
  return {
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetails = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedCloudWatchMetricsSourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationRelatedEvent = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEvent => {
  return {
    Name: __expectString(output.Name),
    Resources:
      output.Resources != null
        ? deserializeAws_restJson1RecommendationRelatedEventResources(output.Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedEventResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEventResource => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedEventResources = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEventResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedEventResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationRelatedEvents = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Recommendations = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Recommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RelatedAnomalySourceDetails = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalySourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceCollection = (output: any, context: __SerdeContext): ResourceCollection => {
  return {
    CloudFormation:
      output.CloudFormation != null
        ? deserializeAws_restJson1CloudFormationCollection(output.CloudFormation, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagCollections(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): ResourceCollectionFilter => {
  return {
    CloudFormation:
      output.CloudFormation != null
        ? deserializeAws_restJson1CloudFormationCollectionFilter(output.CloudFormation, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagCollectionFilters(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceCollection = (output: any, context: __SerdeContext): ServiceCollection => {
  return {
    ServiceNames:
      output.ServiceNames != null ? deserializeAws_restJson1ServiceNames(output.ServiceNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceHealth = (output: any, context: __SerdeContext): ServiceHealth => {
  return {
    AnalyzedResourceCount: __expectLong(output.AnalyzedResourceCount),
    Insight: output.Insight != null ? deserializeAws_restJson1ServiceInsightHealth(output.Insight, context) : undefined,
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

const deserializeAws_restJson1ServiceHealths = (output: any, context: __SerdeContext): ServiceHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceHealth(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ServiceInsightHealth = (output: any, context: __SerdeContext): ServiceInsightHealth => {
  return {
    OpenProactiveInsights: __expectInt32(output.OpenProactiveInsights),
    OpenReactiveInsights: __expectInt32(output.OpenReactiveInsights),
  } as any;
};

const deserializeAws_restJson1ServiceIntegrationConfig = (
  output: any,
  context: __SerdeContext
): ServiceIntegrationConfig => {
  return {
    LogsAnomalyDetection:
      output.LogsAnomalyDetection != null
        ? deserializeAws_restJson1LogsAnomalyDetectionIntegration(output.LogsAnomalyDetection, context)
        : undefined,
    OpsCenter:
      output.OpsCenter != null ? deserializeAws_restJson1OpsCenterIntegration(output.OpsCenter, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceNames = (output: any, context: __SerdeContext): (ServiceName | string)[] => {
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

const deserializeAws_restJson1ServiceResourceCost = (output: any, context: __SerdeContext): ServiceResourceCost => {
  return {
    Cost: __limitedParseDouble(output.Cost),
    Count: __expectInt32(output.Count),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    UnitCost: __limitedParseDouble(output.UnitCost),
  } as any;
};

const deserializeAws_restJson1ServiceResourceCosts = (output: any, context: __SerdeContext): ServiceResourceCost[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceResourceCost(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SnsChannelConfig = (output: any, context: __SerdeContext): SnsChannelConfig => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

const deserializeAws_restJson1StackNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagCollection = (output: any, context: __SerdeContext): TagCollection => {
  return {
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    TagValues: output.TagValues != null ? deserializeAws_restJson1TagValues(output.TagValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagCollectionFilter = (output: any, context: __SerdeContext): TagCollectionFilter => {
  return {
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    TagValues: output.TagValues != null ? deserializeAws_restJson1TagValues(output.TagValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagCollectionFilters = (output: any, context: __SerdeContext): TagCollectionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagCollectionFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagCollections = (output: any, context: __SerdeContext): TagCollection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagCollection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagCostEstimationResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): TagCostEstimationResourceCollectionFilter => {
  return {
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    TagValues:
      output.TagValues != null ? deserializeAws_restJson1CostEstimationTagValues(output.TagValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagCostEstimationResourceCollectionFilters = (
  output: any,
  context: __SerdeContext
): TagCostEstimationResourceCollectionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagCostEstimationResourceCollectionFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagHealth = (output: any, context: __SerdeContext): TagHealth => {
  return {
    AnalyzedResourceCount: __expectLong(output.AnalyzedResourceCount),
    AppBoundaryKey: __expectString(output.AppBoundaryKey),
    Insight: output.Insight != null ? deserializeAws_restJson1InsightHealth(output.Insight, context) : undefined,
    TagValue: __expectString(output.TagValue),
  } as any;
};

const deserializeAws_restJson1TagHealths = (output: any, context: __SerdeContext): TagHealth[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagHealth(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TimestampMetricValuePair = (
  output: any,
  context: __SerdeContext
): TimestampMetricValuePair => {
  return {
    MetricValue: __limitedParseDouble(output.MetricValue),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

const deserializeAws_restJson1TimestampMetricValuePairList = (
  output: any,
  context: __SerdeContext
): TimestampMetricValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TimestampMetricValuePair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFields = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
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
