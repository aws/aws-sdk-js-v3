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

/**
 * serializeAws_json1_1CreateAnomalyMonitorCommand
 */
export const se_CreateAnomalyMonitorCommand = async (
  input: CreateAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.CreateAnomalyMonitor",
  };
  let body: any;
  body = JSON.stringify(se_CreateAnomalyMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAnomalySubscriptionCommand
 */
export const se_CreateAnomalySubscriptionCommand = async (
  input: CreateAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.CreateAnomalySubscription",
  };
  let body: any;
  body = JSON.stringify(se_CreateAnomalySubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCostCategoryDefinitionCommand
 */
export const se_CreateCostCategoryDefinitionCommand = async (
  input: CreateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.CreateCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(se_CreateCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAnomalyMonitorCommand
 */
export const se_DeleteAnomalyMonitorCommand = async (
  input: DeleteAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DeleteAnomalyMonitor",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAnomalyMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAnomalySubscriptionCommand
 */
export const se_DeleteAnomalySubscriptionCommand = async (
  input: DeleteAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DeleteAnomalySubscription",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAnomalySubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCostCategoryDefinitionCommand
 */
export const se_DeleteCostCategoryDefinitionCommand = async (
  input: DeleteCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DeleteCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCostCategoryDefinitionCommand
 */
export const se_DescribeCostCategoryDefinitionCommand = async (
  input: DescribeCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.DescribeCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAnomaliesCommand
 */
export const se_GetAnomaliesCommand = async (
  input: GetAnomaliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetAnomalies",
  };
  let body: any;
  body = JSON.stringify(se_GetAnomaliesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAnomalyMonitorsCommand
 */
export const se_GetAnomalyMonitorsCommand = async (
  input: GetAnomalyMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetAnomalyMonitors",
  };
  let body: any;
  body = JSON.stringify(se_GetAnomalyMonitorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAnomalySubscriptionsCommand
 */
export const se_GetAnomalySubscriptionsCommand = async (
  input: GetAnomalySubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetAnomalySubscriptions",
  };
  let body: any;
  body = JSON.stringify(se_GetAnomalySubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostAndUsageCommand
 */
export const se_GetCostAndUsageCommand = async (
  input: GetCostAndUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostAndUsage",
  };
  let body: any;
  body = JSON.stringify(se_GetCostAndUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostAndUsageWithResourcesCommand
 */
export const se_GetCostAndUsageWithResourcesCommand = async (
  input: GetCostAndUsageWithResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostAndUsageWithResources",
  };
  let body: any;
  body = JSON.stringify(se_GetCostAndUsageWithResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostCategoriesCommand
 */
export const se_GetCostCategoriesCommand = async (
  input: GetCostCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostCategories",
  };
  let body: any;
  body = JSON.stringify(se_GetCostCategoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostForecastCommand
 */
export const se_GetCostForecastCommand = async (
  input: GetCostForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetCostForecast",
  };
  let body: any;
  body = JSON.stringify(se_GetCostForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDimensionValuesCommand
 */
export const se_GetDimensionValuesCommand = async (
  input: GetDimensionValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetDimensionValues",
  };
  let body: any;
  body = JSON.stringify(se_GetDimensionValuesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReservationCoverageCommand
 */
export const se_GetReservationCoverageCommand = async (
  input: GetReservationCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetReservationCoverage",
  };
  let body: any;
  body = JSON.stringify(se_GetReservationCoverageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReservationPurchaseRecommendationCommand
 */
export const se_GetReservationPurchaseRecommendationCommand = async (
  input: GetReservationPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetReservationPurchaseRecommendation",
  };
  let body: any;
  body = JSON.stringify(se_GetReservationPurchaseRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReservationUtilizationCommand
 */
export const se_GetReservationUtilizationCommand = async (
  input: GetReservationUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetReservationUtilization",
  };
  let body: any;
  body = JSON.stringify(se_GetReservationUtilizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRightsizingRecommendationCommand
 */
export const se_GetRightsizingRecommendationCommand = async (
  input: GetRightsizingRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetRightsizingRecommendation",
  };
  let body: any;
  body = JSON.stringify(se_GetRightsizingRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSavingsPlansCoverageCommand
 */
export const se_GetSavingsPlansCoverageCommand = async (
  input: GetSavingsPlansCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansCoverage",
  };
  let body: any;
  body = JSON.stringify(se_GetSavingsPlansCoverageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand
 */
export const se_GetSavingsPlansPurchaseRecommendationCommand = async (
  input: GetSavingsPlansPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation",
  };
  let body: any;
  body = JSON.stringify(se_GetSavingsPlansPurchaseRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSavingsPlansUtilizationCommand
 */
export const se_GetSavingsPlansUtilizationCommand = async (
  input: GetSavingsPlansUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilization",
  };
  let body: any;
  body = JSON.stringify(se_GetSavingsPlansUtilizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand
 */
export const se_GetSavingsPlansUtilizationDetailsCommand = async (
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails",
  };
  let body: any;
  body = JSON.stringify(se_GetSavingsPlansUtilizationDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTagsCommand
 */
export const se_GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetTags",
  };
  let body: any;
  body = JSON.stringify(se_GetTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUsageForecastCommand
 */
export const se_GetUsageForecastCommand = async (
  input: GetUsageForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.GetUsageForecast",
  };
  let body: any;
  body = JSON.stringify(se_GetUsageForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCostAllocationTagsCommand
 */
export const se_ListCostAllocationTagsCommand = async (
  input: ListCostAllocationTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListCostAllocationTags",
  };
  let body: any;
  body = JSON.stringify(se_ListCostAllocationTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCostCategoryDefinitionsCommand
 */
export const se_ListCostCategoryDefinitionsCommand = async (
  input: ListCostCategoryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListCostCategoryDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_ListCostCategoryDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommand
 */
export const se_ListSavingsPlansPurchaseRecommendationGenerationCommand = async (
  input: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration",
  };
  let body: any;
  body = JSON.stringify(se_ListSavingsPlansPurchaseRecommendationGenerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ProvideAnomalyFeedbackCommand
 */
export const se_ProvideAnomalyFeedbackCommand = async (
  input: ProvideAnomalyFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.ProvideAnomalyFeedback",
  };
  let body: any;
  body = JSON.stringify(se_ProvideAnomalyFeedbackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand
 */
export const se_StartSavingsPlansPurchaseRecommendationGenerationCommand = async (
  input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration",
  };
  let body: any;
  body = JSON.stringify(se_StartSavingsPlansPurchaseRecommendationGenerationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAnomalyMonitorCommand
 */
export const se_UpdateAnomalyMonitorCommand = async (
  input: UpdateAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateAnomalyMonitor",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAnomalyMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAnomalySubscriptionCommand
 */
export const se_UpdateAnomalySubscriptionCommand = async (
  input: UpdateAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateAnomalySubscription",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAnomalySubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCostAllocationTagsStatusCommand
 */
export const se_UpdateCostAllocationTagsStatusCommand = async (
  input: UpdateCostAllocationTagsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateCostAllocationTagsStatus",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCostAllocationTagsStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCostCategoryDefinitionCommand
 */
export const se_UpdateCostCategoryDefinitionCommand = async (
  input: UpdateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSInsightsIndexService.UpdateCostCategoryDefinition",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCostCategoryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateAnomalyMonitorCommand
 */
export const de_CreateAnomalyMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAnomalyMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAnomalyMonitorResponse(data, context);
  const response: CreateAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAnomalyMonitorCommandError
 */
const de_CreateAnomalyMonitorCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAnomalySubscriptionCommand
 */
export const de_CreateAnomalySubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalySubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAnomalySubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAnomalySubscriptionResponse(data, context);
  const response: CreateAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAnomalySubscriptionCommandError
 */
const de_CreateAnomalySubscriptionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await de_UnknownMonitorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateCostCategoryDefinitionCommand
 */
export const de_CreateCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCostCategoryDefinitionResponse(data, context);
  const response: CreateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCostCategoryDefinitionCommandError
 */
const de_CreateCostCategoryDefinitionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAnomalyMonitorCommand
 */
export const de_DeleteAnomalyMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAnomalyMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAnomalyMonitorResponse(data, context);
  const response: DeleteAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAnomalyMonitorCommandError
 */
const de_DeleteAnomalyMonitorCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await de_UnknownMonitorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAnomalySubscriptionCommand
 */
export const de_DeleteAnomalySubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalySubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAnomalySubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAnomalySubscriptionResponse(data, context);
  const response: DeleteAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAnomalySubscriptionCommandError
 */
const de_DeleteAnomalySubscriptionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      throw await de_UnknownSubscriptionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteCostCategoryDefinitionCommand
 */
export const de_DeleteCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCostCategoryDefinitionResponse(data, context);
  const response: DeleteCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError
 */
const de_DeleteCostCategoryDefinitionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCostCategoryDefinitionCommand
 */
export const de_DescribeCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCostCategoryDefinitionResponse(data, context);
  const response: DescribeCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError
 */
const de_DescribeCostCategoryDefinitionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAnomaliesCommand
 */
export const de_GetAnomaliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomaliesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAnomaliesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAnomaliesResponse(data, context);
  const response: GetAnomaliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAnomaliesCommandError
 */
const de_GetAnomaliesCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAnomalyMonitorsCommand
 */
export const de_GetAnomalyMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyMonitorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAnomalyMonitorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAnomalyMonitorsResponse(data, context);
  const response: GetAnomalyMonitorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAnomalyMonitorsCommandError
 */
const de_GetAnomalyMonitorsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await de_UnknownMonitorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAnomalySubscriptionsCommand
 */
export const de_GetAnomalySubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalySubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAnomalySubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAnomalySubscriptionsResponse(data, context);
  const response: GetAnomalySubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAnomalySubscriptionsCommandError
 */
const de_GetAnomalySubscriptionsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      throw await de_UnknownSubscriptionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCostAndUsageCommand
 */
export const de_GetCostAndUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCostAndUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCostAndUsageResponse(data, context);
  const response: GetCostAndUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCostAndUsageCommandError
 */
const de_GetCostAndUsageCommandError = async (
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
      throw await de_BillExpirationExceptionRes(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await de_RequestChangedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCostAndUsageWithResourcesCommand
 */
export const de_GetCostAndUsageWithResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCostAndUsageWithResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCostAndUsageWithResourcesResponse(data, context);
  const response: GetCostAndUsageWithResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError
 */
const de_GetCostAndUsageWithResourcesCommandError = async (
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
      throw await de_BillExpirationExceptionRes(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await de_RequestChangedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCostCategoriesCommand
 */
export const de_GetCostCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCostCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCostCategoriesResponse(data, context);
  const response: GetCostCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCostCategoriesCommandError
 */
const de_GetCostCategoriesCommandError = async (
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
      throw await de_BillExpirationExceptionRes(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await de_RequestChangedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCostForecastCommand
 */
export const de_GetCostForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCostForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCostForecastResponse(data, context);
  const response: GetCostForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCostForecastCommandError
 */
const de_GetCostForecastCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDimensionValuesCommand
 */
export const de_GetDimensionValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDimensionValuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDimensionValuesResponse(data, context);
  const response: GetDimensionValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDimensionValuesCommandError
 */
const de_GetDimensionValuesCommandError = async (
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
      throw await de_BillExpirationExceptionRes(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await de_RequestChangedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetReservationCoverageCommand
 */
export const de_GetReservationCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReservationCoverageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservationCoverageResponse(data, context);
  const response: GetReservationCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetReservationCoverageCommandError
 */
const de_GetReservationCoverageCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetReservationPurchaseRecommendationCommand
 */
export const de_GetReservationPurchaseRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReservationPurchaseRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservationPurchaseRecommendationResponse(data, context);
  const response: GetReservationPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError
 */
const de_GetReservationPurchaseRecommendationCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetReservationUtilizationCommand
 */
export const de_GetReservationUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReservationUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservationUtilizationResponse(data, context);
  const response: GetReservationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetReservationUtilizationCommandError
 */
const de_GetReservationUtilizationCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRightsizingRecommendationCommand
 */
export const de_GetRightsizingRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRightsizingRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRightsizingRecommendationResponse(data, context);
  const response: GetRightsizingRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRightsizingRecommendationCommandError
 */
const de_GetRightsizingRecommendationCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSavingsPlansCoverageCommand
 */
export const de_GetSavingsPlansCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSavingsPlansCoverageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSavingsPlansCoverageResponse(data, context);
  const response: GetSavingsPlansCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSavingsPlansCoverageCommandError
 */
const de_GetSavingsPlansCoverageCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand
 */
export const de_GetSavingsPlansPurchaseRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSavingsPlansPurchaseRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSavingsPlansPurchaseRecommendationResponse(data, context);
  const response: GetSavingsPlansPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError
 */
const de_GetSavingsPlansPurchaseRecommendationCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSavingsPlansUtilizationCommand
 */
export const de_GetSavingsPlansUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSavingsPlansUtilizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSavingsPlansUtilizationResponse(data, context);
  const response: GetSavingsPlansUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSavingsPlansUtilizationCommandError
 */
const de_GetSavingsPlansUtilizationCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand
 */
export const de_GetSavingsPlansUtilizationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSavingsPlansUtilizationDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSavingsPlansUtilizationDetailsResponse(data, context);
  const response: GetSavingsPlansUtilizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError
 */
const de_GetSavingsPlansUtilizationDetailsCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTagsCommand
 */
export const de_GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTagsResponse(data, context);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTagsCommandError
 */
const de_GetTagsCommandError = async (
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
      throw await de_BillExpirationExceptionRes(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      throw await de_RequestChangedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetUsageForecastCommand
 */
export const de_GetUsageForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUsageForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUsageForecastResponse(data, context);
  const response: GetUsageForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUsageForecastCommandError
 */
const de_GetUsageForecastCommandError = async (
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
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnresolvableUsageUnitException":
    case "com.amazonaws.costexplorer#UnresolvableUsageUnitException":
      throw await de_UnresolvableUsageUnitExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCostAllocationTagsCommand
 */
export const de_ListCostAllocationTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostAllocationTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCostAllocationTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCostAllocationTagsResponse(data, context);
  const response: ListCostAllocationTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCostAllocationTagsCommandError
 */
const de_ListCostAllocationTagsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCostCategoryDefinitionsCommand
 */
export const de_ListCostCategoryDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCostCategoryDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCostCategoryDefinitionsResponse(data, context);
  const response: ListCostCategoryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCostCategoryDefinitionsCommandError
 */
const de_ListCostCategoryDefinitionsCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommand
 */
export const de_ListSavingsPlansPurchaseRecommendationGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSavingsPlansPurchaseRecommendationGenerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSavingsPlansPurchaseRecommendationGenerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSavingsPlansPurchaseRecommendationGenerationResponse(data, context);
  const response: ListSavingsPlansPurchaseRecommendationGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommandError
 */
const de_ListSavingsPlansPurchaseRecommendationGenerationCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ProvideAnomalyFeedbackCommand
 */
export const de_ProvideAnomalyFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvideAnomalyFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ProvideAnomalyFeedbackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ProvideAnomalyFeedbackResponse(data, context);
  const response: ProvideAnomalyFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ProvideAnomalyFeedbackCommandError
 */
const de_ProvideAnomalyFeedbackCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand
 */
export const de_StartSavingsPlansPurchaseRecommendationGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSavingsPlansPurchaseRecommendationGenerationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSavingsPlansPurchaseRecommendationGenerationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSavingsPlansPurchaseRecommendationGenerationResponse(data, context);
  const response: StartSavingsPlansPurchaseRecommendationGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommandError
 */
const de_StartSavingsPlansPurchaseRecommendationGenerationCommandError = async (
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
      throw await de_GenerationExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.costexplorer#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAnomalyMonitorCommand
 */
export const de_UpdateAnomalyMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAnomalyMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAnomalyMonitorResponse(data, context);
  const response: UpdateAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAnomalyMonitorCommandError
 */
const de_UpdateAnomalyMonitorCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await de_UnknownMonitorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAnomalySubscriptionCommand
 */
export const de_UpdateAnomalySubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalySubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAnomalySubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAnomalySubscriptionResponse(data, context);
  const response: UpdateAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAnomalySubscriptionCommandError
 */
const de_UpdateAnomalySubscriptionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnknownMonitorException":
    case "com.amazonaws.costexplorer#UnknownMonitorException":
      throw await de_UnknownMonitorExceptionRes(parsedOutput, context);
    case "UnknownSubscriptionException":
    case "com.amazonaws.costexplorer#UnknownSubscriptionException":
      throw await de_UnknownSubscriptionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateCostAllocationTagsStatusCommand
 */
export const de_UpdateCostAllocationTagsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostAllocationTagsStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCostAllocationTagsStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCostAllocationTagsStatusResponse(data, context);
  const response: UpdateCostAllocationTagsStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCostAllocationTagsStatusCommandError
 */
const de_UpdateCostAllocationTagsStatusCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateCostCategoryDefinitionCommand
 */
export const de_UpdateCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCostCategoryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCostCategoryDefinitionResponse(data, context);
  const response: UpdateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError
 */
const de_UpdateCostCategoryDefinitionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BillExpirationExceptionRes
 */
const de_BillExpirationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BillExpirationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BillExpirationException(body, context);
  const exception = new BillExpirationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DataUnavailableExceptionRes
 */
const de_DataUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DataUnavailableException(body, context);
  const exception = new DataUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GenerationExistsExceptionRes
 */
const de_GenerationExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GenerationExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GenerationExistsException(body, context);
  const exception = new GenerationExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestChangedExceptionRes
 */
const de_RequestChangedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestChangedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestChangedException(body, context);
  const exception = new RequestChangedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnknownMonitorExceptionRes
 */
const de_UnknownMonitorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownMonitorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnknownMonitorException(body, context);
  const exception = new UnknownMonitorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnknownSubscriptionExceptionRes
 */
const de_UnknownSubscriptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownSubscriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnknownSubscriptionException(body, context);
  const exception = new UnknownSubscriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnresolvableUsageUnitExceptionRes
 */
const de_UnresolvableUsageUnitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnresolvableUsageUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnresolvableUsageUnitException(body, context);
  const exception = new UnresolvableUsageUnitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AnomalyDateInterval
 */
const se_AnomalyDateInterval = (input: AnomalyDateInterval, context: __SerdeContext): any => {
  return {
    ...(input.EndDate != null && { EndDate: input.EndDate }),
    ...(input.StartDate != null && { StartDate: input.StartDate }),
  };
};

/**
 * serializeAws_json1_1AnomalyMonitor
 */
const se_AnomalyMonitor = (input: AnomalyMonitor, context: __SerdeContext): any => {
  return {
    ...(input.CreationDate != null && { CreationDate: input.CreationDate }),
    ...(input.DimensionalValueCount != null && { DimensionalValueCount: input.DimensionalValueCount }),
    ...(input.LastEvaluatedDate != null && { LastEvaluatedDate: input.LastEvaluatedDate }),
    ...(input.LastUpdatedDate != null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.MonitorDimension != null && { MonitorDimension: input.MonitorDimension }),
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
    ...(input.MonitorSpecification != null && {
      MonitorSpecification: se_Expression(input.MonitorSpecification, context),
    }),
    ...(input.MonitorType != null && { MonitorType: input.MonitorType }),
  };
};

/**
 * serializeAws_json1_1AnomalySubscription
 */
const se_AnomalySubscription = (input: AnomalySubscription, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Frequency != null && { Frequency: input.Frequency }),
    ...(input.MonitorArnList != null && { MonitorArnList: se_MonitorArnList(input.MonitorArnList, context) }),
    ...(input.Subscribers != null && { Subscribers: se_Subscribers(input.Subscribers, context) }),
    ...(input.SubscriptionArn != null && { SubscriptionArn: input.SubscriptionArn }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdExpression != null && {
      ThresholdExpression: se_Expression(input.ThresholdExpression, context),
    }),
  };
};

/**
 * serializeAws_json1_1CostAllocationTagKeyList
 */
const se_CostAllocationTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CostAllocationTagStatusEntry
 */
const se_CostAllocationTagStatusEntry = (input: CostAllocationTagStatusEntry, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
  };
};

/**
 * serializeAws_json1_1CostAllocationTagStatusList
 */
const se_CostAllocationTagStatusList = (input: CostAllocationTagStatusEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CostAllocationTagStatusEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1CostCategoryInheritedValueDimension
 */
const se_CostCategoryInheritedValueDimension = (
  input: CostCategoryInheritedValueDimension,
  context: __SerdeContext
): any => {
  return {
    ...(input.DimensionKey != null && { DimensionKey: input.DimensionKey }),
    ...(input.DimensionName != null && { DimensionName: input.DimensionName }),
  };
};

/**
 * serializeAws_json1_1CostCategoryRule
 */
const se_CostCategoryRule = (input: CostCategoryRule, context: __SerdeContext): any => {
  return {
    ...(input.InheritedValue != null && {
      InheritedValue: se_CostCategoryInheritedValueDimension(input.InheritedValue, context),
    }),
    ...(input.Rule != null && { Rule: se_Expression(input.Rule, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1CostCategoryRulesList
 */
const se_CostCategoryRulesList = (input: CostCategoryRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CostCategoryRule(entry, context);
    });
};

/**
 * serializeAws_json1_1CostCategorySplitChargeRule
 */
const se_CostCategorySplitChargeRule = (input: CostCategorySplitChargeRule, context: __SerdeContext): any => {
  return {
    ...(input.Method != null && { Method: input.Method }),
    ...(input.Parameters != null && {
      Parameters: se_CostCategorySplitChargeRuleParametersList(input.Parameters, context),
    }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Targets != null && { Targets: se_CostCategorySplitChargeRuleTargetsList(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1CostCategorySplitChargeRuleParameter
 */
const se_CostCategorySplitChargeRuleParameter = (
  input: CostCategorySplitChargeRuleParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: se_CostCategorySplitChargeRuleParameterValuesList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1CostCategorySplitChargeRuleParametersList
 */
const se_CostCategorySplitChargeRuleParametersList = (
  input: CostCategorySplitChargeRuleParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CostCategorySplitChargeRuleParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1CostCategorySplitChargeRuleParameterValuesList
 */
const se_CostCategorySplitChargeRuleParameterValuesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CostCategorySplitChargeRulesList
 */
const se_CostCategorySplitChargeRulesList = (input: CostCategorySplitChargeRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CostCategorySplitChargeRule(entry, context);
    });
};

/**
 * serializeAws_json1_1CostCategorySplitChargeRuleTargetsList
 */
const se_CostCategorySplitChargeRuleTargetsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CostCategoryValues
 */
const se_CostCategoryValues = (input: CostCategoryValues, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MatchOptions != null && { MatchOptions: se_MatchOptions(input.MatchOptions, context) }),
    ...(input.Values != null && { Values: se_Values(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAnomalyMonitorRequest
 */
const se_CreateAnomalyMonitorRequest = (input: CreateAnomalyMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyMonitor != null && { AnomalyMonitor: se_AnomalyMonitor(input.AnomalyMonitor, context) }),
    ...(input.ResourceTags != null && { ResourceTags: se_ResourceTagList(input.ResourceTags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAnomalySubscriptionRequest
 */
const se_CreateAnomalySubscriptionRequest = (input: CreateAnomalySubscriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnomalySubscription != null && {
      AnomalySubscription: se_AnomalySubscription(input.AnomalySubscription, context),
    }),
    ...(input.ResourceTags != null && { ResourceTags: se_ResourceTagList(input.ResourceTags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateCostCategoryDefinitionRequest
 */
const se_CreateCostCategoryDefinitionRequest = (
  input: CreateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultValue != null && { DefaultValue: input.DefaultValue }),
    ...(input.EffectiveStart != null && { EffectiveStart: input.EffectiveStart }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceTags != null && { ResourceTags: se_ResourceTagList(input.ResourceTags, context) }),
    ...(input.RuleVersion != null && { RuleVersion: input.RuleVersion }),
    ...(input.Rules != null && { Rules: se_CostCategoryRulesList(input.Rules, context) }),
    ...(input.SplitChargeRules != null && {
      SplitChargeRules: se_CostCategorySplitChargeRulesList(input.SplitChargeRules, context),
    }),
  };
};

/**
 * serializeAws_json1_1DateInterval
 */
const se_DateInterval = (input: DateInterval, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: input.End }),
    ...(input.Start != null && { Start: input.Start }),
  };
};

/**
 * serializeAws_json1_1DeleteAnomalyMonitorRequest
 */
const se_DeleteAnomalyMonitorRequest = (input: DeleteAnomalyMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
  };
};

/**
 * serializeAws_json1_1DeleteAnomalySubscriptionRequest
 */
const se_DeleteAnomalySubscriptionRequest = (input: DeleteAnomalySubscriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SubscriptionArn != null && { SubscriptionArn: input.SubscriptionArn }),
  };
};

/**
 * serializeAws_json1_1DeleteCostCategoryDefinitionRequest
 */
const se_DeleteCostCategoryDefinitionRequest = (
  input: DeleteCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn != null && { CostCategoryArn: input.CostCategoryArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCostCategoryDefinitionRequest
 */
const se_DescribeCostCategoryDefinitionRequest = (
  input: DescribeCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn != null && { CostCategoryArn: input.CostCategoryArn }),
    ...(input.EffectiveOn != null && { EffectiveOn: input.EffectiveOn }),
  };
};

/**
 * serializeAws_json1_1DimensionValues
 */
const se_DimensionValues = (input: DimensionValues, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MatchOptions != null && { MatchOptions: se_MatchOptions(input.MatchOptions, context) }),
    ...(input.Values != null && { Values: se_Values(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1EC2Specification
 */
const se_EC2Specification = (input: EC2Specification, context: __SerdeContext): any => {
  return {
    ...(input.OfferingClass != null && { OfferingClass: input.OfferingClass }),
  };
};

/**
 * serializeAws_json1_1Expression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  return {
    ...(input.And != null && { And: se_Expressions(input.And, context) }),
    ...(input.CostCategories != null && { CostCategories: se_CostCategoryValues(input.CostCategories, context) }),
    ...(input.Dimensions != null && { Dimensions: se_DimensionValues(input.Dimensions, context) }),
    ...(input.Not != null && { Not: se_Expression(input.Not, context) }),
    ...(input.Or != null && { Or: se_Expressions(input.Or, context) }),
    ...(input.Tags != null && { Tags: se_TagValues(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Expressions
 */
const se_Expressions = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Expression(entry, context);
    });
};

/**
 * serializeAws_json1_1GetAnomaliesRequest
 */
const se_GetAnomaliesRequest = (input: GetAnomaliesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DateInterval != null && { DateInterval: se_AnomalyDateInterval(input.DateInterval, context) }),
    ...(input.Feedback != null && { Feedback: input.Feedback }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TotalImpact != null && { TotalImpact: se_TotalImpactFilter(input.TotalImpact, context) }),
  };
};

/**
 * serializeAws_json1_1GetAnomalyMonitorsRequest
 */
const se_GetAnomalyMonitorsRequest = (input: GetAnomalyMonitorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArnList != null && { MonitorArnList: se_Values(input.MonitorArnList, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
  };
};

/**
 * serializeAws_json1_1GetAnomalySubscriptionsRequest
 */
const se_GetAnomalySubscriptionsRequest = (input: GetAnomalySubscriptionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SubscriptionArnList != null && { SubscriptionArnList: se_Values(input.SubscriptionArnList, context) }),
  };
};

/**
 * serializeAws_json1_1GetCostAndUsageRequest
 */
const se_GetCostAndUsageRequest = (input: GetCostAndUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: se_GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics != null && { Metrics: se_MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetCostAndUsageWithResourcesRequest
 */
const se_GetCostAndUsageWithResourcesRequest = (
  input: GetCostAndUsageWithResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: se_GroupDefinitions(input.GroupBy, context) }),
    ...(input.Metrics != null && { Metrics: se_MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetCostCategoriesRequest
 */
const se_GetCostCategoriesRequest = (input: GetCostCategoriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CostCategoryName != null && { CostCategoryName: input.CostCategoryName }),
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString != null && { SearchString: input.SearchString }),
    ...(input.SortBy != null && { SortBy: se_SortDefinitions(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetCostForecastRequest
 */
const se_GetCostForecastRequest = (input: GetCostForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel != null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetDimensionValuesRequest
 */
const se_GetDimensionValuesRequest = (input: GetDimensionValuesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Context != null && { Context: input.Context }),
    ...(input.Dimension != null && { Dimension: input.Dimension }),
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString != null && { SearchString: input.SearchString }),
    ...(input.SortBy != null && { SortBy: se_SortDefinitions(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetReservationCoverageRequest
 */
const se_GetReservationCoverageRequest = (input: GetReservationCoverageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: se_GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: se_MetricNames(input.Metrics, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SortBy != null && { SortBy: se_SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetReservationPurchaseRecommendationRequest
 */
const se_GetReservationPurchaseRecommendationRequest = (
  input: GetReservationPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.AccountScope != null && { AccountScope: input.AccountScope }),
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.LookbackPeriodInDays != null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PaymentOption != null && { PaymentOption: input.PaymentOption }),
    ...(input.Service != null && { Service: input.Service }),
    ...(input.ServiceSpecification != null && {
      ServiceSpecification: se_ServiceSpecification(input.ServiceSpecification, context),
    }),
    ...(input.TermInYears != null && { TermInYears: input.TermInYears }),
  };
};

/**
 * serializeAws_json1_1GetReservationUtilizationRequest
 */
const se_GetReservationUtilizationRequest = (input: GetReservationUtilizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: se_GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SortBy != null && { SortBy: se_SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetRightsizingRecommendationRequest
 */
const se_GetRightsizingRecommendationRequest = (
  input: GetRightsizingRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configuration != null && {
      Configuration: se_RightsizingRecommendationConfiguration(input.Configuration, context),
    }),
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.Service != null && { Service: input.Service }),
  };
};

/**
 * serializeAws_json1_1GetSavingsPlansCoverageRequest
 */
const se_GetSavingsPlansCoverageRequest = (input: GetSavingsPlansCoverageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.GroupBy != null && { GroupBy: se_GroupDefinitions(input.GroupBy, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: se_MetricNames(input.Metrics, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: se_SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest
 */
const se_GetSavingsPlansPurchaseRecommendationRequest = (
  input: GetSavingsPlansPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountScope != null && { AccountScope: input.AccountScope }),
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.LookbackPeriodInDays != null && { LookbackPeriodInDays: input.LookbackPeriodInDays }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PaymentOption != null && { PaymentOption: input.PaymentOption }),
    ...(input.SavingsPlansType != null && { SavingsPlansType: input.SavingsPlansType }),
    ...(input.TermInYears != null && { TermInYears: input.TermInYears }),
  };
};

/**
 * serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest
 */
const se_GetSavingsPlansUtilizationDetailsRequest = (
  input: GetSavingsPlansUtilizationDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataType != null && { DataType: se_SavingsPlansDataTypes(input.DataType, context) }),
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: se_SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetSavingsPlansUtilizationRequest
 */
const se_GetSavingsPlansUtilizationRequest = (
  input: GetSavingsPlansUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.SortBy != null && { SortBy: se_SortDefinition(input.SortBy, context) }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetTagsRequest
 */
const se_GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.SearchString != null && { SearchString: input.SearchString }),
    ...(input.SortBy != null && { SortBy: se_SortDefinitions(input.SortBy, context) }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GetUsageForecastRequest
 */
const se_GetUsageForecastRequest = (input: GetUsageForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_Expression(input.Filter, context) }),
    ...(input.Granularity != null && { Granularity: input.Granularity }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel != null && { PredictionIntervalLevel: input.PredictionIntervalLevel }),
    ...(input.TimePeriod != null && { TimePeriod: se_DateInterval(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1GroupDefinition
 */
const se_GroupDefinition = (input: GroupDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1GroupDefinitions
 */
const se_GroupDefinitions = (input: GroupDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GroupDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_1ListCostAllocationTagsRequest
 */
const se_ListCostAllocationTagsRequest = (input: ListCostAllocationTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TagKeys != null && { TagKeys: se_CostAllocationTagKeyList(input.TagKeys, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1ListCostCategoryDefinitionsRequest
 */
const se_ListCostCategoryDefinitionsRequest = (
  input: ListCostCategoryDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EffectiveOn != null && { EffectiveOn: input.EffectiveOn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationRequest
 */
const se_ListSavingsPlansPurchaseRecommendationGenerationRequest = (
  input: ListSavingsPlansPurchaseRecommendationGenerationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GenerationStatus != null && { GenerationStatus: input.GenerationStatus }),
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.RecommendationIds != null && {
      RecommendationIds: se_RecommendationIdList(input.RecommendationIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1MatchOptions
 */
const se_MatchOptions = (input: (MatchOption | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MetricNames
 */
const se_MetricNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MonitorArnList
 */
const se_MonitorArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProvideAnomalyFeedbackRequest
 */
const se_ProvideAnomalyFeedbackRequest = (input: ProvideAnomalyFeedbackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyId != null && { AnomalyId: input.AnomalyId }),
    ...(input.Feedback != null && { Feedback: input.Feedback }),
  };
};

/**
 * serializeAws_json1_1RecommendationIdList
 */
const se_RecommendationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceTag
 */
const se_ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ResourceTagKeyList
 */
const se_ResourceTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceTagList
 */
const se_ResourceTagList = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceTag(entry, context);
    });
};

/**
 * serializeAws_json1_1RightsizingRecommendationConfiguration
 */
const se_RightsizingRecommendationConfiguration = (
  input: RightsizingRecommendationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BenefitsConsidered != null && { BenefitsConsidered: input.BenefitsConsidered }),
    ...(input.RecommendationTarget != null && { RecommendationTarget: input.RecommendationTarget }),
  };
};

/**
 * serializeAws_json1_1SavingsPlansDataTypes
 */
const se_SavingsPlansDataTypes = (input: (SavingsPlansDataType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ServiceSpecification
 */
const se_ServiceSpecification = (input: ServiceSpecification, context: __SerdeContext): any => {
  return {
    ...(input.EC2Specification != null && { EC2Specification: se_EC2Specification(input.EC2Specification, context) }),
  };
};

/**
 * serializeAws_json1_1SortDefinition
 */
const se_SortDefinition = (input: SortDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1SortDefinitions
 */
const se_SortDefinitions = (input: SortDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SortDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationRequest
 */
const se_StartSavingsPlansPurchaseRecommendationGenerationRequest = (
  input: StartSavingsPlansPurchaseRecommendationGenerationRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1Subscriber
 */
const se_Subscriber = (input: Subscriber, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1Subscribers
 */
const se_Subscribers = (input: Subscriber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Subscriber(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceTags != null && { ResourceTags: se_ResourceTagList(input.ResourceTags, context) }),
  };
};

/**
 * serializeAws_json1_1TagValues
 */
const se_TagValues = (input: TagValues, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MatchOptions != null && { MatchOptions: se_MatchOptions(input.MatchOptions, context) }),
    ...(input.Values != null && { Values: se_Values(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1TotalImpactFilter
 */
const se_TotalImpactFilter = (input: TotalImpactFilter, context: __SerdeContext): any => {
  return {
    ...(input.EndValue != null && { EndValue: __serializeFloat(input.EndValue) }),
    ...(input.NumericOperator != null && { NumericOperator: input.NumericOperator }),
    ...(input.StartValue != null && { StartValue: __serializeFloat(input.StartValue) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceTagKeys != null && { ResourceTagKeys: se_ResourceTagKeyList(input.ResourceTagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAnomalyMonitorRequest
 */
const se_UpdateAnomalyMonitorRequest = (input: UpdateAnomalyMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
  };
};

/**
 * serializeAws_json1_1UpdateAnomalySubscriptionRequest
 */
const se_UpdateAnomalySubscriptionRequest = (input: UpdateAnomalySubscriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Frequency != null && { Frequency: input.Frequency }),
    ...(input.MonitorArnList != null && { MonitorArnList: se_MonitorArnList(input.MonitorArnList, context) }),
    ...(input.Subscribers != null && { Subscribers: se_Subscribers(input.Subscribers, context) }),
    ...(input.SubscriptionArn != null && { SubscriptionArn: input.SubscriptionArn }),
    ...(input.SubscriptionName != null && { SubscriptionName: input.SubscriptionName }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdExpression != null && {
      ThresholdExpression: se_Expression(input.ThresholdExpression, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateCostAllocationTagsStatusRequest
 */
const se_UpdateCostAllocationTagsStatusRequest = (
  input: UpdateCostAllocationTagsStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostAllocationTagsStatus != null && {
      CostAllocationTagsStatus: se_CostAllocationTagStatusList(input.CostAllocationTagsStatus, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateCostCategoryDefinitionRequest
 */
const se_UpdateCostCategoryDefinitionRequest = (
  input: UpdateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn != null && { CostCategoryArn: input.CostCategoryArn }),
    ...(input.DefaultValue != null && { DefaultValue: input.DefaultValue }),
    ...(input.EffectiveStart != null && { EffectiveStart: input.EffectiveStart }),
    ...(input.RuleVersion != null && { RuleVersion: input.RuleVersion }),
    ...(input.Rules != null && { Rules: se_CostCategoryRulesList(input.Rules, context) }),
    ...(input.SplitChargeRules != null && {
      SplitChargeRules: se_CostCategorySplitChargeRulesList(input.SplitChargeRules, context),
    }),
  };
};

/**
 * serializeAws_json1_1Values
 */
const se_Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1Anomalies
 */
const de_Anomalies = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Anomaly(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Anomaly
 */
const de_Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return {
    AnomalyEndDate: __expectString(output.AnomalyEndDate),
    AnomalyId: __expectString(output.AnomalyId),
    AnomalyScore: output.AnomalyScore != null ? de_AnomalyScore(output.AnomalyScore, context) : undefined,
    AnomalyStartDate: __expectString(output.AnomalyStartDate),
    DimensionValue: __expectString(output.DimensionValue),
    Feedback: __expectString(output.Feedback),
    Impact: output.Impact != null ? de_Impact(output.Impact, context) : undefined,
    MonitorArn: __expectString(output.MonitorArn),
    RootCauses: output.RootCauses != null ? de_RootCauses(output.RootCauses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AnomalyMonitor
 */
const de_AnomalyMonitor = (output: any, context: __SerdeContext): AnomalyMonitor => {
  return {
    CreationDate: __expectString(output.CreationDate),
    DimensionalValueCount: __expectInt32(output.DimensionalValueCount),
    LastEvaluatedDate: __expectString(output.LastEvaluatedDate),
    LastUpdatedDate: __expectString(output.LastUpdatedDate),
    MonitorArn: __expectString(output.MonitorArn),
    MonitorDimension: __expectString(output.MonitorDimension),
    MonitorName: __expectString(output.MonitorName),
    MonitorSpecification:
      output.MonitorSpecification != null ? de_Expression(output.MonitorSpecification, context) : undefined,
    MonitorType: __expectString(output.MonitorType),
  } as any;
};

/**
 * deserializeAws_json1_1AnomalyMonitors
 */
const de_AnomalyMonitors = (output: any, context: __SerdeContext): AnomalyMonitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalyMonitor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AnomalyScore
 */
const de_AnomalyScore = (output: any, context: __SerdeContext): AnomalyScore => {
  return {
    CurrentScore: __limitedParseDouble(output.CurrentScore),
    MaxScore: __limitedParseDouble(output.MaxScore),
  } as any;
};

/**
 * deserializeAws_json1_1AnomalySubscription
 */
const de_AnomalySubscription = (output: any, context: __SerdeContext): AnomalySubscription => {
  return {
    AccountId: __expectString(output.AccountId),
    Frequency: __expectString(output.Frequency),
    MonitorArnList: output.MonitorArnList != null ? de_MonitorArnList(output.MonitorArnList, context) : undefined,
    Subscribers: output.Subscribers != null ? de_Subscribers(output.Subscribers, context) : undefined,
    SubscriptionArn: __expectString(output.SubscriptionArn),
    SubscriptionName: __expectString(output.SubscriptionName),
    Threshold: __limitedParseDouble(output.Threshold),
    ThresholdExpression:
      output.ThresholdExpression != null ? de_Expression(output.ThresholdExpression, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AnomalySubscriptions
 */
const de_AnomalySubscriptions = (output: any, context: __SerdeContext): AnomalySubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalySubscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1BillExpirationException
 */
const de_BillExpirationException = (output: any, context: __SerdeContext): BillExpirationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CostAllocationTag
 */
const de_CostAllocationTag = (output: any, context: __SerdeContext): CostAllocationTag => {
  return {
    Status: __expectString(output.Status),
    TagKey: __expectString(output.TagKey),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1CostAllocationTagList
 */
const de_CostAllocationTagList = (output: any, context: __SerdeContext): CostAllocationTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostAllocationTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CostCategory
 */
const de_CostCategory = (output: any, context: __SerdeContext): CostCategory => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    DefaultValue: __expectString(output.DefaultValue),
    EffectiveEnd: __expectString(output.EffectiveEnd),
    EffectiveStart: __expectString(output.EffectiveStart),
    Name: __expectString(output.Name),
    ProcessingStatus:
      output.ProcessingStatus != null
        ? de_CostCategoryProcessingStatusList(output.ProcessingStatus, context)
        : undefined,
    RuleVersion: __expectString(output.RuleVersion),
    Rules: output.Rules != null ? de_CostCategoryRulesList(output.Rules, context) : undefined,
    SplitChargeRules:
      output.SplitChargeRules != null
        ? de_CostCategorySplitChargeRulesList(output.SplitChargeRules, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostCategoryInheritedValueDimension
 */
const de_CostCategoryInheritedValueDimension = (
  output: any,
  context: __SerdeContext
): CostCategoryInheritedValueDimension => {
  return {
    DimensionKey: __expectString(output.DimensionKey),
    DimensionName: __expectString(output.DimensionName),
  } as any;
};

/**
 * deserializeAws_json1_1CostCategoryNamesList
 */
const de_CostCategoryNamesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1CostCategoryProcessingStatus
 */
const de_CostCategoryProcessingStatus = (output: any, context: __SerdeContext): CostCategoryProcessingStatus => {
  return {
    Component: __expectString(output.Component),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1CostCategoryProcessingStatusList
 */
const de_CostCategoryProcessingStatusList = (output: any, context: __SerdeContext): CostCategoryProcessingStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostCategoryProcessingStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CostCategoryReference
 */
const de_CostCategoryReference = (output: any, context: __SerdeContext): CostCategoryReference => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    DefaultValue: __expectString(output.DefaultValue),
    EffectiveEnd: __expectString(output.EffectiveEnd),
    EffectiveStart: __expectString(output.EffectiveStart),
    Name: __expectString(output.Name),
    NumberOfRules: __expectInt32(output.NumberOfRules),
    ProcessingStatus:
      output.ProcessingStatus != null
        ? de_CostCategoryProcessingStatusList(output.ProcessingStatus, context)
        : undefined,
    Values: output.Values != null ? de_CostCategoryValuesList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostCategoryReferencesList
 */
const de_CostCategoryReferencesList = (output: any, context: __SerdeContext): CostCategoryReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostCategoryReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CostCategoryRule
 */
const de_CostCategoryRule = (output: any, context: __SerdeContext): CostCategoryRule => {
  return {
    InheritedValue:
      output.InheritedValue != null
        ? de_CostCategoryInheritedValueDimension(output.InheritedValue, context)
        : undefined,
    Rule: output.Rule != null ? de_Expression(output.Rule, context) : undefined,
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1CostCategoryRulesList
 */
const de_CostCategoryRulesList = (output: any, context: __SerdeContext): CostCategoryRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostCategoryRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CostCategorySplitChargeRule
 */
const de_CostCategorySplitChargeRule = (output: any, context: __SerdeContext): CostCategorySplitChargeRule => {
  return {
    Method: __expectString(output.Method),
    Parameters:
      output.Parameters != null ? de_CostCategorySplitChargeRuleParametersList(output.Parameters, context) : undefined,
    Source: __expectString(output.Source),
    Targets: output.Targets != null ? de_CostCategorySplitChargeRuleTargetsList(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostCategorySplitChargeRuleParameter
 */
const de_CostCategorySplitChargeRuleParameter = (
  output: any,
  context: __SerdeContext
): CostCategorySplitChargeRuleParameter => {
  return {
    Type: __expectString(output.Type),
    Values:
      output.Values != null ? de_CostCategorySplitChargeRuleParameterValuesList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostCategorySplitChargeRuleParametersList
 */
const de_CostCategorySplitChargeRuleParametersList = (
  output: any,
  context: __SerdeContext
): CostCategorySplitChargeRuleParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostCategorySplitChargeRuleParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CostCategorySplitChargeRuleParameterValuesList
 */
const de_CostCategorySplitChargeRuleParameterValuesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1CostCategorySplitChargeRulesList
 */
const de_CostCategorySplitChargeRulesList = (output: any, context: __SerdeContext): CostCategorySplitChargeRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CostCategorySplitChargeRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CostCategorySplitChargeRuleTargetsList
 */
const de_CostCategorySplitChargeRuleTargetsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1CostCategoryValues
 */
const de_CostCategoryValues = (output: any, context: __SerdeContext): CostCategoryValues => {
  return {
    Key: __expectString(output.Key),
    MatchOptions: output.MatchOptions != null ? de_MatchOptions(output.MatchOptions, context) : undefined,
    Values: output.Values != null ? de_Values(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostCategoryValuesList
 */
const de_CostCategoryValuesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Coverage
 */
const de_Coverage = (output: any, context: __SerdeContext): Coverage => {
  return {
    CoverageCost: output.CoverageCost != null ? de_CoverageCost(output.CoverageCost, context) : undefined,
    CoverageHours: output.CoverageHours != null ? de_CoverageHours(output.CoverageHours, context) : undefined,
    CoverageNormalizedUnits:
      output.CoverageNormalizedUnits != null
        ? de_CoverageNormalizedUnits(output.CoverageNormalizedUnits, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CoverageByTime
 */
const de_CoverageByTime = (output: any, context: __SerdeContext): CoverageByTime => {
  return {
    Groups: output.Groups != null ? de_ReservationCoverageGroups(output.Groups, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? de_Coverage(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CoverageCost
 */
const de_CoverageCost = (output: any, context: __SerdeContext): CoverageCost => {
  return {
    OnDemandCost: __expectString(output.OnDemandCost),
  } as any;
};

/**
 * deserializeAws_json1_1CoverageHours
 */
const de_CoverageHours = (output: any, context: __SerdeContext): CoverageHours => {
  return {
    CoverageHoursPercentage: __expectString(output.CoverageHoursPercentage),
    OnDemandHours: __expectString(output.OnDemandHours),
    ReservedHours: __expectString(output.ReservedHours),
    TotalRunningHours: __expectString(output.TotalRunningHours),
  } as any;
};

/**
 * deserializeAws_json1_1CoverageNormalizedUnits
 */
const de_CoverageNormalizedUnits = (output: any, context: __SerdeContext): CoverageNormalizedUnits => {
  return {
    CoverageNormalizedUnitsPercentage: __expectString(output.CoverageNormalizedUnitsPercentage),
    OnDemandNormalizedUnits: __expectString(output.OnDemandNormalizedUnits),
    ReservedNormalizedUnits: __expectString(output.ReservedNormalizedUnits),
    TotalRunningNormalizedUnits: __expectString(output.TotalRunningNormalizedUnits),
  } as any;
};

/**
 * deserializeAws_json1_1CoveragesByTime
 */
const de_CoveragesByTime = (output: any, context: __SerdeContext): CoverageByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoverageByTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAnomalyMonitorResponse
 */
const de_CreateAnomalyMonitorResponse = (output: any, context: __SerdeContext): CreateAnomalyMonitorResponse => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAnomalySubscriptionResponse
 */
const de_CreateAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateAnomalySubscriptionResponse => {
  return {
    SubscriptionArn: __expectString(output.SubscriptionArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCostCategoryDefinitionResponse
 */
const de_CreateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    EffectiveStart: __expectString(output.EffectiveStart),
  } as any;
};

/**
 * deserializeAws_json1_1CurrentInstance
 */
const de_CurrentInstance = (output: any, context: __SerdeContext): CurrentInstance => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    InstanceName: __expectString(output.InstanceName),
    MonthlyCost: __expectString(output.MonthlyCost),
    OnDemandHoursInLookbackPeriod: __expectString(output.OnDemandHoursInLookbackPeriod),
    ReservationCoveredHoursInLookbackPeriod: __expectString(output.ReservationCoveredHoursInLookbackPeriod),
    ResourceDetails: output.ResourceDetails != null ? de_ResourceDetails(output.ResourceDetails, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceUtilization:
      output.ResourceUtilization != null ? de_ResourceUtilization(output.ResourceUtilization, context) : undefined,
    SavingsPlansCoveredHoursInLookbackPeriod: __expectString(output.SavingsPlansCoveredHoursInLookbackPeriod),
    Tags: output.Tags != null ? de_TagValuesList(output.Tags, context) : undefined,
    TotalRunningHoursInLookbackPeriod: __expectString(output.TotalRunningHoursInLookbackPeriod),
  } as any;
};

/**
 * deserializeAws_json1_1DataUnavailableException
 */
const de_DataUnavailableException = (output: any, context: __SerdeContext): DataUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DateInterval
 */
const de_DateInterval = (output: any, context: __SerdeContext): DateInterval => {
  return {
    End: __expectString(output.End),
    Start: __expectString(output.Start),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAnomalyMonitorResponse
 */
const de_DeleteAnomalyMonitorResponse = (output: any, context: __SerdeContext): DeleteAnomalyMonitorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAnomalySubscriptionResponse
 */
const de_DeleteAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteAnomalySubscriptionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteCostCategoryDefinitionResponse
 */
const de_DeleteCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    EffectiveEnd: __expectString(output.EffectiveEnd),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCostCategoryDefinitionResponse
 */
const de_DescribeCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCostCategoryDefinitionResponse => {
  return {
    CostCategory: output.CostCategory != null ? de_CostCategory(output.CostCategory, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DimensionValues
 */
const de_DimensionValues = (output: any, context: __SerdeContext): DimensionValues => {
  return {
    Key: __expectString(output.Key),
    MatchOptions: output.MatchOptions != null ? de_MatchOptions(output.MatchOptions, context) : undefined,
    Values: output.Values != null ? de_Values(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DimensionValuesWithAttributes
 */
const de_DimensionValuesWithAttributes = (output: any, context: __SerdeContext): DimensionValuesWithAttributes => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1DimensionValuesWithAttributesList
 */
const de_DimensionValuesWithAttributesList = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionValuesWithAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DiskResourceUtilization
 */
const de_DiskResourceUtilization = (output: any, context: __SerdeContext): DiskResourceUtilization => {
  return {
    DiskReadBytesPerSecond: __expectString(output.DiskReadBytesPerSecond),
    DiskReadOpsPerSecond: __expectString(output.DiskReadOpsPerSecond),
    DiskWriteBytesPerSecond: __expectString(output.DiskWriteBytesPerSecond),
    DiskWriteOpsPerSecond: __expectString(output.DiskWriteOpsPerSecond),
  } as any;
};

/**
 * deserializeAws_json1_1EBSResourceUtilization
 */
const de_EBSResourceUtilization = (output: any, context: __SerdeContext): EBSResourceUtilization => {
  return {
    EbsReadBytesPerSecond: __expectString(output.EbsReadBytesPerSecond),
    EbsReadOpsPerSecond: __expectString(output.EbsReadOpsPerSecond),
    EbsWriteBytesPerSecond: __expectString(output.EbsWriteBytesPerSecond),
    EbsWriteOpsPerSecond: __expectString(output.EbsWriteOpsPerSecond),
  } as any;
};

/**
 * deserializeAws_json1_1EC2InstanceDetails
 */
const de_EC2InstanceDetails = (output: any, context: __SerdeContext): EC2InstanceDetails => {
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

/**
 * deserializeAws_json1_1EC2ResourceDetails
 */
const de_EC2ResourceDetails = (output: any, context: __SerdeContext): EC2ResourceDetails => {
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

/**
 * deserializeAws_json1_1EC2ResourceUtilization
 */
const de_EC2ResourceUtilization = (output: any, context: __SerdeContext): EC2ResourceUtilization => {
  return {
    DiskResourceUtilization:
      output.DiskResourceUtilization != null
        ? de_DiskResourceUtilization(output.DiskResourceUtilization, context)
        : undefined,
    EBSResourceUtilization:
      output.EBSResourceUtilization != null
        ? de_EBSResourceUtilization(output.EBSResourceUtilization, context)
        : undefined,
    MaxCpuUtilizationPercentage: __expectString(output.MaxCpuUtilizationPercentage),
    MaxMemoryUtilizationPercentage: __expectString(output.MaxMemoryUtilizationPercentage),
    MaxStorageUtilizationPercentage: __expectString(output.MaxStorageUtilizationPercentage),
    NetworkResourceUtilization:
      output.NetworkResourceUtilization != null
        ? de_NetworkResourceUtilization(output.NetworkResourceUtilization, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2Specification
 */
const de_EC2Specification = (output: any, context: __SerdeContext): EC2Specification => {
  return {
    OfferingClass: __expectString(output.OfferingClass),
  } as any;
};

/**
 * deserializeAws_json1_1ElastiCacheInstanceDetails
 */
const de_ElastiCacheInstanceDetails = (output: any, context: __SerdeContext): ElastiCacheInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    Family: __expectString(output.Family),
    NodeType: __expectString(output.NodeType),
    ProductDescription: __expectString(output.ProductDescription),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

/**
 * deserializeAws_json1_1ESInstanceDetails
 */
const de_ESInstanceDetails = (output: any, context: __SerdeContext): ESInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    InstanceClass: __expectString(output.InstanceClass),
    InstanceSize: __expectString(output.InstanceSize),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

/**
 * deserializeAws_json1_1Expression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  return {
    And: output.And != null ? de_Expressions(output.And, context) : undefined,
    CostCategories: output.CostCategories != null ? de_CostCategoryValues(output.CostCategories, context) : undefined,
    Dimensions: output.Dimensions != null ? de_DimensionValues(output.Dimensions, context) : undefined,
    Not: output.Not != null ? de_Expression(output.Not, context) : undefined,
    Or: output.Or != null ? de_Expressions(output.Or, context) : undefined,
    Tags: output.Tags != null ? de_TagValues(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Expressions
 */
const de_Expressions = (output: any, context: __SerdeContext): Expression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Expression(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FindingReasonCodes
 */
const de_FindingReasonCodes = (output: any, context: __SerdeContext): (FindingReasonCode | string)[] => {
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
 * deserializeAws_json1_1ForecastResult
 */
const de_ForecastResult = (output: any, context: __SerdeContext): ForecastResult => {
  return {
    MeanValue: __expectString(output.MeanValue),
    PredictionIntervalLowerBound: __expectString(output.PredictionIntervalLowerBound),
    PredictionIntervalUpperBound: __expectString(output.PredictionIntervalUpperBound),
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ForecastResultsByTime
 */
const de_ForecastResultsByTime = (output: any, context: __SerdeContext): ForecastResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ForecastResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GenerationExistsException
 */
const de_GenerationExistsException = (output: any, context: __SerdeContext): GenerationExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1GenerationSummary
 */
const de_GenerationSummary = (output: any, context: __SerdeContext): GenerationSummary => {
  return {
    EstimatedCompletionTime: __expectString(output.EstimatedCompletionTime),
    GenerationCompletionTime: __expectString(output.GenerationCompletionTime),
    GenerationStartedTime: __expectString(output.GenerationStartedTime),
    GenerationStatus: __expectString(output.GenerationStatus),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

/**
 * deserializeAws_json1_1GenerationSummaryList
 */
const de_GenerationSummaryList = (output: any, context: __SerdeContext): GenerationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GenerationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAnomaliesResponse
 */
const de_GetAnomaliesResponse = (output: any, context: __SerdeContext): GetAnomaliesResponse => {
  return {
    Anomalies: output.Anomalies != null ? de_Anomalies(output.Anomalies, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAnomalyMonitorsResponse
 */
const de_GetAnomalyMonitorsResponse = (output: any, context: __SerdeContext): GetAnomalyMonitorsResponse => {
  return {
    AnomalyMonitors: output.AnomalyMonitors != null ? de_AnomalyMonitors(output.AnomalyMonitors, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetAnomalySubscriptionsResponse
 */
const de_GetAnomalySubscriptionsResponse = (output: any, context: __SerdeContext): GetAnomalySubscriptionsResponse => {
  return {
    AnomalySubscriptions:
      output.AnomalySubscriptions != null ? de_AnomalySubscriptions(output.AnomalySubscriptions, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetCostAndUsageResponse
 */
const de_GetCostAndUsageResponse = (output: any, context: __SerdeContext): GetCostAndUsageResponse => {
  return {
    DimensionValueAttributes:
      output.DimensionValueAttributes != null
        ? de_DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
        : undefined,
    GroupDefinitions:
      output.GroupDefinitions != null ? de_GroupDefinitions(output.GroupDefinitions, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ResultsByTime: output.ResultsByTime != null ? de_ResultsByTime(output.ResultsByTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCostAndUsageWithResourcesResponse
 */
const de_GetCostAndUsageWithResourcesResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageWithResourcesResponse => {
  return {
    DimensionValueAttributes:
      output.DimensionValueAttributes != null
        ? de_DimensionValuesWithAttributesList(output.DimensionValueAttributes, context)
        : undefined,
    GroupDefinitions:
      output.GroupDefinitions != null ? de_GroupDefinitions(output.GroupDefinitions, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ResultsByTime: output.ResultsByTime != null ? de_ResultsByTime(output.ResultsByTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCostCategoriesResponse
 */
const de_GetCostCategoriesResponse = (output: any, context: __SerdeContext): GetCostCategoriesResponse => {
  return {
    CostCategoryNames:
      output.CostCategoryNames != null ? de_CostCategoryNamesList(output.CostCategoryNames, context) : undefined,
    CostCategoryValues:
      output.CostCategoryValues != null ? de_CostCategoryValuesList(output.CostCategoryValues, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ReturnSize: __expectInt32(output.ReturnSize),
    TotalSize: __expectInt32(output.TotalSize),
  } as any;
};

/**
 * deserializeAws_json1_1GetCostForecastResponse
 */
const de_GetCostForecastResponse = (output: any, context: __SerdeContext): GetCostForecastResponse => {
  return {
    ForecastResultsByTime:
      output.ForecastResultsByTime != null
        ? de_ForecastResultsByTime(output.ForecastResultsByTime, context)
        : undefined,
    Total: output.Total != null ? de_MetricValue(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDimensionValuesResponse
 */
const de_GetDimensionValuesResponse = (output: any, context: __SerdeContext): GetDimensionValuesResponse => {
  return {
    DimensionValues:
      output.DimensionValues != null
        ? de_DimensionValuesWithAttributesList(output.DimensionValues, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    ReturnSize: __expectInt32(output.ReturnSize),
    TotalSize: __expectInt32(output.TotalSize),
  } as any;
};

/**
 * deserializeAws_json1_1GetReservationCoverageResponse
 */
const de_GetReservationCoverageResponse = (output: any, context: __SerdeContext): GetReservationCoverageResponse => {
  return {
    CoveragesByTime: output.CoveragesByTime != null ? de_CoveragesByTime(output.CoveragesByTime, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    Total: output.Total != null ? de_Coverage(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetReservationPurchaseRecommendationResponse
 */
const de_GetReservationPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationPurchaseRecommendationResponse => {
  return {
    Metadata:
      output.Metadata != null ? de_ReservationPurchaseRecommendationMetadata(output.Metadata, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    Recommendations:
      output.Recommendations != null
        ? de_ReservationPurchaseRecommendations(output.Recommendations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetReservationUtilizationResponse
 */
const de_GetReservationUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationUtilizationResponse => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Total: output.Total != null ? de_ReservationAggregates(output.Total, context) : undefined,
    UtilizationsByTime:
      output.UtilizationsByTime != null ? de_UtilizationsByTime(output.UtilizationsByTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRightsizingRecommendationResponse
 */
const de_GetRightsizingRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetRightsizingRecommendationResponse => {
  return {
    Configuration:
      output.Configuration != null
        ? de_RightsizingRecommendationConfiguration(output.Configuration, context)
        : undefined,
    Metadata: output.Metadata != null ? de_RightsizingRecommendationMetadata(output.Metadata, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    RightsizingRecommendations:
      output.RightsizingRecommendations != null
        ? de_RightsizingRecommendationList(output.RightsizingRecommendations, context)
        : undefined,
    Summary: output.Summary != null ? de_RightsizingRecommendationSummary(output.Summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSavingsPlansCoverageResponse
 */
const de_GetSavingsPlansCoverageResponse = (output: any, context: __SerdeContext): GetSavingsPlansCoverageResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SavingsPlansCoverages:
      output.SavingsPlansCoverages != null
        ? de_SavingsPlansCoverages(output.SavingsPlansCoverages, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse
 */
const de_GetSavingsPlansPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansPurchaseRecommendationResponse => {
  return {
    Metadata:
      output.Metadata != null ? de_SavingsPlansPurchaseRecommendationMetadata(output.Metadata, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
    SavingsPlansPurchaseRecommendation:
      output.SavingsPlansPurchaseRecommendation != null
        ? de_SavingsPlansPurchaseRecommendation(output.SavingsPlansPurchaseRecommendation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse
 */
const de_GetSavingsPlansUtilizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationDetailsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SavingsPlansUtilizationDetails:
      output.SavingsPlansUtilizationDetails != null
        ? de_SavingsPlansUtilizationDetails(output.SavingsPlansUtilizationDetails, context)
        : undefined,
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? de_SavingsPlansUtilizationAggregates(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSavingsPlansUtilizationResponse
 */
const de_GetSavingsPlansUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationResponse => {
  return {
    SavingsPlansUtilizationsByTime:
      output.SavingsPlansUtilizationsByTime != null
        ? de_SavingsPlansUtilizationsByTime(output.SavingsPlansUtilizationsByTime, context)
        : undefined,
    Total: output.Total != null ? de_SavingsPlansUtilizationAggregates(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTagsResponse
 */
const de_GetTagsResponse = (output: any, context: __SerdeContext): GetTagsResponse => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ReturnSize: __expectInt32(output.ReturnSize),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TotalSize: __expectInt32(output.TotalSize),
  } as any;
};

/**
 * deserializeAws_json1_1GetUsageForecastResponse
 */
const de_GetUsageForecastResponse = (output: any, context: __SerdeContext): GetUsageForecastResponse => {
  return {
    ForecastResultsByTime:
      output.ForecastResultsByTime != null
        ? de_ForecastResultsByTime(output.ForecastResultsByTime, context)
        : undefined,
    Total: output.Total != null ? de_MetricValue(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return {
    Keys: output.Keys != null ? de_Keys(output.Keys, context) : undefined,
    Metrics: output.Metrics != null ? de_Metrics(output.Metrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GroupDefinition
 */
const de_GroupDefinition = (output: any, context: __SerdeContext): GroupDefinition => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GroupDefinitions
 */
const de_GroupDefinitions = (output: any, context: __SerdeContext): GroupDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Group(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Impact
 */
const de_Impact = (output: any, context: __SerdeContext): Impact => {
  return {
    MaxImpact: __limitedParseDouble(output.MaxImpact),
    TotalActualSpend: __limitedParseDouble(output.TotalActualSpend),
    TotalExpectedSpend: __limitedParseDouble(output.TotalExpectedSpend),
    TotalImpact: __limitedParseDouble(output.TotalImpact),
    TotalImpactPercentage: __limitedParseDouble(output.TotalImpactPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceDetails
 */
const de_InstanceDetails = (output: any, context: __SerdeContext): InstanceDetails => {
  return {
    EC2InstanceDetails:
      output.EC2InstanceDetails != null ? de_EC2InstanceDetails(output.EC2InstanceDetails, context) : undefined,
    ESInstanceDetails:
      output.ESInstanceDetails != null ? de_ESInstanceDetails(output.ESInstanceDetails, context) : undefined,
    ElastiCacheInstanceDetails:
      output.ElastiCacheInstanceDetails != null
        ? de_ElastiCacheInstanceDetails(output.ElastiCacheInstanceDetails, context)
        : undefined,
    RDSInstanceDetails:
      output.RDSInstanceDetails != null ? de_RDSInstanceDetails(output.RDSInstanceDetails, context) : undefined,
    RedshiftInstanceDetails:
      output.RedshiftInstanceDetails != null
        ? de_RedshiftInstanceDetails(output.RedshiftInstanceDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Keys
 */
const de_Keys = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListCostAllocationTagsResponse
 */
const de_ListCostAllocationTagsResponse = (output: any, context: __SerdeContext): ListCostAllocationTagsResponse => {
  return {
    CostAllocationTags:
      output.CostAllocationTags != null ? de_CostAllocationTagList(output.CostAllocationTags, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCostCategoryDefinitionsResponse
 */
const de_ListCostCategoryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListCostCategoryDefinitionsResponse => {
  return {
    CostCategoryReferences:
      output.CostCategoryReferences != null
        ? de_CostCategoryReferencesList(output.CostCategoryReferences, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationResponse
 */
const de_ListSavingsPlansPurchaseRecommendationGenerationResponse = (
  output: any,
  context: __SerdeContext
): ListSavingsPlansPurchaseRecommendationGenerationResponse => {
  return {
    GenerationSummaryList:
      output.GenerationSummaryList != null
        ? de_GenerationSummaryList(output.GenerationSummaryList, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    ResourceTags: output.ResourceTags != null ? de_ResourceTagList(output.ResourceTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MatchOptions
 */
const de_MatchOptions = (output: any, context: __SerdeContext): (MatchOption | string)[] => {
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
 * deserializeAws_json1_1Metrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Record<string, MetricValue> => {
  return Object.entries(output).reduce((acc: Record<string, MetricValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MetricValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MetricValue
 */
const de_MetricValue = (output: any, context: __SerdeContext): MetricValue => {
  return {
    Amount: __expectString(output.Amount),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1ModifyRecommendationDetail
 */
const de_ModifyRecommendationDetail = (output: any, context: __SerdeContext): ModifyRecommendationDetail => {
  return {
    TargetInstances:
      output.TargetInstances != null ? de_TargetInstancesList(output.TargetInstances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MonitorArnList
 */
const de_MonitorArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NetworkResourceUtilization
 */
const de_NetworkResourceUtilization = (output: any, context: __SerdeContext): NetworkResourceUtilization => {
  return {
    NetworkInBytesPerSecond: __expectString(output.NetworkInBytesPerSecond),
    NetworkOutBytesPerSecond: __expectString(output.NetworkOutBytesPerSecond),
    NetworkPacketsInPerSecond: __expectString(output.NetworkPacketsInPerSecond),
    NetworkPacketsOutPerSecond: __expectString(output.NetworkPacketsOutPerSecond),
  } as any;
};

/**
 * deserializeAws_json1_1PlatformDifferences
 */
const de_PlatformDifferences = (output: any, context: __SerdeContext): (PlatformDifference | string)[] => {
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
 * deserializeAws_json1_1ProvideAnomalyFeedbackResponse
 */
const de_ProvideAnomalyFeedbackResponse = (output: any, context: __SerdeContext): ProvideAnomalyFeedbackResponse => {
  return {
    AnomalyId: __expectString(output.AnomalyId),
  } as any;
};

/**
 * deserializeAws_json1_1RDSInstanceDetails
 */
const de_RDSInstanceDetails = (output: any, context: __SerdeContext): RDSInstanceDetails => {
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

/**
 * deserializeAws_json1_1RedshiftInstanceDetails
 */
const de_RedshiftInstanceDetails = (output: any, context: __SerdeContext): RedshiftInstanceDetails => {
  return {
    CurrentGeneration: __expectBoolean(output.CurrentGeneration),
    Family: __expectString(output.Family),
    NodeType: __expectString(output.NodeType),
    Region: __expectString(output.Region),
    SizeFlexEligible: __expectBoolean(output.SizeFlexEligible),
  } as any;
};

/**
 * deserializeAws_json1_1RequestChangedException
 */
const de_RequestChangedException = (output: any, context: __SerdeContext): RequestChangedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ReservationAggregates
 */
const de_ReservationAggregates = (output: any, context: __SerdeContext): ReservationAggregates => {
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

/**
 * deserializeAws_json1_1ReservationCoverageGroup
 */
const de_ReservationCoverageGroup = (output: any, context: __SerdeContext): ReservationCoverageGroup => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    Coverage: output.Coverage != null ? de_Coverage(output.Coverage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReservationCoverageGroups
 */
const de_ReservationCoverageGroups = (output: any, context: __SerdeContext): ReservationCoverageGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservationCoverageGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservationPurchaseRecommendation
 */
const de_ReservationPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation => {
  return {
    AccountScope: __expectString(output.AccountScope),
    LookbackPeriodInDays: __expectString(output.LookbackPeriodInDays),
    PaymentOption: __expectString(output.PaymentOption),
    RecommendationDetails:
      output.RecommendationDetails != null
        ? de_ReservationPurchaseRecommendationDetails(output.RecommendationDetails, context)
        : undefined,
    RecommendationSummary:
      output.RecommendationSummary != null
        ? de_ReservationPurchaseRecommendationSummary(output.RecommendationSummary, context)
        : undefined,
    ServiceSpecification:
      output.ServiceSpecification != null ? de_ServiceSpecification(output.ServiceSpecification, context) : undefined,
    TermInYears: __expectString(output.TermInYears),
  } as any;
};

/**
 * deserializeAws_json1_1ReservationPurchaseRecommendationDetail
 */
const de_ReservationPurchaseRecommendationDetail = (
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
    InstanceDetails: output.InstanceDetails != null ? de_InstanceDetails(output.InstanceDetails, context) : undefined,
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

/**
 * deserializeAws_json1_1ReservationPurchaseRecommendationDetails
 */
const de_ReservationPurchaseRecommendationDetails = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservationPurchaseRecommendationDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservationPurchaseRecommendationMetadata
 */
const de_ReservationPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationMetadata => {
  return {
    GenerationTimestamp: __expectString(output.GenerationTimestamp),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

/**
 * deserializeAws_json1_1ReservationPurchaseRecommendations
 */
const de_ReservationPurchaseRecommendations = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservationPurchaseRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservationPurchaseRecommendationSummary
 */
const de_ReservationPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationSummary => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    TotalEstimatedMonthlySavingsAmount: __expectString(output.TotalEstimatedMonthlySavingsAmount),
    TotalEstimatedMonthlySavingsPercentage: __expectString(output.TotalEstimatedMonthlySavingsPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1ReservationUtilizationGroup
 */
const de_ReservationUtilizationGroup = (output: any, context: __SerdeContext): ReservationUtilizationGroup => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    Key: __expectString(output.Key),
    Utilization: output.Utilization != null ? de_ReservationAggregates(output.Utilization, context) : undefined,
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ReservationUtilizationGroups
 */
const de_ReservationUtilizationGroups = (output: any, context: __SerdeContext): ReservationUtilizationGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservationUtilizationGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    EC2ResourceDetails:
      output.EC2ResourceDetails != null ? de_EC2ResourceDetails(output.EC2ResourceDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTag
 */
const de_ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTagList
 */
const de_ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceUtilization
 */
const de_ResourceUtilization = (output: any, context: __SerdeContext): ResourceUtilization => {
  return {
    EC2ResourceUtilization:
      output.EC2ResourceUtilization != null
        ? de_EC2ResourceUtilization(output.EC2ResourceUtilization, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResultByTime
 */
const de_ResultByTime = (output: any, context: __SerdeContext): ResultByTime => {
  return {
    Estimated: __expectBoolean(output.Estimated),
    Groups: output.Groups != null ? de_Groups(output.Groups, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? de_Metrics(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResultsByTime
 */
const de_ResultsByTime = (output: any, context: __SerdeContext): ResultByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultByTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RightsizingRecommendation
 */
const de_RightsizingRecommendation = (output: any, context: __SerdeContext): RightsizingRecommendation => {
  return {
    AccountId: __expectString(output.AccountId),
    CurrentInstance: output.CurrentInstance != null ? de_CurrentInstance(output.CurrentInstance, context) : undefined,
    FindingReasonCodes:
      output.FindingReasonCodes != null ? de_FindingReasonCodes(output.FindingReasonCodes, context) : undefined,
    ModifyRecommendationDetail:
      output.ModifyRecommendationDetail != null
        ? de_ModifyRecommendationDetail(output.ModifyRecommendationDetail, context)
        : undefined,
    RightsizingType: __expectString(output.RightsizingType),
    TerminateRecommendationDetail:
      output.TerminateRecommendationDetail != null
        ? de_TerminateRecommendationDetail(output.TerminateRecommendationDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RightsizingRecommendationConfiguration
 */
const de_RightsizingRecommendationConfiguration = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationConfiguration => {
  return {
    BenefitsConsidered: __expectBoolean(output.BenefitsConsidered),
    RecommendationTarget: __expectString(output.RecommendationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1RightsizingRecommendationList
 */
const de_RightsizingRecommendationList = (output: any, context: __SerdeContext): RightsizingRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RightsizingRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RightsizingRecommendationMetadata
 */
const de_RightsizingRecommendationMetadata = (
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

/**
 * deserializeAws_json1_1RightsizingRecommendationSummary
 */
const de_RightsizingRecommendationSummary = (
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

/**
 * deserializeAws_json1_1RootCause
 */
const de_RootCause = (output: any, context: __SerdeContext): RootCause => {
  return {
    LinkedAccount: __expectString(output.LinkedAccount),
    LinkedAccountName: __expectString(output.LinkedAccountName),
    Region: __expectString(output.Region),
    Service: __expectString(output.Service),
    UsageType: __expectString(output.UsageType),
  } as any;
};

/**
 * deserializeAws_json1_1RootCauses
 */
const de_RootCauses = (output: any, context: __SerdeContext): RootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RootCause(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SavingsPlansAmortizedCommitment
 */
const de_SavingsPlansAmortizedCommitment = (output: any, context: __SerdeContext): SavingsPlansAmortizedCommitment => {
  return {
    AmortizedRecurringCommitment: __expectString(output.AmortizedRecurringCommitment),
    AmortizedUpfrontCommitment: __expectString(output.AmortizedUpfrontCommitment),
    TotalAmortizedCommitment: __expectString(output.TotalAmortizedCommitment),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansCoverage
 */
const de_SavingsPlansCoverage = (output: any, context: __SerdeContext): SavingsPlansCoverage => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    Coverage: output.Coverage != null ? de_SavingsPlansCoverageData(output.Coverage, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansCoverageData
 */
const de_SavingsPlansCoverageData = (output: any, context: __SerdeContext): SavingsPlansCoverageData => {
  return {
    CoveragePercentage: __expectString(output.CoveragePercentage),
    OnDemandCost: __expectString(output.OnDemandCost),
    SpendCoveredBySavingsPlans: __expectString(output.SpendCoveredBySavingsPlans),
    TotalCost: __expectString(output.TotalCost),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansCoverages
 */
const de_SavingsPlansCoverages = (output: any, context: __SerdeContext): SavingsPlansCoverage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlansCoverage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SavingsPlansDetails
 */
const de_SavingsPlansDetails = (output: any, context: __SerdeContext): SavingsPlansDetails => {
  return {
    InstanceFamily: __expectString(output.InstanceFamily),
    OfferingId: __expectString(output.OfferingId),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansPurchaseRecommendation
 */
const de_SavingsPlansPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendation => {
  return {
    AccountScope: __expectString(output.AccountScope),
    LookbackPeriodInDays: __expectString(output.LookbackPeriodInDays),
    PaymentOption: __expectString(output.PaymentOption),
    SavingsPlansPurchaseRecommendationDetails:
      output.SavingsPlansPurchaseRecommendationDetails != null
        ? de_SavingsPlansPurchaseRecommendationDetailList(output.SavingsPlansPurchaseRecommendationDetails, context)
        : undefined,
    SavingsPlansPurchaseRecommendationSummary:
      output.SavingsPlansPurchaseRecommendationSummary != null
        ? de_SavingsPlansPurchaseRecommendationSummary(output.SavingsPlansPurchaseRecommendationSummary, context)
        : undefined,
    SavingsPlansType: __expectString(output.SavingsPlansType),
    TermInYears: __expectString(output.TermInYears),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail
 */
const de_SavingsPlansPurchaseRecommendationDetail = (
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
      output.SavingsPlansDetails != null ? de_SavingsPlansDetails(output.SavingsPlansDetails, context) : undefined,
    UpfrontCost: __expectString(output.UpfrontCost),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList
 */
const de_SavingsPlansPurchaseRecommendationDetailList = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlansPurchaseRecommendationDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata
 */
const de_SavingsPlansPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationMetadata => {
  return {
    AdditionalMetadata: __expectString(output.AdditionalMetadata),
    GenerationTimestamp: __expectString(output.GenerationTimestamp),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary
 */
const de_SavingsPlansPurchaseRecommendationSummary = (
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

/**
 * deserializeAws_json1_1SavingsPlansSavings
 */
const de_SavingsPlansSavings = (output: any, context: __SerdeContext): SavingsPlansSavings => {
  return {
    NetSavings: __expectString(output.NetSavings),
    OnDemandCostEquivalent: __expectString(output.OnDemandCostEquivalent),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansUtilization
 */
const de_SavingsPlansUtilization = (output: any, context: __SerdeContext): SavingsPlansUtilization => {
  return {
    TotalCommitment: __expectString(output.TotalCommitment),
    UnusedCommitment: __expectString(output.UnusedCommitment),
    UsedCommitment: __expectString(output.UsedCommitment),
    UtilizationPercentage: __expectString(output.UtilizationPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansUtilizationAggregates
 */
const de_SavingsPlansUtilizationAggregates = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationAggregates => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment != null
        ? de_SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Savings: output.Savings != null ? de_SavingsPlansSavings(output.Savings, context) : undefined,
    Utilization: output.Utilization != null ? de_SavingsPlansUtilization(output.Utilization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansUtilizationByTime
 */
const de_SavingsPlansUtilizationByTime = (output: any, context: __SerdeContext): SavingsPlansUtilizationByTime => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment != null
        ? de_SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Savings: output.Savings != null ? de_SavingsPlansSavings(output.Savings, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
    Utilization: output.Utilization != null ? de_SavingsPlansUtilization(output.Utilization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansUtilizationDetail
 */
const de_SavingsPlansUtilizationDetail = (output: any, context: __SerdeContext): SavingsPlansUtilizationDetail => {
  return {
    AmortizedCommitment:
      output.AmortizedCommitment != null
        ? de_SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context)
        : undefined,
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    Savings: output.Savings != null ? de_SavingsPlansSavings(output.Savings, context) : undefined,
    SavingsPlanArn: __expectString(output.SavingsPlanArn),
    Utilization: output.Utilization != null ? de_SavingsPlansUtilization(output.Utilization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SavingsPlansUtilizationDetails
 */
const de_SavingsPlansUtilizationDetails = (output: any, context: __SerdeContext): SavingsPlansUtilizationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlansUtilizationDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SavingsPlansUtilizationsByTime
 */
const de_SavingsPlansUtilizationsByTime = (output: any, context: __SerdeContext): SavingsPlansUtilizationByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlansUtilizationByTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceSpecification
 */
const de_ServiceSpecification = (output: any, context: __SerdeContext): ServiceSpecification => {
  return {
    EC2Specification:
      output.EC2Specification != null ? de_EC2Specification(output.EC2Specification, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationResponse
 */
const de_StartSavingsPlansPurchaseRecommendationGenerationResponse = (
  output: any,
  context: __SerdeContext
): StartSavingsPlansPurchaseRecommendationGenerationResponse => {
  return {
    EstimatedCompletionTime: __expectString(output.EstimatedCompletionTime),
    GenerationStartedTime: __expectString(output.GenerationStartedTime),
    RecommendationId: __expectString(output.RecommendationId),
  } as any;
};

/**
 * deserializeAws_json1_1Subscriber
 */
const de_Subscriber = (output: any, context: __SerdeContext): Subscriber => {
  return {
    Address: __expectString(output.Address),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Subscribers
 */
const de_Subscribers = (output: any, context: __SerdeContext): Subscriber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subscriber(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TagValues
 */
const de_TagValues = (output: any, context: __SerdeContext): TagValues => {
  return {
    Key: __expectString(output.Key),
    MatchOptions: output.MatchOptions != null ? de_MatchOptions(output.MatchOptions, context) : undefined,
    Values: output.Values != null ? de_Values(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TagValuesList
 */
const de_TagValuesList = (output: any, context: __SerdeContext): TagValues[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagValues(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetInstance
 */
const de_TargetInstance = (output: any, context: __SerdeContext): TargetInstance => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    DefaultTargetInstance: __expectBoolean(output.DefaultTargetInstance),
    EstimatedMonthlyCost: __expectString(output.EstimatedMonthlyCost),
    EstimatedMonthlySavings: __expectString(output.EstimatedMonthlySavings),
    ExpectedResourceUtilization:
      output.ExpectedResourceUtilization != null
        ? de_ResourceUtilization(output.ExpectedResourceUtilization, context)
        : undefined,
    PlatformDifferences:
      output.PlatformDifferences != null ? de_PlatformDifferences(output.PlatformDifferences, context) : undefined,
    ResourceDetails: output.ResourceDetails != null ? de_ResourceDetails(output.ResourceDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetInstancesList
 */
const de_TargetInstancesList = (output: any, context: __SerdeContext): TargetInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TerminateRecommendationDetail
 */
const de_TerminateRecommendationDetail = (output: any, context: __SerdeContext): TerminateRecommendationDetail => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    EstimatedMonthlySavings: __expectString(output.EstimatedMonthlySavings),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

/**
 * deserializeAws_json1_1UnknownMonitorException
 */
const de_UnknownMonitorException = (output: any, context: __SerdeContext): UnknownMonitorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnknownSubscriptionException
 */
const de_UnknownSubscriptionException = (output: any, context: __SerdeContext): UnknownSubscriptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnresolvableUsageUnitException
 */
const de_UnresolvableUsageUnitException = (output: any, context: __SerdeContext): UnresolvableUsageUnitException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAnomalyMonitorResponse
 */
const de_UpdateAnomalyMonitorResponse = (output: any, context: __SerdeContext): UpdateAnomalyMonitorResponse => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAnomalySubscriptionResponse
 */
const de_UpdateAnomalySubscriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateAnomalySubscriptionResponse => {
  return {
    SubscriptionArn: __expectString(output.SubscriptionArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCostAllocationTagsStatusError
 */
const de_UpdateCostAllocationTagsStatusError = (
  output: any,
  context: __SerdeContext
): UpdateCostAllocationTagsStatusError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
    TagKey: __expectString(output.TagKey),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCostAllocationTagsStatusErrors
 */
const de_UpdateCostAllocationTagsStatusErrors = (
  output: any,
  context: __SerdeContext
): UpdateCostAllocationTagsStatusError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateCostAllocationTagsStatusError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateCostAllocationTagsStatusResponse
 */
const de_UpdateCostAllocationTagsStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostAllocationTagsStatusResponse => {
  return {
    Errors: output.Errors != null ? de_UpdateCostAllocationTagsStatusErrors(output.Errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCostCategoryDefinitionResponse
 */
const de_UpdateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostCategoryDefinitionResponse => {
  return {
    CostCategoryArn: __expectString(output.CostCategoryArn),
    EffectiveStart: __expectString(output.EffectiveStart),
  } as any;
};

/**
 * deserializeAws_json1_1UtilizationByTime
 */
const de_UtilizationByTime = (output: any, context: __SerdeContext): UtilizationByTime => {
  return {
    Groups: output.Groups != null ? de_ReservationUtilizationGroups(output.Groups, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_DateInterval(output.TimePeriod, context) : undefined,
    Total: output.Total != null ? de_ReservationAggregates(output.Total, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UtilizationsByTime
 */
const de_UtilizationsByTime = (output: any, context: __SerdeContext): UtilizationByTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UtilizationByTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Values
 */
const de_Values = (output: any, context: __SerdeContext): string[] => {
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
