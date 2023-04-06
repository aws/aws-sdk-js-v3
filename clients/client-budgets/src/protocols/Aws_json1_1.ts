// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  CreateBudgetActionResponse,
  CreateBudgetRequest,
  CreateBudgetResponse,
  CreateNotificationRequest,
  CreateNotificationResponse,
  CreateSubscriberRequest,
  CreateSubscriberResponse,
  CreationLimitExceededException,
  Definition,
  DeleteBudgetActionRequest,
  DeleteBudgetActionResponse,
  DeleteBudgetRequest,
  DeleteBudgetResponse,
  DeleteNotificationRequest,
  DeleteNotificationResponse,
  DeleteSubscriberRequest,
  DeleteSubscriberResponse,
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
  DescribeSubscribersForNotificationResponse,
  DuplicateRecordException,
  ExecuteBudgetActionRequest,
  ExecuteBudgetActionResponse,
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
  UpdateBudgetResponse,
  UpdateNotificationRequest,
  UpdateNotificationResponse,
  UpdateSubscriberRequest,
  UpdateSubscriberResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateBudgetCommand
 */
export const se_CreateBudgetCommand = async (
  input: CreateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateBudget",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateBudgetAction",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateNotification",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateSubscriber",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteBudget",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBudgetActionCommand
 */
export const se_DeleteBudgetActionCommand = async (
  input: DeleteBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteBudgetAction",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotificationCommand
 */
export const se_DeleteNotificationCommand = async (
  input: DeleteNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteNotification",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteSubscriber",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudget",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionCommand
 */
export const se_DescribeBudgetActionCommand = async (
  input: DescribeBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetAction",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionHistoriesCommand
 */
export const se_DescribeBudgetActionHistoriesCommand = async (
  input: DescribeBudgetActionHistoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionHistories",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBudgetActionsForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetActionsForBudgetCommand
 */
export const se_DescribeBudgetActionsForBudgetCommand = async (
  input: DescribeBudgetActionsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBudgetActionsForBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetNotificationsForAccountCommand
 */
export const se_DescribeBudgetNotificationsForAccountCommand = async (
  input: DescribeBudgetNotificationsForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBudgetNotificationsForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand
 */
export const se_DescribeBudgetPerformanceHistoryCommand = async (
  input: DescribeBudgetPerformanceHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgets",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBudgetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotificationsForBudgetCommand
 */
export const se_DescribeNotificationsForBudgetCommand = async (
  input: DescribeNotificationsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeNotificationsForBudget",
  };
  let body: any;
  body = JSON.stringify(se_DescribeNotificationsForBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscribersForNotificationCommand
 */
export const se_DescribeSubscribersForNotificationCommand = async (
  input: DescribeSubscribersForNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeSubscribersForNotification",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.ExecuteBudgetAction",
  };
  let body: any;
  body = JSON.stringify(se_ExecuteBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBudgetCommand
 */
export const se_UpdateBudgetCommand = async (
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateBudget",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateBudgetAction",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateNotification",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateSubscriber",
  };
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
  contents = de_CreateBudgetResponse(data, context);
  const response: CreateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateBudgetActionResponse(data, context);
  const response: CreateBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateNotificationResponse(data, context);
  const response: CreateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateSubscriberResponse(data, context);
  const response: CreateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteBudgetResponse(data, context);
  const response: DeleteBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteNotificationResponse(data, context);
  const response: DeleteNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteSubscriberResponse(data, context);
  const response: DeleteSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeSubscribersForNotificationResponse(data, context);
  const response: DescribeSubscribersForNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ExecuteBudgetActionResponse(data, context);
  const response: ExecuteBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateBudgetResponse(data, context);
  const response: UpdateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateNotificationResponse(data, context);
  const response: UpdateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateSubscriberResponse(data, context);
  const response: UpdateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_CreationLimitExceededException(body, context);
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
  const deserialized: any = de_DuplicateRecordException(body, context);
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
  const deserialized: any = de_ExpiredNextTokenException(body, context);
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
  const deserialized: any = de_InternalErrorException(body, context);
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
  const deserialized: any = de_InvalidNextTokenException(body, context);
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
  const deserialized: any = de_InvalidParameterException(body, context);
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
  const deserialized: any = de_NotFoundException(body, context);
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
  const deserialized: any = de_ResourceLockedException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
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
  return {
    ...(input.ActionThresholdType != null && { ActionThresholdType: input.ActionThresholdType }),
    ...(input.ActionThresholdValue != null && { ActionThresholdValue: __serializeFloat(input.ActionThresholdValue) }),
  };
};

/**
 * serializeAws_json1_1AutoAdjustData
 */
const se_AutoAdjustData = (input: AutoAdjustData, context: __SerdeContext): any => {
  return {
    ...(input.AutoAdjustType != null && { AutoAdjustType: input.AutoAdjustType }),
    ...(input.HistoricalOptions != null && {
      HistoricalOptions: se_HistoricalOptions(input.HistoricalOptions, context),
    }),
    ...(input.LastAutoAdjustTime != null && {
      LastAutoAdjustTime: Math.round(input.LastAutoAdjustTime.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_json1_1Budget
 */
const se_Budget = (input: Budget, context: __SerdeContext): any => {
  return {
    ...(input.AutoAdjustData != null && { AutoAdjustData: se_AutoAdjustData(input.AutoAdjustData, context) }),
    ...(input.BudgetLimit != null && { BudgetLimit: se_Spend(input.BudgetLimit, context) }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.BudgetType != null && { BudgetType: input.BudgetType }),
    ...(input.CalculatedSpend != null && { CalculatedSpend: se_CalculatedSpend(input.CalculatedSpend, context) }),
    ...(input.CostFilters != null && { CostFilters: se_CostFilters(input.CostFilters, context) }),
    ...(input.CostTypes != null && { CostTypes: se_CostTypes(input.CostTypes, context) }),
    ...(input.LastUpdatedTime != null && { LastUpdatedTime: Math.round(input.LastUpdatedTime.getTime() / 1000) }),
    ...(input.PlannedBudgetLimits != null && {
      PlannedBudgetLimits: se_PlannedBudgetLimits(input.PlannedBudgetLimits, context),
    }),
    ...(input.TimePeriod != null && { TimePeriod: se_TimePeriod(input.TimePeriod, context) }),
    ...(input.TimeUnit != null && { TimeUnit: input.TimeUnit }),
  };
};

/**
 * serializeAws_json1_1CalculatedSpend
 */
const se_CalculatedSpend = (input: CalculatedSpend, context: __SerdeContext): any => {
  return {
    ...(input.ActualSpend != null && { ActualSpend: se_Spend(input.ActualSpend, context) }),
    ...(input.ForecastedSpend != null && { ForecastedSpend: se_Spend(input.ForecastedSpend, context) }),
  };
};

/**
 * serializeAws_json1_1CostFilters
 */
const se_CostFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_DimensionValues(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1CostTypes
 */
const se_CostTypes = (input: CostTypes, context: __SerdeContext): any => {
  return {
    ...(input.IncludeCredit != null && { IncludeCredit: input.IncludeCredit }),
    ...(input.IncludeDiscount != null && { IncludeDiscount: input.IncludeDiscount }),
    ...(input.IncludeOtherSubscription != null && { IncludeOtherSubscription: input.IncludeOtherSubscription }),
    ...(input.IncludeRecurring != null && { IncludeRecurring: input.IncludeRecurring }),
    ...(input.IncludeRefund != null && { IncludeRefund: input.IncludeRefund }),
    ...(input.IncludeSubscription != null && { IncludeSubscription: input.IncludeSubscription }),
    ...(input.IncludeSupport != null && { IncludeSupport: input.IncludeSupport }),
    ...(input.IncludeTax != null && { IncludeTax: input.IncludeTax }),
    ...(input.IncludeUpfront != null && { IncludeUpfront: input.IncludeUpfront }),
    ...(input.UseAmortized != null && { UseAmortized: input.UseAmortized }),
    ...(input.UseBlended != null && { UseBlended: input.UseBlended }),
  };
};

/**
 * serializeAws_json1_1CreateBudgetActionRequest
 */
const se_CreateBudgetActionRequest = (input: CreateBudgetActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionThreshold != null && { ActionThreshold: se_ActionThreshold(input.ActionThreshold, context) }),
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.ApprovalModel != null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Definition != null && { Definition: se_Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers != null && { Subscribers: se_Subscribers(input.Subscribers, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBudgetRequest
 */
const se_CreateBudgetRequest = (input: CreateBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Budget != null && { Budget: se_Budget(input.Budget, context) }),
    ...(input.NotificationsWithSubscribers != null && {
      NotificationsWithSubscribers: se_NotificationWithSubscribersList(input.NotificationsWithSubscribers, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateNotificationRequest
 */
const se_CreateNotificationRequest = (input: CreateNotificationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.Subscribers != null && { Subscribers: se_Subscribers(input.Subscribers, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSubscriberRequest
 */
const se_CreateSubscriberRequest = (input: CreateSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.Subscriber != null && { Subscriber: se_Subscriber(input.Subscriber, context) }),
  };
};

/**
 * serializeAws_json1_1Definition
 */
const se_Definition = (input: Definition, context: __SerdeContext): any => {
  return {
    ...(input.IamActionDefinition != null && {
      IamActionDefinition: se_IamActionDefinition(input.IamActionDefinition, context),
    }),
    ...(input.ScpActionDefinition != null && {
      ScpActionDefinition: se_ScpActionDefinition(input.ScpActionDefinition, context),
    }),
    ...(input.SsmActionDefinition != null && {
      SsmActionDefinition: se_SsmActionDefinition(input.SsmActionDefinition, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteBudgetActionRequest
 */
const se_DeleteBudgetActionRequest = (input: DeleteBudgetActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

/**
 * serializeAws_json1_1DeleteBudgetRequest
 */
const se_DeleteBudgetRequest = (input: DeleteBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

/**
 * serializeAws_json1_1DeleteNotificationRequest
 */
const se_DeleteNotificationRequest = (input: DeleteNotificationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteSubscriberRequest
 */
const se_DeleteSubscriberRequest = (input: DeleteSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.Subscriber != null && { Subscriber: se_Subscriber(input.Subscriber, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetActionHistoriesRequest
 */
const se_DescribeBudgetActionHistoriesRequest = (
  input: DescribeBudgetActionHistoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimePeriod != null && { TimePeriod: se_TimePeriod(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetActionRequest
 */
const se_DescribeBudgetActionRequest = (input: DescribeBudgetActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetActionsForAccountRequest
 */
const se_DescribeBudgetActionsForAccountRequest = (
  input: DescribeBudgetActionsForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetActionsForBudgetRequest
 */
const se_DescribeBudgetActionsForBudgetRequest = (
  input: DescribeBudgetActionsForBudgetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetNotificationsForAccountRequest
 */
const se_DescribeBudgetNotificationsForAccountRequest = (
  input: DescribeBudgetNotificationsForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest
 */
const se_DescribeBudgetPerformanceHistoryRequest = (
  input: DescribeBudgetPerformanceHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimePeriod != null && { TimePeriod: se_TimePeriod(input.TimePeriod, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetRequest
 */
const se_DescribeBudgetRequest = (input: DescribeBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

/**
 * serializeAws_json1_1DescribeBudgetsRequest
 */
const se_DescribeBudgetsRequest = (input: DescribeBudgetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeNotificationsForBudgetRequest
 */
const se_DescribeNotificationsForBudgetRequest = (
  input: DescribeNotificationsForBudgetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeSubscribersForNotificationRequest
 */
const se_DescribeSubscribersForNotificationRequest = (
  input: DescribeSubscribersForNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
  };
};

/**
 * serializeAws_json1_1DimensionValues
 */
const se_DimensionValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExecuteBudgetActionRequest
 */
const se_ExecuteBudgetActionRequest = (input: ExecuteBudgetActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.ExecutionType != null && { ExecutionType: input.ExecutionType }),
  };
};

/**
 * serializeAws_json1_1Groups
 */
const se_Groups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1HistoricalOptions
 */
const se_HistoricalOptions = (input: HistoricalOptions, context: __SerdeContext): any => {
  return {
    ...(input.BudgetAdjustmentPeriod != null && { BudgetAdjustmentPeriod: input.BudgetAdjustmentPeriod }),
    ...(input.LookBackAvailablePeriods != null && { LookBackAvailablePeriods: input.LookBackAvailablePeriods }),
  };
};

/**
 * serializeAws_json1_1IamActionDefinition
 */
const se_IamActionDefinition = (input: IamActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Groups != null && { Groups: se_Groups(input.Groups, context) }),
    ...(input.PolicyArn != null && { PolicyArn: input.PolicyArn }),
    ...(input.Roles != null && { Roles: se_Roles(input.Roles, context) }),
    ...(input.Users != null && { Users: se_Users(input.Users, context) }),
  };
};

/**
 * serializeAws_json1_1InstanceIds
 */
const se_InstanceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Notification
 */
const se_Notification = (input: Notification, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.NotificationState != null && { NotificationState: input.NotificationState }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdType != null && { ThresholdType: input.ThresholdType }),
  };
};

/**
 * serializeAws_json1_1NotificationWithSubscribers
 */
const se_NotificationWithSubscribers = (input: NotificationWithSubscribers, context: __SerdeContext): any => {
  return {
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.Subscribers != null && { Subscribers: se_Subscribers(input.Subscribers, context) }),
  };
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

/**
 * serializeAws_json1_1PlannedBudgetLimits
 */
const se_PlannedBudgetLimits = (input: Record<string, Spend>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Spend(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1Roles
 */
const se_Roles = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ScpActionDefinition
 */
const se_ScpActionDefinition = (input: ScpActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.TargetIds != null && { TargetIds: se_TargetIds(input.TargetIds, context) }),
  };
};

/**
 * serializeAws_json1_1Spend
 */
const se_Spend = (input: Spend, context: __SerdeContext): any => {
  return {
    ...(input.Amount != null && { Amount: input.Amount }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_json1_1SsmActionDefinition
 */
const se_SsmActionDefinition = (input: SsmActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ActionSubType != null && { ActionSubType: input.ActionSubType }),
    ...(input.InstanceIds != null && { InstanceIds: se_InstanceIds(input.InstanceIds, context) }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_json1_1Subscriber
 */
const se_Subscriber = (input: Subscriber, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.SubscriptionType != null && { SubscriptionType: input.SubscriptionType }),
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
 * serializeAws_json1_1TargetIds
 */
const se_TargetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TimePeriod
 */
const se_TimePeriod = (input: TimePeriod, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: Math.round(input.End.getTime() / 1000) }),
    ...(input.Start != null && { Start: Math.round(input.Start.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UpdateBudgetActionRequest
 */
const se_UpdateBudgetActionRequest = (input: UpdateBudgetActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.ActionThreshold != null && { ActionThreshold: se_ActionThreshold(input.ActionThreshold, context) }),
    ...(input.ApprovalModel != null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Definition != null && { Definition: se_Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers != null && { Subscribers: se_Subscribers(input.Subscribers, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateBudgetRequest
 */
const se_UpdateBudgetRequest = (input: UpdateBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.NewBudget != null && { NewBudget: se_Budget(input.NewBudget, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateNotificationRequest
 */
const se_UpdateNotificationRequest = (input: UpdateNotificationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.NewNotification != null && { NewNotification: se_Notification(input.NewNotification, context) }),
    ...(input.OldNotification != null && { OldNotification: se_Notification(input.OldNotification, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSubscriberRequest
 */
const se_UpdateSubscriberRequest = (input: UpdateSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.NewSubscriber != null && { NewSubscriber: se_Subscriber(input.NewSubscriber, context) }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.OldSubscriber != null && { OldSubscriber: se_Subscriber(input.OldSubscriber, context) }),
  };
};

/**
 * serializeAws_json1_1Users
 */
const se_Users = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionId: __expectString(output.ActionId),
    ActionThreshold: output.ActionThreshold != null ? de_ActionThreshold(output.ActionThreshold, context) : undefined,
    ActionType: __expectString(output.ActionType),
    ApprovalModel: __expectString(output.ApprovalModel),
    BudgetName: __expectString(output.BudgetName),
    Definition: output.Definition != null ? de_Definition(output.Definition, context) : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    NotificationType: __expectString(output.NotificationType),
    Status: __expectString(output.Status),
    Subscribers: output.Subscribers != null ? de_Subscribers(output.Subscribers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionHistories
 */
const de_ActionHistories = (output: any, context: __SerdeContext): ActionHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionHistory
 */
const de_ActionHistory = (output: any, context: __SerdeContext): ActionHistory => {
  return {
    ActionHistoryDetails:
      output.ActionHistoryDetails != null ? de_ActionHistoryDetails(output.ActionHistoryDetails, context) : undefined,
    EventType: __expectString(output.EventType),
    Status: __expectString(output.Status),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionHistoryDetails
 */
const de_ActionHistoryDetails = (output: any, context: __SerdeContext): ActionHistoryDetails => {
  return {
    Action: output.Action != null ? de_Action(output.Action, context) : undefined,
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Actions
 */
const de_Actions = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Action(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionThreshold
 */
const de_ActionThreshold = (output: any, context: __SerdeContext): ActionThreshold => {
  return {
    ActionThresholdType: __expectString(output.ActionThresholdType),
    ActionThresholdValue: __limitedParseDouble(output.ActionThresholdValue),
  } as any;
};

/**
 * deserializeAws_json1_1AutoAdjustData
 */
const de_AutoAdjustData = (output: any, context: __SerdeContext): AutoAdjustData => {
  return {
    AutoAdjustType: __expectString(output.AutoAdjustType),
    HistoricalOptions:
      output.HistoricalOptions != null ? de_HistoricalOptions(output.HistoricalOptions, context) : undefined,
    LastAutoAdjustTime:
      output.LastAutoAdjustTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAutoAdjustTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Budget
 */
const de_Budget = (output: any, context: __SerdeContext): Budget => {
  return {
    AutoAdjustData: output.AutoAdjustData != null ? de_AutoAdjustData(output.AutoAdjustData, context) : undefined,
    BudgetLimit: output.BudgetLimit != null ? de_Spend(output.BudgetLimit, context) : undefined,
    BudgetName: __expectString(output.BudgetName),
    BudgetType: __expectString(output.BudgetType),
    CalculatedSpend: output.CalculatedSpend != null ? de_CalculatedSpend(output.CalculatedSpend, context) : undefined,
    CostFilters: output.CostFilters != null ? de_CostFilters(output.CostFilters, context) : undefined,
    CostTypes: output.CostTypes != null ? de_CostTypes(output.CostTypes, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    PlannedBudgetLimits:
      output.PlannedBudgetLimits != null ? de_PlannedBudgetLimits(output.PlannedBudgetLimits, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_TimePeriod(output.TimePeriod, context) : undefined,
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

/**
 * deserializeAws_json1_1BudgetedAndActualAmounts
 */
const de_BudgetedAndActualAmounts = (output: any, context: __SerdeContext): BudgetedAndActualAmounts => {
  return {
    ActualAmount: output.ActualAmount != null ? de_Spend(output.ActualAmount, context) : undefined,
    BudgetedAmount: output.BudgetedAmount != null ? de_Spend(output.BudgetedAmount, context) : undefined,
    TimePeriod: output.TimePeriod != null ? de_TimePeriod(output.TimePeriod, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BudgetedAndActualAmountsList
 */
const de_BudgetedAndActualAmountsList = (output: any, context: __SerdeContext): BudgetedAndActualAmounts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BudgetedAndActualAmounts(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BudgetNotificationsForAccount
 */
const de_BudgetNotificationsForAccount = (output: any, context: __SerdeContext): BudgetNotificationsForAccount => {
  return {
    BudgetName: __expectString(output.BudgetName),
    Notifications: output.Notifications != null ? de_Notifications(output.Notifications, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_BudgetNotificationsForAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BudgetPerformanceHistory
 */
const de_BudgetPerformanceHistory = (output: any, context: __SerdeContext): BudgetPerformanceHistory => {
  return {
    BudgetName: __expectString(output.BudgetName),
    BudgetType: __expectString(output.BudgetType),
    BudgetedAndActualAmountsList:
      output.BudgetedAndActualAmountsList != null
        ? de_BudgetedAndActualAmountsList(output.BudgetedAndActualAmountsList, context)
        : undefined,
    CostFilters: output.CostFilters != null ? de_CostFilters(output.CostFilters, context) : undefined,
    CostTypes: output.CostTypes != null ? de_CostTypes(output.CostTypes, context) : undefined,
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

/**
 * deserializeAws_json1_1Budgets
 */
const de_Budgets = (output: any, context: __SerdeContext): Budget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Budget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CalculatedSpend
 */
const de_CalculatedSpend = (output: any, context: __SerdeContext): CalculatedSpend => {
  return {
    ActualSpend: output.ActualSpend != null ? de_Spend(output.ActualSpend, context) : undefined,
    ForecastedSpend: output.ForecastedSpend != null ? de_Spend(output.ForecastedSpend, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CostFilters
 */
const de_CostFilters = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_DimensionValues(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1CostTypes
 */
const de_CostTypes = (output: any, context: __SerdeContext): CostTypes => {
  return {
    IncludeCredit: __expectBoolean(output.IncludeCredit),
    IncludeDiscount: __expectBoolean(output.IncludeDiscount),
    IncludeOtherSubscription: __expectBoolean(output.IncludeOtherSubscription),
    IncludeRecurring: __expectBoolean(output.IncludeRecurring),
    IncludeRefund: __expectBoolean(output.IncludeRefund),
    IncludeSubscription: __expectBoolean(output.IncludeSubscription),
    IncludeSupport: __expectBoolean(output.IncludeSupport),
    IncludeTax: __expectBoolean(output.IncludeTax),
    IncludeUpfront: __expectBoolean(output.IncludeUpfront),
    UseAmortized: __expectBoolean(output.UseAmortized),
    UseBlended: __expectBoolean(output.UseBlended),
  } as any;
};

/**
 * deserializeAws_json1_1CreateBudgetActionResponse
 */
const de_CreateBudgetActionResponse = (output: any, context: __SerdeContext): CreateBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    ActionId: __expectString(output.ActionId),
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

/**
 * deserializeAws_json1_1CreateBudgetResponse
 */
const de_CreateBudgetResponse = (output: any, context: __SerdeContext): CreateBudgetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateNotificationResponse
 */
const de_CreateNotificationResponse = (output: any, context: __SerdeContext): CreateNotificationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateSubscriberResponse
 */
const de_CreateSubscriberResponse = (output: any, context: __SerdeContext): CreateSubscriberResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreationLimitExceededException
 */
const de_CreationLimitExceededException = (output: any, context: __SerdeContext): CreationLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Definition
 */
const de_Definition = (output: any, context: __SerdeContext): Definition => {
  return {
    IamActionDefinition:
      output.IamActionDefinition != null ? de_IamActionDefinition(output.IamActionDefinition, context) : undefined,
    ScpActionDefinition:
      output.ScpActionDefinition != null ? de_ScpActionDefinition(output.ScpActionDefinition, context) : undefined,
    SsmActionDefinition:
      output.SsmActionDefinition != null ? de_SsmActionDefinition(output.SsmActionDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBudgetActionResponse
 */
const de_DeleteBudgetActionResponse = (output: any, context: __SerdeContext): DeleteBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    Action: output.Action != null ? de_Action(output.Action, context) : undefined,
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBudgetResponse
 */
const de_DeleteBudgetResponse = (output: any, context: __SerdeContext): DeleteBudgetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteNotificationResponse
 */
const de_DeleteNotificationResponse = (output: any, context: __SerdeContext): DeleteNotificationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSubscriberResponse
 */
const de_DeleteSubscriberResponse = (output: any, context: __SerdeContext): DeleteSubscriberResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionHistoriesResponse
 */
const de_DescribeBudgetActionHistoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionHistoriesResponse => {
  return {
    ActionHistories: output.ActionHistories != null ? de_ActionHistories(output.ActionHistories, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionResponse
 */
const de_DescribeBudgetActionResponse = (output: any, context: __SerdeContext): DescribeBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    Action: output.Action != null ? de_Action(output.Action, context) : undefined,
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionsForAccountResponse
 */
const de_DescribeBudgetActionsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForAccountResponse => {
  return {
    Actions: output.Actions != null ? de_Actions(output.Actions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse
 */
const de_DescribeBudgetActionsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForBudgetResponse => {
  return {
    Actions: output.Actions != null ? de_Actions(output.Actions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetNotificationsForAccountResponse
 */
const de_DescribeBudgetNotificationsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetNotificationsForAccountResponse => {
  return {
    BudgetNotificationsForAccount:
      output.BudgetNotificationsForAccount != null
        ? de_BudgetNotificationsForAccountList(output.BudgetNotificationsForAccount, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse
 */
const de_DescribeBudgetPerformanceHistoryResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetPerformanceHistoryResponse => {
  return {
    BudgetPerformanceHistory:
      output.BudgetPerformanceHistory != null
        ? de_BudgetPerformanceHistory(output.BudgetPerformanceHistory, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetResponse
 */
const de_DescribeBudgetResponse = (output: any, context: __SerdeContext): DescribeBudgetResponse => {
  return {
    Budget: output.Budget != null ? de_Budget(output.Budget, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBudgetsResponse
 */
const de_DescribeBudgetsResponse = (output: any, context: __SerdeContext): DescribeBudgetsResponse => {
  return {
    Budgets: output.Budgets != null ? de_Budgets(output.Budgets, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeNotificationsForBudgetResponse
 */
const de_DescribeNotificationsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeNotificationsForBudgetResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Notifications: output.Notifications != null ? de_Notifications(output.Notifications, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSubscribersForNotificationResponse
 */
const de_DescribeSubscribersForNotificationResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscribersForNotificationResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Subscribers: output.Subscribers != null ? de_Subscribers(output.Subscribers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DimensionValues
 */
const de_DimensionValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1DuplicateRecordException
 */
const de_DuplicateRecordException = (output: any, context: __SerdeContext): DuplicateRecordException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteBudgetActionResponse
 */
const de_ExecuteBudgetActionResponse = (output: any, context: __SerdeContext): ExecuteBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    ActionId: __expectString(output.ActionId),
    BudgetName: __expectString(output.BudgetName),
    ExecutionType: __expectString(output.ExecutionType),
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredNextTokenException
 */
const de_ExpiredNextTokenException = (output: any, context: __SerdeContext): ExpiredNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1HistoricalOptions
 */
const de_HistoricalOptions = (output: any, context: __SerdeContext): HistoricalOptions => {
  return {
    BudgetAdjustmentPeriod: __expectInt32(output.BudgetAdjustmentPeriod),
    LookBackAvailablePeriods: __expectInt32(output.LookBackAvailablePeriods),
  } as any;
};

/**
 * deserializeAws_json1_1IamActionDefinition
 */
const de_IamActionDefinition = (output: any, context: __SerdeContext): IamActionDefinition => {
  return {
    Groups: output.Groups != null ? de_Groups(output.Groups, context) : undefined,
    PolicyArn: __expectString(output.PolicyArn),
    Roles: output.Roles != null ? de_Roles(output.Roles, context) : undefined,
    Users: output.Users != null ? de_Users(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceIds
 */
const de_InstanceIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    Message: __expectString(output.Message),
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
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Notification
 */
const de_Notification = (output: any, context: __SerdeContext): Notification => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    NotificationState: __expectString(output.NotificationState),
    NotificationType: __expectString(output.NotificationType),
    Threshold: __limitedParseDouble(output.Threshold),
    ThresholdType: __expectString(output.ThresholdType),
  } as any;
};

/**
 * deserializeAws_json1_1Notifications
 */
const de_Notifications = (output: any, context: __SerdeContext): Notification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Notification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlannedBudgetLimits
 */
const de_PlannedBudgetLimits = (output: any, context: __SerdeContext): Record<string, Spend> => {
  return Object.entries(output).reduce((acc: Record<string, Spend>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Spend(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ResourceLockedException
 */
const de_ResourceLockedException = (output: any, context: __SerdeContext): ResourceLockedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Roles
 */
const de_Roles = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ScpActionDefinition
 */
const de_ScpActionDefinition = (output: any, context: __SerdeContext): ScpActionDefinition => {
  return {
    PolicyId: __expectString(output.PolicyId),
    TargetIds: output.TargetIds != null ? de_TargetIds(output.TargetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Spend
 */
const de_Spend = (output: any, context: __SerdeContext): Spend => {
  return {
    Amount: __expectString(output.Amount),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1SsmActionDefinition
 */
const de_SsmActionDefinition = (output: any, context: __SerdeContext): SsmActionDefinition => {
  return {
    ActionSubType: __expectString(output.ActionSubType),
    InstanceIds: output.InstanceIds != null ? de_InstanceIds(output.InstanceIds, context) : undefined,
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_json1_1Subscriber
 */
const de_Subscriber = (output: any, context: __SerdeContext): Subscriber => {
  return {
    Address: __expectString(output.Address),
    SubscriptionType: __expectString(output.SubscriptionType),
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
 * deserializeAws_json1_1TargetIds
 */
const de_TargetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TimePeriod
 */
const de_TimePeriod = (output: any, context: __SerdeContext): TimePeriod => {
  return {
    End: output.End != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.End))) : undefined,
    Start: output.Start != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Start))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBudgetActionResponse
 */
const de_UpdateBudgetActionResponse = (output: any, context: __SerdeContext): UpdateBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    BudgetName: __expectString(output.BudgetName),
    NewAction: output.NewAction != null ? de_Action(output.NewAction, context) : undefined,
    OldAction: output.OldAction != null ? de_Action(output.OldAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateBudgetResponse
 */
const de_UpdateBudgetResponse = (output: any, context: __SerdeContext): UpdateBudgetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateNotificationResponse
 */
const de_UpdateNotificationResponse = (output: any, context: __SerdeContext): UpdateNotificationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateSubscriberResponse
 */
const de_UpdateSubscriberResponse = (output: any, context: __SerdeContext): UpdateSubscriberResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Users
 */
const de_Users = (output: any, context: __SerdeContext): string[] => {
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
