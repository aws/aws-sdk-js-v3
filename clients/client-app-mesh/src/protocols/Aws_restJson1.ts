// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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
  NotFoundException,
  OutlierDetection,
  PortMapping,
  QueryParameterMatch,
  ResourceInUseException,
  ResourceMetadata,
  RouteData,
  RouteRef,
  RouteSpec,
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
  VirtualNodeTcpConnectionPool,
  VirtualRouterData,
  VirtualRouterListener,
  VirtualRouterRef,
  VirtualRouterServiceProvider,
  VirtualRouterSpec,
  VirtualServiceBackend,
  VirtualServiceData,
  VirtualServiceProvider,
  VirtualServiceRef,
  VirtualServiceSpec,
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      gatewayRouteName: [],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      meshName: [],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      routeName: [],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
      virtualGatewayName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
      virtualNodeName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
      virtualRouterName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
      tags: (_) => _json(_),
      virtualServiceName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tagKeys: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      spec: (_) => _json(_),
    })
  );
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    gatewayRoutes: (_) => de_GatewayRouteList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    meshes: (_) => de_MeshList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
    nextToken: __expectString,
    routes: (_) => de_RouteList(_, context),
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
    nextToken: __expectString,
    tags: _json,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    virtualGateways: (_) => de_VirtualGatewayList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    virtualNodes: (_) => de_VirtualNodeList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    virtualRouters: (_) => de_VirtualRouterList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    virtualServices: (_) => de_VirtualServiceList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccessLog omitted.

// se_AwsCloudMapInstanceAttribute omitted.

// se_AwsCloudMapInstanceAttributes omitted.

// se_AwsCloudMapServiceDiscovery omitted.

// se_Backend omitted.

// se_BackendDefaults omitted.

// se_Backends omitted.

// se_CertificateAuthorityArns omitted.

// se_ClientPolicy omitted.

// se_ClientPolicyTls omitted.

// se_ClientTlsCertificate omitted.

// se_DnsServiceDiscovery omitted.

// se_Duration omitted.

// se_EgressFilter omitted.

// se_FileAccessLog omitted.

// se_GatewayRouteHostnameMatch omitted.

// se_GatewayRouteHostnameRewrite omitted.

// se_GatewayRouteSpec omitted.

// se_GatewayRouteTarget omitted.

// se_GatewayRouteVirtualService omitted.

// se_GrpcGatewayRoute omitted.

// se_GrpcGatewayRouteAction omitted.

// se_GrpcGatewayRouteMatch omitted.

// se_GrpcGatewayRouteMetadata omitted.

// se_GrpcGatewayRouteMetadataList omitted.

// se_GrpcGatewayRouteRewrite omitted.

// se_GrpcMetadataMatchMethod omitted.

// se_GrpcRetryPolicy omitted.

// se_GrpcRetryPolicyEvents omitted.

// se_GrpcRoute omitted.

// se_GrpcRouteAction omitted.

// se_GrpcRouteMatch omitted.

// se_GrpcRouteMetadata omitted.

// se_GrpcRouteMetadataList omitted.

// se_GrpcRouteMetadataMatchMethod omitted.

// se_GrpcTimeout omitted.

// se_HeaderMatchMethod omitted.

// se_HealthCheckPolicy omitted.

// se_HttpGatewayRoute omitted.

// se_HttpGatewayRouteAction omitted.

// se_HttpGatewayRouteHeader omitted.

// se_HttpGatewayRouteHeaders omitted.

// se_HttpGatewayRouteMatch omitted.

// se_HttpGatewayRoutePathRewrite omitted.

// se_HttpGatewayRoutePrefixRewrite omitted.

// se_HttpGatewayRouteRewrite omitted.

// se_HttpPathMatch omitted.

// se_HttpQueryParameter omitted.

// se_HttpQueryParameters omitted.

// se_HttpRetryPolicy omitted.

// se_HttpRetryPolicyEvents omitted.

// se_HttpRoute omitted.

// se_HttpRouteAction omitted.

// se_HttpRouteHeader omitted.

// se_HttpRouteHeaders omitted.

// se_HttpRouteMatch omitted.

// se_HttpTimeout omitted.

// se_JsonFormat omitted.

// se_JsonFormatRef omitted.

// se_Listener omitted.

// se_Listeners omitted.

// se_ListenerTimeout omitted.

// se_ListenerTls omitted.

// se_ListenerTlsAcmCertificate omitted.

// se_ListenerTlsCertificate omitted.

// se_ListenerTlsFileCertificate omitted.

// se_ListenerTlsSdsCertificate omitted.

// se_ListenerTlsValidationContext omitted.

// se_ListenerTlsValidationContextTrust omitted.

// se_Logging omitted.

// se_LoggingFormat omitted.

// se_MatchRange omitted.

// se_MeshServiceDiscovery omitted.

// se_MeshSpec omitted.

// se_OutlierDetection omitted.

// se_PortMapping omitted.

// se_PortSet omitted.

// se_QueryParameterMatch omitted.

// se_RouteSpec omitted.

// se_ServiceDiscovery omitted.

// se_SubjectAlternativeNameList omitted.

// se_SubjectAlternativeNameMatchers omitted.

// se_SubjectAlternativeNames omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagRef omitted.

// se_TcpRetryPolicyEvents omitted.

// se_TcpRoute omitted.

// se_TcpRouteAction omitted.

// se_TcpRouteMatch omitted.

// se_TcpTimeout omitted.

// se_TlsValidationContext omitted.

// se_TlsValidationContextAcmTrust omitted.

// se_TlsValidationContextFileTrust omitted.

// se_TlsValidationContextSdsTrust omitted.

// se_TlsValidationContextTrust omitted.

// se_VirtualGatewayAccessLog omitted.

// se_VirtualGatewayBackendDefaults omitted.

// se_VirtualGatewayCertificateAuthorityArns omitted.

// se_VirtualGatewayClientPolicy omitted.

// se_VirtualGatewayClientPolicyTls omitted.

// se_VirtualGatewayClientTlsCertificate omitted.

// se_VirtualGatewayConnectionPool omitted.

// se_VirtualGatewayFileAccessLog omitted.

// se_VirtualGatewayGrpcConnectionPool omitted.

// se_VirtualGatewayHealthCheckPolicy omitted.

// se_VirtualGatewayHttp2ConnectionPool omitted.

// se_VirtualGatewayHttpConnectionPool omitted.

// se_VirtualGatewayListener omitted.

// se_VirtualGatewayListeners omitted.

// se_VirtualGatewayListenerTls omitted.

// se_VirtualGatewayListenerTlsAcmCertificate omitted.

// se_VirtualGatewayListenerTlsCertificate omitted.

// se_VirtualGatewayListenerTlsFileCertificate omitted.

// se_VirtualGatewayListenerTlsSdsCertificate omitted.

// se_VirtualGatewayListenerTlsValidationContext omitted.

// se_VirtualGatewayListenerTlsValidationContextTrust omitted.

// se_VirtualGatewayLogging omitted.

// se_VirtualGatewayPortMapping omitted.

// se_VirtualGatewaySpec omitted.

// se_VirtualGatewayTlsValidationContext omitted.

// se_VirtualGatewayTlsValidationContextAcmTrust omitted.

// se_VirtualGatewayTlsValidationContextFileTrust omitted.

// se_VirtualGatewayTlsValidationContextSdsTrust omitted.

// se_VirtualGatewayTlsValidationContextTrust omitted.

// se_VirtualNodeConnectionPool omitted.

// se_VirtualNodeGrpcConnectionPool omitted.

// se_VirtualNodeHttp2ConnectionPool omitted.

// se_VirtualNodeHttpConnectionPool omitted.

// se_VirtualNodeServiceProvider omitted.

// se_VirtualNodeSpec omitted.

// se_VirtualNodeTcpConnectionPool omitted.

// se_VirtualRouterListener omitted.

// se_VirtualRouterListeners omitted.

// se_VirtualRouterServiceProvider omitted.

// se_VirtualRouterSpec omitted.

// se_VirtualServiceBackend omitted.

// se_VirtualServiceProvider omitted.

// se_VirtualServiceSpec omitted.

// se_WeightedTarget omitted.

// se_WeightedTargets omitted.

// de_AccessLog omitted.

// de_AwsCloudMapInstanceAttribute omitted.

// de_AwsCloudMapInstanceAttributes omitted.

// de_AwsCloudMapServiceDiscovery omitted.

// de_Backend omitted.

// de_BackendDefaults omitted.

// de_Backends omitted.

// de_CertificateAuthorityArns omitted.

// de_ClientPolicy omitted.

// de_ClientPolicyTls omitted.

// de_ClientTlsCertificate omitted.

// de_DnsServiceDiscovery omitted.

// de_Duration omitted.

// de_EgressFilter omitted.

// de_FileAccessLog omitted.

/**
 * deserializeAws_restJson1GatewayRouteData
 */
const de_GatewayRouteData = (output: any, context: __SerdeContext): GatewayRouteData => {
  return take(output, {
    gatewayRouteName: __expectString,
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    spec: _json,
    status: _json,
    virtualGatewayName: __expectString,
  }) as any;
};

// de_GatewayRouteHostnameMatch omitted.

// de_GatewayRouteHostnameRewrite omitted.

/**
 * deserializeAws_restJson1GatewayRouteList
 */
const de_GatewayRouteList = (output: any, context: __SerdeContext): GatewayRouteRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GatewayRouteRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewayRouteRef
 */
const de_GatewayRouteRef = (output: any, context: __SerdeContext): GatewayRouteRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    gatewayRouteName: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    version: __expectLong,
    virtualGatewayName: __expectString,
  }) as any;
};

// de_GatewayRouteSpec omitted.

// de_GatewayRouteStatus omitted.

// de_GatewayRouteTarget omitted.

// de_GatewayRouteVirtualService omitted.

// de_GrpcGatewayRoute omitted.

// de_GrpcGatewayRouteAction omitted.

// de_GrpcGatewayRouteMatch omitted.

// de_GrpcGatewayRouteMetadata omitted.

// de_GrpcGatewayRouteMetadataList omitted.

// de_GrpcGatewayRouteRewrite omitted.

// de_GrpcMetadataMatchMethod omitted.

// de_GrpcRetryPolicy omitted.

// de_GrpcRetryPolicyEvents omitted.

// de_GrpcRoute omitted.

// de_GrpcRouteAction omitted.

// de_GrpcRouteMatch omitted.

// de_GrpcRouteMetadata omitted.

// de_GrpcRouteMetadataList omitted.

// de_GrpcRouteMetadataMatchMethod omitted.

// de_GrpcTimeout omitted.

// de_HeaderMatchMethod omitted.

// de_HealthCheckPolicy omitted.

// de_HttpGatewayRoute omitted.

// de_HttpGatewayRouteAction omitted.

// de_HttpGatewayRouteHeader omitted.

// de_HttpGatewayRouteHeaders omitted.

// de_HttpGatewayRouteMatch omitted.

// de_HttpGatewayRoutePathRewrite omitted.

// de_HttpGatewayRoutePrefixRewrite omitted.

// de_HttpGatewayRouteRewrite omitted.

// de_HttpPathMatch omitted.

// de_HttpQueryParameter omitted.

// de_HttpQueryParameters omitted.

// de_HttpRetryPolicy omitted.

// de_HttpRetryPolicyEvents omitted.

// de_HttpRoute omitted.

// de_HttpRouteAction omitted.

// de_HttpRouteHeader omitted.

// de_HttpRouteHeaders omitted.

// de_HttpRouteMatch omitted.

// de_HttpTimeout omitted.

// de_JsonFormat omitted.

// de_JsonFormatRef omitted.

// de_Listener omitted.

// de_Listeners omitted.

// de_ListenerTimeout omitted.

// de_ListenerTls omitted.

// de_ListenerTlsAcmCertificate omitted.

// de_ListenerTlsCertificate omitted.

// de_ListenerTlsFileCertificate omitted.

// de_ListenerTlsSdsCertificate omitted.

// de_ListenerTlsValidationContext omitted.

// de_ListenerTlsValidationContextTrust omitted.

// de_Logging omitted.

// de_LoggingFormat omitted.

// de_MatchRange omitted.

/**
 * deserializeAws_restJson1MeshData
 */
const de_MeshData = (output: any, context: __SerdeContext): MeshData => {
  return take(output, {
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    spec: _json,
    status: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1MeshList
 */
const de_MeshList = (output: any, context: __SerdeContext): MeshRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MeshRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MeshRef
 */
const de_MeshRef = (output: any, context: __SerdeContext): MeshRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    version: __expectLong,
  }) as any;
};

// de_MeshServiceDiscovery omitted.

// de_MeshSpec omitted.

// de_MeshStatus omitted.

// de_OutlierDetection omitted.

// de_PortMapping omitted.

// de_PortSet omitted.

// de_QueryParameterMatch omitted.

/**
 * deserializeAws_restJson1ResourceMetadata
 */
const de_ResourceMetadata = (output: any, context: __SerdeContext): ResourceMetadata => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshOwner: __expectString,
    resourceOwner: __expectString,
    uid: __expectString,
    version: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteData
 */
const de_RouteData = (output: any, context: __SerdeContext): RouteData => {
  return take(output, {
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    routeName: __expectString,
    spec: _json,
    status: _json,
    virtualRouterName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteList
 */
const de_RouteList = (output: any, context: __SerdeContext): RouteRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteRef
 */
const de_RouteRef = (output: any, context: __SerdeContext): RouteRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    routeName: __expectString,
    version: __expectLong,
    virtualRouterName: __expectString,
  }) as any;
};

// de_RouteSpec omitted.

// de_RouteStatus omitted.

// de_ServiceDiscovery omitted.

// de_SubjectAlternativeNameList omitted.

// de_SubjectAlternativeNameMatchers omitted.

// de_SubjectAlternativeNames omitted.

// de_TagList omitted.

// de_TagRef omitted.

// de_TcpRetryPolicyEvents omitted.

// de_TcpRoute omitted.

// de_TcpRouteAction omitted.

// de_TcpRouteMatch omitted.

// de_TcpTimeout omitted.

// de_TlsValidationContext omitted.

// de_TlsValidationContextAcmTrust omitted.

// de_TlsValidationContextFileTrust omitted.

// de_TlsValidationContextSdsTrust omitted.

// de_TlsValidationContextTrust omitted.

// de_VirtualGatewayAccessLog omitted.

// de_VirtualGatewayBackendDefaults omitted.

// de_VirtualGatewayCertificateAuthorityArns omitted.

// de_VirtualGatewayClientPolicy omitted.

// de_VirtualGatewayClientPolicyTls omitted.

// de_VirtualGatewayClientTlsCertificate omitted.

// de_VirtualGatewayConnectionPool omitted.

/**
 * deserializeAws_restJson1VirtualGatewayData
 */
const de_VirtualGatewayData = (output: any, context: __SerdeContext): VirtualGatewayData => {
  return take(output, {
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    spec: _json,
    status: _json,
    virtualGatewayName: __expectString,
  }) as any;
};

// de_VirtualGatewayFileAccessLog omitted.

// de_VirtualGatewayGrpcConnectionPool omitted.

// de_VirtualGatewayHealthCheckPolicy omitted.

// de_VirtualGatewayHttp2ConnectionPool omitted.

// de_VirtualGatewayHttpConnectionPool omitted.

/**
 * deserializeAws_restJson1VirtualGatewayList
 */
const de_VirtualGatewayList = (output: any, context: __SerdeContext): VirtualGatewayRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VirtualGatewayRef(entry, context);
    });
  return retVal;
};

// de_VirtualGatewayListener omitted.

// de_VirtualGatewayListeners omitted.

// de_VirtualGatewayListenerTls omitted.

// de_VirtualGatewayListenerTlsAcmCertificate omitted.

// de_VirtualGatewayListenerTlsCertificate omitted.

// de_VirtualGatewayListenerTlsFileCertificate omitted.

// de_VirtualGatewayListenerTlsSdsCertificate omitted.

// de_VirtualGatewayListenerTlsValidationContext omitted.

// de_VirtualGatewayListenerTlsValidationContextTrust omitted.

// de_VirtualGatewayLogging omitted.

// de_VirtualGatewayPortMapping omitted.

/**
 * deserializeAws_restJson1VirtualGatewayRef
 */
const de_VirtualGatewayRef = (output: any, context: __SerdeContext): VirtualGatewayRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    version: __expectLong,
    virtualGatewayName: __expectString,
  }) as any;
};

// de_VirtualGatewaySpec omitted.

// de_VirtualGatewayStatus omitted.

// de_VirtualGatewayTlsValidationContext omitted.

// de_VirtualGatewayTlsValidationContextAcmTrust omitted.

// de_VirtualGatewayTlsValidationContextFileTrust omitted.

// de_VirtualGatewayTlsValidationContextSdsTrust omitted.

// de_VirtualGatewayTlsValidationContextTrust omitted.

// de_VirtualNodeConnectionPool omitted.

/**
 * deserializeAws_restJson1VirtualNodeData
 */
const de_VirtualNodeData = (output: any, context: __SerdeContext): VirtualNodeData => {
  return take(output, {
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    spec: _json,
    status: _json,
    virtualNodeName: __expectString,
  }) as any;
};

// de_VirtualNodeGrpcConnectionPool omitted.

// de_VirtualNodeHttp2ConnectionPool omitted.

// de_VirtualNodeHttpConnectionPool omitted.

/**
 * deserializeAws_restJson1VirtualNodeList
 */
const de_VirtualNodeList = (output: any, context: __SerdeContext): VirtualNodeRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VirtualNodeRef(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VirtualNodeRef
 */
const de_VirtualNodeRef = (output: any, context: __SerdeContext): VirtualNodeRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    version: __expectLong,
    virtualNodeName: __expectString,
  }) as any;
};

// de_VirtualNodeServiceProvider omitted.

// de_VirtualNodeSpec omitted.

// de_VirtualNodeStatus omitted.

// de_VirtualNodeTcpConnectionPool omitted.

/**
 * deserializeAws_restJson1VirtualRouterData
 */
const de_VirtualRouterData = (output: any, context: __SerdeContext): VirtualRouterData => {
  return take(output, {
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    spec: _json,
    status: _json,
    virtualRouterName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VirtualRouterList
 */
const de_VirtualRouterList = (output: any, context: __SerdeContext): VirtualRouterRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VirtualRouterRef(entry, context);
    });
  return retVal;
};

// de_VirtualRouterListener omitted.

// de_VirtualRouterListeners omitted.

/**
 * deserializeAws_restJson1VirtualRouterRef
 */
const de_VirtualRouterRef = (output: any, context: __SerdeContext): VirtualRouterRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    version: __expectLong,
    virtualRouterName: __expectString,
  }) as any;
};

// de_VirtualRouterServiceProvider omitted.

// de_VirtualRouterSpec omitted.

// de_VirtualRouterStatus omitted.

// de_VirtualServiceBackend omitted.

/**
 * deserializeAws_restJson1VirtualServiceData
 */
const de_VirtualServiceData = (output: any, context: __SerdeContext): VirtualServiceData => {
  return take(output, {
    meshName: __expectString,
    metadata: (_: any) => de_ResourceMetadata(_, context),
    spec: _json,
    status: _json,
    virtualServiceName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VirtualServiceList
 */
const de_VirtualServiceList = (output: any, context: __SerdeContext): VirtualServiceRef[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VirtualServiceRef(entry, context);
    });
  return retVal;
};

// de_VirtualServiceProvider omitted.

/**
 * deserializeAws_restJson1VirtualServiceRef
 */
const de_VirtualServiceRef = (output: any, context: __SerdeContext): VirtualServiceRef => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    meshName: __expectString,
    meshOwner: __expectString,
    resourceOwner: __expectString,
    version: __expectLong,
    virtualServiceName: __expectString,
  }) as any;
};

// de_VirtualServiceSpec omitted.

// de_VirtualServiceStatus omitted.

// de_WeightedTarget omitted.

// de_WeightedTargets omitted.

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
