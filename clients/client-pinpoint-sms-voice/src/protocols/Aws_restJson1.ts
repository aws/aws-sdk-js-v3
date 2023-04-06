// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "../commands/SendVoiceMessageCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import {
  AlreadyExistsException,
  BadRequestException,
  CallInstructionsMessageType,
  CloudWatchLogsDestination,
  EventDestination,
  EventDestinationDefinition,
  EventType,
  InternalServiceErrorException,
  KinesisFirehoseDestination,
  LimitExceededException,
  NotFoundException,
  PlainTextMessageType,
  SnsDestination,
  SSMLMessageType,
  TooManyRequestsException,
  VoiceMessageContent,
} from "../models/models_0";
import { PinpointSMSVoiceServiceException as __BaseException } from "../models/PinpointSMSVoiceServiceException";

/**
 * serializeAws_restJson1CreateConfigurationSetCommand
 */
export const se_CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/sms-voice/configuration-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const se_CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination != null && {
      EventDestination: se_EventDestinationDefinition(input.EventDestination, context),
    }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteConfigurationSetCommand
 */
export const se_DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const se_DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventDestinationName",
    () => input.EventDestinationName!,
    "{EventDestinationName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const se_GetConfigurationSetEventDestinationsCommand = async (
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListConfigurationSetsCommand
 */
export const se_ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/sms-voice/configuration-sets";
  const query: any = map({
    NextToken: [, input.NextToken!],
    PageSize: [, input.PageSize!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SendVoiceMessageCommand
 */
export const se_SendVoiceMessageCommand = async (
  input: SendVoiceMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/sms-voice/voice/message";
  let body: any;
  body = JSON.stringify({
    ...(input.CallerId != null && { CallerId: input.CallerId }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Content != null && { Content: se_VoiceMessageContent(input.Content, context) }),
    ...(input.DestinationPhoneNumber != null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
    ...(input.OriginationPhoneNumber != null && { OriginationPhoneNumber: input.OriginationPhoneNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const se_UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationSetName",
    () => input.ConfigurationSetName!,
    "{ConfigurationSetName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventDestinationName",
    () => input.EventDestinationName!,
    "{EventDestinationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination != null && {
      EventDestination: se_EventDestinationDefinition(input.EventDestination, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationSetCommandError
 */
const de_CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointsmsvoice#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.pinpointsmsvoice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const de_CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError
 */
const de_CreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointsmsvoice#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.pinpointsmsvoice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConfigurationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetCommandError
 */
const de_DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const de_DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError
 */
const de_DeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const de_GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigurationSetEventDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventDestinations != null) {
    contents.EventDestinations = de_EventDestinations(data.EventDestinations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError
 */
const de_GetConfigurationSetEventDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigurationSetsCommand
 */
export const de_ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSets != null) {
    contents.ConfigurationSets = de_ConfigurationSets(data.ConfigurationSets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationSetsCommandError
 */
const de_ListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SendVoiceMessageCommand
 */
export const de_SendVoiceMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendVoiceMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SendVoiceMessageCommandError
 */
const de_SendVoiceMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const de_UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError
 */
const de_UpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1CallInstructionsMessageType
 */
const se_CallInstructionsMessageType = (input: CallInstructionsMessageType, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_restJson1CloudWatchLogsDestination
 */
const se_CloudWatchLogsDestination = (input: CloudWatchLogsDestination, context: __SerdeContext): any => {
  return {
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
  };
};

/**
 * serializeAws_restJson1EventDestinationDefinition
 */
const se_EventDestinationDefinition = (input: EventDestinationDefinition, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsDestination != null && {
      CloudWatchLogsDestination: se_CloudWatchLogsDestination(input.CloudWatchLogsDestination, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: se_KinesisFirehoseDestination(input.KinesisFirehoseDestination, context),
    }),
    ...(input.MatchingEventTypes != null && { MatchingEventTypes: se_EventTypes(input.MatchingEventTypes, context) }),
    ...(input.SnsDestination != null && { SnsDestination: se_SnsDestination(input.SnsDestination, context) }),
  };
};

/**
 * serializeAws_restJson1EventTypes
 */
const se_EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1KinesisFirehoseDestination
 */
const se_KinesisFirehoseDestination = (input: KinesisFirehoseDestination, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamArn != null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
  };
};

/**
 * serializeAws_restJson1PlainTextMessageType
 */
const se_PlainTextMessageType = (input: PlainTextMessageType, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  };
};

/**
 * serializeAws_restJson1SnsDestination
 */
const se_SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

/**
 * serializeAws_restJson1SSMLMessageType
 */
const se_SSMLMessageType = (input: SSMLMessageType, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  };
};

/**
 * serializeAws_restJson1VoiceMessageContent
 */
const se_VoiceMessageContent = (input: VoiceMessageContent, context: __SerdeContext): any => {
  return {
    ...(input.CallInstructionsMessage != null && {
      CallInstructionsMessage: se_CallInstructionsMessageType(input.CallInstructionsMessage, context),
    }),
    ...(input.PlainTextMessage != null && {
      PlainTextMessage: se_PlainTextMessageType(input.PlainTextMessage, context),
    }),
    ...(input.SSMLMessage != null && { SSMLMessage: se_SSMLMessageType(input.SSMLMessage, context) }),
  };
};

/**
 * deserializeAws_restJson1CloudWatchLogsDestination
 */
const de_CloudWatchLogsDestination = (output: any, context: __SerdeContext): CloudWatchLogsDestination => {
  return {
    IamRoleArn: __expectString(output.IamRoleArn),
    LogGroupArn: __expectString(output.LogGroupArn),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationSets
 */
const de_ConfigurationSets = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EventDestination
 */
const de_EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchLogsDestination:
      output.CloudWatchLogsDestination != null
        ? de_CloudWatchLogsDestination(output.CloudWatchLogsDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination != null
        ? de_KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes != null ? de_EventTypes(output.MatchingEventTypes, context) : undefined,
    Name: __expectString(output.Name),
    SnsDestination: output.SnsDestination != null ? de_SnsDestination(output.SnsDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventDestinations
 */
const de_EventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventTypes
 */
const de_EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
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
 * deserializeAws_restJson1KinesisFirehoseDestination
 */
const de_KinesisFirehoseDestination = (output: any, context: __SerdeContext): KinesisFirehoseDestination => {
  return {
    DeliveryStreamArn: __expectString(output.DeliveryStreamArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1SnsDestination
 */
const de_SnsDestination = (output: any, context: __SerdeContext): SnsDestination => {
  return {
    TopicArn: __expectString(output.TopicArn),
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
