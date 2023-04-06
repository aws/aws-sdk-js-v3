// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateGatewayRouteCommandInput, CreateGatewayRouteCommandOutput } from "../commands/CreateGatewayRouteCommand";
import { CreateMeshCommandInput, CreateMeshCommandOutput } from "../commands/CreateMeshCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "../commands/CreateRouteCommand";
import {
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
} from "../commands/CreateVirtualGatewayCommand";
import { CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput } from "../commands/CreateVirtualNodeCommand";
import {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
} from "../commands/CreateVirtualRouterCommand";
import {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
} from "../commands/CreateVirtualServiceCommand";
import { DeleteGatewayRouteCommandInput, DeleteGatewayRouteCommandOutput } from "../commands/DeleteGatewayRouteCommand";
import { DeleteMeshCommandInput, DeleteMeshCommandOutput } from "../commands/DeleteMeshCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "../commands/DeleteRouteCommand";
import {
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
} from "../commands/DeleteVirtualGatewayCommand";
import { DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput } from "../commands/DeleteVirtualNodeCommand";
import {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
} from "../commands/DeleteVirtualRouterCommand";
import {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput,
} from "../commands/DeleteVirtualServiceCommand";
import {
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
} from "../commands/DescribeGatewayRouteCommand";
import { DescribeMeshCommandInput, DescribeMeshCommandOutput } from "../commands/DescribeMeshCommand";
import { DescribeRouteCommandInput, DescribeRouteCommandOutput } from "../commands/DescribeRouteCommand";
import {
  DescribeVirtualGatewayCommandInput,
  DescribeVirtualGatewayCommandOutput,
} from "../commands/DescribeVirtualGatewayCommand";
import {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
} from "../commands/DescribeVirtualNodeCommand";
import {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput,
} from "../commands/DescribeVirtualRouterCommand";
import {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput,
} from "../commands/DescribeVirtualServiceCommand";
import { ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput } from "../commands/ListGatewayRoutesCommand";
import { ListMeshesCommandInput, ListMeshesCommandOutput } from "../commands/ListMeshesCommand";
import { ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "../commands/ListVirtualGatewaysCommand";
import { ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput } from "../commands/ListVirtualNodesCommand";
import { ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput } from "../commands/ListVirtualRoutersCommand";
import {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "../commands/ListVirtualServicesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGatewayRouteCommandInput, UpdateGatewayRouteCommandOutput } from "../commands/UpdateGatewayRouteCommand";
import { UpdateMeshCommandInput, UpdateMeshCommandOutput } from "../commands/UpdateMeshCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "../commands/UpdateRouteCommand";
import {
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
} from "../commands/UpdateVirtualGatewayCommand";
import { UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput } from "../commands/UpdateVirtualNodeCommand";
import {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
} from "../commands/UpdateVirtualRouterCommand";
import {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
} from "../commands/UpdateVirtualServiceCommand";
import { AppMeshServiceException as __BaseException } from "../models/AppMeshServiceException";
import {
  AccessLog,
  AwsCloudMapInstanceAttribute,
  AwsCloudMapServiceDiscovery,
  Backend,
  BackendDefaults,
  BadRequestException,
  ClientPolicy,
  ClientPolicyTls,
  ClientTlsCertificate,
  ConflictException,
  DnsServiceDiscovery,
  Duration,
  EgressFilter,
  FileAccessLog,
  ForbiddenException,
  GatewayRouteData,
  GatewayRouteHostnameMatch,
  GatewayRouteHostnameRewrite,
  GatewayRouteRef,
  GatewayRouteSpec,
  GatewayRouteStatus,
  GatewayRouteTarget,
  GatewayRouteVirtualService,
  GrpcGatewayRoute,
  GrpcGatewayRouteAction,
  GrpcGatewayRouteMatch,
  GrpcGatewayRouteMetadata,
  GrpcGatewayRouteRewrite,
  GrpcMetadataMatchMethod,
  GrpcRetryPolicy,
  GrpcRetryPolicyEvent,
  GrpcRoute,
  GrpcRouteAction,
  GrpcRouteMatch,
  GrpcRouteMetadata,
  GrpcRouteMetadataMatchMethod,
  GrpcTimeout,
  HeaderMatchMethod,
  HealthCheckPolicy,
  HttpGatewayRoute,
  HttpGatewayRouteAction,
  HttpGatewayRouteHeader,
  HttpGatewayRouteMatch,
  HttpGatewayRoutePathRewrite,
  HttpGatewayRoutePrefixRewrite,
  HttpGatewayRouteRewrite,
  HttpPathMatch,
  HttpQueryParameter,
  HttpRetryPolicy,
  HttpRoute,
  HttpRouteAction,
  HttpRouteHeader,
  HttpRouteMatch,
  HttpTimeout,
  InternalServerErrorException,
  JsonFormatRef,
  LimitExceededException,
  Listener,
  ListenerTimeout,
  ListenerTls,
  ListenerTlsAcmCertificate,
  ListenerTlsCertificate,
  ListenerTlsFileCertificate,
  ListenerTlsSdsCertificate,
  ListenerTlsValidationContext,
  ListenerTlsValidationContextTrust,
  Logging,
  LoggingFormat,
  MatchRange,
  MeshData,
  MeshRef,
  MeshServiceDiscovery,
  MeshSpec,
  MeshStatus,
  NotFoundException,
  OutlierDetection,
  PortMapping,
  QueryParameterMatch,
  ResourceInUseException,
  ResourceMetadata,
  RouteData,
  RouteRef,
  RouteSpec,
  RouteStatus,
  ServiceDiscovery,
  ServiceUnavailableException,
  SubjectAlternativeNameMatchers,
  SubjectAlternativeNames,
  TagRef,
  TcpRetryPolicyEvent,
  TcpRoute,
  TcpRouteAction,
  TcpRouteMatch,
  TcpTimeout,
  TlsValidationContext,
  TlsValidationContextAcmTrust,
  TlsValidationContextFileTrust,
  TlsValidationContextSdsTrust,
  TlsValidationContextTrust,
  TooManyRequestsException,
  TooManyTagsException,
  VirtualGatewayAccessLog,
  VirtualGatewayBackendDefaults,
  VirtualGatewayClientPolicy,
  VirtualGatewayClientPolicyTls,
  VirtualGatewayClientTlsCertificate,
  VirtualGatewayConnectionPool,
  VirtualGatewayData,
  VirtualGatewayFileAccessLog,
  VirtualGatewayGrpcConnectionPool,
  VirtualGatewayHealthCheckPolicy,
  VirtualGatewayHttp2ConnectionPool,
  VirtualGatewayHttpConnectionPool,
  VirtualGatewayListener,
  VirtualGatewayListenerTls,
  VirtualGatewayListenerTlsAcmCertificate,
  VirtualGatewayListenerTlsCertificate,
  VirtualGatewayListenerTlsFileCertificate,
  VirtualGatewayListenerTlsSdsCertificate,
  VirtualGatewayListenerTlsValidationContext,
  VirtualGatewayListenerTlsValidationContextTrust,
  VirtualGatewayLogging,
  VirtualGatewayPortMapping,
  VirtualGatewayRef,
  VirtualGatewaySpec,
  VirtualGatewayStatus,
  VirtualGatewayTlsValidationContext,
  VirtualGatewayTlsValidationContextAcmTrust,
  VirtualGatewayTlsValidationContextFileTrust,
  VirtualGatewayTlsValidationContextSdsTrust,
  VirtualGatewayTlsValidationContextTrust,
  VirtualNodeConnectionPool,
  VirtualNodeData,
  VirtualNodeGrpcConnectionPool,
  VirtualNodeHttp2ConnectionPool,
  VirtualNodeHttpConnectionPool,
  VirtualNodeRef,
  VirtualNodeServiceProvider,
  VirtualNodeSpec,
  VirtualNodeStatus,
  VirtualNodeTcpConnectionPool,
  VirtualRouterData,
  VirtualRouterListener,
  VirtualRouterRef,
  VirtualRouterServiceProvider,
  VirtualRouterSpec,
  VirtualRouterStatus,
  VirtualServiceBackend,
  VirtualServiceData,
  VirtualServiceProvider,
  VirtualServiceRef,
  VirtualServiceSpec,
  VirtualServiceStatus,
  WeightedTarget,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateGatewayRouteCommand
 */
export const se_CreateGatewayRouteCommand = async (
  input: CreateGatewayRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.gatewayRouteName != null && { gatewayRouteName: input.gatewayRouteName }),
    ...(input.spec != null && { spec: se_GatewayRouteSpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateMeshCommand
 */
export const se_CreateMeshCommand = async (
  input: CreateMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.meshName != null && { meshName: input.meshName }),
    ...(input.spec != null && { spec: se_MeshSpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.routeName != null && { routeName: input.routeName }),
    ...(input.spec != null && { spec: se_RouteSpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateVirtualGatewayCommand
 */
export const se_CreateVirtualGatewayCommand = async (
  input: CreateVirtualGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateways";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualGatewaySpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualGatewayName != null && { virtualGatewayName: input.virtualGatewayName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateVirtualNodeCommand
 */
export const se_CreateVirtualNodeCommand = async (
  input: CreateVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes/{meshName}/virtualNodes";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualNodeSpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualNodeName != null && { virtualNodeName: input.virtualNodeName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateVirtualRouterCommand
 */
export const se_CreateVirtualRouterCommand = async (
  input: CreateVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualRouters";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualRouterSpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualRouterName != null && { virtualRouterName: input.virtualRouterName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateVirtualServiceCommand
 */
export const se_CreateVirtualServiceCommand = async (
  input: CreateVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualServices";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualServiceSpec(input.spec, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.virtualServiceName != null && { virtualServiceName: input.virtualServiceName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteGatewayRouteCommand
 */
export const se_DeleteGatewayRouteCommand = async (
  input: DeleteGatewayRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "gatewayRouteName",
    () => input.gatewayRouteName!,
    "{gatewayRouteName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DeleteMeshCommand
 */
export const se_DeleteMeshCommand = async (
  input: DeleteMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes/{meshName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
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
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "routeName", () => input.routeName!, "{routeName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DeleteVirtualGatewayCommand
 */
export const se_DeleteVirtualGatewayCommand = async (
  input: DeleteVirtualGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DeleteVirtualNodeCommand
 */
export const se_DeleteVirtualNodeCommand = async (
  input: DeleteVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualNodeName",
    () => input.virtualNodeName!,
    "{virtualNodeName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DeleteVirtualRouterCommand
 */
export const se_DeleteVirtualRouterCommand = async (
  input: DeleteVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DeleteVirtualServiceCommand
 */
export const se_DeleteVirtualServiceCommand = async (
  input: DeleteVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualServiceName",
    () => input.virtualServiceName!,
    "{virtualServiceName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeGatewayRouteCommand
 */
export const se_DescribeGatewayRouteCommand = async (
  input: DescribeGatewayRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "gatewayRouteName",
    () => input.gatewayRouteName!,
    "{gatewayRouteName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeMeshCommand
 */
export const se_DescribeMeshCommand = async (
  input: DescribeMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes/{meshName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeRouteCommand
 */
export const se_DescribeRouteCommand = async (
  input: DescribeRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "routeName", () => input.routeName!, "{routeName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeVirtualGatewayCommand
 */
export const se_DescribeVirtualGatewayCommand = async (
  input: DescribeVirtualGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeVirtualNodeCommand
 */
export const se_DescribeVirtualNodeCommand = async (
  input: DescribeVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualNodeName",
    () => input.virtualNodeName!,
    "{virtualNodeName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeVirtualRouterCommand
 */
export const se_DescribeVirtualRouterCommand = async (
  input: DescribeVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1DescribeVirtualServiceCommand
 */
export const se_DescribeVirtualServiceCommand = async (
  input: DescribeVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualServiceName",
    () => input.virtualServiceName!,
    "{virtualServiceName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1ListGatewayRoutesCommand
 */
export const se_ListGatewayRoutesCommand = async (
  input: ListGatewayRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1ListMeshesCommand
 */
export const se_ListMeshesCommand = async (
  input: ListMeshesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes";
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
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
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    meshOwner: [, input.meshOwner!],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
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
 * serializeAws_restJson1ListVirtualGatewaysCommand
 */
export const se_ListVirtualGatewaysCommand = async (
  input: ListVirtualGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateways";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1ListVirtualNodesCommand
 */
export const se_ListVirtualNodesCommand = async (
  input: ListVirtualNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes/{meshName}/virtualNodes";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1ListVirtualRoutersCommand
 */
export const se_ListVirtualRoutersCommand = async (
  input: ListVirtualRoutersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualRouters";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    meshOwner: [, input.meshOwner!],
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
 * serializeAws_restJson1ListVirtualServicesCommand
 */
export const se_ListVirtualServicesCommand = async (
  input: ListVirtualServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualServices";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    meshOwner: [, input.meshOwner!],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/tag";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/untag";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGatewayRouteCommand
 */
export const se_UpdateGatewayRouteCommand = async (
  input: UpdateGatewayRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "gatewayRouteName",
    () => input.gatewayRouteName!,
    "{gatewayRouteName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_GatewayRouteSpec(input.spec, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateMeshCommand
 */
export const se_UpdateMeshCommand = async (
  input: UpdateMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20190125/meshes/{meshName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_MeshSpec(input.spec, context) }),
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
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "routeName", () => input.routeName!, "{routeName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_RouteSpec(input.spec, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVirtualGatewayCommand
 */
export const se_UpdateVirtualGatewayCommand = async (
  input: UpdateVirtualGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualGatewayName",
    () => input.virtualGatewayName!,
    "{virtualGatewayName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualGatewaySpec(input.spec, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVirtualNodeCommand
 */
export const se_UpdateVirtualNodeCommand = async (
  input: UpdateVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualNodeName",
    () => input.virtualNodeName!,
    "{virtualNodeName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualNodeSpec(input.spec, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVirtualRouterCommand
 */
export const se_UpdateVirtualRouterCommand = async (
  input: UpdateVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualRouterName",
    () => input.virtualRouterName!,
    "{virtualRouterName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualRouterSpec(input.spec, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVirtualServiceCommand
 */
export const se_UpdateVirtualServiceCommand = async (
  input: UpdateVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "virtualServiceName",
    () => input.virtualServiceName!,
    "{virtualServiceName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "meshName", () => input.meshName!, "{meshName}", false);
  const query: any = map({
    meshOwner: [, input.meshOwner!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec != null && { spec: se_VirtualServiceSpec(input.spec, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateGatewayRouteCommand
 */
export const de_CreateGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = de_GatewayRouteData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGatewayRouteCommandError
 */
const de_CreateGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateMeshCommand
 */
export const de_CreateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = de_MeshData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeshCommandError
 */
const de_CreateMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = de_RouteData(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateVirtualGatewayCommand
 */
export const de_CreateVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = de_VirtualGatewayData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVirtualGatewayCommandError
 */
const de_CreateVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateVirtualNodeCommand
 */
export const de_CreateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = de_VirtualNodeData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVirtualNodeCommandError
 */
const de_CreateVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateVirtualRouterCommand
 */
export const de_CreateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = de_VirtualRouterData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVirtualRouterCommandError
 */
const de_CreateVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateVirtualServiceCommand
 */
export const de_CreateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = de_VirtualServiceData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVirtualServiceCommandError
 */
const de_CreateVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteGatewayRouteCommand
 */
export const de_DeleteGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = de_GatewayRouteData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGatewayRouteCommandError
 */
const de_DeleteGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteMeshCommand
 */
export const de_DeleteMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = de_MeshData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMeshCommandError
 */
const de_DeleteMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = de_RouteData(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteVirtualGatewayCommand
 */
export const de_DeleteVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = de_VirtualGatewayData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVirtualGatewayCommandError
 */
const de_DeleteVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteVirtualNodeCommand
 */
export const de_DeleteVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = de_VirtualNodeData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVirtualNodeCommandError
 */
const de_DeleteVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteVirtualRouterCommand
 */
export const de_DeleteVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = de_VirtualRouterData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVirtualRouterCommandError
 */
const de_DeleteVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteVirtualServiceCommand
 */
export const de_DeleteVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = de_VirtualServiceData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVirtualServiceCommandError
 */
const de_DeleteVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeGatewayRouteCommand
 */
export const de_DescribeGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = de_GatewayRouteData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayRouteCommandError
 */
const de_DescribeGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeMeshCommand
 */
export const de_DescribeMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = de_MeshData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMeshCommandError
 */
const de_DescribeMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeRouteCommand
 */
export const de_DescribeRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = de_RouteData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRouteCommandError
 */
const de_DescribeRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeVirtualGatewayCommand
 */
export const de_DescribeVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = de_VirtualGatewayData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVirtualGatewayCommandError
 */
const de_DescribeVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeVirtualNodeCommand
 */
export const de_DescribeVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = de_VirtualNodeData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVirtualNodeCommandError
 */
const de_DescribeVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeVirtualRouterCommand
 */
export const de_DescribeVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = de_VirtualRouterData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVirtualRouterCommandError
 */
const de_DescribeVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeVirtualServiceCommand
 */
export const de_DescribeVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = de_VirtualServiceData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVirtualServiceCommandError
 */
const de_DescribeVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1ListGatewayRoutesCommand
 */
export const de_ListGatewayRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGatewayRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewayRoutes != null) {
    contents.gatewayRoutes = de_GatewayRouteList(data.gatewayRoutes, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewayRoutesCommandError
 */
const de_ListGatewayRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1ListMeshesCommand
 */
export const de_ListMeshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMeshesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.meshes != null) {
    contents.meshes = de_MeshList(data.meshes, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMeshesCommandError
 */
const de_ListMeshesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.routes != null) {
    contents.routes = de_RouteList(data.routes, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tags != null) {
    contents.tags = de_TagList(data.tags, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1ListVirtualGatewaysCommand
 */
export const de_ListVirtualGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVirtualGatewaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualGateways != null) {
    contents.virtualGateways = de_VirtualGatewayList(data.virtualGateways, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVirtualGatewaysCommandError
 */
const de_ListVirtualGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1ListVirtualNodesCommand
 */
export const de_ListVirtualNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVirtualNodesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualNodes != null) {
    contents.virtualNodes = de_VirtualNodeList(data.virtualNodes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVirtualNodesCommandError
 */
const de_ListVirtualNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1ListVirtualRoutersCommand
 */
export const de_ListVirtualRoutersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVirtualRoutersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualRouters != null) {
    contents.virtualRouters = de_VirtualRouterList(data.virtualRouters, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVirtualRoutersCommandError
 */
const de_ListVirtualRoutersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1ListVirtualServicesCommand
 */
export const de_ListVirtualServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVirtualServicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualServices != null) {
    contents.virtualServices = de_VirtualServiceList(data.virtualServices, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVirtualServicesCommandError
 */
const de_ListVirtualServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.appmesh#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateGatewayRouteCommand
 */
export const de_UpdateGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = de_GatewayRouteData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayRouteCommandError
 */
const de_UpdateGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateMeshCommand
 */
export const de_UpdateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = de_MeshData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMeshCommandError
 */
const de_UpdateMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = de_RouteData(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateVirtualGatewayCommand
 */
export const de_UpdateVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = de_VirtualGatewayData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVirtualGatewayCommandError
 */
const de_UpdateVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateVirtualNodeCommand
 */
export const de_UpdateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = de_VirtualNodeData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVirtualNodeCommandError
 */
const de_UpdateVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateVirtualRouterCommand
 */
export const de_UpdateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = de_VirtualRouterData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVirtualRouterCommandError
 */
const de_UpdateVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateVirtualServiceCommand
 */
export const de_UpdateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = de_VirtualServiceData(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVirtualServiceCommandError
 */
const de_UpdateVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AccessLog
 */
const se_AccessLog = (input: AccessLog, context: __SerdeContext): any => {
  return AccessLog.visit(input, {
    file: (value) => ({ file: se_FileAccessLog(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1AwsCloudMapInstanceAttribute
 */
const se_AwsCloudMapInstanceAttribute = (input: AwsCloudMapInstanceAttribute, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1AwsCloudMapInstanceAttributes
 */
const se_AwsCloudMapInstanceAttributes = (input: AwsCloudMapInstanceAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AwsCloudMapInstanceAttribute(entry, context);
    });
};

/**
 * serializeAws_restJson1AwsCloudMapServiceDiscovery
 */
const se_AwsCloudMapServiceDiscovery = (input: AwsCloudMapServiceDiscovery, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_AwsCloudMapInstanceAttributes(input.attributes, context) }),
    ...(input.ipPreference != null && { ipPreference: input.ipPreference }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_restJson1Backend
 */
const se_Backend = (input: Backend, context: __SerdeContext): any => {
  return Backend.visit(input, {
    virtualService: (value) => ({ virtualService: se_VirtualServiceBackend(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1BackendDefaults
 */
const se_BackendDefaults = (input: BackendDefaults, context: __SerdeContext): any => {
  return {
    ...(input.clientPolicy != null && { clientPolicy: se_ClientPolicy(input.clientPolicy, context) }),
  };
};

/**
 * serializeAws_restJson1Backends
 */
const se_Backends = (input: Backend[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Backend(entry, context);
    });
};

/**
 * serializeAws_restJson1CertificateAuthorityArns
 */
const se_CertificateAuthorityArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ClientPolicy
 */
const se_ClientPolicy = (input: ClientPolicy, context: __SerdeContext): any => {
  return {
    ...(input.tls != null && { tls: se_ClientPolicyTls(input.tls, context) }),
  };
};

/**
 * serializeAws_restJson1ClientPolicyTls
 */
const se_ClientPolicyTls = (input: ClientPolicyTls, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && { certificate: se_ClientTlsCertificate(input.certificate, context) }),
    ...(input.enforce != null && { enforce: input.enforce }),
    ...(input.ports != null && { ports: se_PortSet(input.ports, context) }),
    ...(input.validation != null && { validation: se_TlsValidationContext(input.validation, context) }),
  };
};

/**
 * serializeAws_restJson1ClientTlsCertificate
 */
const se_ClientTlsCertificate = (input: ClientTlsCertificate, context: __SerdeContext): any => {
  return ClientTlsCertificate.visit(input, {
    file: (value) => ({ file: se_ListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: se_ListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DnsServiceDiscovery
 */
const se_DnsServiceDiscovery = (input: DnsServiceDiscovery, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.ipPreference != null && { ipPreference: input.ipPreference }),
    ...(input.responseType != null && { responseType: input.responseType }),
  };
};

/**
 * serializeAws_restJson1Duration
 */
const se_Duration = (input: Duration, context: __SerdeContext): any => {
  return {
    ...(input.unit != null && { unit: input.unit }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1EgressFilter
 */
const se_EgressFilter = (input: EgressFilter, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1FileAccessLog
 */
const se_FileAccessLog = (input: FileAccessLog, context: __SerdeContext): any => {
  return {
    ...(input.format != null && { format: se_LoggingFormat(input.format, context) }),
    ...(input.path != null && { path: input.path }),
  };
};

/**
 * serializeAws_restJson1GatewayRouteHostnameMatch
 */
const se_GatewayRouteHostnameMatch = (input: GatewayRouteHostnameMatch, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
    ...(input.suffix != null && { suffix: input.suffix }),
  };
};

/**
 * serializeAws_restJson1GatewayRouteHostnameRewrite
 */
const se_GatewayRouteHostnameRewrite = (input: GatewayRouteHostnameRewrite, context: __SerdeContext): any => {
  return {
    ...(input.defaultTargetHostname != null && { defaultTargetHostname: input.defaultTargetHostname }),
  };
};

/**
 * serializeAws_restJson1GatewayRouteSpec
 */
const se_GatewayRouteSpec = (input: GatewayRouteSpec, context: __SerdeContext): any => {
  return {
    ...(input.grpcRoute != null && { grpcRoute: se_GrpcGatewayRoute(input.grpcRoute, context) }),
    ...(input.http2Route != null && { http2Route: se_HttpGatewayRoute(input.http2Route, context) }),
    ...(input.httpRoute != null && { httpRoute: se_HttpGatewayRoute(input.httpRoute, context) }),
    ...(input.priority != null && { priority: input.priority }),
  };
};

/**
 * serializeAws_restJson1GatewayRouteTarget
 */
const se_GatewayRouteTarget = (input: GatewayRouteTarget, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.virtualService != null && {
      virtualService: se_GatewayRouteVirtualService(input.virtualService, context),
    }),
  };
};

/**
 * serializeAws_restJson1GatewayRouteVirtualService
 */
const se_GatewayRouteVirtualService = (input: GatewayRouteVirtualService, context: __SerdeContext): any => {
  return {
    ...(input.virtualServiceName != null && { virtualServiceName: input.virtualServiceName }),
  };
};

/**
 * serializeAws_restJson1GrpcGatewayRoute
 */
const se_GrpcGatewayRoute = (input: GrpcGatewayRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: se_GrpcGatewayRouteAction(input.action, context) }),
    ...(input.match != null && { match: se_GrpcGatewayRouteMatch(input.match, context) }),
  };
};

/**
 * serializeAws_restJson1GrpcGatewayRouteAction
 */
const se_GrpcGatewayRouteAction = (input: GrpcGatewayRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.rewrite != null && { rewrite: se_GrpcGatewayRouteRewrite(input.rewrite, context) }),
    ...(input.target != null && { target: se_GatewayRouteTarget(input.target, context) }),
  };
};

/**
 * serializeAws_restJson1GrpcGatewayRouteMatch
 */
const se_GrpcGatewayRouteMatch = (input: GrpcGatewayRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: se_GatewayRouteHostnameMatch(input.hostname, context) }),
    ...(input.metadata != null && { metadata: se_GrpcGatewayRouteMetadataList(input.metadata, context) }),
    ...(input.port != null && { port: input.port }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_restJson1GrpcGatewayRouteMetadata
 */
const se_GrpcGatewayRouteMetadata = (input: GrpcGatewayRouteMetadata, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: se_GrpcMetadataMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1GrpcGatewayRouteMetadataList
 */
const se_GrpcGatewayRouteMetadataList = (input: GrpcGatewayRouteMetadata[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GrpcGatewayRouteMetadata(entry, context);
    });
};

/**
 * serializeAws_restJson1GrpcGatewayRouteRewrite
 */
const se_GrpcGatewayRouteRewrite = (input: GrpcGatewayRouteRewrite, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: se_GatewayRouteHostnameRewrite(input.hostname, context) }),
  };
};

/**
 * serializeAws_restJson1GrpcMetadataMatchMethod
 */
const se_GrpcMetadataMatchMethod = (input: GrpcMetadataMatchMethod, context: __SerdeContext): any => {
  return GrpcMetadataMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: se_MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1GrpcRetryPolicy
 */
const se_GrpcRetryPolicy = (input: GrpcRetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.grpcRetryEvents != null && { grpcRetryEvents: se_GrpcRetryPolicyEvents(input.grpcRetryEvents, context) }),
    ...(input.httpRetryEvents != null && { httpRetryEvents: se_HttpRetryPolicyEvents(input.httpRetryEvents, context) }),
    ...(input.maxRetries != null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout != null && { perRetryTimeout: se_Duration(input.perRetryTimeout, context) }),
    ...(input.tcpRetryEvents != null && { tcpRetryEvents: se_TcpRetryPolicyEvents(input.tcpRetryEvents, context) }),
  };
};

/**
 * serializeAws_restJson1GrpcRetryPolicyEvents
 */
const se_GrpcRetryPolicyEvents = (input: (GrpcRetryPolicyEvent | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1GrpcRoute
 */
const se_GrpcRoute = (input: GrpcRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: se_GrpcRouteAction(input.action, context) }),
    ...(input.match != null && { match: se_GrpcRouteMatch(input.match, context) }),
    ...(input.retryPolicy != null && { retryPolicy: se_GrpcRetryPolicy(input.retryPolicy, context) }),
    ...(input.timeout != null && { timeout: se_GrpcTimeout(input.timeout, context) }),
  };
};

/**
 * serializeAws_restJson1GrpcRouteAction
 */
const se_GrpcRouteAction = (input: GrpcRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets != null && { weightedTargets: se_WeightedTargets(input.weightedTargets, context) }),
  };
};

/**
 * serializeAws_restJson1GrpcRouteMatch
 */
const se_GrpcRouteMatch = (input: GrpcRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.metadata != null && { metadata: se_GrpcRouteMetadataList(input.metadata, context) }),
    ...(input.methodName != null && { methodName: input.methodName }),
    ...(input.port != null && { port: input.port }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_restJson1GrpcRouteMetadata
 */
const se_GrpcRouteMetadata = (input: GrpcRouteMetadata, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: se_GrpcRouteMetadataMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1GrpcRouteMetadataList
 */
const se_GrpcRouteMetadataList = (input: GrpcRouteMetadata[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GrpcRouteMetadata(entry, context);
    });
};

/**
 * serializeAws_restJson1GrpcRouteMetadataMatchMethod
 */
const se_GrpcRouteMetadataMatchMethod = (input: GrpcRouteMetadataMatchMethod, context: __SerdeContext): any => {
  return GrpcRouteMetadataMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: se_MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1GrpcTimeout
 */
const se_GrpcTimeout = (input: GrpcTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle != null && { idle: se_Duration(input.idle, context) }),
    ...(input.perRequest != null && { perRequest: se_Duration(input.perRequest, context) }),
  };
};

/**
 * serializeAws_restJson1HeaderMatchMethod
 */
const se_HeaderMatchMethod = (input: HeaderMatchMethod, context: __SerdeContext): any => {
  return HeaderMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: se_MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1HealthCheckPolicy
 */
const se_HealthCheckPolicy = (input: HealthCheckPolicy, context: __SerdeContext): any => {
  return {
    ...(input.healthyThreshold != null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalMillis != null && { intervalMillis: input.intervalMillis }),
    ...(input.path != null && { path: input.path }),
    ...(input.port != null && { port: input.port }),
    ...(input.protocol != null && { protocol: input.protocol }),
    ...(input.timeoutMillis != null && { timeoutMillis: input.timeoutMillis }),
    ...(input.unhealthyThreshold != null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRoute
 */
const se_HttpGatewayRoute = (input: HttpGatewayRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: se_HttpGatewayRouteAction(input.action, context) }),
    ...(input.match != null && { match: se_HttpGatewayRouteMatch(input.match, context) }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRouteAction
 */
const se_HttpGatewayRouteAction = (input: HttpGatewayRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.rewrite != null && { rewrite: se_HttpGatewayRouteRewrite(input.rewrite, context) }),
    ...(input.target != null && { target: se_GatewayRouteTarget(input.target, context) }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRouteHeader
 */
const se_HttpGatewayRouteHeader = (input: HttpGatewayRouteHeader, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: se_HeaderMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRouteHeaders
 */
const se_HttpGatewayRouteHeaders = (input: HttpGatewayRouteHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HttpGatewayRouteHeader(entry, context);
    });
};

/**
 * serializeAws_restJson1HttpGatewayRouteMatch
 */
const se_HttpGatewayRouteMatch = (input: HttpGatewayRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.headers != null && { headers: se_HttpGatewayRouteHeaders(input.headers, context) }),
    ...(input.hostname != null && { hostname: se_GatewayRouteHostnameMatch(input.hostname, context) }),
    ...(input.method != null && { method: input.method }),
    ...(input.path != null && { path: se_HttpPathMatch(input.path, context) }),
    ...(input.port != null && { port: input.port }),
    ...(input.prefix != null && { prefix: input.prefix }),
    ...(input.queryParameters != null && { queryParameters: se_HttpQueryParameters(input.queryParameters, context) }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRoutePathRewrite
 */
const se_HttpGatewayRoutePathRewrite = (input: HttpGatewayRoutePathRewrite, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRoutePrefixRewrite
 */
const se_HttpGatewayRoutePrefixRewrite = (input: HttpGatewayRoutePrefixRewrite, context: __SerdeContext): any => {
  return {
    ...(input.defaultPrefix != null && { defaultPrefix: input.defaultPrefix }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1HttpGatewayRouteRewrite
 */
const se_HttpGatewayRouteRewrite = (input: HttpGatewayRouteRewrite, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: se_GatewayRouteHostnameRewrite(input.hostname, context) }),
    ...(input.path != null && { path: se_HttpGatewayRoutePathRewrite(input.path, context) }),
    ...(input.prefix != null && { prefix: se_HttpGatewayRoutePrefixRewrite(input.prefix, context) }),
  };
};

/**
 * serializeAws_restJson1HttpPathMatch
 */
const se_HttpPathMatch = (input: HttpPathMatch, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
    ...(input.regex != null && { regex: input.regex }),
  };
};

/**
 * serializeAws_restJson1HttpQueryParameter
 */
const se_HttpQueryParameter = (input: HttpQueryParameter, context: __SerdeContext): any => {
  return {
    ...(input.match != null && { match: se_QueryParameterMatch(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1HttpQueryParameters
 */
const se_HttpQueryParameters = (input: HttpQueryParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HttpQueryParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1HttpRetryPolicy
 */
const se_HttpRetryPolicy = (input: HttpRetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.httpRetryEvents != null && { httpRetryEvents: se_HttpRetryPolicyEvents(input.httpRetryEvents, context) }),
    ...(input.maxRetries != null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout != null && { perRetryTimeout: se_Duration(input.perRetryTimeout, context) }),
    ...(input.tcpRetryEvents != null && { tcpRetryEvents: se_TcpRetryPolicyEvents(input.tcpRetryEvents, context) }),
  };
};

/**
 * serializeAws_restJson1HttpRetryPolicyEvents
 */
const se_HttpRetryPolicyEvents = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1HttpRoute
 */
const se_HttpRoute = (input: HttpRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: se_HttpRouteAction(input.action, context) }),
    ...(input.match != null && { match: se_HttpRouteMatch(input.match, context) }),
    ...(input.retryPolicy != null && { retryPolicy: se_HttpRetryPolicy(input.retryPolicy, context) }),
    ...(input.timeout != null && { timeout: se_HttpTimeout(input.timeout, context) }),
  };
};

/**
 * serializeAws_restJson1HttpRouteAction
 */
const se_HttpRouteAction = (input: HttpRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets != null && { weightedTargets: se_WeightedTargets(input.weightedTargets, context) }),
  };
};

/**
 * serializeAws_restJson1HttpRouteHeader
 */
const se_HttpRouteHeader = (input: HttpRouteHeader, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: se_HeaderMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1HttpRouteHeaders
 */
const se_HttpRouteHeaders = (input: HttpRouteHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HttpRouteHeader(entry, context);
    });
};

/**
 * serializeAws_restJson1HttpRouteMatch
 */
const se_HttpRouteMatch = (input: HttpRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.headers != null && { headers: se_HttpRouteHeaders(input.headers, context) }),
    ...(input.method != null && { method: input.method }),
    ...(input.path != null && { path: se_HttpPathMatch(input.path, context) }),
    ...(input.port != null && { port: input.port }),
    ...(input.prefix != null && { prefix: input.prefix }),
    ...(input.queryParameters != null && { queryParameters: se_HttpQueryParameters(input.queryParameters, context) }),
    ...(input.scheme != null && { scheme: input.scheme }),
  };
};

/**
 * serializeAws_restJson1HttpTimeout
 */
const se_HttpTimeout = (input: HttpTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle != null && { idle: se_Duration(input.idle, context) }),
    ...(input.perRequest != null && { perRequest: se_Duration(input.perRequest, context) }),
  };
};

/**
 * serializeAws_restJson1JsonFormat
 */
const se_JsonFormat = (input: JsonFormatRef[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JsonFormatRef(entry, context);
    });
};

/**
 * serializeAws_restJson1JsonFormatRef
 */
const se_JsonFormatRef = (input: JsonFormatRef, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1Listener
 */
const se_Listener = (input: Listener, context: __SerdeContext): any => {
  return {
    ...(input.connectionPool != null && {
      connectionPool: se_VirtualNodeConnectionPool(input.connectionPool, context),
    }),
    ...(input.healthCheck != null && { healthCheck: se_HealthCheckPolicy(input.healthCheck, context) }),
    ...(input.outlierDetection != null && { outlierDetection: se_OutlierDetection(input.outlierDetection, context) }),
    ...(input.portMapping != null && { portMapping: se_PortMapping(input.portMapping, context) }),
    ...(input.timeout != null && { timeout: se_ListenerTimeout(input.timeout, context) }),
    ...(input.tls != null && { tls: se_ListenerTls(input.tls, context) }),
  };
};

/**
 * serializeAws_restJson1Listeners
 */
const se_Listeners = (input: Listener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Listener(entry, context);
    });
};

/**
 * serializeAws_restJson1ListenerTimeout
 */
const se_ListenerTimeout = (input: ListenerTimeout, context: __SerdeContext): any => {
  return ListenerTimeout.visit(input, {
    grpc: (value) => ({ grpc: se_GrpcTimeout(value, context) }),
    http: (value) => ({ http: se_HttpTimeout(value, context) }),
    http2: (value) => ({ http2: se_HttpTimeout(value, context) }),
    tcp: (value) => ({ tcp: se_TcpTimeout(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ListenerTls
 */
const se_ListenerTls = (input: ListenerTls, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && { certificate: se_ListenerTlsCertificate(input.certificate, context) }),
    ...(input.mode != null && { mode: input.mode }),
    ...(input.validation != null && { validation: se_ListenerTlsValidationContext(input.validation, context) }),
  };
};

/**
 * serializeAws_restJson1ListenerTlsAcmCertificate
 */
const se_ListenerTlsAcmCertificate = (input: ListenerTlsAcmCertificate, context: __SerdeContext): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
  };
};

/**
 * serializeAws_restJson1ListenerTlsCertificate
 */
const se_ListenerTlsCertificate = (input: ListenerTlsCertificate, context: __SerdeContext): any => {
  return ListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: se_ListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: se_ListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: se_ListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ListenerTlsFileCertificate
 */
const se_ListenerTlsFileCertificate = (input: ListenerTlsFileCertificate, context: __SerdeContext): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
    ...(input.privateKey != null && { privateKey: input.privateKey }),
  };
};

/**
 * serializeAws_restJson1ListenerTlsSdsCertificate
 */
const se_ListenerTlsSdsCertificate = (input: ListenerTlsSdsCertificate, context: __SerdeContext): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

/**
 * serializeAws_restJson1ListenerTlsValidationContext
 */
const se_ListenerTlsValidationContext = (input: ListenerTlsValidationContext, context: __SerdeContext): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: se_SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && { trust: se_ListenerTlsValidationContextTrust(input.trust, context) }),
  };
};

/**
 * serializeAws_restJson1ListenerTlsValidationContextTrust
 */
const se_ListenerTlsValidationContextTrust = (
  input: ListenerTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return ListenerTlsValidationContextTrust.visit(input, {
    file: (value) => ({ file: se_TlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: se_TlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1Logging
 */
const se_Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.accessLog != null && { accessLog: se_AccessLog(input.accessLog, context) }),
  };
};

/**
 * serializeAws_restJson1LoggingFormat
 */
const se_LoggingFormat = (input: LoggingFormat, context: __SerdeContext): any => {
  return LoggingFormat.visit(input, {
    json: (value) => ({ json: se_JsonFormat(value, context) }),
    text: (value) => ({ text: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1MatchRange
 */
const se_MatchRange = (input: MatchRange, context: __SerdeContext): any => {
  return {
    ...(input.end != null && { end: input.end }),
    ...(input.start != null && { start: input.start }),
  };
};

/**
 * serializeAws_restJson1MeshServiceDiscovery
 */
const se_MeshServiceDiscovery = (input: MeshServiceDiscovery, context: __SerdeContext): any => {
  return {
    ...(input.ipPreference != null && { ipPreference: input.ipPreference }),
  };
};

/**
 * serializeAws_restJson1MeshSpec
 */
const se_MeshSpec = (input: MeshSpec, context: __SerdeContext): any => {
  return {
    ...(input.egressFilter != null && { egressFilter: se_EgressFilter(input.egressFilter, context) }),
    ...(input.serviceDiscovery != null && {
      serviceDiscovery: se_MeshServiceDiscovery(input.serviceDiscovery, context),
    }),
  };
};

/**
 * serializeAws_restJson1OutlierDetection
 */
const se_OutlierDetection = (input: OutlierDetection, context: __SerdeContext): any => {
  return {
    ...(input.baseEjectionDuration != null && {
      baseEjectionDuration: se_Duration(input.baseEjectionDuration, context),
    }),
    ...(input.interval != null && { interval: se_Duration(input.interval, context) }),
    ...(input.maxEjectionPercent != null && { maxEjectionPercent: input.maxEjectionPercent }),
    ...(input.maxServerErrors != null && { maxServerErrors: input.maxServerErrors }),
  };
};

/**
 * serializeAws_restJson1PortMapping
 */
const se_PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_restJson1PortSet
 */
const se_PortSet = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1QueryParameterMatch
 */
const se_QueryParameterMatch = (input: QueryParameterMatch, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
  };
};

/**
 * serializeAws_restJson1RouteSpec
 */
const se_RouteSpec = (input: RouteSpec, context: __SerdeContext): any => {
  return {
    ...(input.grpcRoute != null && { grpcRoute: se_GrpcRoute(input.grpcRoute, context) }),
    ...(input.http2Route != null && { http2Route: se_HttpRoute(input.http2Route, context) }),
    ...(input.httpRoute != null && { httpRoute: se_HttpRoute(input.httpRoute, context) }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.tcpRoute != null && { tcpRoute: se_TcpRoute(input.tcpRoute, context) }),
  };
};

/**
 * serializeAws_restJson1ServiceDiscovery
 */
const se_ServiceDiscovery = (input: ServiceDiscovery, context: __SerdeContext): any => {
  return ServiceDiscovery.visit(input, {
    awsCloudMap: (value) => ({ awsCloudMap: se_AwsCloudMapServiceDiscovery(value, context) }),
    dns: (value) => ({ dns: se_DnsServiceDiscovery(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1SubjectAlternativeNameList
 */
const se_SubjectAlternativeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubjectAlternativeNameMatchers
 */
const se_SubjectAlternativeNameMatchers = (input: SubjectAlternativeNameMatchers, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: se_SubjectAlternativeNameList(input.exact, context) }),
  };
};

/**
 * serializeAws_restJson1SubjectAlternativeNames
 */
const se_SubjectAlternativeNames = (input: SubjectAlternativeNames, context: __SerdeContext): any => {
  return {
    ...(input.match != null && { match: se_SubjectAlternativeNameMatchers(input.match, context) }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: TagRef[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagRef(entry, context);
    });
};

/**
 * serializeAws_restJson1TagRef
 */
const se_TagRef = (input: TagRef, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1TcpRetryPolicyEvents
 */
const se_TcpRetryPolicyEvents = (input: (TcpRetryPolicyEvent | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TcpRoute
 */
const se_TcpRoute = (input: TcpRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: se_TcpRouteAction(input.action, context) }),
    ...(input.match != null && { match: se_TcpRouteMatch(input.match, context) }),
    ...(input.timeout != null && { timeout: se_TcpTimeout(input.timeout, context) }),
  };
};

/**
 * serializeAws_restJson1TcpRouteAction
 */
const se_TcpRouteAction = (input: TcpRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets != null && { weightedTargets: se_WeightedTargets(input.weightedTargets, context) }),
  };
};

/**
 * serializeAws_restJson1TcpRouteMatch
 */
const se_TcpRouteMatch = (input: TcpRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
  };
};

/**
 * serializeAws_restJson1TcpTimeout
 */
const se_TcpTimeout = (input: TcpTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle != null && { idle: se_Duration(input.idle, context) }),
  };
};

/**
 * serializeAws_restJson1TlsValidationContext
 */
const se_TlsValidationContext = (input: TlsValidationContext, context: __SerdeContext): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: se_SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && { trust: se_TlsValidationContextTrust(input.trust, context) }),
  };
};

/**
 * serializeAws_restJson1TlsValidationContextAcmTrust
 */
const se_TlsValidationContextAcmTrust = (input: TlsValidationContextAcmTrust, context: __SerdeContext): any => {
  return {
    ...(input.certificateAuthorityArns != null && {
      certificateAuthorityArns: se_CertificateAuthorityArns(input.certificateAuthorityArns, context),
    }),
  };
};

/**
 * serializeAws_restJson1TlsValidationContextFileTrust
 */
const se_TlsValidationContextFileTrust = (input: TlsValidationContextFileTrust, context: __SerdeContext): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
  };
};

/**
 * serializeAws_restJson1TlsValidationContextSdsTrust
 */
const se_TlsValidationContextSdsTrust = (input: TlsValidationContextSdsTrust, context: __SerdeContext): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

/**
 * serializeAws_restJson1TlsValidationContextTrust
 */
const se_TlsValidationContextTrust = (input: TlsValidationContextTrust, context: __SerdeContext): any => {
  return TlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: se_TlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: se_TlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: se_TlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualGatewayAccessLog
 */
const se_VirtualGatewayAccessLog = (input: VirtualGatewayAccessLog, context: __SerdeContext): any => {
  return VirtualGatewayAccessLog.visit(input, {
    file: (value) => ({ file: se_VirtualGatewayFileAccessLog(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualGatewayBackendDefaults
 */
const se_VirtualGatewayBackendDefaults = (input: VirtualGatewayBackendDefaults, context: __SerdeContext): any => {
  return {
    ...(input.clientPolicy != null && { clientPolicy: se_VirtualGatewayClientPolicy(input.clientPolicy, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayCertificateAuthorityArns
 */
const se_VirtualGatewayCertificateAuthorityArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1VirtualGatewayClientPolicy
 */
const se_VirtualGatewayClientPolicy = (input: VirtualGatewayClientPolicy, context: __SerdeContext): any => {
  return {
    ...(input.tls != null && { tls: se_VirtualGatewayClientPolicyTls(input.tls, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayClientPolicyTls
 */
const se_VirtualGatewayClientPolicyTls = (input: VirtualGatewayClientPolicyTls, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && {
      certificate: se_VirtualGatewayClientTlsCertificate(input.certificate, context),
    }),
    ...(input.enforce != null && { enforce: input.enforce }),
    ...(input.ports != null && { ports: se_PortSet(input.ports, context) }),
    ...(input.validation != null && { validation: se_VirtualGatewayTlsValidationContext(input.validation, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayClientTlsCertificate
 */
const se_VirtualGatewayClientTlsCertificate = (
  input: VirtualGatewayClientTlsCertificate,
  context: __SerdeContext
): any => {
  return VirtualGatewayClientTlsCertificate.visit(input, {
    file: (value) => ({ file: se_VirtualGatewayListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: se_VirtualGatewayListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualGatewayConnectionPool
 */
const se_VirtualGatewayConnectionPool = (input: VirtualGatewayConnectionPool, context: __SerdeContext): any => {
  return VirtualGatewayConnectionPool.visit(input, {
    grpc: (value) => ({ grpc: se_VirtualGatewayGrpcConnectionPool(value, context) }),
    http: (value) => ({ http: se_VirtualGatewayHttpConnectionPool(value, context) }),
    http2: (value) => ({ http2: se_VirtualGatewayHttp2ConnectionPool(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualGatewayFileAccessLog
 */
const se_VirtualGatewayFileAccessLog = (input: VirtualGatewayFileAccessLog, context: __SerdeContext): any => {
  return {
    ...(input.format != null && { format: se_LoggingFormat(input.format, context) }),
    ...(input.path != null && { path: input.path }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayGrpcConnectionPool
 */
const se_VirtualGatewayGrpcConnectionPool = (input: VirtualGatewayGrpcConnectionPool, context: __SerdeContext): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayHealthCheckPolicy
 */
const se_VirtualGatewayHealthCheckPolicy = (input: VirtualGatewayHealthCheckPolicy, context: __SerdeContext): any => {
  return {
    ...(input.healthyThreshold != null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalMillis != null && { intervalMillis: input.intervalMillis }),
    ...(input.path != null && { path: input.path }),
    ...(input.port != null && { port: input.port }),
    ...(input.protocol != null && { protocol: input.protocol }),
    ...(input.timeoutMillis != null && { timeoutMillis: input.timeoutMillis }),
    ...(input.unhealthyThreshold != null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayHttp2ConnectionPool
 */
const se_VirtualGatewayHttp2ConnectionPool = (
  input: VirtualGatewayHttp2ConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayHttpConnectionPool
 */
const se_VirtualGatewayHttpConnectionPool = (input: VirtualGatewayHttpConnectionPool, context: __SerdeContext): any => {
  return {
    ...(input.maxConnections != null && { maxConnections: input.maxConnections }),
    ...(input.maxPendingRequests != null && { maxPendingRequests: input.maxPendingRequests }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListener
 */
const se_VirtualGatewayListener = (input: VirtualGatewayListener, context: __SerdeContext): any => {
  return {
    ...(input.connectionPool != null && {
      connectionPool: se_VirtualGatewayConnectionPool(input.connectionPool, context),
    }),
    ...(input.healthCheck != null && { healthCheck: se_VirtualGatewayHealthCheckPolicy(input.healthCheck, context) }),
    ...(input.portMapping != null && { portMapping: se_VirtualGatewayPortMapping(input.portMapping, context) }),
    ...(input.tls != null && { tls: se_VirtualGatewayListenerTls(input.tls, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListeners
 */
const se_VirtualGatewayListeners = (input: VirtualGatewayListener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VirtualGatewayListener(entry, context);
    });
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTls
 */
const se_VirtualGatewayListenerTls = (input: VirtualGatewayListenerTls, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && {
      certificate: se_VirtualGatewayListenerTlsCertificate(input.certificate, context),
    }),
    ...(input.mode != null && { mode: input.mode }),
    ...(input.validation != null && {
      validation: se_VirtualGatewayListenerTlsValidationContext(input.validation, context),
    }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate
 */
const se_VirtualGatewayListenerTlsAcmCertificate = (
  input: VirtualGatewayListenerTlsAcmCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTlsCertificate
 */
const se_VirtualGatewayListenerTlsCertificate = (
  input: VirtualGatewayListenerTlsCertificate,
  context: __SerdeContext
): any => {
  return VirtualGatewayListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: se_VirtualGatewayListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: se_VirtualGatewayListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: se_VirtualGatewayListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate
 */
const se_VirtualGatewayListenerTlsFileCertificate = (
  input: VirtualGatewayListenerTlsFileCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
    ...(input.privateKey != null && { privateKey: input.privateKey }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate
 */
const se_VirtualGatewayListenerTlsSdsCertificate = (
  input: VirtualGatewayListenerTlsSdsCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTlsValidationContext
 */
const se_VirtualGatewayListenerTlsValidationContext = (
  input: VirtualGatewayListenerTlsValidationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: se_SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && { trust: se_VirtualGatewayListenerTlsValidationContextTrust(input.trust, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust
 */
const se_VirtualGatewayListenerTlsValidationContextTrust = (
  input: VirtualGatewayListenerTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return VirtualGatewayListenerTlsValidationContextTrust.visit(input, {
    file: (value) => ({ file: se_VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: se_VirtualGatewayTlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualGatewayLogging
 */
const se_VirtualGatewayLogging = (input: VirtualGatewayLogging, context: __SerdeContext): any => {
  return {
    ...(input.accessLog != null && { accessLog: se_VirtualGatewayAccessLog(input.accessLog, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayPortMapping
 */
const se_VirtualGatewayPortMapping = (input: VirtualGatewayPortMapping, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewaySpec
 */
const se_VirtualGatewaySpec = (input: VirtualGatewaySpec, context: __SerdeContext): any => {
  return {
    ...(input.backendDefaults != null && {
      backendDefaults: se_VirtualGatewayBackendDefaults(input.backendDefaults, context),
    }),
    ...(input.listeners != null && { listeners: se_VirtualGatewayListeners(input.listeners, context) }),
    ...(input.logging != null && { logging: se_VirtualGatewayLogging(input.logging, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayTlsValidationContext
 */
const se_VirtualGatewayTlsValidationContext = (
  input: VirtualGatewayTlsValidationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: se_SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && { trust: se_VirtualGatewayTlsValidationContextTrust(input.trust, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust
 */
const se_VirtualGatewayTlsValidationContextAcmTrust = (
  input: VirtualGatewayTlsValidationContextAcmTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAuthorityArns != null && {
      certificateAuthorityArns: se_VirtualGatewayCertificateAuthorityArns(input.certificateAuthorityArns, context),
    }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust
 */
const se_VirtualGatewayTlsValidationContextFileTrust = (
  input: VirtualGatewayTlsValidationContextFileTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust
 */
const se_VirtualGatewayTlsValidationContextSdsTrust = (
  input: VirtualGatewayTlsValidationContextSdsTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

/**
 * serializeAws_restJson1VirtualGatewayTlsValidationContextTrust
 */
const se_VirtualGatewayTlsValidationContextTrust = (
  input: VirtualGatewayTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return VirtualGatewayTlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: se_VirtualGatewayTlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: se_VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: se_VirtualGatewayTlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualNodeConnectionPool
 */
const se_VirtualNodeConnectionPool = (input: VirtualNodeConnectionPool, context: __SerdeContext): any => {
  return VirtualNodeConnectionPool.visit(input, {
    grpc: (value) => ({ grpc: se_VirtualNodeGrpcConnectionPool(value, context) }),
    http: (value) => ({ http: se_VirtualNodeHttpConnectionPool(value, context) }),
    http2: (value) => ({ http2: se_VirtualNodeHttp2ConnectionPool(value, context) }),
    tcp: (value) => ({ tcp: se_VirtualNodeTcpConnectionPool(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualNodeGrpcConnectionPool
 */
const se_VirtualNodeGrpcConnectionPool = (input: VirtualNodeGrpcConnectionPool, context: __SerdeContext): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

/**
 * serializeAws_restJson1VirtualNodeHttp2ConnectionPool
 */
const se_VirtualNodeHttp2ConnectionPool = (input: VirtualNodeHttp2ConnectionPool, context: __SerdeContext): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

/**
 * serializeAws_restJson1VirtualNodeHttpConnectionPool
 */
const se_VirtualNodeHttpConnectionPool = (input: VirtualNodeHttpConnectionPool, context: __SerdeContext): any => {
  return {
    ...(input.maxConnections != null && { maxConnections: input.maxConnections }),
    ...(input.maxPendingRequests != null && { maxPendingRequests: input.maxPendingRequests }),
  };
};

/**
 * serializeAws_restJson1VirtualNodeServiceProvider
 */
const se_VirtualNodeServiceProvider = (input: VirtualNodeServiceProvider, context: __SerdeContext): any => {
  return {
    ...(input.virtualNodeName != null && { virtualNodeName: input.virtualNodeName }),
  };
};

/**
 * serializeAws_restJson1VirtualNodeSpec
 */
const se_VirtualNodeSpec = (input: VirtualNodeSpec, context: __SerdeContext): any => {
  return {
    ...(input.backendDefaults != null && { backendDefaults: se_BackendDefaults(input.backendDefaults, context) }),
    ...(input.backends != null && { backends: se_Backends(input.backends, context) }),
    ...(input.listeners != null && { listeners: se_Listeners(input.listeners, context) }),
    ...(input.logging != null && { logging: se_Logging(input.logging, context) }),
    ...(input.serviceDiscovery != null && { serviceDiscovery: se_ServiceDiscovery(input.serviceDiscovery, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualNodeTcpConnectionPool
 */
const se_VirtualNodeTcpConnectionPool = (input: VirtualNodeTcpConnectionPool, context: __SerdeContext): any => {
  return {
    ...(input.maxConnections != null && { maxConnections: input.maxConnections }),
  };
};

/**
 * serializeAws_restJson1VirtualRouterListener
 */
const se_VirtualRouterListener = (input: VirtualRouterListener, context: __SerdeContext): any => {
  return {
    ...(input.portMapping != null && { portMapping: se_PortMapping(input.portMapping, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualRouterListeners
 */
const se_VirtualRouterListeners = (input: VirtualRouterListener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VirtualRouterListener(entry, context);
    });
};

/**
 * serializeAws_restJson1VirtualRouterServiceProvider
 */
const se_VirtualRouterServiceProvider = (input: VirtualRouterServiceProvider, context: __SerdeContext): any => {
  return {
    ...(input.virtualRouterName != null && { virtualRouterName: input.virtualRouterName }),
  };
};

/**
 * serializeAws_restJson1VirtualRouterSpec
 */
const se_VirtualRouterSpec = (input: VirtualRouterSpec, context: __SerdeContext): any => {
  return {
    ...(input.listeners != null && { listeners: se_VirtualRouterListeners(input.listeners, context) }),
  };
};

/**
 * serializeAws_restJson1VirtualServiceBackend
 */
const se_VirtualServiceBackend = (input: VirtualServiceBackend, context: __SerdeContext): any => {
  return {
    ...(input.clientPolicy != null && { clientPolicy: se_ClientPolicy(input.clientPolicy, context) }),
    ...(input.virtualServiceName != null && { virtualServiceName: input.virtualServiceName }),
  };
};

/**
 * serializeAws_restJson1VirtualServiceProvider
 */
const se_VirtualServiceProvider = (input: VirtualServiceProvider, context: __SerdeContext): any => {
  return VirtualServiceProvider.visit(input, {
    virtualNode: (value) => ({ virtualNode: se_VirtualNodeServiceProvider(value, context) }),
    virtualRouter: (value) => ({ virtualRouter: se_VirtualRouterServiceProvider(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VirtualServiceSpec
 */
const se_VirtualServiceSpec = (input: VirtualServiceSpec, context: __SerdeContext): any => {
  return {
    ...(input.provider != null && { provider: se_VirtualServiceProvider(input.provider, context) }),
  };
};

/**
 * serializeAws_restJson1WeightedTarget
 */
const se_WeightedTarget = (input: WeightedTarget, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.virtualNode != null && { virtualNode: input.virtualNode }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_restJson1WeightedTargets
 */
const se_WeightedTargets = (input: WeightedTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WeightedTarget(entry, context);
    });
};

/**
 * deserializeAws_restJson1AccessLog
 */
const de_AccessLog = (output: any, context: __SerdeContext): AccessLog => {
  if (output.file != null) {
    return {
      file: de_FileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AwsCloudMapInstanceAttribute
 */
const de_AwsCloudMapInstanceAttribute = (output: any, context: __SerdeContext): AwsCloudMapInstanceAttribute => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1AwsCloudMapInstanceAttributes
 */
const de_AwsCloudMapInstanceAttributes = (output: any, context: __SerdeContext): AwsCloudMapInstanceAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AwsCloudMapInstanceAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AwsCloudMapServiceDiscovery
 */
const de_AwsCloudMapServiceDiscovery = (output: any, context: __SerdeContext): AwsCloudMapServiceDiscovery => {
  return {
    attributes: output.attributes != null ? de_AwsCloudMapInstanceAttributes(output.attributes, context) : undefined,
    ipPreference: __expectString(output.ipPreference),
    namespaceName: __expectString(output.namespaceName),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1Backend
 */
const de_Backend = (output: any, context: __SerdeContext): Backend => {
  if (output.virtualService != null) {
    return {
      virtualService: de_VirtualServiceBackend(output.virtualService, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1BackendDefaults
 */
const de_BackendDefaults = (output: any, context: __SerdeContext): BackendDefaults => {
  return {
    clientPolicy: output.clientPolicy != null ? de_ClientPolicy(output.clientPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Backends
 */
const de_Backends = (output: any, context: __SerdeContext): Backend[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Backend(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CertificateAuthorityArns
 */
const de_CertificateAuthorityArns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ClientPolicy
 */
const de_ClientPolicy = (output: any, context: __SerdeContext): ClientPolicy => {
  return {
    tls: output.tls != null ? de_ClientPolicyTls(output.tls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClientPolicyTls
 */
const de_ClientPolicyTls = (output: any, context: __SerdeContext): ClientPolicyTls => {
  return {
    certificate:
      output.certificate != null ? de_ClientTlsCertificate(__expectUnion(output.certificate), context) : undefined,
    enforce: __expectBoolean(output.enforce),
    ports: output.ports != null ? de_PortSet(output.ports, context) : undefined,
    validation: output.validation != null ? de_TlsValidationContext(output.validation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClientTlsCertificate
 */
const de_ClientTlsCertificate = (output: any, context: __SerdeContext): ClientTlsCertificate => {
  if (output.file != null) {
    return {
      file: de_ListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_ListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1DnsServiceDiscovery
 */
const de_DnsServiceDiscovery = (output: any, context: __SerdeContext): DnsServiceDiscovery => {
  return {
    hostname: __expectString(output.hostname),
    ipPreference: __expectString(output.ipPreference),
    responseType: __expectString(output.responseType),
  } as any;
};

/**
 * deserializeAws_restJson1Duration
 */
const de_Duration = (output: any, context: __SerdeContext): Duration => {
  return {
    unit: __expectString(output.unit),
    value: __expectLong(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1EgressFilter
 */
const de_EgressFilter = (output: any, context: __SerdeContext): EgressFilter => {
  return {
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FileAccessLog
 */
const de_FileAccessLog = (output: any, context: __SerdeContext): FileAccessLog => {
  return {
    format: output.format != null ? de_LoggingFormat(__expectUnion(output.format), context) : undefined,
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteData
 */
const de_GatewayRouteData = (output: any, context: __SerdeContext): GatewayRouteData => {
  return {
    gatewayRouteName: __expectString(output.gatewayRouteName),
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? de_GatewayRouteSpec(output.spec, context) : undefined,
    status: output.status != null ? de_GatewayRouteStatus(output.status, context) : undefined,
    virtualGatewayName: __expectString(output.virtualGatewayName),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteHostnameMatch
 */
const de_GatewayRouteHostnameMatch = (output: any, context: __SerdeContext): GatewayRouteHostnameMatch => {
  return {
    exact: __expectString(output.exact),
    suffix: __expectString(output.suffix),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteHostnameRewrite
 */
const de_GatewayRouteHostnameRewrite = (output: any, context: __SerdeContext): GatewayRouteHostnameRewrite => {
  return {
    defaultTargetHostname: __expectString(output.defaultTargetHostname),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteList
 */
const de_GatewayRouteList = (output: any, context: __SerdeContext): GatewayRouteRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewayRouteRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewayRouteRef
 */
const de_GatewayRouteRef = (output: any, context: __SerdeContext): GatewayRouteRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    gatewayRouteName: __expectString(output.gatewayRouteName),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    version: __expectLong(output.version),
    virtualGatewayName: __expectString(output.virtualGatewayName),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteSpec
 */
const de_GatewayRouteSpec = (output: any, context: __SerdeContext): GatewayRouteSpec => {
  return {
    grpcRoute: output.grpcRoute != null ? de_GrpcGatewayRoute(output.grpcRoute, context) : undefined,
    http2Route: output.http2Route != null ? de_HttpGatewayRoute(output.http2Route, context) : undefined,
    httpRoute: output.httpRoute != null ? de_HttpGatewayRoute(output.httpRoute, context) : undefined,
    priority: __expectInt32(output.priority),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteStatus
 */
const de_GatewayRouteStatus = (output: any, context: __SerdeContext): GatewayRouteStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteTarget
 */
const de_GatewayRouteTarget = (output: any, context: __SerdeContext): GatewayRouteTarget => {
  return {
    port: __expectInt32(output.port),
    virtualService:
      output.virtualService != null ? de_GatewayRouteVirtualService(output.virtualService, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GatewayRouteVirtualService
 */
const de_GatewayRouteVirtualService = (output: any, context: __SerdeContext): GatewayRouteVirtualService => {
  return {
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1GrpcGatewayRoute
 */
const de_GrpcGatewayRoute = (output: any, context: __SerdeContext): GrpcGatewayRoute => {
  return {
    action: output.action != null ? de_GrpcGatewayRouteAction(output.action, context) : undefined,
    match: output.match != null ? de_GrpcGatewayRouteMatch(output.match, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrpcGatewayRouteAction
 */
const de_GrpcGatewayRouteAction = (output: any, context: __SerdeContext): GrpcGatewayRouteAction => {
  return {
    rewrite: output.rewrite != null ? de_GrpcGatewayRouteRewrite(output.rewrite, context) : undefined,
    target: output.target != null ? de_GatewayRouteTarget(output.target, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrpcGatewayRouteMatch
 */
const de_GrpcGatewayRouteMatch = (output: any, context: __SerdeContext): GrpcGatewayRouteMatch => {
  return {
    hostname: output.hostname != null ? de_GatewayRouteHostnameMatch(output.hostname, context) : undefined,
    metadata: output.metadata != null ? de_GrpcGatewayRouteMetadataList(output.metadata, context) : undefined,
    port: __expectInt32(output.port),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1GrpcGatewayRouteMetadata
 */
const de_GrpcGatewayRouteMetadata = (output: any, context: __SerdeContext): GrpcGatewayRouteMetadata => {
  return {
    invert: __expectBoolean(output.invert),
    match: output.match != null ? de_GrpcMetadataMatchMethod(__expectUnion(output.match), context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1GrpcGatewayRouteMetadataList
 */
const de_GrpcGatewayRouteMetadataList = (output: any, context: __SerdeContext): GrpcGatewayRouteMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GrpcGatewayRouteMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GrpcGatewayRouteRewrite
 */
const de_GrpcGatewayRouteRewrite = (output: any, context: __SerdeContext): GrpcGatewayRouteRewrite => {
  return {
    hostname: output.hostname != null ? de_GatewayRouteHostnameRewrite(output.hostname, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrpcMetadataMatchMethod
 */
const de_GrpcMetadataMatchMethod = (output: any, context: __SerdeContext): GrpcMetadataMatchMethod => {
  if (__expectString(output.exact) !== undefined) {
    return { exact: __expectString(output.exact) as any };
  }
  if (__expectString(output.prefix) !== undefined) {
    return { prefix: __expectString(output.prefix) as any };
  }
  if (output.range != null) {
    return {
      range: de_MatchRange(output.range, context),
    };
  }
  if (__expectString(output.regex) !== undefined) {
    return { regex: __expectString(output.regex) as any };
  }
  if (__expectString(output.suffix) !== undefined) {
    return { suffix: __expectString(output.suffix) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GrpcRetryPolicy
 */
const de_GrpcRetryPolicy = (output: any, context: __SerdeContext): GrpcRetryPolicy => {
  return {
    grpcRetryEvents:
      output.grpcRetryEvents != null ? de_GrpcRetryPolicyEvents(output.grpcRetryEvents, context) : undefined,
    httpRetryEvents:
      output.httpRetryEvents != null ? de_HttpRetryPolicyEvents(output.httpRetryEvents, context) : undefined,
    maxRetries: __expectLong(output.maxRetries),
    perRetryTimeout: output.perRetryTimeout != null ? de_Duration(output.perRetryTimeout, context) : undefined,
    tcpRetryEvents: output.tcpRetryEvents != null ? de_TcpRetryPolicyEvents(output.tcpRetryEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrpcRetryPolicyEvents
 */
const de_GrpcRetryPolicyEvents = (output: any, context: __SerdeContext): (GrpcRetryPolicyEvent | string)[] => {
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
 * deserializeAws_restJson1GrpcRoute
 */
const de_GrpcRoute = (output: any, context: __SerdeContext): GrpcRoute => {
  return {
    action: output.action != null ? de_GrpcRouteAction(output.action, context) : undefined,
    match: output.match != null ? de_GrpcRouteMatch(output.match, context) : undefined,
    retryPolicy: output.retryPolicy != null ? de_GrpcRetryPolicy(output.retryPolicy, context) : undefined,
    timeout: output.timeout != null ? de_GrpcTimeout(output.timeout, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrpcRouteAction
 */
const de_GrpcRouteAction = (output: any, context: __SerdeContext): GrpcRouteAction => {
  return {
    weightedTargets: output.weightedTargets != null ? de_WeightedTargets(output.weightedTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrpcRouteMatch
 */
const de_GrpcRouteMatch = (output: any, context: __SerdeContext): GrpcRouteMatch => {
  return {
    metadata: output.metadata != null ? de_GrpcRouteMetadataList(output.metadata, context) : undefined,
    methodName: __expectString(output.methodName),
    port: __expectInt32(output.port),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1GrpcRouteMetadata
 */
const de_GrpcRouteMetadata = (output: any, context: __SerdeContext): GrpcRouteMetadata => {
  return {
    invert: __expectBoolean(output.invert),
    match: output.match != null ? de_GrpcRouteMetadataMatchMethod(__expectUnion(output.match), context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1GrpcRouteMetadataList
 */
const de_GrpcRouteMetadataList = (output: any, context: __SerdeContext): GrpcRouteMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GrpcRouteMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GrpcRouteMetadataMatchMethod
 */
const de_GrpcRouteMetadataMatchMethod = (output: any, context: __SerdeContext): GrpcRouteMetadataMatchMethod => {
  if (__expectString(output.exact) !== undefined) {
    return { exact: __expectString(output.exact) as any };
  }
  if (__expectString(output.prefix) !== undefined) {
    return { prefix: __expectString(output.prefix) as any };
  }
  if (output.range != null) {
    return {
      range: de_MatchRange(output.range, context),
    };
  }
  if (__expectString(output.regex) !== undefined) {
    return { regex: __expectString(output.regex) as any };
  }
  if (__expectString(output.suffix) !== undefined) {
    return { suffix: __expectString(output.suffix) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GrpcTimeout
 */
const de_GrpcTimeout = (output: any, context: __SerdeContext): GrpcTimeout => {
  return {
    idle: output.idle != null ? de_Duration(output.idle, context) : undefined,
    perRequest: output.perRequest != null ? de_Duration(output.perRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HeaderMatchMethod
 */
const de_HeaderMatchMethod = (output: any, context: __SerdeContext): HeaderMatchMethod => {
  if (__expectString(output.exact) !== undefined) {
    return { exact: __expectString(output.exact) as any };
  }
  if (__expectString(output.prefix) !== undefined) {
    return { prefix: __expectString(output.prefix) as any };
  }
  if (output.range != null) {
    return {
      range: de_MatchRange(output.range, context),
    };
  }
  if (__expectString(output.regex) !== undefined) {
    return { regex: __expectString(output.regex) as any };
  }
  if (__expectString(output.suffix) !== undefined) {
    return { suffix: __expectString(output.suffix) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1HealthCheckPolicy
 */
const de_HealthCheckPolicy = (output: any, context: __SerdeContext): HealthCheckPolicy => {
  return {
    healthyThreshold: __expectInt32(output.healthyThreshold),
    intervalMillis: __expectLong(output.intervalMillis),
    path: __expectString(output.path),
    port: __expectInt32(output.port),
    protocol: __expectString(output.protocol),
    timeoutMillis: __expectLong(output.timeoutMillis),
    unhealthyThreshold: __expectInt32(output.unhealthyThreshold),
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRoute
 */
const de_HttpGatewayRoute = (output: any, context: __SerdeContext): HttpGatewayRoute => {
  return {
    action: output.action != null ? de_HttpGatewayRouteAction(output.action, context) : undefined,
    match: output.match != null ? de_HttpGatewayRouteMatch(output.match, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRouteAction
 */
const de_HttpGatewayRouteAction = (output: any, context: __SerdeContext): HttpGatewayRouteAction => {
  return {
    rewrite: output.rewrite != null ? de_HttpGatewayRouteRewrite(output.rewrite, context) : undefined,
    target: output.target != null ? de_GatewayRouteTarget(output.target, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRouteHeader
 */
const de_HttpGatewayRouteHeader = (output: any, context: __SerdeContext): HttpGatewayRouteHeader => {
  return {
    invert: __expectBoolean(output.invert),
    match: output.match != null ? de_HeaderMatchMethod(__expectUnion(output.match), context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRouteHeaders
 */
const de_HttpGatewayRouteHeaders = (output: any, context: __SerdeContext): HttpGatewayRouteHeader[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HttpGatewayRouteHeader(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HttpGatewayRouteMatch
 */
const de_HttpGatewayRouteMatch = (output: any, context: __SerdeContext): HttpGatewayRouteMatch => {
  return {
    headers: output.headers != null ? de_HttpGatewayRouteHeaders(output.headers, context) : undefined,
    hostname: output.hostname != null ? de_GatewayRouteHostnameMatch(output.hostname, context) : undefined,
    method: __expectString(output.method),
    path: output.path != null ? de_HttpPathMatch(output.path, context) : undefined,
    port: __expectInt32(output.port),
    prefix: __expectString(output.prefix),
    queryParameters:
      output.queryParameters != null ? de_HttpQueryParameters(output.queryParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRoutePathRewrite
 */
const de_HttpGatewayRoutePathRewrite = (output: any, context: __SerdeContext): HttpGatewayRoutePathRewrite => {
  return {
    exact: __expectString(output.exact),
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRoutePrefixRewrite
 */
const de_HttpGatewayRoutePrefixRewrite = (output: any, context: __SerdeContext): HttpGatewayRoutePrefixRewrite => {
  return {
    defaultPrefix: __expectString(output.defaultPrefix),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1HttpGatewayRouteRewrite
 */
const de_HttpGatewayRouteRewrite = (output: any, context: __SerdeContext): HttpGatewayRouteRewrite => {
  return {
    hostname: output.hostname != null ? de_GatewayRouteHostnameRewrite(output.hostname, context) : undefined,
    path: output.path != null ? de_HttpGatewayRoutePathRewrite(output.path, context) : undefined,
    prefix: output.prefix != null ? de_HttpGatewayRoutePrefixRewrite(output.prefix, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpPathMatch
 */
const de_HttpPathMatch = (output: any, context: __SerdeContext): HttpPathMatch => {
  return {
    exact: __expectString(output.exact),
    regex: __expectString(output.regex),
  } as any;
};

/**
 * deserializeAws_restJson1HttpQueryParameter
 */
const de_HttpQueryParameter = (output: any, context: __SerdeContext): HttpQueryParameter => {
  return {
    match: output.match != null ? de_QueryParameterMatch(output.match, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1HttpQueryParameters
 */
const de_HttpQueryParameters = (output: any, context: __SerdeContext): HttpQueryParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HttpQueryParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HttpRetryPolicy
 */
const de_HttpRetryPolicy = (output: any, context: __SerdeContext): HttpRetryPolicy => {
  return {
    httpRetryEvents:
      output.httpRetryEvents != null ? de_HttpRetryPolicyEvents(output.httpRetryEvents, context) : undefined,
    maxRetries: __expectLong(output.maxRetries),
    perRetryTimeout: output.perRetryTimeout != null ? de_Duration(output.perRetryTimeout, context) : undefined,
    tcpRetryEvents: output.tcpRetryEvents != null ? de_TcpRetryPolicyEvents(output.tcpRetryEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpRetryPolicyEvents
 */
const de_HttpRetryPolicyEvents = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1HttpRoute
 */
const de_HttpRoute = (output: any, context: __SerdeContext): HttpRoute => {
  return {
    action: output.action != null ? de_HttpRouteAction(output.action, context) : undefined,
    match: output.match != null ? de_HttpRouteMatch(output.match, context) : undefined,
    retryPolicy: output.retryPolicy != null ? de_HttpRetryPolicy(output.retryPolicy, context) : undefined,
    timeout: output.timeout != null ? de_HttpTimeout(output.timeout, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpRouteAction
 */
const de_HttpRouteAction = (output: any, context: __SerdeContext): HttpRouteAction => {
  return {
    weightedTargets: output.weightedTargets != null ? de_WeightedTargets(output.weightedTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HttpRouteHeader
 */
const de_HttpRouteHeader = (output: any, context: __SerdeContext): HttpRouteHeader => {
  return {
    invert: __expectBoolean(output.invert),
    match: output.match != null ? de_HeaderMatchMethod(__expectUnion(output.match), context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1HttpRouteHeaders
 */
const de_HttpRouteHeaders = (output: any, context: __SerdeContext): HttpRouteHeader[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HttpRouteHeader(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HttpRouteMatch
 */
const de_HttpRouteMatch = (output: any, context: __SerdeContext): HttpRouteMatch => {
  return {
    headers: output.headers != null ? de_HttpRouteHeaders(output.headers, context) : undefined,
    method: __expectString(output.method),
    path: output.path != null ? de_HttpPathMatch(output.path, context) : undefined,
    port: __expectInt32(output.port),
    prefix: __expectString(output.prefix),
    queryParameters:
      output.queryParameters != null ? de_HttpQueryParameters(output.queryParameters, context) : undefined,
    scheme: __expectString(output.scheme),
  } as any;
};

/**
 * deserializeAws_restJson1HttpTimeout
 */
const de_HttpTimeout = (output: any, context: __SerdeContext): HttpTimeout => {
  return {
    idle: output.idle != null ? de_Duration(output.idle, context) : undefined,
    perRequest: output.perRequest != null ? de_Duration(output.perRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JsonFormat
 */
const de_JsonFormat = (output: any, context: __SerdeContext): JsonFormatRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JsonFormatRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JsonFormatRef
 */
const de_JsonFormatRef = (output: any, context: __SerdeContext): JsonFormatRef => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1Listener
 */
const de_Listener = (output: any, context: __SerdeContext): Listener => {
  return {
    connectionPool:
      output.connectionPool != null
        ? de_VirtualNodeConnectionPool(__expectUnion(output.connectionPool), context)
        : undefined,
    healthCheck: output.healthCheck != null ? de_HealthCheckPolicy(output.healthCheck, context) : undefined,
    outlierDetection:
      output.outlierDetection != null ? de_OutlierDetection(output.outlierDetection, context) : undefined,
    portMapping: output.portMapping != null ? de_PortMapping(output.portMapping, context) : undefined,
    timeout: output.timeout != null ? de_ListenerTimeout(__expectUnion(output.timeout), context) : undefined,
    tls: output.tls != null ? de_ListenerTls(output.tls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Listeners
 */
const de_Listeners = (output: any, context: __SerdeContext): Listener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Listener(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListenerTimeout
 */
const de_ListenerTimeout = (output: any, context: __SerdeContext): ListenerTimeout => {
  if (output.grpc != null) {
    return {
      grpc: de_GrpcTimeout(output.grpc, context),
    };
  }
  if (output.http != null) {
    return {
      http: de_HttpTimeout(output.http, context),
    };
  }
  if (output.http2 != null) {
    return {
      http2: de_HttpTimeout(output.http2, context),
    };
  }
  if (output.tcp != null) {
    return {
      tcp: de_TcpTimeout(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ListenerTls
 */
const de_ListenerTls = (output: any, context: __SerdeContext): ListenerTls => {
  return {
    certificate:
      output.certificate != null ? de_ListenerTlsCertificate(__expectUnion(output.certificate), context) : undefined,
    mode: __expectString(output.mode),
    validation: output.validation != null ? de_ListenerTlsValidationContext(output.validation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListenerTlsAcmCertificate
 */
const de_ListenerTlsAcmCertificate = (output: any, context: __SerdeContext): ListenerTlsAcmCertificate => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

/**
 * deserializeAws_restJson1ListenerTlsCertificate
 */
const de_ListenerTlsCertificate = (output: any, context: __SerdeContext): ListenerTlsCertificate => {
  if (output.acm != null) {
    return {
      acm: de_ListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: de_ListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_ListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ListenerTlsFileCertificate
 */
const de_ListenerTlsFileCertificate = (output: any, context: __SerdeContext): ListenerTlsFileCertificate => {
  return {
    certificateChain: __expectString(output.certificateChain),
    privateKey: __expectString(output.privateKey),
  } as any;
};

/**
 * deserializeAws_restJson1ListenerTlsSdsCertificate
 */
const de_ListenerTlsSdsCertificate = (output: any, context: __SerdeContext): ListenerTlsSdsCertificate => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

/**
 * deserializeAws_restJson1ListenerTlsValidationContext
 */
const de_ListenerTlsValidationContext = (output: any, context: __SerdeContext): ListenerTlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? de_SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null ? de_ListenerTlsValidationContextTrust(__expectUnion(output.trust), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListenerTlsValidationContextTrust
 */
const de_ListenerTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): ListenerTlsValidationContextTrust => {
  if (output.file != null) {
    return {
      file: de_TlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_TlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Logging
 */
const de_Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    accessLog: output.accessLog != null ? de_AccessLog(__expectUnion(output.accessLog), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoggingFormat
 */
const de_LoggingFormat = (output: any, context: __SerdeContext): LoggingFormat => {
  if (output.json != null) {
    return {
      json: de_JsonFormat(output.json, context),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1MatchRange
 */
const de_MatchRange = (output: any, context: __SerdeContext): MatchRange => {
  return {
    end: __expectLong(output.end),
    start: __expectLong(output.start),
  } as any;
};

/**
 * deserializeAws_restJson1MeshData
 */
const de_MeshData = (output: any, context: __SerdeContext): MeshData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? de_MeshSpec(output.spec, context) : undefined,
    status: output.status != null ? de_MeshStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MeshList
 */
const de_MeshList = (output: any, context: __SerdeContext): MeshRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MeshRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MeshRef
 */
const de_MeshRef = (output: any, context: __SerdeContext): MeshRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    version: __expectLong(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1MeshServiceDiscovery
 */
const de_MeshServiceDiscovery = (output: any, context: __SerdeContext): MeshServiceDiscovery => {
  return {
    ipPreference: __expectString(output.ipPreference),
  } as any;
};

/**
 * deserializeAws_restJson1MeshSpec
 */
const de_MeshSpec = (output: any, context: __SerdeContext): MeshSpec => {
  return {
    egressFilter: output.egressFilter != null ? de_EgressFilter(output.egressFilter, context) : undefined,
    serviceDiscovery:
      output.serviceDiscovery != null ? de_MeshServiceDiscovery(output.serviceDiscovery, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MeshStatus
 */
const de_MeshStatus = (output: any, context: __SerdeContext): MeshStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1OutlierDetection
 */
const de_OutlierDetection = (output: any, context: __SerdeContext): OutlierDetection => {
  return {
    baseEjectionDuration:
      output.baseEjectionDuration != null ? de_Duration(output.baseEjectionDuration, context) : undefined,
    interval: output.interval != null ? de_Duration(output.interval, context) : undefined,
    maxEjectionPercent: __expectInt32(output.maxEjectionPercent),
    maxServerErrors: __expectLong(output.maxServerErrors),
  } as any;
};

/**
 * deserializeAws_restJson1PortMapping
 */
const de_PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    port: __expectInt32(output.port),
    protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_restJson1PortSet
 */
const de_PortSet = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueryParameterMatch
 */
const de_QueryParameterMatch = (output: any, context: __SerdeContext): QueryParameterMatch => {
  return {
    exact: __expectString(output.exact),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceMetadata
 */
const de_ResourceMetadata = (output: any, context: __SerdeContext): ResourceMetadata => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    uid: __expectString(output.uid),
    version: __expectLong(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1RouteData
 */
const de_RouteData = (output: any, context: __SerdeContext): RouteData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    routeName: __expectString(output.routeName),
    spec: output.spec != null ? de_RouteSpec(output.spec, context) : undefined,
    status: output.status != null ? de_RouteStatus(output.status, context) : undefined,
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

/**
 * deserializeAws_restJson1RouteList
 */
const de_RouteList = (output: any, context: __SerdeContext): RouteRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RouteRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteRef
 */
const de_RouteRef = (output: any, context: __SerdeContext): RouteRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    routeName: __expectString(output.routeName),
    version: __expectLong(output.version),
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

/**
 * deserializeAws_restJson1RouteSpec
 */
const de_RouteSpec = (output: any, context: __SerdeContext): RouteSpec => {
  return {
    grpcRoute: output.grpcRoute != null ? de_GrpcRoute(output.grpcRoute, context) : undefined,
    http2Route: output.http2Route != null ? de_HttpRoute(output.http2Route, context) : undefined,
    httpRoute: output.httpRoute != null ? de_HttpRoute(output.httpRoute, context) : undefined,
    priority: __expectInt32(output.priority),
    tcpRoute: output.tcpRoute != null ? de_TcpRoute(output.tcpRoute, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RouteStatus
 */
const de_RouteStatus = (output: any, context: __SerdeContext): RouteStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceDiscovery
 */
const de_ServiceDiscovery = (output: any, context: __SerdeContext): ServiceDiscovery => {
  if (output.awsCloudMap != null) {
    return {
      awsCloudMap: de_AwsCloudMapServiceDiscovery(output.awsCloudMap, context),
    };
  }
  if (output.dns != null) {
    return {
      dns: de_DnsServiceDiscovery(output.dns, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SubjectAlternativeNameList
 */
const de_SubjectAlternativeNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SubjectAlternativeNameMatchers
 */
const de_SubjectAlternativeNameMatchers = (output: any, context: __SerdeContext): SubjectAlternativeNameMatchers => {
  return {
    exact: output.exact != null ? de_SubjectAlternativeNameList(output.exact, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SubjectAlternativeNames
 */
const de_SubjectAlternativeNames = (output: any, context: __SerdeContext): SubjectAlternativeNames => {
  return {
    match: output.match != null ? de_SubjectAlternativeNameMatchers(output.match, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): TagRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagRef
 */
const de_TagRef = (output: any, context: __SerdeContext): TagRef => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1TcpRetryPolicyEvents
 */
const de_TcpRetryPolicyEvents = (output: any, context: __SerdeContext): (TcpRetryPolicyEvent | string)[] => {
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
 * deserializeAws_restJson1TcpRoute
 */
const de_TcpRoute = (output: any, context: __SerdeContext): TcpRoute => {
  return {
    action: output.action != null ? de_TcpRouteAction(output.action, context) : undefined,
    match: output.match != null ? de_TcpRouteMatch(output.match, context) : undefined,
    timeout: output.timeout != null ? de_TcpTimeout(output.timeout, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TcpRouteAction
 */
const de_TcpRouteAction = (output: any, context: __SerdeContext): TcpRouteAction => {
  return {
    weightedTargets: output.weightedTargets != null ? de_WeightedTargets(output.weightedTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TcpRouteMatch
 */
const de_TcpRouteMatch = (output: any, context: __SerdeContext): TcpRouteMatch => {
  return {
    port: __expectInt32(output.port),
  } as any;
};

/**
 * deserializeAws_restJson1TcpTimeout
 */
const de_TcpTimeout = (output: any, context: __SerdeContext): TcpTimeout => {
  return {
    idle: output.idle != null ? de_Duration(output.idle, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TlsValidationContext
 */
const de_TlsValidationContext = (output: any, context: __SerdeContext): TlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? de_SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust: output.trust != null ? de_TlsValidationContextTrust(__expectUnion(output.trust), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TlsValidationContextAcmTrust
 */
const de_TlsValidationContextAcmTrust = (output: any, context: __SerdeContext): TlsValidationContextAcmTrust => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns != null
        ? de_CertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TlsValidationContextFileTrust
 */
const de_TlsValidationContextFileTrust = (output: any, context: __SerdeContext): TlsValidationContextFileTrust => {
  return {
    certificateChain: __expectString(output.certificateChain),
  } as any;
};

/**
 * deserializeAws_restJson1TlsValidationContextSdsTrust
 */
const de_TlsValidationContextSdsTrust = (output: any, context: __SerdeContext): TlsValidationContextSdsTrust => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

/**
 * deserializeAws_restJson1TlsValidationContextTrust
 */
const de_TlsValidationContextTrust = (output: any, context: __SerdeContext): TlsValidationContextTrust => {
  if (output.acm != null) {
    return {
      acm: de_TlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: de_TlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_TlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualGatewayAccessLog
 */
const de_VirtualGatewayAccessLog = (output: any, context: __SerdeContext): VirtualGatewayAccessLog => {
  if (output.file != null) {
    return {
      file: de_VirtualGatewayFileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualGatewayBackendDefaults
 */
const de_VirtualGatewayBackendDefaults = (output: any, context: __SerdeContext): VirtualGatewayBackendDefaults => {
  return {
    clientPolicy: output.clientPolicy != null ? de_VirtualGatewayClientPolicy(output.clientPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns
 */
const de_VirtualGatewayCertificateAuthorityArns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1VirtualGatewayClientPolicy
 */
const de_VirtualGatewayClientPolicy = (output: any, context: __SerdeContext): VirtualGatewayClientPolicy => {
  return {
    tls: output.tls != null ? de_VirtualGatewayClientPolicyTls(output.tls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayClientPolicyTls
 */
const de_VirtualGatewayClientPolicyTls = (output: any, context: __SerdeContext): VirtualGatewayClientPolicyTls => {
  return {
    certificate:
      output.certificate != null
        ? de_VirtualGatewayClientTlsCertificate(__expectUnion(output.certificate), context)
        : undefined,
    enforce: __expectBoolean(output.enforce),
    ports: output.ports != null ? de_PortSet(output.ports, context) : undefined,
    validation:
      output.validation != null ? de_VirtualGatewayTlsValidationContext(output.validation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayClientTlsCertificate
 */
const de_VirtualGatewayClientTlsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayClientTlsCertificate => {
  if (output.file != null) {
    return {
      file: de_VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_VirtualGatewayListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualGatewayConnectionPool
 */
const de_VirtualGatewayConnectionPool = (output: any, context: __SerdeContext): VirtualGatewayConnectionPool => {
  if (output.grpc != null) {
    return {
      grpc: de_VirtualGatewayGrpcConnectionPool(output.grpc, context),
    };
  }
  if (output.http != null) {
    return {
      http: de_VirtualGatewayHttpConnectionPool(output.http, context),
    };
  }
  if (output.http2 != null) {
    return {
      http2: de_VirtualGatewayHttp2ConnectionPool(output.http2, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualGatewayData
 */
const de_VirtualGatewayData = (output: any, context: __SerdeContext): VirtualGatewayData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? de_VirtualGatewaySpec(output.spec, context) : undefined,
    status: output.status != null ? de_VirtualGatewayStatus(output.status, context) : undefined,
    virtualGatewayName: __expectString(output.virtualGatewayName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayFileAccessLog
 */
const de_VirtualGatewayFileAccessLog = (output: any, context: __SerdeContext): VirtualGatewayFileAccessLog => {
  return {
    format: output.format != null ? de_LoggingFormat(__expectUnion(output.format), context) : undefined,
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayGrpcConnectionPool
 */
const de_VirtualGatewayGrpcConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayGrpcConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayHealthCheckPolicy
 */
const de_VirtualGatewayHealthCheckPolicy = (output: any, context: __SerdeContext): VirtualGatewayHealthCheckPolicy => {
  return {
    healthyThreshold: __expectInt32(output.healthyThreshold),
    intervalMillis: __expectLong(output.intervalMillis),
    path: __expectString(output.path),
    port: __expectInt32(output.port),
    protocol: __expectString(output.protocol),
    timeoutMillis: __expectLong(output.timeoutMillis),
    unhealthyThreshold: __expectInt32(output.unhealthyThreshold),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayHttp2ConnectionPool
 */
const de_VirtualGatewayHttp2ConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayHttp2ConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayHttpConnectionPool
 */
const de_VirtualGatewayHttpConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayHttpConnectionPool => {
  return {
    maxConnections: __expectInt32(output.maxConnections),
    maxPendingRequests: __expectInt32(output.maxPendingRequests),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayList
 */
const de_VirtualGatewayList = (output: any, context: __SerdeContext): VirtualGatewayRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualGatewayRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualGatewayListener
 */
const de_VirtualGatewayListener = (output: any, context: __SerdeContext): VirtualGatewayListener => {
  return {
    connectionPool:
      output.connectionPool != null
        ? de_VirtualGatewayConnectionPool(__expectUnion(output.connectionPool), context)
        : undefined,
    healthCheck:
      output.healthCheck != null ? de_VirtualGatewayHealthCheckPolicy(output.healthCheck, context) : undefined,
    portMapping: output.portMapping != null ? de_VirtualGatewayPortMapping(output.portMapping, context) : undefined,
    tls: output.tls != null ? de_VirtualGatewayListenerTls(output.tls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayListeners
 */
const de_VirtualGatewayListeners = (output: any, context: __SerdeContext): VirtualGatewayListener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualGatewayListener(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTls
 */
const de_VirtualGatewayListenerTls = (output: any, context: __SerdeContext): VirtualGatewayListenerTls => {
  return {
    certificate:
      output.certificate != null
        ? de_VirtualGatewayListenerTlsCertificate(__expectUnion(output.certificate), context)
        : undefined,
    mode: __expectString(output.mode),
    validation:
      output.validation != null ? de_VirtualGatewayListenerTlsValidationContext(output.validation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate
 */
const de_VirtualGatewayListenerTlsAcmCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsAcmCertificate => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTlsCertificate
 */
const de_VirtualGatewayListenerTlsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsCertificate => {
  if (output.acm != null) {
    return {
      acm: de_VirtualGatewayListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: de_VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_VirtualGatewayListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate
 */
const de_VirtualGatewayListenerTlsFileCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsFileCertificate => {
  return {
    certificateChain: __expectString(output.certificateChain),
    privateKey: __expectString(output.privateKey),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate
 */
const de_VirtualGatewayListenerTlsSdsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsSdsCertificate => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTlsValidationContext
 */
const de_VirtualGatewayListenerTlsValidationContext = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? de_SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null
        ? de_VirtualGatewayListenerTlsValidationContextTrust(__expectUnion(output.trust), context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust
 */
const de_VirtualGatewayListenerTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsValidationContextTrust => {
  if (output.file != null) {
    return {
      file: de_VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_VirtualGatewayTlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualGatewayLogging
 */
const de_VirtualGatewayLogging = (output: any, context: __SerdeContext): VirtualGatewayLogging => {
  return {
    accessLog:
      output.accessLog != null ? de_VirtualGatewayAccessLog(__expectUnion(output.accessLog), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayPortMapping
 */
const de_VirtualGatewayPortMapping = (output: any, context: __SerdeContext): VirtualGatewayPortMapping => {
  return {
    port: __expectInt32(output.port),
    protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayRef
 */
const de_VirtualGatewayRef = (output: any, context: __SerdeContext): VirtualGatewayRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    version: __expectLong(output.version),
    virtualGatewayName: __expectString(output.virtualGatewayName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewaySpec
 */
const de_VirtualGatewaySpec = (output: any, context: __SerdeContext): VirtualGatewaySpec => {
  return {
    backendDefaults:
      output.backendDefaults != null ? de_VirtualGatewayBackendDefaults(output.backendDefaults, context) : undefined,
    listeners: output.listeners != null ? de_VirtualGatewayListeners(output.listeners, context) : undefined,
    logging: output.logging != null ? de_VirtualGatewayLogging(output.logging, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayStatus
 */
const de_VirtualGatewayStatus = (output: any, context: __SerdeContext): VirtualGatewayStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayTlsValidationContext
 */
const de_VirtualGatewayTlsValidationContext = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? de_SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null
        ? de_VirtualGatewayTlsValidationContextTrust(__expectUnion(output.trust), context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust
 */
const de_VirtualGatewayTlsValidationContextAcmTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextAcmTrust => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns != null
        ? de_VirtualGatewayCertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust
 */
const de_VirtualGatewayTlsValidationContextFileTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextFileTrust => {
  return {
    certificateChain: __expectString(output.certificateChain),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust
 */
const de_VirtualGatewayTlsValidationContextSdsTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextSdsTrust => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust
 */
const de_VirtualGatewayTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextTrust => {
  if (output.acm != null) {
    return {
      acm: de_VirtualGatewayTlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: de_VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: de_VirtualGatewayTlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualNodeConnectionPool
 */
const de_VirtualNodeConnectionPool = (output: any, context: __SerdeContext): VirtualNodeConnectionPool => {
  if (output.grpc != null) {
    return {
      grpc: de_VirtualNodeGrpcConnectionPool(output.grpc, context),
    };
  }
  if (output.http != null) {
    return {
      http: de_VirtualNodeHttpConnectionPool(output.http, context),
    };
  }
  if (output.http2 != null) {
    return {
      http2: de_VirtualNodeHttp2ConnectionPool(output.http2, context),
    };
  }
  if (output.tcp != null) {
    return {
      tcp: de_VirtualNodeTcpConnectionPool(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualNodeData
 */
const de_VirtualNodeData = (output: any, context: __SerdeContext): VirtualNodeData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? de_VirtualNodeSpec(output.spec, context) : undefined,
    status: output.status != null ? de_VirtualNodeStatus(output.status, context) : undefined,
    virtualNodeName: __expectString(output.virtualNodeName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeGrpcConnectionPool
 */
const de_VirtualNodeGrpcConnectionPool = (output: any, context: __SerdeContext): VirtualNodeGrpcConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeHttp2ConnectionPool
 */
const de_VirtualNodeHttp2ConnectionPool = (output: any, context: __SerdeContext): VirtualNodeHttp2ConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeHttpConnectionPool
 */
const de_VirtualNodeHttpConnectionPool = (output: any, context: __SerdeContext): VirtualNodeHttpConnectionPool => {
  return {
    maxConnections: __expectInt32(output.maxConnections),
    maxPendingRequests: __expectInt32(output.maxPendingRequests),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeList
 */
const de_VirtualNodeList = (output: any, context: __SerdeContext): VirtualNodeRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualNodeRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualNodeRef
 */
const de_VirtualNodeRef = (output: any, context: __SerdeContext): VirtualNodeRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    version: __expectLong(output.version),
    virtualNodeName: __expectString(output.virtualNodeName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeServiceProvider
 */
const de_VirtualNodeServiceProvider = (output: any, context: __SerdeContext): VirtualNodeServiceProvider => {
  return {
    virtualNodeName: __expectString(output.virtualNodeName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeSpec
 */
const de_VirtualNodeSpec = (output: any, context: __SerdeContext): VirtualNodeSpec => {
  return {
    backendDefaults: output.backendDefaults != null ? de_BackendDefaults(output.backendDefaults, context) : undefined,
    backends: output.backends != null ? de_Backends(output.backends, context) : undefined,
    listeners: output.listeners != null ? de_Listeners(output.listeners, context) : undefined,
    logging: output.logging != null ? de_Logging(output.logging, context) : undefined,
    serviceDiscovery:
      output.serviceDiscovery != null
        ? de_ServiceDiscovery(__expectUnion(output.serviceDiscovery), context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeStatus
 */
const de_VirtualNodeStatus = (output: any, context: __SerdeContext): VirtualNodeStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualNodeTcpConnectionPool
 */
const de_VirtualNodeTcpConnectionPool = (output: any, context: __SerdeContext): VirtualNodeTcpConnectionPool => {
  return {
    maxConnections: __expectInt32(output.maxConnections),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualRouterData
 */
const de_VirtualRouterData = (output: any, context: __SerdeContext): VirtualRouterData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? de_VirtualRouterSpec(output.spec, context) : undefined,
    status: output.status != null ? de_VirtualRouterStatus(output.status, context) : undefined,
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualRouterList
 */
const de_VirtualRouterList = (output: any, context: __SerdeContext): VirtualRouterRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualRouterRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualRouterListener
 */
const de_VirtualRouterListener = (output: any, context: __SerdeContext): VirtualRouterListener => {
  return {
    portMapping: output.portMapping != null ? de_PortMapping(output.portMapping, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualRouterListeners
 */
const de_VirtualRouterListeners = (output: any, context: __SerdeContext): VirtualRouterListener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualRouterListener(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualRouterRef
 */
const de_VirtualRouterRef = (output: any, context: __SerdeContext): VirtualRouterRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    version: __expectLong(output.version),
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualRouterServiceProvider
 */
const de_VirtualRouterServiceProvider = (output: any, context: __SerdeContext): VirtualRouterServiceProvider => {
  return {
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualRouterSpec
 */
const de_VirtualRouterSpec = (output: any, context: __SerdeContext): VirtualRouterSpec => {
  return {
    listeners: output.listeners != null ? de_VirtualRouterListeners(output.listeners, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualRouterStatus
 */
const de_VirtualRouterStatus = (output: any, context: __SerdeContext): VirtualRouterStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualServiceBackend
 */
const de_VirtualServiceBackend = (output: any, context: __SerdeContext): VirtualServiceBackend => {
  return {
    clientPolicy: output.clientPolicy != null ? de_ClientPolicy(output.clientPolicy, context) : undefined,
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualServiceData
 */
const de_VirtualServiceData = (output: any, context: __SerdeContext): VirtualServiceData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? de_ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? de_VirtualServiceSpec(output.spec, context) : undefined,
    status: output.status != null ? de_VirtualServiceStatus(output.status, context) : undefined,
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualServiceList
 */
const de_VirtualServiceList = (output: any, context: __SerdeContext): VirtualServiceRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualServiceRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualServiceProvider
 */
const de_VirtualServiceProvider = (output: any, context: __SerdeContext): VirtualServiceProvider => {
  if (output.virtualNode != null) {
    return {
      virtualNode: de_VirtualNodeServiceProvider(output.virtualNode, context),
    };
  }
  if (output.virtualRouter != null) {
    return {
      virtualRouter: de_VirtualRouterServiceProvider(output.virtualRouter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VirtualServiceRef
 */
const de_VirtualServiceRef = (output: any, context: __SerdeContext): VirtualServiceRef => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    meshName: __expectString(output.meshName),
    meshOwner: __expectString(output.meshOwner),
    resourceOwner: __expectString(output.resourceOwner),
    version: __expectLong(output.version),
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1VirtualServiceSpec
 */
const de_VirtualServiceSpec = (output: any, context: __SerdeContext): VirtualServiceSpec => {
  return {
    provider: output.provider != null ? de_VirtualServiceProvider(__expectUnion(output.provider), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VirtualServiceStatus
 */
const de_VirtualServiceStatus = (output: any, context: __SerdeContext): VirtualServiceStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1WeightedTarget
 */
const de_WeightedTarget = (output: any, context: __SerdeContext): WeightedTarget => {
  return {
    port: __expectInt32(output.port),
    virtualNode: __expectString(output.virtualNode),
    weight: __expectInt32(output.weight),
  } as any;
};

/**
 * deserializeAws_restJson1WeightedTargets
 */
const de_WeightedTargets = (output: any, context: __SerdeContext): WeightedTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WeightedTarget(entry, context);
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
