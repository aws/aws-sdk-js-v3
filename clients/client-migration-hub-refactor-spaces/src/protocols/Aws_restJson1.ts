// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  ApiGatewayProxyConfig,
  ApiGatewayProxyInput,
  ApiGatewayProxySummary,
  ApplicationSummary,
  ConflictException,
  DefaultRouteInput,
  EnvironmentSummary,
  EnvironmentVpc,
  ErrorResponse,
  HttpMethod,
  InternalServerException,
  InvalidResourcePolicyException,
  LambdaEndpointConfig,
  LambdaEndpointInput,
  LambdaEndpointSummary,
  ResourceNotFoundException,
  RouteSummary,
  ServiceQuotaExceededException,
  ServiceSummary,
  ThrottlingException,
  UriPathRouteInput,
  UrlEndpointConfig,
  UrlEndpointInput,
  UrlEndpointSummary,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CreateApplicationCommand = async (
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
  body = JSON.stringify({
    ...(input.ApiGatewayProxy != null && {
      ApiGatewayProxy: serializeAws_restJson1ApiGatewayProxyInput(input.ApiGatewayProxy, context),
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProxyType != null && { ProxyType: input.ProxyType }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
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

export const serializeAws_restJson1CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/environments";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NetworkFabricType != null && { NetworkFabricType: input.NetworkFabricType }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateRouteCommand = async (
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
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DefaultRoute != null && {
      DefaultRoute: serializeAws_restJson1DefaultRouteInput(input.DefaultRoute, context),
    }),
    ...(input.RouteType != null && { RouteType: input.RouteType }),
    ...(input.ServiceIdentifier != null && { ServiceIdentifier: input.ServiceIdentifier }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.UriPathRoute != null && {
      UriPathRoute: serializeAws_restJson1UriPathRouteInput(input.UriPathRoute, context),
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

export const serializeAws_restJson1CreateServiceCommand = async (
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
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.LambdaEndpoint != null && {
      LambdaEndpoint: serializeAws_restJson1LambdaEndpointInput(input.LambdaEndpoint, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.UrlEndpoint != null && {
      UrlEndpoint: serializeAws_restJson1UrlEndpointInput(input.UrlEndpoint, context),
    }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
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

export const serializeAws_restJson1DeleteApplicationCommand = async (
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

export const serializeAws_restJson1DeleteEnvironmentCommand = async (
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

export const serializeAws_restJson1DeleteResourcePolicyCommand = async (
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

export const serializeAws_restJson1DeleteRouteCommand = async (
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

export const serializeAws_restJson1DeleteServiceCommand = async (
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

export const serializeAws_restJson1GetApplicationCommand = async (
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

export const serializeAws_restJson1GetEnvironmentCommand = async (
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

export const serializeAws_restJson1GetResourcePolicyCommand = async (
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

export const serializeAws_restJson1GetRouteCommand = async (
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

export const serializeAws_restJson1GetServiceCommand = async (
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

export const serializeAws_restJson1ListApplicationsCommand = async (
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

export const serializeAws_restJson1ListEnvironmentsCommand = async (
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

export const serializeAws_restJson1ListEnvironmentVpcsCommand = async (
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

export const serializeAws_restJson1ListRoutesCommand = async (
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

export const serializeAws_restJson1ListServicesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcepolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateRouteCommand = async (
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
  body = JSON.stringify({
    ...(input.ActivationState != null && { ActivationState: input.ActivationState }),
  });
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

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApiGatewayProxy != null) {
    contents.ApiGatewayProxy = deserializeAws_restJson1ApiGatewayProxyInput(data.ApiGatewayProxy, context);
  }
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedByAccountId != null) {
    contents.CreatedByAccountId = __expectString(data.CreatedByAccountId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.ProxyType != null) {
    contents.ProxyType = __expectString(data.ProxyType);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.VpcId != null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return contents;
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NetworkFabricType != null) {
    contents.NetworkFabricType = __expectString(data.NetworkFabricType);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedByAccountId != null) {
    contents.CreatedByAccountId = __expectString(data.CreatedByAccountId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.RouteId != null) {
    contents.RouteId = __expectString(data.RouteId);
  }
  if (data.RouteType != null) {
    contents.RouteType = __expectString(data.RouteType);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UriPathRoute != null) {
    contents.UriPathRoute = deserializeAws_restJson1UriPathRouteInput(data.UriPathRoute, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateRouteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedByAccountId != null) {
    contents.CreatedByAccountId = __expectString(data.CreatedByAccountId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EndpointType != null) {
    contents.EndpointType = __expectString(data.EndpointType);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.LambdaEndpoint != null) {
    contents.LambdaEndpoint = deserializeAws_restJson1LambdaEndpointInput(data.LambdaEndpoint, context);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UrlEndpoint != null) {
    contents.UrlEndpoint = deserializeAws_restJson1UrlEndpointInput(data.UrlEndpoint, context);
  }
  if (data.VpcId != null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return contents;
};

const deserializeAws_restJson1CreateServiceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

const deserializeAws_restJson1DeleteEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.RouteId != null) {
    contents.RouteId = __expectString(data.RouteId);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

const deserializeAws_restJson1DeleteRouteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

const deserializeAws_restJson1DeleteServiceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApiGatewayProxy != null) {
    contents.ApiGatewayProxy = deserializeAws_restJson1ApiGatewayProxyConfig(data.ApiGatewayProxy, context);
  }
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedByAccountId != null) {
    contents.CreatedByAccountId = __expectString(data.CreatedByAccountId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.Error != null) {
    contents.Error = deserializeAws_restJson1ErrorResponse(data.Error, context);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.ProxyType != null) {
    contents.ProxyType = __expectString(data.ProxyType);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.VpcId != null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return contents;
};

const deserializeAws_restJson1GetApplicationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEnvironmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.Error != null) {
    contents.Error = deserializeAws_restJson1ErrorResponse(data.Error, context);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NetworkFabricType != null) {
    contents.NetworkFabricType = __expectString(data.NetworkFabricType);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.TransitGatewayId != null) {
    contents.TransitGatewayId = __expectString(data.TransitGatewayId);
  }
  return contents;
};

const deserializeAws_restJson1GetEnvironmentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  return contents;
};

const deserializeAws_restJson1GetResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1GetRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedByAccountId != null) {
    contents.CreatedByAccountId = __expectString(data.CreatedByAccountId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.Error != null) {
    contents.Error = deserializeAws_restJson1ErrorResponse(data.Error, context);
  }
  if (data.IncludeChildPaths != null) {
    contents.IncludeChildPaths = __expectBoolean(data.IncludeChildPaths);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Methods != null) {
    contents.Methods = deserializeAws_restJson1HttpMethods(data.Methods, context);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.PathResourceToId != null) {
    contents.PathResourceToId = deserializeAws_restJson1PathResourceToId(data.PathResourceToId, context);
  }
  if (data.RouteId != null) {
    contents.RouteId = __expectString(data.RouteId);
  }
  if (data.RouteType != null) {
    contents.RouteType = __expectString(data.RouteType);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.SourcePath != null) {
    contents.SourcePath = __expectString(data.SourcePath);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRouteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedByAccountId != null) {
    contents.CreatedByAccountId = __expectString(data.CreatedByAccountId);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.EndpointType != null) {
    contents.EndpointType = __expectString(data.EndpointType);
  }
  if (data.EnvironmentId != null) {
    contents.EnvironmentId = __expectString(data.EnvironmentId);
  }
  if (data.Error != null) {
    contents.Error = deserializeAws_restJson1ErrorResponse(data.Error, context);
  }
  if (data.LambdaEndpoint != null) {
    contents.LambdaEndpoint = deserializeAws_restJson1LambdaEndpointConfig(data.LambdaEndpoint, context);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OwnerAccountId != null) {
    contents.OwnerAccountId = __expectString(data.OwnerAccountId);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UrlEndpoint != null) {
    contents.UrlEndpoint = deserializeAws_restJson1UrlEndpointConfig(data.UrlEndpoint, context);
  }
  if (data.VpcId != null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return contents;
};

const deserializeAws_restJson1GetServiceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationSummaryList != null) {
    contents.ApplicationSummaryList = deserializeAws_restJson1ApplicationSummaries(
      data.ApplicationSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEnvironmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EnvironmentSummaryList != null) {
    contents.EnvironmentSummaryList = deserializeAws_restJson1EnvironmentSummaries(
      data.EnvironmentSummaryList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEnvironmentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1ListEnvironmentVpcsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentVpcsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEnvironmentVpcsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EnvironmentVpcList != null) {
    contents.EnvironmentVpcList = deserializeAws_restJson1EnvironmentVpcs(data.EnvironmentVpcList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEnvironmentVpcsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1ListRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RouteSummaryList != null) {
    contents.RouteSummaryList = deserializeAws_restJson1RouteSummaries(data.RouteSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRoutesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListServicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ServiceSummaryList != null) {
    contents.ServiceSummaryList = deserializeAws_restJson1ServiceSummaries(data.ServiceSummaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListServicesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.migrationhubrefactorspaces#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.migrationhubrefactorspaces#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidResourcePolicyException":
    case "com.amazonaws.migrationhubrefactorspaces#InvalidResourcePolicyException":
      throw await deserializeAws_restJson1InvalidResourcePolicyExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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

export const deserializeAws_restJson1UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationId != null) {
    contents.ApplicationId = __expectString(data.ApplicationId);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.RouteId != null) {
    contents.RouteId = __expectString(data.RouteId);
  }
  if (data.ServiceId != null) {
    contents.ServiceId = __expectString(data.ServiceId);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRouteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.migrationhubrefactorspaces#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhubrefactorspaces#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.migrationhubrefactorspaces#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.migrationhubrefactorspaces#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidResourcePolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourcePolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidResourcePolicyException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
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
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ApiGatewayProxyInput = (input: ApiGatewayProxyInput, context: __SerdeContext): any => {
  return {
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.StageName != null && { StageName: input.StageName }),
  };
};

const serializeAws_restJson1DefaultRouteInput = (input: DefaultRouteInput, context: __SerdeContext): any => {
  return {
    ...(input.ActivationState != null && { ActivationState: input.ActivationState }),
  };
};

const serializeAws_restJson1HttpMethods = (input: (HttpMethod | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LambdaEndpointInput = (input: LambdaEndpointInput, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UriPathRouteInput = (input: UriPathRouteInput, context: __SerdeContext): any => {
  return {
    ...(input.ActivationState != null && { ActivationState: input.ActivationState }),
    ...(input.IncludeChildPaths != null && { IncludeChildPaths: input.IncludeChildPaths }),
    ...(input.Methods != null && { Methods: serializeAws_restJson1HttpMethods(input.Methods, context) }),
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

const serializeAws_restJson1UrlEndpointInput = (input: UrlEndpointInput, context: __SerdeContext): any => {
  return {
    ...(input.HealthUrl != null && { HealthUrl: input.HealthUrl }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const deserializeAws_restJson1AdditionalDetails = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ApiGatewayProxyConfig = (output: any, context: __SerdeContext): ApiGatewayProxyConfig => {
  return {
    ApiGatewayId: __expectString(output.ApiGatewayId),
    EndpointType: __expectString(output.EndpointType),
    NlbArn: __expectString(output.NlbArn),
    NlbName: __expectString(output.NlbName),
    ProxyUrl: __expectString(output.ProxyUrl),
    StageName: __expectString(output.StageName),
    VpcLinkId: __expectString(output.VpcLinkId),
  } as any;
};

const deserializeAws_restJson1ApiGatewayProxyInput = (output: any, context: __SerdeContext): ApiGatewayProxyInput => {
  return {
    EndpointType: __expectString(output.EndpointType),
    StageName: __expectString(output.StageName),
  } as any;
};

const deserializeAws_restJson1ApiGatewayProxySummary = (
  output: any,
  context: __SerdeContext
): ApiGatewayProxySummary => {
  return {
    ApiGatewayId: __expectString(output.ApiGatewayId),
    EndpointType: __expectString(output.EndpointType),
    NlbArn: __expectString(output.NlbArn),
    NlbName: __expectString(output.NlbName),
    ProxyUrl: __expectString(output.ProxyUrl),
    StageName: __expectString(output.StageName),
    VpcLinkId: __expectString(output.VpcLinkId),
  } as any;
};

const deserializeAws_restJson1ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    ApiGatewayProxy:
      output.ApiGatewayProxy != null
        ? deserializeAws_restJson1ApiGatewayProxySummary(output.ApiGatewayProxy, context)
        : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreatedByAccountId: __expectString(output.CreatedByAccountId),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    EnvironmentId: __expectString(output.EnvironmentId),
    Error: output.Error != null ? deserializeAws_restJson1ErrorResponse(output.Error, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProxyType: __expectString(output.ProxyType),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1CidrBlocks = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EnvironmentSummaries = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EnvironmentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    EnvironmentId: __expectString(output.EnvironmentId),
    Error: output.Error != null ? deserializeAws_restJson1ErrorResponse(output.Error, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    NetworkFabricType: __expectString(output.NetworkFabricType),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    TransitGatewayId: __expectString(output.TransitGatewayId),
  } as any;
};

const deserializeAws_restJson1EnvironmentVpc = (output: any, context: __SerdeContext): EnvironmentVpc => {
  return {
    AccountId: __expectString(output.AccountId),
    CidrBlocks: output.CidrBlocks != null ? deserializeAws_restJson1CidrBlocks(output.CidrBlocks, context) : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    EnvironmentId: __expectString(output.EnvironmentId),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    VpcId: __expectString(output.VpcId),
    VpcName: __expectString(output.VpcName),
  } as any;
};

const deserializeAws_restJson1EnvironmentVpcs = (output: any, context: __SerdeContext): EnvironmentVpc[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EnvironmentVpc(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorResponse = (output: any, context: __SerdeContext): ErrorResponse => {
  return {
    AccountId: __expectString(output.AccountId),
    AdditionalDetails:
      output.AdditionalDetails != null
        ? deserializeAws_restJson1AdditionalDetails(output.AdditionalDetails, context)
        : undefined,
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1HttpMethods = (output: any, context: __SerdeContext): (HttpMethod | string)[] => {
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

const deserializeAws_restJson1LambdaEndpointConfig = (output: any, context: __SerdeContext): LambdaEndpointConfig => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_restJson1LambdaEndpointInput = (output: any, context: __SerdeContext): LambdaEndpointInput => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_restJson1LambdaEndpointSummary = (output: any, context: __SerdeContext): LambdaEndpointSummary => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_restJson1PathResourceToId = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1RouteSummaries = (output: any, context: __SerdeContext): RouteSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RouteSummary = (output: any, context: __SerdeContext): RouteSummary => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreatedByAccountId: __expectString(output.CreatedByAccountId),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    EnvironmentId: __expectString(output.EnvironmentId),
    Error: output.Error != null ? deserializeAws_restJson1ErrorResponse(output.Error, context) : undefined,
    IncludeChildPaths: __expectBoolean(output.IncludeChildPaths),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Methods: output.Methods != null ? deserializeAws_restJson1HttpMethods(output.Methods, context) : undefined,
    OwnerAccountId: __expectString(output.OwnerAccountId),
    PathResourceToId:
      output.PathResourceToId != null
        ? deserializeAws_restJson1PathResourceToId(output.PathResourceToId, context)
        : undefined,
    RouteId: __expectString(output.RouteId),
    RouteType: __expectString(output.RouteType),
    ServiceId: __expectString(output.ServiceId),
    SourcePath: __expectString(output.SourcePath),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceSummaries = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreatedByAccountId: __expectString(output.CreatedByAccountId),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    EndpointType: __expectString(output.EndpointType),
    EnvironmentId: __expectString(output.EnvironmentId),
    Error: output.Error != null ? deserializeAws_restJson1ErrorResponse(output.Error, context) : undefined,
    LambdaEndpoint:
      output.LambdaEndpoint != null
        ? deserializeAws_restJson1LambdaEndpointSummary(output.LambdaEndpoint, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Name: __expectString(output.Name),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ServiceId: __expectString(output.ServiceId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    UrlEndpoint:
      output.UrlEndpoint != null ? deserializeAws_restJson1UrlEndpointSummary(output.UrlEndpoint, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1UriPathRouteInput = (output: any, context: __SerdeContext): UriPathRouteInput => {
  return {
    ActivationState: __expectString(output.ActivationState),
    IncludeChildPaths: __expectBoolean(output.IncludeChildPaths),
    Methods: output.Methods != null ? deserializeAws_restJson1HttpMethods(output.Methods, context) : undefined,
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

const deserializeAws_restJson1UrlEndpointConfig = (output: any, context: __SerdeContext): UrlEndpointConfig => {
  return {
    HealthUrl: __expectString(output.HealthUrl),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1UrlEndpointInput = (output: any, context: __SerdeContext): UrlEndpointInput => {
  return {
    HealthUrl: __expectString(output.HealthUrl),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1UrlEndpointSummary = (output: any, context: __SerdeContext): UrlEndpointSummary => {
  return {
    HealthUrl: __expectString(output.HealthUrl),
    Url: __expectString(output.Url),
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
