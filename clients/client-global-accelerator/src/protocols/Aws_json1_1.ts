// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AcceleratorEvent,
  AcceleratorNotDisabledException,
  AcceleratorNotFoundException,
  AccessDeniedException,
  AddCustomRoutingEndpointsRequest,
  AddEndpointsRequest,
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
  CreateCustomRoutingListenerRequest,
  CreateEndpointGroupRequest,
  CreateEndpointGroupResponse,
  CreateListenerRequest,
  CustomRoutingAccelerator,
  CustomRoutingDestinationConfiguration,
  CustomRoutingEndpointConfiguration,
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
  DescribeAcceleratorRequest,
  DescribeAcceleratorResponse,
  DescribeCustomRoutingAcceleratorAttributesRequest,
  DescribeCustomRoutingAcceleratorRequest,
  DescribeCustomRoutingAcceleratorResponse,
  DescribeCustomRoutingEndpointGroupRequest,
  DescribeCustomRoutingListenerRequest,
  DescribeEndpointGroupRequest,
  DescribeEndpointGroupResponse,
  DescribeListenerRequest,
  EndpointAlreadyExistsException,
  EndpointConfiguration,
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
  LimitExceededException,
  ListAcceleratorsRequest,
  ListAcceleratorsResponse,
  ListByoipCidrsRequest,
  ListByoipCidrsResponse,
  ListCustomRoutingAcceleratorsRequest,
  ListCustomRoutingAcceleratorsResponse,
  ListCustomRoutingEndpointGroupsRequest,
  ListCustomRoutingListenersRequest,
  ListCustomRoutingPortMappingsByDestinationRequest,
  ListCustomRoutingPortMappingsRequest,
  ListEndpointGroupsRequest,
  ListEndpointGroupsResponse,
  ListenerNotFoundException,
  ListListenersRequest,
  ListTagsForResourceRequest,
  PortOverride,
  PortRange,
  ProvisionByoipCidrRequest,
  ProvisionByoipCidrResponse,
  RemoveCustomRoutingEndpointsRequest,
  RemoveEndpointsRequest,
  Tag,
  TagResourceRequest,
  TransactionInProgressException,
  UntagResourceRequest,
  UpdateAcceleratorAttributesRequest,
  UpdateAcceleratorRequest,
  UpdateAcceleratorResponse,
  UpdateCustomRoutingAcceleratorAttributesRequest,
  UpdateCustomRoutingAcceleratorRequest,
  UpdateCustomRoutingAcceleratorResponse,
  UpdateCustomRoutingListenerRequest,
  UpdateEndpointGroupRequest,
  UpdateEndpointGroupResponse,
  UpdateListenerRequest,
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
  const headers: __HeaderBag = sharedHeaders("AddCustomRoutingEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddEndpointsCommand
 */
export const se_AddEndpointsCommand = async (
  input: AddEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdvertiseByoipCidrCommand
 */
export const se_AdvertiseByoipCidrCommand = async (
  input: AdvertiseByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdvertiseByoipCidr");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AllowCustomRoutingTrafficCommand
 */
export const se_AllowCustomRoutingTrafficCommand = async (
  input: AllowCustomRoutingTrafficCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AllowCustomRoutingTraffic");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAcceleratorCommand
 */
export const se_CreateAcceleratorCommand = async (
  input: CreateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccelerator");
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
  const headers: __HeaderBag = sharedHeaders("CreateCustomRoutingAccelerator");
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
  const headers: __HeaderBag = sharedHeaders("CreateCustomRoutingEndpointGroup");
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
  const headers: __HeaderBag = sharedHeaders("CreateCustomRoutingListener");
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
  const headers: __HeaderBag = sharedHeaders("CreateEndpointGroup");
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
  const headers: __HeaderBag = sharedHeaders("CreateListener");
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
  const headers: __HeaderBag = sharedHeaders("DeleteAccelerator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand
 */
export const se_DeleteCustomRoutingAcceleratorCommand = async (
  input: DeleteCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomRoutingAccelerator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand
 */
export const se_DeleteCustomRoutingEndpointGroupCommand = async (
  input: DeleteCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomRoutingEndpointGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomRoutingListenerCommand
 */
export const se_DeleteCustomRoutingListenerCommand = async (
  input: DeleteCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomRoutingListener");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointGroupCommand
 */
export const se_DeleteEndpointGroupCommand = async (
  input: DeleteEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpointGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteListenerCommand
 */
export const se_DeleteListenerCommand = async (
  input: DeleteListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteListener");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DenyCustomRoutingTrafficCommand
 */
export const se_DenyCustomRoutingTrafficCommand = async (
  input: DenyCustomRoutingTrafficCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DenyCustomRoutingTraffic");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeprovisionByoipCidrCommand
 */
export const se_DeprovisionByoipCidrCommand = async (
  input: DeprovisionByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeprovisionByoipCidr");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAcceleratorCommand
 */
export const se_DescribeAcceleratorCommand = async (
  input: DescribeAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccelerator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAcceleratorAttributesCommand
 */
export const se_DescribeAcceleratorAttributesCommand = async (
  input: DescribeAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAcceleratorAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingAcceleratorCommand
 */
export const se_DescribeCustomRoutingAcceleratorCommand = async (
  input: DescribeCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomRoutingAccelerator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand
 */
export const se_DescribeCustomRoutingAcceleratorAttributesCommand = async (
  input: DescribeCustomRoutingAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomRoutingAcceleratorAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand
 */
export const se_DescribeCustomRoutingEndpointGroupCommand = async (
  input: DescribeCustomRoutingEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomRoutingEndpointGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCustomRoutingListenerCommand
 */
export const se_DescribeCustomRoutingListenerCommand = async (
  input: DescribeCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomRoutingListener");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointGroupCommand
 */
export const se_DescribeEndpointGroupCommand = async (
  input: DescribeEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpointGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeListenerCommand
 */
export const se_DescribeListenerCommand = async (
  input: DescribeListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeListener");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAcceleratorsCommand
 */
export const se_ListAcceleratorsCommand = async (
  input: ListAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccelerators");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListByoipCidrsCommand
 */
export const se_ListByoipCidrsCommand = async (
  input: ListByoipCidrsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListByoipCidrs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingAcceleratorsCommand
 */
export const se_ListCustomRoutingAcceleratorsCommand = async (
  input: ListCustomRoutingAcceleratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomRoutingAccelerators");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand
 */
export const se_ListCustomRoutingEndpointGroupsCommand = async (
  input: ListCustomRoutingEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomRoutingEndpointGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingListenersCommand
 */
export const se_ListCustomRoutingListenersCommand = async (
  input: ListCustomRoutingListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomRoutingListeners");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingPortMappingsCommand
 */
export const se_ListCustomRoutingPortMappingsCommand = async (
  input: ListCustomRoutingPortMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomRoutingPortMappings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand
 */
export const se_ListCustomRoutingPortMappingsByDestinationCommand = async (
  input: ListCustomRoutingPortMappingsByDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomRoutingPortMappingsByDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointGroupsCommand
 */
export const se_ListEndpointGroupsCommand = async (
  input: ListEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpointGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListListenersCommand
 */
export const se_ListListenersCommand = async (
  input: ListListenersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListListeners");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ProvisionByoipCidrCommand
 */
export const se_ProvisionByoipCidrCommand = async (
  input: ProvisionByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ProvisionByoipCidr");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveCustomRoutingEndpointsCommand
 */
export const se_RemoveCustomRoutingEndpointsCommand = async (
  input: RemoveCustomRoutingEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveCustomRoutingEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveEndpointsCommand
 */
export const se_RemoveEndpointsCommand = async (
  input: RemoveEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAcceleratorCommand
 */
export const se_UpdateAcceleratorCommand = async (
  input: UpdateAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAccelerator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAcceleratorAttributesCommand
 */
export const se_UpdateAcceleratorAttributesCommand = async (
  input: UpdateAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAcceleratorAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand
 */
export const se_UpdateCustomRoutingAcceleratorCommand = async (
  input: UpdateCustomRoutingAcceleratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCustomRoutingAccelerator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand
 */
export const se_UpdateCustomRoutingAcceleratorAttributesCommand = async (
  input: UpdateCustomRoutingAcceleratorAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCustomRoutingAcceleratorAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCustomRoutingListenerCommand
 */
export const se_UpdateCustomRoutingListenerCommand = async (
  input: UpdateCustomRoutingListenerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCustomRoutingListener");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointGroupCommand
 */
export const se_UpdateEndpointGroupCommand = async (
  input: UpdateEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpointGroup");
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
  const headers: __HeaderBag = sharedHeaders("UpdateListener");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1WithdrawByoipCidrCommand
 */
export const se_WithdrawByoipCidrCommand = async (
  input: WithdrawByoipCidrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("WithdrawByoipCidr");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AddCustomRoutingEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeCustomRoutingAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeCustomRoutingEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCustomRoutingEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCustomRoutingListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCustomRoutingPortMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCustomRoutingPortMappingsByDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListListenersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateCustomRoutingAcceleratorAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateCustomRoutingListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateListenerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TransactionInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddCustomRoutingEndpointsRequest omitted.

// se_AddEndpointsRequest omitted.

// se_AdvertiseByoipCidrRequest omitted.

// se_AllowCustomRoutingTrafficRequest omitted.

// se_CidrAuthorizationContext omitted.

/**
 * serializeAws_json1_1CreateAcceleratorRequest
 */
const se_CreateAcceleratorRequest = (input: CreateAcceleratorRequest, context: __SerdeContext): any => {
  return take(input, {
    Enabled: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    IpAddressType: [],
    IpAddresses: _json,
    Name: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateCustomRoutingAcceleratorRequest
 */
const se_CreateCustomRoutingAcceleratorRequest = (
  input: CreateCustomRoutingAcceleratorRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Enabled: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    IpAddressType: [],
    IpAddresses: _json,
    Name: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateCustomRoutingEndpointGroupRequest
 */
const se_CreateCustomRoutingEndpointGroupRequest = (
  input: CreateCustomRoutingEndpointGroupRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DestinationConfigurations: _json,
    EndpointGroupRegion: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ListenerArn: [],
  });
};

/**
 * serializeAws_json1_1CreateCustomRoutingListenerRequest
 */
const se_CreateCustomRoutingListenerRequest = (
  input: CreateCustomRoutingListenerRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AcceleratorArn: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PortRanges: _json,
  });
};

/**
 * serializeAws_json1_1CreateEndpointGroupRequest
 */
const se_CreateEndpointGroupRequest = (input: CreateEndpointGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    EndpointConfigurations: _json,
    EndpointGroupRegion: [],
    HealthCheckIntervalSeconds: [],
    HealthCheckPath: [],
    HealthCheckPort: [],
    HealthCheckProtocol: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ListenerArn: [],
    PortOverrides: _json,
    ThresholdCount: [],
    TrafficDialPercentage: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1CreateListenerRequest
 */
const se_CreateListenerRequest = (input: CreateListenerRequest, context: __SerdeContext): any => {
  return take(input, {
    AcceleratorArn: [],
    ClientAffinity: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PortRanges: _json,
    Protocol: [],
  });
};

// se_CustomRoutingDestinationConfiguration omitted.

// se_CustomRoutingDestinationConfigurations omitted.

// se_CustomRoutingEndpointConfiguration omitted.

// se_CustomRoutingEndpointConfigurations omitted.

// se_CustomRoutingProtocols omitted.

// se_DeleteAcceleratorRequest omitted.

// se_DeleteCustomRoutingAcceleratorRequest omitted.

// se_DeleteCustomRoutingEndpointGroupRequest omitted.

// se_DeleteCustomRoutingListenerRequest omitted.

// se_DeleteEndpointGroupRequest omitted.

// se_DeleteListenerRequest omitted.

// se_DenyCustomRoutingTrafficRequest omitted.

// se_DeprovisionByoipCidrRequest omitted.

// se_DescribeAcceleratorAttributesRequest omitted.

// se_DescribeAcceleratorRequest omitted.

// se_DescribeCustomRoutingAcceleratorAttributesRequest omitted.

// se_DescribeCustomRoutingAcceleratorRequest omitted.

// se_DescribeCustomRoutingEndpointGroupRequest omitted.

// se_DescribeCustomRoutingListenerRequest omitted.

// se_DescribeEndpointGroupRequest omitted.

// se_DescribeListenerRequest omitted.

// se_DestinationAddresses omitted.

// se_DestinationPorts omitted.

// se_EndpointConfiguration omitted.

// se_EndpointConfigurations omitted.

// se_EndpointIdentifier omitted.

// se_EndpointIdentifiers omitted.

// se_EndpointIds omitted.

// se_IpAddresses omitted.

// se_ListAcceleratorsRequest omitted.

// se_ListByoipCidrsRequest omitted.

// se_ListCustomRoutingAcceleratorsRequest omitted.

// se_ListCustomRoutingEndpointGroupsRequest omitted.

// se_ListCustomRoutingListenersRequest omitted.

// se_ListCustomRoutingPortMappingsByDestinationRequest omitted.

// se_ListCustomRoutingPortMappingsRequest omitted.

// se_ListEndpointGroupsRequest omitted.

// se_ListListenersRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_PortOverride omitted.

// se_PortOverrides omitted.

// se_PortRange omitted.

// se_PortRanges omitted.

// se_ProvisionByoipCidrRequest omitted.

// se_RemoveCustomRoutingEndpointsRequest omitted.

// se_RemoveEndpointsRequest omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAcceleratorAttributesRequest omitted.

// se_UpdateAcceleratorRequest omitted.

// se_UpdateCustomRoutingAcceleratorAttributesRequest omitted.

// se_UpdateCustomRoutingAcceleratorRequest omitted.

// se_UpdateCustomRoutingListenerRequest omitted.

/**
 * serializeAws_json1_1UpdateEndpointGroupRequest
 */
const se_UpdateEndpointGroupRequest = (input: UpdateEndpointGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    EndpointConfigurations: _json,
    EndpointGroupArn: [],
    HealthCheckIntervalSeconds: [],
    HealthCheckPath: [],
    HealthCheckPort: [],
    HealthCheckProtocol: [],
    PortOverrides: _json,
    ThresholdCount: [],
    TrafficDialPercentage: __serializeFloat,
  });
};

// se_UpdateListenerRequest omitted.

// se_WithdrawByoipCidrRequest omitted.

/**
 * deserializeAws_json1_1Accelerator
 */
const de_Accelerator = (output: any, context: __SerdeContext): Accelerator => {
  return take(output, {
    AcceleratorArn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsName: __expectString,
    DualStackDnsName: __expectString,
    Enabled: __expectBoolean,
    Events: (_: any) => de_AcceleratorEvents(_, context),
    IpAddressType: __expectString,
    IpSets: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_AcceleratorAttributes omitted.

/**
 * deserializeAws_json1_1AcceleratorEvent
 */
const de_AcceleratorEvent = (output: any, context: __SerdeContext): AcceleratorEvent => {
  return take(output, {
    Message: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AcceleratorEvents
 */
const de_AcceleratorEvents = (output: any, context: __SerdeContext): AcceleratorEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AcceleratorEvent(entry, context);
    });
  return retVal;
};

// de_AcceleratorNotDisabledException omitted.

// de_AcceleratorNotFoundException omitted.

/**
 * deserializeAws_json1_1Accelerators
 */
const de_Accelerators = (output: any, context: __SerdeContext): Accelerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Accelerator(entry, context);
    });
  return retVal;
};

// de_AccessDeniedException omitted.

// de_AddCustomRoutingEndpointsResponse omitted.

// de_AddEndpointsResponse omitted.

/**
 * deserializeAws_json1_1AdvertiseByoipCidrResponse
 */
const de_AdvertiseByoipCidrResponse = (output: any, context: __SerdeContext): AdvertiseByoipCidrResponse => {
  return take(output, {
    ByoipCidr: (_: any) => de_ByoipCidr(_, context),
  }) as any;
};

// de_AssociatedEndpointGroupFoundException omitted.

// de_AssociatedListenerFoundException omitted.

/**
 * deserializeAws_json1_1ByoipCidr
 */
const de_ByoipCidr = (output: any, context: __SerdeContext): ByoipCidr => {
  return take(output, {
    Cidr: __expectString,
    Events: (_: any) => de_ByoipCidrEvents(_, context),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ByoipCidrEvent
 */
const de_ByoipCidrEvent = (output: any, context: __SerdeContext): ByoipCidrEvent => {
  return take(output, {
    Message: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ByoipCidrEvents
 */
const de_ByoipCidrEvents = (output: any, context: __SerdeContext): ByoipCidrEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ByoipCidrEvent(entry, context);
    });
  return retVal;
};

// de_ByoipCidrNotFoundException omitted.

/**
 * deserializeAws_json1_1ByoipCidrs
 */
const de_ByoipCidrs = (output: any, context: __SerdeContext): ByoipCidr[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ByoipCidr(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1CreateAcceleratorResponse
 */
const de_CreateAcceleratorResponse = (output: any, context: __SerdeContext): CreateAcceleratorResponse => {
  return take(output, {
    Accelerator: (_: any) => de_Accelerator(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateCustomRoutingAcceleratorResponse
 */
const de_CreateCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomRoutingAcceleratorResponse => {
  return take(output, {
    Accelerator: (_: any) => de_CustomRoutingAccelerator(_, context),
  }) as any;
};

// de_CreateCustomRoutingEndpointGroupResponse omitted.

// de_CreateCustomRoutingListenerResponse omitted.

/**
 * deserializeAws_json1_1CreateEndpointGroupResponse
 */
const de_CreateEndpointGroupResponse = (output: any, context: __SerdeContext): CreateEndpointGroupResponse => {
  return take(output, {
    EndpointGroup: (_: any) => de_EndpointGroup(_, context),
  }) as any;
};

// de_CreateListenerResponse omitted.

/**
 * deserializeAws_json1_1CustomRoutingAccelerator
 */
const de_CustomRoutingAccelerator = (output: any, context: __SerdeContext): CustomRoutingAccelerator => {
  return take(output, {
    AcceleratorArn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DnsName: __expectString,
    Enabled: __expectBoolean,
    IpAddressType: __expectString,
    IpSets: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_CustomRoutingAcceleratorAttributes omitted.

/**
 * deserializeAws_json1_1CustomRoutingAccelerators
 */
const de_CustomRoutingAccelerators = (output: any, context: __SerdeContext): CustomRoutingAccelerator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomRoutingAccelerator(entry, context);
    });
  return retVal;
};

// de_CustomRoutingDestinationDescription omitted.

// de_CustomRoutingDestinationDescriptions omitted.

// de_CustomRoutingEndpointDescription omitted.

// de_CustomRoutingEndpointDescriptions omitted.

// de_CustomRoutingEndpointGroup omitted.

// de_CustomRoutingEndpointGroups omitted.

// de_CustomRoutingListener omitted.

// de_CustomRoutingListeners omitted.

// de_CustomRoutingProtocols omitted.

/**
 * deserializeAws_json1_1DeprovisionByoipCidrResponse
 */
const de_DeprovisionByoipCidrResponse = (output: any, context: __SerdeContext): DeprovisionByoipCidrResponse => {
  return take(output, {
    ByoipCidr: (_: any) => de_ByoipCidr(_, context),
  }) as any;
};

// de_DescribeAcceleratorAttributesResponse omitted.

/**
 * deserializeAws_json1_1DescribeAcceleratorResponse
 */
const de_DescribeAcceleratorResponse = (output: any, context: __SerdeContext): DescribeAcceleratorResponse => {
  return take(output, {
    Accelerator: (_: any) => de_Accelerator(_, context),
  }) as any;
};

// de_DescribeCustomRoutingAcceleratorAttributesResponse omitted.

/**
 * deserializeAws_json1_1DescribeCustomRoutingAcceleratorResponse
 */
const de_DescribeCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomRoutingAcceleratorResponse => {
  return take(output, {
    Accelerator: (_: any) => de_CustomRoutingAccelerator(_, context),
  }) as any;
};

// de_DescribeCustomRoutingEndpointGroupResponse omitted.

// de_DescribeCustomRoutingListenerResponse omitted.

/**
 * deserializeAws_json1_1DescribeEndpointGroupResponse
 */
const de_DescribeEndpointGroupResponse = (output: any, context: __SerdeContext): DescribeEndpointGroupResponse => {
  return take(output, {
    EndpointGroup: (_: any) => de_EndpointGroup(_, context),
  }) as any;
};

// de_DescribeListenerResponse omitted.

// de_DestinationPortMapping omitted.

// de_DestinationPortMappings omitted.

// de_EndpointAlreadyExistsException omitted.

// de_EndpointDescription omitted.

// de_EndpointDescriptions omitted.

/**
 * deserializeAws_json1_1EndpointGroup
 */
const de_EndpointGroup = (output: any, context: __SerdeContext): EndpointGroup => {
  return take(output, {
    EndpointDescriptions: _json,
    EndpointGroupArn: __expectString,
    EndpointGroupRegion: __expectString,
    HealthCheckIntervalSeconds: __expectInt32,
    HealthCheckPath: __expectString,
    HealthCheckPort: __expectInt32,
    HealthCheckProtocol: __expectString,
    PortOverrides: _json,
    ThresholdCount: __expectInt32,
    TrafficDialPercentage: __limitedParseFloat32,
  }) as any;
};

// de_EndpointGroupAlreadyExistsException omitted.

// de_EndpointGroupNotFoundException omitted.

/**
 * deserializeAws_json1_1EndpointGroups
 */
const de_EndpointGroups = (output: any, context: __SerdeContext): EndpointGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointGroup(entry, context);
    });
  return retVal;
};

// de_EndpointNotFoundException omitted.

// de_IncorrectCidrStateException omitted.

// de_InternalServiceErrorException omitted.

// de_InvalidArgumentException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidPortRangeException omitted.

// de_IpAddresses omitted.

// de_IpSet omitted.

// de_IpSets omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListAcceleratorsResponse
 */
const de_ListAcceleratorsResponse = (output: any, context: __SerdeContext): ListAcceleratorsResponse => {
  return take(output, {
    Accelerators: (_: any) => de_Accelerators(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListByoipCidrsResponse
 */
const de_ListByoipCidrsResponse = (output: any, context: __SerdeContext): ListByoipCidrsResponse => {
  return take(output, {
    ByoipCidrs: (_: any) => de_ByoipCidrs(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCustomRoutingAcceleratorsResponse
 */
const de_ListCustomRoutingAcceleratorsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomRoutingAcceleratorsResponse => {
  return take(output, {
    Accelerators: (_: any) => de_CustomRoutingAccelerators(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListCustomRoutingEndpointGroupsResponse omitted.

// de_ListCustomRoutingListenersResponse omitted.

// de_ListCustomRoutingPortMappingsByDestinationResponse omitted.

// de_ListCustomRoutingPortMappingsResponse omitted.

/**
 * deserializeAws_json1_1ListEndpointGroupsResponse
 */
const de_ListEndpointGroupsResponse = (output: any, context: __SerdeContext): ListEndpointGroupsResponse => {
  return take(output, {
    EndpointGroups: (_: any) => de_EndpointGroups(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_Listener omitted.

// de_ListenerNotFoundException omitted.

// de_Listeners omitted.

// de_ListListenersResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_PortMapping omitted.

// de_PortMappings omitted.

// de_PortOverride omitted.

// de_PortOverrides omitted.

// de_PortRange omitted.

// de_PortRanges omitted.

// de_Protocols omitted.

/**
 * deserializeAws_json1_1ProvisionByoipCidrResponse
 */
const de_ProvisionByoipCidrResponse = (output: any, context: __SerdeContext): ProvisionByoipCidrResponse => {
  return take(output, {
    ByoipCidr: (_: any) => de_ByoipCidr(_, context),
  }) as any;
};

// de_SocketAddress omitted.

// de_SocketAddresses omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_TransactionInProgressException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateAcceleratorAttributesResponse omitted.

/**
 * deserializeAws_json1_1UpdateAcceleratorResponse
 */
const de_UpdateAcceleratorResponse = (output: any, context: __SerdeContext): UpdateAcceleratorResponse => {
  return take(output, {
    Accelerator: (_: any) => de_Accelerator(_, context),
  }) as any;
};

// de_UpdateCustomRoutingAcceleratorAttributesResponse omitted.

/**
 * deserializeAws_json1_1UpdateCustomRoutingAcceleratorResponse
 */
const de_UpdateCustomRoutingAcceleratorResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomRoutingAcceleratorResponse => {
  return take(output, {
    Accelerator: (_: any) => de_CustomRoutingAccelerator(_, context),
  }) as any;
};

// de_UpdateCustomRoutingListenerResponse omitted.

/**
 * deserializeAws_json1_1UpdateEndpointGroupResponse
 */
const de_UpdateEndpointGroupResponse = (output: any, context: __SerdeContext): UpdateEndpointGroupResponse => {
  return take(output, {
    EndpointGroup: (_: any) => de_EndpointGroup(_, context),
  }) as any;
};

// de_UpdateListenerResponse omitted.

/**
 * deserializeAws_json1_1WithdrawByoipCidrResponse
 */
const de_WithdrawByoipCidrResponse = (output: any, context: __SerdeContext): WithdrawByoipCidrResponse => {
  return take(output, {
    ByoipCidr: (_: any) => de_ByoipCidr(_, context),
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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `GlobalAccelerator_V20180706.${operation}`,
  };
}

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
