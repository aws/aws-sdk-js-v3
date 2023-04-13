// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddBridgeOutputsCommandInput, AddBridgeOutputsCommandOutput } from "../commands/AddBridgeOutputsCommand";
import { AddBridgeSourcesCommandInput, AddBridgeSourcesCommandOutput } from "../commands/AddBridgeSourcesCommand";
import {
  AddFlowMediaStreamsCommandInput,
  AddFlowMediaStreamsCommandOutput,
} from "../commands/AddFlowMediaStreamsCommand";
import { AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput } from "../commands/AddFlowOutputsCommand";
import { AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput } from "../commands/AddFlowSourcesCommand";
import {
  AddFlowVpcInterfacesCommandInput,
  AddFlowVpcInterfacesCommandOutput,
} from "../commands/AddFlowVpcInterfacesCommand";
import { CreateBridgeCommandInput, CreateBridgeCommandOutput } from "../commands/CreateBridgeCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "../commands/CreateFlowCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "../commands/CreateGatewayCommand";
import { DeleteBridgeCommandInput, DeleteBridgeCommandOutput } from "../commands/DeleteBridgeCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "../commands/DeleteFlowCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "../commands/DeleteGatewayCommand";
import {
  DeregisterGatewayInstanceCommandInput,
  DeregisterGatewayInstanceCommandOutput,
} from "../commands/DeregisterGatewayInstanceCommand";
import { DescribeBridgeCommandInput, DescribeBridgeCommandOutput } from "../commands/DescribeBridgeCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "../commands/DescribeFlowCommand";
import { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "../commands/DescribeGatewayCommand";
import {
  DescribeGatewayInstanceCommandInput,
  DescribeGatewayInstanceCommandOutput,
} from "../commands/DescribeGatewayInstanceCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "../commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "../commands/DescribeReservationCommand";
import {
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
} from "../commands/GrantFlowEntitlementsCommand";
import { ListBridgesCommandInput, ListBridgesCommandOutput } from "../commands/ListBridgesCommand";
import { ListEntitlementsCommandInput, ListEntitlementsCommandOutput } from "../commands/ListEntitlementsCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import {
  ListGatewayInstancesCommandInput,
  ListGatewayInstancesCommandOutput,
} from "../commands/ListGatewayInstancesCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "../commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "../commands/PurchaseOfferingCommand";
import { RemoveBridgeOutputCommandInput, RemoveBridgeOutputCommandOutput } from "../commands/RemoveBridgeOutputCommand";
import { RemoveBridgeSourceCommandInput, RemoveBridgeSourceCommandOutput } from "../commands/RemoveBridgeSourceCommand";
import {
  RemoveFlowMediaStreamCommandInput,
  RemoveFlowMediaStreamCommandOutput,
} from "../commands/RemoveFlowMediaStreamCommand";
import { RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput } from "../commands/RemoveFlowOutputCommand";
import { RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput } from "../commands/RemoveFlowSourceCommand";
import {
  RemoveFlowVpcInterfaceCommandInput,
  RemoveFlowVpcInterfaceCommandOutput,
} from "../commands/RemoveFlowVpcInterfaceCommand";
import {
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
} from "../commands/RevokeFlowEntitlementCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "../commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "../commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBridgeCommandInput, UpdateBridgeCommandOutput } from "../commands/UpdateBridgeCommand";
import { UpdateBridgeOutputCommandInput, UpdateBridgeOutputCommandOutput } from "../commands/UpdateBridgeOutputCommand";
import { UpdateBridgeSourceCommandInput, UpdateBridgeSourceCommandOutput } from "../commands/UpdateBridgeSourceCommand";
import { UpdateBridgeStateCommandInput, UpdateBridgeStateCommandOutput } from "../commands/UpdateBridgeStateCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "../commands/UpdateFlowCommand";
import {
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
} from "../commands/UpdateFlowEntitlementCommand";
import {
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
} from "../commands/UpdateFlowMediaStreamCommand";
import { UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput } from "../commands/UpdateFlowOutputCommand";
import { UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput } from "../commands/UpdateFlowSourceCommand";
import {
  UpdateGatewayInstanceCommandInput,
  UpdateGatewayInstanceCommandOutput,
} from "../commands/UpdateGatewayInstanceCommand";
import { MediaConnectServiceException as __BaseException } from "../models/MediaConnectServiceException";
import {
  AddBridgeFlowSourceRequest,
  AddBridgeNetworkOutputRequest,
  AddBridgeNetworkSourceRequest,
  AddBridgeOutputRequest,
  AddBridgeSourceRequest,
  AddEgressGatewayBridgeRequest,
  AddFlowOutputs420Exception,
  AddIngressGatewayBridgeRequest,
  AddMaintenance,
  AddMediaStreamRequest,
  AddOutputRequest,
  BadRequestException,
  Bridge,
  BridgeFlowOutput,
  BridgeFlowSource,
  BridgeNetworkOutput,
  BridgeNetworkSource,
  BridgeOutput,
  BridgeSource,
  ConflictException,
  CreateBridge420Exception,
  CreateFlow420Exception,
  CreateGateway420Exception,
  DestinationConfiguration,
  DestinationConfigurationRequest,
  EgressGatewayBridge,
  EncodingParameters,
  EncodingParametersRequest,
  Encryption,
  Entitlement,
  FailoverConfig,
  Flow,
  Fmtp,
  FmtpRequest,
  ForbiddenException,
  Gateway,
  GatewayBridgeSource,
  GatewayInstance,
  GatewayNetwork,
  GrantEntitlementRequest,
  GrantFlowEntitlements420Exception,
  IngressGatewayBridge,
  InputConfiguration,
  InputConfigurationRequest,
  Interface,
  InterfaceRequest,
  InternalServerErrorException,
  ListedBridge,
  ListedEntitlement,
  ListedFlow,
  ListedGateway,
  ListedGatewayInstance,
  Maintenance,
  MediaStream,
  MediaStreamAttributes,
  MediaStreamAttributesRequest,
  MediaStreamOutputConfiguration,
  MediaStreamOutputConfigurationRequest,
  MediaStreamSourceConfiguration,
  MediaStreamSourceConfigurationRequest,
  MessageDetail,
  Messages,
  NotFoundException,
  Offering,
  Output,
  Reservation,
  ResourceSpecification,
  ServiceUnavailableException,
  SetGatewayBridgeSourceRequest,
  SetSourceRequest,
  Source,
  SourcePriority,
  TooManyRequestsException,
  Transport,
  UpdateBridgeFlowSourceRequest,
  UpdateBridgeNetworkOutputRequest,
  UpdateBridgeNetworkSourceRequest,
  UpdateEgressGatewayBridgeRequest,
  UpdateEncryption,
  UpdateFailoverConfig,
  UpdateGatewayBridgeSourceRequest,
  UpdateIngressGatewayBridgeRequest,
  UpdateMaintenance,
  VpcInterface,
  VpcInterfaceAttachment,
  VpcInterfaceRequest,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddBridgeOutputsCommand
 */
export const se_AddBridgeOutputsCommand = async (
  input: AddBridgeOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges/{BridgeArn}/outputs";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Outputs != null && { outputs: se___listOfAddBridgeOutputRequest(input.Outputs, context) }),
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

/**
 * serializeAws_restJson1AddBridgeSourcesCommand
 */
export const se_AddBridgeSourcesCommand = async (
  input: AddBridgeSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges/{BridgeArn}/sources";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Sources != null && { sources: se___listOfAddBridgeSourceRequest(input.Sources, context) }),
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

/**
 * serializeAws_restJson1AddFlowMediaStreamsCommand
 */
export const se_AddFlowMediaStreamsCommand = async (
  input: AddFlowMediaStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/mediaStreams";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MediaStreams != null && { mediaStreams: se___listOfAddMediaStreamRequest(input.MediaStreams, context) }),
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

/**
 * serializeAws_restJson1AddFlowOutputsCommand
 */
export const se_AddFlowOutputsCommand = async (
  input: AddFlowOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Outputs != null && { outputs: se___listOfAddOutputRequest(input.Outputs, context) }),
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

/**
 * serializeAws_restJson1AddFlowSourcesCommand
 */
export const se_AddFlowSourcesCommand = async (
  input: AddFlowSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/source";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Sources != null && { sources: se___listOfSetSourceRequest(input.Sources, context) }),
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

/**
 * serializeAws_restJson1AddFlowVpcInterfacesCommand
 */
export const se_AddFlowVpcInterfacesCommand = async (
  input: AddFlowVpcInterfacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/vpcInterfaces";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.VpcInterfaces != null && { vpcInterfaces: se___listOfVpcInterfaceRequest(input.VpcInterfaces, context) }),
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

/**
 * serializeAws_restJson1CreateBridgeCommand
 */
export const se_CreateBridgeCommand = async (
  input: CreateBridgeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges";
  let body: any;
  body = JSON.stringify({
    ...(input.EgressGatewayBridge != null && {
      egressGatewayBridge: se_AddEgressGatewayBridgeRequest(input.EgressGatewayBridge, context),
    }),
    ...(input.IngressGatewayBridge != null && {
      ingressGatewayBridge: se_AddIngressGatewayBridgeRequest(input.IngressGatewayBridge, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Outputs != null && { outputs: se___listOfAddBridgeOutputRequest(input.Outputs, context) }),
    ...(input.PlacementArn != null && { placementArn: input.PlacementArn }),
    ...(input.SourceFailoverConfig != null && {
      sourceFailoverConfig: se_FailoverConfig(input.SourceFailoverConfig, context),
    }),
    ...(input.Sources != null && { sources: se___listOfAddBridgeSourceRequest(input.Sources, context) }),
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

/**
 * serializeAws_restJson1CreateFlowCommand
 */
export const se_CreateFlowCommand = async (
  input: CreateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZone != null && { availabilityZone: input.AvailabilityZone }),
    ...(input.Entitlements != null && {
      entitlements: se___listOfGrantEntitlementRequest(input.Entitlements, context),
    }),
    ...(input.Maintenance != null && { maintenance: se_AddMaintenance(input.Maintenance, context) }),
    ...(input.MediaStreams != null && { mediaStreams: se___listOfAddMediaStreamRequest(input.MediaStreams, context) }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Outputs != null && { outputs: se___listOfAddOutputRequest(input.Outputs, context) }),
    ...(input.Source != null && { source: se_SetSourceRequest(input.Source, context) }),
    ...(input.SourceFailoverConfig != null && {
      sourceFailoverConfig: se_FailoverConfig(input.SourceFailoverConfig, context),
    }),
    ...(input.Sources != null && { sources: se___listOfSetSourceRequest(input.Sources, context) }),
    ...(input.VpcInterfaces != null && { vpcInterfaces: se___listOfVpcInterfaceRequest(input.VpcInterfaces, context) }),
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

/**
 * serializeAws_restJson1CreateGatewayCommand
 */
export const se_CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/gateways";
  let body: any;
  body = JSON.stringify({
    ...(input.EgressCidrBlocks != null && { egressCidrBlocks: se___listOf__string(input.EgressCidrBlocks, context) }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Networks != null && { networks: se___listOfGatewayNetwork(input.Networks, context) }),
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

/**
 * serializeAws_restJson1DeleteBridgeCommand
 */
export const se_DeleteBridgeCommand = async (
  input: DeleteBridgeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges/{BridgeArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
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
 * serializeAws_restJson1DeleteFlowCommand
 */
export const se_DeleteFlowCommand = async (
  input: DeleteFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
 * serializeAws_restJson1DeleteGatewayCommand
 */
export const se_DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/gateways/{GatewayArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GatewayArn", () => input.GatewayArn!, "{GatewayArn}", false);
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
 * serializeAws_restJson1DeregisterGatewayInstanceCommand
 */
export const se_DeregisterGatewayInstanceCommand = async (
  input: DeregisterGatewayInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/gateway-instances/{GatewayInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GatewayInstanceArn",
    () => input.GatewayInstanceArn!,
    "{GatewayInstanceArn}",
    false
  );
  const query: any = map({
    force: [() => input.Force !== void 0, () => input.Force!.toString()],
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
 * serializeAws_restJson1DescribeBridgeCommand
 */
export const se_DescribeBridgeCommand = async (
  input: DescribeBridgeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges/{BridgeArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
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
 * serializeAws_restJson1DescribeFlowCommand
 */
export const se_DescribeFlowCommand = async (
  input: DescribeFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
 * serializeAws_restJson1DescribeGatewayCommand
 */
export const se_DescribeGatewayCommand = async (
  input: DescribeGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/gateways/{GatewayArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "GatewayArn", () => input.GatewayArn!, "{GatewayArn}", false);
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
 * serializeAws_restJson1DescribeGatewayInstanceCommand
 */
export const se_DescribeGatewayInstanceCommand = async (
  input: DescribeGatewayInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/gateway-instances/{GatewayInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GatewayInstanceArn",
    () => input.GatewayInstanceArn!,
    "{GatewayInstanceArn}",
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
 * serializeAws_restJson1DescribeOfferingCommand
 */
export const se_DescribeOfferingCommand = async (
  input: DescribeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings/{OfferingArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OfferingArn", () => input.OfferingArn!, "{OfferingArn}", false);
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
 * serializeAws_restJson1DescribeReservationCommand
 */
export const se_DescribeReservationCommand = async (
  input: DescribeReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/reservations/{ReservationArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReservationArn",
    () => input.ReservationArn!,
    "{ReservationArn}",
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
 * serializeAws_restJson1GrantFlowEntitlementsCommand
 */
export const se_GrantFlowEntitlementsCommand = async (
  input: GrantFlowEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/entitlements";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Entitlements != null && {
      entitlements: se___listOfGrantEntitlementRequest(input.Entitlements, context),
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

/**
 * serializeAws_restJson1ListBridgesCommand
 */
export const se_ListBridgesCommand = async (
  input: ListBridgesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges";
  const query: any = map({
    filterArn: [, input.FilterArn!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListEntitlementsCommand
 */
export const se_ListEntitlementsCommand = async (
  input: ListEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/entitlements";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListFlowsCommand
 */
export const se_ListFlowsCommand = async (
  input: ListFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListGatewayInstancesCommand
 */
export const se_ListGatewayInstancesCommand = async (
  input: ListGatewayInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/gateway-instances";
  const query: any = map({
    filterArn: [, input.FilterArn!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/gateways";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListOfferingsCommand
 */
export const se_ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListReservationsCommand
 */
export const se_ListReservationsCommand = async (
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/reservations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1PurchaseOfferingCommand
 */
export const se_PurchaseOfferingCommand = async (
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/offerings/{OfferingArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OfferingArn", () => input.OfferingArn!, "{OfferingArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ReservationName != null && { reservationName: input.ReservationName }),
    ...(input.Start != null && { start: input.Start }),
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

/**
 * serializeAws_restJson1RemoveBridgeOutputCommand
 */
export const se_RemoveBridgeOutputCommand = async (
  input: RemoveBridgeOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/bridges/{BridgeArn}/outputs/{OutputName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "OutputName", () => input.OutputName!, "{OutputName}", false);
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
 * serializeAws_restJson1RemoveBridgeSourceCommand
 */
export const se_RemoveBridgeSourceCommand = async (
  input: RemoveBridgeSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/bridges/{BridgeArn}/sources/{SourceName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SourceName", () => input.SourceName!, "{SourceName}", false);
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
 * serializeAws_restJson1RemoveFlowMediaStreamCommand
 */
export const se_RemoveFlowMediaStreamCommand = async (
  input: RemoveFlowMediaStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaStreamName",
    () => input.MediaStreamName!,
    "{MediaStreamName}",
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
 * serializeAws_restJson1RemoveFlowOutputCommand
 */
export const se_RemoveFlowOutputCommand = async (
  input: RemoveFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "OutputArn", () => input.OutputArn!, "{OutputArn}", false);
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
 * serializeAws_restJson1RemoveFlowSourceCommand
 */
export const se_RemoveFlowSourceCommand = async (
  input: RemoveFlowSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/source/{SourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SourceArn", () => input.SourceArn!, "{SourceArn}", false);
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
 * serializeAws_restJson1RemoveFlowVpcInterfaceCommand
 */
export const se_RemoveFlowVpcInterfaceCommand = async (
  input: RemoveFlowVpcInterfaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VpcInterfaceName",
    () => input.VpcInterfaceName!,
    "{VpcInterfaceName}",
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
 * serializeAws_restJson1RevokeFlowEntitlementCommand
 */
export const se_RevokeFlowEntitlementCommand = async (
  input: RevokeFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EntitlementArn",
    () => input.EntitlementArn!,
    "{EntitlementArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
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
 * serializeAws_restJson1StartFlowCommand
 */
export const se_StartFlowCommand = async (
  input: StartFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/start/{FlowArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
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
 * serializeAws_restJson1StopFlowCommand
 */
export const se_StopFlowCommand = async (
  input: StopFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/stop/{FlowArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
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
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1UpdateBridgeCommand
 */
export const se_UpdateBridgeCommand = async (
  input: UpdateBridgeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges/{BridgeArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.EgressGatewayBridge != null && {
      egressGatewayBridge: se_UpdateEgressGatewayBridgeRequest(input.EgressGatewayBridge, context),
    }),
    ...(input.IngressGatewayBridge != null && {
      ingressGatewayBridge: se_UpdateIngressGatewayBridgeRequest(input.IngressGatewayBridge, context),
    }),
    ...(input.SourceFailoverConfig != null && {
      sourceFailoverConfig: se_UpdateFailoverConfig(input.SourceFailoverConfig, context),
    }),
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
 * serializeAws_restJson1UpdateBridgeOutputCommand
 */
export const se_UpdateBridgeOutputCommand = async (
  input: UpdateBridgeOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/bridges/{BridgeArn}/outputs/{OutputName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "OutputName", () => input.OutputName!, "{OutputName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.NetworkOutput != null && {
      networkOutput: se_UpdateBridgeNetworkOutputRequest(input.NetworkOutput, context),
    }),
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
 * serializeAws_restJson1UpdateBridgeSourceCommand
 */
export const se_UpdateBridgeSourceCommand = async (
  input: UpdateBridgeSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/bridges/{BridgeArn}/sources/{SourceName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SourceName", () => input.SourceName!, "{SourceName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FlowSource != null && { flowSource: se_UpdateBridgeFlowSourceRequest(input.FlowSource, context) }),
    ...(input.NetworkSource != null && {
      networkSource: se_UpdateBridgeNetworkSourceRequest(input.NetworkSource, context),
    }),
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
 * serializeAws_restJson1UpdateBridgeStateCommand
 */
export const se_UpdateBridgeStateCommand = async (
  input: UpdateBridgeStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/bridges/{BridgeArn}/state";
  resolvedPath = __resolvedPath(resolvedPath, input, "BridgeArn", () => input.BridgeArn!, "{BridgeArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DesiredState != null && { desiredState: input.DesiredState }),
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
 * serializeAws_restJson1UpdateFlowCommand
 */
export const se_UpdateFlowCommand = async (
  input: UpdateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Maintenance != null && { maintenance: se_UpdateMaintenance(input.Maintenance, context) }),
    ...(input.SourceFailoverConfig != null && {
      sourceFailoverConfig: se_UpdateFailoverConfig(input.SourceFailoverConfig, context),
    }),
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
 * serializeAws_restJson1UpdateFlowEntitlementCommand
 */
export const se_UpdateFlowEntitlementCommand = async (
  input: UpdateFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EntitlementArn",
    () => input.EntitlementArn!,
    "{EntitlementArn}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
    ...(input.Encryption != null && { encryption: se_UpdateEncryption(input.Encryption, context) }),
    ...(input.EntitlementStatus != null && { entitlementStatus: input.EntitlementStatus }),
    ...(input.Subscribers != null && { subscribers: se___listOf__string(input.Subscribers, context) }),
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
 * serializeAws_restJson1UpdateFlowMediaStreamCommand
 */
export const se_UpdateFlowMediaStreamCommand = async (
  input: UpdateFlowMediaStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaStreamName",
    () => input.MediaStreamName!,
    "{MediaStreamName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Attributes != null && { attributes: se_MediaStreamAttributesRequest(input.Attributes, context) }),
    ...(input.ClockRate != null && { clockRate: input.ClockRate }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.MediaStreamType != null && { mediaStreamType: input.MediaStreamType }),
    ...(input.VideoFormat != null && { videoFormat: input.VideoFormat }),
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
 * serializeAws_restJson1UpdateFlowOutputCommand
 */
export const se_UpdateFlowOutputCommand = async (
  input: UpdateFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "OutputArn", () => input.OutputArn!, "{OutputArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CidrAllowList != null && { cidrAllowList: se___listOf__string(input.CidrAllowList, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Destination != null && { destination: input.Destination }),
    ...(input.Encryption != null && { encryption: se_UpdateEncryption(input.Encryption, context) }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MediaStreamOutputConfigurations != null && {
      mediaStreamOutputConfigurations: se___listOfMediaStreamOutputConfigurationRequest(
        input.MediaStreamOutputConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.RemoteId != null && { remoteId: input.RemoteId }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SenderIpAddress != null && { senderIpAddress: input.SenderIpAddress }),
    ...(input.SmoothingLatency != null && { smoothingLatency: input.SmoothingLatency }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceAttachment != null && {
      vpcInterfaceAttachment: se_VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
    }),
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
 * serializeAws_restJson1UpdateFlowSourceCommand
 */
export const se_UpdateFlowSourceCommand = async (
  input: UpdateFlowSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/flows/{FlowArn}/source/{SourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "FlowArn", () => input.FlowArn!, "{FlowArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SourceArn", () => input.SourceArn!, "{SourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Decryption != null && { decryption: se_UpdateEncryption(input.Decryption, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.EntitlementArn != null && { entitlementArn: input.EntitlementArn }),
    ...(input.GatewayBridgeSource != null && {
      gatewayBridgeSource: se_UpdateGatewayBridgeSourceRequest(input.GatewayBridgeSource, context),
    }),
    ...(input.IngestPort != null && { ingestPort: input.IngestPort }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MaxSyncBuffer != null && { maxSyncBuffer: input.MaxSyncBuffer }),
    ...(input.MediaStreamSourceConfigurations != null && {
      mediaStreamSourceConfigurations: se___listOfMediaStreamSourceConfigurationRequest(
        input.MediaStreamSourceConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SenderIpAddress != null && { senderIpAddress: input.SenderIpAddress }),
    ...(input.SourceListenerAddress != null && { sourceListenerAddress: input.SourceListenerAddress }),
    ...(input.SourceListenerPort != null && { sourceListenerPort: input.SourceListenerPort }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceName != null && { vpcInterfaceName: input.VpcInterfaceName }),
    ...(input.WhitelistCidr != null && { whitelistCidr: input.WhitelistCidr }),
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
 * serializeAws_restJson1UpdateGatewayInstanceCommand
 */
export const se_UpdateGatewayInstanceCommand = async (
  input: UpdateGatewayInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/gateway-instances/{GatewayInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GatewayInstanceArn",
    () => input.GatewayInstanceArn!,
    "{GatewayInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.BridgePlacement != null && { bridgePlacement: input.BridgePlacement }),
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
 * deserializeAws_restJson1AddBridgeOutputsCommand
 */
export const de_AddBridgeOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddBridgeOutputsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_AddBridgeOutputsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.outputs != null) {
    contents.Outputs = de___listOfBridgeOutput(data.outputs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddBridgeOutputsCommandError
 */
const de_AddBridgeOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddBridgeOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1AddBridgeSourcesCommand
 */
export const de_AddBridgeSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddBridgeSourcesCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_AddBridgeSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.sources != null) {
    contents.Sources = de___listOfBridgeSource(data.sources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddBridgeSourcesCommandError
 */
const de_AddBridgeSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddBridgeSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1AddFlowMediaStreamsCommand
 */
export const de_AddFlowMediaStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowMediaStreamsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddFlowMediaStreamsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStreams != null) {
    contents.MediaStreams = de___listOfMediaStream(data.mediaStreams, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddFlowMediaStreamsCommandError
 */
const de_AddFlowMediaStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowMediaStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1AddFlowOutputsCommand
 */
export const de_AddFlowOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddFlowOutputsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.outputs != null) {
    contents.Outputs = de___listOfOutput(data.outputs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddFlowOutputsCommandError
 */
const de_AddFlowOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AddFlowOutputs420Exception":
    case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception":
      throw await de_AddFlowOutputs420ExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1AddFlowSourcesCommand
 */
export const de_AddFlowSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowSourcesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddFlowSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.sources != null) {
    contents.Sources = de___listOfSource(data.sources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddFlowSourcesCommandError
 */
const de_AddFlowSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1AddFlowVpcInterfacesCommand
 */
export const de_AddFlowVpcInterfacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowVpcInterfacesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddFlowVpcInterfacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.vpcInterfaces != null) {
    contents.VpcInterfaces = de___listOfVpcInterface(data.vpcInterfaces, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddFlowVpcInterfacesCommandError
 */
const de_AddFlowVpcInterfacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowVpcInterfacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateBridgeCommand
 */
export const de_CreateBridgeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBridgeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateBridgeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridge != null) {
    contents.Bridge = de_Bridge(data.bridge, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBridgeCommandError
 */
const de_CreateBridgeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBridgeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "CreateBridge420Exception":
    case "com.amazonaws.mediaconnect#CreateBridge420Exception":
      throw await de_CreateBridge420ExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateFlowCommand
 */
export const de_CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flow != null) {
    contents.Flow = de_Flow(data.flow, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFlowCommandError
 */
const de_CreateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "CreateFlow420Exception":
    case "com.amazonaws.mediaconnect#CreateFlow420Exception":
      throw await de_CreateFlow420ExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1CreateGatewayCommand
 */
export const de_CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gateway != null) {
    contents.Gateway = de_Gateway(data.gateway, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGatewayCommandError
 */
const de_CreateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "CreateGateway420Exception":
    case "com.amazonaws.mediaconnect#CreateGateway420Exception":
      throw await de_CreateGateway420ExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteBridgeCommand
 */
export const de_DeleteBridgeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBridgeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBridgeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBridgeCommandError
 */
const de_DeleteBridgeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBridgeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteFlowCommand
 */
export const de_DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFlowCommandError
 */
const de_DeleteFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewayArn != null) {
    contents.GatewayArn = __expectString(data.gatewayArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGatewayCommandError
 */
const de_DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DeregisterGatewayInstanceCommand
 */
export const de_DeregisterGatewayInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterGatewayInstanceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeregisterGatewayInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewayInstanceArn != null) {
    contents.GatewayInstanceArn = __expectString(data.gatewayInstanceArn);
  }
  if (data.instanceState != null) {
    contents.InstanceState = __expectString(data.instanceState);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterGatewayInstanceCommandError
 */
const de_DeregisterGatewayInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterGatewayInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeBridgeCommand
 */
export const de_DescribeBridgeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBridgeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBridgeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridge != null) {
    contents.Bridge = de_Bridge(data.bridge, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBridgeCommandError
 */
const de_DescribeBridgeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBridgeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeFlowCommand
 */
export const de_DescribeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flow != null) {
    contents.Flow = de_Flow(data.flow, context);
  }
  if (data.messages != null) {
    contents.Messages = de_Messages(data.messages, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFlowCommandError
 */
const de_DescribeFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeGatewayCommand
 */
export const de_DescribeGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gateway != null) {
    contents.Gateway = de_Gateway(data.gateway, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayCommandError
 */
const de_DescribeGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeGatewayInstanceCommand
 */
export const de_DescribeGatewayInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGatewayInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewayInstance != null) {
    contents.GatewayInstance = de_GatewayInstance(data.gatewayInstance, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayInstanceCommandError
 */
const de_DescribeGatewayInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeOfferingCommand
 */
export const de_DescribeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.offering != null) {
    contents.Offering = de_Offering(data.offering, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOfferingCommandError
 */
const de_DescribeOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeReservationCommand
 */
export const de_DescribeReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReservationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reservation != null) {
    contents.Reservation = de_Reservation(data.reservation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservationCommandError
 */
const de_DescribeReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1GrantFlowEntitlementsCommand
 */
export const de_GrantFlowEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GrantFlowEntitlementsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlements != null) {
    contents.Entitlements = de___listOfEntitlement(data.entitlements, context);
  }
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GrantFlowEntitlementsCommandError
 */
const de_GrantFlowEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GrantFlowEntitlements420Exception":
    case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception":
      throw await de_GrantFlowEntitlements420ExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListBridgesCommand
 */
export const de_ListBridgesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBridgesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBridgesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridges != null) {
    contents.Bridges = de___listOfListedBridge(data.bridges, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBridgesCommandError
 */
const de_ListBridgesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBridgesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListEntitlementsCommand
 */
export const de_ListEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEntitlementsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlements != null) {
    contents.Entitlements = de___listOfListedEntitlement(data.entitlements, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEntitlementsCommandError
 */
const de_ListEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListFlowsCommand
 */
export const de_ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFlowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flows != null) {
    contents.Flows = de___listOfListedFlow(data.flows, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFlowsCommandError
 */
const de_ListFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListGatewayInstancesCommand
 */
export const de_ListGatewayInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGatewayInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.instances != null) {
    contents.Instances = de___listOfListedGatewayInstance(data.instances, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewayInstancesCommandError
 */
const de_ListGatewayInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGatewaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gateways != null) {
    contents.Gateways = de___listOfListedGateway(data.gateways, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewaysCommandError
 */
const de_ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListOfferingsCommand
 */
export const de_ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOfferingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.offerings != null) {
    contents.Offerings = de___listOfOffering(data.offerings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListOfferingsCommandError
 */
const de_ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1ListReservationsCommand
 */
export const de_ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReservationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.reservations != null) {
    contents.Reservations = de___listOfReservation(data.reservations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReservationsCommandError
 */
const de_ListReservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
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
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PurchaseOfferingCommand
 */
export const de_PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_PurchaseOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reservation != null) {
    contents.Reservation = de_Reservation(data.reservation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PurchaseOfferingCommandError
 */
const de_PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RemoveBridgeOutputCommand
 */
export const de_RemoveBridgeOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBridgeOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_RemoveBridgeOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.outputName != null) {
    contents.OutputName = __expectString(data.outputName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveBridgeOutputCommandError
 */
const de_RemoveBridgeOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBridgeOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RemoveBridgeSourceCommand
 */
export const de_RemoveBridgeSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBridgeSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_RemoveBridgeSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.sourceName != null) {
    contents.SourceName = __expectString(data.sourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveBridgeSourceCommandError
 */
const de_RemoveBridgeSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBridgeSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RemoveFlowMediaStreamCommand
 */
export const de_RemoveFlowMediaStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowMediaStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveFlowMediaStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStreamName != null) {
    contents.MediaStreamName = __expectString(data.mediaStreamName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveFlowMediaStreamCommandError
 */
const de_RemoveFlowMediaStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowMediaStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RemoveFlowOutputCommand
 */
export const de_RemoveFlowOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_RemoveFlowOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.outputArn != null) {
    contents.OutputArn = __expectString(data.outputArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveFlowOutputCommandError
 */
const de_RemoveFlowOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RemoveFlowSourceCommand
 */
export const de_RemoveFlowSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_RemoveFlowSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.sourceArn != null) {
    contents.SourceArn = __expectString(data.sourceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveFlowSourceCommandError
 */
const de_RemoveFlowSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RemoveFlowVpcInterfaceCommand
 */
export const de_RemoveFlowVpcInterfaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowVpcInterfaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveFlowVpcInterfaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.nonDeletedNetworkInterfaceIds != null) {
    contents.NonDeletedNetworkInterfaceIds = de___listOf__string(data.nonDeletedNetworkInterfaceIds, context);
  }
  if (data.vpcInterfaceName != null) {
    contents.VpcInterfaceName = __expectString(data.vpcInterfaceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError
 */
const de_RemoveFlowVpcInterfaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowVpcInterfaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1RevokeFlowEntitlementCommand
 */
export const de_RevokeFlowEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_RevokeFlowEntitlementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlementArn != null) {
    contents.EntitlementArn = __expectString(data.entitlementArn);
  }
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RevokeFlowEntitlementCommandError
 */
const de_RevokeFlowEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1StartFlowCommand
 */
export const de_StartFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartFlowCommandError
 */
const de_StartFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1StopFlowCommand
 */
export const de_StopFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StopFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopFlowCommandError
 */
const de_StopFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBridgeCommand
 */
export const de_UpdateBridgeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBridgeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridge != null) {
    contents.Bridge = de_Bridge(data.bridge, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBridgeCommandError
 */
const de_UpdateBridgeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateBridgeOutputCommand
 */
export const de_UpdateBridgeOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBridgeOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.output != null) {
    contents.Output = de_BridgeOutput(data.output, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBridgeOutputCommandError
 */
const de_UpdateBridgeOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateBridgeSourceCommand
 */
export const de_UpdateBridgeSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBridgeSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.source != null) {
    contents.Source = de_BridgeSource(data.source, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBridgeSourceCommandError
 */
const de_UpdateBridgeSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateBridgeStateCommand
 */
export const de_UpdateBridgeStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeStateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBridgeStateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgeArn != null) {
    contents.BridgeArn = __expectString(data.bridgeArn);
  }
  if (data.desiredState != null) {
    contents.DesiredState = __expectString(data.desiredState);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBridgeStateCommandError
 */
const de_UpdateBridgeStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBridgeStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateFlowCommand
 */
export const de_UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateFlowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flow != null) {
    contents.Flow = de_Flow(data.flow, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowCommandError
 */
const de_UpdateFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateFlowEntitlementCommand
 */
export const de_UpdateFlowEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateFlowEntitlementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitlement != null) {
    contents.Entitlement = de_Entitlement(data.entitlement, context);
  }
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowEntitlementCommandError
 */
const de_UpdateFlowEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateFlowMediaStreamCommand
 */
export const de_UpdateFlowMediaStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowMediaStreamCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateFlowMediaStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.mediaStream != null) {
    contents.MediaStream = de_MediaStream(data.mediaStream, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowMediaStreamCommandError
 */
const de_UpdateFlowMediaStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowMediaStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateFlowOutputCommand
 */
export const de_UpdateFlowOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateFlowOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.output != null) {
    contents.Output = de_Output(data.output, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowOutputCommandError
 */
const de_UpdateFlowOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateFlowSourceCommand
 */
export const de_UpdateFlowSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateFlowSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.flowArn != null) {
    contents.FlowArn = __expectString(data.flowArn);
  }
  if (data.source != null) {
    contents.Source = de_Source(data.source, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowSourceCommandError
 */
const de_UpdateFlowSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1UpdateGatewayInstanceCommand
 */
export const de_UpdateGatewayInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGatewayInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bridgePlacement != null) {
    contents.BridgePlacement = __expectString(data.bridgePlacement);
  }
  if (data.gatewayInstanceArn != null) {
    contents.GatewayInstanceArn = __expectString(data.gatewayInstanceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayInstanceCommandError
 */
const de_UpdateGatewayInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
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
 * deserializeAws_restJson1AddFlowOutputs420ExceptionRes
 */
const de_AddFlowOutputs420ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AddFlowOutputs420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new AddFlowOutputs420Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
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
    contents.Message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CreateBridge420ExceptionRes
 */
const de_CreateBridge420ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateBridge420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new CreateBridge420Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CreateFlow420ExceptionRes
 */
const de_CreateFlow420ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateFlow420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new CreateFlow420Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CreateGateway420ExceptionRes
 */
const de_CreateGateway420ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateGateway420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new CreateGateway420Exception({
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
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GrantFlowEntitlements420ExceptionRes
 */
const de_GrantFlowEntitlements420ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GrantFlowEntitlements420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new GrantFlowEntitlements420Exception({
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
    contents.Message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
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
    contents.Message = __expectString(data.message);
  }
  const exception = new NotFoundException({
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
    contents.Message = __expectString(data.message);
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
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfAddBridgeOutputRequest
 */
const se___listOfAddBridgeOutputRequest = (input: AddBridgeOutputRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AddBridgeOutputRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAddBridgeSourceRequest
 */
const se___listOfAddBridgeSourceRequest = (input: AddBridgeSourceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AddBridgeSourceRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAddMediaStreamRequest
 */
const se___listOfAddMediaStreamRequest = (input: AddMediaStreamRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AddMediaStreamRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAddOutputRequest
 */
const se___listOfAddOutputRequest = (input: AddOutputRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AddOutputRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfDestinationConfigurationRequest
 */
const se___listOfDestinationConfigurationRequest = (
  input: DestinationConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DestinationConfigurationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfGatewayNetwork
 */
const se___listOfGatewayNetwork = (input: GatewayNetwork[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GatewayNetwork(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfGrantEntitlementRequest
 */
const se___listOfGrantEntitlementRequest = (input: GrantEntitlementRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GrantEntitlementRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputConfigurationRequest
 */
const se___listOfInputConfigurationRequest = (input: InputConfigurationRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputConfigurationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest
 */
const se___listOfMediaStreamOutputConfigurationRequest = (
  input: MediaStreamOutputConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MediaStreamOutputConfigurationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest
 */
const se___listOfMediaStreamSourceConfigurationRequest = (
  input: MediaStreamSourceConfigurationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MediaStreamSourceConfigurationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfSetSourceRequest
 */
const se___listOfSetSourceRequest = (input: SetSourceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SetSourceRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfVpcInterfaceRequest
 */
const se___listOfVpcInterfaceRequest = (input: VpcInterfaceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VpcInterfaceRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__mapOf__string
 */
const se___mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AddBridgeFlowSourceRequest
 */
const se_AddBridgeFlowSourceRequest = (input: AddBridgeFlowSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlowArn != null && { flowArn: input.FlowArn }),
    ...(input.FlowVpcInterfaceAttachment != null && {
      flowVpcInterfaceAttachment: se_VpcInterfaceAttachment(input.FlowVpcInterfaceAttachment, context),
    }),
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1AddBridgeNetworkOutputRequest
 */
const se_AddBridgeNetworkOutputRequest = (input: AddBridgeNetworkOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.IpAddress != null && { ipAddress: input.IpAddress }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.NetworkName != null && { networkName: input.NetworkName }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.Ttl != null && { ttl: input.Ttl }),
  };
};

/**
 * serializeAws_restJson1AddBridgeNetworkSourceRequest
 */
const se_AddBridgeNetworkSourceRequest = (input: AddBridgeNetworkSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MulticastIp != null && { multicastIp: input.MulticastIp }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.NetworkName != null && { networkName: input.NetworkName }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
  };
};

/**
 * serializeAws_restJson1AddBridgeOutputRequest
 */
const se_AddBridgeOutputRequest = (input: AddBridgeOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.NetworkOutput != null && {
      networkOutput: se_AddBridgeNetworkOutputRequest(input.NetworkOutput, context),
    }),
  };
};

/**
 * serializeAws_restJson1AddBridgeSourceRequest
 */
const se_AddBridgeSourceRequest = (input: AddBridgeSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlowSource != null && { flowSource: se_AddBridgeFlowSourceRequest(input.FlowSource, context) }),
    ...(input.NetworkSource != null && {
      networkSource: se_AddBridgeNetworkSourceRequest(input.NetworkSource, context),
    }),
  };
};

/**
 * serializeAws_restJson1AddEgressGatewayBridgeRequest
 */
const se_AddEgressGatewayBridgeRequest = (input: AddEgressGatewayBridgeRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
  };
};

/**
 * serializeAws_restJson1AddIngressGatewayBridgeRequest
 */
const se_AddIngressGatewayBridgeRequest = (input: AddIngressGatewayBridgeRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxOutputs != null && { maxOutputs: input.MaxOutputs }),
  };
};

/**
 * serializeAws_restJson1AddMaintenance
 */
const se_AddMaintenance = (input: AddMaintenance, context: __SerdeContext): any => {
  return {
    ...(input.MaintenanceDay != null && { maintenanceDay: input.MaintenanceDay }),
    ...(input.MaintenanceStartHour != null && { maintenanceStartHour: input.MaintenanceStartHour }),
  };
};

/**
 * serializeAws_restJson1AddMediaStreamRequest
 */
const se_AddMediaStreamRequest = (input: AddMediaStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { attributes: se_MediaStreamAttributesRequest(input.Attributes, context) }),
    ...(input.ClockRate != null && { clockRate: input.ClockRate }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.MediaStreamId != null && { mediaStreamId: input.MediaStreamId }),
    ...(input.MediaStreamName != null && { mediaStreamName: input.MediaStreamName }),
    ...(input.MediaStreamType != null && { mediaStreamType: input.MediaStreamType }),
    ...(input.VideoFormat != null && { videoFormat: input.VideoFormat }),
  };
};

/**
 * serializeAws_restJson1AddOutputRequest
 */
const se_AddOutputRequest = (input: AddOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.CidrAllowList != null && { cidrAllowList: se___listOf__string(input.CidrAllowList, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Destination != null && { destination: input.Destination }),
    ...(input.Encryption != null && { encryption: se_Encryption(input.Encryption, context) }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MediaStreamOutputConfigurations != null && {
      mediaStreamOutputConfigurations: se___listOfMediaStreamOutputConfigurationRequest(
        input.MediaStreamOutputConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.RemoteId != null && { remoteId: input.RemoteId }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SmoothingLatency != null && { smoothingLatency: input.SmoothingLatency }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceAttachment != null && {
      vpcInterfaceAttachment: se_VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
    }),
  };
};

/**
 * serializeAws_restJson1DestinationConfigurationRequest
 */
const se_DestinationConfigurationRequest = (input: DestinationConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.DestinationIp != null && { destinationIp: input.DestinationIp }),
    ...(input.DestinationPort != null && { destinationPort: input.DestinationPort }),
    ...(input.Interface != null && { interface: se_InterfaceRequest(input.Interface, context) }),
  };
};

/**
 * serializeAws_restJson1EncodingParametersRequest
 */
const se_EncodingParametersRequest = (input: EncodingParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.CompressionFactor != null && { compressionFactor: __serializeFloat(input.CompressionFactor) }),
    ...(input.EncoderProfile != null && { encoderProfile: input.EncoderProfile }),
  };
};

/**
 * serializeAws_restJson1Encryption
 */
const se_Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { algorithm: input.Algorithm }),
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.DeviceId != null && { deviceId: input.DeviceId }),
    ...(input.KeyType != null && { keyType: input.KeyType }),
    ...(input.Region != null && { region: input.Region }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SecretArn != null && { secretArn: input.SecretArn }),
    ...(input.Url != null && { url: input.Url }),
  };
};

/**
 * serializeAws_restJson1FailoverConfig
 */
const se_FailoverConfig = (input: FailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverMode != null && { failoverMode: input.FailoverMode }),
    ...(input.RecoveryWindow != null && { recoveryWindow: input.RecoveryWindow }),
    ...(input.SourcePriority != null && { sourcePriority: se_SourcePriority(input.SourcePriority, context) }),
    ...(input.State != null && { state: input.State }),
  };
};

/**
 * serializeAws_restJson1FmtpRequest
 */
const se_FmtpRequest = (input: FmtpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChannelOrder != null && { channelOrder: input.ChannelOrder }),
    ...(input.Colorimetry != null && { colorimetry: input.Colorimetry }),
    ...(input.ExactFramerate != null && { exactFramerate: input.ExactFramerate }),
    ...(input.Par != null && { par: input.Par }),
    ...(input.Range != null && { range: input.Range }),
    ...(input.ScanMode != null && { scanMode: input.ScanMode }),
    ...(input.Tcs != null && { tcs: input.Tcs }),
  };
};

/**
 * serializeAws_restJson1GatewayNetwork
 */
const se_GatewayNetwork = (input: GatewayNetwork, context: __SerdeContext): any => {
  return {
    ...(input.CidrBlock != null && { cidrBlock: input.CidrBlock }),
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1GrantEntitlementRequest
 */
const se_GrantEntitlementRequest = (input: GrantEntitlementRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataTransferSubscriberFeePercent != null && {
      dataTransferSubscriberFeePercent: input.DataTransferSubscriberFeePercent,
    }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.Encryption != null && { encryption: se_Encryption(input.Encryption, context) }),
    ...(input.EntitlementStatus != null && { entitlementStatus: input.EntitlementStatus }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Subscribers != null && { subscribers: se___listOf__string(input.Subscribers, context) }),
  };
};

/**
 * serializeAws_restJson1InputConfigurationRequest
 */
const se_InputConfigurationRequest = (input: InputConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.InputPort != null && { inputPort: input.InputPort }),
    ...(input.Interface != null && { interface: se_InterfaceRequest(input.Interface, context) }),
  };
};

/**
 * serializeAws_restJson1InterfaceRequest
 */
const se_InterfaceRequest = (input: InterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1MediaStreamAttributesRequest
 */
const se_MediaStreamAttributesRequest = (input: MediaStreamAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Fmtp != null && { fmtp: se_FmtpRequest(input.Fmtp, context) }),
    ...(input.Lang != null && { lang: input.Lang }),
  };
};

/**
 * serializeAws_restJson1MediaStreamOutputConfigurationRequest
 */
const se_MediaStreamOutputConfigurationRequest = (
  input: MediaStreamOutputConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfigurations != null && {
      destinationConfigurations: se___listOfDestinationConfigurationRequest(input.DestinationConfigurations, context),
    }),
    ...(input.EncodingName != null && { encodingName: input.EncodingName }),
    ...(input.EncodingParameters != null && {
      encodingParameters: se_EncodingParametersRequest(input.EncodingParameters, context),
    }),
    ...(input.MediaStreamName != null && { mediaStreamName: input.MediaStreamName }),
  };
};

/**
 * serializeAws_restJson1MediaStreamSourceConfigurationRequest
 */
const se_MediaStreamSourceConfigurationRequest = (
  input: MediaStreamSourceConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncodingName != null && { encodingName: input.EncodingName }),
    ...(input.InputConfigurations != null && {
      inputConfigurations: se___listOfInputConfigurationRequest(input.InputConfigurations, context),
    }),
    ...(input.MediaStreamName != null && { mediaStreamName: input.MediaStreamName }),
  };
};

/**
 * serializeAws_restJson1SetGatewayBridgeSourceRequest
 */
const se_SetGatewayBridgeSourceRequest = (input: SetGatewayBridgeSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BridgeArn != null && { bridgeArn: input.BridgeArn }),
    ...(input.VpcInterfaceAttachment != null && {
      vpcInterfaceAttachment: se_VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
    }),
  };
};

/**
 * serializeAws_restJson1SetSourceRequest
 */
const se_SetSourceRequest = (input: SetSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Decryption != null && { decryption: se_Encryption(input.Decryption, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.EntitlementArn != null && { entitlementArn: input.EntitlementArn }),
    ...(input.GatewayBridgeSource != null && {
      gatewayBridgeSource: se_SetGatewayBridgeSourceRequest(input.GatewayBridgeSource, context),
    }),
    ...(input.IngestPort != null && { ingestPort: input.IngestPort }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxLatency != null && { maxLatency: input.MaxLatency }),
    ...(input.MaxSyncBuffer != null && { maxSyncBuffer: input.MaxSyncBuffer }),
    ...(input.MediaStreamSourceConfigurations != null && {
      mediaStreamSourceConfigurations: se___listOfMediaStreamSourceConfigurationRequest(
        input.MediaStreamSourceConfigurations,
        context
      ),
    }),
    ...(input.MinLatency != null && { minLatency: input.MinLatency }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.SenderControlPort != null && { senderControlPort: input.SenderControlPort }),
    ...(input.SenderIpAddress != null && { senderIpAddress: input.SenderIpAddress }),
    ...(input.SourceListenerAddress != null && { sourceListenerAddress: input.SourceListenerAddress }),
    ...(input.SourceListenerPort != null && { sourceListenerPort: input.SourceListenerPort }),
    ...(input.StreamId != null && { streamId: input.StreamId }),
    ...(input.VpcInterfaceName != null && { vpcInterfaceName: input.VpcInterfaceName }),
    ...(input.WhitelistCidr != null && { whitelistCidr: input.WhitelistCidr }),
  };
};

/**
 * serializeAws_restJson1SourcePriority
 */
const se_SourcePriority = (input: SourcePriority, context: __SerdeContext): any => {
  return {
    ...(input.PrimarySource != null && { primarySource: input.PrimarySource }),
  };
};

/**
 * serializeAws_restJson1UpdateBridgeFlowSourceRequest
 */
const se_UpdateBridgeFlowSourceRequest = (input: UpdateBridgeFlowSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlowArn != null && { flowArn: input.FlowArn }),
    ...(input.FlowVpcInterfaceAttachment != null && {
      flowVpcInterfaceAttachment: se_VpcInterfaceAttachment(input.FlowVpcInterfaceAttachment, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateBridgeNetworkOutputRequest
 */
const se_UpdateBridgeNetworkOutputRequest = (input: UpdateBridgeNetworkOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.IpAddress != null && { ipAddress: input.IpAddress }),
    ...(input.NetworkName != null && { networkName: input.NetworkName }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
    ...(input.Ttl != null && { ttl: input.Ttl }),
  };
};

/**
 * serializeAws_restJson1UpdateBridgeNetworkSourceRequest
 */
const se_UpdateBridgeNetworkSourceRequest = (input: UpdateBridgeNetworkSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MulticastIp != null && { multicastIp: input.MulticastIp }),
    ...(input.NetworkName != null && { networkName: input.NetworkName }),
    ...(input.Port != null && { port: input.Port }),
    ...(input.Protocol != null && { protocol: input.Protocol }),
  };
};

/**
 * serializeAws_restJson1UpdateEgressGatewayBridgeRequest
 */
const se_UpdateEgressGatewayBridgeRequest = (input: UpdateEgressGatewayBridgeRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
  };
};

/**
 * serializeAws_restJson1UpdateEncryption
 */
const se_UpdateEncryption = (input: UpdateEncryption, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { algorithm: input.Algorithm }),
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.DeviceId != null && { deviceId: input.DeviceId }),
    ...(input.KeyType != null && { keyType: input.KeyType }),
    ...(input.Region != null && { region: input.Region }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SecretArn != null && { secretArn: input.SecretArn }),
    ...(input.Url != null && { url: input.Url }),
  };
};

/**
 * serializeAws_restJson1UpdateFailoverConfig
 */
const se_UpdateFailoverConfig = (input: UpdateFailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverMode != null && { failoverMode: input.FailoverMode }),
    ...(input.RecoveryWindow != null && { recoveryWindow: input.RecoveryWindow }),
    ...(input.SourcePriority != null && { sourcePriority: se_SourcePriority(input.SourcePriority, context) }),
    ...(input.State != null && { state: input.State }),
  };
};

/**
 * serializeAws_restJson1UpdateGatewayBridgeSourceRequest
 */
const se_UpdateGatewayBridgeSourceRequest = (input: UpdateGatewayBridgeSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BridgeArn != null && { bridgeArn: input.BridgeArn }),
    ...(input.VpcInterfaceAttachment != null && {
      vpcInterfaceAttachment: se_VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateIngressGatewayBridgeRequest
 */
const se_UpdateIngressGatewayBridgeRequest = (
  input: UpdateIngressGatewayBridgeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MaxOutputs != null && { maxOutputs: input.MaxOutputs }),
  };
};

/**
 * serializeAws_restJson1UpdateMaintenance
 */
const se_UpdateMaintenance = (input: UpdateMaintenance, context: __SerdeContext): any => {
  return {
    ...(input.MaintenanceDay != null && { maintenanceDay: input.MaintenanceDay }),
    ...(input.MaintenanceScheduledDate != null && { maintenanceScheduledDate: input.MaintenanceScheduledDate }),
    ...(input.MaintenanceStartHour != null && { maintenanceStartHour: input.MaintenanceStartHour }),
  };
};

/**
 * serializeAws_restJson1VpcInterfaceAttachment
 */
const se_VpcInterfaceAttachment = (input: VpcInterfaceAttachment, context: __SerdeContext): any => {
  return {
    ...(input.VpcInterfaceName != null && { vpcInterfaceName: input.VpcInterfaceName }),
  };
};

/**
 * serializeAws_restJson1VpcInterfaceRequest
 */
const se_VpcInterfaceRequest = (input: VpcInterfaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.NetworkInterfaceType != null && { networkInterfaceType: input.NetworkInterfaceType }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SecurityGroupIds != null && { securityGroupIds: se___listOf__string(input.SecurityGroupIds, context) }),
    ...(input.SubnetId != null && { subnetId: input.SubnetId }),
  };
};

/**
 * deserializeAws_restJson1__listOf__integer
 */
const de___listOf__integer = (output: any, context: __SerdeContext): number[] => {
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
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfBridgeOutput
 */
const de___listOfBridgeOutput = (output: any, context: __SerdeContext): BridgeOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BridgeOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBridgeSource
 */
const de___listOfBridgeSource = (output: any, context: __SerdeContext): BridgeSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BridgeSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDestinationConfiguration
 */
const de___listOfDestinationConfiguration = (output: any, context: __SerdeContext): DestinationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DestinationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfEntitlement
 */
const de___listOfEntitlement = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Entitlement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfGatewayNetwork
 */
const de___listOfGatewayNetwork = (output: any, context: __SerdeContext): GatewayNetwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewayNetwork(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputConfiguration
 */
const de___listOfInputConfiguration = (output: any, context: __SerdeContext): InputConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfListedBridge
 */
const de___listOfListedBridge = (output: any, context: __SerdeContext): ListedBridge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedBridge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfListedEntitlement
 */
const de___listOfListedEntitlement = (output: any, context: __SerdeContext): ListedEntitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedEntitlement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfListedFlow
 */
const de___listOfListedFlow = (output: any, context: __SerdeContext): ListedFlow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedFlow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfListedGateway
 */
const de___listOfListedGateway = (output: any, context: __SerdeContext): ListedGateway[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedGateway(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfListedGatewayInstance
 */
const de___listOfListedGatewayInstance = (output: any, context: __SerdeContext): ListedGatewayInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedGatewayInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMediaStream
 */
const de___listOfMediaStream = (output: any, context: __SerdeContext): MediaStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaStream(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMediaStreamOutputConfiguration
 */
const de___listOfMediaStreamOutputConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamOutputConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaStreamOutputConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMediaStreamSourceConfiguration
 */
const de___listOfMediaStreamSourceConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStreamSourceConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaStreamSourceConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMessageDetail
 */
const de___listOfMessageDetail = (output: any, context: __SerdeContext): MessageDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MessageDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOffering
 */
const de___listOfOffering = (output: any, context: __SerdeContext): Offering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Offering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutput
 */
const de___listOfOutput = (output: any, context: __SerdeContext): Output[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Output(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfReservation
 */
const de___listOfReservation = (output: any, context: __SerdeContext): Reservation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Reservation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSource
 */
const de___listOfSource = (output: any, context: __SerdeContext): Source[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Source(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVpcInterface
 */
const de___listOfVpcInterface = (output: any, context: __SerdeContext): VpcInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__mapOf__string
 */
const de___mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Bridge
 */
const de_Bridge = (output: any, context: __SerdeContext): Bridge => {
  return {
    BridgeArn: __expectString(output.bridgeArn),
    BridgeMessages:
      output.bridgeMessages != null ? de___listOfMessageDetail(output.bridgeMessages, context) : undefined,
    BridgeState: __expectString(output.bridgeState),
    EgressGatewayBridge:
      output.egressGatewayBridge != null ? de_EgressGatewayBridge(output.egressGatewayBridge, context) : undefined,
    IngressGatewayBridge:
      output.ingressGatewayBridge != null ? de_IngressGatewayBridge(output.ingressGatewayBridge, context) : undefined,
    Name: __expectString(output.name),
    Outputs: output.outputs != null ? de___listOfBridgeOutput(output.outputs, context) : undefined,
    PlacementArn: __expectString(output.placementArn),
    SourceFailoverConfig:
      output.sourceFailoverConfig != null ? de_FailoverConfig(output.sourceFailoverConfig, context) : undefined,
    Sources: output.sources != null ? de___listOfBridgeSource(output.sources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BridgeFlowOutput
 */
const de_BridgeFlowOutput = (output: any, context: __SerdeContext): BridgeFlowOutput => {
  return {
    FlowArn: __expectString(output.flowArn),
    FlowSourceArn: __expectString(output.flowSourceArn),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1BridgeFlowSource
 */
const de_BridgeFlowSource = (output: any, context: __SerdeContext): BridgeFlowSource => {
  return {
    FlowArn: __expectString(output.flowArn),
    FlowVpcInterfaceAttachment:
      output.flowVpcInterfaceAttachment != null
        ? de_VpcInterfaceAttachment(output.flowVpcInterfaceAttachment, context)
        : undefined,
    Name: __expectString(output.name),
    OutputArn: __expectString(output.outputArn),
  } as any;
};

/**
 * deserializeAws_restJson1BridgeNetworkOutput
 */
const de_BridgeNetworkOutput = (output: any, context: __SerdeContext): BridgeNetworkOutput => {
  return {
    IpAddress: __expectString(output.ipAddress),
    Name: __expectString(output.name),
    NetworkName: __expectString(output.networkName),
    Port: __expectInt32(output.port),
    Protocol: __expectString(output.protocol),
    Ttl: __expectInt32(output.ttl),
  } as any;
};

/**
 * deserializeAws_restJson1BridgeNetworkSource
 */
const de_BridgeNetworkSource = (output: any, context: __SerdeContext): BridgeNetworkSource => {
  return {
    MulticastIp: __expectString(output.multicastIp),
    Name: __expectString(output.name),
    NetworkName: __expectString(output.networkName),
    Port: __expectInt32(output.port),
    Protocol: __expectString(output.protocol),
  } as any;
};

/**
 * deserializeAws_restJson1BridgeOutput
 */
const de_BridgeOutput = (output: any, context: __SerdeContext): BridgeOutput => {
  return {
    FlowOutput: output.flowOutput != null ? de_BridgeFlowOutput(output.flowOutput, context) : undefined,
    NetworkOutput: output.networkOutput != null ? de_BridgeNetworkOutput(output.networkOutput, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BridgeSource
 */
const de_BridgeSource = (output: any, context: __SerdeContext): BridgeSource => {
  return {
    FlowSource: output.flowSource != null ? de_BridgeFlowSource(output.flowSource, context) : undefined,
    NetworkSource: output.networkSource != null ? de_BridgeNetworkSource(output.networkSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DestinationConfiguration
 */
const de_DestinationConfiguration = (output: any, context: __SerdeContext): DestinationConfiguration => {
  return {
    DestinationIp: __expectString(output.destinationIp),
    DestinationPort: __expectInt32(output.destinationPort),
    Interface: output.interface != null ? de_Interface(output.interface, context) : undefined,
    OutboundIp: __expectString(output.outboundIp),
  } as any;
};

/**
 * deserializeAws_restJson1EgressGatewayBridge
 */
const de_EgressGatewayBridge = (output: any, context: __SerdeContext): EgressGatewayBridge => {
  return {
    InstanceId: __expectString(output.instanceId),
    MaxBitrate: __expectInt32(output.maxBitrate),
  } as any;
};

/**
 * deserializeAws_restJson1EncodingParameters
 */
const de_EncodingParameters = (output: any, context: __SerdeContext): EncodingParameters => {
  return {
    CompressionFactor: __limitedParseDouble(output.compressionFactor),
    EncoderProfile: __expectString(output.encoderProfile),
  } as any;
};

/**
 * deserializeAws_restJson1Encryption
 */
const de_Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    Algorithm: __expectString(output.algorithm),
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    DeviceId: __expectString(output.deviceId),
    KeyType: __expectString(output.keyType),
    Region: __expectString(output.region),
    ResourceId: __expectString(output.resourceId),
    RoleArn: __expectString(output.roleArn),
    SecretArn: __expectString(output.secretArn),
    Url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_restJson1Entitlement
 */
const de_Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    Description: __expectString(output.description),
    Encryption: output.encryption != null ? de_Encryption(output.encryption, context) : undefined,
    EntitlementArn: __expectString(output.entitlementArn),
    EntitlementStatus: __expectString(output.entitlementStatus),
    Name: __expectString(output.name),
    Subscribers: output.subscribers != null ? de___listOf__string(output.subscribers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FailoverConfig
 */
const de_FailoverConfig = (output: any, context: __SerdeContext): FailoverConfig => {
  return {
    FailoverMode: __expectString(output.failoverMode),
    RecoveryWindow: __expectInt32(output.recoveryWindow),
    SourcePriority: output.sourcePriority != null ? de_SourcePriority(output.sourcePriority, context) : undefined,
    State: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1Flow
 */
const de_Flow = (output: any, context: __SerdeContext): Flow => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    Description: __expectString(output.description),
    EgressIp: __expectString(output.egressIp),
    Entitlements: output.entitlements != null ? de___listOfEntitlement(output.entitlements, context) : undefined,
    FlowArn: __expectString(output.flowArn),
    Maintenance: output.maintenance != null ? de_Maintenance(output.maintenance, context) : undefined,
    MediaStreams: output.mediaStreams != null ? de___listOfMediaStream(output.mediaStreams, context) : undefined,
    Name: __expectString(output.name),
    Outputs: output.outputs != null ? de___listOfOutput(output.outputs, context) : undefined,
    Source: output.source != null ? de_Source(output.source, context) : undefined,
    SourceFailoverConfig:
      output.sourceFailoverConfig != null ? de_FailoverConfig(output.sourceFailoverConfig, context) : undefined,
    Sources: output.sources != null ? de___listOfSource(output.sources, context) : undefined,
    Status: __expectString(output.status),
    VpcInterfaces: output.vpcInterfaces != null ? de___listOfVpcInterface(output.vpcInterfaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Fmtp
 */
const de_Fmtp = (output: any, context: __SerdeContext): Fmtp => {
  return {
    ChannelOrder: __expectString(output.channelOrder),
    Colorimetry: __expectString(output.colorimetry),
    ExactFramerate: __expectString(output.exactFramerate),
    Par: __expectString(output.par),
    Range: __expectString(output.range),
    ScanMode: __expectString(output.scanMode),
    Tcs: __expectString(output.tcs),
  } as any;
};

/**
 * deserializeAws_restJson1Gateway
 */
const de_Gateway = (output: any, context: __SerdeContext): Gateway => {
  return {
    EgressCidrBlocks:
      output.egressCidrBlocks != null ? de___listOf__string(output.egressCidrBlocks, context) : undefined,
    GatewayArn: __expectString(output.gatewayArn),
    GatewayMessages:
      output.gatewayMessages != null ? de___listOfMessageDetail(output.gatewayMessages, context) : undefined,
    GatewayState: __expectString(output.gatewayState),
    Name: __expectString(output.name),
    Networks: output.networks != null ? de___listOfGatewayNetwork(output.networks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GatewayBridgeSource
 */
const de_GatewayBridgeSource = (output: any, context: __SerdeContext): GatewayBridgeSource => {
  return {
    BridgeArn: __expectString(output.bridgeArn),
    VpcInterfaceAttachment:
      output.vpcInterfaceAttachment != null
        ? de_VpcInterfaceAttachment(output.vpcInterfaceAttachment, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GatewayInstance
 */
const de_GatewayInstance = (output: any, context: __SerdeContext): GatewayInstance => {
  return {
    BridgePlacement: __expectString(output.bridgePlacement),
    ConnectionStatus: __expectString(output.connectionStatus),
    GatewayArn: __expectString(output.gatewayArn),
    GatewayInstanceArn: __expectString(output.gatewayInstanceArn),
    InstanceId: __expectString(output.instanceId),
    InstanceMessages:
      output.instanceMessages != null ? de___listOfMessageDetail(output.instanceMessages, context) : undefined,
    InstanceState: __expectString(output.instanceState),
    RunningBridgeCount: __expectInt32(output.runningBridgeCount),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayNetwork
 */
const de_GatewayNetwork = (output: any, context: __SerdeContext): GatewayNetwork => {
  return {
    CidrBlock: __expectString(output.cidrBlock),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1IngressGatewayBridge
 */
const de_IngressGatewayBridge = (output: any, context: __SerdeContext): IngressGatewayBridge => {
  return {
    InstanceId: __expectString(output.instanceId),
    MaxBitrate: __expectInt32(output.maxBitrate),
    MaxOutputs: __expectInt32(output.maxOutputs),
  } as any;
};

/**
 * deserializeAws_restJson1InputConfiguration
 */
const de_InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
  return {
    InputIp: __expectString(output.inputIp),
    InputPort: __expectInt32(output.inputPort),
    Interface: output.interface != null ? de_Interface(output.interface, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Interface
 */
const de_Interface = (output: any, context: __SerdeContext): Interface => {
  return {
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ListedBridge
 */
const de_ListedBridge = (output: any, context: __SerdeContext): ListedBridge => {
  return {
    BridgeArn: __expectString(output.bridgeArn),
    BridgeState: __expectString(output.bridgeState),
    BridgeType: __expectString(output.bridgeType),
    Name: __expectString(output.name),
    PlacementArn: __expectString(output.placementArn),
  } as any;
};

/**
 * deserializeAws_restJson1ListedEntitlement
 */
const de_ListedEntitlement = (output: any, context: __SerdeContext): ListedEntitlement => {
  return {
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    EntitlementArn: __expectString(output.entitlementArn),
    EntitlementName: __expectString(output.entitlementName),
  } as any;
};

/**
 * deserializeAws_restJson1ListedFlow
 */
const de_ListedFlow = (output: any, context: __SerdeContext): ListedFlow => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    Description: __expectString(output.description),
    FlowArn: __expectString(output.flowArn),
    Maintenance: output.maintenance != null ? de_Maintenance(output.maintenance, context) : undefined,
    Name: __expectString(output.name),
    SourceType: __expectString(output.sourceType),
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ListedGateway
 */
const de_ListedGateway = (output: any, context: __SerdeContext): ListedGateway => {
  return {
    GatewayArn: __expectString(output.gatewayArn),
    GatewayState: __expectString(output.gatewayState),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ListedGatewayInstance
 */
const de_ListedGatewayInstance = (output: any, context: __SerdeContext): ListedGatewayInstance => {
  return {
    GatewayArn: __expectString(output.gatewayArn),
    GatewayInstanceArn: __expectString(output.gatewayInstanceArn),
    InstanceId: __expectString(output.instanceId),
    InstanceState: __expectString(output.instanceState),
  } as any;
};

/**
 * deserializeAws_restJson1Maintenance
 */
const de_Maintenance = (output: any, context: __SerdeContext): Maintenance => {
  return {
    MaintenanceDay: __expectString(output.maintenanceDay),
    MaintenanceDeadline: __expectString(output.maintenanceDeadline),
    MaintenanceScheduledDate: __expectString(output.maintenanceScheduledDate),
    MaintenanceStartHour: __expectString(output.maintenanceStartHour),
  } as any;
};

/**
 * deserializeAws_restJson1MediaStream
 */
const de_MediaStream = (output: any, context: __SerdeContext): MediaStream => {
  return {
    Attributes: output.attributes != null ? de_MediaStreamAttributes(output.attributes, context) : undefined,
    ClockRate: __expectInt32(output.clockRate),
    Description: __expectString(output.description),
    Fmt: __expectInt32(output.fmt),
    MediaStreamId: __expectInt32(output.mediaStreamId),
    MediaStreamName: __expectString(output.mediaStreamName),
    MediaStreamType: __expectString(output.mediaStreamType),
    VideoFormat: __expectString(output.videoFormat),
  } as any;
};

/**
 * deserializeAws_restJson1MediaStreamAttributes
 */
const de_MediaStreamAttributes = (output: any, context: __SerdeContext): MediaStreamAttributes => {
  return {
    Fmtp: output.fmtp != null ? de_Fmtp(output.fmtp, context) : undefined,
    Lang: __expectString(output.lang),
  } as any;
};

/**
 * deserializeAws_restJson1MediaStreamOutputConfiguration
 */
const de_MediaStreamOutputConfiguration = (output: any, context: __SerdeContext): MediaStreamOutputConfiguration => {
  return {
    DestinationConfigurations:
      output.destinationConfigurations != null
        ? de___listOfDestinationConfiguration(output.destinationConfigurations, context)
        : undefined,
    EncodingName: __expectString(output.encodingName),
    EncodingParameters:
      output.encodingParameters != null ? de_EncodingParameters(output.encodingParameters, context) : undefined,
    MediaStreamName: __expectString(output.mediaStreamName),
  } as any;
};

/**
 * deserializeAws_restJson1MediaStreamSourceConfiguration
 */
const de_MediaStreamSourceConfiguration = (output: any, context: __SerdeContext): MediaStreamSourceConfiguration => {
  return {
    EncodingName: __expectString(output.encodingName),
    InputConfigurations:
      output.inputConfigurations != null
        ? de___listOfInputConfiguration(output.inputConfigurations, context)
        : undefined,
    MediaStreamName: __expectString(output.mediaStreamName),
  } as any;
};

/**
 * deserializeAws_restJson1MessageDetail
 */
const de_MessageDetail = (output: any, context: __SerdeContext): MessageDetail => {
  return {
    Code: __expectString(output.code),
    Message: __expectString(output.message),
    ResourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_restJson1Messages
 */
const de_Messages = (output: any, context: __SerdeContext): Messages => {
  return {
    Errors: output.errors != null ? de___listOf__string(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Offering
 */
const de_Offering = (output: any, context: __SerdeContext): Offering => {
  return {
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt32(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    OfferingArn: __expectString(output.offeringArn),
    OfferingDescription: __expectString(output.offeringDescription),
    PricePerUnit: __expectString(output.pricePerUnit),
    PriceUnits: __expectString(output.priceUnits),
    ResourceSpecification:
      output.resourceSpecification != null
        ? de_ResourceSpecification(output.resourceSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Output
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  return {
    BridgeArn: __expectString(output.bridgeArn),
    BridgePorts: output.bridgePorts != null ? de___listOf__integer(output.bridgePorts, context) : undefined,
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    Description: __expectString(output.description),
    Destination: __expectString(output.destination),
    Encryption: output.encryption != null ? de_Encryption(output.encryption, context) : undefined,
    EntitlementArn: __expectString(output.entitlementArn),
    ListenerAddress: __expectString(output.listenerAddress),
    MediaLiveInputArn: __expectString(output.mediaLiveInputArn),
    MediaStreamOutputConfigurations:
      output.mediaStreamOutputConfigurations != null
        ? de___listOfMediaStreamOutputConfiguration(output.mediaStreamOutputConfigurations, context)
        : undefined,
    Name: __expectString(output.name),
    OutputArn: __expectString(output.outputArn),
    Port: __expectInt32(output.port),
    Transport: output.transport != null ? de_Transport(output.transport, context) : undefined,
    VpcInterfaceAttachment:
      output.vpcInterfaceAttachment != null
        ? de_VpcInterfaceAttachment(output.vpcInterfaceAttachment, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Reservation
 */
const de_Reservation = (output: any, context: __SerdeContext): Reservation => {
  return {
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt32(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    End: __expectString(output.end),
    OfferingArn: __expectString(output.offeringArn),
    OfferingDescription: __expectString(output.offeringDescription),
    PricePerUnit: __expectString(output.pricePerUnit),
    PriceUnits: __expectString(output.priceUnits),
    ReservationArn: __expectString(output.reservationArn),
    ReservationName: __expectString(output.reservationName),
    ReservationState: __expectString(output.reservationState),
    ResourceSpecification:
      output.resourceSpecification != null
        ? de_ResourceSpecification(output.resourceSpecification, context)
        : undefined,
    Start: __expectString(output.start),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceSpecification
 */
const de_ResourceSpecification = (output: any, context: __SerdeContext): ResourceSpecification => {
  return {
    ReservedBitrate: __expectInt32(output.reservedBitrate),
    ResourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    DataTransferSubscriberFeePercent: __expectInt32(output.dataTransferSubscriberFeePercent),
    Decryption: output.decryption != null ? de_Encryption(output.decryption, context) : undefined,
    Description: __expectString(output.description),
    EntitlementArn: __expectString(output.entitlementArn),
    GatewayBridgeSource:
      output.gatewayBridgeSource != null ? de_GatewayBridgeSource(output.gatewayBridgeSource, context) : undefined,
    IngestIp: __expectString(output.ingestIp),
    IngestPort: __expectInt32(output.ingestPort),
    MediaStreamSourceConfigurations:
      output.mediaStreamSourceConfigurations != null
        ? de___listOfMediaStreamSourceConfiguration(output.mediaStreamSourceConfigurations, context)
        : undefined,
    Name: __expectString(output.name),
    SenderControlPort: __expectInt32(output.senderControlPort),
    SenderIpAddress: __expectString(output.senderIpAddress),
    SourceArn: __expectString(output.sourceArn),
    Transport: output.transport != null ? de_Transport(output.transport, context) : undefined,
    VpcInterfaceName: __expectString(output.vpcInterfaceName),
    WhitelistCidr: __expectString(output.whitelistCidr),
  } as any;
};

/**
 * deserializeAws_restJson1SourcePriority
 */
const de_SourcePriority = (output: any, context: __SerdeContext): SourcePriority => {
  return {
    PrimarySource: __expectString(output.primarySource),
  } as any;
};

/**
 * deserializeAws_restJson1Transport
 */
const de_Transport = (output: any, context: __SerdeContext): Transport => {
  return {
    CidrAllowList: output.cidrAllowList != null ? de___listOf__string(output.cidrAllowList, context) : undefined,
    MaxBitrate: __expectInt32(output.maxBitrate),
    MaxLatency: __expectInt32(output.maxLatency),
    MaxSyncBuffer: __expectInt32(output.maxSyncBuffer),
    MinLatency: __expectInt32(output.minLatency),
    Protocol: __expectString(output.protocol),
    RemoteId: __expectString(output.remoteId),
    SenderControlPort: __expectInt32(output.senderControlPort),
    SenderIpAddress: __expectString(output.senderIpAddress),
    SmoothingLatency: __expectInt32(output.smoothingLatency),
    SourceListenerAddress: __expectString(output.sourceListenerAddress),
    SourceListenerPort: __expectInt32(output.sourceListenerPort),
    StreamId: __expectString(output.streamId),
  } as any;
};

/**
 * deserializeAws_restJson1VpcInterface
 */
const de_VpcInterface = (output: any, context: __SerdeContext): VpcInterface => {
  return {
    Name: __expectString(output.name),
    NetworkInterfaceIds:
      output.networkInterfaceIds != null ? de___listOf__string(output.networkInterfaceIds, context) : undefined,
    NetworkInterfaceType: __expectString(output.networkInterfaceType),
    RoleArn: __expectString(output.roleArn),
    SecurityGroupIds:
      output.securityGroupIds != null ? de___listOf__string(output.securityGroupIds, context) : undefined,
    SubnetId: __expectString(output.subnetId),
  } as any;
};

/**
 * deserializeAws_restJson1VpcInterfaceAttachment
 */
const de_VpcInterfaceAttachment = (output: any, context: __SerdeContext): VpcInterfaceAttachment => {
  return {
    VpcInterfaceName: __expectString(output.vpcInterfaceName),
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
