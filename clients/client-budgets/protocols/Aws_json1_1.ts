import {
  CreateBudgetCommandInput,
  CreateBudgetCommandOutput
} from "../commands/CreateBudgetCommand";
import {
  CreateNotificationCommandInput,
  CreateNotificationCommandOutput
} from "../commands/CreateNotificationCommand";
import {
  CreateSubscriberCommandInput,
  CreateSubscriberCommandOutput
} from "../commands/CreateSubscriberCommand";
import {
  DeleteBudgetCommandInput,
  DeleteBudgetCommandOutput
} from "../commands/DeleteBudgetCommand";
import {
  DeleteNotificationCommandInput,
  DeleteNotificationCommandOutput
} from "../commands/DeleteNotificationCommand";
import {
  DeleteSubscriberCommandInput,
  DeleteSubscriberCommandOutput
} from "../commands/DeleteSubscriberCommand";
import {
  DescribeBudgetCommandInput,
  DescribeBudgetCommandOutput
} from "../commands/DescribeBudgetCommand";
import {
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import {
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput
} from "../commands/DescribeBudgetsCommand";
import {
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput
} from "../commands/DescribeNotificationsForBudgetCommand";
import {
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput
} from "../commands/DescribeSubscribersForNotificationCommand";
import {
  UpdateBudgetCommandInput,
  UpdateBudgetCommandOutput
} from "../commands/UpdateBudgetCommand";
import {
  UpdateNotificationCommandInput,
  UpdateNotificationCommandOutput
} from "../commands/UpdateNotificationCommand";
import {
  UpdateSubscriberCommandInput,
  UpdateSubscriberCommandOutput
} from "../commands/UpdateSubscriberCommand";
import {
  AccessDeniedException,
  Budget,
  BudgetPerformanceHistory,
  BudgetedAndActualAmounts,
  CalculatedSpend,
  CostTypes,
  CreateBudgetRequest,
  CreateBudgetResponse,
  CreateNotificationRequest,
  CreateNotificationResponse,
  CreateSubscriberRequest,
  CreateSubscriberResponse,
  CreationLimitExceededException,
  DeleteBudgetRequest,
  DeleteBudgetResponse,
  DeleteNotificationRequest,
  DeleteNotificationResponse,
  DeleteSubscriberRequest,
  DeleteSubscriberResponse,
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
  ExpiredNextTokenException,
  InternalErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  NotFoundException,
  Notification,
  NotificationWithSubscribers,
  Spend,
  Subscriber,
  TimePeriod,
  UpdateBudgetRequest,
  UpdateBudgetResponse,
  UpdateNotificationRequest,
  UpdateNotificationResponse,
  UpdateSubscriberRequest,
  UpdateSubscriberResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateBudgetCommand(
  input: CreateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.CreateBudget";
  let body: any = {};
  const wrappedBody: any = {
    CreateBudgetRequest: serializeAws_json1_1CreateBudgetRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateBudget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateNotificationCommand(
  input: CreateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.CreateNotification";
  let body: any = {};
  const wrappedBody: any = {
    CreateNotificationRequest: serializeAws_json1_1CreateNotificationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateNotification",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateSubscriberCommand(
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.CreateSubscriber";
  let body: any = {};
  const wrappedBody: any = {
    CreateSubscriberRequest: serializeAws_json1_1CreateSubscriberRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateSubscriber",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteBudgetCommand(
  input: DeleteBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DeleteBudget";
  let body: any = {};
  const wrappedBody: any = {
    DeleteBudgetRequest: serializeAws_json1_1DeleteBudgetRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteBudget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteNotificationCommand(
  input: DeleteNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DeleteNotification";
  let body: any = {};
  const wrappedBody: any = {
    DeleteNotificationRequest: serializeAws_json1_1DeleteNotificationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteNotification",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteSubscriberCommand(
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DeleteSubscriber";
  let body: any = {};
  const wrappedBody: any = {
    DeleteSubscriberRequest: serializeAws_json1_1DeleteSubscriberRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteSubscriber",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBudgetCommand(
  input: DescribeBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DescribeBudget";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBudgetRequest: serializeAws_json1_1DescribeBudgetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBudget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(
  input: DescribeBudgetPerformanceHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBudgetPerformanceHistoryRequest: serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBudgetPerformanceHistory",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBudgetsCommand(
  input: DescribeBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DescribeBudgets";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBudgetsRequest: serializeAws_json1_1DescribeBudgetsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBudgets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeNotificationsForBudgetCommand(
  input: DescribeNotificationsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSBudgetServiceGateway.DescribeNotificationsForBudget";
  let body: any = {};
  const wrappedBody: any = {
    DescribeNotificationsForBudgetRequest: serializeAws_json1_1DescribeNotificationsForBudgetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeNotificationsForBudget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeSubscribersForNotificationCommand(
  input: DescribeSubscribersForNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSBudgetServiceGateway.DescribeSubscribersForNotification";
  let body: any = {};
  const wrappedBody: any = {
    DescribeSubscribersForNotificationRequest: serializeAws_json1_1DescribeSubscribersForNotificationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeSubscribersForNotification",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateBudgetCommand(
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.UpdateBudget";
  let body: any = {};
  const wrappedBody: any = {
    UpdateBudgetRequest: serializeAws_json1_1UpdateBudgetRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateBudget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateNotificationCommand(
  input: UpdateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.UpdateNotification";
  let body: any = {};
  const wrappedBody: any = {
    UpdateNotificationRequest: serializeAws_json1_1UpdateNotificationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateNotification",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateSubscriberCommand(
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSBudgetServiceGateway.UpdateSubscriber";
  let body: any = {};
  const wrappedBody: any = {
    UpdateSubscriberRequest: serializeAws_json1_1UpdateSubscriberRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateSubscriber",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateBudgetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBudgetResponse(data, context);
  const response: CreateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBudgetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateBudgetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
      response = await deserializeAws_json1_1CreationLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = await deserializeAws_json1_1DuplicateRecordExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateNotificationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateNotificationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNotificationResponse(data, context);
  const response: CreateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNotificationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateNotificationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
      response = await deserializeAws_json1_1CreationLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = await deserializeAws_json1_1DuplicateRecordExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateSubscriberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubscriberResponse(data, context);
  const response: CreateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSubscriberResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateSubscriberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
      response = await deserializeAws_json1_1CreationLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = await deserializeAws_json1_1DuplicateRecordExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteBudgetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBudgetResponse(data, context);
  const response: DeleteBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBudgetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteBudgetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteNotificationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNotificationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNotificationResponse(data, context);
  const response: DeleteNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNotificationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteNotificationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteSubscriberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubscriberResponse(data, context);
  const response: DeleteSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSubscriberResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSubscriberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBudgetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetResponse(data, context);
  const response: DescribeBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBudgetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBudgetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse(
    data,
    context
  );
  const response: DescribeBudgetPerformanceHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBudgetPerformanceHistoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBudgetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBudgetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBudgetsResponse(data, context);
  const response: DescribeBudgetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBudgetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBudgetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeNotificationsForBudgetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationsForBudgetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNotificationsForBudgetResponse(
    data,
    context
  );
  const response: DescribeNotificationsForBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNotificationsForBudgetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationsForBudgetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeSubscribersForNotificationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribersForNotificationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubscribersForNotificationResponse(
    data,
    context
  );
  const response: DescribeSubscribersForNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSubscribersForNotificationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribersForNotificationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateBudgetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateBudgetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBudgetResponse(data, context);
  const response: UpdateBudgetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBudgetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateBudgetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateNotificationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateNotificationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNotificationResponse(data, context);
  const response: UpdateNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNotificationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateNotificationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = await deserializeAws_json1_1DuplicateRecordExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateSubscriberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSubscriberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubscriberResponse(data, context);
  const response: UpdateSubscriberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSubscriberResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateSubscriberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = await deserializeAws_json1_1DuplicateRecordExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.awsbudgetservicegateway#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CreationLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CreationLimitExceededException(
    body,
    context
  );
  const contents: CreationLimitExceededException = {
    __type: "CreationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRecordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRecordException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRecordException(
    body,
    context
  );
  const contents: DuplicateRecordException = {
    __type: "DuplicateRecordException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(
    body,
    context
  );
  const contents: ExpiredNextTokenException = {
    __type: "ExpiredNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(
    body,
    context
  );
  const contents: InternalErrorException = {
    __type: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    body,
    context
  );
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1Budget = (
  input: Budget,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BudgetLimit !== undefined) {
    bodyParams["BudgetLimit"] = serializeAws_json1_1Spend(
      input.BudgetLimit,
      context
    );
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.BudgetType !== undefined) {
    bodyParams["BudgetType"] = input.BudgetType;
  }
  if (input.CalculatedSpend !== undefined) {
    bodyParams["CalculatedSpend"] = serializeAws_json1_1CalculatedSpend(
      input.CalculatedSpend,
      context
    );
  }
  if (input.CostFilters !== undefined) {
    bodyParams["CostFilters"] = serializeAws_json1_1CostFilters(
      input.CostFilters,
      context
    );
  }
  if (input.CostTypes !== undefined) {
    bodyParams["CostTypes"] = serializeAws_json1_1CostTypes(
      input.CostTypes,
      context
    );
  }
  if (input.LastUpdatedTime !== undefined) {
    bodyParams["LastUpdatedTime"] = Math.round(
      input.LastUpdatedTime.getTime() / 1000
    );
  }
  if (input.PlannedBudgetLimits !== undefined) {
    bodyParams["PlannedBudgetLimits"] = serializeAws_json1_1PlannedBudgetLimits(
      input.PlannedBudgetLimits,
      context
    );
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1TimePeriod(
      input.TimePeriod,
      context
    );
  }
  if (input.TimeUnit !== undefined) {
    bodyParams["TimeUnit"] = input.TimeUnit;
  }
  return bodyParams;
};

const serializeAws_json1_1CalculatedSpend = (
  input: CalculatedSpend,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ActualSpend !== undefined) {
    bodyParams["ActualSpend"] = serializeAws_json1_1Spend(
      input.ActualSpend,
      context
    );
  }
  if (input.ForecastedSpend !== undefined) {
    bodyParams["ForecastedSpend"] = serializeAws_json1_1Spend(
      input.ForecastedSpend,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CostFilters = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1DimensionValues(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1CostTypes = (
  input: CostTypes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IncludeCredit !== undefined) {
    bodyParams["IncludeCredit"] = input.IncludeCredit;
  }
  if (input.IncludeDiscount !== undefined) {
    bodyParams["IncludeDiscount"] = input.IncludeDiscount;
  }
  if (input.IncludeOtherSubscription !== undefined) {
    bodyParams["IncludeOtherSubscription"] = input.IncludeOtherSubscription;
  }
  if (input.IncludeRecurring !== undefined) {
    bodyParams["IncludeRecurring"] = input.IncludeRecurring;
  }
  if (input.IncludeRefund !== undefined) {
    bodyParams["IncludeRefund"] = input.IncludeRefund;
  }
  if (input.IncludeSubscription !== undefined) {
    bodyParams["IncludeSubscription"] = input.IncludeSubscription;
  }
  if (input.IncludeSupport !== undefined) {
    bodyParams["IncludeSupport"] = input.IncludeSupport;
  }
  if (input.IncludeTax !== undefined) {
    bodyParams["IncludeTax"] = input.IncludeTax;
  }
  if (input.IncludeUpfront !== undefined) {
    bodyParams["IncludeUpfront"] = input.IncludeUpfront;
  }
  if (input.UseAmortized !== undefined) {
    bodyParams["UseAmortized"] = input.UseAmortized;
  }
  if (input.UseBlended !== undefined) {
    bodyParams["UseBlended"] = input.UseBlended;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateBudgetRequest = (
  input: CreateBudgetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.Budget !== undefined) {
    bodyParams["Budget"] = serializeAws_json1_1Budget(input.Budget, context);
  }
  if (input.NotificationsWithSubscribers !== undefined) {
    bodyParams[
      "NotificationsWithSubscribers"
    ] = serializeAws_json1_1NotificationWithSubscribersList(
      input.NotificationsWithSubscribers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateNotificationRequest = (
  input: CreateNotificationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Subscribers !== undefined) {
    bodyParams["Subscribers"] = serializeAws_json1_1Subscribers(
      input.Subscribers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSubscriberRequest = (
  input: CreateSubscriberRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Subscriber !== undefined) {
    bodyParams["Subscriber"] = serializeAws_json1_1Subscriber(
      input.Subscriber,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteBudgetRequest = (
  input: DeleteBudgetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteNotificationRequest = (
  input: DeleteNotificationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSubscriberRequest = (
  input: DeleteSubscriberRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Subscriber !== undefined) {
    bodyParams["Subscriber"] = serializeAws_json1_1Subscriber(
      input.Subscriber,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest = (
  input: DescribeBudgetPerformanceHistoryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1TimePeriod(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBudgetRequest = (
  input: DescribeBudgetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBudgetsRequest = (
  input: DescribeBudgetsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeNotificationsForBudgetRequest = (
  input: DescribeNotificationsForBudgetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSubscribersForNotificationRequest = (
  input: DescribeSubscribersForNotificationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DimensionValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Notification = (
  input: Notification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.NotificationState !== undefined) {
    bodyParams["NotificationState"] = input.NotificationState;
  }
  if (input.NotificationType !== undefined) {
    bodyParams["NotificationType"] = input.NotificationType;
  }
  if (input.Threshold !== undefined) {
    bodyParams["Threshold"] = input.Threshold;
  }
  if (input.ThresholdType !== undefined) {
    bodyParams["ThresholdType"] = input.ThresholdType;
  }
  return bodyParams;
};

const serializeAws_json1_1NotificationWithSubscribers = (
  input: NotificationWithSubscribers,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Subscribers !== undefined) {
    bodyParams["Subscribers"] = serializeAws_json1_1Subscribers(
      input.Subscribers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1NotificationWithSubscribersList = (
  input: Array<NotificationWithSubscribers>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1NotificationWithSubscribers(entry, context)
  );
};

const serializeAws_json1_1PlannedBudgetLimits = (
  input: { [key: string]: Spend },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1Spend(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1Spend = (
  input: Spend,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Amount !== undefined) {
    bodyParams["Amount"] = input.Amount;
  }
  if (input.Unit !== undefined) {
    bodyParams["Unit"] = input.Unit;
  }
  return bodyParams;
};

const serializeAws_json1_1Subscriber = (
  input: Subscriber,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Address !== undefined) {
    bodyParams["Address"] = input.Address;
  }
  if (input.SubscriptionType !== undefined) {
    bodyParams["SubscriptionType"] = input.SubscriptionType;
  }
  return bodyParams;
};

const serializeAws_json1_1Subscribers = (
  input: Array<Subscriber>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Subscriber(entry, context)
  );
};

const serializeAws_json1_1TimePeriod = (
  input: TimePeriod,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.End !== undefined) {
    bodyParams["End"] = Math.round(input.End.getTime() / 1000);
  }
  if (input.Start !== undefined) {
    bodyParams["Start"] = Math.round(input.Start.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateBudgetRequest = (
  input: UpdateBudgetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.NewBudget !== undefined) {
    bodyParams["NewBudget"] = serializeAws_json1_1Budget(
      input.NewBudget,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateNotificationRequest = (
  input: UpdateNotificationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.NewNotification !== undefined) {
    bodyParams["NewNotification"] = serializeAws_json1_1Notification(
      input.NewNotification,
      context
    );
  }
  if (input.OldNotification !== undefined) {
    bodyParams["OldNotification"] = serializeAws_json1_1Notification(
      input.OldNotification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSubscriberRequest = (
  input: UpdateSubscriberRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.BudgetName !== undefined) {
    bodyParams["BudgetName"] = input.BudgetName;
  }
  if (input.NewSubscriber !== undefined) {
    bodyParams["NewSubscriber"] = serializeAws_json1_1Subscriber(
      input.NewSubscriber,
      context
    );
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.OldSubscriber !== undefined) {
    bodyParams["OldSubscriber"] = serializeAws_json1_1Subscriber(
      input.OldSubscriber,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Budget = (
  output: any,
  context: __SerdeContext
): Budget => {
  let contents: any = {
    __type: "Budget",
    BudgetLimit: undefined,
    BudgetName: undefined,
    BudgetType: undefined,
    CalculatedSpend: undefined,
    CostFilters: undefined,
    CostTypes: undefined,
    LastUpdatedTime: undefined,
    PlannedBudgetLimits: undefined,
    TimePeriod: undefined,
    TimeUnit: undefined
  };
  if (output.BudgetLimit !== undefined) {
    contents.BudgetLimit = deserializeAws_json1_1Spend(
      output.BudgetLimit,
      context
    );
  }
  if (output.BudgetName !== undefined) {
    contents.BudgetName = output.BudgetName;
  }
  if (output.BudgetType !== undefined) {
    contents.BudgetType = output.BudgetType;
  }
  if (output.CalculatedSpend !== undefined) {
    contents.CalculatedSpend = deserializeAws_json1_1CalculatedSpend(
      output.CalculatedSpend,
      context
    );
  }
  if (output.CostFilters !== undefined) {
    contents.CostFilters = deserializeAws_json1_1CostFilters(
      output.CostFilters,
      context
    );
  }
  if (output.CostTypes !== undefined) {
    contents.CostTypes = deserializeAws_json1_1CostTypes(
      output.CostTypes,
      context
    );
  }
  if (output.LastUpdatedTime !== undefined) {
    contents.LastUpdatedTime = new Date(
      output.LastUpdatedTime % 1 != 0
        ? Math.round(output.LastUpdatedTime * 1000)
        : output.LastUpdatedTime
    );
  }
  if (output.PlannedBudgetLimits !== undefined) {
    contents.PlannedBudgetLimits = deserializeAws_json1_1PlannedBudgetLimits(
      output.PlannedBudgetLimits,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1TimePeriod(
      output.TimePeriod,
      context
    );
  }
  if (output.TimeUnit !== undefined) {
    contents.TimeUnit = output.TimeUnit;
  }
  return contents;
};

const deserializeAws_json1_1BudgetPerformanceHistory = (
  output: any,
  context: __SerdeContext
): BudgetPerformanceHistory => {
  let contents: any = {
    __type: "BudgetPerformanceHistory",
    BudgetName: undefined,
    BudgetType: undefined,
    BudgetedAndActualAmountsList: undefined,
    CostFilters: undefined,
    CostTypes: undefined,
    TimeUnit: undefined
  };
  if (output.BudgetName !== undefined) {
    contents.BudgetName = output.BudgetName;
  }
  if (output.BudgetType !== undefined) {
    contents.BudgetType = output.BudgetType;
  }
  if (output.BudgetedAndActualAmountsList !== undefined) {
    contents.BudgetedAndActualAmountsList = deserializeAws_json1_1BudgetedAndActualAmountsList(
      output.BudgetedAndActualAmountsList,
      context
    );
  }
  if (output.CostFilters !== undefined) {
    contents.CostFilters = deserializeAws_json1_1CostFilters(
      output.CostFilters,
      context
    );
  }
  if (output.CostTypes !== undefined) {
    contents.CostTypes = deserializeAws_json1_1CostTypes(
      output.CostTypes,
      context
    );
  }
  if (output.TimeUnit !== undefined) {
    contents.TimeUnit = output.TimeUnit;
  }
  return contents;
};

const deserializeAws_json1_1BudgetedAndActualAmounts = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts => {
  let contents: any = {
    __type: "BudgetedAndActualAmounts",
    ActualAmount: undefined,
    BudgetedAmount: undefined,
    TimePeriod: undefined
  };
  if (output.ActualAmount !== undefined) {
    contents.ActualAmount = deserializeAws_json1_1Spend(
      output.ActualAmount,
      context
    );
  }
  if (output.BudgetedAmount !== undefined) {
    contents.BudgetedAmount = deserializeAws_json1_1Spend(
      output.BudgetedAmount,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1TimePeriod(
      output.TimePeriod,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BudgetedAndActualAmountsList = (
  output: any,
  context: __SerdeContext
): Array<BudgetedAndActualAmounts> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BudgetedAndActualAmounts(entry, context)
  );
};

const deserializeAws_json1_1Budgets = (
  output: any,
  context: __SerdeContext
): Array<Budget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Budget(entry, context)
  );
};

const deserializeAws_json1_1CalculatedSpend = (
  output: any,
  context: __SerdeContext
): CalculatedSpend => {
  let contents: any = {
    __type: "CalculatedSpend",
    ActualSpend: undefined,
    ForecastedSpend: undefined
  };
  if (output.ActualSpend !== undefined) {
    contents.ActualSpend = deserializeAws_json1_1Spend(
      output.ActualSpend,
      context
    );
  }
  if (output.ForecastedSpend !== undefined) {
    contents.ForecastedSpend = deserializeAws_json1_1Spend(
      output.ForecastedSpend,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CostFilters = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<string> } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1DimensionValues(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_json1_1CostTypes = (
  output: any,
  context: __SerdeContext
): CostTypes => {
  let contents: any = {
    __type: "CostTypes",
    IncludeCredit: undefined,
    IncludeDiscount: undefined,
    IncludeOtherSubscription: undefined,
    IncludeRecurring: undefined,
    IncludeRefund: undefined,
    IncludeSubscription: undefined,
    IncludeSupport: undefined,
    IncludeTax: undefined,
    IncludeUpfront: undefined,
    UseAmortized: undefined,
    UseBlended: undefined
  };
  if (output.IncludeCredit !== undefined) {
    contents.IncludeCredit = output.IncludeCredit;
  }
  if (output.IncludeDiscount !== undefined) {
    contents.IncludeDiscount = output.IncludeDiscount;
  }
  if (output.IncludeOtherSubscription !== undefined) {
    contents.IncludeOtherSubscription = output.IncludeOtherSubscription;
  }
  if (output.IncludeRecurring !== undefined) {
    contents.IncludeRecurring = output.IncludeRecurring;
  }
  if (output.IncludeRefund !== undefined) {
    contents.IncludeRefund = output.IncludeRefund;
  }
  if (output.IncludeSubscription !== undefined) {
    contents.IncludeSubscription = output.IncludeSubscription;
  }
  if (output.IncludeSupport !== undefined) {
    contents.IncludeSupport = output.IncludeSupport;
  }
  if (output.IncludeTax !== undefined) {
    contents.IncludeTax = output.IncludeTax;
  }
  if (output.IncludeUpfront !== undefined) {
    contents.IncludeUpfront = output.IncludeUpfront;
  }
  if (output.UseAmortized !== undefined) {
    contents.UseAmortized = output.UseAmortized;
  }
  if (output.UseBlended !== undefined) {
    contents.UseBlended = output.UseBlended;
  }
  return contents;
};

const deserializeAws_json1_1CreateBudgetResponse = (
  output: any,
  context: __SerdeContext
): CreateBudgetResponse => {
  let contents: any = {
    __type: "CreateBudgetResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateNotificationResponse = (
  output: any,
  context: __SerdeContext
): CreateNotificationResponse => {
  let contents: any = {
    __type: "CreateNotificationResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateSubscriberResponse = (
  output: any,
  context: __SerdeContext
): CreateSubscriberResponse => {
  let contents: any = {
    __type: "CreateSubscriberResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreationLimitExceededException = (
  output: any,
  context: __SerdeContext
): CreationLimitExceededException => {
  let contents: any = {
    __type: "CreationLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DeleteBudgetResponse = (
  output: any,
  context: __SerdeContext
): DeleteBudgetResponse => {
  let contents: any = {
    __type: "DeleteBudgetResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteNotificationResponse = (
  output: any,
  context: __SerdeContext
): DeleteNotificationResponse => {
  let contents: any = {
    __type: "DeleteNotificationResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteSubscriberResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubscriberResponse => {
  let contents: any = {
    __type: "DeleteSubscriberResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetPerformanceHistoryResponse => {
  let contents: any = {
    __type: "DescribeBudgetPerformanceHistoryResponse",
    BudgetPerformanceHistory: undefined,
    NextToken: undefined
  };
  if (output.BudgetPerformanceHistory !== undefined) {
    contents.BudgetPerformanceHistory = deserializeAws_json1_1BudgetPerformanceHistory(
      output.BudgetPerformanceHistory,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetResponse => {
  let contents: any = {
    __type: "DescribeBudgetResponse",
    Budget: undefined
  };
  if (output.Budget !== undefined) {
    contents.Budget = deserializeAws_json1_1Budget(output.Budget, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeBudgetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetsResponse => {
  let contents: any = {
    __type: "DescribeBudgetsResponse",
    Budgets: undefined,
    NextToken: undefined
  };
  if (output.Budgets !== undefined) {
    contents.Budgets = deserializeAws_json1_1Budgets(output.Budgets, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeNotificationsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeNotificationsForBudgetResponse => {
  let contents: any = {
    __type: "DescribeNotificationsForBudgetResponse",
    NextToken: undefined,
    Notifications: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Notifications !== undefined) {
    contents.Notifications = deserializeAws_json1_1Notifications(
      output.Notifications,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSubscribersForNotificationResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscribersForNotificationResponse => {
  let contents: any = {
    __type: "DescribeSubscribersForNotificationResponse",
    NextToken: undefined,
    Subscribers: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Subscribers !== undefined) {
    contents.Subscribers = deserializeAws_json1_1Subscribers(
      output.Subscribers,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DimensionValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DuplicateRecordException = (
  output: any,
  context: __SerdeContext
): DuplicateRecordException => {
  let contents: any = {
    __type: "DuplicateRecordException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  let contents: any = {
    __type: "ExpiredNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Notification = (
  output: any,
  context: __SerdeContext
): Notification => {
  let contents: any = {
    __type: "Notification",
    ComparisonOperator: undefined,
    NotificationState: undefined,
    NotificationType: undefined,
    Threshold: undefined,
    ThresholdType: undefined
  };
  if (output.ComparisonOperator !== undefined) {
    contents.ComparisonOperator = output.ComparisonOperator;
  }
  if (output.NotificationState !== undefined) {
    contents.NotificationState = output.NotificationState;
  }
  if (output.NotificationType !== undefined) {
    contents.NotificationType = output.NotificationType;
  }
  if (output.Threshold !== undefined) {
    contents.Threshold = output.Threshold;
  }
  if (output.ThresholdType !== undefined) {
    contents.ThresholdType = output.ThresholdType;
  }
  return contents;
};

const deserializeAws_json1_1Notifications = (
  output: any,
  context: __SerdeContext
): Array<Notification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Notification(entry, context)
  );
};

const deserializeAws_json1_1PlannedBudgetLimits = (
  output: any,
  context: __SerdeContext
): { [key: string]: Spend } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1Spend(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1Spend = (
  output: any,
  context: __SerdeContext
): Spend => {
  let contents: any = {
    __type: "Spend",
    Amount: undefined,
    Unit: undefined
  };
  if (output.Amount !== undefined) {
    contents.Amount = output.Amount;
  }
  if (output.Unit !== undefined) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1Subscriber = (
  output: any,
  context: __SerdeContext
): Subscriber => {
  let contents: any = {
    __type: "Subscriber",
    Address: undefined,
    SubscriptionType: undefined
  };
  if (output.Address !== undefined) {
    contents.Address = output.Address;
  }
  if (output.SubscriptionType !== undefined) {
    contents.SubscriptionType = output.SubscriptionType;
  }
  return contents;
};

const deserializeAws_json1_1Subscribers = (
  output: any,
  context: __SerdeContext
): Array<Subscriber> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Subscriber(entry, context)
  );
};

const deserializeAws_json1_1TimePeriod = (
  output: any,
  context: __SerdeContext
): TimePeriod => {
  let contents: any = {
    __type: "TimePeriod",
    End: undefined,
    Start: undefined
  };
  if (output.End !== undefined) {
    contents.End = new Date(
      output.End % 1 != 0 ? Math.round(output.End * 1000) : output.End
    );
  }
  if (output.Start !== undefined) {
    contents.Start = new Date(
      output.Start % 1 != 0 ? Math.round(output.Start * 1000) : output.Start
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateBudgetResponse = (
  output: any,
  context: __SerdeContext
): UpdateBudgetResponse => {
  let contents: any = {
    __type: "UpdateBudgetResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateNotificationResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationResponse => {
  let contents: any = {
    __type: "UpdateNotificationResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateSubscriberResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriberResponse => {
  let contents: any = {
    __type: "UpdateSubscriberResponse"
  };
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
