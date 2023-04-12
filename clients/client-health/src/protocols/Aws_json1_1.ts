// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "../commands/DescribeEventsForOrganizationCommand";
import { DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput } from "../commands/DescribeEventTypesCommand";
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
import { HealthServiceException as __BaseException } from "../models/HealthServiceException";
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
  DescribeEventsForOrganizationRequest,
  DescribeEventsForOrganizationResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeEventTypesRequest,
  DescribeEventTypesResponse,
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

/**
 * serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand
 */
export const se_DescribeAffectedAccountsForOrganizationCommand = async (
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAffectedAccountsForOrganization");
  let body: any;
  body = JSON.stringify(se_DescribeAffectedAccountsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAffectedEntitiesCommand
 */
export const se_DescribeAffectedEntitiesCommand = async (
  input: DescribeAffectedEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAffectedEntities");
  let body: any;
  body = JSON.stringify(se_DescribeAffectedEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand
 */
export const se_DescribeAffectedEntitiesForOrganizationCommand = async (
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAffectedEntitiesForOrganization");
  let body: any;
  body = JSON.stringify(se_DescribeAffectedEntitiesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntityAggregatesCommand
 */
export const se_DescribeEntityAggregatesCommand = async (
  input: DescribeEntityAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntityAggregates");
  let body: any;
  body = JSON.stringify(se_DescribeEntityAggregatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventAggregatesCommand
 */
export const se_DescribeEventAggregatesCommand = async (
  input: DescribeEventAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventAggregates");
  let body: any;
  body = JSON.stringify(se_DescribeEventAggregatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventDetailsCommand
 */
export const se_DescribeEventDetailsCommand = async (
  input: DescribeEventDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventDetails");
  let body: any;
  body = JSON.stringify(se_DescribeEventDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventDetailsForOrganizationCommand
 */
export const se_DescribeEventDetailsForOrganizationCommand = async (
  input: DescribeEventDetailsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventDetailsForOrganization");
  let body: any;
  body = JSON.stringify(se_DescribeEventDetailsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEvents");
  let body: any;
  body = JSON.stringify(se_DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsForOrganizationCommand
 */
export const se_DescribeEventsForOrganizationCommand = async (
  input: DescribeEventsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventsForOrganization");
  let body: any;
  body = JSON.stringify(se_DescribeEventsForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventTypesCommand
 */
export const se_DescribeEventTypesCommand = async (
  input: DescribeEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventTypes");
  let body: any;
  body = JSON.stringify(se_DescribeEventTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand
 */
export const se_DescribeHealthServiceStatusForOrganizationCommand = async (
  input: DescribeHealthServiceStatusForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHealthServiceStatusForOrganization");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand
 */
export const se_DisableHealthServiceAccessForOrganizationCommand = async (
  input: DisableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableHealthServiceAccessForOrganization");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand
 */
export const se_EnableHealthServiceAccessForOrganizationCommand = async (
  input: EnableHealthServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableHealthServiceAccessForOrganization");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand
 */
export const de_DescribeAffectedAccountsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAffectedAccountsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAffectedAccountsForOrganizationResponse(data, context);
  const response: DescribeAffectedAccountsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError
 */
const de_DescribeAffectedAccountsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAffectedEntitiesCommand
 */
export const de_DescribeAffectedEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAffectedEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAffectedEntitiesResponse(data, context);
  const response: DescribeAffectedEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesCommandError
 */
const de_DescribeAffectedEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand
 */
export const de_DescribeAffectedEntitiesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAffectedEntitiesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAffectedEntitiesForOrganizationResponse(data, context);
  const response: DescribeAffectedEntitiesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError
 */
const de_DescribeAffectedEntitiesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEntityAggregatesCommand
 */
export const de_DescribeEntityAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntityAggregatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEntityAggregatesResponse(data, context);
  const response: DescribeEntityAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEntityAggregatesCommandError
 */
const de_DescribeEntityAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEventAggregatesCommand
 */
export const de_DescribeEventAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventAggregatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventAggregatesResponse(data, context);
  const response: DescribeEventAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventAggregatesCommandError
 */
const de_DescribeEventAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventDetailsCommand
 */
export const de_DescribeEventDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventDetailsResponse(data, context);
  const response: DescribeEventDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventDetailsCommandError
 */
const de_DescribeEventDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand
 */
export const de_DescribeEventDetailsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventDetailsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventDetailsForOrganizationResponse(data, context);
  const response: DescribeEventDetailsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError
 */
const de_DescribeEventDetailsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventDetailsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventsForOrganizationCommand
 */
export const de_DescribeEventsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsForOrganizationResponse(data, context);
  const response: DescribeEventsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventsForOrganizationCommandError
 */
const de_DescribeEventsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventTypesCommand
 */
export const de_DescribeEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventTypesResponse(data, context);
  const response: DescribeEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventTypesCommandError
 */
const de_DescribeEventTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPaginationToken":
    case "com.amazonaws.health#InvalidPaginationToken":
      throw await de_InvalidPaginationTokenRes(parsedOutput, context);
    case "UnsupportedLocale":
    case "com.amazonaws.health#UnsupportedLocale":
      throw await de_UnsupportedLocaleRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand
 */
export const de_DescribeHealthServiceStatusForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHealthServiceStatusForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHealthServiceStatusForOrganizationResponse(data, context);
  const response: DescribeHealthServiceStatusForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError
 */
const de_DescribeHealthServiceStatusForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand
 */
export const de_DisableHealthServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableHealthServiceAccessForOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError
 */
const de_DisableHealthServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableHealthServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.health#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand
 */
export const de_EnableHealthServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableHealthServiceAccessForOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableHealthServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError
 */
const de_EnableHealthServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableHealthServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.health#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenRes
 */
const de_InvalidPaginationTokenRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationToken> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPaginationToken(body, context);
  const exception = new InvalidPaginationToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedLocaleRes
 */
const de_UnsupportedLocaleRes = async (parsedOutput: any, context: __SerdeContext): Promise<UnsupportedLocale> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedLocale(body, context);
  const exception = new UnsupportedLocale({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1availabilityZones
 */
const se_availabilityZones = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1awsAccountIdsList
 */
const se_awsAccountIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DateTimeRange
 */
const se_DateTimeRange = (input: DateTimeRange, context: __SerdeContext): any => {
  return {
    ...(input.from != null && { from: Math.round(input.from.getTime() / 1000) }),
    ...(input.to != null && { to: Math.round(input.to.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1dateTimeRangeList
 */
const se_dateTimeRangeList = (input: DateTimeRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DateTimeRange(entry, context);
    });
};

/**
 * serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest
 */
const se_DescribeAffectedAccountsForOrganizationRequest = (
  input: DescribeAffectedAccountsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventArn != null && { eventArn: input.eventArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest
 */
const se_DescribeAffectedEntitiesForOrganizationRequest = (
  input: DescribeAffectedEntitiesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale != null && { locale: input.locale }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.organizationEntityFilters != null && {
      organizationEntityFilters: se_OrganizationEntityFiltersList(input.organizationEntityFilters, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeAffectedEntitiesRequest
 */
const se_DescribeAffectedEntitiesRequest = (input: DescribeAffectedEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_EntityFilter(input.filter, context) }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEntityAggregatesRequest
 */
const se_DescribeEntityAggregatesRequest = (input: DescribeEntityAggregatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventArns != null && { eventArns: se_EventArnsList(input.eventArns, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeEventAggregatesRequest
 */
const se_DescribeEventAggregatesRequest = (input: DescribeEventAggregatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.aggregateField != null && { aggregateField: input.aggregateField }),
    ...(input.filter != null && { filter: se_EventFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEventDetailsForOrganizationRequest
 */
const se_DescribeEventDetailsForOrganizationRequest = (
  input: DescribeEventDetailsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.locale != null && { locale: input.locale }),
    ...(input.organizationEventDetailFilters != null && {
      organizationEventDetailFilters: se_OrganizationEventDetailFiltersList(
        input.organizationEventDetailFilters,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeEventDetailsRequest
 */
const se_DescribeEventDetailsRequest = (input: DescribeEventDetailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventArns != null && { eventArns: se_eventArnList(input.eventArns, context) }),
    ...(input.locale != null && { locale: input.locale }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsForOrganizationRequest
 */
const se_DescribeEventsForOrganizationRequest = (
  input: DescribeEventsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter != null && { filter: se_OrganizationEventFilter(input.filter, context) }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsRequest
 */
const se_DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_EventFilter(input.filter, context) }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEventTypesRequest
 */
const se_DescribeEventTypesRequest = (input: DescribeEventTypesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_EventTypeFilter(input.filter, context) }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1entityArnList
 */
const se_entityArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EntityFilter
 */
const se_EntityFilter = (input: EntityFilter, context: __SerdeContext): any => {
  return {
    ...(input.entityArns != null && { entityArns: se_entityArnList(input.entityArns, context) }),
    ...(input.entityValues != null && { entityValues: se_entityValueList(input.entityValues, context) }),
    ...(input.eventArns != null && { eventArns: se_eventArnList(input.eventArns, context) }),
    ...(input.lastUpdatedTimes != null && { lastUpdatedTimes: se_dateTimeRangeList(input.lastUpdatedTimes, context) }),
    ...(input.statusCodes != null && { statusCodes: se_entityStatusCodeList(input.statusCodes, context) }),
    ...(input.tags != null && { tags: se_tagFilter(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1entityStatusCodeList
 */
const se_entityStatusCodeList = (input: (EntityStatusCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1entityValueList
 */
const se_entityValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventAccountFilter
 */
const se_EventAccountFilter = (input: EventAccountFilter, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.eventArn != null && { eventArn: input.eventArn }),
  };
};

/**
 * serializeAws_json1_1eventArnList
 */
const se_eventArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventArnsList
 */
const se_EventArnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventFilter
 */
const se_EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return {
    ...(input.availabilityZones != null && {
      availabilityZones: se_availabilityZones(input.availabilityZones, context),
    }),
    ...(input.endTimes != null && { endTimes: se_dateTimeRangeList(input.endTimes, context) }),
    ...(input.entityArns != null && { entityArns: se_entityArnList(input.entityArns, context) }),
    ...(input.entityValues != null && { entityValues: se_entityValueList(input.entityValues, context) }),
    ...(input.eventArns != null && { eventArns: se_eventArnList(input.eventArns, context) }),
    ...(input.eventStatusCodes != null && {
      eventStatusCodes: se_eventStatusCodeList(input.eventStatusCodes, context),
    }),
    ...(input.eventTypeCategories != null && {
      eventTypeCategories: se_eventTypeCategoryList2(input.eventTypeCategories, context),
    }),
    ...(input.eventTypeCodes != null && { eventTypeCodes: se_eventTypeList2(input.eventTypeCodes, context) }),
    ...(input.lastUpdatedTimes != null && { lastUpdatedTimes: se_dateTimeRangeList(input.lastUpdatedTimes, context) }),
    ...(input.regions != null && { regions: se_regionList(input.regions, context) }),
    ...(input.services != null && { services: se_serviceList(input.services, context) }),
    ...(input.startTimes != null && { startTimes: se_dateTimeRangeList(input.startTimes, context) }),
    ...(input.tags != null && { tags: se_tagFilter(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1eventStatusCodeList
 */
const se_eventStatusCodeList = (input: (EventStatusCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventTypeCategoryList
 */
const se_EventTypeCategoryList = (input: (EventTypeCategory | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1eventTypeCategoryList2
 */
const se_eventTypeCategoryList2 = (input: (EventTypeCategory | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventTypeCodeList
 */
const se_EventTypeCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventTypeFilter
 */
const se_EventTypeFilter = (input: EventTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.eventTypeCategories != null && {
      eventTypeCategories: se_EventTypeCategoryList(input.eventTypeCategories, context),
    }),
    ...(input.eventTypeCodes != null && { eventTypeCodes: se_EventTypeCodeList(input.eventTypeCodes, context) }),
    ...(input.services != null && { services: se_serviceList(input.services, context) }),
  };
};

/**
 * serializeAws_json1_1eventTypeList2
 */
const se_eventTypeList2 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OrganizationEntityFiltersList
 */
const se_OrganizationEntityFiltersList = (input: EventAccountFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EventAccountFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OrganizationEventDetailFiltersList
 */
const se_OrganizationEventDetailFiltersList = (input: EventAccountFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EventAccountFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OrganizationEventFilter
 */
const se_OrganizationEventFilter = (input: OrganizationEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountIds != null && { awsAccountIds: se_awsAccountIdsList(input.awsAccountIds, context) }),
    ...(input.endTime != null && { endTime: se_DateTimeRange(input.endTime, context) }),
    ...(input.entityArns != null && { entityArns: se_entityArnList(input.entityArns, context) }),
    ...(input.entityValues != null && { entityValues: se_entityValueList(input.entityValues, context) }),
    ...(input.eventStatusCodes != null && {
      eventStatusCodes: se_eventStatusCodeList(input.eventStatusCodes, context),
    }),
    ...(input.eventTypeCategories != null && {
      eventTypeCategories: se_eventTypeCategoryList2(input.eventTypeCategories, context),
    }),
    ...(input.eventTypeCodes != null && { eventTypeCodes: se_eventTypeList2(input.eventTypeCodes, context) }),
    ...(input.lastUpdatedTime != null && { lastUpdatedTime: se_DateTimeRange(input.lastUpdatedTime, context) }),
    ...(input.regions != null && { regions: se_regionList(input.regions, context) }),
    ...(input.services != null && { services: se_serviceList(input.services, context) }),
    ...(input.startTime != null && { startTime: se_DateTimeRange(input.startTime, context) }),
  };
};

/**
 * serializeAws_json1_1regionList
 */
const se_regionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1serviceList
 */
const se_serviceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1tagFilter
 */
const se_tagFilter = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_tagSet(entry, context);
    });
};

/**
 * serializeAws_json1_1tagSet
 */
const se_tagSet = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1affectedAccountsList
 */
const de_affectedAccountsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AffectedEntity
 */
const de_AffectedEntity = (output: any, context: __SerdeContext): AffectedEntity => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    entityArn: __expectString(output.entityArn),
    entityUrl: __expectString(output.entityUrl),
    entityValue: __expectString(output.entityValue),
    eventArn: __expectString(output.eventArn),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    statusCode: __expectString(output.statusCode),
    tags: output.tags != null ? de_tagSet(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse
 */
const de_DescribeAffectedAccountsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedAccountsForOrganizationResponse => {
  return {
    affectedAccounts:
      output.affectedAccounts != null ? de_affectedAccountsList(output.affectedAccounts, context) : undefined,
    eventScopeCode: __expectString(output.eventScopeCode),
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet
 */
const de_DescribeAffectedEntitiesForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): OrganizationAffectedEntitiesErrorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationAffectedEntitiesErrorItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse
 */
const de_DescribeAffectedEntitiesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesForOrganizationResponse => {
  return {
    entities: output.entities != null ? de_EntityList(output.entities, context) : undefined,
    failedSet:
      output.failedSet != null
        ? de_DescribeAffectedEntitiesForOrganizationFailedSet(output.failedSet, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesResponse
 */
const de_DescribeAffectedEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesResponse => {
  return {
    entities: output.entities != null ? de_EntityList(output.entities, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEntityAggregatesResponse
 */
const de_DescribeEntityAggregatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntityAggregatesResponse => {
  return {
    entityAggregates:
      output.entityAggregates != null ? de_EntityAggregateList(output.entityAggregates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventAggregatesResponse
 */
const de_DescribeEventAggregatesResponse = (output: any, context: __SerdeContext): DescribeEventAggregatesResponse => {
  return {
    eventAggregates:
      output.eventAggregates != null ? de_EventAggregateList(output.eventAggregates, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsFailedSet
 */
const de_DescribeEventDetailsFailedSet = (output: any, context: __SerdeContext): EventDetailsErrorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventDetailsErrorItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet
 */
const de_DescribeEventDetailsForOrganizationFailedSet = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetailsErrorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationEventDetailsErrorItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse
 */
const de_DescribeEventDetailsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsForOrganizationResponse => {
  return {
    failedSet:
      output.failedSet != null ? de_DescribeEventDetailsForOrganizationFailedSet(output.failedSet, context) : undefined,
    successfulSet:
      output.successfulSet != null
        ? de_DescribeEventDetailsForOrganizationSuccessfulSet(output.successfulSet, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet
 */
const de_DescribeEventDetailsForOrganizationSuccessfulSet = (
  output: any,
  context: __SerdeContext
): OrganizationEventDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationEventDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsResponse
 */
const de_DescribeEventDetailsResponse = (output: any, context: __SerdeContext): DescribeEventDetailsResponse => {
  return {
    failedSet: output.failedSet != null ? de_DescribeEventDetailsFailedSet(output.failedSet, context) : undefined,
    successfulSet:
      output.successfulSet != null ? de_DescribeEventDetailsSuccessfulSet(output.successfulSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsSuccessfulSet
 */
const de_DescribeEventDetailsSuccessfulSet = (output: any, context: __SerdeContext): EventDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEventsForOrganizationResponse
 */
const de_DescribeEventsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsForOrganizationResponse => {
  return {
    events: output.events != null ? de_OrganizationEventList(output.events, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    events: output.events != null ? de_EventList(output.events, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventTypesResponse
 */
const de_DescribeEventTypesResponse = (output: any, context: __SerdeContext): DescribeEventTypesResponse => {
  return {
    eventTypes: output.eventTypes != null ? de_EventTypeList(output.eventTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse
 */
const de_DescribeHealthServiceStatusForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeHealthServiceStatusForOrganizationResponse => {
  return {
    healthServiceAccessStatusForOrganization: __expectString(output.healthServiceAccessStatusForOrganization),
  } as any;
};

/**
 * deserializeAws_json1_1EntityAggregate
 */
const de_EntityAggregate = (output: any, context: __SerdeContext): EntityAggregate => {
  return {
    count: __expectInt32(output.count),
    eventArn: __expectString(output.eventArn),
  } as any;
};

/**
 * deserializeAws_json1_1EntityAggregateList
 */
const de_EntityAggregateList = (output: any, context: __SerdeContext): EntityAggregate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntityAggregate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityList
 */
const de_EntityList = (output: any, context: __SerdeContext): AffectedEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AffectedEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    arn: __expectString(output.arn),
    availabilityZone: __expectString(output.availabilityZone),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    eventScopeCode: __expectString(output.eventScopeCode),
    eventTypeCategory: __expectString(output.eventTypeCategory),
    eventTypeCode: __expectString(output.eventTypeCode),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    region: __expectString(output.region),
    service: __expectString(output.service),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_json1_1EventAggregate
 */
const de_EventAggregate = (output: any, context: __SerdeContext): EventAggregate => {
  return {
    aggregateValue: __expectString(output.aggregateValue),
    count: __expectInt32(output.count),
  } as any;
};

/**
 * deserializeAws_json1_1EventAggregateList
 */
const de_EventAggregateList = (output: any, context: __SerdeContext): EventAggregate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventAggregate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventDescription
 */
const de_EventDescription = (output: any, context: __SerdeContext): EventDescription => {
  return {
    latestDescription: __expectString(output.latestDescription),
  } as any;
};

/**
 * deserializeAws_json1_1EventDetails
 */
const de_EventDetails = (output: any, context: __SerdeContext): EventDetails => {
  return {
    event: output.event != null ? de_Event(output.event, context) : undefined,
    eventDescription:
      output.eventDescription != null ? de_EventDescription(output.eventDescription, context) : undefined,
    eventMetadata: output.eventMetadata != null ? de_eventMetadata(output.eventMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EventDetailsErrorItem
 */
const de_EventDetailsErrorItem = (output: any, context: __SerdeContext): EventDetailsErrorItem => {
  return {
    errorMessage: __expectString(output.errorMessage),
    errorName: __expectString(output.errorName),
    eventArn: __expectString(output.eventArn),
  } as any;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1eventMetadata
 */
const de_eventMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1EventType
 */
const de_EventType = (output: any, context: __SerdeContext): EventType => {
  return {
    category: __expectString(output.category),
    code: __expectString(output.code),
    service: __expectString(output.service),
  } as any;
};

/**
 * deserializeAws_json1_1EventTypeList
 */
const de_EventTypeList = (output: any, context: __SerdeContext): EventType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidPaginationToken
 */
const de_InvalidPaginationToken = (output: any, context: __SerdeContext): InvalidPaginationToken => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem
 */
const de_OrganizationAffectedEntitiesErrorItem = (
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

/**
 * deserializeAws_json1_1OrganizationEvent
 */
const de_OrganizationEvent = (output: any, context: __SerdeContext): OrganizationEvent => {
  return {
    arn: __expectString(output.arn),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    eventScopeCode: __expectString(output.eventScopeCode),
    eventTypeCategory: __expectString(output.eventTypeCategory),
    eventTypeCode: __expectString(output.eventTypeCode),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    region: __expectString(output.region),
    service: __expectString(output.service),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationEventDetails
 */
const de_OrganizationEventDetails = (output: any, context: __SerdeContext): OrganizationEventDetails => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    event: output.event != null ? de_Event(output.event, context) : undefined,
    eventDescription:
      output.eventDescription != null ? de_EventDescription(output.eventDescription, context) : undefined,
    eventMetadata: output.eventMetadata != null ? de_eventMetadata(output.eventMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationEventDetailsErrorItem
 */
const de_OrganizationEventDetailsErrorItem = (
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

/**
 * deserializeAws_json1_1OrganizationEventList
 */
const de_OrganizationEventList = (output: any, context: __SerdeContext): OrganizationEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1tagSet
 */
const de_tagSet = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1UnsupportedLocale
 */
const de_UnsupportedLocale = (output: any, context: __SerdeContext): UnsupportedLocale => {
  return {
    message: __expectString(output.message),
  } as any;
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSHealth_20160804.${operation}`,
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
