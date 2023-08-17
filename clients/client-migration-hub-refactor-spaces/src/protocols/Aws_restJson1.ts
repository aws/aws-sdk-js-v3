// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "../commands/CreateRouteCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "../commands/DeleteRouteCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetRouteCommandInput, GetRouteCommandOutput } from "../commands/GetRouteCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "../commands/GetServiceCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListEnvironmentVpcsCommandInput,
  ListEnvironmentVpcsCommandOutput,
} from "../commands/ListEnvironmentVpcsCommand";
import { ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "../commands/UpdateRouteCommand";
import { MigrationHubRefactorSpacesServiceException as __BaseException } from "../models/MigrationHubRefactorSpacesServiceException";
import {
  AccessDeniedException,
  ApiGatewayProxyInput,
  ApplicationSummary,
  ConflictException,
  DefaultRouteInput,
  EnvironmentSummary,
  EnvironmentVpc,
  HttpMethod,
  InternalServerException,
  InvalidResourcePolicyException,
  LambdaEndpointInput,
  ResourceNotFoundException,
  RouteSummary,
  ServiceQuotaExceededException,
  ServiceSummary,
  ThrottlingException,
  UriPathRouteInput,
  UrlEndpointInput,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApiGatewayProxy: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      ProxyType: [],
      Tags: (_) => _json(_),
      VpcId: [],
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
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Name: [],
      NetworkFabricType: [],
      Tags: (_) => _json(_),
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
 * serializeAws_restJson1CreateRouteCommand
 */
export const se_CreateRouteCommand = async (
  input: CreateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DefaultRoute: (_) => _json(_),
      RouteType: [],
      ServiceIdentifier: [],
      Tags: (_) => _json(_),
      UriPathRoute: (_) => _json(_),
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
 * serializeAws_restJson1CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      EndpointType: [],
      LambdaEndpoint: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
      UrlEndpoint: (_) => _json(_),
      VpcId: [],
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
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
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
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments/{EnvironmentIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
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
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcepolicy/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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
 * serializeAws_restJson1DeleteRouteCommand
 */
export const se_DeleteRouteCommand = async (
  input: DeleteRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteIdentifier",
    () => input.RouteIdentifier!,
    "{RouteIdentifier}",
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
 * serializeAws_restJson1DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ServiceIdentifier",
    () => input.ServiceIdentifier!,
    "{ServiceIdentifier}",
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
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
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
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments/{EnvironmentIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
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
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcepolicy/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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
 * serializeAws_restJson1GetRouteCommand
 */
export const se_GetRouteCommand = async (
  input: GetRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteIdentifier",
    () => input.RouteIdentifier!,
    "{RouteIdentifier}",
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
 * serializeAws_restJson1GetServiceCommand
 */
export const se_GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ServiceIdentifier",
    () => input.ServiceIdentifier!,
    "{ServiceIdentifier}",
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
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListEnvironmentVpcsCommand
 */
export const se_ListEnvironmentVpcsCommand = async (
  input: ListEnvironmentVpcsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/vpcs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListRoutesCommand
 */
export const se_ListRoutesCommand = async (
  input: ListRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
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
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcepolicy";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
      ResourceArn: [],
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
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
 * serializeAws_restJson1UpdateRouteCommand
 */
export const se_UpdateRouteCommand = async (
  input: UpdateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EnvironmentIdentifier",
    () => input.EnvironmentIdentifier!,
    "{EnvironmentIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationIdentifier",
    () => input.ApplicationIdentifier!,
    "{ApplicationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteIdentifier",
    () => input.RouteIdentifier!,
    "{RouteIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      ActivationState: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayProxy: _json,
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentId: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerAccountId: __expectString,
    ProxyType: __expectString,
    State: __expectString,
    Tags: _json,
    VpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EnvironmentId: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NetworkFabricType: __expectString,
    OwnerAccountId: __expectString,
    State: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommandError
 */
const de_CreateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1CreateRouteCommand
 */
export const de_CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OwnerAccountId: __expectString,
    RouteId: __expectString,
    RouteType: __expectString,
    ServiceId: __expectString,
    State: __expectString,
    Tags: _json,
    UriPathRoute: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRouteCommandError
 */
const de_CreateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1CreateServiceCommand
 */
export const de_CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EndpointType: __expectString,
    EnvironmentId: __expectString,
    LambdaEndpoint: _json,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerAccountId: __expectString,
    ServiceId: __expectString,
    State: __expectString,
    Tags: _json,
    UrlEndpoint: _json,
    VpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceCommandError
 */
const de_CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    EnvironmentId: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    EnvironmentId: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentCommandError
 */
const de_DeleteEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1DeleteRouteCommand
 */
export const de_DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RouteId: __expectString,
    ServiceId: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteCommandError
 */
const de_DeleteRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1DeleteServiceCommand
 */
export const de_DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    EnvironmentId: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ServiceId: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceCommandError
 */
const de_DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApiGatewayProxy: _json,
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentId: __expectString,
    Error: _json,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerAccountId: __expectString,
    ProxyType: __expectString,
    State: __expectString,
    Tags: _json,
    VpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationCommandError
 */
const de_GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EnvironmentId: __expectString,
    Error: _json,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NetworkFabricType: __expectString,
    OwnerAccountId: __expectString,
    State: __expectString,
    Tags: _json,
    TransitGatewayId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommandError
 */
const de_GetEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1GetRouteCommand
 */
export const de_GetRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AppendSourcePath: __expectBoolean,
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentId: __expectString,
    Error: _json,
    IncludeChildPaths: __expectBoolean,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Methods: _json,
    OwnerAccountId: __expectString,
    PathResourceToId: _json,
    RouteId: __expectString,
    RouteType: __expectString,
    ServiceId: __expectString,
    SourcePath: __expectString,
    State: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRouteCommandError
 */
const de_GetRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1GetServiceCommand
 */
export const de_GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EndpointType: __expectString,
    EnvironmentId: __expectString,
    Error: _json,
    LambdaEndpoint: _json,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerAccountId: __expectString,
    ServiceId: __expectString,
    State: __expectString,
    Tags: _json,
    UrlEndpoint: _json,
    VpcId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceCommandError
 */
const de_GetServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationSummaryList: (_) => de_ApplicationSummaries(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EnvironmentSummaryList: (_) => de_EnvironmentSummaries(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommandError
 */
const de_ListEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1ListEnvironmentVpcsCommand
 */
export const de_ListEnvironmentVpcsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentVpcsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEnvironmentVpcsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EnvironmentVpcList: (_) => de_EnvironmentVpcs(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentVpcsCommandError
 */
const de_ListEnvironmentVpcsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentVpcsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1ListRoutesCommand
 */
export const de_ListRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RouteSummaryList: (_) => de_RouteSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoutesCommandError
 */
const de_ListRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListServicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ServiceSummaryList: (_) => de_ServiceSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServicesCommandError
 */
const de_ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.migrationhubrefactorspaces#InvalidResourcePolicyException":
      throw await de_InvalidResourcePolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
 * deserializeAws_restJson1UpdateRouteCommand
 */
export const de_UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationId: __expectString,
    Arn: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RouteId: __expectString,
    ServiceId: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRouteCommandError
 */
const de_UpdateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.migrationhubrefactorspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidResourcePolicyExceptionRes
 */
const de_InvalidResourcePolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourcePolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidResourcePolicyException({
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
    QuotaCode: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
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
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    QuotaCode: __expectString,
    ServiceCode: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApiGatewayProxyInput omitted.

// se_DefaultRouteInput omitted.

// se_HttpMethods omitted.

// se_LambdaEndpointInput omitted.

// se_TagMap omitted.

// se_UriPathRouteInput omitted.

// se_UrlEndpointInput omitted.

// de_AdditionalDetails omitted.

// de_ApiGatewayProxyConfig omitted.

// de_ApiGatewayProxyInput omitted.

// de_ApiGatewayProxySummary omitted.

/**
 * deserializeAws_restJson1ApplicationSummaries
 */
const de_ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    ApiGatewayProxy: _json,
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentId: __expectString,
    Error: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerAccountId: __expectString,
    ProxyType: __expectString,
    State: __expectString,
    Tags: _json,
    VpcId: __expectString,
  }) as any;
};

// de_CidrBlocks omitted.

/**
 * deserializeAws_restJson1EnvironmentSummaries
 */
const de_EnvironmentSummaries = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EnvironmentId: __expectString,
    Error: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NetworkFabricType: __expectString,
    OwnerAccountId: __expectString,
    State: __expectString,
    Tags: _json,
    TransitGatewayId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentVpc
 */
const de_EnvironmentVpc = (output: any, context: __SerdeContext): EnvironmentVpc => {
  return take(output, {
    AccountId: __expectString,
    CidrBlocks: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentId: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VpcId: __expectString,
    VpcName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentVpcs
 */
const de_EnvironmentVpcs = (output: any, context: __SerdeContext): EnvironmentVpc[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentVpc(entry, context);
    });
  return retVal;
};

// de_ErrorResponse omitted.

// de_HttpMethods omitted.

// de_LambdaEndpointConfig omitted.

// de_LambdaEndpointInput omitted.

// de_LambdaEndpointSummary omitted.

// de_PathResourceToId omitted.

/**
 * deserializeAws_restJson1RouteSummaries
 */
const de_RouteSummaries = (output: any, context: __SerdeContext): RouteSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteSummary
 */
const de_RouteSummary = (output: any, context: __SerdeContext): RouteSummary => {
  return take(output, {
    AppendSourcePath: __expectBoolean,
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentId: __expectString,
    Error: _json,
    IncludeChildPaths: __expectBoolean,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Methods: _json,
    OwnerAccountId: __expectString,
    PathResourceToId: _json,
    RouteId: __expectString,
    RouteType: __expectString,
    ServiceId: __expectString,
    SourcePath: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ServiceSummaries
 */
const de_ServiceSummaries = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return take(output, {
    ApplicationId: __expectString,
    Arn: __expectString,
    CreatedByAccountId: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EndpointType: __expectString,
    EnvironmentId: __expectString,
    Error: _json,
    LambdaEndpoint: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerAccountId: __expectString,
    ServiceId: __expectString,
    State: __expectString,
    Tags: _json,
    UrlEndpoint: _json,
    VpcId: __expectString,
  }) as any;
};

// de_TagMap omitted.

// de_UriPathRouteInput omitted.

// de_UrlEndpointConfig omitted.

// de_UrlEndpointInput omitted.

// de_UrlEndpointSummary omitted.

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
