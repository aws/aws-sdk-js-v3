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

export const serializeAws_restJson1CreateGatewayRouteCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateMeshCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
    ...(input.spec != null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateVirtualGatewayCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateVirtualNodeCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateVirtualRouterCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateVirtualServiceCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1DeleteGatewayRouteCommand = async (
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

export const serializeAws_restJson1DeleteMeshCommand = async (
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

export const serializeAws_restJson1DeleteRouteCommand = async (
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

export const serializeAws_restJson1DeleteVirtualGatewayCommand = async (
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

export const serializeAws_restJson1DeleteVirtualNodeCommand = async (
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

export const serializeAws_restJson1DeleteVirtualRouterCommand = async (
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

export const serializeAws_restJson1DeleteVirtualServiceCommand = async (
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

export const serializeAws_restJson1DescribeGatewayRouteCommand = async (
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

export const serializeAws_restJson1DescribeMeshCommand = async (
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

export const serializeAws_restJson1DescribeRouteCommand = async (
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

export const serializeAws_restJson1DescribeVirtualGatewayCommand = async (
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

export const serializeAws_restJson1DescribeVirtualNodeCommand = async (
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

export const serializeAws_restJson1DescribeVirtualRouterCommand = async (
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

export const serializeAws_restJson1DescribeVirtualServiceCommand = async (
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

export const serializeAws_restJson1ListGatewayRoutesCommand = async (
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

export const serializeAws_restJson1ListMeshesCommand = async (
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

export const serializeAws_restJson1ListRoutesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListVirtualGatewaysCommand = async (
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

export const serializeAws_restJson1ListVirtualNodesCommand = async (
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

export const serializeAws_restJson1ListVirtualRoutersCommand = async (
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

export const serializeAws_restJson1ListVirtualServicesCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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
    ...(input.tagKeys != null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
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

export const serializeAws_restJson1UpdateGatewayRouteCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }),
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

export const serializeAws_restJson1UpdateMeshCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }),
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
    ...(input.spec != null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }),
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

export const serializeAws_restJson1UpdateVirtualGatewayCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }),
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

export const serializeAws_restJson1UpdateVirtualNodeCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }),
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

export const serializeAws_restJson1UpdateVirtualRouterCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }),
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

export const serializeAws_restJson1UpdateVirtualServiceCommand = async (
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
    ...(input.spec != null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }),
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

export const deserializeAws_restJson1CreateGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return contents;
};

const deserializeAws_restJson1CreateGatewayRouteCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return contents;
};

const deserializeAws_restJson1CreateMeshCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = deserializeAws_restJson1RouteData(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return contents;
};

const deserializeAws_restJson1CreateVirtualGatewayCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return contents;
};

const deserializeAws_restJson1CreateVirtualNodeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return contents;
};

const deserializeAws_restJson1CreateVirtualRouterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return contents;
};

const deserializeAws_restJson1CreateVirtualServiceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteGatewayRouteCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteMeshCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = deserializeAws_restJson1RouteData(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteVirtualGatewayCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteVirtualNodeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteVirtualRouterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteVirtualServiceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeGatewayRouteCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeMeshCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeRouteCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeVirtualGatewayCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeVirtualNodeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeVirtualRouterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return contents;
};

const deserializeAws_restJson1DescribeVirtualServiceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGatewayRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGatewayRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewayRoutes != null) {
    contents.gatewayRoutes = deserializeAws_restJson1GatewayRouteList(data.gatewayRoutes, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGatewayRoutesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMeshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMeshesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.meshes != null) {
    contents.meshes = deserializeAws_restJson1MeshList(data.meshes, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMeshesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.routes != null) {
    contents.routes = deserializeAws_restJson1RouteList(data.routes, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVirtualGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualGatewaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualGateways != null) {
    contents.virtualGateways = deserializeAws_restJson1VirtualGatewayList(data.virtualGateways, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVirtualGatewaysCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVirtualNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualNodesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualNodes != null) {
    contents.virtualNodes = deserializeAws_restJson1VirtualNodeList(data.virtualNodes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVirtualNodesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVirtualRoutersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualRoutersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualRouters != null) {
    contents.virtualRouters = deserializeAws_restJson1VirtualRouterList(data.virtualRouters, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVirtualRoutersCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVirtualServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualServicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualServices != null) {
    contents.virtualServices = deserializeAws_restJson1VirtualServiceList(data.virtualServices, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVirtualServicesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.appmesh#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateGatewayRouteCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMeshCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateMeshCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.route = deserializeAws_restJson1RouteData(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateVirtualGatewayCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateVirtualNodeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualRouterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateVirtualRouterCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateVirtualServiceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
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

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
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

const serializeAws_restJson1AccessLog = (input: AccessLog, context: __SerdeContext): any => {
  return AccessLog.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1FileAccessLog(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1AwsCloudMapInstanceAttribute = (
  input: AwsCloudMapInstanceAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1AwsCloudMapInstanceAttributes = (
  input: AwsCloudMapInstanceAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};

const serializeAws_restJson1AwsCloudMapServiceDiscovery = (
  input: AwsCloudMapServiceDiscovery,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes != null && {
      attributes: serializeAws_restJson1AwsCloudMapInstanceAttributes(input.attributes, context),
    }),
    ...(input.ipPreference != null && { ipPreference: input.ipPreference }),
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_restJson1Backend = (input: Backend, context: __SerdeContext): any => {
  return Backend.visit(input, {
    virtualService: (value) => ({ virtualService: serializeAws_restJson1VirtualServiceBackend(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1BackendDefaults = (input: BackendDefaults, context: __SerdeContext): any => {
  return {
    ...(input.clientPolicy != null && {
      clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context),
    }),
  };
};

const serializeAws_restJson1Backends = (input: Backend[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Backend(entry, context);
    });
};

const serializeAws_restJson1CertificateAuthorityArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ClientPolicy = (input: ClientPolicy, context: __SerdeContext): any => {
  return {
    ...(input.tls != null && { tls: serializeAws_restJson1ClientPolicyTls(input.tls, context) }),
  };
};

const serializeAws_restJson1ClientPolicyTls = (input: ClientPolicyTls, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && {
      certificate: serializeAws_restJson1ClientTlsCertificate(input.certificate, context),
    }),
    ...(input.enforce != null && { enforce: input.enforce }),
    ...(input.ports != null && { ports: serializeAws_restJson1PortSet(input.ports, context) }),
    ...(input.validation != null && {
      validation: serializeAws_restJson1TlsValidationContext(input.validation, context),
    }),
  };
};

const serializeAws_restJson1ClientTlsCertificate = (input: ClientTlsCertificate, context: __SerdeContext): any => {
  return ClientTlsCertificate.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1ListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DnsServiceDiscovery = (input: DnsServiceDiscovery, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.ipPreference != null && { ipPreference: input.ipPreference }),
    ...(input.responseType != null && { responseType: input.responseType }),
  };
};

const serializeAws_restJson1Duration = (input: Duration, context: __SerdeContext): any => {
  return {
    ...(input.unit != null && { unit: input.unit }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1EgressFilter = (input: EgressFilter, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1FileAccessLog = (input: FileAccessLog, context: __SerdeContext): any => {
  return {
    ...(input.format != null && { format: serializeAws_restJson1LoggingFormat(input.format, context) }),
    ...(input.path != null && { path: input.path }),
  };
};

const serializeAws_restJson1GatewayRouteHostnameMatch = (
  input: GatewayRouteHostnameMatch,
  context: __SerdeContext
): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
    ...(input.suffix != null && { suffix: input.suffix }),
  };
};

const serializeAws_restJson1GatewayRouteHostnameRewrite = (
  input: GatewayRouteHostnameRewrite,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultTargetHostname != null && { defaultTargetHostname: input.defaultTargetHostname }),
  };
};

const serializeAws_restJson1GatewayRouteSpec = (input: GatewayRouteSpec, context: __SerdeContext): any => {
  return {
    ...(input.grpcRoute != null && { grpcRoute: serializeAws_restJson1GrpcGatewayRoute(input.grpcRoute, context) }),
    ...(input.http2Route != null && { http2Route: serializeAws_restJson1HttpGatewayRoute(input.http2Route, context) }),
    ...(input.httpRoute != null && { httpRoute: serializeAws_restJson1HttpGatewayRoute(input.httpRoute, context) }),
    ...(input.priority != null && { priority: input.priority }),
  };
};

const serializeAws_restJson1GatewayRouteTarget = (input: GatewayRouteTarget, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.virtualService != null && {
      virtualService: serializeAws_restJson1GatewayRouteVirtualService(input.virtualService, context),
    }),
  };
};

const serializeAws_restJson1GatewayRouteVirtualService = (
  input: GatewayRouteVirtualService,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualServiceName != null && { virtualServiceName: input.virtualServiceName }),
  };
};

const serializeAws_restJson1GrpcGatewayRoute = (input: GrpcGatewayRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: serializeAws_restJson1GrpcGatewayRouteAction(input.action, context) }),
    ...(input.match != null && { match: serializeAws_restJson1GrpcGatewayRouteMatch(input.match, context) }),
  };
};

const serializeAws_restJson1GrpcGatewayRouteAction = (input: GrpcGatewayRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.rewrite != null && { rewrite: serializeAws_restJson1GrpcGatewayRouteRewrite(input.rewrite, context) }),
    ...(input.target != null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }),
  };
};

const serializeAws_restJson1GrpcGatewayRouteMatch = (input: GrpcGatewayRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && {
      hostname: serializeAws_restJson1GatewayRouteHostnameMatch(input.hostname, context),
    }),
    ...(input.metadata != null && {
      metadata: serializeAws_restJson1GrpcGatewayRouteMetadataList(input.metadata, context),
    }),
    ...(input.port != null && { port: input.port }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_restJson1GrpcGatewayRouteMetadata = (
  input: GrpcGatewayRouteMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: serializeAws_restJson1GrpcMetadataMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1GrpcGatewayRouteMetadataList = (
  input: GrpcGatewayRouteMetadata[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GrpcGatewayRouteMetadata(entry, context);
    });
};

const serializeAws_restJson1GrpcGatewayRouteRewrite = (
  input: GrpcGatewayRouteRewrite,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname != null && {
      hostname: serializeAws_restJson1GatewayRouteHostnameRewrite(input.hostname, context),
    }),
  };
};

const serializeAws_restJson1GrpcMetadataMatchMethod = (
  input: GrpcMetadataMatchMethod,
  context: __SerdeContext
): any => {
  return GrpcMetadataMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: serializeAws_restJson1MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1GrpcRetryPolicy = (input: GrpcRetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.grpcRetryEvents != null && {
      grpcRetryEvents: serializeAws_restJson1GrpcRetryPolicyEvents(input.grpcRetryEvents, context),
    }),
    ...(input.httpRetryEvents != null && {
      httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
    }),
    ...(input.maxRetries != null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout != null && {
      perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
    }),
    ...(input.tcpRetryEvents != null && {
      tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
    }),
  };
};

const serializeAws_restJson1GrpcRetryPolicyEvents = (
  input: (GrpcRetryPolicyEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GrpcRoute = (input: GrpcRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: serializeAws_restJson1GrpcRouteAction(input.action, context) }),
    ...(input.match != null && { match: serializeAws_restJson1GrpcRouteMatch(input.match, context) }),
    ...(input.retryPolicy != null && {
      retryPolicy: serializeAws_restJson1GrpcRetryPolicy(input.retryPolicy, context),
    }),
    ...(input.timeout != null && { timeout: serializeAws_restJson1GrpcTimeout(input.timeout, context) }),
  };
};

const serializeAws_restJson1GrpcRouteAction = (input: GrpcRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets != null && {
      weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
    }),
  };
};

const serializeAws_restJson1GrpcRouteMatch = (input: GrpcRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.metadata != null && { metadata: serializeAws_restJson1GrpcRouteMetadataList(input.metadata, context) }),
    ...(input.methodName != null && { methodName: input.methodName }),
    ...(input.port != null && { port: input.port }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_restJson1GrpcRouteMetadata = (input: GrpcRouteMetadata, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: serializeAws_restJson1GrpcRouteMetadataMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1GrpcRouteMetadataList = (input: GrpcRouteMetadata[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
};

const serializeAws_restJson1GrpcRouteMetadataMatchMethod = (
  input: GrpcRouteMetadataMatchMethod,
  context: __SerdeContext
): any => {
  return GrpcRouteMetadataMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: serializeAws_restJson1MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1GrpcTimeout = (input: GrpcTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle != null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
    ...(input.perRequest != null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }),
  };
};

const serializeAws_restJson1HeaderMatchMethod = (input: HeaderMatchMethod, context: __SerdeContext): any => {
  return HeaderMatchMethod.visit(input, {
    exact: (value) => ({ exact: value }),
    prefix: (value) => ({ prefix: value }),
    range: (value) => ({ range: serializeAws_restJson1MatchRange(value, context) }),
    regex: (value) => ({ regex: value }),
    suffix: (value) => ({ suffix: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1HealthCheckPolicy = (input: HealthCheckPolicy, context: __SerdeContext): any => {
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

const serializeAws_restJson1HttpGatewayRoute = (input: HttpGatewayRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: serializeAws_restJson1HttpGatewayRouteAction(input.action, context) }),
    ...(input.match != null && { match: serializeAws_restJson1HttpGatewayRouteMatch(input.match, context) }),
  };
};

const serializeAws_restJson1HttpGatewayRouteAction = (input: HttpGatewayRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.rewrite != null && { rewrite: serializeAws_restJson1HttpGatewayRouteRewrite(input.rewrite, context) }),
    ...(input.target != null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }),
  };
};

const serializeAws_restJson1HttpGatewayRouteHeader = (input: HttpGatewayRouteHeader, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: serializeAws_restJson1HeaderMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1HttpGatewayRouteHeaders = (
  input: HttpGatewayRouteHeader[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HttpGatewayRouteHeader(entry, context);
    });
};

const serializeAws_restJson1HttpGatewayRouteMatch = (input: HttpGatewayRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.headers != null && { headers: serializeAws_restJson1HttpGatewayRouteHeaders(input.headers, context) }),
    ...(input.hostname != null && {
      hostname: serializeAws_restJson1GatewayRouteHostnameMatch(input.hostname, context),
    }),
    ...(input.method != null && { method: input.method }),
    ...(input.path != null && { path: serializeAws_restJson1HttpPathMatch(input.path, context) }),
    ...(input.port != null && { port: input.port }),
    ...(input.prefix != null && { prefix: input.prefix }),
    ...(input.queryParameters != null && {
      queryParameters: serializeAws_restJson1HttpQueryParameters(input.queryParameters, context),
    }),
  };
};

const serializeAws_restJson1HttpGatewayRoutePathRewrite = (
  input: HttpGatewayRoutePathRewrite,
  context: __SerdeContext
): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
  };
};

const serializeAws_restJson1HttpGatewayRoutePrefixRewrite = (
  input: HttpGatewayRoutePrefixRewrite,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultPrefix != null && { defaultPrefix: input.defaultPrefix }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1HttpGatewayRouteRewrite = (
  input: HttpGatewayRouteRewrite,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname != null && {
      hostname: serializeAws_restJson1GatewayRouteHostnameRewrite(input.hostname, context),
    }),
    ...(input.path != null && { path: serializeAws_restJson1HttpGatewayRoutePathRewrite(input.path, context) }),
    ...(input.prefix != null && { prefix: serializeAws_restJson1HttpGatewayRoutePrefixRewrite(input.prefix, context) }),
  };
};

const serializeAws_restJson1HttpPathMatch = (input: HttpPathMatch, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
    ...(input.regex != null && { regex: input.regex }),
  };
};

const serializeAws_restJson1HttpQueryParameter = (input: HttpQueryParameter, context: __SerdeContext): any => {
  return {
    ...(input.match != null && { match: serializeAws_restJson1QueryParameterMatch(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1HttpQueryParameters = (input: HttpQueryParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HttpQueryParameter(entry, context);
    });
};

const serializeAws_restJson1HttpRetryPolicy = (input: HttpRetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.httpRetryEvents != null && {
      httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
    }),
    ...(input.maxRetries != null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout != null && {
      perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
    }),
    ...(input.tcpRetryEvents != null && {
      tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
    }),
  };
};

const serializeAws_restJson1HttpRetryPolicyEvents = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1HttpRoute = (input: HttpRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: serializeAws_restJson1HttpRouteAction(input.action, context) }),
    ...(input.match != null && { match: serializeAws_restJson1HttpRouteMatch(input.match, context) }),
    ...(input.retryPolicy != null && {
      retryPolicy: serializeAws_restJson1HttpRetryPolicy(input.retryPolicy, context),
    }),
    ...(input.timeout != null && { timeout: serializeAws_restJson1HttpTimeout(input.timeout, context) }),
  };
};

const serializeAws_restJson1HttpRouteAction = (input: HttpRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets != null && {
      weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
    }),
  };
};

const serializeAws_restJson1HttpRouteHeader = (input: HttpRouteHeader, context: __SerdeContext): any => {
  return {
    ...(input.invert != null && { invert: input.invert }),
    ...(input.match != null && { match: serializeAws_restJson1HeaderMatchMethod(input.match, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1HttpRouteHeaders = (input: HttpRouteHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HttpRouteHeader(entry, context);
    });
};

const serializeAws_restJson1HttpRouteMatch = (input: HttpRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.headers != null && { headers: serializeAws_restJson1HttpRouteHeaders(input.headers, context) }),
    ...(input.method != null && { method: input.method }),
    ...(input.path != null && { path: serializeAws_restJson1HttpPathMatch(input.path, context) }),
    ...(input.port != null && { port: input.port }),
    ...(input.prefix != null && { prefix: input.prefix }),
    ...(input.queryParameters != null && {
      queryParameters: serializeAws_restJson1HttpQueryParameters(input.queryParameters, context),
    }),
    ...(input.scheme != null && { scheme: input.scheme }),
  };
};

const serializeAws_restJson1HttpTimeout = (input: HttpTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle != null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
    ...(input.perRequest != null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }),
  };
};

const serializeAws_restJson1JsonFormat = (input: JsonFormatRef[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1JsonFormatRef(entry, context);
    });
};

const serializeAws_restJson1JsonFormatRef = (input: JsonFormatRef, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1Listener = (input: Listener, context: __SerdeContext): any => {
  return {
    ...(input.connectionPool != null && {
      connectionPool: serializeAws_restJson1VirtualNodeConnectionPool(input.connectionPool, context),
    }),
    ...(input.healthCheck != null && {
      healthCheck: serializeAws_restJson1HealthCheckPolicy(input.healthCheck, context),
    }),
    ...(input.outlierDetection != null && {
      outlierDetection: serializeAws_restJson1OutlierDetection(input.outlierDetection, context),
    }),
    ...(input.portMapping != null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }),
    ...(input.timeout != null && { timeout: serializeAws_restJson1ListenerTimeout(input.timeout, context) }),
    ...(input.tls != null && { tls: serializeAws_restJson1ListenerTls(input.tls, context) }),
  };
};

const serializeAws_restJson1Listeners = (input: Listener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Listener(entry, context);
    });
};

const serializeAws_restJson1ListenerTimeout = (input: ListenerTimeout, context: __SerdeContext): any => {
  return ListenerTimeout.visit(input, {
    grpc: (value) => ({ grpc: serializeAws_restJson1GrpcTimeout(value, context) }),
    http: (value) => ({ http: serializeAws_restJson1HttpTimeout(value, context) }),
    http2: (value) => ({ http2: serializeAws_restJson1HttpTimeout(value, context) }),
    tcp: (value) => ({ tcp: serializeAws_restJson1TcpTimeout(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ListenerTls = (input: ListenerTls, context: __SerdeContext): any => {
  return {
    ...(input.certificate != null && {
      certificate: serializeAws_restJson1ListenerTlsCertificate(input.certificate, context),
    }),
    ...(input.mode != null && { mode: input.mode }),
    ...(input.validation != null && {
      validation: serializeAws_restJson1ListenerTlsValidationContext(input.validation, context),
    }),
  };
};

const serializeAws_restJson1ListenerTlsAcmCertificate = (
  input: ListenerTlsAcmCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
  };
};

const serializeAws_restJson1ListenerTlsCertificate = (input: ListenerTlsCertificate, context: __SerdeContext): any => {
  return ListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1ListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1ListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ListenerTlsFileCertificate = (
  input: ListenerTlsFileCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
    ...(input.privateKey != null && { privateKey: input.privateKey }),
  };
};

const serializeAws_restJson1ListenerTlsSdsCertificate = (
  input: ListenerTlsSdsCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

const serializeAws_restJson1ListenerTlsValidationContext = (
  input: ListenerTlsValidationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && {
      trust: serializeAws_restJson1ListenerTlsValidationContextTrust(input.trust, context),
    }),
  };
};

const serializeAws_restJson1ListenerTlsValidationContextTrust = (
  input: ListenerTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return ListenerTlsValidationContextTrust.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1TlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.accessLog != null && { accessLog: serializeAws_restJson1AccessLog(input.accessLog, context) }),
  };
};

const serializeAws_restJson1LoggingFormat = (input: LoggingFormat, context: __SerdeContext): any => {
  return LoggingFormat.visit(input, {
    json: (value) => ({ json: serializeAws_restJson1JsonFormat(value, context) }),
    text: (value) => ({ text: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1MatchRange = (input: MatchRange, context: __SerdeContext): any => {
  return {
    ...(input.end != null && { end: input.end }),
    ...(input.start != null && { start: input.start }),
  };
};

const serializeAws_restJson1MeshServiceDiscovery = (input: MeshServiceDiscovery, context: __SerdeContext): any => {
  return {
    ...(input.ipPreference != null && { ipPreference: input.ipPreference }),
  };
};

const serializeAws_restJson1MeshSpec = (input: MeshSpec, context: __SerdeContext): any => {
  return {
    ...(input.egressFilter != null && {
      egressFilter: serializeAws_restJson1EgressFilter(input.egressFilter, context),
    }),
    ...(input.serviceDiscovery != null && {
      serviceDiscovery: serializeAws_restJson1MeshServiceDiscovery(input.serviceDiscovery, context),
    }),
  };
};

const serializeAws_restJson1OutlierDetection = (input: OutlierDetection, context: __SerdeContext): any => {
  return {
    ...(input.baseEjectionDuration != null && {
      baseEjectionDuration: serializeAws_restJson1Duration(input.baseEjectionDuration, context),
    }),
    ...(input.interval != null && { interval: serializeAws_restJson1Duration(input.interval, context) }),
    ...(input.maxEjectionPercent != null && { maxEjectionPercent: input.maxEjectionPercent }),
    ...(input.maxServerErrors != null && { maxServerErrors: input.maxServerErrors }),
  };
};

const serializeAws_restJson1PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

const serializeAws_restJson1PortSet = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1QueryParameterMatch = (input: QueryParameterMatch, context: __SerdeContext): any => {
  return {
    ...(input.exact != null && { exact: input.exact }),
  };
};

const serializeAws_restJson1RouteSpec = (input: RouteSpec, context: __SerdeContext): any => {
  return {
    ...(input.grpcRoute != null && { grpcRoute: serializeAws_restJson1GrpcRoute(input.grpcRoute, context) }),
    ...(input.http2Route != null && { http2Route: serializeAws_restJson1HttpRoute(input.http2Route, context) }),
    ...(input.httpRoute != null && { httpRoute: serializeAws_restJson1HttpRoute(input.httpRoute, context) }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.tcpRoute != null && { tcpRoute: serializeAws_restJson1TcpRoute(input.tcpRoute, context) }),
  };
};

const serializeAws_restJson1ServiceDiscovery = (input: ServiceDiscovery, context: __SerdeContext): any => {
  return ServiceDiscovery.visit(input, {
    awsCloudMap: (value) => ({ awsCloudMap: serializeAws_restJson1AwsCloudMapServiceDiscovery(value, context) }),
    dns: (value) => ({ dns: serializeAws_restJson1DnsServiceDiscovery(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1SubjectAlternativeNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SubjectAlternativeNameMatchers = (
  input: SubjectAlternativeNameMatchers,
  context: __SerdeContext
): any => {
  return {
    ...(input.exact != null && { exact: serializeAws_restJson1SubjectAlternativeNameList(input.exact, context) }),
  };
};

const serializeAws_restJson1SubjectAlternativeNames = (
  input: SubjectAlternativeNames,
  context: __SerdeContext
): any => {
  return {
    ...(input.match != null && { match: serializeAws_restJson1SubjectAlternativeNameMatchers(input.match, context) }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: TagRef[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagRef(entry, context);
    });
};

const serializeAws_restJson1TagRef = (input: TagRef, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1TcpRetryPolicyEvents = (
  input: (TcpRetryPolicyEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TcpRoute = (input: TcpRoute, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: serializeAws_restJson1TcpRouteAction(input.action, context) }),
    ...(input.match != null && { match: serializeAws_restJson1TcpRouteMatch(input.match, context) }),
    ...(input.timeout != null && { timeout: serializeAws_restJson1TcpTimeout(input.timeout, context) }),
  };
};

const serializeAws_restJson1TcpRouteAction = (input: TcpRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets != null && {
      weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
    }),
  };
};

const serializeAws_restJson1TcpRouteMatch = (input: TcpRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
  };
};

const serializeAws_restJson1TcpTimeout = (input: TcpTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle != null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
  };
};

const serializeAws_restJson1TlsValidationContext = (input: TlsValidationContext, context: __SerdeContext): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && { trust: serializeAws_restJson1TlsValidationContextTrust(input.trust, context) }),
  };
};

const serializeAws_restJson1TlsValidationContextAcmTrust = (
  input: TlsValidationContextAcmTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAuthorityArns != null && {
      certificateAuthorityArns: serializeAws_restJson1CertificateAuthorityArns(input.certificateAuthorityArns, context),
    }),
  };
};

const serializeAws_restJson1TlsValidationContextFileTrust = (
  input: TlsValidationContextFileTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
  };
};

const serializeAws_restJson1TlsValidationContextSdsTrust = (
  input: TlsValidationContextSdsTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

const serializeAws_restJson1TlsValidationContextTrust = (
  input: TlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return TlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1TlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1TlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayAccessLog = (
  input: VirtualGatewayAccessLog,
  context: __SerdeContext
): any => {
  return VirtualGatewayAccessLog.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayFileAccessLog(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayBackendDefaults = (
  input: VirtualGatewayBackendDefaults,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientPolicy != null && {
      clientPolicy: serializeAws_restJson1VirtualGatewayClientPolicy(input.clientPolicy, context),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayCertificateAuthorityArns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1VirtualGatewayClientPolicy = (
  input: VirtualGatewayClientPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.tls != null && { tls: serializeAws_restJson1VirtualGatewayClientPolicyTls(input.tls, context) }),
  };
};

const serializeAws_restJson1VirtualGatewayClientPolicyTls = (
  input: VirtualGatewayClientPolicyTls,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificate != null && {
      certificate: serializeAws_restJson1VirtualGatewayClientTlsCertificate(input.certificate, context),
    }),
    ...(input.enforce != null && { enforce: input.enforce }),
    ...(input.ports != null && { ports: serializeAws_restJson1PortSet(input.ports, context) }),
    ...(input.validation != null && {
      validation: serializeAws_restJson1VirtualGatewayTlsValidationContext(input.validation, context),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayClientTlsCertificate = (
  input: VirtualGatewayClientTlsCertificate,
  context: __SerdeContext
): any => {
  return VirtualGatewayClientTlsCertificate.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayConnectionPool = (
  input: VirtualGatewayConnectionPool,
  context: __SerdeContext
): any => {
  return VirtualGatewayConnectionPool.visit(input, {
    grpc: (value) => ({ grpc: serializeAws_restJson1VirtualGatewayGrpcConnectionPool(value, context) }),
    http: (value) => ({ http: serializeAws_restJson1VirtualGatewayHttpConnectionPool(value, context) }),
    http2: (value) => ({ http2: serializeAws_restJson1VirtualGatewayHttp2ConnectionPool(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayFileAccessLog = (
  input: VirtualGatewayFileAccessLog,
  context: __SerdeContext
): any => {
  return {
    ...(input.format != null && { format: serializeAws_restJson1LoggingFormat(input.format, context) }),
    ...(input.path != null && { path: input.path }),
  };
};

const serializeAws_restJson1VirtualGatewayGrpcConnectionPool = (
  input: VirtualGatewayGrpcConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

const serializeAws_restJson1VirtualGatewayHealthCheckPolicy = (
  input: VirtualGatewayHealthCheckPolicy,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1VirtualGatewayHttp2ConnectionPool = (
  input: VirtualGatewayHttp2ConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

const serializeAws_restJson1VirtualGatewayHttpConnectionPool = (
  input: VirtualGatewayHttpConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxConnections != null && { maxConnections: input.maxConnections }),
    ...(input.maxPendingRequests != null && { maxPendingRequests: input.maxPendingRequests }),
  };
};

const serializeAws_restJson1VirtualGatewayListener = (input: VirtualGatewayListener, context: __SerdeContext): any => {
  return {
    ...(input.connectionPool != null && {
      connectionPool: serializeAws_restJson1VirtualGatewayConnectionPool(input.connectionPool, context),
    }),
    ...(input.healthCheck != null && {
      healthCheck: serializeAws_restJson1VirtualGatewayHealthCheckPolicy(input.healthCheck, context),
    }),
    ...(input.portMapping != null && {
      portMapping: serializeAws_restJson1VirtualGatewayPortMapping(input.portMapping, context),
    }),
    ...(input.tls != null && { tls: serializeAws_restJson1VirtualGatewayListenerTls(input.tls, context) }),
  };
};

const serializeAws_restJson1VirtualGatewayListeners = (
  input: VirtualGatewayListener[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};

const serializeAws_restJson1VirtualGatewayListenerTls = (
  input: VirtualGatewayListenerTls,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificate != null && {
      certificate: serializeAws_restJson1VirtualGatewayListenerTlsCertificate(input.certificate, context),
    }),
    ...(input.mode != null && { mode: input.mode }),
    ...(input.validation != null && {
      validation: serializeAws_restJson1VirtualGatewayListenerTlsValidationContext(input.validation, context),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = (
  input: VirtualGatewayListenerTlsAcmCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsCertificate = (
  input: VirtualGatewayListenerTlsCertificate,
  context: __SerdeContext
): any => {
  return VirtualGatewayListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = (
  input: VirtualGatewayListenerTlsFileCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
    ...(input.privateKey != null && { privateKey: input.privateKey }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate = (
  input: VirtualGatewayListenerTlsSdsCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsValidationContext = (
  input: VirtualGatewayListenerTlsValidationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && {
      trust: serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust(input.trust, context),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust = (
  input: VirtualGatewayListenerTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return VirtualGatewayListenerTlsValidationContextTrust.visit(input, {
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayLogging = (input: VirtualGatewayLogging, context: __SerdeContext): any => {
  return {
    ...(input.accessLog != null && {
      accessLog: serializeAws_restJson1VirtualGatewayAccessLog(input.accessLog, context),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayPortMapping = (
  input: VirtualGatewayPortMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.protocol != null && { protocol: input.protocol }),
  };
};

const serializeAws_restJson1VirtualGatewaySpec = (input: VirtualGatewaySpec, context: __SerdeContext): any => {
  return {
    ...(input.backendDefaults != null && {
      backendDefaults: serializeAws_restJson1VirtualGatewayBackendDefaults(input.backendDefaults, context),
    }),
    ...(input.listeners != null && {
      listeners: serializeAws_restJson1VirtualGatewayListeners(input.listeners, context),
    }),
    ...(input.logging != null && { logging: serializeAws_restJson1VirtualGatewayLogging(input.logging, context) }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContext = (
  input: VirtualGatewayTlsValidationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.subjectAlternativeNames != null && {
      subjectAlternativeNames: serializeAws_restJson1SubjectAlternativeNames(input.subjectAlternativeNames, context),
    }),
    ...(input.trust != null && {
      trust: serializeAws_restJson1VirtualGatewayTlsValidationContextTrust(input.trust, context),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = (
  input: VirtualGatewayTlsValidationContextAcmTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAuthorityArns != null && {
      certificateAuthorityArns: serializeAws_restJson1VirtualGatewayCertificateAuthorityArns(
        input.certificateAuthorityArns,
        context
      ),
    }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = (
  input: VirtualGatewayTlsValidationContextFileTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain != null && { certificateChain: input.certificateChain }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust = (
  input: VirtualGatewayTlsValidationContextSdsTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.secretName != null && { secretName: input.secretName }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContextTrust = (
  input: VirtualGatewayTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return VirtualGatewayTlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    sds: (value) => ({ sds: serializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualNodeConnectionPool = (
  input: VirtualNodeConnectionPool,
  context: __SerdeContext
): any => {
  return VirtualNodeConnectionPool.visit(input, {
    grpc: (value) => ({ grpc: serializeAws_restJson1VirtualNodeGrpcConnectionPool(value, context) }),
    http: (value) => ({ http: serializeAws_restJson1VirtualNodeHttpConnectionPool(value, context) }),
    http2: (value) => ({ http2: serializeAws_restJson1VirtualNodeHttp2ConnectionPool(value, context) }),
    tcp: (value) => ({ tcp: serializeAws_restJson1VirtualNodeTcpConnectionPool(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualNodeGrpcConnectionPool = (
  input: VirtualNodeGrpcConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

const serializeAws_restJson1VirtualNodeHttp2ConnectionPool = (
  input: VirtualNodeHttp2ConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxRequests != null && { maxRequests: input.maxRequests }),
  };
};

const serializeAws_restJson1VirtualNodeHttpConnectionPool = (
  input: VirtualNodeHttpConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxConnections != null && { maxConnections: input.maxConnections }),
    ...(input.maxPendingRequests != null && { maxPendingRequests: input.maxPendingRequests }),
  };
};

const serializeAws_restJson1VirtualNodeServiceProvider = (
  input: VirtualNodeServiceProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualNodeName != null && { virtualNodeName: input.virtualNodeName }),
  };
};

const serializeAws_restJson1VirtualNodeSpec = (input: VirtualNodeSpec, context: __SerdeContext): any => {
  return {
    ...(input.backendDefaults != null && {
      backendDefaults: serializeAws_restJson1BackendDefaults(input.backendDefaults, context),
    }),
    ...(input.backends != null && { backends: serializeAws_restJson1Backends(input.backends, context) }),
    ...(input.listeners != null && { listeners: serializeAws_restJson1Listeners(input.listeners, context) }),
    ...(input.logging != null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.serviceDiscovery != null && {
      serviceDiscovery: serializeAws_restJson1ServiceDiscovery(input.serviceDiscovery, context),
    }),
  };
};

const serializeAws_restJson1VirtualNodeTcpConnectionPool = (
  input: VirtualNodeTcpConnectionPool,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxConnections != null && { maxConnections: input.maxConnections }),
  };
};

const serializeAws_restJson1VirtualRouterListener = (input: VirtualRouterListener, context: __SerdeContext): any => {
  return {
    ...(input.portMapping != null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }),
  };
};

const serializeAws_restJson1VirtualRouterListeners = (input: VirtualRouterListener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VirtualRouterListener(entry, context);
    });
};

const serializeAws_restJson1VirtualRouterServiceProvider = (
  input: VirtualRouterServiceProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualRouterName != null && { virtualRouterName: input.virtualRouterName }),
  };
};

const serializeAws_restJson1VirtualRouterSpec = (input: VirtualRouterSpec, context: __SerdeContext): any => {
  return {
    ...(input.listeners != null && {
      listeners: serializeAws_restJson1VirtualRouterListeners(input.listeners, context),
    }),
  };
};

const serializeAws_restJson1VirtualServiceBackend = (input: VirtualServiceBackend, context: __SerdeContext): any => {
  return {
    ...(input.clientPolicy != null && {
      clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context),
    }),
    ...(input.virtualServiceName != null && { virtualServiceName: input.virtualServiceName }),
  };
};

const serializeAws_restJson1VirtualServiceProvider = (input: VirtualServiceProvider, context: __SerdeContext): any => {
  return VirtualServiceProvider.visit(input, {
    virtualNode: (value) => ({ virtualNode: serializeAws_restJson1VirtualNodeServiceProvider(value, context) }),
    virtualRouter: (value) => ({ virtualRouter: serializeAws_restJson1VirtualRouterServiceProvider(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualServiceSpec = (input: VirtualServiceSpec, context: __SerdeContext): any => {
  return {
    ...(input.provider != null && { provider: serializeAws_restJson1VirtualServiceProvider(input.provider, context) }),
  };
};

const serializeAws_restJson1WeightedTarget = (input: WeightedTarget, context: __SerdeContext): any => {
  return {
    ...(input.port != null && { port: input.port }),
    ...(input.virtualNode != null && { virtualNode: input.virtualNode }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

const serializeAws_restJson1WeightedTargets = (input: WeightedTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WeightedTarget(entry, context);
    });
};

const deserializeAws_restJson1AccessLog = (output: any, context: __SerdeContext): AccessLog => {
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1FileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AwsCloudMapInstanceAttribute = (
  output: any,
  context: __SerdeContext
): AwsCloudMapInstanceAttribute => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1AwsCloudMapInstanceAttributes = (
  output: any,
  context: __SerdeContext
): AwsCloudMapInstanceAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCloudMapServiceDiscovery = (
  output: any,
  context: __SerdeContext
): AwsCloudMapServiceDiscovery => {
  return {
    attributes:
      output.attributes != null
        ? deserializeAws_restJson1AwsCloudMapInstanceAttributes(output.attributes, context)
        : undefined,
    ipPreference: __expectString(output.ipPreference),
    namespaceName: __expectString(output.namespaceName),
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_restJson1Backend = (output: any, context: __SerdeContext): Backend => {
  if (output.virtualService != null) {
    return {
      virtualService: deserializeAws_restJson1VirtualServiceBackend(output.virtualService, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1BackendDefaults = (output: any, context: __SerdeContext): BackendDefaults => {
  return {
    clientPolicy:
      output.clientPolicy != null ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Backends = (output: any, context: __SerdeContext): Backend[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Backend(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1CertificateAuthorityArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ClientPolicy = (output: any, context: __SerdeContext): ClientPolicy => {
  return {
    tls: output.tls != null ? deserializeAws_restJson1ClientPolicyTls(output.tls, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClientPolicyTls = (output: any, context: __SerdeContext): ClientPolicyTls => {
  return {
    certificate:
      output.certificate != null
        ? deserializeAws_restJson1ClientTlsCertificate(__expectUnion(output.certificate), context)
        : undefined,
    enforce: __expectBoolean(output.enforce),
    ports: output.ports != null ? deserializeAws_restJson1PortSet(output.ports, context) : undefined,
    validation:
      output.validation != null ? deserializeAws_restJson1TlsValidationContext(output.validation, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClientTlsCertificate = (output: any, context: __SerdeContext): ClientTlsCertificate => {
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1ListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1ListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1DnsServiceDiscovery = (output: any, context: __SerdeContext): DnsServiceDiscovery => {
  return {
    hostname: __expectString(output.hostname),
    ipPreference: __expectString(output.ipPreference),
    responseType: __expectString(output.responseType),
  } as any;
};

const deserializeAws_restJson1Duration = (output: any, context: __SerdeContext): Duration => {
  return {
    unit: __expectString(output.unit),
    value: __expectLong(output.value),
  } as any;
};

const deserializeAws_restJson1EgressFilter = (output: any, context: __SerdeContext): EgressFilter => {
  return {
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1FileAccessLog = (output: any, context: __SerdeContext): FileAccessLog => {
  return {
    format:
      output.format != null ? deserializeAws_restJson1LoggingFormat(__expectUnion(output.format), context) : undefined,
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_restJson1GatewayRouteData = (output: any, context: __SerdeContext): GatewayRouteData => {
  return {
    gatewayRouteName: __expectString(output.gatewayRouteName),
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? deserializeAws_restJson1GatewayRouteSpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1GatewayRouteStatus(output.status, context) : undefined,
    virtualGatewayName: __expectString(output.virtualGatewayName),
  } as any;
};

const deserializeAws_restJson1GatewayRouteHostnameMatch = (
  output: any,
  context: __SerdeContext
): GatewayRouteHostnameMatch => {
  return {
    exact: __expectString(output.exact),
    suffix: __expectString(output.suffix),
  } as any;
};

const deserializeAws_restJson1GatewayRouteHostnameRewrite = (
  output: any,
  context: __SerdeContext
): GatewayRouteHostnameRewrite => {
  return {
    defaultTargetHostname: __expectString(output.defaultTargetHostname),
  } as any;
};

const deserializeAws_restJson1GatewayRouteList = (output: any, context: __SerdeContext): GatewayRouteRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GatewayRouteRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GatewayRouteRef = (output: any, context: __SerdeContext): GatewayRouteRef => {
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

const deserializeAws_restJson1GatewayRouteSpec = (output: any, context: __SerdeContext): GatewayRouteSpec => {
  return {
    grpcRoute:
      output.grpcRoute != null ? deserializeAws_restJson1GrpcGatewayRoute(output.grpcRoute, context) : undefined,
    http2Route:
      output.http2Route != null ? deserializeAws_restJson1HttpGatewayRoute(output.http2Route, context) : undefined,
    httpRoute:
      output.httpRoute != null ? deserializeAws_restJson1HttpGatewayRoute(output.httpRoute, context) : undefined,
    priority: __expectInt32(output.priority),
  } as any;
};

const deserializeAws_restJson1GatewayRouteStatus = (output: any, context: __SerdeContext): GatewayRouteStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1GatewayRouteTarget = (output: any, context: __SerdeContext): GatewayRouteTarget => {
  return {
    port: __expectInt32(output.port),
    virtualService:
      output.virtualService != null
        ? deserializeAws_restJson1GatewayRouteVirtualService(output.virtualService, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteVirtualService = (
  output: any,
  context: __SerdeContext
): GatewayRouteVirtualService => {
  return {
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRoute = (output: any, context: __SerdeContext): GrpcGatewayRoute => {
  return {
    action: output.action != null ? deserializeAws_restJson1GrpcGatewayRouteAction(output.action, context) : undefined,
    match: output.match != null ? deserializeAws_restJson1GrpcGatewayRouteMatch(output.match, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRouteAction = (
  output: any,
  context: __SerdeContext
): GrpcGatewayRouteAction => {
  return {
    rewrite:
      output.rewrite != null ? deserializeAws_restJson1GrpcGatewayRouteRewrite(output.rewrite, context) : undefined,
    target: output.target != null ? deserializeAws_restJson1GatewayRouteTarget(output.target, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRouteMatch = (output: any, context: __SerdeContext): GrpcGatewayRouteMatch => {
  return {
    hostname:
      output.hostname != null ? deserializeAws_restJson1GatewayRouteHostnameMatch(output.hostname, context) : undefined,
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1GrpcGatewayRouteMetadataList(output.metadata, context)
        : undefined,
    port: __expectInt32(output.port),
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRouteMetadata = (
  output: any,
  context: __SerdeContext
): GrpcGatewayRouteMetadata => {
  return {
    invert: __expectBoolean(output.invert),
    match:
      output.match != null
        ? deserializeAws_restJson1GrpcMetadataMatchMethod(__expectUnion(output.match), context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRouteMetadataList = (
  output: any,
  context: __SerdeContext
): GrpcGatewayRouteMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GrpcGatewayRouteMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GrpcGatewayRouteRewrite = (
  output: any,
  context: __SerdeContext
): GrpcGatewayRouteRewrite => {
  return {
    hostname:
      output.hostname != null
        ? deserializeAws_restJson1GatewayRouteHostnameRewrite(output.hostname, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcMetadataMatchMethod = (
  output: any,
  context: __SerdeContext
): GrpcMetadataMatchMethod => {
  if (__expectString(output.exact) !== undefined) {
    return { exact: __expectString(output.exact) as any };
  }
  if (__expectString(output.prefix) !== undefined) {
    return { prefix: __expectString(output.prefix) as any };
  }
  if (output.range != null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
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

const deserializeAws_restJson1GrpcRetryPolicy = (output: any, context: __SerdeContext): GrpcRetryPolicy => {
  return {
    grpcRetryEvents:
      output.grpcRetryEvents != null
        ? deserializeAws_restJson1GrpcRetryPolicyEvents(output.grpcRetryEvents, context)
        : undefined,
    httpRetryEvents:
      output.httpRetryEvents != null
        ? deserializeAws_restJson1HttpRetryPolicyEvents(output.httpRetryEvents, context)
        : undefined,
    maxRetries: __expectLong(output.maxRetries),
    perRetryTimeout:
      output.perRetryTimeout != null ? deserializeAws_restJson1Duration(output.perRetryTimeout, context) : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents != null
        ? deserializeAws_restJson1TcpRetryPolicyEvents(output.tcpRetryEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): (GrpcRetryPolicyEvent | string)[] => {
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

const deserializeAws_restJson1GrpcRoute = (output: any, context: __SerdeContext): GrpcRoute => {
  return {
    action: output.action != null ? deserializeAws_restJson1GrpcRouteAction(output.action, context) : undefined,
    match: output.match != null ? deserializeAws_restJson1GrpcRouteMatch(output.match, context) : undefined,
    retryPolicy:
      output.retryPolicy != null ? deserializeAws_restJson1GrpcRetryPolicy(output.retryPolicy, context) : undefined,
    timeout: output.timeout != null ? deserializeAws_restJson1GrpcTimeout(output.timeout, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRouteAction = (output: any, context: __SerdeContext): GrpcRouteAction => {
  return {
    weightedTargets:
      output.weightedTargets != null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRouteMatch = (output: any, context: __SerdeContext): GrpcRouteMatch => {
  return {
    metadata:
      output.metadata != null ? deserializeAws_restJson1GrpcRouteMetadataList(output.metadata, context) : undefined,
    methodName: __expectString(output.methodName),
    port: __expectInt32(output.port),
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_restJson1GrpcRouteMetadata = (output: any, context: __SerdeContext): GrpcRouteMetadata => {
  return {
    invert: __expectBoolean(output.invert),
    match:
      output.match != null
        ? deserializeAws_restJson1GrpcRouteMetadataMatchMethod(__expectUnion(output.match), context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1GrpcRouteMetadataList = (output: any, context: __SerdeContext): GrpcRouteMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GrpcRouteMetadataMatchMethod = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadataMatchMethod => {
  if (__expectString(output.exact) !== undefined) {
    return { exact: __expectString(output.exact) as any };
  }
  if (__expectString(output.prefix) !== undefined) {
    return { prefix: __expectString(output.prefix) as any };
  }
  if (output.range != null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
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

const deserializeAws_restJson1GrpcTimeout = (output: any, context: __SerdeContext): GrpcTimeout => {
  return {
    idle: output.idle != null ? deserializeAws_restJson1Duration(output.idle, context) : undefined,
    perRequest: output.perRequest != null ? deserializeAws_restJson1Duration(output.perRequest, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HeaderMatchMethod = (output: any, context: __SerdeContext): HeaderMatchMethod => {
  if (__expectString(output.exact) !== undefined) {
    return { exact: __expectString(output.exact) as any };
  }
  if (__expectString(output.prefix) !== undefined) {
    return { prefix: __expectString(output.prefix) as any };
  }
  if (output.range != null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
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

const deserializeAws_restJson1HealthCheckPolicy = (output: any, context: __SerdeContext): HealthCheckPolicy => {
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

const deserializeAws_restJson1HttpGatewayRoute = (output: any, context: __SerdeContext): HttpGatewayRoute => {
  return {
    action: output.action != null ? deserializeAws_restJson1HttpGatewayRouteAction(output.action, context) : undefined,
    match: output.match != null ? deserializeAws_restJson1HttpGatewayRouteMatch(output.match, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HttpGatewayRouteAction = (
  output: any,
  context: __SerdeContext
): HttpGatewayRouteAction => {
  return {
    rewrite:
      output.rewrite != null ? deserializeAws_restJson1HttpGatewayRouteRewrite(output.rewrite, context) : undefined,
    target: output.target != null ? deserializeAws_restJson1GatewayRouteTarget(output.target, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HttpGatewayRouteHeader = (
  output: any,
  context: __SerdeContext
): HttpGatewayRouteHeader => {
  return {
    invert: __expectBoolean(output.invert),
    match:
      output.match != null
        ? deserializeAws_restJson1HeaderMatchMethod(__expectUnion(output.match), context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1HttpGatewayRouteHeaders = (
  output: any,
  context: __SerdeContext
): HttpGatewayRouteHeader[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HttpGatewayRouteHeader(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HttpGatewayRouteMatch = (output: any, context: __SerdeContext): HttpGatewayRouteMatch => {
  return {
    headers:
      output.headers != null ? deserializeAws_restJson1HttpGatewayRouteHeaders(output.headers, context) : undefined,
    hostname:
      output.hostname != null ? deserializeAws_restJson1GatewayRouteHostnameMatch(output.hostname, context) : undefined,
    method: __expectString(output.method),
    path: output.path != null ? deserializeAws_restJson1HttpPathMatch(output.path, context) : undefined,
    port: __expectInt32(output.port),
    prefix: __expectString(output.prefix),
    queryParameters:
      output.queryParameters != null
        ? deserializeAws_restJson1HttpQueryParameters(output.queryParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpGatewayRoutePathRewrite = (
  output: any,
  context: __SerdeContext
): HttpGatewayRoutePathRewrite => {
  return {
    exact: __expectString(output.exact),
  } as any;
};

const deserializeAws_restJson1HttpGatewayRoutePrefixRewrite = (
  output: any,
  context: __SerdeContext
): HttpGatewayRoutePrefixRewrite => {
  return {
    defaultPrefix: __expectString(output.defaultPrefix),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1HttpGatewayRouteRewrite = (
  output: any,
  context: __SerdeContext
): HttpGatewayRouteRewrite => {
  return {
    hostname:
      output.hostname != null
        ? deserializeAws_restJson1GatewayRouteHostnameRewrite(output.hostname, context)
        : undefined,
    path: output.path != null ? deserializeAws_restJson1HttpGatewayRoutePathRewrite(output.path, context) : undefined,
    prefix:
      output.prefix != null ? deserializeAws_restJson1HttpGatewayRoutePrefixRewrite(output.prefix, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HttpPathMatch = (output: any, context: __SerdeContext): HttpPathMatch => {
  return {
    exact: __expectString(output.exact),
    regex: __expectString(output.regex),
  } as any;
};

const deserializeAws_restJson1HttpQueryParameter = (output: any, context: __SerdeContext): HttpQueryParameter => {
  return {
    match: output.match != null ? deserializeAws_restJson1QueryParameterMatch(output.match, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1HttpQueryParameters = (output: any, context: __SerdeContext): HttpQueryParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HttpQueryParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HttpRetryPolicy = (output: any, context: __SerdeContext): HttpRetryPolicy => {
  return {
    httpRetryEvents:
      output.httpRetryEvents != null
        ? deserializeAws_restJson1HttpRetryPolicyEvents(output.httpRetryEvents, context)
        : undefined,
    maxRetries: __expectLong(output.maxRetries),
    perRetryTimeout:
      output.perRetryTimeout != null ? deserializeAws_restJson1Duration(output.perRetryTimeout, context) : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents != null
        ? deserializeAws_restJson1TcpRetryPolicyEvents(output.tcpRetryEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRetryPolicyEvents = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1HttpRoute = (output: any, context: __SerdeContext): HttpRoute => {
  return {
    action: output.action != null ? deserializeAws_restJson1HttpRouteAction(output.action, context) : undefined,
    match: output.match != null ? deserializeAws_restJson1HttpRouteMatch(output.match, context) : undefined,
    retryPolicy:
      output.retryPolicy != null ? deserializeAws_restJson1HttpRetryPolicy(output.retryPolicy, context) : undefined,
    timeout: output.timeout != null ? deserializeAws_restJson1HttpTimeout(output.timeout, context) : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRouteAction = (output: any, context: __SerdeContext): HttpRouteAction => {
  return {
    weightedTargets:
      output.weightedTargets != null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRouteHeader = (output: any, context: __SerdeContext): HttpRouteHeader => {
  return {
    invert: __expectBoolean(output.invert),
    match:
      output.match != null
        ? deserializeAws_restJson1HeaderMatchMethod(__expectUnion(output.match), context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1HttpRouteHeaders = (output: any, context: __SerdeContext): HttpRouteHeader[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HttpRouteHeader(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HttpRouteMatch = (output: any, context: __SerdeContext): HttpRouteMatch => {
  return {
    headers: output.headers != null ? deserializeAws_restJson1HttpRouteHeaders(output.headers, context) : undefined,
    method: __expectString(output.method),
    path: output.path != null ? deserializeAws_restJson1HttpPathMatch(output.path, context) : undefined,
    port: __expectInt32(output.port),
    prefix: __expectString(output.prefix),
    queryParameters:
      output.queryParameters != null
        ? deserializeAws_restJson1HttpQueryParameters(output.queryParameters, context)
        : undefined,
    scheme: __expectString(output.scheme),
  } as any;
};

const deserializeAws_restJson1HttpTimeout = (output: any, context: __SerdeContext): HttpTimeout => {
  return {
    idle: output.idle != null ? deserializeAws_restJson1Duration(output.idle, context) : undefined,
    perRequest: output.perRequest != null ? deserializeAws_restJson1Duration(output.perRequest, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JsonFormat = (output: any, context: __SerdeContext): JsonFormatRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JsonFormatRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JsonFormatRef = (output: any, context: __SerdeContext): JsonFormatRef => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1Listener = (output: any, context: __SerdeContext): Listener => {
  return {
    connectionPool:
      output.connectionPool != null
        ? deserializeAws_restJson1VirtualNodeConnectionPool(__expectUnion(output.connectionPool), context)
        : undefined,
    healthCheck:
      output.healthCheck != null ? deserializeAws_restJson1HealthCheckPolicy(output.healthCheck, context) : undefined,
    outlierDetection:
      output.outlierDetection != null
        ? deserializeAws_restJson1OutlierDetection(output.outlierDetection, context)
        : undefined,
    portMapping:
      output.portMapping != null ? deserializeAws_restJson1PortMapping(output.portMapping, context) : undefined,
    timeout:
      output.timeout != null
        ? deserializeAws_restJson1ListenerTimeout(__expectUnion(output.timeout), context)
        : undefined,
    tls: output.tls != null ? deserializeAws_restJson1ListenerTls(output.tls, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Listeners = (output: any, context: __SerdeContext): Listener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Listener(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListenerTimeout = (output: any, context: __SerdeContext): ListenerTimeout => {
  if (output.grpc != null) {
    return {
      grpc: deserializeAws_restJson1GrpcTimeout(output.grpc, context),
    };
  }
  if (output.http != null) {
    return {
      http: deserializeAws_restJson1HttpTimeout(output.http, context),
    };
  }
  if (output.http2 != null) {
    return {
      http2: deserializeAws_restJson1HttpTimeout(output.http2, context),
    };
  }
  if (output.tcp != null) {
    return {
      tcp: deserializeAws_restJson1TcpTimeout(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ListenerTls = (output: any, context: __SerdeContext): ListenerTls => {
  return {
    certificate:
      output.certificate != null
        ? deserializeAws_restJson1ListenerTlsCertificate(__expectUnion(output.certificate), context)
        : undefined,
    mode: __expectString(output.mode),
    validation:
      output.validation != null
        ? deserializeAws_restJson1ListenerTlsValidationContext(output.validation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ListenerTlsAcmCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsAcmCertificate => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

const deserializeAws_restJson1ListenerTlsCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsCertificate => {
  if (output.acm != null) {
    return {
      acm: deserializeAws_restJson1ListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1ListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1ListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ListenerTlsFileCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsFileCertificate => {
  return {
    certificateChain: __expectString(output.certificateChain),
    privateKey: __expectString(output.privateKey),
  } as any;
};

const deserializeAws_restJson1ListenerTlsSdsCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsSdsCertificate => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1ListenerTlsValidationContext = (
  output: any,
  context: __SerdeContext
): ListenerTlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null
        ? deserializeAws_restJson1ListenerTlsValidationContextTrust(__expectUnion(output.trust), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ListenerTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): ListenerTlsValidationContextTrust => {
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1TlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1TlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    accessLog:
      output.accessLog != null
        ? deserializeAws_restJson1AccessLog(__expectUnion(output.accessLog), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LoggingFormat = (output: any, context: __SerdeContext): LoggingFormat => {
  if (output.json != null) {
    return {
      json: deserializeAws_restJson1JsonFormat(output.json, context),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1MatchRange = (output: any, context: __SerdeContext): MatchRange => {
  return {
    end: __expectLong(output.end),
    start: __expectLong(output.start),
  } as any;
};

const deserializeAws_restJson1MeshData = (output: any, context: __SerdeContext): MeshData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? deserializeAws_restJson1MeshSpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1MeshStatus(output.status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MeshList = (output: any, context: __SerdeContext): MeshRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MeshRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MeshRef = (output: any, context: __SerdeContext): MeshRef => {
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

const deserializeAws_restJson1MeshServiceDiscovery = (output: any, context: __SerdeContext): MeshServiceDiscovery => {
  return {
    ipPreference: __expectString(output.ipPreference),
  } as any;
};

const deserializeAws_restJson1MeshSpec = (output: any, context: __SerdeContext): MeshSpec => {
  return {
    egressFilter:
      output.egressFilter != null ? deserializeAws_restJson1EgressFilter(output.egressFilter, context) : undefined,
    serviceDiscovery:
      output.serviceDiscovery != null
        ? deserializeAws_restJson1MeshServiceDiscovery(output.serviceDiscovery, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MeshStatus = (output: any, context: __SerdeContext): MeshStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1OutlierDetection = (output: any, context: __SerdeContext): OutlierDetection => {
  return {
    baseEjectionDuration:
      output.baseEjectionDuration != null
        ? deserializeAws_restJson1Duration(output.baseEjectionDuration, context)
        : undefined,
    interval: output.interval != null ? deserializeAws_restJson1Duration(output.interval, context) : undefined,
    maxEjectionPercent: __expectInt32(output.maxEjectionPercent),
    maxServerErrors: __expectLong(output.maxServerErrors),
  } as any;
};

const deserializeAws_restJson1PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    port: __expectInt32(output.port),
    protocol: __expectString(output.protocol),
  } as any;
};

const deserializeAws_restJson1PortSet = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1QueryParameterMatch = (output: any, context: __SerdeContext): QueryParameterMatch => {
  return {
    exact: __expectString(output.exact),
  } as any;
};

const deserializeAws_restJson1ResourceMetadata = (output: any, context: __SerdeContext): ResourceMetadata => {
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

const deserializeAws_restJson1RouteData = (output: any, context: __SerdeContext): RouteData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    routeName: __expectString(output.routeName),
    spec: output.spec != null ? deserializeAws_restJson1RouteSpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1RouteStatus(output.status, context) : undefined,
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

const deserializeAws_restJson1RouteList = (output: any, context: __SerdeContext): RouteRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RouteRef = (output: any, context: __SerdeContext): RouteRef => {
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

const deserializeAws_restJson1RouteSpec = (output: any, context: __SerdeContext): RouteSpec => {
  return {
    grpcRoute: output.grpcRoute != null ? deserializeAws_restJson1GrpcRoute(output.grpcRoute, context) : undefined,
    http2Route: output.http2Route != null ? deserializeAws_restJson1HttpRoute(output.http2Route, context) : undefined,
    httpRoute: output.httpRoute != null ? deserializeAws_restJson1HttpRoute(output.httpRoute, context) : undefined,
    priority: __expectInt32(output.priority),
    tcpRoute: output.tcpRoute != null ? deserializeAws_restJson1TcpRoute(output.tcpRoute, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RouteStatus = (output: any, context: __SerdeContext): RouteStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ServiceDiscovery = (output: any, context: __SerdeContext): ServiceDiscovery => {
  if (output.awsCloudMap != null) {
    return {
      awsCloudMap: deserializeAws_restJson1AwsCloudMapServiceDiscovery(output.awsCloudMap, context),
    };
  }
  if (output.dns != null) {
    return {
      dns: deserializeAws_restJson1DnsServiceDiscovery(output.dns, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1SubjectAlternativeNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubjectAlternativeNameMatchers = (
  output: any,
  context: __SerdeContext
): SubjectAlternativeNameMatchers => {
  return {
    exact: output.exact != null ? deserializeAws_restJson1SubjectAlternativeNameList(output.exact, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SubjectAlternativeNames = (
  output: any,
  context: __SerdeContext
): SubjectAlternativeNames => {
  return {
    match:
      output.match != null ? deserializeAws_restJson1SubjectAlternativeNameMatchers(output.match, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): TagRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagRef = (output: any, context: __SerdeContext): TagRef => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TcpRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): (TcpRetryPolicyEvent | string)[] => {
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

const deserializeAws_restJson1TcpRoute = (output: any, context: __SerdeContext): TcpRoute => {
  return {
    action: output.action != null ? deserializeAws_restJson1TcpRouteAction(output.action, context) : undefined,
    match: output.match != null ? deserializeAws_restJson1TcpRouteMatch(output.match, context) : undefined,
    timeout: output.timeout != null ? deserializeAws_restJson1TcpTimeout(output.timeout, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TcpRouteAction = (output: any, context: __SerdeContext): TcpRouteAction => {
  return {
    weightedTargets:
      output.weightedTargets != null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TcpRouteMatch = (output: any, context: __SerdeContext): TcpRouteMatch => {
  return {
    port: __expectInt32(output.port),
  } as any;
};

const deserializeAws_restJson1TcpTimeout = (output: any, context: __SerdeContext): TcpTimeout => {
  return {
    idle: output.idle != null ? deserializeAws_restJson1Duration(output.idle, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContext = (output: any, context: __SerdeContext): TlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null
        ? deserializeAws_restJson1TlsValidationContextTrust(__expectUnion(output.trust), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContextAcmTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextAcmTrust => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns != null
        ? deserializeAws_restJson1CertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContextFileTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextFileTrust => {
  return {
    certificateChain: __expectString(output.certificateChain),
  } as any;
};

const deserializeAws_restJson1TlsValidationContextSdsTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextSdsTrust => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1TlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextTrust => {
  if (output.acm != null) {
    return {
      acm: deserializeAws_restJson1TlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1TlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1TlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayAccessLog = (
  output: any,
  context: __SerdeContext
): VirtualGatewayAccessLog => {
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayFileAccessLog(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayBackendDefaults = (
  output: any,
  context: __SerdeContext
): VirtualGatewayBackendDefaults => {
  return {
    clientPolicy:
      output.clientPolicy != null
        ? deserializeAws_restJson1VirtualGatewayClientPolicy(output.clientPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1VirtualGatewayClientPolicy = (
  output: any,
  context: __SerdeContext
): VirtualGatewayClientPolicy => {
  return {
    tls: output.tls != null ? deserializeAws_restJson1VirtualGatewayClientPolicyTls(output.tls, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayClientPolicyTls = (
  output: any,
  context: __SerdeContext
): VirtualGatewayClientPolicyTls => {
  return {
    certificate:
      output.certificate != null
        ? deserializeAws_restJson1VirtualGatewayClientTlsCertificate(__expectUnion(output.certificate), context)
        : undefined,
    enforce: __expectBoolean(output.enforce),
    ports: output.ports != null ? deserializeAws_restJson1PortSet(output.ports, context) : undefined,
    validation:
      output.validation != null
        ? deserializeAws_restJson1VirtualGatewayTlsValidationContext(output.validation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayClientTlsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayClientTlsCertificate => {
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayConnectionPool => {
  if (output.grpc != null) {
    return {
      grpc: deserializeAws_restJson1VirtualGatewayGrpcConnectionPool(output.grpc, context),
    };
  }
  if (output.http != null) {
    return {
      http: deserializeAws_restJson1VirtualGatewayHttpConnectionPool(output.http, context),
    };
  }
  if (output.http2 != null) {
    return {
      http2: deserializeAws_restJson1VirtualGatewayHttp2ConnectionPool(output.http2, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayData = (output: any, context: __SerdeContext): VirtualGatewayData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? deserializeAws_restJson1VirtualGatewaySpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1VirtualGatewayStatus(output.status, context) : undefined,
    virtualGatewayName: __expectString(output.virtualGatewayName),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayFileAccessLog = (
  output: any,
  context: __SerdeContext
): VirtualGatewayFileAccessLog => {
  return {
    format:
      output.format != null ? deserializeAws_restJson1LoggingFormat(__expectUnion(output.format), context) : undefined,
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayGrpcConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayGrpcConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayHealthCheckPolicy = (
  output: any,
  context: __SerdeContext
): VirtualGatewayHealthCheckPolicy => {
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

const deserializeAws_restJson1VirtualGatewayHttp2ConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayHttp2ConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayHttpConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualGatewayHttpConnectionPool => {
  return {
    maxConnections: __expectInt32(output.maxConnections),
    maxPendingRequests: __expectInt32(output.maxPendingRequests),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayList = (output: any, context: __SerdeContext): VirtualGatewayRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualGatewayRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VirtualGatewayListener = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListener => {
  return {
    connectionPool:
      output.connectionPool != null
        ? deserializeAws_restJson1VirtualGatewayConnectionPool(__expectUnion(output.connectionPool), context)
        : undefined,
    healthCheck:
      output.healthCheck != null
        ? deserializeAws_restJson1VirtualGatewayHealthCheckPolicy(output.healthCheck, context)
        : undefined,
    portMapping:
      output.portMapping != null
        ? deserializeAws_restJson1VirtualGatewayPortMapping(output.portMapping, context)
        : undefined,
    tls: output.tls != null ? deserializeAws_restJson1VirtualGatewayListenerTls(output.tls, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListeners = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualGatewayListener(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VirtualGatewayListenerTls = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTls => {
  return {
    certificate:
      output.certificate != null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsCertificate(__expectUnion(output.certificate), context)
        : undefined,
    mode: __expectString(output.mode),
    validation:
      output.validation != null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsValidationContext(output.validation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsAcmCertificate => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsCertificate => {
  if (output.acm != null) {
    return {
      acm: deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsFileCertificate => {
  return {
    certificateChain: __expectString(output.certificateChain),
    privateKey: __expectString(output.privateKey),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsSdsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsSdsCertificate => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsValidationContext = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust(__expectUnion(output.trust), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsValidationContextTrust => {
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayLogging = (output: any, context: __SerdeContext): VirtualGatewayLogging => {
  return {
    accessLog:
      output.accessLog != null
        ? deserializeAws_restJson1VirtualGatewayAccessLog(__expectUnion(output.accessLog), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayPortMapping = (
  output: any,
  context: __SerdeContext
): VirtualGatewayPortMapping => {
  return {
    port: __expectInt32(output.port),
    protocol: __expectString(output.protocol),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayRef = (output: any, context: __SerdeContext): VirtualGatewayRef => {
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

const deserializeAws_restJson1VirtualGatewaySpec = (output: any, context: __SerdeContext): VirtualGatewaySpec => {
  return {
    backendDefaults:
      output.backendDefaults != null
        ? deserializeAws_restJson1VirtualGatewayBackendDefaults(output.backendDefaults, context)
        : undefined,
    listeners:
      output.listeners != null ? deserializeAws_restJson1VirtualGatewayListeners(output.listeners, context) : undefined,
    logging:
      output.logging != null ? deserializeAws_restJson1VirtualGatewayLogging(output.logging, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayStatus = (output: any, context: __SerdeContext): VirtualGatewayStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContext = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContext => {
  return {
    subjectAlternativeNames:
      output.subjectAlternativeNames != null
        ? deserializeAws_restJson1SubjectAlternativeNames(output.subjectAlternativeNames, context)
        : undefined,
    trust:
      output.trust != null
        ? deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust(__expectUnion(output.trust), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextAcmTrust => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns != null
        ? deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextFileTrust => {
  return {
    certificateChain: __expectString(output.certificateChain),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextSdsTrust => {
  return {
    secretName: __expectString(output.secretName),
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextTrust => {
  if (output.acm != null) {
    return {
      acm: deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file != null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  if (output.sds != null) {
    return {
      sds: deserializeAws_restJson1VirtualGatewayTlsValidationContextSdsTrust(output.sds, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualNodeConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualNodeConnectionPool => {
  if (output.grpc != null) {
    return {
      grpc: deserializeAws_restJson1VirtualNodeGrpcConnectionPool(output.grpc, context),
    };
  }
  if (output.http != null) {
    return {
      http: deserializeAws_restJson1VirtualNodeHttpConnectionPool(output.http, context),
    };
  }
  if (output.http2 != null) {
    return {
      http2: deserializeAws_restJson1VirtualNodeHttp2ConnectionPool(output.http2, context),
    };
  }
  if (output.tcp != null) {
    return {
      tcp: deserializeAws_restJson1VirtualNodeTcpConnectionPool(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualNodeData = (output: any, context: __SerdeContext): VirtualNodeData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? deserializeAws_restJson1VirtualNodeSpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1VirtualNodeStatus(output.status, context) : undefined,
    virtualNodeName: __expectString(output.virtualNodeName),
  } as any;
};

const deserializeAws_restJson1VirtualNodeGrpcConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualNodeGrpcConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

const deserializeAws_restJson1VirtualNodeHttp2ConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualNodeHttp2ConnectionPool => {
  return {
    maxRequests: __expectInt32(output.maxRequests),
  } as any;
};

const deserializeAws_restJson1VirtualNodeHttpConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualNodeHttpConnectionPool => {
  return {
    maxConnections: __expectInt32(output.maxConnections),
    maxPendingRequests: __expectInt32(output.maxPendingRequests),
  } as any;
};

const deserializeAws_restJson1VirtualNodeList = (output: any, context: __SerdeContext): VirtualNodeRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualNodeRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VirtualNodeRef = (output: any, context: __SerdeContext): VirtualNodeRef => {
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

const deserializeAws_restJson1VirtualNodeServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualNodeServiceProvider => {
  return {
    virtualNodeName: __expectString(output.virtualNodeName),
  } as any;
};

const deserializeAws_restJson1VirtualNodeSpec = (output: any, context: __SerdeContext): VirtualNodeSpec => {
  return {
    backendDefaults:
      output.backendDefaults != null
        ? deserializeAws_restJson1BackendDefaults(output.backendDefaults, context)
        : undefined,
    backends: output.backends != null ? deserializeAws_restJson1Backends(output.backends, context) : undefined,
    listeners: output.listeners != null ? deserializeAws_restJson1Listeners(output.listeners, context) : undefined,
    logging: output.logging != null ? deserializeAws_restJson1Logging(output.logging, context) : undefined,
    serviceDiscovery:
      output.serviceDiscovery != null
        ? deserializeAws_restJson1ServiceDiscovery(__expectUnion(output.serviceDiscovery), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualNodeStatus = (output: any, context: __SerdeContext): VirtualNodeStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1VirtualNodeTcpConnectionPool = (
  output: any,
  context: __SerdeContext
): VirtualNodeTcpConnectionPool => {
  return {
    maxConnections: __expectInt32(output.maxConnections),
  } as any;
};

const deserializeAws_restJson1VirtualRouterData = (output: any, context: __SerdeContext): VirtualRouterData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? deserializeAws_restJson1VirtualRouterSpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1VirtualRouterStatus(output.status, context) : undefined,
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

const deserializeAws_restJson1VirtualRouterList = (output: any, context: __SerdeContext): VirtualRouterRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualRouterRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VirtualRouterListener = (output: any, context: __SerdeContext): VirtualRouterListener => {
  return {
    portMapping:
      output.portMapping != null ? deserializeAws_restJson1PortMapping(output.portMapping, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterListeners = (
  output: any,
  context: __SerdeContext
): VirtualRouterListener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualRouterListener(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VirtualRouterRef = (output: any, context: __SerdeContext): VirtualRouterRef => {
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

const deserializeAws_restJson1VirtualRouterServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualRouterServiceProvider => {
  return {
    virtualRouterName: __expectString(output.virtualRouterName),
  } as any;
};

const deserializeAws_restJson1VirtualRouterSpec = (output: any, context: __SerdeContext): VirtualRouterSpec => {
  return {
    listeners:
      output.listeners != null ? deserializeAws_restJson1VirtualRouterListeners(output.listeners, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterStatus = (output: any, context: __SerdeContext): VirtualRouterStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1VirtualServiceBackend = (output: any, context: __SerdeContext): VirtualServiceBackend => {
  return {
    clientPolicy:
      output.clientPolicy != null ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context) : undefined,
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

const deserializeAws_restJson1VirtualServiceData = (output: any, context: __SerdeContext): VirtualServiceData => {
  return {
    meshName: __expectString(output.meshName),
    metadata: output.metadata != null ? deserializeAws_restJson1ResourceMetadata(output.metadata, context) : undefined,
    spec: output.spec != null ? deserializeAws_restJson1VirtualServiceSpec(output.spec, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1VirtualServiceStatus(output.status, context) : undefined,
    virtualServiceName: __expectString(output.virtualServiceName),
  } as any;
};

const deserializeAws_restJson1VirtualServiceList = (output: any, context: __SerdeContext): VirtualServiceRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualServiceRef(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VirtualServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualServiceProvider => {
  if (output.virtualNode != null) {
    return {
      virtualNode: deserializeAws_restJson1VirtualNodeServiceProvider(output.virtualNode, context),
    };
  }
  if (output.virtualRouter != null) {
    return {
      virtualRouter: deserializeAws_restJson1VirtualRouterServiceProvider(output.virtualRouter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualServiceRef = (output: any, context: __SerdeContext): VirtualServiceRef => {
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

const deserializeAws_restJson1VirtualServiceSpec = (output: any, context: __SerdeContext): VirtualServiceSpec => {
  return {
    provider:
      output.provider != null
        ? deserializeAws_restJson1VirtualServiceProvider(__expectUnion(output.provider), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualServiceStatus = (output: any, context: __SerdeContext): VirtualServiceStatus => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1WeightedTarget = (output: any, context: __SerdeContext): WeightedTarget => {
  return {
    port: __expectInt32(output.port),
    virtualNode: __expectString(output.virtualNode),
    weight: __expectInt32(output.weight),
  } as any;
};

const deserializeAws_restJson1WeightedTargets = (output: any, context: __SerdeContext): WeightedTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WeightedTarget(entry, context);
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
