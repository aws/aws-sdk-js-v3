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
import {
  AccessLog,
  AwsCloudMapInstanceAttribute,
  AwsCloudMapServiceDiscovery,
  Backend,
  BackendDefaults,
  BadRequestException,
  ClientPolicy,
  ClientPolicyTls,
  ConflictException,
  DnsServiceDiscovery,
  Duration,
  EgressFilter,
  FileAccessLog,
  ForbiddenException,
  GatewayRouteData,
  GatewayRouteRef,
  GatewayRouteSpec,
  GatewayRouteStatus,
  GatewayRouteTarget,
  GatewayRouteVirtualService,
  GrpcGatewayRoute,
  GrpcGatewayRouteAction,
  GrpcGatewayRouteMatch,
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
  HttpGatewayRouteMatch,
  HttpRetryPolicy,
  HttpRoute,
  HttpRouteAction,
  HttpRouteHeader,
  HttpRouteMatch,
  HttpTimeout,
  InternalServerErrorException,
  LimitExceededException,
  Listener,
  ListenerTimeout,
  ListenerTls,
  ListenerTlsAcmCertificate,
  ListenerTlsCertificate,
  ListenerTlsFileCertificate,
  Logging,
  MatchRange,
  MeshData,
  MeshRef,
  MeshSpec,
  MeshStatus,
  NotFoundException,
  PortMapping,
  ResourceInUseException,
  ResourceMetadata,
  RouteData,
  RouteRef,
  RouteSpec,
  RouteStatus,
  ServiceDiscovery,
  ServiceUnavailableException,
  TagRef,
  TcpRetryPolicyEvent,
  TcpRoute,
  TcpRouteAction,
  TcpTimeout,
  TlsValidationContext,
  TlsValidationContextAcmTrust,
  TlsValidationContextFileTrust,
  TlsValidationContextTrust,
  TooManyRequestsException,
  TooManyTagsException,
  VirtualGatewayAccessLog,
  VirtualGatewayBackendDefaults,
  VirtualGatewayClientPolicy,
  VirtualGatewayClientPolicyTls,
  VirtualGatewayData,
  VirtualGatewayFileAccessLog,
  VirtualGatewayHealthCheckPolicy,
  VirtualGatewayListener,
  VirtualGatewayListenerTls,
  VirtualGatewayListenerTlsAcmCertificate,
  VirtualGatewayListenerTlsCertificate,
  VirtualGatewayListenerTlsFileCertificate,
  VirtualGatewayLogging,
  VirtualGatewayPortMapping,
  VirtualGatewayRef,
  VirtualGatewaySpec,
  VirtualGatewayStatus,
  VirtualGatewayTlsValidationContext,
  VirtualGatewayTlsValidationContextAcmTrust,
  VirtualGatewayTlsValidationContextFileTrust,
  VirtualGatewayTlsValidationContextTrust,
  VirtualNodeData,
  VirtualNodeRef,
  VirtualNodeServiceProvider,
  VirtualNodeSpec,
  VirtualNodeStatus,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1CreateGatewayRouteCommand = async (
  input: CreateGatewayRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.gatewayRouteName !== undefined &&
      input.gatewayRouteName !== null && { gatewayRouteName: input.gatewayRouteName }),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.meshName !== undefined && input.meshName !== null && { meshName: input.meshName }),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.routeName !== undefined && input.routeName !== null && { routeName: input.routeName }),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualGatewayName !== undefined &&
      input.virtualGatewayName !== null && { virtualGatewayName: input.virtualGatewayName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualNodeName !== undefined &&
      input.virtualNodeName !== null && { virtualNodeName: input.virtualNodeName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualRouterName !== undefined &&
      input.virtualRouterName !== null && { virtualRouterName: input.virtualRouterName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  if (input.gatewayRouteName !== undefined) {
    const labelValue: string = input.gatewayRouteName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
    }
    resolvedPath = resolvedPath.replace("{gatewayRouteName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayRouteName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace("{routeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
    }
    resolvedPath = resolvedPath.replace("{virtualNodeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
    }
    resolvedPath = resolvedPath.replace("{virtualServiceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualServiceName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  if (input.gatewayRouteName !== undefined) {
    const labelValue: string = input.gatewayRouteName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
    }
    resolvedPath = resolvedPath.replace("{gatewayRouteName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayRouteName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace("{routeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
    }
    resolvedPath = resolvedPath.replace("{virtualNodeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
    }
    resolvedPath = resolvedPath.replace("{virtualServiceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualServiceName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/tag";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/untag";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}";
  if (input.gatewayRouteName !== undefined) {
    const labelValue: string = input.gatewayRouteName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayRouteName.");
    }
    resolvedPath = resolvedPath.replace("{gatewayRouteName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayRouteName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1GatewayRouteSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1MeshSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace("{routeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1RouteSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}";
  if (input.virtualGatewayName !== undefined) {
    const labelValue: string = input.virtualGatewayName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualGatewayName.");
    }
    resolvedPath = resolvedPath.replace("{virtualGatewayName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualGatewayName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualGatewaySpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualNodeName.");
    }
    resolvedPath = resolvedPath.replace("{virtualNodeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualNodeSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualRouterName.");
    }
    resolvedPath = resolvedPath.replace("{virtualRouterName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualRouterName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualRouterSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualServiceName.");
    }
    resolvedPath = resolvedPath.replace("{virtualServiceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualServiceName.");
  }
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace("{meshName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.meshOwner !== undefined && { meshOwner: input.meshOwner }),
  };
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined &&
      input.spec !== null && { spec: serializeAws_restJson1VirtualServiceSpec(input.spec, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const contents: CreateGatewayRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeshCommandError(output, context);
  }
  const contents: CreateMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCommandError(output, context);
  }
  const contents: CreateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualGatewayCommandError(output, context);
  }
  const contents: CreateVirtualGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualNodeCommandError(output, context);
  }
  const contents: CreateVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualRouterCommandError(output, context);
  }
  const contents: CreateVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualServiceCommandError(output, context);
  }
  const contents: CreateVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGatewayRouteCommandError(output, context);
  }
  const contents: DeleteGatewayRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMeshCommandError(output, context);
  }
  const contents: DeleteMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCommandError(output, context);
  }
  const contents: DeleteRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualGatewayCommandError(output, context);
  }
  const contents: DeleteVirtualGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualNodeCommandError(output, context);
  }
  const contents: DeleteVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualRouterCommandError(output, context);
  }
  const contents: DeleteVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualServiceCommandError(output, context);
  }
  const contents: DeleteVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appmesh#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGatewayRouteCommandError(output, context);
  }
  const contents: DescribeGatewayRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMeshCommandError(output, context);
  }
  const contents: DescribeMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRouteCommandError(output, context);
  }
  const contents: DescribeRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualGatewayCommandError(output, context);
  }
  const contents: DescribeVirtualGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualNodeCommandError(output, context);
  }
  const contents: DescribeVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualRouterCommandError(output, context);
  }
  const contents: DescribeVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualServiceCommandError(output, context);
  }
  const contents: DescribeVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListGatewayRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGatewayRoutesCommandError(output, context);
  }
  const contents: ListGatewayRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewayRoutes: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.gatewayRoutes !== undefined && data.gatewayRoutes !== null) {
    contents.gatewayRoutes = deserializeAws_restJson1GatewayRouteList(data.gatewayRoutes, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGatewayRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListMeshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMeshesCommandError(output, context);
  }
  const contents: ListMeshesCommandOutput = {
    $metadata: deserializeMetadata(output),
    meshes: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.meshes !== undefined && data.meshes !== null) {
    contents.meshes = deserializeAws_restJson1MeshList(data.meshes, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMeshesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoutesCommandError(output, context);
  }
  const contents: ListRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    routes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.routes !== undefined && data.routes !== null) {
    contents.routes = deserializeAws_restJson1RouteList(data.routes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListVirtualGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualGatewaysCommandError(output, context);
  }
  const contents: ListVirtualGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualGateways: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualGateways !== undefined && data.virtualGateways !== null) {
    contents.virtualGateways = deserializeAws_restJson1VirtualGatewayList(data.virtualGateways, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVirtualGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListVirtualNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualNodesCommandError(output, context);
  }
  const contents: ListVirtualNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualNodes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualNodes !== undefined && data.virtualNodes !== null) {
    contents.virtualNodes = deserializeAws_restJson1VirtualNodeList(data.virtualNodes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVirtualNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListVirtualRoutersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualRoutersCommandError(output, context);
  }
  const contents: ListVirtualRoutersCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualRouters: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualRouters !== undefined && data.virtualRouters !== null) {
    contents.virtualRouters = deserializeAws_restJson1VirtualRouterList(data.virtualRouters, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVirtualRoutersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListVirtualServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualServicesCommandError(output, context);
  }
  const contents: ListVirtualServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualServices: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualServices !== undefined && data.virtualServices !== null) {
    contents.virtualServices = deserializeAws_restJson1VirtualServiceList(data.virtualServices, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVirtualServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.appmesh#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateGatewayRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayRouteCommandError(output, context);
  }
  const contents: UpdateGatewayRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewayRoute: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.gatewayRoute = deserializeAws_restJson1GatewayRouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGatewayRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMeshCommandError(output, context);
  }
  const contents: UpdateMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    mesh: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCommandError(output, context);
  }
  const contents: UpdateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    route: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVirtualGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualGatewayCommandError(output, context);
  }
  const contents: UpdateVirtualGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualGateway: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualGateway = deserializeAws_restJson1VirtualGatewayData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVirtualGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualNodeCommandError(output, context);
  }
  const contents: UpdateVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualNode: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1VirtualNodeData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualRouterCommandError(output, context);
  }
  const contents: UpdateVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualRouter: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1VirtualRouterData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVirtualServiceCommandError(output, context);
  }
  const contents: UpdateVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualService: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1VirtualServiceData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appmesh#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.appmesh#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.appmesh#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.appmesh#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appmesh#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appmesh#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.appmesh#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.appmesh#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
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
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1AwsCloudMapInstanceAttributes = (
  input: AwsCloudMapInstanceAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};

const serializeAws_restJson1AwsCloudMapServiceDiscovery = (
  input: AwsCloudMapServiceDiscovery,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && {
        attributes: serializeAws_restJson1AwsCloudMapInstanceAttributes(input.attributes, context),
      }),
    ...(input.namespaceName !== undefined && input.namespaceName !== null && { namespaceName: input.namespaceName }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
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
    ...(input.clientPolicy !== undefined &&
      input.clientPolicy !== null && { clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context) }),
  };
};

const serializeAws_restJson1Backends = (input: Backend[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Backend(entry, context);
    });
};

const serializeAws_restJson1CertificateAuthorityArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ClientPolicy = (input: ClientPolicy, context: __SerdeContext): any => {
  return {
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1ClientPolicyTls(input.tls, context) }),
  };
};

const serializeAws_restJson1ClientPolicyTls = (input: ClientPolicyTls, context: __SerdeContext): any => {
  return {
    ...(input.enforce !== undefined && input.enforce !== null && { enforce: input.enforce }),
    ...(input.ports !== undefined &&
      input.ports !== null && { ports: serializeAws_restJson1PortSet(input.ports, context) }),
    ...(input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1TlsValidationContext(input.validation, context),
      }),
  };
};

const serializeAws_restJson1DnsServiceDiscovery = (input: DnsServiceDiscovery, context: __SerdeContext): any => {
  return {
    ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
  };
};

const serializeAws_restJson1Duration = (input: Duration, context: __SerdeContext): any => {
  return {
    ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1EgressFilter = (input: EgressFilter, context: __SerdeContext): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1FileAccessLog = (input: FileAccessLog, context: __SerdeContext): any => {
  return {
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
  };
};

const serializeAws_restJson1GatewayRouteSpec = (input: GatewayRouteSpec, context: __SerdeContext): any => {
  return {
    ...(input.grpcRoute !== undefined &&
      input.grpcRoute !== null && { grpcRoute: serializeAws_restJson1GrpcGatewayRoute(input.grpcRoute, context) }),
    ...(input.http2Route !== undefined &&
      input.http2Route !== null && { http2Route: serializeAws_restJson1HttpGatewayRoute(input.http2Route, context) }),
    ...(input.httpRoute !== undefined &&
      input.httpRoute !== null && { httpRoute: serializeAws_restJson1HttpGatewayRoute(input.httpRoute, context) }),
  };
};

const serializeAws_restJson1GatewayRouteTarget = (input: GatewayRouteTarget, context: __SerdeContext): any => {
  return {
    ...(input.virtualService !== undefined &&
      input.virtualService !== null && {
        virtualService: serializeAws_restJson1GatewayRouteVirtualService(input.virtualService, context),
      }),
  };
};

const serializeAws_restJson1GatewayRouteVirtualService = (
  input: GatewayRouteVirtualService,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }),
  };
};

const serializeAws_restJson1GrpcGatewayRoute = (input: GrpcGatewayRoute, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1GrpcGatewayRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcGatewayRouteMatch(input.match, context) }),
  };
};

const serializeAws_restJson1GrpcGatewayRouteAction = (input: GrpcGatewayRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.target !== undefined &&
      input.target !== null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }),
  };
};

const serializeAws_restJson1GrpcGatewayRouteMatch = (input: GrpcGatewayRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};

const serializeAws_restJson1GrpcRetryPolicy = (input: GrpcRetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.grpcRetryEvents !== undefined &&
      input.grpcRetryEvents !== null && {
        grpcRetryEvents: serializeAws_restJson1GrpcRetryPolicyEvents(input.grpcRetryEvents, context),
      }),
    ...(input.httpRetryEvents !== undefined &&
      input.httpRetryEvents !== null && {
        httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
      }),
    ...(input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout !== undefined &&
      input.perRetryTimeout !== null && {
        perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
      }),
    ...(input.tcpRetryEvents !== undefined &&
      input.tcpRetryEvents !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1GrpcRoute = (input: GrpcRoute, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1GrpcRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcRouteMatch(input.match, context) }),
    ...(input.retryPolicy !== undefined &&
      input.retryPolicy !== null && { retryPolicy: serializeAws_restJson1GrpcRetryPolicy(input.retryPolicy, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1GrpcTimeout(input.timeout, context) }),
  };
};

const serializeAws_restJson1GrpcRouteAction = (input: GrpcRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }),
  };
};

const serializeAws_restJson1GrpcRouteMatch = (input: GrpcRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.metadata !== undefined &&
      input.metadata !== null && { metadata: serializeAws_restJson1GrpcRouteMetadataList(input.metadata, context) }),
    ...(input.methodName !== undefined && input.methodName !== null && { methodName: input.methodName }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};

const serializeAws_restJson1GrpcRouteMetadata = (input: GrpcRouteMetadata, context: __SerdeContext): any => {
  return {
    ...(input.invert !== undefined && input.invert !== null && { invert: input.invert }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1GrpcRouteMetadataMatchMethod(input.match, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1GrpcRouteMetadataList = (input: GrpcRouteMetadata[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
    ...(input.idle !== undefined &&
      input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
    ...(input.perRequest !== undefined &&
      input.perRequest !== null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }),
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
    ...(input.healthyThreshold !== undefined &&
      input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalMillis !== undefined &&
      input.intervalMillis !== null && { intervalMillis: input.intervalMillis }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    ...(input.timeoutMillis !== undefined && input.timeoutMillis !== null && { timeoutMillis: input.timeoutMillis }),
    ...(input.unhealthyThreshold !== undefined &&
      input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};

const serializeAws_restJson1HttpGatewayRoute = (input: HttpGatewayRoute, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1HttpGatewayRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HttpGatewayRouteMatch(input.match, context) }),
  };
};

const serializeAws_restJson1HttpGatewayRouteAction = (input: HttpGatewayRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.target !== undefined &&
      input.target !== null && { target: serializeAws_restJson1GatewayRouteTarget(input.target, context) }),
  };
};

const serializeAws_restJson1HttpGatewayRouteMatch = (input: HttpGatewayRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1HttpRetryPolicy = (input: HttpRetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.httpRetryEvents !== undefined &&
      input.httpRetryEvents !== null && {
        httpRetryEvents: serializeAws_restJson1HttpRetryPolicyEvents(input.httpRetryEvents, context),
      }),
    ...(input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout !== undefined &&
      input.perRetryTimeout !== null && {
        perRetryTimeout: serializeAws_restJson1Duration(input.perRetryTimeout, context),
      }),
    ...(input.tcpRetryEvents !== undefined &&
      input.tcpRetryEvents !== null && {
        tcpRetryEvents: serializeAws_restJson1TcpRetryPolicyEvents(input.tcpRetryEvents, context),
      }),
  };
};

const serializeAws_restJson1HttpRetryPolicyEvents = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1HttpRoute = (input: HttpRoute, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1HttpRouteAction(input.action, context) }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HttpRouteMatch(input.match, context) }),
    ...(input.retryPolicy !== undefined &&
      input.retryPolicy !== null && { retryPolicy: serializeAws_restJson1HttpRetryPolicy(input.retryPolicy, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1HttpTimeout(input.timeout, context) }),
  };
};

const serializeAws_restJson1HttpRouteAction = (input: HttpRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }),
  };
};

const serializeAws_restJson1HttpRouteHeader = (input: HttpRouteHeader, context: __SerdeContext): any => {
  return {
    ...(input.invert !== undefined && input.invert !== null && { invert: input.invert }),
    ...(input.match !== undefined &&
      input.match !== null && { match: serializeAws_restJson1HeaderMatchMethod(input.match, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1HttpRouteHeaders = (input: HttpRouteHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1HttpRouteHeader(entry, context);
    });
};

const serializeAws_restJson1HttpRouteMatch = (input: HttpRouteMatch, context: __SerdeContext): any => {
  return {
    ...(input.headers !== undefined &&
      input.headers !== null && { headers: serializeAws_restJson1HttpRouteHeaders(input.headers, context) }),
    ...(input.method !== undefined && input.method !== null && { method: input.method }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    ...(input.scheme !== undefined && input.scheme !== null && { scheme: input.scheme }),
  };
};

const serializeAws_restJson1HttpTimeout = (input: HttpTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle !== undefined &&
      input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
    ...(input.perRequest !== undefined &&
      input.perRequest !== null && { perRequest: serializeAws_restJson1Duration(input.perRequest, context) }),
  };
};

const serializeAws_restJson1Listener = (input: Listener, context: __SerdeContext): any => {
  return {
    ...(input.healthCheck !== undefined &&
      input.healthCheck !== null && {
        healthCheck: serializeAws_restJson1HealthCheckPolicy(input.healthCheck, context),
      }),
    ...(input.portMapping !== undefined &&
      input.portMapping !== null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1ListenerTimeout(input.timeout, context) }),
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1ListenerTls(input.tls, context) }),
  };
};

const serializeAws_restJson1Listeners = (input: Listener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
    ...(input.certificate !== undefined &&
      input.certificate !== null && {
        certificate: serializeAws_restJson1ListenerTlsCertificate(input.certificate, context),
      }),
    ...(input.mode !== undefined && input.mode !== null && { mode: input.mode }),
  };
};

const serializeAws_restJson1ListenerTlsAcmCertificate = (
  input: ListenerTlsAcmCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
  };
};

const serializeAws_restJson1ListenerTlsCertificate = (input: ListenerTlsCertificate, context: __SerdeContext): any => {
  return ListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1ListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1ListenerTlsFileCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ListenerTlsFileCertificate = (
  input: ListenerTlsFileCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
    ...(input.privateKey !== undefined && input.privateKey !== null && { privateKey: input.privateKey }),
  };
};

const serializeAws_restJson1Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.accessLog !== undefined &&
      input.accessLog !== null && { accessLog: serializeAws_restJson1AccessLog(input.accessLog, context) }),
  };
};

const serializeAws_restJson1MatchRange = (input: MatchRange, context: __SerdeContext): any => {
  return {
    ...(input.end !== undefined && input.end !== null && { end: input.end }),
    ...(input.start !== undefined && input.start !== null && { start: input.start }),
  };
};

const serializeAws_restJson1MeshSpec = (input: MeshSpec, context: __SerdeContext): any => {
  return {
    ...(input.egressFilter !== undefined &&
      input.egressFilter !== null && { egressFilter: serializeAws_restJson1EgressFilter(input.egressFilter, context) }),
  };
};

const serializeAws_restJson1PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
  };
};

const serializeAws_restJson1PortSet = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RouteSpec = (input: RouteSpec, context: __SerdeContext): any => {
  return {
    ...(input.grpcRoute !== undefined &&
      input.grpcRoute !== null && { grpcRoute: serializeAws_restJson1GrpcRoute(input.grpcRoute, context) }),
    ...(input.http2Route !== undefined &&
      input.http2Route !== null && { http2Route: serializeAws_restJson1HttpRoute(input.http2Route, context) }),
    ...(input.httpRoute !== undefined &&
      input.httpRoute !== null && { httpRoute: serializeAws_restJson1HttpRoute(input.httpRoute, context) }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.tcpRoute !== undefined &&
      input.tcpRoute !== null && { tcpRoute: serializeAws_restJson1TcpRoute(input.tcpRoute, context) }),
  };
};

const serializeAws_restJson1ServiceDiscovery = (input: ServiceDiscovery, context: __SerdeContext): any => {
  return ServiceDiscovery.visit(input, {
    awsCloudMap: (value) => ({ awsCloudMap: serializeAws_restJson1AwsCloudMapServiceDiscovery(value, context) }),
    dns: (value) => ({ dns: serializeAws_restJson1DnsServiceDiscovery(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: TagRef[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TagRef(entry, context);
    });
};

const serializeAws_restJson1TagRef = (input: TagRef, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1TcpRetryPolicyEvents = (
  input: (TcpRetryPolicyEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TcpRoute = (input: TcpRoute, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1TcpRouteAction(input.action, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1TcpTimeout(input.timeout, context) }),
  };
};

const serializeAws_restJson1TcpRouteAction = (input: TcpRouteAction, context: __SerdeContext): any => {
  return {
    ...(input.weightedTargets !== undefined &&
      input.weightedTargets !== null && {
        weightedTargets: serializeAws_restJson1WeightedTargets(input.weightedTargets, context),
      }),
  };
};

const serializeAws_restJson1TcpTimeout = (input: TcpTimeout, context: __SerdeContext): any => {
  return {
    ...(input.idle !== undefined &&
      input.idle !== null && { idle: serializeAws_restJson1Duration(input.idle, context) }),
  };
};

const serializeAws_restJson1TlsValidationContext = (input: TlsValidationContext, context: __SerdeContext): any => {
  return {
    ...(input.trust !== undefined &&
      input.trust !== null && { trust: serializeAws_restJson1TlsValidationContextTrust(input.trust, context) }),
  };
};

const serializeAws_restJson1TlsValidationContextAcmTrust = (
  input: TlsValidationContextAcmTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAuthorityArns !== undefined &&
      input.certificateAuthorityArns !== null && {
        certificateAuthorityArns: serializeAws_restJson1CertificateAuthorityArns(
          input.certificateAuthorityArns,
          context
        ),
      }),
  };
};

const serializeAws_restJson1TlsValidationContextFileTrust = (
  input: TlsValidationContextFileTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
  };
};

const serializeAws_restJson1TlsValidationContextTrust = (
  input: TlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return TlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1TlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1TlsValidationContextFileTrust(value, context) }),
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
    ...(input.clientPolicy !== undefined &&
      input.clientPolicy !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1VirtualGatewayClientPolicy = (
  input: VirtualGatewayClientPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1VirtualGatewayClientPolicyTls(input.tls, context) }),
  };
};

const serializeAws_restJson1VirtualGatewayClientPolicyTls = (
  input: VirtualGatewayClientPolicyTls,
  context: __SerdeContext
): any => {
  return {
    ...(input.enforce !== undefined && input.enforce !== null && { enforce: input.enforce }),
    ...(input.ports !== undefined &&
      input.ports !== null && { ports: serializeAws_restJson1PortSet(input.ports, context) }),
    ...(input.validation !== undefined &&
      input.validation !== null && {
        validation: serializeAws_restJson1VirtualGatewayTlsValidationContext(input.validation, context),
      }),
  };
};

const serializeAws_restJson1VirtualGatewayFileAccessLog = (
  input: VirtualGatewayFileAccessLog,
  context: __SerdeContext
): any => {
  return {
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
  };
};

const serializeAws_restJson1VirtualGatewayHealthCheckPolicy = (
  input: VirtualGatewayHealthCheckPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.healthyThreshold !== undefined &&
      input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }),
    ...(input.intervalMillis !== undefined &&
      input.intervalMillis !== null && { intervalMillis: input.intervalMillis }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    ...(input.timeoutMillis !== undefined && input.timeoutMillis !== null && { timeoutMillis: input.timeoutMillis }),
    ...(input.unhealthyThreshold !== undefined &&
      input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }),
  };
};

const serializeAws_restJson1VirtualGatewayListener = (input: VirtualGatewayListener, context: __SerdeContext): any => {
  return {
    ...(input.healthCheck !== undefined &&
      input.healthCheck !== null && {
        healthCheck: serializeAws_restJson1VirtualGatewayHealthCheckPolicy(input.healthCheck, context),
      }),
    ...(input.portMapping !== undefined &&
      input.portMapping !== null && {
        portMapping: serializeAws_restJson1VirtualGatewayPortMapping(input.portMapping, context),
      }),
    ...(input.tls !== undefined &&
      input.tls !== null && { tls: serializeAws_restJson1VirtualGatewayListenerTls(input.tls, context) }),
  };
};

const serializeAws_restJson1VirtualGatewayListeners = (
  input: VirtualGatewayListener[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};

const serializeAws_restJson1VirtualGatewayListenerTls = (
  input: VirtualGatewayListenerTls,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificate !== undefined &&
      input.certificate !== null && {
        certificate: serializeAws_restJson1VirtualGatewayListenerTlsCertificate(input.certificate, context),
      }),
    ...(input.mode !== undefined && input.mode !== null && { mode: input.mode }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = (
  input: VirtualGatewayListenerTlsAcmCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
  };
};

const serializeAws_restJson1VirtualGatewayListenerTlsCertificate = (
  input: VirtualGatewayListenerTlsCertificate,
  context: __SerdeContext
): any => {
  return VirtualGatewayListenerTlsCertificate.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = (
  input: VirtualGatewayListenerTlsFileCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
    ...(input.privateKey !== undefined && input.privateKey !== null && { privateKey: input.privateKey }),
  };
};

const serializeAws_restJson1VirtualGatewayLogging = (input: VirtualGatewayLogging, context: __SerdeContext): any => {
  return {
    ...(input.accessLog !== undefined &&
      input.accessLog !== null && {
        accessLog: serializeAws_restJson1VirtualGatewayAccessLog(input.accessLog, context),
      }),
  };
};

const serializeAws_restJson1VirtualGatewayPortMapping = (
  input: VirtualGatewayPortMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.port !== undefined && input.port !== null && { port: input.port }),
    ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
  };
};

const serializeAws_restJson1VirtualGatewaySpec = (input: VirtualGatewaySpec, context: __SerdeContext): any => {
  return {
    ...(input.backendDefaults !== undefined &&
      input.backendDefaults !== null && {
        backendDefaults: serializeAws_restJson1VirtualGatewayBackendDefaults(input.backendDefaults, context),
      }),
    ...(input.listeners !== undefined &&
      input.listeners !== null && {
        listeners: serializeAws_restJson1VirtualGatewayListeners(input.listeners, context),
      }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1VirtualGatewayLogging(input.logging, context) }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContext = (
  input: VirtualGatewayTlsValidationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.trust !== undefined &&
      input.trust !== null && {
        trust: serializeAws_restJson1VirtualGatewayTlsValidationContextTrust(input.trust, context),
      }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = (
  input: VirtualGatewayTlsValidationContextAcmTrust,
  context: __SerdeContext
): any => {
  return {
    ...(input.certificateAuthorityArns !== undefined &&
      input.certificateAuthorityArns !== null && {
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
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
  };
};

const serializeAws_restJson1VirtualGatewayTlsValidationContextTrust = (
  input: VirtualGatewayTlsValidationContextTrust,
  context: __SerdeContext
): any => {
  return VirtualGatewayTlsValidationContextTrust.visit(input, {
    acm: (value) => ({ acm: serializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(value, context) }),
    file: (value) => ({ file: serializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VirtualNodeServiceProvider = (
  input: VirtualNodeServiceProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualNodeName !== undefined &&
      input.virtualNodeName !== null && { virtualNodeName: input.virtualNodeName }),
  };
};

const serializeAws_restJson1VirtualNodeSpec = (input: VirtualNodeSpec, context: __SerdeContext): any => {
  return {
    ...(input.backendDefaults !== undefined &&
      input.backendDefaults !== null && {
        backendDefaults: serializeAws_restJson1BackendDefaults(input.backendDefaults, context),
      }),
    ...(input.backends !== undefined &&
      input.backends !== null && { backends: serializeAws_restJson1Backends(input.backends, context) }),
    ...(input.listeners !== undefined &&
      input.listeners !== null && { listeners: serializeAws_restJson1Listeners(input.listeners, context) }),
    ...(input.logging !== undefined &&
      input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.serviceDiscovery !== undefined &&
      input.serviceDiscovery !== null && {
        serviceDiscovery: serializeAws_restJson1ServiceDiscovery(input.serviceDiscovery, context),
      }),
  };
};

const serializeAws_restJson1VirtualRouterListener = (input: VirtualRouterListener, context: __SerdeContext): any => {
  return {
    ...(input.portMapping !== undefined &&
      input.portMapping !== null && { portMapping: serializeAws_restJson1PortMapping(input.portMapping, context) }),
  };
};

const serializeAws_restJson1VirtualRouterListeners = (input: VirtualRouterListener[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1VirtualRouterListener(entry, context);
    });
};

const serializeAws_restJson1VirtualRouterServiceProvider = (
  input: VirtualRouterServiceProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualRouterName !== undefined &&
      input.virtualRouterName !== null && { virtualRouterName: input.virtualRouterName }),
  };
};

const serializeAws_restJson1VirtualRouterSpec = (input: VirtualRouterSpec, context: __SerdeContext): any => {
  return {
    ...(input.listeners !== undefined &&
      input.listeners !== null && {
        listeners: serializeAws_restJson1VirtualRouterListeners(input.listeners, context),
      }),
  };
};

const serializeAws_restJson1VirtualServiceBackend = (input: VirtualServiceBackend, context: __SerdeContext): any => {
  return {
    ...(input.clientPolicy !== undefined &&
      input.clientPolicy !== null && { clientPolicy: serializeAws_restJson1ClientPolicy(input.clientPolicy, context) }),
    ...(input.virtualServiceName !== undefined &&
      input.virtualServiceName !== null && { virtualServiceName: input.virtualServiceName }),
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
    ...(input.provider !== undefined &&
      input.provider !== null && { provider: serializeAws_restJson1VirtualServiceProvider(input.provider, context) }),
  };
};

const serializeAws_restJson1WeightedTarget = (input: WeightedTarget, context: __SerdeContext): any => {
  return {
    ...(input.virtualNode !== undefined && input.virtualNode !== null && { virtualNode: input.virtualNode }),
    ...(input.weight !== undefined && input.weight !== null && { weight: input.weight }),
  };
};

const serializeAws_restJson1WeightedTargets = (input: WeightedTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1WeightedTarget(entry, context);
    });
};

const deserializeAws_restJson1AccessLog = (output: any, context: __SerdeContext): AccessLog => {
  if (output.file !== undefined && output.file !== null) {
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
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudMapInstanceAttributes = (
  output: any,
  context: __SerdeContext
): AwsCloudMapInstanceAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudMapInstanceAttribute(entry, context);
    });
};

const deserializeAws_restJson1AwsCloudMapServiceDiscovery = (
  output: any,
  context: __SerdeContext
): AwsCloudMapServiceDiscovery => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1AwsCloudMapInstanceAttributes(output.attributes, context)
        : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  } as any;
};

const deserializeAws_restJson1Backend = (output: any, context: __SerdeContext): Backend => {
  if (output.virtualService !== undefined && output.virtualService !== null) {
    return {
      virtualService: deserializeAws_restJson1VirtualServiceBackend(output.virtualService, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1BackendDefaults = (output: any, context: __SerdeContext): BackendDefaults => {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Backends = (output: any, context: __SerdeContext): Backend[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Backend(entry, context);
    });
};

const deserializeAws_restJson1CertificateAuthorityArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ClientPolicy = (output: any, context: __SerdeContext): ClientPolicy => {
  return {
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1ClientPolicyTls(output.tls, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ClientPolicyTls = (output: any, context: __SerdeContext): ClientPolicyTls => {
  return {
    enforce: output.enforce !== undefined && output.enforce !== null ? output.enforce : undefined,
    ports:
      output.ports !== undefined && output.ports !== null
        ? deserializeAws_restJson1PortSet(output.ports, context)
        : undefined,
    validation:
      output.validation !== undefined && output.validation !== null
        ? deserializeAws_restJson1TlsValidationContext(output.validation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DnsServiceDiscovery = (output: any, context: __SerdeContext): DnsServiceDiscovery => {
  return {
    hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
  } as any;
};

const deserializeAws_restJson1Duration = (output: any, context: __SerdeContext): Duration => {
  return {
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1EgressFilter = (output: any, context: __SerdeContext): EgressFilter => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_restJson1FileAccessLog = (output: any, context: __SerdeContext): FileAccessLog => {
  return {
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteData = (output: any, context: __SerdeContext): GatewayRouteData => {
  return {
    gatewayRouteName:
      output.gatewayRouteName !== undefined && output.gatewayRouteName !== null ? output.gatewayRouteName : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1GatewayRouteSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1GatewayRouteStatus(output.status, context)
        : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteList = (output: any, context: __SerdeContext): GatewayRouteRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GatewayRouteRef(entry, context);
    });
};

const deserializeAws_restJson1GatewayRouteRef = (output: any, context: __SerdeContext): GatewayRouteRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    gatewayRouteName:
      output.gatewayRouteName !== undefined && output.gatewayRouteName !== null ? output.gatewayRouteName : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteSpec = (output: any, context: __SerdeContext): GatewayRouteSpec => {
  return {
    grpcRoute:
      output.grpcRoute !== undefined && output.grpcRoute !== null
        ? deserializeAws_restJson1GrpcGatewayRoute(output.grpcRoute, context)
        : undefined,
    http2Route:
      output.http2Route !== undefined && output.http2Route !== null
        ? deserializeAws_restJson1HttpGatewayRoute(output.http2Route, context)
        : undefined,
    httpRoute:
      output.httpRoute !== undefined && output.httpRoute !== null
        ? deserializeAws_restJson1HttpGatewayRoute(output.httpRoute, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteStatus = (output: any, context: __SerdeContext): GatewayRouteStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteTarget = (output: any, context: __SerdeContext): GatewayRouteTarget => {
  return {
    virtualService:
      output.virtualService !== undefined && output.virtualService !== null
        ? deserializeAws_restJson1GatewayRouteVirtualService(output.virtualService, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GatewayRouteVirtualService = (
  output: any,
  context: __SerdeContext
): GatewayRouteVirtualService => {
  return {
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRoute = (output: any, context: __SerdeContext): GrpcGatewayRoute => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1GrpcGatewayRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcGatewayRouteMatch(output.match, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRouteAction = (
  output: any,
  context: __SerdeContext
): GrpcGatewayRouteAction => {
  return {
    target:
      output.target !== undefined && output.target !== null
        ? deserializeAws_restJson1GatewayRouteTarget(output.target, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcGatewayRouteMatch = (output: any, context: __SerdeContext): GrpcGatewayRouteMatch => {
  return {
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRetryPolicy = (output: any, context: __SerdeContext): GrpcRetryPolicy => {
  return {
    grpcRetryEvents:
      output.grpcRetryEvents !== undefined && output.grpcRetryEvents !== null
        ? deserializeAws_restJson1GrpcRetryPolicyEvents(output.grpcRetryEvents, context)
        : undefined,
    httpRetryEvents:
      output.httpRetryEvents !== undefined && output.httpRetryEvents !== null
        ? deserializeAws_restJson1HttpRetryPolicyEvents(output.httpRetryEvents, context)
        : undefined,
    maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
    perRetryTimeout:
      output.perRetryTimeout !== undefined && output.perRetryTimeout !== null
        ? deserializeAws_restJson1Duration(output.perRetryTimeout, context)
        : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null
        ? deserializeAws_restJson1TcpRetryPolicyEvents(output.tcpRetryEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): (GrpcRetryPolicyEvent | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1GrpcRoute = (output: any, context: __SerdeContext): GrpcRoute => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1GrpcRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcRouteMatch(output.match, context)
        : undefined,
    retryPolicy:
      output.retryPolicy !== undefined && output.retryPolicy !== null
        ? deserializeAws_restJson1GrpcRetryPolicy(output.retryPolicy, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1GrpcTimeout(output.timeout, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRouteAction = (output: any, context: __SerdeContext): GrpcRouteAction => {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRouteMatch = (output: any, context: __SerdeContext): GrpcRouteMatch => {
  return {
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1GrpcRouteMetadataList(output.metadata, context)
        : undefined,
    methodName: output.methodName !== undefined && output.methodName !== null ? output.methodName : undefined,
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRouteMetadata = (output: any, context: __SerdeContext): GrpcRouteMetadata => {
  return {
    invert: output.invert !== undefined && output.invert !== null ? output.invert : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1GrpcRouteMetadataMatchMethod(output.match, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1GrpcRouteMetadataList = (output: any, context: __SerdeContext): GrpcRouteMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GrpcRouteMetadata(entry, context);
    });
};

const deserializeAws_restJson1GrpcRouteMetadataMatchMethod = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadataMatchMethod => {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact,
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix,
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex,
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1GrpcTimeout = (output: any, context: __SerdeContext): GrpcTimeout => {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
    perRequest:
      output.perRequest !== undefined && output.perRequest !== null
        ? deserializeAws_restJson1Duration(output.perRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HeaderMatchMethod = (output: any, context: __SerdeContext): HeaderMatchMethod => {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact,
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix,
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1MatchRange(output.range, context),
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex,
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1HealthCheckPolicy = (output: any, context: __SerdeContext): HealthCheckPolicy => {
  return {
    healthyThreshold:
      output.healthyThreshold !== undefined && output.healthyThreshold !== null ? output.healthyThreshold : undefined,
    intervalMillis:
      output.intervalMillis !== undefined && output.intervalMillis !== null ? output.intervalMillis : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    timeoutMillis:
      output.timeoutMillis !== undefined && output.timeoutMillis !== null ? output.timeoutMillis : undefined,
    unhealthyThreshold:
      output.unhealthyThreshold !== undefined && output.unhealthyThreshold !== null
        ? output.unhealthyThreshold
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpGatewayRoute = (output: any, context: __SerdeContext): HttpGatewayRoute => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1HttpGatewayRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HttpGatewayRouteMatch(output.match, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpGatewayRouteAction = (
  output: any,
  context: __SerdeContext
): HttpGatewayRouteAction => {
  return {
    target:
      output.target !== undefined && output.target !== null
        ? deserializeAws_restJson1GatewayRouteTarget(output.target, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpGatewayRouteMatch = (output: any, context: __SerdeContext): HttpGatewayRouteMatch => {
  return {
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRetryPolicy = (output: any, context: __SerdeContext): HttpRetryPolicy => {
  return {
    httpRetryEvents:
      output.httpRetryEvents !== undefined && output.httpRetryEvents !== null
        ? deserializeAws_restJson1HttpRetryPolicyEvents(output.httpRetryEvents, context)
        : undefined,
    maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
    perRetryTimeout:
      output.perRetryTimeout !== undefined && output.perRetryTimeout !== null
        ? deserializeAws_restJson1Duration(output.perRetryTimeout, context)
        : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null
        ? deserializeAws_restJson1TcpRetryPolicyEvents(output.tcpRetryEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRetryPolicyEvents = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1HttpRoute = (output: any, context: __SerdeContext): HttpRoute => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1HttpRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HttpRouteMatch(output.match, context)
        : undefined,
    retryPolicy:
      output.retryPolicy !== undefined && output.retryPolicy !== null
        ? deserializeAws_restJson1HttpRetryPolicy(output.retryPolicy, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1HttpTimeout(output.timeout, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRouteAction = (output: any, context: __SerdeContext): HttpRouteAction => {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRouteHeader = (output: any, context: __SerdeContext): HttpRouteHeader => {
  return {
    invert: output.invert !== undefined && output.invert !== null ? output.invert : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1HeaderMatchMethod(output.match, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1HttpRouteHeaders = (output: any, context: __SerdeContext): HttpRouteHeader[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HttpRouteHeader(entry, context);
    });
};

const deserializeAws_restJson1HttpRouteMatch = (output: any, context: __SerdeContext): HttpRouteMatch => {
  return {
    headers:
      output.headers !== undefined && output.headers !== null
        ? deserializeAws_restJson1HttpRouteHeaders(output.headers, context)
        : undefined,
    method: output.method !== undefined && output.method !== null ? output.method : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
    scheme: output.scheme !== undefined && output.scheme !== null ? output.scheme : undefined,
  } as any;
};

const deserializeAws_restJson1HttpTimeout = (output: any, context: __SerdeContext): HttpTimeout => {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
    perRequest:
      output.perRequest !== undefined && output.perRequest !== null
        ? deserializeAws_restJson1Duration(output.perRequest, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Listener = (output: any, context: __SerdeContext): Listener => {
  return {
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_restJson1HealthCheckPolicy(output.healthCheck, context)
        : undefined,
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1PortMapping(output.portMapping, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1ListenerTimeout(output.timeout, context)
        : undefined,
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1ListenerTls(output.tls, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Listeners = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Listener(entry, context);
    });
};

const deserializeAws_restJson1ListenerTimeout = (output: any, context: __SerdeContext): ListenerTimeout => {
  if (output.grpc !== undefined && output.grpc !== null) {
    return {
      grpc: deserializeAws_restJson1GrpcTimeout(output.grpc, context),
    };
  }
  if (output.http !== undefined && output.http !== null) {
    return {
      http: deserializeAws_restJson1HttpTimeout(output.http, context),
    };
  }
  if (output.http2 !== undefined && output.http2 !== null) {
    return {
      http2: deserializeAws_restJson1HttpTimeout(output.http2, context),
    };
  }
  if (output.tcp !== undefined && output.tcp !== null) {
    return {
      tcp: deserializeAws_restJson1TcpTimeout(output.tcp, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ListenerTls = (output: any, context: __SerdeContext): ListenerTls => {
  return {
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_restJson1ListenerTlsCertificate(output.certificate, context)
        : undefined,
    mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
  } as any;
};

const deserializeAws_restJson1ListenerTlsAcmCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsAcmCertificate => {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
  } as any;
};

const deserializeAws_restJson1ListenerTlsCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsCertificate => {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1ListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1ListenerTlsFileCertificate(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ListenerTlsFileCertificate = (
  output: any,
  context: __SerdeContext
): ListenerTlsFileCertificate => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
  } as any;
};

const deserializeAws_restJson1Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1AccessLog(output.accessLog, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MatchRange = (output: any, context: __SerdeContext): MatchRange => {
  return {
    end: output.end !== undefined && output.end !== null ? output.end : undefined,
    start: output.start !== undefined && output.start !== null ? output.start : undefined,
  } as any;
};

const deserializeAws_restJson1MeshData = (output: any, context: __SerdeContext): MeshData => {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1MeshSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1MeshStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MeshList = (output: any, context: __SerdeContext): MeshRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MeshRef(entry, context);
    });
};

const deserializeAws_restJson1MeshRef = (output: any, context: __SerdeContext): MeshRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1MeshSpec = (output: any, context: __SerdeContext): MeshSpec => {
  return {
    egressFilter:
      output.egressFilter !== undefined && output.egressFilter !== null
        ? deserializeAws_restJson1EgressFilter(output.egressFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MeshStatus = (output: any, context: __SerdeContext): MeshStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  } as any;
};

const deserializeAws_restJson1PortSet = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ResourceMetadata = (output: any, context: __SerdeContext): ResourceMetadata => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    uid: output.uid !== undefined && output.uid !== null ? output.uid : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1RouteData = (output: any, context: __SerdeContext): RouteData => {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    routeName: output.routeName !== undefined && output.routeName !== null ? output.routeName : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1RouteSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1RouteStatus(output.status, context)
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  } as any;
};

const deserializeAws_restJson1RouteList = (output: any, context: __SerdeContext): RouteRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteRef(entry, context);
    });
};

const deserializeAws_restJson1RouteRef = (output: any, context: __SerdeContext): RouteRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    routeName: output.routeName !== undefined && output.routeName !== null ? output.routeName : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  } as any;
};

const deserializeAws_restJson1RouteSpec = (output: any, context: __SerdeContext): RouteSpec => {
  return {
    grpcRoute:
      output.grpcRoute !== undefined && output.grpcRoute !== null
        ? deserializeAws_restJson1GrpcRoute(output.grpcRoute, context)
        : undefined,
    http2Route:
      output.http2Route !== undefined && output.http2Route !== null
        ? deserializeAws_restJson1HttpRoute(output.http2Route, context)
        : undefined,
    httpRoute:
      output.httpRoute !== undefined && output.httpRoute !== null
        ? deserializeAws_restJson1HttpRoute(output.httpRoute, context)
        : undefined,
    priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    tcpRoute:
      output.tcpRoute !== undefined && output.tcpRoute !== null
        ? deserializeAws_restJson1TcpRoute(output.tcpRoute, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RouteStatus = (output: any, context: __SerdeContext): RouteStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceDiscovery = (output: any, context: __SerdeContext): ServiceDiscovery => {
  if (output.awsCloudMap !== undefined && output.awsCloudMap !== null) {
    return {
      awsCloudMap: deserializeAws_restJson1AwsCloudMapServiceDiscovery(output.awsCloudMap, context),
    };
  }
  if (output.dns !== undefined && output.dns !== null) {
    return {
      dns: deserializeAws_restJson1DnsServiceDiscovery(output.dns, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): TagRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TagRef(entry, context);
    });
};

const deserializeAws_restJson1TagRef = (output: any, context: __SerdeContext): TagRef => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1TcpRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): (TcpRetryPolicyEvent | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1TcpRoute = (output: any, context: __SerdeContext): TcpRoute => {
  return {
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1TcpRouteAction(output.action, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1TcpTimeout(output.timeout, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TcpRouteAction = (output: any, context: __SerdeContext): TcpRouteAction => {
  return {
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1WeightedTargets(output.weightedTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TcpTimeout = (output: any, context: __SerdeContext): TcpTimeout => {
  return {
    idle:
      output.idle !== undefined && output.idle !== null
        ? deserializeAws_restJson1Duration(output.idle, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContext = (output: any, context: __SerdeContext): TlsValidationContext => {
  return {
    trust:
      output.trust !== undefined && output.trust !== null
        ? deserializeAws_restJson1TlsValidationContextTrust(output.trust, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContextAcmTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextAcmTrust => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns !== undefined && output.certificateAuthorityArns !== null
        ? deserializeAws_restJson1CertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContextFileTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextFileTrust => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
  } as any;
};

const deserializeAws_restJson1TlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): TlsValidationContextTrust => {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1TlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1TlsValidationContextFileTrust(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayAccessLog = (
  output: any,
  context: __SerdeContext
): VirtualGatewayAccessLog => {
  if (output.file !== undefined && output.file !== null) {
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
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1VirtualGatewayClientPolicy(output.clientPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1VirtualGatewayClientPolicy = (
  output: any,
  context: __SerdeContext
): VirtualGatewayClientPolicy => {
  return {
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1VirtualGatewayClientPolicyTls(output.tls, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayClientPolicyTls = (
  output: any,
  context: __SerdeContext
): VirtualGatewayClientPolicyTls => {
  return {
    enforce: output.enforce !== undefined && output.enforce !== null ? output.enforce : undefined,
    ports:
      output.ports !== undefined && output.ports !== null
        ? deserializeAws_restJson1PortSet(output.ports, context)
        : undefined,
    validation:
      output.validation !== undefined && output.validation !== null
        ? deserializeAws_restJson1VirtualGatewayTlsValidationContext(output.validation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayData = (output: any, context: __SerdeContext): VirtualGatewayData => {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualGatewaySpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualGatewayStatus(output.status, context)
        : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayFileAccessLog = (
  output: any,
  context: __SerdeContext
): VirtualGatewayFileAccessLog => {
  return {
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayHealthCheckPolicy = (
  output: any,
  context: __SerdeContext
): VirtualGatewayHealthCheckPolicy => {
  return {
    healthyThreshold:
      output.healthyThreshold !== undefined && output.healthyThreshold !== null ? output.healthyThreshold : undefined,
    intervalMillis:
      output.intervalMillis !== undefined && output.intervalMillis !== null ? output.intervalMillis : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    timeoutMillis:
      output.timeoutMillis !== undefined && output.timeoutMillis !== null ? output.timeoutMillis : undefined,
    unhealthyThreshold:
      output.unhealthyThreshold !== undefined && output.unhealthyThreshold !== null
        ? output.unhealthyThreshold
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayList = (output: any, context: __SerdeContext): VirtualGatewayRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualGatewayRef(entry, context);
    });
};

const deserializeAws_restJson1VirtualGatewayListener = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListener => {
  return {
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_restJson1VirtualGatewayHealthCheckPolicy(output.healthCheck, context)
        : undefined,
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1VirtualGatewayPortMapping(output.portMapping, context)
        : undefined,
    tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1VirtualGatewayListenerTls(output.tls, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListeners = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualGatewayListener(entry, context);
    });
};

const deserializeAws_restJson1VirtualGatewayListenerTls = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTls => {
  return {
    certificate:
      output.certificate !== undefined && output.certificate !== null
        ? deserializeAws_restJson1VirtualGatewayListenerTlsCertificate(output.certificate, context)
        : undefined,
    mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsAcmCertificate => {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayListenerTlsCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsCertificate => {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1VirtualGatewayListenerTlsAcmCertificate(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualGatewayListenerTlsFileCertificate = (
  output: any,
  context: __SerdeContext
): VirtualGatewayListenerTlsFileCertificate => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
    privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayLogging = (output: any, context: __SerdeContext): VirtualGatewayLogging => {
  return {
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1VirtualGatewayAccessLog(output.accessLog, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayPortMapping = (
  output: any,
  context: __SerdeContext
): VirtualGatewayPortMapping => {
  return {
    port: output.port !== undefined && output.port !== null ? output.port : undefined,
    protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayRef = (output: any, context: __SerdeContext): VirtualGatewayRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualGatewayName:
      output.virtualGatewayName !== undefined && output.virtualGatewayName !== null
        ? output.virtualGatewayName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewaySpec = (output: any, context: __SerdeContext): VirtualGatewaySpec => {
  return {
    backendDefaults:
      output.backendDefaults !== undefined && output.backendDefaults !== null
        ? deserializeAws_restJson1VirtualGatewayBackendDefaults(output.backendDefaults, context)
        : undefined,
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1VirtualGatewayListeners(output.listeners, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1VirtualGatewayLogging(output.logging, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayStatus = (output: any, context: __SerdeContext): VirtualGatewayStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContext = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContext => {
  return {
    trust:
      output.trust !== undefined && output.trust !== null
        ? deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust(output.trust, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextAcmTrust => {
  return {
    certificateAuthorityArns:
      output.certificateAuthorityArns !== undefined && output.certificateAuthorityArns !== null
        ? deserializeAws_restJson1VirtualGatewayCertificateAuthorityArns(output.certificateAuthorityArns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextFileTrust => {
  return {
    certificateChain:
      output.certificateChain !== undefined && output.certificateChain !== null ? output.certificateChain : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualGatewayTlsValidationContextTrust = (
  output: any,
  context: __SerdeContext
): VirtualGatewayTlsValidationContextTrust => {
  if (output.acm !== undefined && output.acm !== null) {
    return {
      acm: deserializeAws_restJson1VirtualGatewayTlsValidationContextAcmTrust(output.acm, context),
    };
  }
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1VirtualGatewayTlsValidationContextFileTrust(output.file, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualNodeData = (output: any, context: __SerdeContext): VirtualNodeData => {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualNodeSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualNodeStatus(output.status, context)
        : undefined,
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualNodeList = (output: any, context: __SerdeContext): VirtualNodeRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualNodeRef(entry, context);
    });
};

const deserializeAws_restJson1VirtualNodeRef = (output: any, context: __SerdeContext): VirtualNodeRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualNodeServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualNodeServiceProvider => {
  return {
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null ? output.virtualNodeName : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualNodeSpec = (output: any, context: __SerdeContext): VirtualNodeSpec => {
  return {
    backendDefaults:
      output.backendDefaults !== undefined && output.backendDefaults !== null
        ? deserializeAws_restJson1BackendDefaults(output.backendDefaults, context)
        : undefined,
    backends:
      output.backends !== undefined && output.backends !== null
        ? deserializeAws_restJson1Backends(output.backends, context)
        : undefined,
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1Listeners(output.listeners, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1Logging(output.logging, context)
        : undefined,
    serviceDiscovery:
      output.serviceDiscovery !== undefined && output.serviceDiscovery !== null
        ? deserializeAws_restJson1ServiceDiscovery(output.serviceDiscovery, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualNodeStatus = (output: any, context: __SerdeContext): VirtualNodeStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterData = (output: any, context: __SerdeContext): VirtualRouterData => {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualRouterSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualRouterStatus(output.status, context)
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterList = (output: any, context: __SerdeContext): VirtualRouterRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualRouterRef(entry, context);
    });
};

const deserializeAws_restJson1VirtualRouterListener = (output: any, context: __SerdeContext): VirtualRouterListener => {
  return {
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1PortMapping(output.portMapping, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterListeners = (
  output: any,
  context: __SerdeContext
): VirtualRouterListener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualRouterListener(entry, context);
    });
};

const deserializeAws_restJson1VirtualRouterRef = (output: any, context: __SerdeContext): VirtualRouterRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualRouterServiceProvider => {
  return {
    virtualRouterName:
      output.virtualRouterName !== undefined && output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterSpec = (output: any, context: __SerdeContext): VirtualRouterSpec => {
  return {
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1VirtualRouterListeners(output.listeners, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualRouterStatus = (output: any, context: __SerdeContext): VirtualRouterStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualServiceBackend = (output: any, context: __SerdeContext): VirtualServiceBackend => {
  return {
    clientPolicy:
      output.clientPolicy !== undefined && output.clientPolicy !== null
        ? deserializeAws_restJson1ClientPolicy(output.clientPolicy, context)
        : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualServiceData = (output: any, context: __SerdeContext): VirtualServiceData => {
  return {
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1VirtualServiceSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1VirtualServiceStatus(output.status, context)
        : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualServiceList = (output: any, context: __SerdeContext): VirtualServiceRef[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualServiceRef(entry, context);
    });
};

const deserializeAws_restJson1VirtualServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualServiceProvider => {
  if (output.virtualNode !== undefined && output.virtualNode !== null) {
    return {
      virtualNode: deserializeAws_restJson1VirtualNodeServiceProvider(output.virtualNode, context),
    };
  }
  if (output.virtualRouter !== undefined && output.virtualRouter !== null) {
    return {
      virtualRouter: deserializeAws_restJson1VirtualRouterServiceProvider(output.virtualRouter, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VirtualServiceRef = (output: any, context: __SerdeContext): VirtualServiceRef => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    meshName: output.meshName !== undefined && output.meshName !== null ? output.meshName : undefined,
    meshOwner: output.meshOwner !== undefined && output.meshOwner !== null ? output.meshOwner : undefined,
    resourceOwner:
      output.resourceOwner !== undefined && output.resourceOwner !== null ? output.resourceOwner : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined && output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualServiceSpec = (output: any, context: __SerdeContext): VirtualServiceSpec => {
  return {
    provider:
      output.provider !== undefined && output.provider !== null
        ? deserializeAws_restJson1VirtualServiceProvider(output.provider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualServiceStatus = (output: any, context: __SerdeContext): VirtualServiceStatus => {
  return {
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1WeightedTarget = (output: any, context: __SerdeContext): WeightedTarget => {
  return {
    virtualNode: output.virtualNode !== undefined && output.virtualNode !== null ? output.virtualNode : undefined,
    weight: output.weight !== undefined && output.weight !== null ? output.weight : undefined,
  } as any;
};

const deserializeAws_restJson1WeightedTargets = (output: any, context: __SerdeContext): WeightedTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WeightedTarget(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
