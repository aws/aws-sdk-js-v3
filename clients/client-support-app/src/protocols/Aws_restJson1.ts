// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreateSlackChannelConfigurationCommandInput,
  CreateSlackChannelConfigurationCommandOutput,
} from "../commands/CreateSlackChannelConfigurationCommand";
import { DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput } from "../commands/DeleteAccountAliasCommand";
import {
  DeleteSlackChannelConfigurationCommandInput,
  DeleteSlackChannelConfigurationCommandOutput,
} from "../commands/DeleteSlackChannelConfigurationCommand";
import {
  DeleteSlackWorkspaceConfigurationCommandInput,
  DeleteSlackWorkspaceConfigurationCommandOutput,
} from "../commands/DeleteSlackWorkspaceConfigurationCommand";
import { GetAccountAliasCommandInput, GetAccountAliasCommandOutput } from "../commands/GetAccountAliasCommand";
import {
  ListSlackChannelConfigurationsCommandInput,
  ListSlackChannelConfigurationsCommandOutput,
} from "../commands/ListSlackChannelConfigurationsCommand";
import {
  ListSlackWorkspaceConfigurationsCommandInput,
  ListSlackWorkspaceConfigurationsCommandOutput,
} from "../commands/ListSlackWorkspaceConfigurationsCommand";
import { PutAccountAliasCommandInput, PutAccountAliasCommandOutput } from "../commands/PutAccountAliasCommand";
import {
  RegisterSlackWorkspaceForOrganizationCommandInput,
  RegisterSlackWorkspaceForOrganizationCommandOutput,
} from "../commands/RegisterSlackWorkspaceForOrganizationCommand";
import {
  UpdateSlackChannelConfigurationCommandInput,
  UpdateSlackChannelConfigurationCommandOutput,
} from "../commands/UpdateSlackChannelConfigurationCommand";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ValidationException,
} from "../models/models_0";
import { SupportAppServiceException as __BaseException } from "../models/SupportAppServiceException";

/**
 * serializeAws_restJson1CreateSlackChannelConfigurationCommand
 */
export const se_CreateSlackChannelConfigurationCommand = async (
  input: CreateSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/create-slack-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelId: [],
      channelName: [],
      channelRoleArn: [],
      notifyOnAddCorrespondenceToCase: [],
      notifyOnCaseSeverity: [],
      notifyOnCreateOrReopenCase: [],
      notifyOnResolveCase: [],
      teamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccountAliasCommand
 */
export const se_DeleteAccountAliasCommand = async (
  input: DeleteAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/control/delete-account-alias");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSlackChannelConfigurationCommand
 */
export const se_DeleteSlackChannelConfigurationCommand = async (
  input: DeleteSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/delete-slack-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelId: [],
      teamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand
 */
export const se_DeleteSlackWorkspaceConfigurationCommand = async (
  input: DeleteSlackWorkspaceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/delete-slack-workspace-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      teamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountAliasCommand
 */
export const se_GetAccountAliasCommand = async (
  input: GetAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/control/get-account-alias");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSlackChannelConfigurationsCommand
 */
export const se_ListSlackChannelConfigurationsCommand = async (
  input: ListSlackChannelConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/list-slack-channel-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSlackWorkspaceConfigurationsCommand
 */
export const se_ListSlackWorkspaceConfigurationsCommand = async (
  input: ListSlackWorkspaceConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/list-slack-workspace-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountAliasCommand
 */
export const se_PutAccountAliasCommand = async (
  input: PutAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/put-account-alias");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountAlias: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand
 */
export const se_RegisterSlackWorkspaceForOrganizationCommand = async (
  input: RegisterSlackWorkspaceForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/register-slack-workspace-for-organization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      teamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSlackChannelConfigurationCommand
 */
export const se_UpdateSlackChannelConfigurationCommand = async (
  input: UpdateSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/control/update-slack-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelId: [],
      channelName: [],
      channelRoleArn: [],
      notifyOnAddCorrespondenceToCase: [],
      notifyOnCaseSeverity: [],
      notifyOnCreateOrReopenCase: [],
      notifyOnResolveCase: [],
      teamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateSlackChannelConfigurationCommand
 */
export const de_CreateSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountAliasCommand
 */
export const de_DeleteAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackChannelConfigurationCommand
 */
export const de_DeleteSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand
 */
export const de_DeleteSlackWorkspaceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackWorkspaceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountAliasCommand
 */
export const de_GetAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountAlias: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSlackChannelConfigurationsCommand
 */
export const de_ListSlackChannelConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlackChannelConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    slackChannelConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSlackWorkspaceConfigurationsCommand
 */
export const de_ListSlackWorkspaceConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlackWorkspaceConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    slackWorkspaceConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountAliasCommand
 */
export const de_PutAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand
 */
export const de_RegisterSlackWorkspaceForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountType: __expectString,
    teamId: __expectString,
    teamName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSlackChannelConfigurationCommand
 */
export const de_UpdateSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channelId: __expectString,
    channelName: __expectString,
    channelRoleArn: __expectString,
    notifyOnAddCorrespondenceToCase: __expectBoolean,
    notifyOnCaseSeverity: __expectString,
    notifyOnCreateOrReopenCase: __expectBoolean,
    notifyOnResolveCase: __expectBoolean,
    teamId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.supportapp#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.supportapp#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.supportapp#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.supportapp#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supportapp#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.supportapp#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// de_SlackChannelConfiguration omitted.

// de_slackChannelConfigurationList omitted.

// de_SlackWorkspaceConfiguration omitted.

// de_SlackWorkspaceConfigurationList omitted.

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
