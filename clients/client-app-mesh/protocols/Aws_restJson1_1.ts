import {
  CreateMeshCommandInput,
  CreateMeshCommandOutput
} from "../commands/CreateMeshCommand";
import {
  CreateRouteCommandInput,
  CreateRouteCommandOutput
} from "../commands/CreateRouteCommand";
import {
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput
} from "../commands/CreateVirtualNodeCommand";
import {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput
} from "../commands/CreateVirtualRouterCommand";
import {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput
} from "../commands/CreateVirtualServiceCommand";
import {
  DeleteMeshCommandInput,
  DeleteMeshCommandOutput
} from "../commands/DeleteMeshCommand";
import {
  DeleteRouteCommandInput,
  DeleteRouteCommandOutput
} from "../commands/DeleteRouteCommand";
import {
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput
} from "../commands/DeleteVirtualNodeCommand";
import {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput
} from "../commands/DeleteVirtualRouterCommand";
import {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput
} from "../commands/DeleteVirtualServiceCommand";
import {
  DescribeMeshCommandInput,
  DescribeMeshCommandOutput
} from "../commands/DescribeMeshCommand";
import {
  DescribeRouteCommandInput,
  DescribeRouteCommandOutput
} from "../commands/DescribeRouteCommand";
import {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput
} from "../commands/DescribeVirtualNodeCommand";
import {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput
} from "../commands/DescribeVirtualRouterCommand";
import {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput
} from "../commands/DescribeVirtualServiceCommand";
import {
  ListMeshesCommandInput,
  ListMeshesCommandOutput
} from "../commands/ListMeshesCommand";
import {
  ListRoutesCommandInput,
  ListRoutesCommandOutput
} from "../commands/ListRoutesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput
} from "../commands/ListVirtualNodesCommand";
import {
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput
} from "../commands/ListVirtualRoutersCommand";
import {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput
} from "../commands/ListVirtualServicesCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateMeshCommandInput,
  UpdateMeshCommandOutput
} from "../commands/UpdateMeshCommand";
import {
  UpdateRouteCommandInput,
  UpdateRouteCommandOutput
} from "../commands/UpdateRouteCommand";
import {
  UpdateVirtualNodeCommandInput,
  UpdateVirtualNodeCommandOutput
} from "../commands/UpdateVirtualNodeCommand";
import {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput
} from "../commands/UpdateVirtualRouterCommand";
import {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput
} from "../commands/UpdateVirtualServiceCommand";
import {
  AccessLog,
  AwsCloudMapInstanceAttribute,
  AwsCloudMapServiceDiscovery,
  Backend,
  BadRequestException,
  ConflictException,
  DnsServiceDiscovery,
  Duration,
  EgressFilter,
  FileAccessLog,
  ForbiddenException,
  GrpcRetryPolicy,
  GrpcRetryPolicyEvent,
  GrpcRoute,
  GrpcRouteAction,
  GrpcRouteMatch,
  GrpcRouteMetadata,
  GrpcRouteMetadataMatchMethod,
  HeaderMatchMethod,
  HealthCheckPolicy,
  HttpRetryPolicy,
  HttpRoute,
  HttpRouteAction,
  HttpRouteHeader,
  HttpRouteMatch,
  InternalServerErrorException,
  LimitExceededException,
  Listener,
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
  TooManyRequestsException,
  TooManyTagsException,
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
  WeightedTarget
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1CreateMeshCommand(
  input: CreateMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/meshes";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.meshName !== undefined) {
    bodyParams["meshName"] = input.meshName;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1MeshSpec(input.spec, context);
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateRouteCommand(
  input: CreateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.routeName !== undefined) {
    bodyParams["routeName"] = input.routeName;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1RouteSpec(input.spec, context);
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateVirtualNodeCommand(
  input: CreateVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1VirtualNodeSpec(
      input.spec,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  if (input.virtualNodeName !== undefined) {
    bodyParams["virtualNodeName"] = input.virtualNodeName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateVirtualRouterCommand(
  input: CreateVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1VirtualRouterSpec(
      input.spec,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  if (input.virtualRouterName !== undefined) {
    bodyParams["virtualRouterName"] = input.virtualRouterName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateVirtualServiceCommand(
  input: CreateVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1VirtualServiceSpec(
      input.spec,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  if (input.virtualServiceName !== undefined) {
    bodyParams["virtualServiceName"] = input.virtualServiceName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteMeshCommand(
  input: DeleteMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteRouteCommand(
  input: DeleteRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{routeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteVirtualNodeCommand(
  input: DeleteVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualNodeName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualNodeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteVirtualRouterCommand(
  input: DeleteVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteVirtualServiceCommand(
  input: DeleteVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualServiceName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualServiceName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualServiceName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMeshCommand(
  input: DescribeMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeRouteCommand(
  input: DescribeRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{routeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeVirtualNodeCommand(
  input: DescribeVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualNodeName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualNodeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeVirtualRouterCommand(
  input: DescribeVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeVirtualServiceCommand(
  input: DescribeVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualServiceName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualServiceName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualServiceName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListMeshesCommand(
  input: ListMeshesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/meshes";
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListRoutesCommand(
  input: ListRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/tags";
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListVirtualNodesCommand(
  input: ListVirtualNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListVirtualRoutersCommand(
  input: ListVirtualRoutersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListVirtualServicesCommand(
  input: ListVirtualServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/tag";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/untag";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_restJson1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateMeshCommand(
  input: UpdateMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1MeshSpec(input.spec, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateRouteCommand(
  input: UpdateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{routeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1RouteSpec(input.spec, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateVirtualNodeCommand(
  input: UpdateVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualNodeName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualNodeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1VirtualNodeSpec(
      input.spec,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateVirtualRouterCommand(
  input: UpdateVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1VirtualRouterSpec(
      input.spec,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateVirtualServiceCommand(
  input: UpdateVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualServiceName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualServiceName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualServiceName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.spec !== undefined) {
    bodyParams["spec"] = serializeAws_restJson1_1VirtualServiceSpec(
      input.spec,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateMeshCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMeshCommandError(output, context);
  }
  const contents: CreateMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMeshCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRouteCommandError(output, context);
  }
  const contents: CreateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateVirtualNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: CreateVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateVirtualNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateVirtualRouterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: CreateVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateVirtualRouterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateVirtualServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: CreateVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateVirtualServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteMeshCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMeshCommandError(output, context);
  }
  const contents: DeleteMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMeshCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRouteCommandError(output, context);
  }
  const contents: DeleteRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteVirtualNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: DeleteVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteVirtualNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteVirtualRouterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: DeleteVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteVirtualRouterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteVirtualServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: DeleteVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteVirtualServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeMeshCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeMeshCommandError(output, context);
  }
  const contents: DescribeMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMeshCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRouteCommandError(output, context);
  }
  const contents: DescribeRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeVirtualNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: DescribeVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeVirtualNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeVirtualRouterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: DescribeVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeVirtualRouterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeVirtualServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: DescribeVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeVirtualServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListMeshesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMeshesCommandError(output, context);
  }
  const contents: ListMeshesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMeshesOutput",
    meshes: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.meshes !== undefined && data.meshes !== null) {
    contents.meshes = deserializeAws_restJson1_1MeshList(data.meshes, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMeshesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListRoutesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRoutesCommandError(output, context);
  }
  const contents: ListRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRoutesOutput",
    nextToken: undefined,
    routes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.routes !== undefined && data.routes !== null) {
    contents.routes = deserializeAws_restJson1_1RouteList(data.routes, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRoutesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    nextToken: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListVirtualNodesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVirtualNodesCommandError(
      output,
      context
    );
  }
  const contents: ListVirtualNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualNodesOutput",
    nextToken: undefined,
    virtualNodes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualNodes !== undefined && data.virtualNodes !== null) {
    contents.virtualNodes = deserializeAws_restJson1_1VirtualNodeList(
      data.virtualNodes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListVirtualNodesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListVirtualRoutersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVirtualRoutersCommandError(
      output,
      context
    );
  }
  const contents: ListVirtualRoutersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualRoutersOutput",
    nextToken: undefined,
    virtualRouters: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualRouters !== undefined && data.virtualRouters !== null) {
    contents.virtualRouters = deserializeAws_restJson1_1VirtualRouterList(
      data.virtualRouters,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListVirtualRoutersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListVirtualServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVirtualServicesCommandError(
      output,
      context
    );
  }
  const contents: ListVirtualServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualServicesOutput",
    nextToken: undefined,
    virtualServices: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualServices !== undefined && data.virtualServices !== null) {
    contents.virtualServices = deserializeAws_restJson1_1VirtualServiceList(
      data.virtualServices,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListVirtualServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.lattice.v20190125#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyTagsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateMeshCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateMeshCommandError(output, context);
  }
  const contents: UpdateMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateMeshCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateRouteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRouteCommandError(output, context);
  }
  const contents: UpdateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRouteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateVirtualNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: UpdateVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateVirtualNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateVirtualRouterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: UpdateVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateVirtualRouterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateVirtualServiceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: UpdateVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateVirtualServiceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyTagsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AccessLog = (
  input: AccessLog,
  context: __SerdeContext
): any => {
  return AccessLog.visit(input, {
    file: value => serializeAws_restJson1_1FileAccessLog(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1AwsCloudMapInstanceAttribute = (
  input: AwsCloudMapInstanceAttribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsCloudMapInstanceAttributes = (
  input: Array<AwsCloudMapInstanceAttribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1AwsCloudMapInstanceAttribute(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1AwsCloudMapServiceDiscovery = (
  input: AwsCloudMapServiceDiscovery,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams[
      "attributes"
    ] = serializeAws_restJson1_1AwsCloudMapInstanceAttributes(
      input.attributes,
      context
    );
  }
  if (input.namespaceName !== undefined) {
    bodyParams["namespaceName"] = input.namespaceName;
  }
  if (input.serviceName !== undefined) {
    bodyParams["serviceName"] = input.serviceName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Backend = (
  input: Backend,
  context: __SerdeContext
): any => {
  return Backend.visit(input, {
    virtualService: value =>
      serializeAws_restJson1_1VirtualServiceBackend(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1Backends = (
  input: Array<Backend>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Backend(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1DnsServiceDiscovery = (
  input: DnsServiceDiscovery,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.hostname !== undefined) {
    bodyParams["hostname"] = input.hostname;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Duration = (
  input: Duration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.unit !== undefined) {
    bodyParams["unit"] = input.unit;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EgressFilter = (
  input: EgressFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FileAccessLog = (
  input: FileAccessLog,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.path !== undefined) {
    bodyParams["path"] = input.path;
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrpcRetryPolicy = (
  input: GrpcRetryPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.grpcRetryEvents !== undefined) {
    bodyParams[
      "grpcRetryEvents"
    ] = serializeAws_restJson1_1GrpcRetryPolicyEvents(
      input.grpcRetryEvents,
      context
    );
  }
  if (input.httpRetryEvents !== undefined) {
    bodyParams[
      "httpRetryEvents"
    ] = serializeAws_restJson1_1HttpRetryPolicyEvents(
      input.httpRetryEvents,
      context
    );
  }
  if (input.maxRetries !== undefined) {
    bodyParams["maxRetries"] = input.maxRetries;
  }
  if (input.perRetryTimeout !== undefined) {
    bodyParams["perRetryTimeout"] = serializeAws_restJson1_1Duration(
      input.perRetryTimeout,
      context
    );
  }
  if (input.tcpRetryEvents !== undefined) {
    bodyParams["tcpRetryEvents"] = serializeAws_restJson1_1TcpRetryPolicyEvents(
      input.tcpRetryEvents,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrpcRetryPolicyEvents = (
  input: Array<GrpcRetryPolicyEvent | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1GrpcRoute = (
  input: GrpcRoute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.action !== undefined) {
    bodyParams["action"] = serializeAws_restJson1_1GrpcRouteAction(
      input.action,
      context
    );
  }
  if (input.match !== undefined) {
    bodyParams["match"] = serializeAws_restJson1_1GrpcRouteMatch(
      input.match,
      context
    );
  }
  if (input.retryPolicy !== undefined) {
    bodyParams["retryPolicy"] = serializeAws_restJson1_1GrpcRetryPolicy(
      input.retryPolicy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrpcRouteAction = (
  input: GrpcRouteAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.weightedTargets !== undefined) {
    bodyParams["weightedTargets"] = serializeAws_restJson1_1WeightedTargets(
      input.weightedTargets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrpcRouteMatch = (
  input: GrpcRouteMatch,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.metadata !== undefined) {
    bodyParams["metadata"] = serializeAws_restJson1_1GrpcRouteMetadataList(
      input.metadata,
      context
    );
  }
  if (input.methodName !== undefined) {
    bodyParams["methodName"] = input.methodName;
  }
  if (input.serviceName !== undefined) {
    bodyParams["serviceName"] = input.serviceName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrpcRouteMetadata = (
  input: GrpcRouteMetadata,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.invert !== undefined) {
    bodyParams["invert"] = input.invert;
  }
  if (input.match !== undefined) {
    bodyParams["match"] = serializeAws_restJson1_1GrpcRouteMetadataMatchMethod(
      input.match,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrpcRouteMetadataList = (
  input: Array<GrpcRouteMetadata>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1GrpcRouteMetadata(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1GrpcRouteMetadataMatchMethod = (
  input: GrpcRouteMetadataMatchMethod,
  context: __SerdeContext
): any => {
  return GrpcRouteMetadataMatchMethod.visit(input, {
    exact: value => value,
    prefix: value => value,
    range: value => serializeAws_restJson1_1MatchRange(value, context),
    regex: value => value,
    suffix: value => value,
    _: value => value
  });
};

const serializeAws_restJson1_1HeaderMatchMethod = (
  input: HeaderMatchMethod,
  context: __SerdeContext
): any => {
  return HeaderMatchMethod.visit(input, {
    exact: value => value,
    prefix: value => value,
    range: value => serializeAws_restJson1_1MatchRange(value, context),
    regex: value => value,
    suffix: value => value,
    _: value => value
  });
};

const serializeAws_restJson1_1HealthCheckPolicy = (
  input: HealthCheckPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.healthyThreshold !== undefined) {
    bodyParams["healthyThreshold"] = input.healthyThreshold;
  }
  if (input.intervalMillis !== undefined) {
    bodyParams["intervalMillis"] = input.intervalMillis;
  }
  if (input.path !== undefined) {
    bodyParams["path"] = input.path;
  }
  if (input.port !== undefined) {
    bodyParams["port"] = input.port;
  }
  if (input.protocol !== undefined) {
    bodyParams["protocol"] = input.protocol;
  }
  if (input.timeoutMillis !== undefined) {
    bodyParams["timeoutMillis"] = input.timeoutMillis;
  }
  if (input.unhealthyThreshold !== undefined) {
    bodyParams["unhealthyThreshold"] = input.unhealthyThreshold;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HttpRetryPolicy = (
  input: HttpRetryPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.httpRetryEvents !== undefined) {
    bodyParams[
      "httpRetryEvents"
    ] = serializeAws_restJson1_1HttpRetryPolicyEvents(
      input.httpRetryEvents,
      context
    );
  }
  if (input.maxRetries !== undefined) {
    bodyParams["maxRetries"] = input.maxRetries;
  }
  if (input.perRetryTimeout !== undefined) {
    bodyParams["perRetryTimeout"] = serializeAws_restJson1_1Duration(
      input.perRetryTimeout,
      context
    );
  }
  if (input.tcpRetryEvents !== undefined) {
    bodyParams["tcpRetryEvents"] = serializeAws_restJson1_1TcpRetryPolicyEvents(
      input.tcpRetryEvents,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HttpRetryPolicyEvents = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1HttpRoute = (
  input: HttpRoute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.action !== undefined) {
    bodyParams["action"] = serializeAws_restJson1_1HttpRouteAction(
      input.action,
      context
    );
  }
  if (input.match !== undefined) {
    bodyParams["match"] = serializeAws_restJson1_1HttpRouteMatch(
      input.match,
      context
    );
  }
  if (input.retryPolicy !== undefined) {
    bodyParams["retryPolicy"] = serializeAws_restJson1_1HttpRetryPolicy(
      input.retryPolicy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HttpRouteAction = (
  input: HttpRouteAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.weightedTargets !== undefined) {
    bodyParams["weightedTargets"] = serializeAws_restJson1_1WeightedTargets(
      input.weightedTargets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HttpRouteHeader = (
  input: HttpRouteHeader,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.invert !== undefined) {
    bodyParams["invert"] = input.invert;
  }
  if (input.match !== undefined) {
    bodyParams["match"] = serializeAws_restJson1_1HeaderMatchMethod(
      input.match,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HttpRouteHeaders = (
  input: Array<HttpRouteHeader>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1HttpRouteHeader(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1HttpRouteMatch = (
  input: HttpRouteMatch,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.headers !== undefined) {
    bodyParams["headers"] = serializeAws_restJson1_1HttpRouteHeaders(
      input.headers,
      context
    );
  }
  if (input.method !== undefined) {
    bodyParams["method"] = input.method;
  }
  if (input.prefix !== undefined) {
    bodyParams["prefix"] = input.prefix;
  }
  if (input.scheme !== undefined) {
    bodyParams["scheme"] = input.scheme;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Listener = (
  input: Listener,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.healthCheck !== undefined) {
    bodyParams["healthCheck"] = serializeAws_restJson1_1HealthCheckPolicy(
      input.healthCheck,
      context
    );
  }
  if (input.portMapping !== undefined) {
    bodyParams["portMapping"] = serializeAws_restJson1_1PortMapping(
      input.portMapping,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Listeners = (
  input: Array<Listener>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Listener(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Logging = (
  input: Logging,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.accessLog !== undefined) {
    bodyParams["accessLog"] = serializeAws_restJson1_1AccessLog(
      input.accessLog,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MatchRange = (
  input: MatchRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.end !== undefined) {
    bodyParams["end"] = input.end;
  }
  if (input.start !== undefined) {
    bodyParams["start"] = input.start;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MeshSpec = (
  input: MeshSpec,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.egressFilter !== undefined) {
    bodyParams["egressFilter"] = serializeAws_restJson1_1EgressFilter(
      input.egressFilter,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1PortMapping = (
  input: PortMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.port !== undefined) {
    bodyParams["port"] = input.port;
  }
  if (input.protocol !== undefined) {
    bodyParams["protocol"] = input.protocol;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RouteSpec = (
  input: RouteSpec,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.grpcRoute !== undefined) {
    bodyParams["grpcRoute"] = serializeAws_restJson1_1GrpcRoute(
      input.grpcRoute,
      context
    );
  }
  if (input.http2Route !== undefined) {
    bodyParams["http2Route"] = serializeAws_restJson1_1HttpRoute(
      input.http2Route,
      context
    );
  }
  if (input.httpRoute !== undefined) {
    bodyParams["httpRoute"] = serializeAws_restJson1_1HttpRoute(
      input.httpRoute,
      context
    );
  }
  if (input.priority !== undefined) {
    bodyParams["priority"] = input.priority;
  }
  if (input.tcpRoute !== undefined) {
    bodyParams["tcpRoute"] = serializeAws_restJson1_1TcpRoute(
      input.tcpRoute,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ServiceDiscovery = (
  input: ServiceDiscovery,
  context: __SerdeContext
): any => {
  return ServiceDiscovery.visit(input, {
    awsCloudMap: value =>
      serializeAws_restJson1_1AwsCloudMapServiceDiscovery(value, context),
    dns: value => serializeAws_restJson1_1DnsServiceDiscovery(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagList = (
  input: Array<TagRef>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1TagRef(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TagRef = (
  input: TagRef,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TcpRetryPolicyEvents = (
  input: Array<TcpRetryPolicyEvent | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TcpRoute = (
  input: TcpRoute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.action !== undefined) {
    bodyParams["action"] = serializeAws_restJson1_1TcpRouteAction(
      input.action,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TcpRouteAction = (
  input: TcpRouteAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.weightedTargets !== undefined) {
    bodyParams["weightedTargets"] = serializeAws_restJson1_1WeightedTargets(
      input.weightedTargets,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualNodeServiceProvider = (
  input: VirtualNodeServiceProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.virtualNodeName !== undefined) {
    bodyParams["virtualNodeName"] = input.virtualNodeName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualNodeSpec = (
  input: VirtualNodeSpec,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.backends !== undefined) {
    bodyParams["backends"] = serializeAws_restJson1_1Backends(
      input.backends,
      context
    );
  }
  if (input.listeners !== undefined) {
    bodyParams["listeners"] = serializeAws_restJson1_1Listeners(
      input.listeners,
      context
    );
  }
  if (input.logging !== undefined) {
    bodyParams["logging"] = serializeAws_restJson1_1Logging(
      input.logging,
      context
    );
  }
  if (input.serviceDiscovery !== undefined) {
    bodyParams["serviceDiscovery"] = serializeAws_restJson1_1ServiceDiscovery(
      input.serviceDiscovery,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualRouterListener = (
  input: VirtualRouterListener,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.portMapping !== undefined) {
    bodyParams["portMapping"] = serializeAws_restJson1_1PortMapping(
      input.portMapping,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualRouterListeners = (
  input: Array<VirtualRouterListener>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1VirtualRouterListener(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1VirtualRouterServiceProvider = (
  input: VirtualRouterServiceProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.virtualRouterName !== undefined) {
    bodyParams["virtualRouterName"] = input.virtualRouterName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualRouterSpec = (
  input: VirtualRouterSpec,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.listeners !== undefined) {
    bodyParams["listeners"] = serializeAws_restJson1_1VirtualRouterListeners(
      input.listeners,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualServiceBackend = (
  input: VirtualServiceBackend,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.virtualServiceName !== undefined) {
    bodyParams["virtualServiceName"] = input.virtualServiceName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VirtualServiceProvider = (
  input: VirtualServiceProvider,
  context: __SerdeContext
): any => {
  return VirtualServiceProvider.visit(input, {
    virtualNode: value =>
      serializeAws_restJson1_1VirtualNodeServiceProvider(value, context),
    virtualRouter: value =>
      serializeAws_restJson1_1VirtualRouterServiceProvider(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1VirtualServiceSpec = (
  input: VirtualServiceSpec,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.provider !== undefined) {
    bodyParams["provider"] = serializeAws_restJson1_1VirtualServiceProvider(
      input.provider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1WeightedTarget = (
  input: WeightedTarget,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.virtualNode !== undefined) {
    bodyParams["virtualNode"] = input.virtualNode;
  }
  if (input.weight !== undefined) {
    bodyParams["weight"] = input.weight;
  }
  return bodyParams;
};

const serializeAws_restJson1_1WeightedTargets = (
  input: Array<WeightedTarget>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1WeightedTarget(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1AccessLog = (
  output: any,
  context: __SerdeContext
): AccessLog => {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1_1FileAccessLog(output.file, context)
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1AwsCloudMapInstanceAttribute = (
  output: any,
  context: __SerdeContext
): AwsCloudMapInstanceAttribute => {
  let contents: any = {
    __type: "AwsCloudMapInstanceAttribute",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1AwsCloudMapInstanceAttributes = (
  output: any,
  context: __SerdeContext
): Array<AwsCloudMapInstanceAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsCloudMapInstanceAttribute(entry, context)
  );
};

const deserializeAws_restJson1_1AwsCloudMapServiceDiscovery = (
  output: any,
  context: __SerdeContext
): AwsCloudMapServiceDiscovery => {
  let contents: any = {
    __type: "AwsCloudMapServiceDiscovery",
    attributes: undefined,
    namespaceName: undefined,
    serviceName: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_restJson1_1AwsCloudMapInstanceAttributes(
      output.attributes,
      context
    );
  }
  if (output.namespaceName !== undefined && output.namespaceName !== null) {
    contents.namespaceName = output.namespaceName;
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.serviceName = output.serviceName;
  }
  return contents;
};

const deserializeAws_restJson1_1Backend = (
  output: any,
  context: __SerdeContext
): Backend => {
  if (output.virtualService !== undefined && output.virtualService !== null) {
    return {
      virtualService: deserializeAws_restJson1_1VirtualServiceBackend(
        output.virtualService,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1Backends = (
  output: any,
  context: __SerdeContext
): Array<Backend> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Backend(entry, context)
  );
};

const deserializeAws_restJson1_1DnsServiceDiscovery = (
  output: any,
  context: __SerdeContext
): DnsServiceDiscovery => {
  let contents: any = {
    __type: "DnsServiceDiscovery",
    hostname: undefined
  };
  if (output.hostname !== undefined && output.hostname !== null) {
    contents.hostname = output.hostname;
  }
  return contents;
};

const deserializeAws_restJson1_1Duration = (
  output: any,
  context: __SerdeContext
): Duration => {
  let contents: any = {
    __type: "Duration",
    unit: undefined,
    value: undefined
  };
  if (output.unit !== undefined && output.unit !== null) {
    contents.unit = output.unit;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1EgressFilter = (
  output: any,
  context: __SerdeContext
): EgressFilter => {
  let contents: any = {
    __type: "EgressFilter",
    type: undefined
  };
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1FileAccessLog = (
  output: any,
  context: __SerdeContext
): FileAccessLog => {
  let contents: any = {
    __type: "FileAccessLog",
    path: undefined
  };
  if (output.path !== undefined && output.path !== null) {
    contents.path = output.path;
  }
  return contents;
};

const deserializeAws_restJson1_1GrpcRetryPolicy = (
  output: any,
  context: __SerdeContext
): GrpcRetryPolicy => {
  let contents: any = {
    __type: "GrpcRetryPolicy",
    grpcRetryEvents: undefined,
    httpRetryEvents: undefined,
    maxRetries: undefined,
    perRetryTimeout: undefined,
    tcpRetryEvents: undefined
  };
  if (output.grpcRetryEvents !== undefined && output.grpcRetryEvents !== null) {
    contents.grpcRetryEvents = deserializeAws_restJson1_1GrpcRetryPolicyEvents(
      output.grpcRetryEvents,
      context
    );
  }
  if (output.httpRetryEvents !== undefined && output.httpRetryEvents !== null) {
    contents.httpRetryEvents = deserializeAws_restJson1_1HttpRetryPolicyEvents(
      output.httpRetryEvents,
      context
    );
  }
  if (output.maxRetries !== undefined && output.maxRetries !== null) {
    contents.maxRetries = output.maxRetries;
  }
  if (output.perRetryTimeout !== undefined && output.perRetryTimeout !== null) {
    contents.perRetryTimeout = deserializeAws_restJson1_1Duration(
      output.perRetryTimeout,
      context
    );
  }
  if (output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null) {
    contents.tcpRetryEvents = deserializeAws_restJson1_1TcpRetryPolicyEvents(
      output.tcpRetryEvents,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1GrpcRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): Array<GrpcRetryPolicyEvent | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1GrpcRoute = (
  output: any,
  context: __SerdeContext
): GrpcRoute => {
  let contents: any = {
    __type: "GrpcRoute",
    action: undefined,
    match: undefined,
    retryPolicy: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_restJson1_1GrpcRouteAction(
      output.action,
      context
    );
  }
  if (output.match !== undefined && output.match !== null) {
    contents.match = deserializeAws_restJson1_1GrpcRouteMatch(
      output.match,
      context
    );
  }
  if (output.retryPolicy !== undefined && output.retryPolicy !== null) {
    contents.retryPolicy = deserializeAws_restJson1_1GrpcRetryPolicy(
      output.retryPolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1GrpcRouteAction = (
  output: any,
  context: __SerdeContext
): GrpcRouteAction => {
  let contents: any = {
    __type: "GrpcRouteAction",
    weightedTargets: undefined
  };
  if (output.weightedTargets !== undefined && output.weightedTargets !== null) {
    contents.weightedTargets = deserializeAws_restJson1_1WeightedTargets(
      output.weightedTargets,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1GrpcRouteMatch = (
  output: any,
  context: __SerdeContext
): GrpcRouteMatch => {
  let contents: any = {
    __type: "GrpcRouteMatch",
    metadata: undefined,
    methodName: undefined,
    serviceName: undefined
  };
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_restJson1_1GrpcRouteMetadataList(
      output.metadata,
      context
    );
  }
  if (output.methodName !== undefined && output.methodName !== null) {
    contents.methodName = output.methodName;
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.serviceName = output.serviceName;
  }
  return contents;
};

const deserializeAws_restJson1_1GrpcRouteMetadata = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadata => {
  let contents: any = {
    __type: "GrpcRouteMetadata",
    invert: undefined,
    match: undefined,
    name: undefined
  };
  if (output.invert !== undefined && output.invert !== null) {
    contents.invert = output.invert;
  }
  if (output.match !== undefined && output.match !== null) {
    contents.match = deserializeAws_restJson1_1GrpcRouteMetadataMatchMethod(
      output.match,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1GrpcRouteMetadataList = (
  output: any,
  context: __SerdeContext
): Array<GrpcRouteMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GrpcRouteMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1GrpcRouteMetadataMatchMethod = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadataMatchMethod => {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1_1MatchRange(output.range, context)
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1HeaderMatchMethod = (
  output: any,
  context: __SerdeContext
): HeaderMatchMethod => {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1_1MatchRange(output.range, context)
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1HealthCheckPolicy = (
  output: any,
  context: __SerdeContext
): HealthCheckPolicy => {
  let contents: any = {
    __type: "HealthCheckPolicy",
    healthyThreshold: undefined,
    intervalMillis: undefined,
    path: undefined,
    port: undefined,
    protocol: undefined,
    timeoutMillis: undefined,
    unhealthyThreshold: undefined
  };
  if (
    output.healthyThreshold !== undefined &&
    output.healthyThreshold !== null
  ) {
    contents.healthyThreshold = output.healthyThreshold;
  }
  if (output.intervalMillis !== undefined && output.intervalMillis !== null) {
    contents.intervalMillis = output.intervalMillis;
  }
  if (output.path !== undefined && output.path !== null) {
    contents.path = output.path;
  }
  if (output.port !== undefined && output.port !== null) {
    contents.port = output.port;
  }
  if (output.protocol !== undefined && output.protocol !== null) {
    contents.protocol = output.protocol;
  }
  if (output.timeoutMillis !== undefined && output.timeoutMillis !== null) {
    contents.timeoutMillis = output.timeoutMillis;
  }
  if (
    output.unhealthyThreshold !== undefined &&
    output.unhealthyThreshold !== null
  ) {
    contents.unhealthyThreshold = output.unhealthyThreshold;
  }
  return contents;
};

const deserializeAws_restJson1_1HttpRetryPolicy = (
  output: any,
  context: __SerdeContext
): HttpRetryPolicy => {
  let contents: any = {
    __type: "HttpRetryPolicy",
    httpRetryEvents: undefined,
    maxRetries: undefined,
    perRetryTimeout: undefined,
    tcpRetryEvents: undefined
  };
  if (output.httpRetryEvents !== undefined && output.httpRetryEvents !== null) {
    contents.httpRetryEvents = deserializeAws_restJson1_1HttpRetryPolicyEvents(
      output.httpRetryEvents,
      context
    );
  }
  if (output.maxRetries !== undefined && output.maxRetries !== null) {
    contents.maxRetries = output.maxRetries;
  }
  if (output.perRetryTimeout !== undefined && output.perRetryTimeout !== null) {
    contents.perRetryTimeout = deserializeAws_restJson1_1Duration(
      output.perRetryTimeout,
      context
    );
  }
  if (output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null) {
    contents.tcpRetryEvents = deserializeAws_restJson1_1TcpRetryPolicyEvents(
      output.tcpRetryEvents,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HttpRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1HttpRoute = (
  output: any,
  context: __SerdeContext
): HttpRoute => {
  let contents: any = {
    __type: "HttpRoute",
    action: undefined,
    match: undefined,
    retryPolicy: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_restJson1_1HttpRouteAction(
      output.action,
      context
    );
  }
  if (output.match !== undefined && output.match !== null) {
    contents.match = deserializeAws_restJson1_1HttpRouteMatch(
      output.match,
      context
    );
  }
  if (output.retryPolicy !== undefined && output.retryPolicy !== null) {
    contents.retryPolicy = deserializeAws_restJson1_1HttpRetryPolicy(
      output.retryPolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HttpRouteAction = (
  output: any,
  context: __SerdeContext
): HttpRouteAction => {
  let contents: any = {
    __type: "HttpRouteAction",
    weightedTargets: undefined
  };
  if (output.weightedTargets !== undefined && output.weightedTargets !== null) {
    contents.weightedTargets = deserializeAws_restJson1_1WeightedTargets(
      output.weightedTargets,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HttpRouteHeader = (
  output: any,
  context: __SerdeContext
): HttpRouteHeader => {
  let contents: any = {
    __type: "HttpRouteHeader",
    invert: undefined,
    match: undefined,
    name: undefined
  };
  if (output.invert !== undefined && output.invert !== null) {
    contents.invert = output.invert;
  }
  if (output.match !== undefined && output.match !== null) {
    contents.match = deserializeAws_restJson1_1HeaderMatchMethod(
      output.match,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1HttpRouteHeaders = (
  output: any,
  context: __SerdeContext
): Array<HttpRouteHeader> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HttpRouteHeader(entry, context)
  );
};

const deserializeAws_restJson1_1HttpRouteMatch = (
  output: any,
  context: __SerdeContext
): HttpRouteMatch => {
  let contents: any = {
    __type: "HttpRouteMatch",
    headers: undefined,
    method: undefined,
    prefix: undefined,
    scheme: undefined
  };
  if (output.headers !== undefined && output.headers !== null) {
    contents.headers = deserializeAws_restJson1_1HttpRouteHeaders(
      output.headers,
      context
    );
  }
  if (output.method !== undefined && output.method !== null) {
    contents.method = output.method;
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    contents.prefix = output.prefix;
  }
  if (output.scheme !== undefined && output.scheme !== null) {
    contents.scheme = output.scheme;
  }
  return contents;
};

const deserializeAws_restJson1_1Listener = (
  output: any,
  context: __SerdeContext
): Listener => {
  let contents: any = {
    __type: "Listener",
    healthCheck: undefined,
    portMapping: undefined
  };
  if (output.healthCheck !== undefined && output.healthCheck !== null) {
    contents.healthCheck = deserializeAws_restJson1_1HealthCheckPolicy(
      output.healthCheck,
      context
    );
  }
  if (output.portMapping !== undefined && output.portMapping !== null) {
    contents.portMapping = deserializeAws_restJson1_1PortMapping(
      output.portMapping,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Listeners = (
  output: any,
  context: __SerdeContext
): Array<Listener> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Listener(entry, context)
  );
};

const deserializeAws_restJson1_1Logging = (
  output: any,
  context: __SerdeContext
): Logging => {
  let contents: any = {
    __type: "Logging",
    accessLog: undefined
  };
  if (output.accessLog !== undefined && output.accessLog !== null) {
    contents.accessLog = deserializeAws_restJson1_1AccessLog(
      output.accessLog,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MatchRange = (
  output: any,
  context: __SerdeContext
): MatchRange => {
  let contents: any = {
    __type: "MatchRange",
    end: undefined,
    start: undefined
  };
  if (output.end !== undefined && output.end !== null) {
    contents.end = output.end;
  }
  if (output.start !== undefined && output.start !== null) {
    contents.start = output.start;
  }
  return contents;
};

const deserializeAws_restJson1_1MeshData = (
  output: any,
  context: __SerdeContext
): MeshData => {
  let contents: any = {
    __type: "MeshData",
    meshName: undefined,
    metadata: undefined,
    spec: undefined,
    status: undefined
  };
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_restJson1_1ResourceMetadata(
      output.metadata,
      context
    );
  }
  if (output.spec !== undefined && output.spec !== null) {
    contents.spec = deserializeAws_restJson1_1MeshSpec(output.spec, context);
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_restJson1_1MeshStatus(
      output.status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MeshList = (
  output: any,
  context: __SerdeContext
): Array<MeshRef> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MeshRef(entry, context)
  );
};

const deserializeAws_restJson1_1MeshRef = (
  output: any,
  context: __SerdeContext
): MeshRef => {
  let contents: any = {
    __type: "MeshRef",
    arn: undefined,
    meshName: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  return contents;
};

const deserializeAws_restJson1_1MeshSpec = (
  output: any,
  context: __SerdeContext
): MeshSpec => {
  let contents: any = {
    __type: "MeshSpec",
    egressFilter: undefined
  };
  if (output.egressFilter !== undefined && output.egressFilter !== null) {
    contents.egressFilter = deserializeAws_restJson1_1EgressFilter(
      output.egressFilter,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MeshStatus = (
  output: any,
  context: __SerdeContext
): MeshStatus => {
  let contents: any = {
    __type: "MeshStatus",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1PortMapping = (
  output: any,
  context: __SerdeContext
): PortMapping => {
  let contents: any = {
    __type: "PortMapping",
    port: undefined,
    protocol: undefined
  };
  if (output.port !== undefined && output.port !== null) {
    contents.port = output.port;
  }
  if (output.protocol !== undefined && output.protocol !== null) {
    contents.protocol = output.protocol;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceMetadata = (
  output: any,
  context: __SerdeContext
): ResourceMetadata => {
  let contents: any = {
    __type: "ResourceMetadata",
    arn: undefined,
    createdAt: undefined,
    lastUpdatedAt: undefined,
    uid: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.uid !== undefined && output.uid !== null) {
    contents.uid = output.uid;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1RouteData = (
  output: any,
  context: __SerdeContext
): RouteData => {
  let contents: any = {
    __type: "RouteData",
    meshName: undefined,
    metadata: undefined,
    routeName: undefined,
    spec: undefined,
    status: undefined,
    virtualRouterName: undefined
  };
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_restJson1_1ResourceMetadata(
      output.metadata,
      context
    );
  }
  if (output.routeName !== undefined && output.routeName !== null) {
    contents.routeName = output.routeName;
  }
  if (output.spec !== undefined && output.spec !== null) {
    contents.spec = deserializeAws_restJson1_1RouteSpec(output.spec, context);
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_restJson1_1RouteStatus(
      output.status,
      context
    );
  }
  if (
    output.virtualRouterName !== undefined &&
    output.virtualRouterName !== null
  ) {
    contents.virtualRouterName = output.virtualRouterName;
  }
  return contents;
};

const deserializeAws_restJson1_1RouteList = (
  output: any,
  context: __SerdeContext
): Array<RouteRef> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RouteRef(entry, context)
  );
};

const deserializeAws_restJson1_1RouteRef = (
  output: any,
  context: __SerdeContext
): RouteRef => {
  let contents: any = {
    __type: "RouteRef",
    arn: undefined,
    meshName: undefined,
    routeName: undefined,
    virtualRouterName: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.routeName !== undefined && output.routeName !== null) {
    contents.routeName = output.routeName;
  }
  if (
    output.virtualRouterName !== undefined &&
    output.virtualRouterName !== null
  ) {
    contents.virtualRouterName = output.virtualRouterName;
  }
  return contents;
};

const deserializeAws_restJson1_1RouteSpec = (
  output: any,
  context: __SerdeContext
): RouteSpec => {
  let contents: any = {
    __type: "RouteSpec",
    grpcRoute: undefined,
    http2Route: undefined,
    httpRoute: undefined,
    priority: undefined,
    tcpRoute: undefined
  };
  if (output.grpcRoute !== undefined && output.grpcRoute !== null) {
    contents.grpcRoute = deserializeAws_restJson1_1GrpcRoute(
      output.grpcRoute,
      context
    );
  }
  if (output.http2Route !== undefined && output.http2Route !== null) {
    contents.http2Route = deserializeAws_restJson1_1HttpRoute(
      output.http2Route,
      context
    );
  }
  if (output.httpRoute !== undefined && output.httpRoute !== null) {
    contents.httpRoute = deserializeAws_restJson1_1HttpRoute(
      output.httpRoute,
      context
    );
  }
  if (output.priority !== undefined && output.priority !== null) {
    contents.priority = output.priority;
  }
  if (output.tcpRoute !== undefined && output.tcpRoute !== null) {
    contents.tcpRoute = deserializeAws_restJson1_1TcpRoute(
      output.tcpRoute,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1RouteStatus = (
  output: any,
  context: __SerdeContext
): RouteStatus => {
  let contents: any = {
    __type: "RouteStatus",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceDiscovery = (
  output: any,
  context: __SerdeContext
): ServiceDiscovery => {
  if (output.awsCloudMap !== undefined && output.awsCloudMap !== null) {
    return {
      awsCloudMap: deserializeAws_restJson1_1AwsCloudMapServiceDiscovery(
        output.awsCloudMap,
        context
      )
    };
  }
  if (output.dns !== undefined && output.dns !== null) {
    return {
      dns: deserializeAws_restJson1_1DnsServiceDiscovery(output.dns, context)
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<TagRef> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TagRef(entry, context)
  );
};

const deserializeAws_restJson1_1TagRef = (
  output: any,
  context: __SerdeContext
): TagRef => {
  let contents: any = {
    __type: "TagRef",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1TcpRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): Array<TcpRetryPolicyEvent | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TcpRoute = (
  output: any,
  context: __SerdeContext
): TcpRoute => {
  let contents: any = {
    __type: "TcpRoute",
    action: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_restJson1_1TcpRouteAction(
      output.action,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TcpRouteAction = (
  output: any,
  context: __SerdeContext
): TcpRouteAction => {
  let contents: any = {
    __type: "TcpRouteAction",
    weightedTargets: undefined
  };
  if (output.weightedTargets !== undefined && output.weightedTargets !== null) {
    contents.weightedTargets = deserializeAws_restJson1_1WeightedTargets(
      output.weightedTargets,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualNodeData = (
  output: any,
  context: __SerdeContext
): VirtualNodeData => {
  let contents: any = {
    __type: "VirtualNodeData",
    meshName: undefined,
    metadata: undefined,
    spec: undefined,
    status: undefined,
    virtualNodeName: undefined
  };
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_restJson1_1ResourceMetadata(
      output.metadata,
      context
    );
  }
  if (output.spec !== undefined && output.spec !== null) {
    contents.spec = deserializeAws_restJson1_1VirtualNodeSpec(
      output.spec,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_restJson1_1VirtualNodeStatus(
      output.status,
      context
    );
  }
  if (output.virtualNodeName !== undefined && output.virtualNodeName !== null) {
    contents.virtualNodeName = output.virtualNodeName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualNodeList = (
  output: any,
  context: __SerdeContext
): Array<VirtualNodeRef> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualNodeRef(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualNodeRef = (
  output: any,
  context: __SerdeContext
): VirtualNodeRef => {
  let contents: any = {
    __type: "VirtualNodeRef",
    arn: undefined,
    meshName: undefined,
    virtualNodeName: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.virtualNodeName !== undefined && output.virtualNodeName !== null) {
    contents.virtualNodeName = output.virtualNodeName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualNodeServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualNodeServiceProvider => {
  let contents: any = {
    __type: "VirtualNodeServiceProvider",
    virtualNodeName: undefined
  };
  if (output.virtualNodeName !== undefined && output.virtualNodeName !== null) {
    contents.virtualNodeName = output.virtualNodeName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualNodeSpec = (
  output: any,
  context: __SerdeContext
): VirtualNodeSpec => {
  let contents: any = {
    __type: "VirtualNodeSpec",
    backends: undefined,
    listeners: undefined,
    logging: undefined,
    serviceDiscovery: undefined
  };
  if (output.backends !== undefined && output.backends !== null) {
    contents.backends = deserializeAws_restJson1_1Backends(
      output.backends,
      context
    );
  }
  if (output.listeners !== undefined && output.listeners !== null) {
    contents.listeners = deserializeAws_restJson1_1Listeners(
      output.listeners,
      context
    );
  }
  if (output.logging !== undefined && output.logging !== null) {
    contents.logging = deserializeAws_restJson1_1Logging(
      output.logging,
      context
    );
  }
  if (
    output.serviceDiscovery !== undefined &&
    output.serviceDiscovery !== null
  ) {
    contents.serviceDiscovery = deserializeAws_restJson1_1ServiceDiscovery(
      output.serviceDiscovery,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualNodeStatus = (
  output: any,
  context: __SerdeContext
): VirtualNodeStatus => {
  let contents: any = {
    __type: "VirtualNodeStatus",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualRouterData = (
  output: any,
  context: __SerdeContext
): VirtualRouterData => {
  let contents: any = {
    __type: "VirtualRouterData",
    meshName: undefined,
    metadata: undefined,
    spec: undefined,
    status: undefined,
    virtualRouterName: undefined
  };
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_restJson1_1ResourceMetadata(
      output.metadata,
      context
    );
  }
  if (output.spec !== undefined && output.spec !== null) {
    contents.spec = deserializeAws_restJson1_1VirtualRouterSpec(
      output.spec,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_restJson1_1VirtualRouterStatus(
      output.status,
      context
    );
  }
  if (
    output.virtualRouterName !== undefined &&
    output.virtualRouterName !== null
  ) {
    contents.virtualRouterName = output.virtualRouterName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualRouterList = (
  output: any,
  context: __SerdeContext
): Array<VirtualRouterRef> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualRouterRef(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualRouterListener = (
  output: any,
  context: __SerdeContext
): VirtualRouterListener => {
  let contents: any = {
    __type: "VirtualRouterListener",
    portMapping: undefined
  };
  if (output.portMapping !== undefined && output.portMapping !== null) {
    contents.portMapping = deserializeAws_restJson1_1PortMapping(
      output.portMapping,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualRouterListeners = (
  output: any,
  context: __SerdeContext
): Array<VirtualRouterListener> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualRouterListener(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualRouterRef = (
  output: any,
  context: __SerdeContext
): VirtualRouterRef => {
  let contents: any = {
    __type: "VirtualRouterRef",
    arn: undefined,
    meshName: undefined,
    virtualRouterName: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (
    output.virtualRouterName !== undefined &&
    output.virtualRouterName !== null
  ) {
    contents.virtualRouterName = output.virtualRouterName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualRouterServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualRouterServiceProvider => {
  let contents: any = {
    __type: "VirtualRouterServiceProvider",
    virtualRouterName: undefined
  };
  if (
    output.virtualRouterName !== undefined &&
    output.virtualRouterName !== null
  ) {
    contents.virtualRouterName = output.virtualRouterName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualRouterSpec = (
  output: any,
  context: __SerdeContext
): VirtualRouterSpec => {
  let contents: any = {
    __type: "VirtualRouterSpec",
    listeners: undefined
  };
  if (output.listeners !== undefined && output.listeners !== null) {
    contents.listeners = deserializeAws_restJson1_1VirtualRouterListeners(
      output.listeners,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualRouterStatus = (
  output: any,
  context: __SerdeContext
): VirtualRouterStatus => {
  let contents: any = {
    __type: "VirtualRouterStatus",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualServiceBackend = (
  output: any,
  context: __SerdeContext
): VirtualServiceBackend => {
  let contents: any = {
    __type: "VirtualServiceBackend",
    virtualServiceName: undefined
  };
  if (
    output.virtualServiceName !== undefined &&
    output.virtualServiceName !== null
  ) {
    contents.virtualServiceName = output.virtualServiceName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualServiceData = (
  output: any,
  context: __SerdeContext
): VirtualServiceData => {
  let contents: any = {
    __type: "VirtualServiceData",
    meshName: undefined,
    metadata: undefined,
    spec: undefined,
    status: undefined,
    virtualServiceName: undefined
  };
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_restJson1_1ResourceMetadata(
      output.metadata,
      context
    );
  }
  if (output.spec !== undefined && output.spec !== null) {
    contents.spec = deserializeAws_restJson1_1VirtualServiceSpec(
      output.spec,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_restJson1_1VirtualServiceStatus(
      output.status,
      context
    );
  }
  if (
    output.virtualServiceName !== undefined &&
    output.virtualServiceName !== null
  ) {
    contents.virtualServiceName = output.virtualServiceName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualServiceList = (
  output: any,
  context: __SerdeContext
): Array<VirtualServiceRef> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualServiceRef(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualServiceProvider => {
  if (output.virtualNode !== undefined && output.virtualNode !== null) {
    return {
      virtualNode: deserializeAws_restJson1_1VirtualNodeServiceProvider(
        output.virtualNode,
        context
      )
    };
  }
  if (output.virtualRouter !== undefined && output.virtualRouter !== null) {
    return {
      virtualRouter: deserializeAws_restJson1_1VirtualRouterServiceProvider(
        output.virtualRouter,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1VirtualServiceRef = (
  output: any,
  context: __SerdeContext
): VirtualServiceRef => {
  let contents: any = {
    __type: "VirtualServiceRef",
    arn: undefined,
    meshName: undefined,
    virtualServiceName: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.meshName !== undefined && output.meshName !== null) {
    contents.meshName = output.meshName;
  }
  if (
    output.virtualServiceName !== undefined &&
    output.virtualServiceName !== null
  ) {
    contents.virtualServiceName = output.virtualServiceName;
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualServiceSpec = (
  output: any,
  context: __SerdeContext
): VirtualServiceSpec => {
  let contents: any = {
    __type: "VirtualServiceSpec",
    provider: undefined
  };
  if (output.provider !== undefined && output.provider !== null) {
    contents.provider = deserializeAws_restJson1_1VirtualServiceProvider(
      output.provider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VirtualServiceStatus = (
  output: any,
  context: __SerdeContext
): VirtualServiceStatus => {
  let contents: any = {
    __type: "VirtualServiceStatus",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1WeightedTarget = (
  output: any,
  context: __SerdeContext
): WeightedTarget => {
  let contents: any = {
    __type: "WeightedTarget",
    virtualNode: undefined,
    weight: undefined
  };
  if (output.virtualNode !== undefined && output.virtualNode !== null) {
    contents.virtualNode = output.virtualNode;
  }
  if (output.weight !== undefined && output.weight !== null) {
    contents.weight = output.weight;
  }
  return contents;
};

const deserializeAws_restJson1_1WeightedTargets = (
  output: any,
  context: __SerdeContext
): Array<WeightedTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1WeightedTarget(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
