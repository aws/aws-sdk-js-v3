// smithy-typescript generated code
import {
  _json,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@aws-sdk/smithy-client";
import { ResponseMetadata as __ResponseMetadata } from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Endpoint as __Endpoint, SerdeContext as __SerdeContext } from "@smithy/types";

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
  Region,
  ResourceNotFoundException,
  RetentionSetting,
  S3Exception,
  ServiceQuotaExceededException,
  SourceType,
  SubscriberResource,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { SecurityLakeServiceException as __BaseException } from "../models/SecurityLakeServiceException";

/**
 * serializeAws_restJson1CreateAwsLogSourceCommand
 */
export const se_CreateAwsLogSourceCommand = async (
  input: CreateAwsLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/aws";
  let body: any;
  body = JSON.stringify(
    take(input, {
      enableAllDimensions: (_) => _json(_),
      enableSingleDimension: (_) => _json(_),
      enableTwoDimensions: (_) => _json(_),
      inputOrder: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateCustomLogSourceCommand
 */
export const se_CreateCustomLogSourceCommand = async (
  input: CreateCustomLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/custom";
  let body: any;
  body = JSON.stringify(
    take(input, {
      customSourceName: [],
      eventClass: [],
      glueInvocationRoleArn: [],
      logProviderAccountId: [],
    })
  );
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
 * serializeAws_restJson1CreateDatalakeCommand
 */
export const se_CreateDatalakeCommand = async (
  input: CreateDatalakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake";
  let body: any;
  body = JSON.stringify(
    take(input, {
      configurations: (_) => _json(_),
      enableAll: [],
      metaStoreManagerRoleArn: [],
      regions: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateDatalakeAutoEnableCommand
 */
export const se_CreateDatalakeAutoEnableCommand = async (
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
  body = JSON.stringify(
    take(input, {
      configurationForNewAccounts: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateDatalakeDelegatedAdminCommand
 */
export const se_CreateDatalakeDelegatedAdminCommand = async (
  input: CreateDatalakeDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/delegate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      account: [],
    })
  );
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
 * serializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand
 */
export const se_CreateDatalakeExceptionsSubscriptionCommand = async (
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
  body = JSON.stringify(
    take(input, {
      notificationEndpoint: [],
      subscriptionProtocol: [],
    })
  );
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
 * serializeAws_restJson1CreateSubscriberCommand
 */
export const se_CreateSubscriberCommand = async (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/subscribers";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessTypes: (_) => _json(_),
      accountId: [],
      externalId: [],
      sourceTypes: (_) => _json(_),
      subscriberDescription: [],
      subscriberName: [],
    })
  );
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
 * serializeAws_restJson1CreateSubscriptionNotificationConfigurationCommand
 */
export const se_CreateSubscriptionNotificationConfigurationCommand = async (
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
  body = JSON.stringify(
    take(input, {
      createSqs: [],
      httpsApiKeyName: [],
      httpsApiKeyValue: [],
      httpsMethod: [],
      roleArn: [],
      subscriptionEndpoint: [],
    })
  );
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
 * serializeAws_restJson1DeleteAwsLogSourceCommand
 */
export const se_DeleteAwsLogSourceCommand = async (
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
  body = JSON.stringify(
    take(input, {
      disableAllDimensions: (_) => _json(_),
      disableSingleDimension: (_) => _json(_),
      disableTwoDimensions: (_) => _json(_),
      inputOrder: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteCustomLogSourceCommand
 */
export const se_DeleteCustomLogSourceCommand = async (
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

/**
 * serializeAws_restJson1DeleteDatalakeCommand
 */
export const se_DeleteDatalakeCommand = async (
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

/**
 * serializeAws_restJson1DeleteDatalakeAutoEnableCommand
 */
export const se_DeleteDatalakeAutoEnableCommand = async (
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
  body = JSON.stringify(
    take(input, {
      removeFromConfigurationForNewAccounts: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteDatalakeDelegatedAdminCommand
 */
export const se_DeleteDatalakeDelegatedAdminCommand = async (
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

/**
 * serializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommand
 */
export const se_DeleteDatalakeExceptionsSubscriptionCommand = async (
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

/**
 * serializeAws_restJson1DeleteSubscriberCommand
 */
export const se_DeleteSubscriberCommand = async (
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

/**
 * serializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand
 */
export const se_DeleteSubscriptionNotificationConfigurationCommand = async (
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

/**
 * serializeAws_restJson1GetDatalakeCommand
 */
export const se_GetDatalakeCommand = async (
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

/**
 * serializeAws_restJson1GetDatalakeAutoEnableCommand
 */
export const se_GetDatalakeAutoEnableCommand = async (
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

/**
 * serializeAws_restJson1GetDatalakeExceptionsExpiryCommand
 */
export const se_GetDatalakeExceptionsExpiryCommand = async (
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

/**
 * serializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand
 */
export const se_GetDatalakeExceptionsSubscriptionCommand = async (
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

/**
 * serializeAws_restJson1GetDatalakeStatusCommand
 */
export const se_GetDatalakeStatusCommand = async (
  input: GetDatalakeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake/status";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountSet: (_) => _json(_),
      maxAccountResults: [],
      nextToken: [],
    })
  );
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
 * serializeAws_restJson1GetSubscriberCommand
 */
export const se_GetSubscriberCommand = async (
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

/**
 * serializeAws_restJson1ListDatalakeExceptionsCommand
 */
export const se_ListDatalakeExceptionsCommand = async (
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
  body = JSON.stringify(
    take(input, {
      maxFailures: [],
      nextToken: [],
      regionSet: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListLogSourcesCommand
 */
export const se_ListLogSourcesCommand = async (
  input: ListLogSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/logsources/list";
  let body: any;
  body = JSON.stringify(
    take(input, {
      inputOrder: (_) => _json(_),
      listAllDimensions: (_) => _json(_),
      listSingleDimension: (_) => _json(_),
      listTwoDimensions: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
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
 * serializeAws_restJson1ListSubscribersCommand
 */
export const se_ListSubscribersCommand = async (
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

/**
 * serializeAws_restJson1UpdateDatalakeCommand
 */
export const se_UpdateDatalakeCommand = async (
  input: UpdateDatalakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/datalake";
  let body: any;
  body = JSON.stringify(
    take(input, {
      configurations: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand
 */
export const se_UpdateDatalakeExceptionsExpiryCommand = async (
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
  body = JSON.stringify(
    take(input, {
      exceptionMessageExpiry: [],
    })
  );
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
 * serializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand
 */
export const se_UpdateDatalakeExceptionsSubscriptionCommand = async (
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
  body = JSON.stringify(
    take(input, {
      notificationEndpoint: [],
      subscriptionProtocol: [],
    })
  );
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
 * serializeAws_restJson1UpdateSubscriberCommand
 */
export const se_UpdateSubscriberCommand = async (
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
  body = JSON.stringify(
    take(input, {
      externalId: [],
      sourceTypes: (_) => _json(_),
      subscriberDescription: [],
      subscriberName: [],
    })
  );
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
 * serializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommand
 */
export const se_UpdateSubscriptionNotificationConfigurationCommand = async (
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
  body = JSON.stringify(
    take(input, {
      createSqs: [],
      httpsApiKeyName: [],
      httpsApiKeyValue: [],
      httpsMethod: [],
      roleArn: [],
      subscriptionEndpoint: [],
    })
  );
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
 * deserializeAws_restJson1CreateAwsLogSourceCommand
 */
export const de_CreateAwsLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAwsLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAwsLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failed: _json,
    processing: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAwsLogSourceCommandError
 */
const de_CreateAwsLogSourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "S3Exception":
    case "com.amazonaws.securitylake#S3Exception":
      throw await de_S3ExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateCustomLogSourceCommand
 */
export const de_CreateCustomLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCustomLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    customDataLocation: __expectString,
    glueCrawlerName: __expectString,
    glueDatabaseName: __expectString,
    glueTableName: __expectString,
    logProviderAccessRoleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomLogSourceCommandError
 */
const de_CreateCustomLogSourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await de_BucketNotFoundExceptionRes(parsedOutput, context);
    case "ConflictSourceNamesException":
    case "com.amazonaws.securitylake#ConflictSourceNamesException":
      throw await de_ConflictSourceNamesExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatalakeCommand
 */
export const de_CreateDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatalakeCommandError
 */
const de_CreateDatalakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.securitylake#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.securitylake#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatalakeAutoEnableCommand
 */
export const de_CreateDatalakeAutoEnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeAutoEnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDatalakeAutoEnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatalakeAutoEnableCommandError
 */
const de_CreateDatalakeAutoEnableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatalakeDelegatedAdminCommand
 */
export const de_CreateDatalakeDelegatedAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeDelegatedAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDatalakeDelegatedAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatalakeDelegatedAdminCommandError
 */
const de_CreateDatalakeDelegatedAdminCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommand
 */
export const de_CreateDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatalakeExceptionsSubscriptionCommandError
 */
const de_CreateDatalakeExceptionsSubscriptionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSubscriberCommand
 */
export const de_CreateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resourceShareArn: __expectString,
    resourceShareName: __expectString,
    roleArn: __expectString,
    s3BucketArn: __expectString,
    snsArn: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriberCommandError
 */
const de_CreateSubscriberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await de_BucketNotFoundExceptionRes(parsedOutput, context);
    case "ConflictSubscriptionException":
    case "com.amazonaws.securitylake#ConflictSubscriptionException":
      throw await de_ConflictSubscriptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSubscriptionNotificationConfigurationCommand
 */
export const de_CreateSubscriptionNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSubscriptionNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queueArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionNotificationConfigurationCommandError
 */
const de_CreateSubscriptionNotificationConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAwsLogSourceCommand
 */
export const de_DeleteAwsLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAwsLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAwsLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failed: _json,
    processing: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAwsLogSourceCommandError
 */
const de_DeleteAwsLogSourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCustomLogSourceCommand
 */
export const de_DeleteCustomLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCustomLogSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    customDataLocation: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomLogSourceCommandError
 */
const de_DeleteCustomLogSourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await de_BucketNotFoundExceptionRes(parsedOutput, context);
    case "ConflictSourceNamesException":
    case "com.amazonaws.securitylake#ConflictSourceNamesException":
      throw await de_ConflictSourceNamesExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatalakeCommand
 */
export const de_DeleteDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatalakeCommandError
 */
const de_DeleteDatalakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.securitylake#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.securitylake#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatalakeAutoEnableCommand
 */
export const de_DeleteDatalakeAutoEnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeAutoEnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDatalakeAutoEnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatalakeAutoEnableCommandError
 */
const de_DeleteDatalakeAutoEnableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatalakeDelegatedAdminCommand
 */
export const de_DeleteDatalakeDelegatedAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeDelegatedAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDatalakeDelegatedAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatalakeDelegatedAdminCommandError
 */
const de_DeleteDatalakeDelegatedAdminCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommand
 */
export const de_DeleteDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatalakeExceptionsSubscriptionCommandError
 */
const de_DeleteDatalakeExceptionsSubscriptionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSubscriberCommand
 */
export const de_DeleteSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriberCommandError
 */
const de_DeleteSubscriberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "BucketNotFoundException":
    case "com.amazonaws.securitylake#BucketNotFoundException":
      throw await de_BucketNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand
 */
export const de_DeleteSubscriptionNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSubscriptionNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommandError
 */
const de_DeleteSubscriptionNotificationConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatalakeCommand
 */
export const de_GetDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDatalakeCommandError
 */
const de_GetDatalakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatalakeAutoEnableCommand
 */
export const de_GetDatalakeAutoEnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeAutoEnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatalakeAutoEnableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoEnableNewAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDatalakeAutoEnableCommandError
 */
const de_GetDatalakeAutoEnableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatalakeExceptionsExpiryCommand
 */
export const de_GetDatalakeExceptionsExpiryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeExceptionsExpiryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatalakeExceptionsExpiryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    exceptionMessageExpiry: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDatalakeExceptionsExpiryCommandError
 */
const de_GetDatalakeExceptionsExpiryCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand
 */
export const de_GetDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    protocolAndNotificationEndpoint: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommandError
 */
const de_GetDatalakeExceptionsSubscriptionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDatalakeStatusCommand
 */
export const de_GetDatalakeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatalakeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDatalakeStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountSourcesList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDatalakeStatusCommandError
 */
const de_GetDatalakeStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSubscriberCommand
 */
export const de_GetSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriber: (_) => de_SubscriberResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriberCommandError
 */
const de_GetSubscriberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDatalakeExceptionsCommand
 */
export const de_ListDatalakeExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatalakeExceptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatalakeExceptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    nonRetryableFailures: (_) => de_FailuresResponseList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDatalakeExceptionsCommandError
 */
const de_ListDatalakeExceptionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListLogSourcesCommand
 */
export const de_ListLogSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLogSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    regionSourceTypesAccountsList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLogSourcesCommandError
 */
const de_ListLogSourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSubscribersCommand
 */
export const de_ListSubscribersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSubscribersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    subscribers: (_) => de_SubscriberList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscribersCommandError
 */
const de_ListSubscribersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDatalakeCommand
 */
export const de_UpdateDatalakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDatalakeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatalakeCommandError
 */
const de_UpdateDatalakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EventBridgeException":
    case "com.amazonaws.securitylake#EventBridgeException":
      throw await de_EventBridgeExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand
 */
export const de_UpdateDatalakeExceptionsExpiryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeExceptionsExpiryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDatalakeExceptionsExpiryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommandError
 */
const de_UpdateDatalakeExceptionsExpiryCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand
 */
export const de_UpdateDatalakeExceptionsSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDatalakeExceptionsSubscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommandError
 */
const de_UpdateDatalakeExceptionsSubscriptionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSubscriberCommand
 */
export const de_UpdateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSubscriberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriber: (_) => de_SubscriberResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriberCommandError
 */
const de_UpdateSubscriberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictSubscriptionException":
    case "com.amazonaws.securitylake#ConflictSubscriptionException":
      throw await de_ConflictSubscriptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommand
 */
export const de_UpdateSubscriptionNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSubscriptionNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queueArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionNotificationConfigurationCommandError
 */
const de_UpdateSubscriptionNotificationConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.securitylake#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.securitylake#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securitylake#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securitylake#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
    errorCode: __expectString,
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
 * deserializeAws_restJson1AccountNotFoundExceptionRes
 */
const de_AccountNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccountNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BucketNotFoundExceptionRes
 */
const de_BucketNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BucketNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentModificationException({
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
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictSourceNamesExceptionRes
 */
const de_ConflictSourceNamesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictSourceNamesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictSourceNamesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictSubscriptionExceptionRes
 */
const de_ConflictSubscriptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictSubscriptionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictSubscriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EventBridgeExceptionRes
 */
const de_EventBridgeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventBridgeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new EventBridgeException({
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
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
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
 * deserializeAws_restJson1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidInputException({
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
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1S3ExceptionRes
 */
const de_S3ExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<S3Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new S3Exception({
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
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccessTypeList omitted.

// se_AllDimensionsMap omitted.

// se_AutoEnableNewRegionConfiguration omitted.

// se_AutoEnableNewRegionConfigurationList omitted.

// se_AwsSourceTypeList omitted.

// se_DimensionSet omitted.

// se_InputSet omitted.

// se_LakeConfigurationRequest omitted.

// se_LakeConfigurationRequestMap omitted.

// se_RegionSet omitted.

// se_RetentionSetting omitted.

// se_RetentionSettingList omitted.

// se_SourceType omitted.

// se_SourceTypeList omitted.

// se_TagsMap omitted.

// se_TwoDimensionsMap omitted.

// se_ValueSet omitted.

// de_AccessTypeList omitted.

// de_AccountList omitted.

// de_AccountSources omitted.

// de_AccountSourcesList omitted.

// de_AllDimensionsMap omitted.

// de_AutoEnableNewRegionConfiguration omitted.

// de_AutoEnableNewRegionConfigurationList omitted.

// de_AwsSourceTypeList omitted.

/**
 * deserializeAws_restJson1Failures
 */
const de_Failures = (output: any, context: __SerdeContext): Failures => {
  return take(output, {
    exceptionMessage: __expectString,
    remediation: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1Failureslist
 */
const de_Failureslist = (output: any, context: __SerdeContext): Failures[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Failures(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FailuresResponse
 */
const de_FailuresResponse = (output: any, context: __SerdeContext): FailuresResponse => {
  return take(output, {
    failures: (_: any) => de_Failureslist(_, context),
    region: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FailuresResponseList
 */
const de_FailuresResponseList = (output: any, context: __SerdeContext): FailuresResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FailuresResponse(entry, context);
    });
  return retVal;
};

// de_LakeConfigurationResponse omitted.

// de_LakeConfigurationResponseMap omitted.

// de_LastUpdateFailure omitted.

// de_LogsStatus omitted.

// de_LogsStatusList omitted.

// de_ProtocolAndNotificationEndpoint omitted.

// de_RegionSet omitted.

// de_RegionSourceTypesAccountsList omitted.

// de_RetentionSetting omitted.

// de_RetentionSettingList omitted.

// de_SourceType omitted.

// de_SourceTypeList omitted.

/**
 * deserializeAws_restJson1SubscriberList
 */
const de_SubscriberList = (output: any, context: __SerdeContext): SubscriberResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriberResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriberResource
 */
const de_SubscriberResource = (output: any, context: __SerdeContext): SubscriberResource => {
  return take(output, {
    accessTypes: _json,
    accountId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    externalId: __expectString,
    resourceShareArn: __expectString,
    resourceShareName: __expectString,
    roleArn: __expectString,
    s3BucketArn: __expectString,
    snsArn: __expectString,
    sourceTypes: _json,
    subscriberDescription: __expectString,
    subscriberName: __expectString,
    subscriptionEndpoint: __expectString,
    subscriptionId: __expectString,
    subscriptionProtocol: __expectString,
    subscriptionStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_TagsMap omitted.

// de_TwoDimensionsMap omitted.

// de_UpdateStatus omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_ValueSet omitted.

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
