// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CostAllocationTagStatusEntry,
  CostCategory,
  CostCategoryInheritedValueDimension,
  CostCategoryRule,
  CostCategorySplitChargeRule,
  CostCategorySplitChargeRuleParameter,
  CostCategoryValues,
  CreateAnomalyMonitorRequest,
  CreateAnomalySubscriptionRequest,
  CreateCostCategoryDefinitionRequest,
  DataUnavailableException,
  DateInterval,
  DeleteAnomalyMonitorRequest,
  DeleteAnomalySubscriptionRequest,
  DeleteCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionResponse,
  DimensionValues,
  EC2Specification,
  Expression,
  GenerationExistsException,
  GetAnomaliesRequest,
  GetAnomaliesResponse,
  GetAnomalyMonitorsRequest,
  GetAnomalyMonitorsResponse,
  GetAnomalySubscriptionsRequest,
  GetAnomalySubscriptionsResponse,
  GetCostAndUsageRequest,
  GetCostAndUsageWithResourcesRequest,
  GetCostCategoriesRequest,
  GetCostForecastRequest,
  GetDimensionValuesRequest,
  GetReservationCoverageRequest,
  GetReservationPurchaseRecommendationRequest,
  GetReservationUtilizationRequest,
  GetRightsizingRecommendationRequest,
  GetSavingsPlansCoverageRequest,
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationRequest,
  GetTagsRequest,
  GetUsageForecastRequest,
  GroupDefinition,
  Impact,
  InvalidNextTokenException,
  LimitExceededException,
  ListCostAllocationTagsRequest,
  ListCostCategoryDefinitionsRequest,
  ListSavingsPlansPurchaseRecommendationGenerationRequest,
  ListTagsForResourceRequest,
  MatchOption,
  ProvideAnomalyFeedbackRequest,
  RequestChangedException,
  ResourceNotFoundException,
  ResourceTag,
  RightsizingRecommendationConfiguration,
  SavingsPlansDataType,
  ServiceQuotaExceededException,
  ServiceSpecification,
  SortDefinition,
  StartSavingsPlansPurchaseRecommendationGenerationRequest,
  Subscriber,
  TagResourceRequest,
  TagValues,
  TooManyTagsException,
  TotalImpactFilter,
  UnknownMonitorException,
  UnknownSubscriptionException,
  UnresolvableUsageUnitException,
  UntagResourceRequest,
  UpdateAnomalyMonitorRequest,
  UpdateAnomalySubscriptionRequest,
  UpdateCostAllocationTagsStatusRequest,
  UpdateCostCategoryDefinitionRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateAnomalyMonitorCommand
 */
export const se_CreateAnomalyMonitorCommand = async (
  input: CreateAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAnomalyMonitor");
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
  const headers: __HeaderBag = sharedHeaders("CreateAnomalySubscription");
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
  const headers: __HeaderBag = sharedHeaders("CreateCostCategoryDefinition");
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
  const headers: __HeaderBag = sharedHeaders("DeleteAnomalyMonitor");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAnomalySubscriptionCommand
 */
export const se_DeleteAnomalySubscriptionCommand = async (
  input: DeleteAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAnomalySubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCostCategoryDefinitionCommand
 */
export const se_DeleteCostCategoryDefinitionCommand = async (
  input: DeleteCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCostCategoryDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCostCategoryDefinitionCommand
 */
export const se_DescribeCostCategoryDefinitionCommand = async (
  input: DescribeCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCostCategoryDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAnomaliesCommand
 */
export const se_GetAnomaliesCommand = async (
  input: GetAnomaliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAnomalies");
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
  const headers: __HeaderBag = sharedHeaders("GetAnomalyMonitors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAnomalySubscriptionsCommand
 */
export const se_GetAnomalySubscriptionsCommand = async (
  input: GetAnomalySubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAnomalySubscriptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCostAndUsageCommand
 */
export const se_GetCostAndUsageCommand = async (
  input: GetCostAndUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCostAndUsage");
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
  const headers: __HeaderBag = sharedHeaders("GetCostAndUsageWithResources");
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
  const headers: __HeaderBag = sharedHeaders("GetCostCategories");
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
  const headers: __HeaderBag = sharedHeaders("GetCostForecast");
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
  const headers: __HeaderBag = sharedHeaders("GetDimensionValues");
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
  const headers: __HeaderBag = sharedHeaders("GetReservationCoverage");
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
  const headers: __HeaderBag = sharedHeaders("GetReservationPurchaseRecommendation");
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
  const headers: __HeaderBag = sharedHeaders("GetReservationUtilization");
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
  const headers: __HeaderBag = sharedHeaders("GetRightsizingRecommendation");
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
  const headers: __HeaderBag = sharedHeaders("GetSavingsPlansCoverage");
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
  const headers: __HeaderBag = sharedHeaders("GetSavingsPlansPurchaseRecommendation");
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
  const headers: __HeaderBag = sharedHeaders("GetSavingsPlansUtilization");
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
  const headers: __HeaderBag = sharedHeaders("GetSavingsPlansUtilizationDetails");
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
  const headers: __HeaderBag = sharedHeaders("GetTags");
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
  const headers: __HeaderBag = sharedHeaders("GetUsageForecast");
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
  const headers: __HeaderBag = sharedHeaders("ListCostAllocationTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCostCategoryDefinitionsCommand
 */
export const se_ListCostCategoryDefinitionsCommand = async (
  input: ListCostCategoryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCostCategoryDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSavingsPlansPurchaseRecommendationGenerationCommand
 */
export const se_ListSavingsPlansPurchaseRecommendationGenerationCommand = async (
  input: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSavingsPlansPurchaseRecommendationGeneration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ProvideAnomalyFeedbackCommand
 */
export const se_ProvideAnomalyFeedbackCommand = async (
  input: ProvideAnomalyFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ProvideAnomalyFeedback");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSavingsPlansPurchaseRecommendationGenerationCommand
 */
export const se_StartSavingsPlansPurchaseRecommendationGenerationCommand = async (
  input: StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSavingsPlansPurchaseRecommendationGeneration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAnomalyMonitorCommand
 */
export const se_UpdateAnomalyMonitorCommand = async (
  input: UpdateAnomalyMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAnomalyMonitor");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAnomalySubscriptionCommand
 */
export const se_UpdateAnomalySubscriptionCommand = async (
  input: UpdateAnomalySubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAnomalySubscription");
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
  const headers: __HeaderBag = sharedHeaders("UpdateCostAllocationTagsStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCostCategoryDefinitionCommand
 */
export const se_UpdateCostCategoryDefinitionCommand = async (
  input: UpdateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCostCategoryDefinition");
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
  contents = _json(data);
  const response: CreateAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCostAndUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCostAndUsageWithResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCostCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCostForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDimensionValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetReservationCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetReservationPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetReservationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRightsizingRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSavingsPlansCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSavingsPlansPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSavingsPlansUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSavingsPlansUtilizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetUsageForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCostAllocationTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCostCategoryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListSavingsPlansPurchaseRecommendationGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ProvideAnomalyFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSavingsPlansPurchaseRecommendationGenerationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateAnomalyMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateAnomalySubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateCostAllocationTagsStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnresolvableUsageUnitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AnomalyDateInterval omitted.

/**
 * serializeAws_json1_1AnomalyMonitor
 */
const se_AnomalyMonitor = (input: AnomalyMonitor, context: __SerdeContext): any => {
  return take(input, {
    CreationDate: [],
    DimensionalValueCount: [],
    LastEvaluatedDate: [],
    LastUpdatedDate: [],
    MonitorArn: [],
    MonitorDimension: [],
    MonitorName: [],
    MonitorSpecification: (_) => se_Expression(_, context),
    MonitorType: [],
  });
};

/**
 * serializeAws_json1_1AnomalySubscription
 */
const se_AnomalySubscription = (input: AnomalySubscription, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    Frequency: [],
    MonitorArnList: _json,
    Subscribers: _json,
    SubscriptionArn: [],
    SubscriptionName: [],
    Threshold: __serializeFloat,
    ThresholdExpression: (_) => se_Expression(_, context),
  });
};

// se_CostAllocationTagKeyList omitted.

// se_CostAllocationTagStatusEntry omitted.

// se_CostAllocationTagStatusList omitted.

// se_CostCategoryInheritedValueDimension omitted.

/**
 * serializeAws_json1_1CostCategoryRule
 */
const se_CostCategoryRule = (input: CostCategoryRule, context: __SerdeContext): any => {
  return take(input, {
    InheritedValue: _json,
    Rule: (_) => se_Expression(_, context),
    Type: [],
    Value: [],
  });
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

// se_CostCategorySplitChargeRule omitted.

// se_CostCategorySplitChargeRuleParameter omitted.

// se_CostCategorySplitChargeRuleParametersList omitted.

// se_CostCategorySplitChargeRuleParameterValuesList omitted.

// se_CostCategorySplitChargeRulesList omitted.

// se_CostCategorySplitChargeRuleTargetsList omitted.

// se_CostCategoryValues omitted.

/**
 * serializeAws_json1_1CreateAnomalyMonitorRequest
 */
const se_CreateAnomalyMonitorRequest = (input: CreateAnomalyMonitorRequest, context: __SerdeContext): any => {
  return take(input, {
    AnomalyMonitor: (_) => se_AnomalyMonitor(_, context),
    ResourceTags: _json,
  });
};

/**
 * serializeAws_json1_1CreateAnomalySubscriptionRequest
 */
const se_CreateAnomalySubscriptionRequest = (input: CreateAnomalySubscriptionRequest, context: __SerdeContext): any => {
  return take(input, {
    AnomalySubscription: (_) => se_AnomalySubscription(_, context),
    ResourceTags: _json,
  });
};

/**
 * serializeAws_json1_1CreateCostCategoryDefinitionRequest
 */
const se_CreateCostCategoryDefinitionRequest = (
  input: CreateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DefaultValue: [],
    EffectiveStart: [],
    Name: [],
    ResourceTags: _json,
    RuleVersion: [],
    Rules: (_) => se_CostCategoryRulesList(_, context),
    SplitChargeRules: _json,
  });
};

// se_DateInterval omitted.

// se_DeleteAnomalyMonitorRequest omitted.

// se_DeleteAnomalySubscriptionRequest omitted.

// se_DeleteCostCategoryDefinitionRequest omitted.

// se_DescribeCostCategoryDefinitionRequest omitted.

// se_DimensionValues omitted.

// se_EC2Specification omitted.

/**
 * serializeAws_json1_1Expression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  return take(input, {
    And: (_) => se_Expressions(_, context),
    CostCategories: _json,
    Dimensions: _json,
    Not: (_) => se_Expression(_, context),
    Or: (_) => se_Expressions(_, context),
    Tags: _json,
  });
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
  return take(input, {
    DateInterval: _json,
    Feedback: [],
    MaxResults: [],
    MonitorArn: [],
    NextPageToken: [],
    TotalImpact: (_) => se_TotalImpactFilter(_, context),
  });
};

// se_GetAnomalyMonitorsRequest omitted.

// se_GetAnomalySubscriptionsRequest omitted.

/**
 * serializeAws_json1_1GetCostAndUsageRequest
 */
const se_GetCostAndUsageRequest = (input: GetCostAndUsageRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    GroupBy: _json,
    Metrics: _json,
    NextPageToken: [],
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetCostAndUsageWithResourcesRequest
 */
const se_GetCostAndUsageWithResourcesRequest = (
  input: GetCostAndUsageWithResourcesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    GroupBy: _json,
    Metrics: _json,
    NextPageToken: [],
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetCostCategoriesRequest
 */
const se_GetCostCategoriesRequest = (input: GetCostCategoriesRequest, context: __SerdeContext): any => {
  return take(input, {
    CostCategoryName: [],
    Filter: (_) => se_Expression(_, context),
    MaxResults: [],
    NextPageToken: [],
    SearchString: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetCostForecastRequest
 */
const se_GetCostForecastRequest = (input: GetCostForecastRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    Metric: [],
    PredictionIntervalLevel: [],
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetDimensionValuesRequest
 */
const se_GetDimensionValuesRequest = (input: GetDimensionValuesRequest, context: __SerdeContext): any => {
  return take(input, {
    Context: [],
    Dimension: [],
    Filter: (_) => se_Expression(_, context),
    MaxResults: [],
    NextPageToken: [],
    SearchString: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetReservationCoverageRequest
 */
const se_GetReservationCoverageRequest = (input: GetReservationCoverageRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    GroupBy: _json,
    MaxResults: [],
    Metrics: _json,
    NextPageToken: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetReservationPurchaseRecommendationRequest
 */
const se_GetReservationPurchaseRecommendationRequest = (
  input: GetReservationPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccountId: [],
    AccountScope: [],
    Filter: (_) => se_Expression(_, context),
    LookbackPeriodInDays: [],
    NextPageToken: [],
    PageSize: [],
    PaymentOption: [],
    Service: [],
    ServiceSpecification: _json,
    TermInYears: [],
  });
};

/**
 * serializeAws_json1_1GetReservationUtilizationRequest
 */
const se_GetReservationUtilizationRequest = (input: GetReservationUtilizationRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    GroupBy: _json,
    MaxResults: [],
    NextPageToken: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetRightsizingRecommendationRequest
 */
const se_GetRightsizingRecommendationRequest = (
  input: GetRightsizingRecommendationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Configuration: _json,
    Filter: (_) => se_Expression(_, context),
    NextPageToken: [],
    PageSize: [],
    Service: [],
  });
};

/**
 * serializeAws_json1_1GetSavingsPlansCoverageRequest
 */
const se_GetSavingsPlansCoverageRequest = (input: GetSavingsPlansCoverageRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    GroupBy: _json,
    MaxResults: [],
    Metrics: _json,
    NextToken: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest
 */
const se_GetSavingsPlansPurchaseRecommendationRequest = (
  input: GetSavingsPlansPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccountScope: [],
    Filter: (_) => se_Expression(_, context),
    LookbackPeriodInDays: [],
    NextPageToken: [],
    PageSize: [],
    PaymentOption: [],
    SavingsPlansType: [],
    TermInYears: [],
  });
};

/**
 * serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest
 */
const se_GetSavingsPlansUtilizationDetailsRequest = (
  input: GetSavingsPlansUtilizationDetailsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DataType: _json,
    Filter: (_) => se_Expression(_, context),
    MaxResults: [],
    NextToken: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetSavingsPlansUtilizationRequest
 */
const se_GetSavingsPlansUtilizationRequest = (
  input: GetSavingsPlansUtilizationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    SortBy: _json,
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetTagsRequest
 */
const se_GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    MaxResults: [],
    NextPageToken: [],
    SearchString: [],
    SortBy: _json,
    TagKey: [],
    TimePeriod: _json,
  });
};

/**
 * serializeAws_json1_1GetUsageForecastRequest
 */
const se_GetUsageForecastRequest = (input: GetUsageForecastRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_Expression(_, context),
    Granularity: [],
    Metric: [],
    PredictionIntervalLevel: [],
    TimePeriod: _json,
  });
};

// se_GroupDefinition omitted.

// se_GroupDefinitions omitted.

// se_ListCostAllocationTagsRequest omitted.

// se_ListCostCategoryDefinitionsRequest omitted.

// se_ListSavingsPlansPurchaseRecommendationGenerationRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MatchOptions omitted.

// se_MetricNames omitted.

// se_MonitorArnList omitted.

// se_ProvideAnomalyFeedbackRequest omitted.

// se_RecommendationIdList omitted.

// se_ResourceTag omitted.

// se_ResourceTagKeyList omitted.

// se_ResourceTagList omitted.

// se_RightsizingRecommendationConfiguration omitted.

// se_SavingsPlansDataTypes omitted.

// se_ServiceSpecification omitted.

// se_SortDefinition omitted.

// se_SortDefinitions omitted.

// se_StartSavingsPlansPurchaseRecommendationGenerationRequest omitted.

// se_Subscriber omitted.

// se_Subscribers omitted.

// se_TagResourceRequest omitted.

// se_TagValues omitted.

/**
 * serializeAws_json1_1TotalImpactFilter
 */
const se_TotalImpactFilter = (input: TotalImpactFilter, context: __SerdeContext): any => {
  return take(input, {
    EndValue: __serializeFloat,
    NumericOperator: [],
    StartValue: __serializeFloat,
  });
};

// se_UntagResourceRequest omitted.

// se_UpdateAnomalyMonitorRequest omitted.

/**
 * serializeAws_json1_1UpdateAnomalySubscriptionRequest
 */
const se_UpdateAnomalySubscriptionRequest = (input: UpdateAnomalySubscriptionRequest, context: __SerdeContext): any => {
  return take(input, {
    Frequency: [],
    MonitorArnList: _json,
    Subscribers: _json,
    SubscriptionArn: [],
    SubscriptionName: [],
    Threshold: __serializeFloat,
    ThresholdExpression: (_) => se_Expression(_, context),
  });
};

// se_UpdateCostAllocationTagsStatusRequest omitted.

/**
 * serializeAws_json1_1UpdateCostCategoryDefinitionRequest
 */
const se_UpdateCostCategoryDefinitionRequest = (
  input: UpdateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CostCategoryArn: [],
    DefaultValue: [],
    EffectiveStart: [],
    RuleVersion: [],
    Rules: (_) => se_CostCategoryRulesList(_, context),
    SplitChargeRules: _json,
  });
};

// se_Values omitted.

/**
 * deserializeAws_json1_1Anomalies
 */
const de_Anomalies = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Anomaly(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Anomaly
 */
const de_Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return take(output, {
    AnomalyEndDate: __expectString,
    AnomalyId: __expectString,
    AnomalyScore: (_: any) => de_AnomalyScore(_, context),
    AnomalyStartDate: __expectString,
    DimensionValue: __expectString,
    Feedback: __expectString,
    Impact: (_: any) => de_Impact(_, context),
    MonitorArn: __expectString,
    RootCauses: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AnomalyMonitor
 */
const de_AnomalyMonitor = (output: any, context: __SerdeContext): AnomalyMonitor => {
  return take(output, {
    CreationDate: __expectString,
    DimensionalValueCount: __expectInt32,
    LastEvaluatedDate: __expectString,
    LastUpdatedDate: __expectString,
    MonitorArn: __expectString,
    MonitorDimension: __expectString,
    MonitorName: __expectString,
    MonitorSpecification: (_: any) => de_Expression(_, context),
    MonitorType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AnomalyMonitors
 */
const de_AnomalyMonitors = (output: any, context: __SerdeContext): AnomalyMonitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnomalyMonitor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AnomalyScore
 */
const de_AnomalyScore = (output: any, context: __SerdeContext): AnomalyScore => {
  return take(output, {
    CurrentScore: __limitedParseDouble,
    MaxScore: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1AnomalySubscription
 */
const de_AnomalySubscription = (output: any, context: __SerdeContext): AnomalySubscription => {
  return take(output, {
    AccountId: __expectString,
    Frequency: __expectString,
    MonitorArnList: _json,
    Subscribers: _json,
    SubscriptionArn: __expectString,
    SubscriptionName: __expectString,
    Threshold: __limitedParseDouble,
    ThresholdExpression: (_: any) => de_Expression(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AnomalySubscriptions
 */
const de_AnomalySubscriptions = (output: any, context: __SerdeContext): AnomalySubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnomalySubscription(entry, context);
    });
  return retVal;
};

// de_Attributes omitted.

// de_BillExpirationException omitted.

// de_CostAllocationTag omitted.

// de_CostAllocationTagList omitted.

/**
 * deserializeAws_json1_1CostCategory
 */
const de_CostCategory = (output: any, context: __SerdeContext): CostCategory => {
  return take(output, {
    CostCategoryArn: __expectString,
    DefaultValue: __expectString,
    EffectiveEnd: __expectString,
    EffectiveStart: __expectString,
    Name: __expectString,
    ProcessingStatus: _json,
    RuleVersion: __expectString,
    Rules: (_: any) => de_CostCategoryRulesList(_, context),
    SplitChargeRules: _json,
  }) as any;
};

// de_CostCategoryInheritedValueDimension omitted.

// de_CostCategoryNamesList omitted.

// de_CostCategoryProcessingStatus omitted.

// de_CostCategoryProcessingStatusList omitted.

// de_CostCategoryReference omitted.

// de_CostCategoryReferencesList omitted.

/**
 * deserializeAws_json1_1CostCategoryRule
 */
const de_CostCategoryRule = (output: any, context: __SerdeContext): CostCategoryRule => {
  return take(output, {
    InheritedValue: _json,
    Rule: (_: any) => de_Expression(_, context),
    Type: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CostCategoryRulesList
 */
const de_CostCategoryRulesList = (output: any, context: __SerdeContext): CostCategoryRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CostCategoryRule(entry, context);
    });
  return retVal;
};

// de_CostCategorySplitChargeRule omitted.

// de_CostCategorySplitChargeRuleParameter omitted.

// de_CostCategorySplitChargeRuleParametersList omitted.

// de_CostCategorySplitChargeRuleParameterValuesList omitted.

// de_CostCategorySplitChargeRulesList omitted.

// de_CostCategorySplitChargeRuleTargetsList omitted.

// de_CostCategoryValues omitted.

// de_CostCategoryValuesList omitted.

// de_Coverage omitted.

// de_CoverageByTime omitted.

// de_CoverageCost omitted.

// de_CoverageHours omitted.

// de_CoverageNormalizedUnits omitted.

// de_CoveragesByTime omitted.

// de_CreateAnomalyMonitorResponse omitted.

// de_CreateAnomalySubscriptionResponse omitted.

// de_CreateCostCategoryDefinitionResponse omitted.

// de_CurrentInstance omitted.

// de_DataUnavailableException omitted.

// de_DateInterval omitted.

// de_DeleteAnomalyMonitorResponse omitted.

// de_DeleteAnomalySubscriptionResponse omitted.

// de_DeleteCostCategoryDefinitionResponse omitted.

/**
 * deserializeAws_json1_1DescribeCostCategoryDefinitionResponse
 */
const de_DescribeCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCostCategoryDefinitionResponse => {
  return take(output, {
    CostCategory: (_: any) => de_CostCategory(_, context),
  }) as any;
};

// de_DimensionValues omitted.

// de_DimensionValuesWithAttributes omitted.

// de_DimensionValuesWithAttributesList omitted.

// de_DiskResourceUtilization omitted.

// de_EBSResourceUtilization omitted.

// de_EC2InstanceDetails omitted.

// de_EC2ResourceDetails omitted.

// de_EC2ResourceUtilization omitted.

// de_EC2Specification omitted.

// de_ElastiCacheInstanceDetails omitted.

// de_ESInstanceDetails omitted.

/**
 * deserializeAws_json1_1Expression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  return take(output, {
    And: (_: any) => de_Expressions(_, context),
    CostCategories: _json,
    Dimensions: _json,
    Not: (_: any) => de_Expression(_, context),
    Or: (_: any) => de_Expressions(_, context),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Expressions
 */
const de_Expressions = (output: any, context: __SerdeContext): Expression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Expression(entry, context);
    });
  return retVal;
};

// de_FindingReasonCodes omitted.

// de_ForecastResult omitted.

// de_ForecastResultsByTime omitted.

// de_GenerationExistsException omitted.

// de_GenerationSummary omitted.

// de_GenerationSummaryList omitted.

/**
 * deserializeAws_json1_1GetAnomaliesResponse
 */
const de_GetAnomaliesResponse = (output: any, context: __SerdeContext): GetAnomaliesResponse => {
  return take(output, {
    Anomalies: (_: any) => de_Anomalies(_, context),
    NextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetAnomalyMonitorsResponse
 */
const de_GetAnomalyMonitorsResponse = (output: any, context: __SerdeContext): GetAnomalyMonitorsResponse => {
  return take(output, {
    AnomalyMonitors: (_: any) => de_AnomalyMonitors(_, context),
    NextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetAnomalySubscriptionsResponse
 */
const de_GetAnomalySubscriptionsResponse = (output: any, context: __SerdeContext): GetAnomalySubscriptionsResponse => {
  return take(output, {
    AnomalySubscriptions: (_: any) => de_AnomalySubscriptions(_, context),
    NextPageToken: __expectString,
  }) as any;
};

// de_GetCostAndUsageResponse omitted.

// de_GetCostAndUsageWithResourcesResponse omitted.

// de_GetCostCategoriesResponse omitted.

// de_GetCostForecastResponse omitted.

// de_GetDimensionValuesResponse omitted.

// de_GetReservationCoverageResponse omitted.

// de_GetReservationPurchaseRecommendationResponse omitted.

// de_GetReservationUtilizationResponse omitted.

// de_GetRightsizingRecommendationResponse omitted.

// de_GetSavingsPlansCoverageResponse omitted.

// de_GetSavingsPlansPurchaseRecommendationResponse omitted.

// de_GetSavingsPlansUtilizationDetailsResponse omitted.

// de_GetSavingsPlansUtilizationResponse omitted.

// de_GetTagsResponse omitted.

// de_GetUsageForecastResponse omitted.

// de_Group omitted.

// de_GroupDefinition omitted.

// de_GroupDefinitions omitted.

// de_Groups omitted.

/**
 * deserializeAws_json1_1Impact
 */
const de_Impact = (output: any, context: __SerdeContext): Impact => {
  return take(output, {
    MaxImpact: __limitedParseDouble,
    TotalActualSpend: __limitedParseDouble,
    TotalExpectedSpend: __limitedParseDouble,
    TotalImpact: __limitedParseDouble,
    TotalImpactPercentage: __limitedParseDouble,
  }) as any;
};

// de_InstanceDetails omitted.

// de_InvalidNextTokenException omitted.

// de_Keys omitted.

// de_LimitExceededException omitted.

// de_ListCostAllocationTagsResponse omitted.

// de_ListCostCategoryDefinitionsResponse omitted.

// de_ListSavingsPlansPurchaseRecommendationGenerationResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_MatchOptions omitted.

// de_Metrics omitted.

// de_MetricValue omitted.

// de_ModifyRecommendationDetail omitted.

// de_MonitorArnList omitted.

// de_NetworkResourceUtilization omitted.

// de_PlatformDifferences omitted.

// de_ProvideAnomalyFeedbackResponse omitted.

// de_RDSInstanceDetails omitted.

// de_RedshiftInstanceDetails omitted.

// de_RequestChangedException omitted.

// de_ReservationAggregates omitted.

// de_ReservationCoverageGroup omitted.

// de_ReservationCoverageGroups omitted.

// de_ReservationPurchaseRecommendation omitted.

// de_ReservationPurchaseRecommendationDetail omitted.

// de_ReservationPurchaseRecommendationDetails omitted.

// de_ReservationPurchaseRecommendationMetadata omitted.

// de_ReservationPurchaseRecommendations omitted.

// de_ReservationPurchaseRecommendationSummary omitted.

// de_ReservationUtilizationGroup omitted.

// de_ReservationUtilizationGroups omitted.

// de_ResourceDetails omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

// de_ResourceUtilization omitted.

// de_ResultByTime omitted.

// de_ResultsByTime omitted.

// de_RightsizingRecommendation omitted.

// de_RightsizingRecommendationConfiguration omitted.

// de_RightsizingRecommendationList omitted.

// de_RightsizingRecommendationMetadata omitted.

// de_RightsizingRecommendationSummary omitted.

// de_RootCause omitted.

// de_RootCauses omitted.

// de_SavingsPlansAmortizedCommitment omitted.

// de_SavingsPlansCoverage omitted.

// de_SavingsPlansCoverageData omitted.

// de_SavingsPlansCoverages omitted.

// de_SavingsPlansDetails omitted.

// de_SavingsPlansPurchaseRecommendation omitted.

// de_SavingsPlansPurchaseRecommendationDetail omitted.

// de_SavingsPlansPurchaseRecommendationDetailList omitted.

// de_SavingsPlansPurchaseRecommendationMetadata omitted.

// de_SavingsPlansPurchaseRecommendationSummary omitted.

// de_SavingsPlansSavings omitted.

// de_SavingsPlansUtilization omitted.

// de_SavingsPlansUtilizationAggregates omitted.

// de_SavingsPlansUtilizationByTime omitted.

// de_SavingsPlansUtilizationDetail omitted.

// de_SavingsPlansUtilizationDetails omitted.

// de_SavingsPlansUtilizationsByTime omitted.

// de_ServiceQuotaExceededException omitted.

// de_ServiceSpecification omitted.

// de_StartSavingsPlansPurchaseRecommendationGenerationResponse omitted.

// de_Subscriber omitted.

// de_Subscribers omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TagValues omitted.

// de_TagValuesList omitted.

// de_TargetInstance omitted.

// de_TargetInstancesList omitted.

// de_TerminateRecommendationDetail omitted.

// de_TooManyTagsException omitted.

// de_UnknownMonitorException omitted.

// de_UnknownSubscriptionException omitted.

// de_UnresolvableUsageUnitException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateAnomalyMonitorResponse omitted.

// de_UpdateAnomalySubscriptionResponse omitted.

// de_UpdateCostAllocationTagsStatusError omitted.

// de_UpdateCostAllocationTagsStatusErrors omitted.

// de_UpdateCostAllocationTagsStatusResponse omitted.

// de_UpdateCostCategoryDefinitionResponse omitted.

// de_UtilizationByTime omitted.

// de_UtilizationsByTime omitted.

// de_Values omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSInsightsIndexService.${operation}`,
  };
}

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
