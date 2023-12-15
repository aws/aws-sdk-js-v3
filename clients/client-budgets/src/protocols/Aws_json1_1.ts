// smithy-typescript generated code
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

import { CreateBudgetActionCommandInput, CreateBudgetActionCommandOutput } from "../commands/CreateBudgetActionCommand";
import { CreateBudgetCommandInput, CreateBudgetCommandOutput } from "../commands/CreateBudgetCommand";
import { CreateNotificationCommandInput, CreateNotificationCommandOutput } from "../commands/CreateNotificationCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "../commands/CreateSubscriberCommand";
import { DeleteBudgetActionCommandInput, DeleteBudgetActionCommandOutput } from "../commands/DeleteBudgetActionCommand";
import { DeleteBudgetCommandInput, DeleteBudgetCommandOutput } from "../commands/DeleteBudgetCommand";
import { DeleteNotificationCommandInput, DeleteNotificationCommandOutput } from "../commands/DeleteNotificationCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "../commands/DeleteSubscriberCommand";
import {
  DescribeBudgetActionCommandInput,
  DescribeBudgetActionCommandOutput,
} from "../commands/DescribeBudgetActionCommand";
import {
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "../commands/DescribeBudgetActionHistoriesCommand";
import {
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "../commands/DescribeBudgetActionsForAccountCommand";
import {
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { DescribeBudgetCommandInput, DescribeBudgetCommandOutput } from "../commands/DescribeBudgetCommand";
import {
  DescribeBudgetNotificationsForAccountCommandInput,
  DescribeBudgetNotificationsForAccountCommandOutput,
} from "../commands/DescribeBudgetNotificationsForAccountCommand";
import {
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import { DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput } from "../commands/DescribeBudgetsCommand";
import {
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "../commands/DescribeNotificationsForBudgetCommand";
import {
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "../commands/DescribeSubscribersForNotificationCommand";
import {
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
} from "../commands/ExecuteBudgetActionCommand";
import { UpdateBudgetActionCommandInput, UpdateBudgetActionCommandOutput } from "../commands/UpdateBudgetActionCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "../commands/UpdateBudgetCommand";
import { UpdateNotificationCommandInput, UpdateNotificationCommandOutput } from "../commands/UpdateNotificationCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "../commands/UpdateSubscriberCommand";
import { BudgetsServiceException as __BaseException } from "../models/BudgetsServiceException";
import {
  AccessDeniedException,
  Action,
  ActionHistory,
  ActionHistoryDetails,
  ActionThreshold,
  AutoAdjustData,
  Budget,
  BudgetedAndActualAmounts,
  BudgetNotificationsForAccount,
  BudgetPerformanceHistory,
  CalculatedSpend,
  CostTypes,
  CreateBudgetActionRequest,
  CreateBudgetRequest,
  CreateNotificationRequest,
  CreateSubscriberRequest,
  CreationLimitExceededException,
  Definition,
  DeleteBudgetActionRequest,
  DeleteBudgetActionResponse,
  DeleteBudgetRequest,
  DeleteNotificationRequest,
  DeleteSubscriberRequest,
  DescribeBudgetActionHistoriesRequest,
  DescribeBudgetActionHistoriesResponse,
  DescribeBudgetActionRequest,
  DescribeBudgetActionResponse,
  DescribeBudgetActionsForAccountRequest,
  DescribeBudgetActionsForAccountResponse,
  DescribeBudgetActionsForBudgetRequest,
  DescribeBudgetActionsForBudgetResponse,
  DescribeBudgetNotificationsForAccountRequest,
  DescribeBudgetNotificationsForAccountResponse,
  DescribeBudgetPerformanceHistoryRequest,
  DescribeBudgetPerformanceHistoryResponse,
  DescribeBudgetRequest,
  DescribeBudgetResponse,
  DescribeBudgetsRequest,
  DescribeBudgetsResponse,
  DescribeNotificationsForBudgetRequest,
  DescribeNotificationsForBudgetResponse,
  DescribeSubscribersForNotificationRequest,
  DuplicateRecordException,
  ExecuteBudgetActionRequest,
  ExpiredNextTokenException,
  HistoricalOptions,
  IamActionDefinition,
  InternalErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  NotFoundException,
  Notification,
  NotificationWithSubscribers,
  ResourceLockedException,
  ScpActionDefinition,
  Spend,
  SsmActionDefinition,
  Subscriber,
  ThrottlingException,
  TimePeriod,
  UpdateBudgetActionRequest,
  UpdateBudgetActionResponse,
  UpdateBudgetRequest,
  UpdateNotificationRequest,
  UpdateSubscriberRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateBudgetCommand
 */
export const se_CreateBudgetCommand = async (
  input: CreateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBudget");
  let body: any;
  body = JSON.stringify(se_CreateBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBudgetActionCommand
 */
export const se_CreateBudgetActionCommand = async (
  input: CreateBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBudgetAction");
  let body: any;
  body = JSON.stringify(se_CreateBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNotificationCommand
 */
export const se_CreateNotificationCommand = async (
  input: CreateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNotification");
  let body: any;
  body = JSON.stringify(se_CreateNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSubscriberCommand
 */
export const se_CreateSubscriberCommand = async (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSubscriber");
  let body: any;
  body = JSON.stringify(se_CreateSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBudgetCommand
 */
export const se_DeleteBudgetCommand = async (
  input: DeleteBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBudget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBudgetActionCommand
 */
export const se_DeleteBudgetActionCommand = async (
  input: DeleteBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBudgetAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotificationCommand
 */
export const se_DeleteNotificationCommand = async (
  input: DeleteNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotification");
  let body: any;
  body = JSON.stringify(se_DeleteNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSubscriberCommand
 */
export const se_DeleteSubscriberCommand = async (
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSubscriber");
  let body: any;
  body = JSON.stringify(se_DeleteSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetCommand
 */
export const se_DescribeBudgetCommand = async (
  input: DescribeBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionCommand
 */
export const se_DescribeBudgetActionCommand = async (
  input: DescribeBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgetAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionHistoriesCommand
 */
export const se_DescribeBudgetActionHistoriesCommand = async (
  input: DescribeBudgetActionHistoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgetActionHistories");
  let body: any;
  body = JSON.stringify(se_DescribeBudgetActionHistoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionsForAccountCommand
 */
export const se_DescribeBudgetActionsForAccountCommand = async (
  input: DescribeBudgetActionsForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgetActionsForAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionsForBudgetCommand
 */
export const se_DescribeBudgetActionsForBudgetCommand = async (
  input: DescribeBudgetActionsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgetActionsForBudget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetNotificationsForAccountCommand
 */
export const se_DescribeBudgetNotificationsForAccountCommand = async (
  input: DescribeBudgetNotificationsForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgetNotificationsForAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand
 */
export const se_DescribeBudgetPerformanceHistoryCommand = async (
  input: DescribeBudgetPerformanceHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgetPerformanceHistory");
  let body: any;
  body = JSON.stringify(se_DescribeBudgetPerformanceHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetsCommand
 */
export const se_DescribeBudgetsCommand = async (
  input: DescribeBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBudgets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotificationsForBudgetCommand
 */
export const se_DescribeNotificationsForBudgetCommand = async (
  input: DescribeNotificationsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNotificationsForBudget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscribersForNotificationCommand
 */
export const se_DescribeSubscribersForNotificationCommand = async (
  input: DescribeSubscribersForNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubscribersForNotification");
  let body: any;
  body = JSON.stringify(se_DescribeSubscribersForNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExecuteBudgetActionCommand
 */
export const se_ExecuteBudgetActionCommand = async (
  input: ExecuteBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteBudgetAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBudgetCommand
 */
export const se_UpdateBudgetCommand = async (
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBudget");
  let body: any;
  body = JSON.stringify(se_UpdateBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBudgetActionCommand
 */
export const se_UpdateBudgetActionCommand = async (
  input: UpdateBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBudgetAction");
  let body: any;
  body = JSON.stringify(se_UpdateBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotificationCommand
 */
export const se_UpdateNotificationCommand = async (
  input: UpdateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotification");
  let body: any;
  body = JSON.stringify(se_UpdateNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSubscriberCommand
 */
export const se_UpdateSubscriberCommand = async (
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSubscriber");
  let body: any;
  body = JSON.stringify(se_UpdateSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateBudgetCommand
 */
export const de_CreateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBudgetCommandError
 */
const de_CreateBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await de_CreationLimitExceededExceptionRes(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await de_DuplicateRecordExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateBudgetActionCommand
 */
export const de_CreateBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBudgetActionCommandError
 */
const de_CreateBudgetActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await de_CreationLimitExceededExceptionRes(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await de_DuplicateRecordExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateNotificationCommand
 */
export const de_CreateNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNotificationCommandError
 */
const de_CreateNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await de_CreationLimitExceededExceptionRes(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await de_DuplicateRecordExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSubscriberCommand
 */
export const de_CreateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSubscriberCommandError
 */
const de_CreateSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await de_CreationLimitExceededExceptionRes(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await de_DuplicateRecordExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteBudgetCommand
 */
export const de_DeleteBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBudgetCommandError
 */
const de_DeleteBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteBudgetActionCommand
 */
export const de_DeleteBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBudgetActionResponse(data, context);
  const response: DeleteBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBudgetActionCommandError
 */
const de_DeleteBudgetActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      throw await de_ResourceLockedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteNotificationCommand
 */
export const de_DeleteNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNotificationCommandError
 */
const de_DeleteNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSubscriberCommand
 */
export const de_DeleteSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSubscriberCommandError
 */
const de_DeleteSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetCommand
 */
export const de_DescribeBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetResponse(data, context);
  const response: DescribeBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetCommandError
 */
const de_DescribeBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetActionCommand
 */
export const de_DescribeBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetActionResponse(data, context);
  const response: DescribeBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionCommandError
 */
const de_DescribeBudgetActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetActionHistoriesCommand
 */
export const de_DescribeBudgetActionHistoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionHistoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetActionHistoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetActionHistoriesResponse(data, context);
  const response: DescribeBudgetActionHistoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError
 */
const de_DescribeBudgetActionHistoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionHistoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetActionsForAccountCommand
 */
export const de_DescribeBudgetActionsForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionsForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetActionsForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetActionsForAccountResponse(data, context);
  const response: DescribeBudgetActionsForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError
 */
const de_DescribeBudgetActionsForAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionsForAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand
 */
export const de_DescribeBudgetActionsForBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetActionsForBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetActionsForBudgetResponse(data, context);
  const response: DescribeBudgetActionsForBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError
 */
const de_DescribeBudgetActionsForBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommand
 */
export const de_DescribeBudgetNotificationsForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetNotificationsForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetNotificationsForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetNotificationsForAccountResponse(data, context);
  const response: DescribeBudgetNotificationsForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommandError
 */
const de_DescribeBudgetNotificationsForAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetNotificationsForAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand
 */
export const de_DescribeBudgetPerformanceHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetPerformanceHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetPerformanceHistoryResponse(data, context);
  const response: DescribeBudgetPerformanceHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError
 */
const de_DescribeBudgetPerformanceHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeBudgetsCommand
 */
export const de_DescribeBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBudgetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBudgetsResponse(data, context);
  const response: DescribeBudgetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBudgetsCommandError
 */
const de_DescribeBudgetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeNotificationsForBudgetCommand
 */
export const de_DescribeNotificationsForBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNotificationsForBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotificationsForBudgetResponse(data, context);
  const response: DescribeNotificationsForBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeNotificationsForBudgetCommandError
 */
const de_DescribeNotificationsForBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSubscribersForNotificationCommand
 */
export const de_DescribeSubscribersForNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribersForNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSubscribersForNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSubscribersForNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSubscribersForNotificationCommandError
 */
const de_DescribeSubscribersForNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribersForNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ExecuteBudgetActionCommand
 */
export const de_ExecuteBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExecuteBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ExecuteBudgetActionCommandError
 */
const de_ExecuteBudgetActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteBudgetActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      throw await de_ResourceLockedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateBudgetCommand
 */
export const de_UpdateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateBudgetCommandError
 */
const de_UpdateBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateBudgetActionCommand
 */
export const de_UpdateBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBudgetActionResponse(data, context);
  const response: UpdateBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateBudgetActionCommandError
 */
const de_UpdateBudgetActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      throw await de_ResourceLockedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNotificationCommand
 */
export const de_UpdateNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNotificationCommandError
 */
const de_UpdateNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await de_DuplicateRecordExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSubscriberCommand
 */
export const de_UpdateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSubscriberCommandError
 */
const de_UpdateSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await de_DuplicateRecordExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
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
 * deserializeAws_json1_1CreationLimitExceededExceptionRes
 */
const de_CreationLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CreationLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateRecordExceptionRes
 */
const de_DuplicateRecordExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRecordException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DuplicateRecordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredNextTokenExceptionRes
 */
const de_ExpiredNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExpiredNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalErrorException({
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
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLockedExceptionRes
 */
const de_ResourceLockedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLockedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceLockedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
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
 * serializeAws_json1_1ActionThreshold
 */
const se_ActionThreshold = (input: ActionThreshold, context: __SerdeContext): any => {
  return take(input, {
    ActionThresholdType: [],
    ActionThresholdValue: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1AutoAdjustData
 */
const se_AutoAdjustData = (input: AutoAdjustData, context: __SerdeContext): any => {
  return take(input, {
    AutoAdjustType: [],
    HistoricalOptions: _json,
    LastAutoAdjustTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1Budget
 */
const se_Budget = (input: Budget, context: __SerdeContext): any => {
  return take(input, {
    AutoAdjustData: (_) => se_AutoAdjustData(_, context),
    BudgetLimit: _json,
    BudgetName: [],
    BudgetType: [],
    CalculatedSpend: _json,
    CostFilters: _json,
    CostTypes: _json,
    LastUpdatedTime: (_) => Math.round(_.getTime() / 1000),
    PlannedBudgetLimits: _json,
    TimePeriod: (_) => se_TimePeriod(_, context),
    TimeUnit: [],
  });
};

// se_CalculatedSpend omitted.

// se_CostFilters omitted.

// se_CostTypes omitted.

/**
 * serializeAws_json1_1CreateBudgetActionRequest
 */
const se_CreateBudgetActionRequest = (input: CreateBudgetActionRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    ActionThreshold: (_) => se_ActionThreshold(_, context),
    ActionType: [],
    ApprovalModel: [],
    BudgetName: [],
    Definition: _json,
    ExecutionRoleArn: [],
    NotificationType: [],
    Subscribers: _json,
  });
};

/**
 * serializeAws_json1_1CreateBudgetRequest
 */
const se_CreateBudgetRequest = (input: CreateBudgetRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    Budget: (_) => se_Budget(_, context),
    NotificationsWithSubscribers: (_) => se_NotificationWithSubscribersList(_, context),
  });
};

/**
 * serializeAws_json1_1CreateNotificationRequest
 */
const se_CreateNotificationRequest = (input: CreateNotificationRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    Notification: (_) => se_Notification(_, context),
    Subscribers: _json,
  });
};

/**
 * serializeAws_json1_1CreateSubscriberRequest
 */
const se_CreateSubscriberRequest = (input: CreateSubscriberRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    Notification: (_) => se_Notification(_, context),
    Subscriber: _json,
  });
};

// se_Definition omitted.

// se_DeleteBudgetActionRequest omitted.

// se_DeleteBudgetRequest omitted.

/**
 * serializeAws_json1_1DeleteNotificationRequest
 */
const se_DeleteNotificationRequest = (input: DeleteNotificationRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    Notification: (_) => se_Notification(_, context),
  });
};

/**
 * serializeAws_json1_1DeleteSubscriberRequest
 */
const se_DeleteSubscriberRequest = (input: DeleteSubscriberRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    Notification: (_) => se_Notification(_, context),
    Subscriber: _json,
  });
};

/**
 * serializeAws_json1_1DescribeBudgetActionHistoriesRequest
 */
const se_DescribeBudgetActionHistoriesRequest = (
  input: DescribeBudgetActionHistoriesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccountId: [],
    ActionId: [],
    BudgetName: [],
    MaxResults: [],
    NextToken: [],
    TimePeriod: (_) => se_TimePeriod(_, context),
  });
};

// se_DescribeBudgetActionRequest omitted.

// se_DescribeBudgetActionsForAccountRequest omitted.

// se_DescribeBudgetActionsForBudgetRequest omitted.

// se_DescribeBudgetNotificationsForAccountRequest omitted.

/**
 * serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest
 */
const se_DescribeBudgetPerformanceHistoryRequest = (
  input: DescribeBudgetPerformanceHistoryRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    MaxResults: [],
    NextToken: [],
    TimePeriod: (_) => se_TimePeriod(_, context),
  });
};

// se_DescribeBudgetRequest omitted.

// se_DescribeBudgetsRequest omitted.

// se_DescribeNotificationsForBudgetRequest omitted.

/**
 * serializeAws_json1_1DescribeSubscribersForNotificationRequest
 */
const se_DescribeSubscribersForNotificationRequest = (
  input: DescribeSubscribersForNotificationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    MaxResults: [],
    NextToken: [],
    Notification: (_) => se_Notification(_, context),
  });
};

// se_DimensionValues omitted.

// se_ExecuteBudgetActionRequest omitted.

// se_Groups omitted.

// se_HistoricalOptions omitted.

// se_IamActionDefinition omitted.

// se_InstanceIds omitted.

/**
 * serializeAws_json1_1Notification
 */
const se_Notification = (input: Notification, context: __SerdeContext): any => {
  return take(input, {
    ComparisonOperator: [],
    NotificationState: [],
    NotificationType: [],
    Threshold: __serializeFloat,
    ThresholdType: [],
  });
};

/**
 * serializeAws_json1_1NotificationWithSubscribers
 */
const se_NotificationWithSubscribers = (input: NotificationWithSubscribers, context: __SerdeContext): any => {
  return take(input, {
    Notification: (_) => se_Notification(_, context),
    Subscribers: _json,
  });
};

/**
 * serializeAws_json1_1NotificationWithSubscribersList
 */
const se_NotificationWithSubscribersList = (input: NotificationWithSubscribers[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NotificationWithSubscribers(entry, context);
    });
};

// se_PlannedBudgetLimits omitted.

// se_Roles omitted.

// se_ScpActionDefinition omitted.

// se_Spend omitted.

// se_SsmActionDefinition omitted.

// se_Subscriber omitted.

// se_Subscribers omitted.

// se_TargetIds omitted.

/**
 * serializeAws_json1_1TimePeriod
 */
const se_TimePeriod = (input: TimePeriod, context: __SerdeContext): any => {
  return take(input, {
    End: (_) => Math.round(_.getTime() / 1000),
    Start: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1UpdateBudgetActionRequest
 */
const se_UpdateBudgetActionRequest = (input: UpdateBudgetActionRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    ActionId: [],
    ActionThreshold: (_) => se_ActionThreshold(_, context),
    ApprovalModel: [],
    BudgetName: [],
    Definition: _json,
    ExecutionRoleArn: [],
    NotificationType: [],
    Subscribers: _json,
  });
};

/**
 * serializeAws_json1_1UpdateBudgetRequest
 */
const se_UpdateBudgetRequest = (input: UpdateBudgetRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    NewBudget: (_) => se_Budget(_, context),
  });
};

/**
 * serializeAws_json1_1UpdateNotificationRequest
 */
const se_UpdateNotificationRequest = (input: UpdateNotificationRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    NewNotification: (_) => se_Notification(_, context),
    OldNotification: (_) => se_Notification(_, context),
  });
};

/**
 * serializeAws_json1_1UpdateSubscriberRequest
 */
const se_UpdateSubscriberRequest = (input: UpdateSubscriberRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    BudgetName: [],
    NewSubscriber: _json,
    Notification: (_) => se_Notification(_, context),
    OldSubscriber: _json,
  });
};

// se_Users omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return take(output, {
    ActionId: __expectString,
    ActionThreshold: (_: any) => de_ActionThreshold(_, context),
    ActionType: __expectString,
    ApprovalModel: __expectString,
    BudgetName: __expectString,
    Definition: _json,
    ExecutionRoleArn: __expectString,
    NotificationType: __expectString,
    Status: __expectString,
    Subscribers: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ActionHistories
 */
const de_ActionHistories = (output: any, context: __SerdeContext): ActionHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionHistory
 */
const de_ActionHistory = (output: any, context: __SerdeContext): ActionHistory => {
  return take(output, {
    ActionHistoryDetails: (_: any) => de_ActionHistoryDetails(_, context),
    EventType: __expectString,
    Status: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ActionHistoryDetails
 */
const de_ActionHistoryDetails = (output: any, context: __SerdeContext): ActionHistoryDetails => {
  return take(output, {
    Action: (_: any) => de_Action(_, context),
    Message: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Actions
 */
const de_Actions = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Action(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionThreshold
 */
const de_ActionThreshold = (output: any, context: __SerdeContext): ActionThreshold => {
  return take(output, {
    ActionThresholdType: __expectString,
    ActionThresholdValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1AutoAdjustData
 */
const de_AutoAdjustData = (output: any, context: __SerdeContext): AutoAdjustData => {
  return take(output, {
    AutoAdjustType: __expectString,
    HistoricalOptions: _json,
    LastAutoAdjustTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1Budget
 */
const de_Budget = (output: any, context: __SerdeContext): Budget => {
  return take(output, {
    AutoAdjustData: (_: any) => de_AutoAdjustData(_, context),
    BudgetLimit: _json,
    BudgetName: __expectString,
    BudgetType: __expectString,
    CalculatedSpend: _json,
    CostFilters: _json,
    CostTypes: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PlannedBudgetLimits: _json,
    TimePeriod: (_: any) => de_TimePeriod(_, context),
    TimeUnit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BudgetedAndActualAmounts
 */
const de_BudgetedAndActualAmounts = (output: any, context: __SerdeContext): BudgetedAndActualAmounts => {
  return take(output, {
    ActualAmount: _json,
    BudgetedAmount: _json,
    TimePeriod: (_: any) => de_TimePeriod(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BudgetedAndActualAmountsList
 */
const de_BudgetedAndActualAmountsList = (output: any, context: __SerdeContext): BudgetedAndActualAmounts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BudgetedAndActualAmounts(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BudgetNotificationsForAccount
 */
const de_BudgetNotificationsForAccount = (output: any, context: __SerdeContext): BudgetNotificationsForAccount => {
  return take(output, {
    BudgetName: __expectString,
    Notifications: (_: any) => de_Notifications(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BudgetNotificationsForAccountList
 */
const de_BudgetNotificationsForAccountList = (
  output: any,
  context: __SerdeContext
): BudgetNotificationsForAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BudgetNotificationsForAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BudgetPerformanceHistory
 */
const de_BudgetPerformanceHistory = (output: any, context: __SerdeContext): BudgetPerformanceHistory => {
  return take(output, {
    BudgetName: __expectString,
    BudgetType: __expectString,
    BudgetedAndActualAmountsList: (_: any) => de_BudgetedAndActualAmountsList(_, context),
    CostFilters: _json,
    CostTypes: _json,
    TimeUnit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Budgets
 */
const de_Budgets = (output: any, context: __SerdeContext): Budget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Budget(entry, context);
    });
  return retVal;
};

// de_CalculatedSpend omitted.

// de_CostFilters omitted.

// de_CostTypes omitted.

// de_CreateBudgetActionResponse omitted.

// de_CreateBudgetResponse omitted.

// de_CreateNotificationResponse omitted.

// de_CreateSubscriberResponse omitted.

// de_CreationLimitExceededException omitted.

// de_Definition omitted.

/**
 * deserializeAws_json1_1DeleteBudgetActionResponse
 */
const de_DeleteBudgetActionResponse = (output: any, context: __SerdeContext): DeleteBudgetActionResponse => {
  return take(output, {
    AccountId: __expectString,
    Action: (_: any) => de_Action(_, context),
    BudgetName: __expectString,
  }) as any;
};

// de_DeleteBudgetResponse omitted.

// de_DeleteNotificationResponse omitted.

// de_DeleteSubscriberResponse omitted.

/**
 * deserializeAws_json1_1DescribeBudgetActionHistoriesResponse
 */
const de_DescribeBudgetActionHistoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionHistoriesResponse => {
  return take(output, {
    ActionHistories: (_: any) => de_ActionHistories(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionResponse
 */
const de_DescribeBudgetActionResponse = (output: any, context: __SerdeContext): DescribeBudgetActionResponse => {
  return take(output, {
    AccountId: __expectString,
    Action: (_: any) => de_Action(_, context),
    BudgetName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionsForAccountResponse
 */
const de_DescribeBudgetActionsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForAccountResponse => {
  return take(output, {
    Actions: (_: any) => de_Actions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse
 */
const de_DescribeBudgetActionsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForBudgetResponse => {
  return take(output, {
    Actions: (_: any) => de_Actions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetNotificationsForAccountResponse
 */
const de_DescribeBudgetNotificationsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetNotificationsForAccountResponse => {
  return take(output, {
    BudgetNotificationsForAccount: (_: any) => de_BudgetNotificationsForAccountList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse
 */
const de_DescribeBudgetPerformanceHistoryResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetPerformanceHistoryResponse => {
  return take(output, {
    BudgetPerformanceHistory: (_: any) => de_BudgetPerformanceHistory(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetResponse
 */
const de_DescribeBudgetResponse = (output: any, context: __SerdeContext): DescribeBudgetResponse => {
  return take(output, {
    Budget: (_: any) => de_Budget(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetsResponse
 */
const de_DescribeBudgetsResponse = (output: any, context: __SerdeContext): DescribeBudgetsResponse => {
  return take(output, {
    Budgets: (_: any) => de_Budgets(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeNotificationsForBudgetResponse
 */
const de_DescribeNotificationsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeNotificationsForBudgetResponse => {
  return take(output, {
    NextToken: __expectString,
    Notifications: (_: any) => de_Notifications(_, context),
  }) as any;
};

// de_DescribeSubscribersForNotificationResponse omitted.

// de_DimensionValues omitted.

// de_DuplicateRecordException omitted.

// de_ExecuteBudgetActionResponse omitted.

// de_ExpiredNextTokenException omitted.

// de_Groups omitted.

// de_HistoricalOptions omitted.

// de_IamActionDefinition omitted.

// de_InstanceIds omitted.

// de_InternalErrorException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidParameterException omitted.

// de_NotFoundException omitted.

/**
 * deserializeAws_json1_1Notification
 */
const de_Notification = (output: any, context: __SerdeContext): Notification => {
  return take(output, {
    ComparisonOperator: __expectString,
    NotificationState: __expectString,
    NotificationType: __expectString,
    Threshold: __limitedParseDouble,
    ThresholdType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Notifications
 */
const de_Notifications = (output: any, context: __SerdeContext): Notification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Notification(entry, context);
    });
  return retVal;
};

// de_PlannedBudgetLimits omitted.

// de_ResourceLockedException omitted.

// de_Roles omitted.

// de_ScpActionDefinition omitted.

// de_Spend omitted.

// de_SsmActionDefinition omitted.

// de_Subscriber omitted.

// de_Subscribers omitted.

// de_TargetIds omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_1TimePeriod
 */
const de_TimePeriod = (output: any, context: __SerdeContext): TimePeriod => {
  return take(output, {
    End: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Start: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateBudgetActionResponse
 */
const de_UpdateBudgetActionResponse = (output: any, context: __SerdeContext): UpdateBudgetActionResponse => {
  return take(output, {
    AccountId: __expectString,
    BudgetName: __expectString,
    NewAction: (_: any) => de_Action(_, context),
    OldAction: (_: any) => de_Action(_, context),
  }) as any;
};

// de_UpdateBudgetResponse omitted.

// de_UpdateNotificationResponse omitted.

// de_UpdateSubscriberResponse omitted.

// de_Users omitted.

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
    "x-amz-target": `AWSBudgetServiceGateway.${operation}`,
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
