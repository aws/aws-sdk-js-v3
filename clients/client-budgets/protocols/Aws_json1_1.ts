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
import {
  AccessDeniedException,
  Action,
  ActionHistory,
  ActionHistoryDetails,
  ActionThreshold,
  Budget,
  BudgetPerformanceHistory,
  BudgetedAndActualAmounts,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      response = {
        ...(await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      response = {
        ...(await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      response = {
        ...(await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CreationLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CreationLimitExceededException(body, context);
  const contents: CreationLimitExceededException = {
    name: "CreationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRecordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRecordException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRecordException(body, context);
  const contents: DuplicateRecordException = {
    name: "DuplicateRecordException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(body, context);
  const contents: ExpiredNextTokenException = {
    name: "ExpiredNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(body, context);
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
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

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceLockedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLockedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLockedException(body, context);
  const contents: ResourceLockedException = {
    name: "ResourceLockedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ActionThreshold = (input: ActionThreshold, context: __SerdeContext): any => {
  return {
    ...(input.ActionThresholdType !== undefined &&
      input.ActionThresholdType !== null && { ActionThresholdType: input.ActionThresholdType }),
    ...(input.ActionThresholdValue !== undefined &&
      input.ActionThresholdValue !== null && { ActionThresholdValue: __serializeFloat(input.ActionThresholdValue) }),
  };
};

const serializeAws_json1_1Budget = (input: Budget, context: __SerdeContext): any => {
  return {
    ...(input.BudgetLimit !== undefined &&
      input.BudgetLimit !== null && { BudgetLimit: serializeAws_json1_1Spend(input.BudgetLimit, context) }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.BudgetType !== undefined && input.BudgetType !== null && { BudgetType: input.BudgetType }),
    ...(input.CalculatedSpend !== undefined &&
      input.CalculatedSpend !== null && {
        CalculatedSpend: serializeAws_json1_1CalculatedSpend(input.CalculatedSpend, context),
      }),
    ...(input.CostFilters !== undefined &&
      input.CostFilters !== null && { CostFilters: serializeAws_json1_1CostFilters(input.CostFilters, context) }),
    ...(input.CostTypes !== undefined &&
      input.CostTypes !== null && { CostTypes: serializeAws_json1_1CostTypes(input.CostTypes, context) }),
    ...(input.LastUpdatedTime !== undefined &&
      input.LastUpdatedTime !== null && { LastUpdatedTime: Math.round(input.LastUpdatedTime.getTime() / 1000) }),
    ...(input.PlannedBudgetLimits !== undefined &&
      input.PlannedBudgetLimits !== null && {
        PlannedBudgetLimits: serializeAws_json1_1PlannedBudgetLimits(input.PlannedBudgetLimits, context),
      }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
    ...(input.TimeUnit !== undefined && input.TimeUnit !== null && { TimeUnit: input.TimeUnit }),
  };
};

const serializeAws_json1_1CalculatedSpend = (input: CalculatedSpend, context: __SerdeContext): any => {
  return {
    ...(input.ActualSpend !== undefined &&
      input.ActualSpend !== null && { ActualSpend: serializeAws_json1_1Spend(input.ActualSpend, context) }),
    ...(input.ForecastedSpend !== undefined &&
      input.ForecastedSpend !== null && { ForecastedSpend: serializeAws_json1_1Spend(input.ForecastedSpend, context) }),
  };
};

const serializeAws_json1_1CostFilters = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1DimensionValues(value, context),
    };
  }, {});
};

const serializeAws_json1_1CostTypes = (input: CostTypes, context: __SerdeContext): any => {
  return {
    ...(input.IncludeCredit !== undefined && input.IncludeCredit !== null && { IncludeCredit: input.IncludeCredit }),
    ...(input.IncludeDiscount !== undefined &&
      input.IncludeDiscount !== null && { IncludeDiscount: input.IncludeDiscount }),
    ...(input.IncludeOtherSubscription !== undefined &&
      input.IncludeOtherSubscription !== null && { IncludeOtherSubscription: input.IncludeOtherSubscription }),
    ...(input.IncludeRecurring !== undefined &&
      input.IncludeRecurring !== null && { IncludeRecurring: input.IncludeRecurring }),
    ...(input.IncludeRefund !== undefined && input.IncludeRefund !== null && { IncludeRefund: input.IncludeRefund }),
    ...(input.IncludeSubscription !== undefined &&
      input.IncludeSubscription !== null && { IncludeSubscription: input.IncludeSubscription }),
    ...(input.IncludeSupport !== undefined &&
      input.IncludeSupport !== null && { IncludeSupport: input.IncludeSupport }),
    ...(input.IncludeTax !== undefined && input.IncludeTax !== null && { IncludeTax: input.IncludeTax }),
    ...(input.IncludeUpfront !== undefined &&
      input.IncludeUpfront !== null && { IncludeUpfront: input.IncludeUpfront }),
    ...(input.UseAmortized !== undefined && input.UseAmortized !== null && { UseAmortized: input.UseAmortized }),
    ...(input.UseBlended !== undefined && input.UseBlended !== null && { UseBlended: input.UseBlended }),
  };
};

const serializeAws_json1_1CreateBudgetActionRequest = (
  input: CreateBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionThreshold !== undefined &&
      input.ActionThreshold !== null && {
        ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
      }),
    ...(input.ActionType !== undefined && input.ActionType !== null && { ActionType: input.ActionType }),
    ...(input.ApprovalModel !== undefined && input.ApprovalModel !== null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Definition !== undefined &&
      input.Definition !== null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType !== undefined &&
      input.NotificationType !== null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1CreateBudgetRequest = (input: CreateBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.Budget !== undefined &&
      input.Budget !== null && { Budget: serializeAws_json1_1Budget(input.Budget, context) }),
    ...(input.NotificationsWithSubscribers !== undefined &&
      input.NotificationsWithSubscribers !== null && {
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
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1CreateSubscriberRequest = (input: CreateSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscriber !== undefined &&
      input.Subscriber !== null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }),
  };
};

const serializeAws_json1_1Definition = (input: Definition, context: __SerdeContext): any => {
  return {
    ...(input.IamActionDefinition !== undefined &&
      input.IamActionDefinition !== null && {
        IamActionDefinition: serializeAws_json1_1IamActionDefinition(input.IamActionDefinition, context),
      }),
    ...(input.ScpActionDefinition !== undefined &&
      input.ScpActionDefinition !== null && {
        ScpActionDefinition: serializeAws_json1_1ScpActionDefinition(input.ScpActionDefinition, context),
      }),
    ...(input.SsmActionDefinition !== undefined &&
      input.SsmActionDefinition !== null && {
        SsmActionDefinition: serializeAws_json1_1SsmActionDefinition(input.SsmActionDefinition, context),
      }),
  };
};

const serializeAws_json1_1DeleteBudgetActionRequest = (
  input: DeleteBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DeleteBudgetRequest = (input: DeleteBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DeleteNotificationRequest = (
  input: DeleteNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
  };
};

const serializeAws_json1_1DeleteSubscriberRequest = (input: DeleteSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscriber !== undefined &&
      input.Subscriber !== null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }),
  };
};

const serializeAws_json1_1DescribeBudgetActionHistoriesRequest = (
  input: DescribeBudgetActionHistoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1DescribeBudgetActionRequest = (
  input: DescribeBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DescribeBudgetActionsForAccountRequest = (
  input: DescribeBudgetActionsForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeBudgetActionsForBudgetRequest = (
  input: DescribeBudgetActionsForBudgetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest = (
  input: DescribeBudgetPerformanceHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
  };
};

const serializeAws_json1_1DescribeBudgetRequest = (input: DescribeBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};

const serializeAws_json1_1DescribeBudgetsRequest = (input: DescribeBudgetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeNotificationsForBudgetRequest = (
  input: DescribeNotificationsForBudgetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeSubscribersForNotificationRequest = (
  input: DescribeSubscribersForNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
  };
};

const serializeAws_json1_1DimensionValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ExecuteBudgetActionRequest = (
  input: ExecuteBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.ExecutionType !== undefined && input.ExecutionType !== null && { ExecutionType: input.ExecutionType }),
  };
};

const serializeAws_json1_1Groups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IamActionDefinition = (input: IamActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Groups !== undefined &&
      input.Groups !== null && { Groups: serializeAws_json1_1Groups(input.Groups, context) }),
    ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
    ...(input.Roles !== undefined &&
      input.Roles !== null && { Roles: serializeAws_json1_1Roles(input.Roles, context) }),
    ...(input.Users !== undefined &&
      input.Users !== null && { Users: serializeAws_json1_1Users(input.Users, context) }),
  };
};

const serializeAws_json1_1InstanceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Notification = (input: Notification, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.NotificationState !== undefined &&
      input.NotificationState !== null && { NotificationState: input.NotificationState }),
    ...(input.NotificationType !== undefined &&
      input.NotificationType !== null && { NotificationType: input.NotificationType }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdType !== undefined && input.ThresholdType !== null && { ThresholdType: input.ThresholdType }),
  };
};

const serializeAws_json1_1NotificationWithSubscribers = (
  input: NotificationWithSubscribers,
  context: __SerdeContext
): any => {
  return {
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1NotificationWithSubscribersList = (
  input: NotificationWithSubscribers[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1NotificationWithSubscribers(entry, context);
    });
};

const serializeAws_json1_1PlannedBudgetLimits = (input: { [key: string]: Spend }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1Spend(value, context),
    };
  }, {});
};

const serializeAws_json1_1Roles = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ScpActionDefinition = (input: ScpActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    ...(input.TargetIds !== undefined &&
      input.TargetIds !== null && { TargetIds: serializeAws_json1_1TargetIds(input.TargetIds, context) }),
  };
};

const serializeAws_json1_1Spend = (input: Spend, context: __SerdeContext): any => {
  return {
    ...(input.Amount !== undefined && input.Amount !== null && { Amount: input.Amount }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};

const serializeAws_json1_1SsmActionDefinition = (input: SsmActionDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ActionSubType !== undefined && input.ActionSubType !== null && { ActionSubType: input.ActionSubType }),
    ...(input.InstanceIds !== undefined &&
      input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1InstanceIds(input.InstanceIds, context) }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};

const serializeAws_json1_1Subscriber = (input: Subscriber, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.SubscriptionType !== undefined &&
      input.SubscriptionType !== null && { SubscriptionType: input.SubscriptionType }),
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

const serializeAws_json1_1TargetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TimePeriod = (input: TimePeriod, context: __SerdeContext): any => {
  return {
    ...(input.End !== undefined && input.End !== null && { End: Math.round(input.End.getTime() / 1000) }),
    ...(input.Start !== undefined && input.Start !== null && { Start: Math.round(input.Start.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UpdateBudgetActionRequest = (
  input: UpdateBudgetActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.ActionThreshold !== undefined &&
      input.ActionThreshold !== null && {
        ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
      }),
    ...(input.ApprovalModel !== undefined && input.ApprovalModel !== null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Definition !== undefined &&
      input.Definition !== null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType !== undefined &&
      input.NotificationType !== null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};

const serializeAws_json1_1UpdateBudgetRequest = (input: UpdateBudgetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.NewBudget !== undefined &&
      input.NewBudget !== null && { NewBudget: serializeAws_json1_1Budget(input.NewBudget, context) }),
  };
};

const serializeAws_json1_1UpdateNotificationRequest = (
  input: UpdateNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.NewNotification !== undefined &&
      input.NewNotification !== null && {
        NewNotification: serializeAws_json1_1Notification(input.NewNotification, context),
      }),
    ...(input.OldNotification !== undefined &&
      input.OldNotification !== null && {
        OldNotification: serializeAws_json1_1Notification(input.OldNotification, context),
      }),
  };
};

const serializeAws_json1_1UpdateSubscriberRequest = (input: UpdateSubscriberRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.NewSubscriber !== undefined &&
      input.NewSubscriber !== null && { NewSubscriber: serializeAws_json1_1Subscriber(input.NewSubscriber, context) }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OldSubscriber !== undefined &&
      input.OldSubscriber !== null && { OldSubscriber: serializeAws_json1_1Subscriber(input.OldSubscriber, context) }),
  };
};

const serializeAws_json1_1Users = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      output.ActionThreshold !== undefined && output.ActionThreshold !== null
        ? deserializeAws_json1_1ActionThreshold(output.ActionThreshold, context)
        : undefined,
    ActionType: __expectString(output.ActionType),
    ApprovalModel: __expectString(output.ApprovalModel),
    BudgetName: __expectString(output.BudgetName),
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_json1_1Definition(output.Definition, context)
        : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    NotificationType: __expectString(output.NotificationType),
    Status: __expectString(output.Status),
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ActionHistories = (output: any, context: __SerdeContext): ActionHistory[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionHistory(entry, context);
    });
};

const deserializeAws_json1_1ActionHistory = (output: any, context: __SerdeContext): ActionHistory => {
  return {
    ActionHistoryDetails:
      output.ActionHistoryDetails !== undefined && output.ActionHistoryDetails !== null
        ? deserializeAws_json1_1ActionHistoryDetails(output.ActionHistoryDetails, context)
        : undefined,
    EventType: __expectString(output.EventType),
    Status: __expectString(output.Status),
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ActionHistoryDetails = (output: any, context: __SerdeContext): ActionHistoryDetails => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Actions = (output: any, context: __SerdeContext): Action[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Action(entry, context);
    });
};

const deserializeAws_json1_1ActionThreshold = (output: any, context: __SerdeContext): ActionThreshold => {
  return {
    ActionThresholdType: __expectString(output.ActionThresholdType),
    ActionThresholdValue: __limitedParseFloat(output.ActionThresholdValue),
  } as any;
};

const deserializeAws_json1_1Budget = (output: any, context: __SerdeContext): Budget => {
  return {
    BudgetLimit:
      output.BudgetLimit !== undefined && output.BudgetLimit !== null
        ? deserializeAws_json1_1Spend(output.BudgetLimit, context)
        : undefined,
    BudgetName: __expectString(output.BudgetName),
    BudgetType: __expectString(output.BudgetType),
    CalculatedSpend:
      output.CalculatedSpend !== undefined && output.CalculatedSpend !== null
        ? deserializeAws_json1_1CalculatedSpend(output.CalculatedSpend, context)
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    PlannedBudgetLimits:
      output.PlannedBudgetLimits !== undefined && output.PlannedBudgetLimits !== null
        ? deserializeAws_json1_1PlannedBudgetLimits(output.PlannedBudgetLimits, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

const deserializeAws_json1_1BudgetedAndActualAmounts = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts => {
  return {
    ActualAmount:
      output.ActualAmount !== undefined && output.ActualAmount !== null
        ? deserializeAws_json1_1Spend(output.ActualAmount, context)
        : undefined,
    BudgetedAmount:
      output.BudgetedAmount !== undefined && output.BudgetedAmount !== null
        ? deserializeAws_json1_1Spend(output.BudgetedAmount, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BudgetedAndActualAmountsList = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BudgetedAndActualAmounts(entry, context);
    });
};

const deserializeAws_json1_1BudgetPerformanceHistory = (
  output: any,
  context: __SerdeContext
): BudgetPerformanceHistory => {
  return {
    BudgetName: __expectString(output.BudgetName),
    BudgetType: __expectString(output.BudgetType),
    BudgetedAndActualAmountsList:
      output.BudgetedAndActualAmountsList !== undefined && output.BudgetedAndActualAmountsList !== null
        ? deserializeAws_json1_1BudgetedAndActualAmountsList(output.BudgetedAndActualAmountsList, context)
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

const deserializeAws_json1_1Budgets = (output: any, context: __SerdeContext): Budget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Budget(entry, context);
    });
};

const deserializeAws_json1_1CalculatedSpend = (output: any, context: __SerdeContext): CalculatedSpend => {
  return {
    ActualSpend:
      output.ActualSpend !== undefined && output.ActualSpend !== null
        ? deserializeAws_json1_1Spend(output.ActualSpend, context)
        : undefined,
    ForecastedSpend:
      output.ForecastedSpend !== undefined && output.ForecastedSpend !== null
        ? deserializeAws_json1_1Spend(output.ForecastedSpend, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CostFilters = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1DimensionValues(value, context),
    };
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
      output.IamActionDefinition !== undefined && output.IamActionDefinition !== null
        ? deserializeAws_json1_1IamActionDefinition(output.IamActionDefinition, context)
        : undefined,
    ScpActionDefinition:
      output.ScpActionDefinition !== undefined && output.ScpActionDefinition !== null
        ? deserializeAws_json1_1ScpActionDefinition(output.ScpActionDefinition, context)
        : undefined,
    SsmActionDefinition:
      output.SsmActionDefinition !== undefined && output.SsmActionDefinition !== null
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
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
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
      output.ActionHistories !== undefined && output.ActionHistories !== null
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
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetActionsForAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForAccountResponse => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1Actions(output.Actions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetActionsForBudgetResponse => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1Actions(output.Actions, context)
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
      output.BudgetPerformanceHistory !== undefined && output.BudgetPerformanceHistory !== null
        ? deserializeAws_json1_1BudgetPerformanceHistory(output.BudgetPerformanceHistory, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeBudgetResponse = (output: any, context: __SerdeContext): DescribeBudgetResponse => {
  return {
    Budget:
      output.Budget !== undefined && output.Budget !== null
        ? deserializeAws_json1_1Budget(output.Budget, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBudgetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetsResponse => {
  return {
    Budgets:
      output.Budgets !== undefined && output.Budgets !== null
        ? deserializeAws_json1_1Budgets(output.Budgets, context)
        : undefined,
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
      output.Notifications !== undefined && output.Notifications !== null
        ? deserializeAws_json1_1Notifications(output.Notifications, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubscribersForNotificationResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscribersForNotificationResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1IamActionDefinition = (output: any, context: __SerdeContext): IamActionDefinition => {
  return {
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1Groups(output.Groups, context)
        : undefined,
    PolicyArn: __expectString(output.PolicyArn),
    Roles:
      output.Roles !== undefined && output.Roles !== null
        ? deserializeAws_json1_1Roles(output.Roles, context)
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1Users(output.Users, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
    Threshold: __limitedParseFloat(output.Threshold),
    ThresholdType: __expectString(output.ThresholdType),
  } as any;
};

const deserializeAws_json1_1Notifications = (output: any, context: __SerdeContext): Notification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Notification(entry, context);
    });
};

const deserializeAws_json1_1PlannedBudgetLimits = (output: any, context: __SerdeContext): { [key: string]: Spend } => {
  return Object.entries(output).reduce((acc: { [key: string]: Spend }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1Spend(value, context),
    };
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ScpActionDefinition = (output: any, context: __SerdeContext): ScpActionDefinition => {
  return {
    PolicyId: __expectString(output.PolicyId),
    TargetIds:
      output.TargetIds !== undefined && output.TargetIds !== null
        ? deserializeAws_json1_1TargetIds(output.TargetIds, context)
        : undefined,
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
      output.InstanceIds !== undefined && output.InstanceIds !== null
        ? deserializeAws_json1_1InstanceIds(output.InstanceIds, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subscriber(entry, context);
    });
};

const deserializeAws_json1_1TargetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TimePeriod = (output: any, context: __SerdeContext): TimePeriod => {
  return {
    End: output.End !== undefined && output.End !== null ? new Date(Math.round(output.End * 1000)) : undefined,
    Start: output.Start !== undefined && output.Start !== null ? new Date(Math.round(output.Start * 1000)) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateBudgetActionResponse = (
  output: any,
  context: __SerdeContext
): UpdateBudgetActionResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    BudgetName: __expectString(output.BudgetName),
    NewAction:
      output.NewAction !== undefined && output.NewAction !== null
        ? deserializeAws_json1_1Action(output.NewAction, context)
        : undefined,
    OldAction:
      output.OldAction !== undefined && output.OldAction !== null
        ? deserializeAws_json1_1Action(output.OldAction, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
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
