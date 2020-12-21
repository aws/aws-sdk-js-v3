import {
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
} from "../commands/AddNotificationChannelCommand";
import {
  DescribeAccountHealthCommandInput,
  DescribeAccountHealthCommandOutput,
} from "../commands/DescribeAccountHealthCommand";
import {
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
} from "../commands/DescribeAccountOverviewCommand";
import { DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput } from "../commands/DescribeAnomalyCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "../commands/DescribeInsightCommand";
import {
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "../commands/DescribeResourceCollectionHealthCommand";
import {
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
} from "../commands/DescribeServiceIntegrationCommand";
import {
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "../commands/GetResourceCollectionCommand";
import {
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "../commands/ListAnomaliesForInsightCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "../commands/ListInsightsCommand";
import {
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "../commands/ListNotificationChannelsCommand";
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
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
} from "../commands/UpdateResourceCollectionCommand";
import {
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
} from "../commands/UpdateServiceIntegrationCommand";
import {
  AccessDeniedException,
  AnomalySourceDetails,
  AnomalyTimeRange,
  CloudFormationCollection,
  CloudFormationCollectionFilter,
  CloudFormationHealth,
  CloudWatchMetricsDetail,
  CloudWatchMetricsDimension,
  ConflictException,
  EndTimeRange,
  Event,
  EventResource,
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
  NotificationChannel,
  NotificationChannelConfig,
  OpsCenterIntegration,
  OpsCenterIntegrationConfig,
  PredictionTimeRange,
  ProactiveAnomaly,
  ProactiveAnomalySummary,
  ProactiveInsight,
  ProactiveInsightSummary,
  ReactiveAnomaly,
  ReactiveAnomalySummary,
  ReactiveInsight,
  ReactiveInsightSummary,
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
  SearchInsightsFilters,
  ServiceIntegrationConfig,
  ServiceQuotaExceededException,
  SnsChannelConfig,
  StartTimeRange,
  ThrottlingException,
  UpdateCloudFormationCollectionFilter,
  UpdateResourceCollectionFilter,
  UpdateServiceIntegrationConfig,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1AddNotificationChannelCommand = async (
  input: AddNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.Config !== undefined &&
      input.Config !== null && { Config: serializeAws_restJson1NotificationChannelConfig(input.Config, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DescribeAccountHealthCommand = async (
  input: DescribeAccountHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/accounts/health";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/accounts/overview";
  let body: any;
  body = JSON.stringify({
    ...(input.FromTime !== undefined &&
      input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/anomalies/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DescribeInsightCommand = async (
  input: DescribeInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/insights/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DescribeResourceCollectionHealthCommand = async (
  input: DescribeResourceCollectionHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/accounts/health/resource-collection/{ResourceCollectionType}";
  if (input.ResourceCollectionType !== undefined) {
    const labelValue: string = input.ResourceCollectionType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceCollectionType.");
    }
    resolvedPath = resolvedPath.replace("{ResourceCollectionType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceCollectionType.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/service-integrations";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetResourceCollectionCommand = async (
  input: GetResourceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/resource-collections/{ResourceCollectionType}";
  if (input.ResourceCollectionType !== undefined) {
    const labelValue: string = input.ResourceCollectionType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceCollectionType.");
    }
    resolvedPath = resolvedPath.replace("{ResourceCollectionType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceCollectionType.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/anomalies/insight/{InsightId}";
  if (input.InsightId !== undefined) {
    const labelValue: string = input.InsightId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InsightId.");
    }
    resolvedPath = resolvedPath.replace("{InsightId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: InsightId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange !== undefined &&
      input.StartTimeRange !== null && {
        StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/events";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1ListEventsFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StatusFilter !== undefined &&
      input.StatusFilter !== null && {
        StatusFilter: serializeAws_restJson1ListInsightsStatusFilter(input.StatusFilter, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/feedback";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightFeedback !== undefined &&
      input.InsightFeedback !== null && {
        InsightFeedback: serializeAws_restJson1InsightFeedback(input.InsightFeedback, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/insights/search";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1SearchInsightsFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTimeRange !== undefined &&
      input.StartTimeRange !== null && {
        StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UpdateResourceCollectionCommand = async (
  input: UpdateResourceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/resource-collections";
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.ResourceCollection !== undefined &&
      input.ResourceCollection !== null && {
        ResourceCollection: serializeAws_restJson1UpdateResourceCollectionFilter(input.ResourceCollection, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/service-integrations";
  let body: any;
  body = JSON.stringify({
    ...(input.ServiceIntegration !== undefined &&
      input.ServiceIntegration !== null && {
        ServiceIntegration: serializeAws_restJson1UpdateServiceIntegrationConfig(input.ServiceIntegration, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const contents: AddNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Id: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.devopsguru#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAccountHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountHealthCommandError(output, context);
  }
  const contents: DescribeAccountHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    MetricsAnalyzed: undefined,
    OpenProactiveInsights: undefined,
    OpenReactiveInsights: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.MetricsAnalyzed !== undefined && data.MetricsAnalyzed !== null) {
    contents.MetricsAnalyzed = data.MetricsAnalyzed;
  }
  if (data.OpenProactiveInsights !== undefined && data.OpenProactiveInsights !== null) {
    contents.OpenProactiveInsights = data.OpenProactiveInsights;
  }
  if (data.OpenReactiveInsights !== undefined && data.OpenReactiveInsights !== null) {
    contents.OpenReactiveInsights = data.OpenReactiveInsights;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccountHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAccountOverviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountOverviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccountOverviewCommandError(output, context);
  }
  const contents: DescribeAccountOverviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    MeanTimeToRecoverInMilliseconds: undefined,
    ProactiveInsights: undefined,
    ReactiveInsights: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.MeanTimeToRecoverInMilliseconds !== undefined && data.MeanTimeToRecoverInMilliseconds !== null) {
    contents.MeanTimeToRecoverInMilliseconds = data.MeanTimeToRecoverInMilliseconds;
  }
  if (data.ProactiveInsights !== undefined && data.ProactiveInsights !== null) {
    contents.ProactiveInsights = data.ProactiveInsights;
  }
  if (data.ReactiveInsights !== undefined && data.ReactiveInsights !== null) {
    contents.ReactiveInsights = data.ReactiveInsights;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccountOverviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountOverviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAnomalyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAnomalyCommandError(output, context);
  }
  const contents: DescribeAnomalyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProactiveAnomaly: undefined,
    ReactiveAnomaly: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ProactiveAnomaly !== undefined && data.ProactiveAnomaly !== null) {
    contents.ProactiveAnomaly = deserializeAws_restJson1ProactiveAnomaly(data.ProactiveAnomaly, context);
  }
  if (data.ReactiveAnomaly !== undefined && data.ReactiveAnomaly !== null) {
    contents.ReactiveAnomaly = deserializeAws_restJson1ReactiveAnomaly(data.ReactiveAnomaly, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAnomalyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInsightCommandError(output, context);
  }
  const contents: DescribeInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProactiveInsight: undefined,
    ReactiveInsight: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ProactiveInsight !== undefined && data.ProactiveInsight !== null) {
    contents.ProactiveInsight = deserializeAws_restJson1ProactiveInsight(data.ProactiveInsight, context);
  }
  if (data.ReactiveInsight !== undefined && data.ReactiveInsight !== null) {
    contents.ReactiveInsight = deserializeAws_restJson1ReactiveInsight(data.ReactiveInsight, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeResourceCollectionHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResourceCollectionHealthCommandError(output, context);
  }
  const contents: DescribeResourceCollectionHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
    CloudFormation: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CloudFormation !== undefined && data.CloudFormation !== null) {
    contents.CloudFormation = deserializeAws_restJson1__listOfCloudFormationHealth(data.CloudFormation, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeResourceCollectionHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeServiceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeServiceIntegrationCommandError(output, context);
  }
  const contents: DescribeServiceIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ServiceIntegration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ServiceIntegration !== undefined && data.ServiceIntegration !== null) {
    contents.ServiceIntegration = deserializeAws_restJson1ServiceIntegrationConfig(data.ServiceIntegration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeServiceIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetResourceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceCollectionCommandError(output, context);
  }
  const contents: GetResourceCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ResourceCollection: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ResourceCollection !== undefined && data.ResourceCollection !== null) {
    contents.ResourceCollection = deserializeAws_restJson1ResourceCollectionFilter(data.ResourceCollection, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetResourceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAnomaliesForInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomaliesForInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAnomaliesForInsightCommandError(output, context);
  }
  const contents: ListAnomaliesForInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ProactiveAnomalies: undefined,
    ReactiveAnomalies: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ProactiveAnomalies !== undefined && data.ProactiveAnomalies !== null) {
    contents.ProactiveAnomalies = deserializeAws_restJson1__listOfProactiveAnomalySummary(
      data.ProactiveAnomalies,
      context
    );
  }
  if (data.ReactiveAnomalies !== undefined && data.ReactiveAnomalies !== null) {
    contents.ReactiveAnomalies = deserializeAws_restJson1__listOfReactiveAnomalySummary(
      data.ReactiveAnomalies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAnomaliesForInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomaliesForInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventsCommandError(output, context);
  }
  const contents: ListEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Events: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Events !== undefined && data.Events !== null) {
    contents.Events = deserializeAws_restJson1__listOfEvent(data.Events, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInsightsCommandError(output, context);
  }
  const contents: ListInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ProactiveInsights: undefined,
    ReactiveInsights: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ProactiveInsights !== undefined && data.ProactiveInsights !== null) {
    contents.ProactiveInsights = deserializeAws_restJson1__listOfProactiveInsightSummary(
      data.ProactiveInsights,
      context
    );
  }
  if (data.ReactiveInsights !== undefined && data.ReactiveInsights !== null) {
    contents.ReactiveInsights = deserializeAws_restJson1__listOfReactiveInsightSummary(data.ReactiveInsights, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListNotificationChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNotificationChannelsCommandError(output, context);
  }
  const contents: ListNotificationChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channels: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Channels !== undefined && data.Channels !== null) {
    contents.Channels = deserializeAws_restJson1__listOfNotificationChannel(data.Channels, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNotificationChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
  }
  const contents: ListRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Recommendations: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Recommendations !== undefined && data.Recommendations !== null) {
    contents.Recommendations = deserializeAws_restJson1__listOfRecommendation(data.Recommendations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFeedbackCommandError(output, context);
  }
  const contents: PutFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveNotificationChannelCommandError(output, context);
  }
  const contents: RemoveNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.devopsguru#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SearchInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchInsightsCommandError(output, context);
  }
  const contents: SearchInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ProactiveInsights: undefined,
    ReactiveInsights: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ProactiveInsights !== undefined && data.ProactiveInsights !== null) {
    contents.ProactiveInsights = deserializeAws_restJson1__listOfProactiveInsightSummary(
      data.ProactiveInsights,
      context
    );
  }
  if (data.ReactiveInsights !== undefined && data.ReactiveInsights !== null) {
    contents.ReactiveInsights = deserializeAws_restJson1__listOfReactiveInsightSummary(data.ReactiveInsights, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateResourceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceCollectionCommandError(output, context);
  }
  const contents: UpdateResourceCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateResourceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateServiceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateServiceIntegrationCommandError(output, context);
  }
  const contents: UpdateServiceIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateServiceIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.devopsguru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.devopsguru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.devopsguru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.devopsguru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.devopsguru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = data.ResourceId;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    QuotaCode: undefined,
    ServiceCode: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
    contents.QuotaCode = data.QuotaCode;
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
    contents.ServiceCode = data.ServiceCode;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Fields: undefined,
    Message: undefined,
    Reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1__listOfValidationExceptionField(data.Fields, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = data.Reason;
  }
  return contents;
};

const serializeAws_restJson1__listOf__stringMin1Max128PatternAZAZAZAZ09 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfInsightSeverity = (
  input: (InsightSeverity | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfInsightStatus = (
  input: (InsightStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CloudFormationCollection = (
  input: CloudFormationCollection,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames !== undefined &&
      input.StackNames !== null && {
        StackNames: serializeAws_restJson1__listOf__stringMin1Max128PatternAZAZAZAZ09(input.StackNames, context),
      }),
  };
};

const serializeAws_restJson1EndTimeRange = (input: EndTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime !== undefined &&
      input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1EventTimeRange = (input: EventTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime !== undefined &&
      input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1InsightFeedback = (input: InsightFeedback, context: __SerdeContext): any => {
  return {
    ...(input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_restJson1ListEventsFilters = (input: ListEventsFilters, context: __SerdeContext): any => {
  return {
    ...(input.DataSource !== undefined && input.DataSource !== null && { DataSource: input.DataSource }),
    ...(input.EventClass !== undefined && input.EventClass !== null && { EventClass: input.EventClass }),
    ...(input.EventSource !== undefined && input.EventSource !== null && { EventSource: input.EventSource }),
    ...(input.EventTimeRange !== undefined &&
      input.EventTimeRange !== null && {
        EventTimeRange: serializeAws_restJson1EventTimeRange(input.EventTimeRange, context),
      }),
    ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
    ...(input.ResourceCollection !== undefined &&
      input.ResourceCollection !== null && {
        ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
      }),
  };
};

const serializeAws_restJson1ListInsightsAnyStatusFilter = (
  input: ListInsightsAnyStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StartTimeRange !== undefined &&
      input.StartTimeRange !== null && {
        StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ListInsightsClosedStatusFilter = (
  input: ListInsightsClosedStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTimeRange !== undefined &&
      input.EndTimeRange !== null && { EndTimeRange: serializeAws_restJson1EndTimeRange(input.EndTimeRange, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ListInsightsOngoingStatusFilter = (
  input: ListInsightsOngoingStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ListInsightsStatusFilter = (
  input: ListInsightsStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Any !== undefined &&
      input.Any !== null && { Any: serializeAws_restJson1ListInsightsAnyStatusFilter(input.Any, context) }),
    ...(input.Closed !== undefined &&
      input.Closed !== null && { Closed: serializeAws_restJson1ListInsightsClosedStatusFilter(input.Closed, context) }),
    ...(input.Ongoing !== undefined &&
      input.Ongoing !== null && {
        Ongoing: serializeAws_restJson1ListInsightsOngoingStatusFilter(input.Ongoing, context),
      }),
  };
};

const serializeAws_restJson1NotificationChannelConfig = (
  input: NotificationChannelConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sns !== undefined &&
      input.Sns !== null && { Sns: serializeAws_restJson1SnsChannelConfig(input.Sns, context) }),
  };
};

const serializeAws_restJson1OpsCenterIntegrationConfig = (
  input: OpsCenterIntegrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptInStatus !== undefined && input.OptInStatus !== null && { OptInStatus: input.OptInStatus }),
  };
};

const serializeAws_restJson1ResourceCollection = (input: ResourceCollection, context: __SerdeContext): any => {
  return {
    ...(input.CloudFormation !== undefined &&
      input.CloudFormation !== null && {
        CloudFormation: serializeAws_restJson1CloudFormationCollection(input.CloudFormation, context),
      }),
  };
};

const serializeAws_restJson1SearchInsightsFilters = (input: SearchInsightsFilters, context: __SerdeContext): any => {
  return {
    ...(input.ResourceCollection !== undefined &&
      input.ResourceCollection !== null && {
        ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
      }),
    ...(input.Severities !== undefined &&
      input.Severities !== null && {
        Severities: serializeAws_restJson1__listOfInsightSeverity(input.Severities, context),
      }),
    ...(input.Statuses !== undefined &&
      input.Statuses !== null && { Statuses: serializeAws_restJson1__listOfInsightStatus(input.Statuses, context) }),
  };
};

const serializeAws_restJson1SnsChannelConfig = (input: SnsChannelConfig, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn !== undefined && input.TopicArn !== null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_restJson1StartTimeRange = (input: StartTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromTime !== undefined &&
      input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
    ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1UpdateCloudFormationCollectionFilter = (
  input: UpdateCloudFormationCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackNames !== undefined &&
      input.StackNames !== null && {
        StackNames: serializeAws_restJson1__listOf__stringMin1Max128PatternAZAZAZAZ09(input.StackNames, context),
      }),
  };
};

const serializeAws_restJson1UpdateResourceCollectionFilter = (
  input: UpdateResourceCollectionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudFormation !== undefined &&
      input.CloudFormation !== null && {
        CloudFormation: serializeAws_restJson1UpdateCloudFormationCollectionFilter(input.CloudFormation, context),
      }),
  };
};

const serializeAws_restJson1UpdateServiceIntegrationConfig = (
  input: UpdateServiceIntegrationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OpsCenter !== undefined &&
      input.OpsCenter !== null && {
        OpsCenter: serializeAws_restJson1OpsCenterIntegrationConfig(input.OpsCenter, context),
      }),
  };
};

const deserializeAws_restJson1__listOf__stringMin1Max128PatternAZAZAZAZ09 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1__listOfCloudFormationHealth = (
  output: any,
  context: __SerdeContext
): CloudFormationHealth[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudFormationHealth(entry, context);
    });
};

const deserializeAws_restJson1__listOfCloudWatchMetricsDetail = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudWatchMetricsDetail(entry, context);
    });
};

const deserializeAws_restJson1__listOfCloudWatchMetricsDimension = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CloudWatchMetricsDimension(entry, context);
    });
};

const deserializeAws_restJson1__listOfEvent = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Event(entry, context);
    });
};

const deserializeAws_restJson1__listOfEventResource = (output: any, context: __SerdeContext): EventResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventResource(entry, context);
    });
};

const deserializeAws_restJson1__listOfNotificationChannel = (
  output: any,
  context: __SerdeContext
): NotificationChannel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotificationChannel(entry, context);
    });
};

const deserializeAws_restJson1__listOfProactiveAnomalySummary = (
  output: any,
  context: __SerdeContext
): ProactiveAnomalySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProactiveAnomalySummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfProactiveInsightSummary = (
  output: any,
  context: __SerdeContext
): ProactiveInsightSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProactiveInsightSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfReactiveAnomalySummary = (
  output: any,
  context: __SerdeContext
): ReactiveAnomalySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReactiveAnomalySummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfReactiveInsightSummary = (
  output: any,
  context: __SerdeContext
): ReactiveInsightSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReactiveInsightSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendation = (output: any, context: __SerdeContext): Recommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Recommendation(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendationRelatedAnomaly = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomaly[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedAnomaly(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendationRelatedAnomalyResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalyResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedAnomalyResource(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendationRelatedAnomalySourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalySourceDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendationRelatedCloudWatchMetricsSourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedCloudWatchMetricsSourceDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendationRelatedEvent = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedEvent(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendationRelatedEventResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEventResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationRelatedEventResource(entry, context);
    });
};

const deserializeAws_restJson1__listOfValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeAws_restJson1AnomalySourceDetails = (output: any, context: __SerdeContext): AnomalySourceDetails => {
  return {
    CloudWatchMetrics:
      output.CloudWatchMetrics !== undefined && output.CloudWatchMetrics !== null
        ? deserializeAws_restJson1__listOfCloudWatchMetricsDetail(output.CloudWatchMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalyTimeRange = (output: any, context: __SerdeContext): AnomalyTimeRange => {
  return {
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudFormationCollection = (
  output: any,
  context: __SerdeContext
): CloudFormationCollection => {
  return {
    StackNames:
      output.StackNames !== undefined && output.StackNames !== null
        ? deserializeAws_restJson1__listOf__stringMin1Max128PatternAZAZAZAZ09(output.StackNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudFormationCollectionFilter = (
  output: any,
  context: __SerdeContext
): CloudFormationCollectionFilter => {
  return {
    StackNames:
      output.StackNames !== undefined && output.StackNames !== null
        ? deserializeAws_restJson1__listOf__stringMin1Max128PatternAZAZAZAZ09(output.StackNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudFormationHealth = (output: any, context: __SerdeContext): CloudFormationHealth => {
  return {
    Insight:
      output.Insight !== undefined && output.Insight !== null
        ? deserializeAws_restJson1InsightHealth(output.Insight, context)
        : undefined,
    StackName: output.StackName !== undefined && output.StackName !== null ? output.StackName : undefined,
  } as any;
};

const deserializeAws_restJson1CloudWatchMetricsDetail = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDetail => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1__listOfCloudWatchMetricsDimension(output.Dimensions, context)
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Period: output.Period !== undefined && output.Period !== null ? output.Period : undefined,
    Stat: output.Stat !== undefined && output.Stat !== null ? output.Stat : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  } as any;
};

const deserializeAws_restJson1CloudWatchMetricsDimension = (
  output: any,
  context: __SerdeContext
): CloudWatchMetricsDimension => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1Event = (output: any, context: __SerdeContext): Event => {
  return {
    DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
    EventClass: output.EventClass !== undefined && output.EventClass !== null ? output.EventClass : undefined,
    EventSource: output.EventSource !== undefined && output.EventSource !== null ? output.EventSource : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1__listOfEventResource(output.Resources, context)
        : undefined,
    Time: output.Time !== undefined && output.Time !== null ? new Date(Math.round(output.Time * 1000)) : undefined,
  } as any;
};

const deserializeAws_restJson1EventResource = (output: any, context: __SerdeContext): EventResource => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1InsightHealth = (output: any, context: __SerdeContext): InsightHealth => {
  return {
    MeanTimeToRecoverInMilliseconds:
      output.MeanTimeToRecoverInMilliseconds !== undefined && output.MeanTimeToRecoverInMilliseconds !== null
        ? output.MeanTimeToRecoverInMilliseconds
        : undefined,
    OpenProactiveInsights:
      output.OpenProactiveInsights !== undefined && output.OpenProactiveInsights !== null
        ? output.OpenProactiveInsights
        : undefined,
    OpenReactiveInsights:
      output.OpenReactiveInsights !== undefined && output.OpenReactiveInsights !== null
        ? output.OpenReactiveInsights
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightTimeRange = (output: any, context: __SerdeContext): InsightTimeRange => {
  return {
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationChannel = (output: any, context: __SerdeContext): NotificationChannel => {
  return {
    Config:
      output.Config !== undefined && output.Config !== null
        ? deserializeAws_restJson1NotificationChannelConfig(output.Config, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationChannelConfig = (
  output: any,
  context: __SerdeContext
): NotificationChannelConfig => {
  return {
    Sns:
      output.Sns !== undefined && output.Sns !== null
        ? deserializeAws_restJson1SnsChannelConfig(output.Sns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OpsCenterIntegration = (output: any, context: __SerdeContext): OpsCenterIntegration => {
  return {
    OptInStatus: output.OptInStatus !== undefined && output.OptInStatus !== null ? output.OptInStatus : undefined,
  } as any;
};

const deserializeAws_restJson1PredictionTimeRange = (output: any, context: __SerdeContext): PredictionTimeRange => {
  return {
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveAnomaly = (output: any, context: __SerdeContext): ProactiveAnomaly => {
  return {
    AnomalyTimeRange:
      output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId:
      output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
        ? output.AssociatedInsightId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
    PredictionTimeRange:
      output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    SourceDetails:
      output.SourceDetails !== undefined && output.SourceDetails !== null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdateTime:
      output.UpdateTime !== undefined && output.UpdateTime !== null
        ? new Date(Math.round(output.UpdateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveAnomalySummary = (
  output: any,
  context: __SerdeContext
): ProactiveAnomalySummary => {
  return {
    AnomalyTimeRange:
      output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId:
      output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
        ? output.AssociatedInsightId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
    PredictionTimeRange:
      output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    SourceDetails:
      output.SourceDetails !== undefined && output.SourceDetails !== null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdateTime:
      output.UpdateTime !== undefined && output.UpdateTime !== null
        ? new Date(Math.round(output.UpdateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveInsight = (output: any, context: __SerdeContext): ProactiveInsight => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InsightTimeRange:
      output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    PredictionTimeRange:
      output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    SsmOpsItemId: output.SsmOpsItemId !== undefined && output.SsmOpsItemId !== null ? output.SsmOpsItemId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1ProactiveInsightSummary = (
  output: any,
  context: __SerdeContext
): ProactiveInsightSummary => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InsightTimeRange:
      output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    PredictionTimeRange:
      output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
        ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
        : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1ReactiveAnomaly = (output: any, context: __SerdeContext): ReactiveAnomaly => {
  return {
    AnomalyTimeRange:
      output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId:
      output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
        ? output.AssociatedInsightId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    SourceDetails:
      output.SourceDetails !== undefined && output.SourceDetails !== null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1ReactiveAnomalySummary = (
  output: any,
  context: __SerdeContext
): ReactiveAnomalySummary => {
  return {
    AnomalyTimeRange:
      output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
        ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
        : undefined,
    AssociatedInsightId:
      output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
        ? output.AssociatedInsightId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    SourceDetails:
      output.SourceDetails !== undefined && output.SourceDetails !== null
        ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1ReactiveInsight = (output: any, context: __SerdeContext): ReactiveInsight => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InsightTimeRange:
      output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    SsmOpsItemId: output.SsmOpsItemId !== undefined && output.SsmOpsItemId !== null ? output.SsmOpsItemId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1ReactiveInsightSummary = (
  output: any,
  context: __SerdeContext
): ReactiveInsightSummary => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InsightTimeRange:
      output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
        ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ResourceCollection:
      output.ResourceCollection !== undefined && output.ResourceCollection !== null
        ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
        : undefined,
    Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Link: output.Link !== undefined && output.Link !== null ? output.Link : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    RelatedAnomalies:
      output.RelatedAnomalies !== undefined && output.RelatedAnomalies !== null
        ? deserializeAws_restJson1__listOfRecommendationRelatedAnomaly(output.RelatedAnomalies, context)
        : undefined,
    RelatedEvents:
      output.RelatedEvents !== undefined && output.RelatedEvents !== null
        ? deserializeAws_restJson1__listOfRecommendationRelatedEvent(output.RelatedEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedAnomaly = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomaly => {
  return {
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1__listOfRecommendationRelatedAnomalyResource(output.Resources, context)
        : undefined,
    SourceDetails:
      output.SourceDetails !== undefined && output.SourceDetails !== null
        ? deserializeAws_restJson1__listOfRecommendationRelatedAnomalySourceDetail(output.SourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedAnomalyResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalyResource => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedAnomalySourceDetail => {
  return {
    CloudWatchMetrics:
      output.CloudWatchMetrics !== undefined && output.CloudWatchMetrics !== null
        ? deserializeAws_restJson1__listOfRecommendationRelatedCloudWatchMetricsSourceDetail(
            output.CloudWatchMetrics,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedCloudWatchMetricsSourceDetail => {
  return {
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedEvent = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEvent => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1__listOfRecommendationRelatedEventResource(output.Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationRelatedEventResource = (
  output: any,
  context: __SerdeContext
): RecommendationRelatedEventResource => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceCollection = (output: any, context: __SerdeContext): ResourceCollection => {
  return {
    CloudFormation:
      output.CloudFormation !== undefined && output.CloudFormation !== null
        ? deserializeAws_restJson1CloudFormationCollection(output.CloudFormation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceCollectionFilter = (
  output: any,
  context: __SerdeContext
): ResourceCollectionFilter => {
  return {
    CloudFormation:
      output.CloudFormation !== undefined && output.CloudFormation !== null
        ? deserializeAws_restJson1CloudFormationCollectionFilter(output.CloudFormation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceIntegrationConfig = (
  output: any,
  context: __SerdeContext
): ServiceIntegrationConfig => {
  return {
    OpsCenter:
      output.OpsCenter !== undefined && output.OpsCenter !== null
        ? deserializeAws_restJson1OpsCenterIntegration(output.OpsCenter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SnsChannelConfig = (output: any, context: __SerdeContext): SnsChannelConfig => {
  return {
    TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
  } as any;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
