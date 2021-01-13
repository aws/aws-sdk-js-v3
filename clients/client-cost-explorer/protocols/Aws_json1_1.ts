import {
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
} from "../commands/CreateAnomalyMonitorCommand";
import {
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
} from "../commands/CreateAnomalySubscriptionCommand";
import {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
} from "../commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
} from "../commands/DeleteAnomalyMonitorCommand";
import {
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
} from "../commands/DeleteAnomalySubscriptionCommand";
import {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
} from "../commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
} from "../commands/DescribeCostCategoryDefinitionCommand";
import { GetAnomaliesCommandInput, GetAnomaliesCommandOutput } from "../commands/GetAnomaliesCommand";
import { GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput } from "../commands/GetAnomalyMonitorsCommand";
import {
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "../commands/GetAnomalySubscriptionsCommand";
import { GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput } from "../commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
} from "../commands/GetCostAndUsageWithResourcesCommand";
import { GetCostForecastCommandInput, GetCostForecastCommandOutput } from "../commands/GetCostForecastCommand";
import { GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput } from "../commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
} from "../commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "../commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
} from "../commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "../commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "../commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
} from "../commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
} from "../commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "../commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetUsageForecastCommandInput, GetUsageForecastCommandOutput } from "../commands/GetUsageForecastCommand";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "../commands/ListCostCategoryDefinitionsCommand";
import {
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "../commands/ProvideAnomalyFeedbackCommand";
import {
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "../commands/UpdateAnomalyMonitorCommand";
import {
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "../commands/UpdateAnomalySubscriptionCommand";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "../commands/UpdateCostCategoryDefinitionCommand";
import {
  Anomaly,
  AnomalyDateInterval,
  AnomalyMonitor,
  AnomalyScore,
  AnomalySubscription,
  BillExpirationException,
  CostCategory,
  CostCategoryProcessingStatus,
  CostCategoryReference,
  CostCategoryRule,
  CostCategoryValues,
  Coverage,
  CoverageByTime,
  CoverageCost,
  CoverageHours,
  CoverageNormalizedUnits,
  CreateAnomalyMonitorRequest,
  CreateAnomalyMonitorResponse,
  CreateAnomalySubscriptionRequest,
  CreateAnomalySubscriptionResponse,
  CreateCostCategoryDefinitionRequest,
  CreateCostCategoryDefinitionResponse,
  CurrentInstance,
  DataUnavailableException,
  DateInterval,
  DeleteAnomalyMonitorRequest,
  DeleteAnomalyMonitorResponse,
  DeleteAnomalySubscriptionRequest,
  DeleteAnomalySubscriptionResponse,
  DeleteCostCategoryDefinitionRequest,
  DeleteCostCategoryDefinitionResponse,
  DescribeCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionResponse,
  DimensionValues,
  DimensionValuesWithAttributes,
  EBSResourceUtilization,
  EC2InstanceDetails,
  EC2ResourceDetails,
  EC2ResourceUtilization,
  EC2Specification,
  ESInstanceDetails,
  ElastiCacheInstanceDetails,
  Expression,
  ForecastResult,
  GetAnomaliesRequest,
  GetAnomaliesResponse,
  GetAnomalyMonitorsRequest,
  GetAnomalyMonitorsResponse,
  GetAnomalySubscriptionsRequest,
  GetAnomalySubscriptionsResponse,
  GetCostAndUsageRequest,
  GetCostAndUsageResponse,
  GetCostAndUsageWithResourcesRequest,
  GetCostAndUsageWithResourcesResponse,
  GetCostForecastRequest,
  GetCostForecastResponse,
  GetDimensionValuesRequest,
  GetDimensionValuesResponse,
  GetReservationCoverageRequest,
  GetReservationCoverageResponse,
  GetReservationPurchaseRecommendationRequest,
  GetReservationPurchaseRecommendationResponse,
  GetReservationUtilizationRequest,
  GetReservationUtilizationResponse,
  GetRightsizingRecommendationRequest,
  GetRightsizingRecommendationResponse,
  GetSavingsPlansCoverageRequest,
  GetSavingsPlansCoverageResponse,
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationDetailsResponse,
  GetSavingsPlansUtilizationRequest,
  GetSavingsPlansUtilizationResponse,
  GetTagsRequest,
  GetTagsResponse,
  GetUsageForecastRequest,
  GetUsageForecastResponse,
  Group,
  GroupDefinition,
  Impact,
  InstanceDetails,
  InvalidNextTokenException,
  LimitExceededException,
  ListCostCategoryDefinitionsRequest,
  ListCostCategoryDefinitionsResponse,
  MatchOption,
  MetricValue,
  ModifyRecommendationDetail,
  ProvideAnomalyFeedbackRequest,
  ProvideAnomalyFeedbackResponse,
  RDSInstanceDetails,
  RedshiftInstanceDetails,
  RequestChangedException,
  ReservationAggregates,
  ReservationCoverageGroup,
  ReservationPurchaseRecommendation,
  ReservationPurchaseRecommendationDetail,
  ReservationPurchaseRecommendationMetadata,
  ReservationPurchaseRecommendationSummary,
  ReservationUtilizationGroup,
  ResourceDetails,
  ResourceNotFoundException,
  ResourceUtilization,
  ResultByTime,
  RightsizingRecommendation,
  RightsizingRecommendationConfiguration,
  RightsizingRecommendationMetadata,
  RightsizingRecommendationSummary,
  RootCause,
  SavingsPlansAmortizedCommitment,
  SavingsPlansCoverage,
  SavingsPlansCoverageData,
  SavingsPlansDetails,
  SavingsPlansPurchaseRecommendation,
  SavingsPlansPurchaseRecommendationDetail,
  SavingsPlansPurchaseRecommendationMetadata,
  SavingsPlansPurchaseRecommendationSummary,
  SavingsPlansSavings,
  SavingsPlansUtilization,
  SavingsPlansUtilizationAggregates,
  SavingsPlansUtilizationByTime,
  SavingsPlansUtilizationDetail,
  ServiceQuotaExceededException,
  ServiceSpecification,
  Subscriber,
  TagValues,
  TargetInstance,
  TerminateRecommendationDetail,
  TotalImpactFilter,
  UnknownMonitorException,
  UnknownSubscriptionException,
  UnresolvableUsageUnitException,
  UpdateAnomalyMonitorRequest,
  UpdateAnomalyMonitorResponse,
  UpdateAnomalySubscriptionRequest,
  UpdateAnomalySubscriptionResponse,
  UpdateCostCategoryDefinitionRequest,
  UpdateCostCategoryDefinitionResponse,
  UtilizationByTime,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateAnomalyMonitorCommand = async (
  input: CreateAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.CreateAnomalyMonitor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAnomalyMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAnomalySubscriptionCommand = async (
  input: CreateAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.CreateAnomalySubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAnomalySubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCostCategoryDefinitionCommand = async (
  input: CreateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.CreateCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAnomalyMonitorCommand = async (
  input: DeleteAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DeleteAnomalyMonitor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAnomalyMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAnomalySubscriptionCommand = async (
  input: DeleteAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DeleteAnomalySubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAnomalySubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCostCategoryDefinitionCommand = async (
  input: DeleteCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DeleteCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCostCategoryDefinitionCommand = async (
  input: DescribeCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DescribeCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAnomaliesCommand = async (
  input: GetAnomaliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetAnomalies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAnomaliesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAnomalyMonitorsCommand = async (
  input: GetAnomalyMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetAnomalyMonitors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAnomalyMonitorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAnomalySubscriptionsCommand = async (
  input: GetAnomalySubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetAnomalySubscriptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAnomalySubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCostAndUsageCommand = async (
  input: GetCostAndUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostAndUsage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCostAndUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCostAndUsageWithResourcesCommand = async (
  input: GetCostAndUsageWithResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostAndUsageWithResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCostAndUsageWithResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCostForecastCommand = async (
  input: GetCostForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostForecast",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCostForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDimensionValuesCommand = async (
  input: GetDimensionValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetDimensionValues",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDimensionValuesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReservationCoverageCommand = async (
  input: GetReservationCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetReservationCoverage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetReservationCoverageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReservationPurchaseRecommendationCommand = async (
  input: GetReservationPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetReservationPurchaseRecommendation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetReservationPurchaseRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReservationUtilizationCommand = async (
  input: GetReservationUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetReservationUtilization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetReservationUtilizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRightsizingRecommendationCommand = async (
  input: GetRightsizingRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetRightsizingRecommendation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRightsizingRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansCoverageCommand = async (
  input: GetSavingsPlansCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansCoverage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSavingsPlansCoverageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = async (
  input: GetSavingsPlansPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansUtilizationCommand = async (
  input: GetSavingsPlansUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = async (
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUsageForecastCommand = async (
  input: GetUsageForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetUsageForecast",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUsageForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCostCategoryDefinitionsCommand = async (
  input: ListCostCategoryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListCostCategoryDefinitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCostCategoryDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ProvideAnomalyFeedbackCommand = async (
  input: ProvideAnomalyFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ProvideAnomalyFeedback",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ProvideAnomalyFeedbackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAnomalyMonitorCommand = async (
  input: UpdateAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateAnomalyMonitor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAnomalyMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAnomalySubscriptionCommand = async (
  input: UpdateAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateAnomalySubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAnomalySubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCostCategoryDefinitionCommand = async (
  input: UpdateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateAnomalyMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAnomalyMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAnomalyMonitorResponse(data, context);
  const response: CreateAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAnomalyMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateAnomalySubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalySubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAnomalySubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAnomalySubscriptionResponse(data, context);
  const response: CreateAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAnomalySubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalySubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      response = {
        ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCostCategoryDefinitionResponse(data, context);
  const response: CreateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteAnomalyMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAnomalyMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAnomalyMonitorResponse(data, context);
  const response: DeleteAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAnomalyMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      response = {
        ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteAnomalySubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalySubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAnomalySubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAnomalySubscriptionResponse(data, context);
  const response: DeleteAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAnomalySubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalySubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCostCategoryDefinitionResponse(data, context);
  const response: DeleteCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCostCategoryDefinitionResponse(data, context);
  const response: DescribeCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAnomaliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomaliesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAnomaliesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAnomaliesResponse(data, context);
  const response: GetAnomaliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAnomaliesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomaliesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAnomalyMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyMonitorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAnomalyMonitorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAnomalyMonitorsResponse(data, context);
  const response: GetAnomalyMonitorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAnomalyMonitorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyMonitorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      response = {
        ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAnomalySubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalySubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAnomalySubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAnomalySubscriptionsResponse(data, context);
  const response: GetAnomalySubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAnomalySubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalySubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCostAndUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCostAndUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostAndUsageResponse(data, context);
  const response: GetCostAndUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostAndUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostAndUsageWithResourcesResponse(data, context);
  const response: GetCostAndUsageWithResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetCostForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCostForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostForecastResponse(data, context);
  const response: GetCostForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDimensionValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDimensionValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDimensionValuesResponse(data, context);
  const response: GetDimensionValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDimensionValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetReservationCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetReservationCoverageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationCoverageResponse(data, context);
  const response: GetReservationCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReservationCoverageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationPurchaseRecommendationResponse(data, context);
  const response: GetReservationPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetReservationUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetReservationUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationUtilizationResponse(data, context);
  const response: GetReservationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReservationUtilizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRightsizingRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRightsizingRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRightsizingRecommendationResponse(data, context);
  const response: GetRightsizingRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRightsizingRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSavingsPlansCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSavingsPlansCoverageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansCoverageResponse(data, context);
  const response: GetSavingsPlansCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansCoverageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse(data, context);
  const response: GetSavingsPlansPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSavingsPlansUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansUtilizationResponse(data, context);
  const response: GetSavingsPlansUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansUtilizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse(data, context);
  const response: GetSavingsPlansUtilizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagsResponse(data, context);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetUsageForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUsageForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUsageForecastResponse(data, context);
  const response: GetUsageForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUsageForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnresolvableUsageUnitException":
    case "com.amazonaws.costexplorer#UnresolvableUsageUnitException":
      response = {
        ...(await deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCostCategoryDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCostCategoryDefinitionsResponse(data, context);
  const response: ListCostCategoryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCostCategoryDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ProvideAnomalyFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvideAnomalyFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ProvideAnomalyFeedbackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ProvideAnomalyFeedbackResponse(data, context);
  const response: ProvideAnomalyFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ProvideAnomalyFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvideAnomalyFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateAnomalyMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAnomalyMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAnomalyMonitorResponse(data, context);
  const response: UpdateAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAnomalyMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      response = {
        ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateAnomalySubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalySubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAnomalySubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAnomalySubscriptionResponse(data, context);
  const response: UpdateAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAnomalySubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalySubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      response = {
        ...(await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCostCategoryDefinitionResponse(data, context);
  const response: UpdateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1BillExpirationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BillExpirationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BillExpirationException(body, context);
  const contents: BillExpirationException = {
    name: "BillExpirationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DataUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataUnavailableException(body, context);
  const contents: DataUnavailableException = {
    name: "DataUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RequestChangedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestChangedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestChangedException(body, context);
  const contents: RequestChangedException = {
    name: "RequestChangedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnknownMonitorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownMonitorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnknownMonitorException(body, context);
  const contents: UnknownMonitorException = {
    name: "UnknownMonitorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnknownSubscriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownSubscriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnknownSubscriptionException(body, context);
  const contents: UnknownSubscriptionException = {
    name: "UnknownSubscriptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnresolvableUsageUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnresolvableUsageUnitException(body, context);
  const contents: UnresolvableUsageUnitException = {
    name: "UnresolvableUsageUnitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AnomalyDateInterval = (input: AnomalyDateInterval, context: __SerdeContext): any => {
  return {
    ...(input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate }),
    ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
  };
};

const serializeAws_json1_1AnomalyMonitor = (input: AnomalyMonitor, context: __SerdeContext): any => {
  return {
    ...(input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate }),
    ...(input.DimensionalValueCount !== undefined &&
      input.DimensionalValueCount !== null && { DimensionalValueCount: input.DimensionalValueCount }),
    ...(input.LastEvaluatedDate !== undefined &&
      input.LastEvaluatedDate !== null && { LastEvaluatedDate: input.LastEvaluatedDate }),
    ...(input.LastUpdatedDate !== undefined &&
      input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
    ...(input.MonitorDimension !== undefined &&
      input.MonitorDimension !== null && { MonitorDimension: input.MonitorDimension }),
    ...(input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }),
    ...(input.MonitorSpecification !== undefined &&
      input.MonitorSpecification !== null && {
        MonitorSpecification: serializeAws_json1_1Expression(input.MonitorSpecification, context),
      }),
    ...(input.MonitorType !== undefined && input.MonitorType !== null && { MonitorType: input.MonitorType }),
  };
};

const serializeAws_json1_1AnomalySubscription = (input: AnomalySubscription, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency }),
    ...(input.MonitorArnList !== undefined &&
      input.MonitorArnList !== null && { MonitorArnList: serializeAws_json1_1Values(input.MonitorArnList, context) }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
    ...(input.SubscriptionArn !== undefined &&
      input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }),
    ...(input.SubscriptionName !== undefined &&
      input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
  };
};

const serializeAws_json1_1CostCategoryRule = (input: CostCategoryRule, context: __SerdeContext): any => {
  return {
    ...(input.Rule !== undefined &&
      input.Rule !== null && { Rule: serializeAws_json1_1Expression(input.Rule, context) }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CostCategoryRulesList = (input: CostCategoryRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CostCategoryRule(entry, context);
    });
};

const serializeAws_json1_1CostCategoryValues = (input: CostCategoryValues, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.MatchOptions !== undefined &&
      input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1CreateAnomalyMonitorRequest = (
  input: CreateAnomalyMonitorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalyMonitor !== undefined &&
      input.AnomalyMonitor !== null && {
        AnomalyMonitor: serializeAws_json1_1AnomalyMonitor(input.AnomalyMonitor, context),
      }),
  };
};

const serializeAws_json1_1CreateAnomalySubscriptionRequest = (
  input: CreateAnomalySubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalySubscription !== undefined &&
      input.AnomalySubscription !== null && {
        AnomalySubscription: serializeAws_json1_1AnomalySubscription(input.AnomalySubscription, context),
      }),
  };
};

const serializeAws_json1_1CreateCostCategoryDefinitionRequest = (
  input: CreateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RuleVersion !== undefined && input.RuleVersion !== null && { RuleVersion: input.RuleVersion }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }),
  };
};

const serializeAws_json1_1DateInterval = (input: DateInterval, context: __SerdeContext): any => {
  return {
    ...(input.End !== undefined && input.End !== null && { End: input.End }),
    ...(input.Start !== undefined && input.Start !== null && { Start: input.Start }),
  };
};

const serializeAws_json1_1DeleteAnomalyMonitorRequest = (
  input: DeleteAnomalyMonitorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
  };
};

const serializeAws_json1_1DeleteAnomalySubscriptionRequest = (
  input: DeleteAnomalySubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubscriptionArn !== undefined &&
      input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }),
  };
};

const serializeAws_json1_1DeleteCostCategoryDefinitionRequest = (
  input: DeleteCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn !== undefined &&
      input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }),
  };
};

const serializeAws_json1_1DescribeCostCategoryDefinitionRequest = (
  input: DescribeCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn !== undefined &&
      input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }),
    ...(input.EffectiveOn !== undefined && input.EffectiveOn !== null && { EffectiveOn: input.EffectiveOn }),
  };
};

const serializeAws_json1_1DimensionValues = (input: DimensionValues, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.MatchOptions !== undefined &&
      input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1EC2Specification = (input: EC2Specification, context: __SerdeContext): any => {
  return {
    ...(input.OfferingClass !== undefined && input.OfferingClass !== null && { OfferingClass: input.OfferingClass }),
  };
};

const serializeAws_json1_1Expression = (input: Expression, context: __SerdeContext): any => {
  return {
    ...(input.And !== undefined && input.And !== null && { And: serializeAws_json1_1Expressions(input.And, context) }),
    ...(input.CostCategories !== undefined &&
      input.CostCategories !== null && {
        CostCategories: serializeAws_json1_1CostCategoryValues(input.CostCategories, context),
      }),
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1DimensionValues(input.Dimensions, context) }),
    ...(input.Not !== undefined && input.Not !== null && { Not: serializeAws_json1_1Expression(input.Not, context) }),
    ...(input.Or !== undefined && input.Or !== null && { Or: serializeAws_json1_1Expressions(input.Or, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_json1_1TagValues(input.Tags, context) }),
  };
};

const serializeAws_json1_1Expressions = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Expression(entry, context);
    });
};

const serializeAws_json1_1GetAnomaliesRequest = (input: GetAnomaliesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DateInterval !== undefined &&
      input.DateInterval !== null && {
        DateInterval: serializeAws_json1_1AnomalyDateInterval(input.DateInterval, context),
      }),
    ...(input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.TotalImpact !== undefined &&
      input.TotalImpact !== null && { TotalImpact: serializeAws_json1_1TotalImpactFilter(input.TotalImpact, context) }),
  };
};

const serializeAws_json1_1GetAnomalyMonitorsRequest = (
  input: GetAnomalyMonitorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArnList !== undefined &&
      input.MonitorArnList !== null && { MonitorArnList: serializeAws_json1_1Values(input.MonitorArnList, context) }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
  };
};

const serializeAws_json1_1GetAnomalySubscriptionsRequest = (
  input: GetAnomalySubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.SubscriptionArnList !== undefined &&
      input.SubscriptionArnList !== null && {
        SubscriptionArnList: serializeAws_json1_1Values(input.SubscriptionArnList, context),
      }),
  };
};

const serializeAws_json1_1GetCostAndUsageRequest = (input: GetCostAndUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetCostAndUsageWithResourcesRequest = (
  input: GetCostAndUsageWithResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetCostForecastRequest = (input: GetCostForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel !== undefined &&
      input.PredictionIntervalLevel !== null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetDimensionValuesRequest = (
  input: GetDimensionValuesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Context !== undefined && input.Context !== null && { Context: input.Context }),
    ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetReservationCoverageRequest = (
  input: GetReservationCoverageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetReservationPurchaseRecommendationRequest = (
  input: GetReservationPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.AccountScope !== undefined && input.AccountScope !== null && { AccountScope: input.AccountScope }),
    ...(input.LookbackPeriodInDays !== undefined &&
      input.LookbackPeriodInDays !== null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
    ...(input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption }),
    ...(input.Service !== undefined && input.Service !== null && { Service: input.Service }),
    ...(input.ServiceSpecification !== undefined &&
      input.ServiceSpecification !== null && {
        ServiceSpecification: serializeAws_json1_1ServiceSpecification(input.ServiceSpecification, context),
      }),
    ...(input.TermInYears !== undefined && input.TermInYears !== null && { TermInYears: input.TermInYears }),
  };
};

const serializeAws_json1_1GetReservationUtilizationRequest = (
  input: GetReservationUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetRightsizingRecommendationRequest = (
  input: GetRightsizingRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_json1_1RightsizingRecommendationConfiguration(input.Configuration, context),
      }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
    ...(input.Service !== undefined && input.Service !== null && { Service: input.Service }),
  };
};

const serializeAws_json1_1GetSavingsPlansCoverageRequest = (
  input: GetSavingsPlansCoverageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Metrics !== undefined &&
      input.Metrics !== null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = (
  input: GetSavingsPlansPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountScope !== undefined && input.AccountScope !== null && { AccountScope: input.AccountScope }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.LookbackPeriodInDays !== undefined &&
      input.LookbackPeriodInDays !== null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
    ...(input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption }),
    ...(input.SavingsPlansType !== undefined &&
      input.SavingsPlansType !== null && { SavingsPlansType: input.SavingsPlansType }),
    ...(input.TermInYears !== undefined && input.TermInYears !== null && { TermInYears: input.TermInYears }),
  };
};

const serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = (
  input: GetSavingsPlansUtilizationDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetSavingsPlansUtilizationRequest = (
  input: GetSavingsPlansUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString !== undefined && input.SearchString !== null && { SearchString: input.SearchString }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetUsageForecastRequest = (input: GetUsageForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity !== undefined && input.Granularity !== null && { Granularity: input.Granularity }),
    ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel !== undefined &&
      input.PredictionIntervalLevel !== null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GroupDefinition = (input: GroupDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GroupDefinitions = (input: GroupDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GroupDefinition(entry, context);
    });
};

const serializeAws_json1_1ListCostCategoryDefinitionsRequest = (
  input: ListCostCategoryDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EffectiveOn !== undefined && input.EffectiveOn !== null && { EffectiveOn: input.EffectiveOn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MatchOptions = (input: (MatchOption | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1MetricNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ProvideAnomalyFeedbackRequest = (
  input: ProvideAnomalyFeedbackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalyId !== undefined && input.AnomalyId !== null && { AnomalyId: input.AnomalyId }),
    ...(input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }),
  };
};

const serializeAws_json1_1RightsizingRecommendationConfiguration = (
  input: RightsizingRecommendationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BenefitsConsidered !== undefined &&
      input.BenefitsConsidered !== null && { BenefitsConsidered: input.BenefitsConsidered }),
    ...(input.RecommendationTarget !== undefined &&
      input.RecommendationTarget !== null && { RecommendationTarget: input.RecommendationTarget }),
  };
};

const serializeAws_json1_1ServiceSpecification = (input: ServiceSpecification, context: __SerdeContext): any => {
  return {
    ...(input.EC2Specification !== undefined &&
      input.EC2Specification !== null && {
        EC2Specification: serializeAws_json1_1EC2Specification(input.EC2Specification, context),
      }),
  };
};

const serializeAws_json1_1Subscriber = (input: Subscriber, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1Subscribers = (input: Subscriber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Subscriber(entry, context);
    });
};

const serializeAws_json1_1TagValues = (input: TagValues, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.MatchOptions !== undefined &&
      input.MatchOptions !== null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1TotalImpactFilter = (input: TotalImpactFilter, context: __SerdeContext): any => {
  return {
    ...(input.EndValue !== undefined && input.EndValue !== null && { EndValue: input.EndValue }),
    ...(input.NumericOperator !== undefined &&
      input.NumericOperator !== null && { NumericOperator: input.NumericOperator }),
    ...(input.StartValue !== undefined && input.StartValue !== null && { StartValue: input.StartValue }),
  };
};

const serializeAws_json1_1UpdateAnomalyMonitorRequest = (
  input: UpdateAnomalyMonitorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
    ...(input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }),
  };
};

const serializeAws_json1_1UpdateAnomalySubscriptionRequest = (
  input: UpdateAnomalySubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency }),
    ...(input.MonitorArnList !== undefined &&
      input.MonitorArnList !== null && { MonitorArnList: serializeAws_json1_1Values(input.MonitorArnList, context) }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
    ...(input.SubscriptionArn !== undefined &&
      input.SubscriptionArn !== null && { SubscriptionArn: input.SubscriptionArn }),
    ...(input.SubscriptionName !== undefined &&
      input.SubscriptionName !== null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
  };
};

const serializeAws_json1_1UpdateCostCategoryDefinitionRequest = (
  input: UpdateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn !== undefined &&
      input.CostCategoryArn !== null && { CostCategoryArn: input.CostCategoryArn }),
    ...(input.RuleVersion !== undefined && input.RuleVersion !== null && { RuleVersion: input.RuleVersion }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }),
  };
};

const serializeAws_json1_1Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Anomalies = (output: any, context: __SerdeContext): Anomaly[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Anomaly(entry, context);
    });
};

const deserializeAws_json1_1Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return {
    AnomalyEndDate:
      output.AnomalyEndDate !== undefined && output.AnomalyEndDate !== null ? output.AnomalyEndDate : undefined,
    AnomalyId: output.AnomalyId !== undefined && output.AnomalyId !== null ? output.AnomalyId : undefined,
    AnomalyScore:
      output.AnomalyScore !== undefined && output.AnomalyScore !== null
        ? deserializeAws_json1_1AnomalyScore(output.AnomalyScore, context)
        : undefined,
    AnomalyStartDate:
      output.AnomalyStartDate !== undefined && output.AnomalyStartDate !== null ? output.AnomalyStartDate : undefined,
    DimensionValue:
      output.DimensionValue !== undefined && output.DimensionValue !== null ? output.DimensionValue : undefined,
    Feedback: output.Feedback !== undefined && output.Feedback !== null ? output.Feedback : undefined,
    Impact:
      output.Impact !== undefined && output.Impact !== null
        ? deserializeAws_json1_1Impact(output.Impact, context)
        : undefined,
    MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
    RootCauses:
      output.RootCauses !== undefined && output.RootCauses !== null
        ? deserializeAws_json1_1RootCauses(output.RootCauses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AnomalyMonitor = (output: any, context: __SerdeContext): AnomalyMonitor => {
  return {
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DimensionalValueCount:
      output.DimensionalValueCount !== undefined && output.DimensionalValueCount !== null
        ? output.DimensionalValueCount
        : undefined,
    LastEvaluatedDate:
      output.LastEvaluatedDate !== undefined && output.LastEvaluatedDate !== null
        ? output.LastEvaluatedDate
        : undefined,
    LastUpdatedDate:
      output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
    MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
    MonitorDimension:
      output.MonitorDimension !== undefined && output.MonitorDimension !== null ? output.MonitorDimension : undefined,
    MonitorName: output.MonitorName !== undefined && output.MonitorName !== null ? output.MonitorName : undefined,
    MonitorSpecification:
      output.MonitorSpecification !== undefined && output.MonitorSpecification !== null
        ? deserializeAws_json1_1Expression(output.MonitorSpecification, context)
        : undefined,
    MonitorType: output.MonitorType !== undefined && output.MonitorType !== null ? output.MonitorType : undefined,
  } as any;
};

const deserializeAws_json1_1AnomalyMonitors = (output: any, context: __SerdeContext): AnomalyMonitor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AnomalyMonitor(entry, context);
    });
};

const deserializeAws_json1_1AnomalyScore = (output: any, context: __SerdeContext): AnomalyScore => {
  return {
    CurrentScore: output.CurrentScore !== undefined && output.CurrentScore !== null ? output.CurrentScore : undefined,
    MaxScore: output.MaxScore !== undefined && output.MaxScore !== null ? output.MaxScore : undefined,
  } as any;
};

const deserializeAws_json1_1AnomalySubscription = (output: any, context: __SerdeContext): AnomalySubscription => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Frequency: output.Frequency !== undefined && output.Frequency !== null ? output.Frequency : undefined,
    MonitorArnList:
      output.MonitorArnList !== undefined && output.MonitorArnList !== null
        ? deserializeAws_json1_1Values(output.MonitorArnList, context)
        : undefined,
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
    SubscriptionArn:
      output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
    SubscriptionName:
      output.SubscriptionName !== undefined && output.SubscriptionName !== null ? output.SubscriptionName : undefined,
    Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
  } as any;
};

const deserializeAws_json1_1AnomalySubscriptions = (output: any, context: __SerdeContext): AnomalySubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AnomalySubscription(entry, context);
    });
};

const deserializeAws_json1_1Attributes = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1BillExpirationException = (
  output: any,
  context: __SerdeContext
): BillExpirationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategory = (output: any, context: __SerdeContext): CostCategory => {
  return {
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
    EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ProcessingStatus:
      output.ProcessingStatus !== undefined && output.ProcessingStatus !== null
        ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
        : undefined,
    RuleVersion: output.RuleVersion !== undefined && output.RuleVersion !== null ? output.RuleVersion : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1CostCategoryRulesList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryProcessingStatus = (
  output: any,
  context: __SerdeContext
): CostCategoryProcessingStatus => {
  return {
    Component: output.Component !== undefined && output.Component !== null ? output.Component : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryProcessingStatusList = (
  output: any,
  context: __SerdeContext
): CostCategoryProcessingStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategoryProcessingStatus(entry, context);
    });
};

const deserializeAws_json1_1CostCategoryReference = (output: any, context: __SerdeContext): CostCategoryReference => {
  return {
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
    EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NumberOfRules:
      output.NumberOfRules !== undefined && output.NumberOfRules !== null ? output.NumberOfRules : undefined,
    ProcessingStatus:
      output.ProcessingStatus !== undefined && output.ProcessingStatus !== null
        ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1CostCategoryValuesList(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryReferencesList = (
  output: any,
  context: __SerdeContext
): CostCategoryReference[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategoryReference(entry, context);
    });
};

const deserializeAws_json1_1CostCategoryRule = (output: any, context: __SerdeContext): CostCategoryRule => {
  return {
    Rule:
      output.Rule !== undefined && output.Rule !== null
        ? deserializeAws_json1_1Expression(output.Rule, context)
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryRulesList = (output: any, context: __SerdeContext): CostCategoryRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategoryRule(entry, context);
    });
};

const deserializeAws_json1_1CostCategoryValues = (output: any, context: __SerdeContext): CostCategoryValues => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    MatchOptions:
      output.MatchOptions !== undefined && output.MatchOptions !== null
        ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryValuesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Coverage = (output: any, context: __SerdeContext): Coverage => {
  return {
    CoverageCost:
      output.CoverageCost !== undefined && output.CoverageCost !== null
        ? deserializeAws_json1_1CoverageCost(output.CoverageCost, context)
        : undefined,
    CoverageHours:
      output.CoverageHours !== undefined && output.CoverageHours !== null
        ? deserializeAws_json1_1CoverageHours(output.CoverageHours, context)
        : undefined,
    CoverageNormalizedUnits:
      output.CoverageNormalizedUnits !== undefined && output.CoverageNormalizedUnits !== null
        ? deserializeAws_json1_1CoverageNormalizedUnits(output.CoverageNormalizedUnits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CoverageByTime = (output: any, context: __SerdeContext): CoverageByTime => {
  return {
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1ReservationCoverageGroups(output.Groups, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1Coverage(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CoverageCost = (output: any, context: __SerdeContext): CoverageCost => {
  return {
    OnDemandCost: output.OnDemandCost !== undefined && output.OnDemandCost !== null ? output.OnDemandCost : undefined,
  } as any;
};

const deserializeAws_json1_1CoverageHours = (output: any, context: __SerdeContext): CoverageHours => {
  return {
    CoverageHoursPercentage:
      output.CoverageHoursPercentage !== undefined && output.CoverageHoursPercentage !== null
        ? output.CoverageHoursPercentage
        : undefined,
    OnDemandHours:
      output.OnDemandHours !== undefined && output.OnDemandHours !== null ? output.OnDemandHours : undefined,
    ReservedHours:
      output.ReservedHours !== undefined && output.ReservedHours !== null ? output.ReservedHours : undefined,
    TotalRunningHours:
      output.TotalRunningHours !== undefined && output.TotalRunningHours !== null
        ? output.TotalRunningHours
        : undefined,
  } as any;
};

const deserializeAws_json1_1CoverageNormalizedUnits = (
  output: any,
  context: __SerdeContext
): CoverageNormalizedUnits => {
  return {
    CoverageNormalizedUnitsPercentage:
      output.CoverageNormalizedUnitsPercentage !== undefined && output.CoverageNormalizedUnitsPercentage !== null
        ? output.CoverageNormalizedUnitsPercentage
        : undefined,
    OnDemandNormalizedUnits:
      output.OnDemandNormalizedUnits !== undefined && output.OnDemandNormalizedUnits !== null
        ? output.OnDemandNormalizedUnits
        : undefined,
    ReservedNormalizedUnits:
      output.ReservedNormalizedUnits !== undefined && output.ReservedNormalizedUnits !== null
        ? output.ReservedNormalizedUnits
        : undefined,
    TotalRunningNormalizedUnits:
      output.TotalRunningNormalizedUnits !== undefined && output.TotalRunningNormalizedUnits !== null
        ? output.TotalRunningNormalizedUnits
        : undefined,
  } as any;
};

const deserializeAws_json1_1CoveragesByTime = (output: any, context: __SerdeContext): CoverageByTime[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CoverageByTime(entry, context);
    });
};

const deserializeAws_json1_1CreateAnomalyMonitorResponse = (
  output: any,
  context: __SerdeContext
): CreateAnomalyMonitorResponse => {
  return {
    MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
  } as any;
};

const deserializeAws_json1_1CreateAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateAnomalySubscriptionResponse => {
  return {
    SubscriptionArn:
      output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
  } as any;
};

const deserializeAws_json1_1CurrentInstance = (output: any, context: __SerdeContext): CurrentInstance => {
  return {
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    InstanceName: output.InstanceName !== undefined && output.InstanceName !== null ? output.InstanceName : undefined,
    MonthlyCost: output.MonthlyCost !== undefined && output.MonthlyCost !== null ? output.MonthlyCost : undefined,
    OnDemandHoursInLookbackPeriod:
      output.OnDemandHoursInLookbackPeriod !== undefined && output.OnDemandHoursInLookbackPeriod !== null
        ? output.OnDemandHoursInLookbackPeriod
        : undefined,
    ReservationCoveredHoursInLookbackPeriod:
      output.ReservationCoveredHoursInLookbackPeriod !== undefined &&
      output.ReservationCoveredHoursInLookbackPeriod !== null
        ? output.ReservationCoveredHoursInLookbackPeriod
        : undefined,
    ResourceDetails:
      output.ResourceDetails !== undefined && output.ResourceDetails !== null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ResourceUtilization:
      output.ResourceUtilization !== undefined && output.ResourceUtilization !== null
        ? deserializeAws_json1_1ResourceUtilization(output.ResourceUtilization, context)
        : undefined,
    SavingsPlansCoveredHoursInLookbackPeriod:
      output.SavingsPlansCoveredHoursInLookbackPeriod !== undefined &&
      output.SavingsPlansCoveredHoursInLookbackPeriod !== null
        ? output.SavingsPlansCoveredHoursInLookbackPeriod
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagValuesList(output.Tags, context)
        : undefined,
    TotalRunningHoursInLookbackPeriod:
      output.TotalRunningHoursInLookbackPeriod !== undefined && output.TotalRunningHoursInLookbackPeriod !== null
        ? output.TotalRunningHoursInLookbackPeriod
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataUnavailableException = (
  output: any,
  context: __SerdeContext
): DataUnavailableException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1DateInterval = (output: any, context: __SerdeContext): DateInterval => {
  return {
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
    Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAnomalyMonitorResponse = (
  output: any,
  context: __SerdeContext
): DeleteAnomalyMonitorResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteAnomalySubscriptionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
    EffectiveEnd: output.EffectiveEnd !== undefined && output.EffectiveEnd !== null ? output.EffectiveEnd : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCostCategoryDefinitionResponse => {
  return {
    CostCategory:
      output.CostCategory !== undefined && output.CostCategory !== null
        ? deserializeAws_json1_1CostCategory(output.CostCategory, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValues = (output: any, context: __SerdeContext): DimensionValues => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    MatchOptions:
      output.MatchOptions !== undefined && output.MatchOptions !== null
        ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValuesWithAttributes = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValuesWithAttributesList = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionValuesWithAttributes(entry, context);
    });
};

const deserializeAws_json1_1EBSResourceUtilization = (output: any, context: __SerdeContext): EBSResourceUtilization => {
  return {
    EbsReadBytesPerSecond:
      output.EbsReadBytesPerSecond !== undefined && output.EbsReadBytesPerSecond !== null
        ? output.EbsReadBytesPerSecond
        : undefined,
    EbsReadOpsPerSecond:
      output.EbsReadOpsPerSecond !== undefined && output.EbsReadOpsPerSecond !== null
        ? output.EbsReadOpsPerSecond
        : undefined,
    EbsWriteBytesPerSecond:
      output.EbsWriteBytesPerSecond !== undefined && output.EbsWriteBytesPerSecond !== null
        ? output.EbsWriteBytesPerSecond
        : undefined,
    EbsWriteOpsPerSecond:
      output.EbsWriteOpsPerSecond !== undefined && output.EbsWriteOpsPerSecond !== null
        ? output.EbsWriteOpsPerSecond
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2InstanceDetails = (output: any, context: __SerdeContext): EC2InstanceDetails => {
  return {
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
    CurrentGeneration:
      output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
    Tenancy: output.Tenancy !== undefined && output.Tenancy !== null ? output.Tenancy : undefined,
  } as any;
};

const deserializeAws_json1_1EC2ResourceDetails = (output: any, context: __SerdeContext): EC2ResourceDetails => {
  return {
    HourlyOnDemandRate:
      output.HourlyOnDemandRate !== undefined && output.HourlyOnDemandRate !== null
        ? output.HourlyOnDemandRate
        : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    Memory: output.Memory !== undefined && output.Memory !== null ? output.Memory : undefined,
    NetworkPerformance:
      output.NetworkPerformance !== undefined && output.NetworkPerformance !== null
        ? output.NetworkPerformance
        : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    Sku: output.Sku !== undefined && output.Sku !== null ? output.Sku : undefined,
    Storage: output.Storage !== undefined && output.Storage !== null ? output.Storage : undefined,
    Vcpu: output.Vcpu !== undefined && output.Vcpu !== null ? output.Vcpu : undefined,
  } as any;
};

const deserializeAws_json1_1EC2ResourceUtilization = (output: any, context: __SerdeContext): EC2ResourceUtilization => {
  return {
    EBSResourceUtilization:
      output.EBSResourceUtilization !== undefined && output.EBSResourceUtilization !== null
        ? deserializeAws_json1_1EBSResourceUtilization(output.EBSResourceUtilization, context)
        : undefined,
    MaxCpuUtilizationPercentage:
      output.MaxCpuUtilizationPercentage !== undefined && output.MaxCpuUtilizationPercentage !== null
        ? output.MaxCpuUtilizationPercentage
        : undefined,
    MaxMemoryUtilizationPercentage:
      output.MaxMemoryUtilizationPercentage !== undefined && output.MaxMemoryUtilizationPercentage !== null
        ? output.MaxMemoryUtilizationPercentage
        : undefined,
    MaxStorageUtilizationPercentage:
      output.MaxStorageUtilizationPercentage !== undefined && output.MaxStorageUtilizationPercentage !== null
        ? output.MaxStorageUtilizationPercentage
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2Specification = (output: any, context: __SerdeContext): EC2Specification => {
  return {
    OfferingClass:
      output.OfferingClass !== undefined && output.OfferingClass !== null ? output.OfferingClass : undefined,
  } as any;
};

const deserializeAws_json1_1ElastiCacheInstanceDetails = (
  output: any,
  context: __SerdeContext
): ElastiCacheInstanceDetails => {
  return {
    CurrentGeneration:
      output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
    NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
    ProductDescription:
      output.ProductDescription !== undefined && output.ProductDescription !== null
        ? output.ProductDescription
        : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
  } as any;
};

const deserializeAws_json1_1ESInstanceDetails = (output: any, context: __SerdeContext): ESInstanceDetails => {
  return {
    CurrentGeneration:
      output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    InstanceClass:
      output.InstanceClass !== undefined && output.InstanceClass !== null ? output.InstanceClass : undefined,
    InstanceSize: output.InstanceSize !== undefined && output.InstanceSize !== null ? output.InstanceSize : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
  } as any;
};

const deserializeAws_json1_1Expression = (output: any, context: __SerdeContext): Expression => {
  return {
    And:
      output.And !== undefined && output.And !== null
        ? deserializeAws_json1_1Expressions(output.And, context)
        : undefined,
    CostCategories:
      output.CostCategories !== undefined && output.CostCategories !== null
        ? deserializeAws_json1_1CostCategoryValues(output.CostCategories, context)
        : undefined,
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionValues(output.Dimensions, context)
        : undefined,
    Not:
      output.Not !== undefined && output.Not !== null
        ? deserializeAws_json1_1Expression(output.Not, context)
        : undefined,
    Or:
      output.Or !== undefined && output.Or !== null ? deserializeAws_json1_1Expressions(output.Or, context) : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagValues(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Expressions = (output: any, context: __SerdeContext): Expression[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Expression(entry, context);
    });
};

const deserializeAws_json1_1ForecastResult = (output: any, context: __SerdeContext): ForecastResult => {
  return {
    MeanValue: output.MeanValue !== undefined && output.MeanValue !== null ? output.MeanValue : undefined,
    PredictionIntervalLowerBound:
      output.PredictionIntervalLowerBound !== undefined && output.PredictionIntervalLowerBound !== null
        ? output.PredictionIntervalLowerBound
        : undefined,
    PredictionIntervalUpperBound:
      output.PredictionIntervalUpperBound !== undefined && output.PredictionIntervalUpperBound !== null
        ? output.PredictionIntervalUpperBound
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ForecastResultsByTime = (output: any, context: __SerdeContext): ForecastResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ForecastResult(entry, context);
    });
};

const deserializeAws_json1_1GetAnomaliesResponse = (output: any, context: __SerdeContext): GetAnomaliesResponse => {
  return {
    Anomalies:
      output.Anomalies !== undefined && output.Anomalies !== null
        ? deserializeAws_json1_1Anomalies(output.Anomalies, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetAnomalyMonitorsResponse = (
  output: any,
  context: __SerdeContext
): GetAnomalyMonitorsResponse => {
  return {
    AnomalyMonitors:
      output.AnomalyMonitors !== undefined && output.AnomalyMonitors !== null
        ? deserializeAws_json1_1AnomalyMonitors(output.AnomalyMonitors, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetAnomalySubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): GetAnomalySubscriptionsResponse => {
  return {
    AnomalySubscriptions:
      output.AnomalySubscriptions !== undefined && output.AnomalySubscriptions !== null
        ? deserializeAws_json1_1AnomalySubscriptions(output.AnomalySubscriptions, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
  } as any;
};

const deserializeAws_json1_1GetCostAndUsageResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageResponse => {
  return {
    GroupDefinitions:
      output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
        ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    ResultsByTime:
      output.ResultsByTime !== undefined && output.ResultsByTime !== null
        ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageWithResourcesResponse => {
  return {
    GroupDefinitions:
      output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
        ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    ResultsByTime:
      output.ResultsByTime !== undefined && output.ResultsByTime !== null
        ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCostForecastResponse = (
  output: any,
  context: __SerdeContext
): GetCostForecastResponse => {
  return {
    ForecastResultsByTime:
      output.ForecastResultsByTime !== undefined && output.ForecastResultsByTime !== null
        ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1MetricValue(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDimensionValuesResponse = (
  output: any,
  context: __SerdeContext
): GetDimensionValuesResponse => {
  return {
    DimensionValues:
      output.DimensionValues !== undefined && output.DimensionValues !== null
        ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValues, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
    TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
  } as any;
};

const deserializeAws_json1_1GetReservationCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetReservationCoverageResponse => {
  return {
    CoveragesByTime:
      output.CoveragesByTime !== undefined && output.CoveragesByTime !== null
        ? deserializeAws_json1_1CoveragesByTime(output.CoveragesByTime, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1Coverage(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationPurchaseRecommendationResponse => {
  return {
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(output.Metadata, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    Recommendations:
      output.Recommendations !== undefined && output.Recommendations !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendations(output.Recommendations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetReservationUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationUtilizationResponse => {
  return {
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
        : undefined,
    UtilizationsByTime:
      output.UtilizationsByTime !== undefined && output.UtilizationsByTime !== null
        ? deserializeAws_json1_1UtilizationsByTime(output.UtilizationsByTime, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRightsizingRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetRightsizingRecommendationResponse => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1RightsizingRecommendationConfiguration(output.Configuration, context)
        : undefined,
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1RightsizingRecommendationMetadata(output.Metadata, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    RightsizingRecommendations:
      output.RightsizingRecommendations !== undefined && output.RightsizingRecommendations !== null
        ? deserializeAws_json1_1RightsizingRecommendationList(output.RightsizingRecommendations, context)
        : undefined,
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1RightsizingRecommendationSummary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansCoverageResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SavingsPlansCoverages:
      output.SavingsPlansCoverages !== undefined && output.SavingsPlansCoverages !== null
        ? deserializeAws_json1_1SavingsPlansCoverages(output.SavingsPlansCoverages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansPurchaseRecommendationResponse => {
  return {
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(output.Metadata, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    SavingsPlansPurchaseRecommendation:
      output.SavingsPlansPurchaseRecommendation !== undefined && output.SavingsPlansPurchaseRecommendation !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendation(output.SavingsPlansPurchaseRecommendation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationDetailsResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    SavingsPlansUtilizationDetails:
      output.SavingsPlansUtilizationDetails !== undefined && output.SavingsPlansUtilizationDetails !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationDetails(output.SavingsPlansUtilizationDetails, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationResponse => {
  return {
    SavingsPlansUtilizationsByTime:
      output.SavingsPlansUtilizationsByTime !== undefined && output.SavingsPlansUtilizationsByTime !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationsByTime(output.SavingsPlansUtilizationsByTime, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagsResponse = (output: any, context: __SerdeContext): GetTagsResponse => {
  return {
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
    ReturnSize: output.ReturnSize !== undefined && output.ReturnSize !== null ? output.ReturnSize : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
  } as any;
};

const deserializeAws_json1_1GetUsageForecastResponse = (
  output: any,
  context: __SerdeContext
): GetUsageForecastResponse => {
  return {
    ForecastResultsByTime:
      output.ForecastResultsByTime !== undefined && output.ForecastResultsByTime !== null
        ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1MetricValue(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Group = (output: any, context: __SerdeContext): Group => {
  return {
    Keys:
      output.Keys !== undefined && output.Keys !== null ? deserializeAws_json1_1Keys(output.Keys, context) : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_json1_1Metrics(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GroupDefinition = (output: any, context: __SerdeContext): GroupDefinition => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1GroupDefinitions = (output: any, context: __SerdeContext): GroupDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupDefinition(entry, context);
    });
};

const deserializeAws_json1_1Groups = (output: any, context: __SerdeContext): Group[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Group(entry, context);
    });
};

const deserializeAws_json1_1Impact = (output: any, context: __SerdeContext): Impact => {
  return {
    MaxImpact: output.MaxImpact !== undefined && output.MaxImpact !== null ? output.MaxImpact : undefined,
    TotalImpact: output.TotalImpact !== undefined && output.TotalImpact !== null ? output.TotalImpact : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return {
    EC2InstanceDetails:
      output.EC2InstanceDetails !== undefined && output.EC2InstanceDetails !== null
        ? deserializeAws_json1_1EC2InstanceDetails(output.EC2InstanceDetails, context)
        : undefined,
    ESInstanceDetails:
      output.ESInstanceDetails !== undefined && output.ESInstanceDetails !== null
        ? deserializeAws_json1_1ESInstanceDetails(output.ESInstanceDetails, context)
        : undefined,
    ElastiCacheInstanceDetails:
      output.ElastiCacheInstanceDetails !== undefined && output.ElastiCacheInstanceDetails !== null
        ? deserializeAws_json1_1ElastiCacheInstanceDetails(output.ElastiCacheInstanceDetails, context)
        : undefined,
    RDSInstanceDetails:
      output.RDSInstanceDetails !== undefined && output.RDSInstanceDetails !== null
        ? deserializeAws_json1_1RDSInstanceDetails(output.RDSInstanceDetails, context)
        : undefined,
    RedshiftInstanceDetails:
      output.RedshiftInstanceDetails !== undefined && output.RedshiftInstanceDetails !== null
        ? deserializeAws_json1_1RedshiftInstanceDetails(output.RedshiftInstanceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Keys = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListCostCategoryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListCostCategoryDefinitionsResponse => {
  return {
    CostCategoryReferences:
      output.CostCategoryReferences !== undefined && output.CostCategoryReferences !== null
        ? deserializeAws_json1_1CostCategoryReferencesList(output.CostCategoryReferences, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1MatchOptions = (output: any, context: __SerdeContext): (MatchOption | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Metrics = (output: any, context: __SerdeContext): { [key: string]: MetricValue } => {
  return Object.entries(output).reduce((acc: { [key: string]: MetricValue }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1MetricValue(value, context),
    };
  }, {});
};

const deserializeAws_json1_1MetricValue = (output: any, context: __SerdeContext): MetricValue => {
  return {
    Amount: output.Amount !== undefined && output.Amount !== null ? output.Amount : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ModifyRecommendationDetail => {
  return {
    TargetInstances:
      output.TargetInstances !== undefined && output.TargetInstances !== null
        ? deserializeAws_json1_1TargetInstancesList(output.TargetInstances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProvideAnomalyFeedbackResponse = (
  output: any,
  context: __SerdeContext
): ProvideAnomalyFeedbackResponse => {
  return {
    AnomalyId: output.AnomalyId !== undefined && output.AnomalyId !== null ? output.AnomalyId : undefined,
  } as any;
};

const deserializeAws_json1_1RDSInstanceDetails = (output: any, context: __SerdeContext): RDSInstanceDetails => {
  return {
    CurrentGeneration:
      output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    DatabaseEdition:
      output.DatabaseEdition !== undefined && output.DatabaseEdition !== null ? output.DatabaseEdition : undefined,
    DatabaseEngine:
      output.DatabaseEngine !== undefined && output.DatabaseEngine !== null ? output.DatabaseEngine : undefined,
    DeploymentOption:
      output.DeploymentOption !== undefined && output.DeploymentOption !== null ? output.DeploymentOption : undefined,
    Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
  } as any;
};

const deserializeAws_json1_1RedshiftInstanceDetails = (
  output: any,
  context: __SerdeContext
): RedshiftInstanceDetails => {
  return {
    CurrentGeneration:
      output.CurrentGeneration !== undefined && output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
    NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null ? output.SizeFlexEligible : undefined,
  } as any;
};

const deserializeAws_json1_1RequestChangedException = (
  output: any,
  context: __SerdeContext
): RequestChangedException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationAggregates = (output: any, context: __SerdeContext): ReservationAggregates => {
  return {
    AmortizedRecurringFee:
      output.AmortizedRecurringFee !== undefined && output.AmortizedRecurringFee !== null
        ? output.AmortizedRecurringFee
        : undefined,
    AmortizedUpfrontFee:
      output.AmortizedUpfrontFee !== undefined && output.AmortizedUpfrontFee !== null
        ? output.AmortizedUpfrontFee
        : undefined,
    NetRISavings: output.NetRISavings !== undefined && output.NetRISavings !== null ? output.NetRISavings : undefined,
    OnDemandCostOfRIHoursUsed:
      output.OnDemandCostOfRIHoursUsed !== undefined && output.OnDemandCostOfRIHoursUsed !== null
        ? output.OnDemandCostOfRIHoursUsed
        : undefined,
    PurchasedHours:
      output.PurchasedHours !== undefined && output.PurchasedHours !== null ? output.PurchasedHours : undefined,
    PurchasedUnits:
      output.PurchasedUnits !== undefined && output.PurchasedUnits !== null ? output.PurchasedUnits : undefined,
    TotalActualHours:
      output.TotalActualHours !== undefined && output.TotalActualHours !== null ? output.TotalActualHours : undefined,
    TotalActualUnits:
      output.TotalActualUnits !== undefined && output.TotalActualUnits !== null ? output.TotalActualUnits : undefined,
    TotalAmortizedFee:
      output.TotalAmortizedFee !== undefined && output.TotalAmortizedFee !== null
        ? output.TotalAmortizedFee
        : undefined,
    TotalPotentialRISavings:
      output.TotalPotentialRISavings !== undefined && output.TotalPotentialRISavings !== null
        ? output.TotalPotentialRISavings
        : undefined,
    UnusedHours: output.UnusedHours !== undefined && output.UnusedHours !== null ? output.UnusedHours : undefined,
    UnusedUnits: output.UnusedUnits !== undefined && output.UnusedUnits !== null ? output.UnusedUnits : undefined,
    UtilizationPercentage:
      output.UtilizationPercentage !== undefined && output.UtilizationPercentage !== null
        ? output.UtilizationPercentage
        : undefined,
    UtilizationPercentageInUnits:
      output.UtilizationPercentageInUnits !== undefined && output.UtilizationPercentageInUnits !== null
        ? output.UtilizationPercentageInUnits
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationCoverageGroup = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Coverage:
      output.Coverage !== undefined && output.Coverage !== null
        ? deserializeAws_json1_1Coverage(output.Coverage, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationCoverageGroups = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationCoverageGroup(entry, context);
    });
};

const deserializeAws_json1_1ReservationPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation => {
  return {
    AccountScope: output.AccountScope !== undefined && output.AccountScope !== null ? output.AccountScope : undefined,
    LookbackPeriodInDays:
      output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
        ? output.LookbackPeriodInDays
        : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
    RecommendationDetails:
      output.RecommendationDetails !== undefined && output.RecommendationDetails !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationDetails(output.RecommendationDetails, context)
        : undefined,
    RecommendationSummary:
      output.RecommendationSummary !== undefined && output.RecommendationSummary !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationSummary(output.RecommendationSummary, context)
        : undefined,
    ServiceSpecification:
      output.ServiceSpecification !== undefined && output.ServiceSpecification !== null
        ? deserializeAws_json1_1ServiceSpecification(output.ServiceSpecification, context)
        : undefined,
    TermInYears: output.TermInYears !== undefined && output.TermInYears !== null ? output.TermInYears : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    AverageNormalizedUnitsUsedPerHour:
      output.AverageNormalizedUnitsUsedPerHour !== undefined && output.AverageNormalizedUnitsUsedPerHour !== null
        ? output.AverageNormalizedUnitsUsedPerHour
        : undefined,
    AverageNumberOfInstancesUsedPerHour:
      output.AverageNumberOfInstancesUsedPerHour !== undefined && output.AverageNumberOfInstancesUsedPerHour !== null
        ? output.AverageNumberOfInstancesUsedPerHour
        : undefined,
    AverageUtilization:
      output.AverageUtilization !== undefined && output.AverageUtilization !== null
        ? output.AverageUtilization
        : undefined,
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    EstimatedBreakEvenInMonths:
      output.EstimatedBreakEvenInMonths !== undefined && output.EstimatedBreakEvenInMonths !== null
        ? output.EstimatedBreakEvenInMonths
        : undefined,
    EstimatedMonthlyOnDemandCost:
      output.EstimatedMonthlyOnDemandCost !== undefined && output.EstimatedMonthlyOnDemandCost !== null
        ? output.EstimatedMonthlyOnDemandCost
        : undefined,
    EstimatedMonthlySavingsAmount:
      output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
        ? output.EstimatedMonthlySavingsAmount
        : undefined,
    EstimatedMonthlySavingsPercentage:
      output.EstimatedMonthlySavingsPercentage !== undefined && output.EstimatedMonthlySavingsPercentage !== null
        ? output.EstimatedMonthlySavingsPercentage
        : undefined,
    EstimatedReservationCostForLookbackPeriod:
      output.EstimatedReservationCostForLookbackPeriod !== undefined &&
      output.EstimatedReservationCostForLookbackPeriod !== null
        ? output.EstimatedReservationCostForLookbackPeriod
        : undefined,
    InstanceDetails:
      output.InstanceDetails !== undefined && output.InstanceDetails !== null
        ? deserializeAws_json1_1InstanceDetails(output.InstanceDetails, context)
        : undefined,
    MaximumNormalizedUnitsUsedPerHour:
      output.MaximumNormalizedUnitsUsedPerHour !== undefined && output.MaximumNormalizedUnitsUsedPerHour !== null
        ? output.MaximumNormalizedUnitsUsedPerHour
        : undefined,
    MaximumNumberOfInstancesUsedPerHour:
      output.MaximumNumberOfInstancesUsedPerHour !== undefined && output.MaximumNumberOfInstancesUsedPerHour !== null
        ? output.MaximumNumberOfInstancesUsedPerHour
        : undefined,
    MinimumNormalizedUnitsUsedPerHour:
      output.MinimumNormalizedUnitsUsedPerHour !== undefined && output.MinimumNormalizedUnitsUsedPerHour !== null
        ? output.MinimumNormalizedUnitsUsedPerHour
        : undefined,
    MinimumNumberOfInstancesUsedPerHour:
      output.MinimumNumberOfInstancesUsedPerHour !== undefined && output.MinimumNumberOfInstancesUsedPerHour !== null
        ? output.MinimumNumberOfInstancesUsedPerHour
        : undefined,
    RecommendedNormalizedUnitsToPurchase:
      output.RecommendedNormalizedUnitsToPurchase !== undefined && output.RecommendedNormalizedUnitsToPurchase !== null
        ? output.RecommendedNormalizedUnitsToPurchase
        : undefined,
    RecommendedNumberOfInstancesToPurchase:
      output.RecommendedNumberOfInstancesToPurchase !== undefined &&
      output.RecommendedNumberOfInstancesToPurchase !== null
        ? output.RecommendedNumberOfInstancesToPurchase
        : undefined,
    RecurringStandardMonthlyCost:
      output.RecurringStandardMonthlyCost !== undefined && output.RecurringStandardMonthlyCost !== null
        ? output.RecurringStandardMonthlyCost
        : undefined,
    UpfrontCost: output.UpfrontCost !== undefined && output.UpfrontCost !== null ? output.UpfrontCost : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetails = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationPurchaseRecommendationDetail(entry, context);
    });
};

const deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationMetadata => {
  return {
    GenerationTimestamp:
      output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
        ? output.GenerationTimestamp
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendations = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context);
    });
};

const deserializeAws_json1_1ReservationPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationSummary => {
  return {
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    TotalEstimatedMonthlySavingsAmount:
      output.TotalEstimatedMonthlySavingsAmount !== undefined && output.TotalEstimatedMonthlySavingsAmount !== null
        ? output.TotalEstimatedMonthlySavingsAmount
        : undefined,
    TotalEstimatedMonthlySavingsPercentage:
      output.TotalEstimatedMonthlySavingsPercentage !== undefined &&
      output.TotalEstimatedMonthlySavingsPercentage !== null
        ? output.TotalEstimatedMonthlySavingsPercentage
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationUtilizationGroup = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1ReservationAggregates(output.Utilization, context)
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationUtilizationGroups = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationUtilizationGroup(entry, context);
    });
};

const deserializeAws_json1_1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    EC2ResourceDetails:
      output.EC2ResourceDetails !== undefined && output.EC2ResourceDetails !== null
        ? deserializeAws_json1_1EC2ResourceDetails(output.EC2ResourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceUtilization = (output: any, context: __SerdeContext): ResourceUtilization => {
  return {
    EC2ResourceUtilization:
      output.EC2ResourceUtilization !== undefined && output.EC2ResourceUtilization !== null
        ? deserializeAws_json1_1EC2ResourceUtilization(output.EC2ResourceUtilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResultByTime = (output: any, context: __SerdeContext): ResultByTime => {
  return {
    Estimated: output.Estimated !== undefined && output.Estimated !== null ? output.Estimated : undefined,
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1Groups(output.Groups, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1Metrics(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResultsByTime = (output: any, context: __SerdeContext): ResultByTime[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResultByTime(entry, context);
    });
};

const deserializeAws_json1_1RightsizingRecommendation = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    CurrentInstance:
      output.CurrentInstance !== undefined && output.CurrentInstance !== null
        ? deserializeAws_json1_1CurrentInstance(output.CurrentInstance, context)
        : undefined,
    ModifyRecommendationDetail:
      output.ModifyRecommendationDetail !== undefined && output.ModifyRecommendationDetail !== null
        ? deserializeAws_json1_1ModifyRecommendationDetail(output.ModifyRecommendationDetail, context)
        : undefined,
    RightsizingType:
      output.RightsizingType !== undefined && output.RightsizingType !== null ? output.RightsizingType : undefined,
    TerminateRecommendationDetail:
      output.TerminateRecommendationDetail !== undefined && output.TerminateRecommendationDetail !== null
        ? deserializeAws_json1_1TerminateRecommendationDetail(output.TerminateRecommendationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationConfiguration = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationConfiguration => {
  return {
    BenefitsConsidered:
      output.BenefitsConsidered !== undefined && output.BenefitsConsidered !== null
        ? output.BenefitsConsidered
        : undefined,
    RecommendationTarget:
      output.RecommendationTarget !== undefined && output.RecommendationTarget !== null
        ? output.RecommendationTarget
        : undefined,
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationList = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RightsizingRecommendation(entry, context);
    });
};

const deserializeAws_json1_1RightsizingRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationMetadata => {
  return {
    GenerationTimestamp:
      output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
        ? output.GenerationTimestamp
        : undefined,
    LookbackPeriodInDays:
      output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
        ? output.LookbackPeriodInDays
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationSummary = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationSummary => {
  return {
    EstimatedTotalMonthlySavingsAmount:
      output.EstimatedTotalMonthlySavingsAmount !== undefined && output.EstimatedTotalMonthlySavingsAmount !== null
        ? output.EstimatedTotalMonthlySavingsAmount
        : undefined,
    SavingsCurrencyCode:
      output.SavingsCurrencyCode !== undefined && output.SavingsCurrencyCode !== null
        ? output.SavingsCurrencyCode
        : undefined,
    SavingsPercentage:
      output.SavingsPercentage !== undefined && output.SavingsPercentage !== null
        ? output.SavingsPercentage
        : undefined,
    TotalRecommendationCount:
      output.TotalRecommendationCount !== undefined && output.TotalRecommendationCount !== null
        ? output.TotalRecommendationCount
        : undefined,
  } as any;
};

const deserializeAws_json1_1RootCause = (output: any, context: __SerdeContext): RootCause => {
  return {
    LinkedAccount:
      output.LinkedAccount !== undefined && output.LinkedAccount !== null ? output.LinkedAccount : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    Service: output.Service !== undefined && output.Service !== null ? output.Service : undefined,
    UsageType: output.UsageType !== undefined && output.UsageType !== null ? output.UsageType : undefined,
  } as any;
};

const deserializeAws_json1_1RootCauses = (output: any, context: __SerdeContext): RootCause[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RootCause(entry, context);
    });
};

const deserializeAws_json1_1SavingsPlansAmortizedCommitment = (
  output: any,
  context: __SerdeContext
): SavingsPlansAmortizedCommitment => {
  return {
    AmortizedRecurringCommitment:
      output.AmortizedRecurringCommitment !== undefined && output.AmortizedRecurringCommitment !== null
        ? output.AmortizedRecurringCommitment
        : undefined,
    AmortizedUpfrontCommitment:
      output.AmortizedUpfrontCommitment !== undefined && output.AmortizedUpfrontCommitment !== null
        ? output.AmortizedUpfrontCommitment
        : undefined,
    TotalAmortizedCommitment:
      output.TotalAmortizedCommitment !== undefined && output.TotalAmortizedCommitment !== null
        ? output.TotalAmortizedCommitment
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverage = (output: any, context: __SerdeContext): SavingsPlansCoverage => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Coverage:
      output.Coverage !== undefined && output.Coverage !== null
        ? deserializeAws_json1_1SavingsPlansCoverageData(output.Coverage, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverageData = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverageData => {
  return {
    CoveragePercentage:
      output.CoveragePercentage !== undefined && output.CoveragePercentage !== null
        ? output.CoveragePercentage
        : undefined,
    OnDemandCost: output.OnDemandCost !== undefined && output.OnDemandCost !== null ? output.OnDemandCost : undefined,
    SpendCoveredBySavingsPlans:
      output.SpendCoveredBySavingsPlans !== undefined && output.SpendCoveredBySavingsPlans !== null
        ? output.SpendCoveredBySavingsPlans
        : undefined,
    TotalCost: output.TotalCost !== undefined && output.TotalCost !== null ? output.TotalCost : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverages = (output: any, context: __SerdeContext): SavingsPlansCoverage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansCoverage(entry, context);
    });
};

const deserializeAws_json1_1SavingsPlansDetails = (output: any, context: __SerdeContext): SavingsPlansDetails => {
  return {
    InstanceFamily:
      output.InstanceFamily !== undefined && output.InstanceFamily !== null ? output.InstanceFamily : undefined,
    OfferingId: output.OfferingId !== undefined && output.OfferingId !== null ? output.OfferingId : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendation => {
  return {
    AccountScope: output.AccountScope !== undefined && output.AccountScope !== null ? output.AccountScope : undefined,
    LookbackPeriodInDays:
      output.LookbackPeriodInDays !== undefined && output.LookbackPeriodInDays !== null
        ? output.LookbackPeriodInDays
        : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
    SavingsPlansPurchaseRecommendationDetails:
      output.SavingsPlansPurchaseRecommendationDetails !== undefined &&
      output.SavingsPlansPurchaseRecommendationDetails !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(
            output.SavingsPlansPurchaseRecommendationDetails,
            context
          )
        : undefined,
    SavingsPlansPurchaseRecommendationSummary:
      output.SavingsPlansPurchaseRecommendationSummary !== undefined &&
      output.SavingsPlansPurchaseRecommendationSummary !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(
            output.SavingsPlansPurchaseRecommendationSummary,
            context
          )
        : undefined,
    SavingsPlansType:
      output.SavingsPlansType !== undefined && output.SavingsPlansType !== null ? output.SavingsPlansType : undefined,
    TermInYears: output.TermInYears !== undefined && output.TermInYears !== null ? output.TermInYears : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    CurrentAverageHourlyOnDemandSpend:
      output.CurrentAverageHourlyOnDemandSpend !== undefined && output.CurrentAverageHourlyOnDemandSpend !== null
        ? output.CurrentAverageHourlyOnDemandSpend
        : undefined,
    CurrentMaximumHourlyOnDemandSpend:
      output.CurrentMaximumHourlyOnDemandSpend !== undefined && output.CurrentMaximumHourlyOnDemandSpend !== null
        ? output.CurrentMaximumHourlyOnDemandSpend
        : undefined,
    CurrentMinimumHourlyOnDemandSpend:
      output.CurrentMinimumHourlyOnDemandSpend !== undefined && output.CurrentMinimumHourlyOnDemandSpend !== null
        ? output.CurrentMinimumHourlyOnDemandSpend
        : undefined,
    EstimatedAverageUtilization:
      output.EstimatedAverageUtilization !== undefined && output.EstimatedAverageUtilization !== null
        ? output.EstimatedAverageUtilization
        : undefined,
    EstimatedMonthlySavingsAmount:
      output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
        ? output.EstimatedMonthlySavingsAmount
        : undefined,
    EstimatedOnDemandCost:
      output.EstimatedOnDemandCost !== undefined && output.EstimatedOnDemandCost !== null
        ? output.EstimatedOnDemandCost
        : undefined,
    EstimatedOnDemandCostWithCurrentCommitment:
      output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
      output.EstimatedOnDemandCostWithCurrentCommitment !== null
        ? output.EstimatedOnDemandCostWithCurrentCommitment
        : undefined,
    EstimatedROI: output.EstimatedROI !== undefined && output.EstimatedROI !== null ? output.EstimatedROI : undefined,
    EstimatedSPCost:
      output.EstimatedSPCost !== undefined && output.EstimatedSPCost !== null ? output.EstimatedSPCost : undefined,
    EstimatedSavingsAmount:
      output.EstimatedSavingsAmount !== undefined && output.EstimatedSavingsAmount !== null
        ? output.EstimatedSavingsAmount
        : undefined,
    EstimatedSavingsPercentage:
      output.EstimatedSavingsPercentage !== undefined && output.EstimatedSavingsPercentage !== null
        ? output.EstimatedSavingsPercentage
        : undefined,
    HourlyCommitmentToPurchase:
      output.HourlyCommitmentToPurchase !== undefined && output.HourlyCommitmentToPurchase !== null
        ? output.HourlyCommitmentToPurchase
        : undefined,
    SavingsPlansDetails:
      output.SavingsPlansDetails !== undefined && output.SavingsPlansDetails !== null
        ? deserializeAws_json1_1SavingsPlansDetails(output.SavingsPlansDetails, context)
        : undefined,
    UpfrontCost: output.UpfrontCost !== undefined && output.UpfrontCost !== null ? output.UpfrontCost : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(entry, context);
    });
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationMetadata => {
  return {
    AdditionalMetadata:
      output.AdditionalMetadata !== undefined && output.AdditionalMetadata !== null
        ? output.AdditionalMetadata
        : undefined,
    GenerationTimestamp:
      output.GenerationTimestamp !== undefined && output.GenerationTimestamp !== null
        ? output.GenerationTimestamp
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationSummary => {
  return {
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    CurrentOnDemandSpend:
      output.CurrentOnDemandSpend !== undefined && output.CurrentOnDemandSpend !== null
        ? output.CurrentOnDemandSpend
        : undefined,
    DailyCommitmentToPurchase:
      output.DailyCommitmentToPurchase !== undefined && output.DailyCommitmentToPurchase !== null
        ? output.DailyCommitmentToPurchase
        : undefined,
    EstimatedMonthlySavingsAmount:
      output.EstimatedMonthlySavingsAmount !== undefined && output.EstimatedMonthlySavingsAmount !== null
        ? output.EstimatedMonthlySavingsAmount
        : undefined,
    EstimatedOnDemandCostWithCurrentCommitment:
      output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
      output.EstimatedOnDemandCostWithCurrentCommitment !== null
        ? output.EstimatedOnDemandCostWithCurrentCommitment
        : undefined,
    EstimatedROI: output.EstimatedROI !== undefined && output.EstimatedROI !== null ? output.EstimatedROI : undefined,
    EstimatedSavingsAmount:
      output.EstimatedSavingsAmount !== undefined && output.EstimatedSavingsAmount !== null
        ? output.EstimatedSavingsAmount
        : undefined,
    EstimatedSavingsPercentage:
      output.EstimatedSavingsPercentage !== undefined && output.EstimatedSavingsPercentage !== null
        ? output.EstimatedSavingsPercentage
        : undefined,
    EstimatedTotalCost:
      output.EstimatedTotalCost !== undefined && output.EstimatedTotalCost !== null
        ? output.EstimatedTotalCost
        : undefined,
    HourlyCommitmentToPurchase:
      output.HourlyCommitmentToPurchase !== undefined && output.HourlyCommitmentToPurchase !== null
        ? output.HourlyCommitmentToPurchase
        : undefined,
    TotalRecommendationCount:
      output.TotalRecommendationCount !== undefined && output.TotalRecommendationCount !== null
        ? output.TotalRecommendationCount
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansSavings = (output: any, context: __SerdeContext): SavingsPlansSavings => {
  return {
    NetSavings: output.NetSavings !== undefined && output.NetSavings !== null ? output.NetSavings : undefined,
    OnDemandCostEquivalent:
      output.OnDemandCostEquivalent !== undefined && output.OnDemandCostEquivalent !== null
        ? output.OnDemandCostEquivalent
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilization = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilization => {
  return {
    TotalCommitment:
      output.TotalCommitment !== undefined && output.TotalCommitment !== null ? output.TotalCommitment : undefined,
    UnusedCommitment:
      output.UnusedCommitment !== undefined && output.UnusedCommitment !== null ? output.UnusedCommitment : undefined,
    UsedCommitment:
      output.UsedCommitment !== undefined && output.UsedCommitment !== null ? output.UsedCommitment : undefined,
    UtilizationPercentage:
      output.UtilizationPercentage !== undefined && output.UtilizationPercentage !== null
        ? output.UtilizationPercentage
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationAggregates = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationAggregates => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Savings:
      output.Savings !== undefined && output.Savings !== null
        ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
        : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationByTime = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationByTime => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Savings:
      output.Savings !== undefined && output.Savings !== null
        ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationDetail => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment !== undefined && output.AmortizedCommitment !== null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Savings:
      output.Savings !== undefined && output.Savings !== null
        ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
        : undefined,
    SavingsPlanArn:
      output.SavingsPlanArn !== undefined && output.SavingsPlanArn !== null ? output.SavingsPlanArn : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetails = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context);
    });
};

const deserializeAws_json1_1SavingsPlansUtilizationsByTime = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationByTime[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context);
    });
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceSpecification = (output: any, context: __SerdeContext): ServiceSpecification => {
  return {
    EC2Specification:
      output.EC2Specification !== undefined && output.EC2Specification !== null
        ? deserializeAws_json1_1EC2Specification(output.EC2Specification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Subscriber = (output: any, context: __SerdeContext): Subscriber => {
  return {
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1Subscribers = (output: any, context: __SerdeContext): Subscriber[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subscriber(entry, context);
    });
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1TagValues = (output: any, context: __SerdeContext): TagValues => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    MatchOptions:
      output.MatchOptions !== undefined && output.MatchOptions !== null
        ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context)
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TagValuesList = (output: any, context: __SerdeContext): TagValues[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagValues(entry, context);
    });
};

const deserializeAws_json1_1TargetInstance = (output: any, context: __SerdeContext): TargetInstance => {
  return {
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    DefaultTargetInstance:
      output.DefaultTargetInstance !== undefined && output.DefaultTargetInstance !== null
        ? output.DefaultTargetInstance
        : undefined,
    EstimatedMonthlyCost:
      output.EstimatedMonthlyCost !== undefined && output.EstimatedMonthlyCost !== null
        ? output.EstimatedMonthlyCost
        : undefined,
    EstimatedMonthlySavings:
      output.EstimatedMonthlySavings !== undefined && output.EstimatedMonthlySavings !== null
        ? output.EstimatedMonthlySavings
        : undefined,
    ExpectedResourceUtilization:
      output.ExpectedResourceUtilization !== undefined && output.ExpectedResourceUtilization !== null
        ? deserializeAws_json1_1ResourceUtilization(output.ExpectedResourceUtilization, context)
        : undefined,
    ResourceDetails:
      output.ResourceDetails !== undefined && output.ResourceDetails !== null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetInstancesList = (output: any, context: __SerdeContext): TargetInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetInstance(entry, context);
    });
};

const deserializeAws_json1_1TerminateRecommendationDetail = (
  output: any,
  context: __SerdeContext
): TerminateRecommendationDetail => {
  return {
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    EstimatedMonthlySavings:
      output.EstimatedMonthlySavings !== undefined && output.EstimatedMonthlySavings !== null
        ? output.EstimatedMonthlySavings
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnknownMonitorException = (
  output: any,
  context: __SerdeContext
): UnknownMonitorException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UnknownSubscriptionException = (
  output: any,
  context: __SerdeContext
): UnknownSubscriptionException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UnresolvableUsageUnitException = (
  output: any,
  context: __SerdeContext
): UnresolvableUsageUnitException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateAnomalyMonitorResponse = (
  output: any,
  context: __SerdeContext
): UpdateAnomalyMonitorResponse => {
  return {
    MonitorArn: output.MonitorArn !== undefined && output.MonitorArn !== null ? output.MonitorArn : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateAnomalySubscriptionResponse => {
  return {
    SubscriptionArn:
      output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null ? output.CostCategoryArn : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null ? output.EffectiveStart : undefined,
  } as any;
};

const deserializeAws_json1_1UtilizationByTime = (output: any, context: __SerdeContext): UtilizationByTime => {
  return {
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1ReservationUtilizationGroups(output.Groups, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UtilizationsByTime = (output: any, context: __SerdeContext): UtilizationByTime[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UtilizationByTime(entry, context);
    });
};

const deserializeAws_json1_1Values = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
