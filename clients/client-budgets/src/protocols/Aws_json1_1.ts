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

export const serializeAws_json1_1CreateBudgetCommand = async (
  input: CreateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateBudget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBudgetActionCommand = async (
  input: CreateBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateBudgetAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNotificationCommand = async (
  input: CreateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateNotification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubscriberCommand = async (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateSubscriber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBudgetCommand = async (
  input: DeleteBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteBudget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBudgetActionCommand = async (
  input: DeleteBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteBudgetAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNotificationCommand = async (
  input: DeleteNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteNotification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubscriberCommand = async (
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteSubscriber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetCommand = async (
  input: DescribeBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetActionCommand = async (
  input: DescribeBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetActionHistoriesCommand = async (
  input: DescribeBudgetActionHistoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionHistories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionHistoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetActionsForAccountCommand = async (
  input: DescribeBudgetActionsForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionsForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetActionsForBudgetCommand = async (
  input: DescribeBudgetActionsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionsForBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetNotificationsForAccountCommand = async (
  input: DescribeBudgetNotificationsForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetNotificationsForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = async (
  input: DescribeBudgetPerformanceHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetsCommand = async (
  input: DescribeBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNotificationsForBudgetCommand = async (
  input: DescribeNotificationsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeNotificationsForBudget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeNotificationsForBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubscribersForNotificationCommand = async (
  input: DescribeSubscribersForNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeSubscribersForNotification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSubscribersForNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExecuteBudgetActionCommand = async (
  input: ExecuteBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.ExecuteBudgetAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExecuteBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBudgetCommand = async (
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateBudget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBudgetActionCommand = async (
  input: UpdateBudgetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateBudgetAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNotificationCommand = async (
  input: UpdateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateNotification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubscriberCommand = async (
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateSubscriber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBudgetResponse(data, context);
  const response: CreateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBudgetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBudgetActionResponse(data, context);
  const response: CreateBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBudgetActionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNotificationResponse(data, context);
  const response: CreateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNotificationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubscriberResponse(data, context);
  const response: CreateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSubscriberCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      throw await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBudgetResponse(data, context);
  const response: DeleteBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBudgetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBudgetActionResponse(data, context);
  const response: DeleteBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBudgetActionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      throw await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNotificationResponse(data, context);
  const response: DeleteNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNotificationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubscriberResponse(data, context);
  const response: DeleteSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubscriberCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetResponse(data, context);
  const response: DescribeBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetActionResponse(data, context);
  const response: DescribeBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetActionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetActionHistoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionHistoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetActionHistoriesResponse(data, context);
  const response: DescribeBudgetActionHistoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetActionsForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionsForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetActionsForAccountResponse(data, context);
  const response: DescribeBudgetActionsForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse(data, context);
  const response: DescribeBudgetActionsForBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetNotificationsForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetNotificationsForAccountResponse(data, context);
  const response: DescribeBudgetNotificationsForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetNotificationsForAccountCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse(data, context);
  const response: DescribeBudgetPerformanceHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetsResponse(data, context);
  const response: DescribeBudgetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBudgetsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeNotificationsForBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNotificationsForBudgetResponse(data, context);
  const response: DescribeNotificationsForBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeNotificationsForBudgetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSubscribersForNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribersForNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubscribersForNotificationResponse(data, context);
  const response: DescribeSubscribersForNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubscribersForNotificationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExecuteBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExecuteBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExecuteBudgetActionResponse(data, context);
  const response: ExecuteBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExecuteBudgetActionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      throw await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBudgetResponse(data, context);
  const response: UpdateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBudgetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateBudgetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBudgetActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBudgetActionResponse(data, context);
  const response: UpdateBudgetActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBudgetActionCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      throw await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNotificationResponse(data, context);
  const response: UpdateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNotificationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubscriberResponse(data, context);
  const response: UpdateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSubscriberCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      throw await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      throw await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.budgets#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CreationLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CreationLimitExceededException(body, context);
  const exception = new CreationLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateRecordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRecordException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRecordException(body, context);
  const exception = new DuplicateRecordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(body, context);
  const exception = new ExpiredNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(body, context);
  const exception = new InternalErrorException({
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

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceLockedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLockedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLockedException(body, context);
  const exception = new ResourceLockedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ActionThreshold = (input: ActionThreshold, context: __SerdeContext): any => {
  return {
    ...(input.ActionThresholdType != null && { ActionThresholdType: input.ActionThresholdType }),
    ...(input.ActionThresholdValue != null && { ActionThresholdValue: __serializeFloat(input.ActionThresholdValue) }),
  };
};

const serializeAws_json1_1AutoAdjustData = (input: AutoAdjustData, context: __SerdeContext): any => {
  return {
    ...(input.AutoAdjustType != null && { AutoAdjustType: input.AutoAdjustType }),
    ...(input.HistoricalOptions != null && {
      HistoricalOptions: serializeAws_json1_1HistoricalOptions(input.HistoricalOptions, context),
    }),
    ...(input.LastAutoAdjustTime != null && {
      LastAutoAdjustTime: Math.round(input.LastAutoAdjustTime.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1Budget = (input: Budget, context: __SerdeContext): any => {
  return {
    ...(input.AutoAdjustData != null && {
      AutoAdjustData: serializeAws_json1_1AutoAdjustData(input.AutoAdjustData, context),
    }),
    ...(input.BudgetLimit != null && { BudgetLimit: serializeAws_json1_1Spend(input.BudgetLimit, context) }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.BudgetType != null && { BudgetType: input.BudgetType }),
    ...(input.CalculatedSpend != null && {
      CalculatedSpend: serializeAws_json1_1CalculatedSpend(input.CalculatedSpend, context),
    }),
    ...(input.CostFilters != null && { CostFilters: serializeAws_json1_1CostFilters(input.CostFilters, context) }),
    ...(input.CostTypes != null && { CostTypes: serializeAws_json1_1CostTypes(input.CostTypes, context) }),
    ...(input.LastUpdatedTime != null && { LastUpdatedTime: Math.round(input.LastUpdatedTime.getTime() / 1000) }),
    ...(input.PlannedBudgetLimits != null && {
      PlannedBudgetLimits: serializeAws_json1_1PlannedBudgetLimits(input.PlannedBudgetLimits, context),
    }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
    ...(input.TimeUnit != null && { TimeUnit: input.TimeUnit }),
  };
};

const serializeAws_json1_1CalculatedSpend = (input: CalculatedSpend, context: __SerdeContext): any => {
  return {
    ...(input.ActualSpend != null && { ActualSpend: serializeAws_json1_1Spend(input.ActualSpend, context) }),
    ...(input.ForecastedSpend != null && {
      ForecastedSpend: serializeAws_json1_1Spend(input.ForecastedSpend, context),
    }),
  };
};

const serializeAws_json1_1CostFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1DimensionValues(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1CostTypes = (input: CostTypes, context: __SerdeContext): any => {
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

const serializeAws_json1_1CreateBudgetActionRequest = (
  input: CreateBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionThreshold != null && {
      ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
    }),
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.ApprovalModel != null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Definition != null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers != null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1CreateBudgetRequest = (input: CreateBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Budget != null && { Budget: serializeAws_json1_1Budget(input.Budget, context) }),
    ...(input.NotificationsWithSubscribers != null && {
      NotificationsWithSubscribers: serializeAws_json1_1NotificationWithSubscribersList(
        input.NotificationsWithSubscribers,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateNotificationRequest = (
  input: CreateNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscribers != null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1CreateSubscriberRequest = (input: CreateSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscriber != null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }),
  };
};

const serializeAws_json1_1Definition = (input: Definition, context: __SerdeContext): any => {
  return {
    ...(input.IamActionDefinition != null && {
      IamActionDefinition: serializeAws_json1_1IamActionDefinition(input.IamActionDefinition, context),
    }),
    ...(input.ScpActionDefinition != null && {
      ScpActionDefinition: serializeAws_json1_1ScpActionDefinition(input.ScpActionDefinition, context),
    }),
    ...(input.SsmActionDefinition != null && {
      SsmActionDefinition: serializeAws_json1_1SsmActionDefinition(input.SsmActionDefinition, context),
    }),
  };
};

const serializeAws_json1_1DeleteBudgetActionRequest = (
  input: DeleteBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DeleteBudgetRequest = (input: DeleteBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DeleteNotificationRequest = (
  input: DeleteNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
  };
};

const serializeAws_json1_1DeleteSubscriberRequest = (input: DeleteSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscriber != null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }),
  };
};

const serializeAws_json1_1DescribeBudgetActionHistoriesRequest = (
  input: DescribeBudgetActionHistoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1DescribeBudgetActionRequest = (
  input: DescribeBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DescribeBudgetActionsForAccountRequest = (
  input: DescribeBudgetActionsForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeBudgetActionsForBudgetRequest = (
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

const serializeAws_json1_1DescribeBudgetNotificationsForAccountRequest = (
  input: DescribeBudgetNotificationsForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest = (
  input: DescribeBudgetPerformanceHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimePeriod != null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1DescribeBudgetRequest = (input: DescribeBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DescribeBudgetsRequest = (input: DescribeBudgetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeNotificationsForBudgetRequest = (
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

const serializeAws_json1_1DescribeSubscribersForNotificationRequest = (
  input: DescribeSubscribersForNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
  };
};

const serializeAws_json1_1DimensionValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExecuteBudgetActionRequest = (
  input: ExecuteBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.ExecutionType != null && { ExecutionType: input.ExecutionType }),
  };
};

const serializeAws_json1_1Groups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1HistoricalOptions = (input: HistoricalOptions, context: __SerdeContext): any => {
  return {
    ...(input.BudgetAdjustmentPeriod != null && { BudgetAdjustmentPeriod: input.BudgetAdjustmentPeriod }),
    ...(input.LookBackAvailablePeriods != null && { LookBackAvailablePeriods: input.LookBackAvailablePeriods }),
  };
};

const serializeAws_json1_1IamActionDefinition = (input: IamActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Groups != null && { Groups: serializeAws_json1_1Groups(input.Groups, context) }),
    ...(input.PolicyArn != null && { PolicyArn: input.PolicyArn }),
    ...(input.Roles != null && { Roles: serializeAws_json1_1Roles(input.Roles, context) }),
    ...(input.Users != null && { Users: serializeAws_json1_1Users(input.Users, context) }),
  };
};

const serializeAws_json1_1InstanceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Notification = (input: Notification, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.NotificationState != null && { NotificationState: input.NotificationState }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdType != null && { ThresholdType: input.ThresholdType }),
  };
};

const serializeAws_json1_1NotificationWithSubscribers = (
  input: NotificationWithSubscribers,
  context: __SerdeContext
): any => {
  return {
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscribers != null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1NotificationWithSubscribersList = (
  input: NotificationWithSubscribers[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1NotificationWithSubscribers(entry, context);
    });
};

const serializeAws_json1_1PlannedBudgetLimits = (input: Record<string, Spend>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1Spend(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1Roles = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ScpActionDefinition = (input: ScpActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.TargetIds != null && { TargetIds: serializeAws_json1_1TargetIds(input.TargetIds, context) }),
  };
};

const serializeAws_json1_1Spend = (input: Spend, context: __SerdeContext): any => {
  return {
    ...(input.Amount != null && { Amount: input.Amount }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_json1_1SsmActionDefinition = (input: SsmActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ActionSubType != null && { ActionSubType: input.ActionSubType }),
    ...(input.InstanceIds != null && { InstanceIds: serializeAws_json1_1InstanceIds(input.InstanceIds, context) }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

const serializeAws_json1_1Subscriber = (input: Subscriber, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.SubscriptionType != null && { SubscriptionType: input.SubscriptionType }),
  };
};

const serializeAws_json1_1Subscribers = (input: Subscriber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Subscriber(entry, context);
    });
};

const serializeAws_json1_1TargetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TimePeriod = (input: TimePeriod, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: Math.round(input.End.getTime() / 1000) }),
    ...(input.Start != null && { Start: Math.round(input.Start.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UpdateBudgetActionRequest = (
  input: UpdateBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ActionId != null && { ActionId: input.ActionId }),
    ...(input.ActionThreshold != null && {
      ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
    }),
    ...(input.ApprovalModel != null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.Definition != null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType != null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers != null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1UpdateBudgetRequest = (input: UpdateBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.NewBudget != null && { NewBudget: serializeAws_json1_1Budget(input.NewBudget, context) }),
  };
};

const serializeAws_json1_1UpdateNotificationRequest = (
  input: UpdateNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.NewNotification != null && {
      NewNotification: serializeAws_json1_1Notification(input.NewNotification, context),
    }),
    ...(input.OldNotification != null && {
      OldNotification: serializeAws_json1_1Notification(input.OldNotification, context),
    }),
  };
};

const serializeAws_json1_1UpdateSubscriberRequest = (input: UpdateSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.NewSubscriber != null && { NewSubscriber: serializeAws_json1_1Subscriber(input.NewSubscriber, context) }),
    ...(input.Notification != null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OldSubscriber != null && { OldSubscriber: serializeAws_json1_1Subscriber(input.OldSubscriber, context) }),
  };
};

const serializeAws_json1_1Users = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionId: __expectString(output.ActionId),
    ActionThreshold:
      output.ActionThreshold != null
        ? deserializeAws_json1_1ActionThreshold(output.ActionThreshold, context)
        : undefined,
    ActionType: __expectString(output.ActionType),
    ApprovalModel: __expectString(output.ApprovalModel),
    BudgetName: __expectString(output.BudgetName),
    Definition: output.Definition != null ? deserializeAws_json1_1Definition(output.Definition, context) : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    NotificationType: __expectString(output.NotificationType),
    Status: __expectString(output.Status),
    Subscribers:
      output.Subscribers != null ? deserializeAws_json1_1Subscribers(output.Subscribers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ActionHistories = (output: any, context: __SerdeContext): ActionHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionHistory = (output: any, context: __SerdeContext): ActionHistory => {
  return {
    ActionHistoryDetails:
      output.ActionHistoryDetails != null
        ? deserializeAws_json1_1ActionHistoryDetails(output.ActionHistoryDetails, context)
        : undefined,
    EventType: __expectString(output.EventType),
    Status: __expectString(output.Status),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

const deserializeAws_json1_1ActionHistoryDetails = (output: any, context: __SerdeContext): ActionHistoryDetails => {
  return {
    Action: output.Action != null ? deserializeAws_json1_1Action(output.Action, context) : undefined,
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Actions = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Action(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionThreshold = (output: any, context: __SerdeContext): ActionThreshold => {
  return {
    ActionThresholdType: __expectString(output.ActionThresholdType),
    ActionThresholdValue: __limitedParseDouble(output.ActionThresholdValue),
  } as any;
};

const deserializeAws_json1_1AutoAdjustData = (output: any, context: __SerdeContext): AutoAdjustData => {
  return {
    AutoAdjustType: __expectString(output.AutoAdjustType),
    HistoricalOptions:
      output.HistoricalOptions != null
        ? deserializeAws_json1_1HistoricalOptions(output.HistoricalOptions, context)
        : undefined,
    LastAutoAdjustTime:
      output.LastAutoAdjustTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAutoAdjustTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1Budget = (output: any, context: __SerdeContext): Budget => {
  return {
    AutoAdjustData:
      output.AutoAdjustData != null ? deserializeAws_json1_1AutoAdjustData(output.AutoAdjustData, context) : undefined,
    BudgetLimit: output.BudgetLimit != null ? deserializeAws_json1_1Spend(output.BudgetLimit, context) : undefined,
    BudgetName: __expectString(output.BudgetName),
    BudgetType: __expectString(output.BudgetType),
    CalculatedSpend:
      output.CalculatedSpend != null
        ? deserializeAws_json1_1CalculatedSpend(output.CalculatedSpend, context)
        : undefined,
    CostFilters:
      output.CostFilters != null ? deserializeAws_json1_1CostFilters(output.CostFilters, context) : undefined,
    CostTypes: output.CostTypes != null ? deserializeAws_json1_1CostTypes(output.CostTypes, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    PlannedBudgetLimits:
      output.PlannedBudgetLimits != null
        ? deserializeAws_json1_1PlannedBudgetLimits(output.PlannedBudgetLimits, context)
        : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context) : undefined,
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

const deserializeAws_json1_1BudgetedAndActualAmounts = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts => {
  return {
    ActualAmount: output.ActualAmount != null ? deserializeAws_json1_1Spend(output.ActualAmount, context) : undefined,
    BudgetedAmount:
      output.BudgetedAmount != null ? deserializeAws_json1_1Spend(output.BudgetedAmount, context) : undefined,
    TimePeriod: output.TimePeriod != null ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BudgetedAndActualAmountsList = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BudgetedAndActualAmounts(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BudgetNotificationsForAccount = (
  output: any,
  context: __SerdeContext
): BudgetNotificationsForAccount => {
  return {
    BudgetName: __expectString(output.BudgetName),
    Notifications:
      output.Notifications != null ? deserializeAws_json1_1Notifications(output.Notifications, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BudgetNotificationsForAccountList = (
  output: any,
  context: __SerdeContext
): BudgetNotificationsForAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BudgetNotificationsForAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BudgetPerformanceHistory = (
  output: any,
  context: __SerdeContext
): BudgetPerformanceHistory => {
  return {
    BudgetName: __expectString(output.BudgetName),
    BudgetType: __expectString(output.BudgetType),
    BudgetedAndActualAmountsList:
      output.BudgetedAndActualAmountsList != null
        ? deserializeAws_json1_1BudgetedAndActualAmountsList(output.BudgetedAndActualAmountsList, context)
        : undefined,
    CostFilters:
      output.CostFilters != null ? deserializeAws_json1_1CostFilters(output.CostFilters, context) : undefined,
    CostTypes: output.CostTypes != null ? deserializeAws_json1_1CostTypes(output.CostTypes, context) : undefined,
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

const deserializeAws_json1_1Budgets = (output: any, context: __SerdeContext): Budget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Budget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CalculatedSpend = (output: any, context: __SerdeContext): CalculatedSpend => {
  return {
    ActualSpend: output.ActualSpend != null ? deserializeAws_json1_1Spend(output.ActualSpend, context) : undefined,
    ForecastedSpend:
      output.ForecastedSpend != null ? deserializeAws_json1_1Spend(output.ForecastedSpend, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CostFilters = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1DimensionValues(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1CostTypes = (output: any, context: __SerdeContext): CostTypes => {
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

const deserializeAws_json1_1CreateBudgetActionResponse = (
  output: any,
  context: __SerdeContext
): CreateBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    ActionId: __expectString(output.ActionId),
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

const deserializeAws_json1_1CreateBudgetResponse = (output: any, context: __SerdeContext): CreateBudgetResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateNotificationResponse = (
  output: any,
  context: __SerdeContext
): CreateNotificationResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateSubscriberResponse = (
  output: any,
  context: __SerdeContext
): CreateSubscriberResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreationLimitExceededException = (
  output: any,
  context: __SerdeContext
): CreationLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Definition = (output: any, context: __SerdeContext): Definition => {
  return {
    IamActionDefinition:
      output.IamActionDefinition != null
        ? deserializeAws_json1_1IamActionDefinition(output.IamActionDefinition, context)
        : undefined,
    ScpActionDefinition:
      output.ScpActionDefinition != null
        ? deserializeAws_json1_1ScpActionDefinition(output.ScpActionDefinition, context)
        : undefined,
    SsmActionDefinition:
      output.SsmActionDefinition != null
        ? deserializeAws_json1_1SsmActionDefinition(output.SsmActionDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBudgetActionResponse = (
  output: any,
  context: __SerdeContext
): DeleteBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    Action: output.Action != null ? deserializeAws_json1_1Action(output.Action, context) : undefined,
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

const deserializeAws_json1_1DeleteBudgetResponse = (output: any, context: __SerdeContext): DeleteBudgetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteNotificationResponse = (
  output: any,
  context: __SerdeContext
): DeleteNotificationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSubscriberResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubscriberResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeBudgetActionHistoriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionHistoriesResponse => {
  return {
    ActionHistories:
      output.ActionHistories != null
        ? deserializeAws_json1_1ActionHistories(output.ActionHistories, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetActionResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    Action: output.Action != null ? deserializeAws_json1_1Action(output.Action, context) : undefined,
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetActionsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForAccountResponse => {
  return {
    Actions: output.Actions != null ? deserializeAws_json1_1Actions(output.Actions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForBudgetResponse => {
  return {
    Actions: output.Actions != null ? deserializeAws_json1_1Actions(output.Actions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetNotificationsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetNotificationsForAccountResponse => {
  return {
    BudgetNotificationsForAccount:
      output.BudgetNotificationsForAccount != null
        ? deserializeAws_json1_1BudgetNotificationsForAccountList(output.BudgetNotificationsForAccount, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetPerformanceHistoryResponse => {
  return {
    BudgetPerformanceHistory:
      output.BudgetPerformanceHistory != null
        ? deserializeAws_json1_1BudgetPerformanceHistory(output.BudgetPerformanceHistory, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetResponse = (output: any, context: __SerdeContext): DescribeBudgetResponse => {
  return {
    Budget: output.Budget != null ? deserializeAws_json1_1Budget(output.Budget, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBudgetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetsResponse => {
  return {
    Budgets: output.Budgets != null ? deserializeAws_json1_1Budgets(output.Budgets, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeNotificationsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeNotificationsForBudgetResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Notifications:
      output.Notifications != null ? deserializeAws_json1_1Notifications(output.Notifications, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubscribersForNotificationResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscribersForNotificationResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Subscribers:
      output.Subscribers != null ? deserializeAws_json1_1Subscribers(output.Subscribers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DuplicateRecordException = (
  output: any,
  context: __SerdeContext
): DuplicateRecordException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ExecuteBudgetActionResponse = (
  output: any,
  context: __SerdeContext
): ExecuteBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    ActionId: __expectString(output.ActionId),
    BudgetName: __expectString(output.BudgetName),
    ExecutionType: __expectString(output.ExecutionType),
  } as any;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Groups = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1HistoricalOptions = (output: any, context: __SerdeContext): HistoricalOptions => {
  return {
    BudgetAdjustmentPeriod: __expectInt32(output.BudgetAdjustmentPeriod),
    LookBackAvailablePeriods: __expectInt32(output.LookBackAvailablePeriods),
  } as any;
};

const deserializeAws_json1_1IamActionDefinition = (output: any, context: __SerdeContext): IamActionDefinition => {
  return {
    Groups: output.Groups != null ? deserializeAws_json1_1Groups(output.Groups, context) : undefined,
    PolicyArn: __expectString(output.PolicyArn),
    Roles: output.Roles != null ? deserializeAws_json1_1Roles(output.Roles, context) : undefined,
    Users: output.Users != null ? deserializeAws_json1_1Users(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    Message: __expectString(output.Message),
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

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Notification = (output: any, context: __SerdeContext): Notification => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    NotificationState: __expectString(output.NotificationState),
    NotificationType: __expectString(output.NotificationType),
    Threshold: __limitedParseDouble(output.Threshold),
    ThresholdType: __expectString(output.ThresholdType),
  } as any;
};

const deserializeAws_json1_1Notifications = (output: any, context: __SerdeContext): Notification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Notification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PlannedBudgetLimits = (output: any, context: __SerdeContext): Record<string, Spend> => {
  return Object.entries(output).reduce((acc: Record<string, Spend>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1Spend(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1ResourceLockedException = (
  output: any,
  context: __SerdeContext
): ResourceLockedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Roles = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ScpActionDefinition = (output: any, context: __SerdeContext): ScpActionDefinition => {
  return {
    PolicyId: __expectString(output.PolicyId),
    TargetIds: output.TargetIds != null ? deserializeAws_json1_1TargetIds(output.TargetIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Spend = (output: any, context: __SerdeContext): Spend => {
  return {
    Amount: __expectString(output.Amount),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1SsmActionDefinition = (output: any, context: __SerdeContext): SsmActionDefinition => {
  return {
    ActionSubType: __expectString(output.ActionSubType),
    InstanceIds:
      output.InstanceIds != null ? deserializeAws_json1_1InstanceIds(output.InstanceIds, context) : undefined,
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_json1_1Subscriber = (output: any, context: __SerdeContext): Subscriber => {
  return {
    Address: __expectString(output.Address),
    SubscriptionType: __expectString(output.SubscriptionType),
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

const deserializeAws_json1_1TargetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TimePeriod = (output: any, context: __SerdeContext): TimePeriod => {
  return {
    End: output.End != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.End))) : undefined,
    Start: output.Start != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Start))) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBudgetActionResponse = (
  output: any,
  context: __SerdeContext
): UpdateBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    BudgetName: __expectString(output.BudgetName),
    NewAction: output.NewAction != null ? deserializeAws_json1_1Action(output.NewAction, context) : undefined,
    OldAction: output.OldAction != null ? deserializeAws_json1_1Action(output.OldAction, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBudgetResponse = (output: any, context: __SerdeContext): UpdateBudgetResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateNotificationResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateSubscriberResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriberResponse => {
  return {} as any;
};

const deserializeAws_json1_1Users = (output: any, context: __SerdeContext): string[] => {
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
