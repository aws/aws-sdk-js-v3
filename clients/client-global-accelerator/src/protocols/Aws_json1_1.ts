// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "../commands/AddCustomRoutingEndpointsCommand";
import { AddEndpointsCommandInput, AddEndpointsCommandOutput } from "../commands/AddEndpointsCommand";
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
import { RemoveEndpointsCommandInput, RemoveEndpointsCommandOutput } from "../commands/RemoveEndpointsCommand";
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
import { GlobalAcceleratorServiceException as __BaseException } from "../models/GlobalAcceleratorServiceException";
import {
  Accelerator,
  AcceleratorAttributes,
  AcceleratorEvent,
  AcceleratorNotDisabledException,
  AcceleratorNotFoundException,
  AccessDeniedException,
  AddCustomRoutingEndpointsRequest,
  AddCustomRoutingEndpointsResponse,
  AddEndpointsRequest,
  AddEndpointsResponse,
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
  EndpointIdentifier,
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
  Listener,
  ListenerNotFoundException,
  ListListenersRequest,
  ListListenersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PortMapping,
  PortOverride,
  PortRange,
  Protocol,
  ProvisionByoipCidrRequest,
  ProvisionByoipCidrResponse,
  RemoveCustomRoutingEndpointsRequest,
  RemoveEndpointsRequest,
  SocketAddress,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TransactionInProgressException,
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

/**
 * serializeAws_json1_1AddCustomRoutingEndpointsCommand
 */
export const se_AddCustomRoutingEndpointsCommand = async (
  input: AddCustomRoutingEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_AddCustomRoutingEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddEndpointsCommand
 */
export const se_AddEndpointsCommand = async (
  input: AddEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AddEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_AddEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdvertiseByoipCidrCommand
 */
export const se_AdvertiseByoipCidrCommand = async (
  input: AdvertiseByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AdvertiseByoipCidr",
  };
  let body: any;
  body = JSON.stringify(se_AdvertiseByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllowCustomRoutingTrafficCommand
 */
export const se_AllowCustomRoutingTrafficCommand = async (
  input: AllowCustomRoutingTrafficCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic",
  };
  let body: any;
  body = JSON.stringify(se_AllowCustomRoutingTrafficRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAcceleratorCommand
 */
export const se_CreateAcceleratorCommand = async (
  input: CreateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_CreateAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomRoutingAcceleratorCommand
 */
export const se_CreateCustomRoutingAcceleratorCommand = async (
  input: CreateCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_CreateCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand
 */
export const se_CreateCustomRoutingEndpointGroupCommand = async (
  input: CreateCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateCustomRoutingEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomRoutingListenerCommand
 */
export const se_CreateCustomRoutingListenerCommand = async (
  input: CreateCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(se_CreateCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointGroupCommand
 */
export const se_CreateEndpointGroupCommand = async (
  input: CreateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateListenerCommand
 */
export const se_CreateListenerCommand = async (
  input: CreateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.CreateListener",
  };
  let body: any;
  body = JSON.stringify(se_CreateListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAcceleratorCommand
 */
export const se_DeleteAcceleratorCommand = async (
  input: DeleteAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand
 */
export const se_DeleteCustomRoutingAcceleratorCommand = async (
  input: DeleteCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand
 */
export const se_DeleteCustomRoutingEndpointGroupCommand = async (
  input: DeleteCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCustomRoutingEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomRoutingListenerCommand
 */
export const se_DeleteCustomRoutingListenerCommand = async (
  input: DeleteCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointGroupCommand
 */
export const se_DeleteEndpointGroupCommand = async (
  input: DeleteEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteListenerCommand
 */
export const se_DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeleteListener",
  };
  let body: any;
  body = JSON.stringify(se_DeleteListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DenyCustomRoutingTrafficCommand
 */
export const se_DenyCustomRoutingTrafficCommand = async (
  input: DenyCustomRoutingTrafficCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic",
  };
  let body: any;
  body = JSON.stringify(se_DenyCustomRoutingTrafficRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeprovisionByoipCidrCommand
 */
export const se_DeprovisionByoipCidrCommand = async (
  input: DeprovisionByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DeprovisionByoipCidr",
  };
  let body: any;
  body = JSON.stringify(se_DeprovisionByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAcceleratorCommand
 */
export const se_DescribeAcceleratorCommand = async (
  input: DescribeAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAcceleratorAttributesCommand
 */
export const se_DescribeAcceleratorAttributesCommand = async (
  input: DescribeAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand
 */
export const se_DescribeCustomRoutingAcceleratorCommand = async (
  input: DescribeCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand
 */
export const se_DescribeCustomRoutingAcceleratorAttributesCommand = async (
  input: DescribeCustomRoutingAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCustomRoutingAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand
 */
export const se_DescribeCustomRoutingEndpointGroupCommand = async (
  input: DescribeCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCustomRoutingEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingListenerCommand
 */
export const se_DescribeCustomRoutingListenerCommand = async (
  input: DescribeCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointGroupCommand
 */
export const se_DescribeEndpointGroupCommand = async (
  input: DescribeEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeListenerCommand
 */
export const se_DescribeListenerCommand = async (
  input: DescribeListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.DescribeListener",
  };
  let body: any;
  body = JSON.stringify(se_DescribeListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAcceleratorsCommand
 */
export const se_ListAcceleratorsCommand = async (
  input: ListAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListAccelerators",
  };
  let body: any;
  body = JSON.stringify(se_ListAcceleratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListByoipCidrsCommand
 */
export const se_ListByoipCidrsCommand = async (
  input: ListByoipCidrsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListByoipCidrs",
  };
  let body: any;
  body = JSON.stringify(se_ListByoipCidrsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingAcceleratorsCommand
 */
export const se_ListCustomRoutingAcceleratorsCommand = async (
  input: ListCustomRoutingAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators",
  };
  let body: any;
  body = JSON.stringify(se_ListCustomRoutingAcceleratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand
 */
export const se_ListCustomRoutingEndpointGroupsCommand = async (
  input: ListCustomRoutingEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListCustomRoutingEndpointGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingListenersCommand
 */
export const se_ListCustomRoutingListenersCommand = async (
  input: ListCustomRoutingListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingListeners",
  };
  let body: any;
  body = JSON.stringify(se_ListCustomRoutingListenersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingPortMappingsCommand
 */
export const se_ListCustomRoutingPortMappingsCommand = async (
  input: ListCustomRoutingPortMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings",
  };
  let body: any;
  body = JSON.stringify(se_ListCustomRoutingPortMappingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand
 */
export const se_ListCustomRoutingPortMappingsByDestinationCommand = async (
  input: ListCustomRoutingPortMappingsByDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination",
  };
  let body: any;
  body = JSON.stringify(se_ListCustomRoutingPortMappingsByDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointGroupsCommand
 */
export const se_ListEndpointGroupsCommand = async (
  input: ListEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListEndpointGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListEndpointGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListListenersCommand
 */
export const se_ListListenersCommand = async (
  input: ListListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListListeners",
  };
  let body: any;
  body = JSON.stringify(se_ListListenersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ProvisionByoipCidrCommand
 */
export const se_ProvisionByoipCidrCommand = async (
  input: ProvisionByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.ProvisionByoipCidr",
  };
  let body: any;
  body = JSON.stringify(se_ProvisionByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveCustomRoutingEndpointsCommand
 */
export const se_RemoveCustomRoutingEndpointsCommand = async (
  input: RemoveCustomRoutingEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_RemoveCustomRoutingEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveEndpointsCommand
 */
export const se_RemoveEndpointsCommand = async (
  input: RemoveEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.RemoveEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_RemoveEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAcceleratorCommand
 */
export const se_UpdateAcceleratorCommand = async (
  input: UpdateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAcceleratorAttributesCommand
 */
export const se_UpdateAcceleratorAttributesCommand = async (
  input: UpdateAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand
 */
export const se_UpdateCustomRoutingAcceleratorCommand = async (
  input: UpdateCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCustomRoutingAcceleratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand
 */
export const se_UpdateCustomRoutingAcceleratorAttributesCommand = async (
  input: UpdateCustomRoutingAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCustomRoutingAcceleratorAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomRoutingListenerCommand
 */
export const se_UpdateCustomRoutingListenerCommand = async (
  input: UpdateCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateCustomRoutingListener",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCustomRoutingListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointGroupCommand
 */
export const se_UpdateEndpointGroupCommand = async (
  input: UpdateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateEndpointGroup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEndpointGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateListenerCommand
 */
export const se_UpdateListenerCommand = async (
  input: UpdateListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.UpdateListener",
  };
  let body: any;
  body = JSON.stringify(se_UpdateListenerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1WithdrawByoipCidrCommand
 */
export const se_WithdrawByoipCidrCommand = async (
  input: WithdrawByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "GlobalAccelerator_V20180706.WithdrawByoipCidr",
  };
  let body: any;
  body = JSON.stringify(se_WithdrawByoipCidrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddCustomRoutingEndpointsCommand
 */
export const de_AddCustomRoutingEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCustomRoutingEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddCustomRoutingEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddCustomRoutingEndpointsResponse(data, context);
  const response: AddCustomRoutingEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddCustomRoutingEndpointsCommandError
 */
const de_AddCustomRoutingEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCustomRoutingEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.globalaccelerator#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EndpointAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointAlreadyExistsException":
      throw await de_EndpointAlreadyExistsExceptionRes(parsedOutput, context);
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AddEndpointsCommand
 */
export const de_AddEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddEndpointsResponse(data, context);
  const response: AddEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddEndpointsCommandError
 */
const de_AddEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.globalaccelerator#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AdvertiseByoipCidrCommand
 */
export const de_AdvertiseByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdvertiseByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdvertiseByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdvertiseByoipCidrResponse(data, context);
  const response: AdvertiseByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdvertiseByoipCidrCommandError
 */
const de_AdvertiseByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdvertiseByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ByoipCidrNotFoundException":
    case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
      throw await de_ByoipCidrNotFoundExceptionRes(parsedOutput, context);
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      throw await de_IncorrectCidrStateExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AllowCustomRoutingTrafficCommand
 */
export const de_AllowCustomRoutingTrafficCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllowCustomRoutingTrafficCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AllowCustomRoutingTrafficCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AllowCustomRoutingTrafficCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AllowCustomRoutingTrafficCommandError
 */
const de_AllowCustomRoutingTrafficCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AllowCustomRoutingTrafficCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAcceleratorCommand
 */
export const de_CreateAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAcceleratorResponse(data, context);
  const response: CreateAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAcceleratorCommandError
 */
const de_CreateAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand
 */
export const de_CreateCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomRoutingAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCustomRoutingAcceleratorResponse(data, context);
  const response: CreateCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCustomRoutingAcceleratorCommandError
 */
const de_CreateCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand
 */
export const de_CreateCustomRoutingEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomRoutingEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCustomRoutingEndpointGroupResponse(data, context);
  const response: CreateCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommandError
 */
const de_CreateCustomRoutingEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointGroupAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
      throw await de_EndpointGroupAlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      throw await de_InvalidPortRangeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateCustomRoutingListenerCommand
 */
export const de_CreateCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomRoutingListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCustomRoutingListenerResponse(data, context);
  const response: CreateCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCustomRoutingListenerCommandError
 */
const de_CreateCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      throw await de_InvalidPortRangeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEndpointGroupCommand
 */
export const de_CreateEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointGroupResponse(data, context);
  const response: CreateEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEndpointGroupCommandError
 */
const de_CreateEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointGroupAlreadyExistsException":
    case "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException":
      throw await de_EndpointGroupAlreadyExistsExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateListenerCommand
 */
export const de_CreateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateListenerResponse(data, context);
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateListenerCommandError
 */
const de_CreateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      throw await de_InvalidPortRangeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAcceleratorCommand
 */
export const de_DeleteAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAcceleratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAcceleratorCommandError
 */
const de_DeleteAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotDisabledException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
      throw await de_AcceleratorNotDisabledExceptionRes(parsedOutput, context);
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AssociatedListenerFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
      throw await de_AssociatedListenerFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand
 */
export const de_DeleteCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomRoutingAcceleratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommandError
 */
const de_DeleteCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotDisabledException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException":
      throw await de_AcceleratorNotDisabledExceptionRes(parsedOutput, context);
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AssociatedListenerFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedListenerFoundException":
      throw await de_AssociatedListenerFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand
 */
export const de_DeleteCustomRoutingEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomRoutingEndpointGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommandError
 */
const de_DeleteCustomRoutingEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteCustomRoutingListenerCommand
 */
export const de_DeleteCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomRoutingListenerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCustomRoutingListenerCommandError
 */
const de_DeleteCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociatedEndpointGroupFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
      throw await de_AssociatedEndpointGroupFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteEndpointGroupCommand
 */
export const de_DeleteEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEndpointGroupCommandError
 */
const de_DeleteEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteListenerCommand
 */
export const de_DeleteListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteListenerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteListenerCommandError
 */
const de_DeleteListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AssociatedEndpointGroupFoundException":
    case "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException":
      throw await de_AssociatedEndpointGroupFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DenyCustomRoutingTrafficCommand
 */
export const de_DenyCustomRoutingTrafficCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DenyCustomRoutingTrafficCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DenyCustomRoutingTrafficCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DenyCustomRoutingTrafficCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DenyCustomRoutingTrafficCommandError
 */
const de_DenyCustomRoutingTrafficCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DenyCustomRoutingTrafficCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeprovisionByoipCidrCommand
 */
export const de_DeprovisionByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprovisionByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeprovisionByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeprovisionByoipCidrResponse(data, context);
  const response: DeprovisionByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeprovisionByoipCidrCommandError
 */
const de_DeprovisionByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprovisionByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ByoipCidrNotFoundException":
    case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
      throw await de_ByoipCidrNotFoundExceptionRes(parsedOutput, context);
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      throw await de_IncorrectCidrStateExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAcceleratorCommand
 */
export const de_DescribeAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAcceleratorResponse(data, context);
  const response: DescribeAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAcceleratorCommandError
 */
const de_DescribeAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAcceleratorAttributesCommand
 */
export const de_DescribeAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAcceleratorAttributesResponse(data, context);
  const response: DescribeAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAcceleratorAttributesCommandError
 */
const de_DescribeAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommand
 */
export const de_DescribeCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomRoutingAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomRoutingAcceleratorResponse(data, context);
  const response: DescribeCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorCommandError
 */
const de_DescribeCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand
 */
export const de_DescribeCustomRoutingAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomRoutingAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomRoutingAcceleratorAttributesResponse(data, context);
  const response: DescribeCustomRoutingAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommandError
 */
const de_DescribeCustomRoutingAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand
 */
export const de_DescribeCustomRoutingEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomRoutingEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomRoutingEndpointGroupResponse(data, context);
  const response: DescribeCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommandError
 */
const de_DescribeCustomRoutingEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCustomRoutingListenerCommand
 */
export const de_DescribeCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomRoutingListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCustomRoutingListenerResponse(data, context);
  const response: DescribeCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingListenerCommandError
 */
const de_DescribeCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEndpointGroupCommand
 */
export const de_DescribeEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointGroupResponse(data, context);
  const response: DescribeEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEndpointGroupCommandError
 */
const de_DescribeEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeListenerCommand
 */
export const de_DescribeListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeListenerResponse(data, context);
  const response: DescribeListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeListenerCommandError
 */
const de_DescribeListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAcceleratorsCommand
 */
export const de_ListAcceleratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAcceleratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAcceleratorsResponse(data, context);
  const response: ListAcceleratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAcceleratorsCommandError
 */
const de_ListAcceleratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceleratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListByoipCidrsCommand
 */
export const de_ListByoipCidrsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByoipCidrsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListByoipCidrsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListByoipCidrsResponse(data, context);
  const response: ListByoipCidrsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListByoipCidrsCommandError
 */
const de_ListByoipCidrsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListByoipCidrsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCustomRoutingAcceleratorsCommand
 */
export const de_ListCustomRoutingAcceleratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingAcceleratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomRoutingAcceleratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomRoutingAcceleratorsResponse(data, context);
  const response: ListCustomRoutingAcceleratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCustomRoutingAcceleratorsCommandError
 */
const de_ListCustomRoutingAcceleratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingAcceleratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand
 */
export const de_ListCustomRoutingEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomRoutingEndpointGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomRoutingEndpointGroupsResponse(data, context);
  const response: ListCustomRoutingEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommandError
 */
const de_ListCustomRoutingEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCustomRoutingListenersCommand
 */
export const de_ListCustomRoutingListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomRoutingListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomRoutingListenersResponse(data, context);
  const response: ListCustomRoutingListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCustomRoutingListenersCommandError
 */
const de_ListCustomRoutingListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCustomRoutingPortMappingsCommand
 */
export const de_ListCustomRoutingPortMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomRoutingPortMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomRoutingPortMappingsResponse(data, context);
  const response: ListCustomRoutingPortMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCustomRoutingPortMappingsCommandError
 */
const de_ListCustomRoutingPortMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand
 */
export const de_ListCustomRoutingPortMappingsByDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomRoutingPortMappingsByDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomRoutingPortMappingsByDestinationResponse(data, context);
  const response: ListCustomRoutingPortMappingsByDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommandError
 */
const de_ListCustomRoutingPortMappingsByDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EndpointNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointNotFoundException":
      throw await de_EndpointNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEndpointGroupsCommand
 */
export const de_ListEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointGroupsResponse(data, context);
  const response: ListEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEndpointGroupsCommandError
 */
const de_ListEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListListenersCommand
 */
export const de_ListListenersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListListenersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListListenersResponse(data, context);
  const response: ListListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListListenersCommandError
 */
const de_ListListenersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListListenersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.globalaccelerator#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ProvisionByoipCidrCommand
 */
export const de_ProvisionByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ProvisionByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ProvisionByoipCidrResponse(data, context);
  const response: ProvisionByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ProvisionByoipCidrCommandError
 */
const de_ProvisionByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      throw await de_IncorrectCidrStateExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveCustomRoutingEndpointsCommand
 */
export const de_RemoveCustomRoutingEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveCustomRoutingEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveCustomRoutingEndpointsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveCustomRoutingEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveCustomRoutingEndpointsCommandError
 */
const de_RemoveCustomRoutingEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveCustomRoutingEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.globalaccelerator#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "EndpointNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointNotFoundException":
      throw await de_EndpointNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveEndpointsCommand
 */
export const de_RemoveEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveEndpointsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveEndpointsCommandError
 */
const de_RemoveEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "TransactionInProgressException":
    case "com.amazonaws.globalaccelerator#TransactionInProgressException":
      throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAcceleratorCommand
 */
export const de_UpdateAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAcceleratorResponse(data, context);
  const response: UpdateAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAcceleratorCommandError
 */
const de_UpdateAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAcceleratorAttributesCommand
 */
export const de_UpdateAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAcceleratorAttributesResponse(data, context);
  const response: UpdateAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAcceleratorAttributesCommandError
 */
const de_UpdateAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand
 */
export const de_UpdateCustomRoutingAcceleratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCustomRoutingAcceleratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCustomRoutingAcceleratorResponse(data, context);
  const response: UpdateCustomRoutingAcceleratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommandError
 */
const de_UpdateCustomRoutingAcceleratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand
 */
export const de_UpdateCustomRoutingAcceleratorAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCustomRoutingAcceleratorAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCustomRoutingAcceleratorAttributesResponse(data, context);
  const response: UpdateCustomRoutingAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommandError
 */
const de_UpdateCustomRoutingAcceleratorAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AcceleratorNotFoundException":
    case "com.amazonaws.globalaccelerator#AcceleratorNotFoundException":
      throw await de_AcceleratorNotFoundExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateCustomRoutingListenerCommand
 */
export const de_UpdateCustomRoutingListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCustomRoutingListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCustomRoutingListenerResponse(data, context);
  const response: UpdateCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCustomRoutingListenerCommandError
 */
const de_UpdateCustomRoutingListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomRoutingListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      throw await de_InvalidPortRangeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateEndpointGroupCommand
 */
export const de_UpdateEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEndpointGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEndpointGroupResponse(data, context);
  const response: UpdateEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEndpointGroupCommandError
 */
const de_UpdateEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointGroupNotFoundException":
    case "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException":
      throw await de_EndpointGroupNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateListenerCommand
 */
export const de_UpdateListenerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateListenerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateListenerResponse(data, context);
  const response: UpdateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateListenerCommandError
 */
const de_UpdateListenerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListenerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidPortRangeException":
    case "com.amazonaws.globalaccelerator#InvalidPortRangeException":
      throw await de_InvalidPortRangeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.globalaccelerator#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ListenerNotFoundException":
    case "com.amazonaws.globalaccelerator#ListenerNotFoundException":
      throw await de_ListenerNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1WithdrawByoipCidrCommand
 */
export const de_WithdrawByoipCidrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WithdrawByoipCidrCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_WithdrawByoipCidrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_WithdrawByoipCidrResponse(data, context);
  const response: WithdrawByoipCidrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1WithdrawByoipCidrCommandError
 */
const de_WithdrawByoipCidrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WithdrawByoipCidrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.globalaccelerator#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ByoipCidrNotFoundException":
    case "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException":
      throw await de_ByoipCidrNotFoundExceptionRes(parsedOutput, context);
    case "IncorrectCidrStateException":
    case "com.amazonaws.globalaccelerator#IncorrectCidrStateException":
      throw await de_IncorrectCidrStateExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.globalaccelerator#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.globalaccelerator#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AcceleratorNotDisabledExceptionRes
 */
const de_AcceleratorNotDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AcceleratorNotDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AcceleratorNotDisabledException(body, context);
  const exception = new AcceleratorNotDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AcceleratorNotFoundExceptionRes
 */
const de_AcceleratorNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AcceleratorNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AcceleratorNotFoundException(body, context);
  const exception = new AcceleratorNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociatedEndpointGroupFoundExceptionRes
 */
const de_AssociatedEndpointGroupFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedEndpointGroupFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociatedEndpointGroupFoundException(body, context);
  const exception = new AssociatedEndpointGroupFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssociatedListenerFoundExceptionRes
 */
const de_AssociatedListenerFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssociatedListenerFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AssociatedListenerFoundException(body, context);
  const exception = new AssociatedListenerFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ByoipCidrNotFoundExceptionRes
 */
const de_ByoipCidrNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ByoipCidrNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ByoipCidrNotFoundException(body, context);
  const exception = new ByoipCidrNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EndpointAlreadyExistsExceptionRes
 */
const de_EndpointAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointAlreadyExistsException(body, context);
  const exception = new EndpointAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EndpointGroupAlreadyExistsExceptionRes
 */
const de_EndpointGroupAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointGroupAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointGroupAlreadyExistsException(body, context);
  const exception = new EndpointGroupAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EndpointGroupNotFoundExceptionRes
 */
const de_EndpointGroupNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointGroupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointGroupNotFoundException(body, context);
  const exception = new EndpointGroupNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EndpointNotFoundExceptionRes
 */
const de_EndpointNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointNotFoundException(body, context);
  const exception = new EndpointNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncorrectCidrStateExceptionRes
 */
const de_IncorrectCidrStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectCidrStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncorrectCidrStateException(body, context);
  const exception = new IncorrectCidrStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceErrorException(body, context);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArgumentException(body, context);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPortRangeExceptionRes
 */
const de_InvalidPortRangeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPortRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPortRangeException(body, context);
  const exception = new InvalidPortRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ListenerNotFoundExceptionRes
 */
const de_ListenerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListenerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ListenerNotFoundException(body, context);
  const exception = new ListenerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TransactionInProgressExceptionRes
 */
const de_TransactionInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TransactionInProgressException(body, context);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddCustomRoutingEndpointsRequest
 */
const se_AddCustomRoutingEndpointsRequest = (input: AddCustomRoutingEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointConfigurations != null && {
      EndpointConfigurations: se_CustomRoutingEndpointConfigurations(input.EndpointConfigurations, context),
    }),
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

/**
 * serializeAws_json1_1AddEndpointsRequest
 */
const se_AddEndpointsRequest = (input: AddEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointConfigurations != null && {
      EndpointConfigurations: se_EndpointConfigurations(input.EndpointConfigurations, context),
    }),
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

/**
 * serializeAws_json1_1AdvertiseByoipCidrRequest
 */
const se_AdvertiseByoipCidrRequest = (input: AdvertiseByoipCidrRequest, context: __SerdeContext): any => {
  return {
    ...(input.Cidr != null && { Cidr: input.Cidr }),
  };
};

/**
 * serializeAws_json1_1AllowCustomRoutingTrafficRequest
 */
const se_AllowCustomRoutingTrafficRequest = (input: AllowCustomRoutingTrafficRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllowAllTrafficToEndpoint != null && { AllowAllTrafficToEndpoint: input.AllowAllTrafficToEndpoint }),
    ...(input.DestinationAddresses != null && {
      DestinationAddresses: se_DestinationAddresses(input.DestinationAddresses, context),
    }),
    ...(input.DestinationPorts != null && { DestinationPorts: se_DestinationPorts(input.DestinationPorts, context) }),
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
  };
};

/**
 * serializeAws_json1_1CidrAuthorizationContext
 */
const se_CidrAuthorizationContext = (input: CidrAuthorizationContext, context: __SerdeContext): any => {
  return {
    ...(input.Message != null && { Message: input.Message }),
    ...(input.Signature != null && { Signature: input.Signature }),
  };
};

/**
 * serializeAws_json1_1CreateAcceleratorRequest
 */
const se_CreateAcceleratorRequest = (input: CreateAcceleratorRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.IpAddressType != null && { IpAddressType: input.IpAddressType }),
    ...(input.IpAddresses != null && { IpAddresses: se_IpAddresses(input.IpAddresses, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateCustomRoutingAcceleratorRequest
 */
const se_CreateCustomRoutingAcceleratorRequest = (
  input: CreateCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.IpAddressType != null && { IpAddressType: input.IpAddressType }),
    ...(input.IpAddresses != null && { IpAddresses: se_IpAddresses(input.IpAddresses, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateCustomRoutingEndpointGroupRequest
 */
const se_CreateCustomRoutingEndpointGroupRequest = (
  input: CreateCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfigurations != null && {
      DestinationConfigurations: se_CustomRoutingDestinationConfigurations(input.DestinationConfigurations, context),
    }),
    ...(input.EndpointGroupRegion != null && { EndpointGroupRegion: input.EndpointGroupRegion }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
  };
};

/**
 * serializeAws_json1_1CreateCustomRoutingListenerRequest
 */
const se_CreateCustomRoutingListenerRequest = (
  input: CreateCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PortRanges != null && { PortRanges: se_PortRanges(input.PortRanges, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEndpointGroupRequest
 */
const se_CreateEndpointGroupRequest = (input: CreateEndpointGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointConfigurations != null && {
      EndpointConfigurations: se_EndpointConfigurations(input.EndpointConfigurations, context),
    }),
    ...(input.EndpointGroupRegion != null && { EndpointGroupRegion: input.EndpointGroupRegion }),
    ...(input.HealthCheckIntervalSeconds != null && { HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds }),
    ...(input.HealthCheckPath != null && { HealthCheckPath: input.HealthCheckPath }),
    ...(input.HealthCheckPort != null && { HealthCheckPort: input.HealthCheckPort }),
    ...(input.HealthCheckProtocol != null && { HealthCheckProtocol: input.HealthCheckProtocol }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
    ...(input.PortOverrides != null && { PortOverrides: se_PortOverrides(input.PortOverrides, context) }),
    ...(input.ThresholdCount != null && { ThresholdCount: input.ThresholdCount }),
    ...(input.TrafficDialPercentage != null && {
      TrafficDialPercentage: __serializeFloat(input.TrafficDialPercentage),
    }),
  };
};

/**
 * serializeAws_json1_1CreateListenerRequest
 */
const se_CreateListenerRequest = (input: CreateListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.ClientAffinity != null && { ClientAffinity: input.ClientAffinity }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PortRanges != null && { PortRanges: se_PortRanges(input.PortRanges, context) }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

/**
 * serializeAws_json1_1CustomRoutingDestinationConfiguration
 */
const se_CustomRoutingDestinationConfiguration = (
  input: CustomRoutingDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.Protocols != null && { Protocols: se_CustomRoutingProtocols(input.Protocols, context) }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

/**
 * serializeAws_json1_1CustomRoutingDestinationConfigurations
 */
const se_CustomRoutingDestinationConfigurations = (
  input: CustomRoutingDestinationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomRoutingDestinationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1CustomRoutingEndpointConfiguration
 */
const se_CustomRoutingEndpointConfiguration = (
  input: CustomRoutingEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
  };
};

/**
 * serializeAws_json1_1CustomRoutingEndpointConfigurations
 */
const se_CustomRoutingEndpointConfigurations = (
  input: CustomRoutingEndpointConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomRoutingEndpointConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1CustomRoutingProtocols
 */
const se_CustomRoutingProtocols = (input: (CustomRoutingProtocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteAcceleratorRequest
 */
const se_DeleteAcceleratorRequest = (input: DeleteAcceleratorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

/**
 * serializeAws_json1_1DeleteCustomRoutingAcceleratorRequest
 */
const se_DeleteCustomRoutingAcceleratorRequest = (
  input: DeleteCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

/**
 * serializeAws_json1_1DeleteCustomRoutingEndpointGroupRequest
 */
const se_DeleteCustomRoutingEndpointGroupRequest = (
  input: DeleteCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

/**
 * serializeAws_json1_1DeleteCustomRoutingListenerRequest
 */
const se_DeleteCustomRoutingListenerRequest = (
  input: DeleteCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEndpointGroupRequest
 */
const se_DeleteEndpointGroupRequest = (input: DeleteEndpointGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

/**
 * serializeAws_json1_1DeleteListenerRequest
 */
const se_DeleteListenerRequest = (input: DeleteListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
  };
};

/**
 * serializeAws_json1_1DenyCustomRoutingTrafficRequest
 */
const se_DenyCustomRoutingTrafficRequest = (input: DenyCustomRoutingTrafficRequest, context: __SerdeContext): any => {
  return {
    ...(input.DenyAllTrafficToEndpoint != null && { DenyAllTrafficToEndpoint: input.DenyAllTrafficToEndpoint }),
    ...(input.DestinationAddresses != null && {
      DestinationAddresses: se_DestinationAddresses(input.DestinationAddresses, context),
    }),
    ...(input.DestinationPorts != null && { DestinationPorts: se_DestinationPorts(input.DestinationPorts, context) }),
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
  };
};

/**
 * serializeAws_json1_1DeprovisionByoipCidrRequest
 */
const se_DeprovisionByoipCidrRequest = (input: DeprovisionByoipCidrRequest, context: __SerdeContext): any => {
  return {
    ...(input.Cidr != null && { Cidr: input.Cidr }),
  };
};

/**
 * serializeAws_json1_1DescribeAcceleratorAttributesRequest
 */
const se_DescribeAcceleratorAttributesRequest = (
  input: DescribeAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAcceleratorRequest
 */
const se_DescribeAcceleratorRequest = (input: DescribeAcceleratorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesRequest
 */
const se_DescribeCustomRoutingAcceleratorAttributesRequest = (
  input: DescribeCustomRoutingAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCustomRoutingAcceleratorRequest
 */
const se_DescribeCustomRoutingAcceleratorRequest = (
  input: DescribeCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCustomRoutingEndpointGroupRequest
 */
const se_DescribeCustomRoutingEndpointGroupRequest = (
  input: DescribeCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCustomRoutingListenerRequest
 */
const se_DescribeCustomRoutingListenerRequest = (
  input: DescribeCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
  };
};

/**
 * serializeAws_json1_1DescribeEndpointGroupRequest
 */
const se_DescribeEndpointGroupRequest = (input: DescribeEndpointGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
  };
};

/**
 * serializeAws_json1_1DescribeListenerRequest
 */
const se_DescribeListenerRequest = (input: DescribeListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
  };
};

/**
 * serializeAws_json1_1DestinationAddresses
 */
const se_DestinationAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DestinationPorts
 */
const se_DestinationPorts = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EndpointConfiguration
 */
const se_EndpointConfiguration = (input: EndpointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ClientIPPreservationEnabled != null && {
      ClientIPPreservationEnabled: input.ClientIPPreservationEnabled,
    }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
    ...(input.Weight != null && { Weight: input.Weight }),
  };
};

/**
 * serializeAws_json1_1EndpointConfigurations
 */
const se_EndpointConfigurations = (input: EndpointConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EndpointConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1EndpointIdentifier
 */
const se_EndpointIdentifier = (input: EndpointIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.ClientIPPreservationEnabled != null && {
      ClientIPPreservationEnabled: input.ClientIPPreservationEnabled,
    }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
  };
};

/**
 * serializeAws_json1_1EndpointIdentifiers
 */
const se_EndpointIdentifiers = (input: EndpointIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EndpointIdentifier(entry, context);
    });
};

/**
 * serializeAws_json1_1EndpointIds
 */
const se_EndpointIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IpAddresses
 */
const se_IpAddresses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListAcceleratorsRequest
 */
const se_ListAcceleratorsRequest = (input: ListAcceleratorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListByoipCidrsRequest
 */
const se_ListByoipCidrsRequest = (input: ListByoipCidrsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCustomRoutingAcceleratorsRequest
 */
const se_ListCustomRoutingAcceleratorsRequest = (
  input: ListCustomRoutingAcceleratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCustomRoutingEndpointGroupsRequest
 */
const se_ListCustomRoutingEndpointGroupsRequest = (
  input: ListCustomRoutingEndpointGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCustomRoutingListenersRequest
 */
const se_ListCustomRoutingListenersRequest = (
  input: ListCustomRoutingListenersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationRequest
 */
const se_ListCustomRoutingPortMappingsByDestinationRequest = (
  input: ListCustomRoutingPortMappingsByDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationAddress != null && { DestinationAddress: input.DestinationAddress }),
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCustomRoutingPortMappingsRequest
 */
const se_ListCustomRoutingPortMappingsRequest = (
  input: ListCustomRoutingPortMappingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEndpointGroupsRequest
 */
const se_ListEndpointGroupsRequest = (input: ListEndpointGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListListenersRequest
 */
const se_ListListenersRequest = (input: ListListenersRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1PortOverride
 */
const se_PortOverride = (input: PortOverride, context: __SerdeContext): any => {
  return {
    ...(input.EndpointPort != null && { EndpointPort: input.EndpointPort }),
    ...(input.ListenerPort != null && { ListenerPort: input.ListenerPort }),
  };
};

/**
 * serializeAws_json1_1PortOverrides
 */
const se_PortOverrides = (input: PortOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortOverride(entry, context);
    });
};

/**
 * serializeAws_json1_1PortRange
 */
const se_PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

/**
 * serializeAws_json1_1PortRanges
 */
const se_PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortRange(entry, context);
    });
};

/**
 * serializeAws_json1_1ProvisionByoipCidrRequest
 */
const se_ProvisionByoipCidrRequest = (input: ProvisionByoipCidrRequest, context: __SerdeContext): any => {
  return {
    ...(input.Cidr != null && { Cidr: input.Cidr }),
    ...(input.CidrAuthorizationContext != null && {
      CidrAuthorizationContext: se_CidrAuthorizationContext(input.CidrAuthorizationContext, context),
    }),
  };
};

/**
 * serializeAws_json1_1RemoveCustomRoutingEndpointsRequest
 */
const se_RemoveCustomRoutingEndpointsRequest = (
  input: RemoveCustomRoutingEndpointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointIds != null && { EndpointIds: se_EndpointIds(input.EndpointIds, context) }),
  };
};

/**
 * serializeAws_json1_1RemoveEndpointsRequest
 */
const se_RemoveEndpointsRequest = (input: RemoveEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.EndpointIdentifiers != null && {
      EndpointIdentifiers: se_EndpointIdentifiers(input.EndpointIdentifiers, context),
    }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAcceleratorAttributesRequest
 */
const se_UpdateAcceleratorAttributesRequest = (
  input: UpdateAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.FlowLogsEnabled != null && { FlowLogsEnabled: input.FlowLogsEnabled }),
    ...(input.FlowLogsS3Bucket != null && { FlowLogsS3Bucket: input.FlowLogsS3Bucket }),
    ...(input.FlowLogsS3Prefix != null && { FlowLogsS3Prefix: input.FlowLogsS3Prefix }),
  };
};

/**
 * serializeAws_json1_1UpdateAcceleratorRequest
 */
const se_UpdateAcceleratorRequest = (input: UpdateAcceleratorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.IpAddressType != null && { IpAddressType: input.IpAddressType }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesRequest
 */
const se_UpdateCustomRoutingAcceleratorAttributesRequest = (
  input: UpdateCustomRoutingAcceleratorAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.FlowLogsEnabled != null && { FlowLogsEnabled: input.FlowLogsEnabled }),
    ...(input.FlowLogsS3Bucket != null && { FlowLogsS3Bucket: input.FlowLogsS3Bucket }),
    ...(input.FlowLogsS3Prefix != null && { FlowLogsS3Prefix: input.FlowLogsS3Prefix }),
  };
};

/**
 * serializeAws_json1_1UpdateCustomRoutingAcceleratorRequest
 */
const se_UpdateCustomRoutingAcceleratorRequest = (
  input: UpdateCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceleratorArn != null && { AcceleratorArn: input.AcceleratorArn }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.IpAddressType != null && { IpAddressType: input.IpAddressType }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateCustomRoutingListenerRequest
 */
const se_UpdateCustomRoutingListenerRequest = (
  input: UpdateCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
    ...(input.PortRanges != null && { PortRanges: se_PortRanges(input.PortRanges, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateEndpointGroupRequest
 */
const se_UpdateEndpointGroupRequest = (input: UpdateEndpointGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointConfigurations != null && {
      EndpointConfigurations: se_EndpointConfigurations(input.EndpointConfigurations, context),
    }),
    ...(input.EndpointGroupArn != null && { EndpointGroupArn: input.EndpointGroupArn }),
    ...(input.HealthCheckIntervalSeconds != null && { HealthCheckIntervalSeconds: input.HealthCheckIntervalSeconds }),
    ...(input.HealthCheckPath != null && { HealthCheckPath: input.HealthCheckPath }),
    ...(input.HealthCheckPort != null && { HealthCheckPort: input.HealthCheckPort }),
    ...(input.HealthCheckProtocol != null && { HealthCheckProtocol: input.HealthCheckProtocol }),
    ...(input.PortOverrides != null && { PortOverrides: se_PortOverrides(input.PortOverrides, context) }),
    ...(input.ThresholdCount != null && { ThresholdCount: input.ThresholdCount }),
    ...(input.TrafficDialPercentage != null && {
      TrafficDialPercentage: __serializeFloat(input.TrafficDialPercentage),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateListenerRequest
 */
const se_UpdateListenerRequest = (input: UpdateListenerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientAffinity != null && { ClientAffinity: input.ClientAffinity }),
    ...(input.ListenerArn != null && { ListenerArn: input.ListenerArn }),
    ...(input.PortRanges != null && { PortRanges: se_PortRanges(input.PortRanges, context) }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

/**
 * serializeAws_json1_1WithdrawByoipCidrRequest
 */
const se_WithdrawByoipCidrRequest = (input: WithdrawByoipCidrRequest, context: __SerdeContext): any => {
  return {
    ...(input.Cidr != null && { Cidr: input.Cidr }),
  };
};

/**
 * deserializeAws_json1_1Accelerator
 */
const de_Accelerator = (output: any, context: __SerdeContext): Accelerator => {
  return {
    AcceleratorArn: __expectString(output.AcceleratorArn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    DualStackDnsName: __expectString(output.DualStackDnsName),
    Enabled: __expectBoolean(output.Enabled),
    Events: output.Events != null ? de_AcceleratorEvents(output.Events, context) : undefined,
    IpAddressType: __expectString(output.IpAddressType),
    IpSets: output.IpSets != null ? de_IpSets(output.IpSets, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1AcceleratorAttributes
 */
const de_AcceleratorAttributes = (output: any, context: __SerdeContext): AcceleratorAttributes => {
  return {
    FlowLogsEnabled: __expectBoolean(output.FlowLogsEnabled),
    FlowLogsS3Bucket: __expectString(output.FlowLogsS3Bucket),
    FlowLogsS3Prefix: __expectString(output.FlowLogsS3Prefix),
  } as any;
};

/**
 * deserializeAws_json1_1AcceleratorEvent
 */
const de_AcceleratorEvent = (output: any, context: __SerdeContext): AcceleratorEvent => {
  return {
    Message: __expectString(output.Message),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AcceleratorEvents
 */
const de_AcceleratorEvents = (output: any, context: __SerdeContext): AcceleratorEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AcceleratorEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AcceleratorNotDisabledException
 */
const de_AcceleratorNotDisabledException = (output: any, context: __SerdeContext): AcceleratorNotDisabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AcceleratorNotFoundException
 */
const de_AcceleratorNotFoundException = (output: any, context: __SerdeContext): AcceleratorNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Accelerators
 */
const de_Accelerators = (output: any, context: __SerdeContext): Accelerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Accelerator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AddCustomRoutingEndpointsResponse
 */
const de_AddCustomRoutingEndpointsResponse = (
  output: any,
  context: __SerdeContext
): AddCustomRoutingEndpointsResponse => {
  return {
    EndpointDescriptions:
      output.EndpointDescriptions != null
        ? de_CustomRoutingEndpointDescriptions(output.EndpointDescriptions, context)
        : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1AddEndpointsResponse
 */
const de_AddEndpointsResponse = (output: any, context: __SerdeContext): AddEndpointsResponse => {
  return {
    EndpointDescriptions:
      output.EndpointDescriptions != null ? de_EndpointDescriptions(output.EndpointDescriptions, context) : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1AdvertiseByoipCidrResponse
 */
const de_AdvertiseByoipCidrResponse = (output: any, context: __SerdeContext): AdvertiseByoipCidrResponse => {
  return {
    ByoipCidr: output.ByoipCidr != null ? de_ByoipCidr(output.ByoipCidr, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociatedEndpointGroupFoundException
 */
const de_AssociatedEndpointGroupFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedEndpointGroupFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociatedListenerFoundException
 */
const de_AssociatedListenerFoundException = (
  output: any,
  context: __SerdeContext
): AssociatedListenerFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ByoipCidr
 */
const de_ByoipCidr = (output: any, context: __SerdeContext): ByoipCidr => {
  return {
    Cidr: __expectString(output.Cidr),
    Events: output.Events != null ? de_ByoipCidrEvents(output.Events, context) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1ByoipCidrEvent
 */
const de_ByoipCidrEvent = (output: any, context: __SerdeContext): ByoipCidrEvent => {
  return {
    Message: __expectString(output.Message),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ByoipCidrEvents
 */
const de_ByoipCidrEvents = (output: any, context: __SerdeContext): ByoipCidrEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ByoipCidrEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ByoipCidrNotFoundException
 */
const de_ByoipCidrNotFoundException = (output: any, context: __SerdeContext): ByoipCidrNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ByoipCidrs
 */
const de_ByoipCidrs = (output: any, context: __SerdeContext): ByoipCidr[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ByoipCidr(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAcceleratorResponse
 */
const de_CreateAcceleratorResponse = (output: any, context: __SerdeContext): CreateAcceleratorResponse => {
  return {
    Accelerator: output.Accelerator != null ? de_Accelerator(output.Accelerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateCustomRoutingAcceleratorResponse
 */
const de_CreateCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingAcceleratorResponse => {
  return {
    Accelerator: output.Accelerator != null ? de_CustomRoutingAccelerator(output.Accelerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateCustomRoutingEndpointGroupResponse
 */
const de_CreateCustomRoutingEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup != null ? de_CustomRoutingEndpointGroup(output.EndpointGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateCustomRoutingListenerResponse
 */
const de_CreateCustomRoutingListenerResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingListenerResponse => {
  return {
    Listener: output.Listener != null ? de_CustomRoutingListener(output.Listener, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateEndpointGroupResponse
 */
const de_CreateEndpointGroupResponse = (output: any, context: __SerdeContext): CreateEndpointGroupResponse => {
  return {
    EndpointGroup: output.EndpointGroup != null ? de_EndpointGroup(output.EndpointGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateListenerResponse
 */
const de_CreateListenerResponse = (output: any, context: __SerdeContext): CreateListenerResponse => {
  return {
    Listener: output.Listener != null ? de_Listener(output.Listener, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingAccelerator
 */
const de_CustomRoutingAccelerator = (output: any, context: __SerdeContext): CustomRoutingAccelerator => {
  return {
    AcceleratorArn: __expectString(output.AcceleratorArn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DnsName: __expectString(output.DnsName),
    Enabled: __expectBoolean(output.Enabled),
    IpAddressType: __expectString(output.IpAddressType),
    IpSets: output.IpSets != null ? de_IpSets(output.IpSets, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingAcceleratorAttributes
 */
const de_CustomRoutingAcceleratorAttributes = (
  output: any,
  context: __SerdeContext
): CustomRoutingAcceleratorAttributes => {
  return {
    FlowLogsEnabled: __expectBoolean(output.FlowLogsEnabled),
    FlowLogsS3Bucket: __expectString(output.FlowLogsS3Bucket),
    FlowLogsS3Prefix: __expectString(output.FlowLogsS3Prefix),
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingAccelerators
 */
const de_CustomRoutingAccelerators = (output: any, context: __SerdeContext): CustomRoutingAccelerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomRoutingAccelerator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomRoutingDestinationDescription
 */
const de_CustomRoutingDestinationDescription = (
  output: any,
  context: __SerdeContext
): CustomRoutingDestinationDescription => {
  return {
    FromPort: __expectInt32(output.FromPort),
    Protocols: output.Protocols != null ? de_Protocols(output.Protocols, context) : undefined,
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingDestinationDescriptions
 */
const de_CustomRoutingDestinationDescriptions = (
  output: any,
  context: __SerdeContext
): CustomRoutingDestinationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomRoutingDestinationDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomRoutingEndpointDescription
 */
const de_CustomRoutingEndpointDescription = (
  output: any,
  context: __SerdeContext
): CustomRoutingEndpointDescription => {
  return {
    EndpointId: __expectString(output.EndpointId),
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingEndpointDescriptions
 */
const de_CustomRoutingEndpointDescriptions = (
  output: any,
  context: __SerdeContext
): CustomRoutingEndpointDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomRoutingEndpointDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomRoutingEndpointGroup
 */
const de_CustomRoutingEndpointGroup = (output: any, context: __SerdeContext): CustomRoutingEndpointGroup => {
  return {
    DestinationDescriptions:
      output.DestinationDescriptions != null
        ? de_CustomRoutingDestinationDescriptions(output.DestinationDescriptions, context)
        : undefined,
    EndpointDescriptions:
      output.EndpointDescriptions != null
        ? de_CustomRoutingEndpointDescriptions(output.EndpointDescriptions, context)
        : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointGroupRegion: __expectString(output.EndpointGroupRegion),
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingEndpointGroups
 */
const de_CustomRoutingEndpointGroups = (output: any, context: __SerdeContext): CustomRoutingEndpointGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomRoutingEndpointGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomRoutingListener
 */
const de_CustomRoutingListener = (output: any, context: __SerdeContext): CustomRoutingListener => {
  return {
    ListenerArn: __expectString(output.ListenerArn),
    PortRanges: output.PortRanges != null ? de_PortRanges(output.PortRanges, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomRoutingListeners
 */
const de_CustomRoutingListeners = (output: any, context: __SerdeContext): CustomRoutingListener[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomRoutingListener(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomRoutingProtocols
 */
const de_CustomRoutingProtocols = (output: any, context: __SerdeContext): (CustomRoutingProtocol | string)[] => {
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
 * deserializeAws_json1_1DeprovisionByoipCidrResponse
 */
const de_DeprovisionByoipCidrResponse = (output: any, context: __SerdeContext): DeprovisionByoipCidrResponse => {
  return {
    ByoipCidr: output.ByoipCidr != null ? de_ByoipCidr(output.ByoipCidr, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAcceleratorAttributesResponse
 */
const de_DescribeAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes != null
        ? de_AcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAcceleratorResponse
 */
const de_DescribeAcceleratorResponse = (output: any, context: __SerdeContext): DescribeAcceleratorResponse => {
  return {
    Accelerator: output.Accelerator != null ? de_Accelerator(output.Accelerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesResponse
 */
const de_DescribeCustomRoutingAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes != null
        ? de_CustomRoutingAcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorResponse
 */
const de_DescribeCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingAcceleratorResponse => {
  return {
    Accelerator: output.Accelerator != null ? de_CustomRoutingAccelerator(output.Accelerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingEndpointGroupResponse
 */
const de_DescribeCustomRoutingEndpointGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingEndpointGroupResponse => {
  return {
    EndpointGroup:
      output.EndpointGroup != null ? de_CustomRoutingEndpointGroup(output.EndpointGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCustomRoutingListenerResponse
 */
const de_DescribeCustomRoutingListenerResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingListenerResponse => {
  return {
    Listener: output.Listener != null ? de_CustomRoutingListener(output.Listener, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointGroupResponse
 */
const de_DescribeEndpointGroupResponse = (output: any, context: __SerdeContext): DescribeEndpointGroupResponse => {
  return {
    EndpointGroup: output.EndpointGroup != null ? de_EndpointGroup(output.EndpointGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeListenerResponse
 */
const de_DescribeListenerResponse = (output: any, context: __SerdeContext): DescribeListenerResponse => {
  return {
    Listener: output.Listener != null ? de_Listener(output.Listener, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationPortMapping
 */
const de_DestinationPortMapping = (output: any, context: __SerdeContext): DestinationPortMapping => {
  return {
    AcceleratorArn: __expectString(output.AcceleratorArn),
    AcceleratorSocketAddresses:
      output.AcceleratorSocketAddresses != null
        ? de_SocketAddresses(output.AcceleratorSocketAddresses, context)
        : undefined,
    DestinationSocketAddress:
      output.DestinationSocketAddress != null ? de_SocketAddress(output.DestinationSocketAddress, context) : undefined,
    DestinationTrafficState: __expectString(output.DestinationTrafficState),
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointGroupRegion: __expectString(output.EndpointGroupRegion),
    EndpointId: __expectString(output.EndpointId),
    IpAddressType: __expectString(output.IpAddressType),
  } as any;
};

/**
 * deserializeAws_json1_1DestinationPortMappings
 */
const de_DestinationPortMappings = (output: any, context: __SerdeContext): DestinationPortMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DestinationPortMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointAlreadyExistsException
 */
const de_EndpointAlreadyExistsException = (output: any, context: __SerdeContext): EndpointAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointDescription
 */
const de_EndpointDescription = (output: any, context: __SerdeContext): EndpointDescription => {
  return {
    ClientIPPreservationEnabled: __expectBoolean(output.ClientIPPreservationEnabled),
    EndpointId: __expectString(output.EndpointId),
    HealthReason: __expectString(output.HealthReason),
    HealthState: __expectString(output.HealthState),
    Weight: __expectInt32(output.Weight),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointDescriptions
 */
const de_EndpointDescriptions = (output: any, context: __SerdeContext): EndpointDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointGroup
 */
const de_EndpointGroup = (output: any, context: __SerdeContext): EndpointGroup => {
  return {
    EndpointDescriptions:
      output.EndpointDescriptions != null ? de_EndpointDescriptions(output.EndpointDescriptions, context) : undefined,
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointGroupRegion: __expectString(output.EndpointGroupRegion),
    HealthCheckIntervalSeconds: __expectInt32(output.HealthCheckIntervalSeconds),
    HealthCheckPath: __expectString(output.HealthCheckPath),
    HealthCheckPort: __expectInt32(output.HealthCheckPort),
    HealthCheckProtocol: __expectString(output.HealthCheckProtocol),
    PortOverrides: output.PortOverrides != null ? de_PortOverrides(output.PortOverrides, context) : undefined,
    ThresholdCount: __expectInt32(output.ThresholdCount),
    TrafficDialPercentage: __limitedParseFloat32(output.TrafficDialPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointGroupAlreadyExistsException
 */
const de_EndpointGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EndpointGroupAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointGroupNotFoundException
 */
const de_EndpointGroupNotFoundException = (output: any, context: __SerdeContext): EndpointGroupNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointGroups
 */
const de_EndpointGroups = (output: any, context: __SerdeContext): EndpointGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointNotFoundException
 */
const de_EndpointNotFoundException = (output: any, context: __SerdeContext): EndpointNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IncorrectCidrStateException
 */
const de_IncorrectCidrStateException = (output: any, context: __SerdeContext): IncorrectCidrStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceErrorException
 */
const de_InternalServiceErrorException = (output: any, context: __SerdeContext): InternalServiceErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArgumentException
 */
const de_InvalidArgumentException = (output: any, context: __SerdeContext): InvalidArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPortRangeException
 */
const de_InvalidPortRangeException = (output: any, context: __SerdeContext): InvalidPortRangeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IpAddresses
 */
const de_IpAddresses = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1IpSet
 */
const de_IpSet = (output: any, context: __SerdeContext): IpSet => {
  return {
    IpAddressFamily: __expectString(output.IpAddressFamily),
    IpAddresses: output.IpAddresses != null ? de_IpAddresses(output.IpAddresses, context) : undefined,
    IpFamily: __expectString(output.IpFamily),
  } as any;
};

/**
 * deserializeAws_json1_1IpSets
 */
const de_IpSets = (output: any, context: __SerdeContext): IpSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IpSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAcceleratorsResponse
 */
const de_ListAcceleratorsResponse = (output: any, context: __SerdeContext): ListAcceleratorsResponse => {
  return {
    Accelerators: output.Accelerators != null ? de_Accelerators(output.Accelerators, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListByoipCidrsResponse
 */
const de_ListByoipCidrsResponse = (output: any, context: __SerdeContext): ListByoipCidrsResponse => {
  return {
    ByoipCidrs: output.ByoipCidrs != null ? de_ByoipCidrs(output.ByoipCidrs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCustomRoutingAcceleratorsResponse
 */
const de_ListCustomRoutingAcceleratorsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingAcceleratorsResponse => {
  return {
    Accelerators: output.Accelerators != null ? de_CustomRoutingAccelerators(output.Accelerators, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCustomRoutingEndpointGroupsResponse
 */
const de_ListCustomRoutingEndpointGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingEndpointGroupsResponse => {
  return {
    EndpointGroups:
      output.EndpointGroups != null ? de_CustomRoutingEndpointGroups(output.EndpointGroups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCustomRoutingListenersResponse
 */
const de_ListCustomRoutingListenersResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingListenersResponse => {
  return {
    Listeners: output.Listeners != null ? de_CustomRoutingListeners(output.Listeners, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationResponse
 */
const de_ListCustomRoutingPortMappingsByDestinationResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingPortMappingsByDestinationResponse => {
  return {
    DestinationPortMappings:
      output.DestinationPortMappings != null
        ? de_DestinationPortMappings(output.DestinationPortMappings, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCustomRoutingPortMappingsResponse
 */
const de_ListCustomRoutingPortMappingsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingPortMappingsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PortMappings: output.PortMappings != null ? de_PortMappings(output.PortMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListEndpointGroupsResponse
 */
const de_ListEndpointGroupsResponse = (output: any, context: __SerdeContext): ListEndpointGroupsResponse => {
  return {
    EndpointGroups: output.EndpointGroups != null ? de_EndpointGroups(output.EndpointGroups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1Listener
 */
const de_Listener = (output: any, context: __SerdeContext): Listener => {
  return {
    ClientAffinity: __expectString(output.ClientAffinity),
    ListenerArn: __expectString(output.ListenerArn),
    PortRanges: output.PortRanges != null ? de_PortRanges(output.PortRanges, context) : undefined,
    Protocol: __expectString(output.Protocol),
  } as any;
};

/**
 * deserializeAws_json1_1ListenerNotFoundException
 */
const de_ListenerNotFoundException = (output: any, context: __SerdeContext): ListenerNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Listeners
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
 * deserializeAws_json1_1ListListenersResponse
 */
const de_ListListenersResponse = (output: any, context: __SerdeContext): ListListenersResponse => {
  return {
    Listeners: output.Listeners != null ? de_Listeners(output.Listeners, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PortMapping
 */
const de_PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    AcceleratorPort: __expectInt32(output.AcceleratorPort),
    DestinationSocketAddress:
      output.DestinationSocketAddress != null ? de_SocketAddress(output.DestinationSocketAddress, context) : undefined,
    DestinationTrafficState: __expectString(output.DestinationTrafficState),
    EndpointGroupArn: __expectString(output.EndpointGroupArn),
    EndpointId: __expectString(output.EndpointId),
    Protocols: output.Protocols != null ? de_CustomRoutingProtocols(output.Protocols, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PortMappings
 */
const de_PortMappings = (output: any, context: __SerdeContext): PortMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PortOverride
 */
const de_PortOverride = (output: any, context: __SerdeContext): PortOverride => {
  return {
    EndpointPort: __expectInt32(output.EndpointPort),
    ListenerPort: __expectInt32(output.ListenerPort),
  } as any;
};

/**
 * deserializeAws_json1_1PortOverrides
 */
const de_PortOverrides = (output: any, context: __SerdeContext): PortOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PortRange
 */
const de_PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    FromPort: __expectInt32(output.FromPort),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

/**
 * deserializeAws_json1_1PortRanges
 */
const de_PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Protocols
 */
const de_Protocols = (output: any, context: __SerdeContext): (Protocol | string)[] => {
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
 * deserializeAws_json1_1ProvisionByoipCidrResponse
 */
const de_ProvisionByoipCidrResponse = (output: any, context: __SerdeContext): ProvisionByoipCidrResponse => {
  return {
    ByoipCidr: output.ByoipCidr != null ? de_ByoipCidr(output.ByoipCidr, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SocketAddress
 */
const de_SocketAddress = (output: any, context: __SerdeContext): SocketAddress => {
  return {
    IpAddress: __expectString(output.IpAddress),
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1SocketAddresses
 */
const de_SocketAddresses = (output: any, context: __SerdeContext): SocketAddress[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SocketAddress(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TransactionInProgressException
 */
const de_TransactionInProgressException = (output: any, context: __SerdeContext): TransactionInProgressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAcceleratorAttributesResponse
 */
const de_UpdateAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes != null
        ? de_AcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAcceleratorResponse
 */
const de_UpdateAcceleratorResponse = (output: any, context: __SerdeContext): UpdateAcceleratorResponse => {
  return {
    Accelerator: output.Accelerator != null ? de_Accelerator(output.Accelerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesResponse
 */
const de_UpdateCustomRoutingAcceleratorAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingAcceleratorAttributesResponse => {
  return {
    AcceleratorAttributes:
      output.AcceleratorAttributes != null
        ? de_CustomRoutingAcceleratorAttributes(output.AcceleratorAttributes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorResponse
 */
const de_UpdateCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingAcceleratorResponse => {
  return {
    Accelerator: output.Accelerator != null ? de_CustomRoutingAccelerator(output.Accelerator, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCustomRoutingListenerResponse
 */
const de_UpdateCustomRoutingListenerResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingListenerResponse => {
  return {
    Listener: output.Listener != null ? de_CustomRoutingListener(output.Listener, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointGroupResponse
 */
const de_UpdateEndpointGroupResponse = (output: any, context: __SerdeContext): UpdateEndpointGroupResponse => {
  return {
    EndpointGroup: output.EndpointGroup != null ? de_EndpointGroup(output.EndpointGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateListenerResponse
 */
const de_UpdateListenerResponse = (output: any, context: __SerdeContext): UpdateListenerResponse => {
  return {
    Listener: output.Listener != null ? de_Listener(output.Listener, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WithdrawByoipCidrResponse
 */
const de_WithdrawByoipCidrResponse = (output: any, context: __SerdeContext): WithdrawByoipCidrResponse => {
  return {
    ByoipCidr: output.ByoipCidr != null ? de_ByoipCidr(output.ByoipCidr, context) : undefined,
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
