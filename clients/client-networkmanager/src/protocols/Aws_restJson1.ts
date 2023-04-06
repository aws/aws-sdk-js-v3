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

/**
 * serializeAws_restJson1AcceptAttachmentCommand
 */
export const se_AcceptAttachmentCommand = async (
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

/**
 * serializeAws_restJson1AssociateConnectPeerCommand
 */
export const se_AssociateConnectPeerCommand = async (
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

/**
 * serializeAws_restJson1AssociateCustomerGatewayCommand
 */
export const se_AssociateCustomerGatewayCommand = async (
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

/**
 * serializeAws_restJson1AssociateLinkCommand
 */
export const se_AssociateLinkCommand = async (
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

/**
 * serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand
 */
export const se_AssociateTransitGatewayConnectPeerCommand = async (
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

/**
 * serializeAws_restJson1CreateConnectAttachmentCommand
 */
export const se_CreateConnectAttachmentCommand = async (
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
    ...(input.Options != null && { Options: se_ConnectAttachmentOptions(input.Options, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateConnectPeerCommand
 */
export const se_CreateConnectPeerCommand = async (
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
    ...(input.BgpOptions != null && { BgpOptions: se_BgpOptions(input.BgpOptions, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ConnectAttachmentId != null && { ConnectAttachmentId: input.ConnectAttachmentId }),
    ...(input.CoreNetworkAddress != null && { CoreNetworkAddress: input.CoreNetworkAddress }),
    ...(input.InsideCidrBlocks != null && {
      InsideCidrBlocks: se_ConstrainedStringList(input.InsideCidrBlocks, context),
    }),
    ...(input.PeerAddress != null && { PeerAddress: input.PeerAddress }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateCoreNetworkCommand
 */
export const se_CreateCoreNetworkCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateDeviceCommand
 */
export const se_CreateDeviceCommand = async (
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
    ...(input.AWSLocation != null && { AWSLocation: se_AWSLocation(input.AWSLocation, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Location != null && { Location: se_Location(input.Location, context) }),
    ...(input.Model != null && { Model: input.Model }),
    ...(input.SerialNumber != null && { SerialNumber: input.SerialNumber }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateGlobalNetworkCommand
 */
export const se_CreateGlobalNetworkCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateLinkCommand
 */
export const se_CreateLinkCommand = async (
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
    ...(input.Bandwidth != null && { Bandwidth: se_Bandwidth(input.Bandwidth, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Provider != null && { Provider: input.Provider }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateSiteCommand
 */
export const se_CreateSiteCommand = async (
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
    ...(input.Location != null && { Location: se_Location(input.Location, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand
 */
export const se_CreateSiteToSiteVpnAttachmentCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateTransitGatewayPeeringCommand
 */
export const se_CreateTransitGatewayPeeringCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand
 */
export const se_CreateTransitGatewayRouteTableAttachmentCommand = async (
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateVpcAttachmentCommand
 */
export const se_CreateVpcAttachmentCommand = async (
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
    ...(input.Options != null && { Options: se_VpcOptions(input.Options, context) }),
    ...(input.SubnetArns != null && { SubnetArns: se_SubnetArnList(input.SubnetArns, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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

/**
 * serializeAws_restJson1DeleteAttachmentCommand
 */
export const se_DeleteAttachmentCommand = async (
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

/**
 * serializeAws_restJson1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
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

/**
 * serializeAws_restJson1DeleteConnectPeerCommand
 */
export const se_DeleteConnectPeerCommand = async (
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

/**
 * serializeAws_restJson1DeleteCoreNetworkCommand
 */
export const se_DeleteCoreNetworkCommand = async (
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

/**
 * serializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand
 */
export const se_DeleteCoreNetworkPolicyVersionCommand = async (
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

/**
 * serializeAws_restJson1DeleteDeviceCommand
 */
export const se_DeleteDeviceCommand = async (
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

/**
 * serializeAws_restJson1DeleteGlobalNetworkCommand
 */
export const se_DeleteGlobalNetworkCommand = async (
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

/**
 * serializeAws_restJson1DeleteLinkCommand
 */
export const se_DeleteLinkCommand = async (
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

/**
 * serializeAws_restJson1DeletePeeringCommand
 */
export const se_DeletePeeringCommand = async (
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

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
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

/**
 * serializeAws_restJson1DeleteSiteCommand
 */
export const se_DeleteSiteCommand = async (
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

/**
 * serializeAws_restJson1DeregisterTransitGatewayCommand
 */
export const se_DeregisterTransitGatewayCommand = async (
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

/**
 * serializeAws_restJson1DescribeGlobalNetworksCommand
 */
export const se_DescribeGlobalNetworksCommand = async (
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

/**
 * serializeAws_restJson1DisassociateConnectPeerCommand
 */
export const se_DisassociateConnectPeerCommand = async (
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

/**
 * serializeAws_restJson1DisassociateCustomerGatewayCommand
 */
export const se_DisassociateCustomerGatewayCommand = async (
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

/**
 * serializeAws_restJson1DisassociateLinkCommand
 */
export const se_DisassociateLinkCommand = async (
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

/**
 * serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand
 */
export const se_DisassociateTransitGatewayConnectPeerCommand = async (
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

/**
 * serializeAws_restJson1ExecuteCoreNetworkChangeSetCommand
 */
export const se_ExecuteCoreNetworkChangeSetCommand = async (
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

/**
 * serializeAws_restJson1GetConnectAttachmentCommand
 */
export const se_GetConnectAttachmentCommand = async (
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

/**
 * serializeAws_restJson1GetConnectionsCommand
 */
export const se_GetConnectionsCommand = async (
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

/**
 * serializeAws_restJson1GetConnectPeerCommand
 */
export const se_GetConnectPeerCommand = async (
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

/**
 * serializeAws_restJson1GetConnectPeerAssociationsCommand
 */
export const se_GetConnectPeerAssociationsCommand = async (
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

/**
 * serializeAws_restJson1GetCoreNetworkCommand
 */
export const se_GetCoreNetworkCommand = async (
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

/**
 * serializeAws_restJson1GetCoreNetworkChangeEventsCommand
 */
export const se_GetCoreNetworkChangeEventsCommand = async (
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

/**
 * serializeAws_restJson1GetCoreNetworkChangeSetCommand
 */
export const se_GetCoreNetworkChangeSetCommand = async (
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

/**
 * serializeAws_restJson1GetCoreNetworkPolicyCommand
 */
export const se_GetCoreNetworkPolicyCommand = async (
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

/**
 * serializeAws_restJson1GetCustomerGatewayAssociationsCommand
 */
export const se_GetCustomerGatewayAssociationsCommand = async (
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

/**
 * serializeAws_restJson1GetDevicesCommand
 */
export const se_GetDevicesCommand = async (
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

/**
 * serializeAws_restJson1GetLinkAssociationsCommand
 */
export const se_GetLinkAssociationsCommand = async (
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

/**
 * serializeAws_restJson1GetLinksCommand
 */
export const se_GetLinksCommand = async (
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

/**
 * serializeAws_restJson1GetNetworkResourceCountsCommand
 */
export const se_GetNetworkResourceCountsCommand = async (
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

/**
 * serializeAws_restJson1GetNetworkResourceRelationshipsCommand
 */
export const se_GetNetworkResourceRelationshipsCommand = async (
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

/**
 * serializeAws_restJson1GetNetworkResourcesCommand
 */
export const se_GetNetworkResourcesCommand = async (
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

/**
 * serializeAws_restJson1GetNetworkRoutesCommand
 */
export const se_GetNetworkRoutesCommand = async (
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
    ...(input.DestinationFilters != null && { DestinationFilters: se_FilterMap(input.DestinationFilters, context) }),
    ...(input.ExactCidrMatches != null && {
      ExactCidrMatches: se_ConstrainedStringList(input.ExactCidrMatches, context),
    }),
    ...(input.LongestPrefixMatches != null && {
      LongestPrefixMatches: se_ConstrainedStringList(input.LongestPrefixMatches, context),
    }),
    ...(input.PrefixListIds != null && { PrefixListIds: se_ConstrainedStringList(input.PrefixListIds, context) }),
    ...(input.RouteTableIdentifier != null && {
      RouteTableIdentifier: se_RouteTableIdentifier(input.RouteTableIdentifier, context),
    }),
    ...(input.States != null && { States: se_RouteStateList(input.States, context) }),
    ...(input.SubnetOfMatches != null && { SubnetOfMatches: se_ConstrainedStringList(input.SubnetOfMatches, context) }),
    ...(input.SupernetOfMatches != null && {
      SupernetOfMatches: se_ConstrainedStringList(input.SupernetOfMatches, context),
    }),
    ...(input.Types != null && { Types: se_RouteTypeList(input.Types, context) }),
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
 * serializeAws_restJson1GetNetworkTelemetryCommand
 */
export const se_GetNetworkTelemetryCommand = async (
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

/**
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
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

/**
 * serializeAws_restJson1GetRouteAnalysisCommand
 */
export const se_GetRouteAnalysisCommand = async (
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

/**
 * serializeAws_restJson1GetSitesCommand
 */
export const se_GetSitesCommand = async (
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

/**
 * serializeAws_restJson1GetSiteToSiteVpnAttachmentCommand
 */
export const se_GetSiteToSiteVpnAttachmentCommand = async (
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

/**
 * serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand
 */
export const se_GetTransitGatewayConnectPeerAssociationsCommand = async (
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

/**
 * serializeAws_restJson1GetTransitGatewayPeeringCommand
 */
export const se_GetTransitGatewayPeeringCommand = async (
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

/**
 * serializeAws_restJson1GetTransitGatewayRegistrationsCommand
 */
export const se_GetTransitGatewayRegistrationsCommand = async (
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

/**
 * serializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand
 */
export const se_GetTransitGatewayRouteTableAttachmentCommand = async (
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

/**
 * serializeAws_restJson1GetVpcAttachmentCommand
 */
export const se_GetVpcAttachmentCommand = async (
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

/**
 * serializeAws_restJson1ListAttachmentsCommand
 */
export const se_ListAttachmentsCommand = async (
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

/**
 * serializeAws_restJson1ListConnectPeersCommand
 */
export const se_ListConnectPeersCommand = async (
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

/**
 * serializeAws_restJson1ListCoreNetworkPolicyVersionsCommand
 */
export const se_ListCoreNetworkPolicyVersionsCommand = async (
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

/**
 * serializeAws_restJson1ListCoreNetworksCommand
 */
export const se_ListCoreNetworksCommand = async (
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

/**
 * serializeAws_restJson1ListOrganizationServiceAccessStatusCommand
 */
export const se_ListOrganizationServiceAccessStatusCommand = async (
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

/**
 * serializeAws_restJson1ListPeeringsCommand
 */
export const se_ListPeeringsCommand = async (
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
 * serializeAws_restJson1PutCoreNetworkPolicyCommand
 */
export const se_PutCoreNetworkPolicyCommand = async (
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

/**
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
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

/**
 * serializeAws_restJson1RegisterTransitGatewayCommand
 */
export const se_RegisterTransitGatewayCommand = async (
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

/**
 * serializeAws_restJson1RejectAttachmentCommand
 */
export const se_RejectAttachmentCommand = async (
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

/**
 * serializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand
 */
export const se_RestoreCoreNetworkPolicyVersionCommand = async (
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

/**
 * serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand
 */
export const se_StartOrganizationServiceAccessUpdateCommand = async (
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

/**
 * serializeAws_restJson1StartRouteAnalysisCommand
 */
export const se_StartRouteAnalysisCommand = async (
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
      Destination: se_RouteAnalysisEndpointOptionsSpecification(input.Destination, context),
    }),
    ...(input.IncludeReturnPath != null && { IncludeReturnPath: input.IncludeReturnPath }),
    ...(input.Source != null && { Source: se_RouteAnalysisEndpointOptionsSpecification(input.Source, context) }),
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
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
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

/**
 * serializeAws_restJson1UpdateCoreNetworkCommand
 */
export const se_UpdateCoreNetworkCommand = async (
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

/**
 * serializeAws_restJson1UpdateDeviceCommand
 */
export const se_UpdateDeviceCommand = async (
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
    ...(input.AWSLocation != null && { AWSLocation: se_AWSLocation(input.AWSLocation, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Location != null && { Location: se_Location(input.Location, context) }),
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

/**
 * serializeAws_restJson1UpdateGlobalNetworkCommand
 */
export const se_UpdateGlobalNetworkCommand = async (
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

/**
 * serializeAws_restJson1UpdateLinkCommand
 */
export const se_UpdateLinkCommand = async (
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
    ...(input.Bandwidth != null && { Bandwidth: se_Bandwidth(input.Bandwidth, context) }),
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

/**
 * serializeAws_restJson1UpdateNetworkResourceMetadataCommand
 */
export const se_UpdateNetworkResourceMetadataCommand = async (
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
    ...(input.Metadata != null && { Metadata: se_NetworkResourceMetadataMap(input.Metadata, context) }),
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

/**
 * serializeAws_restJson1UpdateSiteCommand
 */
export const se_UpdateSiteCommand = async (
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
    ...(input.Location != null && { Location: se_Location(input.Location, context) }),
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

/**
 * serializeAws_restJson1UpdateVpcAttachmentCommand
 */
export const se_UpdateVpcAttachmentCommand = async (
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
    ...(input.AddSubnetArns != null && { AddSubnetArns: se_SubnetArnList(input.AddSubnetArns, context) }),
    ...(input.Options != null && { Options: se_VpcOptions(input.Options, context) }),
    ...(input.RemoveSubnetArns != null && { RemoveSubnetArns: se_SubnetArnList(input.RemoveSubnetArns, context) }),
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

/**
 * deserializeAws_restJson1AcceptAttachmentCommand
 */
export const de_AcceptAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment != null) {
    contents.Attachment = de_Attachment(data.Attachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AcceptAttachmentCommandError
 */
const de_AcceptAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateConnectPeerCommand
 */
export const de_AssociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociation != null) {
    contents.ConnectPeerAssociation = de_ConnectPeerAssociation(data.ConnectPeerAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateConnectPeerCommandError
 */
const de_AssociateConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateCustomerGatewayCommand
 */
export const de_AssociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateCustomerGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociation != null) {
    contents.CustomerGatewayAssociation = de_CustomerGatewayAssociation(data.CustomerGatewayAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateCustomerGatewayCommandError
 */
const de_AssociateCustomerGatewayCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateLinkCommand
 */
export const de_AssociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociation != null) {
    contents.LinkAssociation = de_LinkAssociation(data.LinkAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLinkCommandError
 */
const de_AssociateLinkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand
 */
export const de_AssociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateTransitGatewayConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayConnectPeerAssociation != null) {
    contents.TransitGatewayConnectPeerAssociation = de_TransitGatewayConnectPeerAssociation(
      data.TransitGatewayConnectPeerAssociation,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError
 */
const de_AssociateTransitGatewayConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConnectAttachmentCommand
 */
export const de_CreateConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectAttachment != null) {
    contents.ConnectAttachment = de_ConnectAttachment(data.ConnectAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectAttachmentCommandError
 */
const de_CreateConnectAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_Connection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectionCommandError
 */
const de_CreateConnectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConnectPeerCommand
 */
export const de_CreateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer != null) {
    contents.ConnectPeer = de_ConnectPeer(data.ConnectPeer, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectPeerCommandError
 */
const de_CreateConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateCoreNetworkCommand
 */
export const de_CreateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = de_CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCoreNetworkCommandError
 */
const de_CreateCoreNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "CoreNetworkPolicyException":
    case "com.amazonaws.networkmanager#CoreNetworkPolicyException":
      throw await de_CoreNetworkPolicyExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDeviceCommand
 */
export const de_CreateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device != null) {
    contents.Device = de_Device(data.Device, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceCommandError
 */
const de_CreateDeviceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateGlobalNetworkCommand
 */
export const de_CreateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGlobalNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork != null) {
    contents.GlobalNetwork = de_GlobalNetwork(data.GlobalNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGlobalNetworkCommandError
 */
const de_CreateGlobalNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateLinkCommand
 */
export const de_CreateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link != null) {
    contents.Link = de_Link(data.Link, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLinkCommandError
 */
const de_CreateLinkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSiteCommand
 */
export const de_CreateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site != null) {
    contents.Site = de_Site(data.Site, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSiteCommandError
 */
const de_CreateSiteCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand
 */
export const de_CreateSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSiteToSiteVpnAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SiteToSiteVpnAttachment != null) {
    contents.SiteToSiteVpnAttachment = de_SiteToSiteVpnAttachment(data.SiteToSiteVpnAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommandError
 */
const de_CreateSiteToSiteVpnAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateTransitGatewayPeeringCommand
 */
export const de_CreateTransitGatewayPeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayPeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTransitGatewayPeeringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayPeering != null) {
    contents.TransitGatewayPeering = de_TransitGatewayPeering(data.TransitGatewayPeering, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTransitGatewayPeeringCommandError
 */
const de_CreateTransitGatewayPeeringCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand
 */
export const de_CreateTransitGatewayRouteTableAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTransitGatewayRouteTableAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRouteTableAttachment != null) {
    contents.TransitGatewayRouteTableAttachment = de_TransitGatewayRouteTableAttachment(
      data.TransitGatewayRouteTableAttachment,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommandError
 */
const de_CreateTransitGatewayRouteTableAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateVpcAttachmentCommand
 */
export const de_CreateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVpcAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment != null) {
    contents.VpcAttachment = de_VpcAttachment(data.VpcAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateVpcAttachmentCommandError
 */
const de_CreateVpcAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAttachmentCommand
 */
export const de_DeleteAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment != null) {
    contents.Attachment = de_Attachment(data.Attachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttachmentCommandError
 */
const de_DeleteAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_Connection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConnectPeerCommand
 */
export const de_DeleteConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer != null) {
    contents.ConnectPeer = de_ConnectPeer(data.ConnectPeer, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectPeerCommandError
 */
const de_DeleteConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCoreNetworkCommand
 */
export const de_DeleteCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = de_CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreNetworkCommandError
 */
const de_DeleteCoreNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand
 */
export const de_DeleteCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCoreNetworkPolicyVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = de_CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommandError
 */
const de_DeleteCoreNetworkPolicyVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDeviceCommand
 */
export const de_DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device != null) {
    contents.Device = de_Device(data.Device, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceCommandError
 */
const de_DeleteDeviceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteGlobalNetworkCommand
 */
export const de_DeleteGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGlobalNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork != null) {
    contents.GlobalNetwork = de_GlobalNetwork(data.GlobalNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGlobalNetworkCommandError
 */
const de_DeleteGlobalNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteLinkCommand
 */
export const de_DeleteLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link != null) {
    contents.Link = de_Link(data.Link, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLinkCommandError
 */
const de_DeleteLinkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeletePeeringCommand
 */
export const de_DeletePeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePeeringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Peering != null) {
    contents.Peering = de_Peering(data.Peering, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeletePeeringCommandError
 */
const de_DeletePeeringCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSiteCommand
 */
export const de_DeleteSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site != null) {
    contents.Site = de_Site(data.Site, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSiteCommandError
 */
const de_DeleteSiteCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeregisterTransitGatewayCommand
 */
export const de_DeregisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterTransitGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRegistration != null) {
    contents.TransitGatewayRegistration = de_TransitGatewayRegistration(data.TransitGatewayRegistration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterTransitGatewayCommandError
 */
const de_DeregisterTransitGatewayCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeGlobalNetworksCommand
 */
export const de_DescribeGlobalNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGlobalNetworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetworks != null) {
    contents.GlobalNetworks = de_GlobalNetworkList(data.GlobalNetworks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGlobalNetworksCommandError
 */
const de_DescribeGlobalNetworksCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateConnectPeerCommand
 */
export const de_DisassociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociation != null) {
    contents.ConnectPeerAssociation = de_ConnectPeerAssociation(data.ConnectPeerAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateConnectPeerCommandError
 */
const de_DisassociateConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateCustomerGatewayCommand
 */
export const de_DisassociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateCustomerGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociation != null) {
    contents.CustomerGatewayAssociation = de_CustomerGatewayAssociation(data.CustomerGatewayAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateCustomerGatewayCommandError
 */
const de_DisassociateCustomerGatewayCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateLinkCommand
 */
export const de_DisassociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociation != null) {
    contents.LinkAssociation = de_LinkAssociation(data.LinkAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLinkCommandError
 */
const de_DisassociateLinkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand
 */
export const de_DisassociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateTransitGatewayConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayConnectPeerAssociation != null) {
    contents.TransitGatewayConnectPeerAssociation = de_TransitGatewayConnectPeerAssociation(
      data.TransitGatewayConnectPeerAssociation,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError
 */
const de_DisassociateTransitGatewayConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommand
 */
export const de_ExecuteCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExecuteCoreNetworkChangeSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommandError
 */
const de_ExecuteCoreNetworkChangeSetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConnectAttachmentCommand
 */
export const de_GetConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectAttachment != null) {
    contents.ConnectAttachment = de_ConnectAttachment(data.ConnectAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectAttachmentCommandError
 */
const de_GetConnectAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConnectionsCommand
 */
export const de_GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = de_ConnectionList(data.Connections, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectionsCommandError
 */
const de_GetConnectionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConnectPeerCommand
 */
export const de_GetConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectPeerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer != null) {
    contents.ConnectPeer = de_ConnectPeer(data.ConnectPeer, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectPeerCommandError
 */
const de_GetConnectPeerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConnectPeerAssociationsCommand
 */
export const de_GetConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectPeerAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociations != null) {
    contents.ConnectPeerAssociations = de_ConnectPeerAssociationList(data.ConnectPeerAssociations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectPeerAssociationsCommandError
 */
const de_GetConnectPeerAssociationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCoreNetworkCommand
 */
export const de_GetCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = de_CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkCommandError
 */
const de_GetCoreNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCoreNetworkChangeEventsCommand
 */
export const de_GetCoreNetworkChangeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreNetworkChangeEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkChangeEvents != null) {
    contents.CoreNetworkChangeEvents = de_CoreNetworkChangeEventList(data.CoreNetworkChangeEvents, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkChangeEventsCommandError
 */
const de_GetCoreNetworkChangeEventsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCoreNetworkChangeSetCommand
 */
export const de_GetCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreNetworkChangeSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkChanges != null) {
    contents.CoreNetworkChanges = de_CoreNetworkChangeList(data.CoreNetworkChanges, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkChangeSetCommandError
 */
const de_GetCoreNetworkChangeSetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCoreNetworkPolicyCommand
 */
export const de_GetCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreNetworkPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = de_CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkPolicyCommandError
 */
const de_GetCoreNetworkPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCustomerGatewayAssociationsCommand
 */
export const de_GetCustomerGatewayAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCustomerGatewayAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociations != null) {
    contents.CustomerGatewayAssociations = de_CustomerGatewayAssociationList(data.CustomerGatewayAssociations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError
 */
const de_GetCustomerGatewayAssociationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDevicesCommand
 */
export const de_GetDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices != null) {
    contents.Devices = de_DeviceList(data.Devices, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDevicesCommandError
 */
const de_GetDevicesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetLinkAssociationsCommand
 */
export const de_GetLinkAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLinkAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociations != null) {
    contents.LinkAssociations = de_LinkAssociationList(data.LinkAssociations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLinkAssociationsCommandError
 */
const de_GetLinkAssociationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetLinksCommand
 */
export const de_GetLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLinksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Links != null) {
    contents.Links = de_LinkList(data.Links, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLinksCommandError
 */
const de_GetLinksCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetNetworkResourceCountsCommand
 */
export const de_GetNetworkResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkResourceCountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkResourceCounts != null) {
    contents.NetworkResourceCounts = de_NetworkResourceCountList(data.NetworkResourceCounts, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourceCountsCommandError
 */
const de_GetNetworkResourceCountsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetNetworkResourceRelationshipsCommand
 */
export const de_GetNetworkResourceRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkResourceRelationshipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Relationships != null) {
    contents.Relationships = de_RelationshipList(data.Relationships, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourceRelationshipsCommandError
 */
const de_GetNetworkResourceRelationshipsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetNetworkResourcesCommand
 */
export const de_GetNetworkResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkResources != null) {
    contents.NetworkResources = de_NetworkResourceList(data.NetworkResources, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourcesCommandError
 */
const de_GetNetworkResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetNetworkRoutesCommand
 */
export const de_GetNetworkRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkSegmentEdge != null) {
    contents.CoreNetworkSegmentEdge = de_CoreNetworkSegmentEdgeIdentifier(data.CoreNetworkSegmentEdge, context);
  }
  if (data.NetworkRoutes != null) {
    contents.NetworkRoutes = de_NetworkRouteList(data.NetworkRoutes, context);
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

/**
 * deserializeAws_restJson1GetNetworkRoutesCommandError
 */
const de_GetNetworkRoutesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetNetworkTelemetryCommand
 */
export const de_GetNetworkTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkTelemetryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkTelemetryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkTelemetry != null) {
    contents.NetworkTelemetry = de_NetworkTelemetryList(data.NetworkTelemetry, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkTelemetryCommandError
 */
const de_GetNetworkTelemetryCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
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

/**
 * deserializeAws_restJson1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetRouteAnalysisCommand
 */
export const de_GetRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRouteAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteAnalysis != null) {
    contents.RouteAnalysis = de_RouteAnalysis(data.RouteAnalysis, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRouteAnalysisCommandError
 */
const de_GetRouteAnalysisCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSitesCommand
 */
export const de_GetSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sites != null) {
    contents.Sites = de_SiteList(data.Sites, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSitesCommandError
 */
const de_GetSitesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommand
 */
export const de_GetSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSiteToSiteVpnAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SiteToSiteVpnAttachment != null) {
    contents.SiteToSiteVpnAttachment = de_SiteToSiteVpnAttachment(data.SiteToSiteVpnAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommandError
 */
const de_GetSiteToSiteVpnAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand
 */
export const de_GetTransitGatewayConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTransitGatewayConnectPeerAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TransitGatewayConnectPeerAssociations != null) {
    contents.TransitGatewayConnectPeerAssociations = de_TransitGatewayConnectPeerAssociationList(
      data.TransitGatewayConnectPeerAssociations,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError
 */
const de_GetTransitGatewayConnectPeerAssociationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTransitGatewayPeeringCommand
 */
export const de_GetTransitGatewayPeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayPeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTransitGatewayPeeringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayPeering != null) {
    contents.TransitGatewayPeering = de_TransitGatewayPeering(data.TransitGatewayPeering, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayPeeringCommandError
 */
const de_GetTransitGatewayPeeringCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTransitGatewayRegistrationsCommand
 */
export const de_GetTransitGatewayRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTransitGatewayRegistrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TransitGatewayRegistrations != null) {
    contents.TransitGatewayRegistrations = de_TransitGatewayRegistrationList(data.TransitGatewayRegistrations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError
 */
const de_GetTransitGatewayRegistrationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand
 */
export const de_GetTransitGatewayRouteTableAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTransitGatewayRouteTableAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRouteTableAttachment != null) {
    contents.TransitGatewayRouteTableAttachment = de_TransitGatewayRouteTableAttachment(
      data.TransitGatewayRouteTableAttachment,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommandError
 */
const de_GetTransitGatewayRouteTableAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetVpcAttachmentCommand
 */
export const de_GetVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVpcAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment != null) {
    contents.VpcAttachment = de_VpcAttachment(data.VpcAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetVpcAttachmentCommandError
 */
const de_GetVpcAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAttachmentsCommand
 */
export const de_ListAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAttachmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachments != null) {
    contents.Attachments = de_AttachmentList(data.Attachments, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAttachmentsCommandError
 */
const de_ListAttachmentsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConnectPeersCommand
 */
export const de_ListConnectPeersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectPeersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConnectPeersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeers != null) {
    contents.ConnectPeers = de_ConnectPeerSummaryList(data.ConnectPeers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectPeersCommandError
 */
const de_ListConnectPeersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommand
 */
export const de_ListCoreNetworkPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoreNetworkPolicyVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicyVersions != null) {
    contents.CoreNetworkPolicyVersions = de_CoreNetworkPolicyVersionList(data.CoreNetworkPolicyVersions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommandError
 */
const de_ListCoreNetworkPolicyVersionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListCoreNetworksCommand
 */
export const de_ListCoreNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoreNetworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworks != null) {
    contents.CoreNetworks = de_CoreNetworkSummaryList(data.CoreNetworks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreNetworksCommandError
 */
const de_ListCoreNetworksCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListOrganizationServiceAccessStatusCommand
 */
export const de_ListOrganizationServiceAccessStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationServiceAccessStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOrganizationServiceAccessStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.OrganizationStatus != null) {
    contents.OrganizationStatus = de_OrganizationStatus(data.OrganizationStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationServiceAccessStatusCommandError
 */
const de_ListOrganizationServiceAccessStatusCommandError = async (
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

/**
 * deserializeAws_restJson1ListPeeringsCommand
 */
export const de_ListPeeringsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPeeringsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPeeringsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Peerings != null) {
    contents.Peerings = de_PeeringList(data.Peerings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPeeringsCommandError
 */
const de_ListPeeringsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  if (data.TagList != null) {
    contents.TagList = de_TagList(data.TagList, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutCoreNetworkPolicyCommand
 */
export const de_PutCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutCoreNetworkPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = de_CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutCoreNetworkPolicyCommandError
 */
const de_PutCoreNetworkPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "CoreNetworkPolicyException":
    case "com.amazonaws.networkmanager#CoreNetworkPolicyException":
      throw await de_CoreNetworkPolicyExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterTransitGatewayCommand
 */
export const de_RegisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterTransitGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRegistration != null) {
    contents.TransitGatewayRegistration = de_TransitGatewayRegistration(data.TransitGatewayRegistration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterTransitGatewayCommandError
 */
const de_RegisterTransitGatewayCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RejectAttachmentCommand
 */
export const de_RejectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RejectAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment != null) {
    contents.Attachment = de_Attachment(data.Attachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RejectAttachmentCommandError
 */
const de_RejectAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand
 */
export const de_RestoreCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RestoreCoreNetworkPolicyVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy != null) {
    contents.CoreNetworkPolicy = de_CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommandError
 */
const de_RestoreCoreNetworkPolicyVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand
 */
export const de_StartOrganizationServiceAccessUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOrganizationServiceAccessUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartOrganizationServiceAccessUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.OrganizationStatus != null) {
    contents.OrganizationStatus = de_OrganizationStatus(data.OrganizationStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommandError
 */
const de_StartOrganizationServiceAccessUpdateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartRouteAnalysisCommand
 */
export const de_StartRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartRouteAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteAnalysis != null) {
    contents.RouteAnalysis = de_RouteAnalysis(data.RouteAnalysis, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartRouteAnalysisCommandError
 */
const de_StartRouteAnalysisCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_Connection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectionCommandError
 */
const de_UpdateConnectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateCoreNetworkCommand
 */
export const de_UpdateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCoreNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork != null) {
    contents.CoreNetwork = de_CoreNetwork(data.CoreNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCoreNetworkCommandError
 */
const de_UpdateCoreNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDeviceCommand
 */
export const de_UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device != null) {
    contents.Device = de_Device(data.Device, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeviceCommandError
 */
const de_UpdateDeviceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateGlobalNetworkCommand
 */
export const de_UpdateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGlobalNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork != null) {
    contents.GlobalNetwork = de_GlobalNetwork(data.GlobalNetwork, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalNetworkCommandError
 */
const de_UpdateGlobalNetworkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateLinkCommand
 */
export const de_UpdateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLinkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link != null) {
    contents.Link = de_Link(data.Link, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLinkCommandError
 */
const de_UpdateLinkCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateNetworkResourceMetadataCommand
 */
export const de_UpdateNetworkResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkResourceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNetworkResourceMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata != null) {
    contents.Metadata = de_NetworkResourceMetadataMap(data.Metadata, context);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkResourceMetadataCommandError
 */
const de_UpdateNetworkResourceMetadataCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSiteCommand
 */
export const de_UpdateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site != null) {
    contents.Site = de_Site(data.Site, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSiteCommandError
 */
const de_UpdateSiteCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateVpcAttachmentCommand
 */
export const de_UpdateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVpcAttachmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment != null) {
    contents.VpcAttachment = de_VpcAttachment(data.VpcAttachment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVpcAttachmentCommandError
 */
const de_UpdateVpcAttachmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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

/**
 * deserializeAws_restJson1CoreNetworkPolicyExceptionRes
 */
const de_CoreNetworkPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CoreNetworkPolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Errors != null) {
    contents.Errors = de_CoreNetworkPolicyErrorList(data.Errors, context);
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

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Context != null) {
    contents.Context = de_ExceptionContextMap(data.Context, context);
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

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Fields != null) {
    contents.Fields = de_ValidationExceptionFieldList(data.Fields, context);
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

/**
 * serializeAws_restJson1AWSLocation
 */
const se_AWSLocation = (input: AWSLocation, context: __SerdeContext): any => {
  return {
    ...(input.SubnetArn != null && { SubnetArn: input.SubnetArn }),
    ...(input.Zone != null && { Zone: input.Zone }),
  };
};

/**
 * serializeAws_restJson1Bandwidth
 */
const se_Bandwidth = (input: Bandwidth, context: __SerdeContext): any => {
  return {
    ...(input.DownloadSpeed != null && { DownloadSpeed: input.DownloadSpeed }),
    ...(input.UploadSpeed != null && { UploadSpeed: input.UploadSpeed }),
  };
};

/**
 * serializeAws_restJson1BgpOptions
 */
const se_BgpOptions = (input: BgpOptions, context: __SerdeContext): any => {
  return {
    ...(input.PeerAsn != null && { PeerAsn: input.PeerAsn }),
  };
};

/**
 * serializeAws_restJson1ConnectAttachmentOptions
 */
const se_ConnectAttachmentOptions = (input: ConnectAttachmentOptions, context: __SerdeContext): any => {
  return {
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

/**
 * serializeAws_restJson1ConstrainedStringList
 */
const se_ConstrainedStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CoreNetworkSegmentEdgeIdentifier
 */
const se_CoreNetworkSegmentEdgeIdentifier = (input: CoreNetworkSegmentEdgeIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CoreNetworkId != null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.EdgeLocation != null && { EdgeLocation: input.EdgeLocation }),
    ...(input.SegmentName != null && { SegmentName: input.SegmentName }),
  };
};

/**
 * serializeAws_restJson1FilterMap
 */
const se_FilterMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FilterValues(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Location
 */
const se_Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Latitude != null && { Latitude: input.Latitude }),
    ...(input.Longitude != null && { Longitude: input.Longitude }),
  };
};

/**
 * serializeAws_restJson1NetworkResourceMetadataMap
 */
const se_NetworkResourceMetadataMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification
 */
const se_RouteAnalysisEndpointOptionsSpecification = (
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

/**
 * serializeAws_restJson1RouteStateList
 */
const se_RouteStateList = (input: (RouteState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RouteTableIdentifier
 */
const se_RouteTableIdentifier = (input: RouteTableIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CoreNetworkSegmentEdge != null && {
      CoreNetworkSegmentEdge: se_CoreNetworkSegmentEdgeIdentifier(input.CoreNetworkSegmentEdge, context),
    }),
    ...(input.TransitGatewayRouteTableArn != null && {
      TransitGatewayRouteTableArn: input.TransitGatewayRouteTableArn,
    }),
  };
};

/**
 * serializeAws_restJson1RouteTypeList
 */
const se_RouteTypeList = (input: (RouteType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubnetArnList
 */
const se_SubnetArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1VpcOptions
 */
const se_VpcOptions = (input: VpcOptions, context: __SerdeContext): any => {
  return {
    ...(input.ApplianceModeSupport != null && { ApplianceModeSupport: input.ApplianceModeSupport }),
    ...(input.Ipv6Support != null && { Ipv6Support: input.Ipv6Support }),
  };
};

/**
 * deserializeAws_restJson1AccountStatus
 */
const de_AccountStatus = (output: any, context: __SerdeContext): AccountStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    SLRDeploymentStatus: __expectString(output.SLRDeploymentStatus),
  } as any;
};

/**
 * deserializeAws_restJson1AccountStatusList
 */
const de_AccountStatusList = (output: any, context: __SerdeContext): AccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
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
        ? de_ProposedSegmentChange(output.ProposedSegmentChange, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    SegmentName: __expectString(output.SegmentName),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AttachmentList
 */
const de_AttachmentList = (output: any, context: __SerdeContext): Attachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AWSLocation
 */
const de_AWSLocation = (output: any, context: __SerdeContext): AWSLocation => {
  return {
    SubnetArn: __expectString(output.SubnetArn),
    Zone: __expectString(output.Zone),
  } as any;
};

/**
 * deserializeAws_restJson1Bandwidth
 */
const de_Bandwidth = (output: any, context: __SerdeContext): Bandwidth => {
  return {
    DownloadSpeed: __expectInt32(output.DownloadSpeed),
    UploadSpeed: __expectInt32(output.UploadSpeed),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectAttachment
 */
const de_ConnectAttachment = (output: any, context: __SerdeContext): ConnectAttachment => {
  return {
    Attachment: output.Attachment != null ? de_Attachment(output.Attachment, context) : undefined,
    Options: output.Options != null ? de_ConnectAttachmentOptions(output.Options, context) : undefined,
    TransportAttachmentId: __expectString(output.TransportAttachmentId),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectAttachmentOptions
 */
const de_ConnectAttachmentOptions = (output: any, context: __SerdeContext): ConnectAttachmentOptions => {
  return {
    Protocol: __expectString(output.Protocol),
  } as any;
};

/**
 * deserializeAws_restJson1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
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
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectionHealth
 */
const de_ConnectionHealth = (output: any, context: __SerdeContext): ConnectionHealth => {
  return {
    Status: __expectString(output.Status),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectPeer
 */
const de_ConnectPeer = (output: any, context: __SerdeContext): ConnectPeer => {
  return {
    Configuration:
      output.Configuration != null ? de_ConnectPeerConfiguration(output.Configuration, context) : undefined,
    ConnectAttachmentId: __expectString(output.ConnectAttachmentId),
    ConnectPeerId: __expectString(output.ConnectPeerId),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectPeerAssociation
 */
const de_ConnectPeerAssociation = (output: any, context: __SerdeContext): ConnectPeerAssociation => {
  return {
    ConnectPeerId: __expectString(output.ConnectPeerId),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectPeerAssociationList
 */
const de_ConnectPeerAssociationList = (output: any, context: __SerdeContext): ConnectPeerAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectPeerAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectPeerBgpConfiguration
 */
const de_ConnectPeerBgpConfiguration = (output: any, context: __SerdeContext): ConnectPeerBgpConfiguration => {
  return {
    CoreNetworkAddress: __expectString(output.CoreNetworkAddress),
    CoreNetworkAsn: __expectLong(output.CoreNetworkAsn),
    PeerAddress: __expectString(output.PeerAddress),
    PeerAsn: __expectLong(output.PeerAsn),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectPeerBgpConfigurationList
 */
const de_ConnectPeerBgpConfigurationList = (output: any, context: __SerdeContext): ConnectPeerBgpConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectPeerBgpConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectPeerConfiguration
 */
const de_ConnectPeerConfiguration = (output: any, context: __SerdeContext): ConnectPeerConfiguration => {
  return {
    BgpConfigurations:
      output.BgpConfigurations != null
        ? de_ConnectPeerBgpConfigurationList(output.BgpConfigurations, context)
        : undefined,
    CoreNetworkAddress: __expectString(output.CoreNetworkAddress),
    InsideCidrBlocks:
      output.InsideCidrBlocks != null ? de_ConstrainedStringList(output.InsideCidrBlocks, context) : undefined,
    PeerAddress: __expectString(output.PeerAddress),
    Protocol: __expectString(output.Protocol),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectPeerSummary
 */
const de_ConnectPeerSummary = (output: any, context: __SerdeContext): ConnectPeerSummary => {
  return {
    ConnectAttachmentId: __expectString(output.ConnectAttachmentId),
    ConnectPeerId: __expectString(output.ConnectPeerId),
    ConnectPeerState: __expectString(output.ConnectPeerState),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectPeerSummaryList
 */
const de_ConnectPeerSummaryList = (output: any, context: __SerdeContext): ConnectPeerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectPeerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConstrainedStringList
 */
const de_ConstrainedStringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1CoreNetwork
 */
const de_CoreNetwork = (output: any, context: __SerdeContext): CoreNetwork => {
  return {
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Edges: output.Edges != null ? de_CoreNetworkEdgeList(output.Edges, context) : undefined,
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Segments: output.Segments != null ? de_CoreNetworkSegmentList(output.Segments, context) : undefined,
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkChange
 */
const de_CoreNetworkChange = (output: any, context: __SerdeContext): CoreNetworkChange => {
  return {
    Action: __expectString(output.Action),
    Identifier: __expectString(output.Identifier),
    IdentifierPath: __expectString(output.IdentifierPath),
    NewValues: output.NewValues != null ? de_CoreNetworkChangeValues(output.NewValues, context) : undefined,
    PreviousValues:
      output.PreviousValues != null ? de_CoreNetworkChangeValues(output.PreviousValues, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkChangeEvent
 */
const de_CoreNetworkChangeEvent = (output: any, context: __SerdeContext): CoreNetworkChangeEvent => {
  return {
    Action: __expectString(output.Action),
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    IdentifierPath: __expectString(output.IdentifierPath),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    Values: output.Values != null ? de_CoreNetworkChangeEventValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkChangeEventList
 */
const de_CoreNetworkChangeEventList = (output: any, context: __SerdeContext): CoreNetworkChangeEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkChangeEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreNetworkChangeEventValues
 */
const de_CoreNetworkChangeEventValues = (output: any, context: __SerdeContext): CoreNetworkChangeEventValues => {
  return {
    AttachmentId: __expectString(output.AttachmentId),
    Cidr: __expectString(output.Cidr),
    EdgeLocation: __expectString(output.EdgeLocation),
    SegmentName: __expectString(output.SegmentName),
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkChangeList
 */
const de_CoreNetworkChangeList = (output: any, context: __SerdeContext): CoreNetworkChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkChange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreNetworkChangeValues
 */
const de_CoreNetworkChangeValues = (output: any, context: __SerdeContext): CoreNetworkChangeValues => {
  return {
    Asn: __expectLong(output.Asn),
    Cidr: __expectString(output.Cidr),
    DestinationIdentifier: __expectString(output.DestinationIdentifier),
    EdgeLocations: output.EdgeLocations != null ? de_ExternalRegionCodeList(output.EdgeLocations, context) : undefined,
    InsideCidrBlocks:
      output.InsideCidrBlocks != null ? de_ConstrainedStringList(output.InsideCidrBlocks, context) : undefined,
    SegmentName: __expectString(output.SegmentName),
    SharedSegments:
      output.SharedSegments != null ? de_ConstrainedStringList(output.SharedSegments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkEdge
 */
const de_CoreNetworkEdge = (output: any, context: __SerdeContext): CoreNetworkEdge => {
  return {
    Asn: __expectLong(output.Asn),
    EdgeLocation: __expectString(output.EdgeLocation),
    InsideCidrBlocks:
      output.InsideCidrBlocks != null ? de_ConstrainedStringList(output.InsideCidrBlocks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkEdgeList
 */
const de_CoreNetworkEdgeList = (output: any, context: __SerdeContext): CoreNetworkEdge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkEdge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreNetworkPolicy
 */
const de_CoreNetworkPolicy = (output: any, context: __SerdeContext): CoreNetworkPolicy => {
  return {
    Alias: __expectString(output.Alias),
    ChangeSetState: __expectString(output.ChangeSetState),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    PolicyDocument: output.PolicyDocument != null ? new __LazyJsonString(output.PolicyDocument) : undefined,
    PolicyErrors: output.PolicyErrors != null ? de_CoreNetworkPolicyErrorList(output.PolicyErrors, context) : undefined,
    PolicyVersionId: __expectInt32(output.PolicyVersionId),
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkPolicyError
 */
const de_CoreNetworkPolicyError = (output: any, context: __SerdeContext): CoreNetworkPolicyError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkPolicyErrorList
 */
const de_CoreNetworkPolicyErrorList = (output: any, context: __SerdeContext): CoreNetworkPolicyError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkPolicyError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreNetworkPolicyVersion
 */
const de_CoreNetworkPolicyVersion = (output: any, context: __SerdeContext): CoreNetworkPolicyVersion => {
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

/**
 * deserializeAws_restJson1CoreNetworkPolicyVersionList
 */
const de_CoreNetworkPolicyVersionList = (output: any, context: __SerdeContext): CoreNetworkPolicyVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkPolicyVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreNetworkSegment
 */
const de_CoreNetworkSegment = (output: any, context: __SerdeContext): CoreNetworkSegment => {
  return {
    EdgeLocations: output.EdgeLocations != null ? de_ExternalRegionCodeList(output.EdgeLocations, context) : undefined,
    Name: __expectString(output.Name),
    SharedSegments:
      output.SharedSegments != null ? de_ConstrainedStringList(output.SharedSegments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkSegmentEdgeIdentifier
 */
const de_CoreNetworkSegmentEdgeIdentifier = (
  output: any,
  context: __SerdeContext
): CoreNetworkSegmentEdgeIdentifier => {
  return {
    CoreNetworkId: __expectString(output.CoreNetworkId),
    EdgeLocation: __expectString(output.EdgeLocation),
    SegmentName: __expectString(output.SegmentName),
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkSegmentList
 */
const de_CoreNetworkSegmentList = (output: any, context: __SerdeContext): CoreNetworkSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkSegment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreNetworkSummary
 */
const de_CoreNetworkSummary = (output: any, context: __SerdeContext): CoreNetworkSummary => {
  return {
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CoreNetworkSummaryList
 */
const de_CoreNetworkSummaryList = (output: any, context: __SerdeContext): CoreNetworkSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreNetworkSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomerGatewayAssociation
 */
const de_CustomerGatewayAssociation = (output: any, context: __SerdeContext): CustomerGatewayAssociation => {
  return {
    CustomerGatewayArn: __expectString(output.CustomerGatewayArn),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerGatewayAssociationList
 */
const de_CustomerGatewayAssociationList = (output: any, context: __SerdeContext): CustomerGatewayAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomerGatewayAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    AWSLocation: output.AWSLocation != null ? de_AWSLocation(output.AWSLocation, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DeviceArn: __expectString(output.DeviceArn),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Location: output.Location != null ? de_Location(output.Location, context) : undefined,
    Model: __expectString(output.Model),
    SerialNumber: __expectString(output.SerialNumber),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Vendor: __expectString(output.Vendor),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceList
 */
const de_DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExceptionContextMap
 */
const de_ExceptionContextMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExternalRegionCodeList
 */
const de_ExternalRegionCodeList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1GlobalNetwork
 */
const de_GlobalNetwork = (output: any, context: __SerdeContext): GlobalNetwork => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkArn: __expectString(output.GlobalNetworkArn),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GlobalNetworkList
 */
const de_GlobalNetworkList = (output: any, context: __SerdeContext): GlobalNetwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GlobalNetwork(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Link
 */
const de_Link = (output: any, context: __SerdeContext): Link => {
  return {
    Bandwidth: output.Bandwidth != null ? de_Bandwidth(output.Bandwidth, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkArn: __expectString(output.LinkArn),
    LinkId: __expectString(output.LinkId),
    Provider: __expectString(output.Provider),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1LinkAssociation
 */
const de_LinkAssociation = (output: any, context: __SerdeContext): LinkAssociation => {
  return {
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkAssociationState: __expectString(output.LinkAssociationState),
    LinkId: __expectString(output.LinkId),
  } as any;
};

/**
 * deserializeAws_restJson1LinkAssociationList
 */
const de_LinkAssociationList = (output: any, context: __SerdeContext): LinkAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LinkAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinkList
 */
const de_LinkList = (output: any, context: __SerdeContext): Link[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Link(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Location
 */
const de_Location = (output: any, context: __SerdeContext): Location => {
  return {
    Address: __expectString(output.Address),
    Latitude: __expectString(output.Latitude),
    Longitude: __expectString(output.Longitude),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkResource
 */
const de_NetworkResource = (output: any, context: __SerdeContext): NetworkResource => {
  return {
    AccountId: __expectString(output.AccountId),
    AwsRegion: __expectString(output.AwsRegion),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    Definition: __expectString(output.Definition),
    DefinitionTimestamp:
      output.DefinitionTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DefinitionTimestamp)))
        : undefined,
    Metadata: output.Metadata != null ? de_NetworkResourceMetadataMap(output.Metadata, context) : undefined,
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NetworkResourceCount
 */
const de_NetworkResourceCount = (output: any, context: __SerdeContext): NetworkResourceCount => {
  return {
    Count: __expectInt32(output.Count),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkResourceCountList
 */
const de_NetworkResourceCountList = (output: any, context: __SerdeContext): NetworkResourceCount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkResourceCount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkResourceList
 */
const de_NetworkResourceList = (output: any, context: __SerdeContext): NetworkResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkResourceMetadataMap
 */
const de_NetworkResourceMetadataMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1NetworkResourceSummary
 */
const de_NetworkResourceSummary = (output: any, context: __SerdeContext): NetworkResourceSummary => {
  return {
    Definition: __expectString(output.Definition),
    IsMiddlebox: __expectBoolean(output.IsMiddlebox),
    NameTag: __expectString(output.NameTag),
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkRoute
 */
const de_NetworkRoute = (output: any, context: __SerdeContext): NetworkRoute => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    Destinations:
      output.Destinations != null ? de_NetworkRouteDestinationList(output.Destinations, context) : undefined,
    PrefixListId: __expectString(output.PrefixListId),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkRouteDestination
 */
const de_NetworkRouteDestination = (output: any, context: __SerdeContext): NetworkRouteDestination => {
  return {
    CoreNetworkAttachmentId: __expectString(output.CoreNetworkAttachmentId),
    EdgeLocation: __expectString(output.EdgeLocation),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    SegmentName: __expectString(output.SegmentName),
    TransitGatewayAttachmentId: __expectString(output.TransitGatewayAttachmentId),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkRouteDestinationList
 */
const de_NetworkRouteDestinationList = (output: any, context: __SerdeContext): NetworkRouteDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkRouteDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkRouteList
 */
const de_NetworkRouteList = (output: any, context: __SerdeContext): NetworkRoute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkRoute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkTelemetry
 */
const de_NetworkTelemetry = (output: any, context: __SerdeContext): NetworkTelemetry => {
  return {
    AccountId: __expectString(output.AccountId),
    Address: __expectString(output.Address),
    AwsRegion: __expectString(output.AwsRegion),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    Health: output.Health != null ? de_ConnectionHealth(output.Health, context) : undefined,
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkTelemetryList
 */
const de_NetworkTelemetryList = (output: any, context: __SerdeContext): NetworkTelemetry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkTelemetry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationStatus
 */
const de_OrganizationStatus = (output: any, context: __SerdeContext): OrganizationStatus => {
  return {
    AccountStatusList:
      output.AccountStatusList != null ? de_AccountStatusList(output.AccountStatusList, context) : undefined,
    OrganizationAwsServiceAccessStatus: __expectString(output.OrganizationAwsServiceAccessStatus),
    OrganizationId: __expectString(output.OrganizationId),
    SLRDeploymentStatus: __expectString(output.SLRDeploymentStatus),
  } as any;
};

/**
 * deserializeAws_restJson1PathComponent
 */
const de_PathComponent = (output: any, context: __SerdeContext): PathComponent => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    Resource: output.Resource != null ? de_NetworkResourceSummary(output.Resource, context) : undefined,
    Sequence: __expectInt32(output.Sequence),
  } as any;
};

/**
 * deserializeAws_restJson1PathComponentList
 */
const de_PathComponentList = (output: any, context: __SerdeContext): PathComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PathComponent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Peering
 */
const de_Peering = (output: any, context: __SerdeContext): Peering => {
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
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PeeringList
 */
const de_PeeringList = (output: any, context: __SerdeContext): Peering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Peering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProposedSegmentChange
 */
const de_ProposedSegmentChange = (output: any, context: __SerdeContext): ProposedSegmentChange => {
  return {
    AttachmentPolicyRuleNumber: __expectInt32(output.AttachmentPolicyRuleNumber),
    SegmentName: __expectString(output.SegmentName),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReasonContextMap
 */
const de_ReasonContextMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Relationship
 */
const de_Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    From: __expectString(output.From),
    To: __expectString(output.To),
  } as any;
};

/**
 * deserializeAws_restJson1RelationshipList
 */
const de_RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Relationship(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteAnalysis
 */
const de_RouteAnalysis = (output: any, context: __SerdeContext): RouteAnalysis => {
  return {
    Destination: output.Destination != null ? de_RouteAnalysisEndpointOptions(output.Destination, context) : undefined,
    ForwardPath: output.ForwardPath != null ? de_RouteAnalysisPath(output.ForwardPath, context) : undefined,
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    IncludeReturnPath: __expectBoolean(output.IncludeReturnPath),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ReturnPath: output.ReturnPath != null ? de_RouteAnalysisPath(output.ReturnPath, context) : undefined,
    RouteAnalysisId: __expectString(output.RouteAnalysisId),
    Source: output.Source != null ? de_RouteAnalysisEndpointOptions(output.Source, context) : undefined,
    StartTimestamp:
      output.StartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
    Status: __expectString(output.Status),
    UseMiddleboxes: __expectBoolean(output.UseMiddleboxes),
  } as any;
};

/**
 * deserializeAws_restJson1RouteAnalysisCompletion
 */
const de_RouteAnalysisCompletion = (output: any, context: __SerdeContext): RouteAnalysisCompletion => {
  return {
    ReasonCode: __expectString(output.ReasonCode),
    ReasonContext: output.ReasonContext != null ? de_ReasonContextMap(output.ReasonContext, context) : undefined,
    ResultCode: __expectString(output.ResultCode),
  } as any;
};

/**
 * deserializeAws_restJson1RouteAnalysisEndpointOptions
 */
const de_RouteAnalysisEndpointOptions = (output: any, context: __SerdeContext): RouteAnalysisEndpointOptions => {
  return {
    IpAddress: __expectString(output.IpAddress),
    TransitGatewayArn: __expectString(output.TransitGatewayArn),
    TransitGatewayAttachmentArn: __expectString(output.TransitGatewayAttachmentArn),
  } as any;
};

/**
 * deserializeAws_restJson1RouteAnalysisPath
 */
const de_RouteAnalysisPath = (output: any, context: __SerdeContext): RouteAnalysisPath => {
  return {
    CompletionStatus:
      output.CompletionStatus != null ? de_RouteAnalysisCompletion(output.CompletionStatus, context) : undefined,
    Path: output.Path != null ? de_PathComponentList(output.Path, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Site
 */
const de_Site = (output: any, context: __SerdeContext): Site => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Location: output.Location != null ? de_Location(output.Location, context) : undefined,
    SiteArn: __expectString(output.SiteArn),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SiteList
 */
const de_SiteList = (output: any, context: __SerdeContext): Site[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Site(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SiteToSiteVpnAttachment
 */
const de_SiteToSiteVpnAttachment = (output: any, context: __SerdeContext): SiteToSiteVpnAttachment => {
  return {
    Attachment: output.Attachment != null ? de_Attachment(output.Attachment, context) : undefined,
    VpnConnectionArn: __expectString(output.VpnConnectionArn),
  } as any;
};

/**
 * deserializeAws_restJson1SubnetArnList
 */
const de_SubnetArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_restJson1TransitGatewayConnectPeerAssociation
 */
const de_TransitGatewayConnectPeerAssociation = (
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

/**
 * deserializeAws_restJson1TransitGatewayConnectPeerAssociationList
 */
const de_TransitGatewayConnectPeerAssociationList = (
  output: any,
  context: __SerdeContext
): TransitGatewayConnectPeerAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TransitGatewayConnectPeerAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TransitGatewayPeering
 */
const de_TransitGatewayPeering = (output: any, context: __SerdeContext): TransitGatewayPeering => {
  return {
    Peering: output.Peering != null ? de_Peering(output.Peering, context) : undefined,
    TransitGatewayArn: __expectString(output.TransitGatewayArn),
    TransitGatewayPeeringAttachmentId: __expectString(output.TransitGatewayPeeringAttachmentId),
  } as any;
};

/**
 * deserializeAws_restJson1TransitGatewayRegistration
 */
const de_TransitGatewayRegistration = (output: any, context: __SerdeContext): TransitGatewayRegistration => {
  return {
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    State: output.State != null ? de_TransitGatewayRegistrationStateReason(output.State, context) : undefined,
    TransitGatewayArn: __expectString(output.TransitGatewayArn),
  } as any;
};

/**
 * deserializeAws_restJson1TransitGatewayRegistrationList
 */
const de_TransitGatewayRegistrationList = (output: any, context: __SerdeContext): TransitGatewayRegistration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TransitGatewayRegistration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TransitGatewayRegistrationStateReason
 */
const de_TransitGatewayRegistrationStateReason = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistrationStateReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1TransitGatewayRouteTableAttachment
 */
const de_TransitGatewayRouteTableAttachment = (
  output: any,
  context: __SerdeContext
): TransitGatewayRouteTableAttachment => {
  return {
    Attachment: output.Attachment != null ? de_Attachment(output.Attachment, context) : undefined,
    PeeringId: __expectString(output.PeeringId),
    TransitGatewayRouteTableArn: __expectString(output.TransitGatewayRouteTableArn),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VpcAttachment
 */
const de_VpcAttachment = (output: any, context: __SerdeContext): VpcAttachment => {
  return {
    Attachment: output.Attachment != null ? de_Attachment(output.Attachment, context) : undefined,
    Options: output.Options != null ? de_VpcOptions(output.Options, context) : undefined,
    SubnetArns: output.SubnetArns != null ? de_SubnetArnList(output.SubnetArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VpcOptions
 */
const de_VpcOptions = (output: any, context: __SerdeContext): VpcOptions => {
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
