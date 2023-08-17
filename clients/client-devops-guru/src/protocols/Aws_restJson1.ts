// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AmazonCodeGuruProfilerIntegration,
  AnomalousLogGroup,
  AnomalyReportedTimeRange,
  AnomalySourceDetails,
  AnomalyTimeRange,
  CloudFormationCollection,
  CloudFormationCostEstimationResourceCollectionFilter,
  CloudWatchMetricsDataSummary,
  CloudWatchMetricsDetail,
  ConflictException,
  CostEstimationResourceCollectionFilter,
  CostEstimationTimeRange,
  EndTimeRange,
  Event,
  EventSourcesConfig,
  EventTimeRange,
  InsightFeedback,
  InsightSeverity,
  InsightStatus,
  InsightTimeRange,
  InternalServerException,
  KMSServerSideEncryptionIntegrationConfig,
  ListAnomaliesForInsightFilters,
  ListEventsFilters,
  ListInsightsAnyStatusFilter,
  ListInsightsClosedStatusFilter,
  ListInsightsOngoingStatusFilter,
  ListInsightsStatusFilter,
  ListMonitoredResourcesFilters,
  LogAnomalyClass,
  LogAnomalyShowcase,
  LogsAnomalyDetectionIntegrationConfig,
  MonitoredResourceIdentifier,
  NotificationChannelConfig,
  NotificationFilterConfig,
  NotificationMessageType,
  OpsCenterIntegrationConfig,
  PerformanceInsightsMetricsDetail,
  PerformanceInsightsReferenceComparisonValues,
  PerformanceInsightsReferenceData,
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
  ResourceCollection,
  ResourceNotFoundException,
  ResourceTypeFilter,
  SearchInsightsFilters,
  SearchOrganizationInsightsFilters,
  ServiceCollection,
  ServiceName,
  ServiceQuotaExceededException,
  ServiceResourceCost,
  SnsChannelConfig,
  StartTimeRange,
  TagCollection,
  TagCostEstimationResourceCollectionFilter,
  ThrottlingException,
  TimestampMetricValuePair,
  UpdateCloudFormationCollectionFilter,
  UpdateResourceCollectionFilter,
  UpdateServiceIntegrationConfig,
  UpdateTagCollectionFilter,
  ValidationException,
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
  body = JSON.stringify(
    take(input, {
      Config: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      FromTime: (_) => Math.round(_.getTime() / 1000),
      ToTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      InsightId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      OrganizationalUnitIds: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      FromTime: (_) => Math.round(_.getTime() / 1000),
      OrganizationalUnitIds: (_) => _json(_),
      ToTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      OrganizationResourceCollectionType: [],
      OrganizationalUnitIds: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      StartTimeRange: (_) => se_StartTimeRange(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      InsightId: [],
      MaxResults: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      Filters: (_) => se_ListEventsFilters(_, context),
      MaxResults: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      StatusFilter: (_) => se_ListInsightsStatusFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      OrganizationalUnitIds: (_) => _json(_),
      StatusFilter: (_) => se_ListInsightsStatusFilter(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      InsightId: [],
      Locale: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      InsightFeedback: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      StartTimeRange: (_) => se_StartTimeRange(_, context),
      Type: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      StartTimeRange: (_) => se_StartTimeRange(_, context),
      Type: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ResourceCollection: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      EventSources: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Action: [],
      ResourceCollection: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      ServiceIntegration: (_) => _json(_),
    })
  );
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
  const doc = take(data, {
    Id: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AnalyzedResourceCount: __expectLong,
    MetricsAnalyzed: __expectInt32,
    OpenProactiveInsights: __expectInt32,
    OpenReactiveInsights: __expectInt32,
    ResourceHours: __expectLong,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MeanTimeToRecoverInMilliseconds: __expectLong,
    ProactiveInsights: __expectInt32,
    ReactiveInsights: __expectInt32,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ProactiveAnomaly: (_) => de_ProactiveAnomaly(_, context),
    ReactiveAnomaly: (_) => de_ReactiveAnomaly(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    EventSources: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    InsightFeedback: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ProactiveInsight: (_) => de_ProactiveInsight(_, context),
    ReactiveInsight: (_) => de_ReactiveInsight(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MetricsAnalyzed: __expectInt32,
    OpenProactiveInsights: __expectInt32,
    OpenReactiveInsights: __expectInt32,
    ResourceHours: __expectLong,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ProactiveInsights: __expectInt32,
    ReactiveInsights: __expectInt32,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Account: _json,
    CloudFormation: _json,
    NextToken: __expectString,
    Service: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CloudFormation: _json,
    NextToken: __expectString,
    Service: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ServiceIntegration: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Costs: (_) => de_ServiceResourceCosts(_, context),
    NextToken: __expectString,
    ResourceCollection: _json,
    Status: __expectString,
    TimeRange: (_) => de_CostEstimationTimeRange(_, context),
    TotalCost: __limitedParseDouble,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ResourceCollection: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ProactiveAnomalies: (_) => de_ProactiveAnomalies(_, context),
    ReactiveAnomalies: (_) => de_ReactiveAnomalies(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AnomalousLogGroups: (_) => de_AnomalousLogGroups(_, context),
    InsightId: __expectString,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Events: (_) => de_Events(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ProactiveInsights: (_) => de_ProactiveInsights(_, context),
    ReactiveInsights: (_) => de_ReactiveInsights(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MonitoredResourceIdentifiers: (_) => de_MonitoredResourceIdentifiers(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Channels: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ProactiveInsights: (_) => de_ProactiveOrganizationInsights(_, context),
    ReactiveInsights: (_) => de_ReactiveOrganizationInsights(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    Recommendations: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ProactiveInsights: (_) => de_ProactiveInsights(_, context),
    ReactiveInsights: (_) => de_ReactiveInsights(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ProactiveInsights: (_) => de_ProactiveInsights(_, context),
    ReactiveInsights: (_) => de_ReactiveInsights(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    QuotaCode: __expectString,
    ServiceCode: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Fields: _json,
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountIdList omitted.

// se_AmazonCodeGuruProfilerIntegration omitted.

// se_CloudFormationCollection omitted.

// se_CloudFormationCostEstimationResourceCollectionFilter omitted.

// se_CostEstimationResourceCollectionFilter omitted.

// se_CostEstimationStackNames omitted.

// se_CostEstimationTagValues omitted.

/**
 * serializeAws_restJson1EndTimeRange
 */
const se_EndTimeRange = (input: EndTimeRange, context: __SerdeContext): any => {
  return take(input, {
    FromTime: (_) => Math.round(_.getTime() / 1000),
    ToTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_EventSourcesConfig omitted.

/**
 * serializeAws_restJson1EventTimeRange
 */
const se_EventTimeRange = (input: EventTimeRange, context: __SerdeContext): any => {
  return take(input, {
    FromTime: (_) => Math.round(_.getTime() / 1000),
    ToTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_InsightFeedback omitted.

// se_InsightSeverities omitted.

// se_InsightStatuses omitted.

// se_KMSServerSideEncryptionIntegrationConfig omitted.

// se_ListAnomaliesForInsightFilters omitted.

/**
 * serializeAws_restJson1ListEventsFilters
 */
const se_ListEventsFilters = (input: ListEventsFilters, context: __SerdeContext): any => {
  return take(input, {
    DataSource: [],
    EventClass: [],
    EventSource: [],
    EventTimeRange: (_) => se_EventTimeRange(_, context),
    InsightId: [],
    ResourceCollection: _json,
  });
};

// se_ListInsightsAccountIdList omitted.

/**
 * serializeAws_restJson1ListInsightsAnyStatusFilter
 */
const se_ListInsightsAnyStatusFilter = (input: ListInsightsAnyStatusFilter, context: __SerdeContext): any => {
  return take(input, {
    StartTimeRange: (_) => se_StartTimeRange(_, context),
    Type: [],
  });
};

/**
 * serializeAws_restJson1ListInsightsClosedStatusFilter
 */
const se_ListInsightsClosedStatusFilter = (input: ListInsightsClosedStatusFilter, context: __SerdeContext): any => {
  return take(input, {
    EndTimeRange: (_) => se_EndTimeRange(_, context),
    Type: [],
  });
};

// se_ListInsightsOngoingStatusFilter omitted.

// se_ListInsightsOrganizationalUnitIdList omitted.

/**
 * serializeAws_restJson1ListInsightsStatusFilter
 */
const se_ListInsightsStatusFilter = (input: ListInsightsStatusFilter, context: __SerdeContext): any => {
  return take(input, {
    Any: (_) => se_ListInsightsAnyStatusFilter(_, context),
    Closed: (_) => se_ListInsightsClosedStatusFilter(_, context),
    Ongoing: _json,
  });
};

// se_ListMonitoredResourcesFilters omitted.

// se_LogsAnomalyDetectionIntegrationConfig omitted.

// se_NotificationChannelConfig omitted.

// se_NotificationFilterConfig omitted.

// se_NotificationMessageTypes omitted.

// se_OpsCenterIntegrationConfig omitted.

// se_OrganizationalUnitIdList omitted.

// se_ResourceCollection omitted.

// se_ResourceTypeFilters omitted.

// se_SearchInsightsAccountIdList omitted.

// se_SearchInsightsFilters omitted.

// se_SearchOrganizationInsightsFilters omitted.

// se_ServiceCollection omitted.

// se_ServiceNames omitted.

// se_SnsChannelConfig omitted.

// se_StackNames omitted.

/**
 * serializeAws_restJson1StartTimeRange
 */
const se_StartTimeRange = (input: StartTimeRange, context: __SerdeContext): any => {
  return take(input, {
    FromTime: (_) => Math.round(_.getTime() / 1000),
    ToTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_TagCollection omitted.

// se_TagCollections omitted.

// se_TagCostEstimationResourceCollectionFilter omitted.

// se_TagCostEstimationResourceCollectionFilters omitted.

// se_TagValues omitted.

// se_UpdateCloudFormationCollectionFilter omitted.

// se_UpdateResourceCollectionFilter omitted.

// se_UpdateServiceIntegrationConfig omitted.

// se_UpdateStackNames omitted.

// se_UpdateTagCollectionFilter omitted.

// se_UpdateTagCollectionFilters omitted.

// se_UpdateTagValues omitted.

// de_AccountHealth omitted.

// de_AccountHealths omitted.

// de_AccountInsightHealth omitted.

// de_AmazonCodeGuruProfilerIntegration omitted.

/**
 * deserializeAws_restJson1AnomalousLogGroup
 */
const de_AnomalousLogGroup = (output: any, context: __SerdeContext): AnomalousLogGroup => {
  return take(output, {
    ImpactEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImpactStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogAnomalyShowcases: (_: any) => de_LogAnomalyShowcases(_, context),
    LogGroupName: __expectString,
    NumberOfLogLinesScanned: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1AnomalousLogGroups
 */
const de_AnomalousLogGroups = (output: any, context: __SerdeContext): AnomalousLogGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnomalousLogGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnomalyReportedTimeRange
 */
const de_AnomalyReportedTimeRange = (output: any, context: __SerdeContext): AnomalyReportedTimeRange => {
  return take(output, {
    CloseTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OpenTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AnomalyResource omitted.

// de_AnomalyResources omitted.

/**
 * deserializeAws_restJson1AnomalySourceDetails
 */
const de_AnomalySourceDetails = (output: any, context: __SerdeContext): AnomalySourceDetails => {
  return take(output, {
    CloudWatchMetrics: (_: any) => de_CloudWatchMetricsDetails(_, context),
    PerformanceInsightsMetrics: (_: any) => de_PerformanceInsightsMetricsDetails(_, context),
  }) as any;
};

// de_AnomalySourceMetadata omitted.

/**
 * deserializeAws_restJson1AnomalyTimeRange
 */
const de_AnomalyTimeRange = (output: any, context: __SerdeContext): AnomalyTimeRange => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AssociatedResourceArns omitted.

// de_Channels omitted.

// de_CloudFormationCollection omitted.

// de_CloudFormationCollectionFilter omitted.

// de_CloudFormationCostEstimationResourceCollectionFilter omitted.

// de_CloudFormationHealth omitted.

// de_CloudFormationHealths omitted.

/**
 * deserializeAws_restJson1CloudWatchMetricsDataSummary
 */
const de_CloudWatchMetricsDataSummary = (output: any, context: __SerdeContext): CloudWatchMetricsDataSummary => {
  return take(output, {
    StatusCode: __expectString,
    TimestampMetricValuePairList: (_: any) => de_TimestampMetricValuePairList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDetail
 */
const de_CloudWatchMetricsDetail = (output: any, context: __SerdeContext): CloudWatchMetricsDetail => {
  return take(output, {
    Dimensions: _json,
    MetricDataSummary: (_: any) => de_CloudWatchMetricsDataSummary(_, context),
    MetricName: __expectString,
    Namespace: __expectString,
    Period: __expectInt32,
    Stat: __expectString,
    Unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CloudWatchMetricsDetails
 */
const de_CloudWatchMetricsDetails = (output: any, context: __SerdeContext): CloudWatchMetricsDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudWatchMetricsDetail(entry, context);
    });
  return retVal;
};

// de_CloudWatchMetricsDimension omitted.

// de_CloudWatchMetricsDimensions omitted.

// de_CostEstimationResourceCollectionFilter omitted.

// de_CostEstimationStackNames omitted.

// de_CostEstimationTagValues omitted.

/**
 * deserializeAws_restJson1CostEstimationTimeRange
 */
const de_CostEstimationTimeRange = (output: any, context: __SerdeContext): CostEstimationTimeRange => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    DataSource: __expectString,
    EventClass: __expectString,
    EventSource: __expectString,
    Id: __expectString,
    Name: __expectString,
    ResourceCollection: _json,
    Resources: _json,
    Time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_EventResource omitted.

// de_EventResources omitted.

/**
 * deserializeAws_restJson1Events
 */
const de_Events = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_EventSourcesConfig omitted.

// de_InsightFeedback omitted.

// de_InsightHealth omitted.

// de_InsightSeverities omitted.

/**
 * deserializeAws_restJson1InsightTimeRange
 */
const de_InsightTimeRange = (output: any, context: __SerdeContext): InsightTimeRange => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_KMSServerSideEncryptionIntegration omitted.

/**
 * deserializeAws_restJson1LogAnomalyClass
 */
const de_LogAnomalyClass = (output: any, context: __SerdeContext): LogAnomalyClass => {
  return take(output, {
    Explanation: __expectString,
    LogAnomalyToken: __expectString,
    LogAnomalyType: __expectString,
    LogEventId: __expectString,
    LogEventTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogStreamName: __expectString,
    NumberOfLogLinesOccurrences: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1LogAnomalyClasses
 */
const de_LogAnomalyClasses = (output: any, context: __SerdeContext): LogAnomalyClass[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LogAnomalyClass(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LogAnomalyShowcase
 */
const de_LogAnomalyShowcase = (output: any, context: __SerdeContext): LogAnomalyShowcase => {
  return take(output, {
    LogAnomalyClasses: (_: any) => de_LogAnomalyClasses(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LogAnomalyShowcases
 */
const de_LogAnomalyShowcases = (output: any, context: __SerdeContext): LogAnomalyShowcase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LogAnomalyShowcase(entry, context);
    });
  return retVal;
};

// de_LogsAnomalyDetectionIntegration omitted.

/**
 * deserializeAws_restJson1MonitoredResourceIdentifier
 */
const de_MonitoredResourceIdentifier = (output: any, context: __SerdeContext): MonitoredResourceIdentifier => {
  return take(output, {
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoredResourceName: __expectString,
    ResourceCollection: _json,
    ResourcePermission: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MonitoredResourceIdentifiers
 */
const de_MonitoredResourceIdentifiers = (output: any, context: __SerdeContext): MonitoredResourceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoredResourceIdentifier(entry, context);
    });
  return retVal;
};

// de_NotificationChannel omitted.

// de_NotificationChannelConfig omitted.

// de_NotificationFilterConfig omitted.

// de_NotificationMessageTypes omitted.

// de_OpsCenterIntegration omitted.

// de_PerformanceInsightsMetricDimensionGroup omitted.

// de_PerformanceInsightsMetricDimensions omitted.

// de_PerformanceInsightsMetricFilterMap omitted.

// de_PerformanceInsightsMetricQuery omitted.

/**
 * deserializeAws_restJson1PerformanceInsightsMetricsDetail
 */
const de_PerformanceInsightsMetricsDetail = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsMetricsDetail => {
  return take(output, {
    MetricDisplayName: __expectString,
    MetricQuery: _json,
    ReferenceData: (_: any) => de_PerformanceInsightsReferenceDataList(_, context),
    StatsAtAnomaly: (_: any) => de_PerformanceInsightsStats(_, context),
    StatsAtBaseline: (_: any) => de_PerformanceInsightsStats(_, context),
    Unit: __expectString,
  }) as any;
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
  return take(output, {
    ReferenceMetric: _json,
    ReferenceScalar: (_: any) => de_PerformanceInsightsReferenceScalar(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceData
 */
const de_PerformanceInsightsReferenceData = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceData => {
  return take(output, {
    ComparisonValues: (_: any) => de_PerformanceInsightsReferenceComparisonValues(_, context),
    Name: __expectString,
  }) as any;
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
      return de_PerformanceInsightsReferenceData(entry, context);
    });
  return retVal;
};

// de_PerformanceInsightsReferenceMetric omitted.

/**
 * deserializeAws_restJson1PerformanceInsightsReferenceScalar
 */
const de_PerformanceInsightsReferenceScalar = (
  output: any,
  context: __SerdeContext
): PerformanceInsightsReferenceScalar => {
  return take(output, {
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsStat
 */
const de_PerformanceInsightsStat = (output: any, context: __SerdeContext): PerformanceInsightsStat => {
  return take(output, {
    Type: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1PerformanceInsightsStats
 */
const de_PerformanceInsightsStats = (output: any, context: __SerdeContext): PerformanceInsightsStat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PerformanceInsightsStat(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PredictionTimeRange
 */
const de_PredictionTimeRange = (output: any, context: __SerdeContext): PredictionTimeRange => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ProactiveAnomalies
 */
const de_ProactiveAnomalies = (output: any, context: __SerdeContext): ProactiveAnomalySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProactiveAnomalySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProactiveAnomaly
 */
const de_ProactiveAnomaly = (output: any, context: __SerdeContext): ProactiveAnomaly => {
  return take(output, {
    AnomalyReportedTimeRange: (_: any) => de_AnomalyReportedTimeRange(_, context),
    AnomalyResources: _json,
    AnomalyTimeRange: (_: any) => de_AnomalyTimeRange(_, context),
    AssociatedInsightId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Limit: __limitedParseDouble,
    PredictionTimeRange: (_: any) => de_PredictionTimeRange(_, context),
    ResourceCollection: _json,
    Severity: __expectString,
    SourceDetails: (_: any) => de_AnomalySourceDetails(_, context),
    SourceMetadata: _json,
    Status: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ProactiveAnomalySummary
 */
const de_ProactiveAnomalySummary = (output: any, context: __SerdeContext): ProactiveAnomalySummary => {
  return take(output, {
    AnomalyReportedTimeRange: (_: any) => de_AnomalyReportedTimeRange(_, context),
    AnomalyResources: _json,
    AnomalyTimeRange: (_: any) => de_AnomalyTimeRange(_, context),
    AssociatedInsightId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Limit: __limitedParseDouble,
    PredictionTimeRange: (_: any) => de_PredictionTimeRange(_, context),
    ResourceCollection: _json,
    Severity: __expectString,
    SourceDetails: (_: any) => de_AnomalySourceDetails(_, context),
    SourceMetadata: _json,
    Status: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ProactiveInsight
 */
const de_ProactiveInsight = (output: any, context: __SerdeContext): ProactiveInsight => {
  return take(output, {
    Description: __expectString,
    Id: __expectString,
    InsightTimeRange: (_: any) => de_InsightTimeRange(_, context),
    Name: __expectString,
    PredictionTimeRange: (_: any) => de_PredictionTimeRange(_, context),
    ResourceCollection: _json,
    Severity: __expectString,
    SsmOpsItemId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProactiveInsights
 */
const de_ProactiveInsights = (output: any, context: __SerdeContext): ProactiveInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProactiveInsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProactiveInsightSummary
 */
const de_ProactiveInsightSummary = (output: any, context: __SerdeContext): ProactiveInsightSummary => {
  return take(output, {
    AssociatedResourceArns: _json,
    Id: __expectString,
    InsightTimeRange: (_: any) => de_InsightTimeRange(_, context),
    Name: __expectString,
    PredictionTimeRange: (_: any) => de_PredictionTimeRange(_, context),
    ResourceCollection: _json,
    ServiceCollection: _json,
    Severity: __expectString,
    Status: __expectString,
  }) as any;
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
  return take(output, {
    AccountId: __expectString,
    Id: __expectString,
    InsightTimeRange: (_: any) => de_InsightTimeRange(_, context),
    Name: __expectString,
    OrganizationalUnitId: __expectString,
    PredictionTimeRange: (_: any) => de_PredictionTimeRange(_, context),
    ResourceCollection: _json,
    ServiceCollection: _json,
    Severity: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReactiveAnomalies
 */
const de_ReactiveAnomalies = (output: any, context: __SerdeContext): ReactiveAnomalySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReactiveAnomalySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReactiveAnomaly
 */
const de_ReactiveAnomaly = (output: any, context: __SerdeContext): ReactiveAnomaly => {
  return take(output, {
    AnomalyReportedTimeRange: (_: any) => de_AnomalyReportedTimeRange(_, context),
    AnomalyResources: _json,
    AnomalyTimeRange: (_: any) => de_AnomalyTimeRange(_, context),
    AssociatedInsightId: __expectString,
    CausalAnomalyId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    ResourceCollection: _json,
    Severity: __expectString,
    SourceDetails: (_: any) => de_AnomalySourceDetails(_, context),
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReactiveAnomalySummary
 */
const de_ReactiveAnomalySummary = (output: any, context: __SerdeContext): ReactiveAnomalySummary => {
  return take(output, {
    AnomalyReportedTimeRange: (_: any) => de_AnomalyReportedTimeRange(_, context),
    AnomalyResources: _json,
    AnomalyTimeRange: (_: any) => de_AnomalyTimeRange(_, context),
    AssociatedInsightId: __expectString,
    CausalAnomalyId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    ResourceCollection: _json,
    Severity: __expectString,
    SourceDetails: (_: any) => de_AnomalySourceDetails(_, context),
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReactiveInsight
 */
const de_ReactiveInsight = (output: any, context: __SerdeContext): ReactiveInsight => {
  return take(output, {
    Description: __expectString,
    Id: __expectString,
    InsightTimeRange: (_: any) => de_InsightTimeRange(_, context),
    Name: __expectString,
    ResourceCollection: _json,
    Severity: __expectString,
    SsmOpsItemId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReactiveInsights
 */
const de_ReactiveInsights = (output: any, context: __SerdeContext): ReactiveInsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReactiveInsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReactiveInsightSummary
 */
const de_ReactiveInsightSummary = (output: any, context: __SerdeContext): ReactiveInsightSummary => {
  return take(output, {
    AssociatedResourceArns: _json,
    Id: __expectString,
    InsightTimeRange: (_: any) => de_InsightTimeRange(_, context),
    Name: __expectString,
    ResourceCollection: _json,
    ServiceCollection: _json,
    Severity: __expectString,
    Status: __expectString,
  }) as any;
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
  return take(output, {
    AccountId: __expectString,
    Id: __expectString,
    InsightTimeRange: (_: any) => de_InsightTimeRange(_, context),
    Name: __expectString,
    OrganizationalUnitId: __expectString,
    ResourceCollection: _json,
    ServiceCollection: _json,
    Severity: __expectString,
    Status: __expectString,
  }) as any;
};

// de_Recommendation omitted.

// de_RecommendationRelatedAnomalies omitted.

// de_RecommendationRelatedAnomaly omitted.

// de_RecommendationRelatedAnomalyResource omitted.

// de_RecommendationRelatedAnomalyResources omitted.

// de_RecommendationRelatedAnomalySourceDetail omitted.

// de_RecommendationRelatedCloudWatchMetricsSourceDetail omitted.

// de_RecommendationRelatedCloudWatchMetricsSourceDetails omitted.

// de_RecommendationRelatedEvent omitted.

// de_RecommendationRelatedEventResource omitted.

// de_RecommendationRelatedEventResources omitted.

// de_RecommendationRelatedEvents omitted.

// de_Recommendations omitted.

// de_RelatedAnomalySourceDetails omitted.

// de_ResourceCollection omitted.

// de_ResourceCollectionFilter omitted.

// de_ServiceCollection omitted.

// de_ServiceHealth omitted.

// de_ServiceHealths omitted.

// de_ServiceInsightHealth omitted.

// de_ServiceIntegrationConfig omitted.

// de_ServiceNames omitted.

/**
 * deserializeAws_restJson1ServiceResourceCost
 */
const de_ServiceResourceCost = (output: any, context: __SerdeContext): ServiceResourceCost => {
  return take(output, {
    Cost: __limitedParseDouble,
    Count: __expectInt32,
    State: __expectString,
    Type: __expectString,
    UnitCost: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceResourceCosts
 */
const de_ServiceResourceCosts = (output: any, context: __SerdeContext): ServiceResourceCost[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceResourceCost(entry, context);
    });
  return retVal;
};

// de_SnsChannelConfig omitted.

// de_StackNames omitted.

// de_TagCollection omitted.

// de_TagCollectionFilter omitted.

// de_TagCollectionFilters omitted.

// de_TagCollections omitted.

// de_TagCostEstimationResourceCollectionFilter omitted.

// de_TagCostEstimationResourceCollectionFilters omitted.

// de_TagHealth omitted.

// de_TagHealths omitted.

// de_TagValues omitted.

/**
 * deserializeAws_restJson1TimestampMetricValuePair
 */
const de_TimestampMetricValuePair = (output: any, context: __SerdeContext): TimestampMetricValuePair => {
  return take(output, {
    MetricValue: __limitedParseDouble,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TimestampMetricValuePairList
 */
const de_TimestampMetricValuePairList = (output: any, context: __SerdeContext): TimestampMetricValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimestampMetricValuePair(entry, context);
    });
  return retVal;
};

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFields omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

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
