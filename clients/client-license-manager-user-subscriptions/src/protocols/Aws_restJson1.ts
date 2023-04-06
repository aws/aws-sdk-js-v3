// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AssociateUserCommandInput, AssociateUserCommandOutput } from "../commands/AssociateUserCommand";
import {
  DeregisterIdentityProviderCommandInput,
  DeregisterIdentityProviderCommandOutput,
} from "../commands/DeregisterIdentityProviderCommand";
import { DisassociateUserCommandInput, DisassociateUserCommandOutput } from "../commands/DisassociateUserCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import {
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput,
} from "../commands/ListProductSubscriptionsCommand";
import {
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput,
} from "../commands/ListUserAssociationsCommand";
import {
  RegisterIdentityProviderCommandInput,
  RegisterIdentityProviderCommandOutput,
} from "../commands/RegisterIdentityProviderCommand";
import {
  StartProductSubscriptionCommandInput,
  StartProductSubscriptionCommandOutput,
} from "../commands/StartProductSubscriptionCommand";
import {
  StopProductSubscriptionCommandInput,
  StopProductSubscriptionCommandOutput,
} from "../commands/StopProductSubscriptionCommand";
import {
  UpdateIdentityProviderSettingsCommandInput,
  UpdateIdentityProviderSettingsCommandOutput,
} from "../commands/UpdateIdentityProviderSettingsCommand";
import { LicenseManagerUserSubscriptionsServiceException as __BaseException } from "../models/LicenseManagerUserSubscriptionsServiceException";
import {
  AccessDeniedException,
  ActiveDirectoryIdentityProvider,
  ConflictException,
  Filter,
  IdentityProvider,
  IdentityProviderSummary,
  InstanceSummary,
  InstanceUserSummary,
  InternalServerException,
  ProductUserSummary,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Settings,
  ThrottlingException,
  UpdateSettings,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateUserCommand
 */
export const se_AssociateUserCommand = async (
  input: AssociateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/AssociateUser";
  let body: any;
  body = JSON.stringify({
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Username != null && { Username: input.Username }),
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
 * serializeAws_restJson1DeregisterIdentityProviderCommand
 */
export const se_DeregisterIdentityProviderCommand = async (
  input: DeregisterIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identity-provider/DeregisterIdentityProvider";
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.Product != null && { Product: input.Product }),
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
 * serializeAws_restJson1DisassociateUserCommand
 */
export const se_DisassociateUserCommand = async (
  input: DisassociateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/DisassociateUser";
  let body: any;
  body = JSON.stringify({
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Username != null && { Username: input.Username }),
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
 * serializeAws_restJson1ListIdentityProvidersCommand
 */
export const se_ListIdentityProvidersCommand = async (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identity-provider/ListIdentityProviders";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/instance/ListInstances";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListProductSubscriptionsCommand
 */
export const se_ListProductSubscriptionsCommand = async (
  input: ListProductSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/ListProductSubscriptions";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Product != null && { Product: input.Product }),
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
 * serializeAws_restJson1ListUserAssociationsCommand
 */
export const se_ListUserAssociationsCommand = async (
  input: ListUserAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/ListUserAssociations";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1RegisterIdentityProviderCommand
 */
export const se_RegisterIdentityProviderCommand = async (
  input: RegisterIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identity-provider/RegisterIdentityProvider";
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.Product != null && { Product: input.Product }),
    ...(input.Settings != null && { Settings: se_Settings(input.Settings, context) }),
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
 * serializeAws_restJson1StartProductSubscriptionCommand
 */
export const se_StartProductSubscriptionCommand = async (
  input: StartProductSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/StartProductSubscription";
  let body: any;
  body = JSON.stringify({
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.Product != null && { Product: input.Product }),
    ...(input.Username != null && { Username: input.Username }),
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
 * serializeAws_restJson1StopProductSubscriptionCommand
 */
export const se_StopProductSubscriptionCommand = async (
  input: StopProductSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/user/StopProductSubscription";
  let body: any;
  body = JSON.stringify({
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.Product != null && { Product: input.Product }),
    ...(input.Username != null && { Username: input.Username }),
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
 * serializeAws_restJson1UpdateIdentityProviderSettingsCommand
 */
export const se_UpdateIdentityProviderSettingsCommand = async (
  input: UpdateIdentityProviderSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identity-provider/UpdateIdentityProviderSettings";
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityProvider != null && { IdentityProvider: se_IdentityProvider(input.IdentityProvider, context) }),
    ...(input.Product != null && { Product: input.Product }),
    ...(input.UpdateSettings != null && { UpdateSettings: se_UpdateSettings(input.UpdateSettings, context) }),
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
 * deserializeAws_restJson1AssociateUserCommand
 */
export const de_AssociateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceUserSummary != null) {
    contents.InstanceUserSummary = de_InstanceUserSummary(data.InstanceUserSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserCommandError
 */
const de_AssociateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1DeregisterIdentityProviderCommand
 */
export const de_DeregisterIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityProviderSummary != null) {
    contents.IdentityProviderSummary = de_IdentityProviderSummary(data.IdentityProviderSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterIdentityProviderCommandError
 */
const de_DeregisterIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1DisassociateUserCommand
 */
export const de_DisassociateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceUserSummary != null) {
    contents.InstanceUserSummary = de_InstanceUserSummary(data.InstanceUserSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserCommandError
 */
const de_DisassociateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1ListIdentityProvidersCommand
 */
export const de_ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdentityProvidersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityProviderSummaries != null) {
    contents.IdentityProviderSummaries = de_IdentityProviderSummaryList(data.IdentityProviderSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityProvidersCommandError
 */
const de_ListIdentityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceSummaries != null) {
    contents.InstanceSummaries = de_InstanceSummaryList(data.InstanceSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInstancesCommandError
 */
const de_ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1ListProductSubscriptionsCommand
 */
export const de_ListProductSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProductSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProductSubscriptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProductUserSummaries != null) {
    contents.ProductUserSummaries = de_ProductUserSummaryList(data.ProductUserSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProductSubscriptionsCommandError
 */
const de_ListProductSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProductSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1ListUserAssociationsCommand
 */
export const de_ListUserAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUserAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceUserSummaries != null) {
    contents.InstanceUserSummaries = de_InstanceUserSummaryList(data.InstanceUserSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUserAssociationsCommandError
 */
const de_ListUserAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1RegisterIdentityProviderCommand
 */
export const de_RegisterIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityProviderSummary != null) {
    contents.IdentityProviderSummary = de_IdentityProviderSummary(data.IdentityProviderSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterIdentityProviderCommandError
 */
const de_RegisterIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1StartProductSubscriptionCommand
 */
export const de_StartProductSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProductSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartProductSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProductUserSummary != null) {
    contents.ProductUserSummary = de_ProductUserSummary(data.ProductUserSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartProductSubscriptionCommandError
 */
const de_StartProductSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProductSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1StopProductSubscriptionCommand
 */
export const de_StopProductSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProductSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopProductSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProductUserSummary != null) {
    contents.ProductUserSummary = de_ProductUserSummary(data.ProductUserSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopProductSubscriptionCommandError
 */
const de_StopProductSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProductSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.licensemanagerusersubscriptions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerusersubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.licensemanagerusersubscriptions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1UpdateIdentityProviderSettingsCommand
 */
export const de_UpdateIdentityProviderSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIdentityProviderSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityProviderSummary != null) {
    contents.IdentityProviderSummary = de_IdentityProviderSummary(data.IdentityProviderSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdentityProviderSettingsCommandError
 */
const de_UpdateIdentityProviderSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.licensemanagerusersubscriptions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.licensemanagerusersubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerusersubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerusersubscriptions#ValidationException":
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
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
 * serializeAws_restJson1ActiveDirectoryIdentityProvider
 */
const se_ActiveDirectoryIdentityProvider = (input: ActiveDirectoryIdentityProvider, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Attribute != null && { Attribute: input.Attribute }),
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1IdentityProvider
 */
const se_IdentityProvider = (input: IdentityProvider, context: __SerdeContext): any => {
  return IdentityProvider.visit(input, {
    ActiveDirectoryIdentityProvider: (value) => ({
      ActiveDirectoryIdentityProvider: se_ActiveDirectoryIdentityProvider(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1Settings
 */
const se_Settings = (input: Settings, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupId != null && { SecurityGroupId: input.SecurityGroupId }),
    ...(input.Subnets != null && { Subnets: se_Subnets(input.Subnets, context) }),
  };
};

/**
 * serializeAws_restJson1Subnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1UpdateSettings
 */
const se_UpdateSettings = (input: UpdateSettings, context: __SerdeContext): any => {
  return {
    ...(input.AddSubnets != null && { AddSubnets: se_Subnets(input.AddSubnets, context) }),
    ...(input.RemoveSubnets != null && { RemoveSubnets: se_Subnets(input.RemoveSubnets, context) }),
    ...(input.SecurityGroupId != null && { SecurityGroupId: input.SecurityGroupId }),
  };
};

/**
 * deserializeAws_restJson1ActiveDirectoryIdentityProvider
 */
const de_ActiveDirectoryIdentityProvider = (output: any, context: __SerdeContext): ActiveDirectoryIdentityProvider => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityProvider
 */
const de_IdentityProvider = (output: any, context: __SerdeContext): IdentityProvider => {
  if (output.ActiveDirectoryIdentityProvider != null) {
    return {
      ActiveDirectoryIdentityProvider: de_ActiveDirectoryIdentityProvider(
        output.ActiveDirectoryIdentityProvider,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1IdentityProviderSummary
 */
const de_IdentityProviderSummary = (output: any, context: __SerdeContext): IdentityProviderSummary => {
  return {
    FailureMessage: __expectString(output.FailureMessage),
    IdentityProvider:
      output.IdentityProvider != null
        ? de_IdentityProvider(__expectUnion(output.IdentityProvider), context)
        : undefined,
    Product: __expectString(output.Product),
    Settings: output.Settings != null ? de_Settings(output.Settings, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityProviderSummaryList
 */
const de_IdentityProviderSummaryList = (output: any, context: __SerdeContext): IdentityProviderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityProviderSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceSummary
 */
const de_InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    InstanceId: __expectString(output.InstanceId),
    LastStatusCheckDate: __expectString(output.LastStatusCheckDate),
    Products: output.Products != null ? de_StringList(output.Products, context) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceSummaryList
 */
const de_InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceUserSummary
 */
const de_InstanceUserSummary = (output: any, context: __SerdeContext): InstanceUserSummary => {
  return {
    AssociationDate: __expectString(output.AssociationDate),
    DisassociationDate: __expectString(output.DisassociationDate),
    Domain: __expectString(output.Domain),
    IdentityProvider:
      output.IdentityProvider != null
        ? de_IdentityProvider(__expectUnion(output.IdentityProvider), context)
        : undefined,
    InstanceId: __expectString(output.InstanceId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceUserSummaryList
 */
const de_InstanceUserSummaryList = (output: any, context: __SerdeContext): InstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProductUserSummary
 */
const de_ProductUserSummary = (output: any, context: __SerdeContext): ProductUserSummary => {
  return {
    Domain: __expectString(output.Domain),
    IdentityProvider:
      output.IdentityProvider != null
        ? de_IdentityProvider(__expectUnion(output.IdentityProvider), context)
        : undefined,
    Product: __expectString(output.Product),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    SubscriptionEndDate: __expectString(output.SubscriptionEndDate),
    SubscriptionStartDate: __expectString(output.SubscriptionStartDate),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_restJson1ProductUserSummaryList
 */
const de_ProductUserSummaryList = (output: any, context: __SerdeContext): ProductUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductUserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Settings
 */
const de_Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    SecurityGroupId: __expectString(output.SecurityGroupId),
    Subnets: output.Subnets != null ? de_Subnets(output.Subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
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
