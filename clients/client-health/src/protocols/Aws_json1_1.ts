// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
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
  DescribeEntityAggregatesForOrganizationCommandInput,
  DescribeEntityAggregatesForOrganizationCommandOutput,
} from "../commands/DescribeEntityAggregatesForOrganizationCommand";
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
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationResponse,
  DescribeAffectedEntitiesRequest,
  DescribeAffectedEntitiesResponse,
  DescribeEntityAggregatesForOrganizationRequest,
  DescribeEntityAggregatesRequest,
  DescribeEventAggregatesRequest,
  DescribeEventDetailsForOrganizationRequest,
  DescribeEventDetailsForOrganizationResponse,
  DescribeEventDetailsRequest,
  DescribeEventDetailsResponse,
  DescribeEventsForOrganizationRequest,
  DescribeEventsForOrganizationResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeEventTypesRequest,
  EntityAccountFilter,
  EntityFilter,
  EntityStatusCode,
  Event,
  EventAccountFilter,
  EventDetails,
  EventFilter,
  EventStatusCode,
  EventTypeCategory,
  EventTypeFilter,
  InvalidPaginationToken,
  OrganizationEvent,
  OrganizationEventDetails,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntityAggregatesForOrganizationCommand
 */
export const se_DescribeEntityAggregatesForOrganizationCommand = async (
  input: DescribeEntityAggregatesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntityAggregatesForOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: DescribeAffectedAccountsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeEntityAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEntityAggregatesForOrganizationCommand
 */
export const de_DescribeEntityAggregatesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntityAggregatesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEntityAggregatesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEntityAggregatesForOrganizationCommandError
 */
const de_DescribeEntityAggregatesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityAggregatesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: DescribeEventAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeHealthServiceStatusForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedLocale({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_availabilityZones omitted.

// se_awsAccountIdsList omitted.

/**
 * serializeAws_json1_1DateTimeRange
 */
const se_DateTimeRange = (input: DateTimeRange, context: __SerdeContext): any => {
  return take(input, {
    from: (_) => Math.round(_.getTime() / 1000),
    to: (_) => Math.round(_.getTime() / 1000),
  });
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

// se_DescribeAffectedAccountsForOrganizationRequest omitted.

// se_DescribeAffectedEntitiesForOrganizationRequest omitted.

/**
 * serializeAws_json1_1DescribeAffectedEntitiesRequest
 */
const se_DescribeAffectedEntitiesRequest = (input: DescribeAffectedEntitiesRequest, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_EntityFilter(_, context),
    locale: [],
    maxResults: [],
    nextToken: [],
  });
};

// se_DescribeEntityAggregatesForOrganizationRequest omitted.

// se_DescribeEntityAggregatesRequest omitted.

/**
 * serializeAws_json1_1DescribeEventAggregatesRequest
 */
const se_DescribeEventAggregatesRequest = (input: DescribeEventAggregatesRequest, context: __SerdeContext): any => {
  return take(input, {
    aggregateField: [],
    filter: (_) => se_EventFilter(_, context),
    maxResults: [],
    nextToken: [],
  });
};

// se_DescribeEventDetailsForOrganizationRequest omitted.

// se_DescribeEventDetailsRequest omitted.

/**
 * serializeAws_json1_1DescribeEventsForOrganizationRequest
 */
const se_DescribeEventsForOrganizationRequest = (
  input: DescribeEventsForOrganizationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    filter: (_) => se_OrganizationEventFilter(_, context),
    locale: [],
    maxResults: [],
    nextToken: [],
  });
};

/**
 * serializeAws_json1_1DescribeEventsRequest
 */
const se_DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_EventFilter(_, context),
    locale: [],
    maxResults: [],
    nextToken: [],
  });
};

// se_DescribeEventTypesRequest omitted.

// se_EntityAccountFilter omitted.

// se_entityArnList omitted.

/**
 * serializeAws_json1_1EntityFilter
 */
const se_EntityFilter = (input: EntityFilter, context: __SerdeContext): any => {
  return take(input, {
    entityArns: _json,
    entityValues: _json,
    eventArns: _json,
    lastUpdatedTimes: (_) => se_dateTimeRangeList(_, context),
    statusCodes: _json,
    tags: _json,
  });
};

// se_entityStatusCodeList omitted.

// se_entityValueList omitted.

// se_EventAccountFilter omitted.

// se_eventArnList omitted.

// se_EventArnsList omitted.

/**
 * serializeAws_json1_1EventFilter
 */
const se_EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return take(input, {
    availabilityZones: _json,
    endTimes: (_) => se_dateTimeRangeList(_, context),
    entityArns: _json,
    entityValues: _json,
    eventArns: _json,
    eventStatusCodes: _json,
    eventTypeCategories: _json,
    eventTypeCodes: _json,
    lastUpdatedTimes: (_) => se_dateTimeRangeList(_, context),
    regions: _json,
    services: _json,
    startTimes: (_) => se_dateTimeRangeList(_, context),
    tags: _json,
  });
};

// se_eventStatusCodeList omitted.

// se_EventTypeCategoryList omitted.

// se_eventTypeCategoryList2 omitted.

// se_EventTypeCodeList omitted.

// se_EventTypeFilter omitted.

// se_eventTypeList2 omitted.

// se_OrganizationAccountIdsList omitted.

// se_OrganizationEntityAccountFiltersList omitted.

// se_OrganizationEntityFiltersList omitted.

// se_OrganizationEventArnsList omitted.

// se_OrganizationEventDetailFiltersList omitted.

/**
 * serializeAws_json1_1OrganizationEventFilter
 */
const se_OrganizationEventFilter = (input: OrganizationEventFilter, context: __SerdeContext): any => {
  return take(input, {
    awsAccountIds: _json,
    endTime: (_) => se_DateTimeRange(_, context),
    entityArns: _json,
    entityValues: _json,
    eventStatusCodes: _json,
    eventTypeCategories: _json,
    eventTypeCodes: _json,
    lastUpdatedTime: (_) => se_DateTimeRange(_, context),
    regions: _json,
    services: _json,
    startTime: (_) => se_DateTimeRange(_, context),
  });
};

// se_regionList omitted.

// se_serviceList omitted.

// se_tagFilter omitted.

// se_tagSet omitted.

// de_AccountEntityAggregate omitted.

// de_AccountEntityAggregatesList omitted.

// de_affectedAccountsList omitted.

/**
 * deserializeAws_json1_1AffectedEntity
 */
const de_AffectedEntity = (output: any, context: __SerdeContext): AffectedEntity => {
  return take(output, {
    awsAccountId: __expectString,
    entityArn: __expectString,
    entityUrl: __expectString,
    entityValue: __expectString,
    eventArn: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    statusCode: __expectString,
    tags: _json,
  }) as any;
};

// de_ConcurrentModificationException omitted.

// de_DescribeAffectedAccountsForOrganizationResponse omitted.

// de_DescribeAffectedEntitiesForOrganizationFailedSet omitted.

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse
 */
const de_DescribeAffectedEntitiesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesForOrganizationResponse => {
  return take(output, {
    entities: (_: any) => de_EntityList(_, context),
    failedSet: _json,
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAffectedEntitiesResponse
 */
const de_DescribeAffectedEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAffectedEntitiesResponse => {
  return take(output, {
    entities: (_: any) => de_EntityList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_DescribeEntityAggregatesForOrganizationResponse omitted.

// de_DescribeEntityAggregatesResponse omitted.

// de_DescribeEventAggregatesResponse omitted.

// de_DescribeEventDetailsFailedSet omitted.

// de_DescribeEventDetailsForOrganizationFailedSet omitted.

/**
 * deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse
 */
const de_DescribeEventDetailsForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventDetailsForOrganizationResponse => {
  return take(output, {
    failedSet: _json,
    successfulSet: (_: any) => de_DescribeEventDetailsForOrganizationSuccessfulSet(_, context),
  }) as any;
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
      return de_OrganizationEventDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsResponse
 */
const de_DescribeEventDetailsResponse = (output: any, context: __SerdeContext): DescribeEventDetailsResponse => {
  return take(output, {
    failedSet: _json,
    successfulSet: (_: any) => de_DescribeEventDetailsSuccessfulSet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventDetailsSuccessfulSet
 */
const de_DescribeEventDetailsSuccessfulSet = (output: any, context: __SerdeContext): EventDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    events: (_: any) => de_OrganizationEventList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return take(output, {
    events: (_: any) => de_EventList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_DescribeEventTypesResponse omitted.

// de_DescribeHealthServiceStatusForOrganizationResponse omitted.

// de_EntityAggregate omitted.

// de_EntityAggregateList omitted.

/**
 * deserializeAws_json1_1EntityList
 */
const de_EntityList = (output: any, context: __SerdeContext): AffectedEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AffectedEntity(entry, context);
    });
  return retVal;
};

// de_entityStatuses omitted.

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    arn: __expectString,
    availabilityZone: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventScopeCode: __expectString,
    eventTypeCategory: __expectString,
    eventTypeCode: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    region: __expectString,
    service: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    statusCode: __expectString,
  }) as any;
};

// de_EventAggregate omitted.

// de_EventAggregateList omitted.

// de_EventDescription omitted.

/**
 * deserializeAws_json1_1EventDetails
 */
const de_EventDetails = (output: any, context: __SerdeContext): EventDetails => {
  return take(output, {
    event: (_: any) => de_Event(_, context),
    eventDescription: _json,
    eventMetadata: _json,
  }) as any;
};

// de_EventDetailsErrorItem omitted.

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_eventMetadata omitted.

// de_EventType omitted.

// de_EventTypeList omitted.

// de_InvalidPaginationToken omitted.

// de_OrganizationAffectedEntitiesErrorItem omitted.

// de_OrganizationEntityAggregate omitted.

// de_OrganizationEntityAggregatesList omitted.

/**
 * deserializeAws_json1_1OrganizationEvent
 */
const de_OrganizationEvent = (output: any, context: __SerdeContext): OrganizationEvent => {
  return take(output, {
    arn: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventScopeCode: __expectString,
    eventTypeCategory: __expectString,
    eventTypeCode: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    region: __expectString,
    service: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    statusCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OrganizationEventDetails
 */
const de_OrganizationEventDetails = (output: any, context: __SerdeContext): OrganizationEventDetails => {
  return take(output, {
    awsAccountId: __expectString,
    event: (_: any) => de_Event(_, context),
    eventDescription: _json,
    eventMetadata: _json,
  }) as any;
};

// de_OrganizationEventDetailsErrorItem omitted.

/**
 * deserializeAws_json1_1OrganizationEventList
 */
const de_OrganizationEventList = (output: any, context: __SerdeContext): OrganizationEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrganizationEvent(entry, context);
    });
  return retVal;
};

// de_tagSet omitted.

// de_UnsupportedLocale omitted.

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
