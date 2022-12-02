// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAwsLogSourceCommandInput, CreateAwsLogSourceCommandOutput } from "../commands/CreateAwsLogSourceCommand";
import {
  CreateCustomLogSourceCommandInput,
  CreateCustomLogSourceCommandOutput,
} from "../commands/CreateCustomLogSourceCommand";
import {
  CreateDatalakeAutoEnableCommandInput,
  CreateDatalakeAutoEnableCommandOutput,
} from "../commands/CreateDatalakeAutoEnableCommand";
import { CreateDatalakeCommandInput, CreateDatalakeCommandOutput } from "../commands/CreateDatalakeCommand";
import {
  CreateDatalakeDelegatedAdminCommandInput,
  CreateDatalakeDelegatedAdminCommandOutput,
} from "../commands/CreateDatalakeDelegatedAdminCommand";
import {
  CreateDatalakeExceptionsSubscriptionCommandInput,
  CreateDatalakeExceptionsSubscriptionCommandOutput,
} from "../commands/CreateDatalakeExceptionsSubscriptionCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "../commands/CreateSubscriberCommand";
import {
  CreateSubscriptionNotificationConfigurationCommandInput,
  CreateSubscriptionNotificationConfigurationCommandOutput,
} from "../commands/CreateSubscriptionNotificationConfigurationCommand";
import { DeleteAwsLogSourceCommandInput, DeleteAwsLogSourceCommandOutput } from "../commands/DeleteAwsLogSourceCommand";
import {
  DeleteCustomLogSourceCommandInput,
  DeleteCustomLogSourceCommandOutput,
} from "../commands/DeleteCustomLogSourceCommand";
import {
  DeleteDatalakeAutoEnableCommandInput,
  DeleteDatalakeAutoEnableCommandOutput,
} from "../commands/DeleteDatalakeAutoEnableCommand";
import { DeleteDatalakeCommandInput, DeleteDatalakeCommandOutput } from "../commands/DeleteDatalakeCommand";
import {
  DeleteDatalakeDelegatedAdminCommandInput,
  DeleteDatalakeDelegatedAdminCommandOutput,
} from "../commands/DeleteDatalakeDelegatedAdminCommand";
import {
  DeleteDatalakeExceptionsSubscriptionCommandInput,
  DeleteDatalakeExceptionsSubscriptionCommandOutput,
} from "../commands/DeleteDatalakeExceptionsSubscriptionCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "../commands/DeleteSubscriberCommand";
import {
  DeleteSubscriptionNotificationConfigurationCommandInput,
  DeleteSubscriptionNotificationConfigurationCommandOutput,
} from "../commands/DeleteSubscriptionNotificationConfigurationCommand";
import {
  GetDatalakeAutoEnableCommandInput,
  GetDatalakeAutoEnableCommandOutput,
} from "../commands/GetDatalakeAutoEnableCommand";
import { GetDatalakeCommandInput, GetDatalakeCommandOutput } from "../commands/GetDatalakeCommand";
import {
  GetDatalakeExceptionsExpiryCommandInput,
  GetDatalakeExceptionsExpiryCommandOutput,
} from "../commands/GetDatalakeExceptionsExpiryCommand";
import {
  GetDatalakeExceptionsSubscriptionCommandInput,
  GetDatalakeExceptionsSubscriptionCommandOutput,
} from "../commands/GetDatalakeExceptionsSubscriptionCommand";
import { GetDatalakeStatusCommandInput, GetDatalakeStatusCommandOutput } from "../commands/GetDatalakeStatusCommand";
import { GetSubscriberCommandInput, GetSubscriberCommandOutput } from "../commands/GetSubscriberCommand";
import {
  ListDatalakeExceptionsCommandInput,
  ListDatalakeExceptionsCommandOutput,
} from "../commands/ListDatalakeExceptionsCommand";
import { ListLogSourcesCommandInput, ListLogSourcesCommandOutput } from "../commands/ListLogSourcesCommand";
import { ListSubscribersCommandInput, ListSubscribersCommandOutput } from "../commands/ListSubscribersCommand";
import { UpdateDatalakeCommandInput, UpdateDatalakeCommandOutput } from "../commands/UpdateDatalakeCommand";
import {
  UpdateDatalakeExceptionsExpiryCommandInput,
  UpdateDatalakeExceptionsExpiryCommandOutput,
} from "../commands/UpdateDatalakeExceptionsExpiryCommand";
import {
  UpdateDatalakeExceptionsSubscriptionCommandInput,
  UpdateDatalakeExceptionsSubscriptionCommandOutput,
} from "../commands/UpdateDatalakeExceptionsSubscriptionCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "../commands/UpdateSubscriberCommand";
import {
  UpdateSubscriptionNotificationConfigurationCommandInput,
  UpdateSubscriptionNotificationConfigurationCommandOutput,
} from "../commands/UpdateSubscriptionNotificationConfigurationCommand";
import {
  AccessDeniedException,
  AccessType,
  AccountNotFoundException,
  AccountSources,
  AutoEnableNewRegionConfiguration,
  AwsLogSourceType,
  BucketNotFoundException,
  ConcurrentModificationException,
  ConflictException,
  ConflictSourceNamesException,
  ConflictSubscriptionException,
  Dimension,
  EventBridgeException,
  Failures,
  FailuresResponse,
  InternalServerException,
  InvalidInputException,
  LakeConfigurationRequest,
  LakeConfigurationResponse,
  LogsStatus,
  ProtocolAndNotificationEndpoint,
  Region,
  ResourceNotFoundException,
  RetentionSetting,
  S3Exception,
  ServiceQuotaExceededException,
  SourceType,
  SubscriberResource,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { SecurityLakeServiceException as __BaseException } from "../models/SecurityLakeServiceException";

export const serializeAws_restJson1CreateAwsLogSourceCommand = async (
  input: CreateAwsLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/aws";
  let body: any;
  body = JSON.stringify({
    ...(input.enableAllDimensions != null && {
      enableAllDimensions: serializeAws_restJson1AllDimensionsMap(input.enableAllDimensions, context),
    }),
    ...(input.enableSingleDimension != null && {
      enableSingleDimension: serializeAws_restJson1InputSet(input.enableSingleDimension, context),
    }),
    ...(input.enableTwoDimensions != null && {
      enableTwoDimensions: serializeAws_restJson1TwoDimensionsMap(input.enableTwoDimensions, context),
    }),
    ...(input.inputOrder != null && { inputOrder: serializeAws_restJson1DimensionSet(input.inputOrder, context) }),
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

export const serializeAws_restJson1CreateCustomLogSourceCommand = async (
  input: CreateCustomLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/custom";
  let body: any;
  body = JSON.stringify({
    ...(input.customSourceName != null && { customSourceName: input.customSourceName }),
    ...(input.eventClass != null && { eventClass: input.eventClass }),
    ...(input.glueInvocationRoleArn != null && { glueInvocationRoleArn: input.glueInvocationRoleArn }),
    ...(input.logProviderAccountId != null && { logProviderAccountId: input.logProviderAccountId }),
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

export const serializeAws_restJson1CreateDatalakeCommand = async (
  input: CreateDatalakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake";
  let body: any;
  body = JSON.stringify({
    ...(input.configurations != null && {
      configurations: serializeAws_restJson1LakeConfigurationRequestMap(input.configurations, context),
    }),
    ...(input.enableAll != null && { enableAll: input.enableAll }),
    ...(input.metaStoreManagerRoleArn != null && { metaStoreManagerRoleArn: input.metaStoreManagerRoleArn }),
    ...(input.regions != null && { regions: serializeAws_restJson1RegionSet(input.regions, context) }),
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

export const serializeAws_restJson1CreateDatalakeAutoEnableCommand = async (
  input: CreateDatalakeAutoEnableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/autoenable";
  let body: any;
  body = JSON.stringify({
    ...(input.configurationForNewAccounts != null && {
      configurationForNewAccounts: serializeAws_restJson1AutoEnableNewRegionConfigurationList(
        input.configurationForNewAccounts,
        context
      ),
    }),
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

export const serializeAws_restJson1CreateDatalakeDelegatedAdminCommand = async (
  input: CreateDatalakeDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/delegate";
  let body: any;
  body = JSON.stringify({
    ...(input.account != null && { account: input.account }),
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

export const serializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand = async (
  input: CreateDatalakeExceptionsSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions/subscription";
  let body: any;
  body = JSON.stringify({
    ...(input.notificationEndpoint != null && { notificationEndpoint: input.notificationEndpoint }),
    ...(input.subscriptionProtocol != null && { subscriptionProtocol: input.subscriptionProtocol }),
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

export const serializeAws_restJson1CreateSubscriberCommand = async (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/subscribers";
  let body: any;
  body = JSON.stringify({
    ...(input.accessTypes != null && { accessTypes: serializeAws_restJson1AccessTypeList(input.accessTypes, context) }),
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.externalId != null && { externalId: input.externalId }),
    ...(input.sourceTypes != null && { sourceTypes: serializeAws_restJson1SourceTypeList(input.sourceTypes, context) }),
    ...(input.subscriberDescription != null && { subscriberDescription: input.subscriberDescription }),
    ...(input.subscriberName != null && { subscriberName: input.subscriberName }),
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

export const serializeAws_restJson1CreateSubscriptionNotificationConfigurationCommand = async (
  input: CreateSubscriptionNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/subscription-notifications/{subscriptionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "subscriptionId",
    () => input.subscriptionId!,
    "{subscriptionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.createSqs != null && { createSqs: input.createSqs }),
    ...(input.httpsApiKeyName != null && { httpsApiKeyName: input.httpsApiKeyName }),
    ...(input.httpsApiKeyValue != null && { httpsApiKeyValue: input.httpsApiKeyValue }),
    ...(input.httpsMethod != null && { httpsMethod: input.httpsMethod }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.subscriptionEndpoint != null && { subscriptionEndpoint: input.subscriptionEndpoint }),
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

export const serializeAws_restJson1DeleteAwsLogSourceCommand = async (
  input: DeleteAwsLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/aws/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.disableAllDimensions != null && {
      disableAllDimensions: serializeAws_restJson1AllDimensionsMap(input.disableAllDimensions, context),
    }),
    ...(input.disableSingleDimension != null && {
      disableSingleDimension: serializeAws_restJson1InputSet(input.disableSingleDimension, context),
    }),
    ...(input.disableTwoDimensions != null && {
      disableTwoDimensions: serializeAws_restJson1TwoDimensionsMap(input.disableTwoDimensions, context),
    }),
    ...(input.inputOrder != null && { inputOrder: serializeAws_restJson1DimensionSet(input.inputOrder, context) }),
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

export const serializeAws_restJson1DeleteCustomLogSourceCommand = async (
  input: DeleteCustomLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/custom";
  const query: any = map({
    customSourceName: [, __expectNonNull(input.customSourceName!, `customSourceName`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteDatalakeCommand = async (
  input: DeleteDatalakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake";
  let body: any;
  body = "";
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

export const serializeAws_restJson1DeleteDatalakeAutoEnableCommand = async (
  input: DeleteDatalakeAutoEnableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/autoenable/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.removeFromConfigurationForNewAccounts != null && {
      removeFromConfigurationForNewAccounts: serializeAws_restJson1AutoEnableNewRegionConfigurationList(
        input.removeFromConfigurationForNewAccounts,
        context
      ),
    }),
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

export const serializeAws_restJson1DeleteDatalakeDelegatedAdminCommand = async (
  input: DeleteDatalakeDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/delegate/{account}";
  resolvedPath = __resolvedPath(resolvedPath, input, "account", () => input.account!, "{account}", false);
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

export const serializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommand = async (
  input: DeleteDatalakeExceptionsSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions/subscription";
  let body: any;
  body = "";
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

export const serializeAws_restJson1DeleteSubscriberCommand = async (
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/subscribers";
  const query: any = map({
    id: [, __expectNonNull(input.id!, `id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand = async (
  input: DeleteSubscriptionNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/subscription-notifications/{subscriptionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "subscriptionId",
    () => input.subscriptionId!,
    "{subscriptionId}",
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

export const serializeAws_restJson1GetDatalakeCommand = async (
  input: GetDatalakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake";
  let body: any;
  body = "";
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

export const serializeAws_restJson1GetDatalakeAutoEnableCommand = async (
  input: GetDatalakeAutoEnableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/autoenable";
  let body: any;
  body = "";
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

export const serializeAws_restJson1GetDatalakeExceptionsExpiryCommand = async (
  input: GetDatalakeExceptionsExpiryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions/expiry";
  let body: any;
  body = "";
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

export const serializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand = async (
  input: GetDatalakeExceptionsSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions/subscription";
  let body: any;
  body = "";
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

export const serializeAws_restJson1GetDatalakeStatusCommand = async (
  input: GetDatalakeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/status";
  let body: any;
  body = JSON.stringify({
    ...(input.accountSet != null && { accountSet: serializeAws_restJson1InputSet(input.accountSet, context) }),
    ...(input.maxAccountResults != null && { maxAccountResults: input.maxAccountResults }),
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

export const serializeAws_restJson1GetSubscriberCommand = async (
  input: GetSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/subscribers/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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

export const serializeAws_restJson1ListDatalakeExceptionsCommand = async (
  input: ListDatalakeExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxFailures != null && { maxFailures: input.maxFailures }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.regionSet != null && { regionSet: serializeAws_restJson1RegionSet(input.regionSet, context) }),
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

export const serializeAws_restJson1ListLogSourcesCommand = async (
  input: ListLogSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/list";
  let body: any;
  body = JSON.stringify({
    ...(input.inputOrder != null && { inputOrder: serializeAws_restJson1DimensionSet(input.inputOrder, context) }),
    ...(input.listAllDimensions != null && {
      listAllDimensions: serializeAws_restJson1AllDimensionsMap(input.listAllDimensions, context),
    }),
    ...(input.listSingleDimension != null && {
      listSingleDimension: serializeAws_restJson1InputSet(input.listSingleDimension, context),
    }),
    ...(input.listTwoDimensions != null && {
      listTwoDimensions: serializeAws_restJson1TwoDimensionsMap(input.listTwoDimensions, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
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

export const serializeAws_restJson1ListSubscribersCommand = async (
  input: ListSubscribersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/subscribers";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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

export const serializeAws_restJson1UpdateDatalakeCommand = async (
  input: UpdateDatalakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake";
  let body: any;
  body = JSON.stringify({
    ...(input.configurations != null && {
      configurations: serializeAws_restJson1LakeConfigurationRequestMap(input.configurations, context),
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

export const serializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand = async (
  input: UpdateDatalakeExceptionsExpiryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions/expiry";
  let body: any;
  body = JSON.stringify({
    ...(input.exceptionMessageExpiry != null && { exceptionMessageExpiry: input.exceptionMessageExpiry }),
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

export const serializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand = async (
  input: UpdateDatalakeExceptionsSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/exceptions/subscription";
  let body: any;
  body = JSON.stringify({
    ...(input.notificationEndpoint != null && { notificationEndpoint: input.notificationEndpoint }),
    ...(input.subscriptionProtocol != null && { subscriptionProtocol: input.subscriptionProtocol }),
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

export const serializeAws_restJson1UpdateSubscriberCommand = async (
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/subscribers/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.externalId != null && { externalId: input.externalId }),
    ...(input.sourceTypes != null && { sourceTypes: serializeAws_restJson1SourceTypeList(input.sourceTypes, context) }),
    ...(input.subscriberDescription != null && { subscriberDescription: input.subscriberDescription }),
    ...(input.subscriberName != null && { subscriberName: input.subscriberName }),
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

export const serializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommand = async (
  input: UpdateSubscriptionNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/subscription-notifications/{subscriptionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "subscriptionId",
    () => input.subscriptionId!,
    "{subscriptionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.createSqs != null && { createSqs: input.createSqs }),
    ...(input.httpsApiKeyName != null && { httpsApiKeyName: input.httpsApiKeyName }),
    ...(input.httpsApiKeyValue != null && { httpsApiKeyValue: input.httpsApiKeyValue }),
    ...(input.httpsMethod != null && { httpsMethod: input.httpsMethod }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.subscriptionEndpoint != null && { subscriptionEndpoint: input.subscriptionEndpoint }),
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

export const deserializeAws_restJson1CreateAwsLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAwsLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAwsLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failed != null) {
    contents.failed = deserializeAws_restJson1AccountList(data.failed, context);
  }
  if (data.processing != null) {
    contents.processing = deserializeAws_restJson1AccountList(data.processing, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateAwsLogSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAwsLogSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "S3Exception":
    case "com.amazonaws.securitylake#S3Exception":
      throw await deserializeAws_restJson1S3ExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCustomLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCustomLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataLocation != null) {
    contents.customDataLocation = __expectString(data.customDataLocation);
  }
  if (data.glueCrawlerName != null) {
    contents.glueCrawlerName = __expectString(data.glueCrawlerName);
  }
  if (data.glueDatabaseName != null) {
    contents.glueDatabaseName = __expectString(data.glueDatabaseName);
  }
  if (data.glueTableName != null) {
    contents.glueTableName = __expectString(data.glueTableName);
  }
  if (data.logProviderAccessRoleArn != null) {
    contents.logProviderAccessRoleArn = __expectString(data.logProviderAccessRoleArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateCustomLogSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLogSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await deserializeAws_restJson1BucketNotFoundExceptionResponse(parsedOutput, context);
    case "ConflictSourceNamesException":
    case "com.amazonaws.securitylake#ConflictSourceNamesException":
      throw await deserializeAws_restJson1ConflictSourceNamesExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateDatalakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.securitylake#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.securitylake#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatalakeAutoEnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeAutoEnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatalakeAutoEnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateDatalakeAutoEnableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeAutoEnableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatalakeDelegatedAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeDelegatedAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatalakeDelegatedAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateDatalakeDelegatedAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeDelegatedAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.s3BucketArn != null) {
    contents.s3BucketArn = __expectString(data.s3BucketArn);
  }
  if (data.snsArn != null) {
    contents.snsArn = __expectString(data.snsArn);
  }
  if (data.subscriptionId != null) {
    contents.subscriptionId = __expectString(data.subscriptionId);
  }
  return contents;
};

const deserializeAws_restJson1CreateSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await deserializeAws_restJson1BucketNotFoundExceptionResponse(parsedOutput, context);
    case "ConflictSubscriptionException":
    case "com.amazonaws.securitylake#ConflictSubscriptionException":
      throw await deserializeAws_restJson1ConflictSubscriptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSubscriptionNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSubscriptionNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.queueArn != null) {
    contents.queueArn = __expectString(data.queueArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateSubscriptionNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAwsLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAwsLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAwsLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failed != null) {
    contents.failed = deserializeAws_restJson1AccountList(data.failed, context);
  }
  if (data.processing != null) {
    contents.processing = deserializeAws_restJson1AccountList(data.processing, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteAwsLogSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAwsLogSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCustomLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.customDataLocation != null) {
    contents.customDataLocation = __expectString(data.customDataLocation);
  }
  return contents;
};

const deserializeAws_restJson1DeleteCustomLogSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLogSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await deserializeAws_restJson1BucketNotFoundExceptionResponse(parsedOutput, context);
    case "ConflictSourceNamesException":
    case "com.amazonaws.securitylake#ConflictSourceNamesException":
      throw await deserializeAws_restJson1ConflictSourceNamesExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatalakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.securitylake#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.securitylake#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatalakeAutoEnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeAutoEnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatalakeAutoEnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatalakeAutoEnableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeAutoEnableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatalakeDelegatedAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeDelegatedAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatalakeDelegatedAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatalakeDelegatedAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeDelegatedAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeExceptionsSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await deserializeAws_restJson1BucketNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurations != null) {
    contents.configurations = deserializeAws_restJson1LakeConfigurationResponseMap(data.configurations, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDatalakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDatalakeAutoEnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeAutoEnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatalakeAutoEnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.autoEnableNewAccounts != null) {
    contents.autoEnableNewAccounts = deserializeAws_restJson1AutoEnableNewRegionConfigurationList(
      data.autoEnableNewAccounts,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetDatalakeAutoEnableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeAutoEnableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDatalakeExceptionsExpiryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeExceptionsExpiryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatalakeExceptionsExpiryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.exceptionMessageExpiry != null) {
    contents.exceptionMessageExpiry = __expectLong(data.exceptionMessageExpiry);
  }
  return contents;
};

const deserializeAws_restJson1GetDatalakeExceptionsExpiryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeExceptionsExpiryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protocolAndNotificationEndpoint != null) {
    contents.protocolAndNotificationEndpoint = deserializeAws_restJson1ProtocolAndNotificationEndpoint(
      data.protocolAndNotificationEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeExceptionsSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDatalakeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatalakeStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accountSourcesList != null) {
    contents.accountSourcesList = deserializeAws_restJson1AccountSourcesList(data.accountSourcesList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetDatalakeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.subscriber != null) {
    contents.subscriber = deserializeAws_restJson1SubscriberResource(data.subscriber, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDatalakeExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatalakeExceptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatalakeExceptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.nonRetryableFailures != null) {
    contents.nonRetryableFailures = deserializeAws_restJson1FailuresResponseList(data.nonRetryableFailures, context);
  }
  return contents;
};

const deserializeAws_restJson1ListDatalakeExceptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatalakeExceptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListLogSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLogSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.regionSourceTypesAccountsList != null) {
    contents.regionSourceTypesAccountsList = deserializeAws_restJson1RegionSourceTypesAccountsList(
      data.regionSourceTypesAccountsList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListLogSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSubscribersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSubscribersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.subscribers != null) {
    contents.subscribers = deserializeAws_restJson1SubscriberList(data.subscribers, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSubscribersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDatalakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EventBridgeException":
    case "com.amazonaws.securitylake#EventBridgeException":
      throw await deserializeAws_restJson1EventBridgeExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeExceptionsExpiryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeExceptionsExpiryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.subscriber != null) {
    contents.subscriber = deserializeAws_restJson1SubscriberResource(data.subscriber, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSubscriberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictSubscriptionException":
    case "com.amazonaws.securitylake#ConflictSubscriptionException":
      throw await deserializeAws_restJson1ConflictSubscriptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.queueArn != null) {
    contents.queueArn = __expectString(data.queueArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await deserializeAws_restJson1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1AccountNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccountNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BucketNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BucketNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictSourceNamesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictSourceNamesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictSourceNamesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictSubscriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictSubscriptionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictSubscriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EventBridgeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventBridgeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new EventBridgeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
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

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1S3ExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new S3Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AccessTypeList = (input: (AccessType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AllDimensionsMap = (
  input: Record<string, Record<string, string[]>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1TwoDimensionsMap(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1AutoEnableNewRegionConfiguration = (
  input: AutoEnableNewRegionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.region != null && { region: input.region }),
    ...(input.sources != null && { sources: serializeAws_restJson1AwsSourceTypeList(input.sources, context) }),
  };
};

const serializeAws_restJson1AutoEnableNewRegionConfigurationList = (
  input: AutoEnableNewRegionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AutoEnableNewRegionConfiguration(entry, context);
    });
};

const serializeAws_restJson1AwsSourceTypeList = (
  input: (AwsLogSourceType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DimensionSet = (input: (Dimension | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1InputSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LakeConfigurationRequest = (
  input: LakeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.replicationDestinationRegions != null && {
      replicationDestinationRegions: serializeAws_restJson1RegionSet(input.replicationDestinationRegions, context),
    }),
    ...(input.replicationRoleArn != null && { replicationRoleArn: input.replicationRoleArn }),
    ...(input.retentionSettings != null && {
      retentionSettings: serializeAws_restJson1RetentionSettingList(input.retentionSettings, context),
    }),
    ...(input.tagsMap != null && { tagsMap: serializeAws_restJson1TagsMap(input.tagsMap, context) }),
  };
};

const serializeAws_restJson1LakeConfigurationRequestMap = (
  input: Record<string, LakeConfigurationRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [Region | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1LakeConfigurationRequest(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RegionSet = (input: (Region | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RetentionSetting = (input: RetentionSetting, context: __SerdeContext): any => {
  return {
    ...(input.retentionPeriod != null && { retentionPeriod: input.retentionPeriod }),
    ...(input.storageClass != null && { storageClass: input.storageClass }),
  };
};

const serializeAws_restJson1RetentionSettingList = (input: RetentionSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RetentionSetting(entry, context);
    });
};

const serializeAws_restJson1SourceType = (input: SourceType, context: __SerdeContext): any => {
  return SourceType.visit(input, {
    awsSourceType: (value) => ({ awsSourceType: value }),
    customSourceType: (value) => ({ customSourceType: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1SourceTypeList = (input: SourceType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SourceType(entry, context);
    });
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TwoDimensionsMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ValueSet(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ValueSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1AccessTypeList = (output: any, context: __SerdeContext): (AccessType | string)[] => {
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

const deserializeAws_restJson1AccountList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AccountSources = (output: any, context: __SerdeContext): AccountSources => {
  return {
    account: __expectString(output.account),
    eventClass: __expectString(output.eventClass),
    logsStatus:
      output.logsStatus != null ? deserializeAws_restJson1LogsStatusList(output.logsStatus, context) : undefined,
    sourceType: __expectString(output.sourceType),
  } as any;
};

const deserializeAws_restJson1AccountSourcesList = (output: any, context: __SerdeContext): AccountSources[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccountSources(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AllDimensionsMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string[]>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string[]>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1TwoDimensionsMap(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1AutoEnableNewRegionConfiguration = (
  output: any,
  context: __SerdeContext
): AutoEnableNewRegionConfiguration => {
  return {
    region: __expectString(output.region),
    sources: output.sources != null ? deserializeAws_restJson1AwsSourceTypeList(output.sources, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AutoEnableNewRegionConfigurationList = (
  output: any,
  context: __SerdeContext
): AutoEnableNewRegionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoEnableNewRegionConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsSourceTypeList = (
  output: any,
  context: __SerdeContext
): (AwsLogSourceType | string)[] => {
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

const deserializeAws_restJson1Failures = (output: any, context: __SerdeContext): Failures => {
  return {
    exceptionMessage: __expectString(output.exceptionMessage),
    remediation: __expectString(output.remediation),
    timestamp: output.timestamp != null ? __expectNonNull(__parseRfc3339DateTime(output.timestamp)) : undefined,
  } as any;
};

const deserializeAws_restJson1Failureslist = (output: any, context: __SerdeContext): Failures[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Failures(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FailuresResponse = (output: any, context: __SerdeContext): FailuresResponse => {
  return {
    failures: output.failures != null ? deserializeAws_restJson1Failureslist(output.failures, context) : undefined,
    region: __expectString(output.region),
  } as any;
};

const deserializeAws_restJson1FailuresResponseList = (output: any, context: __SerdeContext): FailuresResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailuresResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LakeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): LakeConfigurationResponse => {
  return {
    encryptionKey: __expectString(output.encryptionKey),
    replicationDestinationRegions:
      output.replicationDestinationRegions != null
        ? deserializeAws_restJson1RegionSet(output.replicationDestinationRegions, context)
        : undefined,
    replicationRoleArn: __expectString(output.replicationRoleArn),
    retentionSettings:
      output.retentionSettings != null
        ? deserializeAws_restJson1RetentionSettingList(output.retentionSettings, context)
        : undefined,
    s3BucketArn: __expectString(output.s3BucketArn),
    status: __expectString(output.status),
    tagsMap: output.tagsMap != null ? deserializeAws_restJson1TagsMap(output.tagsMap, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LakeConfigurationResponseMap = (
  output: any,
  context: __SerdeContext
): Record<string, LakeConfigurationResponse> => {
  return Object.entries(output).reduce(
    (acc: Record<string, LakeConfigurationResponse>, [key, value]: [Region | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1LakeConfigurationResponse(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1LogsStatus = (output: any, context: __SerdeContext): LogsStatus => {
  return {
    healthStatus: __expectString(output.healthStatus),
    pathToLogs: __expectString(output.pathToLogs),
  } as any;
};

const deserializeAws_restJson1LogsStatusList = (output: any, context: __SerdeContext): LogsStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogsStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProtocolAndNotificationEndpoint = (
  output: any,
  context: __SerdeContext
): ProtocolAndNotificationEndpoint => {
  return {
    endpoint: __expectString(output.endpoint),
    protocol: __expectString(output.protocol),
  } as any;
};

const deserializeAws_restJson1RegionSet = (output: any, context: __SerdeContext): (Region | string)[] => {
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

const deserializeAws_restJson1RegionSourceTypesAccountsList = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string[]>>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AllDimensionsMap(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RetentionSetting = (output: any, context: __SerdeContext): RetentionSetting => {
  return {
    retentionPeriod: __expectInt32(output.retentionPeriod),
    storageClass: __expectString(output.storageClass),
  } as any;
};

const deserializeAws_restJson1RetentionSettingList = (output: any, context: __SerdeContext): RetentionSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RetentionSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SourceType = (output: any, context: __SerdeContext): SourceType => {
  if (__expectString(output.awsSourceType) !== undefined) {
    return { awsSourceType: __expectString(output.awsSourceType) as any };
  }
  if (__expectString(output.customSourceType) !== undefined) {
    return { customSourceType: __expectString(output.customSourceType) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1SourceTypeList = (output: any, context: __SerdeContext): SourceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceType(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1SubscriberList = (output: any, context: __SerdeContext): SubscriberResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SubscriberResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SubscriberResource = (output: any, context: __SerdeContext): SubscriberResource => {
  return {
    accessTypes:
      output.accessTypes != null ? deserializeAws_restJson1AccessTypeList(output.accessTypes, context) : undefined,
    accountId: __expectString(output.accountId),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    externalId: __expectString(output.externalId),
    roleArn: __expectString(output.roleArn),
    s3BucketArn: __expectString(output.s3BucketArn),
    snsArn: __expectString(output.snsArn),
    sourceTypes:
      output.sourceTypes != null ? deserializeAws_restJson1SourceTypeList(output.sourceTypes, context) : undefined,
    subscriberDescription: __expectString(output.subscriberDescription),
    subscriberName: __expectString(output.subscriberName),
    subscriptionEndpoint: __expectString(output.subscriptionEndpoint),
    subscriptionId: __expectString(output.subscriptionId),
    subscriptionProtocol: __expectString(output.subscriptionProtocol),
    subscriptionStatus: __expectString(output.subscriptionStatus),
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TwoDimensionsMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ValueSet(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValueSet = (output: any, context: __SerdeContext): string[] => {
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
