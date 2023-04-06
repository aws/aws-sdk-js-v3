// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateBrokerCommandInput, CreateBrokerCommandOutput } from "../commands/CreateBrokerCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "../commands/CreateConfigurationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteBrokerCommandInput, DeleteBrokerCommandOutput } from "../commands/DeleteBrokerCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DescribeBrokerCommandInput, DescribeBrokerCommandOutput } from "../commands/DescribeBrokerCommand";
import {
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput,
} from "../commands/DescribeBrokerEngineTypesCommand";
import {
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput,
} from "../commands/DescribeBrokerInstanceOptionsCommand";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "../commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "../commands/DescribeConfigurationRevisionCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import { ListBrokersCommandInput, ListBrokersCommandOutput } from "../commands/ListBrokersCommand";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "../commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "../commands/ListConfigurationsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "../commands/RebootBrokerCommand";
import { UpdateBrokerCommandInput, UpdateBrokerCommandOutput } from "../commands/UpdateBrokerCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "../commands/UpdateConfigurationCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  ActionRequired,
  AvailabilityZone,
  BadRequestException,
  BrokerEngineType,
  BrokerInstance,
  BrokerInstanceOption,
  BrokerSummary,
  Configuration,
  ConfigurationId,
  ConfigurationRevision,
  Configurations,
  ConflictException,
  DeploymentMode,
  EncryptionOptions,
  EngineVersion,
  ForbiddenException,
  InternalServerErrorException,
  LdapServerMetadataInput,
  LdapServerMetadataOutput,
  Logs,
  LogsSummary,
  NotFoundException,
  PendingLogs,
  SanitizationWarning,
  UnauthorizedException,
  User,
  UserPendingChanges,
  UserSummary,
  WeeklyStartTime,
} from "../models/models_0";
import { MqServiceException as __BaseException } from "../models/MqServiceException";

/**
 * serializeAws_restJson1CreateBrokerCommand
 */
export const se_CreateBrokerCommand = async (
  input: CreateBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers";
  let body: any;
  body = JSON.stringify({
    ...(input.AuthenticationStrategy != null && { authenticationStrategy: input.AuthenticationStrategy }),
    ...(input.AutoMinorVersionUpgrade != null && { autoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.BrokerName != null && { brokerName: input.BrokerName }),
    ...(input.Configuration != null && { configuration: se_ConfigurationId(input.Configuration, context) }),
    creatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.DeploymentMode != null && { deploymentMode: input.DeploymentMode }),
    ...(input.EncryptionOptions != null && {
      encryptionOptions: se_EncryptionOptions(input.EncryptionOptions, context),
    }),
    ...(input.EngineType != null && { engineType: input.EngineType }),
    ...(input.EngineVersion != null && { engineVersion: input.EngineVersion }),
    ...(input.HostInstanceType != null && { hostInstanceType: input.HostInstanceType }),
    ...(input.LdapServerMetadata != null && {
      ldapServerMetadata: se_LdapServerMetadataInput(input.LdapServerMetadata, context),
    }),
    ...(input.Logs != null && { logs: se_Logs(input.Logs, context) }),
    ...(input.MaintenanceWindowStartTime != null && {
      maintenanceWindowStartTime: se_WeeklyStartTime(input.MaintenanceWindowStartTime, context),
    }),
    ...(input.PubliclyAccessible != null && { publiclyAccessible: input.PubliclyAccessible }),
    ...(input.SecurityGroups != null && { securityGroups: se___listOf__string(input.SecurityGroups, context) }),
    ...(input.StorageType != null && { storageType: input.StorageType }),
    ...(input.SubnetIds != null && { subnetIds: se___listOf__string(input.SubnetIds, context) }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
    ...(input.Users != null && { users: se___listOfUser(input.Users, context) }),
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
 * serializeAws_restJson1CreateConfigurationCommand
 */
export const se_CreateConfigurationCommand = async (
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.AuthenticationStrategy != null && { authenticationStrategy: input.AuthenticationStrategy }),
    ...(input.EngineType != null && { engineType: input.EngineType }),
    ...(input.EngineVersion != null && { engineVersion: input.EngineVersion }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1CreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Username", () => input.Username!, "{Username}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConsoleAccess != null && { consoleAccess: input.ConsoleAccess }),
    ...(input.Groups != null && { groups: se___listOf__string(input.Groups, context) }),
    ...(input.Password != null && { password: input.Password }),
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
 * serializeAws_restJson1DeleteBrokerCommand
 */
export const se_DeleteBrokerCommand = async (
  input: DeleteBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
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
 * serializeAws_restJson1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
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
 * serializeAws_restJson1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Username", () => input.Username!, "{Username}", false);
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
 * serializeAws_restJson1DescribeBrokerCommand
 */
export const se_DescribeBrokerCommand = async (
  input: DescribeBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
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
 * serializeAws_restJson1DescribeBrokerEngineTypesCommand
 */
export const se_DescribeBrokerEngineTypesCommand = async (
  input: DescribeBrokerEngineTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/broker-engine-types";
  const query: any = map({
    engineType: [, input.EngineType!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1DescribeBrokerInstanceOptionsCommand
 */
export const se_DescribeBrokerInstanceOptionsCommand = async (
  input: DescribeBrokerInstanceOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/broker-instance-options";
  const query: any = map({
    engineType: [, input.EngineType!],
    hostInstanceType: [, input.HostInstanceType!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    storageType: [, input.StorageType!],
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
 * serializeAws_restJson1DescribeConfigurationCommand
 */
export const se_DescribeConfigurationCommand = async (
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{ConfigurationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationId",
    () => input.ConfigurationId!,
    "{ConfigurationId}",
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
 * serializeAws_restJson1DescribeConfigurationRevisionCommand
 */
export const se_DescribeConfigurationRevisionCommand = async (
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationId",
    () => input.ConfigurationId!,
    "{ConfigurationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationRevision",
    () => input.ConfigurationRevision!,
    "{ConfigurationRevision}",
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
 * serializeAws_restJson1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Username", () => input.Username!, "{Username}", false);
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
 * serializeAws_restJson1ListBrokersCommand
 */
export const se_ListBrokersCommand = async (
  input: ListBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListConfigurationRevisionsCommand
 */
export const se_ListConfigurationRevisionsCommand = async (
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/configurations/{ConfigurationId}/revisions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationId",
    () => input.ConfigurationId!,
    "{ConfigurationId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListConfigurationsCommand
 */
export const se_ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1RebootBrokerCommand
 */
export const se_RebootBrokerCommand = async (
  input: RebootBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/reboot";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  let body: any;
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
 * serializeAws_restJson1UpdateBrokerCommand
 */
export const se_UpdateBrokerCommand = async (
  input: UpdateBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AuthenticationStrategy != null && { authenticationStrategy: input.AuthenticationStrategy }),
    ...(input.AutoMinorVersionUpgrade != null && { autoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.Configuration != null && { configuration: se_ConfigurationId(input.Configuration, context) }),
    ...(input.EngineVersion != null && { engineVersion: input.EngineVersion }),
    ...(input.HostInstanceType != null && { hostInstanceType: input.HostInstanceType }),
    ...(input.LdapServerMetadata != null && {
      ldapServerMetadata: se_LdapServerMetadataInput(input.LdapServerMetadata, context),
    }),
    ...(input.Logs != null && { logs: se_Logs(input.Logs, context) }),
    ...(input.MaintenanceWindowStartTime != null && {
      maintenanceWindowStartTime: se_WeeklyStartTime(input.MaintenanceWindowStartTime, context),
    }),
    ...(input.SecurityGroups != null && { securityGroups: se___listOf__string(input.SecurityGroups, context) }),
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
 * serializeAws_restJson1UpdateConfigurationCommand
 */
export const se_UpdateConfigurationCommand = async (
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{ConfigurationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationId",
    () => input.ConfigurationId!,
    "{ConfigurationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Data != null && { data: input.Data }),
    ...(input.Description != null && { description: input.Description }),
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
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Username", () => input.Username!, "{Username}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConsoleAccess != null && { consoleAccess: input.ConsoleAccess }),
    ...(input.Groups != null && { groups: se___listOf__string(input.Groups, context) }),
    ...(input.Password != null && { password: input.Password }),
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
 * deserializeAws_restJson1CreateBrokerCommand
 */
export const de_CreateBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBrokerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerArn != null) {
    contents.BrokerArn = __expectString(data.brokerArn);
  }
  if (data.brokerId != null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBrokerCommandError
 */
const de_CreateBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.mq#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfigurationCommand
 */
export const de_CreateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authenticationStrategy != null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.created != null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.created));
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.latestRevision != null) {
    contents.LatestRevision = de_ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationCommandError
 */
const de_CreateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CreateTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTagsCommandError
 */
const de_CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBrokerCommand
 */
export const de_DeleteBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBrokerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerId != null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBrokerCommandError
 */
const de_DeleteBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeBrokerCommand
 */
export const de_DescribeBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBrokerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actionsRequired != null) {
    contents.ActionsRequired = de___listOfActionRequired(data.actionsRequired, context);
  }
  if (data.authenticationStrategy != null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.autoMinorVersionUpgrade != null) {
    contents.AutoMinorVersionUpgrade = __expectBoolean(data.autoMinorVersionUpgrade);
  }
  if (data.brokerArn != null) {
    contents.BrokerArn = __expectString(data.brokerArn);
  }
  if (data.brokerId != null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.brokerInstances != null) {
    contents.BrokerInstances = de___listOfBrokerInstance(data.brokerInstances, context);
  }
  if (data.brokerName != null) {
    contents.BrokerName = __expectString(data.brokerName);
  }
  if (data.brokerState != null) {
    contents.BrokerState = __expectString(data.brokerState);
  }
  if (data.configurations != null) {
    contents.Configurations = de_Configurations(data.configurations, context);
  }
  if (data.created != null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.created));
  }
  if (data.deploymentMode != null) {
    contents.DeploymentMode = __expectString(data.deploymentMode);
  }
  if (data.encryptionOptions != null) {
    contents.EncryptionOptions = de_EncryptionOptions(data.encryptionOptions, context);
  }
  if (data.engineType != null) {
    contents.EngineType = __expectString(data.engineType);
  }
  if (data.engineVersion != null) {
    contents.EngineVersion = __expectString(data.engineVersion);
  }
  if (data.hostInstanceType != null) {
    contents.HostInstanceType = __expectString(data.hostInstanceType);
  }
  if (data.ldapServerMetadata != null) {
    contents.LdapServerMetadata = de_LdapServerMetadataOutput(data.ldapServerMetadata, context);
  }
  if (data.logs != null) {
    contents.Logs = de_LogsSummary(data.logs, context);
  }
  if (data.maintenanceWindowStartTime != null) {
    contents.MaintenanceWindowStartTime = de_WeeklyStartTime(data.maintenanceWindowStartTime, context);
  }
  if (data.pendingAuthenticationStrategy != null) {
    contents.PendingAuthenticationStrategy = __expectString(data.pendingAuthenticationStrategy);
  }
  if (data.pendingEngineVersion != null) {
    contents.PendingEngineVersion = __expectString(data.pendingEngineVersion);
  }
  if (data.pendingHostInstanceType != null) {
    contents.PendingHostInstanceType = __expectString(data.pendingHostInstanceType);
  }
  if (data.pendingLdapServerMetadata != null) {
    contents.PendingLdapServerMetadata = de_LdapServerMetadataOutput(data.pendingLdapServerMetadata, context);
  }
  if (data.pendingSecurityGroups != null) {
    contents.PendingSecurityGroups = de___listOf__string(data.pendingSecurityGroups, context);
  }
  if (data.publiclyAccessible != null) {
    contents.PubliclyAccessible = __expectBoolean(data.publiclyAccessible);
  }
  if (data.securityGroups != null) {
    contents.SecurityGroups = de___listOf__string(data.securityGroups, context);
  }
  if (data.storageType != null) {
    contents.StorageType = __expectString(data.storageType);
  }
  if (data.subnetIds != null) {
    contents.SubnetIds = de___listOf__string(data.subnetIds, context);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.users != null) {
    contents.Users = de___listOfUserSummary(data.users, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBrokerCommandError
 */
const de_DescribeBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeBrokerEngineTypesCommand
 */
export const de_DescribeBrokerEngineTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerEngineTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBrokerEngineTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerEngineTypes != null) {
    contents.BrokerEngineTypes = de___listOfBrokerEngineType(data.brokerEngineTypes, context);
  }
  if (data.maxResults != null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBrokerEngineTypesCommandError
 */
const de_DescribeBrokerEngineTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerEngineTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand
 */
export const de_DescribeBrokerInstanceOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerInstanceOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBrokerInstanceOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerInstanceOptions != null) {
    contents.BrokerInstanceOptions = de___listOfBrokerInstanceOption(data.brokerInstanceOptions, context);
  }
  if (data.maxResults != null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBrokerInstanceOptionsCommandError
 */
const de_DescribeBrokerInstanceOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerInstanceOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeConfigurationCommand
 */
export const de_DescribeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authenticationStrategy != null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.created != null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.created));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.engineType != null) {
    contents.EngineType = __expectString(data.engineType);
  }
  if (data.engineVersion != null) {
    contents.EngineVersion = __expectString(data.engineVersion);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.latestRevision != null) {
    contents.LatestRevision = de_ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConfigurationCommandError
 */
const de_DescribeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeConfigurationRevisionCommand
 */
export const de_DescribeConfigurationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConfigurationRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationId != null) {
    contents.ConfigurationId = __expectString(data.configurationId);
  }
  if (data.created != null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.created));
  }
  if (data.data != null) {
    contents.Data = __expectString(data.data);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConfigurationRevisionCommandError
 */
const de_DescribeConfigurationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerId != null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.consoleAccess != null) {
    contents.ConsoleAccess = __expectBoolean(data.consoleAccess);
  }
  if (data.groups != null) {
    contents.Groups = de___listOf__string(data.groups, context);
  }
  if (data.pending != null) {
    contents.Pending = de_UserPendingChanges(data.pending, context);
  }
  if (data.username != null) {
    contents.Username = __expectString(data.username);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUserCommandError
 */
const de_DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListBrokersCommand
 */
export const de_ListBrokersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrokersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBrokersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerSummaries != null) {
    contents.BrokerSummaries = de___listOfBrokerSummary(data.brokerSummaries, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBrokersCommandError
 */
const de_ListBrokersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrokersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigurationRevisionsCommand
 */
export const de_ListConfigurationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationRevisionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationId != null) {
    contents.ConfigurationId = __expectString(data.configurationId);
  }
  if (data.maxResults != null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.revisions != null) {
    contents.Revisions = de___listOfConfigurationRevision(data.revisions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationRevisionsCommandError
 */
const de_ListConfigurationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigurationsCommand
 */
export const de_ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurations != null) {
    contents.Configurations = de___listOfConfiguration(data.configurations, context);
  }
  if (data.maxResults != null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationsCommandError
 */
const de_ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerId != null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.maxResults != null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.users != null) {
    contents.Users = de___listOfUserSummary(data.users, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RebootBrokerCommand
 */
export const de_RebootBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RebootBrokerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RebootBrokerCommandError
 */
const de_RebootBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBrokerCommand
 */
export const de_UpdateBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBrokerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authenticationStrategy != null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.autoMinorVersionUpgrade != null) {
    contents.AutoMinorVersionUpgrade = __expectBoolean(data.autoMinorVersionUpgrade);
  }
  if (data.brokerId != null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.configuration != null) {
    contents.Configuration = de_ConfigurationId(data.configuration, context);
  }
  if (data.engineVersion != null) {
    contents.EngineVersion = __expectString(data.engineVersion);
  }
  if (data.hostInstanceType != null) {
    contents.HostInstanceType = __expectString(data.hostInstanceType);
  }
  if (data.ldapServerMetadata != null) {
    contents.LdapServerMetadata = de_LdapServerMetadataOutput(data.ldapServerMetadata, context);
  }
  if (data.logs != null) {
    contents.Logs = de_Logs(data.logs, context);
  }
  if (data.maintenanceWindowStartTime != null) {
    contents.MaintenanceWindowStartTime = de_WeeklyStartTime(data.maintenanceWindowStartTime, context);
  }
  if (data.securityGroups != null) {
    contents.SecurityGroups = de___listOf__string(data.securityGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrokerCommandError
 */
const de_UpdateBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfigurationCommand
 */
export const de_UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.created != null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.created));
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.latestRevision != null) {
    contents.LatestRevision = de_ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.warnings != null) {
    contents.Warnings = de___listOfSanitizationWarning(data.warnings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationCommandError
 */
const de_UpdateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorAttribute != null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new BadRequestException({
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
  if (data.errorAttribute != null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorAttribute != null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorAttribute != null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
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
  if (data.errorAttribute != null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.errorAttribute != null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfUser
 */
const se___listOfUser = (input: User[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_User(entry, context);
    });
};

/**
 * serializeAws_restJson1__mapOf__string
 */
const se___mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ConfigurationId
 */
const se_ConfigurationId = (input: ConfigurationId, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { id: input.Id }),
    ...(input.Revision != null && { revision: input.Revision }),
  };
};

/**
 * serializeAws_restJson1EncryptionOptions
 */
const se_EncryptionOptions = (input: EncryptionOptions, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { kmsKeyId: input.KmsKeyId }),
    ...(input.UseAwsOwnedKey != null && { useAwsOwnedKey: input.UseAwsOwnedKey }),
  };
};

/**
 * serializeAws_restJson1LdapServerMetadataInput
 */
const se_LdapServerMetadataInput = (input: LdapServerMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.Hosts != null && { hosts: se___listOf__string(input.Hosts, context) }),
    ...(input.RoleBase != null && { roleBase: input.RoleBase }),
    ...(input.RoleName != null && { roleName: input.RoleName }),
    ...(input.RoleSearchMatching != null && { roleSearchMatching: input.RoleSearchMatching }),
    ...(input.RoleSearchSubtree != null && { roleSearchSubtree: input.RoleSearchSubtree }),
    ...(input.ServiceAccountPassword != null && { serviceAccountPassword: input.ServiceAccountPassword }),
    ...(input.ServiceAccountUsername != null && { serviceAccountUsername: input.ServiceAccountUsername }),
    ...(input.UserBase != null && { userBase: input.UserBase }),
    ...(input.UserRoleName != null && { userRoleName: input.UserRoleName }),
    ...(input.UserSearchMatching != null && { userSearchMatching: input.UserSearchMatching }),
    ...(input.UserSearchSubtree != null && { userSearchSubtree: input.UserSearchSubtree }),
  };
};

/**
 * serializeAws_restJson1Logs
 */
const se_Logs = (input: Logs, context: __SerdeContext): any => {
  return {
    ...(input.Audit != null && { audit: input.Audit }),
    ...(input.General != null && { general: input.General }),
  };
};

/**
 * serializeAws_restJson1User
 */
const se_User = (input: User, context: __SerdeContext): any => {
  return {
    ...(input.ConsoleAccess != null && { consoleAccess: input.ConsoleAccess }),
    ...(input.Groups != null && { groups: se___listOf__string(input.Groups, context) }),
    ...(input.Password != null && { password: input.Password }),
    ...(input.Username != null && { username: input.Username }),
  };
};

/**
 * serializeAws_restJson1WeeklyStartTime
 */
const se_WeeklyStartTime = (input: WeeklyStartTime, context: __SerdeContext): any => {
  return {
    ...(input.DayOfWeek != null && { dayOfWeek: input.DayOfWeek }),
    ...(input.TimeOfDay != null && { timeOfDay: input.TimeOfDay }),
    ...(input.TimeZone != null && { timeZone: input.TimeZone }),
  };
};

/**
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfActionRequired
 */
const de___listOfActionRequired = (output: any, context: __SerdeContext): ActionRequired[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionRequired(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAvailabilityZone
 */
const de___listOfAvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AvailabilityZone(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBrokerEngineType
 */
const de___listOfBrokerEngineType = (output: any, context: __SerdeContext): BrokerEngineType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BrokerEngineType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBrokerInstance
 */
const de___listOfBrokerInstance = (output: any, context: __SerdeContext): BrokerInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BrokerInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBrokerInstanceOption
 */
const de___listOfBrokerInstanceOption = (output: any, context: __SerdeContext): BrokerInstanceOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BrokerInstanceOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBrokerSummary
 */
const de___listOfBrokerSummary = (output: any, context: __SerdeContext): BrokerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BrokerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConfiguration
 */
const de___listOfConfiguration = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConfigurationId
 */
const de___listOfConfigurationId = (output: any, context: __SerdeContext): ConfigurationId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationId(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConfigurationRevision
 */
const de___listOfConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationRevision(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDeploymentMode
 */
const de___listOfDeploymentMode = (output: any, context: __SerdeContext): (DeploymentMode | string)[] => {
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
 * deserializeAws_restJson1__listOfEngineVersion
 */
const de___listOfEngineVersion = (output: any, context: __SerdeContext): EngineVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EngineVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSanitizationWarning
 */
const de___listOfSanitizationWarning = (output: any, context: __SerdeContext): SanitizationWarning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SanitizationWarning(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfUserSummary
 */
const de___listOfUserSummary = (output: any, context: __SerdeContext): UserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__mapOf__string
 */
const de___mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ActionRequired
 */
const de_ActionRequired = (output: any, context: __SerdeContext): ActionRequired => {
  return {
    ActionRequiredCode: __expectString(output.actionRequiredCode),
    ActionRequiredInfo: __expectString(output.actionRequiredInfo),
  } as any;
};

/**
 * deserializeAws_restJson1AvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1BrokerEngineType
 */
const de_BrokerEngineType = (output: any, context: __SerdeContext): BrokerEngineType => {
  return {
    EngineType: __expectString(output.engineType),
    EngineVersions:
      output.engineVersions != null ? de___listOfEngineVersion(output.engineVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BrokerInstance
 */
const de_BrokerInstance = (output: any, context: __SerdeContext): BrokerInstance => {
  return {
    ConsoleURL: __expectString(output.consoleURL),
    Endpoints: output.endpoints != null ? de___listOf__string(output.endpoints, context) : undefined,
    IpAddress: __expectString(output.ipAddress),
  } as any;
};

/**
 * deserializeAws_restJson1BrokerInstanceOption
 */
const de_BrokerInstanceOption = (output: any, context: __SerdeContext): BrokerInstanceOption => {
  return {
    AvailabilityZones:
      output.availabilityZones != null ? de___listOfAvailabilityZone(output.availabilityZones, context) : undefined,
    EngineType: __expectString(output.engineType),
    HostInstanceType: __expectString(output.hostInstanceType),
    StorageType: __expectString(output.storageType),
    SupportedDeploymentModes:
      output.supportedDeploymentModes != null
        ? de___listOfDeploymentMode(output.supportedDeploymentModes, context)
        : undefined,
    SupportedEngineVersions:
      output.supportedEngineVersions != null ? de___listOf__string(output.supportedEngineVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BrokerSummary
 */
const de_BrokerSummary = (output: any, context: __SerdeContext): BrokerSummary => {
  return {
    BrokerArn: __expectString(output.brokerArn),
    BrokerId: __expectString(output.brokerId),
    BrokerName: __expectString(output.brokerName),
    BrokerState: __expectString(output.brokerState),
    Created: output.created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.created)) : undefined,
    DeploymentMode: __expectString(output.deploymentMode),
    EngineType: __expectString(output.engineType),
    HostInstanceType: __expectString(output.hostInstanceType),
  } as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Arn: __expectString(output.arn),
    AuthenticationStrategy: __expectString(output.authenticationStrategy),
    Created: output.created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.created)) : undefined,
    Description: __expectString(output.description),
    EngineType: __expectString(output.engineType),
    EngineVersion: __expectString(output.engineVersion),
    Id: __expectString(output.id),
    LatestRevision:
      output.latestRevision != null ? de_ConfigurationRevision(output.latestRevision, context) : undefined,
    Name: __expectString(output.name),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationId
 */
const de_ConfigurationId = (output: any, context: __SerdeContext): ConfigurationId => {
  return {
    Id: __expectString(output.id),
    Revision: __expectInt32(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationRevision
 */
const de_ConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision => {
  return {
    Created: output.created != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.created)) : undefined,
    Description: __expectString(output.description),
    Revision: __expectInt32(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1Configurations
 */
const de_Configurations = (output: any, context: __SerdeContext): Configurations => {
  return {
    Current: output.current != null ? de_ConfigurationId(output.current, context) : undefined,
    History: output.history != null ? de___listOfConfigurationId(output.history, context) : undefined,
    Pending: output.pending != null ? de_ConfigurationId(output.pending, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionOptions
 */
const de_EncryptionOptions = (output: any, context: __SerdeContext): EncryptionOptions => {
  return {
    KmsKeyId: __expectString(output.kmsKeyId),
    UseAwsOwnedKey: __expectBoolean(output.useAwsOwnedKey),
  } as any;
};

/**
 * deserializeAws_restJson1EngineVersion
 */
const de_EngineVersion = (output: any, context: __SerdeContext): EngineVersion => {
  return {
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1LdapServerMetadataOutput
 */
const de_LdapServerMetadataOutput = (output: any, context: __SerdeContext): LdapServerMetadataOutput => {
  return {
    Hosts: output.hosts != null ? de___listOf__string(output.hosts, context) : undefined,
    RoleBase: __expectString(output.roleBase),
    RoleName: __expectString(output.roleName),
    RoleSearchMatching: __expectString(output.roleSearchMatching),
    RoleSearchSubtree: __expectBoolean(output.roleSearchSubtree),
    ServiceAccountUsername: __expectString(output.serviceAccountUsername),
    UserBase: __expectString(output.userBase),
    UserRoleName: __expectString(output.userRoleName),
    UserSearchMatching: __expectString(output.userSearchMatching),
    UserSearchSubtree: __expectBoolean(output.userSearchSubtree),
  } as any;
};

/**
 * deserializeAws_restJson1Logs
 */
const de_Logs = (output: any, context: __SerdeContext): Logs => {
  return {
    Audit: __expectBoolean(output.audit),
    General: __expectBoolean(output.general),
  } as any;
};

/**
 * deserializeAws_restJson1LogsSummary
 */
const de_LogsSummary = (output: any, context: __SerdeContext): LogsSummary => {
  return {
    Audit: __expectBoolean(output.audit),
    AuditLogGroup: __expectString(output.auditLogGroup),
    General: __expectBoolean(output.general),
    GeneralLogGroup: __expectString(output.generalLogGroup),
    Pending: output.pending != null ? de_PendingLogs(output.pending, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PendingLogs
 */
const de_PendingLogs = (output: any, context: __SerdeContext): PendingLogs => {
  return {
    Audit: __expectBoolean(output.audit),
    General: __expectBoolean(output.general),
  } as any;
};

/**
 * deserializeAws_restJson1SanitizationWarning
 */
const de_SanitizationWarning = (output: any, context: __SerdeContext): SanitizationWarning => {
  return {
    AttributeName: __expectString(output.attributeName),
    ElementName: __expectString(output.elementName),
    Reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1UserPendingChanges
 */
const de_UserPendingChanges = (output: any, context: __SerdeContext): UserPendingChanges => {
  return {
    ConsoleAccess: __expectBoolean(output.consoleAccess),
    Groups: output.groups != null ? de___listOf__string(output.groups, context) : undefined,
    PendingChange: __expectString(output.pendingChange),
  } as any;
};

/**
 * deserializeAws_restJson1UserSummary
 */
const de_UserSummary = (output: any, context: __SerdeContext): UserSummary => {
  return {
    PendingChange: __expectString(output.pendingChange),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1WeeklyStartTime
 */
const de_WeeklyStartTime = (output: any, context: __SerdeContext): WeeklyStartTime => {
  return {
    DayOfWeek: __expectString(output.dayOfWeek),
    TimeOfDay: __expectString(output.timeOfDay),
    TimeZone: __expectString(output.timeZone),
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
