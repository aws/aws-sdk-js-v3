// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  SlackChannelConfiguration,
  SlackWorkspaceConfiguration,
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/create-slack-channel-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.channelId != null && { channelId: input.channelId }),
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.channelRoleArn != null && { channelRoleArn: input.channelRoleArn }),
    ...(input.notifyOnAddCorrespondenceToCase != null && {
      notifyOnAddCorrespondenceToCase: input.notifyOnAddCorrespondenceToCase,
    }),
    ...(input.notifyOnCaseSeverity != null && { notifyOnCaseSeverity: input.notifyOnCaseSeverity }),
    ...(input.notifyOnCreateOrReopenCase != null && { notifyOnCreateOrReopenCase: input.notifyOnCreateOrReopenCase }),
    ...(input.notifyOnResolveCase != null && { notifyOnResolveCase: input.notifyOnResolveCase }),
    ...(input.teamId != null && { teamId: input.teamId }),
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
 * serializeAws_restJson1DeleteAccountAliasCommand
 */
export const se_DeleteAccountAliasCommand = async (
  input: DeleteAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/control/delete-account-alias";
  let body: any;
  body = "";
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
 * serializeAws_restJson1DeleteSlackChannelConfigurationCommand
 */
export const se_DeleteSlackChannelConfigurationCommand = async (
  input: DeleteSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/delete-slack-channel-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.channelId != null && { channelId: input.channelId }),
    ...(input.teamId != null && { teamId: input.teamId }),
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
 * serializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand
 */
export const se_DeleteSlackWorkspaceConfigurationCommand = async (
  input: DeleteSlackWorkspaceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/delete-slack-workspace-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.teamId != null && { teamId: input.teamId }),
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
 * serializeAws_restJson1GetAccountAliasCommand
 */
export const se_GetAccountAliasCommand = async (
  input: GetAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/control/get-account-alias";
  let body: any;
  body = "";
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
 * serializeAws_restJson1ListSlackChannelConfigurationsCommand
 */
export const se_ListSlackChannelConfigurationsCommand = async (
  input: ListSlackChannelConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/list-slack-channel-configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListSlackWorkspaceConfigurationsCommand
 */
export const se_ListSlackWorkspaceConfigurationsCommand = async (
  input: ListSlackWorkspaceConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/list-slack-workspace-configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1PutAccountAliasCommand
 */
export const se_PutAccountAliasCommand = async (
  input: PutAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/control/put-account-alias";
  let body: any;
  body = JSON.stringify({
    ...(input.accountAlias != null && { accountAlias: input.accountAlias }),
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
 * serializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand
 */
export const se_RegisterSlackWorkspaceForOrganizationCommand = async (
  input: RegisterSlackWorkspaceForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/register-slack-workspace-for-organization";
  let body: any;
  body = JSON.stringify({
    ...(input.teamId != null && { teamId: input.teamId }),
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
 * serializeAws_restJson1UpdateSlackChannelConfigurationCommand
 */
export const se_UpdateSlackChannelConfigurationCommand = async (
  input: UpdateSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/control/update-slack-channel-configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.channelId != null && { channelId: input.channelId }),
    ...(input.channelName != null && { channelName: input.channelName }),
    ...(input.channelRoleArn != null && { channelRoleArn: input.channelRoleArn }),
    ...(input.notifyOnAddCorrespondenceToCase != null && {
      notifyOnAddCorrespondenceToCase: input.notifyOnAddCorrespondenceToCase,
    }),
    ...(input.notifyOnCaseSeverity != null && { notifyOnCaseSeverity: input.notifyOnCaseSeverity }),
    ...(input.notifyOnCreateOrReopenCase != null && { notifyOnCreateOrReopenCase: input.notifyOnCreateOrReopenCase }),
    ...(input.notifyOnResolveCase != null && { notifyOnResolveCase: input.notifyOnResolveCase }),
    ...(input.teamId != null && { teamId: input.teamId }),
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
 * deserializeAws_restJson1CreateSlackChannelConfigurationCommand
 */
export const de_CreateSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSlackChannelConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSlackChannelConfigurationCommandError
 */
const de_CreateSlackChannelConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlackChannelConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAccountAliasCommand
 */
export const de_DeleteAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAccountAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountAliasCommandError
 */
const de_DeleteAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.supportapp#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.supportapp#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.supportapp#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSlackChannelConfigurationCommand
 */
export const de_DeleteSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSlackChannelConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackChannelConfigurationCommandError
 */
const de_DeleteSlackChannelConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackChannelConfigurationCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.supportapp#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supportapp#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand
 */
export const de_DeleteSlackWorkspaceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackWorkspaceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSlackWorkspaceConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackWorkspaceConfigurationCommandError
 */
const de_DeleteSlackWorkspaceConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackWorkspaceConfigurationCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.supportapp#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supportapp#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAccountAliasCommand
 */
export const de_GetAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccountAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accountAlias != null) {
    contents.accountAlias = __expectString(data.accountAlias);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountAliasCommandError
 */
const de_GetAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.supportapp#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSlackChannelConfigurationsCommand
 */
export const de_ListSlackChannelConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlackChannelConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSlackChannelConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slackChannelConfigurations != null) {
    contents.slackChannelConfigurations = de_slackChannelConfigurationList(data.slackChannelConfigurations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSlackChannelConfigurationsCommandError
 */
const de_ListSlackChannelConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlackChannelConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.supportapp#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.supportapp#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSlackWorkspaceConfigurationsCommand
 */
export const de_ListSlackWorkspaceConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlackWorkspaceConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSlackWorkspaceConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slackWorkspaceConfigurations != null) {
    contents.slackWorkspaceConfigurations = de_SlackWorkspaceConfigurationList(
      data.slackWorkspaceConfigurations,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSlackWorkspaceConfigurationsCommandError
 */
const de_ListSlackWorkspaceConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlackWorkspaceConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.supportapp#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.supportapp#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutAccountAliasCommand
 */
export const de_PutAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountAliasCommandError
 */
const de_PutAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.supportapp#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.supportapp#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supportapp#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommand
 */
export const de_RegisterSlackWorkspaceForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterSlackWorkspaceForOrganizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accountType != null) {
    contents.accountType = __expectString(data.accountType);
  }
  if (data.teamId != null) {
    contents.teamId = __expectString(data.teamId);
  }
  if (data.teamName != null) {
    contents.teamName = __expectString(data.teamName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterSlackWorkspaceForOrganizationCommandError
 */
const de_RegisterSlackWorkspaceForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.supportapp#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supportapp#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSlackChannelConfigurationCommand
 */
export const de_UpdateSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSlackChannelConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channelId != null) {
    contents.channelId = __expectString(data.channelId);
  }
  if (data.channelName != null) {
    contents.channelName = __expectString(data.channelName);
  }
  if (data.channelRoleArn != null) {
    contents.channelRoleArn = __expectString(data.channelRoleArn);
  }
  if (data.notifyOnAddCorrespondenceToCase != null) {
    contents.notifyOnAddCorrespondenceToCase = __expectBoolean(data.notifyOnAddCorrespondenceToCase);
  }
  if (data.notifyOnCaseSeverity != null) {
    contents.notifyOnCaseSeverity = __expectString(data.notifyOnCaseSeverity);
  }
  if (data.notifyOnCreateOrReopenCase != null) {
    contents.notifyOnCreateOrReopenCase = __expectBoolean(data.notifyOnCreateOrReopenCase);
  }
  if (data.notifyOnResolveCase != null) {
    contents.notifyOnResolveCase = __expectBoolean(data.notifyOnResolveCase);
  }
  if (data.teamId != null) {
    contents.teamId = __expectString(data.teamId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSlackChannelConfigurationCommandError
 */
const de_UpdateSlackChannelConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlackChannelConfigurationCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.supportapp#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.supportapp#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SlackChannelConfiguration
 */
const de_SlackChannelConfiguration = (output: any, context: __SerdeContext): SlackChannelConfiguration => {
  return {
    channelId: __expectString(output.channelId),
    channelName: __expectString(output.channelName),
    channelRoleArn: __expectString(output.channelRoleArn),
    notifyOnAddCorrespondenceToCase: __expectBoolean(output.notifyOnAddCorrespondenceToCase),
    notifyOnCaseSeverity: __expectString(output.notifyOnCaseSeverity),
    notifyOnCreateOrReopenCase: __expectBoolean(output.notifyOnCreateOrReopenCase),
    notifyOnResolveCase: __expectBoolean(output.notifyOnResolveCase),
    teamId: __expectString(output.teamId),
  } as any;
};

/**
 * deserializeAws_restJson1slackChannelConfigurationList
 */
const de_slackChannelConfigurationList = (output: any, context: __SerdeContext): SlackChannelConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlackChannelConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlackWorkspaceConfiguration
 */
const de_SlackWorkspaceConfiguration = (output: any, context: __SerdeContext): SlackWorkspaceConfiguration => {
  return {
    allowOrganizationMemberAccount: __expectBoolean(output.allowOrganizationMemberAccount),
    teamId: __expectString(output.teamId),
    teamName: __expectString(output.teamName),
  } as any;
};

/**
 * deserializeAws_restJson1SlackWorkspaceConfigurationList
 */
const de_SlackWorkspaceConfigurationList = (output: any, context: __SerdeContext): SlackWorkspaceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlackWorkspaceConfiguration(entry, context);
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
