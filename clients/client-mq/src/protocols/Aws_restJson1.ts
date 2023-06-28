// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import { PromoteCommandInput, PromoteCommandOutput } from "../commands/PromoteCommand";
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
  DataReplicationCounterpart,
  DataReplicationMetadataOutput,
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
  body = JSON.stringify(
    take(input, {
      authenticationStrategy: [, , `AuthenticationStrategy`],
      autoMinorVersionUpgrade: [, , `AutoMinorVersionUpgrade`],
      brokerName: [, , `BrokerName`],
      configuration: [, (_) => se_ConfigurationId(_, context), `Configuration`],
      creatorRequestId: [true, (_) => _ ?? generateIdempotencyToken(), `CreatorRequestId`],
      dataReplicationMode: [, , `DataReplicationMode`],
      dataReplicationPrimaryBrokerArn: [, , `DataReplicationPrimaryBrokerArn`],
      deploymentMode: [, , `DeploymentMode`],
      encryptionOptions: [, (_) => se_EncryptionOptions(_, context), `EncryptionOptions`],
      engineType: [, , `EngineType`],
      engineVersion: [, , `EngineVersion`],
      hostInstanceType: [, , `HostInstanceType`],
      ldapServerMetadata: [, (_) => se_LdapServerMetadataInput(_, context), `LdapServerMetadata`],
      logs: [, (_) => se_Logs(_, context), `Logs`],
      maintenanceWindowStartTime: [, (_) => se_WeeklyStartTime(_, context), `MaintenanceWindowStartTime`],
      publiclyAccessible: [, , `PubliclyAccessible`],
      securityGroups: [, (_) => _json(_), `SecurityGroups`],
      storageType: [, , `StorageType`],
      subnetIds: [, (_) => _json(_), `SubnetIds`],
      tags: [, (_) => _json(_), `Tags`],
      users: [, (_) => se___listOfUser(_, context), `Users`],
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
  body = JSON.stringify(
    take(input, {
      authenticationStrategy: [, , `AuthenticationStrategy`],
      engineType: [, , `EngineType`],
      engineVersion: [, , `EngineVersion`],
      name: [, , `Name`],
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      consoleAccess: [, , `ConsoleAccess`],
      groups: [, (_) => _json(_), `Groups`],
      password: [, , `Password`],
      replicationUser: [, , `ReplicationUser`],
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
 * serializeAws_restJson1PromoteCommand
 */
export const se_PromoteCommand = async (
  input: PromoteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/promote";
  resolvedPath = __resolvedPath(resolvedPath, input, "BrokerId", () => input.BrokerId!, "{BrokerId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      mode: [, , `Mode`],
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
  body = JSON.stringify(
    take(input, {
      authenticationStrategy: [, , `AuthenticationStrategy`],
      autoMinorVersionUpgrade: [, , `AutoMinorVersionUpgrade`],
      configuration: [, (_) => se_ConfigurationId(_, context), `Configuration`],
      dataReplicationMode: [, , `DataReplicationMode`],
      engineVersion: [, , `EngineVersion`],
      hostInstanceType: [, , `HostInstanceType`],
      ldapServerMetadata: [, (_) => se_LdapServerMetadataInput(_, context), `LdapServerMetadata`],
      logs: [, (_) => se_Logs(_, context), `Logs`],
      maintenanceWindowStartTime: [, (_) => se_WeeklyStartTime(_, context), `MaintenanceWindowStartTime`],
      securityGroups: [, (_) => _json(_), `SecurityGroups`],
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
  body = JSON.stringify(
    take(input, {
      data: [, , `Data`],
      description: [, , `Description`],
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
  body = JSON.stringify(
    take(input, {
      consoleAccess: [, , `ConsoleAccess`],
      groups: [, (_) => _json(_), `Groups`],
      password: [, , `Password`],
      replicationUser: [, , `ReplicationUser`],
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
  const doc = take(data, {
    BrokerArn: [, __expectString, `brokerArn`],
    BrokerId: [, __expectString, `brokerId`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AuthenticationStrategy: [, __expectString, `authenticationStrategy`],
    Created: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    Id: [, __expectString, `id`],
    LatestRevision: [, (_) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BrokerId: [, __expectString, `brokerId`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ActionsRequired: [, (_) => de___listOfActionRequired(_, context), `actionsRequired`],
    AuthenticationStrategy: [, __expectString, `authenticationStrategy`],
    AutoMinorVersionUpgrade: [, __expectBoolean, `autoMinorVersionUpgrade`],
    BrokerArn: [, __expectString, `brokerArn`],
    BrokerId: [, __expectString, `brokerId`],
    BrokerInstances: [, (_) => de___listOfBrokerInstance(_, context), `brokerInstances`],
    BrokerName: [, __expectString, `brokerName`],
    BrokerState: [, __expectString, `brokerState`],
    Configurations: [, (_) => de_Configurations(_, context), `configurations`],
    Created: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    DataReplicationMetadata: [, (_) => de_DataReplicationMetadataOutput(_, context), `dataReplicationMetadata`],
    DataReplicationMode: [, __expectString, `dataReplicationMode`],
    DeploymentMode: [, __expectString, `deploymentMode`],
    EncryptionOptions: [, (_) => de_EncryptionOptions(_, context), `encryptionOptions`],
    EngineType: [, __expectString, `engineType`],
    EngineVersion: [, __expectString, `engineVersion`],
    HostInstanceType: [, __expectString, `hostInstanceType`],
    LdapServerMetadata: [, (_) => de_LdapServerMetadataOutput(_, context), `ldapServerMetadata`],
    Logs: [, (_) => de_LogsSummary(_, context), `logs`],
    MaintenanceWindowStartTime: [, (_) => de_WeeklyStartTime(_, context), `maintenanceWindowStartTime`],
    PendingAuthenticationStrategy: [, __expectString, `pendingAuthenticationStrategy`],
    PendingDataReplicationMetadata: [
      ,
      (_) => de_DataReplicationMetadataOutput(_, context),
      `pendingDataReplicationMetadata`,
    ],
    PendingDataReplicationMode: [, __expectString, `pendingDataReplicationMode`],
    PendingEngineVersion: [, __expectString, `pendingEngineVersion`],
    PendingHostInstanceType: [, __expectString, `pendingHostInstanceType`],
    PendingLdapServerMetadata: [, (_) => de_LdapServerMetadataOutput(_, context), `pendingLdapServerMetadata`],
    PendingSecurityGroups: [, _json, `pendingSecurityGroups`],
    PubliclyAccessible: [, __expectBoolean, `publiclyAccessible`],
    SecurityGroups: [, _json, `securityGroups`],
    StorageType: [, __expectString, `storageType`],
    SubnetIds: [, _json, `subnetIds`],
    Tags: [, _json, `tags`],
    Users: [, (_) => de___listOfUserSummary(_, context), `users`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BrokerEngineTypes: [, (_) => de___listOfBrokerEngineType(_, context), `brokerEngineTypes`],
    MaxResults: [, __expectInt32, `maxResults`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BrokerInstanceOptions: [, (_) => de___listOfBrokerInstanceOption(_, context), `brokerInstanceOptions`],
    MaxResults: [, __expectInt32, `maxResults`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AuthenticationStrategy: [, __expectString, `authenticationStrategy`],
    Created: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    Description: [, __expectString, `description`],
    EngineType: [, __expectString, `engineType`],
    EngineVersion: [, __expectString, `engineVersion`],
    Id: [, __expectString, `id`],
    LatestRevision: [, (_) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ConfigurationId: [, __expectString, `configurationId`],
    Created: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    Data: [, __expectString, `data`],
    Description: [, __expectString, `description`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BrokerId: [, __expectString, `brokerId`],
    ConsoleAccess: [, __expectBoolean, `consoleAccess`],
    Groups: [, _json, `groups`],
    Pending: [, (_) => de_UserPendingChanges(_, context), `pending`],
    ReplicationUser: [, __expectBoolean, `replicationUser`],
    Username: [, __expectString, `username`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BrokerSummaries: [, (_) => de___listOfBrokerSummary(_, context), `brokerSummaries`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ConfigurationId: [, __expectString, `configurationId`],
    MaxResults: [, __expectInt32, `maxResults`],
    NextToken: [, __expectString, `nextToken`],
    Revisions: [, (_) => de___listOfConfigurationRevision(_, context), `revisions`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Configurations: [, (_) => de___listOfConfiguration(_, context), `configurations`],
    MaxResults: [, __expectInt32, `maxResults`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BrokerId: [, __expectString, `brokerId`],
    MaxResults: [, __expectInt32, `maxResults`],
    NextToken: [, __expectString, `nextToken`],
    Users: [, (_) => de___listOfUserSummary(_, context), `users`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PromoteCommand
 */
export const de_PromoteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PromoteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BrokerId: [, __expectString, `brokerId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PromoteCommandError
 */
const de_PromoteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AuthenticationStrategy: [, __expectString, `authenticationStrategy`],
    AutoMinorVersionUpgrade: [, __expectBoolean, `autoMinorVersionUpgrade`],
    BrokerId: [, __expectString, `brokerId`],
    Configuration: [, (_) => de_ConfigurationId(_, context), `configuration`],
    DataReplicationMetadata: [, (_) => de_DataReplicationMetadataOutput(_, context), `dataReplicationMetadata`],
    DataReplicationMode: [, __expectString, `dataReplicationMode`],
    EngineVersion: [, __expectString, `engineVersion`],
    HostInstanceType: [, __expectString, `hostInstanceType`],
    LdapServerMetadata: [, (_) => de_LdapServerMetadataOutput(_, context), `ldapServerMetadata`],
    Logs: [, (_) => de_Logs(_, context), `logs`],
    MaintenanceWindowStartTime: [, (_) => de_WeeklyStartTime(_, context), `maintenanceWindowStartTime`],
    PendingDataReplicationMetadata: [
      ,
      (_) => de_DataReplicationMetadataOutput(_, context),
      `pendingDataReplicationMetadata`,
    ],
    PendingDataReplicationMode: [, __expectString, `pendingDataReplicationMode`],
    SecurityGroups: [, _json, `securityGroups`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Created: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    Id: [, __expectString, `id`],
    LatestRevision: [, (_) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
    Warnings: [, (_) => de___listOfSanitizationWarning(_, context), `warnings`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorAttribute: [, __expectString, `errorAttribute`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    ErrorAttribute: [, __expectString, `errorAttribute`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    ErrorAttribute: [, __expectString, `errorAttribute`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    ErrorAttribute: [, __expectString, `errorAttribute`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    ErrorAttribute: [, __expectString, `errorAttribute`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    ErrorAttribute: [, __expectString, `errorAttribute`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

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

// se___mapOf__string omitted.

/**
 * serializeAws_restJson1ConfigurationId
 */
const se_ConfigurationId = (input: ConfigurationId, context: __SerdeContext): any => {
  return take(input, {
    id: [, , `Id`],
    revision: [, , `Revision`],
  });
};

/**
 * serializeAws_restJson1EncryptionOptions
 */
const se_EncryptionOptions = (input: EncryptionOptions, context: __SerdeContext): any => {
  return take(input, {
    kmsKeyId: [, , `KmsKeyId`],
    useAwsOwnedKey: [, , `UseAwsOwnedKey`],
  });
};

/**
 * serializeAws_restJson1LdapServerMetadataInput
 */
const se_LdapServerMetadataInput = (input: LdapServerMetadataInput, context: __SerdeContext): any => {
  return take(input, {
    hosts: [, _json, `Hosts`],
    roleBase: [, , `RoleBase`],
    roleName: [, , `RoleName`],
    roleSearchMatching: [, , `RoleSearchMatching`],
    roleSearchSubtree: [, , `RoleSearchSubtree`],
    serviceAccountPassword: [, , `ServiceAccountPassword`],
    serviceAccountUsername: [, , `ServiceAccountUsername`],
    userBase: [, , `UserBase`],
    userRoleName: [, , `UserRoleName`],
    userSearchMatching: [, , `UserSearchMatching`],
    userSearchSubtree: [, , `UserSearchSubtree`],
  });
};

/**
 * serializeAws_restJson1Logs
 */
const se_Logs = (input: Logs, context: __SerdeContext): any => {
  return take(input, {
    audit: [, , `Audit`],
    general: [, , `General`],
  });
};

/**
 * serializeAws_restJson1User
 */
const se_User = (input: User, context: __SerdeContext): any => {
  return take(input, {
    consoleAccess: [, , `ConsoleAccess`],
    groups: [, _json, `Groups`],
    password: [, , `Password`],
    replicationUser: [, , `ReplicationUser`],
    username: [, , `Username`],
  });
};

/**
 * serializeAws_restJson1WeeklyStartTime
 */
const se_WeeklyStartTime = (input: WeeklyStartTime, context: __SerdeContext): any => {
  return take(input, {
    dayOfWeek: [, , `DayOfWeek`],
    timeOfDay: [, , `TimeOfDay`],
    timeZone: [, , `TimeZone`],
  });
};

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfActionRequired
 */
const de___listOfActionRequired = (output: any, context: __SerdeContext): ActionRequired[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ConfigurationRevision(entry, context);
    });
  return retVal;
};

// de___listOfDeploymentMode omitted.

/**
 * deserializeAws_restJson1__listOfEngineVersion
 */
const de___listOfEngineVersion = (output: any, context: __SerdeContext): EngineVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_UserSummary(entry, context);
    });
  return retVal;
};

// de___mapOf__string omitted.

/**
 * deserializeAws_restJson1ActionRequired
 */
const de_ActionRequired = (output: any, context: __SerdeContext): ActionRequired => {
  return take(output, {
    ActionRequiredCode: [, __expectString, `actionRequiredCode`],
    ActionRequiredInfo: [, __expectString, `actionRequiredInfo`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvailabilityZone
 */
const de_AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return take(output, {
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerEngineType
 */
const de_BrokerEngineType = (output: any, context: __SerdeContext): BrokerEngineType => {
  return take(output, {
    EngineType: [, __expectString, `engineType`],
    EngineVersions: [, (_: any) => de___listOfEngineVersion(_, context), `engineVersions`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerInstance
 */
const de_BrokerInstance = (output: any, context: __SerdeContext): BrokerInstance => {
  return take(output, {
    ConsoleURL: [, __expectString, `consoleURL`],
    Endpoints: [, _json, `endpoints`],
    IpAddress: [, __expectString, `ipAddress`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerInstanceOption
 */
const de_BrokerInstanceOption = (output: any, context: __SerdeContext): BrokerInstanceOption => {
  return take(output, {
    AvailabilityZones: [, (_: any) => de___listOfAvailabilityZone(_, context), `availabilityZones`],
    EngineType: [, __expectString, `engineType`],
    HostInstanceType: [, __expectString, `hostInstanceType`],
    StorageType: [, __expectString, `storageType`],
    SupportedDeploymentModes: [, _json, `supportedDeploymentModes`],
    SupportedEngineVersions: [, _json, `supportedEngineVersions`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerSummary
 */
const de_BrokerSummary = (output: any, context: __SerdeContext): BrokerSummary => {
  return take(output, {
    BrokerArn: [, __expectString, `brokerArn`],
    BrokerId: [, __expectString, `brokerId`],
    BrokerName: [, __expectString, `brokerName`],
    BrokerState: [, __expectString, `brokerState`],
    Created: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    DeploymentMode: [, __expectString, `deploymentMode`],
    EngineType: [, __expectString, `engineType`],
    HostInstanceType: [, __expectString, `hostInstanceType`],
  }) as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    AuthenticationStrategy: [, __expectString, `authenticationStrategy`],
    Created: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    Description: [, __expectString, `description`],
    EngineType: [, __expectString, `engineType`],
    EngineVersion: [, __expectString, `engineVersion`],
    Id: [, __expectString, `id`],
    LatestRevision: [, (_: any) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigurationId
 */
const de_ConfigurationId = (output: any, context: __SerdeContext): ConfigurationId => {
  return take(output, {
    Id: [, __expectString, `id`],
    Revision: [, __expectInt32, `revision`],
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigurationRevision
 */
const de_ConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision => {
  return take(output, {
    Created: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `created`],
    Description: [, __expectString, `description`],
    Revision: [, __expectInt32, `revision`],
  }) as any;
};

/**
 * deserializeAws_restJson1Configurations
 */
const de_Configurations = (output: any, context: __SerdeContext): Configurations => {
  return take(output, {
    Current: [, (_: any) => de_ConfigurationId(_, context), `current`],
    History: [, (_: any) => de___listOfConfigurationId(_, context), `history`],
    Pending: [, (_: any) => de_ConfigurationId(_, context), `pending`],
  }) as any;
};

/**
 * deserializeAws_restJson1DataReplicationCounterpart
 */
const de_DataReplicationCounterpart = (output: any, context: __SerdeContext): DataReplicationCounterpart => {
  return take(output, {
    BrokerId: [, __expectString, `brokerId`],
    Region: [, __expectString, `region`],
  }) as any;
};

/**
 * deserializeAws_restJson1DataReplicationMetadataOutput
 */
const de_DataReplicationMetadataOutput = (output: any, context: __SerdeContext): DataReplicationMetadataOutput => {
  return take(output, {
    DataReplicationCounterpart: [, (_: any) => de_DataReplicationCounterpart(_, context), `dataReplicationCounterpart`],
    DataReplicationRole: [, __expectString, `dataReplicationRole`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncryptionOptions
 */
const de_EncryptionOptions = (output: any, context: __SerdeContext): EncryptionOptions => {
  return take(output, {
    KmsKeyId: [, __expectString, `kmsKeyId`],
    UseAwsOwnedKey: [, __expectBoolean, `useAwsOwnedKey`],
  }) as any;
};

/**
 * deserializeAws_restJson1EngineVersion
 */
const de_EngineVersion = (output: any, context: __SerdeContext): EngineVersion => {
  return take(output, {
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1LdapServerMetadataOutput
 */
const de_LdapServerMetadataOutput = (output: any, context: __SerdeContext): LdapServerMetadataOutput => {
  return take(output, {
    Hosts: [, _json, `hosts`],
    RoleBase: [, __expectString, `roleBase`],
    RoleName: [, __expectString, `roleName`],
    RoleSearchMatching: [, __expectString, `roleSearchMatching`],
    RoleSearchSubtree: [, __expectBoolean, `roleSearchSubtree`],
    ServiceAccountUsername: [, __expectString, `serviceAccountUsername`],
    UserBase: [, __expectString, `userBase`],
    UserRoleName: [, __expectString, `userRoleName`],
    UserSearchMatching: [, __expectString, `userSearchMatching`],
    UserSearchSubtree: [, __expectBoolean, `userSearchSubtree`],
  }) as any;
};

/**
 * deserializeAws_restJson1Logs
 */
const de_Logs = (output: any, context: __SerdeContext): Logs => {
  return take(output, {
    Audit: [, __expectBoolean, `audit`],
    General: [, __expectBoolean, `general`],
  }) as any;
};

/**
 * deserializeAws_restJson1LogsSummary
 */
const de_LogsSummary = (output: any, context: __SerdeContext): LogsSummary => {
  return take(output, {
    Audit: [, __expectBoolean, `audit`],
    AuditLogGroup: [, __expectString, `auditLogGroup`],
    General: [, __expectBoolean, `general`],
    GeneralLogGroup: [, __expectString, `generalLogGroup`],
    Pending: [, (_: any) => de_PendingLogs(_, context), `pending`],
  }) as any;
};

/**
 * deserializeAws_restJson1PendingLogs
 */
const de_PendingLogs = (output: any, context: __SerdeContext): PendingLogs => {
  return take(output, {
    Audit: [, __expectBoolean, `audit`],
    General: [, __expectBoolean, `general`],
  }) as any;
};

/**
 * deserializeAws_restJson1SanitizationWarning
 */
const de_SanitizationWarning = (output: any, context: __SerdeContext): SanitizationWarning => {
  return take(output, {
    AttributeName: [, __expectString, `attributeName`],
    ElementName: [, __expectString, `elementName`],
    Reason: [, __expectString, `reason`],
  }) as any;
};

/**
 * deserializeAws_restJson1UserPendingChanges
 */
const de_UserPendingChanges = (output: any, context: __SerdeContext): UserPendingChanges => {
  return take(output, {
    ConsoleAccess: [, __expectBoolean, `consoleAccess`],
    Groups: [, _json, `groups`],
    PendingChange: [, __expectString, `pendingChange`],
  }) as any;
};

/**
 * deserializeAws_restJson1UserSummary
 */
const de_UserSummary = (output: any, context: __SerdeContext): UserSummary => {
  return take(output, {
    PendingChange: [, __expectString, `pendingChange`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1WeeklyStartTime
 */
const de_WeeklyStartTime = (output: any, context: __SerdeContext): WeeklyStartTime => {
  return take(output, {
    DayOfWeek: [, __expectString, `dayOfWeek`],
    TimeOfDay: [, __expectString, `timeOfDay`],
    TimeZone: [, __expectString, `timeZone`],
  }) as any;
};

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
