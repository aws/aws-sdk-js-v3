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
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
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
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "../commands/GetTransitGatewayRegistrationsCommand";
import { GetVpcAttachmentCommandInput, GetVpcAttachmentCommandOutput } from "../commands/GetVpcAttachmentCommand";
import { ListAttachmentsCommandInput, ListAttachmentsCommandOutput } from "../commands/ListAttachmentsCommand";
import { ListConnectPeersCommandInput, ListConnectPeersCommandOutput } from "../commands/ListConnectPeersCommand";
import {
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput,
} from "../commands/ListCoreNetworkPolicyVersionsCommand";
import { ListCoreNetworksCommandInput, ListCoreNetworksCommandOutput } from "../commands/ListCoreNetworksCommand";
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
  PathComponent,
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
  TransitGatewayRegistration,
  TransitGatewayRegistrationStateReason,
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
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectPeerId !== undefined && input.ConnectPeerId !== null && { ConnectPeerId: input.ConnectPeerId }),
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CustomerGatewayArn !== undefined &&
      input.CustomerGatewayArn !== null && { CustomerGatewayArn: input.CustomerGatewayArn }),
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
    ...(input.TransitGatewayConnectPeerArn !== undefined &&
      input.TransitGatewayConnectPeerArn !== null && {
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
    ...(input.CoreNetworkId !== undefined && input.CoreNetworkId !== null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.EdgeLocation !== undefined && input.EdgeLocation !== null && { EdgeLocation: input.EdgeLocation }),
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_restJson1ConnectAttachmentOptions(input.Options, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TransportAttachmentId !== undefined &&
      input.TransportAttachmentId !== null && { TransportAttachmentId: input.TransportAttachmentId }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectedDeviceId !== undefined &&
      input.ConnectedDeviceId !== null && { ConnectedDeviceId: input.ConnectedDeviceId }),
    ...(input.ConnectedLinkId !== undefined &&
      input.ConnectedLinkId !== null && { ConnectedLinkId: input.ConnectedLinkId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
    ...(input.BgpOptions !== undefined &&
      input.BgpOptions !== null && { BgpOptions: serializeAws_restJson1BgpOptions(input.BgpOptions, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ConnectAttachmentId !== undefined &&
      input.ConnectAttachmentId !== null && { ConnectAttachmentId: input.ConnectAttachmentId }),
    ...(input.CoreNetworkAddress !== undefined &&
      input.CoreNetworkAddress !== null && { CoreNetworkAddress: input.CoreNetworkAddress }),
    ...(input.InsideCidrBlocks !== undefined &&
      input.InsideCidrBlocks !== null && {
        InsideCidrBlocks: serializeAws_restJson1ConstrainedStringList(input.InsideCidrBlocks, context),
      }),
    ...(input.PeerAddress !== undefined && input.PeerAddress !== null && { PeerAddress: input.PeerAddress }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GlobalNetworkId !== undefined &&
      input.GlobalNetworkId !== null && { GlobalNetworkId: input.GlobalNetworkId }),
    ...(input.PolicyDocument !== undefined &&
      input.PolicyDocument !== null && { PolicyDocument: input.PolicyDocument }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AWSLocation !== undefined &&
      input.AWSLocation !== null && { AWSLocation: serializeAws_restJson1AWSLocation(input.AWSLocation, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
    ...(input.SerialNumber !== undefined && input.SerialNumber !== null && { SerialNumber: input.SerialNumber }),
    ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Vendor !== undefined && input.Vendor !== null && { Vendor: input.Vendor }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Bandwidth !== undefined &&
      input.Bandwidth !== null && { Bandwidth: serializeAws_restJson1Bandwidth(input.Bandwidth, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Provider !== undefined && input.Provider !== null && { Provider: input.Provider }),
    ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
    ...(input.CoreNetworkId !== undefined && input.CoreNetworkId !== null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VpnConnectionArn !== undefined &&
      input.VpnConnectionArn !== null && { VpnConnectionArn: input.VpnConnectionArn }),
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
    ...(input.CoreNetworkId !== undefined && input.CoreNetworkId !== null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_restJson1VpcOptions(input.Options, context) }),
    ...(input.SubnetArns !== undefined &&
      input.SubnetArns !== null && { SubnetArns: serializeAws_restJson1SubnetArnList(input.SubnetArns, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.VpcArn !== undefined && input.VpcArn !== null && { VpcArn: input.VpcArn }),
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
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
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
  if (input.ConnectPeerId !== undefined) {
    const labelValue: string = input.ConnectPeerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectPeerId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectPeerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectPeerId.");
  }
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  if (input.PolicyVersionId !== undefined) {
    const labelValue: string = input.PolicyVersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyVersionId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyVersionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PolicyVersionId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.LinkId !== undefined) {
    const labelValue: string = input.LinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LinkId.");
    }
    resolvedPath = resolvedPath.replace("{LinkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LinkId.");
  }
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.SiteId !== undefined) {
    const labelValue: string = input.SiteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SiteId.");
    }
    resolvedPath = resolvedPath.replace("{SiteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SiteId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.TransitGatewayArn !== undefined) {
    const labelValue: string = input.TransitGatewayArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TransitGatewayArn.");
    }
    resolvedPath = resolvedPath.replace("{TransitGatewayArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TransitGatewayArn.");
  }
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
  const query: any = {
    ...(input.GlobalNetworkIds !== undefined && {
      globalNetworkIds: (input.GlobalNetworkIds || []).map((_entry) => _entry as any),
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.ConnectPeerId !== undefined) {
    const labelValue: string = input.ConnectPeerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectPeerId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectPeerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectPeerId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.CustomerGatewayArn !== undefined) {
    const labelValue: string = input.CustomerGatewayArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CustomerGatewayArn.");
    }
    resolvedPath = resolvedPath.replace("{CustomerGatewayArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CustomerGatewayArn.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && { linkId: input.LinkId }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.TransitGatewayConnectPeerArn !== undefined) {
    const labelValue: string = input.TransitGatewayConnectPeerArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TransitGatewayConnectPeerArn.");
    }
    resolvedPath = resolvedPath.replace("{TransitGatewayConnectPeerArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TransitGatewayConnectPeerArn.");
  }
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  if (input.PolicyVersionId !== undefined) {
    const labelValue: string = input.PolicyVersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyVersionId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyVersionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PolicyVersionId.");
  }
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
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.ConnectionIds !== undefined && {
      connectionIds: (input.ConnectionIds || []).map((_entry) => _entry as any),
    }),
    ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.ConnectPeerId !== undefined) {
    const labelValue: string = input.ConnectPeerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectPeerId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectPeerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectPeerId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.ConnectPeerIds !== undefined && {
      connectPeerIds: (input.ConnectPeerIds || []).map((_entry) => _entry as any),
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
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

export const serializeAws_restJson1GetCoreNetworkChangeSetCommand = async (
  input: GetCoreNetworkChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}";
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  if (input.PolicyVersionId !== undefined) {
    const labelValue: string = input.PolicyVersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyVersionId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyVersionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PolicyVersionId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  const query: any = {
    ...(input.PolicyVersionId !== undefined && { policyVersionId: input.PolicyVersionId.toString() }),
    ...(input.Alias !== undefined && { alias: input.Alias }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.CustomerGatewayArns !== undefined && {
      customerGatewayArns: (input.CustomerGatewayArns || []).map((_entry) => _entry as any),
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.DeviceIds !== undefined && { deviceIds: (input.DeviceIds || []).map((_entry) => _entry as any) }),
    ...(input.SiteId !== undefined && { siteId: input.SiteId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
    ...(input.LinkId !== undefined && { linkId: input.LinkId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.LinkIds !== undefined && { linkIds: (input.LinkIds || []).map((_entry) => _entry as any) }),
    ...(input.SiteId !== undefined && { siteId: input.SiteId }),
    ...(input.Type !== undefined && { type: input.Type }),
    ...(input.Provider !== undefined && { provider: input.Provider }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.CoreNetworkId !== undefined && { coreNetworkId: input.CoreNetworkId }),
    ...(input.RegisteredGatewayArn !== undefined && { registeredGatewayArn: input.RegisteredGatewayArn }),
    ...(input.AwsRegion !== undefined && { awsRegion: input.AwsRegion }),
    ...(input.AccountId !== undefined && { accountId: input.AccountId }),
    ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
    ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.CoreNetworkId !== undefined && { coreNetworkId: input.CoreNetworkId }),
    ...(input.RegisteredGatewayArn !== undefined && { registeredGatewayArn: input.RegisteredGatewayArn }),
    ...(input.AwsRegion !== undefined && { awsRegion: input.AwsRegion }),
    ...(input.AccountId !== undefined && { accountId: input.AccountId }),
    ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
    ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationFilters !== undefined &&
      input.DestinationFilters !== null && {
        DestinationFilters: serializeAws_restJson1FilterMap(input.DestinationFilters, context),
      }),
    ...(input.ExactCidrMatches !== undefined &&
      input.ExactCidrMatches !== null && {
        ExactCidrMatches: serializeAws_restJson1ConstrainedStringList(input.ExactCidrMatches, context),
      }),
    ...(input.LongestPrefixMatches !== undefined &&
      input.LongestPrefixMatches !== null && {
        LongestPrefixMatches: serializeAws_restJson1ConstrainedStringList(input.LongestPrefixMatches, context),
      }),
    ...(input.PrefixListIds !== undefined &&
      input.PrefixListIds !== null && {
        PrefixListIds: serializeAws_restJson1ConstrainedStringList(input.PrefixListIds, context),
      }),
    ...(input.RouteTableIdentifier !== undefined &&
      input.RouteTableIdentifier !== null && {
        RouteTableIdentifier: serializeAws_restJson1RouteTableIdentifier(input.RouteTableIdentifier, context),
      }),
    ...(input.States !== undefined &&
      input.States !== null && { States: serializeAws_restJson1RouteStateList(input.States, context) }),
    ...(input.SubnetOfMatches !== undefined &&
      input.SubnetOfMatches !== null && {
        SubnetOfMatches: serializeAws_restJson1ConstrainedStringList(input.SubnetOfMatches, context),
      }),
    ...(input.SupernetOfMatches !== undefined &&
      input.SupernetOfMatches !== null && {
        SupernetOfMatches: serializeAws_restJson1ConstrainedStringList(input.SupernetOfMatches, context),
      }),
    ...(input.Types !== undefined &&
      input.Types !== null && { Types: serializeAws_restJson1RouteTypeList(input.Types, context) }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.CoreNetworkId !== undefined && { coreNetworkId: input.CoreNetworkId }),
    ...(input.RegisteredGatewayArn !== undefined && { registeredGatewayArn: input.RegisteredGatewayArn }),
    ...(input.AwsRegion !== undefined && { awsRegion: input.AwsRegion }),
    ...(input.AccountId !== undefined && { accountId: input.AccountId }),
    ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
    ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.RouteAnalysisId !== undefined) {
    const labelValue: string = input.RouteAnalysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteAnalysisId.");
    }
    resolvedPath = resolvedPath.replace("{RouteAnalysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteAnalysisId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.SiteIds !== undefined && { siteIds: (input.SiteIds || []).map((_entry) => _entry as any) }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.TransitGatewayConnectPeerArns !== undefined && {
      transitGatewayConnectPeerArns: (input.TransitGatewayConnectPeerArns || []).map((_entry) => _entry as any),
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1GetTransitGatewayRegistrationsCommand = async (
  input: GetTransitGatewayRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/global-networks/{GlobalNetworkId}/transit-gateway-registrations";
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  const query: any = {
    ...(input.TransitGatewayArns !== undefined && {
      transitGatewayArns: (input.TransitGatewayArns || []).map((_entry) => _entry as any),
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1GetVpcAttachmentCommand = async (
  input: GetVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vpc-attachments/{AttachmentId}";
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
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
  const query: any = {
    ...(input.CoreNetworkId !== undefined && { coreNetworkId: input.CoreNetworkId }),
    ...(input.AttachmentType !== undefined && { attachmentType: input.AttachmentType }),
    ...(input.EdgeLocation !== undefined && { edgeLocation: input.EdgeLocation }),
    ...(input.State !== undefined && { state: input.State }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  const query: any = {
    ...(input.CoreNetworkId !== undefined && { coreNetworkId: input.CoreNetworkId }),
    ...(input.ConnectAttachmentId !== undefined && { connectAttachmentId: input.ConnectAttachmentId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LatestVersionId !== undefined &&
      input.LatestVersionId !== null && { LatestVersionId: input.LatestVersionId }),
    ...(input.PolicyDocument !== undefined &&
      input.PolicyDocument !== null && { PolicyDocument: __LazyJsonString.fromObject(input.PolicyDocument) }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.PolicyDocument !== undefined &&
      input.PolicyDocument !== null && { PolicyDocument: __LazyJsonString.fromObject(input.PolicyDocument) }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TransitGatewayArn !== undefined &&
      input.TransitGatewayArn !== null && { TransitGatewayArn: input.TransitGatewayArn }),
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
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  if (input.PolicyVersionId !== undefined) {
    const labelValue: string = input.PolicyVersionId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PolicyVersionId.");
    }
    resolvedPath = resolvedPath.replace("{PolicyVersionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PolicyVersionId.");
  }
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Destination !== undefined &&
      input.Destination !== null && {
        Destination: serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification(input.Destination, context),
      }),
    ...(input.IncludeReturnPath !== undefined &&
      input.IncludeReturnPath !== null && { IncludeReturnPath: input.IncludeReturnPath }),
    ...(input.Source !== undefined &&
      input.Source !== null && {
        Source: serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification(input.Source, context),
      }),
    ...(input.UseMiddleboxes !== undefined &&
      input.UseMiddleboxes !== null && { UseMiddleboxes: input.UseMiddleboxes }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectedLinkId !== undefined &&
      input.ConnectedLinkId !== null && { ConnectedLinkId: input.ConnectedLinkId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.LinkId !== undefined && input.LinkId !== null && { LinkId: input.LinkId }),
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
  if (input.CoreNetworkId !== undefined) {
    const labelValue: string = input.CoreNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CoreNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{CoreNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CoreNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AWSLocation !== undefined &&
      input.AWSLocation !== null && { AWSLocation: serializeAws_restJson1AWSLocation(input.AWSLocation, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
    ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
    ...(input.SerialNumber !== undefined && input.SerialNumber !== null && { SerialNumber: input.SerialNumber }),
    ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Vendor !== undefined && input.Vendor !== null && { Vendor: input.Vendor }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.LinkId !== undefined) {
    const labelValue: string = input.LinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LinkId.");
    }
    resolvedPath = resolvedPath.replace("{LinkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LinkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Bandwidth !== undefined &&
      input.Bandwidth !== null && { Bandwidth: serializeAws_restJson1Bandwidth(input.Bandwidth, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Provider !== undefined && input.Provider !== null && { Provider: input.Provider }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata !== undefined &&
      input.Metadata !== null && {
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
  if (input.GlobalNetworkId !== undefined) {
    const labelValue: string = input.GlobalNetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GlobalNetworkId.");
    }
    resolvedPath = resolvedPath.replace("{GlobalNetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GlobalNetworkId.");
  }
  if (input.SiteId !== undefined) {
    const labelValue: string = input.SiteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SiteId.");
    }
    resolvedPath = resolvedPath.replace("{SiteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SiteId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Location !== undefined &&
      input.Location !== null && { Location: serializeAws_restJson1Location(input.Location, context) }),
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
  if (input.AttachmentId !== undefined) {
    const labelValue: string = input.AttachmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttachmentId.");
    }
    resolvedPath = resolvedPath.replace("{AttachmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttachmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AddSubnetArns !== undefined &&
      input.AddSubnetArns !== null && {
        AddSubnetArns: serializeAws_restJson1SubnetArnList(input.AddSubnetArns, context),
      }),
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_restJson1VpcOptions(input.Options, context) }),
    ...(input.RemoveSubnetArns !== undefined &&
      input.RemoveSubnetArns !== null && {
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
  const contents: AcceptAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment !== undefined && data.Attachment !== null) {
    contents.Attachment = deserializeAws_restJson1Attachment(data.Attachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1AssociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateConnectPeerCommandError(output, context);
  }
  const contents: AssociateConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeerAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociation !== undefined && data.ConnectPeerAssociation !== null) {
    contents.ConnectPeerAssociation = deserializeAws_restJson1ConnectPeerAssociation(
      data.ConnectPeerAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1AssociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateCustomerGatewayCommandError(output, context);
  }
  const contents: AssociateCustomerGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    CustomerGatewayAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociation !== undefined && data.CustomerGatewayAssociation !== null) {
    contents.CustomerGatewayAssociation = deserializeAws_restJson1CustomerGatewayAssociation(
      data.CustomerGatewayAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateCustomerGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1AssociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateLinkCommandError(output, context);
  }
  const contents: AssociateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    LinkAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociation !== undefined && data.LinkAssociation !== null) {
    contents.LinkAssociation = deserializeAws_restJson1LinkAssociation(data.LinkAssociation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError(output, context);
  }
  const contents: AssociateTransitGatewayConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransitGatewayConnectPeerAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayConnectPeerAssociation !== undefined && data.TransitGatewayConnectPeerAssociation !== null) {
    contents.TransitGatewayConnectPeerAssociation = deserializeAws_restJson1TransitGatewayConnectPeerAssociation(
      data.TransitGatewayConnectPeerAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTransitGatewayConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectAttachmentCommandError(output, context);
  }
  const contents: CreateConnectAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectAttachment !== undefined && data.ConnectAttachment !== null) {
    contents.ConnectAttachment = deserializeAws_restJson1ConnectAttachment(data.ConnectAttachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConnectAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectionCommandError(output, context);
  }
  const contents: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Connection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection !== undefined && data.Connection !== null) {
    contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectPeerCommandError(output, context);
  }
  const contents: CreateConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeer: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer !== undefined && data.ConnectPeer !== null) {
    contents.ConnectPeer = deserializeAws_restJson1ConnectPeer(data.ConnectPeer, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCoreNetworkCommandError(output, context);
  }
  const contents: CreateCoreNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork !== undefined && data.CoreNetwork !== null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeviceCommandError(output, context);
  }
  const contents: CreateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Device: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device !== undefined && data.Device !== null) {
    contents.Device = deserializeAws_restJson1Device(data.Device, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGlobalNetworkCommandError(output, context);
  }
  const contents: CreateGlobalNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    GlobalNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
    contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGlobalNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLinkCommandError(output, context);
  }
  const contents: CreateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    Link: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link !== undefined && data.Link !== null) {
    contents.Link = deserializeAws_restJson1Link(data.Link, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSiteCommandError(output, context);
  }
  const contents: CreateSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    Site: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommandError(output, context);
  }
  const contents: CreateSiteToSiteVpnAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    SiteToSiteVpnAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SiteToSiteVpnAttachment !== undefined && data.SiteToSiteVpnAttachment !== null) {
    contents.SiteToSiteVpnAttachment = deserializeAws_restJson1SiteToSiteVpnAttachment(
      data.SiteToSiteVpnAttachment,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcAttachmentCommandError(output, context);
  }
  const contents: CreateVpcAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    VpcAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment !== undefined && data.VpcAttachment !== null) {
    contents.VpcAttachment = deserializeAws_restJson1VpcAttachment(data.VpcAttachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVpcAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAttachmentCommandError(output, context);
  }
  const contents: DeleteAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment !== undefined && data.Attachment !== null) {
    contents.Attachment = deserializeAws_restJson1Attachment(data.Attachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectionCommandError(output, context);
  }
  const contents: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Connection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection !== undefined && data.Connection !== null) {
    contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectPeerCommandError(output, context);
  }
  const contents: DeleteConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeer: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer !== undefined && data.ConnectPeer !== null) {
    contents.ConnectPeer = deserializeAws_restJson1ConnectPeer(data.ConnectPeer, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreNetworkCommandError(output, context);
  }
  const contents: DeleteCoreNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork !== undefined && data.CoreNetwork !== null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommandError(output, context);
  }
  const contents: DeleteCoreNetworkPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy !== undefined && data.CoreNetworkPolicy !== null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeviceCommandError(output, context);
  }
  const contents: DeleteDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Device: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device !== undefined && data.Device !== null) {
    contents.Device = deserializeAws_restJson1Device(data.Device, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGlobalNetworkCommandError(output, context);
  }
  const contents: DeleteGlobalNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    GlobalNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
    contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGlobalNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLinkCommandError(output, context);
  }
  const contents: DeleteLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    Link: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link !== undefined && data.Link !== null) {
    contents.Link = deserializeAws_restJson1Link(data.Link, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
  }
  const contents: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSiteCommandError(output, context);
  }
  const contents: DeleteSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    Site: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeregisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterTransitGatewayCommandError(output, context);
  }
  const contents: DeregisterTransitGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransitGatewayRegistration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRegistration !== undefined && data.TransitGatewayRegistration !== null) {
    contents.TransitGatewayRegistration = deserializeAws_restJson1TransitGatewayRegistration(
      data.TransitGatewayRegistration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterTransitGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeGlobalNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGlobalNetworksCommandError(output, context);
  }
  const contents: DescribeGlobalNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    GlobalNetworks: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetworks !== undefined && data.GlobalNetworks !== null) {
    contents.GlobalNetworks = deserializeAws_restJson1GlobalNetworkList(data.GlobalNetworks, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGlobalNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateConnectPeerCommandError(output, context);
  }
  const contents: DisassociateConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeerAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociation !== undefined && data.ConnectPeerAssociation !== null) {
    contents.ConnectPeerAssociation = deserializeAws_restJson1ConnectPeerAssociation(
      data.ConnectPeerAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateCustomerGatewayCommandError(output, context);
  }
  const contents: DisassociateCustomerGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    CustomerGatewayAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociation !== undefined && data.CustomerGatewayAssociation !== null) {
    contents.CustomerGatewayAssociation = deserializeAws_restJson1CustomerGatewayAssociation(
      data.CustomerGatewayAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateCustomerGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateLinkCommandError(output, context);
  }
  const contents: DisassociateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    LinkAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociation !== undefined && data.LinkAssociation !== null) {
    contents.LinkAssociation = deserializeAws_restJson1LinkAssociation(data.LinkAssociation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError(output, context);
  }
  const contents: DisassociateTransitGatewayConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransitGatewayConnectPeerAssociation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayConnectPeerAssociation !== undefined && data.TransitGatewayConnectPeerAssociation !== null) {
    contents.TransitGatewayConnectPeerAssociation = deserializeAws_restJson1TransitGatewayConnectPeerAssociation(
      data.TransitGatewayConnectPeerAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommandError(output, context);
  }
  const contents: ExecuteCoreNetworkChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCoreNetworkChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectAttachmentCommandError(output, context);
  }
  const contents: GetConnectAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectAttachment !== undefined && data.ConnectAttachment !== null) {
    contents.ConnectAttachment = deserializeAws_restJson1ConnectAttachment(data.ConnectAttachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConnectAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectionsCommandError(output, context);
  }
  const contents: GetConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Connections: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections !== undefined && data.Connections !== null) {
    contents.Connections = deserializeAws_restJson1ConnectionList(data.Connections, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectPeerCommandError(output, context);
  }
  const contents: GetConnectPeerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeer: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeer !== undefined && data.ConnectPeer !== null) {
    contents.ConnectPeer = deserializeAws_restJson1ConnectPeer(data.ConnectPeer, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConnectPeerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectPeerAssociationsCommandError(output, context);
  }
  const contents: GetConnectPeerAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeerAssociations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeerAssociations !== undefined && data.ConnectPeerAssociations !== null) {
    contents.ConnectPeerAssociations = deserializeAws_restJson1ConnectPeerAssociationList(
      data.ConnectPeerAssociations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConnectPeerAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkCommandError(output, context);
  }
  const contents: GetCoreNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork !== undefined && data.CoreNetwork !== null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkChangeSetCommandError(output, context);
  }
  const contents: GetCoreNetworkChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkChanges: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkChanges !== undefined && data.CoreNetworkChanges !== null) {
    contents.CoreNetworkChanges = deserializeAws_restJson1CoreNetworkChangeList(data.CoreNetworkChanges, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCoreNetworkChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreNetworkPolicyCommandError(output, context);
  }
  const contents: GetCoreNetworkPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy !== undefined && data.CoreNetworkPolicy !== null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCoreNetworkPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetCustomerGatewayAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError(output, context);
  }
  const contents: GetCustomerGatewayAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CustomerGatewayAssociations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CustomerGatewayAssociations !== undefined && data.CustomerGatewayAssociations !== null) {
    contents.CustomerGatewayAssociations = deserializeAws_restJson1CustomerGatewayAssociationList(
      data.CustomerGatewayAssociations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCustomerGatewayAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevicesCommandError(output, context);
  }
  const contents: GetDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Devices: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices !== undefined && data.Devices !== null) {
    contents.Devices = deserializeAws_restJson1DeviceList(data.Devices, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLinkAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLinkAssociationsCommandError(output, context);
  }
  const contents: GetLinkAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LinkAssociations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LinkAssociations !== undefined && data.LinkAssociations !== null) {
    contents.LinkAssociations = deserializeAws_restJson1LinkAssociationList(data.LinkAssociations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLinkAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLinksCommandError(output, context);
  }
  const contents: GetLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    Links: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Links !== undefined && data.Links !== null) {
    contents.Links = deserializeAws_restJson1LinkList(data.Links, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLinksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetNetworkResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourceCountsCommandError(output, context);
  }
  const contents: GetNetworkResourceCountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NetworkResourceCounts: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkResourceCounts !== undefined && data.NetworkResourceCounts !== null) {
    contents.NetworkResourceCounts = deserializeAws_restJson1NetworkResourceCountList(
      data.NetworkResourceCounts,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNetworkResourceCountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetNetworkResourceRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourceRelationshipsCommandError(output, context);
  }
  const contents: GetNetworkResourceRelationshipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Relationships: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Relationships !== undefined && data.Relationships !== null) {
    contents.Relationships = deserializeAws_restJson1RelationshipList(data.Relationships, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNetworkResourceRelationshipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceRelationshipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetNetworkResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourcesCommandError(output, context);
  }
  const contents: GetNetworkResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NetworkResources: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkResources !== undefined && data.NetworkResources !== null) {
    contents.NetworkResources = deserializeAws_restJson1NetworkResourceList(data.NetworkResources, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNetworkResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetNetworkRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkRoutesCommandError(output, context);
  }
  const contents: GetNetworkRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkSegmentEdge: undefined,
    NetworkRoutes: undefined,
    RouteTableArn: undefined,
    RouteTableTimestamp: undefined,
    RouteTableType: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkSegmentEdge !== undefined && data.CoreNetworkSegmentEdge !== null) {
    contents.CoreNetworkSegmentEdge = deserializeAws_restJson1CoreNetworkSegmentEdgeIdentifier(
      data.CoreNetworkSegmentEdge,
      context
    );
  }
  if (data.NetworkRoutes !== undefined && data.NetworkRoutes !== null) {
    contents.NetworkRoutes = deserializeAws_restJson1NetworkRouteList(data.NetworkRoutes, context);
  }
  if (data.RouteTableArn !== undefined && data.RouteTableArn !== null) {
    contents.RouteTableArn = __expectString(data.RouteTableArn);
  }
  if (data.RouteTableTimestamp !== undefined && data.RouteTableTimestamp !== null) {
    contents.RouteTableTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.RouteTableTimestamp)));
  }
  if (data.RouteTableType !== undefined && data.RouteTableType !== null) {
    contents.RouteTableType = __expectString(data.RouteTableType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNetworkRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetNetworkTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkTelemetryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkTelemetryCommandError(output, context);
  }
  const contents: GetNetworkTelemetryCommandOutput = {
    $metadata: deserializeMetadata(output),
    NetworkTelemetry: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkTelemetry !== undefined && data.NetworkTelemetry !== null) {
    contents.NetworkTelemetry = deserializeAws_restJson1NetworkTelemetryList(data.NetworkTelemetry, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNetworkTelemetryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkTelemetryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcePolicyCommandError(output, context);
  }
  const contents: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    PolicyDocument: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PolicyDocument !== undefined && data.PolicyDocument !== null) {
    contents.PolicyDocument = new __LazyJsonString(data.PolicyDocument);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteAnalysisCommandError(output, context);
  }
  const contents: GetRouteAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    RouteAnalysis: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteAnalysis !== undefined && data.RouteAnalysis !== null) {
    contents.RouteAnalysis = deserializeAws_restJson1RouteAnalysis(data.RouteAnalysis, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRouteAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSitesCommandError(output, context);
  }
  const contents: GetSitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Sites: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sites !== undefined && data.Sites !== null) {
    contents.Sites = deserializeAws_restJson1SiteList(data.Sites, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommandError(output, context);
  }
  const contents: GetSiteToSiteVpnAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    SiteToSiteVpnAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SiteToSiteVpnAttachment !== undefined && data.SiteToSiteVpnAttachment !== null) {
    contents.SiteToSiteVpnAttachment = deserializeAws_restJson1SiteToSiteVpnAttachment(
      data.SiteToSiteVpnAttachment,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteToSiteVpnAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError(output, context);
  }
  const contents: GetTransitGatewayConnectPeerAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    TransitGatewayConnectPeerAssociations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TransitGatewayConnectPeerAssociations !== undefined && data.TransitGatewayConnectPeerAssociations !== null) {
    contents.TransitGatewayConnectPeerAssociations = deserializeAws_restJson1TransitGatewayConnectPeerAssociationList(
      data.TransitGatewayConnectPeerAssociations,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetTransitGatewayRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError(output, context);
  }
  const contents: GetTransitGatewayRegistrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    TransitGatewayRegistrations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TransitGatewayRegistrations !== undefined && data.TransitGatewayRegistrations !== null) {
    contents.TransitGatewayRegistrations = deserializeAws_restJson1TransitGatewayRegistrationList(
      data.TransitGatewayRegistrations,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTransitGatewayRegistrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcAttachmentCommandError(output, context);
  }
  const contents: GetVpcAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    VpcAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment !== undefined && data.VpcAttachment !== null) {
    contents.VpcAttachment = deserializeAws_restJson1VpcAttachment(data.VpcAttachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVpcAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttachmentsCommandError(output, context);
  }
  const contents: ListAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attachments: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachments !== undefined && data.Attachments !== null) {
    contents.Attachments = deserializeAws_restJson1AttachmentList(data.Attachments, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAttachmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListConnectPeersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectPeersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectPeersCommandError(output, context);
  }
  const contents: ListConnectPeersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectPeers: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectPeers !== undefined && data.ConnectPeers !== null) {
    contents.ConnectPeers = deserializeAws_restJson1ConnectPeerSummaryList(data.ConnectPeers, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConnectPeersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectPeersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommandError(output, context);
  }
  const contents: ListCoreNetworkPolicyVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkPolicyVersions: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicyVersions !== undefined && data.CoreNetworkPolicyVersions !== null) {
    contents.CoreNetworkPolicyVersions = deserializeAws_restJson1CoreNetworkPolicyVersionList(
      data.CoreNetworkPolicyVersions,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListCoreNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreNetworksCommandError(output, context);
  }
  const contents: ListCoreNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworks: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworks !== undefined && data.CoreNetworks !== null) {
    contents.CoreNetworks = deserializeAws_restJson1CoreNetworkSummaryList(data.CoreNetworks, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCoreNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    TagList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagList !== undefined && data.TagList !== null) {
    contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
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
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutCoreNetworkPolicyCommandError(output, context);
  }
  const contents: PutCoreNetworkPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy !== undefined && data.CoreNetworkPolicy !== null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutCoreNetworkPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCoreNetworkPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
  }
  const contents: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RegisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterTransitGatewayCommandError(output, context);
  }
  const contents: RegisterTransitGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransitGatewayRegistration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransitGatewayRegistration !== undefined && data.TransitGatewayRegistration !== null) {
    contents.TransitGatewayRegistration = deserializeAws_restJson1TransitGatewayRegistration(
      data.TransitGatewayRegistration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterTransitGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RejectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectAttachmentCommandError(output, context);
  }
  const contents: RejectAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attachment !== undefined && data.Attachment !== null) {
    contents.Attachment = deserializeAws_restJson1Attachment(data.Attachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RejectAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommandError(output, context);
  }
  const contents: RestoreCoreNetworkPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetworkPolicy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetworkPolicy !== undefined && data.CoreNetworkPolicy !== null) {
    contents.CoreNetworkPolicy = deserializeAws_restJson1CoreNetworkPolicy(data.CoreNetworkPolicy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRouteAnalysisCommandError(output, context);
  }
  const contents: StartRouteAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    RouteAnalysis: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteAnalysis !== undefined && data.RouteAnalysis !== null) {
    contents.RouteAnalysis = deserializeAws_restJson1RouteAnalysis(data.RouteAnalysis, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartRouteAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRouteAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectionCommandError(output, context);
  }
  const contents: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Connection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection !== undefined && data.Connection !== null) {
    contents.Connection = deserializeAws_restJson1Connection(data.Connection, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCoreNetworkCommandError(output, context);
  }
  const contents: UpdateCoreNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    CoreNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CoreNetwork !== undefined && data.CoreNetwork !== null) {
    contents.CoreNetwork = deserializeAws_restJson1CoreNetwork(data.CoreNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCoreNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeviceCommandError(output, context);
  }
  const contents: UpdateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Device: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Device !== undefined && data.Device !== null) {
    contents.Device = deserializeAws_restJson1Device(data.Device, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGlobalNetworkCommandError(output, context);
  }
  const contents: UpdateGlobalNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    GlobalNetwork: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalNetwork !== undefined && data.GlobalNetwork !== null) {
    contents.GlobalNetwork = deserializeAws_restJson1GlobalNetwork(data.GlobalNetwork, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGlobalNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLinkCommandError(output, context);
  }
  const contents: UpdateLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    Link: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Link !== undefined && data.Link !== null) {
    contents.Link = deserializeAws_restJson1Link(data.Link, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLinkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateNetworkResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkResourceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNetworkResourceMetadataCommandError(output, context);
  }
  const contents: UpdateNetworkResourceMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    Metadata: undefined,
    ResourceArn: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Metadata !== undefined && data.Metadata !== null) {
    contents.Metadata = deserializeAws_restJson1NetworkResourceMetadataMap(data.Metadata, context);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateNetworkResourceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkResourceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSiteCommandError(output, context);
  }
  const contents: UpdateSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    Site: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcAttachmentCommandError(output, context);
  }
  const contents: UpdateVpcAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    VpcAttachment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcAttachment !== undefined && data.VpcAttachment !== null) {
    contents.VpcAttachment = deserializeAws_restJson1VpcAttachment(data.VpcAttachment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVpcAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1CoreNetworkPolicyErrorList(data.Errors, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = deserializeAws_restJson1ExceptionContextMap(data.Context, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.LimitCode !== undefined && data.LimitCode !== null) {
    contents.LimitCode = __expectString(data.LimitCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
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
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
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
    ...(input.SubnetArn !== undefined && input.SubnetArn !== null && { SubnetArn: input.SubnetArn }),
    ...(input.Zone !== undefined && input.Zone !== null && { Zone: input.Zone }),
  };
};

const serializeAws_restJson1Bandwidth = (input: Bandwidth, context: __SerdeContext): any => {
  return {
    ...(input.DownloadSpeed !== undefined && input.DownloadSpeed !== null && { DownloadSpeed: input.DownloadSpeed }),
    ...(input.UploadSpeed !== undefined && input.UploadSpeed !== null && { UploadSpeed: input.UploadSpeed }),
  };
};

const serializeAws_restJson1BgpOptions = (input: BgpOptions, context: __SerdeContext): any => {
  return {
    ...(input.PeerAsn !== undefined && input.PeerAsn !== null && { PeerAsn: input.PeerAsn }),
  };
};

const serializeAws_restJson1ConnectAttachmentOptions = (
  input: ConnectAttachmentOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1ConstrainedStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CoreNetworkSegmentEdgeIdentifier = (
  input: CoreNetworkSegmentEdgeIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.CoreNetworkId !== undefined && input.CoreNetworkId !== null && { CoreNetworkId: input.CoreNetworkId }),
    ...(input.EdgeLocation !== undefined && input.EdgeLocation !== null && { EdgeLocation: input.EdgeLocation }),
    ...(input.SegmentName !== undefined && input.SegmentName !== null && { SegmentName: input.SegmentName }),
  };
};

const serializeAws_restJson1FilterMap = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1FilterValues(value, context),
    };
  }, {});
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
    ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
  };
};

const serializeAws_restJson1NetworkResourceMetadataMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1RouteAnalysisEndpointOptionsSpecification = (
  input: RouteAnalysisEndpointOptionsSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
    ...(input.TransitGatewayAttachmentArn !== undefined &&
      input.TransitGatewayAttachmentArn !== null && { TransitGatewayAttachmentArn: input.TransitGatewayAttachmentArn }),
  };
};

const serializeAws_restJson1RouteStateList = (input: (RouteState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RouteTableIdentifier = (input: RouteTableIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CoreNetworkSegmentEdge !== undefined &&
      input.CoreNetworkSegmentEdge !== null && {
        CoreNetworkSegmentEdge: serializeAws_restJson1CoreNetworkSegmentEdgeIdentifier(
          input.CoreNetworkSegmentEdge,
          context
        ),
      }),
    ...(input.TransitGatewayRouteTableArn !== undefined &&
      input.TransitGatewayRouteTableArn !== null && { TransitGatewayRouteTableArn: input.TransitGatewayRouteTableArn }),
  };
};

const serializeAws_restJson1RouteTypeList = (input: (RouteType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SubnetArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1VpcOptions = (input: VpcOptions, context: __SerdeContext): any => {
  return {
    ...(input.Ipv6Support !== undefined && input.Ipv6Support !== null && { Ipv6Support: input.Ipv6Support }),
  };
};

const deserializeAws_restJson1Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    AttachmentId: __expectString(output.AttachmentId),
    AttachmentPolicyRuleNumber: __expectInt32(output.AttachmentPolicyRuleNumber),
    AttachmentType: __expectString(output.AttachmentType),
    CoreNetworkArn: __expectString(output.CoreNetworkArn),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProposedSegmentChange:
      output.ProposedSegmentChange !== undefined && output.ProposedSegmentChange !== null
        ? deserializeAws_restJson1ProposedSegmentChange(output.ProposedSegmentChange, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    SegmentName: __expectString(output.SegmentName),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
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
    Attachment:
      output.Attachment !== undefined && output.Attachment !== null
        ? deserializeAws_restJson1Attachment(output.Attachment, context)
        : undefined,
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1ConnectAttachmentOptions(output.Options, context)
        : undefined,
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkId: __expectString(output.LinkId),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectionHealth = (output: any, context: __SerdeContext): ConnectionHealth => {
  return {
    Status: __expectString(output.Status),
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp)))
        : undefined,
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
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_restJson1ConnectPeerConfiguration(output.Configuration, context)
        : undefined,
    ConnectAttachmentId: __expectString(output.ConnectAttachmentId),
    ConnectPeerId: __expectString(output.ConnectPeerId),
    CoreNetworkId: __expectString(output.CoreNetworkId),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
      output.BgpConfigurations !== undefined && output.BgpConfigurations !== null
        ? deserializeAws_restJson1ConnectPeerBgpConfigurationList(output.BgpConfigurations, context)
        : undefined,
    CoreNetworkAddress: __expectString(output.CoreNetworkAddress),
    InsideCidrBlocks:
      output.InsideCidrBlocks !== undefined && output.InsideCidrBlocks !== null
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    EdgeLocation: __expectString(output.EdgeLocation),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    Edges:
      output.Edges !== undefined && output.Edges !== null
        ? deserializeAws_restJson1CoreNetworkEdgeList(output.Edges, context)
        : undefined,
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Segments:
      output.Segments !== undefined && output.Segments !== null
        ? deserializeAws_restJson1CoreNetworkSegmentList(output.Segments, context)
        : undefined,
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkChange = (output: any, context: __SerdeContext): CoreNetworkChange => {
  return {
    Action: __expectString(output.Action),
    Identifier: __expectString(output.Identifier),
    NewValues:
      output.NewValues !== undefined && output.NewValues !== null
        ? deserializeAws_restJson1CoreNetworkChangeValues(output.NewValues, context)
        : undefined,
    PreviousValues:
      output.PreviousValues !== undefined && output.PreviousValues !== null
        ? deserializeAws_restJson1CoreNetworkChangeValues(output.PreviousValues, context)
        : undefined,
    Type: __expectString(output.Type),
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
      output.EdgeLocations !== undefined && output.EdgeLocations !== null
        ? deserializeAws_restJson1ExternalRegionCodeList(output.EdgeLocations, context)
        : undefined,
    InsideCidrBlocks:
      output.InsideCidrBlocks !== undefined && output.InsideCidrBlocks !== null
        ? deserializeAws_restJson1ConstrainedStringList(output.InsideCidrBlocks, context)
        : undefined,
    SegmentName: __expectString(output.SegmentName),
    SharedSegments:
      output.SharedSegments !== undefined && output.SharedSegments !== null
        ? deserializeAws_restJson1ConstrainedStringList(output.SharedSegments, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CoreNetworkEdge = (output: any, context: __SerdeContext): CoreNetworkEdge => {
  return {
    Asn: __expectLong(output.Asn),
    EdgeLocation: __expectString(output.EdgeLocation),
    InsideCidrBlocks:
      output.InsideCidrBlocks !== undefined && output.InsideCidrBlocks !== null
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    PolicyDocument:
      output.PolicyDocument !== undefined && output.PolicyDocument !== null
        ? new __LazyJsonString(output.PolicyDocument)
        : undefined,
    PolicyErrors:
      output.PolicyErrors !== undefined && output.PolicyErrors !== null
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
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
      output.EdgeLocations !== undefined && output.EdgeLocations !== null
        ? deserializeAws_restJson1ExternalRegionCodeList(output.EdgeLocations, context)
        : undefined,
    Name: __expectString(output.Name),
    SharedSegments:
      output.SharedSegments !== undefined && output.SharedSegments !== null
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
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
      output.AWSLocation !== undefined && output.AWSLocation !== null
        ? deserializeAws_restJson1AWSLocation(output.AWSLocation, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    DeviceArn: __expectString(output.DeviceArn),
    DeviceId: __expectString(output.DeviceId),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1Location(output.Location, context)
        : undefined,
    Model: __expectString(output.Model),
    SerialNumber: __expectString(output.SerialNumber),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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

const deserializeAws_restJson1ExceptionContextMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkArn: __expectString(output.GlobalNetworkArn),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
    Bandwidth:
      output.Bandwidth !== undefined && output.Bandwidth !== null
        ? deserializeAws_restJson1Bandwidth(output.Bandwidth, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    LinkArn: __expectString(output.LinkArn),
    LinkId: __expectString(output.LinkId),
    Provider: __expectString(output.Provider),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
      output.DefinitionTimestamp !== undefined && output.DefinitionTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DefinitionTimestamp)))
        : undefined,
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_restJson1NetworkResourceMetadataMap(output.Metadata, context)
        : undefined,
    RegisteredGatewayArn: __expectString(output.RegisteredGatewayArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
      output.Destinations !== undefined && output.Destinations !== null
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
    Health:
      output.Health !== undefined && output.Health !== null
        ? deserializeAws_restJson1ConnectionHealth(output.Health, context)
        : undefined,
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

const deserializeAws_restJson1PathComponent = (output: any, context: __SerdeContext): PathComponent => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    Resource:
      output.Resource !== undefined && output.Resource !== null
        ? deserializeAws_restJson1NetworkResourceSummary(output.Resource, context)
        : undefined,
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

const deserializeAws_restJson1ProposedSegmentChange = (output: any, context: __SerdeContext): ProposedSegmentChange => {
  return {
    AttachmentPolicyRuleNumber: __expectInt32(output.AttachmentPolicyRuleNumber),
    SegmentName: __expectString(output.SegmentName),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ReasonContextMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_restJson1RouteAnalysisEndpointOptions(output.Destination, context)
        : undefined,
    ForwardPath:
      output.ForwardPath !== undefined && output.ForwardPath !== null
        ? deserializeAws_restJson1RouteAnalysisPath(output.ForwardPath, context)
        : undefined,
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    IncludeReturnPath: __expectBoolean(output.IncludeReturnPath),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ReturnPath:
      output.ReturnPath !== undefined && output.ReturnPath !== null
        ? deserializeAws_restJson1RouteAnalysisPath(output.ReturnPath, context)
        : undefined,
    RouteAnalysisId: __expectString(output.RouteAnalysisId),
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1RouteAnalysisEndpointOptions(output.Source, context)
        : undefined,
    StartTimestamp:
      output.StartTimestamp !== undefined && output.StartTimestamp !== null
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
      output.ReasonContext !== undefined && output.ReasonContext !== null
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
      output.CompletionStatus !== undefined && output.CompletionStatus !== null
        ? deserializeAws_restJson1RouteAnalysisCompletion(output.CompletionStatus, context)
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? deserializeAws_restJson1PathComponentList(output.Path, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Site = (output: any, context: __SerdeContext): Site => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    Description: __expectString(output.Description),
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1Location(output.Location, context)
        : undefined,
    SiteArn: __expectString(output.SiteArn),
    SiteId: __expectString(output.SiteId),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagList(output.Tags, context)
        : undefined,
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
    Attachment:
      output.Attachment !== undefined && output.Attachment !== null
        ? deserializeAws_restJson1Attachment(output.Attachment, context)
        : undefined,
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

const deserializeAws_restJson1TransitGatewayRegistration = (
  output: any,
  context: __SerdeContext
): TransitGatewayRegistration => {
  return {
    GlobalNetworkId: __expectString(output.GlobalNetworkId),
    State:
      output.State !== undefined && output.State !== null
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
    Attachment:
      output.Attachment !== undefined && output.Attachment !== null
        ? deserializeAws_restJson1Attachment(output.Attachment, context)
        : undefined,
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1VpcOptions(output.Options, context)
        : undefined,
    SubnetArns:
      output.SubnetArns !== undefined && output.SubnetArns !== null
        ? deserializeAws_restJson1SubnetArnList(output.SubnetArns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VpcOptions = (output: any, context: __SerdeContext): VpcOptions => {
  return {
    Ipv6Support: __expectBoolean(output.Ipv6Support),
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
