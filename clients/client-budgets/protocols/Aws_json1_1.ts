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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateBudgetCommand = async (
  input: CreateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.CreateBudget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateBudgetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNotificationCommand = async (
  input: CreateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.CreateNotification"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateNotificationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubscriberCommand = async (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.CreateSubscriber"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSubscriberRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBudgetCommand = async (
  input: DeleteBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DeleteBudget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteBudgetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNotificationCommand = async (
  input: DeleteNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DeleteNotification"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteNotificationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubscriberCommand = async (
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DeleteSubscriber"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSubscriberRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetCommand = async (
  input: DescribeBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DescribeBudget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBudgetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = async (
  input: DescribeBudgetPerformanceHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBudgetsCommand = async (
  input: DescribeBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DescribeBudgets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBudgetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNotificationsForBudgetCommand = async (
  input: DescribeNotificationsForBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeNotificationsForBudgetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubscribersForNotificationCommand = async (
  input: DescribeSubscribersForNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.DescribeSubscribersForNotification"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSubscribersForNotificationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBudgetCommand = async (
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.UpdateBudget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateBudgetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNotificationCommand = async (
  input: UpdateNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.UpdateNotification"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateNotificationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubscriberCommand = async (
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSBudgetServiceGateway.UpdateSubscriber"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSubscriberRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateBudgetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> => {
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
};

const deserializeAws_json1_1CreateBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1CreateNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1CreateSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DeleteSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeBudgetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBudgetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeNotificationsForBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1DescribeSubscribersForNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribersForNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateBudgetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBudgetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
};

const deserializeAws_json1_1UpdateSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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
    name: "CreationLimitExceededException",
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
    name: "DuplicateRecordException",
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
    name: "ExpiredNextTokenException",
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
    name: "InternalErrorException",
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
    name: "InvalidNextTokenException",
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
    name: "InvalidParameterException",
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
    name: "NotFoundException",
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_json1_1DimensionValues(input[key], context);
    return acc;
  }, {});
};

const serializeAws_json1_1CostTypes = (
  input: CostTypes,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Notification = (
  input: Notification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  input: NotificationWithSubscribers[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1NotificationWithSubscribers(entry, context)
  );
};

const serializeAws_json1_1PlannedBudgetLimits = (
  input: { [key: string]: Spend },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_json1_1Spend(input[key], context);
    return acc;
  }, {});
};

const serializeAws_json1_1Spend = (
  input: Spend,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.Address !== undefined) {
    bodyParams["Address"] = input.Address;
  }
  if (input.SubscriptionType !== undefined) {
    bodyParams["SubscriptionType"] = input.SubscriptionType;
  }
  return bodyParams;
};

const serializeAws_json1_1Subscribers = (
  input: Subscriber[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Subscriber(entry, context));
};

const serializeAws_json1_1TimePeriod = (
  input: TimePeriod,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  return {
    __type: "AccessDeniedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Budget = (
  output: any,
  context: __SerdeContext
): Budget => {
  return {
    __type: "Budget",
    BudgetLimit:
      output.BudgetLimit !== undefined && output.BudgetLimit !== null
        ? deserializeAws_json1_1Spend(output.BudgetLimit, context)
        : undefined,
    BudgetName:
      output.BudgetName !== undefined && output.BudgetName !== null
        ? output.BudgetName
        : undefined,
    BudgetType:
      output.BudgetType !== undefined && output.BudgetType !== null
        ? output.BudgetType
        : undefined,
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
      output.PlannedBudgetLimits !== undefined &&
      output.PlannedBudgetLimits !== null
        ? deserializeAws_json1_1PlannedBudgetLimits(
            output.PlannedBudgetLimits,
            context
          )
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
    TimeUnit:
      output.TimeUnit !== undefined && output.TimeUnit !== null
        ? output.TimeUnit
        : undefined
  } as any;
};

const deserializeAws_json1_1BudgetPerformanceHistory = (
  output: any,
  context: __SerdeContext
): BudgetPerformanceHistory => {
  return {
    __type: "BudgetPerformanceHistory",
    BudgetName:
      output.BudgetName !== undefined && output.BudgetName !== null
        ? output.BudgetName
        : undefined,
    BudgetType:
      output.BudgetType !== undefined && output.BudgetType !== null
        ? output.BudgetType
        : undefined,
    BudgetedAndActualAmountsList:
      output.BudgetedAndActualAmountsList !== undefined &&
      output.BudgetedAndActualAmountsList !== null
        ? deserializeAws_json1_1BudgetedAndActualAmountsList(
            output.BudgetedAndActualAmountsList,
            context
          )
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    TimeUnit:
      output.TimeUnit !== undefined && output.TimeUnit !== null
        ? output.TimeUnit
        : undefined
  } as any;
};

const deserializeAws_json1_1BudgetedAndActualAmounts = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts => {
  return {
    __type: "BudgetedAndActualAmounts",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1BudgetedAndActualAmountsList = (
  output: any,
  context: __SerdeContext
): BudgetedAndActualAmounts[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BudgetedAndActualAmounts(entry, context)
  );
};

const deserializeAws_json1_1Budgets = (
  output: any,
  context: __SerdeContext
): Budget[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Budget(entry, context)
  );
};

const deserializeAws_json1_1CalculatedSpend = (
  output: any,
  context: __SerdeContext
): CalculatedSpend => {
  return {
    __type: "CalculatedSpend",
    ActualSpend:
      output.ActualSpend !== undefined && output.ActualSpend !== null
        ? deserializeAws_json1_1Spend(output.ActualSpend, context)
        : undefined,
    ForecastedSpend:
      output.ForecastedSpend !== undefined && output.ForecastedSpend !== null
        ? deserializeAws_json1_1Spend(output.ForecastedSpend, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CostFilters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1DimensionValues(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1CostTypes = (
  output: any,
  context: __SerdeContext
): CostTypes => {
  return {
    __type: "CostTypes",
    IncludeCredit:
      output.IncludeCredit !== undefined && output.IncludeCredit !== null
        ? output.IncludeCredit
        : undefined,
    IncludeDiscount:
      output.IncludeDiscount !== undefined && output.IncludeDiscount !== null
        ? output.IncludeDiscount
        : undefined,
    IncludeOtherSubscription:
      output.IncludeOtherSubscription !== undefined &&
      output.IncludeOtherSubscription !== null
        ? output.IncludeOtherSubscription
        : undefined,
    IncludeRecurring:
      output.IncludeRecurring !== undefined && output.IncludeRecurring !== null
        ? output.IncludeRecurring
        : undefined,
    IncludeRefund:
      output.IncludeRefund !== undefined && output.IncludeRefund !== null
        ? output.IncludeRefund
        : undefined,
    IncludeSubscription:
      output.IncludeSubscription !== undefined &&
      output.IncludeSubscription !== null
        ? output.IncludeSubscription
        : undefined,
    IncludeSupport:
      output.IncludeSupport !== undefined && output.IncludeSupport !== null
        ? output.IncludeSupport
        : undefined,
    IncludeTax:
      output.IncludeTax !== undefined && output.IncludeTax !== null
        ? output.IncludeTax
        : undefined,
    IncludeUpfront:
      output.IncludeUpfront !== undefined && output.IncludeUpfront !== null
        ? output.IncludeUpfront
        : undefined,
    UseAmortized:
      output.UseAmortized !== undefined && output.UseAmortized !== null
        ? output.UseAmortized
        : undefined,
    UseBlended:
      output.UseBlended !== undefined && output.UseBlended !== null
        ? output.UseBlended
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateBudgetResponse = (
  output: any,
  context: __SerdeContext
): CreateBudgetResponse => {
  return {
    __type: "CreateBudgetResponse"
  } as any;
};

const deserializeAws_json1_1CreateNotificationResponse = (
  output: any,
  context: __SerdeContext
): CreateNotificationResponse => {
  return {
    __type: "CreateNotificationResponse"
  } as any;
};

const deserializeAws_json1_1CreateSubscriberResponse = (
  output: any,
  context: __SerdeContext
): CreateSubscriberResponse => {
  return {
    __type: "CreateSubscriberResponse"
  } as any;
};

const deserializeAws_json1_1CreationLimitExceededException = (
  output: any,
  context: __SerdeContext
): CreationLimitExceededException => {
  return {
    __type: "CreationLimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteBudgetResponse = (
  output: any,
  context: __SerdeContext
): DeleteBudgetResponse => {
  return {
    __type: "DeleteBudgetResponse"
  } as any;
};

const deserializeAws_json1_1DeleteNotificationResponse = (
  output: any,
  context: __SerdeContext
): DeleteNotificationResponse => {
  return {
    __type: "DeleteNotificationResponse"
  } as any;
};

const deserializeAws_json1_1DeleteSubscriberResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubscriberResponse => {
  return {
    __type: "DeleteSubscriberResponse"
  } as any;
};

const deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetPerformanceHistoryResponse => {
  return {
    __type: "DescribeBudgetPerformanceHistoryResponse",
    BudgetPerformanceHistory:
      output.BudgetPerformanceHistory !== undefined &&
      output.BudgetPerformanceHistory !== null
        ? deserializeAws_json1_1BudgetPerformanceHistory(
            output.BudgetPerformanceHistory,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetResponse => {
  return {
    __type: "DescribeBudgetResponse",
    Budget:
      output.Budget !== undefined && output.Budget !== null
        ? deserializeAws_json1_1Budget(output.Budget, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeBudgetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBudgetsResponse => {
  return {
    __type: "DescribeBudgetsResponse",
    Budgets:
      output.Budgets !== undefined && output.Budgets !== null
        ? deserializeAws_json1_1Budgets(output.Budgets, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeNotificationsForBudgetResponse = (
  output: any,
  context: __SerdeContext
): DescribeNotificationsForBudgetResponse => {
  return {
    __type: "DescribeNotificationsForBudgetResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Notifications:
      output.Notifications !== undefined && output.Notifications !== null
        ? deserializeAws_json1_1Notifications(output.Notifications, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSubscribersForNotificationResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscribersForNotificationResponse => {
  return {
    __type: "DescribeSubscribersForNotificationResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DimensionValues = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DuplicateRecordException = (
  output: any,
  context: __SerdeContext
): DuplicateRecordException => {
  return {
    __type: "DuplicateRecordException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  return {
    __type: "ExpiredNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  return {
    __type: "InternalErrorException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  return {
    __type: "NotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Notification = (
  output: any,
  context: __SerdeContext
): Notification => {
  return {
    __type: "Notification",
    ComparisonOperator:
      output.ComparisonOperator !== undefined &&
      output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    NotificationState:
      output.NotificationState !== undefined &&
      output.NotificationState !== null
        ? output.NotificationState
        : undefined,
    NotificationType:
      output.NotificationType !== undefined && output.NotificationType !== null
        ? output.NotificationType
        : undefined,
    Threshold:
      output.Threshold !== undefined && output.Threshold !== null
        ? output.Threshold
        : undefined,
    ThresholdType:
      output.ThresholdType !== undefined && output.ThresholdType !== null
        ? output.ThresholdType
        : undefined
  } as any;
};

const deserializeAws_json1_1Notifications = (
  output: any,
  context: __SerdeContext
): Notification[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Notification(entry, context)
  );
};

const deserializeAws_json1_1PlannedBudgetLimits = (
  output: any,
  context: __SerdeContext
): { [key: string]: Spend } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1Spend(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1Spend = (
  output: any,
  context: __SerdeContext
): Spend => {
  return {
    __type: "Spend",
    Amount:
      output.Amount !== undefined && output.Amount !== null
        ? output.Amount
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1Subscriber = (
  output: any,
  context: __SerdeContext
): Subscriber => {
  return {
    __type: "Subscriber",
    Address:
      output.Address !== undefined && output.Address !== null
        ? output.Address
        : undefined,
    SubscriptionType:
      output.SubscriptionType !== undefined && output.SubscriptionType !== null
        ? output.SubscriptionType
        : undefined
  } as any;
};

const deserializeAws_json1_1Subscribers = (
  output: any,
  context: __SerdeContext
): Subscriber[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Subscriber(entry, context)
  );
};

const deserializeAws_json1_1TimePeriod = (
  output: any,
  context: __SerdeContext
): TimePeriod => {
  return {
    __type: "TimePeriod",
    End:
      output.End !== undefined && output.End !== null
        ? new Date(Math.round(output.End * 1000))
        : undefined,
    Start:
      output.Start !== undefined && output.Start !== null
        ? new Date(Math.round(output.Start * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateBudgetResponse = (
  output: any,
  context: __SerdeContext
): UpdateBudgetResponse => {
  return {
    __type: "UpdateBudgetResponse"
  } as any;
};

const deserializeAws_json1_1UpdateNotificationResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationResponse => {
  return {
    __type: "UpdateNotificationResponse"
  } as any;
};

const deserializeAws_json1_1UpdateSubscriberResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriberResponse => {
  return {
    __type: "UpdateSubscriberResponse"
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
