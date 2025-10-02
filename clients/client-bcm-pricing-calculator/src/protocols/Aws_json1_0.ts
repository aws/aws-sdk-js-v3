// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  BatchCreateBillScenarioCommitmentModificationCommandInput,
  BatchCreateBillScenarioCommitmentModificationCommandOutput,
} from "../commands/BatchCreateBillScenarioCommitmentModificationCommand";
import {
  BatchCreateBillScenarioUsageModificationCommandInput,
  BatchCreateBillScenarioUsageModificationCommandOutput,
} from "../commands/BatchCreateBillScenarioUsageModificationCommand";
import {
  BatchCreateWorkloadEstimateUsageCommandInput,
  BatchCreateWorkloadEstimateUsageCommandOutput,
} from "../commands/BatchCreateWorkloadEstimateUsageCommand";
import {
  BatchDeleteBillScenarioCommitmentModificationCommandInput,
  BatchDeleteBillScenarioCommitmentModificationCommandOutput,
} from "../commands/BatchDeleteBillScenarioCommitmentModificationCommand";
import {
  BatchDeleteBillScenarioUsageModificationCommandInput,
  BatchDeleteBillScenarioUsageModificationCommandOutput,
} from "../commands/BatchDeleteBillScenarioUsageModificationCommand";
import {
  BatchDeleteWorkloadEstimateUsageCommandInput,
  BatchDeleteWorkloadEstimateUsageCommandOutput,
} from "../commands/BatchDeleteWorkloadEstimateUsageCommand";
import {
  BatchUpdateBillScenarioCommitmentModificationCommandInput,
  BatchUpdateBillScenarioCommitmentModificationCommandOutput,
} from "../commands/BatchUpdateBillScenarioCommitmentModificationCommand";
import {
  BatchUpdateBillScenarioUsageModificationCommandInput,
  BatchUpdateBillScenarioUsageModificationCommandOutput,
} from "../commands/BatchUpdateBillScenarioUsageModificationCommand";
import {
  BatchUpdateWorkloadEstimateUsageCommandInput,
  BatchUpdateWorkloadEstimateUsageCommandOutput,
} from "../commands/BatchUpdateWorkloadEstimateUsageCommand";
import { CreateBillEstimateCommandInput, CreateBillEstimateCommandOutput } from "../commands/CreateBillEstimateCommand";
import { CreateBillScenarioCommandInput, CreateBillScenarioCommandOutput } from "../commands/CreateBillScenarioCommand";
import {
  CreateWorkloadEstimateCommandInput,
  CreateWorkloadEstimateCommandOutput,
} from "../commands/CreateWorkloadEstimateCommand";
import { DeleteBillEstimateCommandInput, DeleteBillEstimateCommandOutput } from "../commands/DeleteBillEstimateCommand";
import { DeleteBillScenarioCommandInput, DeleteBillScenarioCommandOutput } from "../commands/DeleteBillScenarioCommand";
import {
  DeleteWorkloadEstimateCommandInput,
  DeleteWorkloadEstimateCommandOutput,
} from "../commands/DeleteWorkloadEstimateCommand";
import { GetBillEstimateCommandInput, GetBillEstimateCommandOutput } from "../commands/GetBillEstimateCommand";
import { GetBillScenarioCommandInput, GetBillScenarioCommandOutput } from "../commands/GetBillScenarioCommand";
import { GetPreferencesCommandInput, GetPreferencesCommandOutput } from "../commands/GetPreferencesCommand";
import {
  GetWorkloadEstimateCommandInput,
  GetWorkloadEstimateCommandOutput,
} from "../commands/GetWorkloadEstimateCommand";
import {
  ListBillEstimateCommitmentsCommandInput,
  ListBillEstimateCommitmentsCommandOutput,
} from "../commands/ListBillEstimateCommitmentsCommand";
import {
  ListBillEstimateInputCommitmentModificationsCommandInput,
  ListBillEstimateInputCommitmentModificationsCommandOutput,
} from "../commands/ListBillEstimateInputCommitmentModificationsCommand";
import {
  ListBillEstimateInputUsageModificationsCommandInput,
  ListBillEstimateInputUsageModificationsCommandOutput,
} from "../commands/ListBillEstimateInputUsageModificationsCommand";
import {
  ListBillEstimateLineItemsCommandInput,
  ListBillEstimateLineItemsCommandOutput,
} from "../commands/ListBillEstimateLineItemsCommand";
import { ListBillEstimatesCommandInput, ListBillEstimatesCommandOutput } from "../commands/ListBillEstimatesCommand";
import {
  ListBillScenarioCommitmentModificationsCommandInput,
  ListBillScenarioCommitmentModificationsCommandOutput,
} from "../commands/ListBillScenarioCommitmentModificationsCommand";
import { ListBillScenariosCommandInput, ListBillScenariosCommandOutput } from "../commands/ListBillScenariosCommand";
import {
  ListBillScenarioUsageModificationsCommandInput,
  ListBillScenarioUsageModificationsCommandOutput,
} from "../commands/ListBillScenarioUsageModificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkloadEstimatesCommandInput,
  ListWorkloadEstimatesCommandOutput,
} from "../commands/ListWorkloadEstimatesCommand";
import {
  ListWorkloadEstimateUsageCommandInput,
  ListWorkloadEstimateUsageCommandOutput,
} from "../commands/ListWorkloadEstimateUsageCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBillEstimateCommandInput, UpdateBillEstimateCommandOutput } from "../commands/UpdateBillEstimateCommand";
import { UpdateBillScenarioCommandInput, UpdateBillScenarioCommandOutput } from "../commands/UpdateBillScenarioCommand";
import { UpdatePreferencesCommandInput, UpdatePreferencesCommandOutput } from "../commands/UpdatePreferencesCommand";
import {
  UpdateWorkloadEstimateCommandInput,
  UpdateWorkloadEstimateCommandOutput,
} from "../commands/UpdateWorkloadEstimateCommand";
import { BCMPricingCalculatorServiceException as __BaseException } from "../models/BCMPricingCalculatorServiceException";
import {
  AccessDeniedException,
  AddReservedInstanceAction,
  AddSavingsPlanAction,
  BatchCreateBillScenarioCommitmentModificationEntry,
  BatchCreateBillScenarioCommitmentModificationItem,
  BatchCreateBillScenarioCommitmentModificationRequest,
  BatchCreateBillScenarioCommitmentModificationResponse,
  BatchCreateBillScenarioUsageModificationEntry,
  BatchCreateBillScenarioUsageModificationItem,
  BatchCreateBillScenarioUsageModificationRequest,
  BatchCreateBillScenarioUsageModificationResponse,
  BatchCreateWorkloadEstimateUsageEntry,
  BatchCreateWorkloadEstimateUsageItem,
  BatchCreateWorkloadEstimateUsageRequest,
  BatchCreateWorkloadEstimateUsageResponse,
  BatchDeleteBillScenarioCommitmentModificationRequest,
  BatchDeleteBillScenarioUsageModificationRequest,
  BatchDeleteWorkloadEstimateUsageRequest,
  BatchUpdateBillScenarioCommitmentModificationEntry,
  BatchUpdateBillScenarioCommitmentModificationRequest,
  BatchUpdateBillScenarioCommitmentModificationResponse,
  BatchUpdateBillScenarioUsageModificationEntry,
  BatchUpdateBillScenarioUsageModificationRequest,
  BatchUpdateBillScenarioUsageModificationResponse,
  BatchUpdateWorkloadEstimateUsageEntry,
  BatchUpdateWorkloadEstimateUsageRequest,
  BatchUpdateWorkloadEstimateUsageResponse,
  BillEstimateCommitmentSummary,
  BillEstimateCostSummary,
  BillEstimateInputCommitmentModificationSummary,
  BillEstimateInputUsageModificationSummary,
  BillEstimateLineItemSummary,
  BillEstimateSummary,
  BillInterval,
  BillScenarioCommitmentModificationAction,
  BillScenarioCommitmentModificationItem,
  BillScenarioSummary,
  BillScenarioUsageModificationItem,
  ConflictException,
  CostAmount,
  CostDifference,
  CreateBillEstimateRequest,
  CreateBillEstimateResponse,
  CreateBillScenarioRequest,
  CreateBillScenarioResponse,
  CreateWorkloadEstimateRequest,
  CreateWorkloadEstimateResponse,
  DataUnavailableException,
  DeleteBillEstimateRequest,
  DeleteBillScenarioRequest,
  DeleteWorkloadEstimateRequest,
  Expression,
  ExpressionFilter,
  FilterTimestamp,
  GetBillEstimateRequest,
  GetBillEstimateResponse,
  GetBillScenarioRequest,
  GetBillScenarioResponse,
  GetPreferencesRequest,
  GetWorkloadEstimateRequest,
  GetWorkloadEstimateResponse,
  HistoricalUsageEntity,
  InternalServerException,
  ListBillEstimateCommitmentsRequest,
  ListBillEstimateCommitmentsResponse,
  ListBillEstimateInputCommitmentModificationsRequest,
  ListBillEstimateInputCommitmentModificationsResponse,
  ListBillEstimateInputUsageModificationsRequest,
  ListBillEstimateInputUsageModificationsResponse,
  ListBillEstimateLineItemsFilter,
  ListBillEstimateLineItemsRequest,
  ListBillEstimateLineItemsResponse,
  ListBillEstimatesFilter,
  ListBillEstimatesRequest,
  ListBillEstimatesResponse,
  ListBillScenarioCommitmentModificationsRequest,
  ListBillScenarioCommitmentModificationsResponse,
  ListBillScenariosFilter,
  ListBillScenariosRequest,
  ListBillScenariosResponse,
  ListBillScenarioUsageModificationsRequest,
  ListBillScenarioUsageModificationsResponse,
  ListTagsForResourceRequest,
  ListUsageFilter,
  ListWorkloadEstimatesFilter,
  ListWorkloadEstimatesRequest,
  ListWorkloadEstimatesResponse,
  ListWorkloadEstimateUsageRequest,
  ListWorkloadEstimateUsageResponse,
  NegateReservedInstanceAction,
  NegateSavingsPlanAction,
  RateType,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateBillEstimateRequest,
  UpdateBillEstimateResponse,
  UpdateBillScenarioRequest,
  UpdateBillScenarioResponse,
  UpdatePreferencesRequest,
  UpdateWorkloadEstimateRequest,
  UpdateWorkloadEstimateResponse,
  UsageAmount,
  UsageQuantity,
  UsageQuantityResult,
  ValidationException,
  WorkloadEstimateSummary,
  WorkloadEstimateUsageItem,
  WorkloadEstimateUsageQuantity,
} from "../models/models_0";

/**
 * serializeAws_json1_0BatchCreateBillScenarioCommitmentModificationCommand
 */
export const se_BatchCreateBillScenarioCommitmentModificationCommand = async (
  input: BatchCreateBillScenarioCommitmentModificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreateBillScenarioCommitmentModification");
  let body: any;
  body = JSON.stringify(se_BatchCreateBillScenarioCommitmentModificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioUsageModificationCommand
 */
export const se_BatchCreateBillScenarioUsageModificationCommand = async (
  input: BatchCreateBillScenarioUsageModificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreateBillScenarioUsageModification");
  let body: any;
  body = JSON.stringify(se_BatchCreateBillScenarioUsageModificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchCreateWorkloadEstimateUsageCommand
 */
export const se_BatchCreateWorkloadEstimateUsageCommand = async (
  input: BatchCreateWorkloadEstimateUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreateWorkloadEstimateUsage");
  let body: any;
  body = JSON.stringify(se_BatchCreateWorkloadEstimateUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchDeleteBillScenarioCommitmentModificationCommand
 */
export const se_BatchDeleteBillScenarioCommitmentModificationCommand = async (
  input: BatchDeleteBillScenarioCommitmentModificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteBillScenarioCommitmentModification");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchDeleteBillScenarioUsageModificationCommand
 */
export const se_BatchDeleteBillScenarioUsageModificationCommand = async (
  input: BatchDeleteBillScenarioUsageModificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteBillScenarioUsageModification");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchDeleteWorkloadEstimateUsageCommand
 */
export const se_BatchDeleteWorkloadEstimateUsageCommand = async (
  input: BatchDeleteWorkloadEstimateUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteWorkloadEstimateUsage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchUpdateBillScenarioCommitmentModificationCommand
 */
export const se_BatchUpdateBillScenarioCommitmentModificationCommand = async (
  input: BatchUpdateBillScenarioCommitmentModificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchUpdateBillScenarioCommitmentModification");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchUpdateBillScenarioUsageModificationCommand
 */
export const se_BatchUpdateBillScenarioUsageModificationCommand = async (
  input: BatchUpdateBillScenarioUsageModificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchUpdateBillScenarioUsageModification");
  let body: any;
  body = JSON.stringify(se_BatchUpdateBillScenarioUsageModificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchUpdateWorkloadEstimateUsageCommand
 */
export const se_BatchUpdateWorkloadEstimateUsageCommand = async (
  input: BatchUpdateWorkloadEstimateUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchUpdateWorkloadEstimateUsage");
  let body: any;
  body = JSON.stringify(se_BatchUpdateWorkloadEstimateUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateBillEstimateCommand
 */
export const se_CreateBillEstimateCommand = async (
  input: CreateBillEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBillEstimate");
  let body: any;
  body = JSON.stringify(se_CreateBillEstimateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateBillScenarioCommand
 */
export const se_CreateBillScenarioCommand = async (
  input: CreateBillScenarioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBillScenario");
  let body: any;
  body = JSON.stringify(se_CreateBillScenarioRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateWorkloadEstimateCommand
 */
export const se_CreateWorkloadEstimateCommand = async (
  input: CreateWorkloadEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkloadEstimate");
  let body: any;
  body = JSON.stringify(se_CreateWorkloadEstimateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteBillEstimateCommand
 */
export const se_DeleteBillEstimateCommand = async (
  input: DeleteBillEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBillEstimate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteBillScenarioCommand
 */
export const se_DeleteBillScenarioCommand = async (
  input: DeleteBillScenarioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBillScenario");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteWorkloadEstimateCommand
 */
export const se_DeleteWorkloadEstimateCommand = async (
  input: DeleteWorkloadEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkloadEstimate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetBillEstimateCommand
 */
export const se_GetBillEstimateCommand = async (
  input: GetBillEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBillEstimate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetBillScenarioCommand
 */
export const se_GetBillScenarioCommand = async (
  input: GetBillScenarioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBillScenario");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPreferencesCommand
 */
export const se_GetPreferencesCommand = async (
  input: GetPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetWorkloadEstimateCommand
 */
export const se_GetWorkloadEstimateCommand = async (
  input: GetWorkloadEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkloadEstimate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillEstimateCommitmentsCommand
 */
export const se_ListBillEstimateCommitmentsCommand = async (
  input: ListBillEstimateCommitmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillEstimateCommitments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillEstimateInputCommitmentModificationsCommand
 */
export const se_ListBillEstimateInputCommitmentModificationsCommand = async (
  input: ListBillEstimateInputCommitmentModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillEstimateInputCommitmentModifications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillEstimateInputUsageModificationsCommand
 */
export const se_ListBillEstimateInputUsageModificationsCommand = async (
  input: ListBillEstimateInputUsageModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillEstimateInputUsageModifications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillEstimateLineItemsCommand
 */
export const se_ListBillEstimateLineItemsCommand = async (
  input: ListBillEstimateLineItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillEstimateLineItems");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillEstimatesCommand
 */
export const se_ListBillEstimatesCommand = async (
  input: ListBillEstimatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillEstimates");
  let body: any;
  body = JSON.stringify(se_ListBillEstimatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillScenarioCommitmentModificationsCommand
 */
export const se_ListBillScenarioCommitmentModificationsCommand = async (
  input: ListBillScenarioCommitmentModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillScenarioCommitmentModifications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillScenariosCommand
 */
export const se_ListBillScenariosCommand = async (
  input: ListBillScenariosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillScenarios");
  let body: any;
  body = JSON.stringify(se_ListBillScenariosRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillScenarioUsageModificationsCommand
 */
export const se_ListBillScenarioUsageModificationsCommand = async (
  input: ListBillScenarioUsageModificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillScenarioUsageModifications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0ListWorkloadEstimatesCommand
 */
export const se_ListWorkloadEstimatesCommand = async (
  input: ListWorkloadEstimatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkloadEstimates");
  let body: any;
  body = JSON.stringify(se_ListWorkloadEstimatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListWorkloadEstimateUsageCommand
 */
export const se_ListWorkloadEstimateUsageCommand = async (
  input: ListWorkloadEstimateUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkloadEstimateUsage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * serializeAws_json1_0UpdateBillEstimateCommand
 */
export const se_UpdateBillEstimateCommand = async (
  input: UpdateBillEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBillEstimate");
  let body: any;
  body = JSON.stringify(se_UpdateBillEstimateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateBillScenarioCommand
 */
export const se_UpdateBillScenarioCommand = async (
  input: UpdateBillScenarioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBillScenario");
  let body: any;
  body = JSON.stringify(se_UpdateBillScenarioRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePreferencesCommand
 */
export const se_UpdatePreferencesCommand = async (
  input: UpdatePreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateWorkloadEstimateCommand
 */
export const se_UpdateWorkloadEstimateCommand = async (
  input: UpdateWorkloadEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkloadEstimate");
  let body: any;
  body = JSON.stringify(se_UpdateWorkloadEstimateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0BatchCreateBillScenarioCommitmentModificationCommand
 */
export const de_BatchCreateBillScenarioCommitmentModificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateBillScenarioCommitmentModificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchCreateBillScenarioCommitmentModificationResponse(data, context);
  const response: BatchCreateBillScenarioCommitmentModificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchCreateBillScenarioUsageModificationCommand
 */
export const de_BatchCreateBillScenarioUsageModificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateBillScenarioUsageModificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchCreateBillScenarioUsageModificationResponse(data, context);
  const response: BatchCreateBillScenarioUsageModificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchCreateWorkloadEstimateUsageCommand
 */
export const de_BatchCreateWorkloadEstimateUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateWorkloadEstimateUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchCreateWorkloadEstimateUsageResponse(data, context);
  const response: BatchCreateWorkloadEstimateUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchDeleteBillScenarioCommitmentModificationCommand
 */
export const de_BatchDeleteBillScenarioCommitmentModificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBillScenarioCommitmentModificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteBillScenarioCommitmentModificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchDeleteBillScenarioUsageModificationCommand
 */
export const de_BatchDeleteBillScenarioUsageModificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteBillScenarioUsageModificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteBillScenarioUsageModificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchDeleteWorkloadEstimateUsageCommand
 */
export const de_BatchDeleteWorkloadEstimateUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorkloadEstimateUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteWorkloadEstimateUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchUpdateBillScenarioCommitmentModificationCommand
 */
export const de_BatchUpdateBillScenarioCommitmentModificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateBillScenarioCommitmentModificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchUpdateBillScenarioCommitmentModificationResponse(data, context);
  const response: BatchUpdateBillScenarioCommitmentModificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchUpdateBillScenarioUsageModificationCommand
 */
export const de_BatchUpdateBillScenarioUsageModificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateBillScenarioUsageModificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchUpdateBillScenarioUsageModificationResponse(data, context);
  const response: BatchUpdateBillScenarioUsageModificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchUpdateWorkloadEstimateUsageCommand
 */
export const de_BatchUpdateWorkloadEstimateUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateWorkloadEstimateUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchUpdateWorkloadEstimateUsageResponse(data, context);
  const response: BatchUpdateWorkloadEstimateUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateBillEstimateCommand
 */
export const de_CreateBillEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBillEstimateResponse(data, context);
  const response: CreateBillEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateBillScenarioCommand
 */
export const de_CreateBillScenarioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillScenarioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBillScenarioResponse(data, context);
  const response: CreateBillScenarioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateWorkloadEstimateCommand
 */
export const de_CreateWorkloadEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkloadEstimateResponse(data, context);
  const response: CreateWorkloadEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteBillEstimateCommand
 */
export const de_DeleteBillEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBillEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteBillScenarioCommand
 */
export const de_DeleteBillScenarioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillScenarioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBillScenarioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteWorkloadEstimateCommand
 */
export const de_DeleteWorkloadEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkloadEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetBillEstimateCommand
 */
export const de_GetBillEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBillEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBillEstimateResponse(data, context);
  const response: GetBillEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetBillScenarioCommand
 */
export const de_GetBillScenarioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBillScenarioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBillScenarioResponse(data, context);
  const response: GetBillScenarioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPreferencesCommand
 */
export const de_GetPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetWorkloadEstimateCommand
 */
export const de_GetWorkloadEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkloadEstimateResponse(data, context);
  const response: GetWorkloadEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillEstimateCommitmentsCommand
 */
export const de_ListBillEstimateCommitmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillEstimateCommitmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillEstimateCommitmentsResponse(data, context);
  const response: ListBillEstimateCommitmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillEstimateInputCommitmentModificationsCommand
 */
export const de_ListBillEstimateInputCommitmentModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillEstimateInputCommitmentModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillEstimateInputCommitmentModificationsResponse(data, context);
  const response: ListBillEstimateInputCommitmentModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillEstimateInputUsageModificationsCommand
 */
export const de_ListBillEstimateInputUsageModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillEstimateInputUsageModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillEstimateInputUsageModificationsResponse(data, context);
  const response: ListBillEstimateInputUsageModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillEstimateLineItemsCommand
 */
export const de_ListBillEstimateLineItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillEstimateLineItemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillEstimateLineItemsResponse(data, context);
  const response: ListBillEstimateLineItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillEstimatesCommand
 */
export const de_ListBillEstimatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillEstimatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillEstimatesResponse(data, context);
  const response: ListBillEstimatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillScenarioCommitmentModificationsCommand
 */
export const de_ListBillScenarioCommitmentModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillScenarioCommitmentModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillScenarioCommitmentModificationsResponse(data, context);
  const response: ListBillScenarioCommitmentModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillScenariosCommand
 */
export const de_ListBillScenariosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillScenariosCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillScenariosResponse(data, context);
  const response: ListBillScenariosCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillScenarioUsageModificationsCommand
 */
export const de_ListBillScenarioUsageModificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillScenarioUsageModificationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBillScenarioUsageModificationsResponse(data, context);
  const response: ListBillScenarioUsageModificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0ListWorkloadEstimatesCommand
 */
export const de_ListWorkloadEstimatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadEstimatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkloadEstimatesResponse(data, context);
  const response: ListWorkloadEstimatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListWorkloadEstimateUsageCommand
 */
export const de_ListWorkloadEstimateUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadEstimateUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkloadEstimateUsageResponse(data, context);
  const response: ListWorkloadEstimateUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdateBillEstimateCommand
 */
export const de_UpdateBillEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBillEstimateResponse(data, context);
  const response: UpdateBillEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateBillScenarioCommand
 */
export const de_UpdateBillScenarioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillScenarioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBillScenarioResponse(data, context);
  const response: UpdateBillScenarioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePreferencesCommand
 */
export const de_UpdatePreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateWorkloadEstimateCommand
 */
export const de_UpdateWorkloadEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadEstimateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkloadEstimateResponse(data, context);
  const response: UpdateWorkloadEstimateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.bcmpricingcalculator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bcmpricingcalculator#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DataUnavailableException":
    case "com.amazonaws.bcmpricingcalculator#DataUnavailableException":
      throw await de_DataUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bcmpricingcalculator#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bcmpricingcalculator#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bcmpricingcalculator#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bcmpricingcalculator#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bcmpricingcalculator#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0DataUnavailableExceptionRes
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
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
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
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddReservedInstanceAction omitted.

/**
 * serializeAws_json1_0AddSavingsPlanAction
 */
const se_AddSavingsPlanAction = (input: AddSavingsPlanAction, context: __SerdeContext): any => {
  return take(input, {
    commitment: __serializeFloat,
    savingsPlanOfferingId: [],
  });
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioCommitmentModificationEntries
 */
const se_BatchCreateBillScenarioCommitmentModificationEntries = (
  input: BatchCreateBillScenarioCommitmentModificationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchCreateBillScenarioCommitmentModificationEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioCommitmentModificationEntry
 */
const se_BatchCreateBillScenarioCommitmentModificationEntry = (
  input: BatchCreateBillScenarioCommitmentModificationEntry,
  context: __SerdeContext
): any => {
  return take(input, {
    commitmentAction: (_) => se_BillScenarioCommitmentModificationAction(_, context),
    group: [],
    key: [],
    usageAccountId: [],
  });
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioCommitmentModificationRequest
 */
const se_BatchCreateBillScenarioCommitmentModificationRequest = (
  input: BatchCreateBillScenarioCommitmentModificationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    billScenarioId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    commitmentModifications: (_) => se_BatchCreateBillScenarioCommitmentModificationEntries(_, context),
  });
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioUsageModificationEntries
 */
const se_BatchCreateBillScenarioUsageModificationEntries = (
  input: BatchCreateBillScenarioUsageModificationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchCreateBillScenarioUsageModificationEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioUsageModificationEntry
 */
const se_BatchCreateBillScenarioUsageModificationEntry = (
  input: BatchCreateBillScenarioUsageModificationEntry,
  context: __SerdeContext
): any => {
  return take(input, {
    amounts: (_) => se_UsageAmounts(_, context),
    availabilityZone: [],
    group: [],
    historicalUsage: (_) => se_HistoricalUsageEntity(_, context),
    key: [],
    operation: [],
    serviceCode: [],
    usageAccountId: [],
    usageType: [],
  });
};

/**
 * serializeAws_json1_0BatchCreateBillScenarioUsageModificationRequest
 */
const se_BatchCreateBillScenarioUsageModificationRequest = (
  input: BatchCreateBillScenarioUsageModificationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    billScenarioId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    usageModifications: (_) => se_BatchCreateBillScenarioUsageModificationEntries(_, context),
  });
};

/**
 * serializeAws_json1_0BatchCreateWorkloadEstimateUsageEntries
 */
const se_BatchCreateWorkloadEstimateUsageEntries = (
  input: BatchCreateWorkloadEstimateUsageEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchCreateWorkloadEstimateUsageEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0BatchCreateWorkloadEstimateUsageEntry
 */
const se_BatchCreateWorkloadEstimateUsageEntry = (
  input: BatchCreateWorkloadEstimateUsageEntry,
  context: __SerdeContext
): any => {
  return take(input, {
    amount: __serializeFloat,
    group: [],
    historicalUsage: (_) => se_HistoricalUsageEntity(_, context),
    key: [],
    operation: [],
    serviceCode: [],
    usageAccountId: [],
    usageType: [],
  });
};

/**
 * serializeAws_json1_0BatchCreateWorkloadEstimateUsageRequest
 */
const se_BatchCreateWorkloadEstimateUsageRequest = (
  input: BatchCreateWorkloadEstimateUsageRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    usage: (_) => se_BatchCreateWorkloadEstimateUsageEntries(_, context),
    workloadEstimateId: [],
  });
};

// se_BatchDeleteBillScenarioCommitmentModificationEntries omitted.

// se_BatchDeleteBillScenarioCommitmentModificationRequest omitted.

// se_BatchDeleteBillScenarioUsageModificationEntries omitted.

// se_BatchDeleteBillScenarioUsageModificationRequest omitted.

// se_BatchDeleteWorkloadEstimateUsageEntries omitted.

// se_BatchDeleteWorkloadEstimateUsageRequest omitted.

// se_BatchUpdateBillScenarioCommitmentModificationEntries omitted.

// se_BatchUpdateBillScenarioCommitmentModificationEntry omitted.

// se_BatchUpdateBillScenarioCommitmentModificationRequest omitted.

/**
 * serializeAws_json1_0BatchUpdateBillScenarioUsageModificationEntries
 */
const se_BatchUpdateBillScenarioUsageModificationEntries = (
  input: BatchUpdateBillScenarioUsageModificationEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchUpdateBillScenarioUsageModificationEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0BatchUpdateBillScenarioUsageModificationEntry
 */
const se_BatchUpdateBillScenarioUsageModificationEntry = (
  input: BatchUpdateBillScenarioUsageModificationEntry,
  context: __SerdeContext
): any => {
  return take(input, {
    amounts: (_) => se_UsageAmounts(_, context),
    group: [],
    id: [],
  });
};

/**
 * serializeAws_json1_0BatchUpdateBillScenarioUsageModificationRequest
 */
const se_BatchUpdateBillScenarioUsageModificationRequest = (
  input: BatchUpdateBillScenarioUsageModificationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    billScenarioId: [],
    usageModifications: (_) => se_BatchUpdateBillScenarioUsageModificationEntries(_, context),
  });
};

/**
 * serializeAws_json1_0BatchUpdateWorkloadEstimateUsageEntries
 */
const se_BatchUpdateWorkloadEstimateUsageEntries = (
  input: BatchUpdateWorkloadEstimateUsageEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchUpdateWorkloadEstimateUsageEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0BatchUpdateWorkloadEstimateUsageEntry
 */
const se_BatchUpdateWorkloadEstimateUsageEntry = (
  input: BatchUpdateWorkloadEstimateUsageEntry,
  context: __SerdeContext
): any => {
  return take(input, {
    amount: __serializeFloat,
    group: [],
    id: [],
  });
};

/**
 * serializeAws_json1_0BatchUpdateWorkloadEstimateUsageRequest
 */
const se_BatchUpdateWorkloadEstimateUsageRequest = (
  input: BatchUpdateWorkloadEstimateUsageRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    usage: (_) => se_BatchUpdateWorkloadEstimateUsageEntries(_, context),
    workloadEstimateId: [],
  });
};

/**
 * serializeAws_json1_0BillInterval
 */
const se_BillInterval = (input: BillInterval, context: __SerdeContext): any => {
  return take(input, {
    end: (_) => _.getTime() / 1_000,
    start: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_0BillScenarioCommitmentModificationAction
 */
const se_BillScenarioCommitmentModificationAction = (
  input: BillScenarioCommitmentModificationAction,
  context: __SerdeContext
): any => {
  return BillScenarioCommitmentModificationAction.visit(input, {
    addReservedInstanceAction: (value) => ({ addReservedInstanceAction: _json(value) }),
    addSavingsPlanAction: (value) => ({ addSavingsPlanAction: se_AddSavingsPlanAction(value, context) }),
    negateReservedInstanceAction: (value) => ({ negateReservedInstanceAction: _json(value) }),
    negateSavingsPlanAction: (value) => ({ negateSavingsPlanAction: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_json1_0CreateBillEstimateRequest
 */
const se_CreateBillEstimateRequest = (input: CreateBillEstimateRequest, context: __SerdeContext): any => {
  return take(input, {
    billScenarioId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateBillScenarioRequest
 */
const se_CreateBillScenarioRequest = (input: CreateBillScenarioRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateWorkloadEstimateRequest
 */
const se_CreateWorkloadEstimateRequest = (input: CreateWorkloadEstimateRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    rateType: [],
    tags: _json,
  });
};

// se_DeleteBillEstimateRequest omitted.

// se_DeleteBillScenarioRequest omitted.

// se_DeleteWorkloadEstimateRequest omitted.

/**
 * serializeAws_json1_0Expression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  return take(input, {
    and: (_) => se_ExpressionList(_, context),
    costCategories: _json,
    dimensions: _json,
    not: (_) => se_Expression(_, context),
    or: (_) => se_ExpressionList(_, context),
    tags: _json,
  });
};

// se_ExpressionFilter omitted.

/**
 * serializeAws_json1_0ExpressionList
 */
const se_ExpressionList = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Expression(entry, context);
    });
};

/**
 * serializeAws_json1_0FilterTimestamp
 */
const se_FilterTimestamp = (input: FilterTimestamp, context: __SerdeContext): any => {
  return take(input, {
    afterTimestamp: (_) => _.getTime() / 1_000,
    beforeTimestamp: (_) => _.getTime() / 1_000,
  });
};

// se_GetBillEstimateRequest omitted.

// se_GetBillScenarioRequest omitted.

// se_GetPreferencesRequest omitted.

// se_GetWorkloadEstimateRequest omitted.

/**
 * serializeAws_json1_0HistoricalUsageEntity
 */
const se_HistoricalUsageEntity = (input: HistoricalUsageEntity, context: __SerdeContext): any => {
  return take(input, {
    billInterval: (_) => se_BillInterval(_, context),
    filterExpression: (_) => se_Expression(_, context),
    location: [],
    operation: [],
    serviceCode: [],
    usageAccountId: [],
    usageType: [],
  });
};

// se_ListBillEstimateCommitmentsRequest omitted.

// se_ListBillEstimateInputCommitmentModificationsRequest omitted.

// se_ListBillEstimateInputUsageModificationsRequest omitted.

// se_ListBillEstimateLineItemsFilter omitted.

// se_ListBillEstimateLineItemsFilters omitted.

// se_ListBillEstimateLineItemsFilterValues omitted.

// se_ListBillEstimateLineItemsRequest omitted.

// se_ListBillEstimatesFilter omitted.

// se_ListBillEstimatesFilters omitted.

// se_ListBillEstimatesFilterValues omitted.

/**
 * serializeAws_json1_0ListBillEstimatesRequest
 */
const se_ListBillEstimatesRequest = (input: ListBillEstimatesRequest, context: __SerdeContext): any => {
  return take(input, {
    createdAtFilter: (_) => se_FilterTimestamp(_, context),
    expiresAtFilter: (_) => se_FilterTimestamp(_, context),
    filters: _json,
    maxResults: [],
    nextToken: [],
  });
};

// se_ListBillScenarioCommitmentModificationsRequest omitted.

// se_ListBillScenariosFilter omitted.

// se_ListBillScenariosFilters omitted.

// se_ListBillScenariosFilterValues omitted.

/**
 * serializeAws_json1_0ListBillScenariosRequest
 */
const se_ListBillScenariosRequest = (input: ListBillScenariosRequest, context: __SerdeContext): any => {
  return take(input, {
    createdAtFilter: (_) => se_FilterTimestamp(_, context),
    expiresAtFilter: (_) => se_FilterTimestamp(_, context),
    filters: _json,
    maxResults: [],
    nextToken: [],
  });
};

// se_ListBillScenarioUsageModificationsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListUsageFilter omitted.

// se_ListUsageFilters omitted.

// se_ListUsageFilterValues omitted.

// se_ListWorkloadEstimatesFilter omitted.

// se_ListWorkloadEstimatesFilters omitted.

// se_ListWorkloadEstimatesFilterValues omitted.

/**
 * serializeAws_json1_0ListWorkloadEstimatesRequest
 */
const se_ListWorkloadEstimatesRequest = (input: ListWorkloadEstimatesRequest, context: __SerdeContext): any => {
  return take(input, {
    createdAtFilter: (_) => se_FilterTimestamp(_, context),
    expiresAtFilter: (_) => se_FilterTimestamp(_, context),
    filters: _json,
    maxResults: [],
    nextToken: [],
  });
};

// se_ListWorkloadEstimateUsageRequest omitted.

// se_NegateReservedInstanceAction omitted.

// se_NegateSavingsPlanAction omitted.

// se_RateTypes omitted.

// se_ResourceTagKeys omitted.

// se_StringList omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_0UpdateBillEstimateRequest
 */
const se_UpdateBillEstimateRequest = (input: UpdateBillEstimateRequest, context: __SerdeContext): any => {
  return take(input, {
    expiresAt: (_) => _.getTime() / 1_000,
    identifier: [],
    name: [],
  });
};

/**
 * serializeAws_json1_0UpdateBillScenarioRequest
 */
const se_UpdateBillScenarioRequest = (input: UpdateBillScenarioRequest, context: __SerdeContext): any => {
  return take(input, {
    expiresAt: (_) => _.getTime() / 1_000,
    identifier: [],
    name: [],
  });
};

// se_UpdatePreferencesRequest omitted.

/**
 * serializeAws_json1_0UpdateWorkloadEstimateRequest
 */
const se_UpdateWorkloadEstimateRequest = (input: UpdateWorkloadEstimateRequest, context: __SerdeContext): any => {
  return take(input, {
    expiresAt: (_) => _.getTime() / 1_000,
    identifier: [],
    name: [],
  });
};

/**
 * serializeAws_json1_0UsageAmount
 */
const se_UsageAmount = (input: UsageAmount, context: __SerdeContext): any => {
  return take(input, {
    amount: __serializeFloat,
    startHour: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_0UsageAmounts
 */
const se_UsageAmounts = (input: UsageAmount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UsageAmount(entry, context);
    });
};

// de_AccessDeniedException omitted.

// de_AddReservedInstanceAction omitted.

/**
 * deserializeAws_json1_0AddSavingsPlanAction
 */
const de_AddSavingsPlanAction = (output: any, context: __SerdeContext): AddSavingsPlanAction => {
  return take(output, {
    commitment: __limitedParseDouble,
    savingsPlanOfferingId: __expectString,
  }) as any;
};

// de_BatchCreateBillScenarioCommitmentModificationError omitted.

// de_BatchCreateBillScenarioCommitmentModificationErrors omitted.

/**
 * deserializeAws_json1_0BatchCreateBillScenarioCommitmentModificationItem
 */
const de_BatchCreateBillScenarioCommitmentModificationItem = (
  output: any,
  context: __SerdeContext
): BatchCreateBillScenarioCommitmentModificationItem => {
  return take(output, {
    commitmentAction: (_: any) => de_BillScenarioCommitmentModificationAction(__expectUnion(_), context),
    group: __expectString,
    id: __expectString,
    key: __expectString,
    usageAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchCreateBillScenarioCommitmentModificationItems
 */
const de_BatchCreateBillScenarioCommitmentModificationItems = (
  output: any,
  context: __SerdeContext
): BatchCreateBillScenarioCommitmentModificationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchCreateBillScenarioCommitmentModificationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BatchCreateBillScenarioCommitmentModificationResponse
 */
const de_BatchCreateBillScenarioCommitmentModificationResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateBillScenarioCommitmentModificationResponse => {
  return take(output, {
    errors: _json,
    items: (_: any) => de_BatchCreateBillScenarioCommitmentModificationItems(_, context),
  }) as any;
};

// de_BatchCreateBillScenarioUsageModificationError omitted.

// de_BatchCreateBillScenarioUsageModificationErrors omitted.

/**
 * deserializeAws_json1_0BatchCreateBillScenarioUsageModificationItem
 */
const de_BatchCreateBillScenarioUsageModificationItem = (
  output: any,
  context: __SerdeContext
): BatchCreateBillScenarioUsageModificationItem => {
  return take(output, {
    availabilityZone: __expectString,
    group: __expectString,
    historicalUsage: (_: any) => de_HistoricalUsageEntity(_, context),
    id: __expectString,
    key: __expectString,
    location: __expectString,
    operation: __expectString,
    quantities: (_: any) => de_UsageQuantities(_, context),
    serviceCode: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchCreateBillScenarioUsageModificationItems
 */
const de_BatchCreateBillScenarioUsageModificationItems = (
  output: any,
  context: __SerdeContext
): BatchCreateBillScenarioUsageModificationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchCreateBillScenarioUsageModificationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BatchCreateBillScenarioUsageModificationResponse
 */
const de_BatchCreateBillScenarioUsageModificationResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateBillScenarioUsageModificationResponse => {
  return take(output, {
    errors: _json,
    items: (_: any) => de_BatchCreateBillScenarioUsageModificationItems(_, context),
  }) as any;
};

// de_BatchCreateWorkloadEstimateUsageError omitted.

// de_BatchCreateWorkloadEstimateUsageErrors omitted.

/**
 * deserializeAws_json1_0BatchCreateWorkloadEstimateUsageItem
 */
const de_BatchCreateWorkloadEstimateUsageItem = (
  output: any,
  context: __SerdeContext
): BatchCreateWorkloadEstimateUsageItem => {
  return take(output, {
    cost: __limitedParseDouble,
    currency: __expectString,
    group: __expectString,
    historicalUsage: (_: any) => de_HistoricalUsageEntity(_, context),
    id: __expectString,
    key: __expectString,
    location: __expectString,
    operation: __expectString,
    quantity: (_: any) => de_WorkloadEstimateUsageQuantity(_, context),
    serviceCode: __expectString,
    status: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchCreateWorkloadEstimateUsageItems
 */
const de_BatchCreateWorkloadEstimateUsageItems = (
  output: any,
  context: __SerdeContext
): BatchCreateWorkloadEstimateUsageItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchCreateWorkloadEstimateUsageItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BatchCreateWorkloadEstimateUsageResponse
 */
const de_BatchCreateWorkloadEstimateUsageResponse = (
  output: any,
  context: __SerdeContext
): BatchCreateWorkloadEstimateUsageResponse => {
  return take(output, {
    errors: _json,
    items: (_: any) => de_BatchCreateWorkloadEstimateUsageItems(_, context),
  }) as any;
};

// de_BatchDeleteBillScenarioCommitmentModificationError omitted.

// de_BatchDeleteBillScenarioCommitmentModificationErrors omitted.

// de_BatchDeleteBillScenarioCommitmentModificationResponse omitted.

// de_BatchDeleteBillScenarioUsageModificationError omitted.

// de_BatchDeleteBillScenarioUsageModificationErrors omitted.

// de_BatchDeleteBillScenarioUsageModificationResponse omitted.

// de_BatchDeleteWorkloadEstimateUsageError omitted.

// de_BatchDeleteWorkloadEstimateUsageErrors omitted.

// de_BatchDeleteWorkloadEstimateUsageResponse omitted.

// de_BatchUpdateBillScenarioCommitmentModificationError omitted.

// de_BatchUpdateBillScenarioCommitmentModificationErrors omitted.

/**
 * deserializeAws_json1_0BatchUpdateBillScenarioCommitmentModificationResponse
 */
const de_BatchUpdateBillScenarioCommitmentModificationResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateBillScenarioCommitmentModificationResponse => {
  return take(output, {
    errors: _json,
    items: (_: any) => de_BillScenarioCommitmentModificationItems(_, context),
  }) as any;
};

// de_BatchUpdateBillScenarioUsageModificationError omitted.

// de_BatchUpdateBillScenarioUsageModificationErrors omitted.

/**
 * deserializeAws_json1_0BatchUpdateBillScenarioUsageModificationResponse
 */
const de_BatchUpdateBillScenarioUsageModificationResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateBillScenarioUsageModificationResponse => {
  return take(output, {
    errors: _json,
    items: (_: any) => de_BillScenarioUsageModificationItems(_, context),
  }) as any;
};

// de_BatchUpdateWorkloadEstimateUsageError omitted.

// de_BatchUpdateWorkloadEstimateUsageErrors omitted.

/**
 * deserializeAws_json1_0BatchUpdateWorkloadEstimateUsageResponse
 */
const de_BatchUpdateWorkloadEstimateUsageResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdateWorkloadEstimateUsageResponse => {
  return take(output, {
    errors: _json,
    items: (_: any) => de_WorkloadEstimateUsageItems(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BillEstimateCommitmentSummaries
 */
const de_BillEstimateCommitmentSummaries = (output: any, context: __SerdeContext): BillEstimateCommitmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillEstimateCommitmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillEstimateCommitmentSummary
 */
const de_BillEstimateCommitmentSummary = (output: any, context: __SerdeContext): BillEstimateCommitmentSummary => {
  return take(output, {
    id: __expectString,
    monthlyPayment: (_: any) => de_CostAmount(_, context),
    offeringId: __expectString,
    paymentOption: __expectString,
    purchaseAgreementType: __expectString,
    region: __expectString,
    termLength: __expectString,
    upfrontPayment: (_: any) => de_CostAmount(_, context),
    usageAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillEstimateCostSummary
 */
const de_BillEstimateCostSummary = (output: any, context: __SerdeContext): BillEstimateCostSummary => {
  return take(output, {
    serviceCostDifferences: (_: any) => de_ServiceCostDifferenceMap(_, context),
    totalCostDifference: (_: any) => de_CostDifference(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BillEstimateInputCommitmentModificationSummaries
 */
const de_BillEstimateInputCommitmentModificationSummaries = (
  output: any,
  context: __SerdeContext
): BillEstimateInputCommitmentModificationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillEstimateInputCommitmentModificationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillEstimateInputCommitmentModificationSummary
 */
const de_BillEstimateInputCommitmentModificationSummary = (
  output: any,
  context: __SerdeContext
): BillEstimateInputCommitmentModificationSummary => {
  return take(output, {
    commitmentAction: (_: any) => de_BillScenarioCommitmentModificationAction(__expectUnion(_), context),
    group: __expectString,
    id: __expectString,
    usageAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillEstimateInputUsageModificationSummaries
 */
const de_BillEstimateInputUsageModificationSummaries = (
  output: any,
  context: __SerdeContext
): BillEstimateInputUsageModificationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillEstimateInputUsageModificationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillEstimateInputUsageModificationSummary
 */
const de_BillEstimateInputUsageModificationSummary = (
  output: any,
  context: __SerdeContext
): BillEstimateInputUsageModificationSummary => {
  return take(output, {
    availabilityZone: __expectString,
    group: __expectString,
    historicalUsage: (_: any) => de_HistoricalUsageEntity(_, context),
    id: __expectString,
    location: __expectString,
    operation: __expectString,
    quantities: (_: any) => de_UsageQuantities(_, context),
    serviceCode: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillEstimateLineItemSummaries
 */
const de_BillEstimateLineItemSummaries = (output: any, context: __SerdeContext): BillEstimateLineItemSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillEstimateLineItemSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillEstimateLineItemSummary
 */
const de_BillEstimateLineItemSummary = (output: any, context: __SerdeContext): BillEstimateLineItemSummary => {
  return take(output, {
    availabilityZone: __expectString,
    estimatedCost: (_: any) => de_CostAmount(_, context),
    estimatedUsageQuantity: (_: any) => de_UsageQuantityResult(_, context),
    historicalCost: (_: any) => de_CostAmount(_, context),
    historicalUsageQuantity: (_: any) => de_UsageQuantityResult(_, context),
    id: __expectString,
    lineItemId: __expectString,
    lineItemType: __expectString,
    location: __expectString,
    operation: __expectString,
    payerAccountId: __expectString,
    savingsPlanArns: _json,
    serviceCode: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillEstimateSummaries
 */
const de_BillEstimateSummaries = (output: any, context: __SerdeContext): BillEstimateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillEstimateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillEstimateSummary
 */
const de_BillEstimateSummary = (output: any, context: __SerdeContext): BillEstimateSummary => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillInterval
 */
const de_BillInterval = (output: any, context: __SerdeContext): BillInterval => {
  return take(output, {
    end: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    start: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0BillScenarioCommitmentModificationAction
 */
const de_BillScenarioCommitmentModificationAction = (
  output: any,
  context: __SerdeContext
): BillScenarioCommitmentModificationAction => {
  if (output.addReservedInstanceAction != null) {
    return {
      addReservedInstanceAction: _json(output.addReservedInstanceAction),
    };
  }
  if (output.addSavingsPlanAction != null) {
    return {
      addSavingsPlanAction: de_AddSavingsPlanAction(output.addSavingsPlanAction, context),
    };
  }
  if (output.negateReservedInstanceAction != null) {
    return {
      negateReservedInstanceAction: _json(output.negateReservedInstanceAction),
    };
  }
  if (output.negateSavingsPlanAction != null) {
    return {
      negateSavingsPlanAction: _json(output.negateSavingsPlanAction),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0BillScenarioCommitmentModificationItem
 */
const de_BillScenarioCommitmentModificationItem = (
  output: any,
  context: __SerdeContext
): BillScenarioCommitmentModificationItem => {
  return take(output, {
    commitmentAction: (_: any) => de_BillScenarioCommitmentModificationAction(__expectUnion(_), context),
    group: __expectString,
    id: __expectString,
    usageAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillScenarioCommitmentModificationItems
 */
const de_BillScenarioCommitmentModificationItems = (
  output: any,
  context: __SerdeContext
): BillScenarioCommitmentModificationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillScenarioCommitmentModificationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillScenarioSummaries
 */
const de_BillScenarioSummaries = (output: any, context: __SerdeContext): BillScenarioSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillScenarioSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BillScenarioSummary
 */
const de_BillScenarioSummary = (output: any, context: __SerdeContext): BillScenarioSummary => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillScenarioUsageModificationItem
 */
const de_BillScenarioUsageModificationItem = (
  output: any,
  context: __SerdeContext
): BillScenarioUsageModificationItem => {
  return take(output, {
    availabilityZone: __expectString,
    group: __expectString,
    historicalUsage: (_: any) => de_HistoricalUsageEntity(_, context),
    id: __expectString,
    location: __expectString,
    operation: __expectString,
    quantities: (_: any) => de_UsageQuantities(_, context),
    serviceCode: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BillScenarioUsageModificationItems
 */
const de_BillScenarioUsageModificationItems = (
  output: any,
  context: __SerdeContext
): BillScenarioUsageModificationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BillScenarioUsageModificationItem(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CostAmount
 */
const de_CostAmount = (output: any, context: __SerdeContext): CostAmount => {
  return take(output, {
    amount: __limitedParseDouble,
    currency: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CostDifference
 */
const de_CostDifference = (output: any, context: __SerdeContext): CostDifference => {
  return take(output, {
    estimatedCost: (_: any) => de_CostAmount(_, context),
    historicalCost: (_: any) => de_CostAmount(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateBillEstimateResponse
 */
const de_CreateBillEstimateResponse = (output: any, context: __SerdeContext): CreateBillEstimateResponse => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    costSummary: (_: any) => de_BillEstimateCostSummary(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateBillScenarioResponse
 */
const de_CreateBillScenarioResponse = (output: any, context: __SerdeContext): CreateBillScenarioResponse => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateWorkloadEstimateResponse
 */
const de_CreateWorkloadEstimateResponse = (output: any, context: __SerdeContext): CreateWorkloadEstimateResponse => {
  return take(output, {
    costCurrency: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    rateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    rateType: __expectString,
    status: __expectString,
    totalCost: __limitedParseDouble,
  }) as any;
};

// de_DataUnavailableException omitted.

// de_DeleteBillEstimateResponse omitted.

// de_DeleteBillScenarioResponse omitted.

// de_DeleteWorkloadEstimateResponse omitted.

/**
 * deserializeAws_json1_0Expression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  return take(output, {
    and: (_: any) => de_ExpressionList(_, context),
    costCategories: _json,
    dimensions: _json,
    not: (_: any) => de_Expression(_, context),
    or: (_: any) => de_ExpressionList(_, context),
    tags: _json,
  }) as any;
};

// de_ExpressionFilter omitted.

/**
 * deserializeAws_json1_0ExpressionList
 */
const de_ExpressionList = (output: any, context: __SerdeContext): Expression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Expression(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetBillEstimateResponse
 */
const de_GetBillEstimateResponse = (output: any, context: __SerdeContext): GetBillEstimateResponse => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    costSummary: (_: any) => de_BillEstimateCostSummary(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetBillScenarioResponse
 */
const de_GetBillScenarioResponse = (output: any, context: __SerdeContext): GetBillScenarioResponse => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_GetPreferencesResponse omitted.

/**
 * deserializeAws_json1_0GetWorkloadEstimateResponse
 */
const de_GetWorkloadEstimateResponse = (output: any, context: __SerdeContext): GetWorkloadEstimateResponse => {
  return take(output, {
    costCurrency: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    rateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    rateType: __expectString,
    status: __expectString,
    totalCost: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0HistoricalUsageEntity
 */
const de_HistoricalUsageEntity = (output: any, context: __SerdeContext): HistoricalUsageEntity => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    filterExpression: (_: any) => de_Expression(_, context),
    location: __expectString,
    operation: __expectString,
    serviceCode: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0ListBillEstimateCommitmentsResponse
 */
const de_ListBillEstimateCommitmentsResponse = (
  output: any,
  context: __SerdeContext
): ListBillEstimateCommitmentsResponse => {
  return take(output, {
    items: (_: any) => de_BillEstimateCommitmentSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillEstimateInputCommitmentModificationsResponse
 */
const de_ListBillEstimateInputCommitmentModificationsResponse = (
  output: any,
  context: __SerdeContext
): ListBillEstimateInputCommitmentModificationsResponse => {
  return take(output, {
    items: (_: any) => de_BillEstimateInputCommitmentModificationSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillEstimateInputUsageModificationsResponse
 */
const de_ListBillEstimateInputUsageModificationsResponse = (
  output: any,
  context: __SerdeContext
): ListBillEstimateInputUsageModificationsResponse => {
  return take(output, {
    items: (_: any) => de_BillEstimateInputUsageModificationSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillEstimateLineItemsResponse
 */
const de_ListBillEstimateLineItemsResponse = (
  output: any,
  context: __SerdeContext
): ListBillEstimateLineItemsResponse => {
  return take(output, {
    items: (_: any) => de_BillEstimateLineItemSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillEstimatesResponse
 */
const de_ListBillEstimatesResponse = (output: any, context: __SerdeContext): ListBillEstimatesResponse => {
  return take(output, {
    items: (_: any) => de_BillEstimateSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillScenarioCommitmentModificationsResponse
 */
const de_ListBillScenarioCommitmentModificationsResponse = (
  output: any,
  context: __SerdeContext
): ListBillScenarioCommitmentModificationsResponse => {
  return take(output, {
    items: (_: any) => de_BillScenarioCommitmentModificationItems(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillScenariosResponse
 */
const de_ListBillScenariosResponse = (output: any, context: __SerdeContext): ListBillScenariosResponse => {
  return take(output, {
    items: (_: any) => de_BillScenarioSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListBillScenarioUsageModificationsResponse
 */
const de_ListBillScenarioUsageModificationsResponse = (
  output: any,
  context: __SerdeContext
): ListBillScenarioUsageModificationsResponse => {
  return take(output, {
    items: (_: any) => de_BillScenarioUsageModificationItems(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_0ListWorkloadEstimatesResponse
 */
const de_ListWorkloadEstimatesResponse = (output: any, context: __SerdeContext): ListWorkloadEstimatesResponse => {
  return take(output, {
    items: (_: any) => de_WorkloadEstimateSummaries(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListWorkloadEstimateUsageResponse
 */
const de_ListWorkloadEstimateUsageResponse = (
  output: any,
  context: __SerdeContext
): ListWorkloadEstimateUsageResponse => {
  return take(output, {
    items: (_: any) => de_WorkloadEstimateUsageItems(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_NegateReservedInstanceAction omitted.

// de_NegateSavingsPlanAction omitted.

// de_RateTypes omitted.

// de_ResourceNotFoundException omitted.

// de_SavingsPlanArns omitted.

/**
 * deserializeAws_json1_0ServiceCostDifferenceMap
 */
const de_ServiceCostDifferenceMap = (output: any, context: __SerdeContext): Record<string, CostDifference> => {
  return Object.entries(output).reduce((acc: Record<string, CostDifference>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_CostDifference(value, context);
    return acc;
  }, {} as Record<string, CostDifference>);
};

// de_ServiceQuotaExceededException omitted.

// de_StringList omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateBillEstimateResponse
 */
const de_UpdateBillEstimateResponse = (output: any, context: __SerdeContext): UpdateBillEstimateResponse => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    costSummary: (_: any) => de_BillEstimateCostSummary(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateBillScenarioResponse
 */
const de_UpdateBillScenarioResponse = (output: any, context: __SerdeContext): UpdateBillScenarioResponse => {
  return take(output, {
    billInterval: (_: any) => de_BillInterval(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_UpdatePreferencesResponse omitted.

/**
 * deserializeAws_json1_0UpdateWorkloadEstimateResponse
 */
const de_UpdateWorkloadEstimateResponse = (output: any, context: __SerdeContext): UpdateWorkloadEstimateResponse => {
  return take(output, {
    costCurrency: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    rateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    rateType: __expectString,
    status: __expectString,
    totalCost: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0UsageQuantities
 */
const de_UsageQuantities = (output: any, context: __SerdeContext): UsageQuantity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageQuantity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0UsageQuantity
 */
const de_UsageQuantity = (output: any, context: __SerdeContext): UsageQuantity => {
  return take(output, {
    amount: __limitedParseDouble,
    startHour: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UsageQuantityResult
 */
const de_UsageQuantityResult = (output: any, context: __SerdeContext): UsageQuantityResult => {
  return take(output, {
    amount: __limitedParseDouble,
    unit: __expectString,
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

/**
 * deserializeAws_json1_0WorkloadEstimateSummaries
 */
const de_WorkloadEstimateSummaries = (output: any, context: __SerdeContext): WorkloadEstimateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkloadEstimateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WorkloadEstimateSummary
 */
const de_WorkloadEstimateSummary = (output: any, context: __SerdeContext): WorkloadEstimateSummary => {
  return take(output, {
    costCurrency: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureMessage: __expectString,
    id: __expectString,
    name: __expectString,
    rateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    rateType: __expectString,
    status: __expectString,
    totalCost: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0WorkloadEstimateUsageItem
 */
const de_WorkloadEstimateUsageItem = (output: any, context: __SerdeContext): WorkloadEstimateUsageItem => {
  return take(output, {
    cost: __limitedParseDouble,
    currency: __expectString,
    group: __expectString,
    historicalUsage: (_: any) => de_HistoricalUsageEntity(_, context),
    id: __expectString,
    location: __expectString,
    operation: __expectString,
    quantity: (_: any) => de_WorkloadEstimateUsageQuantity(_, context),
    serviceCode: __expectString,
    status: __expectString,
    usageAccountId: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0WorkloadEstimateUsageItems
 */
const de_WorkloadEstimateUsageItems = (output: any, context: __SerdeContext): WorkloadEstimateUsageItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkloadEstimateUsageItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WorkloadEstimateUsageQuantity
 */
const de_WorkloadEstimateUsageQuantity = (output: any, context: __SerdeContext): WorkloadEstimateUsageQuantity => {
  return take(output, {
    amount: __limitedParseDouble,
    unit: __expectString,
  }) as any;
};

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AWSBCMPricingCalculator.${operation}`,
  };
}
