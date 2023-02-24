// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput } from "../commands/GetCostCategoriesCommand";
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
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
} from "../commands/ListCostAllocationTagsCommand";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "../commands/ListCostCategoryDefinitionsCommand";
import {
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "../commands/ListSavingsPlansPurchaseRecommendationGenerationCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "../commands/ProvideAnomalyFeedbackCommand";
import {
  StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  StartSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "../commands/StartSavingsPlansPurchaseRecommendationGenerationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "../commands/UpdateAnomalyMonitorCommand";
import {
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "../commands/UpdateAnomalySubscriptionCommand";
import {
  UpdateCostAllocationTagsStatusCommandInput,
  UpdateCostAllocationTagsStatusCommandOutput,
} from "../commands/UpdateCostAllocationTagsStatusCommand";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "../commands/UpdateCostCategoryDefinitionCommand";
import { CostExplorerServiceException as __BaseException } from "../models/CostExplorerServiceException";
import {
  Anomaly,
  AnomalyDateInterval,
  AnomalyMonitor,
  AnomalyScore,
  AnomalySubscription,
  BillExpirationException,
  CostAllocationTag,
  CostAllocationTagStatusEntry,
  CostCategory,
  CostCategoryInheritedValueDimension,
  CostCategoryProcessingStatus,
  CostCategoryReference,
  CostCategoryRule,
  CostCategorySplitChargeRule,
  CostCategorySplitChargeRuleParameter,
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
  DiskResourceUtilization,
  EBSResourceUtilization,
  EC2InstanceDetails,
  EC2ResourceDetails,
  EC2ResourceUtilization,
  EC2Specification,
  ElastiCacheInstanceDetails,
  ESInstanceDetails,
  Expression,
  FindingReasonCode,
  ForecastResult,
  GenerationExistsException,
  GenerationSummary,
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
  GetCostCategoriesRequest,
  GetCostCategoriesResponse,
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
  ListCostAllocationTagsRequest,
  ListCostAllocationTagsResponse,
  ListCostCategoryDefinitionsRequest,
  ListCostCategoryDefinitionsResponse,
  ListSavingsPlansPurchaseRecommendationGenerationRequest,
  ListSavingsPlansPurchaseRecommendationGenerationResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MatchOption,
  MetricValue,
  ModifyRecommendationDetail,
  NetworkResourceUtilization,
  PlatformDifference,
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
  ResourceTag,
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
  SavingsPlansDataType,
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
  SortDefinition,
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  StartSavingsPlansPurchaseRecommendationGenerationResponse,
  Subscriber,
  TagResourceRequest,
  TagResourceResponse,
  TagValues,
  TargetInstance,
  TerminateRecommendationDetail,
  TooManyTagsException,
  TotalImpactFilter,
  UnknownMonitorException,
  UnknownSubscriptionException,
  UnresolvableUsageUnitException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAnomalyMonitorRequest,
  UpdateAnomalyMonitorResponse,
  UpdateAnomalySubscriptionRequest,
  UpdateAnomalySubscriptionResponse,
  UpdateCostAllocationTagsStatusError,
  UpdateCostAllocationTagsStatusRequest,
  UpdateCostAllocationTagsStatusResponse,
  UpdateCostCategoryDefinitionRequest,
  UpdateCostCategoryDefinitionResponse,
  UtilizationByTime,
} from "../models/models_0";

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

export const serializeAws_json1_1GetCostCategoriesCommand = async (
  input: GetCostCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostCategories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCostCategoriesRequest(input, context));
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

export const serializeAws_json1_1ListCostAllocationTagsCommand = async (
  input: ListCostAllocationTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListCostAllocationTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCostAllocationTagsRequest(input, context));
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

export const serializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommand = async (
  input: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
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

export const serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand = async (
  input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
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

export const serializeAws_json1_1UpdateCostAllocationTagsStatusCommand = async (
  input: UpdateCostAllocationTagsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateCostAllocationTagsStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCostAllocationTagsStatusRequest(input, context));
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      throw await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      throw await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      throw await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      throw await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCostCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCostCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostCategoriesResponse(data, context);
  const response: GetCostCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      throw await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      throw await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      throw await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnresolvableUsageUnitException":
    case "com.amazonaws.costexplorer#UnresolvableUsageUnitException":
      throw await deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCostAllocationTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostAllocationTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCostAllocationTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCostAllocationTagsResponse(data, context);
  const response: ListCostAllocationTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCostAllocationTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostAllocationTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSavingsPlansPurchaseRecommendationGenerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationResponse(data, context);
  const response: ListSavingsPlansPurchaseRecommendationGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSavingsPlansPurchaseRecommendationGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSavingsPlansPurchaseRecommendationGenerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationResponse(data, context);
  const response: StartSavingsPlansPurchaseRecommendationGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSavingsPlansPurchaseRecommendationGenerationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GenerationExistsException":
    case "com.amazonaws.costexplorer#GenerationExistsException":
      throw await deserializeAws_json1_1GenerationExistsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.costexplorer#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await deserializeAws_json1_1UnknownMonitorExceptionResponse(parsedOutput, context);
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      throw await deserializeAws_json1_1UnknownSubscriptionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateCostAllocationTagsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostAllocationTagsStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCostAllocationTagsStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCostAllocationTagsStatusResponse(data, context);
  const response: UpdateCostAllocationTagsStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCostAllocationTagsStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostAllocationTagsStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1BillExpirationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BillExpirationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BillExpirationException(body, context);
  const exception = new BillExpirationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DataUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataUnavailableException(body, context);
  const exception = new DataUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1GenerationExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GenerationExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GenerationExistsException(body, context);
  const exception = new GenerationExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RequestChangedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestChangedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestChangedException(body, context);
  const exception = new RequestChangedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnknownMonitorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownMonitorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnknownMonitorException(body, context);
  const exception = new UnknownMonitorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnknownSubscriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownSubscriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnknownSubscriptionException(body, context);
  const exception = new UnknownSubscriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnresolvableUsageUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnresolvableUsageUnitException(body, context);
  const exception = new UnresolvableUsageUnitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AnomalyDateInterval = (input: AnomalyDateInterval, context: __SerdeContext): any => {
  return {
    ...(input.EndDate != null && { EndDate: input.EndDate }),
    ...(input.StartDate != null && { StartDate: input.StartDate }),
  };
};

const serializeAws_json1_1AnomalyMonitor = (input: AnomalyMonitor, context: __SerdeContext): any => {
  return {
    ...(input.CreationDate != null && { CreationDate: input.CreationDate }),
    ...(input.DimensionalValueCount != null && { DimensionalValueCount: input.DimensionalValueCount }),
    ...(input.LastEvaluatedDate != null && { LastEvaluatedDate: input.LastEvaluatedDate }),
    ...(input.LastUpdatedDate != null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.MonitorDimension != null && { MonitorDimension: input.MonitorDimension }),
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
    ...(input.MonitorSpecification != null && {
      MonitorSpecification: serializeAws_json1_1Expression(input.MonitorSpecification, context),
    }),
    ...(input.MonitorType != null && { MonitorType: input.MonitorType }),
  };
};

const serializeAws_json1_1AnomalySubscription = (input: AnomalySubscription, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Frequency != null && { Frequency: input.Frequency }),
    ...(input.MonitorArnList != null && {
      MonitorArnList: serializeAws_json1_1MonitorArnList(input.MonitorArnList, context),
    }),
    ...(input.Subscribers != null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
    ...(input.SubscriptionArn != null && { SubscriptionArn: input.SubscriptionArn }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdExpression != null && {
      ThresholdExpression: serializeAws_json1_1Expression(input.ThresholdExpression, context),
    }),
  };
};

const serializeAws_json1_1CostAllocationTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CostAllocationTagStatusEntry = (
  input: CostAllocationTagStatusEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
  };
};

const serializeAws_json1_1CostAllocationTagStatusList = (
  input: CostAllocationTagStatusEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CostAllocationTagStatusEntry(entry, context);
    });
};

const serializeAws_json1_1CostCategoryInheritedValueDimension = (
  input: CostCategoryInheritedValueDimension,
  context: __SerdeContext
): any => {
  return {
    ...(input.DimensionKey != null && { DimensionKey: input.DimensionKey }),
    ...(input.DimensionName != null && { DimensionName: input.DimensionName }),
  };
};

const serializeAws_json1_1CostCategoryRule = (input: CostCategoryRule, context: __SerdeContext): any => {
  return {
    ...(input.InheritedValue != null && {
      InheritedValue: serializeAws_json1_1CostCategoryInheritedValueDimension(input.InheritedValue, context),
    }),
    ...(input.Rule != null && { Rule: serializeAws_json1_1Expression(input.Rule, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CostCategoryRulesList = (input: CostCategoryRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CostCategoryRule(entry, context);
    });
};

const serializeAws_json1_1CostCategorySplitChargeRule = (
  input: CostCategorySplitChargeRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Method != null && { Method: input.Method }),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1CostCategorySplitChargeRuleParametersList(input.Parameters, context),
    }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Targets != null && {
      Targets: serializeAws_json1_1CostCategorySplitChargeRuleTargetsList(input.Targets, context),
    }),
  };
};

const serializeAws_json1_1CostCategorySplitChargeRuleParameter = (
  input: CostCategorySplitChargeRuleParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && {
      Values: serializeAws_json1_1CostCategorySplitChargeRuleParameterValuesList(input.Values, context),
    }),
  };
};

const serializeAws_json1_1CostCategorySplitChargeRuleParametersList = (
  input: CostCategorySplitChargeRuleParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CostCategorySplitChargeRuleParameter(entry, context);
    });
};

const serializeAws_json1_1CostCategorySplitChargeRuleParameterValuesList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CostCategorySplitChargeRulesList = (
  input: CostCategorySplitChargeRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CostCategorySplitChargeRule(entry, context);
    });
};

const serializeAws_json1_1CostCategorySplitChargeRuleTargetsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CostCategoryValues = (input: CostCategoryValues, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MatchOptions != null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
    ...(input.Values != null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1CreateAnomalyMonitorRequest = (
  input: CreateAnomalyMonitorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalyMonitor != null && {
      AnomalyMonitor: serializeAws_json1_1AnomalyMonitor(input.AnomalyMonitor, context),
    }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_json1_1ResourceTagList(input.ResourceTags, context),
    }),
  };
};

const serializeAws_json1_1CreateAnomalySubscriptionRequest = (
  input: CreateAnomalySubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalySubscription != null && {
      AnomalySubscription: serializeAws_json1_1AnomalySubscription(input.AnomalySubscription, context),
    }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_json1_1ResourceTagList(input.ResourceTags, context),
    }),
  };
};

const serializeAws_json1_1CreateCostCategoryDefinitionRequest = (
  input: CreateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue != null && { DefaultValue: input.DefaultValue }),
    ...(input.EffectiveStart != null && { EffectiveStart: input.EffectiveStart }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_json1_1ResourceTagList(input.ResourceTags, context),
    }),
    ...(input.RuleVersion != null && { RuleVersion: input.RuleVersion }),
    ...(input.Rules != null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }),
    ...(input.SplitChargeRules != null && {
      SplitChargeRules: serializeAws_json1_1CostCategorySplitChargeRulesList(input.SplitChargeRules, context),
    }),
  };
};

const serializeAws_json1_1DateInterval = (input: DateInterval, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: input.End }),
    ...(input.Start != null && { Start: input.Start }),
  };
};

const serializeAws_json1_1DeleteAnomalyMonitorRequest = (
  input: DeleteAnomalyMonitorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
  };
};

const serializeAws_json1_1DeleteAnomalySubscriptionRequest = (
  input: DeleteAnomalySubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubscriptionArn != null && { SubscriptionArn: input.SubscriptionArn }),
  };
};

const serializeAws_json1_1DeleteCostCategoryDefinitionRequest = (
  input: DeleteCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn != null && { CostCategoryArn: input.CostCategoryArn }),
  };
};

const serializeAws_json1_1DescribeCostCategoryDefinitionRequest = (
  input: DescribeCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn != null && { CostCategoryArn: input.CostCategoryArn }),
    ...(input.EffectiveOn != null && { EffectiveOn: input.EffectiveOn }),
  };
};

const serializeAws_json1_1DimensionValues = (input: DimensionValues, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MatchOptions != null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
    ...(input.Values != null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1EC2Specification = (input: EC2Specification, context: __SerdeContext): any => {
  return {
    ...(input.OfferingClass != null && { OfferingClass: input.OfferingClass }),
  };
};

const serializeAws_json1_1Expression = (input: Expression, context: __SerdeContext): any => {
  return {
    ...(input.And != null && { And: serializeAws_json1_1Expressions(input.And, context) }),
    ...(input.CostCategories != null && {
      CostCategories: serializeAws_json1_1CostCategoryValues(input.CostCategories, context),
    }),
    ...(input.Dimensions != null && { Dimensions: serializeAws_json1_1DimensionValues(input.Dimensions, context) }),
    ...(input.Not != null && { Not: serializeAws_json1_1Expression(input.Not, context) }),
    ...(input.Or != null && { Or: serializeAws_json1_1Expressions(input.Or, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagValues(input.Tags, context) }),
  };
};

const serializeAws_json1_1Expressions = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Expression(entry, context);
    });
};

const serializeAws_json1_1GetAnomaliesRequest = (input: GetAnomaliesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DateInterval != null && {
      DateInterval: serializeAws_json1_1AnomalyDateInterval(input.DateInterval, context),
    }),
    ...(input.Feedback != null && { Feedback: input.Feedback }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TotalImpact != null && {
      TotalImpact: serializeAws_json1_1TotalImpactFilter(input.TotalImpact, context),
    }),
  };
};

const serializeAws_json1_1GetAnomalyMonitorsRequest = (
  input: GetAnomalyMonitorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArnList != null && { MonitorArnList: serializeAws_json1_1Values(input.MonitorArnList, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
  };
};

const serializeAws_json1_1GetAnomalySubscriptionsRequest = (
  input: GetAnomalySubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SubscriptionArnList != null && {
      SubscriptionArnList: serializeAws_json1_1Values(input.SubscriptionArnList, context),
    }),
  };
};

const serializeAws_json1_1GetCostAndUsageRequest = (input: GetCostAndUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetCostAndUsageWithResourcesRequest = (
  input: GetCostAndUsageWithResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetCostCategoriesRequest = (
  input: GetCostCategoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryName != null && { CostCategoryName: input.CostCategoryName }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString != null && { SearchString: input.SearchString }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetCostForecastRequest = (input: GetCostForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel != null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetDimensionValuesRequest = (
  input: GetDimensionValuesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Context != null && { Context: input.Context }),
    ...(input.Dimension != null && { Dimension: input.Dimension }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString != null && { SearchString: input.SearchString }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetReservationCoverageRequest = (
  input: GetReservationCoverageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetReservationPurchaseRecommendationRequest = (
  input: GetReservationPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AccountScope != null && { AccountScope: input.AccountScope }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.LookbackPeriodInDays != null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PaymentOption != null && { PaymentOption: input.PaymentOption }),
    ...(input.Service != null && { Service: input.Service }),
    ...(input.ServiceSpecification != null && {
      ServiceSpecification: serializeAws_json1_1ServiceSpecification(input.ServiceSpecification, context),
    }),
    ...(input.TermInYears != null && { TermInYears: input.TermInYears }),
  };
};

const serializeAws_json1_1GetReservationUtilizationRequest = (
  input: GetReservationUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetRightsizingRecommendationRequest = (
  input: GetRightsizingRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configuration != null && {
      Configuration: serializeAws_json1_1RightsizingRecommendationConfiguration(input.Configuration, context),
    }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.Service != null && { Service: input.Service }),
  };
};

const serializeAws_json1_1GetSavingsPlansCoverageRequest = (
  input: GetSavingsPlansCoverageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: serializeAws_json1_1MetricNames(input.Metrics, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = (
  input: GetSavingsPlansPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountScope != null && { AccountScope: input.AccountScope }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.LookbackPeriodInDays != null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PaymentOption != null && { PaymentOption: input.PaymentOption }),
    ...(input.SavingsPlansType != null && { SavingsPlansType: input.SavingsPlansType }),
    ...(input.TermInYears != null && { TermInYears: input.TermInYears }),
  };
};

const serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = (
  input: GetSavingsPlansUtilizationDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataType != null && { DataType: serializeAws_json1_1SavingsPlansDataTypes(input.DataType, context) }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetSavingsPlansUtilizationRequest = (
  input: GetSavingsPlansUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString != null && { SearchString: input.SearchString }),
    ...(input.SortBy != null && { SortBy: serializeAws_json1_1SortDefinitions(input.SortBy, context) }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GetUsageForecastRequest = (input: GetUsageForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel != null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1GroupDefinition = (input: GroupDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GroupDefinitions = (input: GroupDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GroupDefinition(entry, context);
    });
};

const serializeAws_json1_1ListCostAllocationTagsRequest = (
  input: ListCostAllocationTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1CostAllocationTagKeyList(input.TagKeys, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ListCostCategoryDefinitionsRequest = (
  input: ListCostCategoryDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EffectiveOn != null && { EffectiveOn: input.EffectiveOn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationRequest = (
  input: ListSavingsPlansPurchaseRecommendationGenerationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GenerationStatus != null && { GenerationStatus: input.GenerationStatus }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.RecommendationIds != null && {
      RecommendationIds: serializeAws_json1_1RecommendationIdList(input.RecommendationIds, context),
    }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1MatchOptions = (input: (MatchOption | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MetricNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MonitorArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProvideAnomalyFeedbackRequest = (
  input: ProvideAnomalyFeedbackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnomalyId != null && { AnomalyId: input.AnomalyId }),
    ...(input.Feedback != null && { Feedback: input.Feedback }),
  };
};

const serializeAws_json1_1RecommendationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ResourceTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResourceTagList = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ResourceTag(entry, context);
    });
};

const serializeAws_json1_1RightsizingRecommendationConfiguration = (
  input: RightsizingRecommendationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BenefitsConsidered != null && { BenefitsConsidered: input.BenefitsConsidered }),
    ...(input.RecommendationTarget != null && { RecommendationTarget: input.RecommendationTarget }),
  };
};

const serializeAws_json1_1SavingsPlansDataTypes = (
  input: (SavingsPlansDataType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ServiceSpecification = (input: ServiceSpecification, context: __SerdeContext): any => {
  return {
    ...(input.EC2Specification != null && {
      EC2Specification: serializeAws_json1_1EC2Specification(input.EC2Specification, context),
    }),
  };
};

const serializeAws_json1_1SortDefinition = (input: SortDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1SortDefinitions = (input: SortDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SortDefinition(entry, context);
    });
};

const serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationRequest = (
  input: StartSavingsPlansPurchaseRecommendationGenerationRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1Subscriber = (input: Subscriber, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1Subscribers = (input: Subscriber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Subscriber(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_json1_1ResourceTagList(input.ResourceTags, context),
    }),
  };
};

const serializeAws_json1_1TagValues = (input: TagValues, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MatchOptions != null && { MatchOptions: serializeAws_json1_1MatchOptions(input.MatchOptions, context) }),
    ...(input.Values != null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1TotalImpactFilter = (input: TotalImpactFilter, context: __SerdeContext): any => {
  return {
    ...(input.EndValue != null && { EndValue: __serializeFloat(input.EndValue) }),
    ...(input.NumericOperator != null && { NumericOperator: input.NumericOperator }),
    ...(input.StartValue != null && { StartValue: __serializeFloat(input.StartValue) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceTagKeys != null && {
      ResourceTagKeys: serializeAws_json1_1ResourceTagKeyList(input.ResourceTagKeys, context),
    }),
  };
};

const serializeAws_json1_1UpdateAnomalyMonitorRequest = (
  input: UpdateAnomalyMonitorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
  };
};

const serializeAws_json1_1UpdateAnomalySubscriptionRequest = (
  input: UpdateAnomalySubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Frequency != null && { Frequency: input.Frequency }),
    ...(input.MonitorArnList != null && {
      MonitorArnList: serializeAws_json1_1MonitorArnList(input.MonitorArnList, context),
    }),
    ...(input.Subscribers != null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
    ...(input.SubscriptionArn != null && { SubscriptionArn: input.SubscriptionArn }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdExpression != null && {
      ThresholdExpression: serializeAws_json1_1Expression(input.ThresholdExpression, context),
    }),
  };
};

const serializeAws_json1_1UpdateCostAllocationTagsStatusRequest = (
  input: UpdateCostAllocationTagsStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostAllocationTagsStatus != null && {
      CostAllocationTagsStatus: serializeAws_json1_1CostAllocationTagStatusList(
        input.CostAllocationTagsStatus,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateCostCategoryDefinitionRequest = (
  input: UpdateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn != null && { CostCategoryArn: input.CostCategoryArn }),
    ...(input.DefaultValue != null && { DefaultValue: input.DefaultValue }),
    ...(input.EffectiveStart != null && { EffectiveStart: input.EffectiveStart }),
    ...(input.RuleVersion != null && { RuleVersion: input.RuleVersion }),
    ...(input.Rules != null && { Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context) }),
    ...(input.SplitChargeRules != null && {
      SplitChargeRules: serializeAws_json1_1CostCategorySplitChargeRulesList(input.SplitChargeRules, context),
    }),
  };
};

const serializeAws_json1_1Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1Anomalies = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Anomaly(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return {
    AnomalyEndDate: __expectString(output.AnomalyEndDate),
    AnomalyId: __expectString(output.AnomalyId),
    AnomalyScore:
      output.AnomalyScore != null ? deserializeAws_json1_1AnomalyScore(output.AnomalyScore, context) : undefined,
    AnomalyStartDate: __expectString(output.AnomalyStartDate),
    DimensionValue: __expectString(output.DimensionValue),
    Feedback: __expectString(output.Feedback),
    Impact: output.Impact != null ? deserializeAws_json1_1Impact(output.Impact, context) : undefined,
    MonitorArn: __expectString(output.MonitorArn),
    RootCauses: output.RootCauses != null ? deserializeAws_json1_1RootCauses(output.RootCauses, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AnomalyMonitor = (output: any, context: __SerdeContext): AnomalyMonitor => {
  return {
    CreationDate: __expectString(output.CreationDate),
    DimensionalValueCount: __expectInt32(output.DimensionalValueCount),
    LastEvaluatedDate: __expectString(output.LastEvaluatedDate),
    LastUpdatedDate: __expectString(output.LastUpdatedDate),
    MonitorArn: __expectString(output.MonitorArn),
    MonitorDimension: __expectString(output.MonitorDimension),
    MonitorName: __expectString(output.MonitorName),
    MonitorSpecification:
      output.MonitorSpecification != null
        ? deserializeAws_json1_1Expression(output.MonitorSpecification, context)
        : undefined,
    MonitorType: __expectString(output.MonitorType),
  } as any;
};

const deserializeAws_json1_1AnomalyMonitors = (output: any, context: __SerdeContext): AnomalyMonitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AnomalyMonitor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AnomalyScore = (output: any, context: __SerdeContext): AnomalyScore => {
  return {
    CurrentScore: __limitedParseDouble(output.CurrentScore),
    MaxScore: __limitedParseDouble(output.MaxScore),
  } as any;
};

const deserializeAws_json1_1AnomalySubscription = (output: any, context: __SerdeContext): AnomalySubscription => {
  return {
    AccountId: __expectString(output.AccountId),
    Frequency: __expectString(output.Frequency),
    MonitorArnList:
      output.MonitorArnList != null ? deserializeAws_json1_1MonitorArnList(output.MonitorArnList, context) : undefined,
    Subscribers:
      output.Subscribers != null ? deserializeAws_json1_1Subscribers(output.Subscribers, context) : undefined,
    SubscriptionArn: __expectString(output.SubscriptionArn),
    SubscriptionName: __expectString(output.SubscriptionName),
    Threshold: __limitedParseDouble(output.Threshold),
    ThresholdExpression:
      output.ThresholdExpression != null
        ? deserializeAws_json1_1Expression(output.ThresholdExpression, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AnomalySubscriptions = (output: any, context: __SerdeContext): AnomalySubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AnomalySubscription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Attributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1BillExpirationException = (
  output: any,
  context: __SerdeContext
): BillExpirationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CostAllocationTag = (output: any, context: __SerdeContext): CostAllocationTag => {
  return {
    Status: __expectString(output.Status),
    TagKey: __expectString(output.TagKey),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1CostAllocationTagList = (output: any, context: __SerdeContext): CostAllocationTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostAllocationTag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CostCategory = (output: any, context: __SerdeContext): CostCategory => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    DefaultValue: __expectString(output.DefaultValue),
    EffectiveEnd: __expectString(output.EffectiveEnd),
    EffectiveStart: __expectString(output.EffectiveStart),
    Name: __expectString(output.Name),
    ProcessingStatus:
      output.ProcessingStatus != null
        ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
        : undefined,
    RuleVersion: __expectString(output.RuleVersion),
    Rules: output.Rules != null ? deserializeAws_json1_1CostCategoryRulesList(output.Rules, context) : undefined,
    SplitChargeRules:
      output.SplitChargeRules != null
        ? deserializeAws_json1_1CostCategorySplitChargeRulesList(output.SplitChargeRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryInheritedValueDimension = (
  output: any,
  context: __SerdeContext
): CostCategoryInheritedValueDimension => {
  return {
    DimensionKey: __expectString(output.DimensionKey),
    DimensionName: __expectString(output.DimensionName),
  } as any;
};

const deserializeAws_json1_1CostCategoryNamesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CostCategoryProcessingStatus = (
  output: any,
  context: __SerdeContext
): CostCategoryProcessingStatus => {
  return {
    Component: __expectString(output.Component),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1CostCategoryProcessingStatusList = (
  output: any,
  context: __SerdeContext
): CostCategoryProcessingStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategoryProcessingStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CostCategoryReference = (output: any, context: __SerdeContext): CostCategoryReference => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    DefaultValue: __expectString(output.DefaultValue),
    EffectiveEnd: __expectString(output.EffectiveEnd),
    EffectiveStart: __expectString(output.EffectiveStart),
    Name: __expectString(output.Name),
    NumberOfRules: __expectInt32(output.NumberOfRules),
    ProcessingStatus:
      output.ProcessingStatus != null
        ? deserializeAws_json1_1CostCategoryProcessingStatusList(output.ProcessingStatus, context)
        : undefined,
    Values: output.Values != null ? deserializeAws_json1_1CostCategoryValuesList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryReferencesList = (
  output: any,
  context: __SerdeContext
): CostCategoryReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategoryReference(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CostCategoryRule = (output: any, context: __SerdeContext): CostCategoryRule => {
  return {
    InheritedValue:
      output.InheritedValue != null
        ? deserializeAws_json1_1CostCategoryInheritedValueDimension(output.InheritedValue, context)
        : undefined,
    Rule: output.Rule != null ? deserializeAws_json1_1Expression(output.Rule, context) : undefined,
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1CostCategoryRulesList = (output: any, context: __SerdeContext): CostCategoryRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategoryRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CostCategorySplitChargeRule = (
  output: any,
  context: __SerdeContext
): CostCategorySplitChargeRule => {
  return {
    Method: __expectString(output.Method),
    Parameters:
      output.Parameters != null
        ? deserializeAws_json1_1CostCategorySplitChargeRuleParametersList(output.Parameters, context)
        : undefined,
    Source: __expectString(output.Source),
    Targets:
      output.Targets != null
        ? deserializeAws_json1_1CostCategorySplitChargeRuleTargetsList(output.Targets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategorySplitChargeRuleParameter = (
  output: any,
  context: __SerdeContext
): CostCategorySplitChargeRuleParameter => {
  return {
    Type: __expectString(output.Type),
    Values:
      output.Values != null
        ? deserializeAws_json1_1CostCategorySplitChargeRuleParameterValuesList(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategorySplitChargeRuleParametersList = (
  output: any,
  context: __SerdeContext
): CostCategorySplitChargeRuleParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategorySplitChargeRuleParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CostCategorySplitChargeRuleParameterValuesList = (
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

const deserializeAws_json1_1CostCategorySplitChargeRulesList = (
  output: any,
  context: __SerdeContext
): CostCategorySplitChargeRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CostCategorySplitChargeRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CostCategorySplitChargeRuleTargetsList = (
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

const deserializeAws_json1_1CostCategoryValues = (output: any, context: __SerdeContext): CostCategoryValues => {
  return {
    Key: __expectString(output.Key),
    MatchOptions:
      output.MatchOptions != null ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context) : undefined,
    Values: output.Values != null ? deserializeAws_json1_1Values(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CostCategoryValuesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Coverage = (output: any, context: __SerdeContext): Coverage => {
  return {
    CoverageCost:
      output.CoverageCost != null ? deserializeAws_json1_1CoverageCost(output.CoverageCost, context) : undefined,
    CoverageHours:
      output.CoverageHours != null ? deserializeAws_json1_1CoverageHours(output.CoverageHours, context) : undefined,
    CoverageNormalizedUnits:
      output.CoverageNormalizedUnits != null
        ? deserializeAws_json1_1CoverageNormalizedUnits(output.CoverageNormalizedUnits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CoverageByTime = (output: any, context: __SerdeContext): CoverageByTime => {
  return {
    Groups: output.Groups != null ? deserializeAws_json1_1ReservationCoverageGroups(output.Groups, context) : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? deserializeAws_json1_1Coverage(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CoverageCost = (output: any, context: __SerdeContext): CoverageCost => {
  return {
    OnDemandCost: __expectString(output.OnDemandCost),
  } as any;
};

const deserializeAws_json1_1CoverageHours = (output: any, context: __SerdeContext): CoverageHours => {
  return {
    CoverageHoursPercentage: __expectString(output.CoverageHoursPercentage),
    OnDemandHours: __expectString(output.OnDemandHours),
    ReservedHours: __expectString(output.ReservedHours),
    TotalRunningHours: __expectString(output.TotalRunningHours),
  } as any;
};

const deserializeAws_json1_1CoverageNormalizedUnits = (
  output: any,
  context: __SerdeContext
): CoverageNormalizedUnits => {
  return {
    CoverageNormalizedUnitsPercentage: __expectString(output.CoverageNormalizedUnitsPercentage),
    OnDemandNormalizedUnits: __expectString(output.OnDemandNormalizedUnits),
    ReservedNormalizedUnits: __expectString(output.ReservedNormalizedUnits),
    TotalRunningNormalizedUnits: __expectString(output.TotalRunningNormalizedUnits),
  } as any;
};

const deserializeAws_json1_1CoveragesByTime = (output: any, context: __SerdeContext): CoverageByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CoverageByTime(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAnomalyMonitorResponse = (
  output: any,
  context: __SerdeContext
): CreateAnomalyMonitorResponse => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
  } as any;
};

const deserializeAws_json1_1CreateAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateAnomalySubscriptionResponse => {
  return {
    SubscriptionArn: __expectString(output.SubscriptionArn),
  } as any;
};

const deserializeAws_json1_1CreateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    EffectiveStart: __expectString(output.EffectiveStart),
  } as any;
};

const deserializeAws_json1_1CurrentInstance = (output: any, context: __SerdeContext): CurrentInstance => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    InstanceName: __expectString(output.InstanceName),
    MonthlyCost: __expectString(output.MonthlyCost),
    OnDemandHoursInLookbackPeriod: __expectString(output.OnDemandHoursInLookbackPeriod),
    ReservationCoveredHoursInLookbackPeriod: __expectString(output.ReservationCoveredHoursInLookbackPeriod),
    ResourceDetails:
      output.ResourceDetails != null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceUtilization:
      output.ResourceUtilization != null
        ? deserializeAws_json1_1ResourceUtilization(output.ResourceUtilization, context)
        : undefined,
    SavingsPlansCoveredHoursInLookbackPeriod: __expectString(output.SavingsPlansCoveredHoursInLookbackPeriod),
    Tags: output.Tags != null ? deserializeAws_json1_1TagValuesList(output.Tags, context) : undefined,
    TotalRunningHoursInLookbackPeriod: __expectString(output.TotalRunningHoursInLookbackPeriod),
  } as any;
};

const deserializeAws_json1_1DataUnavailableException = (
  output: any,
  context: __SerdeContext
): DataUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DateInterval = (output: any, context: __SerdeContext): DateInterval => {
  return {
    End: __expectString(output.End),
    Start: __expectString(output.Start),
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
    CostCategoryArn: __expectString(output.CostCategoryArn),
    EffectiveEnd: __expectString(output.EffectiveEnd),
  } as any;
};

const deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCostCategoryDefinitionResponse => {
  return {
    CostCategory:
      output.CostCategory != null ? deserializeAws_json1_1CostCategory(output.CostCategory, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValues = (output: any, context: __SerdeContext): DimensionValues => {
  return {
    Key: __expectString(output.Key),
    MatchOptions:
      output.MatchOptions != null ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context) : undefined,
    Values: output.Values != null ? deserializeAws_json1_1Values(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValuesWithAttributes = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_1Attributes(output.Attributes, context) : undefined,
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1DimensionValuesWithAttributesList = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionValuesWithAttributes(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DiskResourceUtilization = (
  output: any,
  context: __SerdeContext
): DiskResourceUtilization => {
  return {
    DiskReadBytesPerSecond: __expectString(output.DiskReadBytesPerSecond),
    DiskReadOpsPerSecond: __expectString(output.DiskReadOpsPerSecond),
    DiskWriteBytesPerSecond: __expectString(output.DiskWriteBytesPerSecond),
    DiskWriteOpsPerSecond: __expectString(output.DiskWriteOpsPerSecond),
  } as any;
};

const deserializeAws_json1_1EBSResourceUtilization = (output: any, context: __SerdeContext): EBSResourceUtilization => {
  return {
    EbsReadBytesPerSecond: __expectString(output.EbsReadBytesPerSecond),
    EbsReadOpsPerSecond: __expectString(output.EbsReadOpsPerSecond),
    EbsWriteBytesPerSecond: __expectString(output.EbsWriteBytesPerSecond),
    EbsWriteOpsPerSecond: __expectString(output.EbsWriteOpsPerSecond),
  } as any;
};

const deserializeAws_json1_1EC2InstanceDetails = (output: any, context: __SerdeContext): EC2InstanceDetails => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    Family: __expectString(output.Family),
    InstanceType: __expectString(output.InstanceType),
    Platform: __expectString(output.Platform),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
    Tenancy: __expectString(output.Tenancy),
  } as any;
};

const deserializeAws_json1_1EC2ResourceDetails = (output: any, context: __SerdeContext): EC2ResourceDetails => {
  return {
    HourlyOnDemandRate: __expectString(output.HourlyOnDemandRate),
    InstanceType: __expectString(output.InstanceType),
    Memory: __expectString(output.Memory),
    NetworkPerformance: __expectString(output.NetworkPerformance),
    Platform: __expectString(output.Platform),
    Region: __expectString(output.Region),
    Sku: __expectString(output.Sku),
    Storage: __expectString(output.Storage),
    Vcpu: __expectString(output.Vcpu),
  } as any;
};

const deserializeAws_json1_1EC2ResourceUtilization = (output: any, context: __SerdeContext): EC2ResourceUtilization => {
  return {
    DiskResourceUtilization:
      output.DiskResourceUtilization != null
        ? deserializeAws_json1_1DiskResourceUtilization(output.DiskResourceUtilization, context)
        : undefined,
    EBSResourceUtilization:
      output.EBSResourceUtilization != null
        ? deserializeAws_json1_1EBSResourceUtilization(output.EBSResourceUtilization, context)
        : undefined,
    MaxCpuUtilizationPercentage: __expectString(output.MaxCpuUtilizationPercentage),
    MaxMemoryUtilizationPercentage: __expectString(output.MaxMemoryUtilizationPercentage),
    MaxStorageUtilizationPercentage: __expectString(output.MaxStorageUtilizationPercentage),
    NetworkResourceUtilization:
      output.NetworkResourceUtilization != null
        ? deserializeAws_json1_1NetworkResourceUtilization(output.NetworkResourceUtilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2Specification = (output: any, context: __SerdeContext): EC2Specification => {
  return {
    OfferingClass: __expectString(output.OfferingClass),
  } as any;
};

const deserializeAws_json1_1ElastiCacheInstanceDetails = (
  output: any,
  context: __SerdeContext
): ElastiCacheInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    Family: __expectString(output.Family),
    NodeType: __expectString(output.NodeType),
    ProductDescription: __expectString(output.ProductDescription),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

const deserializeAws_json1_1ESInstanceDetails = (output: any, context: __SerdeContext): ESInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    InstanceClass: __expectString(output.InstanceClass),
    InstanceSize: __expectString(output.InstanceSize),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

const deserializeAws_json1_1Expression = (output: any, context: __SerdeContext): Expression => {
  return {
    And: output.And != null ? deserializeAws_json1_1Expressions(output.And, context) : undefined,
    CostCategories:
      output.CostCategories != null
        ? deserializeAws_json1_1CostCategoryValues(output.CostCategories, context)
        : undefined,
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1DimensionValues(output.Dimensions, context) : undefined,
    Not: output.Not != null ? deserializeAws_json1_1Expression(output.Not, context) : undefined,
    Or: output.Or != null ? deserializeAws_json1_1Expressions(output.Or, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1TagValues(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Expressions = (output: any, context: __SerdeContext): Expression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Expression(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FindingReasonCodes = (
  output: any,
  context: __SerdeContext
): (FindingReasonCode | string)[] => {
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

const deserializeAws_json1_1ForecastResult = (output: any, context: __SerdeContext): ForecastResult => {
  return {
    MeanValue: __expectString(output.MeanValue),
    PredictionIntervalLowerBound: __expectString(output.PredictionIntervalLowerBound),
    PredictionIntervalUpperBound: __expectString(output.PredictionIntervalUpperBound),
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ForecastResultsByTime = (output: any, context: __SerdeContext): ForecastResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ForecastResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GenerationExistsException = (
  output: any,
  context: __SerdeContext
): GenerationExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GenerationSummary = (output: any, context: __SerdeContext): GenerationSummary => {
  return {
    EstimatedCompletionTime: __expectString(output.EstimatedCompletionTime),
    GenerationCompletionTime: __expectString(output.GenerationCompletionTime),
    GenerationStartedTime: __expectString(output.GenerationStartedTime),
    GenerationStatus: __expectString(output.GenerationStatus),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

const deserializeAws_json1_1GenerationSummaryList = (output: any, context: __SerdeContext): GenerationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GenerationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetAnomaliesResponse = (output: any, context: __SerdeContext): GetAnomaliesResponse => {
  return {
    Anomalies: output.Anomalies != null ? deserializeAws_json1_1Anomalies(output.Anomalies, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1GetAnomalyMonitorsResponse = (
  output: any,
  context: __SerdeContext
): GetAnomalyMonitorsResponse => {
  return {
    AnomalyMonitors:
      output.AnomalyMonitors != null
        ? deserializeAws_json1_1AnomalyMonitors(output.AnomalyMonitors, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1GetAnomalySubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): GetAnomalySubscriptionsResponse => {
  return {
    AnomalySubscriptions:
      output.AnomalySubscriptions != null
        ? deserializeAws_json1_1AnomalySubscriptions(output.AnomalySubscriptions, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1GetCostAndUsageResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageResponse => {
  return {
    DimensionValueAttributes:
      output.DimensionValueAttributes != null
        ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
        : undefined,
    GroupDefinitions:
      output.GroupDefinitions != null
        ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ResultsByTime:
      output.ResultsByTime != null ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageWithResourcesResponse => {
  return {
    DimensionValueAttributes:
      output.DimensionValueAttributes != null
        ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
        : undefined,
    GroupDefinitions:
      output.GroupDefinitions != null
        ? deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ResultsByTime:
      output.ResultsByTime != null ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCostCategoriesResponse = (
  output: any,
  context: __SerdeContext
): GetCostCategoriesResponse => {
  return {
    CostCategoryNames:
      output.CostCategoryNames != null
        ? deserializeAws_json1_1CostCategoryNamesList(output.CostCategoryNames, context)
        : undefined,
    CostCategoryValues:
      output.CostCategoryValues != null
        ? deserializeAws_json1_1CostCategoryValuesList(output.CostCategoryValues, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ReturnSize: __expectInt32(output.ReturnSize),
    TotalSize: __expectInt32(output.TotalSize),
  } as any;
};

const deserializeAws_json1_1GetCostForecastResponse = (
  output: any,
  context: __SerdeContext
): GetCostForecastResponse => {
  return {
    ForecastResultsByTime:
      output.ForecastResultsByTime != null
        ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
        : undefined,
    Total: output.Total != null ? deserializeAws_json1_1MetricValue(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDimensionValuesResponse = (
  output: any,
  context: __SerdeContext
): GetDimensionValuesResponse => {
  return {
    DimensionValues:
      output.DimensionValues != null
        ? deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValues, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ReturnSize: __expectInt32(output.ReturnSize),
    TotalSize: __expectInt32(output.TotalSize),
  } as any;
};

const deserializeAws_json1_1GetReservationCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetReservationCoverageResponse => {
  return {
    CoveragesByTime:
      output.CoveragesByTime != null
        ? deserializeAws_json1_1CoveragesByTime(output.CoveragesByTime, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    Total: output.Total != null ? deserializeAws_json1_1Coverage(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationPurchaseRecommendationResponse => {
  return {
    Metadata:
      output.Metadata != null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(output.Metadata, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    Recommendations:
      output.Recommendations != null
        ? deserializeAws_json1_1ReservationPurchaseRecommendations(output.Recommendations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetReservationUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationUtilizationResponse => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Total: output.Total != null ? deserializeAws_json1_1ReservationAggregates(output.Total, context) : undefined,
    UtilizationsByTime:
      output.UtilizationsByTime != null
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
      output.Configuration != null
        ? deserializeAws_json1_1RightsizingRecommendationConfiguration(output.Configuration, context)
        : undefined,
    Metadata:
      output.Metadata != null
        ? deserializeAws_json1_1RightsizingRecommendationMetadata(output.Metadata, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    RightsizingRecommendations:
      output.RightsizingRecommendations != null
        ? deserializeAws_json1_1RightsizingRecommendationList(output.RightsizingRecommendations, context)
        : undefined,
    Summary:
      output.Summary != null
        ? deserializeAws_json1_1RightsizingRecommendationSummary(output.Summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansCoverageResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SavingsPlansCoverages:
      output.SavingsPlansCoverages != null
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
      output.Metadata != null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(output.Metadata, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    SavingsPlansPurchaseRecommendation:
      output.SavingsPlansPurchaseRecommendation != null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendation(output.SavingsPlansPurchaseRecommendation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationDetailsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SavingsPlansUtilizationDetails:
      output.SavingsPlansUtilizationDetails != null
        ? deserializeAws_json1_1SavingsPlansUtilizationDetails(output.SavingsPlansUtilizationDetails, context)
        : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
    Total:
      output.Total != null ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationResponse => {
  return {
    SavingsPlansUtilizationsByTime:
      output.SavingsPlansUtilizationsByTime != null
        ? deserializeAws_json1_1SavingsPlansUtilizationsByTime(output.SavingsPlansUtilizationsByTime, context)
        : undefined,
    Total:
      output.Total != null ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagsResponse = (output: any, context: __SerdeContext): GetTagsResponse => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ReturnSize: __expectInt32(output.ReturnSize),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    TotalSize: __expectInt32(output.TotalSize),
  } as any;
};

const deserializeAws_json1_1GetUsageForecastResponse = (
  output: any,
  context: __SerdeContext
): GetUsageForecastResponse => {
  return {
    ForecastResultsByTime:
      output.ForecastResultsByTime != null
        ? deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context)
        : undefined,
    Total: output.Total != null ? deserializeAws_json1_1MetricValue(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Group = (output: any, context: __SerdeContext): Group => {
  return {
    Keys: output.Keys != null ? deserializeAws_json1_1Keys(output.Keys, context) : undefined,
    Metrics: output.Metrics != null ? deserializeAws_json1_1Metrics(output.Metrics, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GroupDefinition = (output: any, context: __SerdeContext): GroupDefinition => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GroupDefinitions = (output: any, context: __SerdeContext): GroupDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Group(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Impact = (output: any, context: __SerdeContext): Impact => {
  return {
    MaxImpact: __limitedParseDouble(output.MaxImpact),
    TotalActualSpend: __limitedParseDouble(output.TotalActualSpend),
    TotalExpectedSpend: __limitedParseDouble(output.TotalExpectedSpend),
    TotalImpact: __limitedParseDouble(output.TotalImpact),
    TotalImpactPercentage: __limitedParseDouble(output.TotalImpactPercentage),
  } as any;
};

const deserializeAws_json1_1InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return {
    EC2InstanceDetails:
      output.EC2InstanceDetails != null
        ? deserializeAws_json1_1EC2InstanceDetails(output.EC2InstanceDetails, context)
        : undefined,
    ESInstanceDetails:
      output.ESInstanceDetails != null
        ? deserializeAws_json1_1ESInstanceDetails(output.ESInstanceDetails, context)
        : undefined,
    ElastiCacheInstanceDetails:
      output.ElastiCacheInstanceDetails != null
        ? deserializeAws_json1_1ElastiCacheInstanceDetails(output.ElastiCacheInstanceDetails, context)
        : undefined,
    RDSInstanceDetails:
      output.RDSInstanceDetails != null
        ? deserializeAws_json1_1RDSInstanceDetails(output.RDSInstanceDetails, context)
        : undefined,
    RedshiftInstanceDetails:
      output.RedshiftInstanceDetails != null
        ? deserializeAws_json1_1RedshiftInstanceDetails(output.RedshiftInstanceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Keys = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListCostAllocationTagsResponse = (
  output: any,
  context: __SerdeContext
): ListCostAllocationTagsResponse => {
  return {
    CostAllocationTags:
      output.CostAllocationTags != null
        ? deserializeAws_json1_1CostAllocationTagList(output.CostAllocationTags, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCostCategoryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListCostCategoryDefinitionsResponse => {
  return {
    CostCategoryReferences:
      output.CostCategoryReferences != null
        ? deserializeAws_json1_1CostCategoryReferencesList(output.CostCategoryReferences, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationResponse = (
  output: any,
  context: __SerdeContext
): ListSavingsPlansPurchaseRecommendationGenerationResponse => {
  return {
    GenerationSummaryList:
      output.GenerationSummaryList != null
        ? deserializeAws_json1_1GenerationSummaryList(output.GenerationSummaryList, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    ResourceTags:
      output.ResourceTags != null ? deserializeAws_json1_1ResourceTagList(output.ResourceTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MatchOptions = (output: any, context: __SerdeContext): (MatchOption | string)[] => {
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

const deserializeAws_json1_1Metrics = (output: any, context: __SerdeContext): Record<string, MetricValue> => {
  return Object.entries(output).reduce((acc: Record<string, MetricValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1MetricValue(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1MetricValue = (output: any, context: __SerdeContext): MetricValue => {
  return {
    Amount: __expectString(output.Amount),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1ModifyRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ModifyRecommendationDetail => {
  return {
    TargetInstances:
      output.TargetInstances != null
        ? deserializeAws_json1_1TargetInstancesList(output.TargetInstances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MonitorArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1NetworkResourceUtilization = (
  output: any,
  context: __SerdeContext
): NetworkResourceUtilization => {
  return {
    NetworkInBytesPerSecond: __expectString(output.NetworkInBytesPerSecond),
    NetworkOutBytesPerSecond: __expectString(output.NetworkOutBytesPerSecond),
    NetworkPacketsInPerSecond: __expectString(output.NetworkPacketsInPerSecond),
    NetworkPacketsOutPerSecond: __expectString(output.NetworkPacketsOutPerSecond),
  } as any;
};

const deserializeAws_json1_1PlatformDifferences = (
  output: any,
  context: __SerdeContext
): (PlatformDifference | string)[] => {
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

const deserializeAws_json1_1ProvideAnomalyFeedbackResponse = (
  output: any,
  context: __SerdeContext
): ProvideAnomalyFeedbackResponse => {
  return {
    AnomalyId: __expectString(output.AnomalyId),
  } as any;
};

const deserializeAws_json1_1RDSInstanceDetails = (output: any, context: __SerdeContext): RDSInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    DatabaseEdition: __expectString(output.DatabaseEdition),
    DatabaseEngine: __expectString(output.DatabaseEngine),
    DeploymentOption: __expectString(output.DeploymentOption),
    Family: __expectString(output.Family),
    InstanceType: __expectString(output.InstanceType),
    LicenseModel: __expectString(output.LicenseModel),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

const deserializeAws_json1_1RedshiftInstanceDetails = (
  output: any,
  context: __SerdeContext
): RedshiftInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    Family: __expectString(output.Family),
    NodeType: __expectString(output.NodeType),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

const deserializeAws_json1_1RequestChangedException = (
  output: any,
  context: __SerdeContext
): RequestChangedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ReservationAggregates = (output: any, context: __SerdeContext): ReservationAggregates => {
  return {
    AmortizedRecurringFee: __expectString(output.AmortizedRecurringFee),
    AmortizedUpfrontFee: __expectString(output.AmortizedUpfrontFee),
    NetRISavings: __expectString(output.NetRISavings),
    OnDemandCostOfRIHoursUsed: __expectString(output.OnDemandCostOfRIHoursUsed),
    PurchasedHours: __expectString(output.PurchasedHours),
    PurchasedUnits: __expectString(output.PurchasedUnits),
    RICostForUnusedHours: __expectString(output.RICostForUnusedHours),
    RealizedSavings: __expectString(output.RealizedSavings),
    TotalActualHours: __expectString(output.TotalActualHours),
    TotalActualUnits: __expectString(output.TotalActualUnits),
    TotalAmortizedFee: __expectString(output.TotalAmortizedFee),
    TotalPotentialRISavings: __expectString(output.TotalPotentialRISavings),
    UnrealizedSavings: __expectString(output.UnrealizedSavings),
    UnusedHours: __expectString(output.UnusedHours),
    UnusedUnits: __expectString(output.UnusedUnits),
    UtilizationPercentage: __expectString(output.UtilizationPercentage),
    UtilizationPercentageInUnits: __expectString(output.UtilizationPercentageInUnits),
  } as any;
};

const deserializeAws_json1_1ReservationCoverageGroup = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_1Attributes(output.Attributes, context) : undefined,
    Coverage: output.Coverage != null ? deserializeAws_json1_1Coverage(output.Coverage, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ReservationCoverageGroups = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationCoverageGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReservationPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation => {
  return {
    AccountScope: __expectString(output.AccountScope),
    LookbackPeriodInDays: __expectString(output.LookbackPeriodInDays),
    PaymentOption: __expectString(output.PaymentOption),
    RecommendationDetails:
      output.RecommendationDetails != null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationDetails(output.RecommendationDetails, context)
        : undefined,
    RecommendationSummary:
      output.RecommendationSummary != null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationSummary(output.RecommendationSummary, context)
        : undefined,
    ServiceSpecification:
      output.ServiceSpecification != null
        ? deserializeAws_json1_1ServiceSpecification(output.ServiceSpecification, context)
        : undefined,
    TermInYears: __expectString(output.TermInYears),
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail => {
  return {
    AccountId: __expectString(output.AccountId),
    AverageNormalizedUnitsUsedPerHour: __expectString(output.AverageNormalizedUnitsUsedPerHour),
    AverageNumberOfInstancesUsedPerHour: __expectString(output.AverageNumberOfInstancesUsedPerHour),
    AverageUtilization: __expectString(output.AverageUtilization),
    CurrencyCode: __expectString(output.CurrencyCode),
    EstimatedBreakEvenInMonths: __expectString(output.EstimatedBreakEvenInMonths),
    EstimatedMonthlyOnDemandCost: __expectString(output.EstimatedMonthlyOnDemandCost),
    EstimatedMonthlySavingsAmount: __expectString(output.EstimatedMonthlySavingsAmount),
    EstimatedMonthlySavingsPercentage: __expectString(output.EstimatedMonthlySavingsPercentage),
    EstimatedReservationCostForLookbackPeriod: __expectString(output.EstimatedReservationCostForLookbackPeriod),
    InstanceDetails:
      output.InstanceDetails != null
        ? deserializeAws_json1_1InstanceDetails(output.InstanceDetails, context)
        : undefined,
    MaximumNormalizedUnitsUsedPerHour: __expectString(output.MaximumNormalizedUnitsUsedPerHour),
    MaximumNumberOfInstancesUsedPerHour: __expectString(output.MaximumNumberOfInstancesUsedPerHour),
    MinimumNormalizedUnitsUsedPerHour: __expectString(output.MinimumNormalizedUnitsUsedPerHour),
    MinimumNumberOfInstancesUsedPerHour: __expectString(output.MinimumNumberOfInstancesUsedPerHour),
    RecommendedNormalizedUnitsToPurchase: __expectString(output.RecommendedNormalizedUnitsToPurchase),
    RecommendedNumberOfInstancesToPurchase: __expectString(output.RecommendedNumberOfInstancesToPurchase),
    RecurringStandardMonthlyCost: __expectString(output.RecurringStandardMonthlyCost),
    UpfrontCost: __expectString(output.UpfrontCost),
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetails = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationPurchaseRecommendationDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationMetadata => {
  return {
    GenerationTimestamp: __expectString(output.GenerationTimestamp),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendations = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationSummary => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    TotalEstimatedMonthlySavingsAmount: __expectString(output.TotalEstimatedMonthlySavingsAmount),
    TotalEstimatedMonthlySavingsPercentage: __expectString(output.TotalEstimatedMonthlySavingsPercentage),
  } as any;
};

const deserializeAws_json1_1ReservationUtilizationGroup = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_1Attributes(output.Attributes, context) : undefined,
    Key: __expectString(output.Key),
    Utilization:
      output.Utilization != null ? deserializeAws_json1_1ReservationAggregates(output.Utilization, context) : undefined,
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ReservationUtilizationGroups = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReservationUtilizationGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    EC2ResourceDetails:
      output.EC2ResourceDetails != null
        ? deserializeAws_json1_1EC2ResourceDetails(output.EC2ResourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

const deserializeAws_json1_1ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceTag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceUtilization = (output: any, context: __SerdeContext): ResourceUtilization => {
  return {
    EC2ResourceUtilization:
      output.EC2ResourceUtilization != null
        ? deserializeAws_json1_1EC2ResourceUtilization(output.EC2ResourceUtilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResultByTime = (output: any, context: __SerdeContext): ResultByTime => {
  return {
    Estimated: __expectBoolean(output.Estimated),
    Groups: output.Groups != null ? deserializeAws_json1_1Groups(output.Groups, context) : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? deserializeAws_json1_1Metrics(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResultsByTime = (output: any, context: __SerdeContext): ResultByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResultByTime(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RightsizingRecommendation = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation => {
  return {
    AccountId: __expectString(output.AccountId),
    CurrentInstance:
      output.CurrentInstance != null
        ? deserializeAws_json1_1CurrentInstance(output.CurrentInstance, context)
        : undefined,
    FindingReasonCodes:
      output.FindingReasonCodes != null
        ? deserializeAws_json1_1FindingReasonCodes(output.FindingReasonCodes, context)
        : undefined,
    ModifyRecommendationDetail:
      output.ModifyRecommendationDetail != null
        ? deserializeAws_json1_1ModifyRecommendationDetail(output.ModifyRecommendationDetail, context)
        : undefined,
    RightsizingType: __expectString(output.RightsizingType),
    TerminateRecommendationDetail:
      output.TerminateRecommendationDetail != null
        ? deserializeAws_json1_1TerminateRecommendationDetail(output.TerminateRecommendationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationConfiguration = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationConfiguration => {
  return {
    BenefitsConsidered: __expectBoolean(output.BenefitsConsidered),
    RecommendationTarget: __expectString(output.RecommendationTarget),
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationList = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RightsizingRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RightsizingRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationMetadata => {
  return {
    AdditionalMetadata: __expectString(output.AdditionalMetadata),
    GenerationTimestamp: __expectString(output.GenerationTimestamp),
    LookbackPeriodInDays: __expectString(output.LookbackPeriodInDays),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationSummary = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationSummary => {
  return {
    EstimatedTotalMonthlySavingsAmount: __expectString(output.EstimatedTotalMonthlySavingsAmount),
    SavingsCurrencyCode: __expectString(output.SavingsCurrencyCode),
    SavingsPercentage: __expectString(output.SavingsPercentage),
    TotalRecommendationCount: __expectString(output.TotalRecommendationCount),
  } as any;
};

const deserializeAws_json1_1RootCause = (output: any, context: __SerdeContext): RootCause => {
  return {
    LinkedAccount: __expectString(output.LinkedAccount),
    LinkedAccountName: __expectString(output.LinkedAccountName),
    Region: __expectString(output.Region),
    Service: __expectString(output.Service),
    UsageType: __expectString(output.UsageType),
  } as any;
};

const deserializeAws_json1_1RootCauses = (output: any, context: __SerdeContext): RootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RootCause(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SavingsPlansAmortizedCommitment = (
  output: any,
  context: __SerdeContext
): SavingsPlansAmortizedCommitment => {
  return {
    AmortizedRecurringCommitment: __expectString(output.AmortizedRecurringCommitment),
    AmortizedUpfrontCommitment: __expectString(output.AmortizedUpfrontCommitment),
    TotalAmortizedCommitment: __expectString(output.TotalAmortizedCommitment),
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverage = (output: any, context: __SerdeContext): SavingsPlansCoverage => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_1Attributes(output.Attributes, context) : undefined,
    Coverage:
      output.Coverage != null ? deserializeAws_json1_1SavingsPlansCoverageData(output.Coverage, context) : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverageData = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverageData => {
  return {
    CoveragePercentage: __expectString(output.CoveragePercentage),
    OnDemandCost: __expectString(output.OnDemandCost),
    SpendCoveredBySavingsPlans: __expectString(output.SpendCoveredBySavingsPlans),
    TotalCost: __expectString(output.TotalCost),
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverages = (output: any, context: __SerdeContext): SavingsPlansCoverage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansCoverage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SavingsPlansDetails = (output: any, context: __SerdeContext): SavingsPlansDetails => {
  return {
    InstanceFamily: __expectString(output.InstanceFamily),
    OfferingId: __expectString(output.OfferingId),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendation => {
  return {
    AccountScope: __expectString(output.AccountScope),
    LookbackPeriodInDays: __expectString(output.LookbackPeriodInDays),
    PaymentOption: __expectString(output.PaymentOption),
    SavingsPlansPurchaseRecommendationDetails:
      output.SavingsPlansPurchaseRecommendationDetails != null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(
            output.SavingsPlansPurchaseRecommendationDetails,
            context
          )
        : undefined,
    SavingsPlansPurchaseRecommendationSummary:
      output.SavingsPlansPurchaseRecommendationSummary != null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(
            output.SavingsPlansPurchaseRecommendationSummary,
            context
          )
        : undefined,
    SavingsPlansType: __expectString(output.SavingsPlansType),
    TermInYears: __expectString(output.TermInYears),
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail => {
  return {
    AccountId: __expectString(output.AccountId),
    CurrencyCode: __expectString(output.CurrencyCode),
    CurrentAverageHourlyOnDemandSpend: __expectString(output.CurrentAverageHourlyOnDemandSpend),
    CurrentMaximumHourlyOnDemandSpend: __expectString(output.CurrentMaximumHourlyOnDemandSpend),
    CurrentMinimumHourlyOnDemandSpend: __expectString(output.CurrentMinimumHourlyOnDemandSpend),
    EstimatedAverageUtilization: __expectString(output.EstimatedAverageUtilization),
    EstimatedMonthlySavingsAmount: __expectString(output.EstimatedMonthlySavingsAmount),
    EstimatedOnDemandCost: __expectString(output.EstimatedOnDemandCost),
    EstimatedOnDemandCostWithCurrentCommitment: __expectString(output.EstimatedOnDemandCostWithCurrentCommitment),
    EstimatedROI: __expectString(output.EstimatedROI),
    EstimatedSPCost: __expectString(output.EstimatedSPCost),
    EstimatedSavingsAmount: __expectString(output.EstimatedSavingsAmount),
    EstimatedSavingsPercentage: __expectString(output.EstimatedSavingsPercentage),
    HourlyCommitmentToPurchase: __expectString(output.HourlyCommitmentToPurchase),
    SavingsPlansDetails:
      output.SavingsPlansDetails != null
        ? deserializeAws_json1_1SavingsPlansDetails(output.SavingsPlansDetails, context)
        : undefined,
    UpfrontCost: __expectString(output.UpfrontCost),
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationMetadata => {
  return {
    AdditionalMetadata: __expectString(output.AdditionalMetadata),
    GenerationTimestamp: __expectString(output.GenerationTimestamp),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationSummary => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    CurrentOnDemandSpend: __expectString(output.CurrentOnDemandSpend),
    DailyCommitmentToPurchase: __expectString(output.DailyCommitmentToPurchase),
    EstimatedMonthlySavingsAmount: __expectString(output.EstimatedMonthlySavingsAmount),
    EstimatedOnDemandCostWithCurrentCommitment: __expectString(output.EstimatedOnDemandCostWithCurrentCommitment),
    EstimatedROI: __expectString(output.EstimatedROI),
    EstimatedSavingsAmount: __expectString(output.EstimatedSavingsAmount),
    EstimatedSavingsPercentage: __expectString(output.EstimatedSavingsPercentage),
    EstimatedTotalCost: __expectString(output.EstimatedTotalCost),
    HourlyCommitmentToPurchase: __expectString(output.HourlyCommitmentToPurchase),
    TotalRecommendationCount: __expectString(output.TotalRecommendationCount),
  } as any;
};

const deserializeAws_json1_1SavingsPlansSavings = (output: any, context: __SerdeContext): SavingsPlansSavings => {
  return {
    NetSavings: __expectString(output.NetSavings),
    OnDemandCostEquivalent: __expectString(output.OnDemandCostEquivalent),
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilization = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilization => {
  return {
    TotalCommitment: __expectString(output.TotalCommitment),
    UnusedCommitment: __expectString(output.UnusedCommitment),
    UsedCommitment: __expectString(output.UsedCommitment),
    UtilizationPercentage: __expectString(output.UtilizationPercentage),
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationAggregates = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationAggregates => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment != null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Savings: output.Savings != null ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context) : undefined,
    Utilization:
      output.Utilization != null
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
      output.AmortizedCommitment != null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Savings: output.Savings != null ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context) : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
    Utilization:
      output.Utilization != null
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
      output.AmortizedCommitment != null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Attributes: output.Attributes != null ? deserializeAws_json1_1Attributes(output.Attributes, context) : undefined,
    Savings: output.Savings != null ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context) : undefined,
    SavingsPlanArn: __expectString(output.SavingsPlanArn),
    Utilization:
      output.Utilization != null
        ? deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetails = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SavingsPlansUtilizationsByTime = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceSpecification = (output: any, context: __SerdeContext): ServiceSpecification => {
  return {
    EC2Specification:
      output.EC2Specification != null
        ? deserializeAws_json1_1EC2Specification(output.EC2Specification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationResponse = (
  output: any,
  context: __SerdeContext
): StartSavingsPlansPurchaseRecommendationGenerationResponse => {
  return {
    EstimatedCompletionTime: __expectString(output.EstimatedCompletionTime),
    GenerationStartedTime: __expectString(output.GenerationStartedTime),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

const deserializeAws_json1_1Subscriber = (output: any, context: __SerdeContext): Subscriber => {
  return {
    Address: __expectString(output.Address),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Subscribers = (output: any, context: __SerdeContext): Subscriber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subscriber(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TagValues = (output: any, context: __SerdeContext): TagValues => {
  return {
    Key: __expectString(output.Key),
    MatchOptions:
      output.MatchOptions != null ? deserializeAws_json1_1MatchOptions(output.MatchOptions, context) : undefined,
    Values: output.Values != null ? deserializeAws_json1_1Values(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TagValuesList = (output: any, context: __SerdeContext): TagValues[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagValues(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TargetInstance = (output: any, context: __SerdeContext): TargetInstance => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    DefaultTargetInstance: __expectBoolean(output.DefaultTargetInstance),
    EstimatedMonthlyCost: __expectString(output.EstimatedMonthlyCost),
    EstimatedMonthlySavings: __expectString(output.EstimatedMonthlySavings),
    ExpectedResourceUtilization:
      output.ExpectedResourceUtilization != null
        ? deserializeAws_json1_1ResourceUtilization(output.ExpectedResourceUtilization, context)
        : undefined,
    PlatformDifferences:
      output.PlatformDifferences != null
        ? deserializeAws_json1_1PlatformDifferences(output.PlatformDifferences, context)
        : undefined,
    ResourceDetails:
      output.ResourceDetails != null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetInstancesList = (output: any, context: __SerdeContext): TargetInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TerminateRecommendationDetail = (
  output: any,
  context: __SerdeContext
): TerminateRecommendationDetail => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    EstimatedMonthlySavings: __expectString(output.EstimatedMonthlySavings),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

const deserializeAws_json1_1UnknownMonitorException = (
  output: any,
  context: __SerdeContext
): UnknownMonitorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnknownSubscriptionException = (
  output: any,
  context: __SerdeContext
): UnknownSubscriptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnresolvableUsageUnitException = (
  output: any,
  context: __SerdeContext
): UnresolvableUsageUnitException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAnomalyMonitorResponse = (
  output: any,
  context: __SerdeContext
): UpdateAnomalyMonitorResponse => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
  } as any;
};

const deserializeAws_json1_1UpdateAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateAnomalySubscriptionResponse => {
  return {
    SubscriptionArn: __expectString(output.SubscriptionArn),
  } as any;
};

const deserializeAws_json1_1UpdateCostAllocationTagsStatusError = (
  output: any,
  context: __SerdeContext
): UpdateCostAllocationTagsStatusError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
    TagKey: __expectString(output.TagKey),
  } as any;
};

const deserializeAws_json1_1UpdateCostAllocationTagsStatusErrors = (
  output: any,
  context: __SerdeContext
): UpdateCostAllocationTagsStatusError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UpdateCostAllocationTagsStatusError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UpdateCostAllocationTagsStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostAllocationTagsStatusResponse => {
  return {
    Errors:
      output.Errors != null
        ? deserializeAws_json1_1UpdateCostAllocationTagsStatusErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    EffectiveStart: __expectString(output.EffectiveStart),
  } as any;
};

const deserializeAws_json1_1UtilizationByTime = (output: any, context: __SerdeContext): UtilizationByTime => {
  return {
    Groups:
      output.Groups != null ? deserializeAws_json1_1ReservationUtilizationGroups(output.Groups, context) : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? deserializeAws_json1_1ReservationAggregates(output.Total, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UtilizationsByTime = (output: any, context: __SerdeContext): UtilizationByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UtilizationByTime(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Values = (output: any, context: __SerdeContext): string[] => {
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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
