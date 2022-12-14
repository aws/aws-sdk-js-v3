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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcceptAttachmentCommandInput, AcceptAttachmentCommandOutput } from "../commands/AcceptAttachmentCommand";
import {
  AssociateConnectPeerCommandInput,
  AssociateConnectPeerCommandOutput,
} from "../commands/AssociateConnectPeerCommand";
import {
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
} from "../commands/AssociateCustomerGatewayCommand";
import { AssociateLinkCommandInput, AssociateLinkCommandOutput } from "../commands/AssociateLinkCommand";
import {
  AssociateTransitGatewayConnectPeerCommandInput,
  AssociateTransitGatewayConnectPeerCommandOutput,
} from "../commands/AssociateTransitGatewayConnectPeerCommand";
import {
  CreateConnectAttachmentCommandInput,
  CreateConnectAttachmentCommandOutput,
} from "../commands/CreateConnectAttachmentCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateConnectPeerCommandInput, CreateConnectPeerCommandOutput } from "../commands/CreateConnectPeerCommand";
import { CreateCoreNetworkCommandInput, CreateCoreNetworkCommandOutput } from "../commands/CreateCoreNetworkCommand";
import { CreateDeviceCommandInput, CreateDeviceCommandOutput } from "../commands/CreateDeviceCommand";
import {
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput,
} from "../commands/CreateGlobalNetworkCommand";
import { CreateLinkCommandInput, CreateLinkCommandOutput } from "../commands/CreateLinkCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "../commands/CreateSiteCommand";
import {
  CreateSiteToSiteVpnAttachmentCommandInput,
  CreateSiteToSiteVpnAttachmentCommandOutput,
} from "../commands/CreateSiteToSiteVpnAttachmentCommand";
import {
  CreateTransitGatewayPeeringCommandInput,
  CreateTransitGatewayPeeringCommandOutput,
} from "../commands/CreateTransitGatewayPeeringCommand";
import {
  CreateTransitGatewayRouteTableAttachmentCommandInput,
  CreateTransitGatewayRouteTableAttachmentCommandOutput,
} from "../commands/CreateTransitGatewayRouteTableAttachmentCommand";
import {
  CreateVpcAttachmentCommandInput,
  CreateVpcAttachmentCommandOutput,
} from "../commands/CreateVpcAttachmentCommand";
import { DeleteAttachmentCommandInput, DeleteAttachmentCommandOutput } from "../commands/DeleteAttachmentCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteConnectPeerCommandInput, DeleteConnectPeerCommandOutput } from "../commands/DeleteConnectPeerCommand";
import { DeleteCoreNetworkCommandInput, DeleteCoreNetworkCommandOutput } from "../commands/DeleteCoreNetworkCommand";
import {
  DeleteCoreNetworkPolicyVersionCommandInput,
  DeleteCoreNetworkPolicyVersionCommandOutput,
} from "../commands/DeleteCoreNetworkPolicyVersionCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import {
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput,
} from "../commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommandInput, DeleteLinkCommandOutput } from "../commands/DeleteLinkCommand";
import { DeletePeeringCommandInput, DeletePeeringCommandOutput } from "../commands/DeletePeeringCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "../commands/DeleteSiteCommand";
import {
  DeregisterTransitGatewayCommandInput,
  DeregisterTransitGatewayCommandOutput,
} from "../commands/DeregisterTransitGatewayCommand";
import {
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
} from "../commands/DescribeGlobalNetworksCommand";
import {
  DisassociateConnectPeerCommandInput,
  DisassociateConnectPeerCommandOutput,
} from "../commands/DisassociateConnectPeerCommand";
import {
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput,
} from "../commands/DisassociateCustomerGatewayCommand";
import { DisassociateLinkCommandInput, DisassociateLinkCommandOutput } from "../commands/DisassociateLinkCommand";
import {
  DisassociateTransitGatewayConnectPeerCommandInput,
  DisassociateTransitGatewayConnectPeerCommandOutput,
} from "../commands/DisassociateTransitGatewayConnectPeerCommand";
import {
  ExecuteCoreNetworkChangeSetCommandInput,
  ExecuteCoreNetworkChangeSetCommandOutput,
} from "../commands/ExecuteCoreNetworkChangeSetCommand";
import {
  GetConnectAttachmentCommandInput,
  GetConnectAttachmentCommandOutput,
} from "../commands/GetConnectAttachmentCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
import {
  GetConnectPeerAssociationsCommandInput,
  GetConnectPeerAssociationsCommandOutput,
} from "../commands/GetConnectPeerAssociationsCommand";
import { GetConnectPeerCommandInput, GetConnectPeerCommandOutput } from "../commands/GetConnectPeerCommand";
import {
  GetCoreNetworkChangeEventsCommandInput,
  GetCoreNetworkChangeEventsCommandOutput,
} from "../commands/GetCoreNetworkChangeEventsCommand";
import {
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput,
} from "../commands/GetCoreNetworkChangeSetCommand";
import { GetCoreNetworkCommandInput, GetCoreNetworkCommandOutput } from "../commands/GetCoreNetworkCommand";
import {
  GetCoreNetworkPolicyCommandInput,
  GetCoreNetworkPolicyCommandOutput,
} from "../commands/GetCoreNetworkPolicyCommand";
import {
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
} from "../commands/GetCustomerGatewayAssociationsCommand";
import { GetDevicesCommandInput, GetDevicesCommandOutput } from "../commands/GetDevicesCommand";
import {
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
} from "../commands/GetLinkAssociationsCommand";
import { GetLinksCommandInput, GetLinksCommandOutput } from "../commands/GetLinksCommand";
import {
  GetNetworkResourceCountsCommandInput,
  GetNetworkResourceCountsCommandOutput,
} from "../commands/GetNetworkResourceCountsCommand";
import {
  GetNetworkResourceRelationshipsCommandInput,
  GetNetworkResourceRelationshipsCommandOutput,
} from "../commands/GetNetworkResourceRelationshipsCommand";
import {
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput,
} from "../commands/GetNetworkResourcesCommand";
import { GetNetworkRoutesCommandInput, GetNetworkRoutesCommandOutput } from "../commands/GetNetworkRoutesCommand";
import {
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput,
} from "../commands/GetNetworkTelemetryCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetRouteAnalysisCommandInput, GetRouteAnalysisCommandOutput } from "../commands/GetRouteAnalysisCommand";
import { GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import {
  GetSiteToSiteVpnAttachmentCommandInput,
  GetSiteToSiteVpnAttachmentCommandOutput,
} from "../commands/GetSiteToSiteVpnAttachmentCommand";
import {
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
} from "../commands/GetTransitGatewayConnectPeerAssociationsCommand";
import {
  GetTransitGatewayPeeringCommandInput,
  GetTransitGatewayPeeringCommandOutput,
} from "../commands/GetTransitGatewayPeeringCommand";
import {
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "../commands/GetTransitGatewayRegistrationsCommand";
import {
  GetTransitGatewayRouteTableAttachmentCommandInput,
  GetTransitGatewayRouteTableAttachmentCommandOutput,
} from "../commands/GetTransitGatewayRouteTableAttachmentCommand";
import { GetVpcAttachmentCommandInput, GetVpcAttachmentCommandOutput } from "../commands/GetVpcAttachmentCommand";
import { ListAttachmentsCommandInput, ListAttachmentsCommandOutput } from "../commands/ListAttachmentsCommand";
import { ListConnectPeersCommandInput, ListConnectPeersCommandOutput } from "../commands/ListConnectPeersCommand";
import {
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput,
} from "../commands/ListCoreNetworkPolicyVersionsCommand";
import { ListCoreNetworksCommandInput, ListCoreNetworksCommandOutput } from "../commands/ListCoreNetworksCommand";
import {
  ListOrganizationServiceAccessStatusCommandInput,
  ListOrganizationServiceAccessStatusCommandOutput,
} from "../commands/ListOrganizationServiceAccessStatusCommand";
import { ListPeeringsCommandInput, ListPeeringsCommandOutput } from "../commands/ListPeeringsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutCoreNetworkPolicyCommandInput,
  PutCoreNetworkPolicyCommandOutput,
} from "../commands/PutCoreNetworkPolicyCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
} from "../commands/RegisterTransitGatewayCommand";
import { RejectAttachmentCommandInput, RejectAttachmentCommandOutput } from "../commands/RejectAttachmentCommand";
import {
  RestoreCoreNetworkPolicyVersionCommandInput,
  RestoreCoreNetworkPolicyVersionCommandOutput,
} from "../commands/RestoreCoreNetworkPolicyVersionCommand";
import {
  StartOrganizationServiceAccessUpdateCommandInput,
  StartOrganizationServiceAccessUpdateCommandOutput,
} from "../commands/StartOrganizationServiceAccessUpdateCommand";
import { StartRouteAnalysisCommandInput, StartRouteAnalysisCommandOutput } from "../commands/StartRouteAnalysisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateCoreNetworkCommandInput, UpdateCoreNetworkCommandOutput } from "../commands/UpdateCoreNetworkCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "../commands/UpdateDeviceCommand";
import {
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput,
} from "../commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommandInput, UpdateLinkCommandOutput } from "../commands/UpdateLinkCommand";
import {
  UpdateNetworkResourceMetadataCommandInput,
  UpdateNetworkResourceMetadataCommandOutput,
} from "../commands/UpdateNetworkResourceMetadataCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "../commands/UpdateSiteCommand";
import {
  UpdateVpcAttachmentCommandInput,
  UpdateVpcAttachmentCommandOutput,
} from "../commands/UpdateVpcAttachmentCommand";
import {
  AccessDeniedException,
  AccountStatus,
  Attachment,
  AWSLocation,
  Bandwidth,
  BgpOptions,
  ConflictException,
  ConnectAttachment,
  ConnectAttachmentOptions,
  Connection,
  ConnectionHealth,
  ConnectPeer,
  ConnectPeerAssociation,
  ConnectPeerBgpConfiguration,
  ConnectPeerConfiguration,
  ConnectPeerSummary,
  CoreNetwork,
  CoreNetworkChange,
  CoreNetworkChangeEvent,
  CoreNetworkChangeEventValues,
  CoreNetworkChangeValues,
  CoreNetworkEdge,
  CoreNetworkPolicy,
  CoreNetworkPolicyError,
  CoreNetworkPolicyException,
  CoreNetworkPolicyVersion,
  CoreNetworkSegment,
  CoreNetworkSegmentEdgeIdentifier,
  CoreNetworkSummary,
  CustomerGatewayAssociation,
  Device,
  GlobalNetwork,
  InternalServerException,
  Link,
  LinkAssociation,
  Location,
  NetworkResource,
  NetworkResourceCount,
  NetworkResourceSummary,
  NetworkRoute,
  NetworkRouteDestination,
  NetworkTelemetry,
  OrganizationStatus,
  PathComponent,
  Peering,
  ProposedSegmentChange,
  Relationship,
  ResourceNotFoundException,
  RouteAnalysis,
  RouteAnalysisCompletion,
  RouteAnalysisEndpointOptions,
  RouteAnalysisEndpointOptionsSpecification,
  RouteAnalysisPath,
  RouteState,
  RouteTableIdentifier,
  RouteType,
  ServiceQuotaExceededException,
  Site,
  SiteToSiteVpnAttachment,
  Tag,
  ThrottlingException,
  TransitGatewayConnectPeerAssociation,
  TransitGatewayPeering,
  TransitGatewayRegistration,
  TransitGatewayRegistrationStateReason,
  TransitGatewayRouteTableAttachment,
  ValidationException,
  ValidationExceptionField,
  VpcAttachment,
  VpcOptions,
} from "../models/models_0";
import { NetworkManagerServiceException as __BaseException } from "../models/NetworkManagerServiceException";

export const serializeAws_restJson1AcceptAttachmentCommand = async (
  input: AcceptAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/attachments/{AttachmentId}/accept";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
    false
  );
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

export const serializeAws_restJson1AssociateConnectPeerCommand = async (
  input: AssociateConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connect-peer-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectPeerId != null && { ConnectPeerId: input.ConnectPeerId }),
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.LinkId != null && { LinkId: input.LinkId }),
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

export const serializeAws_restJson1AssociateCustomerGatewayCommand = async (
  input: AssociateCustomerGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/customer-gateway-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.CustomerGatewayArn != null && { CustomerGatewayArn: input.CustomerGatewayArn }),
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.LinkId != null && { LinkId: input.LinkId }),
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

export const serializeAws_restJson1AssociateLinkCommand = async (
  input: AssociateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/link-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.LinkId != null && { LinkId: input.LinkId }),
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

export const serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = async (
  input: AssociateTransitGatewayConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.LinkId != null && { LinkId: input.LinkId }),
    ...(input.TransitGatewayConnectPeerArn != null && {
      TransitGatewayConnectPeerArn: input.TransitGatewayConnectPeerArn,
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

export const serializeAws_restJson1CreateConnectAttachmentCommand = async (
  input: CreateConnectAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connect-attachments";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CoreNetworkId != null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.EdgeLocation != null && { EdgeLocation: input.EdgeLocation }),
    ...(input.Options != null && { Options: serializeAws_restJson1ConnectAttachmentOptions(input.Options, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TransportAttachmentId != null && { TransportAttachmentId: input.TransportAttachmentId }),
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

export const serializeAws_restJson1CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connections";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectedDeviceId != null && { ConnectedDeviceId: input.ConnectedDeviceId }),
    ...(input.ConnectedLinkId != null && { ConnectedLinkId: input.ConnectedLinkId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.LinkId != null && { LinkId: input.LinkId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateConnectPeerCommand = async (
  input: CreateConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connect-peers";
  let body: any;
  body = JSON.stringify({
    ...(input.BgpOptions != null && { BgpOptions: serializeAws_restJson1BgpOptions(input.BgpOptions, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ConnectAttachmentId != null && { ConnectAttachmentId: input.ConnectAttachmentId }),
    ...(input.CoreNetworkAddress != null && { CoreNetworkAddress: input.CoreNetworkAddress }),
    ...(input.InsideCidrBlocks != null && {
      InsideCidrBlocks: serializeAws_restJson1ConstrainedStringList(input.InsideCidrBlocks, context),
    }),
    ...(input.PeerAddress != null && { PeerAddress: input.PeerAddress }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateCoreNetworkCommand = async (
  input: CreateCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/core-networks";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlobalNetworkId != null && { GlobalNetworkId: input.GlobalNetworkId }),
    ...(input.PolicyDocument != null && { PolicyDocument: input.PolicyDocument }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateDeviceCommand = async (
  input: CreateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/devices";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AWSLocation != null && { AWSLocation: serializeAws_restJson1AWSLocation(input.AWSLocation, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Location != null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    ...(input.Model != null && { Model: input.Model }),
    ...(input.SerialNumber != null && { SerialNumber: input.SerialNumber }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Vendor != null && { Vendor: input.Vendor }),
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

export const serializeAws_restJson1CreateGlobalNetworkCommand = async (
  input: CreateGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateLinkCommand = async (
  input: CreateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks/{GlobalNetworkId}/links";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Bandwidth != null && { Bandwidth: serializeAws_restJson1Bandwidth(input.Bandwidth, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Provider != null && { Provider: input.Provider }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
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

export const serializeAws_restJson1CreateSiteCommand = async (
  input: CreateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks/{GlobalNetworkId}/sites";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Location != null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand = async (
  input: CreateSiteToSiteVpnAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/site-to-site-vpn-attachments";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CoreNetworkId != null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VpnConnectionArn != null && { VpnConnectionArn: input.VpnConnectionArn }),
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

export const serializeAws_restJson1CreateTransitGatewayPeeringCommand = async (
  input: CreateTransitGatewayPeeringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/transit-gateway-peerings";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CoreNetworkId != null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TransitGatewayArn != null && { TransitGatewayArn: input.TransitGatewayArn }),
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

export const serializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand = async (
  input: CreateTransitGatewayRouteTableAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/transit-gateway-route-table-attachments";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.PeeringId != null && { PeeringId: input.PeeringId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TransitGatewayRouteTableArn != null && {
      TransitGatewayRouteTableArn: input.TransitGatewayRouteTableArn,
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

export const serializeAws_restJson1CreateVpcAttachmentCommand = async (
  input: CreateVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpc-attachments";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CoreNetworkId != null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.Options != null && { Options: serializeAws_restJson1VpcOptions(input.Options, context) }),
    ...(input.SubnetArns != null && { SubnetArns: serializeAws_restJson1SubnetArnList(input.SubnetArns, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VpcArn != null && { VpcArn: input.VpcArn }),
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

export const serializeAws_restJson1DeleteAttachmentCommand = async (
  input: DeleteAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/attachments/{AttachmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
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

export const serializeAws_restJson1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
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

export const serializeAws_restJson1DeleteConnectPeerCommand = async (
  input: DeleteConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connect-peers/{ConnectPeerId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectPeerId",
    () => input.ConnectPeerId!,
    "{ConnectPeerId}",
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

export const serializeAws_restJson1DeleteCoreNetworkCommand = async (
  input: DeleteCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/core-networks/{CoreNetworkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
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

export const serializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand = async (
  input: DeleteCoreNetworkPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PolicyVersionId",
    () => input.PolicyVersionId!.toString(),
    "{PolicyVersionId}",
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

export const serializeAws_restJson1DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/devices/{DeviceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
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

export const serializeAws_restJson1DeleteGlobalNetworkCommand = async (
  input: DeleteGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks/{GlobalNetworkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
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

export const serializeAws_restJson1DeleteLinkCommand = async (
  input: DeleteLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/links/{LinkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "LinkId", () => input.LinkId!, "{LinkId}", false);
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

export const serializeAws_restJson1DeletePeeringCommand = async (
  input: DeletePeeringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/peerings/{PeeringId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PeeringId", () => input.PeeringId!, "{PeeringId}", false);
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

export const serializeAws_restJson1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-policy/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1DeleteSiteCommand = async (
  input: DeleteSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/sites/{SiteId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
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

export const serializeAws_restJson1DeregisterTransitGatewayCommand = async (
  input: DeregisterTransitGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TransitGatewayArn",
    () => input.TransitGatewayArn!,
    "{TransitGatewayArn}",
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

export const serializeAws_restJson1DescribeGlobalNetworksCommand = async (
  input: DescribeGlobalNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks";
  const query: any = map({
    globalNetworkIds: [
      () => input.GlobalNetworkIds !== void 0,
      () => (input.GlobalNetworkIds! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1DisassociateConnectPeerCommand = async (
  input: DisassociateConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectPeerId",
    () => input.ConnectPeerId!,
    "{ConnectPeerId}",
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

export const serializeAws_restJson1DisassociateCustomerGatewayCommand = async (
  input: DisassociateCustomerGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CustomerGatewayArn",
    () => input.CustomerGatewayArn!,
    "{CustomerGatewayArn}",
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

export const serializeAws_restJson1DisassociateLinkCommand = async (
  input: DisassociateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/link-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    deviceId: [, __expectNonNull(input.DeviceId!, `DeviceId`)],
    linkId: [, __expectNonNull(input.LinkId!, `LinkId`)],
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

export const serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = async (
  input: DisassociateTransitGatewayConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TransitGatewayConnectPeerArn",
    () => input.TransitGatewayConnectPeerArn!,
    "{TransitGatewayConnectPeerArn}",
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

export const serializeAws_restJson1ExecuteCoreNetworkChangeSetCommand = async (
  input: ExecuteCoreNetworkChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PolicyVersionId",
    () => input.PolicyVersionId!.toString(),
    "{PolicyVersionId}",
    false
  );
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

export const serializeAws_restJson1GetConnectAttachmentCommand = async (
  input: GetConnectAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connect-attachments/{AttachmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
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

export const serializeAws_restJson1GetConnectionsCommand = async (
  input: GetConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connections";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    connectionIds: [
      () => input.ConnectionIds !== void 0,
      () => (input.ConnectionIds! || []).map((_entry) => _entry as any),
    ],
    deviceId: [, input.DeviceId!],
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

export const serializeAws_restJson1GetConnectPeerCommand = async (
  input: GetConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connect-peers/{ConnectPeerId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectPeerId",
    () => input.ConnectPeerId!,
    "{ConnectPeerId}",
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

export const serializeAws_restJson1GetConnectPeerAssociationsCommand = async (
  input: GetConnectPeerAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connect-peer-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    connectPeerIds: [
      () => input.ConnectPeerIds !== void 0,
      () => (input.ConnectPeerIds! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1GetCoreNetworkCommand = async (
  input: GetCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/core-networks/{CoreNetworkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
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

export const serializeAws_restJson1GetCoreNetworkChangeEventsCommand = async (
  input: GetCoreNetworkChangeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PolicyVersionId",
    () => input.PolicyVersionId!.toString(),
    "{PolicyVersionId}",
    false
  );
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

export const serializeAws_restJson1GetCoreNetworkChangeSetCommand = async (
  input: GetCoreNetworkChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PolicyVersionId",
    () => input.PolicyVersionId!.toString(),
    "{PolicyVersionId}",
    false
  );
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

export const serializeAws_restJson1GetCoreNetworkPolicyCommand = async (
  input: GetCoreNetworkPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  const query: any = map({
    policyVersionId: [() => input.PolicyVersionId !== void 0, () => input.PolicyVersionId!.toString()],
    alias: [, input.Alias!],
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

export const serializeAws_restJson1GetCustomerGatewayAssociationsCommand = async (
  input: GetCustomerGatewayAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/customer-gateway-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    customerGatewayArns: [
      () => input.CustomerGatewayArns !== void 0,
      () => (input.CustomerGatewayArns! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1GetDevicesCommand = async (
  input: GetDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/devices";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    deviceIds: [() => input.DeviceIds !== void 0, () => (input.DeviceIds! || []).map((_entry) => _entry as any)],
    siteId: [, input.SiteId!],
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

export const serializeAws_restJson1GetLinkAssociationsCommand = async (
  input: GetLinkAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/link-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    deviceId: [, input.DeviceId!],
    linkId: [, input.LinkId!],
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

export const serializeAws_restJson1GetLinksCommand = async (
  input: GetLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks/{GlobalNetworkId}/links";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    linkIds: [() => input.LinkIds !== void 0, () => (input.LinkIds! || []).map((_entry) => _entry as any)],
    siteId: [, input.SiteId!],
    type: [, input.Type!],
    provider: [, input.Provider!],
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

export const serializeAws_restJson1GetNetworkResourceCountsCommand = async (
  input: GetNetworkResourceCountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/network-resource-count";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    resourceType: [, input.ResourceType!],
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

export const serializeAws_restJson1GetNetworkResourceRelationshipsCommand = async (
  input: GetNetworkResourceRelationshipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/network-resource-relationships";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    coreNetworkId: [, input.CoreNetworkId!],
    registeredGatewayArn: [, input.RegisteredGatewayArn!],
    awsRegion: [, input.AwsRegion!],
    accountId: [, input.AccountId!],
    resourceType: [, input.ResourceType!],
    resourceArn: [, input.ResourceArn!],
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

export const serializeAws_restJson1GetNetworkResourcesCommand = async (
  input: GetNetworkResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/network-resources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    coreNetworkId: [, input.CoreNetworkId!],
    registeredGatewayArn: [, input.RegisteredGatewayArn!],
    awsRegion: [, input.AwsRegion!],
    accountId: [, input.AccountId!],
    resourceType: [, input.ResourceType!],
    resourceArn: [, input.ResourceArn!],
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

export const serializeAws_restJson1GetNetworkRoutesCommand = async (
  input: GetNetworkRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/network-routes";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationFilters != null && {
      DestinationFilters: serializeAws_restJson1FilterMap(input.DestinationFilters, context),
    }),
    ...(input.ExactCidrMatches != null && {
      ExactCidrMatches: serializeAws_restJson1ConstrainedStringList(input.ExactCidrMatches, context),
    }),
    ...(input.LongestPrefixMatches != null && {
      LongestPrefixMatches: serializeAws_restJson1ConstrainedStringList(input.LongestPrefixMatches, context),
    }),
    ...(input.PrefixListIds != null && {
      PrefixListIds: serializeAws_restJson1ConstrainedStringList(input.PrefixListIds, context),
    }),
    ...(input.RouteTableIdentifier != null && {
      RouteTableIdentifier: serializeAws_restJson1RouteTableIdentifier(input.RouteTableIdentifier, context),
    }),
    ...(input.States != null && { States: serializeAws_restJson1RouteStateList(input.States, context) }),
    ...(input.SubnetOfMatches != null && {
      SubnetOfMatches: serializeAws_restJson1ConstrainedStringList(input.SubnetOfMatches, context),
    }),
    ...(input.SupernetOfMatches != null && {
      SupernetOfMatches: serializeAws_restJson1ConstrainedStringList(input.SupernetOfMatches, context),
    }),
    ...(input.Types != null && { Types: serializeAws_restJson1RouteTypeList(input.Types, context) }),
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

export const serializeAws_restJson1GetNetworkTelemetryCommand = async (
  input: GetNetworkTelemetryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/network-telemetry";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    coreNetworkId: [, input.CoreNetworkId!],
    registeredGatewayArn: [, input.RegisteredGatewayArn!],
    awsRegion: [, input.AwsRegion!],
    accountId: [, input.AccountId!],
    resourceType: [, input.ResourceType!],
    resourceArn: [, input.ResourceArn!],
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

export const serializeAws_restJson1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-policy/{ResourceArn}";
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

export const serializeAws_restJson1GetRouteAnalysisCommand = async (
  input: GetRouteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RouteAnalysisId",
    () => input.RouteAnalysisId!,
    "{RouteAnalysisId}",
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

export const serializeAws_restJson1GetSitesCommand = async (
  input: GetSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks/{GlobalNetworkId}/sites";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    siteIds: [() => input.SiteIds !== void 0, () => (input.SiteIds! || []).map((_entry) => _entry as any)],
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

export const serializeAws_restJson1GetSiteToSiteVpnAttachmentCommand = async (
  input: GetSiteToSiteVpnAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/site-to-site-vpn-attachments/{AttachmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
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

export const serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = async (
  input: GetTransitGatewayConnectPeerAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    transitGatewayConnectPeerArns: [
      () => input.TransitGatewayConnectPeerArns !== void 0,
      () => (input.TransitGatewayConnectPeerArns! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1GetTransitGatewayPeeringCommand = async (
  input: GetTransitGatewayPeeringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/transit-gateway-peerings/{PeeringId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PeeringId", () => input.PeeringId!, "{PeeringId}", false);
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

export const serializeAws_restJson1GetTransitGatewayRegistrationsCommand = async (
  input: GetTransitGatewayRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  const query: any = map({
    transitGatewayArns: [
      () => input.TransitGatewayArns !== void 0,
      () => (input.TransitGatewayArns! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand = async (
  input: GetTransitGatewayRouteTableAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/transit-gateway-route-table-attachments/{AttachmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
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

export const serializeAws_restJson1GetVpcAttachmentCommand = async (
  input: GetVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpc-attachments/{AttachmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
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

export const serializeAws_restJson1ListAttachmentsCommand = async (
  input: ListAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/attachments";
  const query: any = map({
    coreNetworkId: [, input.CoreNetworkId!],
    attachmentType: [, input.AttachmentType!],
    edgeLocation: [, input.EdgeLocation!],
    state: [, input.State!],
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

export const serializeAws_restJson1ListConnectPeersCommand = async (
  input: ListConnectPeersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connect-peers";
  const query: any = map({
    coreNetworkId: [, input.CoreNetworkId!],
    connectAttachmentId: [, input.ConnectAttachmentId!],
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

export const serializeAws_restJson1ListCoreNetworkPolicyVersionsCommand = async (
  input: ListCoreNetworkPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-policy-versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
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

export const serializeAws_restJson1ListCoreNetworksCommand = async (
  input: ListCoreNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/core-networks";
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

export const serializeAws_restJson1ListOrganizationServiceAccessStatusCommand = async (
  input: ListOrganizationServiceAccessStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organizations/service-access";
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

export const serializeAws_restJson1ListPeeringsCommand = async (
  input: ListPeeringsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/peerings";
  const query: any = map({
    coreNetworkId: [, input.CoreNetworkId!],
    peeringType: [, input.PeeringType!],
    edgeLocation: [, input.EdgeLocation!],
    state: [, input.State!],
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutCoreNetworkPolicyCommand = async (
  input: PutCoreNetworkPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LatestVersionId != null && { LatestVersionId: input.LatestVersionId }),
    ...(input.PolicyDocument != null && { PolicyDocument: __LazyJsonString.fromObject(input.PolicyDocument) }),
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

export const serializeAws_restJson1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-policy/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.PolicyDocument != null && { PolicyDocument: __LazyJsonString.fromObject(input.PolicyDocument) }),
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

export const serializeAws_restJson1RegisterTransitGatewayCommand = async (
  input: RegisterTransitGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.TransitGatewayArn != null && { TransitGatewayArn: input.TransitGatewayArn }),
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

export const serializeAws_restJson1RejectAttachmentCommand = async (
  input: RejectAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/attachments/{AttachmentId}/reject";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
    false
  );
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

export const serializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand = async (
  input: RestoreCoreNetworkPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PolicyVersionId",
    () => input.PolicyVersionId!.toString(),
    "{PolicyVersionId}",
    false
  );
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

export const serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand = async (
  input: StartOrganizationServiceAccessUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organizations/service-access";
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: input.Action }),
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

export const serializeAws_restJson1StartRouteAnalysisCommand = async (
  input: StartRouteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/route-analyses";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Destination != null && {
      Destination: serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification(input.Destination, context),
    }),
    ...(input.IncludeReturnPath != null && { IncludeReturnPath: input.IncludeReturnPath }),
    ...(input.Source != null && {
      Source: serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification(input.Source, context),
    }),
    ...(input.UseMiddleboxes != null && { UseMiddleboxes: input.UseMiddleboxes }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectedLinkId != null && { ConnectedLinkId: input.ConnectedLinkId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LinkId != null && { LinkId: input.LinkId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateCoreNetworkCommand = async (
  input: UpdateCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/core-networks/{CoreNetworkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CoreNetworkId",
    () => input.CoreNetworkId!,
    "{CoreNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDeviceCommand = async (
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/devices/{DeviceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AWSLocation != null && { AWSLocation: serializeAws_restJson1AWSLocation(input.AWSLocation, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Location != null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    ...(input.Model != null && { Model: input.Model }),
    ...(input.SerialNumber != null && { SerialNumber: input.SerialNumber }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Vendor != null && { Vendor: input.Vendor }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateGlobalNetworkCommand = async (
  input: UpdateGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks/{GlobalNetworkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateLinkCommand = async (
  input: UpdateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/links/{LinkId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "LinkId", () => input.LinkId!, "{LinkId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Bandwidth != null && { Bandwidth: serializeAws_restJson1Bandwidth(input.Bandwidth, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Provider != null && { Provider: input.Provider }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateNetworkResourceMetadataCommand = async (
  input: UpdateNetworkResourceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && {
      Metadata: serializeAws_restJson1NetworkResourceMetadataMap(input.Metadata, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSiteCommand = async (
  input: UpdateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/sites/{SiteId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "GlobalNetworkId",
    () => input.GlobalNetworkId!,
    "{GlobalNetworkId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Location != null && { Location: serializeAws_restJson1Location(input.Location, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateVpcAttachmentCommand = async (
  input: UpdateVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpc-attachments/{AttachmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttachmentId",
    () => input.AttachmentId!,
    "{AttachmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AddSubnetArns != null && {
      AddSubnetArns: serializeAws_restJson1SubnetArnList(input.AddSubnetArns, context),
    }),
    ...(input.Options != null && { Options: serializeAws_restJson1VpcOptions(input.Options, context) }),
    ...(input.RemoveSubnetArns != null && {
      RemoveSubnetArns: serializeAws_restJson1SubnetArnList(input.RemoveSubnetArns, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AcceptAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment != null) {
    contents.Attachment = deserializeAws_restJson1Attachment(data.Attachment, context);
  }
  return contents;
};

const deserializeAws_restJson1AcceptAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociation != null) {
    contents.ConnectPeerAssociation = deserializeAws_restJson1ConnectPeerAssociation(
      data.ConnectPeerAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1AssociateConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateCustomerGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociation != null) {
    contents.CustomerGatewayAssociation = deserializeAws_restJson1CustomerGatewayAssociation(
      data.CustomerGatewayAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1AssociateCustomerGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociation != null) {
    contents.LinkAssociation = deserializeAws_restJson1LinkAssociation(data.LinkAssociation, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayConnectPeerAssociation != null) {
    contents.TransitGatewayConnectPeerAssociation = deserializeAws_restJson1TransitGatewayConnectPeerAssociation(
      data.TransitGatewayConnectPeerAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTransitGatewayConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectAttachment != null) {
    contents.ConnectAttachment = deserializeAws_restJson1ConnectAttachment(data.ConnectAttachment, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateConnectAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer != null) {
    contents.ConnectPeer = deserializeAws_restJson1ConnectPeer(data.ConnectPeer, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "CoreNetworkPolicyException":
    case "com.amazonaws.networkmanager#CoreNetworkPolicyException":
      throw await deserializeAws_restJson1CoreNetworkPolicyExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device != null) {
    contents.Device = deserializeAws_restJson1Device(data.Device, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGlobalNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork != null) {
    contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateGlobalNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link != null) {
    contents.Link = deserializeAws_restJson1Link(data.Link, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site != null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SiteToSiteVpnAttachment != null) {
    contents.SiteToSiteVpnAttachment = deserializeAws_restJson1SiteToSiteVpnAttachment(
      data.SiteToSiteVpnAttachment,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTransitGatewayPeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayPeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTransitGatewayPeeringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayPeering != null) {
    contents.TransitGatewayPeering = deserializeAws_restJson1TransitGatewayPeering(data.TransitGatewayPeering, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateTransitGatewayPeeringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayPeeringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRouteTableAttachment != null) {
    contents.TransitGatewayRouteTableAttachment = deserializeAws_restJson1TransitGatewayRouteTableAttachment(
      data.TransitGatewayRouteTableAttachment,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment != null) {
    contents.VpcAttachment = deserializeAws_restJson1VpcAttachment(data.VpcAttachment, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateVpcAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment != null) {
    contents.Attachment = deserializeAws_restJson1Attachment(data.Attachment, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer != null) {
    contents.ConnectPeer = deserializeAws_restJson1ConnectPeer(data.ConnectPeer, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device != null) {
    contents.Device = deserializeAws_restJson1Device(data.Device, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGlobalNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork != null) {
    contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteGlobalNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link != null) {
    contents.Link = deserializeAws_restJson1Link(data.Link, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePeeringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Peering != null) {
    contents.Peering = deserializeAws_restJson1Peering(data.Peering, context);
  }
  return contents;
};

const deserializeAws_restJson1DeletePeeringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePeeringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site != null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeregisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterTransitGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRegistration != null) {
    contents.TransitGatewayRegistration = deserializeAws_restJson1TransitGatewayRegistration(
      data.TransitGatewayRegistration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DeregisterTransitGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeGlobalNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGlobalNetworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetworks != null) {
    contents.GlobalNetworks = deserializeAws_restJson1GlobalNetworkList(data.GlobalNetworks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeGlobalNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociation != null) {
    contents.ConnectPeerAssociation = deserializeAws_restJson1ConnectPeerAssociation(
      data.ConnectPeerAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DisassociateConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateCustomerGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociation != null) {
    contents.CustomerGatewayAssociation = deserializeAws_restJson1CustomerGatewayAssociation(
      data.CustomerGatewayAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DisassociateCustomerGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociation != null) {
    contents.LinkAssociation = deserializeAws_restJson1LinkAssociation(data.LinkAssociation, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayConnectPeerAssociation != null) {
    contents.TransitGatewayConnectPeerAssociation = deserializeAws_restJson1TransitGatewayConnectPeerAssociation(
      data.TransitGatewayConnectPeerAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCoreNetworkChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectAttachment != null) {
    contents.ConnectAttachment = deserializeAws_restJson1ConnectAttachment(data.ConnectAttachment, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = deserializeAws_restJson1ConnectionList(data.Connections, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer != null) {
    contents.ConnectPeer = deserializeAws_restJson1ConnectPeer(data.ConnectPeer, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectPeerAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociations != null) {
    contents.ConnectPeerAssociations = deserializeAws_restJson1ConnectPeerAssociationList(
      data.ConnectPeerAssociations,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectPeerAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreNetworkChangeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkChangeEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkChangeEvents != null) {
    contents.CoreNetworkChangeEvents = deserializeAws_restJson1CoreNetworkChangeEventList(
      data.CoreNetworkChangeEvents,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetCoreNetworkChangeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkChangeSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkChanges != null) {
    contents.CoreNetworkChanges = deserializeAws_restJson1CoreNetworkChangeList(data.CoreNetworkChanges, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetCoreNetworkChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCoreNetworkPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCustomerGatewayAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociations != null) {
    contents.CustomerGatewayAssociations = deserializeAws_restJson1CustomerGatewayAssociationList(
      data.CustomerGatewayAssociations,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices != null) {
    contents.Devices = deserializeAws_restJson1DeviceList(data.Devices, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLinkAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLinkAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociations != null) {
    contents.LinkAssociations = deserializeAws_restJson1LinkAssociationList(data.LinkAssociations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetLinkAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Links != null) {
    contents.Links = deserializeAws_restJson1LinkList(data.Links, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourceCountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkResourceCounts != null) {
    contents.NetworkResourceCounts = deserializeAws_restJson1NetworkResourceCountList(
      data.NetworkResourceCounts,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkResourceCountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkResourceRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourceRelationshipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Relationships != null) {
    contents.Relationships = deserializeAws_restJson1RelationshipList(data.Relationships, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkResourceRelationshipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceRelationshipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkResources != null) {
    contents.NetworkResources = deserializeAws_restJson1NetworkResourceList(data.NetworkResources, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkSegmentEdge != null) {
    contents.CoreNetworkSegmentEdge = deserializeAws_restJson1CoreNetworkSegmentEdgeIdentifier(
      data.CoreNetworkSegmentEdge,
      context
    );
  }
  if (data.NetworkRoutes != null) {
    contents.NetworkRoutes = deserializeAws_restJson1NetworkRouteList(data.NetworkRoutes, context);
  }
  if (data.RouteTableArn != null) {
    contents.RouteTableArn = __expectString(data.RouteTableArn);
  }
  if (data.RouteTableTimestamp != null) {
    contents.RouteTableTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.RouteTableTimestamp)));
  }
  if (data.RouteTableType != null) {
    contents.RouteTableType = __expectString(data.RouteTableType);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkTelemetryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkTelemetryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkTelemetry != null) {
    contents.NetworkTelemetry = deserializeAws_restJson1NetworkTelemetryList(data.NetworkTelemetry, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkTelemetryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkTelemetryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PolicyDocument != null) {
    contents.PolicyDocument = new __LazyJsonString(data.PolicyDocument);
  }
  return contents;
};

const deserializeAws_restJson1GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteAnalysis != null) {
    contents.RouteAnalysis = deserializeAws_restJson1RouteAnalysis(data.RouteAnalysis, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRouteAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sites != null) {
    contents.Sites = deserializeAws_restJson1SiteList(data.Sites, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SiteToSiteVpnAttachment != null) {
    contents.SiteToSiteVpnAttachment = deserializeAws_restJson1SiteToSiteVpnAttachment(
      data.SiteToSiteVpnAttachment,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteToSiteVpnAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TransitGatewayConnectPeerAssociations != null) {
    contents.TransitGatewayConnectPeerAssociations = deserializeAws_restJson1TransitGatewayConnectPeerAssociationList(
      data.TransitGatewayConnectPeerAssociations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTransitGatewayPeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayPeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTransitGatewayPeeringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayPeering != null) {
    contents.TransitGatewayPeering = deserializeAws_restJson1TransitGatewayPeering(data.TransitGatewayPeering, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTransitGatewayPeeringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayPeeringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTransitGatewayRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TransitGatewayRegistrations != null) {
    contents.TransitGatewayRegistrations = deserializeAws_restJson1TransitGatewayRegistrationList(
      data.TransitGatewayRegistrations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRouteTableAttachment != null) {
    contents.TransitGatewayRouteTableAttachment = deserializeAws_restJson1TransitGatewayRouteTableAttachment(
      data.TransitGatewayRouteTableAttachment,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment != null) {
    contents.VpcAttachment = deserializeAws_restJson1VpcAttachment(data.VpcAttachment, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVpcAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttachmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachments != null) {
    contents.Attachments = deserializeAws_restJson1AttachmentList(data.Attachments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAttachmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConnectPeersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectPeersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectPeersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeers != null) {
    contents.ConnectPeers = deserializeAws_restJson1ConnectPeerSummaryList(data.ConnectPeers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConnectPeersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectPeersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicyVersions != null) {
    contents.CoreNetworkPolicyVersions = deserializeAws_restJson1CoreNetworkPolicyVersionList(
      data.CoreNetworkPolicyVersions,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCoreNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreNetworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworks != null) {
    contents.CoreNetworks = deserializeAws_restJson1CoreNetworkSummaryList(data.CoreNetworks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCoreNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListOrganizationServiceAccessStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationServiceAccessStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrganizationServiceAccessStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.OrganizationStatus != null) {
    contents.OrganizationStatus = deserializeAws_restJson1OrganizationStatus(data.OrganizationStatus, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOrganizationServiceAccessStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationServiceAccessStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1ListPeeringsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPeeringsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPeeringsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Peerings != null) {
    contents.Peerings = deserializeAws_restJson1PeeringList(data.Peerings, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPeeringsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPeeringsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
  if (data.TagList != null) {
    contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutCoreNetworkPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

const deserializeAws_restJson1PutCoreNetworkPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCoreNetworkPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "CoreNetworkPolicyException":
    case "com.amazonaws.networkmanager#CoreNetworkPolicyException":
      throw await deserializeAws_restJson1CoreNetworkPolicyExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RegisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterTransitGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRegistration != null) {
    contents.TransitGatewayRegistration = deserializeAws_restJson1TransitGatewayRegistration(
      data.TransitGatewayRegistration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1RegisterTransitGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RejectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment != null) {
    contents.Attachment = deserializeAws_restJson1Attachment(data.Attachment, context);
  }
  return contents;
};

const deserializeAws_restJson1RejectAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

const deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOrganizationServiceAccessUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.OrganizationStatus != null) {
    contents.OrganizationStatus = deserializeAws_restJson1OrganizationStatus(data.OrganizationStatus, context);
  }
  return contents;
};

const deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOrganizationServiceAccessUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRouteAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteAnalysis != null) {
    contents.RouteAnalysis = deserializeAws_restJson1RouteAnalysis(data.RouteAnalysis, context);
  }
  return contents;
};

const deserializeAws_restJson1StartRouteAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRouteAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device != null) {
    contents.Device = deserializeAws_restJson1Device(data.Device, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGlobalNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork != null) {
    contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateGlobalNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link != null) {
    contents.Link = deserializeAws_restJson1Link(data.Link, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateNetworkResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkResourceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNetworkResourceMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata != null) {
    contents.Metadata = deserializeAws_restJson1NetworkResourceMetadataMap(data.Metadata, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateNetworkResourceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkResourceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site != null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment != null) {
    contents.VpcAttachment = deserializeAws_restJson1VpcAttachment(data.VpcAttachment, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateVpcAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1CoreNetworkPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CoreNetworkPolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1CoreNetworkPolicyErrorList(data.Errors, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new CoreNetworkPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Context != null) {
    contents.Context = deserializeAws_restJson1ExceptionContextMap(data.Context, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.LimitCode != null) {
    contents.LimitCode = __expectString(data.LimitCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Fields != null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AWSLocation = (input: AWSLocation, context: __SerdeContext): any => {
  return {
    ...(input.SubnetArn != null && { SubnetArn: input.SubnetArn }),
    ...(input.Zone != null && { Zone: input.Zone }),
  };
};

const serializeAws_restJson1Bandwidth = (input: Bandwidth, context: __SerdeContext): any => {
  return {
    ...(input.DownloadSpeed != null && { DownloadSpeed: input.DownloadSpeed }),
    ...(input.UploadSpeed != null && { UploadSpeed: input.UploadSpeed }),
  };
};

const serializeAws_restJson1BgpOptions = (input: BgpOptions, context: __SerdeContext): any => {
  return {
    ...(input.PeerAsn != null && { PeerAsn: input.PeerAsn }),
  };
};

const serializeAws_restJson1ConnectAttachmentOptions = (
  input: ConnectAttachmentOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1ConstrainedStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CoreNetworkSegmentEdgeIdentifier = (
  input: CoreNetworkSegmentEdgeIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.CoreNetworkId != null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.EdgeLocation != null && { EdgeLocation: input.EdgeLocation }),
    ...(input.SegmentName != null && { SegmentName: input.SegmentName }),
  };
};

const serializeAws_restJson1FilterMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1FilterValues(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Latitude != null && { Latitude: input.Latitude }),
    ...(input.Longitude != null && { Longitude: input.Longitude }),
  };
};

const serializeAws_restJson1NetworkResourceMetadataMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification = (
  input: RouteAnalysisEndpointOptionsSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.TransitGatewayAttachmentArn != null && {
      TransitGatewayAttachmentArn: input.TransitGatewayAttachmentArn,
    }),
  };
};

const serializeAws_restJson1RouteStateList = (input: (RouteState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RouteTableIdentifier = (input: RouteTableIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CoreNetworkSegmentEdge != null && {
      CoreNetworkSegmentEdge: serializeAws_restJson1CoreNetworkSegmentEdgeIdentifier(
        input.CoreNetworkSegmentEdge,
        context
      ),
    }),
    ...(input.TransitGatewayRouteTableArn != null && {
      TransitGatewayRouteTableArn: input.TransitGatewayRouteTableArn,
    }),
  };
};

const serializeAws_restJson1RouteTypeList = (input: (RouteType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SubnetArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1VpcOptions = (input: VpcOptions, context: __SerdeContext): any => {
  return {
    ...(input.ApplianceModeSupport != null && { ApplianceModeSupport: input.ApplianceModeSupport }),
    ...(input.Ipv6Support != null && { Ipv6Support: input.Ipv6Support }),
  };
};

const deserializeAws_restJson1AccountStatus = (output: any, context: __SerdeContext): AccountStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    SLRDeploymentStatus: __expectString(output.SLRDeploymentStatus),
  } as any;
};

const deserializeAws_restJson1AccountStatusList = (output: any, context: __SerdeContext): AccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccountStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    AttachmentId: __expectString(output.AttachmentId),
    AttachmentPolicyRuleNumber: __expectInt32(output.AttachmentPolicyRuleNumber),
    AttachmentType: __expectString(output.AttachmentType),
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProposedSegmentChange:
      output.ProposedSegmentChange != null
        ? deserializeAws_restJson1ProposedSegmentChange(output.ProposedSegmentChange, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    SegmentName: __expectString(output.SegmentName),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1AttachmentList = (output: any, context: __SerdeContext): Attachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Attachment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AWSLocation = (output: any, context: __SerdeContext): AWSLocation => {
  return {
    SubnetArn: __expectString(output.SubnetArn),
    Zone: __expectString(output.Zone),
  } as any;
};

const deserializeAws_restJson1Bandwidth = (output: any, context: __SerdeContext): Bandwidth => {
  return {
    DownloadSpeed: __expectInt32(output.DownloadSpeed),
    UploadSpeed: __expectInt32(output.UploadSpeed),
  } as any;
};

const deserializeAws_restJson1ConnectAttachment = (output: any, context: __SerdeContext): ConnectAttachment => {
  return {
    Attachment: output.Attachment != null ? deserializeAws_restJson1Attachment(output.Attachment, context) : undefined,
    Options:
      output.Options != null ? deserializeAws_restJson1ConnectAttachmentOptions(output.Options, context) : undefined,
    TransportAttachmentId: __expectString(output.TransportAttachmentId),
  } as any;
};

const deserializeAws_restJson1ConnectAttachmentOptions = (
  output: any,
  context: __SerdeContext
): ConnectAttachmentOptions => {
  return {
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectedDeviceId: __expectString(output.ConnectedDeviceId),
    ConnectedLinkId: __expectString(output.ConnectedLinkId),
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionId: __expectString(output.ConnectionId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectionHealth = (output: any, context: __SerdeContext): ConnectionHealth => {
  return {
    Status: __expectString(output.Status),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Connection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectPeer = (output: any, context: __SerdeContext): ConnectPeer => {
  return {
    Configuration:
      output.Configuration != null
        ? deserializeAws_restJson1ConnectPeerConfiguration(output.Configuration, context)
        : undefined,
    ConnectAttachmentId: __expectString(output.ConnectAttachmentId),
    ConnectPeerId: __expectString(output.ConnectPeerId),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectPeerAssociation = (
  output: any,
  context: __SerdeContext
): ConnectPeerAssociation => {
  return {
    ConnectPeerId: __expectString(output.ConnectPeerId),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ConnectPeerAssociationList = (
  output: any,
  context: __SerdeContext
): ConnectPeerAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectPeerAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectPeerBgpConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectPeerBgpConfiguration => {
  return {
    CoreNetworkAddress: __expectString(output.CoreNetworkAddress),
    CoreNetworkAsn: __expectLong(output.CoreNetworkAsn),
    PeerAddress: __expectString(output.PeerAddress),
    PeerAsn: __expectLong(output.PeerAsn),
  } as any;
};

const deserializeAws_restJson1ConnectPeerBgpConfigurationList = (
  output: any,
  context: __SerdeContext
): ConnectPeerBgpConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectPeerBgpConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConnectPeerConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectPeerConfiguration => {
  return {
    BgpConfigurations:
      output.BgpConfigurations != null
        ? deserializeAws_restJson1ConnectPeerBgpConfigurationList(output.BgpConfigurations, context)
        : undefined,
    CoreNetworkAddress: __expectString(output.CoreNetworkAddress),
    InsideCidrBlocks:
      output.InsideCidrBlocks != null
        ? deserializeAws_restJson1ConstrainedStringList(output.InsideCidrBlocks, context)
        : undefined,
    PeerAddress: __expectString(output.PeerAddress),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1ConnectPeerSummary = (output: any, context: __SerdeContext): ConnectPeerSummary => {
  return {
    ConnectAttachmentId: __expectString(output.ConnectAttachmentId),
    ConnectPeerId: __expectString(output.ConnectPeerId),
    ConnectPeerState: __expectString(output.ConnectPeerState),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectPeerSummaryList = (output: any, context: __SerdeContext): ConnectPeerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectPeerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConstrainedStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CoreNetwork = (output: any, context: __SerdeContext): CoreNetwork => {
  return {
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Edges: output.Edges != null ? deserializeAws_restJson1CoreNetworkEdgeList(output.Edges, context) : undefined,
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Segments:
      output.Segments != null ? deserializeAws_restJson1CoreNetworkSegmentList(output.Segments, context) : undefined,
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkChange = (output: any, context: __SerdeContext): CoreNetworkChange => {
  return {
    Action: __expectString(output.Action),
    Identifier: __expectString(output.Identifier),
    IdentifierPath: __expectString(output.IdentifierPath),
    NewValues:
      output.NewValues != null ? deserializeAws_restJson1CoreNetworkChangeValues(output.NewValues, context) : undefined,
    PreviousValues:
      output.PreviousValues != null
        ? deserializeAws_restJson1CoreNetworkChangeValues(output.PreviousValues, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1CoreNetworkChangeEvent = (
  output: any,
  context: __SerdeContext
): CoreNetworkChangeEvent => {
  return {
    Action: __expectString(output.Action),
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    IdentifierPath: __expectString(output.IdentifierPath),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    Values:
      output.Values != null ? deserializeAws_restJson1CoreNetworkChangeEventValues(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkChangeEventList = (
  output: any,
  context: __SerdeContext
): CoreNetworkChangeEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkChangeEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreNetworkChangeEventValues = (
  output: any,
  context: __SerdeContext
): CoreNetworkChangeEventValues => {
  return {
    AttachmentId: __expectString(output.AttachmentId),
    Cidr: __expectString(output.Cidr),
    EdgeLocation: __expectString(output.EdgeLocation),
    SegmentName: __expectString(output.SegmentName),
  } as any;
};

const deserializeAws_restJson1CoreNetworkChangeList = (output: any, context: __SerdeContext): CoreNetworkChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkChange(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreNetworkChangeValues = (
  output: any,
  context: __SerdeContext
): CoreNetworkChangeValues => {
  return {
    Asn: __expectLong(output.Asn),
    Cidr: __expectString(output.Cidr),
    DestinationIdentifier: __expectString(output.DestinationIdentifier),
    EdgeLocations:
      output.EdgeLocations != null
        ? deserializeAws_restJson1ExternalRegionCodeList(output.EdgeLocations, context)
        : undefined,
    InsideCidrBlocks:
      output.InsideCidrBlocks != null
        ? deserializeAws_restJson1ConstrainedStringList(output.InsideCidrBlocks, context)
        : undefined,
    SegmentName: __expectString(output.SegmentName),
    SharedSegments:
      output.SharedSegments != null
        ? deserializeAws_restJson1ConstrainedStringList(output.SharedSegments, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkEdge = (output: any, context: __SerdeContext): CoreNetworkEdge => {
  return {
    Asn: __expectLong(output.Asn),
    EdgeLocation: __expectString(output.EdgeLocation),
    InsideCidrBlocks:
      output.InsideCidrBlocks != null
        ? deserializeAws_restJson1ConstrainedStringList(output.InsideCidrBlocks, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkEdgeList = (output: any, context: __SerdeContext): CoreNetworkEdge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkEdge(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreNetworkPolicy = (output: any, context: __SerdeContext): CoreNetworkPolicy => {
  return {
    Alias: __expectString(output.Alias),
    ChangeSetState: __expectString(output.ChangeSetState),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    PolicyDocument: output.PolicyDocument != null ? new __LazyJsonString(output.PolicyDocument) : undefined,
    PolicyErrors:
      output.PolicyErrors != null
        ? deserializeAws_restJson1CoreNetworkPolicyErrorList(output.PolicyErrors, context)
        : undefined,
    PolicyVersionId: __expectInt32(output.PolicyVersionId),
  } as any;
};

const deserializeAws_restJson1CoreNetworkPolicyError = (
  output: any,
  context: __SerdeContext
): CoreNetworkPolicyError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_restJson1CoreNetworkPolicyErrorList = (
  output: any,
  context: __SerdeContext
): CoreNetworkPolicyError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkPolicyError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreNetworkPolicyVersion = (
  output: any,
  context: __SerdeContext
): CoreNetworkPolicyVersion => {
  return {
    Alias: __expectString(output.Alias),
    ChangeSetState: __expectString(output.ChangeSetState),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    PolicyVersionId: __expectInt32(output.PolicyVersionId),
  } as any;
};

const deserializeAws_restJson1CoreNetworkPolicyVersionList = (
  output: any,
  context: __SerdeContext
): CoreNetworkPolicyVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkPolicyVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreNetworkSegment = (output: any, context: __SerdeContext): CoreNetworkSegment => {
  return {
    EdgeLocations:
      output.EdgeLocations != null
        ? deserializeAws_restJson1ExternalRegionCodeList(output.EdgeLocations, context)
        : undefined,
    Name: __expectString(output.Name),
    SharedSegments:
      output.SharedSegments != null
        ? deserializeAws_restJson1ConstrainedStringList(output.SharedSegments, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkSegmentEdgeIdentifier = (
  output: any,
  context: __SerdeContext
): CoreNetworkSegmentEdgeIdentifier => {
  return {
    CoreNetworkId: __expectString(output.CoreNetworkId),
    EdgeLocation: __expectString(output.EdgeLocation),
    SegmentName: __expectString(output.SegmentName),
  } as any;
};

const deserializeAws_restJson1CoreNetworkSegmentList = (output: any, context: __SerdeContext): CoreNetworkSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkSegment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreNetworkSummary = (output: any, context: __SerdeContext): CoreNetworkSummary => {
  return {
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkSummaryList = (output: any, context: __SerdeContext): CoreNetworkSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreNetworkSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CustomerGatewayAssociation = (
  output: any,
  context: __SerdeContext
): CustomerGatewayAssociation => {
  return {
    CustomerGatewayArn: __expectString(output.CustomerGatewayArn),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1CustomerGatewayAssociationList = (
  output: any,
  context: __SerdeContext
): CustomerGatewayAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomerGatewayAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
  return {
    AWSLocation:
      output.AWSLocation != null ? deserializeAws_restJson1AWSLocation(output.AWSLocation, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DeviceArn: __expectString(output.DeviceArn),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Location: output.Location != null ? deserializeAws_restJson1Location(output.Location, context) : undefined,
    Model: __expectString(output.Model),
    SerialNumber: __expectString(output.SerialNumber),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Vendor: __expectString(output.Vendor),
  } as any;
};

const deserializeAws_restJson1DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExceptionContextMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ExternalRegionCodeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1GlobalNetwork = (output: any, context: __SerdeContext): GlobalNetwork => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkArn: __expectString(output.GlobalNetworkArn),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GlobalNetworkList = (output: any, context: __SerdeContext): GlobalNetwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GlobalNetwork(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Link = (output: any, context: __SerdeContext): Link => {
  return {
    Bandwidth: output.Bandwidth != null ? deserializeAws_restJson1Bandwidth(output.Bandwidth, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkArn: __expectString(output.LinkArn),
    LinkId: __expectString(output.LinkId),
    Provider: __expectString(output.Provider),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1LinkAssociation = (output: any, context: __SerdeContext): LinkAssociation => {
  return {
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkAssociationState: __expectString(output.LinkAssociationState),
    LinkId: __expectString(output.LinkId),
  } as any;
};

const deserializeAws_restJson1LinkAssociationList = (output: any, context: __SerdeContext): LinkAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LinkAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LinkList = (output: any, context: __SerdeContext): Link[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Link(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Location = (output: any, context: __SerdeContext): Location => {
  return {
    Address: __expectString(output.Address),
    Latitude: __expectString(output.Latitude),
    Longitude: __expectString(output.Longitude),
  } as any;
};

const deserializeAws_restJson1NetworkResource = (output: any, context: __SerdeContext): NetworkResource => {
  return {
    AccountId: __expectString(output.AccountId),
    AwsRegion: __expectString(output.AwsRegion),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    Definition: __expectString(output.Definition),
    DefinitionTimestamp:
      output.DefinitionTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DefinitionTimestamp)))
        : undefined,
    Metadata:
      output.Metadata != null
        ? deserializeAws_restJson1NetworkResourceMetadataMap(output.Metadata, context)
        : undefined,
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkResourceCount = (output: any, context: __SerdeContext): NetworkResourceCount => {
  return {
    Count: __expectInt32(output.Count),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1NetworkResourceCountList = (
  output: any,
  context: __SerdeContext
): NetworkResourceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkResourceCount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkResourceList = (output: any, context: __SerdeContext): NetworkResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkResourceMetadataMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1NetworkResourceSummary = (
  output: any,
  context: __SerdeContext
): NetworkResourceSummary => {
  return {
    Definition: __expectString(output.Definition),
    IsMiddlebox: __expectBoolean(output.IsMiddlebox),
    NameTag: __expectString(output.NameTag),
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1NetworkRoute = (output: any, context: __SerdeContext): NetworkRoute => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    Destinations:
      output.Destinations != null
        ? deserializeAws_restJson1NetworkRouteDestinationList(output.Destinations, context)
        : undefined,
    PrefixListId: __expectString(output.PrefixListId),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1NetworkRouteDestination = (
  output: any,
  context: __SerdeContext
): NetworkRouteDestination => {
  return {
    CoreNetworkAttachmentId: __expectString(output.CoreNetworkAttachmentId),
    EdgeLocation: __expectString(output.EdgeLocation),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    SegmentName: __expectString(output.SegmentName),
    TransitGatewayAttachmentId: __expectString(output.TransitGatewayAttachmentId),
  } as any;
};

const deserializeAws_restJson1NetworkRouteDestinationList = (
  output: any,
  context: __SerdeContext
): NetworkRouteDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkRouteDestination(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkRouteList = (output: any, context: __SerdeContext): NetworkRoute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkRoute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkTelemetry = (output: any, context: __SerdeContext): NetworkTelemetry => {
  return {
    AccountId: __expectString(output.AccountId),
    Address: __expectString(output.Address),
    AwsRegion: __expectString(output.AwsRegion),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    Health: output.Health != null ? deserializeAws_restJson1ConnectionHealth(output.Health, context) : undefined,
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1NetworkTelemetryList = (output: any, context: __SerdeContext): NetworkTelemetry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkTelemetry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OrganizationStatus = (output: any, context: __SerdeContext): OrganizationStatus => {
  return {
    AccountStatusList:
      output.AccountStatusList != null
        ? deserializeAws_restJson1AccountStatusList(output.AccountStatusList, context)
        : undefined,
    OrganizationAwsServiceAccessStatus: __expectString(output.OrganizationAwsServiceAccessStatus),
    OrganizationId: __expectString(output.OrganizationId),
    SLRDeploymentStatus: __expectString(output.SLRDeploymentStatus),
  } as any;
};

const deserializeAws_restJson1PathComponent = (output: any, context: __SerdeContext): PathComponent => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    Resource:
      output.Resource != null ? deserializeAws_restJson1NetworkResourceSummary(output.Resource, context) : undefined,
    Sequence: __expectInt32(output.Sequence),
  } as any;
};

const deserializeAws_restJson1PathComponentList = (output: any, context: __SerdeContext): PathComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PathComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Peering = (output: any, context: __SerdeContext): Peering => {
  return {
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    PeeringId: __expectString(output.PeeringId),
    PeeringType: __expectString(output.PeeringType),
    ResourceArn: __expectString(output.ResourceArn),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PeeringList = (output: any, context: __SerdeContext): Peering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Peering(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProposedSegmentChange = (output: any, context: __SerdeContext): ProposedSegmentChange => {
  return {
    AttachmentPolicyRuleNumber: __expectInt32(output.AttachmentPolicyRuleNumber),
    SegmentName: __expectString(output.SegmentName),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ReasonContextMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    From: __expectString(output.From),
    To: __expectString(output.To),
  } as any;
};

const deserializeAws_restJson1RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Relationship(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RouteAnalysis = (output: any, context: __SerdeContext): RouteAnalysis => {
  return {
    Destination:
      output.Destination != null
        ? deserializeAws_restJson1RouteAnalysisEndpointOptions(output.Destination, context)
        : undefined,
    ForwardPath:
      output.ForwardPath != null ? deserializeAws_restJson1RouteAnalysisPath(output.ForwardPath, context) : undefined,
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    IncludeReturnPath: __expectBoolean(output.IncludeReturnPath),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ReturnPath:
      output.ReturnPath != null ? deserializeAws_restJson1RouteAnalysisPath(output.ReturnPath, context) : undefined,
    RouteAnalysisId: __expectString(output.RouteAnalysisId),
    Source:
      output.Source != null ? deserializeAws_restJson1RouteAnalysisEndpointOptions(output.Source, context) : undefined,
    StartTimestamp:
      output.StartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
    Status: __expectString(output.Status),
    UseMiddleboxes: __expectBoolean(output.UseMiddleboxes),
  } as any;
};

const deserializeAws_restJson1RouteAnalysisCompletion = (
  output: any,
  context: __SerdeContext
): RouteAnalysisCompletion => {
  return {
    ReasonCode: __expectString(output.ReasonCode),
    ReasonContext:
      output.ReasonContext != null
        ? deserializeAws_restJson1ReasonContextMap(output.ReasonContext, context)
        : undefined,
    ResultCode: __expectString(output.ResultCode),
  } as any;
};

const deserializeAws_restJson1RouteAnalysisEndpointOptions = (
  output: any,
  context: __SerdeContext
): RouteAnalysisEndpointOptions => {
  return {
    IpAddress: __expectString(output.IpAddress),
    TransitGatewayArn: __expectString(output.TransitGatewayArn),
    TransitGatewayAttachmentArn: __expectString(output.TransitGatewayAttachmentArn),
  } as any;
};

const deserializeAws_restJson1RouteAnalysisPath = (output: any, context: __SerdeContext): RouteAnalysisPath => {
  return {
    CompletionStatus:
      output.CompletionStatus != null
        ? deserializeAws_restJson1RouteAnalysisCompletion(output.CompletionStatus, context)
        : undefined,
    Path: output.Path != null ? deserializeAws_restJson1PathComponentList(output.Path, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Site = (output: any, context: __SerdeContext): Site => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Location: output.Location != null ? deserializeAws_restJson1Location(output.Location, context) : undefined,
    SiteArn: __expectString(output.SiteArn),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SiteList = (output: any, context: __SerdeContext): Site[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Site(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SiteToSiteVpnAttachment = (
  output: any,
  context: __SerdeContext
): SiteToSiteVpnAttachment => {
  return {
    Attachment: output.Attachment != null ? deserializeAws_restJson1Attachment(output.Attachment, context) : undefined,
    VpnConnectionArn: __expectString(output.VpnConnectionArn),
  } as any;
};

const deserializeAws_restJson1SubnetArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TransitGatewayConnectPeerAssociation = (
  output: any,
  context: __SerdeContext
): TransitGatewayConnectPeerAssociation => {
  return {
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
    TransitGatewayConnectPeerArn: __expectString(output.TransitGatewayConnectPeerArn),
  } as any;
};

const deserializeAws_restJson1TransitGatewayConnectPeerAssociationList = (
  output: any,
  context: __SerdeContext
): TransitGatewayConnectPeerAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransitGatewayConnectPeerAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TransitGatewayPeering = (output: any, context: __SerdeContext): TransitGatewayPeering => {
  return {
    Peering: output.Peering != null ? deserializeAws_restJson1Peering(output.Peering, context) : undefined,
    TransitGatewayArn: __expectString(output.TransitGatewayArn),
    TransitGatewayPeeringAttachmentId: __expectString(output.TransitGatewayPeeringAttachmentId),
  } as any;
};

const deserializeAws_restJson1TransitGatewayRegistration = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistration => {
  return {
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    State:
      output.State != null
        ? deserializeAws_restJson1TransitGatewayRegistrationStateReason(output.State, context)
        : undefined,
    TransitGatewayArn: __expectString(output.TransitGatewayArn),
  } as any;
};

const deserializeAws_restJson1TransitGatewayRegistrationList = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransitGatewayRegistration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TransitGatewayRegistrationStateReason = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistrationStateReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1TransitGatewayRouteTableAttachment = (
  output: any,
  context: __SerdeContext
): TransitGatewayRouteTableAttachment => {
  return {
    Attachment: output.Attachment != null ? deserializeAws_restJson1Attachment(output.Attachment, context) : undefined,
    PeeringId: __expectString(output.PeeringId),
    TransitGatewayRouteTableArn: __expectString(output.TransitGatewayRouteTableArn),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcAttachment = (output: any, context: __SerdeContext): VpcAttachment => {
  return {
    Attachment: output.Attachment != null ? deserializeAws_restJson1Attachment(output.Attachment, context) : undefined,
    Options: output.Options != null ? deserializeAws_restJson1VpcOptions(output.Options, context) : undefined,
    SubnetArns:
      output.SubnetArns != null ? deserializeAws_restJson1SubnetArnList(output.SubnetArns, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VpcOptions = (output: any, context: __SerdeContext): VpcOptions => {
  return {
    ApplianceModeSupport: __expectBoolean(output.ApplianceModeSupport),
    Ipv6Support: __expectBoolean(output.Ipv6Support),
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
