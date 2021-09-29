import {
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "../commands/AddCustomRoutingEndpointsCommand";
import { AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput } from "../commands/AdvertiseByoipCidrCommand";
import {
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
} from "../commands/AllowCustomRoutingTrafficCommand";
import { CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput } from "../commands/CreateAcceleratorCommand";
import {
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
} from "../commands/CreateCustomRoutingAcceleratorCommand";
import {
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
} from "../commands/CreateCustomRoutingEndpointGroupCommand";
import {
  CreateCustomRoutingListenerCommandInput,
  CreateCustomRoutingListenerCommandOutput,
} from "../commands/CreateCustomRoutingListenerCommand";
import {
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
} from "../commands/CreateEndpointGroupCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "../commands/CreateListenerCommand";
import { DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput } from "../commands/DeleteAcceleratorCommand";
import {
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
} from "../commands/DeleteCustomRoutingAcceleratorCommand";
import {
  DeleteCustomRoutingEndpointGroupCommandInput,
  DeleteCustomRoutingEndpointGroupCommandOutput,
} from "../commands/DeleteCustomRoutingEndpointGroupCommand";
import {
  DeleteCustomRoutingListenerCommandInput,
  DeleteCustomRoutingListenerCommandOutput,
} from "../commands/DeleteCustomRoutingListenerCommand";
import {
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput,
} from "../commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "../commands/DeleteListenerCommand";
import {
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
} from "../commands/DenyCustomRoutingTrafficCommand";
import {
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "../commands/DeprovisionByoipCidrCommand";
import {
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput,
} from "../commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput,
} from "../commands/DescribeAcceleratorCommand";
import {
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
} from "../commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import {
  DescribeCustomRoutingAcceleratorCommandInput,
  DescribeCustomRoutingAcceleratorCommandOutput,
} from "../commands/DescribeCustomRoutingAcceleratorCommand";
import {
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
} from "../commands/DescribeCustomRoutingEndpointGroupCommand";
import {
  DescribeCustomRoutingListenerCommandInput,
  DescribeCustomRoutingListenerCommandOutput,
} from "../commands/DescribeCustomRoutingListenerCommand";
import {
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput,
} from "../commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommandInput, DescribeListenerCommandOutput } from "../commands/DescribeListenerCommand";
import { ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput } from "../commands/ListAcceleratorsCommand";
import { ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput } from "../commands/ListByoipCidrsCommand";
import {
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "../commands/ListCustomRoutingAcceleratorsCommand";
import {
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "../commands/ListCustomRoutingEndpointGroupsCommand";
import {
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "../commands/ListCustomRoutingListenersCommand";
import {
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
} from "../commands/ListCustomRoutingPortMappingsByDestinationCommand";
import {
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "../commands/ListCustomRoutingPortMappingsCommand";
import { ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput } from "../commands/ListEndpointGroupsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "../commands/ListListenersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput } from "../commands/ProvisionByoipCidrCommand";
import {
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
} from "../commands/RemoveCustomRoutingEndpointsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput,
} from "../commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput } from "../commands/UpdateAcceleratorCommand";
import {
  UpdateCustomRoutingAcceleratorAttributesCommandInput,
  UpdateCustomRoutingAcceleratorAttributesCommandOutput,
} from "../commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import {
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
} from "../commands/UpdateCustomRoutingAcceleratorCommand";
import {
  UpdateCustomRoutingListenerCommandInput,
  UpdateCustomRoutingListenerCommandOutput,
} from "../commands/UpdateCustomRoutingListenerCommand";
import {
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput,
} from "../commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "../commands/UpdateListenerCommand";
import { WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput } from "../commands/WithdrawByoipCidrCommand";
import {
  Accelerator,
  AcceleratorAttributes,
  AcceleratorNotDisabledException,
  AcceleratorNotFoundException,
  AccessDeniedException,
  AddCustomRoutingEndpointsRequest,
  AddCustomRoutingEndpointsResponse,
  AdvertiseByoipCidrRequest,
  AdvertiseByoipCidrResponse,
  AllowCustomRoutingTrafficRequest,
  AssociatedEndpointGroupFoundException,
  AssociatedListenerFoundException,
  ByoipCidr,
  ByoipCidrEvent,
  ByoipCidrNotFoundException,
  CidrAuthorizationContext,
  ConflictException,
  CreateAcceleratorRequest,
  CreateAcceleratorResponse,
  CreateCustomRoutingAcceleratorRequest,
  CreateCustomRoutingAcceleratorResponse,
  CreateCustomRoutingEndpointGroupRequest,
  CreateCustomRoutingEndpointGroupResponse,
  CreateCustomRoutingListenerRequest,
  CreateCustomRoutingListenerResponse,
  CreateEndpointGroupRequest,
  CreateEndpointGroupResponse,
  CreateListenerRequest,
  CreateListenerResponse,
  CustomRoutingAccelerator,
  CustomRoutingAcceleratorAttributes,
  CustomRoutingDestinationConfiguration,
  CustomRoutingDestinationDescription,
  CustomRoutingEndpointConfiguration,
  CustomRoutingEndpointDescription,
  CustomRoutingEndpointGroup,
  CustomRoutingListener,
  CustomRoutingProtocol,
  DeleteAcceleratorRequest,
  DeleteCustomRoutingAcceleratorRequest,
  DeleteCustomRoutingEndpointGroupRequest,
  DeleteCustomRoutingListenerRequest,
  DeleteEndpointGroupRequest,
  DeleteListenerRequest,
  DenyCustomRoutingTrafficRequest,
  DeprovisionByoipCidrRequest,
  DeprovisionByoipCidrResponse,
  DescribeAcceleratorAttributesRequest,
  DescribeAcceleratorAttributesResponse,
  DescribeAcceleratorRequest,
  DescribeAcceleratorResponse,
  DescribeCustomRoutingAcceleratorAttributesRequest,
  DescribeCustomRoutingAcceleratorAttributesResponse,
  DescribeCustomRoutingAcceleratorRequest,
  DescribeCustomRoutingAcceleratorResponse,
  DescribeCustomRoutingEndpointGroupRequest,
  DescribeCustomRoutingEndpointGroupResponse,
  DescribeCustomRoutingListenerRequest,
  DescribeCustomRoutingListenerResponse,
  DescribeEndpointGroupRequest,
  DescribeEndpointGroupResponse,
  DescribeListenerRequest,
  DescribeListenerResponse,
  DestinationPortMapping,
  EndpointAlreadyExistsException,
  EndpointConfiguration,
  EndpointDescription,
  EndpointGroup,
  EndpointGroupAlreadyExistsException,
  EndpointGroupNotFoundException,
  EndpointNotFoundException,
  IncorrectCidrStateException,
  InternalServiceErrorException,
  InvalidArgumentException,
  InvalidNextTokenException,
  InvalidPortRangeException,
  IpSet,
  LimitExceededException,
  ListAcceleratorsRequest,
  ListAcceleratorsResponse,
  ListByoipCidrsRequest,
  ListByoipCidrsResponse,
  ListCustomRoutingAcceleratorsRequest,
  ListCustomRoutingAcceleratorsResponse,
  ListCustomRoutingEndpointGroupsRequest,
  ListCustomRoutingEndpointGroupsResponse,
  ListCustomRoutingListenersRequest,
  ListCustomRoutingListenersResponse,
  ListCustomRoutingPortMappingsByDestinationRequest,
  ListCustomRoutingPortMappingsByDestinationResponse,
  ListCustomRoutingPortMappingsRequest,
  ListCustomRoutingPortMappingsResponse,
  ListEndpointGroupsRequest,
  ListEndpointGroupsResponse,
  ListListenersRequest,
  ListListenersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  Listener,
  ListenerNotFoundException,
  PortMapping,
  PortOverride,
  PortRange,
  Protocol,
  ProvisionByoipCidrRequest,
  ProvisionByoipCidrResponse,
  RemoveCustomRoutingEndpointsRequest,
  SocketAddress,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAcceleratorAttributesRequest,
  UpdateAcceleratorAttributesResponse,
  UpdateAcceleratorRequest,
  UpdateAcceleratorResponse,
  UpdateCustomRoutingAcceleratorAttributesRequest,
  UpdateCustomRoutingAcceleratorAttributesResponse,
  UpdateCustomRoutingAcceleratorRequest,
  UpdateCustomRoutingAcceleratorResponse,
  UpdateCustomRoutingListenerRequest,
  UpdateCustomRoutingListenerResponse,
  UpdateEndpointGroupRequest,
  UpdateEndpointGroupResponse,
  UpdateListenerRequest,
  UpdateListenerResponse,
  WithdrawByoipCidrRequest,
  WithdrawByoipCidrResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1AddCustomRoutingEndpointsCommand = async (
  input: AddCustomRoutingEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddCustomRoutingEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AdvertiseByoipCidrCommand = async (
  input: AdvertiseByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AdvertiseByoipCidr",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AdvertiseByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AllowCustomRoutingTrafficCommand = async (
  input: AllowCustomRoutingTrafficCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AllowCustomRoutingTrafficRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAcceleratorCommand = async (
  input: CreateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomRoutingAcceleratorCommand = async (
  input: CreateCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = async (
  input: CreateCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomRoutingEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomRoutingListenerCommand = async (
  input: CreateCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEndpointGroupCommand = async (
  input: CreateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAcceleratorCommand = async (
  input: DeleteAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = async (
  input: DeleteCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = async (
  input: DeleteCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomRoutingEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomRoutingListenerCommand = async (
  input: DeleteCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEndpointGroupCommand = async (
  input: DeleteEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DenyCustomRoutingTrafficCommand = async (
  input: DenyCustomRoutingTrafficCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DenyCustomRoutingTrafficRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeprovisionByoipCidrCommand = async (
  input: DeprovisionByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeprovisionByoipCidr",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeprovisionByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAcceleratorCommand = async (
  input: DescribeAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAcceleratorAttributesCommand = async (
  input: DescribeAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = async (
  input: DescribeCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = async (
  input: DescribeCustomRoutingAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = async (
  input: DescribeCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCustomRoutingListenerCommand = async (
  input: DescribeCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEndpointGroupCommand = async (
  input: DescribeEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeListenerCommand = async (
  input: DescribeListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAcceleratorsCommand = async (
  input: ListAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListAccelerators",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAcceleratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListByoipCidrsCommand = async (
  input: ListByoipCidrsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListByoipCidrs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListByoipCidrsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomRoutingAcceleratorsCommand = async (
  input: ListCustomRoutingAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomRoutingAcceleratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = async (
  input: ListCustomRoutingEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomRoutingEndpointGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomRoutingListenersCommand = async (
  input: ListCustomRoutingListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingListeners",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomRoutingListenersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomRoutingPortMappingsCommand = async (
  input: ListCustomRoutingPortMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomRoutingPortMappingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = async (
  input: ListCustomRoutingPortMappingsByDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEndpointGroupsCommand = async (
  input: ListEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListEndpointGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEndpointGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListListenersCommand = async (
  input: ListListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListListeners",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListListenersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ProvisionByoipCidrCommand = async (
  input: ProvisionByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ProvisionByoipCidr",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ProvisionByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveCustomRoutingEndpointsCommand = async (
  input: RemoveCustomRoutingEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveCustomRoutingEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAcceleratorCommand = async (
  input: UpdateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAcceleratorAttributesCommand = async (
  input: UpdateAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = async (
  input: UpdateCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = async (
  input: UpdateCustomRoutingAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCustomRoutingListenerCommand = async (
  input: UpdateCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEndpointGroupCommand = async (
  input: UpdateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateListenerCommand = async (
  input: UpdateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateListener",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1WithdrawByoipCidrCommand = async (
  input: WithdrawByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.WithdrawByoipCidr",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1WithdrawByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddCustomRoutingEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCustomRoutingEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddCustomRoutingEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddCustomRoutingEndpointsResponse(data, context);
  const response: AddCustomRoutingEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddCustomRoutingEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCustomRoutingEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.globalaccelerator#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EndpointAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AdvertiseByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdvertiseByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AdvertiseByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AdvertiseByoipCidrResponse(data, context);
  const response: AdvertiseByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AdvertiseByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdvertiseByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ByoipCidrNotFoundException":
    case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      response = {
        ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AllowCustomRoutingTrafficCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllowCustomRoutingTrafficCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AllowCustomRoutingTrafficCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AllowCustomRoutingTrafficCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AllowCustomRoutingTrafficCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllowCustomRoutingTrafficCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAcceleratorResponse(data, context);
  const response: CreateAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomRoutingAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomRoutingAcceleratorResponse(data, context);
  const response: CreateCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomRoutingEndpointGroupResponse(data, context);
  const response: CreateCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointGroupAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomRoutingListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomRoutingListenerResponse(data, context);
  const response: CreateCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEndpointGroupResponse(data, context);
  const response: CreateEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointGroupAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateListenerResponse(data, context);
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAcceleratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotDisabledException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AssociatedListenerFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotDisabledException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AssociatedListenerFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedListenerFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomRoutingListenerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociatedEndpointGroupFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEndpointGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteListenerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociatedEndpointGroupFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
      response = {
        ...(await deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DenyCustomRoutingTrafficCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DenyCustomRoutingTrafficCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DenyCustomRoutingTrafficCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DenyCustomRoutingTrafficCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DenyCustomRoutingTrafficCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DenyCustomRoutingTrafficCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeprovisionByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprovisionByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeprovisionByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeprovisionByoipCidrResponse(data, context);
  const response: DeprovisionByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeprovisionByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprovisionByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ByoipCidrNotFoundException":
    case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      response = {
        ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAcceleratorResponse(data, context);
  const response: DescribeAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAcceleratorAttributesResponse(data, context);
  const response: DescribeAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomRoutingAcceleratorResponse(data, context);
  const response: DescribeCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesResponse(data, context);
  const response: DescribeCustomRoutingAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomRoutingEndpointGroupResponse(data, context);
  const response: DescribeCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCustomRoutingListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCustomRoutingListenerResponse(data, context);
  const response: DescribeCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEndpointGroupResponse(data, context);
  const response: DescribeEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeListenerResponse(data, context);
  const response: DescribeListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListAcceleratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAcceleratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAcceleratorsResponse(data, context);
  const response: ListAcceleratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAcceleratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListByoipCidrsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByoipCidrsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListByoipCidrsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListByoipCidrsResponse(data, context);
  const response: ListByoipCidrsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListByoipCidrsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByoipCidrsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingAcceleratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomRoutingAcceleratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomRoutingAcceleratorsResponse(data, context);
  const response: ListCustomRoutingAcceleratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomRoutingAcceleratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingAcceleratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomRoutingEndpointGroupsResponse(data, context);
  const response: ListCustomRoutingEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCustomRoutingListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomRoutingListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomRoutingListenersResponse(data, context);
  const response: ListCustomRoutingListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomRoutingListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCustomRoutingPortMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomRoutingPortMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomRoutingPortMappingsResponse(data, context);
  const response: ListCustomRoutingPortMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomRoutingPortMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationResponse(data, context);
  const response: ListCustomRoutingPortMappingsByDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEndpointGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEndpointGroupsResponse(data, context);
  const response: ListEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListListenersResponse(data, context);
  const response: ListListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ProvisionByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ProvisionByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ProvisionByoipCidrResponse(data, context);
  const response: ProvisionByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ProvisionByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      response = {
        ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveCustomRoutingEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveCustomRoutingEndpointsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveCustomRoutingEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveCustomRoutingEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveCustomRoutingEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.globalaccelerator#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAcceleratorResponse(data, context);
  const response: UpdateAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAcceleratorAttributesResponse(data, context);
  const response: UpdateAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCustomRoutingAcceleratorResponse(data, context);
  const response: UpdateCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesResponse(data, context);
  const response: UpdateCustomRoutingAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      response = {
        ...(await deserializeAws_json1_1AcceleratorNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCustomRoutingListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCustomRoutingListenerResponse(data, context);
  const response: UpdateCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEndpointGroupResponse(data, context);
  const response: UpdateEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateListenerResponse(data, context);
  const response: UpdateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidPortRangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ListenerNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1WithdrawByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WithdrawByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1WithdrawByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1WithdrawByoipCidrResponse(data, context);
  const response: WithdrawByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1WithdrawByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WithdrawByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ByoipCidrNotFoundException":
    case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      response = {
        ...(await deserializeAws_json1_1IncorrectCidrStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AcceleratorNotDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AcceleratorNotDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AcceleratorNotDisabledException(body, context);
  const contents: AcceleratorNotDisabledException = {
    name: "AcceleratorNotDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AcceleratorNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AcceleratorNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AcceleratorNotFoundException(body, context);
  const contents: AcceleratorNotFoundException = {
    name: "AcceleratorNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedEndpointGroupFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociatedEndpointGroupFoundException(body, context);
  const contents: AssociatedEndpointGroupFoundException = {
    name: "AssociatedEndpointGroupFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AssociatedListenerFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedListenerFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AssociatedListenerFoundException(body, context);
  const contents: AssociatedListenerFoundException = {
    name: "AssociatedListenerFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ByoipCidrNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ByoipCidrNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ByoipCidrNotFoundException(body, context);
  const contents: ByoipCidrNotFoundException = {
    name: "ByoipCidrNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EndpointAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EndpointAlreadyExistsException(body, context);
  const contents: EndpointAlreadyExistsException = {
    name: "EndpointAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointGroupAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EndpointGroupAlreadyExistsException(body, context);
  const contents: EndpointGroupAlreadyExistsException = {
    name: "EndpointGroupAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EndpointGroupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EndpointGroupNotFoundException(body, context);
  const contents: EndpointGroupNotFoundException = {
    name: "EndpointGroupNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EndpointNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EndpointNotFoundException(body, context);
  const contents: EndpointNotFoundException = {
    name: "EndpointNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IncorrectCidrStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectCidrStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncorrectCidrStateException(body, context);
  const contents: IncorrectCidrStateException = {
    name: "IncorrectCidrStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(body, context);
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(body, context);
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPortRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPortRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPortRangeException(body, context);
  const contents: InvalidPortRangeException = {
    name: "InvalidPortRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ListenerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ListenerNotFoundException(body, context);
  const contents: ListenerNotFoundException = {
    name: "ListenerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddCustomRoutingEndpointsRequest = (
  input: AddCustomRoutingEndpointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointConfigurations !== undefined &&
      input.EndpointConfigurations !== null && {
        EndpointConfigurations: serializeAws_json1_1CustomRoutingEndpointConfigurations(
          input.EndpointConfigurations,
          context
        ),
      }),
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

const serializeAws_json1_1AdvertiseByoipCidrRequest = (
  input: AdvertiseByoipCidrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
  };
};

const serializeAws_json1_1AllowCustomRoutingTrafficRequest = (
  input: AllowCustomRoutingTrafficRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowAllTrafficToEndpoint !== undefined &&
      input.AllowAllTrafficToEndpoint !== null && { AllowAllTrafficToEndpoint: input.AllowAllTrafficToEndpoint }),
    ...(input.DestinationAddresses !== undefined &&
      input.DestinationAddresses !== null && {
        DestinationAddresses: serializeAws_json1_1DestinationAddresses(input.DestinationAddresses, context),
      }),
    ...(input.DestinationPorts !== undefined &&
      input.DestinationPorts !== null && {
        DestinationPorts: serializeAws_json1_1DestinationPorts(input.DestinationPorts, context),
      }),
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
  };
};

const serializeAws_json1_1CidrAuthorizationContext = (
  input: CidrAuthorizationContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
    ...(input.Signature !== undefined && input.Signature !== null && { Signature: input.Signature }),
  };
};

const serializeAws_json1_1CreateAcceleratorRequest = (
  input: CreateAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
    ...(input.IpAddresses !== undefined &&
      input.IpAddresses !== null && { IpAddresses: serializeAws_json1_1IpAddresses(input.IpAddresses, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateCustomRoutingAcceleratorRequest = (
  input: CreateCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
    ...(input.IpAddresses !== undefined &&
      input.IpAddresses !== null && { IpAddresses: serializeAws_json1_1IpAddresses(input.IpAddresses, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateCustomRoutingEndpointGroupRequest = (
  input: CreateCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfigurations !== undefined &&
      input.DestinationConfigurations !== null && {
        DestinationConfigurations: serializeAws_json1_1CustomRoutingDestinationConfigurations(
          input.DestinationConfigurations,
          context
        ),
      }),
    ...(input.EndpointGroupRegion !== undefined &&
      input.EndpointGroupRegion !== null && { EndpointGroupRegion: input.EndpointGroupRegion }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
  };
};

const serializeAws_json1_1CreateCustomRoutingListenerRequest = (
  input: CreateCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PortRanges !== undefined &&
      input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
  };
};

const serializeAws_json1_1CreateEndpointGroupRequest = (
  input: CreateEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointConfigurations !== undefined &&
      input.EndpointConfigurations !== null && {
        EndpointConfigurations: serializeAws_json1_1EndpointConfigurations(input.EndpointConfigurations, context),
      }),
    ...(input.EndpointGroupRegion !== undefined &&
      input.EndpointGroupRegion !== null && { EndpointGroupRegion: input.EndpointGroupRegion }),
    ...(input.HealthCheckIntervalSeconds !== undefined &&
      input.HealthCheckIntervalSeconds !== null && { HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds }),
    ...(input.HealthCheckPath !== undefined &&
      input.HealthCheckPath !== null && { HealthCheckPath: input.HealthCheckPath }),
    ...(input.HealthCheckPort !== undefined &&
      input.HealthCheckPort !== null && { HealthCheckPort: input.HealthCheckPort }),
    ...(input.HealthCheckProtocol !== undefined &&
      input.HealthCheckProtocol !== null && { HealthCheckProtocol: input.HealthCheckProtocol }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    ...(input.PortOverrides !== undefined &&
      input.PortOverrides !== null && {
        PortOverrides: serializeAws_json1_1PortOverrides(input.PortOverrides, context),
      }),
    ...(input.ThresholdCount !== undefined &&
      input.ThresholdCount !== null && { ThresholdCount: input.ThresholdCount }),
    ...(input.TrafficDialPercentage !== undefined &&
      input.TrafficDialPercentage !== null && { TrafficDialPercentage: __serializeFloat(input.TrafficDialPercentage) }),
  };
};

const serializeAws_json1_1CreateListenerRequest = (input: CreateListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.ClientAffinity !== undefined &&
      input.ClientAffinity !== null && { ClientAffinity: input.ClientAffinity }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PortRanges !== undefined &&
      input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_json1_1CustomRoutingDestinationConfiguration = (
  input: CustomRoutingDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
    ...(input.Protocols !== undefined &&
      input.Protocols !== null && { Protocols: serializeAws_json1_1CustomRoutingProtocols(input.Protocols, context) }),
    ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
  };
};

const serializeAws_json1_1CustomRoutingDestinationConfigurations = (
  input: CustomRoutingDestinationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CustomRoutingDestinationConfiguration(entry, context);
    });
};

const serializeAws_json1_1CustomRoutingEndpointConfiguration = (
  input: CustomRoutingEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
  };
};

const serializeAws_json1_1CustomRoutingEndpointConfigurations = (
  input: CustomRoutingEndpointConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CustomRoutingEndpointConfiguration(entry, context);
    });
};

const serializeAws_json1_1CustomRoutingProtocols = (
  input: (CustomRoutingProtocol | string)[],
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

const serializeAws_json1_1DeleteAcceleratorRequest = (
  input: DeleteAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

const serializeAws_json1_1DeleteCustomRoutingAcceleratorRequest = (
  input: DeleteCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

const serializeAws_json1_1DeleteCustomRoutingEndpointGroupRequest = (
  input: DeleteCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

const serializeAws_json1_1DeleteCustomRoutingListenerRequest = (
  input: DeleteCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
  };
};

const serializeAws_json1_1DeleteEndpointGroupRequest = (
  input: DeleteEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

const serializeAws_json1_1DeleteListenerRequest = (input: DeleteListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
  };
};

const serializeAws_json1_1DenyCustomRoutingTrafficRequest = (
  input: DenyCustomRoutingTrafficRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DenyAllTrafficToEndpoint !== undefined &&
      input.DenyAllTrafficToEndpoint !== null && { DenyAllTrafficToEndpoint: input.DenyAllTrafficToEndpoint }),
    ...(input.DestinationAddresses !== undefined &&
      input.DestinationAddresses !== null && {
        DestinationAddresses: serializeAws_json1_1DestinationAddresses(input.DestinationAddresses, context),
      }),
    ...(input.DestinationPorts !== undefined &&
      input.DestinationPorts !== null && {
        DestinationPorts: serializeAws_json1_1DestinationPorts(input.DestinationPorts, context),
      }),
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
  };
};

const serializeAws_json1_1DeprovisionByoipCidrRequest = (
  input: DeprovisionByoipCidrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
  };
};

const serializeAws_json1_1DescribeAcceleratorAttributesRequest = (
  input: DescribeAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

const serializeAws_json1_1DescribeAcceleratorRequest = (
  input: DescribeAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

const serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesRequest = (
  input: DescribeCustomRoutingAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

const serializeAws_json1_1DescribeCustomRoutingAcceleratorRequest = (
  input: DescribeCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

const serializeAws_json1_1DescribeCustomRoutingEndpointGroupRequest = (
  input: DescribeCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

const serializeAws_json1_1DescribeCustomRoutingListenerRequest = (
  input: DescribeCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
  };
};

const serializeAws_json1_1DescribeEndpointGroupRequest = (
  input: DescribeEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

const serializeAws_json1_1DescribeListenerRequest = (input: DescribeListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
  };
};

const serializeAws_json1_1DestinationAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DestinationPorts = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EndpointConfiguration = (input: EndpointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ClientIPPreservationEnabled !== undefined &&
      input.ClientIPPreservationEnabled !== null && { ClientIPPreservationEnabled: input.ClientIPPreservationEnabled }),
    ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
    ...(input.Weight !== undefined && input.Weight !== null && { Weight: input.Weight }),
  };
};

const serializeAws_json1_1EndpointConfigurations = (input: EndpointConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EndpointConfiguration(entry, context);
    });
};

const serializeAws_json1_1EndpointIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IpAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListAcceleratorsRequest = (input: ListAcceleratorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListByoipCidrsRequest = (input: ListByoipCidrsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCustomRoutingAcceleratorsRequest = (
  input: ListCustomRoutingAcceleratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCustomRoutingEndpointGroupsRequest = (
  input: ListCustomRoutingEndpointGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCustomRoutingListenersRequest = (
  input: ListCustomRoutingListenersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationRequest = (
  input: ListCustomRoutingPortMappingsByDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationAddress !== undefined &&
      input.DestinationAddress !== null && { DestinationAddress: input.DestinationAddress }),
    ...(input.EndpointId !== undefined && input.EndpointId !== null && { EndpointId: input.EndpointId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCustomRoutingPortMappingsRequest = (
  input: ListCustomRoutingPortMappingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEndpointGroupsRequest = (
  input: ListEndpointGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListListenersRequest = (input: ListListenersRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1PortOverride = (input: PortOverride, context: __SerdeContext): any => {
  return {
    ...(input.EndpointPort !== undefined && input.EndpointPort !== null && { EndpointPort: input.EndpointPort }),
    ...(input.ListenerPort !== undefined && input.ListenerPort !== null && { ListenerPort: input.ListenerPort }),
  };
};

const serializeAws_json1_1PortOverrides = (input: PortOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PortOverride(entry, context);
    });
};

const serializeAws_json1_1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
    ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
  };
};

const serializeAws_json1_1PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PortRange(entry, context);
    });
};

const serializeAws_json1_1ProvisionByoipCidrRequest = (
  input: ProvisionByoipCidrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
    ...(input.CidrAuthorizationContext !== undefined &&
      input.CidrAuthorizationContext !== null && {
        CidrAuthorizationContext: serializeAws_json1_1CidrAuthorizationContext(input.CidrAuthorizationContext, context),
      }),
  };
};

const serializeAws_json1_1RemoveCustomRoutingEndpointsRequest = (
  input: RemoveCustomRoutingEndpointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointIds !== undefined &&
      input.EndpointIds !== null && { EndpointIds: serializeAws_json1_1EndpointIds(input.EndpointIds, context) }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAcceleratorAttributesRequest = (
  input: UpdateAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.FlowLogsEnabled !== undefined &&
      input.FlowLogsEnabled !== null && { FlowLogsEnabled: input.FlowLogsEnabled }),
    ...(input.FlowLogsS3Bucket !== undefined &&
      input.FlowLogsS3Bucket !== null && { FlowLogsS3Bucket: input.FlowLogsS3Bucket }),
    ...(input.FlowLogsS3Prefix !== undefined &&
      input.FlowLogsS3Prefix !== null && { FlowLogsS3Prefix: input.FlowLogsS3Prefix }),
  };
};

const serializeAws_json1_1UpdateAcceleratorRequest = (
  input: UpdateAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesRequest = (
  input: UpdateCustomRoutingAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.FlowLogsEnabled !== undefined &&
      input.FlowLogsEnabled !== null && { FlowLogsEnabled: input.FlowLogsEnabled }),
    ...(input.FlowLogsS3Bucket !== undefined &&
      input.FlowLogsS3Bucket !== null && { FlowLogsS3Bucket: input.FlowLogsS3Bucket }),
    ...(input.FlowLogsS3Prefix !== undefined &&
      input.FlowLogsS3Prefix !== null && { FlowLogsS3Prefix: input.FlowLogsS3Prefix }),
  };
};

const serializeAws_json1_1UpdateCustomRoutingAcceleratorRequest = (
  input: UpdateCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn !== undefined &&
      input.AcceleratorArn !== null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateCustomRoutingListenerRequest = (
  input: UpdateCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    ...(input.PortRanges !== undefined &&
      input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
  };
};

const serializeAws_json1_1UpdateEndpointGroupRequest = (
  input: UpdateEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointConfigurations !== undefined &&
      input.EndpointConfigurations !== null && {
        EndpointConfigurations: serializeAws_json1_1EndpointConfigurations(input.EndpointConfigurations, context),
      }),
    ...(input.EndpointGroupArn !== undefined &&
      input.EndpointGroupArn !== null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.HealthCheckIntervalSeconds !== undefined &&
      input.HealthCheckIntervalSeconds !== null && { HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds }),
    ...(input.HealthCheckPath !== undefined &&
      input.HealthCheckPath !== null && { HealthCheckPath: input.HealthCheckPath }),
    ...(input.HealthCheckPort !== undefined &&
      input.HealthCheckPort !== null && { HealthCheckPort: input.HealthCheckPort }),
    ...(input.HealthCheckProtocol !== undefined &&
      input.HealthCheckProtocol !== null && { HealthCheckProtocol: input.HealthCheckProtocol }),
    ...(input.PortOverrides !== undefined &&
      input.PortOverrides !== null && {
        PortOverrides: serializeAws_json1_1PortOverrides(input.PortOverrides, context),
      }),
    ...(input.ThresholdCount !== undefined &&
      input.ThresholdCount !== null && { ThresholdCount: input.ThresholdCount }),
    ...(input.TrafficDialPercentage !== undefined &&
      input.TrafficDialPercentage !== null && { TrafficDialPercentage: __serializeFloat(input.TrafficDialPercentage) }),
  };
};

const serializeAws_json1_1UpdateListenerRequest = (input: UpdateListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientAffinity !== undefined &&
      input.ClientAffinity !== null && { ClientAffinity: input.ClientAffinity }),
    ...(input.ListenerArn !== undefined && input.ListenerArn !== null && { ListenerArn: input.ListenerArn }),
    ...(input.PortRanges !== undefined &&
      input.PortRanges !== null && { PortRanges: serializeAws_json1_1PortRanges(input.PortRanges, context) }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_json1_1WithdrawByoipCidrRequest = (
  input: WithdrawByoipCidrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }),
  };
};

const deserializeAws_json1_1Accelerator = (output: any, context: __SerdeContext): Accelerator => {
  return {
    AcceleratorArn: __expectString(output.AcceleratorArn),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    Enabled: __expectBoolean(output.Enabled),
    IpAddressType: __expectString(output.IpAddressType),
    IpSets:
      output.IpSets !== undefined && output.IpSets !== null
        ? deserializeAws_json1_1IpSets(output.IpSets, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1AcceleratorAttributes = (output: any, context: __SerdeContext): AcceleratorAttributes => {
  return {
    FlowLogsEnabled: __expectBoolean(output.FlowLogsEnabled),
    FlowLogsS3Bucket: __expectString(output.FlowLogsS3Bucket),
    FlowLogsS3Prefix: __expectString(output.FlowLogsS3Prefix),
  } as any;
};

const deserializeAws_json1_1AcceleratorNotDisabledException = (
  output: any,
  context: __SerdeContext
): AcceleratorNotDisabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AcceleratorNotFoundException = (
  output: any,
  context: __SerdeContext
): AcceleratorNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Accelerators = (output: any, context: __SerdeContext): Accelerator[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Accelerator(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AddCustomRoutingEndpointsResponse = (
  output: any,
  context: __SerdeContext
): AddCustomRoutingEndpointsResponse => {
  return {
    EndpointDescriptions:
      output.EndpointDescriptions !== undefined && output.EndpointDescriptions !== null
        ? deserializeAws_json1_1CustomRoutingEndpointDescriptions(output.EndpointDescriptions, context)
        : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
  } as any;
};

const deserializeAws_json1_1AdvertiseByoipCidrResponse = (
  output: any,
  context: __SerdeContext
): AdvertiseByoipCidrResponse => {
  return {
    ByoipCidr:
      output.ByoipCidr !== undefined && output.ByoipCidr !== null
        ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociatedEndpointGroupFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedEndpointGroupFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AssociatedListenerFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedListenerFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ByoipCidr = (output: any, context: __SerdeContext): ByoipCidr => {
  return {
    Cidr: __expectString(output.Cidr),
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_json1_1ByoipCidrEvents(output.Events, context)
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ByoipCidrEvent = (output: any, context: __SerdeContext): ByoipCidrEvent => {
  return {
    Message: __expectString(output.Message),
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ByoipCidrEvents = (output: any, context: __SerdeContext): ByoipCidrEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ByoipCidrEvent(entry, context);
    });
};

const deserializeAws_json1_1ByoipCidrNotFoundException = (
  output: any,
  context: __SerdeContext
): ByoipCidrNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ByoipCidrs = (output: any, context: __SerdeContext): ByoipCidr[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ByoipCidr(entry, context);
    });
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): CreateAcceleratorResponse => {
  return {
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingAcceleratorResponse => {
  return {
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1CustomRoutingAccelerator(output.Accelerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCustomRoutingEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1CustomRoutingEndpointGroup(output.EndpointGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateCustomRoutingListenerResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingListenerResponse => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1CustomRoutingListener(output.Listener, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateListenerResponse = (output: any, context: __SerdeContext): CreateListenerResponse => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1Listener(output.Listener, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomRoutingAccelerator = (
  output: any,
  context: __SerdeContext
): CustomRoutingAccelerator => {
  return {
    AcceleratorArn: __expectString(output.AcceleratorArn),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    Enabled: __expectBoolean(output.Enabled),
    IpAddressType: __expectString(output.IpAddressType),
    IpSets:
      output.IpSets !== undefined && output.IpSets !== null
        ? deserializeAws_json1_1IpSets(output.IpSets, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1CustomRoutingAcceleratorAttributes = (
  output: any,
  context: __SerdeContext
): CustomRoutingAcceleratorAttributes => {
  return {
    FlowLogsEnabled: __expectBoolean(output.FlowLogsEnabled),
    FlowLogsS3Bucket: __expectString(output.FlowLogsS3Bucket),
    FlowLogsS3Prefix: __expectString(output.FlowLogsS3Prefix),
  } as any;
};

const deserializeAws_json1_1CustomRoutingAccelerators = (
  output: any,
  context: __SerdeContext
): CustomRoutingAccelerator[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomRoutingAccelerator(entry, context);
    });
};

const deserializeAws_json1_1CustomRoutingDestinationDescription = (
  output: any,
  context: __SerdeContext
): CustomRoutingDestinationDescription => {
  return {
    FromPort: __expectInt32(output.FromPort),
    Protocols:
      output.Protocols !== undefined && output.Protocols !== null
        ? deserializeAws_json1_1Protocols(output.Protocols, context)
        : undefined,
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

const deserializeAws_json1_1CustomRoutingDestinationDescriptions = (
  output: any,
  context: __SerdeContext
): CustomRoutingDestinationDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomRoutingDestinationDescription(entry, context);
    });
};

const deserializeAws_json1_1CustomRoutingEndpointDescription = (
  output: any,
  context: __SerdeContext
): CustomRoutingEndpointDescription => {
  return {
    EndpointId: __expectString(output.EndpointId),
  } as any;
};

const deserializeAws_json1_1CustomRoutingEndpointDescriptions = (
  output: any,
  context: __SerdeContext
): CustomRoutingEndpointDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomRoutingEndpointDescription(entry, context);
    });
};

const deserializeAws_json1_1CustomRoutingEndpointGroup = (
  output: any,
  context: __SerdeContext
): CustomRoutingEndpointGroup => {
  return {
    DestinationDescriptions:
      output.DestinationDescriptions !== undefined && output.DestinationDescriptions !== null
        ? deserializeAws_json1_1CustomRoutingDestinationDescriptions(output.DestinationDescriptions, context)
        : undefined,
    EndpointDescriptions:
      output.EndpointDescriptions !== undefined && output.EndpointDescriptions !== null
        ? deserializeAws_json1_1CustomRoutingEndpointDescriptions(output.EndpointDescriptions, context)
        : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointGroupRegion: __expectString(output.EndpointGroupRegion),
  } as any;
};

const deserializeAws_json1_1CustomRoutingEndpointGroups = (
  output: any,
  context: __SerdeContext
): CustomRoutingEndpointGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomRoutingEndpointGroup(entry, context);
    });
};

const deserializeAws_json1_1CustomRoutingListener = (output: any, context: __SerdeContext): CustomRoutingListener => {
  return {
    ListenerArn: __expectString(output.ListenerArn),
    PortRanges:
      output.PortRanges !== undefined && output.PortRanges !== null
        ? deserializeAws_json1_1PortRanges(output.PortRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomRoutingListeners = (
  output: any,
  context: __SerdeContext
): CustomRoutingListener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomRoutingListener(entry, context);
    });
};

const deserializeAws_json1_1CustomRoutingProtocols = (
  output: any,
  context: __SerdeContext
): (CustomRoutingProtocol | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeprovisionByoipCidrResponse = (
  output: any,
  context: __SerdeContext
): DeprovisionByoipCidrResponse => {
  return {
    ByoipCidr:
      output.ByoipCidr !== undefined && output.ByoipCidr !== null
        ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
        ? deserializeAws_json1_1AcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorResponse => {
  return {
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
        ? deserializeAws_json1_1CustomRoutingAcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingAcceleratorResponse => {
  return {
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1CustomRoutingAccelerator(output.Accelerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCustomRoutingEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1CustomRoutingEndpointGroup(output.EndpointGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCustomRoutingListenerResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingListenerResponse => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1CustomRoutingListener(output.Listener, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeListenerResponse = (
  output: any,
  context: __SerdeContext
): DescribeListenerResponse => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1Listener(output.Listener, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationPortMapping = (output: any, context: __SerdeContext): DestinationPortMapping => {
  return {
    AcceleratorArn: __expectString(output.AcceleratorArn),
    AcceleratorSocketAddresses:
      output.AcceleratorSocketAddresses !== undefined && output.AcceleratorSocketAddresses !== null
        ? deserializeAws_json1_1SocketAddresses(output.AcceleratorSocketAddresses, context)
        : undefined,
    DestinationSocketAddress:
      output.DestinationSocketAddress !== undefined && output.DestinationSocketAddress !== null
        ? deserializeAws_json1_1SocketAddress(output.DestinationSocketAddress, context)
        : undefined,
    DestinationTrafficState: __expectString(output.DestinationTrafficState),
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointGroupRegion: __expectString(output.EndpointGroupRegion),
    EndpointId: __expectString(output.EndpointId),
    IpAddressType: __expectString(output.IpAddressType),
  } as any;
};

const deserializeAws_json1_1DestinationPortMappings = (
  output: any,
  context: __SerdeContext
): DestinationPortMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DestinationPortMapping(entry, context);
    });
};

const deserializeAws_json1_1EndpointAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EndpointAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EndpointDescription = (output: any, context: __SerdeContext): EndpointDescription => {
  return {
    ClientIPPreservationEnabled: __expectBoolean(output.ClientIPPreservationEnabled),
    EndpointId: __expectString(output.EndpointId),
    HealthReason: __expectString(output.HealthReason),
    HealthState: __expectString(output.HealthState),
    Weight: __expectInt32(output.Weight),
  } as any;
};

const deserializeAws_json1_1EndpointDescriptions = (output: any, context: __SerdeContext): EndpointDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EndpointDescription(entry, context);
    });
};

const deserializeAws_json1_1EndpointGroup = (output: any, context: __SerdeContext): EndpointGroup => {
  return {
    EndpointDescriptions:
      output.EndpointDescriptions !== undefined && output.EndpointDescriptions !== null
        ? deserializeAws_json1_1EndpointDescriptions(output.EndpointDescriptions, context)
        : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointGroupRegion: __expectString(output.EndpointGroupRegion),
    HealthCheckIntervalSeconds: __expectInt32(output.HealthCheckIntervalSeconds),
    HealthCheckPath: __expectString(output.HealthCheckPath),
    HealthCheckPort: __expectInt32(output.HealthCheckPort),
    HealthCheckProtocol: __expectString(output.HealthCheckProtocol),
    PortOverrides:
      output.PortOverrides !== undefined && output.PortOverrides !== null
        ? deserializeAws_json1_1PortOverrides(output.PortOverrides, context)
        : undefined,
    ThresholdCount: __expectInt32(output.ThresholdCount),
    TrafficDialPercentage: __limitedParseFloat32(output.TrafficDialPercentage),
  } as any;
};

const deserializeAws_json1_1EndpointGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EndpointGroupAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EndpointGroupNotFoundException = (
  output: any,
  context: __SerdeContext
): EndpointGroupNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EndpointGroups = (output: any, context: __SerdeContext): EndpointGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EndpointGroup(entry, context);
    });
};

const deserializeAws_json1_1EndpointNotFoundException = (
  output: any,
  context: __SerdeContext
): EndpointNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IncorrectCidrStateException = (
  output: any,
  context: __SerdeContext
): IncorrectCidrStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPortRangeException = (
  output: any,
  context: __SerdeContext
): InvalidPortRangeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IpAddresses = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1IpSet = (output: any, context: __SerdeContext): IpSet => {
  return {
    IpAddresses:
      output.IpAddresses !== undefined && output.IpAddresses !== null
        ? deserializeAws_json1_1IpAddresses(output.IpAddresses, context)
        : undefined,
    IpFamily: __expectString(output.IpFamily),
  } as any;
};

const deserializeAws_json1_1IpSets = (output: any, context: __SerdeContext): IpSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IpSet(entry, context);
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAcceleratorsResponse = (
  output: any,
  context: __SerdeContext
): ListAcceleratorsResponse => {
  return {
    Accelerators:
      output.Accelerators !== undefined && output.Accelerators !== null
        ? deserializeAws_json1_1Accelerators(output.Accelerators, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListByoipCidrsResponse = (output: any, context: __SerdeContext): ListByoipCidrsResponse => {
  return {
    ByoipCidrs:
      output.ByoipCidrs !== undefined && output.ByoipCidrs !== null
        ? deserializeAws_json1_1ByoipCidrs(output.ByoipCidrs, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomRoutingAcceleratorsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingAcceleratorsResponse => {
  return {
    Accelerators:
      output.Accelerators !== undefined && output.Accelerators !== null
        ? deserializeAws_json1_1CustomRoutingAccelerators(output.Accelerators, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomRoutingEndpointGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingEndpointGroupsResponse => {
  return {
    EndpointGroups:
      output.EndpointGroups !== undefined && output.EndpointGroups !== null
        ? deserializeAws_json1_1CustomRoutingEndpointGroups(output.EndpointGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomRoutingListenersResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingListenersResponse => {
  return {
    Listeners:
      output.Listeners !== undefined && output.Listeners !== null
        ? deserializeAws_json1_1CustomRoutingListeners(output.Listeners, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingPortMappingsByDestinationResponse => {
  return {
    DestinationPortMappings:
      output.DestinationPortMappings !== undefined && output.DestinationPortMappings !== null
        ? deserializeAws_json1_1DestinationPortMappings(output.DestinationPortMappings, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomRoutingPortMappingsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingPortMappingsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PortMappings:
      output.PortMappings !== undefined && output.PortMappings !== null
        ? deserializeAws_json1_1PortMappings(output.PortMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListEndpointGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointGroupsResponse => {
  return {
    EndpointGroups:
      output.EndpointGroups !== undefined && output.EndpointGroups !== null
        ? deserializeAws_json1_1EndpointGroups(output.EndpointGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1Listener = (output: any, context: __SerdeContext): Listener => {
  return {
    ClientAffinity: __expectString(output.ClientAffinity),
    ListenerArn: __expectString(output.ListenerArn),
    PortRanges:
      output.PortRanges !== undefined && output.PortRanges !== null
        ? deserializeAws_json1_1PortRanges(output.PortRanges, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_json1_1ListenerNotFoundException = (
  output: any,
  context: __SerdeContext
): ListenerNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Listeners = (output: any, context: __SerdeContext): Listener[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Listener(entry, context);
    });
};

const deserializeAws_json1_1ListListenersResponse = (output: any, context: __SerdeContext): ListListenersResponse => {
  return {
    Listeners:
      output.Listeners !== undefined && output.Listeners !== null
        ? deserializeAws_json1_1Listeners(output.Listeners, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    AcceleratorPort: __expectInt32(output.AcceleratorPort),
    DestinationSocketAddress:
      output.DestinationSocketAddress !== undefined && output.DestinationSocketAddress !== null
        ? deserializeAws_json1_1SocketAddress(output.DestinationSocketAddress, context)
        : undefined,
    DestinationTrafficState: __expectString(output.DestinationTrafficState),
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointId: __expectString(output.EndpointId),
    Protocols:
      output.Protocols !== undefined && output.Protocols !== null
        ? deserializeAws_json1_1CustomRoutingProtocols(output.Protocols, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PortMappings = (output: any, context: __SerdeContext): PortMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortMapping(entry, context);
    });
};

const deserializeAws_json1_1PortOverride = (output: any, context: __SerdeContext): PortOverride => {
  return {
    EndpointPort: __expectInt32(output.EndpointPort),
    ListenerPort: __expectInt32(output.ListenerPort),
  } as any;
};

const deserializeAws_json1_1PortOverrides = (output: any, context: __SerdeContext): PortOverride[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortOverride(entry, context);
    });
};

const deserializeAws_json1_1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    FromPort: __expectInt32(output.FromPort),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

const deserializeAws_json1_1PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortRange(entry, context);
    });
};

const deserializeAws_json1_1Protocols = (output: any, context: __SerdeContext): (Protocol | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ProvisionByoipCidrResponse = (
  output: any,
  context: __SerdeContext
): ProvisionByoipCidrResponse => {
  return {
    ByoipCidr:
      output.ByoipCidr !== undefined && output.ByoipCidr !== null
        ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SocketAddress = (output: any, context: __SerdeContext): SocketAddress => {
  return {
    IpAddress: __expectString(output.IpAddress),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1SocketAddresses = (output: any, context: __SerdeContext): SocketAddress[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SocketAddress(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
        ? deserializeAws_json1_1AcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorResponse => {
  return {
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1Accelerator(output.Accelerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes !== undefined && output.AcceleratorAttributes !== null
        ? deserializeAws_json1_1CustomRoutingAcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingAcceleratorResponse => {
  return {
    Accelerator:
      output.Accelerator !== undefined && output.Accelerator !== null
        ? deserializeAws_json1_1CustomRoutingAccelerator(output.Accelerator, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCustomRoutingListenerResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingListenerResponse => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1CustomRoutingListener(output.Listener, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup !== undefined && output.EndpointGroup !== null
        ? deserializeAws_json1_1EndpointGroup(output.EndpointGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateListenerResponse = (output: any, context: __SerdeContext): UpdateListenerResponse => {
  return {
    Listener:
      output.Listener !== undefined && output.Listener !== null
        ? deserializeAws_json1_1Listener(output.Listener, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WithdrawByoipCidrResponse = (
  output: any,
  context: __SerdeContext
): WithdrawByoipCidrResponse => {
  return {
    ByoipCidr:
      output.ByoipCidr !== undefined && output.ByoipCidr !== null
        ? deserializeAws_json1_1ByoipCidr(output.ByoipCidr, context)
        : undefined,
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
