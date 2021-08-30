import {
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
} from "../commands/DescribeAffectedAccountsForOrganizationCommand";
import {
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "../commands/DescribeAffectedEntitiesCommand";
import {
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
} from "../commands/DescribeAffectedEntitiesForOrganizationCommand";
import {
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput,
} from "../commands/DescribeEntityAggregatesCommand";
import {
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
} from "../commands/DescribeEventAggregatesCommand";
import {
  DescribeEventDetailsCommandInput,
  DescribeEventDetailsCommandOutput,
} from "../commands/DescribeEventDetailsCommand";
import {
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput,
} from "../commands/DescribeEventDetailsForOrganizationCommand";
import { DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput } from "../commands/DescribeEventTypesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "../commands/DescribeEventsForOrganizationCommand";
import {
  DescribeHealthServiceStatusForOrganizationCommandInput,
  DescribeHealthServiceStatusForOrganizationCommandOutput,
} from "../commands/DescribeHealthServiceStatusForOrganizationCommand";
import {
  DisableHealthServiceAccessForOrganizationCommandInput,
  DisableHealthServiceAccessForOrganizationCommandOutput,
} from "../commands/DisableHealthServiceAccessForOrganizationCommand";
import {
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput,
} from "../commands/EnableHealthServiceAccessForOrganizationCommand";
import {
  AffectedEntity,
  ConcurrentModificationException,
  DateTimeRange,
  DescribeAffectedAccountsForOrganizationRequest,
  DescribeAffectedAccountsForOrganizationResponse,
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationResponse,
  DescribeAffectedEntitiesRequest,
  DescribeAffectedEntitiesResponse,
  DescribeEntityAggregatesRequest,
  DescribeEntityAggregatesResponse,
  DescribeEventAggregatesRequest,
  DescribeEventAggregatesResponse,
  DescribeEventDetailsForOrganizationRequest,
  DescribeEventDetailsForOrganizationResponse,
  DescribeEventDetailsRequest,
  DescribeEventDetailsResponse,
  DescribeEventTypesRequest,
  DescribeEventTypesResponse,
  DescribeEventsForOrganizationRequest,
  DescribeEventsForOrganizationResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeHealthServiceStatusForOrganizationResponse,
  EntityAggregate,
  EntityFilter,
  EntityStatusCode,
  Event,
  EventAccountFilter,
  EventAggregate,
  EventDescription,
  EventDetails,
  EventDetailsErrorItem,
  EventFilter,
  EventStatusCode,
  EventType,
  EventTypeCategory,
  EventTypeFilter,
  InvalidPaginationToken,
  OrganizationAffectedEntitiesErrorItem,
  OrganizationEvent,
  OrganizationEventDetails,
  OrganizationEventDetailsErrorItem,
  OrganizationEventFilter,
  UnsupportedLocale,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectInt32 as __expectInt32, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = async (
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeAffectedAccountsForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAffectedEntitiesCommand = async (
  input: DescribeAffectedEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeAffectedEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = async (
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEntityAggregatesCommand = async (
  input: DescribeEntityAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEntityAggregates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEntityAggregatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventAggregatesCommand = async (
  input: DescribeEventAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEventAggregates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventAggregatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventDetailsCommand = async (
  input: DescribeEventDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEventDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = async (
  input: DescribeEventDetailsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEventDetailsForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsForOrganizationCommand = async (
  input: DescribeEventsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEventsForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventTypesCommand = async (
  input: DescribeEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeEventTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = async (
  input: DescribeHealthServiceStatusForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = async (
  input: DisableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.DisableHealthServiceAccessForOrganization",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = async (
  input: EnableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSHealth_20160804.EnableHealthServiceAccessForOrganization",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse(data, context);
  const response: DescribeAffectedAccountsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAffectedEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAffectedEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAffectedEntitiesResponse(data, context);
  const response: DescribeAffectedEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAffectedEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse(data, context);
  const response: DescribeAffectedEntitiesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEntityAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEntityAggregatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntityAggregatesResponse(data, context);
  const response: DescribeEntityAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntityAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_json1_1DescribeEventAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventAggregatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventAggregatesResponse(data, context);
  const response: DescribeEventAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventDetailsResponse(data, context);
  const response: DescribeEventDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse(data, context);
  const response: DescribeEventDetailsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsForOrganizationResponse(data, context);
  const response: DescribeEventsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventTypesResponse(data, context);
  const response: DescribeEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse(data, context);
  const response: DescribeHealthServiceStatusForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.health#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.health#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationToken(body, context);
  const contents: InvalidPaginationToken = {
    name: "InvalidPaginationToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedLocaleResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLocale> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLocale(body, context);
  const contents: UnsupportedLocale = {
    name: "UnsupportedLocale",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1availabilityZones = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1awsAccountIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DateTimeRange = (input: DateTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.from !== undefined && input.from !== null && { from: Math.round(input.from.getTime() / 1000) }),
    ...(input.to !== undefined && input.to !== null && { to: Math.round(input.to.getTime() / 1000) }),
  };
};

const serializeAws_json1_1dateTimeRangeList = (input: DateTimeRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DateTimeRange(entry, context);
    });
};

const serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest = (
  input: DescribeAffectedAccountsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArn !== undefined && input.eventArn !== null && { eventArn: input.eventArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest = (
  input: DescribeAffectedEntitiesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.organizationEntityFilters !== undefined &&
      input.organizationEntityFilters !== null && {
        organizationEntityFilters: serializeAws_json1_1OrganizationEntityFiltersList(
          input.organizationEntityFilters,
          context
        ),
      }),
  };
};

const serializeAws_json1_1DescribeAffectedEntitiesRequest = (
  input: DescribeAffectedEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1EntityFilter(input.filter, context) }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeEntityAggregatesRequest = (
  input: DescribeEntityAggregatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArns !== undefined &&
      input.eventArns !== null && { eventArns: serializeAws_json1_1EventArnsList(input.eventArns, context) }),
  };
};

const serializeAws_json1_1DescribeEventAggregatesRequest = (
  input: DescribeEventAggregatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.aggregateField !== undefined &&
      input.aggregateField !== null && { aggregateField: input.aggregateField }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1EventFilter(input.filter, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeEventDetailsForOrganizationRequest = (
  input: DescribeEventDetailsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.organizationEventDetailFilters !== undefined &&
      input.organizationEventDetailFilters !== null && {
        organizationEventDetailFilters: serializeAws_json1_1OrganizationEventDetailFiltersList(
          input.organizationEventDetailFilters,
          context
        ),
      }),
  };
};

const serializeAws_json1_1DescribeEventDetailsRequest = (
  input: DescribeEventDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArns !== undefined &&
      input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
  };
};

const serializeAws_json1_1DescribeEventsForOrganizationRequest = (
  input: DescribeEventsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1OrganizationEventFilter(input.filter, context) }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1EventFilter(input.filter, context) }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeEventTypesRequest = (
  input: DescribeEventTypesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_json1_1EventTypeFilter(input.filter, context) }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1entityArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EntityFilter = (input: EntityFilter, context: __SerdeContext): any => {
  return {
    ...(input.entityArns !== undefined &&
      input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) }),
    ...(input.entityValues !== undefined &&
      input.entityValues !== null && {
        entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
      }),
    ...(input.eventArns !== undefined &&
      input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) }),
    ...(input.lastUpdatedTimes !== undefined &&
      input.lastUpdatedTimes !== null && {
        lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context),
      }),
    ...(input.statusCodes !== undefined &&
      input.statusCodes !== null && {
        statusCodes: serializeAws_json1_1entityStatusCodeList(input.statusCodes, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_json1_1tagFilter(input.tags, context) }),
  };
};

const serializeAws_json1_1entityStatusCodeList = (
  input: (EntityStatusCode | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1entityValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EventAccountFilter = (input: EventAccountFilter, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountId !== undefined && input.awsAccountId !== null && { awsAccountId: input.awsAccountId }),
    ...(input.eventArn !== undefined && input.eventArn !== null && { eventArn: input.eventArn }),
  };
};

const serializeAws_json1_1eventArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EventArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return {
    ...(input.availabilityZones !== undefined &&
      input.availabilityZones !== null && {
        availabilityZones: serializeAws_json1_1availabilityZones(input.availabilityZones, context),
      }),
    ...(input.endTimes !== undefined &&
      input.endTimes !== null && { endTimes: serializeAws_json1_1dateTimeRangeList(input.endTimes, context) }),
    ...(input.entityArns !== undefined &&
      input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) }),
    ...(input.entityValues !== undefined &&
      input.entityValues !== null && {
        entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
      }),
    ...(input.eventArns !== undefined &&
      input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) }),
    ...(input.eventStatusCodes !== undefined &&
      input.eventStatusCodes !== null && {
        eventStatusCodes: serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context),
      }),
    ...(input.eventTypeCategories !== undefined &&
      input.eventTypeCategories !== null && {
        eventTypeCategories: serializeAws_json1_1eventTypeCategoryList2(input.eventTypeCategories, context),
      }),
    ...(input.eventTypeCodes !== undefined &&
      input.eventTypeCodes !== null && {
        eventTypeCodes: serializeAws_json1_1eventTypeList2(input.eventTypeCodes, context),
      }),
    ...(input.lastUpdatedTimes !== undefined &&
      input.lastUpdatedTimes !== null && {
        lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context),
      }),
    ...(input.regions !== undefined &&
      input.regions !== null && { regions: serializeAws_json1_1regionList(input.regions, context) }),
    ...(input.services !== undefined &&
      input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }),
    ...(input.startTimes !== undefined &&
      input.startTimes !== null && { startTimes: serializeAws_json1_1dateTimeRangeList(input.startTimes, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_json1_1tagFilter(input.tags, context) }),
  };
};

const serializeAws_json1_1eventStatusCodeList = (input: (EventStatusCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EventTypeCategoryList = (
  input: (EventTypeCategory | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1eventTypeCategoryList2 = (
  input: (EventTypeCategory | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EventTypeCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EventTypeFilter = (input: EventTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.eventTypeCategories !== undefined &&
      input.eventTypeCategories !== null && {
        eventTypeCategories: serializeAws_json1_1EventTypeCategoryList(input.eventTypeCategories, context),
      }),
    ...(input.eventTypeCodes !== undefined &&
      input.eventTypeCodes !== null && {
        eventTypeCodes: serializeAws_json1_1EventTypeCodeList(input.eventTypeCodes, context),
      }),
    ...(input.services !== undefined &&
      input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }),
  };
};

const serializeAws_json1_1eventTypeList2 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1OrganizationEntityFiltersList = (
  input: EventAccountFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EventAccountFilter(entry, context);
    });
};

const serializeAws_json1_1OrganizationEventDetailFiltersList = (
  input: EventAccountFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EventAccountFilter(entry, context);
    });
};

const serializeAws_json1_1OrganizationEventFilter = (input: OrganizationEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountIds !== undefined &&
      input.awsAccountIds !== null && {
        awsAccountIds: serializeAws_json1_1awsAccountIdsList(input.awsAccountIds, context),
      }),
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: serializeAws_json1_1DateTimeRange(input.endTime, context) }),
    ...(input.entityArns !== undefined &&
      input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) }),
    ...(input.entityValues !== undefined &&
      input.entityValues !== null && {
        entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
      }),
    ...(input.eventStatusCodes !== undefined &&
      input.eventStatusCodes !== null && {
        eventStatusCodes: serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context),
      }),
    ...(input.eventTypeCategories !== undefined &&
      input.eventTypeCategories !== null && {
        eventTypeCategories: serializeAws_json1_1eventTypeCategoryList2(input.eventTypeCategories, context),
      }),
    ...(input.eventTypeCodes !== undefined &&
      input.eventTypeCodes !== null && {
        eventTypeCodes: serializeAws_json1_1eventTypeList2(input.eventTypeCodes, context),
      }),
    ...(input.lastUpdatedTime !== undefined &&
      input.lastUpdatedTime !== null && {
        lastUpdatedTime: serializeAws_json1_1DateTimeRange(input.lastUpdatedTime, context),
      }),
    ...(input.regions !== undefined &&
      input.regions !== null && { regions: serializeAws_json1_1regionList(input.regions, context) }),
    ...(input.services !== undefined &&
      input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: serializeAws_json1_1DateTimeRange(input.startTime, context) }),
  };
};

const serializeAws_json1_1regionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1serviceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1tagFilter = (input: { [key: string]: string }[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1tagSet(entry, context);
    });
};

const serializeAws_json1_1tagSet = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1affectedAccountsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AffectedEntity = (output: any, context: __SerdeContext): AffectedEntity => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    entityArn: __expectString(output.entityArn),
    entityUrl: __expectString(output.entityUrl),
    entityValue: __expectString(output.entityValue),
    eventArn: __expectString(output.eventArn),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    statusCode: __expectString(output.statusCode),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1tagSet(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedAccountsForOrganizationResponse => {
  return {
    affectedAccounts:
      output.affectedAccounts !== undefined && output.affectedAccounts !== null
        ? deserializeAws_json1_1affectedAccountsList(output.affectedAccounts, context)
        : undefined,
    eventScopeCode: __expectString(output.eventScopeCode),
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): OrganizationAffectedEntitiesErrorItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem(entry, context);
    });
};

const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesForOrganizationResponse => {
  return {
    entities:
      output.entities !== undefined && output.entities !== null
        ? deserializeAws_json1_1EntityList(output.entities, context)
        : undefined,
    failedSet:
      output.failedSet !== undefined && output.failedSet !== null
        ? deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet(output.failedSet, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAffectedEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesResponse => {
  return {
    entities:
      output.entities !== undefined && output.entities !== null
        ? deserializeAws_json1_1EntityList(output.entities, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEntityAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityAggregatesResponse => {
  return {
    entityAggregates:
      output.entityAggregates !== undefined && output.entityAggregates !== null
        ? deserializeAws_json1_1EntityAggregateList(output.entityAggregates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventAggregatesResponse => {
  return {
    eventAggregates:
      output.eventAggregates !== undefined && output.eventAggregates !== null
        ? deserializeAws_json1_1EventAggregateList(output.eventAggregates, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventDetailsFailedSet = (
  output: any,
  context: __SerdeContext
): EventDetailsErrorItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventDetailsErrorItem(entry, context);
    });
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetailsErrorItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationEventDetailsErrorItem(entry, context);
    });
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsForOrganizationResponse => {
  return {
    failedSet:
      output.failedSet !== undefined && output.failedSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet(output.failedSet, context)
        : undefined,
    successfulSet:
      output.successfulSet !== undefined && output.successfulSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet(output.successfulSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationEventDetails(entry, context);
    });
};

const deserializeAws_json1_1DescribeEventDetailsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsResponse => {
  return {
    failedSet:
      output.failedSet !== undefined && output.failedSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsFailedSet(output.failedSet, context)
        : undefined,
    successfulSet:
      output.successfulSet !== undefined && output.successfulSet !== null
        ? deserializeAws_json1_1DescribeEventDetailsSuccessfulSet(output.successfulSet, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventDetailsSuccessfulSet = (
  output: any,
  context: __SerdeContext
): EventDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventDetails(entry, context);
    });
};

const deserializeAws_json1_1DescribeEventsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsForOrganizationResponse => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1OrganizationEventList(output.events, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1EventList(output.events, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventTypesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTypesResponse => {
  return {
    eventTypes:
      output.eventTypes !== undefined && output.eventTypes !== null
        ? deserializeAws_json1_1EventTypeList(output.eventTypes, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeHealthServiceStatusForOrganizationResponse => {
  return {
    healthServiceAccessStatusForOrganization: __expectString(output.healthServiceAccessStatusForOrganization),
  } as any;
};

const deserializeAws_json1_1EntityAggregate = (output: any, context: __SerdeContext): EntityAggregate => {
  return {
    count: __expectInt32(output.count),
    eventArn: __expectString(output.eventArn),
  } as any;
};

const deserializeAws_json1_1EntityAggregateList = (output: any, context: __SerdeContext): EntityAggregate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityAggregate(entry, context);
    });
};

const deserializeAws_json1_1EntityList = (output: any, context: __SerdeContext): AffectedEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AffectedEntity(entry, context);
    });
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    arn: __expectString(output.arn),
    availabilityZone: __expectString(output.availabilityZone),
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    eventScopeCode: __expectString(output.eventScopeCode),
    eventTypeCategory: __expectString(output.eventTypeCategory),
    eventTypeCode: __expectString(output.eventTypeCode),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    region: __expectString(output.region),
    service: __expectString(output.service),
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_json1_1EventAggregate = (output: any, context: __SerdeContext): EventAggregate => {
  return {
    aggregateValue: __expectString(output.aggregateValue),
    count: __expectInt32(output.count),
  } as any;
};

const deserializeAws_json1_1EventAggregateList = (output: any, context: __SerdeContext): EventAggregate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventAggregate(entry, context);
    });
};

const deserializeAws_json1_1EventDescription = (output: any, context: __SerdeContext): EventDescription => {
  return {
    latestDescription: __expectString(output.latestDescription),
  } as any;
};

const deserializeAws_json1_1EventDetails = (output: any, context: __SerdeContext): EventDetails => {
  return {
    event:
      output.event !== undefined && output.event !== null
        ? deserializeAws_json1_1Event(output.event, context)
        : undefined,
    eventDescription:
      output.eventDescription !== undefined && output.eventDescription !== null
        ? deserializeAws_json1_1EventDescription(output.eventDescription, context)
        : undefined,
    eventMetadata:
      output.eventMetadata !== undefined && output.eventMetadata !== null
        ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventDetailsErrorItem = (output: any, context: __SerdeContext): EventDetailsErrorItem => {
  return {
    errorMessage: __expectString(output.errorMessage),
    errorName: __expectString(output.errorName),
    eventArn: __expectString(output.eventArn),
  } as any;
};

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
};

const deserializeAws_json1_1eventMetadata = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1EventType = (output: any, context: __SerdeContext): EventType => {
  return {
    category: __expectString(output.category),
    code: __expectString(output.code),
    service: __expectString(output.service),
  } as any;
};

const deserializeAws_json1_1EventTypeList = (output: any, context: __SerdeContext): EventType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventType(entry, context);
    });
};

const deserializeAws_json1_1InvalidPaginationToken = (output: any, context: __SerdeContext): InvalidPaginationToken => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem = (
  output: any,
  context: __SerdeContext
): OrganizationAffectedEntitiesErrorItem => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    errorMessage: __expectString(output.errorMessage),
    errorName: __expectString(output.errorName),
    eventArn: __expectString(output.eventArn),
  } as any;
};

const deserializeAws_json1_1OrganizationEvent = (output: any, context: __SerdeContext): OrganizationEvent => {
  return {
    arn: __expectString(output.arn),
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    eventScopeCode: __expectString(output.eventScopeCode),
    eventTypeCategory: __expectString(output.eventTypeCategory),
    eventTypeCode: __expectString(output.eventTypeCode),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    region: __expectString(output.region),
    service: __expectString(output.service),
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_json1_1OrganizationEventDetails = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetails => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    event:
      output.event !== undefined && output.event !== null
        ? deserializeAws_json1_1Event(output.event, context)
        : undefined,
    eventDescription:
      output.eventDescription !== undefined && output.eventDescription !== null
        ? deserializeAws_json1_1EventDescription(output.eventDescription, context)
        : undefined,
    eventMetadata:
      output.eventMetadata !== undefined && output.eventMetadata !== null
        ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OrganizationEventDetailsErrorItem = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetailsErrorItem => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    errorMessage: __expectString(output.errorMessage),
    errorName: __expectString(output.errorName),
    eventArn: __expectString(output.eventArn),
  } as any;
};

const deserializeAws_json1_1OrganizationEventList = (output: any, context: __SerdeContext): OrganizationEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationEvent(entry, context);
    });
};

const deserializeAws_json1_1tagSet = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1UnsupportedLocale = (output: any, context: __SerdeContext): UnsupportedLocale => {
  return {
    message: __expectString(output.message),
  } as any;
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
