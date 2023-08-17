// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  body = JSON.stringify(
    take(input, {
      outputs: [, (_) => se___listOfAddBridgeOutputRequest(_, context), `Outputs`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      sources: [, (_) => se___listOfAddBridgeSourceRequest(_, context), `Sources`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      mediaStreams: [, (_) => se___listOfAddMediaStreamRequest(_, context), `MediaStreams`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      outputs: [, (_) => se___listOfAddOutputRequest(_, context), `Outputs`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      sources: [, (_) => se___listOfSetSourceRequest(_, context), `Sources`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      vpcInterfaces: [, (_) => se___listOfVpcInterfaceRequest(_, context), `VpcInterfaces`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      egressGatewayBridge: [, (_) => se_AddEgressGatewayBridgeRequest(_, context), `EgressGatewayBridge`],
      ingressGatewayBridge: [, (_) => se_AddIngressGatewayBridgeRequest(_, context), `IngressGatewayBridge`],
      name: [, , `Name`],
      outputs: [, (_) => se___listOfAddBridgeOutputRequest(_, context), `Outputs`],
      placementArn: [, , `PlacementArn`],
      sourceFailoverConfig: [, (_) => se_FailoverConfig(_, context), `SourceFailoverConfig`],
      sources: [, (_) => se___listOfAddBridgeSourceRequest(_, context), `Sources`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      availabilityZone: [, , `AvailabilityZone`],
      entitlements: [, (_) => se___listOfGrantEntitlementRequest(_, context), `Entitlements`],
      maintenance: [, (_) => se_AddMaintenance(_, context), `Maintenance`],
      mediaStreams: [, (_) => se___listOfAddMediaStreamRequest(_, context), `MediaStreams`],
      name: [, , `Name`],
      outputs: [, (_) => se___listOfAddOutputRequest(_, context), `Outputs`],
      source: [, (_) => se_SetSourceRequest(_, context), `Source`],
      sourceFailoverConfig: [, (_) => se_FailoverConfig(_, context), `SourceFailoverConfig`],
      sources: [, (_) => se___listOfSetSourceRequest(_, context), `Sources`],
      vpcInterfaces: [, (_) => se___listOfVpcInterfaceRequest(_, context), `VpcInterfaces`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      egressCidrBlocks: [, (_) => _json(_), `EgressCidrBlocks`],
      name: [, , `Name`],
      networks: [, (_) => se___listOfGatewayNetwork(_, context), `Networks`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      entitlements: [, (_) => se___listOfGrantEntitlementRequest(_, context), `Entitlements`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      reservationName: [, , `ReservationName`],
      start: [, , `Start`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      egressGatewayBridge: [, (_) => se_UpdateEgressGatewayBridgeRequest(_, context), `EgressGatewayBridge`],
      ingressGatewayBridge: [, (_) => se_UpdateIngressGatewayBridgeRequest(_, context), `IngressGatewayBridge`],
      sourceFailoverConfig: [, (_) => se_UpdateFailoverConfig(_, context), `SourceFailoverConfig`],
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
  body = JSON.stringify(
    take(input, {
      networkOutput: [, (_) => se_UpdateBridgeNetworkOutputRequest(_, context), `NetworkOutput`],
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
  body = JSON.stringify(
    take(input, {
      flowSource: [, (_) => se_UpdateBridgeFlowSourceRequest(_, context), `FlowSource`],
      networkSource: [, (_) => se_UpdateBridgeNetworkSourceRequest(_, context), `NetworkSource`],
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
  body = JSON.stringify(
    take(input, {
      desiredState: [, , `DesiredState`],
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
  body = JSON.stringify(
    take(input, {
      maintenance: [, (_) => se_UpdateMaintenance(_, context), `Maintenance`],
      sourceFailoverConfig: [, (_) => se_UpdateFailoverConfig(_, context), `SourceFailoverConfig`],
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      encryption: [, (_) => se_UpdateEncryption(_, context), `Encryption`],
      entitlementStatus: [, , `EntitlementStatus`],
      subscribers: [, (_) => _json(_), `Subscribers`],
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
  body = JSON.stringify(
    take(input, {
      attributes: [, (_) => se_MediaStreamAttributesRequest(_, context), `Attributes`],
      clockRate: [, , `ClockRate`],
      description: [, , `Description`],
      mediaStreamType: [, , `MediaStreamType`],
      videoFormat: [, , `VideoFormat`],
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
  body = JSON.stringify(
    take(input, {
      cidrAllowList: [, (_) => _json(_), `CidrAllowList`],
      description: [, , `Description`],
      destination: [, , `Destination`],
      encryption: [, (_) => se_UpdateEncryption(_, context), `Encryption`],
      maxLatency: [, , `MaxLatency`],
      mediaStreamOutputConfigurations: [
        ,
        (_) => se___listOfMediaStreamOutputConfigurationRequest(_, context),
        `MediaStreamOutputConfigurations`,
      ],
      minLatency: [, , `MinLatency`],
      port: [, , `Port`],
      protocol: [, , `Protocol`],
      remoteId: [, , `RemoteId`],
      senderControlPort: [, , `SenderControlPort`],
      senderIpAddress: [, , `SenderIpAddress`],
      smoothingLatency: [, , `SmoothingLatency`],
      streamId: [, , `StreamId`],
      vpcInterfaceAttachment: [, (_) => se_VpcInterfaceAttachment(_, context), `VpcInterfaceAttachment`],
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
  body = JSON.stringify(
    take(input, {
      decryption: [, (_) => se_UpdateEncryption(_, context), `Decryption`],
      description: [, , `Description`],
      entitlementArn: [, , `EntitlementArn`],
      gatewayBridgeSource: [, (_) => se_UpdateGatewayBridgeSourceRequest(_, context), `GatewayBridgeSource`],
      ingestPort: [, , `IngestPort`],
      maxBitrate: [, , `MaxBitrate`],
      maxLatency: [, , `MaxLatency`],
      maxSyncBuffer: [, , `MaxSyncBuffer`],
      mediaStreamSourceConfigurations: [
        ,
        (_) => se___listOfMediaStreamSourceConfigurationRequest(_, context),
        `MediaStreamSourceConfigurations`,
      ],
      minLatency: [, , `MinLatency`],
      protocol: [, , `Protocol`],
      senderControlPort: [, , `SenderControlPort`],
      senderIpAddress: [, , `SenderIpAddress`],
      sourceListenerAddress: [, , `SourceListenerAddress`],
      sourceListenerPort: [, , `SourceListenerPort`],
      streamId: [, , `StreamId`],
      vpcInterfaceName: [, , `VpcInterfaceName`],
      whitelistCidr: [, , `WhitelistCidr`],
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
  body = JSON.stringify(
    take(input, {
      bridgePlacement: [, , `BridgePlacement`],
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    Outputs: [, (_) => de___listOfBridgeOutput(_, context), `outputs`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    Sources: [, (_) => de___listOfBridgeSource(_, context), `sources`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    MediaStreams: [, (_) => de___listOfMediaStream(_, context), `mediaStreams`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Outputs: [, (_) => de___listOfOutput(_, context), `outputs`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Sources: [, (_) => de___listOfSource(_, context), `sources`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    VpcInterfaces: [, (_) => de___listOfVpcInterface(_, context), `vpcInterfaces`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Bridge: [, (_) => de_Bridge(_, context), `bridge`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Flow: [, (_) => de_Flow(_, context), `flow`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Gateway: [, (_) => de_Gateway(_, context), `gateway`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    GatewayArn: [, __expectString, `gatewayArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    GatewayInstanceArn: [, __expectString, `gatewayInstanceArn`],
    InstanceState: [, __expectString, `instanceState`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Bridge: [, (_) => de_Bridge(_, context), `bridge`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Flow: [, (_) => de_Flow(_, context), `flow`],
    Messages: [, (_) => de_Messages(_, context), `messages`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Gateway: [, (_) => de_Gateway(_, context), `gateway`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    GatewayInstance: [, (_) => de_GatewayInstance(_, context), `gatewayInstance`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Offering: [, (_) => de_Offering(_, context), `offering`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Reservation: [, (_) => de_Reservation(_, context), `reservation`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Entitlements: [, (_) => de___listOfEntitlement(_, context), `entitlements`],
    FlowArn: [, __expectString, `flowArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Bridges: [, (_) => de___listOfListedBridge(_, context), `bridges`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Entitlements: [, (_) => de___listOfListedEntitlement(_, context), `entitlements`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Flows: [, (_) => de___listOfListedFlow(_, context), `flows`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Instances: [, (_) => de___listOfListedGatewayInstance(_, context), `instances`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Gateways: [, (_) => de___listOfListedGateway(_, context), `gateways`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Offerings: [, (_) => de___listOfOffering(_, context), `offerings`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Reservations: [, (_) => de___listOfReservation(_, context), `reservations`],
  });
  Object.assign(contents, doc);
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
    Tags: [, _json, `tags`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Reservation: [, (_) => de_Reservation(_, context), `reservation`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    OutputName: [, __expectString, `outputName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    SourceName: [, __expectString, `sourceName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    MediaStreamName: [, __expectString, `mediaStreamName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    OutputArn: [, __expectString, `outputArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    SourceArn: [, __expectString, `sourceArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    NonDeletedNetworkInterfaceIds: [, _json, `nonDeletedNetworkInterfaceIds`],
    VpcInterfaceName: [, __expectString, `vpcInterfaceName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    EntitlementArn: [, __expectString, `entitlementArn`],
    FlowArn: [, __expectString, `flowArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Bridge: [, (_) => de_Bridge(_, context), `bridge`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    Output: [, (_) => de_BridgeOutput(_, context), `output`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    Source: [, (_) => de_BridgeSource(_, context), `source`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgeArn: [, __expectString, `bridgeArn`],
    DesiredState: [, __expectString, `desiredState`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Flow: [, (_) => de_Flow(_, context), `flow`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Entitlement: [, (_) => de_Entitlement(_, context), `entitlement`],
    FlowArn: [, __expectString, `flowArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    MediaStream: [, (_) => de_MediaStream(_, context), `mediaStream`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Output: [, (_) => de_Output(_, context), `output`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    FlowArn: [, __expectString, `flowArn`],
    Source: [, (_) => de_Source(_, context), `source`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BridgePlacement: [, __expectString, `bridgePlacement`],
    GatewayInstanceArn: [, __expectString, `gatewayInstanceArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AddFlowOutputs420ExceptionRes
 */
const de_AddFlowOutputs420ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AddFlowOutputs420Exception> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

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

// se___mapOf__string omitted.

/**
 * serializeAws_restJson1AddBridgeFlowSourceRequest
 */
const se_AddBridgeFlowSourceRequest = (input: AddBridgeFlowSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    flowArn: [, , `FlowArn`],
    flowVpcInterfaceAttachment: [, (_) => se_VpcInterfaceAttachment(_, context), `FlowVpcInterfaceAttachment`],
    name: [, , `Name`],
  });
};

/**
 * serializeAws_restJson1AddBridgeNetworkOutputRequest
 */
const se_AddBridgeNetworkOutputRequest = (input: AddBridgeNetworkOutputRequest, context: __SerdeContext): any => {
  return take(input, {
    ipAddress: [, , `IpAddress`],
    name: [, , `Name`],
    networkName: [, , `NetworkName`],
    port: [, , `Port`],
    protocol: [, , `Protocol`],
    ttl: [, , `Ttl`],
  });
};

/**
 * serializeAws_restJson1AddBridgeNetworkSourceRequest
 */
const se_AddBridgeNetworkSourceRequest = (input: AddBridgeNetworkSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    multicastIp: [, , `MulticastIp`],
    name: [, , `Name`],
    networkName: [, , `NetworkName`],
    port: [, , `Port`],
    protocol: [, , `Protocol`],
  });
};

/**
 * serializeAws_restJson1AddBridgeOutputRequest
 */
const se_AddBridgeOutputRequest = (input: AddBridgeOutputRequest, context: __SerdeContext): any => {
  return take(input, {
    networkOutput: [, (_) => se_AddBridgeNetworkOutputRequest(_, context), `NetworkOutput`],
  });
};

/**
 * serializeAws_restJson1AddBridgeSourceRequest
 */
const se_AddBridgeSourceRequest = (input: AddBridgeSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    flowSource: [, (_) => se_AddBridgeFlowSourceRequest(_, context), `FlowSource`],
    networkSource: [, (_) => se_AddBridgeNetworkSourceRequest(_, context), `NetworkSource`],
  });
};

/**
 * serializeAws_restJson1AddEgressGatewayBridgeRequest
 */
const se_AddEgressGatewayBridgeRequest = (input: AddEgressGatewayBridgeRequest, context: __SerdeContext): any => {
  return take(input, {
    maxBitrate: [, , `MaxBitrate`],
  });
};

/**
 * serializeAws_restJson1AddIngressGatewayBridgeRequest
 */
const se_AddIngressGatewayBridgeRequest = (input: AddIngressGatewayBridgeRequest, context: __SerdeContext): any => {
  return take(input, {
    maxBitrate: [, , `MaxBitrate`],
    maxOutputs: [, , `MaxOutputs`],
  });
};

/**
 * serializeAws_restJson1AddMaintenance
 */
const se_AddMaintenance = (input: AddMaintenance, context: __SerdeContext): any => {
  return take(input, {
    maintenanceDay: [, , `MaintenanceDay`],
    maintenanceStartHour: [, , `MaintenanceStartHour`],
  });
};

/**
 * serializeAws_restJson1AddMediaStreamRequest
 */
const se_AddMediaStreamRequest = (input: AddMediaStreamRequest, context: __SerdeContext): any => {
  return take(input, {
    attributes: [, (_) => se_MediaStreamAttributesRequest(_, context), `Attributes`],
    clockRate: [, , `ClockRate`],
    description: [, , `Description`],
    mediaStreamId: [, , `MediaStreamId`],
    mediaStreamName: [, , `MediaStreamName`],
    mediaStreamType: [, , `MediaStreamType`],
    videoFormat: [, , `VideoFormat`],
  });
};

/**
 * serializeAws_restJson1AddOutputRequest
 */
const se_AddOutputRequest = (input: AddOutputRequest, context: __SerdeContext): any => {
  return take(input, {
    cidrAllowList: [, _json, `CidrAllowList`],
    description: [, , `Description`],
    destination: [, , `Destination`],
    encryption: [, (_) => se_Encryption(_, context), `Encryption`],
    maxLatency: [, , `MaxLatency`],
    mediaStreamOutputConfigurations: [
      ,
      (_) => se___listOfMediaStreamOutputConfigurationRequest(_, context),
      `MediaStreamOutputConfigurations`,
    ],
    minLatency: [, , `MinLatency`],
    name: [, , `Name`],
    port: [, , `Port`],
    protocol: [, , `Protocol`],
    remoteId: [, , `RemoteId`],
    senderControlPort: [, , `SenderControlPort`],
    smoothingLatency: [, , `SmoothingLatency`],
    streamId: [, , `StreamId`],
    vpcInterfaceAttachment: [, (_) => se_VpcInterfaceAttachment(_, context), `VpcInterfaceAttachment`],
  });
};

/**
 * serializeAws_restJson1DestinationConfigurationRequest
 */
const se_DestinationConfigurationRequest = (input: DestinationConfigurationRequest, context: __SerdeContext): any => {
  return take(input, {
    destinationIp: [, , `DestinationIp`],
    destinationPort: [, , `DestinationPort`],
    interface: [, (_) => se_InterfaceRequest(_, context), `Interface`],
  });
};

/**
 * serializeAws_restJson1EncodingParametersRequest
 */
const se_EncodingParametersRequest = (input: EncodingParametersRequest, context: __SerdeContext): any => {
  return take(input, {
    compressionFactor: [, __serializeFloat, `CompressionFactor`],
    encoderProfile: [, , `EncoderProfile`],
  });
};

/**
 * serializeAws_restJson1Encryption
 */
const se_Encryption = (input: Encryption, context: __SerdeContext): any => {
  return take(input, {
    algorithm: [, , `Algorithm`],
    constantInitializationVector: [, , `ConstantInitializationVector`],
    deviceId: [, , `DeviceId`],
    keyType: [, , `KeyType`],
    region: [, , `Region`],
    resourceId: [, , `ResourceId`],
    roleArn: [, , `RoleArn`],
    secretArn: [, , `SecretArn`],
    url: [, , `Url`],
  });
};

/**
 * serializeAws_restJson1FailoverConfig
 */
const se_FailoverConfig = (input: FailoverConfig, context: __SerdeContext): any => {
  return take(input, {
    failoverMode: [, , `FailoverMode`],
    recoveryWindow: [, , `RecoveryWindow`],
    sourcePriority: [, (_) => se_SourcePriority(_, context), `SourcePriority`],
    state: [, , `State`],
  });
};

/**
 * serializeAws_restJson1FmtpRequest
 */
const se_FmtpRequest = (input: FmtpRequest, context: __SerdeContext): any => {
  return take(input, {
    channelOrder: [, , `ChannelOrder`],
    colorimetry: [, , `Colorimetry`],
    exactFramerate: [, , `ExactFramerate`],
    par: [, , `Par`],
    range: [, , `Range`],
    scanMode: [, , `ScanMode`],
    tcs: [, , `Tcs`],
  });
};

/**
 * serializeAws_restJson1GatewayNetwork
 */
const se_GatewayNetwork = (input: GatewayNetwork, context: __SerdeContext): any => {
  return take(input, {
    cidrBlock: [, , `CidrBlock`],
    name: [, , `Name`],
  });
};

/**
 * serializeAws_restJson1GrantEntitlementRequest
 */
const se_GrantEntitlementRequest = (input: GrantEntitlementRequest, context: __SerdeContext): any => {
  return take(input, {
    dataTransferSubscriberFeePercent: [, , `DataTransferSubscriberFeePercent`],
    description: [, , `Description`],
    encryption: [, (_) => se_Encryption(_, context), `Encryption`],
    entitlementStatus: [, , `EntitlementStatus`],
    name: [, , `Name`],
    subscribers: [, _json, `Subscribers`],
  });
};

/**
 * serializeAws_restJson1InputConfigurationRequest
 */
const se_InputConfigurationRequest = (input: InputConfigurationRequest, context: __SerdeContext): any => {
  return take(input, {
    inputPort: [, , `InputPort`],
    interface: [, (_) => se_InterfaceRequest(_, context), `Interface`],
  });
};

/**
 * serializeAws_restJson1InterfaceRequest
 */
const se_InterfaceRequest = (input: InterfaceRequest, context: __SerdeContext): any => {
  return take(input, {
    name: [, , `Name`],
  });
};

/**
 * serializeAws_restJson1MediaStreamAttributesRequest
 */
const se_MediaStreamAttributesRequest = (input: MediaStreamAttributesRequest, context: __SerdeContext): any => {
  return take(input, {
    fmtp: [, (_) => se_FmtpRequest(_, context), `Fmtp`],
    lang: [, , `Lang`],
  });
};

/**
 * serializeAws_restJson1MediaStreamOutputConfigurationRequest
 */
const se_MediaStreamOutputConfigurationRequest = (
  input: MediaStreamOutputConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    destinationConfigurations: [
      ,
      (_) => se___listOfDestinationConfigurationRequest(_, context),
      `DestinationConfigurations`,
    ],
    encodingName: [, , `EncodingName`],
    encodingParameters: [, (_) => se_EncodingParametersRequest(_, context), `EncodingParameters`],
    mediaStreamName: [, , `MediaStreamName`],
  });
};

/**
 * serializeAws_restJson1MediaStreamSourceConfigurationRequest
 */
const se_MediaStreamSourceConfigurationRequest = (
  input: MediaStreamSourceConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    encodingName: [, , `EncodingName`],
    inputConfigurations: [, (_) => se___listOfInputConfigurationRequest(_, context), `InputConfigurations`],
    mediaStreamName: [, , `MediaStreamName`],
  });
};

/**
 * serializeAws_restJson1SetGatewayBridgeSourceRequest
 */
const se_SetGatewayBridgeSourceRequest = (input: SetGatewayBridgeSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    bridgeArn: [, , `BridgeArn`],
    vpcInterfaceAttachment: [, (_) => se_VpcInterfaceAttachment(_, context), `VpcInterfaceAttachment`],
  });
};

/**
 * serializeAws_restJson1SetSourceRequest
 */
const se_SetSourceRequest = (input: SetSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    decryption: [, (_) => se_Encryption(_, context), `Decryption`],
    description: [, , `Description`],
    entitlementArn: [, , `EntitlementArn`],
    gatewayBridgeSource: [, (_) => se_SetGatewayBridgeSourceRequest(_, context), `GatewayBridgeSource`],
    ingestPort: [, , `IngestPort`],
    maxBitrate: [, , `MaxBitrate`],
    maxLatency: [, , `MaxLatency`],
    maxSyncBuffer: [, , `MaxSyncBuffer`],
    mediaStreamSourceConfigurations: [
      ,
      (_) => se___listOfMediaStreamSourceConfigurationRequest(_, context),
      `MediaStreamSourceConfigurations`,
    ],
    minLatency: [, , `MinLatency`],
    name: [, , `Name`],
    protocol: [, , `Protocol`],
    senderControlPort: [, , `SenderControlPort`],
    senderIpAddress: [, , `SenderIpAddress`],
    sourceListenerAddress: [, , `SourceListenerAddress`],
    sourceListenerPort: [, , `SourceListenerPort`],
    streamId: [, , `StreamId`],
    vpcInterfaceName: [, , `VpcInterfaceName`],
    whitelistCidr: [, , `WhitelistCidr`],
  });
};

/**
 * serializeAws_restJson1SourcePriority
 */
const se_SourcePriority = (input: SourcePriority, context: __SerdeContext): any => {
  return take(input, {
    primarySource: [, , `PrimarySource`],
  });
};

/**
 * serializeAws_restJson1UpdateBridgeFlowSourceRequest
 */
const se_UpdateBridgeFlowSourceRequest = (input: UpdateBridgeFlowSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    flowArn: [, , `FlowArn`],
    flowVpcInterfaceAttachment: [, (_) => se_VpcInterfaceAttachment(_, context), `FlowVpcInterfaceAttachment`],
  });
};

/**
 * serializeAws_restJson1UpdateBridgeNetworkOutputRequest
 */
const se_UpdateBridgeNetworkOutputRequest = (input: UpdateBridgeNetworkOutputRequest, context: __SerdeContext): any => {
  return take(input, {
    ipAddress: [, , `IpAddress`],
    networkName: [, , `NetworkName`],
    port: [, , `Port`],
    protocol: [, , `Protocol`],
    ttl: [, , `Ttl`],
  });
};

/**
 * serializeAws_restJson1UpdateBridgeNetworkSourceRequest
 */
const se_UpdateBridgeNetworkSourceRequest = (input: UpdateBridgeNetworkSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    multicastIp: [, , `MulticastIp`],
    networkName: [, , `NetworkName`],
    port: [, , `Port`],
    protocol: [, , `Protocol`],
  });
};

/**
 * serializeAws_restJson1UpdateEgressGatewayBridgeRequest
 */
const se_UpdateEgressGatewayBridgeRequest = (input: UpdateEgressGatewayBridgeRequest, context: __SerdeContext): any => {
  return take(input, {
    maxBitrate: [, , `MaxBitrate`],
  });
};

/**
 * serializeAws_restJson1UpdateEncryption
 */
const se_UpdateEncryption = (input: UpdateEncryption, context: __SerdeContext): any => {
  return take(input, {
    algorithm: [, , `Algorithm`],
    constantInitializationVector: [, , `ConstantInitializationVector`],
    deviceId: [, , `DeviceId`],
    keyType: [, , `KeyType`],
    region: [, , `Region`],
    resourceId: [, , `ResourceId`],
    roleArn: [, , `RoleArn`],
    secretArn: [, , `SecretArn`],
    url: [, , `Url`],
  });
};

/**
 * serializeAws_restJson1UpdateFailoverConfig
 */
const se_UpdateFailoverConfig = (input: UpdateFailoverConfig, context: __SerdeContext): any => {
  return take(input, {
    failoverMode: [, , `FailoverMode`],
    recoveryWindow: [, , `RecoveryWindow`],
    sourcePriority: [, (_) => se_SourcePriority(_, context), `SourcePriority`],
    state: [, , `State`],
  });
};

/**
 * serializeAws_restJson1UpdateGatewayBridgeSourceRequest
 */
const se_UpdateGatewayBridgeSourceRequest = (input: UpdateGatewayBridgeSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    bridgeArn: [, , `BridgeArn`],
    vpcInterfaceAttachment: [, (_) => se_VpcInterfaceAttachment(_, context), `VpcInterfaceAttachment`],
  });
};

/**
 * serializeAws_restJson1UpdateIngressGatewayBridgeRequest
 */
const se_UpdateIngressGatewayBridgeRequest = (
  input: UpdateIngressGatewayBridgeRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    maxBitrate: [, , `MaxBitrate`],
    maxOutputs: [, , `MaxOutputs`],
  });
};

/**
 * serializeAws_restJson1UpdateMaintenance
 */
const se_UpdateMaintenance = (input: UpdateMaintenance, context: __SerdeContext): any => {
  return take(input, {
    maintenanceDay: [, , `MaintenanceDay`],
    maintenanceScheduledDate: [, , `MaintenanceScheduledDate`],
    maintenanceStartHour: [, , `MaintenanceStartHour`],
  });
};

/**
 * serializeAws_restJson1VpcInterfaceAttachment
 */
const se_VpcInterfaceAttachment = (input: VpcInterfaceAttachment, context: __SerdeContext): any => {
  return take(input, {
    vpcInterfaceName: [, , `VpcInterfaceName`],
  });
};

/**
 * serializeAws_restJson1VpcInterfaceRequest
 */
const se_VpcInterfaceRequest = (input: VpcInterfaceRequest, context: __SerdeContext): any => {
  return take(input, {
    name: [, , `Name`],
    networkInterfaceType: [, , `NetworkInterfaceType`],
    roleArn: [, , `RoleArn`],
    securityGroupIds: [, _json, `SecurityGroupIds`],
    subnetId: [, , `SubnetId`],
  });
};

// de___listOf__integer omitted.

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfBridgeOutput
 */
const de___listOfBridgeOutput = (output: any, context: __SerdeContext): BridgeOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_VpcInterface(entry, context);
    });
  return retVal;
};

// de___mapOf__string omitted.

/**
 * deserializeAws_restJson1Bridge
 */
const de_Bridge = (output: any, context: __SerdeContext): Bridge => {
  return take(output, {
    BridgeArn: [, __expectString, `bridgeArn`],
    BridgeMessages: [, (_: any) => de___listOfMessageDetail(_, context), `bridgeMessages`],
    BridgeState: [, __expectString, `bridgeState`],
    EgressGatewayBridge: [, (_: any) => de_EgressGatewayBridge(_, context), `egressGatewayBridge`],
    IngressGatewayBridge: [, (_: any) => de_IngressGatewayBridge(_, context), `ingressGatewayBridge`],
    Name: [, __expectString, `name`],
    Outputs: [, (_: any) => de___listOfBridgeOutput(_, context), `outputs`],
    PlacementArn: [, __expectString, `placementArn`],
    SourceFailoverConfig: [, (_: any) => de_FailoverConfig(_, context), `sourceFailoverConfig`],
    Sources: [, (_: any) => de___listOfBridgeSource(_, context), `sources`],
  }) as any;
};

/**
 * deserializeAws_restJson1BridgeFlowOutput
 */
const de_BridgeFlowOutput = (output: any, context: __SerdeContext): BridgeFlowOutput => {
  return take(output, {
    FlowArn: [, __expectString, `flowArn`],
    FlowSourceArn: [, __expectString, `flowSourceArn`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1BridgeFlowSource
 */
const de_BridgeFlowSource = (output: any, context: __SerdeContext): BridgeFlowSource => {
  return take(output, {
    FlowArn: [, __expectString, `flowArn`],
    FlowVpcInterfaceAttachment: [, (_: any) => de_VpcInterfaceAttachment(_, context), `flowVpcInterfaceAttachment`],
    Name: [, __expectString, `name`],
    OutputArn: [, __expectString, `outputArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1BridgeNetworkOutput
 */
const de_BridgeNetworkOutput = (output: any, context: __SerdeContext): BridgeNetworkOutput => {
  return take(output, {
    IpAddress: [, __expectString, `ipAddress`],
    Name: [, __expectString, `name`],
    NetworkName: [, __expectString, `networkName`],
    Port: [, __expectInt32, `port`],
    Protocol: [, __expectString, `protocol`],
    Ttl: [, __expectInt32, `ttl`],
  }) as any;
};

/**
 * deserializeAws_restJson1BridgeNetworkSource
 */
const de_BridgeNetworkSource = (output: any, context: __SerdeContext): BridgeNetworkSource => {
  return take(output, {
    MulticastIp: [, __expectString, `multicastIp`],
    Name: [, __expectString, `name`],
    NetworkName: [, __expectString, `networkName`],
    Port: [, __expectInt32, `port`],
    Protocol: [, __expectString, `protocol`],
  }) as any;
};

/**
 * deserializeAws_restJson1BridgeOutput
 */
const de_BridgeOutput = (output: any, context: __SerdeContext): BridgeOutput => {
  return take(output, {
    FlowOutput: [, (_: any) => de_BridgeFlowOutput(_, context), `flowOutput`],
    NetworkOutput: [, (_: any) => de_BridgeNetworkOutput(_, context), `networkOutput`],
  }) as any;
};

/**
 * deserializeAws_restJson1BridgeSource
 */
const de_BridgeSource = (output: any, context: __SerdeContext): BridgeSource => {
  return take(output, {
    FlowSource: [, (_: any) => de_BridgeFlowSource(_, context), `flowSource`],
    NetworkSource: [, (_: any) => de_BridgeNetworkSource(_, context), `networkSource`],
  }) as any;
};

/**
 * deserializeAws_restJson1DestinationConfiguration
 */
const de_DestinationConfiguration = (output: any, context: __SerdeContext): DestinationConfiguration => {
  return take(output, {
    DestinationIp: [, __expectString, `destinationIp`],
    DestinationPort: [, __expectInt32, `destinationPort`],
    Interface: [, (_: any) => de_Interface(_, context), `interface`],
    OutboundIp: [, __expectString, `outboundIp`],
  }) as any;
};

/**
 * deserializeAws_restJson1EgressGatewayBridge
 */
const de_EgressGatewayBridge = (output: any, context: __SerdeContext): EgressGatewayBridge => {
  return take(output, {
    InstanceId: [, __expectString, `instanceId`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncodingParameters
 */
const de_EncodingParameters = (output: any, context: __SerdeContext): EncodingParameters => {
  return take(output, {
    CompressionFactor: [, __limitedParseDouble, `compressionFactor`],
    EncoderProfile: [, __expectString, `encoderProfile`],
  }) as any;
};

/**
 * deserializeAws_restJson1Encryption
 */
const de_Encryption = (output: any, context: __SerdeContext): Encryption => {
  return take(output, {
    Algorithm: [, __expectString, `algorithm`],
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
    DeviceId: [, __expectString, `deviceId`],
    KeyType: [, __expectString, `keyType`],
    Region: [, __expectString, `region`],
    ResourceId: [, __expectString, `resourceId`],
    RoleArn: [, __expectString, `roleArn`],
    SecretArn: [, __expectString, `secretArn`],
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1Entitlement
 */
const de_Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return take(output, {
    DataTransferSubscriberFeePercent: [, __expectInt32, `dataTransferSubscriberFeePercent`],
    Description: [, __expectString, `description`],
    Encryption: [, (_: any) => de_Encryption(_, context), `encryption`],
    EntitlementArn: [, __expectString, `entitlementArn`],
    EntitlementStatus: [, __expectString, `entitlementStatus`],
    Name: [, __expectString, `name`],
    Subscribers: [, _json, `subscribers`],
  }) as any;
};

/**
 * deserializeAws_restJson1FailoverConfig
 */
const de_FailoverConfig = (output: any, context: __SerdeContext): FailoverConfig => {
  return take(output, {
    FailoverMode: [, __expectString, `failoverMode`],
    RecoveryWindow: [, __expectInt32, `recoveryWindow`],
    SourcePriority: [, (_: any) => de_SourcePriority(_, context), `sourcePriority`],
    State: [, __expectString, `state`],
  }) as any;
};

/**
 * deserializeAws_restJson1Flow
 */
const de_Flow = (output: any, context: __SerdeContext): Flow => {
  return take(output, {
    AvailabilityZone: [, __expectString, `availabilityZone`],
    Description: [, __expectString, `description`],
    EgressIp: [, __expectString, `egressIp`],
    Entitlements: [, (_: any) => de___listOfEntitlement(_, context), `entitlements`],
    FlowArn: [, __expectString, `flowArn`],
    Maintenance: [, (_: any) => de_Maintenance(_, context), `maintenance`],
    MediaStreams: [, (_: any) => de___listOfMediaStream(_, context), `mediaStreams`],
    Name: [, __expectString, `name`],
    Outputs: [, (_: any) => de___listOfOutput(_, context), `outputs`],
    Source: [, (_: any) => de_Source(_, context), `source`],
    SourceFailoverConfig: [, (_: any) => de_FailoverConfig(_, context), `sourceFailoverConfig`],
    Sources: [, (_: any) => de___listOfSource(_, context), `sources`],
    Status: [, __expectString, `status`],
    VpcInterfaces: [, (_: any) => de___listOfVpcInterface(_, context), `vpcInterfaces`],
  }) as any;
};

/**
 * deserializeAws_restJson1Fmtp
 */
const de_Fmtp = (output: any, context: __SerdeContext): Fmtp => {
  return take(output, {
    ChannelOrder: [, __expectString, `channelOrder`],
    Colorimetry: [, __expectString, `colorimetry`],
    ExactFramerate: [, __expectString, `exactFramerate`],
    Par: [, __expectString, `par`],
    Range: [, __expectString, `range`],
    ScanMode: [, __expectString, `scanMode`],
    Tcs: [, __expectString, `tcs`],
  }) as any;
};

/**
 * deserializeAws_restJson1Gateway
 */
const de_Gateway = (output: any, context: __SerdeContext): Gateway => {
  return take(output, {
    EgressCidrBlocks: [, _json, `egressCidrBlocks`],
    GatewayArn: [, __expectString, `gatewayArn`],
    GatewayMessages: [, (_: any) => de___listOfMessageDetail(_, context), `gatewayMessages`],
    GatewayState: [, __expectString, `gatewayState`],
    Name: [, __expectString, `name`],
    Networks: [, (_: any) => de___listOfGatewayNetwork(_, context), `networks`],
  }) as any;
};

/**
 * deserializeAws_restJson1GatewayBridgeSource
 */
const de_GatewayBridgeSource = (output: any, context: __SerdeContext): GatewayBridgeSource => {
  return take(output, {
    BridgeArn: [, __expectString, `bridgeArn`],
    VpcInterfaceAttachment: [, (_: any) => de_VpcInterfaceAttachment(_, context), `vpcInterfaceAttachment`],
  }) as any;
};

/**
 * deserializeAws_restJson1GatewayInstance
 */
const de_GatewayInstance = (output: any, context: __SerdeContext): GatewayInstance => {
  return take(output, {
    BridgePlacement: [, __expectString, `bridgePlacement`],
    ConnectionStatus: [, __expectString, `connectionStatus`],
    GatewayArn: [, __expectString, `gatewayArn`],
    GatewayInstanceArn: [, __expectString, `gatewayInstanceArn`],
    InstanceId: [, __expectString, `instanceId`],
    InstanceMessages: [, (_: any) => de___listOfMessageDetail(_, context), `instanceMessages`],
    InstanceState: [, __expectString, `instanceState`],
    RunningBridgeCount: [, __expectInt32, `runningBridgeCount`],
  }) as any;
};

/**
 * deserializeAws_restJson1GatewayNetwork
 */
const de_GatewayNetwork = (output: any, context: __SerdeContext): GatewayNetwork => {
  return take(output, {
    CidrBlock: [, __expectString, `cidrBlock`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1IngressGatewayBridge
 */
const de_IngressGatewayBridge = (output: any, context: __SerdeContext): IngressGatewayBridge => {
  return take(output, {
    InstanceId: [, __expectString, `instanceId`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MaxOutputs: [, __expectInt32, `maxOutputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputConfiguration
 */
const de_InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
  return take(output, {
    InputIp: [, __expectString, `inputIp`],
    InputPort: [, __expectInt32, `inputPort`],
    Interface: [, (_: any) => de_Interface(_, context), `interface`],
  }) as any;
};

/**
 * deserializeAws_restJson1Interface
 */
const de_Interface = (output: any, context: __SerdeContext): Interface => {
  return take(output, {
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1ListedBridge
 */
const de_ListedBridge = (output: any, context: __SerdeContext): ListedBridge => {
  return take(output, {
    BridgeArn: [, __expectString, `bridgeArn`],
    BridgeState: [, __expectString, `bridgeState`],
    BridgeType: [, __expectString, `bridgeType`],
    Name: [, __expectString, `name`],
    PlacementArn: [, __expectString, `placementArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1ListedEntitlement
 */
const de_ListedEntitlement = (output: any, context: __SerdeContext): ListedEntitlement => {
  return take(output, {
    DataTransferSubscriberFeePercent: [, __expectInt32, `dataTransferSubscriberFeePercent`],
    EntitlementArn: [, __expectString, `entitlementArn`],
    EntitlementName: [, __expectString, `entitlementName`],
  }) as any;
};

/**
 * deserializeAws_restJson1ListedFlow
 */
const de_ListedFlow = (output: any, context: __SerdeContext): ListedFlow => {
  return take(output, {
    AvailabilityZone: [, __expectString, `availabilityZone`],
    Description: [, __expectString, `description`],
    FlowArn: [, __expectString, `flowArn`],
    Maintenance: [, (_: any) => de_Maintenance(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    SourceType: [, __expectString, `sourceType`],
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1ListedGateway
 */
const de_ListedGateway = (output: any, context: __SerdeContext): ListedGateway => {
  return take(output, {
    GatewayArn: [, __expectString, `gatewayArn`],
    GatewayState: [, __expectString, `gatewayState`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1ListedGatewayInstance
 */
const de_ListedGatewayInstance = (output: any, context: __SerdeContext): ListedGatewayInstance => {
  return take(output, {
    GatewayArn: [, __expectString, `gatewayArn`],
    GatewayInstanceArn: [, __expectString, `gatewayInstanceArn`],
    InstanceId: [, __expectString, `instanceId`],
    InstanceState: [, __expectString, `instanceState`],
  }) as any;
};

/**
 * deserializeAws_restJson1Maintenance
 */
const de_Maintenance = (output: any, context: __SerdeContext): Maintenance => {
  return take(output, {
    MaintenanceDay: [, __expectString, `maintenanceDay`],
    MaintenanceDeadline: [, __expectString, `maintenanceDeadline`],
    MaintenanceScheduledDate: [, __expectString, `maintenanceScheduledDate`],
    MaintenanceStartHour: [, __expectString, `maintenanceStartHour`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaStream
 */
const de_MediaStream = (output: any, context: __SerdeContext): MediaStream => {
  return take(output, {
    Attributes: [, (_: any) => de_MediaStreamAttributes(_, context), `attributes`],
    ClockRate: [, __expectInt32, `clockRate`],
    Description: [, __expectString, `description`],
    Fmt: [, __expectInt32, `fmt`],
    MediaStreamId: [, __expectInt32, `mediaStreamId`],
    MediaStreamName: [, __expectString, `mediaStreamName`],
    MediaStreamType: [, __expectString, `mediaStreamType`],
    VideoFormat: [, __expectString, `videoFormat`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaStreamAttributes
 */
const de_MediaStreamAttributes = (output: any, context: __SerdeContext): MediaStreamAttributes => {
  return take(output, {
    Fmtp: [, (_: any) => de_Fmtp(_, context), `fmtp`],
    Lang: [, __expectString, `lang`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaStreamOutputConfiguration
 */
const de_MediaStreamOutputConfiguration = (output: any, context: __SerdeContext): MediaStreamOutputConfiguration => {
  return take(output, {
    DestinationConfigurations: [
      ,
      (_: any) => de___listOfDestinationConfiguration(_, context),
      `destinationConfigurations`,
    ],
    EncodingName: [, __expectString, `encodingName`],
    EncodingParameters: [, (_: any) => de_EncodingParameters(_, context), `encodingParameters`],
    MediaStreamName: [, __expectString, `mediaStreamName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaStreamSourceConfiguration
 */
const de_MediaStreamSourceConfiguration = (output: any, context: __SerdeContext): MediaStreamSourceConfiguration => {
  return take(output, {
    EncodingName: [, __expectString, `encodingName`],
    InputConfigurations: [, (_: any) => de___listOfInputConfiguration(_, context), `inputConfigurations`],
    MediaStreamName: [, __expectString, `mediaStreamName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MessageDetail
 */
const de_MessageDetail = (output: any, context: __SerdeContext): MessageDetail => {
  return take(output, {
    Code: [, __expectString, `code`],
    Message: [, __expectString, `message`],
    ResourceName: [, __expectString, `resourceName`],
  }) as any;
};

/**
 * deserializeAws_restJson1Messages
 */
const de_Messages = (output: any, context: __SerdeContext): Messages => {
  return take(output, {
    Errors: [, _json, `errors`],
  }) as any;
};

/**
 * deserializeAws_restJson1Offering
 */
const de_Offering = (output: any, context: __SerdeContext): Offering => {
  return take(output, {
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    OfferingArn: [, __expectString, `offeringArn`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    PricePerUnit: [, __expectString, `pricePerUnit`],
    PriceUnits: [, __expectString, `priceUnits`],
    ResourceSpecification: [, (_: any) => de_ResourceSpecification(_, context), `resourceSpecification`],
  }) as any;
};

/**
 * deserializeAws_restJson1Output
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  return take(output, {
    BridgeArn: [, __expectString, `bridgeArn`],
    BridgePorts: [, _json, `bridgePorts`],
    DataTransferSubscriberFeePercent: [, __expectInt32, `dataTransferSubscriberFeePercent`],
    Description: [, __expectString, `description`],
    Destination: [, __expectString, `destination`],
    Encryption: [, (_: any) => de_Encryption(_, context), `encryption`],
    EntitlementArn: [, __expectString, `entitlementArn`],
    ListenerAddress: [, __expectString, `listenerAddress`],
    MediaLiveInputArn: [, __expectString, `mediaLiveInputArn`],
    MediaStreamOutputConfigurations: [
      ,
      (_: any) => de___listOfMediaStreamOutputConfiguration(_, context),
      `mediaStreamOutputConfigurations`,
    ],
    Name: [, __expectString, `name`],
    OutputArn: [, __expectString, `outputArn`],
    Port: [, __expectInt32, `port`],
    Transport: [, (_: any) => de_Transport(_, context), `transport`],
    VpcInterfaceAttachment: [, (_: any) => de_VpcInterfaceAttachment(_, context), `vpcInterfaceAttachment`],
  }) as any;
};

/**
 * deserializeAws_restJson1Reservation
 */
const de_Reservation = (output: any, context: __SerdeContext): Reservation => {
  return take(output, {
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    End: [, __expectString, `end`],
    OfferingArn: [, __expectString, `offeringArn`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    PricePerUnit: [, __expectString, `pricePerUnit`],
    PriceUnits: [, __expectString, `priceUnits`],
    ReservationArn: [, __expectString, `reservationArn`],
    ReservationName: [, __expectString, `reservationName`],
    ReservationState: [, __expectString, `reservationState`],
    ResourceSpecification: [, (_: any) => de_ResourceSpecification(_, context), `resourceSpecification`],
    Start: [, __expectString, `start`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceSpecification
 */
const de_ResourceSpecification = (output: any, context: __SerdeContext): ResourceSpecification => {
  return take(output, {
    ReservedBitrate: [, __expectInt32, `reservedBitrate`],
    ResourceType: [, __expectString, `resourceType`],
  }) as any;
};

/**
 * deserializeAws_restJson1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return take(output, {
    DataTransferSubscriberFeePercent: [, __expectInt32, `dataTransferSubscriberFeePercent`],
    Decryption: [, (_: any) => de_Encryption(_, context), `decryption`],
    Description: [, __expectString, `description`],
    EntitlementArn: [, __expectString, `entitlementArn`],
    GatewayBridgeSource: [, (_: any) => de_GatewayBridgeSource(_, context), `gatewayBridgeSource`],
    IngestIp: [, __expectString, `ingestIp`],
    IngestPort: [, __expectInt32, `ingestPort`],
    MediaStreamSourceConfigurations: [
      ,
      (_: any) => de___listOfMediaStreamSourceConfiguration(_, context),
      `mediaStreamSourceConfigurations`,
    ],
    Name: [, __expectString, `name`],
    SenderControlPort: [, __expectInt32, `senderControlPort`],
    SenderIpAddress: [, __expectString, `senderIpAddress`],
    SourceArn: [, __expectString, `sourceArn`],
    Transport: [, (_: any) => de_Transport(_, context), `transport`],
    VpcInterfaceName: [, __expectString, `vpcInterfaceName`],
    WhitelistCidr: [, __expectString, `whitelistCidr`],
  }) as any;
};

/**
 * deserializeAws_restJson1SourcePriority
 */
const de_SourcePriority = (output: any, context: __SerdeContext): SourcePriority => {
  return take(output, {
    PrimarySource: [, __expectString, `primarySource`],
  }) as any;
};

/**
 * deserializeAws_restJson1Transport
 */
const de_Transport = (output: any, context: __SerdeContext): Transport => {
  return take(output, {
    CidrAllowList: [, _json, `cidrAllowList`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MaxLatency: [, __expectInt32, `maxLatency`],
    MaxSyncBuffer: [, __expectInt32, `maxSyncBuffer`],
    MinLatency: [, __expectInt32, `minLatency`],
    Protocol: [, __expectString, `protocol`],
    RemoteId: [, __expectString, `remoteId`],
    SenderControlPort: [, __expectInt32, `senderControlPort`],
    SenderIpAddress: [, __expectString, `senderIpAddress`],
    SmoothingLatency: [, __expectInt32, `smoothingLatency`],
    SourceListenerAddress: [, __expectString, `sourceListenerAddress`],
    SourceListenerPort: [, __expectInt32, `sourceListenerPort`],
    StreamId: [, __expectString, `streamId`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcInterface
 */
const de_VpcInterface = (output: any, context: __SerdeContext): VpcInterface => {
  return take(output, {
    Name: [, __expectString, `name`],
    NetworkInterfaceIds: [, _json, `networkInterfaceIds`],
    NetworkInterfaceType: [, __expectString, `networkInterfaceType`],
    RoleArn: [, __expectString, `roleArn`],
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetId: [, __expectString, `subnetId`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcInterfaceAttachment
 */
const de_VpcInterfaceAttachment = (output: any, context: __SerdeContext): VpcInterfaceAttachment => {
  return take(output, {
    VpcInterfaceName: [, __expectString, `vpcInterfaceName`],
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
